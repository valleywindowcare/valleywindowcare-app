import fs from 'fs';
import path from 'path';

let cachedDestinations: Set<string> | null = null;

export function isRedirectDestination(urlPath: string): boolean {
    if (cachedDestinations) {
        return cachedDestinations.has(urlPath);
    }

    const destinations = new Set<string>();

    // Static legacy nested map destinations
    const legacyDestinations = [
        "/services/window-cleaning",
        "/services/pressure-washing",
        "/services/roof-cleaning",
        "/services/gutter-cleaning",
        "/services/paver-patio-restorations",
        "/services/permanent-led-lighting",
        "/faq",
        "/service-areas",
        "/service-areas/green-bay/pressure-washing",
        "/services/rust-removal-green-bay",
        "/service-areas/green-bay/paver-patio-restorations",
        "/service-areas/green-bay/apartment-exterior-cleaning",
        "/service-areas/green-bay/hoa-services",
        "/service-areas/green-bay/gas-station-cleaning",
        "/service-areas/green-bay/post-construction-cleanup",
        "/service-areas/green-bay/roof-cleaning",
        "/service-areas/green-bay/house-washing",
        "/service-areas/green-bay/building-washing",
        "/service-areas/green-bay/window-cleaning",
        "/service-areas/green-bay/permanent-led-lighting",
        "/service-areas/green-bay/christmas-lighting",
        "/services/soft-wash-green-bay",
        "/service-areas/green-bay/gutter-cleaning",
        "/blog",
        "/service-areas/green-bay/commercial-pressure-washing",
        "/service-areas/green-bay/concrete-cleaning",
        "/service-areas/green-bay/residential-permanent-led-lighting",
        "/services/driveway-cleaning-green-bay",
        "/services/commercial-awning-cleaning-green-bay",
        "/service-areas/appleton/commercial-hood-cleaning",
        "/service-areas/green-bay/commercial-hood-cleaning",
        "/services/solar-panel-cleaning-green-bay",
        "/service-areas/green-bay/fence-cleaning",
        "/service-areas/green-bay/deck-cleaning",
        "/service-areas/green-bay/parking-lot-and-garage-cleaning",
        "/service-areas/green-bay/premium-drive-thru-cleaning",
        "/service-areas/green-bay/storefront-cleaning",
        "/service-areas/green-bay/graffiti-removal",
        "/service-areas/green-bay/dumpster-pad-cleaning",
        "/service-areas/green-bay/chewing-gum-removal",
        "/service-areas/appleton/pressure-washing",
        "/blog/an-experts-guide-to-cleaning-the-exterior-of-your-home",
        "/blog/diy-paver-patio-cleaning-solutions-with-household-products",
        "/blog/average-cost-for-residential-power-washing",
        "/blog/paver-restoration-services-in-green-bay-wisconsin",
        "/blog/roof-cleaning-prices-near-you",
        "/blog/how-to-safely-remove-moss-from-roof-shingles",
        "/blog/pressure-washing-services-near-you",
        "/blog/gutter-cleaning-services-in-green-bay-wisconsin",
        "/blog/green-bay-power-washing-signs",
        "/blog/eco-friendly-exterior-cleaning-in-green-bay",
        "/blog/how-often-should-you-clean-your-roof",
        "/blog/the-best-way-to-clean-outside-windows-in-5-steps",
        "/blog/how-to-safely-decorate-your-roof-for-christmas-diy-tips-for-a-festive-stylish-holiday-home",
        "/blog/why-tap-water-leaves-window-streaks",
        "/blog/hiring-window-cleaners-what-you-should-know",
        "/blog/how-to-measure-windows-for-blinds",
        "/blog/what-are-gutter-guards-and-do-they-work",
        "/blog/when-to-hire-someone-to-clean-your-gutters",
        "/blog/pressure-washing-a-deck-the-dos-and-donts"
    ];
    legacyDestinations.forEach(d => destinations.add(d));

    try {
        const csvPath = path.join(process.cwd(), 'redirect_map_v3.csv');
        if (fs.existsSync(csvPath)) {
            const content = fs.readFileSync(csvPath, 'utf8');
            const lines = content.split('\n').filter(Boolean);
            lines.slice(1).forEach(line => {
                const parts = line.split(',');
                if (parts.length >= 2) {
                    let destUrl = parts[1].trim();
                    try {
                        const destPath = new URL(destUrl, 'https://dummy.com').pathname;
                        const normalizedDest = destPath.endsWith('/') && destPath.length > 1 ? destPath.slice(0, -1) : destPath;
                        if (normalizedDest) {
                            destinations.add(normalizedDest);
                        }
                    } catch (e) { }
                }
            });
        }
    } catch (e) {
        console.error("Failed to read redirect csv for protection:", e);
    }

    cachedDestinations = destinations;
    return cachedDestinations.has(urlPath);
}
