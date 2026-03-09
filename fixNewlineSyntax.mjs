import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src', 'app');

function fixSyntaxString(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    if (content.includes('\\n];')) {
         content = content.replace(/\\n\];/g, '\\n];');
         // effectively we need to replace literal backslash n with actual newline
         content = content.split('\\\\n];').join('\\n];');
         modified = true;
    }
    if (content.includes('\\n    ]')) {
         content = content.split('\\\\n    ]').join('\\n    ]'); // literal \\n
         modified = true;
    }
    
    // Better, let's just do a blanket regex for physical text '\n' ignoring actual newlines
    if (content.includes('\\n')) {
        let prev = content;
        content = content.replace(/\\\\n/g, '\\n');
        if (content !== prev) modified = true;
    }
    
    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('✅ Syntax patched in ' + filePath);
    }
}

fixSyntaxString(path.join(baseDir, 'gallery', 'page.tsx'));
fixSyntaxString(path.join(baseDir, 'service-areas', '[city]', 'page.tsx'));
fixSyntaxString(path.join(baseDir, 'service-areas', '[city]', '[service]', 'page.tsx'));
fixSyntaxString(path.join(baseDir, 'services', '[service]', 'page.tsx'));
