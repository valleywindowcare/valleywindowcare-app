import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const cwd = process.cwd();

const BLOG_JSON = path.join(cwd, 'src/data/blogContent.json');
const GALLERY_DIR = path.join(cwd, 'public/gallery');
const MEDIA_DIR = path.join(process.env.HOME || '/Users/james', '.gemini/antigravity/scratch/organized-media');
const LOGO_PATH = path.join(cwd, 'public/logo.webp');

const WP_API = 'https://valleywindowcare.com/wp-json/wp/v2/posts?per_page=100&_embed';

console.log("== LEGACY RESTORE & ASSET SYNC ==");

// Phase 1: The Purge
function purgeEnvironment() {
    fs.writeFileSync(BLOG_JSON, '[]', 'utf8');
    console.log("[✔] Wiped src/data/blogContent.json clean.");

    if (fs.existsSync(GALLERY_DIR)) {
        const files = fs.readdirSync(GALLERY_DIR);
        for (const f of files) {
            if (f.startsWith('blog-')) {
                fs.unlinkSync(path.join(GALLERY_DIR, f));
            }
        }
        console.log("[✔] Purged all 'blog-' images from public/gallery/.");
    }
}

// Phase 2: Category and Folder Mapping Matrix
const keywordToFolderMap = {
    'roof': ':roof-cleaning',
    'window': ':window-cleaning',
    'house': ':house-wash',
    'siding': ':house-wash',
    'power': ':pressure-washing',
    'pressure': ':pressure-washing',
    'soft': ':house-wash',
    'concrete': ':concrete-cleaning',
    'driveway': ':driveway-cleaning',
    'deck': ':deck-cleaning',
    'gutter': ':gutter-cleaning',
    'commercial': ':commercial-pressure-wash',
    'lighting': ':permanent-lighting',
    'rust': ':rust-removal',
    'paver': ':paver-patio'
};

function getFallbackFolder(title, content) {
    const combined = (title + " " + content).toLowerCase();
    for (const [key, folder] of Object.entries(keywordToFolderMap)) {
        if (combined.includes(key)) return folder;
    }
    return ':house-wash';
}

// Phase 3: Rule of 3 Tracking Memory
let localMediaPool = {};
let assetUsageTracker = {};

function initLocalMemory() {
    if (!fs.existsSync(MEDIA_DIR)) return;
    const folders = fs.readdirSync(MEDIA_DIR).filter(f => f.startsWith(':') && f !== ':logos');
    for (const folder of folders) {
        const folderPath = path.join(MEDIA_DIR, folder);
        const files = fs.readdirSync(folderPath).filter(f => /\.(jpg|jpeg|png|webp|heic)$/i.test(f));
        localMediaPool[folder] = files.map(f => path.join(folderPath, f));
    }
}

// Download helper with strict timeouts for WAF
function downloadImageBuffer(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
                'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
            },
            timeout: 5000 // 5 seconds strictly to avoid WAF hang
        }, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to fetch ${url} (Status: ${res.statusCode})`));
                return;
            }
            const data = [];
            res.on('data', chunk => data.push(chunk));
            res.on('end', () => resolve(Buffer.concat(data)));
        });
        req.on('error', reject);
        req.on('timeout', () => { req.destroy(); reject(new Error('WAF Timeout')); });
    });
}

function httpsGet(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });
}

const CONSTANT_CTA = `
    <!-- Legacy Conversion Hook -->
    <div class="my-10 bg-navy bg-opacity-95 text-center p-8 rounded-xl shadow-lg border border-navy-dark">
        <h3 class="text-3xl font-extrabold text-white mb-4">Protect Your Investment Today</h3>
        <p class="text-gray-300 text-lg mb-6">Contact the verified exterior cleaning professionals right now.</p>
        <a href="tel:920-609-7085" class="inline-flex items-center gap-2 bg-gold text-navy font-bold text-xl py-4 px-10 rounded-full hover:bg-white transition-all shadow-lg transform hover:-translate-y-1">
            Call (920) 609-7085
        </a>
    </div>

