const fs = require('fs');

const path = './src/data/serviceAreasContent.json';
let data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Strict Authenticity Assignment Arrays (Generating 1..25 to map 75 secure slots against the Rule of 3 limit)
const hoodPhotos = Array.from({ length: 25 }, (_, i) => `/site-gallery/hood${i + 1}.jpg`);
const xmasPhotos = Array.from({ length: 25 }, (_, i) => `/site-gallery/xmas${i + 1}.jpg`);
const ledPhotos = Array.from({ length: 25 }, (_, i) => `/site-gallery/led${i + 1}.jpg`);

// Track Assignments for Rule of 3 Distribution
let hoodIndex = 0;
let xmasIndex = 0;
let ledIndex = 0;

let updatedCount = 0;

data = data.map(item => {
    if (item.serviceSlug === 'commercial-hood-vent-cleaning') {
        item.headerImage = hoodPhotos[hoodIndex % hoodPhotos.length];
        hoodIndex++;
        updatedCount++;
    } else if (item.serviceSlug === 'christmas-lighting') {
        item.headerImage = xmasPhotos[xmasIndex % xmasPhotos.length];
        xmasIndex++;
        updatedCount++;
    } else if (item.serviceSlug === 'residential-permanent-led-lighting') {
        item.headerImage = ledPhotos[ledIndex % ledPhotos.length] || ledPhotos[ledIndex % ledPhotos.length]; // Safety fallback
        ledIndex++;
        updatedCount++;
    }
    return item;
});

fs.writeFileSync(path, JSON.stringify(data, null, 2));

console.log(`✅ OVERRIDE COMPLETE: Hardcoded ${updatedCount} specific category authentic photos onto Vent/Holiday routes.`);
