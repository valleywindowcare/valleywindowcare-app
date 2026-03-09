import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const portfolioDir = path.join(process.cwd(), 'public', 'images', 'portfolio');

async function processImages() {
    console.log('Starting final image compression sweep...');
    const files = fs.readdirSync(portfolioDir);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        // Convert any non-webp files
        if (['.jpg', '.jpeg', '.png', '.heic'].includes(ext)) {
            const oldPath = path.join(portfolioDir, file);
            const baseName = path.basename(file, path.extname(file));
            const newPath = path.join(portfolioDir, `${baseName}.webp`);

            try {
                // Read and compress
                await sharp(oldPath)
                    .webp({ quality: 80 })
                    .toFile(newPath);

                // Delete original
                fs.unlinkSync(oldPath);
                console.log(`✅ Converted and deleted: ${file} -> ${baseName}.webp`);
            } catch (e) {
                console.error(`❌ Failed to convert ${file}:`, e);
            }
        }
    }
    console.log('Sweep complete.');
}

processImages();
