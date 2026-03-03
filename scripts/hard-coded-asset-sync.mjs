import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';
import * as cheerio from 'cheerio';

const cwd = process.cwd();
const blogContentPath = path.join(cwd, 'src/data/blogContent.json');
const galleryPath = path.join(cwd, 'public/gallery');

// Category mapping to local folders in public/gallery/
const categoryToFolder = {
    'Pressure Washing': 'pressure-washing',
    'Paver Patio Restorations': 'concrete-cleaning', // Or paver-patio if it exists
    'Roof Cleaning': 'roof-cleaning',
    'Window Cleaning': 'window-cleaning',
    'Gutter Cleaning': 'gutter-cleaning',
    'Deck Cleaning': 'deck-cleaning',
    'House Washing': 'house-wash',
    'Fence Cleaning': 'fence-cleaning'
};

const formatFileName = (title) => {
    return 'blog-legacy-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '.webp';
};

const downloadImage = (url, dest) => {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return resolve(downloadImage(res.headers.location, dest));
            }
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed to download: ${res.statusCode} from ${url}`));
            }
            const file = fs.createWriteStream(dest);
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
};

const usedLocalImages = new Set();

const getUniqueLocalFallbackImage = (categoryName) => {
    let folderName = categoryToFolder[categoryName] || 'pressure-washing';
    let folderPath = path.join(galleryPath, folderName);

    if (!fs.existsSync(folderPath)) {
        // basic fallback if not correctly mapped
        folderPath = path.join(galleryPath, 'exterior-cleaning');
    }

    if (fs.existsSync(folderPath)) {
        const files = fs.readdirSync(folderPath).filter(f => !f.startsWith('.') && (f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.heic')));
        const availableFiles = files.filter(f => !usedLocalImages.has(path.join(folderPath, f)));

        if (availableFiles.length > 0) {
            const randomFile = availableFiles[Math.floor(Math.random() * availableFiles.length)];
            const selectedPath = path.join(folderPath, randomFile);
            usedLocalImages.add(selectedPath);
            return selectedPath;
        } else if (files.length > 0) {
            // reuse if we ran out
            const randomFile = files[Math.floor(Math.random() * files.length)];
            return path.join(folderPath, randomFile);
        }
    }
    return null;
};

async function getWPOembedImage(slug) {
    try {
        const apiUrl = `https://valleywindowcare.com/wp-json/wp/v2/posts?slug=${slug}&_embed`;
        const res = await fetch(apiUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (res.ok) {
            const data = await res.json();
            if (data && data.length > 0) {
                const post = data[0];
                if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0) {
                    const media = post._embedded['wp:featuredmedia'][0];
                    if (media.source_url && media.source_url.includes('wp-content/uploads')) {
                        return media.source_url;
                    }
                }
            }
        }
    } catch (e) { }
    return null;
}

async function scrapeOGImage(slug) {
    try {
        const url = `https://valleywindowcare.com/${slug}/`;
        const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        if (res.ok) {
            const html = await res.text();
            const $ = cheerio.load(html);
            const ogImage = $('meta[property="og:image"]').attr('content');
            if (ogImage && ogImage.includes('wp-content/uploads') && !ogImage.includes('upscalemedia')) {
                return ogImage;
            }
        }
    } catch (e) {
    }
    return null;
}

async function run() {
    console.log("Starting Hard-Coded Asset Sync...");

    if (!fs.existsSync(galleryPath)) fs.mkdirSync(galleryPath, { recursive: true });

    const rawData = fs.readFileSync(blogContentPath, 'utf8');
    const blogs = JSON.parse(rawData);

    const tempDir = path.join(cwd, 'tmp-images-hardcoded');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const results = [];

    for (let i = 0; i < blogs.length; i++) {
        const blog = blogs[i];
        let sourceUsed = 'None';
        const finalWebpName = formatFileName(blog.title);
        const finalWebpPath = path.join(galleryPath, finalWebpName);
        const tempOriginalPath = path.join(tempDir, `temp-${blog.slug}`);

        let acquiredImagePath = null;

        // Ensure SEO components are present
        if (!blog.content.includes('920-609-7085')) {
            console.log(`[SEO Warning] Phone number missing for ${blog.title}`);
        }
        if (!blog.content.includes('<ReviewCarousel') && !blog.content.includes('ReviewCarousel />')) {
            console.log(`[SEO Warning] ReviewCarousel missing for ${blog.title}, adding to bottom...`);
            blog.content += `\n\n<ReviewCarousel />\n`;
        }

        // 1. Try WP REST API
        let imageUrl = await getWPOembedImage(blog.slug);

        // 2. Try OG Image scrape
        if (!imageUrl) {
            imageUrl = await scrapeOGImage(blog.slug);
        }

        if (imageUrl) {
            try {
                console.log(`Downloading original wp-content media: ${imageUrl}`);
                await downloadImage(imageUrl, tempOriginalPath);

                const stats = fs.statSync(tempOriginalPath);
                if (stats.size > 1000) {
                    acquiredImagePath = tempOriginalPath;
                    sourceUsed = 'valleywindowcare.com/wp-content/uploads/';
                } else {
                    console.log(`WAF block detected (small payload). Triggering local fallback.`);
                }
            } catch (err) {
                console.log(`Failed to fetch original media URL: ${err.message}`);
            }
        }

        // 3. Fallback to physical valid directory
        if (!acquiredImagePath) {
            const localFile = getUniqueLocalFallbackImage(blog.category);
            if (localFile) {
                console.log(`Using public/gallery fallback for ${blog.title}: ${localFile}`);
                fs.copyFileSync(localFile, tempOriginalPath);
                acquiredImagePath = tempOriginalPath;
                sourceUsed = `public/gallery/ service match (${blog.category})`;
            }
        }

        // 4. Convert and save
        if (acquiredImagePath) {
            try {
                await sharp(acquiredImagePath)
                    .webp({ quality: 90 })
                    .toFile(finalWebpPath);

                console.log(`Successfully prepared WebP: ${finalWebpName}`);
                blog.image = `/gallery/${finalWebpName}`;
                results.push({ title: blog.title, source: sourceUsed, file: blog.image });

                if (fs.existsSync(tempOriginalPath)) fs.unlinkSync(tempOriginalPath);
            } catch (err) {
                console.error(`Sharp conversion failed for ${blog.title}:`, err.message);
                sourceUsed = 'Failed Conversion';
            }
        } else {
            console.log(`CRITICAL: No image could be sourced for ${blog.title}!`);
            results.push({ title: blog.title, source: 'Missing Image', file: 'N/A' });
        }
    }

    fs.writeFileSync(blogContentPath, JSON.stringify(blogs, null, 2), 'utf8');
    console.log("Updated BlogContent.json successfully.");

    if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
    }

    console.log("\n====== HARD-CODED ASSET SYNC REPORT ======");
    results.forEach((r, index) => {
        console.log(`${index + 1}. [${r.source}] ${r.title}\n   -> Path: ${r.file}\n`);
    });
}

run().catch(console.error);
