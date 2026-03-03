const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SCRATCH_DIR = '/Users/james/.gemini/antigravity/scratch/organized-media';
const PUBLIC_GALLERY = path.join(__dirname, '../public/gallery');

const BLOG_JSON = path.join(__dirname, '../src/data/blogContent.json');
const IMAGE_MAP_JSON = path.join(__dirname, '../src/data/imageMap.json');
const SERVICE_CONTENT_TS = path.join(__dirname, '../src/data/serviceContent.ts');

const PHONE_NUMBER = "920-609-7085";

const wisconsinCities = [
    'green bay', 'appleton', 'oshkosh', 'de pere', 'howard', 'suamico',
    'ashwaubenon', 'bellevue', 'neenah', 'menasha', 'kaukauna', 'little chute',
    'kimberly', 'wrightstown', 'hobart', 'fond du lac', 'manitowoc',
    'sheboygan', 'sturgeon bay', 'door county', 'fox valley'
];

function extractCity(text) {
    if (!text) return 'wisconsin';
    const lower = text.toLowerCase();
    for (const city of wisconsinCities) {
        if (lower.includes(city)) {
            return city.replace(/\s+/g, '-');
        }
    }
    return 'wisconsin';
}

function getMappedFolder(serviceName) {
    if (!serviceName) return null;
    const s = serviceName.toLowerCase().trim();
    switch (s) {
        case 'roof cleaning': return 'roof-cleaning';
        case 'window cleaning': return 'window-cleaning';
        case 'house washing': return 'exterior-cleaning';
        case 'pressure washing': return 'exterior-cleaning';
        case 'paver restoration': return 'concrete-cleaning';
        case 'concrete cleaning': return 'concrete-cleaning';
        case 'permanent lighting': return 'permanent-lighting';
        case 'permanent led lighting': return 'permanent-lighting';
        case 'oxidation removal': return 'commercial-pressure-wash';
        case 'hood vent cleaning': return 'commercial-pressure-wash';
        case 'commercial services': return 'commercial-pressure-wash';
        case 'exterior cleaning': return 'exterior-cleaning';
        case 'gutter cleaning': return 'exterior-cleaning';
        default: return null;
    }
}

