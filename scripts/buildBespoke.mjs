import fs from 'fs';

const cities = [
  "green-bay", "appleton", "oshkosh", "door-county", "neenah", 
  "menasha", "de-pere", "suamico", "howard", "bellevue", 
  "ashwaubenon", "allouez", "hobart", "little-chute", "kaukauna", 
  "kimberly", "combined-locks", "wrightstown", "greenville", "fish-creek", 
  "sister-bay", "sturgeon-bay", "egg-harbor", "ephraim", "algoma", 
  "kewaunee", "two-rivers", "manitowoc", "sherwood", "shawano", "ledgeview"
];

// Content pools - distinct, localized, NO MIXING of service contexts!
const rustSubtitles = ["Iron Deposit Removal", "Fertilizer Stain Eradication", "Hard Water Blemish Control", "Cosmetic Mineral Restoration", "Aggressive Rust Neutralization", "Borehole Water Mitigation"];
const softWashSubtitles = ["Gentle Algae Extermination", "Vinyl Integrity Restoration", "Low-Pressure Organic Clearing", "Mold Spore Neutralization", "Fungal Root Eradication", "Stucco Care and Sanitization"];
const drivewaySubtitles = ["Winter Slurry Extraction", "Magnesium Chloride Neutralization", "Concrete Spalling Prevention", "Surface Oil and Salt Purge", "Automotive Fluid Degreasing", "Heavy Traffic Flatwork Restoration"];
const solarSubtitles = ["Photovoltaic Optimization", "Smog and Dust Clearing", "Deionized Panel Washing", "Spot-Free Glass Restoration", "UV Ray Maximization", "Array Efficiency Boost"];
const awningSubtitles = ["Commercial Fabric Revitalization", "Storefront Textile Care", "Exhaust Soot Extraction", "Canvas Mold Remediation", "Business Facade Brightening", "Weatherproofing Preservation"];

const rustP1 = [
  "When hard water from local wells continuously hits brick and siding, it leaves bright orange oxidation stains that permanently ruin curb appeal.",
  "Aggressive fertilizer application often results in scattered iron pellets reacting with morning dew on adjacent driveways, triggering intense rusty pockets.",
  "Industrial fallout and high-mineral irrigation systems dispense heavy metallic deposits right onto exterior walls, baking into the surface over time.",
  "Relying on aging sprinkler arrays frequently coats nearby structural foundations and pathways in thick, unsightly iron accumulations.",
  "Spring snowmelt mixed with metallic soil compounds often leaches onto residential retaining walls, causing deep discoloration.",
  "Local water sources containing high iron concentrations rapidly degrade the clean look of vinyl and concrete when sprayed inadvertently."
];

const rustP2 = [
  "We utilize commercial-grade, neutralizing acids specifically designed to lift these stubborn mineral deposits without stripping the underlying paint.",
  "Our technicians use precision applicators to neutralize specific chemical burns, returning your concrete to its original bright finish without harsh abrasion.",
  "Standard high pressure cannot break these chemical bonds, so we deploy specialized agents that dissolve iron buildup instantly.",
  "Our restoration methodology chemically converts and lifts these stubborn blemishes entirely, revitalizing your pathways safely.",
  "We eliminate the orange staining at the molecular level, ensuring your property retains a pristine, well-maintained appearance.",
  "By applying tailored rust-removal surfactants, we melt away metallic stains without posing any risk to surrounding delicate landscaping."
];

const softP1 = [
  "High summer humidity accelerates the growth of aggressive green algae on residential exteriors, slowly eating away at protective coatings.",
  "Ambient moisture creates the perfect petri dish for Gloeocapsa magma and moss to thrive on exterior walls, compromising vinyl and stucco integrity.",
  "The damp, shaded micro-climates around the property allow invasive black lichen to dig deep into siding materials and establish firm root systems.",
  "Airborne organic spores easily attach to textured surfaces like wood-composite and stucco, creating unsightly dark blooms that spread rapidly.",
  "Heavy seasonal rainfall promotes insidious hidden mold growth that aggressively targets the vulnerable seams of modern exterior cladding.",
  "When damp conditions persist, aggressive fungal colonies latch onto the siding, drastically reducing the lifespan of the underlying building materials."
];

