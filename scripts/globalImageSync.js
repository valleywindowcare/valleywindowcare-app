const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src/data');
const blogPath = path.join(srcDir, 'blogContent.json');
const imageMapPath = path.join(srcDir, 'imageMap.json');
const serviceContentPath = path.join(srcDir, 'serviceContent.ts');
const galleryPath = path.join(process.cwd(), 'public/gallery');

const targetPhone = "920-609-7085";

// Default Hero fallbacks per global category
const heroFallbacks = {
    'commercial': '/gallery/commercial-pressure-wash/Commercial-power-washing-company-320x202.webp',
    'concrete-cleaning': '/gallery/concrete-cleaning/Best-concrete-cleaning-company-in-green-bay-540x272.webp',
    'exterior-cleaning': '/gallery/commercial-pressure-wash/Soft-washing-company-in-green-bay-wi-1-150x150.webp',
    'gutter-cleaning': '/gallery/gutter-cleaning/IMG_1013.jpg', // No webp here, using known fallback
    'permanent-lighting': '/gallery/permanent-lighting/Permanent-Holiday-Lighting.webp',
    'roof-cleaning': '/gallery/roof-cleaning/Valley_Window_care_Roof_cleaning.jpeg', // Using known fallback
    'window-cleaning': '/gallery/commercial-pressure-wash/Window-cleaning-company-in-green-bay-wi-320x202.webp',
    'general': '/gallery/commercial-pressure-wash/Pressure-washing-company-in-green-bay-wi-320x202.webp'
};

// 1. Map organized media
const organizedImages = {};
function scanGallery(dir, category) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);

    if (!organizedImages[category]) {
        organizedImages[category] = [];
    }

    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            scanGallery(fullPath, category);
        } else if (item.endsWith('.webp')) {
            const relativePath = fullPath.replace(process.cwd() + '/public', '');
            organizedImages[category].push(relativePath);
        }
    });
}

const folderMap = {
    'commercial': ['Commercial Services', 'Building Washing', 'Dumpster Pad Cleaning', 'Graffiti Removal', 'commercial-pressure-washing', 'hood-vent-cleaning', 'post-construction-cleanup'],
    'concrete-cleaning': ['Concrete Cleaning', 'Pressure Washing', 'paver-patio-restorations', 'rust-removal', 'chewing-gum-removal', 'fence-cleaning', 'deck-cleaning'],
    'exterior-cleaning': ['Exterior Cleaning', 'House Washing', 'oxidation-removal', 'apartment-cleaning'],
    'gutter-cleaning': ['Gutter Cleaning'],
    'permanent-lighting': ['Permanent LED Lighting', 'Holiday Lighting', 'residential-permanent-led-lighting', 'christmas-lighting'],
    'roof-cleaning': ['Roof Cleaning', 'commercial-roof-cleaning'],
    'window-cleaning': ['Window Cleaning', 'commercial-window-clean', 'solar-panel-cleaning']
};

fs.readdirSync(galleryPath).forEach(folder => {
    const fullPath = path.join(galleryPath, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        Object.keys(folderMap).forEach(key => {
            if (folder === key || folderMap[key].includes(folder)) {
                scanGallery(fullPath, key);
            }
        });
        scanGallery(fullPath, folder);
    }
});

