import fs from 'fs';
import path from 'path';

const blogContentPath = path.join(process.cwd(), 'src/data/blogContent.json');

interface BlogPost {
    slug: string;
    url: string;
    title: string;
    date: string;
    image: string;
    content: string;
    meta_description: string;
    category?: string; // New Extracted Field for React Nav Filtering
}

const FALLBACK_IMAGE_ROOF = '/gallery/Roof-cleaning-green-bay.jpg';
const FALLBACK_IMAGE_WINDOW = '/gallery/Window_cleaning_company-scaled.jpeg';
const FALLBACK_IMAGE_LIGHTING = '/gallery/Permanent-Holiday-Lighting.webp';
const FALLBACK_IMAGE_COMPANY = '/upscalemedia-transformed.png';

async function executeBlogRestoration() {
    console.log("Initializing Phase 65 Global Blog Data Restoration Sweep...");

    if (!fs.existsSync(blogContentPath)) {
        console.error("Fatal Error: blogContent.json does not exist. Aborting.");
        return;
    }

    const rawData = fs.readFileSync(blogContentPath, 'utf8');
    let blogs: BlogPost[] = JSON.parse(rawData);

    let repairedImagesCount = 0;
    let repairedLinksCount = 0;
    let taggedPostsMap: Record<string, number> = {
        'Window Cleaning': 0,
        'Roof & Exterior Cleaning': 0,
        'Permanent LED Lighting': 0,
        'Company News/Tips': 0
    };

    // Begin Mass Transformation
    blogs = blogs.map(blog => {
        let modifiedBlog = { ...blog };

        const titleStr = blog.title.toLowerCase();
        const slugStr = blog.slug.toLowerCase();
        const contentStr = blog.content.toLowerCase();

        // -------------------------------------------------------------
        // 1. Tag Assignment (Categorization Engine)
        // -------------------------------------------------------------
        if (titleStr.includes('light') || slugStr.includes('light') || titleStr.includes('led')) {
            modifiedBlog.category = 'Permanent LED Lighting';
        } else if (titleStr.includes('window') || slugStr.includes('window') || titleStr.includes('glass')) {
            modifiedBlog.category = 'Window Cleaning';
        } else if (
            titleStr.includes('roof') || titleStr.includes('wash') || titleStr.includes('gutter') ||
            titleStr.includes('moss') || titleStr.includes('siding') || titleStr.includes('pressure') ||
            titleStr.includes('rust') || slugStr.includes('wash') || slugStr.includes('roof')
        ) {
            modifiedBlog.category = 'Roof & Exterior Cleaning';
        } else {
            modifiedBlog.category = 'Company News/Tips';
        }

        taggedPostsMap[modifiedBlog.category]++;

        // -------------------------------------------------------------
        // 2. Global Image Restoration (WP-Content 404 Bypass)
        // -------------------------------------------------------------
        const isBrokenImage = !modifiedBlog.image || modifiedBlog.image.includes('wp-content/uploads');

        if (isBrokenImage) {
            repairedImagesCount++;
            if (modifiedBlog.category === 'Window Cleaning') {
                modifiedBlog.image = FALLBACK_IMAGE_WINDOW;
            } else if (modifiedBlog.category === 'Roof & Exterior Cleaning') {
                modifiedBlog.image = FALLBACK_IMAGE_ROOF;
            } else if (modifiedBlog.category === 'Permanent LED Lighting') {
                modifiedBlog.image = FALLBACK_IMAGE_LIGHTING;
            } else {
                modifiedBlog.image = FALLBACK_IMAGE_COMPANY; // Fallback to team photo
            }
        }

        // Let's explicitly destroy inline broken WordPress HTML images spanning the internal content string
        if (modifiedBlog.content && modifiedBlog.content.includes('wp-content/uploads')) {
            // Replace legacy images securely without mangling Next.js parser
            const regex = /<img[^>]*src="https?:\/\/valleywindowcare\.com\/wp-content\/uploads\/[^"]+"[^>]*>/g;
            modifiedBlog.content = modifiedBlog.content.replace(regex, () => {
                repairedImagesCount++;
                return `<img src="${modifiedBlog.image}" alt="Valley Window Care Team Restoration" class="object-cover rounded-xl" />`;
            });
        }

        // -------------------------------------------------------------
        // 3. Permanent LED Lighting Internal Link Anchor Rerouting
        // -------------------------------------------------------------
        if (modifiedBlog.content.includes('door-county') || modifiedBlog.content.includes('lighting')) {
            // Replace any bad internal URLs pointing to legacy lighting URLs across Door County hubs
            const badLinkRegex = /href="https?:\/\/valleywindowcare\.com\/[^"]*lighting[^"]*door-county[^"]*"/gi;
            if (modifiedBlog.content.match(badLinkRegex)) {
                repairedLinksCount += (modifiedBlog.content.match(badLinkRegex) || []).length;
                modifiedBlog.content = modifiedBlog.content.replace(badLinkRegex, 'href="/services/permanent-lighting"');
            }

            const generalLightingRegex = /href="https?:\/\/valleywindowcare\.com\/[^"]*permanent-lighting[^"]*"/gi;
            if (modifiedBlog.content.match(generalLightingRegex)) {
                modifiedBlog.content = modifiedBlog.content.replace(generalLightingRegex, 'href="/services/permanent-lighting"');
            }
        }

        return modifiedBlog;
    });

    fs.writeFileSync(blogContentPath, JSON.stringify(blogs, null, 2), 'utf8');

    console.log("======================================");
    console.log("Phase 65: Data Restoration Successful!");
    console.log(`Total Posts Parsed: ${blogs.length}`);
    console.log(`Images Repaired/Hot-swapped: ${repairedImagesCount}`);
    console.log(`LED Links Re-Routed: ${repairedLinksCount}`);
    console.log("Category Tags Assigned:", taggedPostsMap);
    console.log("======================================");
}

executeBlogRestoration().catch(console.error);
