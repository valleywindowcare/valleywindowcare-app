import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const portfolioDir = path.join(process.cwd(), 'public', 'images', 'portfolio');

async function processNewImages() {
    console.log('Starting delta compression sweep...');
    const files = fs.readdirSync(portfolioDir);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        // Convert any non-webp files
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
            const oldPath = path.join(portfolioDir, file);
            
            // Clean filename spaces and standardize syntax while processing
            const safeBaseName = path.basename(file, path.extname(file))
                .toLowerCase()
                .replace(/[^a-z0-9-]/g, '-');

            const newPath = path.join(portfolioDir, `${safeBaseName}.webp`);

            try {
                await sharp(oldPath)
                    .webp({ quality: 80 })
                    .toFile(newPath);

                fs.unlinkSync(oldPath);
                console.log(`✅ Converted and deleted: "${file}" -> "${safeBaseName}.webp"`);
            } catch (e) {
                console.error(`❌ Failed to convert "${file}":`, e);
            }
        } else if (ext === '.webp') {
            // Also sanitize existing webp filenames if they have spaces or bad chars
            // The user uploaded "deck cleaning.webp" and "House-washing.webp" needing standardizing
            const cleanName = file.toLowerCase().replace(/[^a-z0-9.-]/g, '-');
            if (cleanName !== file) {
               fs.renameSync(path.join(portfolioDir, file), path.join(portfolioDir, cleanName));
               console.log(`✨ Sanitized existing webp path: "${file}" -> "${cleanName}"`);
            }
        }
    }
    console.log('Delta sweep complete.');
}

processNewImages();
