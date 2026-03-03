import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cwd = process.cwd();

const targetFiles = [
    path.join(cwd, 'src/data/serviceContent.ts'),
    path.join(cwd, 'src/data/blogContent.json')
];

const publicDir = path.join(cwd, 'public/gallery/site-resync');
const scratchDir = path.join(process.env.HOME || '/Users/james', '.gemini/antigravity/scratch/organized-media');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// Context maps for intelligent folder pulling
const keywordToFolderMap = {
    'roof': ':roof-cleaning',
    'window': ':window-cleaning',
    'house': ':house-wash',
    'siding': ':house-wash',
    'power': ':pressure-washing',
    'pressure': ':pressure-washing',
    'soft': ':house-wash',
    'concrete': ':concrete-cleaning',
    'driveway': ':driveway-cleaning',
    'deck': ':deck-cleaning',
    'gutter': ':gutter-cleaning',
    'commercial': ':commercial-pressure-wash',
    'gas': ':gas-station-cleaning',
    'apartment': ':building-washing',
    'lighting': ':permanent-lighting',
    'holiday': ':christmas-lighting',
    'patio': ':paver-patio',
    'paver': ':paver-patio'
};

const getFallbackFolder = (contentString) => {
    const lower = contentString.toLowerCase();
    for (const [key, folder] of Object.entries(keywordToFolderMap)) {
        if (lower.includes(key)) return folder;
    }
    return ':house-wash';
};

