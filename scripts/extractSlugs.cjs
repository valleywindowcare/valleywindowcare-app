const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    try {
        const browser = await puppeteer.launch({ headless: "new" });
        const page = await browser.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');

        console.log("Navigating to blog...");
        await page.goto('https://valleywindowcare.com/blog/', { waitUntil: 'networkidle2' });

        const links = await page.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('a[href*="/blog/"]'));
            return [...new Set(anchors.map(a => a.href))];
        });

        console.log("Extracted links:", links);

        await browser.close();
    } catch (e) {
        console.error(e);
    }
})();
