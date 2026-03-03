import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

async function syncPosts() {
    try {
        const res = await fetch('https://valleywindowcare.com/wp-json/wp/v2/posts?per_page=100');
        if (!res.ok) {
            console.error('Failed to fetch posts from WP API');
            return;
        }
        const posts = await res.json();

        console.log(`Live site reported ${posts.length} posts.`);

        let localFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));

        posts.forEach(post => {
            const slug = post.slug;
            const expectedFile = `${slug}.md`;

            if (!localFiles.includes(expectedFile)) {
                console.log(`Missing post found via API: ${slug} - We need to scrape this.`);
            }
        });

    } catch (e) {
        console.error('API Sync Error:', e);
    }
}

syncPosts();
