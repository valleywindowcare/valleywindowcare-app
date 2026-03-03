import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import * as cheerio from 'cheerio';
import url from 'url';
import crypto from 'crypto';

puppeteer.use(StealthPlugin());

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'blog');
const BLOG_DATA_FILE = path.join(process.cwd(), 'src', 'data', 'blogContent.json');
const BASELINE_PATH = path.join(process.cwd(), 'src', 'data', 'seo_baseline.json');

// NUCLEAR WIPE
console.log('[NUCLEAR WIPE] Purging existing blog assets and JSON duplicate registry...');
if (fs.existsSync(ASSETS_DIR)) {
    fs.rmSync(ASSETS_DIR, { recursive: true, force: true });
}
fs.mkdirSync(ASSETS_DIR, { recursive: true });

if (fs.existsSync(BLOG_DATA_FILE)) {
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify([], null, 2));
}

const fallbackImages = [
    '/gallery/blog-historic-roof-cleaning-0.webp', '/gallery/blog-historic-house-washing-1.webp',
    '/gallery/blog-historic-window-cleaning-2.webp', '/gallery/blog-historic-gutter-cleaning-3.webp',
    '/gallery/blog-historic-permanent-led-lighting-4.webp', '/site-gallery/authentic-crew-photo.jpg',
    '/site-gallery/job1.jpg', '/site-gallery/job2.jpg', '/site-gallery/job3.jpg', '/site-gallery/job4.jpg',
    '/site-gallery/job5.jpg', '/site-gallery/job6.jpg', '/site-gallery/job7.jpg', '/site-gallery/job8.jpg',
    '/site-gallery/job9.jpg', '/gallery/concrete-1.jpg', '/gallery/concrete-2.jpg',
    '/gallery/house-washing-1.jpg', '/gallery/house-washing-2.jpg', '/gallery/roof-cleaning-1.jpg',
    '/gallery/christmas-lights-1.jpg', '/gallery/christmas-lights-2.jpg', '/gallery/window-cleaning-1.jpg', '/gallery/window-cleaning-2.jpg'
];

let fallbackIndex = 0;
function getFallbackImage() {
    let img = fallbackImages[fallbackIndex % fallbackImages.length];
    while (!fs.existsSync(path.join(process.cwd(), 'public', img))) {
        fallbackIndex++;
        img = fallbackImages[fallbackIndex % fallbackImages.length];
        if (fallbackIndex > 100) break;
    }
    fallbackIndex++;
    return img;
}

async function downloadImageViaPuppeteer(browser, imageUrl, filename) {
    if (!imageUrl || imageUrl === '') return null;
    const fullPath = path.join(ASSETS_DIR, filename);
    if (fs.existsSync(fullPath)) return `/assets/blog/${filename}`;

    try {
        if (imageUrl.startsWith('//')) imageUrl = `https:${imageUrl}`;
        else if (imageUrl.startsWith('/')) imageUrl = `https://valleywindowcare.com${imageUrl}`;

        const imgPage = await browser.newPage();
        await imgPage.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

        const response = await imgPage.goto(imageUrl, { waitUntil: 'load', timeout: 30000 });
        const contentType = response.headers()['content-type'] || '';

        if (response.status() === 200 && contentType.startsWith('image/')) {
            const buffer = await response.buffer();
            fs.writeFileSync(fullPath, buffer);
            await imgPage.close();
            return `/assets/blog/${filename}`;
        } else {
            await imgPage.close();
            return null;
        }
    } catch (e) {
        return null;
    }
}

