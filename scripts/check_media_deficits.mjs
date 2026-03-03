import fs from 'fs';
import path from 'path';

const FOLDER_MAP = {
    "Window Cleaning": ":window-cleaning",
    "Roof Cleaning": ":roof-cleaning",
    "Permanent LED Lighting": ":permanent-lighting",
    "Gutter Cleaning": ":gutter-cleaning",
    "House Washing": ":house-wash",
    "Concrete Cleaning": ":concrete-cleaning",
    "City Hub": "hub"
};

const PAGES_PER_CAT = {
    "Window Cleaning": 81,
    "Roof Cleaning": 54,
    "Permanent LED Lighting": 81,
    "Gutter Cleaning": 27,
    "House Washing": 162,
    "Concrete Cleaning": 324,
    "City Hub": 27
};

const p1_dir = path.join(process.cwd(), 'public/live-scraped');
const p2_dir = path.join(process.env.HOME, '.gemini/antigravity/scratch/organized-media');

function countImages(dir) {
    if (!fs.existsSync(dir)) return 0;
    return fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).length;
}

let total_ai_needed = 0;
for (const cat of Object.keys(FOLDER_MAP)) {
    const required = Math.ceil(PAGES_PER_CAT[cat] / 3);
    const folderName = FOLDER_MAP[cat];
    
    // Priority 1
    const p1_path = path.join(p1_dir, folderName);
    const p1_count = countImages(p1_path);
    
    // Priority 2
    const p2_path = path.join(p2_dir, folderName.replace(':', ''));
    const p2_count = countImages(p2_path);
    
    const total_authentic = p1_count + p2_count;
    const deficit = Math.max(0, required - total_authentic);
    total_ai_needed += deficit;
    
    console.log(`Category: ${cat}`);
    console.log(`  Required Images (Rule of 3): ${required}`);
    console.log(`  Priority 1 (Live-Scraped): ${p1_count}`);
    console.log(`  Priority 2 (Scratch): ${p2_count}`);
    console.log(`  Deficit (AI Needed): ${deficit}\n`);
}
console.log(`Total AI Images to Generate: ${total_ai_needed}`);
