import { chromium } from 'playwright';
import fs from 'fs';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function mapSite() {
    console.log("Launching specific Chromium instance at:", CHROME_PATH);
    const browser = await chromium.launch({
        executablePath: CHROME_PATH,
        headless: false
    });

    const context = await browser.newContext({
        viewport: null
    });
    const page = await context.newPage();
    let discoveredUrls = new Set();

    try {
        console.log("Navigating directly to https://valleywindowcare.com/");
        await page.goto('https://valleywindowcare.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });

        console.log("\n=======================================================");
        console.log("⚠️ CLOUDFLARE WAF INTERCEPT DETECTED");
        console.log("Please select the Chromium window and solve the capture physically.");
        console.log("Waiting indefinitely for the DOM to resolve...");
        console.log("=======================================================\n");

        // Wait with NO timeout (0) until the user passes CF and the main page loads (more than 10 links)
        await page.waitForFunction(() => document.querySelectorAll('a').length > 10, { timeout: 0 });

        console.log("✅ WAF Passed. Successfully mapped main domain. Extracting local paths...");
        await page.waitForTimeout(3000); // let animations settle

        const links = await page.$$eval('a', anchors => anchors.map(a => a.href));
        links.forEach(link => {
            if (link.includes('valleywindowcare.com')) {
                const path = link.replace(/^https?:\/\/[^\/]+/, '');
                if (path && path !== '/' && !path.includes('tel:') && !path.includes('mailto:')) discoveredUrls.add(path);
            }
        });

        // Parse Sitemaps seamlessly now that WAF allows this session context
        try {
            console.log("Injecting secondary sitemap XML scrape...");
            await page.goto('https://valleywindowcare.com/post-sitemap.xml', { waitUntil: 'domcontentloaded', timeout: 30000 });
            const sm1 = await page.$$eval('loc, a', els => els.map(e => e.textContent || e.href));
            sm1.forEach(link => {
                if (link && link.includes('valleywindowcare.com')) {
                    discoveredUrls.add(link.replace(/^https?:\/\/[^\/]+/, ''));
                }
            });

            await page.goto('https://valleywindowcare.com/page-sitemap.xml', { waitUntil: 'domcontentloaded', timeout: 30000 });
            const sm2 = await page.$$eval('loc, a', els => els.map(e => e.textContent || e.href));
            sm2.forEach(link => {
                if (link && link.includes('valleywindowcare.com')) {
                    discoveredUrls.add(link.replace(/^https?:\/\/[^\/]+/, ''));
                }
            });
        } catch (e) {
            console.log("XML secondary scrape failed, relying on HTML array.");
        }

        console.log("\n--- Extraction Results ---");
        const urlsArray = Array.from(discoveredUrls).sort();
        fs.writeFileSync('extracted_urls.json', JSON.stringify(urlsArray, null, 2));
        console.log(`Successfully mapped ${urlsArray.length} exact paths to extracted_urls.json`);

    } catch (e) {
        console.error("Playwright extraction failed:", e);
    } finally {
        console.log("Extraction complete. Closing browser.");
        await browser.close();
    }
}

mapSite();
