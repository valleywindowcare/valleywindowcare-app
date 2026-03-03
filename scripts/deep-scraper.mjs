import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const cwd = process.cwd();
const publicDir = path.join(cwd, 'public/live-scraped/deep-pool');

async function downloadImageFast(page, url, dest) {
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
    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    console.log("Launching Deep Scraper...");
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)');

    // Common pages to scrape deeply
    const urls = [
        "https://valleywindowcare.com/",
        "https://valleywindowcare.com/about-us/",
        "https://valleywindowcare.com/gallery/",
        "https://valleywindowcare.com/reviews/",
        "https://valleywindowcare.com/window-cleaning/",
        "https://valleywindowcare.com/gutter-cleaning/",
        "https://valleywindowcare.com/roof-cleaning-2/",
        "https://valleywindowcare.com/house-washing/",
        "https://valleywindowcare.com/pressure-washing-7/",
        "https://valleywindowcare.com/permanent-holiday-lighting/"
    ];

    let allImages = new Set();
    
    for (const url of urls) {
        console.log("Scanning " + url);
        try {
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 15000 });
            const images = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('img'))
                    .map(img => img.src)
                    .filter(src => src && (src.includes('wp-content/uploads') || src.includes('.jpg') || src.includes('.webp') || src.includes('.png')));
            });
            images.forEach(i => allImages.add(i));
        } catch(e) {
            console.log("Failed " + url);
        }
    }
    
    console.log(`Found ${allImages.size} unique image URLs. Downloading...`);
    let downloaded = 0;
    
    for (const imgUrl of allImages) {
        if (imgUrl.toLowerCase().includes('logo') || imgUrl.toLowerCase().includes('icon')) continue;
        
        let filename = path.basename(new URL(imgUrl).pathname);
        let dest = path.join(publicDir, 'authentic-' + filename);
        
        if (!fs.existsSync(dest)) {
            await downloadImageFast(page, imgUrl, dest);
            if (fs.existsSync(dest)) {
                const stats = fs.statSync(dest);
                if (stats.size > 25000) { // Keep images larger than 25kb
                    downloaded++;
                } else {
                    fs.unlinkSync(dest);
                }
            }
        } else {
           downloaded++; // Already exists
        }
    }
    
    console.log(`Total deep-pool authentic images: ${downloaded}`);
    await browser.close();
}

run().catch(console.error);
