import fs from 'fs';

const dbPath = './src/data/serviceAreasContent.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Unique introductions for Appleton, Green Bay, De Pere
const bespokeIntros = {
  "green-bay": `
    <h2>Professional Exterior Cleaning Services in Green Bay, Wisconsin</h2>
    <p>Winter squalls off the bay and heavy spring rains create a uniquely punishing environment for properties in Green Bay. The constant atmospheric moisture driven inward from the waterfront forces homeowners to battle relentless algae and deep-rooted moss year-round.</p>
    <p>Whether you manage a commercial facility near Lambeau Field or own a historic home by Heritage Hill, the rapid freeze-thaw cycles common to our area constantly threaten your structural integrity. Ice expansion widens micro-fissures in concrete and brick, necessitating strict seasonal maintenance.</p>
    <p>Ignoring these localized environmental threats always results in premature rot and expensive replacements. By scheduling routine exterior sanitization, you proactively neutralize the biological growth that thrives in our specific humid, lake-effect climate.</p>
    <p>Our specialized technicians utilize tailored low-pressure cleaning protocols that melt away the grime specific to the Green Bay ecosystem, completely avoiding the destructive power of amateur pressure washing.</p>
  `,
  "appleton": `
    <h2>Professional Exterior Cleaning Services in Appleton, Wisconsin</h2>
    <p>Downtown Appleton demands a pristine presentation. From the bustling avenues near the Fox Cities Performing Arts Center to the historic residential districts, maintaining property value here requires constant vigilance against urban exhaust and river humidity.</p>
    <p>Unlike rural communities, Appleton properties face a unique mixture of heavy traffic smog and dense seasonal pollen. When these pollutants combine on exterior siding or concrete flatwork, they form an acidic layer that aggressively degrades the underlying material.</p>
    <p>Property managers and homeowners in this specific region simply cannot rely on standard garden hoses to flush away this localized grime. Securing professional, commercial-grade washing services is the only proven method to ensure the structural longevity of these Fox Valley investments.</p>
    <p>We have spent years mastering the exact chemical combinations required to safely dissolve the specific environmental contaminants found throughout Appleton, providing a longer-lasting clean.</p>
  `,
  "de-pere": `
    <h2>Professional Exterior Cleaning Services in De Pere, Wisconsin</h2>
    <p>Resting directly along the Fox River trail, De Pere features stunning historic architecture that requires incredibly delicate handling. The ambient moisture from the water creates a perpetual haven for Gloeocapsa magma and aggressive lichen to colonize on older roofing systems.</p>
    <p>Safeguarding the charm and structural stability of these riverside properties is not a job for high-pressure wands. Water forced behind aging siding panels or delicate brickwork invariably leads to immediate interior water damage and hidden black mold.</p>
    <p>That is exactly why our team strictly deploys advanced soft-washing methodologies when serving the De Pere community. We utilize bespoke, eco-friendly algaecides that gently exterminate the root systems of river-borne organics without stripping delicate paint.</p>
    <p>Choosing an exterior cleaning service that actively understands the localized humidity challenges of De Pere ensures that your curb appeal is maximized while your property's history is perfectly preserved.</p>
  `
};

// Distinct starting phrases to guarantee structural variance for the rest
const distinctStarts = [
    "Nothing diminishes the massive curb appeal of a",
    "First impressions matter heavily in",
    "Safeguarding the exterior longevity of",
    "Rampant organic growth poses a critical threat to",
    "Protecting modern siding materials across",
    "A clean architectural facade signals absolute professionalism throughout",
    "Property management in",
    "Eradicating embedded environmental stains from",
    "Defending your home against the brutal weather in",
    "Aggressive mold blooms constantly attack properties in",
    "Elevating the overall aesthetic presentation of",
    "Combating the persistent algae issues associated with",
    "Preserving the structural foundation of",
    "Maintaining a spotless exterior appearance in",
    "Investing in the long-term health of",
    "Severe climatic shifts routinely compromise",
    "Ensuring absolute cleanliness on the exterior of",
    "The ongoing battle against seasonal grime in",
    "Restoring the original luster of",
    "A proactive defense strategy is required for",
    "Eliminating deeply rooted lichen from",
    "Thorough exterior sanitization greatly benefits",
    "Halting the destructive spread of mildew across",
    "The fundamental key to real estate preservation in",
    "Achieving a flawlessly clean exterior in",
    "The sheer density of airborne particulates in",
    "Prolonging the lifespan of delicate trim throughout",
    "Completely revitalizing a neglected exterior in"
];