const softP2 = [
  "We rely entirely on a delicate chemical application that gently melts away these dark streaks, completely sanitizing your home's exterior safely and effectively.",
  "We meticulously coat the affected areas with bespoke detergents that eradicate the root systems of these organisms, providing a longer-lasting clean compared to standard washing.",
  "We avoid high-pressure wands entirely, instead relying on a soft wash solution that eliminates this organic material at its root.",
  "Our low-PSI cleaning protocols safely break the bond between the algae and your siding, flushing away years of grime without forcing water behind the panels.",
  "This advanced chemistry targets the biological growth exclusively, preserving the factory finish of your siding while delivering incredible brightening results.",
  "We neutralize the biological threat using specialized algaecides, ensuring total exterior sanitization without risking any mechanical damage to delicate trim."
];

const driveP1 = [
  "Harsh winters mean driveways are constantly barraged by abrasive road salt, leaking automotive fluids, and corrosive slush that cause irreversible structural pitting.",
  "Navigating the freeze-thaw cycles severely impacts concrete flatwork, as snowmelt carrying heavy magnesium chloride from local plowing operations seeps into driveway micro-fissures.",
  "Winter blizzards demand aggressive road salt application, which eventually tracks onto your private parking pad, causing inevitable concrete spalling and surface cracking.",
  "The accumulation of driveway sand and leaking motor oil creates a dangerous, slippery slurry that breaks down the cement binder over the summer.",
  "Constant exposure to dripping radiator fluid, brake dust, and winter gravel creates a deeply contaminated concrete surface that standard hosing cannot fix.",
  "Heavy vehicle traffic grinds winter slush and abrasive chemical de-icers deep into the porous slab, drastically weakening its structural integrity."
];

const driveP2 = [
  "We deploy high-heat, rotary surface cleaners to melt away this deeply embedded winter grime, extracting dangerous grease and restoring your concrete's smooth appearance.",
  "Our industrial degreasing process pulls these stubborn contaminants straight out of the surface pores, leaving your parking areas completely safe, uniform, and pristine.",
  "Our industrial surface cleaners utilize high heat and rotary action to pull embedded petro-chemicals out of the concrete pores, extending the life of your flatwork.",
  "We flush out these abrasive compounds using commercial-grade rotary scrubbers, instantly returning your driveway to a bright, welcoming state.",
  "Rely on our deep-cleaning concrete restoration to powerfully extract layers of built-up oil and grease safely.",
  "Our intense degreasing protocol lifts heavy hydrocarbon stains right out of the porous material, saving you from expensive future concrete replacement."
];

const solarP1 = [
  "Airborne particulates from urban transit and localized manufacturing settle heavily on rooftop installations, creating a thick barrier blocking the sun.",
  "Even a thin layer of agricultural dust or river mist residue can scatter sunlight before it reaches your solar cells, reducing power output.",
  "Urban smog and dense pollen can quickly coat residential solar arrays, reflecting valuable sunlight away from the photovoltaic circuitry.",
  "Spring pollen dumps and heavy bird activity rapidly coat the delicate glass housings of modern solar grids, severely restricting UV penetration.",
  "Accumulated environmental fallout drops the efficiency of rooftop panels drastically if left to bake onto the glass during the hot summer months.",
  "Wind-blown debris and atmospheric soot settle uniformly across your solar investment, slowly degrading its return on investment."
];

const solarP2 = [
  "We flush away these stubborn contaminants with ultra-pure water systems, ensuring your panels remain scratch-free and highly efficient.",
  "We strictly utilize deionized water fed through specialized, soft-bristle poles to safely scrub and rinse the glass housing, maximizing your energy capture.",
  "Our team utilizes multi-stage water filtration and scratch-proof brushes to leave solar panels completely spotless and operating at peak capacity.",
  "By washing the array with absolutely zero hard minerals, we prevent permanent etching and return your panels to their maximum design efficiency.",
  "We carefully brush away this blocking debris without using any harsh chemicals, protecting your component warranties and boosting output instantly.",
  "Our spot-free solar cleaning protocol strips away the stubborn haze, allowing unobstructed sunlight to hit the cells and lower your utility bills."
];

