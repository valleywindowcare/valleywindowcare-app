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

    if (!content.includes('getDeterministicHero')) {
        const lastImportIndex = content.lastIndexOf('import ');
        const endOfImport = content.indexOf('\\n', lastImportIndex);
        content = content.slice(0, endOfImport + 1) + deterministicHelper + content.slice(endOfImport + 1);
        modified = true;
    }

    const searchTarget = '"/images/portfolio/valley-window-care-truck.webp"';
    const replaceTarget = 'getDeterministicHero(' + seedVariable + ')';

    if (content.includes(searchTarget)) {
        const fallbacksIdx = content.indexOf('categoryFallbacks');
        if (fallbacksIdx !== -1) {
            let prefix = content.slice(0, fallbacksIdx);
            let suffix = content.slice(fallbacksIdx);
            
            if (suffix.includes(searchTarget)) {
                suffix = suffix.split(searchTarget).join(replaceTarget);
                content = prefix + suffix;
                modified = true;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('✅ Applied deterministic logic to ' + filePath);
    }
}

processFile(path.join(baseDir, 'service-areas', '[city]', 'page.tsx'), 'city');
processFile(path.join(baseDir, 'service-areas', '[city]', '[service]', 'page.tsx'), 'city + service');
processFile(path.join(baseDir, 'services', '[service]', 'page.tsx'), 'service');
