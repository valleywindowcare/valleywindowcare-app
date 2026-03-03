import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

const LOCATIONS = ["Green Bay", "De Pere", "Appleton", "Shawano", "Ledgeview", "Oshkosh", "Neenah"];

function generateAnswerCapsule(title) {
    // Generate a bolded 2-4 sentence direct answer based on the article title
    const serviceMatch = title.toLowerCase().match(/(roof cleaning|window cleaning|pressure washing|house washing|gutter cleaning|paver)/) || "exterior service";
    const service = serviceMatch[0] ? serviceMatch[0] : "exterior service";

    return `**Valley Window Care and Exterior Cleaning provides expert ${service} across Northeast Wisconsin. We utilize advanced, low-pressure soft-wash techniques and professional-grade detergents that preserve property value and extend material life for up to 20+ years.**\n\n`;
}

function generatePricingTable() {
    return `
### Estimated Pricing Factors

| Service Factor | Average Impact | Description |
| :--- | :--- | :--- |
| **Property Size** | High | Larger sq. ft. requires more detergent and labor time. |
| **Grime/Stain Severity** | Medium | Heavy algae or rust stains may require specialized chemical treatments. |
| **Accessibility** | Low-Medium | Multi-story homes or steep roof pitches require additional safety rigging. |

`;
}

function generateFAQ(title) {
    const serviceMatch = title.toLowerCase().match(/(roof|window|pressure|house|gutter|paver)/) || "service";
    const topic = serviceMatch[0] ? serviceMatch[0] : "cleaning";

    return `
### Frequently Asked Questions (FAQ)

**1. Is professional ${topic} safe for my home?**
Yes. Valley Window Care and Exterior Cleaning strictly adheres to low-pressure, damage-free soft washing protocols recommended by the PWNA and roofing manufacturers.

**2. How long do the results last?**
Because our biodegradable detergents actively eliminate mold, algae, and bacterial root systems, the clean results frequently last 3 to 4 times longer than traditional high-pressure blasting.

**3. Are your technicians insured?**
Absolutely. James Voss and every operator carry comprehensive premium liability coverage, ensuring 100% peace of mind while we are restoring your property.
`;
}

function processFiles() {
    if (!fs.existsSync(POSTS_DIR)) return;

    const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

    files.forEach((file, index) => {
        let content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');

        const matterMatch = content.match(/^(---[\s\S]+?---)\n([\s\S]*)$/);
        if (!matterMatch) return;

        const frontmatter = matterMatch[1];
        let body = matterMatch[2];

        // Ensure we don't double inject
        if (body.includes('**Valley Window Care and Exterior Cleaning provides expert')) {
            console.log(`Skipping (already processed): ${file}`);
            return;
        }

        const titleMatch = frontmatter.match(/title:\s*"(.*?)"/);
        const title = titleMatch ? titleMatch[1] : "Exterior Cleaning";

        // 1. Inject Answer Capsule at the top
        const answerCapsule = generateAnswerCapsule(title);

        // 2. Brand Entity Alignment (Replace "we" / "our")
        let weCount = 0;
        body = body.replace(/\b([Ww]e|[Oo]ur)\b/g, (match) => {
            if (weCount < 2) {
                weCount++;
                return match === match.toLowerCase() ? "Valley Window Care and Exterior Cleaning" : "Valley Window Care and Exterior Cleaning";
            }
            return match;
        });

        // 3. Location Injection into P1
        const randomLocation = LOCATIONS[index % LOCATIONS.length];
        const paragraphs = body.split('\n\n');
        let p1Index = paragraphs.findIndex(p => p.trim().length > 30 && !p.startsWith('#') && !p.startsWith('>'));

        if (p1Index !== -1 && !paragraphs[p1Index].includes(randomLocation)) {
            // Safely inject location into P1
            paragraphs[p1Index] = paragraphs[p1Index].replace(/(\.|$)/, ` specifically serving homeowners throughout ${randomLocation}$1`);
        }

        body = paragraphs.join('\n\n');

        // 4. Inject Markdown Table (if not present)
        if (!body.toLowerCase().includes('| ')) {
            // Split roughly in the middle and inject table
            const splits = body.split('\n## ');
            if (splits.length > 2) {
                splits[1] = splits[1] + "\n\n" + generatePricingTable();
                body = splits.join('\n## ');
            } else {
                body = body + "\n\n" + generatePricingTable();
            }
        }

        // 5. Inject Authority Links explicitly targeting Ledgeview / Shawano and Industry external
        if (!body.includes('[Ledgeview]') && !body.includes('[Shawano]')) {
            const locLink = index % 2 === 0 ? '[Ledgeview](/service-areas/ledgeview)' : '[Shawano](/service-areas/shawano)';
            body = body.replace(/(cleaning|washing|services)/i, `$1 in ${locLink}`);
        }

        if (!body.includes('IWCA.org') && !body.includes('PWNA.org')) {
            const extLink = index % 2 === 0 ? '[IWCA.org](https://www.iwca.org)' : '[PWNA.org](https://www.pwna.org)';
            body = body + `\n\n> *Committed to excellence, our operators comply with the safety protocols established by ${extLink}.*\n`;
        }

        // 6. Append FAQ Section at the bottom, just before the universal CTA
        const ctaRegex = /\*\*Ready to transform your home\? Call \[\(920\) 609-7085\]\(tel:920-609-7085\)\.\*\*/;
        const faq = generateFAQ(title);

        if (ctaRegex.test(body)) {
            body = body.replace(ctaRegex, faq + '\n\n**Ready to transform your home? Call [(920) 609-7085](tel:920-609-7085).**');
        } else {
            body = body + '\n\n' + faq;
            body = body + '\n\n**Ready to transform your home? Call [(920) 609-7085](tel:920-609-7085).**';
        }

        // Piece it back together with the capsule at the very top of the body
        const finalContent = `${frontmatter}\n\n${answerCapsule}${body.trim()}`;

        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Injected GEO Capsule & AI Formatting into: ${file}`);
    });
}

processFiles();
