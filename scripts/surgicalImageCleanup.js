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

// Blacklist logic to prevent crossing strictly opposing categories
const blacklists = {
    'window-cleaning': ['roof', 'gutter', 'concrete', 'commercial', 'pressure', 'washing', 'lighting'],
    'roof-cleaning': ['window', 'concrete', 'lighting', 'gutter'],
    'gutter-cleaning': ['window', 'roof', 'concrete', 'lighting'],
    'concrete-cleaning': ['window', 'roof', 'gutter', 'lighting'],
    'commercial': ['residential', 'lighting', 'home'],
    'permanent-lighting': ['window', 'roof', 'gutter', 'concrete', 'washing', 'pressure']
};

const folderMap = {
    'commercial': ['Commercial Services', 'Building Washing', 'Dumpster Pad Cleaning', 'Graffiti Removal', 'commercial-pressure-washing', 'hood-vent-cleaning', 'post-construction-cleanup'],
    'concrete-cleaning': ['Concrete Cleaning', 'Pressure Washing', 'paver-patio-restorations', 'rust-removal', 'chewing-gum-removal', 'fence-cleaning', 'deck-cleaning'],
    'exterior-cleaning': ['Exterior Cleaning', 'House Washing', 'oxidation-removal', 'apartment-cleaning'],
    'gutter-cleaning': ['Gutter Cleaning'],
    'permanent-lighting': ['Permanent LED Lighting', 'Holiday Lighting', 'residential-permanent-led-lighting', 'christmas-lighting'],
    'roof-cleaning': ['Roof Cleaning', 'commercial-roof-cleaning'],
    'window-cleaning': ['Window Cleaning', 'commercial-window-clean', 'solar-panel-cleaning']
};

// Default Hero fallbacks per global category
const heroFallbacks = {
    'commercial': '/gallery/commercial-pressure-wash/Commercial-power-washing-company-320x202.webp',
    'concrete-cleaning': '/gallery/concrete-cleaning/Best-concrete-cleaning-company-in-green-bay-540x272.webp',
    'exterior-cleaning': '/gallery/commercial-pressure-wash/Soft-washing-company-in-green-bay-wi-1-150x150.webp',
    'gutter-cleaning': '/gallery/gutter-cleaning/IMG_1013.jpg',
    'permanent-lighting': '/gallery/permanent-lighting/Permanent-Holiday-Lighting.webp',
    'roof-cleaning': '/gallery/roof-cleaning/Valley_Window_care_Roof_cleaning.jpeg',
    'window-cleaning': '/gallery/commercial-pressure-wash/Window-cleaning-company-in-green-bay-wi-320x202.webp',
    'general': '/gallery/commercial-pressure-wash/Pressure-washing-company-in-green-bay-wi-320x202.webp'
};

async function processImages() {
    console.log("Analyzing original images in scratch directory...");
    const categoryImages = {};
    const processedPaths = {};

    // Read organized media folders
    if (!fs.existsSync(scratchDir)) {
        console.error("Scratch directory not found. Please sync images from local first.");
        return;
    }

    const categories = fs.readdirSync(scratchDir).filter(f => fs.statSync(path.join(scratchDir, f)).isDirectory());

    for (const category of categories) {
        const cleanCategory = category.replace(/^:/, '');
        const catPath = path.join(scratchDir, category);
        const files = fs.readdirSync(catPath).filter(f => !f.startsWith('.'));

        const validFiles = [];

        for (const file of files) {
            const fullPath = path.join(catPath, file);

            // Simple validation check before heavy processing
            const fileNameLog = file.toLowerCase();
            let isValid = true;
            const blacklist = blacklists[category] || [];
            for (const word of blacklist) {
                if (fileNameLog.includes(word)) {
                    console.log(`Skipping ${file} in ${category} due to conflicting keyword: ${word}`);
                    isValid = false;
                    break;
                }
            }

            if (!isValid) continue;

            try {
                const metadata = await sharp(fullPath).metadata();
                const resolution = (metadata.width || 0) * (metadata.height || 0);
                const size = fs.statSync(fullPath).size;
                // Ignore small thumbnails (e.g., < 400x400)
                if (metadata.width < 400 || metadata.height < 400) {
                    console.log(`Skipping thumbnail ${file} - too small (${metadata.width}x${metadata.height})`);
                    continue;
                }
                validFiles.push({ file, fullPath, resolution, size });
            } catch (e) {
                console.warn(`Could not read metadata for ${file}`);
            }
        }

        // Sort by resolution descending, then size
        validFiles.sort((a, b) => b.resolution - a.resolution || b.size - a.size);
        categoryImages[cleanCategory] = validFiles;
        processedPaths[cleanCategory] = [];

        // Ensure Output Dir exists
        const outCatDir = path.join(galleryPath, cleanCategory);
        if (!fs.existsSync(outCatDir)) fs.mkdirSync(outCatDir, { recursive: true });

        // Convert the best images to webp
        for (const img of validFiles) {
            const baseName = path.parse(img.file).name;
            // Ensure filename doesn't have spaces for web URL compliance
            const cleanBaseName = baseName.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
            const outName = `${cleanBaseName}.webp`;
            const outPath = path.join(outCatDir, outName);
            const publicPath = `/gallery/${cleanCategory}/${outName}`;

            if (!fs.existsSync(outPath)) {
                try {
                    await sharp(img.fullPath)
                        .webp({ quality: 85, effort: 6 })
                        .toFile(outPath);
                    console.log(`Converted high-res: ${publicPath}`);
                } catch (e) {
                    console.error(`Failed to convert ${img.file}`);
                    continue;
                }
            }
            processedPaths[cleanCategory].push(publicPath);
        }
    }

    console.log("Image conversion complete.");
    return processedPaths;
}

