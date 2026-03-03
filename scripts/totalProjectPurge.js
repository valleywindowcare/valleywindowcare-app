const fs = require('fs');
const path = require('path');

console.log("== TOTAL PROJECT PURGE ==");

const blogJsonPath = path.join(__dirname, '../src/data/blogContent.json');
const galleryPath = path.join(__dirname, '../public/gallery');

// 1. Empty the JSON
fs.writeFileSync(blogJsonPath, '[]', 'utf8');
console.log(`[✔] BlogContent.json has been completely emptied.`);

// 2. Wipe the Gallery
let deletedCount = 0;
function wipeGallery(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (let item of items) {
        let fullPath = path.join(dir, item);
        let stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            wipeGallery(fullPath);
        } else if (item.toLowerCase().startsWith('blog-')) {
            fs.unlinkSync(fullPath);
            deletedCount++;
        }
    }
}
wipeGallery(galleryPath);
console.log(`[✔] Wiped ${deletedCount} 'blog-' prefixed images from public/gallery/`);

// 3. Physical Verification
let remainingCount = 0;
function verifyGallery(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    for (let item of items) {
        let fullPath = path.join(dir, item);
        let stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            verifyGallery(fullPath);
        } else if (item.toLowerCase().startsWith('blog-')) {
            remainingCount++;
        }
    }
}
verifyGallery(galleryPath);

const finalJson = JSON.parse(fs.readFileSync(blogJsonPath, 'utf8'));

console.log("\n== PHYSICAL VERIFICATION ==");
console.log(`Posts remaining in BlogContent.json : ${finalJson.length}`);
console.log(`'blog-' images remaining in gallery : ${remainingCount}`);
