import fs from 'fs';
import path from 'path';

const extracted = JSON.parse(fs.readFileSync('extracted_urls.json', 'utf8'));

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');
const PAGES_DIR = path.join(process.cwd(), 'src/data/pages');

if (!fs.existsSync(PAGES_DIR)) {
    fs.mkdirSync(PAGES_DIR, { recursive: true });
}

extracted.forEach(url => {
    // clean slashes
    let cleanSlug = url.replace(/^\/|\/$/g, '');
    if (!cleanSlug) return;

    // skip hashes and pagination
    if (cleanSlug.startsWith('#') || cleanSlug.startsWith('author/') || cleanSlug.includes('category-') || cleanSlug === 'contact' || cleanSlug === 'about-us' || cleanSlug === 'gallery' || cleanSlug === 'faq' || cleanSlug === 'reviews' || cleanSlug === 'privacy-policy' || cleanSlug.includes('?')) return;

    let isBlog = false;
    let filename = cleanSlug;
    if (cleanSlug.startsWith('blog/')) {
        isBlog = true;
        filename = cleanSlug.replace('blog/', '');
    }

    const title = filename.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Determine target City logic
    let targetCity = "green-bay";
    let cityName = "Green Bay";
    if (filename.includes('appleton')) {
        targetCity = "appleton"; cityName = "Appleton";
    }

    // Determine primary service
    const serviceMap = {
        'window': { name: 'window cleaning', link: '/services/window-cleaning' },
        'pressure': { name: 'pressure washing', link: '/services/pressure-washing' },
        'roof': { name: 'roof cleaning', link: '/services/roof-cleaning' },
        'gutter': { name: 'gutter cleaning', link: '/services/gutter-cleaning' },
        'paver': { name: 'paver cleaning', link: '/services/pressure-washing' },
        'house': { name: 'house washing', link: '/services/house-washing' },
        'solar': { name: 'solar panel cleaning', link: `/${cleanSlug}` },
        'chandelier': { name: 'chandelier cleaning', link: `/${cleanSlug}` },
        'building': { name: 'building washing', link: `/${cleanSlug}` },
        'hood': { name: 'vent hood cleaning', link: `/${cleanSlug}` },
        'concrete': { name: 'concrete cleaning', link: `/${cleanSlug}` },
        'deck': { name: 'deck cleaning', link: `/${cleanSlug}` },
        'dumpster': { name: 'dumpster pad cleaning', link: `/${cleanSlug}` },
        'fence': { name: 'fence cleaning', link: `/${cleanSlug}` },
        'gas': { name: 'gas station cleaning', link: `/${cleanSlug}` },
        'led': { name: 'permanent LED lighting', link: `/${cleanSlug}` },
        'parking': { name: 'parking lot cleaning', link: `/${cleanSlug}` },
        'post-construction': { name: 'post construction cleanup', link: `/${cleanSlug}` },
        'drive-thru': { name: 'drive-thru cleaning', link: `/${cleanSlug}` },
        'awning': { name: 'awning cleaning', link: `/${cleanSlug}` },
        'hoa': { name: 'HOA exterior cleaning', link: `/${cleanSlug}` },
        'graffiti': { name: 'graffiti removal', link: `/${cleanSlug}` },
        'rust': { name: 'rust removal', link: `/${cleanSlug}` },
        'soft': { name: 'soft washing', link: `/${cleanSlug}` },
        'storefront': { name: 'storefront cleaning', link: `/${cleanSlug}` },
    };

    let primaryServiceName = 'exterior cleaning';
    let primaryServiceLink = '/contact';
    for (let [key, val] of Object.entries(serviceMap)) {
        if (filename.toLowerCase().includes(key)) {
            primaryServiceName = val.name;
            primaryServiceLink = val.link;
            break;
        }
    }

    // Authority Link Quad
    const newCapsule = `**[Valley Window Care and Exterior Cleaning](/service-areas/${targetCity}) provides expert [${primaryServiceName}](${primaryServiceLink}) services securely engineered to protect your property. Operating across Northeast Wisconsin, including [Appleton, WI](/service-areas/appleton), our fully certified teams deliver spotless, long-lasting results that elevate curb appeal instantly.**`;

    let body = `${newCapsule}\n\n`;
    body += `Welcome to our comprehensive guide and service breakdown for ${title}. \n\nWe utilize advanced, low-pressure soft-wash techniques and professional-grade detergents that preserve property value and extend material life for up to 20+ years. High-pressure blasting can damage siding, void shingle warranties, and leave streaks on windows. We adhere strictly to the guidelines of the major exterior manufacturers to ensure absolute compliance.\n\n`;
    body += `### Pricing and Custom Quotes\n\n`;
    body += `Every property is unique, and calculating the exact cost of ${primaryServiceName} requires an understanding of the surface material, square footage, and grime severity. We offer immediate, free assessments to all our clients. [Contact Valley Window Care and Exterior Cleaning](/contact) today.\n\n`;
    body += `> *Committed to exterior excellence, we follow the strict compliance and safety guidelines set forth by the [PWNA.org](https://www.pwna.org).*\n\n`;
    body += `*By James Voss – Valley Window Care and Exterior Cleaning*`;

    const markdownContent = `---
title: "${title}"
date: "2026-03-02T12:00:00"
category: "Exterior Cleaning services"
---

${body}
`;

    const targetDir = isBlog ? POSTS_DIR : PAGES_DIR;
    const targetPath = path.join(targetDir, `${filename}.md`);

    if (!fs.existsSync(targetPath)) {
        fs.writeFileSync(targetPath, markdownContent, 'utf8');
        console.log(`✅ Generated: ${targetPath}`);
    }
});

console.log("Finished generating missing pages and blog posts dynamically.");
