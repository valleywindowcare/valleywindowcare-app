import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import https from 'https';

const BASE_URL = 'https://valleywindowcare.com';
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'blog');
const BLOG_DATA_FILE = path.join(process.cwd(), 'src', 'data', 'blogContent.json');
const BASELINE_PATH = path.join(process.cwd(), 'src', 'data', 'seo_baseline.json');

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// 1. Manually curate exact known URLs from the baseline
// The WAF blocks the index, but we can hit individual articles directly if we give it time
const knownUrls = [];
try {
    const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, 'utf-8'));
    for (const url of Object.keys(baseline)) {
        if (
            url === 'https://valleywindowcare.com/' ||
            url.includes('/contact') ||
            url.includes('/about-us') ||
            url.includes('/gallery') ||
            url.includes('/reviews') ||
            url.includes('/privacy-policy') ||
            url.includes('/service-areas') ||
            url.includes('.kml') ||
            url.includes('/category-') ||
            url.endsWith('/blog/') ||
            url.includes('-in-green-bay') ||
            url.includes('-in-appleton') ||
            url.includes('-services-near-you') ||
            url.includes('cost-for-residential-power-washing') ||
            url.includes('what-does-pressure-washing-cost-in-wisconsin') ||
            url.includes('how-to-restore-and-maintain-your-pavers-a-complete-guide-to-paver-cleaning-and-sealing-cloned') ||
            url.includes('roof-cleaning-prices-near-you') ||
            url.includes('average-cost-for-residential-power-washing') ||
            url.includes('green-bay-pressure-washing-services') ||
            url.includes('power-washing-green-bay') ||
            url.includes('appleton-wi-pressure-washing') ||
            url.includes('permanent-led-lighting-green-bay-wi') ||
            url.includes('permanent-lighting-solutions-green-bay-wi') ||
            url.includes('smart-lighting-popup-content-draft-only') ||
            url === 'https://valleywindowcare.com/blog/category-property-washing/' ||
            url === 'https://valleywindowcare.com/blog/window-cleaning/' ||
            url === 'https://valleywindowcare.com/blog/category-roof-cleaning/' ||
            url === 'https://valleywindowcare.com/blog/category-paver-restoration/' ||
            url === 'https://valleywindowcare.com/blog/category-gutter-cleaning/' ||
            url === 'https://valleywindowcare.com/blog/permanent-lighting-green-bay-wi/' ||
            url === 'https://valleywindowcare.com/window-cleaning-faqs/'
        ) {
            continue;
        }
        knownUrls.push(url);
    }
} catch (e) {
    console.error("Baseline read failed", e);
}

// Helper to manually download an image
async function downloadImage(url, filename) {
    const fullPath = path.join(ASSETS_DIR, filename);
    if (fs.existsSync(fullPath)) {
        console.log(`[INFO] Image ${filename} already exists. Skipping.`);
        return `/assets/blog/${filename}`;
    }

    return new Promise((resolve, reject) => {
        console.log(`[INFO] Downloading ${url}...`);
        if (url.startsWith('//')) url = `https:${url}`;
        else if (url.startsWith('/')) url = `${BASE_URL}${url}`;

        const request = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        }, function (response) {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(fullPath);
                response.pipe(file);
                file.on('finish', function () {
                    file.close(() => {
                        console.log(`[OK] Saved ${filename}`);
                        resolve(`/assets/blog/${filename}`);
                    });
                });
            } else {
                reject(new Error(`Server responded with ${response.statusCode}: ${response.statusMessage}`));
            }
        });

        request.on('error', function (err) {
            reject(err);
        });
    });
}

async function scrapeBlogs() {
    console.log(`[START] Launching Puppeteer to scrape ${knownUrls.length} known articles individually...`);

    // We launch headless=false to avoid being flagged instantly as a bot
    const browser = await puppeteer.launch({
        headless: "new",
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1366, height: 768 });

    const extractedBlogs = [];

    for (const url of knownUrls) {
        try {
            console.log(`\n---------------------------------`);
            console.log(`[SCRAPE] Navigating directly to: ${url}`);

            await page.goto(url, { waitUntil: 'load', timeout: 60000 });

            // Wait to clear WAF challenge / redirect if present
            await new Promise(r => setTimeout(r, 6000));

            const articleHtml = await page.content();

            // If we're still stuck on the JS challenge page
            if (articleHtml.includes('sgcaptcha') || articleHtml.includes('Robot Challenge')) {
                console.log("[WARN] Stuck on captcha screen for this post. Skipping to next.");
                continue;
            }

            const $page = cheerio.load(articleHtml);

            let title = $page('h1').first().text().trim() || $page('.entry-title').first().text().trim();
            if (!title) continue; // If no title, it's not a real content page

            let author = $page('.elementor-post-info__item--type-author').text().trim() || $page('.author-name').text().trim() || "Valley Window Care";

            let rawDate = $page('time').attr('datetime') || $page('time.entry-date').attr('datetime') || $page('.elementor-post-info__item--type-date').text().trim();
            let date = new Date().toISOString();
            if (rawDate) {
                const parsed = new Date(rawDate);
                if (!isNaN(parsed.getTime())) date = parsed.toISOString();
            }

            let featuredImageUrl = $page('meta[property="og:image"]').attr('content') || $page('.elementor-widget-theme-post-featured-image img').attr('src') || $page('article img').first().attr('src');

            let localImagePath = null;
            if (featuredImageUrl) {
                const urlParts = featuredImageUrl.split('/');
                const originalFilename = urlParts[urlParts.length - 1].split('?')[0];
                let slugPath = url.replace(BASE_URL, '').replace(/^\/+/, '').replace(/\/+$/, '').replace('blog/', '');

                const extensionMatch = originalFilename.match(/\.(jpg|jpeg|png|webp)$/i);
                const ext = extensionMatch ? extensionMatch[0] : '.jpg';
                const filename = `${slugPath}-hero${ext}`;

                try {
                    localImagePath = await downloadImage(featuredImageUrl, filename);
                } catch (dlErr) {
                    console.error(`[WARN] Image download failed for ${featuredImageUrl}: ${dlErr.message}`);
                }
            }

            // The main instruction: EXAACT COPY MIRRORING (Full Body HTML Formatting)
            let contentHtml = $page('.elementor-widget-theme-post-content').html() || $page('.entry-content').html() || '';

            let slug = url.replace(BASE_URL, '').replace(/^\/+/, '').replace(/\/+$/, '').replace('blog/', '');

            extractedBlogs.push({
                slug,
                url,
                title,
                author: author.replace('By', '').trim(),
                date,
                image: localImagePath,
                content: contentHtml.trim(),
                category: "Company News"
            });

            console.log(`[SUCCESS] Extracted exact match: ${title}`);

        } catch (postErr) {
            console.error(`[ERROR] Failed to extract ${url}:`, postErr.message);
        }
    }

    if (extractedBlogs.length > 0) {
        fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(extractedBlogs, null, 2));
        console.log(`\n[FINAL] Mirrored ${extractedBlogs.length} real posts via Puppeteer into ${BLOG_DATA_FILE}`);
    } else {
        console.error(`[FATAL] No valid payloads built. JSON remains empty.`);
    }

    await browser.close();
}

scrapeBlogs();
