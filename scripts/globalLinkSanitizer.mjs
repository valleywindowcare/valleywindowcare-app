import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

function processFiles() {
    if (!fs.existsSync(POSTS_DIR)) return;

    const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

    files.forEach((file, index) => {
        let content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');

        // Extract Frontmatter and Body
        const matterMatch = content.match(/^(---[\s\S]+?---)\n([\s\S]*)$/);
        if (!matterMatch) return;

        const frontmatter = matterMatch[1];
        let body = matterMatch[2];

        // 1. NUKE RAW URL STRINGS strictly checking for brackets
        // Look for naked http/https valleywindowcare.com links
        body = body.replace(/(?<!\]\()\s*https?:\/\/(www\.)?valleywindowcare\.com\/contact[^\s)]*/gi,
            ' [Contact Valley Window Care and Exterior Cleaning](/contact) '
        );
        body = body.replace(/(?<!\]\()\s*https?:\/\/(www\.)?valleywindowcare\.com[^\s)]*/gi,
            ' [Valley Window Care and Exterior Cleaning Services](/services/pressure-washing) '
        );

        // Nuke any trailing slop bracket markers like `](http://valleywindowcare.com/contact/)` or `](tel:)` or empty `[]`
        body = body.replace(/\]\(http:\/\/valleywindowcare\.com\/contact\/?\)/gi, '');
        body = body.replace(/\[\]/g, '');

        // 2. ENFORCE MARKDOWN RENDERING (Fixing broken [Text](link))
        // Sometimes nested markdown like [[Text](/link)](/link) or [**Text**](/link) happens
        body = body.replace(/\[\*\*([^*]+)\*\*\]\(([^)]+)\)/g, '**[$1]($2)**');

        // 3. GEO PRIORITY RE-LOCK
        // Ensure every post starts with a bolded 2–4 sentence Answer Capsule that explicitly names 'Valley Window Care and Exterior Cleaning'.
        let paragraphs = body.split('\n\n');
        const capsuleIndex = paragraphs.findIndex(p => p.startsWith('**') && p.includes('Valley Window Care and Exterior Cleaning'));

        let targetCity = index % 2 === 0 ? "green-bay" : "appleton";
        if (frontmatter.toLowerCase().includes('shawano')) targetCity = "shawano";
        if (frontmatter.toLowerCase().includes('ledgeview')) targetCity = "ledgeview";
        if (frontmatter.toLowerCase().includes('de pere')) targetCity = "de-pere";

        if (capsuleIndex !== -1) {
            let cap = paragraphs[capsuleIndex];
            // Clear existing brand name and replace it specifically if not linked properly
            if (!cap.includes(`](/service-areas/${targetCity})`)) {
                cap = cap.replace(/\[?Valley Window Care and Exterior Cleaning\]?\([^\)]+\)/gi, 'Valley Window Care and Exterior Cleaning'); // Strip existing
                cap = cap.replace(/Valley Window Care and Exterior Cleaning/gi, `[Valley Window Care and Exterior Cleaning](/service-areas/${targetCity})`);
                paragraphs[capsuleIndex] = cap;
            }
        }

        // 4. AUTHOR SIGNATURE CLEANUP
        // Strip out any broken variations, raw code, or duplicates
        let cleanedLines = paragraphs.filter(p => !p.includes('*By James Voss') && !p.includes('– Valley Window Care and Exterior Cleaning*'));
        cleanedLines.push(`*By James Voss – Valley Window Care and Exterior Cleaning*`);

        body = cleanedLines.join('\n\n');

        const finalContent = `${frontmatter}\n\n${body.trim()}\n`;
        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Global Link Sanitization Execution on: ${file}`);
    });
}

processFiles();