function findBestCategory(titleOrKey) {
    const searchString = typeof titleOrKey === 'string' ? titleOrKey.toLowerCase() : '';
    for (const [key, mapping] of Object.entries(folderMap)) {
        if (searchString.includes(key.toLowerCase())) return key;
        for (const m of mapping) {
            if (searchString.includes(m.toLowerCase())) return key;
        }
    }
    return 'general';
}

function getFallbackHero(category) {
    if (heroFallbacks[category]) return heroFallbacks[category];
    return heroFallbacks['general'];
}

async function runCleanup() {
    const imagePool = await processImages();
    if (!imagePool) return;

    // Track sequential indices for distribution
    const indices = {};
    for (const cat in imagePool) { indices[cat] = 0; }

    function getNextImage(category) {
        const pool = imagePool[category];
        if (!pool || pool.length === 0) return getFallbackHero(category);

        const idx = indices[category] % pool.length;
        indices[category]++;
        return pool[idx];
    }

    let totalUpdated = 0;

    // Process serviceContent.ts
    if (fs.existsSync(serviceContentPath)) {
        let scRaw = fs.readFileSync(serviceContentPath, 'utf8');
        let scModified = false;

        scRaw = scRaw.replace(/image:\s*["']([^"']+)["']/g, (match, url) => {
            const cat = findBestCategory(url);
            let newUrl = url;

            // Overwrite strictly using new sequential image pool 
            if (cat !== 'general') {
                newUrl = getNextImage(cat);
            } else {
                newUrl = getFallbackHero('general');
            }

            if (newUrl !== url) {
                scModified = true;
                totalUpdated++;
                return `image: "${newUrl}"`;
            }
            return match;
        });

        // Phone Number replacement
        scRaw = scRaw.replace(/\d{3}-\d{3}-\d{4}/g, (match) => {
            if (match !== targetPhone) {
                scModified = true;
                return targetPhone;
            }
            return match;
        });
        scRaw = scRaw.replace(/\(\d{3}\)\s*\d{3}-\d{4}/g, (match) => {
            scModified = true;
            return targetPhone;
        });

        if (scModified) {
            fs.writeFileSync(serviceContentPath, scRaw, 'utf8');
            console.log("Updated serviceContent.ts.");
        }
    }

    // Process imageMap.json
    if (fs.existsSync(imageMapPath)) {
        let imRaw = fs.readFileSync(imageMapPath, 'utf8');
        let imageMap = JSON.parse(imRaw);
        let imModified = false;

        for (const [category, images] of Object.entries(imageMap)) {
            const mappedCat = findBestCategory(category);
            const availableImages = imagePool[mappedCat] || [];

            let newArray = [];
            if (availableImages.length > 0) {
                newArray = [...availableImages];
            } else {
                newArray = [getFallbackHero(mappedCat)];
            }

            if (JSON.stringify(images) !== JSON.stringify(newArray)) {
                imageMap[category] = newArray;
                imModified = true;
                totalUpdated++;
            }
        }

        if (imModified) {
            fs.writeFileSync(imageMapPath, JSON.stringify(imageMap, null, 2), 'utf8');
            console.log("Updated imageMap.json.");
        }
    }

    // Process blogContent.json
    if (fs.existsSync(blogPath)) {
        let bcRaw = fs.readFileSync(blogPath, 'utf8');
        let blogs = JSON.parse(bcRaw);
        let bcModified = false;

        blogs.forEach((blog) => {
            const mappedCat = findBestCategory(blog.category + " " + blog.title);
            let newImage = blog.image;

            if (mappedCat !== 'general') {
                newImage = getNextImage(mappedCat);
            } else {
                newImage = getFallbackHero('general');
            }

            if (newImage && newImage !== blog.image) {
                blog.image = newImage;
                bcModified = true;
                totalUpdated++;
            }

            // Phone Validation
            if (blog.content) {
                const oldContent = blog.content;
                blog.content = blog.content.replace(/\d{3}-\d{3}-\d{4}/g, targetPhone);
                blog.content = blog.content.replace(/\(\d{3}\)\s*\d{3}-\d{4}/g, `(${targetPhone.split('-')[0]}) ${targetPhone.split('-')[1]}-${targetPhone.split('-')[2]}`);
                blog.content = blog.content.replace(/href=["']tel:[^"']+["']/g, `href="tel:${targetPhone}"`);

                if (oldContent !== blog.content) {
                    bcModified = true;
                    totalUpdated++;
                }
            }
        });

        if (bcModified) {
            fs.writeFileSync(blogPath, JSON.stringify(blogs, null, 2), 'utf8');
            console.log("Updated blogContent.json.");
        }
    }

    console.log(`Surgical Cleanup Complete! Forced high-res webp assignment on ${totalUpdated} entries using round-robin distribution.`);
}

runCleanup();
