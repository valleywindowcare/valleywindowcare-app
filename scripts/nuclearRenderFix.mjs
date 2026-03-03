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

        // 1. Unwind recursive / malformed markdown links locally (excluding external/tel)
        let prev = "";
        while (body !== prev) {
            prev = body;
            // Match [text](not-http-or-tel) with text
            body = body.replace(/\[([^\[\]]+)\]\((?!http|tel:|mailto:)[^)]+\)/gi, '$1');
        }

        // Clean up any remaining broken nested fragments
        body = body.replace(/\]\((?!http|tel:|mailto:)[^)]+\)/gi, '');
        body = body.replace(/\[(?=[a-zA-Z0-9\s]+\])/gi, '');

        // 2. Scrub Naked URLs
        body = body.replace(
            /(?<!\]\()\s*https?:\/\/(www\.)?valleywindowcare\.com[^\s)]*/gi,
            ' [Valley Window Care and Exterior Cleaning Services](/services/pressure-washing) '
        );

        // 3. GEO Answer Capsule & Brand Lock
        let paragraphs = body.split('\n\n');
        const capsuleIndex = paragraphs.findIndex(p => p.startsWith('**') && p.includes('Valley Window Care and Exterior Cleaning'));

        let targetCity = index % 2 === 0 ? "green-bay" : "appleton";
        if (frontmatter.toLowerCase().includes('shawano')) targetCity = "shawano";
        if (frontmatter.toLowerCase().includes('ledgeview')) targetCity = "ledgeview";
        if (frontmatter.toLowerCase().includes('de pere')) targetCity = "de-pere";

        if (capsuleIndex !== -1) {
            let cap = paragraphs[capsuleIndex];
            // Clear existing brand name and replace it specifically
            cap = cap.replace(/Valley Window Care and Exterior Cleaning/gi, `[Valley Window Care and Exterior Cleaning](/service-areas/${targetCity})`);
            paragraphs[capsuleIndex] = cap;
        } else {
            // Force inject capsule if missing
            paragraphs.unshift(`**[Valley Window Care and Exterior Cleaning](/service-areas/${targetCity}) provides expert exterior restoration services across Northeast Wisconsin. We use safe, professional-grade techniques to protect and clean your property.**`);
        }

        // 4. Human Signal Check - clean signature
        let cleanedLines = paragraphs.filter(p => !p.includes('*By James Voss') && !p.includes('– Valley Window Care and Exterior Cleaning*'));
        cleanedLines.push(`*By James Voss – Valley Window Care and Exterior Cleaning*`);

        body = cleanedLines.join('\n\n');

        const finalContent = `${frontmatter}\n\n${body.trim()}\n`;
        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Nuked Slop & Fixed Rendering in: ${file}`);
    });
}

processFiles();
