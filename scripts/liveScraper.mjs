import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import path from 'path';

puppeteer.use(StealthPlugin());

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');
const BLOG_IMAGES_DIR = path.join(process.cwd(), 'public/assets/blog');
const GALLERY_DIR = path.join(process.cwd(), 'public/assets/gallery');

// Ensure directories exist
[POSTS_DIR, BLOG_IMAGES_DIR, GALLERY_DIR].forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

function slugify(text) {
    return text.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
}

(async () => {
    console.log("🚀 Launching Headed Chromium for Live Extraction...");
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 50,
        defaultViewport: null,
        args: ['--start-maximized']
    });

    const page = await browser.newPage();

    console.log("🌐 Navigating to valleywindowcare.com/blog...");
    await page.goto('https://valleywindowcare.com/blog', { waitUntil: 'domcontentloaded' });

    console.log("🛑 WAITING FOR 30 SECONDS...");
    console.log("👉 PLEASE SOLVE THE SGCAPTCHA MANUALLY IN THE BROWSER WINDOW NOW. 👈");

    // Give the user 45 seconds to solve the captcha physically
    await new Promise(r => setTimeout(r, 45000));

    console.log("⚡ Executing Live DOM Extraction on /blog...");

    // Extract Top 10 Posts
    const articles = await page.evaluate(() => {
        const posts = Array.from(document.querySelectorAll('article.post')).slice(0, 10);
        return posts.map(post => {
            const titleEl = post.querySelector('h2.entry-title a');
            const dateEl = post.querySelector('time.entry-date');
            const imgEl = post.querySelector('img.attachment-post-thumbnail');
            const link = titleEl ? titleEl.href : null;

            return {
                title: titleEl ? titleEl.innerText.trim() : 'Unknown Title',
                link: link,
                date: dateEl ? dateEl.getAttribute('datetime') : new Date().toISOString(),
                imageUrl: imgEl ? (imgEl.getAttribute('data-src') || imgEl.src) : null
            };
        });
    });

    console.log(`Found ${articles.length} articles. Downloading metadata...`);

    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        if (!article.link) continue;

        console.log(`Scraping Article ${i + 1}: ${article.title}`);

        let localImageName = "";

        // Download Image if exists
        if (article.imageUrl) {
            try {
                const viewSource = await page.goto(article.imageUrl);
                const buffer = await viewSource.buffer();
                localImageName = `blog-feature-${i}-${Date.now()}.jpg`;
                fs.writeFileSync(path.join(BLOG_IMAGES_DIR, localImageName), buffer);
                console.log(`  📸 Downloaded image: ${localImageName}`);
            } catch (err) {
                console.error(`  ❌ Failed to grab image for ${article.title} - skipping image.`);
            }
        }

        // Go to actual article page for full text
        await page.goto(article.link, { waitUntil: 'domcontentloaded' });

        const fullContentHtml = await page.evaluate(() => {
            const contentDiv = document.querySelector('.entry-content');
            return contentDiv ? contentDiv.innerHTML : "Physical extraction failed to target content.";
        });

        // Build Markdown Frontmatter
        const frontmatter = `---
title: "${article.title.replace(/"/g, '')}"
date: "${article.date}"
category: "General Service"
image: "/assets/blog/${localImageName}"
---

${fullContentHtml.replace(/<[^>]*>?/gm, '').trim()}
`;

        fs.writeFileSync(path.join(POSTS_DIR, `${slugify(article.title)}.md`), frontmatter, 'utf-8');
    }

    // --- PHASE 2: GALLERY ---
    console.log("🌐 Navigating to valleywindowcare.com/gallery...");
    await page.goto('https://valleywindowcare.com/gallery', { waitUntil: 'domcontentloaded' });

    // Wait for the gallery layout to snap
    await new Promise(r => setTimeout(r, 5000));

    console.log("⚡ Executing Live DOM Extraction on /gallery...");
    const galleryItems = await page.evaluate(() => {
        // Broad selector hitting any <img> that looks gallery-related
        const imgs = Array.from(document.querySelectorAll('img[class*="wp-image"]')).slice(0, 20);
        return imgs.map(img => img.getAttribute('data-src') || img.src).filter(Boolean);
    });

    console.log(`Found ${galleryItems.length} Gallery Photos.`);

    for (let i = 0; i < galleryItems.length; i++) {
        const url = galleryItems[i];
        console.log(`  📸 Downloading Gallery Asset ${i + 1}...`);
        try {
            const viewSource = await page.goto(url);
            const buffer = await viewSource.buffer();
            fs.writeFileSync(path.join(GALLERY_DIR, `live-gallery-asset-${i}-${Date.now()}.jpg`), buffer);
        } catch (err) {
            console.log(`  ❌ Failed gallery image index ${i}, skipping...`);
        }
    }

    console.log("✅ Live Extraction Cycle Complete. Shutting down Chromium.");
    await browser.close();

})();
