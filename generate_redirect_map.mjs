import * as fs from 'fs';
import * as path from 'path';

const LIVE_DOMAIN = "https://www.valleywindowcare.com";
const LOCAL_DOMAIN = "http://localhost:3000";

const XML_DIR = path.join(process.env.HOME, "Desktop");

function extractLocs(xmlString) {
    const locs = xmlString.match(/<loc>(.*?)<\/loc>/g) || [];
    return locs.map(l => l.replace(/<\/?loc>/g, '').trim());
}

// Strict Mapping Rules
function classifyMatch(oldSlug, newSlugs) {
    if (oldSlug === '/') return { match: '/', score: 100 };
    if (newSlugs.includes(oldSlug)) return { match: oldSlug, score: 100 };

    let bestMatch = "/";
    let bestScore = 0;
    
    const cleanOldRaw = oldSlug.replace(/\/$/, '');
    
    // Check if original URL has a city to prevent hyper-localization of generic routes
    const hasGreenBay = cleanOldRaw.includes('green-bay');
    const hasAppleton = cleanOldRaw.includes('appleton');
    const hasCity = hasGreenBay || hasAppleton;

    // --- CORRECTION 1: Permanent Lighting ---
    if (cleanOldRaw.includes('permanent-lighting') || cleanOldRaw.includes('christmas-lighting')) {
         if (newSlugs.includes('/services/permanent-holiday-lighting')) return { match: '/services/permanent-holiday-lighting', score: 100 };
         return { match: '/gallery', score: 90 }; // Fallback since it's lighting
    }

    // --- CORRECTION 2: Stop Awning Dump (Commercial routing) ---
    if (cleanOldRaw.includes('apartment') || cleanOldRaw.includes('hoas') || cleanOldRaw.includes('building-washing')) {
         return { match: '/services/house-washing', score: 95 }; // Closest relevant building washing mapping
    }
    if (cleanOldRaw.includes('sidewalk')) {
         return { match: '/services/driveway-cleaning', score: 95 };
    }
    if (cleanOldRaw.includes('power-washing') || cleanOldRaw.includes('gas-station') || cleanOldRaw.includes('dumpster') || cleanOldRaw.includes('gum-removal')) {
         return { match: '/services/pressure-washing', score: 95 };
    }
    
    // --- CORRECTION 3: Strict FAQ Routing ---
    if (cleanOldRaw.includes('faq')) {
         if (cleanOldRaw.includes('rust')) return { match: '/services/residential-rust-removal', score: 95 };
         if (cleanOldRaw.includes('roof')) return { match: '/services/roof-cleaning', score: 95 };
         if (cleanOldRaw.includes('window')) return { match: '/services/window-cleaning', score: 95 };
         if (cleanOldRaw.includes('solar')) return { match: '/services/solar-panel-cleaning', score: 95 };
         if (cleanOldRaw.includes('soft-wash')) return { match: '/services/soft-wash', score: 95 };
         return { match: '/faq', score: 90 }; // Generic FAQs
    }
    
    // 1. Hard Rule: Locations -> Service Areas
    if (cleanOldRaw.includes('/locations/')) {
        const city = cleanOldRaw.split('/locations/')[1]; // e.g., green-bay
        const expected = `/service-areas/${city}`;
        if (newSlugs.includes(expected)) return { match: expected, score: 100 };
        return { match: '/service-areas', score: 85 }; // Fallback to parent category
    }

    // 2. Hard Rule: Geo-Slugs Matching (e.g. /soft-washing-company-in-green-bay-wisconsin)
    const geoMatch = [
        { key: 'soft-washing', targetPrefix: '/services/soft-wash-' },
        { key: 'rust-removal', targetPrefix: '/services/residential-rust-removal-' },
        { key: 'driveway', targetPrefix: '/services/driveway-cleaning-' },
        { key: 'awning', targetPrefix: '/services/commercial-awning-cleaning-' },
        { key: 'solar', targetPrefix: '/services/solar-panel-cleaning-' }
    ];

    for (let rule of geoMatch) {
         if (cleanOldRaw.includes(rule.key)) {
             // Attempt to extract city
             let resolvedCity = null;
             if (cleanOldRaw.includes('green-bay')) resolvedCity = 'green-bay';
             if (cleanOldRaw.includes('appleton')) resolvedCity = 'appleton';
             
             if (resolvedCity) {
                 const exactGeoSlug = `${rule.targetPrefix}${resolvedCity}`;
                 if (newSlugs.includes(exactGeoSlug)) return { match: exactGeoSlug, score: 98 };
             }
             // Fallback to the base service route
             const baseService = rule.targetPrefix.replace(/-$/, '');
             if (newSlugs.includes(baseService)) return { match: baseService, score: 90 };
         }
    }

    // 3. Core Services Mapping
    if (cleanOldRaw.includes('house-washing')) return { match: '/services/house-washing', score: 95 };
    if (cleanOldRaw.includes('roof-cleaning')) return { match: '/services/roof-cleaning', score: 95 };
    if (cleanOldRaw.includes('window-cleaning')) return { match: '/services/window-cleaning', score: 95 };
    if (cleanOldRaw.includes('gutter-cleaning')) return { match: '/services/gutter-cleaning', score: 95 };
    if (cleanOldRaw.includes('pressure-washing')) return { match: '/services/pressure-washing', score: 95 };

    // 4. Default Heuristic (Levenshtein Token Distance)
    const oldTokens = cleanOldRaw.split(/[\/-]/).filter(t => t.length > 2 && t !== 'faq' && t !== 'company' && t !== 'wisconsin');
    
    newSlugs.forEach(slug => {
         // Prevent lazy dumping to homepage sequentially
         if (slug === '/' || slug === '') return;
         
         // --- CORRECTION 4: Stop Hyper-Localizing Defaults ---
         // If the old URL didn't have a city, do not heavily match localized Next.js routes
         const slugHasCity = slug.includes('green-bay') || slug.includes('appleton') || slug.includes('oshkosh') || slug.includes('door-county') || slug.includes('de-pere');
         if (!hasCity && slugHasCity && cleanOldRaw.length > 3) {
             return; // Hard Ban: Global routes cannot map to local nodes
         }

         let score = 0;
         let matchCount = 0;
         
         oldTokens.forEach(token => {
             if (slug.includes(token)) matchCount++;
         });
         
         if (oldTokens.length > 0) {
             score = (matchCount / oldTokens.length) * 100;
         }

         if (cleanOldRaw.length > 5 && slug.includes(cleanOldRaw)) {
             score += 30;
         }

         if (score > bestScore) {
             bestScore = score;
             bestMatch = slug;
         }
    });

    // 5. Parent Category Fallback (No Lazy Routing)
    // If we scored below 40%, route them to the /services/ hub instead of the homepage.
    if (bestScore < 40 && cleanOldRaw.length > 1) {
        if (cleanOldRaw.includes('blog') || cleanOldRaw.includes('post')) return { match: '/blog', score: 70 };
        return { match: '/services', score: 65 };
    }

    return { match: bestMatch, score: Math.min(100, Math.round(bestScore)) };
}