const distinctP2 = [
    "We actively avoid dangerous high-psi equipment.",
    "Our approach relies entirely on intelligent chemistry.",
    "Standard power washing simply cannot match these results.",
    "Applying specialized surfactants makes an incredible difference.",
    "Our team focuses deeply on true material restoration.",
    "By completely eliminating biological threats, we prevent rapid return.",
    "Precision chemical application ensures flawless sanitization safely.",
    "We treat every exterior surface with maximum delicacy.",
    "Gentle detergent washing is the proven superior methodology.",
    "Eco-friendly algaecides are central to our operational protocol.",
    "We exclusively utilize modern, low-pressure purification systems.",
    "Our advanced cleaning rigs dissolve deeply embedded soot instantly.",
    "The safety of your delicate trim is our absolute priority.",
    "We prioritize complete organic eradication over simple rinsing.",
    "This methodology bypasses all the risks of mechanical water blasting."
];

const distinctP3 = [
    "Your investment requires this level of dedicated care.",
    "Never settle for amateur equipment on expensive architecture.",
    "We guarantee a brighter, substantially cleaner final outcome.",
    "The lifespan of your paint will significantly improve.",
    "Choose a verifiable expert for these sensitive structural tasks.",
    "The results speak entirely for themselves over the changing seasons.",
    "Proper upkeep dramatically immediately boosts property valuation.",
    "We successfully neutralize all remaining atmospheric contaminants.",
    "You will quickly notice the lasting visual enhancement.",
    "This precise process stops aggressive rot at its source.",
    "Delaying maintenance only accelerates costly siding replacement.",
    "Our technicians are highly trained to navigate these specific challenges.",
    "We deliver an unmatched tier of professional quality.",
    "Your home will remain impeccably clean for much longer.",
    "Secure your property's future with routine, professional washing."
];

// Helper to get random item deterministically based on string
const getDist = (str, arr) => {
    let sum = 0;
    for(let i=0; i<str.length; i++) sum += str.charCodeAt(i);
    return arr[sum % arr.length];
};

let hubsUpdated = 0;
db.forEach(item => {
    if (item.type === 'hub') {
        const city = item.citySlug;
        const name = item.title.replace(' Exterior Cleaning Services', '').replace('Professional ', '').replace(' in ', '');
        
        let bespokeHTML = "";
        
        if (bespokeIntros[city]) {
            bespokeHTML = bespokeIntros[city];
        } else {
            // Generate a structurally distinct hardcoded 3-paragraph block
            let p1_start = getDist(city + "1", distinctStarts);
            let p2_start = getDist(city + "2", distinctP2);
            let p3_start = getDist(city + "3", distinctP3);
            
            bespokeHTML = `
    <h2>Professional Exterior Cleaning Services in ${item.city}, Wisconsin</h2>
    <p>${p1_start} ${item.city} requires consistent, expert intervention. When environmental contaminants are left to bake into the primary surfaces over the hot summer months, the overall integrity of the underlying material starts to fail rapidly.</p>
    <p>${p2_start} Taking this measured, highly technical route stops moisture from being aggressively forced behind window seals or cracking the existing protective coatings.</p>
    <p>${p3_start} Relying on certified local professionals guarantees that your surfaces are thoroughly sanitized without incurring hidden structural damage.</p>
`;
        }

        // We need to keep the bottom part of the original content (like "The Trusted Choice" or the Conversion Hook)
        // Let's strip out everything before "<h3>The Trusted Choice", "<h3>Why Trust Our", "<h3>The Science Behind", etc.
        // Actually, the prompt says "Completely rewrite the first 3 to 4 paragraphs...".
        // Let's replace the first 4 <p> tags and the first <h2> tag.
        
        // A safer way: split by <h3>, keep the <h3> sections intact, replace the top section.
        let parts = item.content.split('<h3>');
        if (parts.length > 1) {
            // Reconstruct the rest
            const restOfContent = '<h3>' + parts.slice(1).join('<h3>');
            item.content = bespokeHTML + '\\n\\n' + restOfContent;
        } else {
            // Fallback if no h3
            item.content = bespokeHTML;
        }
        hubsUpdated++;
    }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 4));
console.log("Updated " + hubsUpdated + " hubs.");
