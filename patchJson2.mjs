import fs from 'fs';
import path from 'path';

const targetJsonPath = path.join(process.cwd(), 'src', 'data', 'serviceAreasContent.json');

const regexReplacements = [
    { regex: /\/site-gallery\/roof[0-9]*\.jpg/g, rep: '/images/portfolio/roof-cleaning.webp' },
    { regex: /\/site-gallery\/house[0-9]*\.jpg/g, rep: '/images/portfolio/house-wash-before-after.webp' },
    { regex: /\/site-gallery\/concrete[0-9]*\.jpg/g, rep: '/images/portfolio/concrete-cleaning.webp' },
    { regex: /\/site-gallery\/window[0-9]*\.jpg/g, rep: '/images/portfolio/window-cleaning-before-after.JPG.webp' },
    { regex: /\/site-gallery\/gutter[0-9]*\.jpg/g, rep: '/images/portfolio/gutter-cleaning.webp' },
    { regex: /\/site-gallery\/xmas[0-9]*\.jpg/g, rep: '/images/portfolio/permanent-lights.webp' },
    { regex: /\/site-gallery\/led[0-9]*\.jpg/g, rep: '/images/portfolio/permanent-lights.webp' },
    { regex: /\/site-gallery\/pressure[0-9]*\.jpg/g, rep: '/images/portfolio/pressure-washing.webp' },
    { regex: /\/site-gallery\/hood[0-9]*\.jpg/g, rep: '/images/portfolio/building-washing.webp' },
    { regex: /\/site-gallery\/job[0-9]*\.jpg/g, rep: '/images/portfolio/valley-window-care-truck.webp' }
];

if (fs.existsSync(targetJsonPath)) {
    let content = fs.readFileSync(targetJsonPath, 'utf8');
    let original = content;

    for (const { regex, rep } of regexReplacements) {
        content = content.replace(regex, rep);
    }

    // Catch any remaining site-gallery images and map them to the truck fallback
    content = content.replace(/\/site-gallery\/[a-zA-Z0-9_-]+\.(jpg|jpeg|png|webp)/g, '/images/portfolio/valley-window-care-truck.webp');

    if (content !== original) {
        fs.writeFileSync(targetJsonPath, content, 'utf8');
        console.log('✅ Nuclear RegEx Purge executed on -> ' + targetJsonPath);
    } else {
        console.log('No remaining wildcard matches found in Json.');
    }
} else {
    console.log('File not found.');
}