async function run() {
    console.log("[START] Booting Offline XML Matchmaker...");

    // 1. Gather all local XML strings
    const files = fs.readdirSync(XML_DIR);
    const xmlFiles = files.filter(f => f.includes('sitemap') && f.endsWith('.xml') && f !== 'sitemap_index.xml');
    
    let liveUrls = [];
    for (const file of xmlFiles) {
        let content = fs.readFileSync(path.join(XML_DIR, file), 'utf8');
        let locs = extractLocs(content);
        liveUrls.push(...locs);
        console.log(`[PARSED] ${file} -> Found ${locs.length} URLs.`);
    }

    liveUrls = [...new Set(liveUrls)].filter(u => u.includes('valleywindowcare.com'));
    console.log(`\n[TOTAL EXTRACTED] ${liveUrls.length} Live Indexed Endpoints.`);

    // 2. Localhost Array Memory Generation
    let localUrls = [];
    try {
        const prerenderPath = path.join(process.cwd(), '.next', 'prerender-manifest.json');
        if (fs.existsSync(prerenderPath)) {
            const manifest = JSON.parse(fs.readFileSync(prerenderPath, 'utf8'));
            localUrls = Object.keys(manifest.routes);
        }
    } catch(e) { }

    if(localUrls.length === 0) {
        console.error("[CRITICAL] Cannot evaluate matches without Localhost Manifest!");
        return;
    }
    
    console.log(`[TOTAL TARGETS] Active Static Routes: ${localUrls.length}`);

    // 3. 301 Evaluation Mapping
    console.log("[EVALUATING] Running Semantic Match Rules...");
    let csvData = "Old URL,New URL,Confidence Score (%)\n";
    
    liveUrls.forEach(oldUrl => {
        let oldPath = oldUrl.replace('https://www.valleywindowcare.com', '').replace('https://valleywindowcare.com', '') || '/';
        const match = classifyMatch(oldPath, localUrls);
        let score = match.score;
        csvData += `${oldUrl},${LOCAL_DOMAIN}${match.match},${score}%\n`;
    });

    const csvPath = path.join(process.env.HOME, '.gemini/antigravity/brain/94137aa9-ef83-40ba-be8a-c32b0a10f67d/redirect_map_v2.csv');
    fs.writeFileSync(csvPath, "\uFEFF" + csvData, 'utf8');

    console.log(`\n[SUCCESS] Strict Mapping Enforced. Artifact Generated: redirect_map_v2.csv`);
}

run();
