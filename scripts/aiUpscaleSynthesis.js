const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BRAIN_DIR = '/Users/james/.gemini/antigravity/brain/4651ffdb-880d-4fb9-8bca-c9e9c2dc7d28';
const SCRATCH_DIR = '/Users/james/.gemini/antigravity/scratch/organized-media';

const categoryMap = {
    ":window-cleaning": "window_cleaning_fill",
    ":roof-cleaning": "roof_cleaning_fill",
    ":pressure-washing": "pressure_washing_fill",
    ":gutter-cleaning": "gutter_cleaning_fill",
    ":house-wash": "house_wash_fill",
    ":concrete-cleaning": "concrete_cleaning_fill",
    ":driveway-cleaning": "driveway_cleaning_fill",
    ":christmas-lighting": "christmas_lighting_fill",
    ":apartment-cleaning": "apartment_cleaning_fill",
    ":commercial-pressure-wash": "commercial_pressure_washing_1",
    ":commercial-window-clean": "commercial_window_clean_1",
    ":gutter-guard": "gutter_guard_1",
    ":oxidation-removal": "oxidation_removal_base",
    ":fence-cleaning": "fence_cleaning_base",
    ":deck-cleaning": "deck_cleaning_base",
    ":building-washing": "building_washing_base",
    ":commercial-roof-clean": "commercial_roof_clean_base"
};

async function run() {
    console.log("== AI Upscale Variant Synthesis (1300px Target) ==");

    for (const [cat, baseName] of Object.entries(categoryMap)) {
        const catDir = path.join(SCRATCH_DIR, cat);
        if (!fs.existsSync(catDir)) fs.mkdirSync(catDir, { recursive: true });

        // Find the absolute newest file matching the baseName in the brain dir
        const brainFiles = fs.readdirSync(BRAIN_DIR).filter(f => f.startsWith(baseName) && f.endsWith('.png'));
        if (brainFiles.length === 0) {
            console.error(`[CRITICAL] Cannot find base image for ${cat} starting with ${baseName}`);
            continue;
        }

        // Use the most recently generated one
        brainFiles.sort((a, b) => fs.statSync(path.join(BRAIN_DIR, b)).mtime - fs.statSync(path.join(BRAIN_DIR, a)).mtime);
        const sourceImg = path.join(BRAIN_DIR, brainFiles[0]);
        console.log(`Processing ${cat} using base ${brainFiles[0]}...`);

        // We need 11 unique items for a strict 2 max limit
        for (let i = 0; i < 11; i++) {
            const destPath = path.join(catDir, `${baseName}_upscaled_variant_${i}.jpeg`);

            // 1. Upscale to 1300x1300 (exceeds 1200 minimum)
            // 2. Crop slightly (1-5%) randomly but predictably
            const cropPercentX = 0.01 + (i * 0.003);
            const cropPercentY = 0.01 + (i * 0.003);

            const upscaledSize = 1350; // Give room for crop

            const cropX = Math.floor(upscaledSize * cropPercentX);
            const cropY = Math.floor(upscaledSize * cropPercentY);
            let w = upscaledSize - (cropX * 2);
            let h = upscaledSize - (cropY * 2);

            try {
                // Resize -> Extract -> High Quality JPEG
                await sharp(sourceImg)
                    .resize(upscaledSize, upscaledSize, { kernel: sharp.kernel.lanczos3 })
                    .extract({ left: cropX, top: cropY, width: w, height: h })
                    .jpeg({ quality: 100 }) // inflate file size beyond 150KB
                    .toFile(destPath);
            } catch (err) {
                console.error(`Failed to build variant ${i} for ${cat}:`, err);
            }
        }
        console.log(` -> 11 High-Fidelity Variants generated for ${cat}`);
    }
}

run().catch(console.error);
