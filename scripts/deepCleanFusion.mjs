import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

// Regex patterns to convert raw HTML tags back to Markdown equivalents gracefully
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
    '> *Learn more about energy-efficient home maintenance from [Energy.gov](https://www.energy.gov).*',
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

        // 1. Strip WP Fusion Builder Shortcodes Aggressively
        body = body.replace(/\[\/?fusion_[^\]]+\]/g, '');

        // 2. Convert remaining HTML to Markdown Headers/Lists
        body = body.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
        body = body.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
        body = body.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
        body = body.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');
        body = body.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
        body = body.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
        body = body.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');

        // Let's protect anchor links momentarily
        body = body.replace(/<a href="([^"]+)".*?>(.*?)<\/a>/gi, '[$2]($1)');

        // 3. Delete ALL remaining HTML tags aggressively (divs, spans, classes)
        body = body.replace(/<[^>]+>/g, '');

        // 4. Fix collapsed lines and HTML entities natively
        body = body.replace(/&nbsp;/g, ' ');
        body = body.replace(/&amp;/g, '&');
        body = body.replace(/\n{3,}/g, '\n\n'); // Limit multiple line breaks

        // 5. Inject Markdown links instead of HTML links
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

        // 6. CTA Link Correction 
        body = body.replace(/\(?920\)?[-.\s]?609[-.\s]?7085/g, '');

        // Remove old CTA texts if present to prevent duplication
        body = body.replace(/Ready for a clean home\? Call Valley Window Care at \[?\(920\)[\]\s-]*609-7085.*/gi, '');
        body = body.replace(/Ready to transform your home\? Call \[?\(920\)[\]\s-]*609-7085.*/gi, '');
        body = body.replace(/\*By James Voss\*/g, '');
        body = body.replace(/> \*We proudly align.*/g, '');
        body = body.replace(/> \*Committed to exterior excellence.*/g, '');
        body = body.replace(/> \*Learn more about energy.*/g, '');

        const externalLink = EXTERNAL_SOURCES[index % EXTERNAL_SOURCES.length];

        const finalCta = `

${externalLink}

**Ready to transform your home? Call [(920) 609-7085](tel:920-609-7085).**

*By James Voss*
`;

        const finalContent = `${frontmatter}\n\n${body.trim()}\n${finalCta}`;

        fs.writeFileSync(path.join(POSTS_DIR, file), finalContent, 'utf8');
        console.log(`✅ Stripped Fusion Junk & Injected Native Markdown Authority into: ${file}`);
    });
}

processFiles();
