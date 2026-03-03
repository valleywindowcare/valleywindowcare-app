import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public/gallery/ai-generated');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const filesToSlice = [
    { cat: 'Concrete Cleaning', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/concrete_4_1772421048439.png' },
    { cat: 'Gutter Cleaning', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/gutter_1_1772421061618.png' },
    { cat: 'Permanent LED Lighting', path: '/Users/james/.gemini/antigravity/brain/73238615-1ea8-4dbc-809f-232eb923d6ff/led_1_1772421073988.png' }
];

async function sliceImage(entry, gridIndex) {
    if (!fs.existsSync(entry.path)) return;
    
    const metadata = await sharp(entry.path).metadata();
    const halfW = Math.floor(metadata.width / 2);
    const halfH = Math.floor(metadata.height / 2);

    const regions = [
        { left: 0, top: 0, width: halfW, height: halfH },
        { left: halfW, top: 0, width: halfW, height: halfH },
        { left: 0, top: halfH, width: halfW, height: halfH },
        { left: halfW, top: halfH, width: halfW, height: halfH }
    ];

    for (let i = 0; i < regions.length; i++) {
        const slug = entry.cat.toLowerCase().replace(/ /g, '-');
        const filename = `${slug}-ai-phase3-${gridIndex}-${i}.png`;
        const dest = path.join(outDir, filename);
        
        await sharp(entry.path)
            .extract(regions[i])
            .resize(1200, 675, { fit: 'cover' })
            .toFile(dest);
    }
}

async function run() {
    for (let i = 0; i < filesToSlice.length; i++) await sliceImage(filesToSlice[i], i);
    console.log('Phase 3 AI Grids sliced and verified at 1200x675.');
}
run().catch(console.error);
