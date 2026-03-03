import { serviceContentMap } from './serviceContent';

export interface SEOContent {
    problemStatement: string[];
    processOverview: string;
    detailedProcess: { title: string; desc: string }[];
    benefitsOverview: string;
    detailedBenefits: { title: string; desc: string }[];
    localProof: string[];
    lsiKeywords: string[];
}

// Helper to generate dense, 1000-word SEO structures based on service types
const generatePillars = (serviceName: string, category: 'wash' | 'roof' | 'light' | 'concrete' | 'commercial'): SEOContent => {

    // Core localized weather variables for Wisconsin logic
    const wiChallenges = "In Northeast Wisconsin, properties endure a brutal cycle of extreme weather. From the heavy, freezing lake-effect snows and aggressive road salt in the winter, to the intense humidity and pollen-heavy springs, exterior surfaces are under constant assault. Algae, moss, and lichen thrive in these damp, fluctuating conditions, rapidly breaking down organic building materials if left unchecked. The freeze-thaw cycle specifically causes microscopic water droplets inside concrete and siding to expand, leading to devastating structural cracking over time.";

    const problemStatements = {
        wash: [
            `The exterior of your property is constantly exposed to the elements, but dirt is only the beginning of the problem. Over time, organic growth such as mold, mildew, algae, and airborne pollutants accumulate heavily on your siding. This isn't just an aesthetic issue—these elements literally eat away at the paint, vinyl, and protective coatings over time.`,
            `When biological growth takes hold, it traps moisture directly against the building envelope. This continuous dampness accelerates wood rot, degrades vinyl flexibility, and causes premature paint failure. Homeowners often mistake this heavy organic staining for permanent damage, assuming they need a complete exterior repaint or new siding installation, which can cost tens of thousands of dollars.`,
            `Furthermore, the health implications of heavy mold and mildew growth around your living spaces cannot be ignored. Spores easily travel through open windows or HVAC intakes, reducing indoor air quality. By investing in professional ${serviceName.toLowerCase()}, you are actively removing these bio-hazards, protecting the structural integrity of your home, and restoring its original vibrant appearance.`
        ],
        roof: [
            `A dirty roof is a dying roof. Those ugly black streaks you see running down your shingles aren't just dirt or soot—they are an aggressive strain of cyanobacteria called Gloeocapsa Magma. This bacteria feeds directly on the crushed limestone filler used in manufacturing asphalt shingles. As it eats, it strips the shingle of its reflective granules and UV protection.`,
            `If left untreated, this bacteria creates a root system, pulling up the edges of the shingles and allowing moisture to penetrate the roof deck. This rapidly accelerates into heavy moss and lichen growth. Moss acts like a sponge, holding massive amounts of water against your roof year-round. During winter, this water freezes and expands, physically ripping the shingles apart and forcing costly premature roof replacements.`,
            `Insurance companies are now frequently canceling homeowner policies due to heavy roof algae and moss, citing extreme negligence and risk of water damage. Professional ${serviceName.toLowerCase()} entirely neutralizes this biological threat safely, extending the lifespan of your roof by up to a decade and preventing thousands in unexpected structural repairs.`
        ],
        concrete: [
            `Concrete, brick, and stone are highly porous materials. While they appear solid, they act like giant sponges, soaking up deeply penetrating stains like vehicle oil, transmission fluid, rust runoff, and organic matter. Over time, these contaminants completely alter the chemical composition of the surface, leading to permanent discoloration and structural weakening.`,
            `Beyond the visual degradation, dirty flatwork poses a massive physical liability. When algae and mildew grow on concrete walkways, driveways, or patios, they create an incredibly slick, dangerous slime layer when wet. This is the leading cause of completely preventable slip-and-fall accidents on residential and commercial properties.`,
            `Attempting to clean these surfaces with consumer-grade pressure washers often results in permanent 'zebra-striping' or surface-etching, where the high pressure physically damages the cream layer of the concrete. Professional ${serviceName.toLowerCase()} utilizes specialized rotary surface cleaners and targeted degreasers to lift stains from deep within the pores without damaging the structural integrity of the masonry.`
        ],
        light: [
            `Traditional exterior lighting and seasonal holiday decorating present a massive, recurring physical chore and safety hazard. Every year, thousands of injuries occur from homeowners climbing dangerous ladders, navigating steep roof pitches, and dealing with tangled electrical cords just to hang temporary string lights.`,
            `Beyond the danger, temporary lighting often looks disorganized, uses fragile bulbs that constantly burn out, and causes physical damage to your fascia boards from thousands of staple and clip penetrations over the years. When the season ends, the unappealing chore of removal remains, often leading to lights being left up year-round where they decay and weather poorly.`,
            `Professionally installed ${serviceName.toLowerCase()} fundamentally eliminates this dangerous cycle. It provides breathtaking, architectural-grade illumination that seamlessly integrates into your roofline. You gain total control over your property's nighttime aesthetic from a smartphone, enhancing security, massively boosting curb appeal, and permanently retiring the ladder.`
        ],
        commercial: [
            `In the commercial sector, your physical exterior is the absolute first impression you make on potential clients, investors, and tenants. A building covered in exhaust soot, algae, urban fallout, or graffiti explicitly signals neglect and a lack of professionalism, subconsciously driving high-value traffic directly toward your competitors.`,
            `Commercial properties face significantly harsher environmental abuse than residential homes. High vehicle traffic deposits heavy layers of carbon exhaust on the siding, dumpster pads accumulate dangerous, foul-smelling grease and biological waste, and massive concrete parking decks become saturated with oil and chewing gum. This isn't just ugly; it's a massive physical liability that completely violates municipal health and safety codes.`,
            `Ignoring routine ${serviceName.toLowerCase()} leads to accelerated degradation of very expensive commercial infrastructure. Metal siding oxidizes faster, concrete cracks under chemical stress, and roofing membranes fail prematurely. Partnering with a professional maintenance firm guarantees these specialized assets are cleaned systematically, legally recovering your property value and protecting your corporate image.`
        ]
    };

    const localProofs = [
        wiChallenges,
        `Wisconsin's unique environmental factors demand specialized exterior cleaning chemistry. We utilize biodegradable, eco-friendly soft wash mixtures specifically formulated to break down the exact strains of algae and lichen native to the Fox Valley and Green Bay regions. This ensures a 100% kill ratio down to the root system, preventing rapid regrowth and keeping your property pristine through the heavy midwestern seasons.`,
        `Our equipment is explicitly winterized and engineered to handle the heavy demands of commercial and residential property management across Northeast Wisconsin. We understand how local building materials react to our climate, and we tailor our water pressure, heat levels, and detergent ratios to perfectly protect your specific siding, roofing, and concrete assets while delivering maximum restoration power.`
    ];

    return {
        problemStatement: problemStatements[category],
        processOverview: `Our highly specialized ${serviceName.toLowerCase()} process is designed to deliver maximum restorative results while maintaining strict safety and property protection protocols. We never use a 'one-size-fits-all' approach. Instead, we customize our entire methodology based on your specific building materials, the exact type of organic or chemical staining present, and the surrounding local environmental factors.`,
        detailedProcess: [
            {
                title: "Comprehensive Site Assessment",
                desc: "Before a single drop of water is sprayed, our trained technicians conduct a rigorous 360-degree inspection of your property. We identify delicate areas, tape off exposed electrical outlets, secure keyholes, and completely pre-soak surrounding vegetation and landscaping. This ensures our eco-friendly cleaning solutions only target the dirt and organic growth, leaving your property entirely unharmed."
            },
            {
                title: "Targeted Chemical Application",
                desc: "We deploy highly customized, biodegradable cleaning detergents tailored specifically for your project. Whether we are melting away heavy organic algae with a sodium hypochlorite soft-wash, lifting deep vehicle oils with industrial degreasers, or breaking the molecular bond of rust with restoration acids, our chemistry does the heavy lifting—not destructive water pressure."
            },
            {
                title: "Controlled Precision Rinsing",
                desc: "Once the detergents have achieved the necessary dwell time to break down the contaminants, we utilize volume-based rinsing to flush the surface clean. For siding and roofs, this means high-volume, extremely low-pressure water (often less pressure than a garden hose) to safely wash away the dead algae. For durable flatwork, we deploy high-heat rotary surface cleaners for a perfectly even, streak-free finish."
            },
            {
                title: "Final Quality Assurance Walkthrough",
                desc: "The job is not complete until every square inch meets our rigorous standards. We perform a thorough post-rinse inspection, followed by a final neutralization of any remaining cleaning agents. We pack up our equipment, remove all safety barriers, and invite you to walk the property to guarantee your absolute 100% satisfaction with the jaw-dropping results."
            }
        ],
        benefitsOverview: `Investing in professional ${serviceName.toLowerCase()} with Valley Window Care and Exterior Cleaning yields massive, immediate returns for your property. It is widely considered one of the highest ROI maintenance actions a property owner can take, instantly transforming the visual landscape while heavily protecting the underlying structural investments.`,
        detailedBenefits: [
            {
                title: "Massive Curb Appeal Enhancement",
                desc: "Instantly strip away years of weathering, dirt, and organic staining in a single afternoon. Your property will look significantly newer, brighter, and more welcoming, drastically increasing visual appraisal values for real estate listings or establishing a highly professional image for commercial storefronts."
            },
            {
                title: "Extends Structural Lifespans",
                desc: "By removing the biological organisms that actively consume roofing shingles, wood fibers, and paint coatings, you prevent premature physical decay. Regular maintenance cleaning can extend the life of your roof, siding, and decking by up to 50%, saving you tens of thousands of dollars in premature replacement costs."
            },
            {
                title: "Health & Safety Protection",
                desc: "Eliminate slippery algae from walkways to prevent devastating slip-and-fall injuries. Remove massive mold and allergen build-ups from your siding to actively improve the air quality immediately surrounding your home's HVAC intakes and open windows."
            },
            {
                title: "100% Damage-Free Guarantee",
                desc: "When you hire true professionals utilizing modern Soft Wash technology, you eliminate the massive risk of property damage caused by untrained operators blasting high-pressure water under siding panels, stripping paint, blowing asphalt granules off roofs, or etching permanent lines into your expensive concrete driveways."
            }
        ],
        localProof: localProofs,
        lsiKeywords: [
            "biodegradable cleaners", "soft wash system", "100% satisfaction guarantee", "eco-friendly detergents",
            "exterior property maintenance", "curb appeal restoration", "professional equipment", "fully insured technicians",
            "Wisconsin weather protection", "algae and moss removal", "streak-free finish", "long-lasting results",
            "preventative property care", "high-volume low-pressure", "residential and commercial solutions"
        ]
    };
};

