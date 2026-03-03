import fs from 'fs';
import * as cheerio from 'cheerio';

const dataPath = './src/data/blogContent.json';
const blogs = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

const serviceKeywords = [
    { keyword: 'roof cleaning', link: '/services/roof-cleaning' },
    { keyword: 'house washing', link: '/services/house-washing' },
    { keyword: 'gutter cleaning', link: '/services/gutter-cleaning' },
    { keyword: 'pressure washing', link: '/services/pressure-washing' },
    { keyword: 'window cleaning', link: '/services/window-cleaning' },
    { keyword: 'concrete cleaning', link: '/services/concrete-cleaning' },
    { keyword: 'driveway cleaning', link: '/services/concrete-cleaning' },
    { keyword: 'paver', link: '/services/paver-patio-restorations' },
    { keyword: 'christmas lighting', link: '/services/christmas-lighting' },
    { keyword: 'soft washing', link: '/services/soft-washing' },
    { keyword: 'building washing', link: '/services/building-washing' },
    { keyword: 'commercial', link: '/services/building-washing' }
];

let updatedCount = 0;

for (let blog of blogs) {
    const $ = cheerio.load(blog.content, null, false);

    // 1. Semantic Header Overhaul: Convert standalone <strong> or <b> to <h2>
    $('p > strong, p > b').each((i, el) => {
        const parentP = $(el).parent('p');
        const textLength = $(el).text().trim().length;
        const parentContentLength = parentP.text().trim().length;

        // If the bold text is basically the entire paragraph (like a faux header) and it's short-ish
        if (textLength > 5 && textLength < 100 && textLength >= parentContentLength * 0.8) {
            const newH2 = $('<h2>').text($(el).text().trim());
            parentP.replaceWith(newH2);
        }
    });

    // Strip existing H1s inside the body, the template handles the true H1 at the top.
    $('h1').each((i, el) => {
        const newH2 = $('<h2>').text($(el).text().trim());
        $(el).replaceWith(newH2);
    });

    // Clean up empty paragraphs left behind
    $('p').each((i, el) => {
        if (!$(el).text().trim() && !$(el).find('img').length) {
            $(el).remove();
        }
    });

    // 2. Dynamic Meta Description Generation (150-160 chars)
    if (!blog.meta_description) {
        let firstParagraphText = $('p').first().text().trim();
        if (firstParagraphText.length > 155) {
            firstParagraphText = firstParagraphText.substring(0, 155) + '...';
        }
        blog.meta_description = firstParagraphText || `Read the latest on ${blog.title} from Valley Window Care.`;
    }

    // 3. Strategic Internal Linking
    // Only link the FIRST mention of a service to avoid spamming the text
    let linkedKeywords = new Set();

    $('p').each((i, el) => {
        let html = $(el).html() || '';
        let hasChanges = false;

        for (const { keyword, link } of serviceKeywords) {
            if (!linkedKeywords.has(keyword)) {
                // Case-insensitive regex that respects word boundaries and avoids replacing inside existing A tags
                const regex = new RegExp(`(?<!<a[^>]*>\\b)(${keyword})(?!\\b[^<]*</a>)`, 'i');
                if (regex.test(html)) {
                    html = html.replace(regex, `<a href="${link}" class="text-navy font-bold hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4">$1</a>`);
                    linkedKeywords.add(keyword);
                    hasChanges = true;
                }
            }
        }

        if (hasChanges) {
            $(el).html(html);
        }
    });

    blog.content = $.html();
    updatedCount++;
}

fs.writeFileSync(dataPath, JSON.stringify(blogs, null, 2));
console.log(`Successfully SEO-optimized ${updatedCount} blog posts!`);
