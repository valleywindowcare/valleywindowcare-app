import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

function getCsvRedirects() {
  try {
    const csvPath = path.join(process.cwd(), 'redirect_map_v3.csv');
    if (!fs.existsSync(csvPath)) return [];

    const fileContent = fs.readFileSync(csvPath, 'utf8');
    const lines = fileContent.split('\n').filter(Boolean);

    // Skip header
    const rawRedirects = lines.slice(1).map(line => {
      const parts = line.split(',');
      if (parts.length >= 2) {
        let sourceUrl = parts[0].trim();
        let destUrl = parts[1].trim();

        try {
          // Robust URL parsing handling both absolute & relative CSV values
          const sourcePath = new URL(sourceUrl, 'https://dummy.com').pathname;
          const destPath = new URL(destUrl, 'https://dummy.com').pathname;

          // Normalize paths
          const normalizedSource = sourcePath.endsWith('/') && sourcePath.length > 1 ? sourcePath.slice(0, -1) : sourcePath;
          const normalizedDest = destPath.endsWith('/') && destPath.length > 1 ? destPath.slice(0, -1) : destPath;

          if (normalizedSource && normalizedSource !== '/' && normalizedSource !== normalizedDest) {
            return {
              source: normalizedSource,
              destination: normalizedDest,
              permanent: true,
            };
          }
        } catch (e) {
          return null;
        }
      }
      return null;
    }).filter(Boolean) as { source: string; destination: string; permanent: boolean }[];

    // De-duplicate
    const uniqueRedirects: { source: string; destination: string; permanent: boolean }[] = [];
    const seen = new Set();
    for (const r of rawRedirects) {
      if (!seen.has(r.source)) {
        seen.add(r.source);
        uniqueRedirects.push(r);
      }
    }
    return uniqueRedirects;
  } catch (error) {
    console.error("Error parsing redirect CSV:", error);
    return [];
  }
}

// Generate the regex string for matching valid services
// Generate the regex string for matching valid services
const validServicesRegex = `(roof-cleaning|house-washing|gutter-cleaning|concrete-cleaning|window-cleaning|christmas-lighting|pressure-washing|residential-permanent-led-lighting|fence-cleaning|deck-cleaning|oxidation-removal|soft-wash|driveway-cleaning|solar-panel-cleaning|rust-removal|building-washing|dumpster-pad-cleaning|permanent-led-lighting|commercial-roof-cleaning|commercial-pressure-washing|graffiti-removal|hoa-multi-unit-cleaning|storefront-cleaning|premium-drive-thru-cleaning|parking-lot-and-garage-cleaning|chewing-gum-removal|commercial-awning-cleaning|gas-station-cleaning|post-construction-cleanup|paver-patio-restorations|commercial-hood-cleaning|apartment-exterior-cleaning|winter-salt-removal)`;

