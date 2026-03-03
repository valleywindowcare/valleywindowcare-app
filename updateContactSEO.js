const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (dirPath.includes('node_modules')) return;
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(dirPath);
    });
}

walk(srcPath, (filePath) => {
    if (!filePath.endsWith('.tsx')) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    // Contact Page Email Update
    if (filePath.includes('contact/page.tsx') || filePath.includes('contact/ContactForm.tsx')) {
        content = content.replace(/James@ValleyWindowCare\.com/g, 'info@valleywindowcare.com');
    }

    // Add rel="nofollow" to <a href="tel:..."> and <a href="mailto:...">
    content = content.replace(/(<a[^>]+href=["'](?:tel|mailto):[^"']+["'][^>]*?)>/g, (match, p1) => {
        if (!p1.includes('rel=')) {
            return p1 + ' rel="nofollow">';
        }
        if (p1.includes('rel="') && !p1.includes('nofollow')) {
            return p1.replace(/rel="([^"]+)"/, 'rel="$1 nofollow"') + '>';
        }
        return match;
    });

    // Add rel="nofollow" to <Link href="tel:...">
    content = content.replace(/(<Link[^>]+href=["'](?:tel|mailto):[^"']+["'][^>]*?)>/g, (match, p1) => {
        if (!p1.includes('rel=')) {
            return p1 + ' rel="nofollow">';
        }
        if (p1.includes('rel="') && !p1.includes('nofollow')) {
            return p1.replace(/rel="([^"]+)"/, 'rel="$1 nofollow"') + '>';
        }
        return match;
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated SEO Anchors: ${filePath}`);
    }
});
console.log('One-Tap Conversion Routing Complete.');
