const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src/data');
const lightingDir = path.join(__dirname, 'public/gallery/permanent-lighting');
const cleaningDir = path.join(__dirname, 'public/gallery/exterior-cleaning');

const lightingFiles = new Set(fs.readdirSync(lightingDir));
const cleaningFiles = new Set(fs.readdirSync(cleaningDir));

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (dirPath.includes('node_modules')) return;
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(dirPath);
    });
}

walk(srcDir, (filePath) => {
    if (!filePath.endsWith('.json')) return;

    let content = fs.readFileSync(filePath, 'utf-8');
    let original = content;

    lightingFiles.forEach(f => {
        const rx = new RegExp(`/gallery/${f.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
        content = content.replace(rx, `/gallery/permanent-lighting/${f}`);
    });

    cleaningFiles.forEach(f => {
        const rx = new RegExp(`/gallery/${f.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}`, 'g');
        content = content.replace(rx, `/gallery/exterior-cleaning/${f}`);
    });

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated paths in ${filePath}`);
    }
});
console.log('JSON Migration Complete.');