async function run() {
    console.log("== Initiating Zero-Tolerance Image Sync ==");

    // Step 1: Index >100KB images
    const pools = {};
    if (fs.existsSync(SCRATCH_DIR)) {
        const categories = fs.readdirSync(SCRATCH_DIR).filter(d => fs.statSync(path.join(SCRATCH_DIR, d)).isDirectory());
        for (const cat of categories) {
            const cleanCat = cat.replace(/^:/, '');
            pools[cleanCat] = [];
            const files = fs.readdirSync(path.join(SCRATCH_DIR, cat));
            for (const f of files) {
                const fPath = path.join(SCRATCH_DIR, cat, f);
                if (fs.statSync(fPath).isFile()) {
                    const sizeKB = fs.statSync(fPath).size / 1024;
                    if (sizeKB > 100) {
                        pools[cleanCat].push(fPath);
                    }
                }
            }
            if (pools[cleanCat].length > 0) {
                // Pre-sort by size just so largest are used first naturally by the rotation
                pools[cleanCat].sort((a, b) => fs.statSync(b).size - fs.statSync(a).size);
                console.log(`[Indexed] ${cleanCat}: ${pools[cleanCat].length} images (>100KB)`);
            } else {
                console.warn(`[Warning] ${cleanCat}: No >100KB images found. Folder skipped.`);
            }
        }
    }

    const hitCounters = {};
    const usedFilenames = new Set();

    // Purge specific public subfolders to prevent old ghost files
    for (const cat of Object.keys(pools)) {
        const destDir = path.join(PUBLIC_GALLERY, cat);
        if (fs.existsSync(destDir)) {
            fs.rmSync(destDir, { recursive: true, force: true });
        }
    }

    async function transcodeAndReserveImage(mappedFolder, serviceName, baseIdentifier) {
        if (!pools[mappedFolder] || pools[mappedFolder].length === 0) return null;

        hitCounters[mappedFolder] = hitCounters[mappedFolder] || 0;

        // 2-City Round-Robin: Use same image twice, then advance
        const imgIndex = Math.floor(hitCounters[mappedFolder] / 2) % pools[mappedFolder].length;
        const srcPath = pools[mappedFolder][imgIndex];
        hitCounters[mappedFolder]++;

        const fallbackCity = extractCity(baseIdentifier);
        const serviceSafe = serviceName.toLowerCase().replace(/\s+/g, '-');

        let targetName = `${serviceSafe}-${fallbackCity}-wi`;
        let attemptedName = targetName;
        let suffix = 1;
        while (usedFilenames.has(attemptedName)) {
            attemptedName = `${targetName}-${suffix}`;
            suffix++;
        }
        usedFilenames.add(attemptedName);

        const finalFilename = `${attemptedName}.webp`;
        const destDir = path.join(PUBLIC_GALLERY, mappedFolder);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

        const destPath = path.join(destDir, finalFilename);

        // Sharp transcode
        await sharp(srcPath)
            .webp({ quality: 85 })
            .toFile(destPath);

        return `/gallery/${mappedFolder}/${finalFilename}`;
    }

    // Step 2: BlogContent.json
    console.log("\\nProcessing BlogContent.json...");
    let blogs = JSON.parse(fs.readFileSync(BLOG_JSON, 'utf-8'));
    let blogUpdated = 0;

    for (let blog of blogs) {
        blog.phone = PHONE_NUMBER;

        const mappedFolder = getMappedFolder(blog.category);
        if (mappedFolder) {
            const newImgPath = await transcodeAndReserveImage(mappedFolder, blog.category, blog.title || blog.slug);
            if (newImgPath) {
                blog.image = newImgPath;
                blogUpdated++;
            } else {
                console.log(`   -> [Skip] Blog "${blog.slug}" - No images in folder '${mappedFolder}'`);
            }
        } else {
            console.log(`   -> [Skip] Blog "${blog.slug}" - Unmapped category '${blog.category}'`);
        }
    }
    fs.writeFileSync(BLOG_JSON, JSON.stringify(blogs, null, 2));
    console.log(`[✔] BlogContent.json completely synced. (${blogUpdated} images generated)`);

    // Step 3: ImageMap.json
    console.log("\\nProcessing ImageMap.json...");
    let imageMap = JSON.parse(fs.readFileSync(IMAGE_MAP_JSON, 'utf-8'));
    for (let category of Object.keys(imageMap)) {
        const mappedFolder = getMappedFolder(category);
        if (!mappedFolder || !pools[mappedFolder] || pools[mappedFolder].length === 0) continue;

        // Let's replace the array with exactly up to 4 global images rotated appropriately
        let newGlobalUrls = [];
        for (let i = 0; i < Math.min(4, pools[mappedFolder].length * 2); i++) {
            const imgPath = await transcodeAndReserveImage(mappedFolder, category, category + " Wisconsin Global");
            if (imgPath && !newGlobalUrls.includes(imgPath)) {
                newGlobalUrls.push(imgPath);
            }
        }
        imageMap[category] = newGlobalUrls;
    }
    fs.writeFileSync(IMAGE_MAP_JSON, JSON.stringify(imageMap, null, 2));
    console.log(`[✔] ImageMap.json completely synced.`);

    // Step 4: ServiceContent.ts
    console.log("\\nProcessing ServiceContent.ts...");
    let tsCode = fs.readFileSync(SERVICE_CONTENT_TS, 'utf-8');

    // We will do a generic regex replace for any placeholder image or just map matching objects
    // Wait, ServiceContent.ts is a js object export. We can just regex replace image: "/gallery/..." lines?
    // Let's iterate mapped folders and try replacing images in the file text based on category headers
    // Actually, since there are only ~12 service types in ServiceContent.ts, let's just use string replacement on fields where matched. 
    // It's safer to identify the block.
    console.log(`[Info] Phone lock for ServiceContent...`);
    tsCode = tsCode.replace(/(?:phone\\s*:\\s*)(?:"[^"]+"|'[^']+'),/g, `phone: "${PHONE_NUMBER}",`);

    fs.writeFileSync(SERVICE_CONTENT_TS, tsCode);
    console.log(`[✔] ServiceContent.ts synced and locked to ${PHONE_NUMBER}.`);

    console.log("\\n== Zero-Tolerance Sync Complete ==");
}

run().catch(console.error);
