const fs = require('fs');
const path = require('path');

// Target files
const seoPath = path.join(__dirname, '../src/data/seoContentMap.tsx');
const serviceContentPath = path.join(__dirname, '../src/data/serviceContent.tsx');

// List of all active slugs from page.tsx validServices
const services = [
    // Residential
    { slug: "roof-cleaning", name: "Roof Cleaning" },
    { slug: "house-washing", name: "House Washing" },
    { slug: "gutter-cleaning", name: "Gutter Cleaning" },
    { slug: "concrete-cleaning", name: "Concrete Cleaning" },
    { slug: "window-cleaning", name: "Window Cleaning" },
    { slug: "christmas-lighting", name: "Christmas Lighting" },
    { slug: "pressure-washing", name: "Pressure Washing" },
    { slug: "residential-permanent-led-lighting", name: "Residential Permanent LED Lighting" },
    { slug: "fence-cleaning", name: "Fence Cleaning" },
    { slug: "deck-cleaning", name: "Deck Cleaning" },
    { slug: "oxidation-removal", name: "Oxidation Removal" },
    { slug: "soft-wash", name: "Soft Wash" },
    { slug: "driveway-cleaning", name: "Driveway Cleaning" },
    { slug: "solar-panel-cleaning", name: "Solar Panel Cleaning" },
    { slug: "rust-removal", name: "Rust Removal" },
    
    // Commercial
    { slug: "building-washing", name: "Building Washing" },
    { slug: "dumpster-pad-cleaning", name: "Dumpster Pad Cleaning" },
    { slug: "permanent-led-lighting", name: "Commercial Permanent LED Lighting" },
    { slug: "commercial-roof-cleaning", name: "Commercial Roof Cleaning" },
    { slug: "commercial-pressure-washing", name: "Commercial Pressure Washing" },
    { slug: "graffiti-removal", name: "Graffiti Removal" },
    { slug: "hoa-multi-unit-cleaning", name: "HOA & Multi-Unit Cleaning" },
    { slug: "storefront-cleaning", name: "Storefront Cleaning" },
    { slug: "premium-drive-thru-cleaning", name: "Drive-Thru Cleaning" },
    { slug: "parking-lot-and-garage-cleaning", name: "Parking Lot and Garage Cleaning" },
    { slug: "chewing-gum-removal", name: "Chewing Gum Removal" },
    { slug: "commercial-awning-cleaning", name: "Commercial Awning Cleaning" },
    { slug: "gas-station-cleaning", name: "Gas Station Cleaning" },
    { slug: "post-construction-cleanup", name: "Post Construction Cleanup" },
    { slug: "paver-patio-restorations", name: "Paver Patio Restorations" },
    { slug: "commercial-hood-cleaning", name: "Commercial Hood Vent Cleaning" },
    { slug: "apartment-exterior-cleaning", name: "Apartment Exterior Cleaning" }
];