const legacyToNestedMap: Record<string, string> = {
  "/window-cleaning": "/services/window-cleaning",
  "/pressure-washing": "/services/pressure-washing",
  "/roof-cleaning": "/services/roof-cleaning",
  "/gutter-cleaning": "/services/gutter-cleaning",
  "/paver-restoration": "/services/paver-patio-restorations",
  "/permanent-lighting": "/services/permanent-led-lighting",
  "/faq_category/window-cleaning": "/faq",
  "/faq_category/pressure-washing": "/faq",
  "/faq_category/roof-cleaning": "/faq",
  "/faq_category/gutter-cleaning": "/faq",
  "/faq_category/lighting": "/faq",
  "/faq_category/paver-patio-restorations": "/faq",
  "/faq_category/vent-hood-cleaning": "/faq",
  "/faq_category/permanent-lighting": "/faq",
  "/faq_category/hoa-exterior-cleaning": "/faq",
  "/faq-items": "/faq",
  "/faq-items/how-to-remove-rust-off-your-drive": "/faq",
  "/faq-items/paver-patio-green-bay-wi": "/faq",
  "/faq-items/window-cleaning-near-me": "/faq",
  "/faq-items/how-often-should-i-have-my-roof-soft-washed": "/faq",
  "/faq-items/weatherproof-permanent-lighting-wisconsin": "/faq",
  "/faq-items/hoa-exterior-cleaning-faqs": "/faq",
  "/faq-items/permanent-lighting-green-bay-wi": "/faq",
  "/faq-items/permanent-lighting-green-bay": "/faq",
  "/faq-items/are-you-licensed-and-insured": "/faq",
  "/faq-items/do-you-offer-after-hours-cleaning": "/faq",
  "/faq-items/how-often-should-vent-hoods-be-cleaned-in-wisconsin": "/faq",
  "/faq-items/what-is-involved-in-paver-patio-restoration": "/faq",
  "/faq-items/how-long-does-the-restoration-process-take": "/faq",
  "/faq-items/will-the-pressure-washing-damage-my-pavers": "/faq",
  "/faq-items/how-often-should-i-have-my-paver-patio-restored": "/faq",
  "/faq-items/is-pressure-washing-safe-for-my-homes-siding-or-roof": "/faq",
  "/faq-items/how-often-should-i-have-my-windows-professionally-cleaned": "/faq",
  "/faq-items/whats-included-in-your-window-cleaning-service": "/faq",
  "/faq-items/how-much-does-window-cleaning-cost": "/faq",
  "/faq-items/what-areas-do-you-service": "/faq",
  "/faq-items/do-you-offer-any-discounts-or-maintenance-packages": "/faq",
  "/faq-items/do-you-clean-both-the-inside-and-outside-of-the-windows": "/faq",
  "/faq-items/how-does-soft-washing-differ-from-pressure-washing": "/faq",
  "/faq-items/are-lumi-lights-compatible-with-my-smart-home-system": "/faq",
  "/faq-items/what-should-i-do-if-my-lumi-lights-arent-working": "/faq",
  "/faq-items/how-do-i-control-my-lumi-lights": "/faq",
  "/faq-items/can-lumi-lights-be-used-outdoors": "/faq",
  "/faq-items/how-do-i-update-the-firmware-on-my-lumi-lights": "/faq",
  "/faq-items/what-is-the-warranty-on-lumi-lights": "/faq",
  "/faq-items/firmware-updates-are-done-through-the-lumi-lights-app-ensure-your-lights-are-connected-to-the-app-and-follow-the-prompts-to-update": "/faq",
  "/faq-items/how-do-i-reset-my-lumi-lights": "/faq",
  "/faq-items/why-should-i-clean-my-roof": "/faq",
  "/faq-items/can-i-clean-my-own-roof": "/faq",
  "/faq-items/what-methods-are-used-for-roof-cleaning": "/faq",
  "/faq-items/will-roof-cleaning-damage-my-roof": "/faq",
  "/faq-items/can-roof-cleaning-remove-moss-or-algae": "/faq",
  "/faq-items/does-roof-cleaning-come-with-any-warranties": "/faq",
  "/faq-items/will-roof-cleaning-affect-my-homes-energy-efficiency": "/faq",
  "/faq-items/what-is-soft-washing": "/faq",
  "/faq-items/what-are-the-benefits-of-soft-washing": "/faq",
  "/faq-items/what-surfaces-can-be-cleaned-with-soft-washing": "/faq",
  "/faq-items/is-soft-washing-safe-for-my-roof": "/faq",
  "/faq-items/can-i-perform-soft-washing-myself": "/faq",
  "/faq-items/why-is-gutter-cleaning-important": "/faq",
  "/faq-items/should-i-consider-gutter-guards-or-covers": "/faq",
  "/faq-items/how-do-professionals-clean-gutters": "/faq",
  "/faq-items/what-are-the-risks-of-not-cleaning-my-gutters": "/faq",
  "/faq-items/can-i-clean-my-gutters-myself": "/faq",
  "/faq-items/how-often-should-i-clean-my-gutters": "/faq",
  "/faq-items/how-often-does-my-roof-need-to-be-cleaned": "/faq",
  "/faq-items/why-do-my-windows-look-smeared-after-cleaning": "/faq",
  "/faq-items/is-hot-water-better-for-cleaning-windows": "/faq",
  "/faq-items/is-dawn-dish-soap-good-for-washing-outside-windows": "/faq",
  "/faq-items/can-vinegar-damage-glass-windows": "/faq",
  "/faq-items/what-is-the-best-thing-to-use-to-clean-outside-windows": "/faq",
  "/faq-items/is-hydrogen-peroxide-good-for-cleaning-windows": "/faq",
  "/faq-items/whats-the-best-way-to-clean-windows-without-smearing": "/faq",
  "/faq-items/how-long-should-a-window-cleaner-take": "/faq",
  "/faq-items/when-should-you-not-clean-windows": "/faq",
  "/faq-items/how-do-i-get-streak-free-windows": "/faq",
  "/faq-items/what-do-professionals-use-to-clean-windows": "/faq",
  "/faq-items/what-month-is-best-for-window-cleaning": "/faq",
  "/faq-items/how-much-does-it-cost-to-clean-the-windows": "/faq",
  "/faq-items/how-often-should-you-have-your-outside-windows-cleaned": "/faq",
  "/faq-items/is-it-worth-getting-windows-cleaned": "/faq",
  "/locations.kml": "/service-areas",
  "/pressure-washing-company-in-green-bay-wisconsin": "/services/pressure-washing",
  "/rust-removal-in-green-bay-wisconsin": "/services/rust-removal-green-bay",
  "/paver-patio-restorations-in-green-bay-wisconsin": "/services/paver-patio-restorations",
  "/expert-exterior-cleaning-for-apartment-complexes-in-green-bay-wisconsin": "/services/apartment-exterior-cleaning",
  "/professional-exterior-cleaning-for-hoas-in-green-bay-wisconsin": "/services/hoa-services",
  "/gas-station-cleaning-in-green-bay-wisconsin": "/services/gas-station-cleaning",
  "/post-construction-cleanup-in-green-bay-wisconsin": "/services/post-construction-cleanup",
  "/roof-cleaning-company-in-green-bay-wisconsin": "/services/roof-cleaning",
  "/house-washing-company-in-green-bay-wisconsin": "/services/house-washing",
  "/power-washing-company-in-green-bay-wisconsin": "/services/pressure-washing",
  "/building-washing-in-green-bay-wisconsin": "/services/building-washing",
  "/window-cleaning-company-in-green-bay-wisconsin": "/services/window-cleaning",
  "/permanent-led-lighting-green-bay-wi": "/services/permanent-led-lighting",
  "/christmas-lighting-installation-in-green-bay-wisconsin": "/services/christmas-lighting",
  "/soft-washing-company-in-green-bay-wisconsin": "/services/soft-wash-green-bay",
  "/gutter-cleaning-company-in-green-bay-wisconsin": "/services/gutter-cleaning",
  "/blog/category-property-washing": "/blog",
  "/commercial-pressure-washing-company-in-green-bay-wisconsin": "/services/commercial-pressure-washing",
  "/concrete-cleaning-company-in-green-bay-wisconsin": "/services/concrete-cleaning",
  "/permanent-lighting-solutions-green-bay-wi": "/services/residential-permanent-led-lighting",
  "/driveway-cleaning-company-in-green-bay-wisconsin": "/services/driveway-cleaning-green-bay",
  "/professional-awning-cleaning-in-green-bay-wisconsin": "/services/commercial-awning-cleaning-green-bay",
  "/commercial-vent-hood-cleaning-in-green-bay-appleton-wiay-wi": "/services/commercial-hood-cleaning",
  "/expert-hood-vent-cleaning-green-bay-hhood-vent-cleaning-green-bay": "/services/commercial-hood-cleaning",
  "/blog/permanent-lighting-green-bay-wi": "/blog",
  "/window-cleaning-faqs": "/faq",
  "/solar-panel-cleaning-in-green-bay-wisconsin": "/services/solar-panel-cleaning-green-bay",
  "/fence-cleaning-in-green-bay-wisconsin": "/services/fence-cleaning",
  "/deck-cleaning-in-green-bay-wisconsin": "/services/deck-cleaning",
  "/parking-lot-and-garage-cleaning-in-green-bay-wisconsin": "/services/parking-lot-and-garage-cleaning",
  "/premium-drive-thru-cleaning-in-green-bay-wisconsin": "/services/premium-drive-thru-cleaning",
  "/storefront-cleaning-in-green-bay-wisconsin": "/services/storefront-cleaning",
  "/professional-graffiti-removal-in-green-bay-wisconsin": "/services/graffiti-removal",
  "/dumpster-pad-cleaning-services-in-green-bay-wisconsin": "/services/dumpster-pad-cleaning",
  "/chewing-gum-removal-in-green-bay-wisconsin": "/services/chewing-gum-removal",
  "/appleton-wi-pressure-washing": "/services/pressure-washing",
  "/service-areas-window-cleaning-gutter-cleaning-pressure-washing-leaf-cleanups": "/service-areas",
  "/professional-power-washing-services-green-bay-wisconsin-valley-window-care": "/services/pressure-washing",
  "/sidewalk-cleaning-company-in-green-bay-wisconsin": "/services/concrete-cleaning",
  "/blog/window-cleaning": "/blog",
  "/blog/category-roof-cleaning": "/blog",
  "/blog/category-paver-restoration": "/blog",
  "/blog/category-gutter-cleaning": "/blog",
  "/blog-exterior-home-cleaning-guide": "/blog/an-experts-guide-to-cleaning-the-exterior-of-your-home",
  "/smart-lighting-popup-content-draft-only": "/services/residential-permanent-led-lighting",
  "/diy-paver-patio-cleaning-solutions-with-household-products": "/blog/diy-paver-patio-cleaning-solutions-with-household-products",
  "/what-does-pressure-washing-cost-in-wisconsin": "/blog/average-cost-for-residential-power-washing",
  "/who-offers-pressure-washing-services-near-you": "/blog/average-cost-for-residential-power-washing",
  "/how-to-restore-and-maintain-your-pavers-a-complete-guide-to-paver-cleaning-and-sealing-cloned": "/blog/paver-restoration-services-in-green-bay-wisconsin",
  "/roof-cleaning-prices-near-you": "/blog/roof-cleaning-prices-near-you",
  "/how-to-safely-remove-moss-from-roof-shingles": "/blog/how-to-safely-remove-moss-from-roof-shingles",
  "/average-cost-for-residential-power-washing": "/blog/average-cost-for-residential-power-washing",
  "/pressure-washing-services-near-you": "/blog/pressure-washing-services-near-you",
  "/gutter-cleaning-green-bay-home-maintenance": "/blog/gutter-cleaning-services-in-green-bay-wisconsin",
  "/green-bay-power-washing-signs": "/blog/green-bay-power-washing-signs",
  "/eco-friendly-exterior-cleaning-green-bay": "/blog/eco-friendly-exterior-cleaning-in-green-bay",
  "/how-often-should-you-clean-your-roof": "/blog/how-often-should-you-clean-your-roof",
  "/the-best-way-to-clean-outside-windows-in-5-steps": "/blog/the-best-way-to-clean-outside-windows-in-5-steps",
  "/exterior-house-cleaning-checklist": "/blog/an-experts-guide-to-cleaning-the-exterior-of-your-home",
  "/gutter-cleaning-services-in-green-bay-wisconsin": "/blog/gutter-cleaning-green-bay-home-maintenance",
  "/roof-cleaning-services-in-green-bay-and-appleton": "/blog/how-often-should-you-clean-your-roof",
  "/paver-restoration-services-in-green-bay-wisconsin": "/services/paver-patio-restorations",
  "/permanent-led-smart-lighting-solutions-in-green-bay-wi": "/services/residential-permanent-led-lighting",
  "/how-to-safely-decorate-your-roof-for-christmas-diy-tips-for-a-festive-stylish-holiday-home": "/blog/how-to-safely-decorate-your-roof-for-christmas-diy-tips-for-a-festive-stylish-holiday-home",
  "/why-tap-water-leaves-window-streaks": "/blog/why-tap-water-leaves-window-streaks",
  "/hiring-a-window-cleaner-guide": "/blog/hiring-window-cleaners-what-you-should-know",
  "/how-to-measure-windows-for-blinds": "/blog/how-to-measure-windows-for-blinds",
  "/professional-window-cleaning-services-in-green-bay-wi": "/services/window-cleaning",
  "/what-are-gutter-guards-and-do-they-work": "/blog/what-are-gutter-guards-and-do-they-work",
  "/when-to-hire-someone-to-clean-your-gutters": "/blog/when-to-hire-someone-to-clean-your-gutters",
  "/green-bay-pressure-washing-services": "/services/pressure-washing",
  "/pressure-washing-a-deck-the-dos-and-donts": "/blog/pressure-washing-a-deck-the-dos-and-donts",
  "/power-washing-green-bay": "/services/pressure-washing",
};

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "valleywindowcare.com",
      },
    ],
  },
  async redirects() {
    const staticRedirects = Object.entries(legacyToNestedMap).map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));

    // Dynamic Regex Redirects tracking legacy Flat SEO URLs using Path-to-Regexp syntax
    const dynamicRegexRedirects = [
      {
        // Matches /appleton-roof-cleaning -> /service-areas/appleton/roof-cleaning
        source: `/:city-:service${validServicesRegex}`,
        destination: '/service-areas/:city',
        permanent: true,
      },
      {
        // Matches /services/roof-cleaning-appleton -> /service-areas/appleton/roof-cleaning
        source: `/services/:service${validServicesRegex}-:city`,
        destination: '/service-areas/:city',
        permanent: true,
      },

      {
        // Phase 8: Green Bay Regional Hub Consolidation
        source: '/service-areas/:city(de-pere|howard|suamico|allouez|ashwaubenon|bellevue|ledgeview|hobart)',
        destination: '/service-areas/green-bay',
        permanent: true,
      },
      {
        // Phase 8: Appleton Regional Hub Consolidation
        source: '/service-areas/:city(menasha|kaukauna|greenville|sherwood|combined-locks)',
        destination: '/service-areas/appleton',
        permanent: true,
      },
      {
        // Phase 2: Door County Consolidation Redirect
        source: '/service-areas/:city(egg-harbor|sturgeon-bay|fish-creek|sister-bay|ephraim)/:path*',
        destination: '/service-areas/door-county',
        permanent: true,
      },
      {
        source: '/service-areas/:city(egg-harbor|sturgeon-bay|fish-creek|sister-bay|ephraim)',
        destination: '/service-areas/door-county',
        permanent: true,
      },
      {
        source: '/appleton',
        destination: '/service-areas/appleton',
        permanent: true,
      },
      {
        source: '/locations/appleton',
        destination: '/service-areas/appleton',
        permanent: true,
      },
      {
        source: '/services/paver-patio-restorations',
        destination: 'https://www.greenbaypavercleaning.com/',
        permanent: true,
      },
      {
        source: '/paver-patio-restorations',
        destination: 'https://www.greenbaypavercleaning.com/',
        permanent: true,
      },
      {
        source: '/paver-restoration',
        destination: 'https://www.greenbaypavercleaning.com/',
        permanent: true,
      }
    ];

    const csvRedirects = getCsvRedirects();

    // Combine and deduplicate against static map
    const staticSources = new Set(staticRedirects.map(r => r.source));
    const finalCsvRedirects = csvRedirects.filter(r => !staticSources.has(r.source));

    return [...staticRedirects, ...dynamicRegexRedirects, ...finalCsvRedirects];
  },
};

export default nextConfig;
