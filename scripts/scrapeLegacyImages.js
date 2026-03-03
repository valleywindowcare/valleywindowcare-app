const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const sharp = require('sharp');

const BLOG_JSON = path.join(__dirname, '../src/data/blogContent.json');
const GALLERY_DIR = path.join(__dirname, '../public/gallery');
const MEDIA_DIR = path.join(__dirname, '../../.antigravity/scratch/organized-media');
const LOGO_PATH = path.join(__dirname, '../public/logo.webp');

console.log("== LEGACY ASSET RE-SYNC (PRIORITY 1 DOMINATION) ==");

// Load current 22 blogs
let blogs = [];
try {
    blogs = JSON.parse(fs.readFileSync(BLOG_JSON, 'utf8'));
} catch (e) {
    console.error("Failed to load BlogContent.json", e);
    process.exit(1);
}

// 1. Scrape the blog archives for all posts and their featured images
async function scrapeImagesFromIndexMap() {
    const slugToImageMap = {};
    for (let page = 1; page <= 8; page++) {
        let url = page === 1 ? 'https://valleywindowcare.com/blog/' : `https://valleywindowcare.com/blog/page/${page}/`;
        console.log(`Scanning index: ${url}`);
        try {
            const res = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            });
            if (!res.ok) {
                if (res.status === 404) break; // Pagination ended
                console.log(`[!] HTTP ${res.status} on ${url}`);
                continue;
            }
            const html = await res.text();
            const $ = cheerio.load(html);

            // WordPress generic article parsing
            $('article').each((i, el) => {
                const link = $(el).find('h2 a').attr('href') || $(el).find('a').attr('href');
                let imgSrc = $(el).find('img').attr('src');

                // Fallback to srcset looking for max res
                if (!imgSrc) {
                    const srcset = $(el).find('img').attr('srcset');
                    if (srcset) {
                        const parts = srcset.split(',').pop();
                        if (parts) imgSrc = parts.trim().split(' ')[0];
                    }
                }

                if (link && imgSrc) {
                    const slug = link.split('/').filter(Boolean).pop();
                    slugToImageMap[slug] = imgSrc;
                }
            });
        } catch (e) {
            console.error(`Error fetching ${url}:`, e);
        }
    }
    return slugToImageMap;
}

// 2. Map Local Media just in case
const FOLDER_MAP = {
    "Oxidation Removal": "oxidation-removal",
    "Gutter Cleaning": "gutter-cleaning",
    "Commercial Window Cleaning": "commercial-window-clean",
    "Pressure Washing": "pressure-washing",
    "House Washing": "house-washing",
    "Window Cleaning": "window-cleaning",
    "Roof Cleaning": "roof-cleaning",
    "Concrete Cleaning": "concrete-cleaning",
    "Driveway Cleaning": "driveway-cleaning",
    "Deck Cleaning": "deck-cleaning",
    "Fence Cleaning": "fence-cleaning",
    "Building Washing": "building-washing",
    "Commercial Pressure Washing": "commercial-pressure-wash",
    "Permanent LED Lighting": "permanent-lighting",
    "Paver Patio Restorations": "concrete-cleaning",
    "Commercial Roof Cleaning": "commercial-roof-clean"
};

const localMediaPool = {};
function scanMedia(dir, category) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const f of files) {
        const fp = path.join(dir, f);
        if (fs.statSync(fp).isFile() && /\.(jpg|jpeg|png|webp)$/i.test(f)) {
            const stats = fs.statSync(fp);
            if (stats.size > 150000) {
                if (!localMediaPool[category]) localMediaPool[category] = [];
                localMediaPool[category].push(fp);
            }
        }
    }
}
for (const cat of Object.keys(FOLDER_MAP)) {
    const folderPath = path.join(MEDIA_DIR, FOLDER_MAP[cat]);
    scanMedia(folderPath, cat);
}

// 3. Execution Main
async function runAssetSync() {
    const liveImagesMap = await scrapeImagesFromIndexMap();
    console.log(`\nSynthesized ${Object.keys(liveImagesMap).length} total live image endpoints from pagination.`);

    let confirmedRestores = [];

    // Delete existing exact mappings to ensure clean re-write
    for (const b of blogs) {
        if (b.image && b.image.startsWith('/gallery/') && fs.existsSync(path.join(__dirname, '../public', b.image))) {
            try { fs.unlinkSync(path.join(__dirname, '../public', b.image)); } catch (e) { }
        }
    }

    for (let blog of blogs) {
        let cleanTitleSlug = blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        let targetFileName = `blog-legacy-${cleanTitleSlug}.webp`;
        let destPath = path.join(GALLERY_DIR, targetFileName);

        let success = false;

        // Strategy A: Exact Priority 1 (Live Origin)
        let liveSrc = liveImagesMap[blog.slug];
        if (liveSrc) {
            console.log(`[P1] Executing Direct Scrape origin for: ${blog.title}`);
            try {
                const imgRes = await fetch(liveSrc, {
                    headers: { 'User-Agent': 'Mozilla/5.0' }
                });
                if (imgRes.ok) {
                    const buf = await imgRes.arrayBuffer();
                    await sharp(Buffer.from(buf))
                        .resize(1200, 675, { fit: 'cover' })
                        .webp({ quality: 90 })
                        .toFile(destPath);
                    success = true;
                    // Verify size
                    if (fs.statSync(destPath).size < 1000) {
                        success = false; // Fake/broken image
                        fs.unlinkSync(destPath);
                    }
                }
            } catch (e) {
                console.log(`[!] Failed Priority 1 for ${blog.title} - ${e.message}`);
            }
        }

        // Strategy B: Dedicated Priority 2 (Local Media >150kb)
        if (!success) {
            console.log(`[P2] Fallback Local Media logic for: ${blog.title}`);
            const category = blog.category;
            if (localMediaPool[category] && localMediaPool[category].length > 0) {
                let localSrc = localMediaPool[category].pop();
                try {
                    await sharp(localSrc)
                        .resize(1200, 675, { fit: 'cover' })
                        .webp({ quality: 90 })
                        .toFile(destPath);
                    success = true;
                } catch (e) { }
            }
        }

        // Strategy C: Priority 3 Absolute Last Resort Logo
        if (!success) {
            console.log(`[P3] WARNING! Absolute Last Resort Logo used for: ${blog.title}`);
            try {
                await sharp(LOGO_PATH)
                    .resize(1200, 675, { fit: 'contain', background: { r: 10, g: 30, b: 60, alpha: 1 } })
                    .webp({ quality: 90 })
                    .toFile(destPath);
            } catch (e) {
                await sharp({ create: { width: 1200, height: 675, channels: 3, background: { r: 10, g: 30, b: 60 } } }).webp().toFile(destPath);
            }
        }

        blog.image = `/gallery/${targetFileName}`;
        confirmedRestores.push(blog.title);
    }

    // Final Write
    fs.writeFileSync(BLOG_JSON, JSON.stringify(blogs, null, 2), 'utf8');
    console.log(`\n== LEGACY RE-SYNC COMPLETED ==`);
    console.log(`Successfully restored assets for ${confirmedRestores.length} legacy entries natively.`);
    confirmedRestores.forEach(c => console.log(` - ${c}`));
}

runAssetSync();