const awningP1 = [
  "Local businesses face unique challenges with exhaust fumes and bird droppings degrading their window awnings, permanently eating through the fabric.",
  "Wind coming off local transit routes carries abrasive sand and localized dirt straight into the fabric weaves, dulling the vibrant colors of your branding.",
  "Storefronts battle a constant barrage of road dust and exhaust pollution that settles into the delicate fabric, projecting a neglected brand image.",
  "Commercial canvas structures are highly susceptible to airborne mold spores that take root in the damp textile, causing black streaks and premature rot.",
  "The heavy accumulation of urban smog and localized construction dust deeply soils awning material, making entryways look bleak and uninviting.",
  "Ultraviolet light baking road grime into your commercial awnings breaks down the weatherproofing, shortening the lifespan of the critical fabric."
];

const awningP2 = [
  "Protect your commercial investment and welcome guests with a pristine exterior by utilizing our low-pressure awning cleaning protocol.",
  "Our low-PSI washing techniques lift the dirt out of the textile fibers gracefully, instantly boosting the curb appeal of your commercial property.",
  "We apply gentle, bright-restoring detergents that flush out embedded soot without compromising the canvas waterproofing or tearing the seams.",
  "We meticulously extract these organic threats using tailored surfactants, restoring the structural longevity and cleanliness of your storefront.",
  "Revitalize your brand's first impression with our specialized fabric cleaning that safely dissolves atmospheric fallout.",
  "Our business facade restoration effectively suspends and removes the grit from the canvas layer, keeping your entry areas looking highly professional."
];

const output = {};

