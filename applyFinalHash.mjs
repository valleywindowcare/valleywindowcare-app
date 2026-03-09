import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src', 'app');

const deterministicHelper = `function getDeterministicHero(seed: string): string {
    const images = [
        "/images/portfolio/house-wash-before-after.webp",
        "/images/portfolio/concrete-cleaning.webp",
        "/images/portfolio/roof-cleaning.webp",
        "/images/portfolio/pressure-washing.webp",
        "/images/portfolio/soft-washing.webp",
        "/images/portfolio/valley-window-care-truck.webp"
    ];
    let sum = 0;
    for (let i = 0; i < seed.length; i++) {
        sum += seed.charCodeAt(i);
    }
    return images[sum % images.length];
}`;

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Overwrite the Hash Function Algorithm entirely
    // The previous implementation used bitwise shifts mapping: hash = seed.charCodeAt(i) + ((hash << 5) - hash)
    const functionRegex = /function getDeterministicHero\(seed: string\): string \{[\s\S]*?return images\[Math\.abs\(hash\) % images\.length\];\n\}/;
    if (content.match(functionRegex)) {
        content = content.replace(functionRegex, deterministicHelper);
        modified = true;
    }

    // 2. Overwrite the static localized string interpolations natively bypassing string execution overlaps
    if (filePath.includes('service-areas/[city]/page.tsx')) {
        const altRegex = /alt={`Expert exterior cleaning before and after in \${cityName}, WI - Valley Window Care`}/g;
        if (content.match(altRegex)) {
            content = content.replace(altRegex, "alt={`${content.category || 'Professional Exterior Cleaning'} in ${cityName || 'Green Bay, WI'}`}");
            modified = true;
        }
    } else if (filePath.includes('service-areas/[city]/[service]/page.tsx')) {
        const altRegex = /alt={`\${serviceName} before and after in \${cityName}, WI - Valley Window Care`}/g;
        if (content.match(altRegex)) {
            content = content.replace(altRegex, "alt={`${serviceName || 'Professional Exterior Cleaning'} in ${cityName || 'Green Bay, WI'}`}");
            modified = true;
        }
    } else if (filePath.includes('services/[service]/page.tsx')) {
        // Inject serviceName prop drilling directly into `<Hero ... />` inside ServiceGenericPage
        const heroRegex = /<Hero\s/g;
        if (content.match(heroRegex) && !content.includes('serviceName={formattedName}')) {
             content = content.replace(heroRegex, '<Hero serviceName={formattedName} ');
             modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Patched SEO and Hash algorithms inside ${filePath}`);
    }
}

processFile(path.join(baseDir, 'service-areas', '[city]', 'page.tsx'));
processFile(path.join(baseDir, 'service-areas', '[city]', '[service]', 'page.tsx'));
processFile(path.join(baseDir, 'services', '[service]', 'page.tsx'));
