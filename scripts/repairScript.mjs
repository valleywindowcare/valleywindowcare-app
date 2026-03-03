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

        // 1. Fix missing opening brackets like "ProMatcher](http..." -> "[ProMatcher](http..."
        // Use a safe regex that doesn't capture too much
        body = body.replace(/(^|[^\[])([A-Za-z0-9\s\-_]+)\]\((http|\/)/g, '$1[$2]($3');

        // Fix duplicate closing parentheses caused by recursive scrubs previously
        body = body.replace(/\)\)/g, ')');
        body = body.replace(/\]\]/g, ']');

        // 2. Wipe ALL old Answer Capsules perfectly
        let paragraphs = body.split('\n\n');
        paragraphs = paragraphs.filter(p => {
            const lower = p.toLowerCase();
            // Match any paragraph that looks like our generated capsule
            if (p.startsWith('**') && lower.includes('valley window care') && (lower.includes('provides expert') || lower.includes('across northeast wisconsin'))) {
                return false;
            }
            return true;
        });

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

        // 3. Inject ONE perfect Quad Answer Capsule
        const newCapsule = `**[Valley Window Care and Exterior Cleaning](/service-areas/green-bay) provides expert [${primaryServiceName}](${primaryServiceLink}) services securely engineered to protect your property. Operating across Northeast Wisconsin, including [Appleton, WI](/service-areas/appleton), our fully certified teams deliver spotless, long-lasting results that elevate curb appeal instantly.**`;

        paragraphs.unshift(newCapsule);

        body = paragraphs.join('\n\n');

        const finalContent = `${frontmatter}\n\n${body.trim()}\n`;
        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
    });
    console.log("✅ Global Repair Execution Finalized.");
}

processFiles();
