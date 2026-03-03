import fs from 'fs';
import * as cheerio from 'cheerio';

async function scrape() {
    const urlsToScrape = new Set();

    // Attempt to read baseline to find likely blog URLs
    const baseline = JSON.parse(fs.readFileSync('./src/data/seo_baseline.json', 'utf-8'));
    for (const url of Object.keys(baseline)) {
        // Exclude known non-blogs
        if (
            url === 'https://valleywindowcare.com/' ||
            url.includes('/contact') ||
            url.includes('/about-us') ||
            url.includes('/gallery') ||
            url.includes('/reviews') ||
            url.includes('/privacy-policy') ||
            url.includes('/service-areas') ||
            url.includes('.kml') ||
            url.includes('/category-') ||
            url.endsWith('/blog/') ||
            url.includes('-in-green-bay') ||
            url.includes('-in-appleton') ||
            url.includes('-services-near-you') ||
            url.includes('cost-for-residential-power-washing')
        ) {
            continue;
        }

        // Add to scrape list
        urlsToScrape.add(url);
    }

    console.log(`Checking ${urlsToScrape.size} URLs from baseline for Blog Content...`);

    const blogs = [];

    for (const url of urlsToScrape) {
        try {
            const res = await fetch(url);
            const html = await res.text();
            const $ = cheerio.load(html);

            // Check if it's a blog post - usually has an author, publish date, or .post content
            const article = $('article');
            const hasBlogIndicators = $('.elementor-widget-theme-post-content').length || article.length || $('.post').length;

            if (!hasBlogIndicators) continue;

            let title = $('h1').first().text().trim() || baseline[url].h1 || baseline[url].meta_title;
            if (!title) continue;

            // Try to find content
            let contentHtml = $('.elementor-widget-theme-post-content').html() || article.find('.entry-content').html() || article.html() || $('main').html() || '';

            // Strip out annoying elementor layout wrappers to simplify
            const $content = cheerio.load(contentHtml);
            $content('.elementor-widget-wrap > .elementor-element').each((i, el) => {
                // very basic unwrapping if needed, or just keep as is
            });

            // Text version to verify it's substantial
            let contentText = $content.text() || '';

            if (contentText.trim().length < 200) continue; // Skip if it's just a thin page

            let date = $('time').attr('datetime') || $('.elementor-post-info__item--type-date').text().trim() || new Date().toISOString();

            let image = $('img.attachment-large').attr('src') || $('article img').first().attr('src') || $('meta[property="og:image"]').attr('content') || '';

            // create slug 
            let slug = url.replace('https://valleywindowcare.com/', '').replace(/\/$/, '');

            blogs.push({
                slug,
                url,
                title,
                date,
                image,
                content: contentHtml.trim()
            });
            console.log(`Scraped Blog: ${slug}`);
        } catch (e) {
            console.error(`Error scraping ${url}: ${e.message}`);
        }
    }

    fs.writeFileSync('./src/data/blogContent.json', JSON.stringify(blogs, null, 2));
    console.log(`Successfully extracted ${blogs.length} blog posts to src/data/blogContent.json.`);
}

scrape();