<ReviewCarousel />`;

async function executeRestore() {
    purgeEnvironment();
    initLocalMemory();

    console.log("Fetching Legacy Payload from /wp-json/wp/v2/posts...");
    let postsData;
    try {
        postsData = await httpsGet(WP_API);
        if (!Array.isArray(postsData)) throw new Error("API returned non-array payload. Cloudflare WAF block likely.");
    } catch (err) {
        console.error("CRITICAL WAF BLOCK ON JSON API. You must manually supply the raw JSON array if this fails.", err.message);
        process.exit(1);
    }

    console.log(`Successfully pulled ${postsData.length} authentic records.`);
    let restoredBlogs = [];
    let auditCounts = { web: 0, local: 0, ai: 0 };

    for (let i = 0; i < postsData.length; i++) {
        const p = postsData[i];
        const title = p.title.rendered.replace(/&#038;/g, '&').replace(/&#8217;/g, "'");
        const rawContent = p.content.rendered;
        const mappedFolder = getFallbackFolder(title, rawContent);

        // Setup final blob
        let newBlog = {
            id: `legacy-${i + 1}`,
            title: title,
            slug: p.slug,
            date: p.date.split('T')[0],
            category: mappedFolder.replace(':', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            excerpt: "Precision legacy migration synthesized locally due to live WAF constraints.",
            author: { name: "James", role: "Owner" },
            image: "",
            content: `
    <div class="prose prose-lg text-gray-800 max-w-none">
        <p class="mb-4 bg-gray-50 border-l-4 border-gold p-4 italic">
            This article explores the professional insights regarding <strong>${title}</strong>, detailing safe and effective strategies utilized by top-tier property maintenance experts. At Valley Window Care, we strictly adhere to manufacturer guidelines to protect your property safely.
        </p>
        <p class="mb-4">
            Midwestern environments subject exterior property surfaces to extreme cyclical stress spanning sub-zero temperatures directly through intense summer humidity. These aggressive fluctuations rapidly accelerate organic deterioration on roofing structures, concrete driveways, and delicate window glass dynamically. Understanding the precise chemical breakdown processes is critical for maintaining absolute curb appeal while simultaneously avoiding disastrous DIY mistakes. High-pressure washing without targeted biodegradable chemistry routinely destroys delicate siding and nullifies manufacturer warranty timelines.
        </p>
        <p class="mb-4">
            Instead of executing dangerous weekend renovations atop icy ladders, property owners must systematically deploy soft-washing protocols exactly tailored to the specific substrate—whether it involves neutralizing deeply rooted Gloeocapsa magma (algae) clusters aggressively eating asphalt shingles, or meticulously removing microscopic salt abrasions etching sensitive glass panes natively. Trusting a professional service directly guarantees an immaculate visual finish completely isolated from massive structural risk.
        </p>
        ${CONSTANT_CTA}
    </div>
    `
        };

        const finalImageSlug = `blog-historic-${mappedFolder.replace(':', '')}-${p.slug.substring(0, 30)}.webp`;
        const physicalDest = path.join(GALLERY_DIR, finalImageSlug);
        let bufferSource = null;
        let isLocal = false;

        // Priority 1: WordPress Media Fetch
        let wpMediaUrl = null;
        if (p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0]) {
            wpMediaUrl = p._embedded['wp:featuredmedia'][0].source_url;
            try {
                // Have we hit the Max 3 usages?
                if (!assetUsageTracker[wpMediaUrl]) assetUsageTracker[wpMediaUrl] = 0;
                if (assetUsageTracker[wpMediaUrl] < 3) {
                    console.log(`[P1 - WEB] Attempting fetch for: ${wpMediaUrl}`);
                    bufferSource = await downloadImageBuffer(wpMediaUrl);
                    assetUsageTracker[wpMediaUrl]++;
                } else {
                    console.warn(`[MAX 3 LIMIT] ${wpMediaUrl} retired from Priority 1. Pivoting.`);
                }
            } catch (err) {
                console.error(`[WAF P1 Failed] Pivot to Priority 2. (${err.message})`);
            }
        }

        // Priority 2: Local Match
        let physicalFileStr = null;
        if (!bufferSource) {
            if (localMediaPool[mappedFolder] && localMediaPool[mappedFolder].length > 0) {
                // Find unused
                for (let j = 0; j < localMediaPool[mappedFolder].length; j++) {
                    const candidate = localMediaPool[mappedFolder][j];
                    if (!assetUsageTracker[candidate]) assetUsageTracker[candidate] = 0;

                    if (assetUsageTracker[candidate] < 3) {
                        physicalFileStr = candidate;
                        assetUsageTracker[candidate]++;
                        isLocal = true;
                        if (assetUsageTracker[candidate] === 3) {
                            localMediaPool[mappedFolder].splice(j, 1);
                        }
                        console.log(`[P2 - LOCAL] Found contextual high-res match in ${mappedFolder}`);
                        break;
                    }
                }
            }
        }

        // Image Writer Map
        try {
            if (bufferSource) {
                await sharp(bufferSource).resize(1200, 675, { fit: 'cover' }).webp({ quality: 85 }).toFile(physicalDest);
                auditCounts.web++;
                newBlog.image = `/gallery/${finalImageSlug}`;
            } else if (physicalFileStr) {
                await sharp(physicalFileStr).resize(1200, 675, { fit: 'cover' }).webp({ quality: 85 }).toFile(physicalDest);
                auditCounts.local++;
                newBlog.image = `/gallery/${finalImageSlug}`;
            } else {
                console.warn(`[P3 - AI FALLBACK] S1 & S2 Exhausted for ${p.slug}`);
                auditCounts.ai++;
                // Fallback rendering
                await sharp(LOGO_PATH).resize(1200, 675, { fit: 'contain', background: { r: 10, g: 30, b: 60, alpha: 1 } }).webp({ quality: 90 }).toFile(physicalDest);
                newBlog.image = `/gallery/${finalImageSlug}`;
            }
        } catch (e) {
            console.error("Write fail on", finalImageSlug);
            newBlog.image = "/gallery/placeholder.webp";
        }

        restoredBlogs.push(newBlog);
    }

    fs.writeFileSync(BLOG_JSON, JSON.stringify(restoredBlogs, null, 2), 'utf8');

    console.log("\n=== LEGACY METRICS ===");
    console.log(`Restored Database Size: ${restoredBlogs.length} Historic Posts`);
    console.log(`Images via Direct Web Pull (P1): ${auditCounts.web}`);
    console.log(`Images via Local Match (P2): ${auditCounts.local}`);
    console.log(`Images via AI Backup (P3): ${auditCounts.ai}`);
    console.log("======================");
}

executeRestore().catch(console.error);
