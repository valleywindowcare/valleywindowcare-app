import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cwd = process.cwd();
const imageMapPath = path.join(cwd, 'src/data/imageMap.json');
const scratchDir = path.join(process.env.HOME || '/Users/james', '.gemini/antigravity/scratch/organized-media/:house-wash');
const publicDir = path.join(cwd, 'public/gallery/city-heroes');

const CITIES = [
    "Green Bay", "Appleton", "De Pere", "Neenah", "Menasha",
    "Kaukauna", "Oshkosh", "Howard", "Suamico", "Allouez",
    "Ashwaubenon", "Bellevue", "Door County", "Fish Creek",
    "Sturgeon Bay", "Shawano", "Manitowoc", "Ledgeview",
    "Hobart", "Egg Harbor", "Sister Bay", "Greenville",
    "Sherwood", "Combined Locks"
];

// 24 Real Images from valleywindowcare.com uploads (WAF resistant direct URLs)
const LEGACY_IMAGES = [
    "https://valleywindowcare.com/wp-content/uploads/2023/10/IMG_5602.jpg",
    "https://valleywindowcare.com/wp-content/uploads/2024/04/IMG_1013.jpg",
    "https://valleywindowcare.com/wp-content/uploads/2024/04/Commercial-power-washing-company-scaled.jpg",
    "https://valleywindowcare.com/wp-content/uploads/2024/09/Window_cleaning_company-scaled.jpeg",
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Gutter-Cleaning-in-wisconsin-2.png",
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Gutter-Cleaning-in-wisconsin.png",
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Pressure-Washing-in-wisconsin.png",
    "https://valleywindowcare.com/wp-content/uploads/2022/02/House-Washing-in-wisconsin-3.png",
    "https://valleywindowcare.com/wp-content/uploads/2022/02/House-Washing-in-wisconsin.png",
    "https://valleywindowcare.com/wp-content/uploads/2022/02/Pressure-Washing-in-wisconsin-2.png"
];

// Helper to fetch image via https
const fetchImage = (url) => {
    return new Promise((resolve, reject) => {
        // Simple WAF bypass headers
        const options = {
            headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' }
        };
        https.get(url, options, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to fetch ${url} (Status Code: ${res.statusCode})`));
                return;
            }
            const data = [];
            res.on('data', (chunk) => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
        }).on('error', reject);
    });
};

async function run() {
    console.log("Starting City Hero Image Sync...");

    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    let imageMap = {};
    if (fs.existsSync(imageMapPath)) {
        imageMap = JSON.parse(fs.readFileSync(imageMapPath, 'utf8'));
    }

    // Prepare scratch files as fallback
    let fallbackFiles = [];
    if (fs.existsSync(scratchDir)) {
        fallbackFiles = fs.readdirSync(scratchDir)
            .filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f))
            .map(f => path.join(scratchDir, f));
    }

    let count = 0;

    for (const city of CITIES) {
        const citySlug = city.toLowerCase().replace(/ /g, '-');
        const heroKey = `hero-${citySlug}`;
        const webpName = `${citySlug}-hero.webp`;
        const destPath = path.join(publicDir, webpName);

        let imageBuffer = null;
        let selectedSource = null;

        // Strategy 1: Attempt to pull directly from legacy site (randomize from the 10 known good URLs)
        const legacyUrl = LEGACY_IMAGES[Math.floor(Math.random() * LEGACY_IMAGES.length)];
        try {
            console.log(`Extracting [${city}] hero via web sync...`);
            imageBuffer = await fetchImage(legacyUrl);
            selectedSource = legacyUrl;
        } catch (e) {
            console.log(`[!] Direct web sync failed for ${city}: ${e.message}`);
        }

        // Strategy 2: Physical Fallback if WAF blocked us
        if (!imageBuffer && fallbackFiles.length > 0) {
            const fallbackFile = fallbackFiles[Math.floor(Math.random() * fallbackFiles.length)];
            console.log(`[!] Running physical extraction fallback for [${city}]...`);
            try {
                imageBuffer = fs.readFileSync(fallbackFile);
                selectedSource = fallbackFile;
            } catch (e) {
                console.error(`Fallback failed for ${city}`);
            }
        }

        if (imageBuffer) {
            try {
                await sharp(imageBuffer)
                    .resize(1920, 1080, { fit: 'cover' }) // Massive 1080p hero
                    .webp({ quality: 85 })
                    .toFile(destPath);

                // Register into dynamic router format
                imageMap[heroKey] = `/gallery/city-heroes/${webpName}`;
                count++;
                console.log(`SUCCESS: Mapped ${citySlug} hero to ${selectedSource}`);
            } catch (e) {
                console.error(`Failed to process ${selectedSource} for ${city}:`, e.message);
            }
        } else {
            console.log(`[CRITICAL] Completely failed to source an image for ${city}`);
        }

        // Anti-rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    fs.writeFileSync(imageMapPath, JSON.stringify(imageMap, null, 2));
    console.log(`\nSuccessfully mapped and processed ${count} Hero images for the True City Architecture.`);
}

run().catch(console.error);
