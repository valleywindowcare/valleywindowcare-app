import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cwd = process.cwd();

const imageMapPath = path.join(cwd, 'src/data/imageMap.json');
const scratchDir = path.join(process.env.HOME || '/Users/james', '.gemini/antigravity/scratch/organized-media');
const publicDir = path.join(cwd, 'public/gallery/city-heroes');

// Pull the 24 cities from our newly built data structure
const { cityData } = await import('../src/data/cityContent.ts');

// Service mapping logic to connect JSON string names to actual physical folders
const serviceToFolderMap = {
    "Commercial Window Cleaning": ":commercial-window-clean",
    "Residential Roof Soft Washing": ":roof-cleaning",
    "Residential House Washing": ":house-wash",
    "Concrete and Driveway Cleaning": ":concrete-cleaning",
    "Gutter Cleaning & Brightening": ":gutter-cleaning",
    "Commercial Pressure Washing": ":commercial-pressure-wash",
    "Paver & Patio Restoration": ":paver-patio",
    "Vinyl & Wood Siding Washing": ":house-wash",
    "Deck Cleaning & Restoration": ":deck-cleaning",
    "Roof Cleaning & Moss Removal": ":roof-cleaning",
    "Historic Brick & Stone Cleaning": ":pressure-washing",
    "Commercial Storefront Washing": ":commercial-pressure-wash",
    "Residential Siding Soft Wash": ":house-wash",
    "Vacation Home Exterior Detailing": ":house-wash",
    "Storefront & Awning Cleaning": ":window-cleaning",
    "Industrial & Marine Facade Cleaning": ":building-washing",
    "Lakefront Property Soft Washing": ":house-wash",
    "Coastal Window & Siding Cleaning": ":window-cleaning",
    "High-End Estate Cleaning": ":house-wash",
    "Resort & Marina Exterior Washing": ":building-washing",
    "Restaurant & Patio Deep Cleaning": ":paver-patio",
    "Residential Driveway & Walkway Scrubbing": ":driveway-cleaning",
    "High Cliff & Wooded Estate Soft Washing": ":house-wash",
    "Industrial Valley Property Cleaning": ":building-washing"
};

async function run() {
    console.log("Starting Unique 1-to-1 Header Sync...");

    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    let imageMap = {};
    if (fs.existsSync(imageMapPath)) {
        imageMap = JSON.parse(fs.readFileSync(imageMapPath, 'utf8'));
    }

    // Load available files into Memory to pop them out dynamically so no duplicates exist
    let availablePool = {};

    if (fs.existsSync(scratchDir)) {
        const folders = fs.readdirSync(scratchDir).filter(f => f.startsWith(':') && f !== ':logos');
        for (const folder of folders) {
            const folderPath = path.join(scratchDir, folder);
            const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));
            availablePool[folder] = files.map(f => path.join(folderPath, f));
        }
    }

    // Flatten a global fallback array for when a specific folder drains empty
    const allAvailableFiles = Object.values(availablePool).flat();
    console.log(`Found ${allAvailableFiles.length} total physical assets across ${Object.keys(availablePool).length} folders.`);

    if (allAvailableFiles.length < cityData.length) {
        throw new Error(`CRITICAL ALARM: Only ${allAvailableFiles.length} images available for ${cityData.length} cities.`);
    }

    let auditLog = [];

    for (const city of cityData) {
        const citySlug = city.id;
        const mappedFolder = serviceToFolderMap[city.focusService];
        const destName = `header-${citySlug}.webp`;
        const destPath = path.join(publicDir, destName);

        let selectedSource = null;

        // 1. Try to pop from the explicitly mapped folder to match the SEO focus
        if (availablePool[mappedFolder] && availablePool[mappedFolder].length > 0) {
            // Pick random index
            const ranIdx = Math.floor(Math.random() * availablePool[mappedFolder].length);
            selectedSource = availablePool[mappedFolder].splice(ranIdx, 1)[0]; // Pull it out of the array permanently!

            // Also explicitly delete it from the ALL pool flat array if we grab from specific
            const flatIdx = allAvailableFiles.indexOf(selectedSource);
            if (flatIdx > -1) allAvailableFiles.splice(flatIdx, 1);
        } else {
            // 2. Fall back to generic pool if the specific folder is empty
            const ranIdx = Math.floor(Math.random() * allAvailableFiles.length);
            selectedSource = allAvailableFiles.splice(ranIdx, 1)[0];
        }

        if (selectedSource) {
            try {
                // Ensure it's a massive, pristine header image
                await sharp(selectedSource)
                    .resize(1920, 1080, { fit: 'cover' })
                    .webp({ quality: 85 })
                    .toFile(destPath);

                // Register into Dynamic Router Map
                imageMap[`hero-${citySlug}`] = `/gallery/city-heroes/${destName}`;

                auditLog.push(`- ${city.cityName}: ${destName}`);
                console.log(`[SUCCESS] Assigned ${destName} using source: ${selectedSource.split('/').pop()}`);

            } catch (e) {
                console.error(`Failed to process image for ${city.cityName}:`, e);
            }
        }
    }

    fs.writeFileSync(imageMapPath, JSON.stringify(imageMap, null, 2));

    console.log("\n--- AUDIT REPORT: TRULY UNIQUE MAPPING ---");
    console.log(auditLog.join('\n'));
    console.log("------------------------------------------");
}

run().catch(console.error);