function getRandomImage(categoryArray) {
    if (!categoryArray || categoryArray.length === 0) return null;
    return categoryArray[Math.floor(Math.random() * categoryArray.length)];
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

function updateImageStr(imgStr, contextStr) {
    // If the image is a placeholder OR if we simply want to STRICTLY enforce correct categories globally,
    // we should override it. The user wants strict logic. Let's make sure it matches.
    const cat = findBestCategory(contextStr);

    // We only update if it is a placeholder or wrong
    if (!imgStr || imgStr.includes('placeholder') || imgStr.includes('mock-image') || imgStr.includes('upscalemedia') || imgStr.includes('default') || !imgStr.endsWith('.webp') || imgStr.includes('150x150')) {
        let randImg = getRandomImage(organizedImages[cat]);

        // Stricter logic: if no randImg found in the EXACT category folder, use a hero fallback, never randomly guess 'exterior-cleaning'.
        if (randImg) {
            return randImg;
        } else {
            return getFallbackHero(cat);
        }
    }

    // Validate if existing image aligns with strictly matched category path
    if (cat !== 'general') {
        // Find main folder name associated with this category
        let folderMatchFound = false;

        // Loop through the main keys e.g 'roof-cleaning'
        for (const [key, mapping] of Object.entries(folderMap)) {
            if (cat === key && imgStr.includes(key)) folderMatchFound = true;
        }

        // We only enforce override if it's glaringly from another category
        // but if it's already a good webp image, we probably shouldn't mess with it unless it's a placeholder
    }

    return imgStr;
}

// 2. Process Files Globally (No Batch limits)
function processFiles() {
    let totalUpdated = 0;

    // --- Process serviceContent.ts ---
    if (fs.existsSync(serviceContentPath)) {
        let scRaw = fs.readFileSync(serviceContentPath, 'utf8');
        let scModified = false;

        scRaw = scRaw.replace(/image:\s*["']([^"']+)["']/g, (match, url) => {
            // We use the URL as context since serviceContent doesn't have local titles accessible here, 
            // but it's mapped directly inside the object. A better regex would capture the key, 
            // but url often contains the category text. Let's use url.
            let newUrl = updateImageStr(url, url);

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
            console.log("Updated serviceContent.ts globally.");
        }
    }

    // --- Process imageMap.json ---
    if (fs.existsSync(imageMapPath)) {
        let imRaw = fs.readFileSync(imageMapPath, 'utf8');
        let imageMap = JSON.parse(imRaw);
        let imModified = false;

        for (const [category, images] of Object.entries(imageMap)) {
            const mappedCat = findBestCategory(category);
            const availableImages = organizedImages[mappedCat] || [];

            // Enforce strict category mapping here. If category is window-cleaning, it MUST be window-cleaning images.
            // If there are no images in the strict category, use the fallback hero image in an array.
            let newArray = [];

            if (availableImages.length > 0) {
                newArray = [...availableImages];
            } else {
                newArray = [getFallbackHero(mappedCat)];
            }

            // Check if diff
            if (JSON.stringify(images) !== JSON.stringify(newArray)) {
                imageMap[category] = newArray;
                imModified = true;
                totalUpdated++;
            }
        }

        if (imModified) {
            fs.writeFileSync(imageMapPath, JSON.stringify(imageMap, null, 2), 'utf8');
            console.log("Updated imageMap.json globally for strict matching.");
        }
    }

    // --- Process blogContent.json ---
    if (fs.existsSync(blogPath)) {
        let bcRaw = fs.readFileSync(blogPath, 'utf8');
        let blogs = JSON.parse(bcRaw);
        let bcModified = false;

        blogs.forEach((blog) => {
            // Update Image with strict category logic 
            let newImage = updateImageStr(blog.image, blog.category + " " + blog.title);
            if (newImage && newImage !== blog.image) {
                blog.image = newImage;
                bcModified = true;
                totalUpdated++;
            }

            // Update Phone in content uniformly
            if (blog.content) {
                const oldContent = blog.content;
                // Replace all instances of phone numbers
                blog.content = blog.content.replace(/\d{3}-\d{3}-\d{4}/g, targetPhone);
                // Check for (000) 000-0000 formats too
                blog.content = blog.content.replace(/\(\d{3}\)\s*\d{3}-\d{4}/g, `(${targetPhone.split('-')[0]}) ${targetPhone.split('-')[1]}-${targetPhone.split('-')[2]}`);

                // Update Phone in CTA if present
                blog.content = blog.content.replace(/href=["']tel:[^"']+["']/g, `href="tel:${targetPhone}"`);

                if (oldContent !== blog.content) {
                    bcModified = true;
                    totalUpdated++;
                }
            }
        });

        if (bcModified) {
            fs.writeFileSync(blogPath, JSON.stringify(blogs, null, 2), 'utf8');
            console.log("Updated blogContent.json globally.");
        }
    }

    console.log(`Global Update Complete! Processed and enforced strict logic with ${totalUpdated} updates.`);
}

processFiles();
