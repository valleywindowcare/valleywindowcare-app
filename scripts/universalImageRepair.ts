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
    category?: string;
}

// 1. Core High-Res Asset Mapping
const ASSET_LIBRARY = {
    'Roof & Exterior Cleaning': [
        '/gallery/Roof-Cleaning-in-green-bay.png',
        '/gallery/Commercial-power-washing-company-scaled.jpg',
        '/gallery/Soft-washing-company-in-green-bay-wi-1-scaled.jpg',
        '/gallery/Roof_Cleaning_Company_in_Appleton-scaled.jpg',
        '/gallery/House-washing-company-in-suamico-wi-1-scaled.jpg'
    ],
    'Window Cleaning': [
        '/gallery/Window_cleaning_company-scaled.jpeg',
        '/gallery/window-cleaning-2.jpg',
        '/gallery/window-cleaning-5.jpg',
        '/gallery/window-cleaning-6.jpg'
    ],
    'Permanent LED Lighting': [
        '/gallery/Permanent-Holiday-Lighting.webp',
        '/gallery/Patio-Deck-Lighting.webp',
        '/gallery/holiday.webp',
        '/gallery/residential3.webp'
    ],
    'Company News/Tips': [
        '/upscalemedia-transformed.png',
        '/gallery/Image-8-17-25-at-9.32-PM-scaled.jpg'
    ]
};

// Procedural Image Cycle
function getAssetForCategory(category: string, mapIter: number) {
    const defaultCat = 'Company News/Tips';
    const activeCat = ASSET_LIBRARY[category as keyof typeof ASSET_LIBRARY] ? category : defaultCat;
    const library = ASSET_LIBRARY[activeCat as keyof typeof ASSET_LIBRARY];
    return library[mapIter % library.length];
}

async function executeUniversalImageRepair() {
    console.log("Initializing Phase 66: Universal Image Repair Force-Action...");

    if (!fs.existsSync(blogContentPath)) {
        console.error("Fatal Error: blogContent.json does not exist. Aborting.");
        return;
    }

    const rawData = fs.readFileSync(blogContentPath, 'utf8');
    let blogs: BlogPost[] = JSON.parse(rawData);

    let repairedFeaturedImages = 0;
    let repairedInlineImages = 0;

    // Mass Data Transformation
    blogs = blogs.map((blog, idx) => {
        let modifiedBlog = { ...blog };
        const activeCategory = modifiedBlog.category || 'Company News/Tips';

        // -------------------------------------------------------------
        // 1. Primary Featured Image Hardening
        // -------------------------------------------------------------
        const brokenImageRegex = /(wp-content|placeholder|broken|^$)/i;
        if (brokenImageRegex.test(modifiedBlog.image || "")) {
            modifiedBlog.image = getAssetForCategory(activeCategory, idx);
            repairedFeaturedImages++;
        }

        // -------------------------------------------------------------
        // 2. Inline Content Regex Eradication and Alt Tag Mapping
        // -------------------------------------------------------------
        if (modifiedBlog.content) {

            // First, scrub out the horrific inline style blocks injected by WordPress
            modifiedBlog.content = modifiedBlog.content.replace(/<style type="text\/css">[\s\S]*?<\/style>/gi, '');

            // Target ANY legacy image string format (not just specific valleywindowcare domains)
            // This aggressively intercepts all `<img>` nodes regardless of where they point
            const anyImageTagRegex = /<img[^>]*>/gi;

            modifiedBlog.content = modifiedBlog.content.replace(anyImageTagRegex, (imgTag) => {
                repairedInlineImages++;

                // Let's rip out inline CSS that breaks responsiveness
                let safeImg = imgTag.replace(/width="\d+"/i, '').replace(/height="\d+"/i, '').replace(/style="[^"]*"/i, '');

                // Replace ANY legacy Source URL with our verified HD Category Asset
                const sourceReplaceRegex = /src="([^"]+)"/i;
                safeImg = safeImg.replace(sourceReplaceRegex, `src="${getAssetForCategory(activeCategory, idx + 1)}"`);

                // Enforce React/Next.js Layout CSS Hardening
                const cssClassStr = `class="object-cover h-[300px] w-full rounded-2xl shadow-md my-8"`;

                if (safeImg.includes('class=')) {
                    safeImg = safeImg.replace(/class="[^"]*"/i, cssClassStr);
                } else {
                    safeImg = safeImg.replace(/<img/i, `<img ${cssClassStr}`);
                }

                // Inject Standardized Global Alt Tag
                const altString = `alt="Valley Window Care and Exterior Cleaning - ${activeCategory} Service Profile"`;
                if (safeImg.includes('alt=')) {
                    safeImg = safeImg.replace(/alt="[^"]*"/i, altString);
                } else {
                    safeImg = safeImg.replace(/<img/i, `<img ${altString}`);
                }

                // Nuke broken srcset which causes 404s to throw errors even when the main src is fixed
                safeImg = safeImg.replace(/srcset="[^"]*"/i, '').replace(/sizes="[^"]*"/i, '');

                return safeImg;
            });
        }

        return modifiedBlog;
    });

    fs.writeFileSync(blogContentPath, JSON.stringify(blogs, null, 2), 'utf8');

    console.log("======================================");
    console.log("Phase 66: Universal Image Repair Successful!");
    console.log(`Total Posts Parsed: ${blogs.length}`);
    console.log(`Featured Image Grids Bound: ${repairedFeaturedImages}`);
    console.log(`Inline HTML Images Repaired, Styled & Alt Tagged: ${repairedInlineImages}`);
    console.log("======================================");
}

executeUniversalImageRepair().catch(console.error);
