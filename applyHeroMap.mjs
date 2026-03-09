import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src', 'app', 'services');

const categoryFallbacks = {
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

const regexBgImage = /bgImage=["']?(.*?)["']?([\s\/>])/g;

function processServices(dir) {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        if (entry.isDirectory()) {
            const serviceSlug = entry.name;
            const pagePath = path.join(dir, entry.name, 'page.tsx');
            
            if (fs.existsSync(pagePath)) {
                let content = fs.readFileSync(pagePath, 'utf8');
                let modified = false;

                // Attempt to replace explicit bgImage props in <Hero />
                if (content.match(regexBgImage)) {
                    content = content.replace(regexBgImage, (match, $1, $2) => {
                        // Check if current image is in portfolio
                        if ($1.includes('/images/portfolio/')) return match; 
                        
                        const newPath = categoryFallbacks[serviceSlug] || "/images/portfolio/valley-window-care-truck.webp";
                        modified = true;
                        console.log(`Rewriting ${serviceSlug} Hero: ${$1} -> ${newPath}`);
                        return `bgImage="${newPath}"${$2}`;
                    });
                }
                
                // Ensure bgImage prop exists in <Hero
                if (!content.match(/bgImage=/)) {
                    const newPath = categoryFallbacks[serviceSlug] || "/images/portfolio/valley-window-care-truck.webp";
                    content = content.replace(/<Hero\s*(.*?)\/>/gs, (match) => {
                         modified = true;
                         console.log(`Injecting ${serviceSlug} Hero bgImage: ${newPath}`);
                         return match.replace(/<Hero\s*/, `<Hero bgImage="${newPath}" `);
                    });
                }

                if (modified) {
                    fs.writeFileSync(pagePath, content, 'utf8');
                }
            }
        }
    }
}

processServices(srcDir);

// Also need to check src/app/services/[service]/page.tsx since it handles dynamic components
const dynamicRoutePath = path.join(srcDir, '[service]', 'page.tsx');
if (fs.existsSync(dynamicRoutePath)) {
    let content = fs.readFileSync(dynamicRoutePath, 'utf8');
    // It uses bgImage={content?.image}. We need to ensure content?.image falls back or is valid, or we intercept the bgImage directly.
    // The SafeHeroImage currently defaults to tracking if bgImage isn't found, but let's be explicit using the exact fallback dictionary inline here as well.
    const fallbackInjector = `
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
    if (!content.includes('exactBgImage')) {
        content = content.replace(/const isCommercial = commercialServices\.includes\(service\);/g, `const isCommercial = commercialServices.includes(service);\n${fallbackInjector}`);
        content = content.replace(/bgImage=\{content\?\.image\}/g, `bgImage={exactBgImage}`);
        fs.writeFileSync(dynamicRoutePath, content, 'utf8');
        console.log(`Updated dynamic route ${dynamicRoutePath}`);
    } else {
        console.log(`Dynamic Route already updated.`);
    }
}


console.log('✅ Final Review Complete.');

