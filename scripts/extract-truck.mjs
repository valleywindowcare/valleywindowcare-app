import sharp from 'sharp';
import path from 'path';

const cwd = process.cwd();
const baseVan = path.join(cwd, 'public/ai-base-assets/base2.png');
const outTruck = path.join(cwd, 'public/ai-base-assets/truck-cutout.png');

async function run() {
    const metadata = await sharp(baseVan).metadata();
    // Assuming 4k image (3840x2160 or similar)
    // The van is usually in the center or slightly left. Let's crop a central region containing the van logo.
    console.log("Image size:", metadata.width, "x", metadata.height);
    const extractWidth = Math.min(1200, metadata.width);
    const extractHeight = Math.min(800, metadata.height);
    
    await sharp(baseVan)
        .extract({ 
            left: Math.floor((metadata.width - extractWidth) / 2), 
            top: Math.floor((metadata.height - extractHeight) / 2) + 200, 
            width: extractWidth, 
            height: extractHeight 
        })
        .png()
        .toFile(outTruck);
    console.log("Truck cutout extracted successfully.");
}
run();
