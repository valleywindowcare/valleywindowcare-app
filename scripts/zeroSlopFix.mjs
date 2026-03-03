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

        // 1. RE-VERIFY [Text](/link) structural integrity
        // The issue isn't the file ast usually, it's that nested square brackets break the remark ast.
        body = body.replace(/\[\*\*([^*]+)\*\*\]\(([^)]+)\)/g, '**[$1]($2)**');
        body = body.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, p1, p2) => {
            // If the link itself has stray brackets like /service-areas/[Appleton]
            if (p2.includes('[') || p2.includes(']')) {
                const cleanLink = p2.replace(/\[|\]/g, '').toLowerCase().replace(/ /g, '-');
                return `[${p1}](${cleanLink})`;
            }
            return match;
        });

        // 2. SCRUB NAKED URLS:
        // Replace raw http links with descriptive anchor text. e.g "Get a Real Roof Cleaning Price".
        body = body.replace(/(?<!\]\()\s*https?:\/\/(www\.)?[^\s)]*/gi, (match) => {
            if (match.includes('valleywindowcare.com')) {
                return ' [Valley Window Care and Exterior Cleaning Services](/services/pressure-washing) ';
            } else if (match.includes('tel:')) {
                return match;
            } else if (match.includes('promatcher') || match.includes('homeadvisor')) {
                return ` [Get a Real Roof Cleaning Price](/contact) `;
            }
            return match; // preserve standard external links if they snuck through without naked wrapping
        });

        // 3. Clean up the broken Call to Actions: `[](tel:)` or `**Ready for a clean home? Call Valley Window Care at [](tel:).**`
        body = body.replace(/\*\*Ready for a clean home\? Call Valley Window Care at \[\]\(tel:\)\.\*\*/gi, '');
        body = body.replace(/\[\]\(tel:\)/gi, '(920) 609-7085'); // Fallback

        // 4. Double verify Answer Capsule Entity 
        let paragraphs = body.split('\n\n');
        const capsuleIndex = paragraphs.findIndex(p => p.startsWith('**') && p.includes('Valley Window Care and Exterior Cleaning'));
        if (capsuleIndex !== -1) {
            let cap = paragraphs[capsuleIndex];
            // Ensure no nested markdown breaks it
            if (!cap.includes('](/service-areas/')) {
                let targetCity = index % 2 === 0 ? "green-bay" : "appleton";
                if (frontmatter.toLowerCase().includes('shawano')) targetCity = "shawano";
                if (frontmatter.toLowerCase().includes('ledgeview')) targetCity = "ledgeview";
                if (frontmatter.toLowerCase().includes('de pere')) targetCity = "de-pere";
                cap = cap.replace('Valley Window Care and Exterior Cleaning', `[Valley Window Care and Exterior Cleaning](/service-areas/${targetCity})`);
                paragraphs[capsuleIndex] = cap;
            }
        }

        body = paragraphs.join('\n\n');

        const finalContent = `${frontmatter}\n\n${body.trim()}\n`;
        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Zero-Slop Execution on: ${file}`);
    });
}

processFiles();
