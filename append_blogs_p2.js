const fs = require('fs');
const path = require('path');

async function main() {
    console.log("Reading wp_posts_dump.json...");
    // Read from the root directory of the Next.js project
    const dumpPath = path.join(__dirname, 'wp_posts_dump.json');
    
    if (!fs.existsSync(dumpPath)) {
        // Fallback to desktop if not running in the project dir
        console.error("wp_posts_dump.json not found in project root. Trying Desktop...");
        const desktopPath = '/Users/james/Desktop/wp_posts_dump.json';
        if (fs.existsSync(desktopPath)) {
             processDump(desktopPath);
        } else {
             console.error("wp_posts_dump.json not found on Desktop either!");
             return;
        }
    } else {
        processDump(dumpPath);
    }
}

function processDump(dumpPath) {
    const rawData = fs.readFileSync(dumpPath, 'utf8');
    const posts = JSON.parse(rawData);

    const blogDataPath = path.join('/Users/james/Desktop/valleywindowcare-app', 'src', 'data', 'blogData.ts');
    let blogDataContent = fs.readFileSync(blogDataPath, 'utf8');

    // Extract existing slugs
    const existingSlugs = new Set();
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    let match;
    while ((match = slugRegex.exec(blogDataContent)) !== null) {
        existingSlugs.add(match[1]);
    }

    console.log(`Found ${existingSlugs.size} existing posts in blogData.ts.`);

    let appendedCount = 0;
    let newPostsTs = "";

    posts.forEach(post => {
        let slug = post.slug;
        if (!existingSlugs.has(slug)) {
            let title = post.title.rendered
                .replace(/&#8211;/g, '-')
                .replace(/&#8217;/g, "'")
                .replace(/&#038;/g, "&")
                .replace(/&amp;/g, "&")
                .replace(/&#8220;/g, '"')
                .replace(/&#8221;/g, '"');
            let content = post.content.rendered;
            
            // Format date correctly if possible, or use raw date
            let dateObj = new Date(post.date);
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            let formattedDate = dateObj.toLocaleDateString('en-US', options);
            if(formattedDate === "Invalid Date") {
               formattedDate = "February 1, 2026";
            }

            let safeContent = content.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');

            let newPost = `    {\n`;
            newPost += `        id: "post-restored-${Date.now()}-${appendedCount}",\n`;
            newPost += `        slug: "${slug}",\n`;
            newPost += `        title: ${JSON.stringify(title)},\n`;
            newPost += `        date: "${formattedDate}",\n`;
            newPost += `        excerpt: "Historical article restored from the WordPress archives (Page 2).",\n`;
            newPost += `        content: \`${safeContent}\`,\n`;
            newPost += `        imagePath: "/site-gallery/roof1.jpg",\n`;
            newPost += `        category: "General Maintenance"\n`;
            newPost += `    }`;

            if (newPostsTs !== "") {
                newPostsTs += ",\n";
            }
            newPostsTs += newPost;
            appendedCount++;
        }
    });

    if (appendedCount > 0) {
        // Find the last ];
        const lastBracketIndex = blogDataContent.lastIndexOf('];');
        if (lastBracketIndex !== -1) {
            // Determine if we need a comma before our new items.
            // If the array isn't empty, we likely need a comma. A simple regex check before ']'
            const arrayContentBeforeEnd = blogDataContent.substring(0, lastBracketIndex);
            const needsComma = !arrayContentBeforeEnd.trim().endsWith('[');
            
            blogDataContent = arrayContentBeforeEnd.replace(/[\s,]+$/, '') + 
                              (needsComma ? ",\n" : "\n") + 
                              newPostsTs + 
                              "\n];\n";
            fs.writeFileSync(blogDataPath, blogDataContent, 'utf8');
            console.log(`Successfully appended ${appendedCount} new posts.`);
        } else {
            console.error("Could not find the end of the array in blogData.ts");
        }
    } else {
        console.log("No new posts discovered. All slugs already exist.");
    }
}

main().catch(console.error);