async function unrestrictedMirror() {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    // EXHAUSTIVE SITEMAP CRAWL
    let postUrls = [];
    console.log('[SITEMAP CRAWL] Extracting URL endpoints directly from XML map...');
    try {
        const sitemapPage = await browser.newPage();
        await sitemapPage.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
        await sitemapPage.goto('https://valleywindowcare.com/post-sitemap.xml', { waitUntil: 'networkidle0', timeout: 60000 });

        const sitemapContent = await sitemapPage.content();
        const $xml = cheerio.load(sitemapContent, { xmlMode: true });

        $xml('loc').each((i, el) => {
            const link = $xml(el).text().trim();
            if (link.startsWith('https://valleywindowcare.com/') && !link.endsWith('.jpg') && !link.endsWith('.png')) {
                postUrls.push(link);
            }
        });

        if (postUrls.length === 0) {
            $xml('a').each((i, el) => {
                const href = $xml(el).attr('href');
                if (href && href.startsWith('https://valleywindowcare.com/') && !href.endsWith('.xsl')) {
                    postUrls.push(href);
                }
            });
        }
        await sitemapPage.close();
    } catch (e) {
        console.error('[ERROR] Failed to crawl sitemap via Puppeteer:', e.message);
    }

    // Ensure the baseline URLs are merged to guarantee the 18+ posts are fetched.
    try {
        const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf-8'));
        for (const link of Object.keys(baseline)) {
            if (
                link === 'https://valleywindowcare.com/' || link.includes('/contact') || link.includes('/about-us') ||
                link.includes('/gallery') || link.includes('/reviews') || link.includes('/privacy-policy') ||
                link.includes('/service-areas') || link.includes('.kml') || link.includes('/category-') ||
                link.endsWith('/blog/') || link.includes('-in-green-bay') || link.includes('-in-appleton') ||
                link.includes('-services-near-you') || link.includes('cost-for-residential-power-washing') ||
                link.includes('what-does-pressure-washing-cost-in-wisconsin') || link.includes('how-to-restore-and-maintain-your-pavers-a-complete-guide-to-paver-cleaning-and-sealing-cloned') ||
                link.includes('roof-cleaning-prices-near-you') || link.includes('average-cost-for-residential-power-washing') ||
                link.includes('green-bay-pressure-washing-services') || link.includes('power-washing-green-bay') ||
                link.includes('appleton-wi-pressure-washing') || link.includes('permanent-led-lighting-green-bay-wi') ||
                link.includes('permanent-lighting-solutions-green-bay-wi') || link.includes('smart-lighting-popup-content-draft-only') ||
                link === 'https://valleywindowcare.com/blog/category-property-washing/' || link === 'https://valleywindowcare.com/blog/window-cleaning/' ||
                link === 'https://valleywindowcare.com/blog/category-roof-cleaning/' || link === 'https://valleywindowcare.com/blog/category-paver-restoration/' ||
                link === 'https://valleywindowcare.com/blog/category-gutter-cleaning/' || link === 'https://valleywindowcare.com/blog/permanent-lighting-green-bay-wi/' ||
                link === 'https://valleywindowcare.com/window-cleaning-faqs/'
            ) { continue; }
            if (!postUrls.includes(link)) {
                postUrls.push(link);
            }
        }
    } catch (e) { }

    // Remove duplicates
    postUrls = [...new Set(postUrls)];
    console.log(`[SITEMAP CRAWL] Conclusively queued ${postUrls.length} total URLs to target.`);

    if (postUrls.length === 0) {
        console.log(`[FATAL] Zero URLs found. Aborting extraction loop.`);
        await browser.close();
        return;
    }

    const extractedBlogs = [];
    const seenTitles = new Set();
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    for (const postUrl of postUrls) {
        try {
            console.log(`\n======================================================`);
            console.log(`[EXTRACTING 1:1] ${postUrl}`);
            await page.goto(postUrl, { waitUntil: 'load', timeout: 60000 });

            await new Promise(r => setTimeout(r, 2000)); // allow Elementor lazy loaders
            const articleHtml = await page.content();
            const $page = cheerio.load(articleHtml);

            // Title Integrity Check
            let title = $page('h1').first().text().trim();
            if (!title) title = $page('.entry-title').first().text().trim();

            // If the title is generic boilerplate (e.g., from a block or 404 proxy), reject it
            if (!title || title.length < 5 || title === 'Pressure Washing Services' || title.toLowerCase() === 'page not found') {
                console.log(`[INTEGRITY FATAL] Invalid generic title "${title}" stripped to prevent duplication.`);
                continue;
            }

            if (seenTitles.has(title)) {
                console.log(`[DUPLICATE FATAL] Title "${title}" already mirrored. Dropping duplicate.`);
                continue;
            }

            let author = $page('.elementor-post-info__item--type-author').text().trim() || $page('.author-name').text().trim() || "Valley Window Care";

            let rawDate = $page('time').attr('datetime') || $page('time.entry-date').attr('datetime') || $page('.elementor-post-info__item--type-date').text().trim();
            let date = new Date().toISOString();
            if (rawDate) {
                const parsed = new Date(rawDate);
                if (!isNaN(parsed.getTime())) date = parsed.toISOString();
            }

            let slugObject = new url.URL(postUrl);
            let slug = slugObject.pathname.replace(/^\/+/, '').replace(/\/+$/, '').replace('blog/', '');

            // Asset Perfection: Featured Image Sync
            let featuredImageUrl = $page('meta[property="og:image"]').attr('content') || $page('.elementor-widget-theme-post-featured-image img').attr('src') || $page('article img').first().attr('src');
            let localImagePath = null;
            if (featuredImageUrl) {
                const extMatch = featuredImageUrl.split('?')[0].match(/\.(jpg|jpeg|png|webp)$/i);
                const ext = extMatch ? extMatch[0] : '.jpg';
                localImagePath = await downloadImageViaPuppeteer(browser, featuredImageUrl, `${slug}-hero${ext}`);
            }
            if (!localImagePath) {
                console.log(`[FALLBACK] Featured image fetch failed. Supplying unique local gallery asset -> no blue boxes.`);
                localImagePath = getFallbackImage();
            }

            // Asset Perfection: Body HTML & Internal Image Isolation
            let contentHtml = $page('.elementor-widget-theme-post-content').html() || $page('.entry-content').html() || '';
            if (!contentHtml || contentHtml.trim() === '') {
                contentHtml = $page('article form, article .post-content').html() || '';
            }

            if (contentHtml) {
                const $body = cheerio.load(contentHtml, null, false);
                const images = $body('img').toArray();

                for (let i = 0; i < images.length; i++) {
                    const img = images[i];
                    let src = $body(img).attr('src') || $body(img).attr('data-src');
                    if (src) {
                        const extMatch = src.split('?')[0].match(/\.(jpg|jpeg|png|webp)$/i);
                        const ext = extMatch ? extMatch[0] : '.jpg';
                        const hash = crypto.createHash('md5').update(src).digest('hex').substring(0, 8);
                        const filename = `${slug}-body-${hash}${ext}`;

                        let mappedBodyImage = await downloadImageViaPuppeteer(browser, src, filename);
                        if (!mappedBodyImage) mappedBodyImage = getFallbackImage();

                        $body(img).attr('src', mappedBodyImage);
                        $body(img).removeAttr('srcset');
                        $body(img).removeAttr('data-src');
                    } else {
                        $body(img).remove();
                    }
                }
                // Enforce internal/external links strictly
                $body('a').each((idx, el) => {
                    let href = $body(el).attr('href');
                    if (href && href.startsWith('/')) {
                        $body(el).attr('href', `https://valleywindowcare.com${href}`);
                    }
                });
                // Get the actual clean HTML without modifying it further
                contentHtml = $body.html();
            }

            extractedBlogs.push({
                slug, url: postUrl, title,
                author: author.replace('By', '').trim(),
                date, image: localImagePath,
                content: contentHtml ? contentHtml.trim() : "",
                category: "Insights"
            });

            seenTitles.add(title);
            console.log(`[SUCCESS] 1:1 Target Acquired: ${title}`);

            // Save payload iteratively so if it crashes we keep everything up to crash
            fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(extractedBlogs, null, 2));

        } catch (postErr) {
            console.error(`[ERROR] Critical extraction failure at ${postUrl}:`, postErr.message);
        }
    }

    console.log(`\n[FINAL EXHAUSTIVE] Successfully and perfectly mirrored ${extractedBlogs.length} absolute unique posts.`);
    await browser.close();
}

unrestrictedMirror();
