import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

const CITIES = [
    { name: "Shawano", slug: "shawano" },
    { name: "De Pere", slug: "de-pere" },
    { name: "Ledgeview", slug: "ledgeview" },
    { name: "Oshkosh", slug: "oshkosh" },
    { name: "Neenah", slug: "neenah" },
    { name: "Green Bay", slug: "green-bay" },
    { name: "Appleton", slug: "appleton" }
];

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

        const titleMatch = frontmatter.match(/title:\s*"(.*?)"/);
        const title = titleMatch ? titleMatch[1] : "";

        // Determine specific city
        let targetCity = null;
        for (const city of CITIES) {
            if (title.toLowerCase().includes(city.name.toLowerCase())) {
                targetCity = city;
                break;
            }
        }

        // Target Appleton or Green Bay otherwise
        if (!targetCity) {
            targetCity = (index % 2 === 0) ? CITIES.find(c => c.name === "Green Bay") : CITIES.find(c => c.name === "Appleton");
        }

        // Entity Reinforcement check (First sentence of Answer Capsule)
        // Usually looks like: **Valley Window Care and Exterior Cleaning provides...
        if (!body.includes('**Valley Window Care and Exterior Cleaning')) {
            // Force it if missing somehow
            body = body.replace(/^\*\*(.*?)\*\*/, '**Valley Window Care and Exterior Cleaning $1**');
        }

        // Inject Hyper-Local Link Priority in the second general paragraph
        const paragraphs = body.split('\n\n');

        let p2Index = paragraphs.findIndex((p, idx) => idx > 1 && p.trim().length > 30 && !p.startsWith('#') && !p.startsWith('>') && !p.startsWith('|'));
        if (p2Index !== -1) {
            const locLink = `[${targetCity.name}](/service-areas/${targetCity.slug})`;

            if (!paragraphs[p2Index].includes(locLink) && !paragraphs[p2Index].includes(`](/service-areas/${targetCity.slug})`)) {
                // Append tightly
                paragraphs[p2Index] = paragraphs[p2Index] + ` We specialize in servicing residents and businesses immediately in the ${locLink} area.`;
            }
        }

        body = paragraphs.join('\n\n');

        const finalContent = `${frontmatter}\n\n${body.trim()}`;

        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Injected Hyper-Local Link priority for ${targetCity.name} into: ${file}`);
    });
}

processFiles();