// Contextual generation logic to map factual payloads
function getData(slug: string, name: string) {
    let context = {
        seoProblem: `Your exterior property accumulates biological and environmental contaminants over time.`,
        seoSolution: `Professional exterior restoration eliminates these hazards without property damage.`,
        seoLocal: `Wisconsin's severe seasons demand robust property protection protocols.`,
        processP1: "Comprehensive Site Inspection: Evaluating the exact material composition and contamination severity.",
        processP2: "Detergent Delivery: Precise application of eco-friendly cleaning agents.",
        processP3: "Systematic Rinsing: Flushing dead algae and heavy grime off the property securely.",
        processP4: "QA Walkthrough: Final inspection to guarantee absolute client satisfaction.",
        benefitB1: "Instant Value Enhancement: Restores the original vibrancy of faded building surfaces.",
        benefitB2: "Prevents Costly Repairs: Stops organic rot from destroying expensive exterior materials.",
        benefitB3: "Safe and Insured: 100% compliant cleaning protocols eliminate your liability.",
        benefitB4: "Longevity Protection: Routine cleaning doubles the lifespan of paint and siding.",
        scIntro: `Restoring the ${name.toLowerCase()} of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.`,
        scBenefit1: `Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.`,
        scBenefit2: `Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.`,
        scBenefit3: `No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity.`,
        scProcess1: `Detailed Material Pre-Check: Dialing in exact chemical ratios.`,
        scProcess2: `Targeted Agitation or Soft Wash: Breaking down the molecular bond of the stain.`,
        scProcess3: `High-Volume Extraction: Safely washing away the debris to leave a pristine finish.`
    };

    if (slug === 'commercial-hood-cleaning') {
        context.seoProblem = `Commercial kitchens are legally required to maintain NFPA 96 fire safety compliance. Extreme grease accumulation inside hood vents, filters, and vertical exhaust ducts creates a catastrophic, ignition-ready fire hazard if improperly maintained.`;
        context.seoSolution = `Heavy-duty industrial degreasing strips combustible animal fats down to the bare metal, ensuring your restaurant avoids health code violations and catastrophic fire losses.`;
        context.scIntro = `Commercial Hood Vent Cleaning specifically targets volatile grease accumulations inside commercial restaurant exhaust systems. This is an absolutely critical fire hazard reduction service mandated by the NFPA 96 standards. We utilize extreme 200°+ hot water steam and aggressive commercial caustics to completely strip away baked-on animal fats down to the bare metal, ensuring health inspectors pass your kitchen with flying colors. We never mention mold or exterior siding on interior commercial kitchen ducts.`;
        context.scBenefit1 = `NFPA 96 Fire Safety Compliance: Protects your kitchen from catastrophic exhaust fires.`;
        context.scBenefit2 = `Eliminates Health Citations: Ensures your restaurant passes unannounced local health inspections.`;
        context.scBenefit3 = `Improved HVAC Efficiency: Bare metal exhaust walls allow kitchen smoke to evacuate faster, cooling down the cookline.`;
        context.scProcess1 = `System Isolation & Tarping: Wrapping the cookline in heavy plastic sheeting to capture toxic grease runoff automatically.`;
        context.scProcess2 = `Extreme Chemical Degreasing & Hot Water Spin: Applying heavy caustic foam and 200°+ steam directly down the vertical ductwork.`;
        context.scProcess3 = `Polishing & Certified Safety Tagging: Leaving a pristine hood canopy and issuing a formal dated fire compliance sticker for the health inspector.`;
    } else if (slug === 'solar-panel-cleaning') {
        context.seoProblem = `Photovoltaic energy efficiency drastically plummets when solar arrays are smothered by thick regional dust, agricultural pollen, and baked-on bird droppings.`;
        context.seoSolution = `Specialized RO/DI pure water filtration systems restore maximum cellular light exposure without introducing micro-scratches to delicate tempered glass.`;
        context.scIntro = `Professional Solar Panel Cleaning is critical to maximizing your sustainable photovoltaic energy efficiency. Standard tap water or chemical soaps leave heavy mineral deposits or micro-scratches that permanently ruin the conductive glass array. By deploying specialized carbon-fiber water-fed poles and 3-stage RO/DI (Reverse Osmosis / Deionized) pure water systems, we gently scrub away thick agricultural dust and bird droppings. The pure water dries 100% spotless, guaranteeing maximum sunlight absorption and restoring optimal kilowatt production capacity.`;
        context.scBenefit1 = `Maximized Energy Production: Clear glass dramatically boosts kilowatt hour (kWh) generation immediately.`;
        context.scBenefit2 = `Zero Glass Etching: Soft boar-hair brush bristles completely prevent micro-scratches that ruin panels.`;
        context.scBenefit3 = `Spot-Free Evaporation: 0-TDS water dries perfectly clean without blocking light with calcium streaks.`;
        context.scProcess1 = `System Inverter Pre-Check: Confirming array stability and locking down safety tethers for roof access.`;
        context.scProcess2 = `Boar-Bristle Agitation: Gently scrubbing conductive faces to break the bond of heavy bird droppings and baked-on dust.`;
        context.scProcess3 = `Pure Water Flooding: A massive 0-TDS rinse to flush particulate away, letting the glass dry flawless and clear.`;
    } else if (slug === 'driveway-cleaning' || slug === 'concrete-cleaning') {
        context.seoProblem = `Porous concrete and driveway slabs act like massive sponges, heavily absorbing catastrophic motor oil leaks, transmission fluids, rust, and invasive slippery black algae.`;
        context.seoSolution = `Heavy-duty rotary surface spinners and aggressive high-heat degreasers lift these deep stains predictably to restore structural brightness and eliminate severe slip-and-fall hazards.`;
        context.scIntro = `Concrete and Driveway Cleaning requires vastly more than a direct pressure washing wand, which permanently etches zebra-stripes into the porous cream layer. We restore residential and commercial flatwork using heavy-duty, large-diameter rotary surface cleaners. By aggressively pre-treating deep oil spots and rust stains, then utilizing a uniform high-pressure spin, we lift years of embedded environmental grime evenly. This instantly restores your property's curb appeal and completely eliminates the extremely dangerous, slippery black algae that causes severe property injuries.`;
        context.scBenefit1 = `Uniform Zebra-Free Finish: Industrial rotary spinners clean thousands of square feet perfectly evenly.`;
        context.scBenefit2 = `Eliminates Slip & Fall Danger: Kills the slimy black organic growth that thrives on shaded damp concrete.`;
        context.scBenefit3 = `Aggressive Oil lifting: Specialized surfactants pull heavy transmission and automotive oils from deep inside the matrix.`;
        context.scProcess1 = `Targeted Heavy Degreasing: Applying powerful solvents strictly to oil and rust concentration zones before washing.`;
        context.scProcess2 = `High-Pressure Rotary Surface Cleaning: Gliding hover-spinners across the flatwork to shear off embedded dirt cleanly.`;
        context.scProcess3 = `Chemical Brightening Post-Treatment: Laying down an eco-friendly brightener to kill microscopic algae spores and whiten the slab.`;
    } else if (slug === 'premium-drive-thru-cleaning') {
        context.seoProblem = `Commercial drive-thru lanes endure nonstop daily abuse, accumulating massive layers of engine exhaust soot, toxic petroleum drips, and stubborn discarded chewing gum.`;
        context.seoSolution = `Industrial hot-water pressure washing deployed after-hours blasts sticky chewing gum and high-traffic grease, ensuring zero disruption to your daily franchise revenue.`;
        context.scIntro = `Premium Drive-Thru and Commercial Pad Cleaning is specifically engineered to combat high-traffic grease, severe carbon exhaust, and scattered chewing gum that repels potential customers from fast-food and banking lanes. Cold water merely pushes grease around. We deploy commercial-grade trailer units generating 210°+ hot water steam and aggressive commercial degreasers. This physically melts heavy automotive oils and instantly lifts baked-on chewing gum, guaranteeing a sanitized, highly professional visual standard for your corporate storefront—all executed seamlessly after-hours to avoid any disruption to your business operations.`;
        context.scBenefit1 = `Melt Baked-On Gum: High thermal envelope steam effortlessly pops sticky gum off the concrete flatwork.`;
        context.scBenefit2 = `Zero Business Disruption: Night-schedule operations guarantee your drive-thru flow remains totally uninterrupted.`;
        context.scBenefit3 = `Protects Franchise Image: Instantly restores corporate brand trust by presenting a pristine, sanitary transaction point.`;
        context.scProcess1 = `Wastewater Reclamation Setup: Plugging immediate storm drains to capture toxic commercial grease runoff safely.`;
        context.scProcess2 = `200 Degree Thermal Blasting: Activating onboard diesel burners to deliver massive hot water steam directly into deep oil stains.`;
        context.scProcess3 = `Gum Shearing & Even Rinse: Sniping individual gum wads, followed by a massive rotary spin to even the lane's presentation.`;
    } else if (slug === 'roof-cleaning') {
        context.seoProblem = `Those ugly black streaks rolling down your asphalt roofing shingles are not dirt; they are an aggressive cellular cyanobacteria known as Gloeocapsa Magma that chemically eats your roof.`;
        context.seoSolution = `We strictly enforce non-pressure soft washing guidelines established by roofing manufacturers to 100% neutralize these spores without ever blasting away your protective UV asphalt granules.`;
        context.scIntro = `Professional Roof Cleaning utilizes specialized low-pressure soft washing methodology to eliminate destructive biological growth. The black stains streaking down your roof are not environmental dirt; they are an active cyanobacteria known as Gloeocapsa Magma. This organism feeds heavily on the crushed limestone filler inside modern asphalt shingles. Typical high-pressure power washing instantly destroys the physical integrity of a roof by blasting away the UV-protective granules. We apply proprietary eco-friendly algaecides to completely neutralize the spores, fungus, and deep moss roots at a molecular level, protecting your massive structural investment.`;
        context.scBenefit1 = `Prevents Roof Replacement: Instantly halts organic shingle decay, drastically extending the life of the roof by years.`;
        context.scBenefit2 = `ARMA Guidelines Compliant: A strictly low-pressure soft wash method that never voids existing roofing manufacturer warranties.`;
        context.scBenefit3 = `Stops Insurance Policy Cancellation: Removes heavy moss accumulation that traditionally triggers mandatory coverage drops by home insurers.`;
        context.scProcess1 = `Delicate Landscape Bagging: Heavily saturating and physically covering expensive foundational shrubs to prevent algaecide burn.`;
        context.scProcess2 = `Zero-Pressure Soft Wash Application: Utilizing specialized 12-volt pumps to lay a thick foam of eco-detergent over the black streaks.`;
        context.scProcess3 = `Root-Level Dwell Time & Natural Rinse: Allowing the chemicals to achieve a 100% molecular kill ratio, letting mother nature's rain slowly wash the dead particulate away safely.`;
    } else if (slug === 'graffiti-removal') {
        context.seoProblem = `Vandalism and spray-paint graffiti instantly degrade neighborhood property values, aggressively harm corporate brand reputation, and signal neglect to surrounding criminal elements.`;
        context.seoSolution = `We deploy highly specialized chemical strippers and precision thermal extraction to melt aerosol paints off fragile brick and masonry without ghosting or blowing out mortar joints.`;
        context.scIntro = `Professional Graffiti Removal demands an immediate, rapid response to protect your commercial property value. The key to eliminating vandalism without destroying the underlying masonry, brick, or siding is specific chemical engineering. Blasting dry spray paint with sheer cold-water pressure will permanently 'blow out' fragile mortar joints and etch the brick faces. Instead, we manually apply specialized biodegradable paint-strippers tailored entirely to the contaminated surface material. Combined with hot-water 200° thermal rinsing, the aerosol pigment literally melts completely off the wall with zero permanent 'ghosting'.`;
        context.scBenefit1 = `Prevents Copycat Vandalism: Rapid 24/48 HR removal breaks the cycle of tagging by instantly eliminating the vandals 'canvas'.`;
        context.scBenefit2 = `No Mortar Blowouts: Relies strictly on advanced chemical dissociation rather than catastrophic water pressure.`;
        context.scBenefit3 = `Eliminates the Ghosting Effect: Our specific chemistry pulls deep pigments completely out of the porous stone so no dark shadow remains.`;
        context.scProcess1 = `Tag Identification & Material Bonding Check: Testing a small inconspicuous area to guarantee the chemical perfectly separates the specific aerosol paint without hurting the wall material.`;
        context.scProcess2 = `Thick Gel Stripper Application: Painting on viscous graffiti remover that safely dwells and attacks the molecular bond of the paint.`;
        context.scProcess3 = `Heated Steam Extraction: Utilizing very low-pressure hot water to float the melted paint right off the substrate into absolute nothingness.`;
    }

    return context;
}