// Build massive object
export const seoContentMap: Record<string, SEOContent> = {
    "roof-cleaning": generatePillars("Roof Cleaning", "roof"),
    "commercial-roof-cleaning": generatePillars("Commercial Roof Cleaning", "roof"),

    "house-washing": generatePillars("House Washing", "wash"),
    "building-washing": generatePillars("Building Washing", "commercial"),
    "hoa-services": generatePillars("HOA & Multi-Unit Washing", "commercial"),

    "concrete-cleaning": generatePillars("Concrete Cleaning", "concrete"),
    "pressure-washing": generatePillars("Pressure Washing", "concrete"),
    "commercial-pressure-washing": generatePillars("Commercial Pressure Washing", "commercial"),
    "dumpster-pad-cleaning": generatePillars("Dumpster Pad Cleaning", "commercial"),
    "premium-drive-thru-cleaning": generatePillars("Drive-Thru Cleaning", "commercial"),
    "parking-lot-and-garage-cleaning": generatePillars("Parking Garage Cleaning", "commercial"),
    "paver-patio-restorations": generatePillars("Paver Patio Restoration", "concrete"),

    "window-cleaning": generatePillars("Window Cleaning", "wash"),
    "storefront-cleaning": generatePillars("Storefront Window Cleaning", "commercial"),

    "residential-permanent-led-lighting": generatePillars("Residential Permanent LED Lighting", "light"),
    "permanent-led-lighting": generatePillars("Commercial Permanent LED Lighting", "light"),
    "christmas-lighting": generatePillars("Christmas Lighting", "light"),

    "gutter-cleaning": generatePillars("Gutter Cleaning", "wash"),
    "rust-removal": generatePillars("Rust Removal", "concrete"),
    "graffiti-removal": generatePillars("Graffiti Removal", "commercial"),
    "chewing-gum-removal": generatePillars("Chewing Gum Removal", "commercial"),
    "post-construction-cleanup": generatePillars("Post Construction Cleanup", "commercial"),
    "gas-station-cleaning": generatePillars("Gas Station Cleaning", "commercial")
};
