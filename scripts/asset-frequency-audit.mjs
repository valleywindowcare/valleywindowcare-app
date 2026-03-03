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

const publicDir = path.join(cwd, 'public/gallery/audit-replacements');
const scratchDir = path.join(process.env.HOME || '/Users/james', '.gemini/antigravity/scratch/organized-media');

// Ensure output dir exists
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

// Basic context mapping logic to find a suitable scratch folder based on keywords nearby
const keywordToFolderMap = {
    'roof': ':roof-cleaning',
    'window': ':window-cleaning',
    'wash': ':house-wash',
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
    return ':house-wash'; // Default safe fallback
};

async function runAudit() {
    console.log("Starting Rule of 3 Site-Wide Frequency Audit...");

    // 1. Load Local Physical Assets Memory Map
    let availablePool = {};
    if (fs.existsSync(scratchDir)) {
        const folders = fs.readdirSync(scratchDir).filter(f => f.startsWith(':') && f !== ':logos');
        for (const folder of folders) {
            const folderPath = path.join(scratchDir, folder);
            const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));
            availablePool[folder] = files.map(f => path.join(folderPath, f));
        }
    }

    // Flatten a global fallback array
    let allAvailableFiles = Object.values(availablePool).flat();
    console.log(`Loaded ${allAvailableFiles.length} unique physical source assets to draw from.`);

    let globalFrequencyCount = {};
    let auditLog = [];

    // Phase 1: Track existing usage limits globally BEFORE deciding to replace
    for (const filePath of targetFiles) {
        if (!fs.existsSync(filePath)) continue;
        const rawContent = fs.readFileSync(filePath, 'utf8');

        // Find all image format strings
        const imageRegex = /"(\/gallery\/[^"]+\.(jpg|jpeg|png|webp))"/gi;
        let match;
        while ((match = imageRegex.exec(rawContent)) !== null) {
            const imgSrc = match[1];
            globalFrequencyCount[imgSrc] = (globalFrequencyCount[imgSrc] || 0) + 1;
        }
    }

    // Reset loop
    for (const filePath of targetFiles) {
        if (!fs.existsSync(filePath)) continue;
        let rawContent = fs.readFileSync(filePath, 'utf8');
        let fileModified = false;

        // Break file into lines so we can infer context of replacements
        const lines = rawContent.split('\n');

        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];

            const imageRegex = /"(\/gallery\/[^"]+\.(jpg|jpeg|png|webp))"/i;
            const match = line.match(imageRegex);

            if (match) {
                const imgSrc = match[1];

                // CRITICAL ALARM TRIGGER: RULE OF 3 CHECK
                if (globalFrequencyCount[imgSrc] > 3) {

                    // We must replace it. Let's find context
                    // Look 3 lines up and down for keywords
                    const startIdx = Math.max(0, i - 3);
                    const endIdx = Math.min(lines.length - 1, i + 3);
                    const contextString = lines.slice(startIdx, endIdx).join(' ');

                    const mappedFolder = getFallbackFolder(contextString);
                    let selectedSource = null;

                    // Pop logic (Pull from folder, otherwise pull from global flat array)
                    if (availablePool[mappedFolder] && availablePool[mappedFolder].length > 0) {
                        const ranIdx = Math.floor(Math.random() * availablePool[mappedFolder].length);
                        selectedSource = availablePool[mappedFolder].splice(ranIdx, 1)[0];
                        const flatIdx = allAvailableFiles.indexOf(selectedSource);
                        if (flatIdx > -1) allAvailableFiles.splice(flatIdx, 1);
                    } else {
                        const ranIdx = Math.floor(Math.random() * allAvailableFiles.length);
                        selectedSource = allAvailableFiles.splice(ranIdx, 1)[0];
                    }

                    if (selectedSource) {
                        // We found a replacement.
                        const newFilename = `audit-${Date.now()}-${Math.floor(Math.random() * 1000)}.webp`;
                        const destPath = path.join(publicDir, newFilename);
                        const newWebPath = `/gallery/audit-replacements/${newFilename}`;

                        try {
                            // Physically build the replacement file
                            await sharp(selectedSource)
                                .resize(1200, 800, { fit: 'cover', position: 'center' })
                                .webp({ quality: 80 })
                                .toFile(destPath);

                            // Reduce the count by 1 since we are swapping it out
                            globalFrequencyCount[imgSrc]--;

                            // Replace string in current line memory
                            lines[i] = line.replace(imgSrc, newWebPath);
                            fileModified = true;

                            auditLog.push({
                                original: imgSrc,
                                new: newWebPath,
                                file: path.basename(filePath),
                                context: mappedFolder
                            });
                            console.log(`\n[STRIPPED OVER-USED ASSET]: ${imgSrc}`);
                            console.log(`[INJECTED UNIQUE ASSET]: ${newWebPath} (Genre: ${mappedFolder})`);
                        } catch (e) {
                            console.error(`Error processing image ${selectedSource}:`, e);
                        }
                    } else {
                        throw new Error(`CRITICAL: Exhausted all physical image media during audit replacement!`);
                    }
                }
            }
        }

        if (fileModified) {
            fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
            console.log(`\n[SUCCESS] Committed ${path.basename(filePath)} back to disk with localized injections.`);
        }
    }

    console.log("\n--- RULE OF 3 AUDIT REPORT ---");
    if (auditLog.length === 0) {
        console.log("All assets were within the Rule of 3 constraint. No action needed.");
    } else {
        console.log(`Executed ${auditLog.length} unique image injections to repair over-used strings.`);
        // List at least 5 for the user
        const sample = auditLog.slice(0, 10);
        sample.forEach((log, index) => {
            console.log(`${index + 1}. [Replaced in ${log.file}] Overused limit hit on: ${log.original.split('/').pop()} -> Extracted unique: ${log.new.split('/').pop()} from ${log.context}`);
        });
    }
    console.log("--------------------------------");
}

runAudit().catch(console.error);
