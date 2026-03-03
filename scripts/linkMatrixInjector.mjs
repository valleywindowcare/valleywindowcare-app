import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

const INTERNAL_LINKS = [
    { regex: /(?<!\[)(window cleaning)(?!\])/i, replacement: '<a href="/services/window-cleaning" class="text-gold font-bold hover:underline">$1</a>' },
    { regex: /(?<!\[)(pressure washing|power washing)(?!\])/i, replacement: '<a href="/services/pressure-washing" class="text-gold font-bold hover:underline">$1</a>' },
    { regex: /(?<!\[)(roof cleaning|washing a roof)(?!\])/i, replacement: '<a href="/services/roof-cleaning" class="text-gold font-bold hover:underline">$1</a>' },
    { regex: /(?<!\[)(gutter cleaning)(?!\])/i, replacement: '<a href="/services/gutter-cleaning" class="text-gold font-bold hover:underline">$1</a>' },
    { regex: /(?<!\[)(house washing)(?!\])/i, replacement: '<a href="/services/house-washing" class="text-gold font-bold hover:underline">$1</a>' },
    { regex: /(?<!\[)(paver cleaning|concrete cleaning)(?!\])/i, replacement: '<a href="/services/concrete-cleaning" class="text-gold font-bold hover:underline">$1</a>' }
];

const LOCATION_LINKS = [
    { regex: /(?<!\[)(Green Bay)(?!\])/i, replacement: '<a href="/service-areas/green-bay" class="text-navy font-bold hover:underline hover:text-navy-dark">$1</a>' },
    { regex: /(?<!\[)(Appleton)(?!\])/i, replacement: '<a href="/service-areas/appleton" class="text-navy font-bold hover:underline hover:text-navy-dark">$1</a>' },
    { regex: /(?<!\[)(De Pere)(?!\])/i, replacement: '<a href="/service-areas/de-pere" class="text-navy font-bold hover:underline hover:text-navy-dark">$1</a>' },
    { regex: /(?<!\[)(Oshkosh)(?!\])/i, replacement: '<a href="/service-areas/oshkosh" class="text-navy font-bold hover:underline hover:text-navy-dark">$1</a>' },
    { regex: /(?<!\[)(Ledgeview)(?!\])/i, replacement: '<a href="/service-areas/ledgeview" class="text-navy font-bold hover:underline hover:text-navy-dark">$1</a>' }
];

const EXTERNAL_SOURCES = [
    '<p class="mt-8 italic text-sm text-gray-500 border-l-4 border-gold pl-4">We proudly align our industry standards with leading organizational groups like the <a href="https://www.iwca.org/" target="_blank" rel="noopener noreferrer" class="font-bold underline text-gold">International Window Cleaning Association (IWCA)</a> to guarantee exceptional, compliant results.</p>',
    '<p class="mt-8 italic text-sm text-gray-500 border-l-4 border-gold pl-4">Committed to exterior excellence, we follow the strict compliance and safety guidelines set forth by the <a href="https://www.pwna.org/" target="_blank" rel="noopener noreferrer" class="font-bold underline text-gold">Power Washers of North America (PWNA)</a>.</p>'
];

function processFiles() {
    if (!fs.existsSync(POSTS_DIR)) return;

    const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

    files.forEach((file, index) => {
        let content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
        let originalContent = content;

        // Extract Frontmatter and Body
        const matterMatch = content.match(/^(---[\s\S]+?---)\n([\s\S]*)$/);
        if (!matterMatch) return;

        const frontmatter = matterMatch[1];
        let body = matterMatch[2];

        // 1. Inject up to 2 random internal service links
        let injectedCount = 0;
        for (let rule of INTERNAL_LINKS) {
            if (injectedCount >= 2) break; // Don't over-stuff
            if (rule.regex.test(body)) {
                body = body.replace(rule.regex, rule.replacement);
                injectedCount++;
            }
        }

        // 2. Inject up to 1 location link
        let locInjected = false;
        for (let rule of LOCATION_LINKS) {
            if (!locInjected && rule.regex.test(body)) {
                body = body.replace(rule.regex, rule.replacement);
                locInjected = true;
            }
        }

        // 3. Make sure (920) 609-7085 is strictly standard across any stragglers
        body = body.replace(/\(?920\)?[-.\s]?609[-.\s]?7085/g, '<a href="tel:920-609-7085" class="text-gold font-bold hover:underline">(920) 609-7085</a>');
        // Prevent doubling up links if it was already an anchor
        body = body.replace(/<a[^>]*><a[^>]*>(.*?)<\/a><\/a>/g, '<a href="tel:920-609-7085" class="text-gold font-bold hover:underline">$1</a>');

        // 4. Inject Author branding and External link right before the very last CTA block
        const externalLink = EXTERNAL_SOURCES[index % EXTERNAL_SOURCES.length];

        // Let's insert it securely at the end of the text, above the final custom CTA <div>
        const splitTags = body.split('<div class="mt-8 pt-8 border-t border-gray-200">');

        if (splitTags.length > 1) {
            const brandInject = `
${externalLink}

<div class="mt-6 mb-4 flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm">JV</div>
    <span class="font-bold text-gray-800">By James Voss</span>
</div>
`;
            body = splitTags[0] + brandInject + '\n<div class="mt-8 pt-8 border-t border-gray-200">' + splitTags[1];
        } else {
            body = body + '\n\n' + externalLink + '\n\n<p><strong>By James Voss</strong></p>';
        }

        const finalContent = `${frontmatter}\n${body}`;

        if (originalContent !== finalContent) {
            fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
            console.log(`✅ Patched SEO Matrix for: ${file}`);
        }
    });

    console.log("🚀 SEO Authority Injection Matrix Executed Successfully across all files.");
}

processFiles();