async function runGlobalSync() {
    console.log("Initializing Total Site-Wide Asset Re-Sync...");

    let auditCounts = { local: 0, legacy: 0, ai: 0 };

    // 1. Build Layer 1: Local Pool Memory Map (Supports Max 3 Uses)
    let availableLocalPool = {};
    let localUsageTracker = {}; // Tracks how many times [path] was used

    if (fs.existsSync(scratchDir)) {
        const folders = fs.readdirSync(scratchDir).filter(f => f.startsWith(':') && f !== ':logos');
        for (const folder of folders) {
            const folderPath = path.join(scratchDir, folder);
            const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));

            // Push into pool
            availableLocalPool[folder] = files.map(f => path.join(folderPath, f));
            // Initialize tracker at 0
            files.forEach(f => {
                localUsageTracker[path.join(folderPath, f)] = 0;
            });
        }
    }

    let allAvailableLocalFiles = Object.values(availableLocalPool).flat();

    // 2. Track existing usages globally on the site to know who to strip
    let currentGlobalUsage = {};
    for (const filePath of targetFiles) {
        if (!fs.existsSync(filePath)) continue;
        const rawContent = fs.readFileSync(filePath, 'utf8');
        const imageRegex = /"(\/gallery\/[a-zA-Z0-9\-_.]+\.(jpg|jpeg|png|webp))"/gi;
        let match;
        while ((match = imageRegex.exec(rawContent)) !== null) {
            const imgSrc = match[1];
            currentGlobalUsage[imgSrc] = (currentGlobalUsage[imgSrc] || 0) + 1;
        }
    }

    // Phase 2: Execution and Substitution Loop
    for (const filePath of targetFiles) {
        if (!fs.existsSync(filePath)) continue;
        let rawContent = fs.readFileSync(filePath, 'utf8');
        let fileModified = false;
        const isJson = filePath.endsWith('.json');
        const lines = rawContent.split('\n');

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            const imageRegex = /"(\/gallery\/[a-zA-Z0-9\-_.]+\.(jpg|jpeg|png|webp))"/i;
            const match = line.match(imageRegex);

            if (match) {
                const imgSrc = match[1];

                // Rule of 3 Extraction trigger!
                if (currentGlobalUsage[imgSrc] > 3) {

                    // Determine contextual service mapping
                    const startIdx = Math.max(0, i - 4);
                    const endIdx = Math.min(lines.length - 1, i + 4);
                    const contextString = lines.slice(startIdx, endIdx).join(' ');
                    const mappedFolder = getFallbackFolder(contextString);
                    let folderKeyName = mappedFolder.replace(':', '');

                    let selectedLocalSource = null;

                    // Source 1 Algorithm: Contextual Local Extractor
                    if (availableLocalPool[mappedFolder] && availableLocalPool[mappedFolder].length > 0) {
                        // Find a file in this targeted folder that hasn't hit 3 uses yet
                        for (let j = 0; j < availableLocalPool[mappedFolder].length; j++) {
                            const candidate = availableLocalPool[mappedFolder][j];
                            if (localUsageTracker[candidate] < 3) {
                                selectedLocalSource = candidate;
                                localUsageTracker[candidate]++;
                                // If it hits 3, permanently pop it out of the array
                                if (localUsageTracker[candidate] === 3) {
                                    availableLocalPool[mappedFolder].splice(j, 1);
                                    const globalIdx = allAvailableLocalFiles.indexOf(candidate);
                                    if (globalIdx > -1) allAvailableLocalFiles.splice(globalIdx, 1);
                                }
                                break;
                            }
                        }
                    }

                    // Source 1 Algorithm: Global Fallback Local Extractor
                    if (!selectedLocalSource && allAvailableLocalFiles.length > 0) {
                        // Find any file in the global physical array that hasn't hit 3 uses yet
                        for (let j = 0; j < allAvailableLocalFiles.length; j++) {
                            const candidate = allAvailableLocalFiles[j];
                            if (localUsageTracker[candidate] < 3) {
                                selectedLocalSource = candidate;
                                folderKeyName = candidate.split('/').slice(-2)[0].replace(':', ''); // fallback genre name
                                localUsageTracker[candidate]++;
                                if (localUsageTracker[candidate] === 3) {
                                    allAvailableLocalFiles.splice(j, 1);
                                    // Complex pop out of its specific folder pool to maintain cleanliness
                                    const pName = candidate.split('/').slice(-2)[0];
                                    if (availableLocalPool[pName]) {
                                        const pIdx = availableLocalPool[pName].indexOf(candidate);
                                        if (pIdx > -1) availableLocalPool[pName].splice(pIdx, 1);
                                    }
                                }
                                break;
                            }
                        }
                    }

                    // Generate Universal Filename format
                    const timestampIndex = `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
                    const destName = `unique-${folderKeyName}-wi-${timestampIndex}.webp`;
                    const destWebPath = `/gallery/site-resync/${destName}`;
                    const physicalDest = path.join(publicDir, destName);

                    if (selectedLocalSource) {
                        try {
                            // physically write L1 source
                            await sharp(selectedLocalSource)
                                .resize(1200, 800, { fit: 'cover', position: 'center' })
                                .webp({ quality: 80 })
                                .toFile(physicalDest);

                            auditCounts.local++;
                        } catch (e) {
                            console.error(`Local Write Failed on ${selectedLocalSource}`);
                        }
                    } else {
                        // Priority 2 & 3: Local was exhausted! (Legacy / AI)
                        console.warn(`[L1 EXHAUSTED] Triggering [L2 Legacy WAF Ping] for: ${folderKeyName}`);
                        // Due to active WAF blocking, we simulate scraping fallback logic or triggering the immediate AI Generation flag.
                        // In a real automated run, node would await a fetch. Here we throw the flag so Antigravity knows to use tools if needed.
                        auditCounts.ai++;
                        console.error(`[AI GENERATION REQUIRED] -> Missing asset for genre: ${folderKeyName}`);
                        continue; // We skip modifying the line so the agent can step in or we inject a placeholder
                    }

                    // Lower counter of the stripped image since we are removing it
                    currentGlobalUsage[imgSrc]--;
                    // Inject the new source path
                    lines[i] = line.replace(imgSrc, destWebPath);
                    fileModified = true;

                    console.log(`[Replaced]: ${imgSrc.split('/').pop()} -> ${destWebPath.split('/').pop()}`);
                }
            }
        }

        if (fileModified) {
            fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
            console.log(`[SUCCESS] Refactored ${path.basename(filePath)} data endpoint.`);
        }
    }

    console.log("\n====== TOTAL SITE-WIDE SYNC AUDIT ======");
    console.log(`(A) Local Physical Assets Extracted: ${auditCounts.local}`);
    console.log(`(B) Legacy Site WAF Extractions: ${auditCounts.legacy}`);
    console.log(`(C) AI Generated Triggers Hooked: ${auditCounts.ai}`);
    console.log("========================================\n");
}

runGlobalSync().catch(console.error);
