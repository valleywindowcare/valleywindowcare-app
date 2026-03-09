const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(process.cwd(), 'public', 'images', 'portfolio');

async function processDirectory(directory) {
    if (!fs.existsSync(directory)) {
        console.error(`Directory not found: ${directory}`);
        return;
    }

    const files = fs.readdirSync(directory);
    const convertedFiles = [];

    for (const file of files) {
        const filePath = path.join(directory, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await processDirectory(filePath);
        } else if (stat.isFile()) {
            const ext = path.extname(file).toLowerCase();
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const baseName = path.basename(file, ext);
                const webPath = path.join(directory, `${baseName}.webp`);

                try {
                    // Convert to logic
                    await sharp(filePath)
                        .webp({ quality: 80 })
                        .toFile(webPath);
                    
                    // Verify output generated
                    if (fs.existsSync(webPath)) {
                        fs.unlinkSync(filePath); // Purge original bloat
                        convertedFiles.push(`${baseName}.webp`);
                    }
                } catch (error) {
                    console.error(`Error processing ${file}:`, error);
                }
            }
        }
    }

    if (convertedFiles.length > 0) {
        console.log(`\n✅ SUCCESSFULLY CONVERTED & PURGED PORTFOLIO ASSETS (${convertedFiles.length}):`);
        convertedFiles.forEach(f => console.log(` - ${f}`));
    }
}

// Execute Protocol
console.log('Initiating Batch Image Compression & WEBP Conversion...\n');
processDirectory(targetDir).then(() => {
    console.log('\nProcess Complete. Original files purged.');
});