// Generate the TSX files strings
let seoExportLines = [];
let serviceExportLines = [];

seoExportLines.push(`import React from 'react';\nimport Link from 'next/link';\n\nexport interface SEOContent {
    entityCapsule?: React.ReactNode;
    problemStatement: (string | React.ReactNode)[];
    processOverview: string | React.ReactNode;
    detailedProcess: { title: string; desc: string | React.ReactNode }[];
    benefitsOverview: string | React.ReactNode;
    detailedBenefits: { title: string; desc: string | React.ReactNode }[];
    localProof: (string | React.ReactNode)[];
    lsiKeywords: string[];
    pricingExpectations?: React.ReactNode;
}\n\nexport const seoContentMap: Record<string, SEOContent> = {`);

serviceExportLines.push(`import React from 'react';\nimport Link from 'next/link';\n\nexport const serviceContentMap: Record<string, { description: React.ReactNode, benefits: (string | React.ReactNode)[], process: (string | React.ReactNode)[], image?: string }> = {`);

services.forEach(s => {
    let ctx = getData(s.slug, s.name);
    // Create SEO block
    seoExportLines.push(`    "${s.slug}": {
        problemStatement: [\n            <span key="1">${ctx.seoProblem}</span>,\n            <span key="2">${ctx.seoSolution}</span>,\n            <span key="3">${ctx.seoLocal} <Link href="/service-areas/green-bay" className="text-gold font-bold hover:underline">Green Bay</Link> and Appleton.</span>\n        ],
        processOverview: "Our highly specialized ${s.name.toLowerCase()} methodology guarantees deep restoration and absolute property protection.",
        detailedProcess: [
            { title: "Inspection & Preparation", desc: "${ctx.processP1}" },
            { title: "Specialized Delivery", desc: "${ctx.processP2}" },
            { title: "Precision Extraction", desc: "${ctx.processP3}" },
            { title: "Verification Walkthrough", desc: "${ctx.processP4}" }
        ],
        benefitsOverview: "Investing in professional ${s.name.toLowerCase()} instantly recovers value and protects local investments.",
        detailedBenefits: [
            { title: "Immediate Impact", desc: "${ctx.benefitB1}" },
            { title: "Asset Longevity", desc: "${ctx.benefitB2}" },
            { title: "Guaranteed Safety", desc: "${ctx.benefitB3}" },
            { title: "Sustained Protection", desc: "${ctx.benefitB4}" }
        ],
        localProof: ["We use equipment engineered explicitly for Northeast Wisconsin's intense weather demands."],
        lsiKeywords: ["${s.name.toLowerCase()}", "professional", "reliable service"]
    },`);

    // Create Service block
    serviceExportLines.push(`    "${s.slug}": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">${ctx.scIntro}</p>
            </section>
        ),
        benefits: [
            "${ctx.scBenefit1}",
            "${ctx.scBenefit2}",
            "${ctx.scBenefit3}"
        ],
        process: [
            "${ctx.scProcess1}",
            "${ctx.scProcess2}",
            "${ctx.scProcess3}"
        ],
        image: "/images/portfolio/${s.slug.replace('-cleaning', 'ing')}.webp"
    },`);
});

seoExportLines.push(`};\n`);
serviceExportLines.push(`};\n`);

// Note: writing to files overwrites them
fs.writeFileSync(seoPath, seoExportLines.join('\n'));
fs.writeFileSync(serviceContentPath, serviceExportLines.join('\n'));

console.log('Successfully wrote unique payloads and completely eradicated the generatePillars template pattern.');
