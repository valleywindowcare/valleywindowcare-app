const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'src/app/contact/page.tsx',
    'src/app/service-areas/[city]/page.tsx',
    'src/app/service-areas/page.tsx',
    'src/app/about-us/page.tsx',
    'src/app/faq/page.tsx',
    'src/app/blog/page.tsx',
    'src/app/blog/[slug]/page.tsx',
    'src/app/layout.tsx',
    'src/app/page.tsx',
    'src/app/[slug]/page.tsx',
    'src/app/services/[service]/page.tsx',
    'src/components/Header.tsx',
    'src/components/SuccessState.tsx',
    'src/data/serviceContent.ts',
    'src/data/blogContent.json',
    'src/data/seo_baseline.json'
];

let totalReplacements = 0;

filesToUpdate.forEach(file => {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace "Valley Window Care" ONLY IF it is not already followed by "and Exterior Cleaning" or "And Exterior Cleaning"
    // Using a negative lookahead
    const regex = /Valley Window Care(?!\s+(and|And)\s+Exterior\s+Cleaning)/g;
    
    const matches = content.match(regex);
    if (matches) {
        totalReplacements += matches.length;
        content = content.replace(regex, 'Valley Window Care and Exterior Cleaning');
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${matches.length} instances in ${file}`);
    }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);
