const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Paths
const sourceBaseDir = path.join(process.env.HOME, '.gemini/antigravity/scratch/organized-media');
const destBaseDir = path.join(__dirname, '../public/gallery');

// Ensure destination base exists
if (!fs.existsSync(destBaseDir)) {
    fs.mkdirSync(destBaseDir, { recursive: true });
}

// Stats tracking
let processedCount = 0;
let errorCount = 0;

async function processDirectory() {
    console.log(`Scanning source directory: ${sourceBaseDir}`);

    if (!fs.existsSync(sourceBaseDir)) {
        console.error(`ERROR: Source directory not found! -> ${sourceBaseDir}`);
        return;
    }

    const folders = fs.readdirSync(sourceBaseDir);

    for (const folder of folders) {
        if (folder.startsWith('.')) continue; // ignore hidden

        // Format is e.g., ":roof-cleaning". We want "roof-cleaning"
        const folderName = folder.replace(/^:/, '');
        const sourceDir = path.join(sourceBaseDir, folder);
        const destDir = path.join(destBaseDir, folderName);

        const stats = fs.statSync(sourceDir);
        if (stats.isDirectory()) {
            console.log(`\nProcessing folder: ${folder} -> ${folderName}`);

            // Ensure destination subdirectory exists
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }

            const files = fs.readdirSync(sourceDir);
            for (const file of files) {
                if (file.startsWith('.')) continue;

                const fullSourcePath = path.join(sourceDir, file);
                const fileStats = fs.statSync(fullSourcePath);

                if (fileStats.isFile()) {
                    const ext = path.extname(file).toLowerCase();
                    // Process images
                    if (['.jpg', '.jpeg', '.png', '.webp', '.heic'].includes(ext)) {
                        const baseName = path.basename(file, ext);
                        const outPath = path.join(destDir, `${baseName}.webp`);

                        try {
                            await sharp(fullSourcePath)
                                .webp({ quality: 80 })
                                .toFile(outPath);
                            console.log(` ✅ Converted: ${file} -> ${baseName}.webp`);
                            processedCount++;
                        } catch (e) {
                            console.error(` ❌ Failed to convert ${file}:`, e.message);
                            errorCount++;
                        }
                    }
                }
            }
        }
    }

    console.log(`\n--- Conversion Complete ---`);
    console.log(`Total Images Processed: ${processedCount}`);
    console.log(`Total Errors: ${errorCount}`);
}

processDirectory().catch(console.error);
