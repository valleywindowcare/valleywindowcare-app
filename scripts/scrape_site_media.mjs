import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
import https from 'https';

const cwd = process.cwd();
const mediaDir = path.join(process.env.HOME || '/Users/james', '.gemini/antigravity/scratch/organized-media');
const SITE_URLS = [
    'https://valleywindowcare.com/',
    'https://valleywindowcare.com/gallery/',
    'https://valleywindowcare.com/about-us/'
];

function downloadImageFast(page, url, dest) {
    return page.evaluate(async (imgUrl) => {
        const response = await fetch(imgUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const buffer = await response.arrayBuffer();
        return Array.from(new Uint8Array(buffer));
    }, url).then(arr => {
        fs.writeFileSync(dest, Buffer.from(arr));
        return true;
    }).catch(e => false);
}

async function run() {
    console.log("Launching Puppeteer Scraper to harvest authentic job site photos...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');

    let scrapedUrls = new Set();

    for (const url of SITE_URLS) {
        console.log(`Scraping: ${url}`);
        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

            // Extract all image sources
            const images = await page.evaluate(() => {
                const imgs = Array.from(document.querySelectorAll('img'));
                return imgs.map(img => img.src).filter(src => src && (src.includes('wp-content/uploads') || src.includes('.jpg') || src.includes('.png')));
            });

            images.forEach(img => scrapedUrls.add(img));
        } catch (err) {
            console.error(`Failed to scrape ${url}:`, err.message);
        }
    }

    await browser.close();

    console.log(`Found ${scrapedUrls.size} potential images.`);

    // Target folder for generalized scraping if it doesn't fit a specific category easily
    const targetFolder = path.join(mediaDir, ':house-wash');
    if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, { recursive: true });

    let downloadCount = 0;
    for (const imgUrl of scrapedUrls) {
        // filter out tiny icons and logos if possible by filename clues
        if (imgUrl.includes('logo') || imgUrl.includes('icon') || imgUrl.includes('150x150')) continue;

        const filename = 'scraped-' + path.basename(new URL(imgUrl).pathname);
        const dest = path.join(targetFolder, filename);

        if (!fs.existsSync(dest)) {
            try {
                await downloadImageFast(page, imgUrl, dest);
                const stats = fs.statSync(dest);
                if (stats.size > 20000) { // Only keep files larger than 20KB to ensure quality
                    downloadCount++;
                    console.log(`Downloaded authentic image: ${filename}`);
                } else {
                    fs.unlinkSync(dest); // discard tiny images
                }
            } catch (err) {
                console.error(`Download failed for ${imgUrl}:`, err.message);
            }
        }
    }

    console.log(`Successfully augmented media pool with ${downloadCount} authentic job site photos.`);
}

run().catch(console.error);
