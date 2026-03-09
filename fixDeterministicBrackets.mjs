import fs from 'fs';
import path from 'path';

const baseDir = path.join(process.cwd(), 'src', 'app');

function fixJSX(filePath) {
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    const unbracketedRegex = /([a-zA-Z]+)=(getDeterministicHero\([^)]+\))/g;
    
    if (content.match(unbracketedRegex)) {
         content = content.replace(unbracketedRegex, '$1={$2}');
         modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('✅ Applied JSX brackets to ' + filePath);
    }
}

// 1. Service Areas Hub
fixJSX(path.join(baseDir, 'service-areas', '[city]', 'page.tsx'));

// 2. Service Areas Service Page
fixJSX(path.join(baseDir, 'service-areas', '[city]', '[service]', 'page.tsx'));

// 3. Standalone Services Config
fixJSX(path.join(baseDir, 'services', '[service]', 'page.tsx'));

console.log('✅ JSX bracket repair complete.');
