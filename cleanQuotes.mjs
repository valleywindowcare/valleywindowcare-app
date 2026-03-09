import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src', 'app', 'services');

function cleanTrailingQuotes(dir) {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        if (entry.isDirectory()) {
            cleanTrailingQuotes(path.join(dir, entry.name));
        } else if (entry.name === 'page.tsx') {
            const pagePath = path.join(dir, entry.name);
            let content = fs.readFileSync(pagePath, 'utf8');
            let modified = false;

            // Looking for double quotes at the end of bgImage like: bgImage="/...webp""
            if (content.match(/bgImage="[^"]+"\s*"/g)) {
                 content = content.replace(/(bgImage="[^"]+")\s*"/g, '$1 ');
                 modified = true;
            }

            // Also check for trailing quotes before newline or closing bracket: bgImage="/...webp"" \n
            if (content.match(/bgImage="[^"]+""/g)) {
                 content = content.replace(/(bgImage="[^"]+)""/g, '$1"');
                 modified = true;
            }

            if (modified) {
                fs.writeFileSync(pagePath, content, 'utf8');
                console.log(`Cleaned trailing quotes -> ${pagePath}`);
            }
        }
    }
}

cleanTrailingQuotes(srcDir);
console.log('✅ Quote purge sweep complete.');
