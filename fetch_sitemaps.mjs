import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getSitemap(url) {
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9'
            }
        };
        https.get(url, options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', reject);
    });
}

async function run() {
    try {
        console.log("Fetching page-sitemap.xml...");
        const pageSitemap = await getSitemap('https://valleywindowcare.com/page-sitemap.xml');
        
        console.log("Fetching post-sitemap.xml...");
        const postSitemap = await getSitemap('https://valleywindowcare.com/post-sitemap.xml');
        
        // Very simple regex to find loc tags
        const urls = [];
        const regex = /<loc>(.*?)<\/loc>/g;
        let match;
        while ((match = regex.exec(pageSitemap)) !== null) {
            urls.push(match[1]);
        }
        while ((match = regex.exec(postSitemap)) !== null) {
            urls.push(match[1]);
        }
        
        console.log(`Found ${urls.length} raw URLs.`);
        
        if (urls.length < 5) {
             console.log("WAF blocked it or no URLs found. Output:");
             console.log(pageSitemap.substring(0, 500));
        } else {
             fs.writeFileSync(path.join(__dirname, 'live_urls.txt'), urls.join('\n'));
             console.log("Wrote live_urls.txt");
        }
    } catch (err) {
        console.error("Error fetching", err);
    }
}

run();
