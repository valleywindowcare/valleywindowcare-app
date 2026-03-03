import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import * as cheerio from 'cheerio';

const BLOG_DATA_FILE = path.join(process.cwd(), 'src', 'data', 'blogContent.json');
const BASELINE_PATH = path.join(process.cwd(), 'src', 'data', 'seo_baseline.json');

puppeteer.use(StealthPlugin());

async function harvestGoogleCache() {
    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');

    // 1. Identify pure blog posts from the baseline to bypass the sitemap block
    const postUrls = [];
    try {
        const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf-8'));
        for (const [link, data] of Object.entries(baseline)) {
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
            postUrls.push(link);
        }
    } catch (e) { }

    console.log(`[TARGET ACQUISITION] Found ${postUrls.length} absolute URLs targeted for Google Cache extraction.`);

    const extractedBlogs = [];
    const seenTitles = new Set();

    // Purge the old data immediately as requested 
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify([], null, 2));

    for (const postUrl of postUrls) {
        try {
            console.log(`\n======================================================`);
            console.log(`[EXTRACTING CACHE] ${postUrl}`);

            // Format Wayback Machine URL
            const cacheUrl = `https://web.archive.org/web/2/https://${new URL(postUrl).hostname}${new URL(postUrl).pathname}`;

            await page.goto(cacheUrl, { waitUntil: 'domcontentloaded', timeout: 45000 });
            const pageHtml = await page.content();

            if (pageHtml.includes('Wayback Machine has not archived that URL') || pageHtml.includes('404')) {
                console.log(`[ARCHIVE FAIL] Wayback Machine missing for ${postUrl}.`);
                continue;
            }

            const $page = cheerio.load(pageHtml);

            // Remove Wayback injected header
            $page('#wm-ipp-base').remove();

            let title = $page('h1').first().text().trim();
            if (!title) title = $page('.entry-title').first().text().trim();

            // If the title is generic boilerplate (e.g., from a block or 404 proxy), reject it
            if (!title || title.length < 5 || title === 'Pressure Washing Services' || title.toLowerCase() === 'page not found') {
                console.log(`[INTEGRITY FATAL] Invalid generic title "${title}". Skipping.`);
                continue;
            }

            if (seenTitles.has(title)) {
                console.log(`[DUPLICATE FATAL] Title "${title}" already mirrored. Dropping duplicate.`);
                continue;
            }

            let slug = new URL(postUrl).pathname.replace(/^\/+/, '').replace(/\/+$/, '').replace('blog/', '');

            let contentHtml = $page('.elementor-widget-theme-post-content').html() || $page('.entry-content').html() || '';
            if (!contentHtml) contentHtml = $page('article form, article .post-content').html() || '';

            if (contentHtml) {
                const $body = cheerio.load(contentHtml, null, false);
                // We are instructed to pull original body images or gallery photos. We will leave original domains to let them load exactly 1:1.
                $body('a').each((idx, el) => {
                    let href = $body(el).attr('href');
                    if (href && href.startsWith('/')) {
                        $body(el).attr('href', `https://valleywindowcare.com${href}`);
                    }
                });
                contentHtml = $body.html();
            }

            extractedBlogs.push({
                slug,
                url: postUrl,
                title,
                author: "Valley Window Care",
                date: new Date().toISOString(),
                image: `/gallery/blog-historic-roof-cleaning-0.webp`, // Safely mapping the fallback since cache blocks cross-origin fetches usually.
                content: contentHtml ? contentHtml.trim() : "",
                category: "Insights"
            });

            seenTitles.add(title);
            console.log(`[SUCCESS] Recovered from cache: ${title}`);

            fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(extractedBlogs, null, 2));

            // Wait specifically to stop Google banning our puppet for spamming cache links
            await new Promise(resolve => setTimeout(resolve, 5000));

        } catch (e) {
            console.error(`[FATAL ERROR] Cache extraction failed for ${postUrl}`, e.message);
        }
    }

    console.log(`\n[FINAL COUNT] Exactly ${extractedBlogs.length} real posts recovered from Google Cache.`);
    await browser.close();
}

harvestGoogleCache();
