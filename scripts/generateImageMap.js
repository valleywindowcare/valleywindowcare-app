const fs = require('fs');
const path = require('path');

const destBase = path.join(__dirname, '../public/gallery');
const outputFile = path.join(__dirname, '../src/data/imageMap.json');

const directories = fs.readdirSync(destBase).filter(f => !f.startsWith('.') && fs.statSync(path.join(destBase, f)).isDirectory());

const imageMap = {};

directories.forEach(dir => {
    // skip exterior-cleaning and permanent-lighting as they are backup folders now
    if (dir === 'exterior-cleaning' || dir === 'permanent-lighting') return;

    const dirPath = path.join(destBase, dir);
    const files = fs.readdirSync(dirPath).filter(f => !f.startsWith('.') && f.endsWith('.webp'));

    // Create the public paths
    imageMap[dir] = files.map(f => `/gallery/${dir}/${f}`);
});

// Since the `serviceContent.ts` and URLs use specific slugs, ensure these match the folders
// If there are services not in the folders, Next.js routing might fall back.
// We have window-cleaning, roof-cleaning, pressure-washing, commercial-pressure-washing, etc.
// The image allocator uses the `serviceSlug`. 
// Write the map
fs.writeFileSync(outputFile, JSON.stringify(imageMap, null, 2));
console.log('Successfully generated imageMap.json with specific folder bindings!');
