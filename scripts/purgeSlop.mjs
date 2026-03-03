import fs from 'fs';
import path from 'path';

// 1. Read the guaranteed live routing array map (the "slop" that was just generated)
const extracted = JSON.parse(fs.readFileSync('extracted_urls.json', 'utf8'));

const APP_DIR = path.join(process.cwd(), 'src/app');
const SERVICES_DIR = path.join(APP_DIR, 'services');
const SERVICE_AREAS_DIR = path.join(APP_DIR, 'service-areas');
const PAGES_DIR = path.join(process.cwd(), 'src/data/pages');

let deletedDirs = 0;
let deletedFiles = 0;

extracted.forEach(url => {
    let cleanSlug = url.replace(/^\/|\/$/g, '');
    if (!cleanSlug) return;

    // skip system routing definitions so we don't accidentally nuke core roots
    if (cleanSlug.startsWith('#') || cleanSlug.startsWith('author/') || cleanSlug.includes('category-') || cleanSlug === 'contact' || cleanSlug === 'about-us' || cleanSlug === 'gallery' || cleanSlug === 'faq' || cleanSlug === 'reviews' || cleanSlug === 'privacy-policy' || cleanSlug.includes('?')) return;

    let filename = cleanSlug;
    if (cleanSlug.startsWith('blog/')) {
        filename = cleanSlug.replace('blog/', '');
        // The user explicitly stated: "Protect the Blogs: Do NOT touch, move, or modify any files within src/content/posts/."
        // We will skip deleting anything blog related to be absolutely safe.
        return;
    }

    if (filename === 'blog' || filename === 'service-areas' || filename === 'services') return; // protect root indices

    // 1. Destroy from Services
    const serviceTarget = path.join(SERVICES_DIR, filename);
    if (fs.existsSync(serviceTarget)) {
        fs.rmSync(serviceTarget, { recursive: true, force: true });
        console.log(`🧹 Purged Slop Directory: /services/${filename}`);
        deletedDirs++;
    }

    // 2. Destroy from Service-Areas
    const saTarget = path.join(SERVICE_AREAS_DIR, filename);
    if (fs.existsSync(saTarget)) {
        fs.rmSync(saTarget, { recursive: true, force: true });
        console.log(`🧹 Purged Slop Directory: /service-areas/${filename}`);
        deletedDirs++;
    }

    // 3. Destroy from Root App (if any sneaked back in)
    const rootTarget = path.join(APP_DIR, filename);
    if (fs.existsSync(rootTarget)) {
        fs.rmSync(rootTarget, { recursive: true, force: true });
        console.log(`🧹 Purged Slop Directory: /${filename}`);
        deletedDirs++;
    }

    // 4. Destroy the generated flat markdown payloads from src/data/pages/
    const mdTarget = path.join(PAGES_DIR, `${filename}.md`);
    if (fs.existsSync(mdTarget)) {
        fs.unlinkSync(mdTarget);
        console.log(`🧹 Purged Slop Markdown: /src/data/pages/${filename}.md`);
        deletedFiles++;
    }
});

console.log(`\\n--- Purge Complete ---`);
console.log(`Deleted ${deletedDirs} TSX directories.`);
console.log(`Deleted ${deletedFiles} Markdown payloads.`);
console.log(`All src/content/posts/ and src/data/posts/ were strictly bypassed and protected.`);
