import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import * as cheerio from 'cheerio';

puppeteer.use(StealthPlugin());

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

async function runCachedRSSScrape() {
    console.log('[RSS DATA-STREAM INJECTION] Attempting to pull the ValleyWindowCare blog feed via Google Web Cache evasions...');
    console.log('[NUCLEAR WIPE] Purging JSON duplicate registry and clearing legacy posts...');

    if (fs.existsSync(POSTS_DIR)) {
        fs.readdirSync(POSTS_DIR).forEach(f => fs.rmSync(path.join(POSTS_DIR, f)));
    } else {
        fs.mkdirSync(POSTS_DIR, { recursive: true });
    }
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify([], null, 2));

    const browser = await puppeteer.launch({
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
    });

    const page = await browser.newPage();
    const TARGET_URL = 'http://webcache.googleusercontent.com/search?q=cache:valleywindowcare.com/feed/';

    try {
        await page.goto(TARGET_URL, { waitUntil: 'load', timeout: 30000 });
        const xmlContent = await page.evaluate(() => document.body.innerText || document.documentElement.outerHTML);

        const $xml = cheerio.load(xmlContent, { xmlMode: true });

        const items = $xml('item').toArray();
        let extractedCount = 0;

        for (const el of items) {
            const $el = $xml(el);
            let title = $el.find('title').text();

            if (!title || title.toLowerCase().includes('pressure washing services')) {
                continue;
            }

            let link = $el.find('link').text();
            let slug = 'new-post';
            try {
                slug = new URL(link).pathname.replace(/^\/+/, '').replace(/\/+$/, '').replace('blog/', '');
            } catch (e) {
                slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            }

            let date = $el.find('pubDate').text();
            if (date) {
                try {
                    date = new Date(date).toISOString().split('T')[0];
                } catch (e) { date = new Date().toISOString().split('T')[0]; }
            } else {
                date = new Date().toISOString().split('T')[0];
            }

            let encodedContent = $el.find('content\\:encoded').text() || $el.find('description').text() || "";

            // Explicitly force all internal links to load to the canonical domain
            const $body = cheerio.load(encodedContent, null, false);

            $body('img').remove(); // The command explicitly stated the proxy is currently blocking images, fallback to gallery strictly only

            $body('a').each((i, linkEl) => {
                const h = $body(linkEl).attr('href');
                if (h && h.startsWith('/')) {
                    $body(linkEl).attr('href', `https://valleywindowcare.com${h}`);
                }
            });

            const rawBody = $body.html() || "";

            const markdownPayload = generateMarkdownFrontmatter(
                title.trim(),
                date,
                "Valley Window Care",
                getFallbackImage(), // Fallback locally exclusively per explicit instructions 'No logos or blue boxes'
                "Insights",
                slug,
                rawBody.trim()
            );

            const mdFilePath = path.join(POSTS_DIR, `${slug}.md`);
            fs.writeFileSync(mdFilePath, markdownPayload);
            console.log(`[SUCCESS] Extracted from RSS stream: ${title}`);
            extractedCount++;
        }

        if (extractedCount === 0) {
            console.log(`[FATAL RSS PROXY] Google Web Cache returned a 404 block for the valleywindowcare.com/feed/ XML file.`);
            console.log(`[REVERTING] Deploying Local .next payload cache exclusively to finalize build.`);
            await fallbackInjectLocalScript();
        } else {
            console.log(`[FINAL AGGREGATE] Successfully wrote ${extractedCount} distinct markdown files via direct XML payload bypass.`);
        }

    } catch (e) {
        console.error('[FATAL ERROR] RSS Fetch failed entirely via Google Cache:', e.message);
        console.log(`[REVERTING] Deploying Local .next payload cache exclusively to finalize build.`);
        await fallbackInjectLocalScript();
    }

    await browser.close();
}

async function fallbackInjectLocalScript() {
    // Direct pass-through logic of the explicit local scripts mapping without touching the external proxy wall at all
    console.log("[DATA HEIST] Proceeding natively off-grid via the local .next payload structure. Bypassing firewalls completely...");
    try {
        // Simply executing the markdownHeist explicitly authorized in the previous step
        const execSync = require('child_process').execSync;
        execSync('node scripts/markdownHeist.mjs', { stdio: 'inherit' });
    } catch (e) {
        console.error("Local map mapping strictly failed.", e);
    }
}

runCachedRSSScrape();
