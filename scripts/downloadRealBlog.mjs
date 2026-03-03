import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import { pipeline } from 'stream/promises';

const BASE_URL = 'https://valleywindowcare.com';
const BLOG_INDEX_URL = `${BASE_URL}/blog/`;
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'blog');
const BLOG_DATA_FILE = path.join(process.cwd(), 'src', 'data', 'blogContent.json');

// Ensure assets directory exists
if (!fs.existsSync(ASSETS_DIR)) {
    fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

async function downloadImage(url, filename) {
    const fullPath = path.join(ASSETS_DIR, filename);
    if (fs.existsSync(fullPath)) {
        console.log(`[INFO] Image ${filename} already exists. Skipping download.`);
        return `/assets/blog/${filename}`;
    }

    try {
        console.log(`[INFO] Downloading ${url}...`);
        // Add headers to potentially bypass WAF if needed
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        if (!res.ok) throw new Error(`unexpected response ${res.statusText}`);
        await pipeline(res.body, fs.createWriteStream(fullPath));
        console.log(`[OK] Saved ${filename}`);
        return `/assets/blog/${filename}`;
    } catch (e) {
        console.error(`[ERROR] Failed to download ${url}:`, e.message);
        return null; // Fallback will be handled in UI
    }
}

async function scrapeBlogs() {
    console.log(`[START] Scraping index: ${BLOG_INDEX_URL}`);
    const res = await fetch(BLOG_INDEX_URL, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });

    if (!res.ok) {
        console.error(`[FATAL] Failed to fetch blog index. Status: ${res.status}`);
        return;
    }

    const html = await res.text();
    const $ = cheerio.load(html);
    const postUrls = new Set();

    // Find all links on the blog index page
    $('a').each((i, el) => {
        const href = $(el).attr('href');
        if (href && href.startsWith('https://valleywindowcare.com/') && !href.includes('/category/') && !href.includes('/tag/') && !href.includes('/author/') && href !== 'https://valleywindowcare.com/' && href !== 'https://valleywindowcare.com/blog/' && !href.includes('about-us') && !href.includes('contact') && !href.includes('services') && !href.includes('service-areas')) {
            if (href.split('/').length > 4) { // usually https://domain.com/year/month/slug or domain.com/title
                postUrls.add(href);
            }
        }
    });

    // Ensure we also grab the standard Elementor post grid links
    $('.elementor-post__title a, .entry-title a').each((i, el) => {
        const href = $(el).attr('href');
        if (href) postUrls.add(href);
    });

    console.log(`[INFO] Found ${postUrls.size} potential blog posts.`);

    const extractedBlogs = [];

    for (const url of postUrls) {
        try {
            console.log(`[SCRAPE] Fetching article: ${url}`);
            const articleRes = await fetch(url, {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
                }
            });
            if (!articleRes.ok) {
                console.log(`[WARN] Skipping ${url} - Status: ${articleRes.status}`);
                continue;
            }
            const articleHtml = await articleRes.text();
            const $page = cheerio.load(articleHtml);

            // Verify it's actually an article
            const isArticle = $page('article').length > 0 || $page('.post').length > 0 || $page('.elementor-widget-theme-post-content').length > 0;
            if (!isArticle) {
                console.log(`[WARN] ${url} does not appear to be an article. Skipping.`);
                continue;
            }

            // Title
            let title = $page('h1').first().text().trim() || $page('.entry-title').first().text().trim();
            if (!title) {
                console.log(`[WARN] No title found for ${url}. Skipping.`);
                continue;
            }

            // Date
            let rawDate = $page('time').attr('datetime') || $page('time.entry-date').attr('datetime') || $page('.elementor-post-info__item--type-date').text().trim() || $page('meta[property="article:published_time"]').attr('content');
            let date = new Date().toISOString();
            if (rawDate) {
                const parsed = new Date(rawDate);
                if (!isNaN(parsed.getTime())) date = parsed.toISOString();
            }

            // Image Extraction
            let featuredImageUrl = $page('meta[property="og:image"]').attr('content') || $page('img.wp-post-image').attr('src') || $page('.elementor-widget-theme-post-featured-image img').attr('src') || $page('article img').first().attr('src');

            let localImagePath = null;
            if (featuredImageUrl) {
                // Ensure absolute URL
                if (featuredImageUrl.startsWith('/')) {
                    featuredImageUrl = `${BASE_URL}${featuredImageUrl}`;
                }

                const urlParts = featuredImageUrl.split('/');
                const filename = urlParts[urlParts.length - 1].split('?')[0]; // Clean query params
                if (filename.includes('jpg') || filename.includes('png') || filename.includes('jpeg') || filename.includes('webp')) {
                    localImagePath = await downloadImage(featuredImageUrl, filename);
                }
            }

            // Content Extraction (Cleaned)
            let contentHtml = $page('.elementor-widget-theme-post-content').html() || $page('.entry-content').html() || '';
            if (!contentHtml) continue;

            // Generate Slug
            let slug = url.replace(BASE_URL, '').replace(/^\/+/, '').replace(/\/+$/, '');

            extractedBlogs.push({
                slug,
                url, // keep original for reference if needed
                title,
                date,
                image: localImagePath,
                content: contentHtml.trim(),
                category: "Company News/Tips" // Default category so it shows on feed
            });

            console.log(`[SUCCESS] Extracted: ${title}`);

        } catch (e) {
            console.error(`[ERROR] Failed processing ${url}:`, e.message);
        }
    }

    if (extractedBlogs.length > 0) {
        fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(extractedBlogs, null, 2));
        console.log(`[DONE] Replaced blog data. Total posts written: ${extractedBlogs.length}`);
    } else {
        console.log(`[ERROR] No valid blogs extracted to replace. Keeping old data for safety.`);
    }
}

scrapeBlogs();
