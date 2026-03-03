import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cwd = process.cwd();
const imageMapPath = path.join(cwd, 'src/data/imageMap.json');
const scratchDir = path.join(process.env.HOME || '/Users/james', '.gemini/antigravity/scratch/organized-media');
const publicDir = path.join(cwd, 'public/gallery/service-areas');

const CITIES = [
    "Green Bay", "Appleton", "De Pere", "Neenah", "Menasha",
    "Kaukauna", "Oshkosh", "Howard", "Suamico", "Allouez",
    "Ashwaubenon", "Bellevue", "Door County", "Fish Creek",
    "Sturgeon Bay", "Shawano", "Manitowoc", "Ledgeview",
    "Hobart", "Egg Harbor", "Sister Bay", "Greenville",
    "Sherwood", "Combined Locks"
];
const FOLDER_MAP = {
    "roof-cleaning": ":roof-cleaning",
    "house-washing": ":house-wash",
    "gutter-cleaning": ":gutter-cleaning",
    "concrete-cleaning": ":concrete-cleaning",
    "window-cleaning": ":window-cleaning",
    "pressure-washing": ":pressure-washing",
    "deck-cleaning": ":deck-cleaning",
    "fence-cleaning": ":fence-cleaning",
    "building-washing": ":building-washing",
    "dumpster-pad-cleaning": ":commercial-pressure-wash",
    "commercial-roof-cleaning": ":commercial-roof-clean",
    "commercial-pressure-washing": ":commercial-pressure-wash",
    "graffiti-removal": ":commercial-pressure-wash",
    "hoa-services": ":building-washing",
    "commercial-vent-hood-cleaning": ":hood-vent",
    "gas-station-cleaning": ":gas-station-cleaning",
    "hood-vent-cleaning": ":hood-vent"
};

async function run() {
    console.log("Starting Staged 5-City Image Pipeline...");

    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    let imageMap = {};
    if (fs.existsSync(imageMapPath)) {
        imageMap = JSON.parse(fs.readFileSync(imageMapPath, 'utf8'));
    }

    const usedImages = new Set();
    let count = 0;

    for (const city of CITIES) {
        const citySlug = city.toLowerCase().replace(/ /g, '-');

        for (const [service, folderRef] of Object.entries(FOLDER_MAP)) {
            const fullSlug = `${service}-${citySlug}-wi`;
            const mappedContent = {};

            const scratchFolder = path.join(scratchDir, folderRef);
            if (!fs.existsSync(scratchFolder)) {
                console.log(`[Warning] Scratch folder missing: ${scratchFolder}`);
                continue;
            }

            const files = fs.readdirSync(scratchFolder)
                .filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f))
                .map(f => path.join(scratchFolder, f));

            const unusedFiles = files.filter(f => !usedImages.has(f));
            let selectedFile = unusedFiles.length > 0
                ? unusedFiles[Math.floor(Math.random() * unusedFiles.length)]
                : files[Math.floor(Math.random() * files.length)]; // Reuse if exhausted

            if (selectedFile) {
                usedImages.add(selectedFile);
                const webpName = `${fullSlug}.webp`;
                const destPath = path.join(publicDir, webpName);

                try {
                    await sharp(selectedFile)
                        .resize(1200, 800, { fit: 'cover' })
                        .webp({ quality: 85 })
                        .toFile(destPath);

                    imageMap[fullSlug] = `/gallery/service-areas/${webpName}`;
                    count++;
                } catch (e) {
                    console.error(`Failed to process ${selectedFile}:`, e.message);
                }
            } else {
                console.log(`[Warning] No images in scratch folder for ${service}`);
            }
        }
    }

    fs.writeFileSync(imageMapPath, JSON.stringify(imageMap, null, 2));
    console.log(`Successfully mapped and processed ${count} images for the 5-city hub.`);
}

run().catch(console.error);
