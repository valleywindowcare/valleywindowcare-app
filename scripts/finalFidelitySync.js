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
    if (s.includes('commercial window')) return 'commercial-window-clean';
    if (s.includes('window')) return 'window-cleaning';
    if (s.includes('roof')) return 'roof-cleaning';
    if (s.includes('gutter guard')) return 'gutter-guard';
    if (s.includes('gutter')) return 'gutter-cleaning';
    if (s.includes('pressure')) return 'pressure-washing';
    if (s.includes('house')) return 'house-wash';
    if (s.includes('concrete') || s.includes('paver')) return 'concrete-cleaning';
    if (s.includes('driveway')) return 'driveway-cleaning';
    if (s.includes('christmas') || s.includes('holiday')) return 'christmas-lighting';
    if (s.includes('apartment') || s.includes('hoa') || s.includes('multi-unit')) return 'apartment-cleaning';
    return null;
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const servicesToMap = [
    'window-cleaning', 'roof-cleaning', 'pressure-washing', 'gutter-cleaning',
    'house-washing', 'concrete-cleaning', 'commercial-window-clean',
    'driveway-cleaning', 'gutter-guard', 'christmas-lighting', 'apartment-cleaning'
];

async function run() {
    console.log("== Initiating Final High-Fidelity Sync (Expanded 11 Categories) ==");

    const pools = {};
    for (const srv of servicesToMap) {
        const mappedCat = getMappedFolder(srv);
        if (mappedCat) {
            pools[mappedCat] = [];

            // Clean specific sub-gallery targets
            const destDir = path.join(PUBLIC_GALLERY, mappedCat);
            if (fs.existsSync(destDir)) {
                fs.rmSync(destDir, { recursive: true, force: true });
            }
        }
    }

    // Step 1: Index >150KB and shuffle
    if (fs.existsSync(SCRATCH_DIR)) {
        const categories = fs.readdirSync(SCRATCH_DIR).filter(d => fs.statSync(path.join(SCRATCH_DIR, d)).isDirectory());
        for (const cat of categories) {
            const cleanCat = cat.replace(/^:/, '');
            if (pools[cleanCat] === undefined) continue;

            const files = fs.readdirSync(path.join(SCRATCH_DIR, cat));
            for (const f of files) {
                const fPath = path.join(SCRATCH_DIR, cat, f);
                if (fs.statSync(fPath).isFile()) {
                    const sizeKB = fs.statSync(fPath).size / 1024;
                    if (sizeKB > 150) {
                        pools[cleanCat].push(fPath);
                    }
                }
            }

            if (pools[cleanCat].length > 0) {
                shuffleArray(pools[cleanCat]);
                console.log(`[Indexed] ${cleanCat}: ${pools[cleanCat].length} assets available.`);
                if (pools[cleanCat].length < 10) {
                    console.warn(`[Warning] ${cleanCat} has fewer than 10 high-res assets (${pools[cleanCat].length} total). Cycle repetition will occur faster.`);
                }
            } else {
                console.warn(`[Empty] ${cleanCat} contains 0 assets over 150KB!`);
            }
        }
    }

    const hitCounters = {};
    const usedFilenames = new Set();

    // We strictly limit processing to ONLY 500 explicit routing generations globally across all outputs to satisfy the batch prompt: "Process the first 500 entries now"
    let globalGenerationsCount = 0;
    const MAX_GENERATIONS = 500;

    async function transcodeAndReserveImage(mappedFolder, serviceName, cityName) {
        if (globalGenerationsCount >= MAX_GENERATIONS) return null;
        if (!pools[mappedFolder] || pools[mappedFolder].length === 0) return null;

        hitCounters[mappedFolder] = hitCounters[mappedFolder] || 0;

        // Single Rotation Round-Robin
        const imgIndex = hitCounters[mappedFolder] % pools[mappedFolder].length;
        const srcPath = pools[mappedFolder][imgIndex];
        hitCounters[mappedFolder]++;

        const fallbackCity = extractCity(cityName);
        const serviceSafe = serviceName.toLowerCase().replace(/[^a-z0-9]+/g, '-');

        // Target format: [service]-[city].webp (with collision suffix)
        let attemptedName = `${serviceSafe}-${fallbackCity}`;

        let collisionFallback = 1;
        while (usedFilenames.has(attemptedName)) {
            attemptedName = `${serviceSafe}-${fallbackCity}-${collisionFallback}`;
            collisionFallback++;
        }
        usedFilenames.add(attemptedName);

        const finalFilename = `${attemptedName}.webp`;
        const destDir = path.join(PUBLIC_GALLERY, mappedFolder);
        if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
        const destPath = path.join(destDir, finalFilename);

        try {
            await sharp(srcPath)
                .webp({ quality: 85 })
                .toFile(destPath);
        } catch (e) {
            console.error(`Failed to transcode ${srcPath}`, e);
            return null;
        }

        // Final Physical existence check
        if (!fs.existsSync(destPath)) {
            throw new Error(`Integrity Exception: Physically failed to generate WebP at ${destPath}`);
        }

        globalGenerationsCount++;
        return `/gallery/${mappedFolder}/${finalFilename}`;
    }

    // 1. Process BlogContent.json
    console.log("\\nProcessing BlogContent.json ...");
    let blogs = JSON.parse(fs.readFileSync(BLOG_JSON, 'utf-8'));
    let blogUpdated = 0;

    for (let blog of blogs) {
        blog.phone = PHONE_NUMBER;
        const mappedFolder = getMappedFolder(blog.category) || getMappedFolder(blog.title);
        if (mappedFolder) {
            const cityName = extractCity(blog.title || blog.slug);
            const newImgPath = await transcodeAndReserveImage(mappedFolder, mappedFolder.replace('-', ' '), cityName);
            if (newImgPath) {
                blog.image = newImgPath;
                blogUpdated++;
            }
        }
    }
    fs.writeFileSync(BLOG_JSON, JSON.stringify(blogs, null, 2));

    // 2. Process ImageMap.json (Generates permutations of services and cities)
    console.log(`\\nProcessing Explicit ImageMap.json Dictionary Limits (Cap at ${MAX_GENERATIONS} totals)...`);
    let imageMap = {};

    // Merge the existing map to preserve fallback arrays if we abort early
    if (fs.existsSync(IMAGE_MAP_JSON)) {
        try {
            const existing = JSON.parse(fs.readFileSync(IMAGE_MAP_JSON, 'utf-8'));
            imageMap = existing;
        } catch (e) { }
    }

    for (let srv of servicesToMap) {
        if (globalGenerationsCount >= MAX_GENERATIONS) break;

        const mappedFolder = getMappedFolder(srv);
        if (!mappedFolder || !pools[mappedFolder] || pools[mappedFolder].length === 0) continue;

        // Ensure generic fallback array exists
        if (!Array.isArray(imageMap[srv])) {
            imageMap[srv] = [];
        }

        for (let city of wisconsinCities) {
            if (globalGenerationsCount >= MAX_GENERATIONS) break;

            const citySlug = city.toLowerCase().replace(/ /g, '-');
            const routeKey = `${srv}-${citySlug}-wi`;
            const mappedPath = await transcodeAndReserveImage(mappedFolder, srv, city);
            if (mappedPath) {
                imageMap[routeKey] = mappedPath;

                // Add to generic arrays if there is space
                if (imageMap[srv].length < 4 && !imageMap[srv].includes(mappedPath)) {
                    imageMap[srv].push(mappedPath);
                }
            }
        }
    }

    fs.writeFileSync(IMAGE_MAP_JSON, JSON.stringify(imageMap, null, 2));
    console.log(`[✔] ImageMap.json explicit matrix generated.`);

    // 3. Process ServiceContent.ts
    console.log("\\nProcessing ServiceContent.ts...");
    let tsCode = fs.readFileSync(SERVICE_CONTENT_TS, 'utf-8');
    tsCode = tsCode.replace(/(?:phone\\s*:\\s*)(?:"[^"]+"|'[^']+'),/g, `phone: "${PHONE_NUMBER}",`);
    fs.writeFileSync(SERVICE_CONTENT_TS, tsCode);

    console.log(`\\n== High-Fidelity Sync Complete: Generated ${globalGenerationsCount} highly verified physical routes. ==`);
}

run().catch(console.error);
