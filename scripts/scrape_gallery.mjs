import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/100.0.4896.127 Safari/537.36');
    
    // Check if they have a gallery page
    await page.goto('https://valleywindowcare.com/gallery/', { waitUntil: 'networkidle2' });
    const imgUrls = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('img')).map(img => img.src);
    });
    console.log(`Found ${imgUrls.length} images on /gallery/`);
    
    const unique = [...new Set(imgUrls.filter(u => u.includes('wp-content/uploads') && !u.includes('logo')))];
    console.log(JSON.stringify(unique, null, 2));
    await browser.close();
})();
