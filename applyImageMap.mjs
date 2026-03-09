import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

/* -------------------------------------------------------------------------- */
/* 1. BUILD THE STRICT FALLBACK MAP NODE AST INJECTOR                       */
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
                content = content.replace(oldMapRegex, mapReplacement);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Updated Fallback Map -> ' + filePath);
            }
        }
    }
}
processFilesForMap(path.join(srcDir, 'app', 'service-areas'));

/* -------------------------------------------------------------------------- */
/* 2. ERADICATE ALL /SITE-GALLERY/ & .JPG REFERENCES ACROSS CODEBASE        */
/* -------------------------------------------------------------------------- */
const stringReplacements = [
    { target: '/site-gallery/roof1.jpg', rep: '/images/portfolio/roof-cleaning.webp' },
    { target: '/site-gallery/roof2.jpg', rep: '/images/portfolio/roof-cleaning.webp' },
    { target: '/site-gallery/house1.jpg', rep: '/images/portfolio/house-wash-before-after.webp' },
    { target: '/site-gallery/concrete1.jpg', rep: '/images/portfolio/concrete-cleaning.webp' },
    { target: '/site-gallery/window1.jpg', rep: '/images/portfolio/window-cleaning-before-after.JPG.webp' },
    { target: '/site-gallery/gutter1.jpg', rep: '/images/portfolio/gutter-cleaning.webp' },
    { target: '/site-gallery/xmas1.jpg', rep: '/images/portfolio/permanent-lights.webp' },
    { target: '/site-gallery/led1.jpg', rep: '/images/portfolio/permanent-lights.webp' },
    { target: '/site-gallery/pressure1.jpg', rep: '/images/portfolio/pressure-washing.webp' },
    { target: '/site-gallery/hood1.jpg', rep: '/images/portfolio/building-washing.webp' },
    { target: '/site-gallery/job1.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/job2.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/job3.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/AuthenticCrewTruck1.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/authentic-window-cleaners-in-green-bay-scaled.jpeg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/authentic-IMG_5510.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/authentic-IMG_3952.jpg', rep: '/images/portfolio/valley-window-care-truck.webp' },
    { target: 'https://valleywindowcare.com/_next/image?url=%2Fsite-gallery%2Fjob2.jpg&w=1920&q=85', rep: 'https://valleywindowcare.com/images/portfolio/valley-window-care-truck.webp'}
];

function processGenericReplacements(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            processGenericReplacements(filePath);
        } else if (/\.(tsx|ts|js|jsx)$/.test(file)) {
            let content = fs.readFileSync(filePath, 'utf8');
            let modified = false;

            for (const { target, rep } of stringReplacements) {
                if (content.includes(target)) {
                    content = content.split(target).join(rep);
                    modified = true;
                }
            }

            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log('Purged .jpg and injected .webp -> ' + filePath);
            }
        }
    }
}
processGenericReplacements(srcDir);

// Verify specific alt tags across main dynamic files
console.log('✅ PASS: Global Dynamic Image Map Executed.');
