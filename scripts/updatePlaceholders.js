const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src/data');
const blogPath = path.join(srcDir, 'blogContent.json');
const galleryPath = path.join(process.cwd(), 'public/gallery');

// 1. Gather all available webp images by category
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
            // Keep the relative path for the website
            const relativePath = fullPath.replace(__dirname + '/public', '');
            organizedImages[category].push(relativePath);
        }
    });
}

// Map the folders to logical categories
const folderMap = {
    'commercial': ['Commercial Services', 'Building Washing', 'Dumpster Pad Cleaning', 'Graffiti Removal'],
    'concrete-cleaning': ['Concrete Cleaning', 'Pressure Washing'],
    'exterior-cleaning': ['Exterior Cleaning', 'House Washing'],
    'gutter-cleaning': ['Gutter Cleaning'],
    'permanent-lighting': ['Permanent LED Lighting', 'Holiday Lighting'],
    'roof-cleaning': ['Roof Cleaning'],
    'window-cleaning': ['Window Cleaning', 'commercial-window-clean']
};

fs.readdirSync(galleryPath).forEach(folder => {
    const fullPath = path.join(galleryPath, folder);
    if (fs.statSync(fullPath).isDirectory()) {
        Object.keys(folderMap).forEach(key => {
            if (folder === key || folderMap[key].includes(folder)) {
                scanGallery(fullPath, key);
            }
        });
        // Also map exactly to the folder name as fallback
        scanGallery(fullPath, folder);
    }
});

// Helper to get a random image from a category array
function getRandomImage(categoryArray) {
    if (!categoryArray || categoryArray.length === 0) return null;
    return categoryArray[Math.floor(Math.random() * categoryArray.length)];
}

// Helper to find the best matching category for a specific blog post
function findBestMachtingCategory(blogCategory, blogTitle) {
    const searchString = (blogCategory + ' ' + blogTitle).toLowerCase();

    for (const [key, mapping] of Object.entries(folderMap)) {
        if (searchString.includes(key.toLowerCase())) return key;
        for (const m of mapping) {
            if (searchString.includes(m.toLowerCase())) return key;
        }
    }

    // Default fallback
    return 'exterior-cleaning';
}

console.log('Available Images Map:', Object.keys(organizedImages).map(k => `${k}: ${organizedImages[k]?.length || 0}`));

// 2. Update the blogContent.json placeholders and generic images
if (fs.existsSync(blogPath)) {
    let rawData = fs.readFileSync(blogPath, 'utf8');
    let blogs = JSON.parse(rawData);
    let updatedCount = 0;

    blogs.forEach((blog) => {
        // Look for placeholder images or general generic images to replace
        const isPlaceholder =
            !blog.image ||
            blog.image.includes('placeholder') ||
            blog.image.includes('mock-image') ||
            blog.image.includes('upscalemedia-transformed') ||
            blog.image.includes('default');

        if (isPlaceholder) {
            const bestCategory = findBestMachtingCategory(blog.category, blog.title);
            const newImage = getRandomImage(organizedImages[bestCategory]) || getRandomImage(organizedImages['exterior-cleaning']);

            if (newImage && blog.image !== newImage) {
                blog.image = newImage;
                updatedCount++;
            }
        }
    });

    if (updatedCount > 0) {
        fs.writeFileSync(blogPath, JSON.stringify(blogs, null, 2), 'utf8');
        console.log(`Successfully updated ${updatedCount} placeholder images in blogContent.json with new WebP images!`);
    } else {
        console.log('No placeholder images found to update in blogContent.json.');
    }
} else {
    console.log(`Could not find blogContent.json at ${blogPath}`);
}
