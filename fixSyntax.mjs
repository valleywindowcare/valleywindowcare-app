import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src', 'app');

function fixSyntaxErrors(dir) {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
        if (entry.isDirectory()) {
            fixSyntaxErrors(path.join(dir, entry.name));
        } else if (entry.name === 'page.tsx' || entry.name === 'layout.tsx') {
            const pagePath = path.join(dir, entry.name);
            let content = fs.readFileSync(pagePath, 'utf8');
            let modified = false;

            // Fix missing space after closing quote/bracket and before attributes like alt, src, className, etc.
            // Example: bgImage="/images/portfolio/soft-washing.webp"/images/service-areas/green-bay/... 
            // The previous regex might have caused: bgImage="/images/portfolio/soft-washing.webp"/images/...
            // The user says: image={null}alt= or }alt= or "alt=
            
            // Fix }alt=
            if (content.includes('}alt=')) {
                content = content.replace(/}alt=/g, '} alt=');
                modified = true;
            }
            // Fix "alt=
            if (content.includes('"alt=')) {
                 content = content.replace(/"alt=/g, '" alt=');
                 modified = true;
            }
            
            // Wait, looking at the previous output:
            // Rewriting soft-wash Hero:  -> /images/portfolio/soft-washing.webp
            // The previous content was: bgImage="/images/service-areas/green-bay/soft-washing-green-bay.webp" 
            // My regex replaced it but might have left garbage: bgImage="/images/portfolio/soft-washing.webp"/images/service-areas/green-bay/soft-washing-green-bay.webp" 
            // Let's use a regex to clean up any malformed bgImage props.
            
            // Specifically looking for: bgImage="/path/to/image.webp"/some-other-junk
            const malformedBgRegex = /bgImage=(["'])(\/images\/portfolio\/[^"']+\.webp)\1\/[^ "'>]+/g;
            if (content.match(malformedBgRegex)) {
                content = content.replace(malformedBgRegex, 'bgImage=$1$2$1');
                modified = true;
            }
            
            // User specifically asked for `image={null}alt=` or similar
            const missingSpaceRegex = /(["'}])([a-zA-Z]+)=/g;
            // Example: }alt= -> } alt=, "className= -> " className=
            // But we have to be careful not to break valid things. Let's just fix }alt=, "alt=, and any obvious `bgImage="..."alt=`
            if (content.match(/(["'}])(alt|className|src|href|id|style|priority)=/g)) {
                content = content.replace(/(["'}])(alt|className|src|href|id|style|priority)=/g, '$1 $2=');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(pagePath, content, 'utf8');
                console.log(`Repaired JSX Syntax -> ${pagePath}`);
            }
        }
    }
}

// Target services and service-areas specifically to be safe
fixSyntaxErrors(path.join(srcDir, 'services'));
fixSyntaxErrors(path.join(srcDir, 'service-areas'));

console.log('✅ Syntax Error Sweep Complete.');
