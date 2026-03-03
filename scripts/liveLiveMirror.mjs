import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import * as cheerio from 'cheerio';
import crypto from 'crypto';

puppeteer.use(StealthPlugin());

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'blog');
const POSTS_DIR = path.join(process.cwd(), 'src', 'data', 'posts');
const BLOG_DATA_FILE = path.join(process.cwd(), 'src', 'data', 'blogContent.json');

const fallbackImages = [
    '/gallery/blog-historic-roof-cleaning-0.webp', '/gallery/blog-historic-house-washing-1.webp',
    '/gallery/blog-historic-window-cleaning-2.webp', '/gallery/blog-historic-gutter-cleaning-3.webp',
    '/gallery/blog-historic-permanent-led-lighting-4.webp', '/gallery/concrete-1.jpg', '/gallery/concrete-2.jpg',
    '/gallery/house-washing-1.jpg', '/gallery/house-washing-2.jpg', '/gallery/roof-cleaning-1.jpg',
    '/gallery/christmas-lights-1.jpg', '/gallery/christmas-lights-2.jpg', '/gallery/window-cleaning-1.jpg', '/gallery/window-cleaning-2.jpg',
    '/assets/services/roof-cleaning-1.jpg', '/assets/services/house-washing-1.jpg', '/assets/services/window-cleaning-1.jpg',
    '/assets/services/concrete-cleaning-1.jpg', '/assets/services/fence-cleaning-1.jpg', '/assets/services/deck-cleaning-1.jpg'
];

let fallbackIndex = 0;
function getFallbackImage() {
    let img = fallbackImages[fallbackIndex % fallbackImages.length];
    while (!fs.existsSync(path.join(process.cwd(), 'public', img))) {
        fallbackIndex++;
        if (fallbackIndex > 100) break;
        img = fallbackImages[fallbackIndex % fallbackImages.length];
    }
    fallbackIndex++;
    return img;
}

// Function to generate Markdown frontmatter
function generateMarkdownFrontmatter(title, _date, author, image, category, slug, htmlContent) {
    let cleanTitle = title.replace(/"/g, '\\"');
    return `---
title: "${cleanTitle}"
date: "${_date}"
author: "${author}"
image: "${image}"
category: "${category}"
---

${htmlContent}
`;
}

async function simpleFetchImage(imageUrl, filename) {
    if (!imageUrl || imageUrl === '') return null;
    const fullPath = path.join(ASSETS_DIR, filename);
    if (fs.existsSync(fullPath)) return `/assets/blog/${filename}`;

    try {
        if (imageUrl.startsWith('//')) imageUrl = `https:${imageUrl}`;
        else if (imageUrl.startsWith('/')) imageUrl = `https://valleywindowcare.com${imageUrl}`;

        const response = await fetch(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8'
            }
        });

        if (response.ok && response.headers.get('content-type').startsWith('image/')) {
            const buffer = await response.arrayBuffer();
            fs.writeFileSync(fullPath, Buffer.from(buffer));
            return `/assets/blog/${filename}`;
        }
    } catch (e) {
        console.error(`[IMAGE WARN] Fetch failed for ${imageUrl}`);
    }
    return null;
}

