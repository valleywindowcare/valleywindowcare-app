const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.join(process.cwd(), 'src/data');
const blogPath = path.join(srcDir, 'blogContent.json');
const imageMapPath = path.join(srcDir, 'imageMap.json');
const serviceContentPath = path.join(srcDir, 'serviceContent.ts');

const scratchDir = '/Users/james/.gemini/antigravity/scratch/organized-media';
const galleryPath = path.join(process.cwd(), 'public', 'gallery');

const targetPhone = "920-609-7085";

// ZERO TOLERANCE MAP
const explicitMap = {
    // Exact mapping requested by user
    'Roof Cleaning': 'roof-cleaning',
    'roof-cleaning': 'roof-cleaning',
    'Window Cleaning': 'window-cleaning',
    'window-cleaning': 'window-cleaning',
    'Pressure Washing': 'pressure-washing',
    'pressure-washing': 'pressure-washing',

    // Strict deductions based on folder availability:
    'House Washing': 'house-wash',
    'house-washing': 'house-wash',
    'Exterior Cleaning': 'house-wash',
    'exterior-cleaning': 'house-wash',
    'Gutter Cleaning': 'gutter-cleaning',
    'gutter-cleaning': 'gutter-cleaning',
    'Concrete Cleaning': 'concrete-cleaning',
    'concrete-cleaning': 'concrete-cleaning',
    'Commercial Services': 'commercial-pressure-wash',
    'commercial': 'commercial-pressure-wash',
    'commercial-pressure-washing': 'commercial-pressure-wash',
    'building-washing': 'commercial-pressure-wash',
    'dumpster-pad-cleaning': 'commercial-pressure-wash',
    'graffiti-removal': 'commercial-pressure-wash',
    'post-construction-cleanup': 'commercial-pressure-wash',
    'parking-lot-and-garage-cleaning': 'commercial-pressure-wash',
    'storefront-cleaning': 'commercial-pressure-wash',
    'premium-drive-thru-cleaning': 'commercial-pressure-wash',

    'hood-vent-cleaning': 'hood-vent',
    'gas-station-cleaning': 'gas-station-cleaning',
    'commercial-window-clean': 'commercial-window-clean',
    'solar-panel-cleaning': 'commercial-window-clean',
    'commercial-roof-cleaning': 'roof-cleaning',

    'Permanent LED Lighting': 'permanent-lighting',
    'permanent-led-lighting': 'permanent-lighting',
    'Residential Permanent LED Lighting': 'permanent-lighting',
    'residential-permanent-led-lighting': 'permanent-lighting',
    'Holiday Lighting': 'christmas-lighting',

    'paver-patio-restorations': 'paver-patio',
    'fence-cleaning': 'fence-cleaning',
    'deck-cleaning': 'deck-cleaning',
    'hoa-services': 'apartment-cleaning',
    'rust-removal': 'concrete-cleaning',
    'chewing-gum-removal': 'concrete-cleaning',
    'oxidation-removal': 'house-wash',
    'professional-awning-cleaning': 'house-wash'
};

function getStrictFolder(serviceName) {
    if (!serviceName) return null;
    const mapped = explicitMap[serviceName];
    if (!mapped) {
        throw new Error(`ZERO TOLERANCE EXCEPTION: Unmapped service name -> "${serviceName}". STOPPING execution.`);
    }
    return mapped;
}

async function prepareImages() {
    console.log("Analyzing scratch media globally with 100KB strict requirement...");
    const categoryImages = {};
    const processedPaths = {};

    const categories = fs.readdirSync(scratchDir).filter(f => fs.statSync(path.join(scratchDir, f)).isDirectory());

    for (const category of categories) {
        const cleanCategory = category.replace(/^:/, ''); // strip colon
        const catPath = path.join(scratchDir, category);
        const files = fs.readdirSync(catPath).filter(f => !f.startsWith('.'));

        const validFiles = [];

        for (const file of files) {
            const fullPath = path.join(catPath, file);
            const size = fs.statSync(fullPath).size;

            // ZERO TOLERANCE: >100KB Filter
            if (size < 100 * 1024) {
                // skip silently to avoid console spam, it's a thumbnail
                continue;
            }

            try {
                validFiles.push({ file, fullPath, size });
            } catch (e) {
                // do nothing
            }
        }

        // Sort by size to keep deterministic high quality ordered list
        validFiles.sort((a, b) => b.size - a.size);
        categoryImages[cleanCategory] = validFiles;
        processedPaths[cleanCategory] = [];

        const outCatDir = path.join(galleryPath, cleanCategory);
        if (!fs.existsSync(outCatDir)) fs.mkdirSync(outCatDir, { recursive: true });

        for (const img of validFiles) {
            const baseName = path.parse(img.file).name;
            const cleanBaseName = baseName.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            const outName = `${cleanBaseName}.webp`;
            const outPath = path.join(outCatDir, outName);
            const publicPath = `/gallery/${cleanCategory}/${outName}`;

            if (!fs.existsSync(outPath)) {
                await sharp(img.fullPath).webp({ quality: 85, effort: 6 }).toFile(outPath);
            }
            processedPaths[cleanCategory].push(publicPath);
        }
    }
    return processedPaths;
}

