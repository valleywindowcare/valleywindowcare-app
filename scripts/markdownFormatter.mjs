import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

// Regex patterns to convert raw HTML tags back to Markdown equivalents gracefully
// (if the scraper dropped raw html tags into the .md files, we clean them here)

const INTERNAL_LINKS = [
    { regex: /(?<!\[)(window cleaning)(?!\])/i, replacement: '[Window Cleaning](/services/window-cleaning)' },
    { regex: /(?<!\[)(pressure washing|power washing)(?!\])/i, replacement: '[Pressure Washing](/services/pressure-washing)' },
    { regex: /(?<!\[)(roof cleaning|washing a roof)(?!\])/i, replacement: '[Roof Cleaning](/services/roof-cleaning)' },
    { regex: /(?<!\[)(gutter cleaning)(?!\])/i, replacement: '[Gutter Cleaning](/services/gutter-cleaning)' },
    { regex: /(?<!\[)(house washing)(?!\])/i, replacement: '[House Washing](/services/house-washing)' },
    { regex: /(?<!\[)(paver cleaning|concrete cleaning)(?!\])/i, replacement: '[Concrete Cleaning](/services/concrete-cleaning)' }
];

const LOCATION_LINKS = [
    { regex: /(?<!\[)(Green Bay)(?!\])/i, replacement: '[Green Bay](/service-areas/green-bay)' },
    { regex: /(?<!\[)(Appleton)(?!\])/i, replacement: '[Appleton](/service-areas/appleton)' },
    { regex: /(?<!\[)(De Pere)(?!\])/i, replacement: '[De Pere](/service-areas/de-pere)' },
    { regex: /(?<!\[)(Oshkosh)(?!\])/i, replacement: '[Oshkosh](/service-areas/oshkosh)' },
    { regex: /(?<!\[)(Ledgeview)(?!\])/i, replacement: '[Ledgeview](/service-areas/ledgeview)' }
];

const EXTERNAL_SOURCES = [
    '> *We proudly align our industry standards with leading organizational groups like the [IWCA.org](https://www.iwca.org) to guarantee exceptional, compliant results.*',
    '> *Committed to exterior excellence, we follow the strict compliance and safety guidelines set forth by the [PWNA.org](https://www.pwna.org).*'
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

        // 1. Strip all previously injected HTML blocks forcefully, including the old raw <div> anchors
        body = body.replace(/<div class="mt-8 pt-8 border-t border-gray-200">[\s\S]*?<\/div>/g, '');
        body = body.replace(/<div class="mt-6 mb-4[\s\S]*?<\/div>\s*<span[\s\S]*?<\/span>\s*<\/div>/g, '');
        body = body.replace(/<p class="mt-8 italic[^>]*>.*?<\/p>/g, '');
        body = body.replace(/<p><strong>By James Voss<\/strong><\/p>/g, '');

        // Strip legacy HTML anchors containing (920) to avoid double wrapping
        body = body.replace(/<a href="tel:920-609-7085"[^>]*>\(920\)\s*609-7085<\/a>/g, '(920) 609-7085');
        // Clean up remaining raw HTML anchor tags that ReactMarkdown would fail to render
        body = body.replace(/<a href="([^"]+)".*?>(.*?)<\/a>/g, '[$2]($1)');

        // 2. Inject Markdown links instead of HTML links
        let injectedCount = 0;
        for (let rule of INTERNAL_LINKS) {
            if (injectedCount >= 2) break;
            if (rule.regex.test(body)) {
                body = body.replace(rule.regex, rule.replacement);
                injectedCount++;
            }
        }

        let locInjected = false;
        for (let rule of LOCATION_LINKS) {
            if (!locInjected && rule.regex.test(body)) {
                body = body.replace(rule.regex, rule.replacement);
                locInjected = true;
            }
        }

        // 3. CTA Link Correction - Make it beautifully rendered Markdown
        body = body.replace(/\(?920\)?[-.\s]?609[-.\s]?7085/g, ''); // Strip floating instances

        const externalLink = EXTERNAL_SOURCES[index % EXTERNAL_SOURCES.length];

        const finalCta = `

${externalLink}

**Ready for a clean home? Call Valley Window Care at [(920) 609-7085](tel:920-609-7085).**

*By James Voss*
`;

        const finalContent = `${frontmatter}\n${body.trim()}\n${finalCta}`;

        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Formatted Markdown & Injected Link Authority into: ${file}`);
    });

    console.log("🚀 Pure Markdown SEO Matrix Executed Successfully.");
}

processFiles();