async function run() {
    console.log('[SITEMAP CRAWL] Extracting URL endpoints directly from live Site using Puppeteer Headed Stealth protocol...');

    // Explicitly using headed browser as requested by user to clear the sgcaptcha via GUI render
    const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: [`--user-agent=${userAgent}`, '--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    let postUrls = [];

    try {
        await page.goto('https://valleywindowcare.com/post-sitemap.xml', { waitUntil: 'load', timeout: 30000 });

        // Wait in case of sgcaptcha interstitial
        await new Promise(r => setTimeout(r, 5000));

        const xmlContent = await page.evaluate(() => document.body.innerText || document.documentElement.outerHTML);

        const $xml = cheerio.load(xmlContent, { xmlMode: true });

        $xml('loc').each((i, el) => {
            const link = $xml(el).text().trim();
            if (link.startsWith('https://valleywindowcare.com/') && !link.endsWith('.jpg') && !link.endsWith('.png')) {
                postUrls.push(link);
            }
        });

        if (postUrls.length === 0) {
            const innerLinkMatches = xmlContent.match(/https:\/\/valleywindowcare.com\/[a-zA-Z0-9-]+\//g);
            if (innerLinkMatches) {
                postUrls = innerLinkMatches;
            }
        }
    } catch (e) {
        console.log('[ERROR] Sitemap fetch failed:', e.message);
    }

    if (postUrls.length === 0) {
        console.log("[BACKUP QUEUE] Siteguard block remained up. Resorting to targeted URL queue based on sitemap.");
        // Fallback queue to hit manually since the explicit XML list wasn't visible
        postUrls = [
            'https://valleywindowcare.com/expert-hood-vent-cleaning-green-bay-hhood-vent-cleaning-green-bay/',
            'https://valleywindowcare.com/professional-power-washing-services-green-bay-wisconsin-valley-window-care/',
            'https://valleywindowcare.com/blog-exterior-home-cleaning-guide/',
            'https://valleywindowcare.com/diy-paver-patio-cleaning-solutions-with-household-products/',
            'https://valleywindowcare.com/how-to-safely-remove-moss-from-roof-shingles/',
            'https://valleywindowcare.com/gutter-cleaning-green-bay-home-maintenance/',
            'https://valleywindowcare.com/green-bay-power-washing-signs/',
            'https://valleywindowcare.com/eco-friendly-exterior-cleaning-green-bay/',
            'https://valleywindowcare.com/how-often-should-you-clean-your-roof/',
            'https://valleywindowcare.com/the-best-way-to-clean-outside-windows-in-5-steps/',
            'https://valleywindowcare.com/exterior-house-cleaning-checklist/',
            'https://valleywindowcare.com/why-tap-water-leaves-window-streaks/',
            'https://valleywindowcare.com/hiring-a-window-cleaner-guide/',
            'https://valleywindowcare.com/how-to-measure-windows-for-blinds/',
            'https://valleywindowcare.com/what-are-gutter-guards-and-do-they-work/',
            'https://valleywindowcare.com/when-to-hire-someone-to-clean-your-gutters/',
            'https://valleywindowcare.com/pressure-washing-a-deck-the-dos-and-donts/',
            'https://valleywindowcare.com/how-to-safely-decorate-your-roof-for-christmas-diy-tips-for-a-festive-stylish-holiday-home/'
        ];
    }

    postUrls = [...new Set(postUrls)].filter(link => {
        return link !== 'https://valleywindowcare.com/' &&
            !link.includes('/contact') &&
            !link.includes('/about-us') &&
            !link.includes('/gallery') &&
            !link.includes('/reviews') &&
            !link.includes('/privacy-policy') &&
            !link.includes('/service-areas') &&
            !link.includes('.kml') &&
            !link.includes('/category-') &&
            !link.endsWith('/blog/') &&
            !link.includes('-in-green-bay') &&
            !link.includes('-in-appleton') &&
            !link.includes('-services-near-you') &&
            !link.includes('cost-for-residential-power-washing') &&
            !link.includes('what-does-pressure-washing-cost-in-wisconsin') &&
            !link.includes('roof-cleaning-prices-near-you') &&
            !link.includes('average-cost-for-residential-power-washing') &&
            !link.includes('green-bay-pressure-washing-services') &&
            !link.includes('power-washing-green-bay') &&
            !link.includes('appleton-wi-pressure-washing') &&
            !link.includes('permanent-led-lighting-green-bay-wi') &&
            !link.includes('permanent-lighting-solutions-green-bay-wi') &&
            !link.includes('smart-lighting-popup-content-draft-only') &&
            link !== 'https://valleywindowcare.com/window-cleaning-faqs/';
    });

    console.log(`[SITEMAP CRAWL] Queued ${postUrls.length} total URLs to target on live site natively.`);

    // Check if we already have robust files, if so we don't wipe everything until we prove scraping works
    let successCount = 0;
    const extractedBlogs = [];
    const seenTitles = new Set();

    // Helper function for human mimicking random delay
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const randomDelay = async (min = 5000, max = 15000) => {
        const ms = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(`[STEALTH] Human mimicry: sleeping for ${ms}ms...`);
        await delay(ms);
    };

    for (const postUrl of postUrls) {
        console.log(`\n======================================================`);
        console.log(`[EXTRACTING LIVE] ${postUrl}`);

        try {
            // Aggressive human delay before making the request
            await randomDelay(5000, 10000);

            await page.goto(postUrl, { waitUntil: 'load', timeout: 45000 });
            await randomDelay(2000, 4000);

            let html = await page.content();
            const $page = cheerio.load(html);

            let title = $page('h1').first().text().trim() || $page('.entry-title').first().text().trim();

            if (!title || title.length < 5 || title === 'Pressure Washing Services' || title.toLowerCase() === 'page not found') {
                console.log(`[INTEGRITY FATAL] Invalid generic title "${title}" stripped. WAF block likely active still.`);
                continue;
            }
            if (seenTitles.has(title)) continue;

            // WE GOT ONE. If it's the first success, clear the legacy paths.
            if (successCount === 0) {
                console.log('[CLEARING DUST] Live scrape is working! Wiping /posts/ directory for the new identical mirror data.');
                if (fs.existsSync(POSTS_DIR)) {
                    fs.readdirSync(POSTS_DIR).forEach(f => fs.rmSync(path.join(POSTS_DIR, f)));
                } else {
                    fs.mkdirSync(POSTS_DIR, { recursive: true });
                }
                if (!fs.existsSync(ASSETS_DIR)) {
                    fs.mkdirSync(ASSETS_DIR, { recursive: true });
                }
                fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify([], null, 2));
            }

            let author = $page('.elementor-post-info__item--type-author').text().trim() || "Valley Window Care";
            let rawDate = $page('time').attr('datetime') || $page('time.entry-date').attr('datetime');
            let date = new Date().toISOString().split('T')[0];
            if (rawDate) {
                const parsed = new Date(rawDate);
                if (!isNaN(parsed.getTime())) date = parsed.toISOString().split('T')[0];
            }

            let slug = new URL(postUrl).pathname.replace(/^\/+/, '').replace(/\/+$/, '').replace('blog/', '');

            let featuredImageUrl = $page('meta[property="og:image"]').attr('content') || $page('.elementor-widget-theme-post-featured-image img').attr('src');
            let localImagePath = null;
            if (featuredImageUrl) {
                const ext = featuredImageUrl.split('?')[0].match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '.jpg';
                localImagePath = await simpleFetchImage(featuredImageUrl, `${slug}-hero${ext}`);
            }
            if (!localImagePath) localImagePath = getFallbackImage();

            let contentHtml = $page('.elementor-widget-theme-post-content').html() || $page('.entry-content').html() || '';
            if (contentHtml) {
                const $body = cheerio.load(contentHtml, null, false);

                const images = $body('img').toArray();
                for (let i = 0; i < images.length; i++) {
                    const img = images[i];
                    let src = $body(img).attr('src') || $body(img).attr('data-src');
                    if (src) {
                        const ext = src.split('?')[0].match(/\.(jpg|jpeg|png|webp)$/i)?.[0] || '.jpg';
                        const hash = crypto.createHash('md5').update(src).digest('hex').substring(0, 8);
                        let mappedBodyImage = await simpleFetchImage(src, `${slug}-body-${hash}${ext}`);
                        if (!mappedBodyImage) mappedBodyImage = getFallbackImage();
                        $body(img).attr('src', mappedBodyImage).removeAttr('srcset').removeAttr('data-src');
                    } else {
                        $body(img).remove();
                    }
                }
                $body('a').each((idx, el) => {
                    let href = $body(el).attr('href');
                    if (href && href.startsWith('/')) $body(el).attr('href', `https://valleywindowcare.com${href}`);
                });
                contentHtml = $body.html();
            }

            const markdownPayload = generateMarkdownFrontmatter(
                title,
                date,
                author.replace('By', '').trim(),
                localImagePath,
                "Insights",
                slug,
                contentHtml ? contentHtml.trim() : ""
            );

            const mdFilePath = path.join(POSTS_DIR, `${slug}.md`);
            fs.writeFileSync(mdFilePath, markdownPayload);

            extractedBlogs.push({
                slug, url: postUrl, title,
                author: author.replace('By', '').trim(),
                date, image: localImagePath,
                content: contentHtml ? contentHtml.trim() : "",
                category: "Insights"
            });
            seenTitles.add(title);
            successCount++;
            console.log(`[SUCCESS] TARGET ACQUIRED (1:1 LIVE MIRROR): ${title}`);

            fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(extractedBlogs, null, 2));

        } catch (e) {
            console.error(`[FATAL ERROR] Live fetch failed for ${postUrl}:`, e.message);
        }
    }

    await browser.close();

    if (successCount === 0) {
        console.log(`\n[FINAL RESULT] Scraper failed to retrieve any true live posts. The Siteground sgcaptcha or WAF is STILL ACTIVELY BLOCKING Puppeteer. No local data was deleted. Reverting to pre-existing offline mirror data.`);
    } else {
        console.log(`\n[FINAL EXHAUSTIVE] Successfully assembled ${extractedBlogs.length} absolute unique posts directly from live source.`);
    }
}

run();
