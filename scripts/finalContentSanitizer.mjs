import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

const CITIES = ["Green Bay", "De Pere", "Appleton", "Shawano", "Ledgeview", "Oshkosh", "Neenah"];

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

        // 1. NUKE ALL RECURSIVE OR MESSY LINKS
        // Keep doing this until no more standard markdown links exist, but exclude external http links temporarily if we want?
        // Actually, we want to strip all local links so we can strictly control them.
        let prevBody = "";
        while (body !== prevBody) {
            prevBody = body;
            // Match local links only: [text](/link)
            body = body.replace(/\[([^\]]+)\]\(\/(service-areas|services)\/[^\)]+\)/g, '$1');
        }

        // Let's also strip leftover broken ones like `[Appleton](/service-areas/[Appleton`
        body = body.replace(/\[([^\]]+)\]\(\/?[^\)]*\)/g, (match, p1) => {
            if (match.includes('http')) return match; // Keep external links for now
            if (match.includes('tel:')) return match; // Keep CTA
            return p1;
        });

        // Strip any remaining Fusion Builder junk
        body = body.replace(/\[\/?fusion_[^\]]+\]/g, '');
        body = body.replace(/<\/?div[^>]*>/g, '');
        body = body.replace(/<\/?span[^>]*>/g, '');

        // 2. RE-APPLY: Answer Capsule Entity Reinforcement
        // Ensure every post starts with a bolded 2–4 sentence Answer Capsule that explicitly names 'Valley Window Care and Exterior Cleaning'.
        // Let's just find the first paragraph that starts with ** and ends with **
        let paragraphs = body.split('\n\n');

        const answerCapsuleIndex = paragraphs.findIndex(p => p.startsWith('**') || p.toLowerCase().includes('valley window care'));
        if (answerCapsuleIndex !== -1) {
            let cap = paragraphs[answerCapsuleIndex];

            // Clean any nested bolding
            cap = cap.replace(/\*\*/g, '');
            // Put it back together clean
            if (!cap.includes('Valley Window Care and Exterior Cleaning')) {
                cap = cap.replace(/^(We provide|Provides|Expert)/i, 'Valley Window Care and Exterior Cleaning provides');
            }

            // GEO Link Priority: First internal link to Green Bay or Appleton
            let targetCity = index % 2 === 0 ? "Green Bay" : "Appleton";
            let targetSlug = targetCity.toLowerCase().replace(' ', '-');

            // Priority Rule: Unless a blog post is specifically about a different area
            if (frontmatter.toLowerCase().includes('shawano')) { targetCity = "Shawano"; targetSlug = "shawano"; }
            else if (frontmatter.toLowerCase().includes('ledgeview')) { targetCity = "Ledgeview"; targetSlug = "ledgeview"; }
            else if (frontmatter.toLowerCase().includes('de pere')) { targetCity = "De Pere"; targetSlug = "de-pere"; }

            // Inject the link on the brand name
            cap = cap.replace('Valley Window Care and Exterior Cleaning', `[Valley Window Care and Exterior Cleaning](/service-areas/${targetSlug})`);

            paragraphs[answerCapsuleIndex] = `**${cap.trim()}**`;
        }

        // 3. Re-appy 1 Service Link contextually in paragraph 2
        let p2Index = paragraphs.findIndex((p, idx) => idx > answerCapsuleIndex && p.trim().length > 20 && !p.startsWith('#') && !p.startsWith('|') && !p.startsWith('>'));

        if (p2Index !== -1) {
            let p2 = paragraphs[p2Index];
            if (!p2.includes('](/services/')) {
                // Find a service keyword to link
                const services = [
                    { k: /window cleaning/i, l: '/services/window-cleaning' },
                    { k: /pressure washing/i, l: '/services/pressure-washing' },
                    { k: /roof cleaning/i, l: '/services/roof-cleaning' },
                    { k: /gutter cleaning/i, l: '/services/gutter-cleaning' },
                    { k: /house washing/i, l: '/services/house-washing' }
                ];

                let linked = false;
                for (let s of services) {
                    if (s.k.test(p2)) {
                        p2 = p2.replace(s.k, (match) => `[${match}](${s.l})`);
                        linked = true;
                        break;
                    }
                }

                if (!linked) {
                    p2 += ` Discover our professional [exterior cleaning services](/services/pressure-washing) today.`;
                }
                paragraphs[p2Index] = p2;
            }
        }

        // 4. Human Signals: Final Signature
        // Clean old signatures
        let finalLines = paragraphs.filter(p => !p.includes('*By James Voss') && !p.includes('– Valley Window Care and Exterior Cleaning*'));

        // Ensure we have the CTA
        const ctaIndex = finalLines.findIndex(p => p.includes('(920) 609-7085'));
        if (ctaIndex !== -1) {
            finalLines[ctaIndex] = `**Ready to transform your home? Call [(920) 609-7085](tel:920-609-7085).**`;
        }

        finalLines.push(`*By James Voss – Valley Window Care and Exterior Cleaning*`);

        body = finalLines.join('\n\n');

        const finalContent = `${frontmatter}\n\n${body.trim()}\n`;
        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Fully Sanitized and Re-Linked: ${file}`);
    });
}

processFiles();
