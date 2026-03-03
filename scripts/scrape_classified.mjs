import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const cwd = process.cwd();
const publicDir = path.join(cwd, 'public/live-scraped');

const SERVICE_URLS = {
    ":window-cleaning": "https://valleywindowcare.com/window-cleaning/",
    ":gutter-cleaning": "https://valleywindowcare.com/gutter-cleaning/",
    ":roof-cleaning": "https://valleywindowcare.com/roof-cleaning-2/",
    ":house-wash": "https://valleywindowcare.com/house-washing/",
    ":concrete-cleaning": "https://valleywindowcare.com/pressure-washing-7/",
    ":permanent-lighting": "https://valleywindowcare.com/permanent-holiday-lighting/"
};

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
    console.log("Launching Classified Scraper across valleywindowcare.com...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');

    for (const [folderName, url] of Object.entries(SERVICE_URLS)) {
        const targetFolder = path.join(publicDir, folderName);
        if (!fs.existsSync(targetFolder)) fs.mkdirSync(targetFolder, { recursive: true });

        console.log(`Scraping Classified ${folderName} via ${url}`);
        let scrapedUrls = new Set();

        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

            const images = await page.evaluate(() => {
                const imgs = Array.from(document.querySelectorAll('img'));
                return imgs.map(img => img.src).filter(src => src && (src.includes('wp-content/uploads') || src.includes('.jpg') || src.includes('.png')));
            });

            images.forEach(img => scrapedUrls.add(img));
        } catch (err) {
            console.error(`Failed to scrape ${url}:`, err.message);
        }

        let downloadCount = 0;
        for (const imgUrl of scrapedUrls) {
            if (imgUrl.includes('logo') || imgUrl.includes('icon') || imgUrl.includes('150x150')) continue;

            const filename = 'authentic-' + path.basename(new URL(imgUrl).pathname);
            const dest = path.join(targetFolder, filename);

            if (!fs.existsSync(dest)) {
                await downloadImageFast(page, imgUrl, dest);
                if (fs.existsSync(dest)) {
                    const stats = fs.statSync(dest);
                    if (stats.size > 20000) {
                        downloadCount++;
                    } else {
                        fs.unlinkSync(dest);
                    }
                }
            }
        }
        console.log(`-> Saved ${downloadCount} authentic images into ${folderName}`);
    }

    // Homepage Hero Pull
    console.log("Scraping Homepage for main Team Crew Photo...");
    try {
        await page.goto('https://valleywindowcare.com', { waitUntil: 'networkidle2' });

        // Find the hero image, this might take some guessing based on element classes if it's a CSS background
        // Or if it's a direct img tag we can rip it. Let's pull the largest image we find.
        const allImgs = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('img'))
                .map(img => img.src)
                .filter(src => src && (src.includes('wp-content/uploads')));
        });

        if (allImgs.length > 0) {
            await downloadImageFast(page, allImgs[0], path.join(cwd, 'public/site-gallery/hero-crew-photo.png'));
            console.log("-> Homepage Hero override complete.");
        }
    } catch (e) { }

    await browser.close();
    console.log(`Full Classified Harvest Complete!`);
}

run().catch(console.error);
