const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/serviceContent.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

// The specific mappings user requested
const specificMappings = {
    'fence-cleaning': '/images/portfolio/fence-cleaning.webp',
    'roof-cleaning': '/images/portfolio/roof-cleaning.webp',
    'window-cleaning': '/images/portfolio/window-cleaning-appleton.webp',
    'commercial-roof-cleaning': '/images/portfolio/commercial-roof-cleaning.webp',
    'dumpster-pad-cleaning': '/images/portfolio/dumpster-pad-cleaning.webp',
    'apartment-exterior-cleaning': '/images/portfolio/apartment-exterior-cleaning.webp',
    'apartment-hoa-cleaning': '/images/portfolio/apartment-exterior-cleaning.webp',
    'hoa-multi-unit-cleaning': '/images/portfolio/apartment-exterior-cleaning.webp',
    'solar-panel-cleaning': '/images/portfolio/solar-panel-cleaning.webp',
    'concrete-cleaning': '/images/portfolio/driveway-cleaning.webp',
    'driveway-cleaning': '/images/portfolio/driveway-cleaning.webp',
    'permanent-led-lighting': '/images/portfolio/permanent-lighting.webp'
};

// Also map existing specific slugs
const objectRegex = /"([^"]+)":\s*{[\s\S]*?image:\s*"([^"]+)"/g;

content = content.replace(objectRegex, (match, slug, imgPath) => {
    let newImgPath = imgPath;
    
    if (specificMappings[slug]) {
        newImgPath = specificMappings[slug];
    } else {
        // Fallback for fake ones
        if (imgPath.includes('ing.webp') || imgPath.endsWith('.png') || imgPath.includes('lighting')) {
             // Let's do a strict check: if the file does NOT exist in public, fall back to house-washing
             // (except we trust the specific mappings)
             const publicPath = path.join(__dirname, '../public', imgPath);
             if (!fs.existsSync(publicPath)) {
                 newImgPath = '/images/portfolio/house-washing.webp';
             }
        } else {
             const publicPath = path.join(__dirname, '../public', imgPath);
             if (!fs.existsSync(publicPath)) {
                 newImgPath = '/images/portfolio/house-washing.webp';
             }
        }
    }
    
    // Replace the image property specifically
    return match.replace(`image: "${imgPath}"`, `image: "${newImgPath}"`);
});

// Since the regex might not perfectly catch everything if format is slightly off, 
// let's just do a manual replace for the specific keys requested.

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Images fixed');