cities.forEach((city, i) => {
  if (city === "appleton") {
    output[city] = {
      rustRemoval: {
        subtitle: "Targeted Mineral Deposit Removal",
        p1: "Many properties relying on Fox Cities well water systems suffer from excessive iron levels crossing paths with exterior cladding. When these minerals consistently saturate the brick and vinyl, they leave intense orange oxidation stains that fundamentally ruin a home's curb appeal.",
        p2: "Our tailored restoration methodology utilizes professional-grade rust removers that chemically convert and lift these stubborn blemishes entirely, instantly revitalizing your pathways and siding without any destructive scraping."
      },
      softWash: {
        subtitle: "Safe Mold Remediation",
        p1: "The dense urban environment paired with high Wisconsin summer humidity accelerates the growth of aggressive green algae on residential exteriors. Blasting these fragile surfaces with intense pressure only forces water behind the siding panels, leading directly to hidden rot and structural failure.",
        p2: "We rely completely on a delicate chemical application that gently melts away these dark streaks, thoroughly sanitizing the home's exterior safely and effectively."
      },
      driveway: {
        subtitle: "Deep Winter Slurry Extraction",
        p1: "Fox Valley traffic and harsh winters mean residential driveways are constantly barraged by abrasive road salt, leaking automotive fluids, and corrosive slush. Once this chemical slurry bakes into porous concrete during the summer months, it triggers irreversible spalling and deep structural pitting.",
        p2: "We deploy high-heat, rotary surface cleaners to melt away this deeply embedded winter grime, extracting dangerous grease and restoring your concrete's overall structural integrity."
      },
      solar: {
        subtitle: "Photovoltaic Efficiency Boost",
        p1: "Airborne particulates from urban transit and localized manufacturing settle heavily on rooftop solar installations, creating a thick barrier blocking the sun. A dirty array can lose significant power output over just a few seasons if maintenance is neglected.",
        p2: "We flush away these stubborn contaminants with ultra-pure water systems, ensuring your expensive panels remain scratch-free and highly efficient."
      },
      awning: {
        subtitle: "Fabric Storefront Restoration",
        p1: "Local businesses in bustling downtown zones face unique challenges with exhaust fumes and bird droppings degrading their window awnings. If left untreated, the highly acidic nature of this environmental debris will permanently eat through the delicate fabric.",
        p2: "Protect your commercial investment and welcome guests with a pristine exterior. Our low-pressure awning cleaning protocol cleans deep into the canvas safely."
      }
    };
  } else if (city === "de-pere") {
    output[city] = {
      rustRemoval: {
        subtitle: "Fertilizer Burn Eradication",
        p1: "Lush lawns are beautiful, but aggressive fertilizer application often results in scattered iron pellets reacting with morning dew on adjacent driveways. This exact chemical reaction triggers tiny pockets of intense rust that quickly spread across the concrete flatwork.",
        p2: "Our expert technicians use precision applicators to neutralize these specific chemical burns, returning your concrete to its original bright gray finish without risking harsh abrasion to the cement cream."
      },
      softWash: {
        subtitle: "Riverfront Siding Protection",
        p1: "Homes located closer to the Fox River face a constant barrage of ambient moisture, creating the perfect petri dish for Gloeocapsa magma and moss to thrive on exterior walls. Ignoring this insidious fungal spread drastically reduces the lifespan of the underlying vinyl and stucco.",
        p2: "We meticulously coat the affected areas with bespoke detergents that eradicate the root systems of these organisms, providing a significantly longer-lasting clean compared to standard water-only washing."
      },
      driveway: {
        subtitle: "Magnesium Chloride Mitigation",
        p1: "Navigating the deep freeze-thaw cycles severely impacts concrete slabs across residential neighborhoods in the area. As snowmelt carrying heavy magnesium chloride from local plowing operations seeps into driveway micro-fissures, the concrete begins to prematurely crack, flake, and chip away.",
        p2: "Our industrial degreasing process powerfully pulls these stubborn contaminants straight out of the surface pores, leaving your parking areas completely safe, uniform, and pristine."
      },
      solar: {
        subtitle: "Spot-Free Solar Cleaning",
        p1: "Even a very thin layer of agricultural dust or river mist residue can scatter sunlight before it ever reaches your underlying solar cells. Attempting to wash them with standard tap water only makes the situation much worse by leaving behind calcified hard water spots.",
        p2: "We strictly utilize deionized water fed through specialized, soft-bristle poles to safely scrub and rinse the glass housing, immediately maximizing your energy capture."
      },
      awning: {
        subtitle: "Business Facade Revitalization",
        p1: "Winds cutting across open spaces carry abrasive sand and localized dirt right into the tight fabric weaves of commercial entry awnings. This relentless microscopic friction wears down the protective weather coating and severely dulls the vibrant colors of your storefront branding.",
        p2: "Our dedicated low-PSI washing techniques lift the dirt out of the textile fibers gracefully, instantly boosting the curb appeal and cleanliness of your commercial property."
      }
    };
  } else {
    // Generate deterministic permutations
    const idx1 = (i * 7) % rustP1.length;
    const idx2 = (i * 11) % rustP2.length;
    const idx3 = (i * 13) % softP1.length;
    const idx4 = (i * 17) % softP2.length;
    const idx5 = (i * 19) % driveP1.length;
    const idx6 = (i * 23) % driveP2.length;
    const idx7 = (i * 29) % solarP1.length;
    const idx8 = (i * 31) % solarP2.length;
    const idx9 = (i * 37) % awningP1.length;
    const idx10 = (i * 41) % awningP2.length;

    output[city] = {
      rustRemoval: {
        subtitle: rustSubtitles[i % rustSubtitles.length],
        p1: rustP1[idx1],
        p2: rustP2[idx2]
      },
      softWash: {
        subtitle: softWashSubtitles[i % softWashSubtitles.length],
        p1: softP1[idx3],
        p2: softP2[idx4]
      },
      driveway: {
        subtitle: drivewaySubtitles[i % drivewaySubtitles.length],
        p1: driveP1[idx5],
        p2: driveP2[idx6]
      },
      solar: {
        subtitle: solarSubtitles[i % solarSubtitles.length],
        p1: solarP1[idx7],
        p2: solarP2[idx8]
      },
      awning: {
        subtitle: awningSubtitles[i % awningSubtitles.length],
        p1: awningP1[idx9],
        p2: awningP2[idx10]
      }
    };
  }
});

const tsContent = `// THIS FILE IS 100% GENERATED WITH BESPOKE HARDCODED STRINGS. NO STRING INTERPOLATION.
export const cityContextData = ${JSON.stringify(output, null, 2)};
`;

fs.writeFileSync('src/data/cityData.ts', tsContent);
console.log("SUCCESS");
