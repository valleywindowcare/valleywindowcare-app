import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public/gallery/ai-generated');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const filesToSlice = [
    { cat: 'Window Cleaning', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/window_cleaning_grid_1772419976443.png' },
    { cat: 'Window Cleaning', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/window_cleaning_grid_0_1772420012011.png' },
    { cat: 'Window Cleaning', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/window_cleaning_grid_1_1772420024251.png' },
    { cat: 'Window Cleaning', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/window_cleaning_grid_2_1772420037107.png' },
    { cat: 'Roof Cleaning', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/roof_cleaning_grid_1772420145931.png' },
    { cat: 'Permanent LED Lighting', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/led_lighting_grid_1772420161493.png' }
];

async function sliceImage(entry, gridIndex) {
    if (!fs.existsSync(entry.path)) {
        console.warn('Grid not found:', entry.path);
        return;
    }
    
    const metadata = await sharp(entry.path).metadata();
    const w = metadata.width;
    const h = metadata.height;
    const halfW = Math.floor(w / 2);
    const halfH = Math.floor(h / 2);

    const regions = [
        { left: 0, top: 0, width: halfW, height: halfH },
        { left: halfW, top: 0, width: halfW, height: halfH },
        { left: 0, top: halfH, width: halfW, height: halfH },
        { left: halfW, top: halfH, width: halfW, height: halfH }
    ];

    for (let i = 0; i < regions.length; i++) {
        const slug = entry.cat.toLowerCase().replace(/ /g, '-');
        const filename = `${slug}-ai-${gridIndex}-${i}.png`;
        const dest = path.join(outDir, filename);
        
        await sharp(entry.path)
            .extract(regions[i])
            .resize(1200, 675, { fit: 'cover' })
            .toFile(dest);
        console.log(`Saved ${dest}`);
    }
}

async function run() {
    for (let i = 0; i < filesToSlice.length; i++) {
        await sliceImage(filesToSlice[i], i);
    }
}

run().catch(console.error);
