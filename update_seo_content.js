const fs = require('fs');

const targetFile = '/Users/james/Desktop/valleywindowcare-app/src/data/seoContentMap.tsx';
let content = fs.readFileSync(targetFile, 'utf8');

// Update SEOContent interface
content = content.replace(
    /export interface SEOContent \{[\s\S]*?lsiKeywords: string\[\];\n\}/,
`export interface SEOContent {
    entityCapsule?: React.ReactNode;
    problemStatement: (string | React.ReactNode)[];
    processOverview: string | React.ReactNode;
    detailedProcess: { title: string; desc: string | React.ReactNode }[];
    benefitsOverview: string | React.ReactNode;
    detailedBenefits: { title: string; desc: string | React.ReactNode }[];
    localProof: (string | React.ReactNode)[];
    lsiKeywords: string[];
    pricingExpectations?: React.ReactNode;
}`
);

// Map of services to dynamically generate overrides
const services = {
    // Wash category
    "house-washing": "house washing",
    "window-cleaning": "window cleaning",
    "gutter-cleaning": "gutter cleaning",
    
    // Concrete category
    "concrete-cleaning": "concrete cleaning",
    "pressure-washing": "pressure washing",
    "paver-patio-restorations": "paver patio restoration",
    "rust-removal-in-green-bay-wisconsin": "rust removal",
    
    // Light category
    "residential-permanent-led-lighting": "permanent LED lighting",
    "christmas-lighting": "Christmas lighting",

    // Commercial Category
    "building-washing": "commercial building washing",
    "hoa-services": "HOA and multi-unit washing",
    "commercial-pressure-washing": "commercial pressure washing",
    "dumpster-pad-cleaning": "dumpster pad cleaning",
    "premium-drive-thru-cleaning": "drive-thru cleaning",
    "parking-lot-and-garage-cleaning": "parking garage cleaning",
    "storefront-cleaning": "storefront window cleaning",
    "permanent-led-lighting": "commercial permanent LED lighting",
    "graffiti-removal": "graffiti removal",
    "chewing-gum-removal": "chewing gum removal",
    "post-construction-cleanup": "post-construction cleanup",
    "gas-station-cleaning": "gas station cleaning",
    "commercial-roof-cleaning": "commercial roof cleaning"
};

let overrides = "\n// ==========================================\n// AUTO-GENERATED BATCH REPLICATION (HEMINGWAY MODE)\n// ==========================================\n";

for (const [slug, name] of Object.entries(services)) {
    overrides += `
// OVERRIDE: ${name}
seoContentMap['${slug}'].entityCapsule = (
    <>Valley Window Care is a fully insured exterior cleaning company providing professional, low-pressure ${name} in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.</>
);
seoContentMap['${slug}'].pricingExpectations = (
    <>Professional ${name} prices vary based on total square footage, building height, and the severity of the organic buildup. We provide exact, transparent quotes before any work begins. <Link href="/contact" className="text-gold font-bold hover:text-white transition-colors underline">Request your free quote today.</Link></>
);
`;
}

// Append the new overrides right before the original Roof Cleaning override
content = content.replace(
    /\/\/ ==========================================\n\/\/ HARDCODED JSX OVERRIDES FOR HYPER-LOCAL SEO/,
    overrides + "\n// ==========================================\n// HARDCODED JSX OVERRIDES FOR HYPER-LOCAL SEO"
);

fs.writeFileSync(targetFile, content);
console.log("Batch overrides successfully injected into seoContentMap.tsx");