async function runZeroTolerance() {
    const imagePool = await prepareImages();
    if (!imagePool) return;

    // Incrementing counter instance
    const indices = {};
    for (const cat in imagePool) { indices[cat] = 0; }

    function getNextStrictImage(folderName) {
        const pool = imagePool[folderName];
        if (!pool || pool.length === 0) {
            throw new Error(`ZERO TOLERANCE EXCEPTION: No images found >100KB in folder -> "${folderName}". STOPPING execution.`);
        }

        const idx = indices[folderName] % pool.length;
        indices[folderName]++;
        return pool[idx];
    }

    let JSONUpdates = 0;

    // 1. serviceContent.ts
    // The keys inside the object are the strict services, but we don't have an AST parser here cleanly.
    // Instead we will loop over the known explicitMap keys to replace their specific image tags.
    if (fs.existsSync(serviceContentPath)) {
        let scRaw = fs.readFileSync(serviceContentPath, 'utf8');

        // Let's replace the images safely by targeting blocks if we could, 
        // but regex is risky if we don't know the service context.
        // Actually, extracting blocks:
        for (const [key, _] of Object.entries(explicitMap)) {
            // Find `"key": { ... image: "..." }`
            const blockRegex = new RegExp(`["']?${key}["']?:\\s*{([^}]*?image:\\s*["'][^"']+["'][^}]*?)}`, 'g');
            scRaw = scRaw.replace(blockRegex, (match, innerProps) => {
                const folder = getStrictFolder(key);
                const nextImage = getNextStrictImage(folder);
                let newInnerProps = innerProps.replace(/image:\s*["'][^"']+["']/, `image: "${nextImage}"`);
                JSONUpdates++;
                return `"${key}": {${newInnerProps}}`;
            });
        }

        scRaw = scRaw.replace(/\d{3}-\d{3}-\d{4}/g, targetPhone);
        scRaw = scRaw.replace(/\(\d{3}\)\s*\d{3}-\d{4}/g, targetPhone);
        fs.writeFileSync(serviceContentPath, scRaw, 'utf8');
    }

    // 2. imageMap.json
    if (fs.existsSync(imageMapPath)) {
        let imageMap = JSON.parse(fs.readFileSync(imageMapPath, 'utf8'));
        let imModified = false;

        for (const [serviceName, images] of Object.entries(imageMap)) {
            const folder = getStrictFolder(serviceName);
            const availableImages = imagePool[folder];
            if (!availableImages || availableImages.length === 0) {
                throw new Error(`ZERO TOLERANCE EXCEPTION: No images found >100KB in folder -> "${folder}" for service "${serviceName}".`);
            }

            // Check if diff
            if (JSON.stringify(images) !== JSON.stringify(availableImages)) {
                imageMap[serviceName] = [...availableImages]; // assigning full valid stack
                imModified = true;
                JSONUpdates++;
            }
        }

        if (imModified) {
            fs.writeFileSync(imageMapPath, JSON.stringify(imageMap, null, 2), 'utf8');
        }
    }

    // 3. blogContent.json
    if (fs.existsSync(blogPath)) {
        let blogs = JSON.parse(fs.readFileSync(blogPath, 'utf8'));
        let bcModified = false;

        blogs.forEach((blog) => {
            // Zero Tolerance: The blog's "category" acts as the service key
            const folder = getStrictFolder(blog.category);
            const nextImage = getNextStrictImage(folder);

            if (nextImage && nextImage !== blog.image) {
                blog.image = nextImage;
                bcModified = true;
                JSONUpdates++;
            }

            if (blog.content) {
                const oldContent = blog.content;
                blog.content = blog.content.replace(/\d{3}-\d{3}-\d{4}/g, targetPhone);
                blog.content = blog.content.replace(/\(\d{3}\)\s*\d{3}-\d{4}/g, `(${targetPhone.split('-')[0]}) ${targetPhone.split('-')[1]}-${targetPhone.split('-')[2]}`);
                blog.content = blog.content.replace(/href=["']tel:[^"']+["']/g, `href="tel:${targetPhone}"`);

                if (oldContent !== blog.content) bcModified = true;
            }
        });

        if (bcModified) {
            fs.writeFileSync(blogPath, JSON.stringify(blogs, null, 2), 'utf8');
        }
    }

    console.log(`ZERO TOLERANCE COMPLETE: Processed strictly matched sequences for ${JSONUpdates} data points.`);
}

runZeroTolerance().catch(e => {
    console.error(e.message);
    process.exit(1);
});
