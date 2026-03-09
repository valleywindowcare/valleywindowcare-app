import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src', 'app');

const deterministicHelper = `
function getDeterministicHero(seed: string): string {
    const images = [
        "/images/portfolio/house-wash-before-after.webp",
        "/images/portfolio/concrete-cleaning.webp",
        "/images/portfolio/roof-cleaning.webp",
        "/images/portfolio/pressure-washing.webp",
        "/images/portfolio/soft-washing.webp",
        "/images/portfolio/valley-window-care-truck.webp"
    ];
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
        hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return images[Math.abs(hash) % images.length];
}
`;

function processFile(filePath, seedVariable) {
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // 1. Inject the helper function if not present
    if (!content.includes('getDeterministicHero')) {
        // Inject right after the imports
        const lastImportIndex = content.lastIndexOf('import ');
        const endOfImport = content.indexOf('\n', lastImportIndex);
        
        content = content.slice(0, endOfImport + 1) + deterministicHelper + content.slice(endOfImport + 1);
        modified = true;
    }

    // 2. Replace the Default fallback with the deterministic call
    // Usually it looks like: "Default": "/images/portfolio/valley-window-care-truck.webp"
    // Or: content?.image || "/images/portfolio/valley-window-care-truck.webp"
    
    if (content.includes('"Default": "/images/portfolio/valley-window-care-truck.webp"')) {
        // Since we want dynamic, we shouldn't use a hardcoded string in the dictionary
        // We will change the dictionary instantiation to let exactBgImage resolve it.
        // Look for the fallback application:
        // const safeImage = heroImage && heroImage !== "false" ? heroImage : (categoryFallbacks[serviceName as keyof typeof categoryFallbacks] || ...);
    }
    
    // For specific pages:
    if (filePath.includes('service-areas/[city]/[service]/page.tsx')) {
        // Replace `categoryFallbacks["Default"]` logic
        content = content.replace(/\|\|\s*categoryFallbacks\["Default"\]/g, `|| getDeterministicHero(city + service)`);
        content = content.replace(/\|\|\s*"/images\/portfolio\/valley-window-care-truck.webp"/g, `|| getDeterministicHero(city + service)`);
        modified = true;
    } else if (filePath.includes('service-areas/[city]/page.tsx')) {
        content = content.replace(/\|\|\s*categoryFallbacks\["Default"\]/g, `|| getDeterministicHero(city)`);
        content = content.replace(/\|\|\s*"/images\/portfolio\/valley-window-care-truck.webp"/g, `|| getDeterministicHero(city)`);
        modified = true;
    } else if (filePath.includes('services/[service]/page.tsx')) {
        content = content.replace(/\|\|\s*"/images\/portfolio\/valley-window-care-truck.webp"/g, `|| getDeterministicHero(service)`);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(\`✅ Applied deterministic rotation to \${filePath}\`);
    }
}

processFile(path.join(baseDir, 'service-areas', '[city]', '[service]', 'page.tsx'), 'city + service');
processFile(path.join(baseDir, 'service-areas', '[city]', 'page.tsx'), 'city');
processFile(path.join(baseDir, 'services', '[service]', 'page.tsx'), 'service');

console.log('Sweep finished.');
