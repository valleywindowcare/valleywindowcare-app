const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, '../public/gallery');

// Process directory recursively
async function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file.startsWith('.')) continue; // ignore hidden
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            await processDir(fullPath);
        } else if (stats.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                // Ignore if in the root of gallery (already processed or base images)
                // wait, let's process everything except /permanent-lighting and /exterior-cleaning which are backup now
                if (fullPath.includes('/permanent-lighting/') || fullPath.includes('/exterior-cleaning/')) continue;

                const baseName = path.basename(file, ext);
                const outPath = path.join(dir, `${baseName}.webp`);

                try {
                    await sharp(fullPath)
                        .webp({ quality: 80 })
                        .toFile(outPath);
                    console.log(`Converted ${file} to WebP.`);
                    fs.unlinkSync(fullPath); // remove original
                } catch (e) {
                    console.error(`Failed to convert ${file}:`, e);
                }
            }
        }
    }
}

processDir(galleryDir).then(() => console.log('Done converting.')).catch(console.error);
