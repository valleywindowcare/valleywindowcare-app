import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import fs from 'fs';
import path from 'path';

puppeteer.use(StealthPlugin());

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');
const BLOG_IMAGES_DIR = path.join(process.cwd(), 'public/assets/blog');
const GALLERY_DIR = path.join(process.cwd(), 'public/assets/gallery');

// Ensure directories cleanly exist
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
    console.log("🚀 Launching Headed Chromium for Mass Full Archive Extraction...");
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 20,
        defaultViewport: null,
        args: ['--start-maximized']
    });

    const page = await browser.newPage();

    console.log("🌐 Navigating to valleywindowcare.com/blog...");
    await page.goto('https://valleywindowcare.com/blog', { waitUntil: 'domcontentloaded' });

    console.log("🛑 WAITING FOR 45 SECONDS...");
    console.log("👉 PLEASE SOLVE THE SGCAPTCHA MANUALLY IN THE BROWSER WINDOW NOW. 👈");

    await new Promise(r => setTimeout(r, 45000));

    console.log("⚡ Executing Deep Live Data Extraction...");

    // Try WP JSON API first
    const apiData = await page.evaluate(async () => {
        try {
            const res = await fetch('/wp-json/wp/v2/posts?per_page=100&_embed');
            if (res.ok) {
                const posts = await res.json();
                return posts.map(p => {
                    let fullContentHtml = p.content.rendered;
                    // Fix CTA link formatting natively inside the parsed HTML payload
                    fullContentHtml = fullContentHtml.replace(/\(920\)\s*609-7085/g, '<a href="tel:920-609-7085" class="text-gold font-bold hover:underline">(920) 609-7085</a>');

                    let imageUrl = null;
                    if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
                        imageUrl = p._embedded['wp:featuredmedia'][0].source_url;
                    }

                    return {
                        title: p.title.rendered,
                        date: p.date,
                        content: fullContentHtml,
                        imageUrl: imageUrl
                    };
                });
            }
        } catch (e) {
            console.error(e);
        }
        return null;
    });

    let articles = apiData;

    if (!articles || articles.length === 0) {
        console.log("WP JSON API failed. Falling back to multi-page DOM scraper...");
        articles = await page.evaluate(async () => {
            let allPosts = [];
            let hasNext = true;
            let pageNum = 1;

            while (hasNext && pageNum <= 10) {
                try {
                    const parser = new DOMParser();
                    const res = await fetch('/blog/page/' + pageNum);
                    if (!res.ok) { hasNext = false; break; }
                    const text = await res.text();
                    const doc = parser.parseFromString(text, 'text/html');

                    const postNodes = Array.from(doc.querySelectorAll('article.post'));
                    if (postNodes.length === 0) { hasNext = false; break; }

                    for (let p of postNodes) {
                        const titleEl = p.querySelector('h2.entry-title a');
                        const dateEl = p.querySelector('time.entry-date');
                        const imgEl = p.querySelector('img.attachment-post-thumbnail');
                        const link = titleEl ? titleEl.href : null;

                        let content = "Content Extraction Failed";
                        if (link) {
                            const pRes = await fetch(link);
                            const pText = await pRes.text();
                            const pDoc = parser.parseFromString(pText, 'text/html');
                            const cEl = pDoc.querySelector('.entry-content');
                            if (cEl) {
                                content = cEl.innerHTML.replace(/\(920\)\s*609-7085/g, '<a href="tel:920-609-7085" class="text-gold font-bold hover:underline">(920) 609-7085</a>');
                            }
                        }

                        allPosts.push({
                            title: titleEl ? titleEl.innerText.trim() : 'Unknown Title',
                            link: link,
                            date: dateEl ? dateEl.getAttribute('datetime') : new Date().toISOString(),
                            imageUrl: imgEl ? (imgEl.getAttribute('data-src') || imgEl.src) : null,
                            content: content
                        });
                    }
                    pageNum++;
                } catch (e) {
                    hasNext = false;
                }
            }
            return allPosts;
        });
    }

    console.log(`Extracted ${articles.length} total articles successfully.`);

    for (let i = 0; i < articles.length; i++) {
        const article = articles[i];
        console.log(`Processing Article ${i + 1}/${articles.length}: ${article.title}`);

        let localImageName = "";

        // Download Image if exists
        if (article.imageUrl) {
            try {
                const viewSource = await page.goto(article.imageUrl, { waitUntil: 'load' });
                const buffer = await viewSource.buffer();
                localImageName = `blog-feature-${i}-${Date.now()}.jpg`;
                fs.writeFileSync(path.join(BLOG_IMAGES_DIR, localImageName), buffer);
            } catch (err) {
                console.error(`  ❌ Failed to grab image for ${article.title}`);
            }
        }

        // Build Markdown Frontmatter mapped explicitly to raw exported WP html block
        const cleanTitle = article.title.replace(/&#8217;/g, "'").replace(/&#8211;/g, "-").replace(/&amp;/g, "&").replace(/"/g, "'");

        const frontmatter = `---
title: "${cleanTitle}"
date: "${article.date}"
category: "General Service"
image: ${localImageName ? '"/assets/blog/' + localImageName + '"' : '""'}
---

${article.content.trim()}

<div class="mt-8 pt-8 border-t border-gray-200">
  <p class="font-bold text-navy-dark lg:text-xl">Ready to schedule your exterior property service?
    <a href="tel:920-609-7085" class="text-gold font-bold ml-2 no-underline hover:underline hover:text-navy-dark transition-all">(920) 609-7085</a>
  </p>
</div>
`;

        fs.writeFileSync(path.join(POSTS_DIR, `${slugify(cleanTitle)}.md`), frontmatter, 'utf-8');
    }

    // --- PHASE 2: MASS GALLERY CRAWL ---
    console.log("🌐 Navigating to valleywindowcare.com/gallery...");
    await page.goto('https://valleywindowcare.com/gallery', { waitUntil: 'domcontentloaded' });

    console.log("Scrolling gallery natively to trigger layout lazy loaders entirely...");
    await page.evaluate(async () => {
        await new Promise((resolve) => {
            let totalHeight = 0;
            const distance = 100;
            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;
                if (totalHeight >= scrollHeight - window.innerHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });

    console.log("⚡ Executing Full DOM Extraction on /gallery...");
    const galleryItems = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img[class*="wp-image"]')).map(img => img.getAttribute('data-src') || img.src);
        const links = Array.from(document.querySelectorAll('a[href$=".jpg"], a[href$=".png"], a[href$=".jpeg"]')).map(a => a.href);
        const unique = Array.from(new Set([...imgs, ...links])).filter(Boolean);
        return unique;
    });

    console.log(`Found ${galleryItems.length} specific Gallery Files explicitly registered.`);

    let downloadedCount = 0;
    for (let i = 0; i < galleryItems.length; i++) {
        const url = galleryItems[i];
        if (!url.startsWith('http')) continue;
        console.log(`  📸 Downloading Asset ${i + 1}/${galleryItems.length}`);
        try {
            const viewSource = await page.goto(url, { waitUntil: 'load' });
            const buffer = await viewSource.buffer();
            fs.writeFileSync(path.join(GALLERY_DIR, `live-gallery-asset-${i}-${Date.now()}.jpg`), buffer);
            downloadedCount++;
        } catch (err) {
            console.log(`  ❌ Failed gallery image index ${i}, silently skipping constraint violation...`);
        }
    }

    console.log(`✅ Deep Mass Extraction Complete. Downloaded ${articles.length} posts and ${downloadedCount} gallery assets perfectly.`);
    await browser.close();

})();
