import fs from 'fs';

const dbPath = './src/data/serviceAreasContent.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Unique middle sections for Appleton, Green Bay, De Pere
const bespokeMiddles = {
  "green-bay": `
    <h3>Defending Your Green Bay Property Value</h3>
    <p>Managing real estate in Brown County means accepting the reality of rapid freeze-thaw cycles and intense lake-effect storms. These environmental stressors continuously threaten the structural integrity of local homes and businesses. We bring decades of specialized exterior restoration experience directly to the Green Bay community. Our dedicated technicians are rigorously trained to navigate the specific challenges of historic masonry and delicate residential siding found throughout the region, ensuring every cleaning project maximizes your property's overall lifespan and curb appeal.</p>
  `,
  "appleton": `
    <h3>Maximizing Fox Valley Real Estate ROI</h3>
    <p>Whether you manage a sprawling commercial complex downtown or own a historic residential property near the river, the aesthetic presentation of your Appleton investment matters. Unchecked mold and urban pollutants not only destroy your curb appeal but actively degrade your exterior building materials. As established local contractors, we take immense pride in delivering safe, technologically advanced sanitization protocols that instantly elevate the visual standard of the Fox Cities without ever putting your structural coatings at risk.</p>
  `,
  "de-pere": `
    <h3>Trusted Local Preservation Experts</h3>
    <p>The intricate architectural layouts and older construction styles prevalent in De Pere demand a completely tailored approach to maintenance. Blasting these aging facades with generic high-pressure equipment is a recipe for catastrophic water damage. Our fully insured crew exclusively utilizes bespoke, low-PSI chemical applications to neutralize river-borne organics. By choosing a team that inherently understands localized humidity challenges, you are actively securing the long-term historical value of your riverfront neighborhood.</p>
  `
};

// Structural variations for the rest of the 28 cities
const midH3 = [
    "Safeguarding Your Real Estate Investment",
    "Elevating Local Curb Appeal",
    "Professional Structural Preservation",
    "The Smart Choice for Property Maintenance",
    "Defending Your Home Against the Elements",
    "Long-Term Protection and Value",
    "Maximizing Your Exterior ROI",
    "Restoring Your Property's True Value",
    "Expert Care for Your Neighborhood",
    "Dedicated Local Exterior Contractors",
    "Ensuring Maximum Exterior Longevity",
    "The Highest Standard of Cleanliness",
    "Protecting Your Siding and Concrete",
    "Comprehensive Exterior Sanitization",
    "Your Neighborhood Cleaning Authority",
    "Advanced Cleaning Protocols",
    "Securing Your Structural Integrity",
    "Unmatched Visual Enhancement",
    "Proactive Maintenance Solutions",
    "Bespoke Care for Your Facade"
];

const midP1_part1 = [
    "Navigating local weather extremes means accepting the reality of relentless environmental wear and tear.",
    "Ignoring the gradual accumulation of dirt, algae, and atmospheric fallout always results in premature material failure.",
    "Maintaining a pristine facade is absolutely critical for upholding the standard of quality in your neighborhood.",
    "When seasonal moisture and localized dust combine, they form an acidic layer that constantly attacks your exterior.",
    "Protecting your real estate asset requires a proactive, highly technical approach to regular exterior maintenance.",
    "Your home serves as your most significant investment, and its protective outer shell demands professional-grade care.",
    "The constant barrage of organic growth and urban pollutants creates severe aesthetic and structural challenges.",
    "Allowing fungal networks and deep-rooted lichen to establish themselves drastically reduces the lifespan of your property.",
    "Curb appeal is not just about aesthetics; it is fundamentally tied to the physical health of your building materials.",
    "Local property owners understand that settling for generic, unverified washing services inevitably causes hidden damage."
];

const midP1_part2 = [
    "We deploy fully insured, highly trained technicians specifically equipped to safely neutralize these exact localized threats.",
    "Our advanced methodology exclusively relies on custom-blended detergents that melt away grime without relying on destructive pressure.",
    "By choosing our specialized team, you guarantee that your delicate sidings and concrete are preserved for decades to come.",
    "We take immense pride in delivering a flawless, longer-lasting clean that dramatically boosts your overall property valuation instantly.",
    "Our entire operation is designed around eco-friendly, low-PSI applications that respect both your landscaping and your architecture.",
    "You can trust our proven regional expertise to deliver a meticulous level of sanitization that amateur contractors simply cannot match.",
    "We provide complete peace of mind through total transparency, utilizing the safest and most effective exterior restoration technology available.",
    "Our rigorous quality standards ensure that every trace of corrosive buildup is completely eradicated right down to the microscopic root.",
    "Partnering with true exterior cleaning experts is the definitive way to protect your exterior surfaces from severe weather damage.",
    "We bring an unmatched standard of excellence to every project, guaranteeing absolute structural safety and incredibly vibrant visual results."
];

const getDist = (str, arr) => {
    let sum = 0;
    for(let i=0; i<str.length; i++) sum += str.charCodeAt(i);
    return arr[sum % arr.length];
};

let updated = 0;

db.forEach(item => {
    if (item.type === 'hub') {
        const city = item.citySlug;
        let bespokeMiddle = "";
        
        if (bespokeMiddles[city]) {
            bespokeMiddle = bespokeMiddles[city];
        } else {
            let h3 = getDist(city + "h3", midH3);
            let p1 = getDist(city + "p1", midP1_part1);
            let p2 = getDist(city + "p2", midP1_part2);
            bespokeMiddle = `
    <h3>${h3} in ${item.city}</h3>
    <p>${p1} ${p2}</p>
`;
        }
        
        // 1. We extract the <div class="my-12 bg-navy..." representing the Conversion Hook so we don't lose the CTA.
        // It generally starts at <!-- Conversion Hook -->
        let ctaIndex = item.content.indexOf('<!-- Conversion Hook -->');
        let bottomCTA = "";
        if (ctaIndex !== -1) {
            bottomCTA = item.content.substring(ctaIndex);
        }

        // 2. We extract the Intro (the first <h2> and subsequent <p> tags until the first <h3>)
        // because we want to preserve the incredibly hard work we just did eradicating intro spam.
        let introHTML = "";
        let firstH3Index = item.content.indexOf('<h3>');
        if (firstH3Index !== -1) {
            introHTML = item.content.substring(0, firstH3Index).trim();
        } else {
            introHTML = item.content.trim(); // If no h3 was found somehow.
        }
        
        // 3. Rebuild the final HTML content.
        // Intro -> Bespoke Middle -> CTA
        item.content = introHTML + '\n\n' + bespokeMiddle + '\n\n' + bottomCTA;
        updated++;
    }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 4));
console.log("Middle sections eradicated and rebuilt for " + updated + " hubs.");
