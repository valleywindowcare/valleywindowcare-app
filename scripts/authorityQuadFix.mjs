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

        // 1. Global Content Sanitization (The Regex Scrub)
        body = body.replace(/\[\/?fusion_[^\]]+\]/g, '');
        body = body.replace(/<\/?div[^>]*>/g, '');
        body = body.replace(/<\/?span[^>]*>/g, '');
        // Naked URL replacing
        body = body.replace(/(?<!\]\()\s*https?:\/\/(www\.)?valleywindowcare\.com\/contact[^\s)]*/gi,
            ' [Contact Valley Window Care and Exterior Cleaning](/contact) '
        );
        body = body.replace(/(?<!\]\()\s*https?:\/\/(www\.)?valleywindowcare\.com[^\s)]*/gi,
            ' [Contact Valley Window Care and Exterior Cleaning](/contact) '
        );

        // Find existing capsule and remove it so we can rewrite it perfectly
        let paragraphs = body.split('\n\n');
        const existingCapsuleIndex = paragraphs.findIndex(p => p.startsWith('**') && p.toLowerCase().includes('valley window care'));
        if (existingCapsuleIndex !== -1) {
            paragraphs.splice(existingCapsuleIndex, 1);
        }

        // Determine Primary Service
        const serviceMap = {
            'window': { name: 'window cleaning', link: '/services/window-cleaning' },
            'pressure': { name: 'pressure washing', link: '/services/pressure-washing' },
            'roof': { name: 'roof cleaning', link: '/services/roof-cleaning' },
            'gutter': { name: 'gutter cleaning', link: '/services/gutter-cleaning' },
            'paver': { name: 'paver cleaning', link: '/services/pressure-washing' },
            'house': { name: 'house washing', link: '/services/house-washing' }
        };
        let primaryServiceName = 'exterior cleaning';
        let primaryServiceLink = '/services/pressure-washing';
        for (let [key, val] of Object.entries(serviceMap)) {
            if (frontmatter.toLowerCase().includes(key) || paragraphs.slice(0, 3).join(' ').toLowerCase().includes(key)) {
                primaryServiceName = val.name;
                primaryServiceLink = val.link;
                break;
            }
        }

        // 2 & 3. The Authority Link Quad & Answer Capsule
        // Link 1: Service
        // Link 2: Brand -> Green Bay
        // Link 3: Appleton, WI -> Appleton
        // Link 4: PWNA.org
        const newCapsule = `**[Valley Window Care and Exterior Cleaning](/service-areas/green-bay) provides expert [${primaryServiceName}](${primaryServiceLink}) services securely engineered to protect your property. Operating across Northeast Wisconsin, including [Appleton, WI](/service-areas/appleton), our fully certified teams deliver spotless, long-lasting results that elevate curb appeal instantly.**`;

        paragraphs.unshift(newCapsule);

        let hasExternal = paragraphs.some(p => p.includes('IWCA.org') || p.includes('PWNA.org'));
        if (!hasExternal) {
            paragraphs.push(`> *Committed to exterior excellence, we follow the strict compliance and safety guidelines set forth by the [PWNA.org](https://www.pwna.org).*`);
        } else {
            for (let i = 0; i < paragraphs.length; i++) {
                if (paragraphs[i].includes('PWNA.org') && !paragraphs[i].includes('](')) {
                    paragraphs[i] = paragraphs[i].replace(/PWNA\.org/g, '[PWNA.org](https://www.pwna.org)');
                }
                if (paragraphs[i].includes('IWCA.org') && !paragraphs[i].includes('](')) {
                    paragraphs[i] = paragraphs[i].replace(/IWCA\.org/g, '[IWCA.org](https://www.iwca.org)');
                }
            }
        }

        // Final Typography formatting / Clean James Voss signature
        let cleanedLines = paragraphs.filter(p => !p.includes('*By James Voss') && !p.includes('– Valley Window Care and Exterior Cleaning*'));
        cleanedLines.push(`*By James Voss – Valley Window Care and Exterior Cleaning*`);

        body = cleanedLines.join('\n\n');

        // Erase any broken lingering brackets, e.g. empty []() or double square brackets
        body = body.replace(/\[\]\([^)]+\)/g, '');
        body = body.replace(/\[\[/g, '[').replace(/\]\]/g, ']');

        const finalContent = `${frontmatter}\n\n${body.trim()}\n`;
        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Authority Quad Execution on: ${file}`);
    });
}

processFiles();
