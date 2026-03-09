import fs from 'fs';
import path from 'path';

const dynPath = path.join(process.cwd(), 'src', 'app', 'services', '[service]', 'page.tsx');

let content = fs.readFileSync(dynPath, 'utf8');

// I am entirely wiping out the floating exactBgImage out of the generateMetadata scope.
// Next.js `generateMetadata` doesn't need the exactBgImage string anyway unless it's used for OpenGraph images, which it's locally not.
content = content.replace(/const exactBgImage = categoryFallbacks\[service\].*?valley-window-care-truck\.webp";/g, '');

// Clean up the dangling categoryFallbacks scope if it exists inside generateMetadata
const topCategoryRegex = /\s*const categoryFallbacks: Record<string, string> = {[\s\S]*?};\s*/;
content = content.replace(topCategoryRegex, '\n');

// Clean up any other weird exactBgImage floating declarations
content = content.replace(/const exactBgImage.*?valley-window-care-truck\.webp";/g, '');


// Now, inject it purely into ServiceGenericPage cleanly.
const replacement = `
    const isCommercial = commercialServices.includes(service);

    const categoryFallbacks: Record<string, string> = {
        "roof-clean": "/images/portfolio/roof-cleaning.webp",
        "roof-cleaning": "/images/portfolio/roof-cleaning.webp",    
        "house-washing": "/images/portfolio/house-wash-before-after.webp",
        "gutter-cleaning": "/images/portfolio/gutter-cleaning.webp",
        "concrete-cleaning": "/images/portfolio/concrete-cleaning.webp",
        "window-cleaning": "/images/portfolio/window-cleaning-before-after.JPG.webp",
        "christmas-lighting": "/images/portfolio/permanent-lights.webp",
        "permanent-led-lighting": "/images/portfolio/permanent-lights.webp",
        "pressure-washing": "/images/portfolio/pressure-washing.webp",
        "commercial-roof-cleaning": "/images/portfolio/roof-cleaning.webp",
        "building-washing": "/images/portfolio/building-washing.webp",
        "hood-vent-cleaning": "/images/portfolio/building-washing.webp",
        "commercial-hood-cleaning": "/images/portfolio/building-washing.webp",
        "commercial-hood-vent": "/images/portfolio/building-washing.webp",
        "commercial-awning": "/images/portfolio/awning-cleaning.webp",
        "commercial-awning-cleaning": "/images/portfolio/awning-cleaning.webp",    
        "drive-way-cleaning": "/images/portfolio/drive-way-cleaning.webp",
        "driveway-cleaning": "/images/portfolio/drive-way-cleaning.webp",
        "residential-rust-removal": "/images/portfolio/rust-removal-before-after.webp",
        "solar-panel": "/images/portfolio/valley-window-care-truck.webp",
        "solar-panel-cleaning": "/images/portfolio/valley-window-care-truck.webp",
        "soft-washing": "/images/portfolio/soft-washing.webp",
        "soft-wash": "/images/portfolio/soft-washing.webp"
    };

    const exactBgImage = categoryFallbacks[service] || content?.image || "/images/portfolio/valley-window-care-truck.webp";
`;

content = content.replace(/const isCommercial = commercialServices\.includes\(service\);/g, replacement);

fs.writeFileSync(dynPath, content, 'utf8');
console.log('✅ Final AST wipe applied.');

