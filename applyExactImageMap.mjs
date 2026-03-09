import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

/* -------------------------------------------------------------------------- */
/* 1. BUILD THE EXACT FALLBACK MAP NODE AST INJECTOR                        */
/* -------------------------------------------------------------------------- */
const mapReplacement = `const categoryFallbacks = {
        "Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
        "House Washing": "/images/portfolio/house-wash-before-after.webp",
        "Gutter Cleaning": "/images/portfolio/gutter-cleaning.webp",
        "Concrete Cleaning": "/images/portfolio/concrete-cleaning.webp",
        "Window Cleaning": "/images/portfolio/window-cleaning-before-after.JPG.webp",
        "Christmas Lighting": "/images/portfolio/permanent-lights.webp",
        "Pressure Washing": "/images/portfolio/pressure-washing.webp",
        "Residential Permanent LED Lighting": "/images/portfolio/permanent-lights.webp",
        "Commercial Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
        "Building Washing": "/images/portfolio/building-washing.webp",
        "Hood Vent Cleaning": "/images/portfolio/building-washing.webp",
        "Commercial Hood Vent Cleaning": "/images/portfolio/building-washing.webp"
    };`;

const newMapReplacement = `const categoryFallbacks = {
        "Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
        "House Washing": "/images/portfolio/house-wash-before-after.webp",
        "Gutter Cleaning": "/images/portfolio/gutter-cleaning.webp",
        "Concrete Cleaning": "/images/portfolio/concrete-cleaning.webp",
        "Window Cleaning": "/images/portfolio/window-cleaning-before-after.JPG.webp",
        "Christmas Lighting": "/images/portfolio/permanent-lights.webp",
        "Pressure Washing": "/images/portfolio/pressure-washing.webp",
        "Residential Permanent LED Lighting": "/images/portfolio/permanent-lights.webp",
        "Commercial Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
        "Building Washing": "/images/portfolio/building-washing.webp",
        "Hood Vent Cleaning": "/images/portfolio/building-washing.webp",
        "Commercial Hood Vent Cleaning": "/images/portfolio/building-washing.webp",
        "Default": "/images/portfolio/valley-window-care-truck.webp"
    };`;    

const oldMapRegex = /const categoryFallbacks = \{[\s\S]*?\};/;

function processFilesForMap(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            processFilesForMap(filePath);
        } else if (file === 'page.tsx') {
            let content = fs.readFileSync(filePath, 'utf8');
            if (oldMapRegex.test(content)) {
                content = content.replace(oldMapRegex, newMapReplacement);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Updated Fallback Map -> ' + filePath);
            }
        }
    }
}
processFilesForMap(path.join(srcDir, 'app', 'service-areas'));

console.log('✅ PASS: Global Exact Image Map Executed.');
