import fs from 'fs';
import path from 'path';

const searchTerms = [
    { target: '/assets/authentic-crew-photo.jpg', replacement: '/images/portfolio/valley-window-care-truck.webp' },
    { target: '/site-gallery/authentic-crew-photo.jpg', replacement: '/images/portfolio/valley-window-care-truck.webp' },
    { target: 'https://valleywindowcare.com/assets/authentic-crew-photo.jpg', replacement: 'https://valleywindowcare.com/images/portfolio/valley-window-care-truck.webp' },
    { target: '/assets/truck-background.jpg', replacement: '/images/portfolio/valley-window-care-truck.webp' },
    { target: 'alt="Valley Window Care and Exterior Cleaning"', replacement: 'alt="Expert exterior cleaning and window washing in Green Bay and the Fox Valley"' },
    { target: 'alt={content.altText || `${serviceName} in ${cityName}, WI - Valley Window Care`}', replacement: 'alt={`${serviceName} before and after in ${cityName}, WI - Valley Window Care`}' },
    { target: 'alt={content.altText || `Professional Exterior Cleaning in ${cityName}, WI - Valley Window Care`}', replacement: 'alt={`Expert exterior cleaning before and after in ${cityName}, WI - Valley Window Care`}' }
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (stat.isFile() && /\.(tsx|ts|js|jsx)$/.test(file)) {
            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;

            for (const { target, replacement } of searchTerms) {
                // Global replacement for strings
                content = content.split(target).join(replacement);
            }

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated: ${filePath}`);
            }
        }
    }
}

// Start traversal
const srcDir = path.join(process.cwd(), 'src');
processDirectory(srcDir);

// Specifically replace window-cleaning page background
const wcPagePath = path.join(srcDir, 'app', 'services', 'window-cleaning', 'page.tsx');
if (fs.existsSync(wcPagePath)) {
    let wcContent = fs.readFileSync(wcPagePath, 'utf8');
    wcContent = wcContent.replace('bgImage="/images/portfolio/valley-window-care-truck.webp"', 'bgImage="/images/portfolio/window-cleaning-before-after.JPG.webp"');
    fs.writeFileSync(wcPagePath, wcContent, 'utf8');
}

console.log('✅ Global Asset Replacement & SEO Alt-Text Injection Complete.');
