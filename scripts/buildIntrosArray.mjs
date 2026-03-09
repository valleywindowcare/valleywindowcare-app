import fs from 'fs';

const dbPath = './src/data/serviceAreasContent.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// 31 100% Unique, non-templated arrays of introduction strings
const cityIntros = {
  "green-bay": [
    "Winter squalls whipping off the bay and heavy spring torrential rains create an extremely punishing reality for property owners in Green Bay.",
    "The relentless atmospheric moisture driven steadily inward from the waterfront forces delicate residential siding to constantly battle aggressive algae and deep-rooted moss year-round.",
    "Ignoring these specific environmental threats always leads to premature material rot. By trusting certified, eco-friendly professionals, you proactively neutralize the biological growth that thrives within this damp, lake-effect climate."
  ],
  "appleton": [
    "Maintaining a pristine architectural presentation is non-negotiable for properties situated throughout the bustling Fox Cities.",
    "Appleton experiences a distinct mixture of heavy urban exhaust from downtown traffic and dense seasonal pollen, forming an acidic layer when combined that actively eats away at exterior materials.",
    "Securing commercial-grade washing services is the only way to safeguard your real estate investment here. We deploy meticulous chemical combinations to safely isolate and dissolve these exact local pollutants."
  ],
  "oshkosh": [
    "Positioned directly alongside Lake Winnebago, Oshkosh homes face a constant onslaught of midges, lake-effect humidity, and baking summer sun.",
    "Agricultural dust sweeping in from surrounding farmlands heavily coats vinyl siding and concrete flatwork, rapidly dulling the vibrant aesthetic of your neighborhood.",
    "Relying on standard pressure washing only forces this grime deeper into microscopic crevices. Our specialized team utilizes low-PSI techniques to actively lift and flush away these specific aquatic and agricultural contaminants."
  ],
  "door-county": [
    "The peninsula of Door County is defined by its breathtaking Lake Michigan coastlines, heavy seasonal tourism, and historic bed-and-breakfast preservation.",
    "Constant coastal moisture creates a prime breeding ground for destructive Gloeocapsa magma on older roofing systems, threatening the structural charm of the region.",
    "Our elite technicians completely understand these maritime challenges. We utilize tailored, low-pressure sanitization methods to protect your delicate historic properties without risking catastrophic water damage."
  ],
  "neenah": [
    "Historic mansions lining the water and modern residential developments in Neenah require highly sensitive exterior maintenance.",
    "Industrial dust sweeping over from local paper manufacturing facilities frequently settles onto rooftops and driveways, creating stubborn chemical blemishes.",
    "We tackle these exact particulate challenges daily. Our team deploys robust neutralizing surfactants that seamlessly digest industrial fallout, instantly rejuvenating the curb appeal of your community."
  ],
  "menasha": [
    "Situated near Lake Butte des Morts, Menasha properties endure consistent marina winds and a heavily industrial waterfront environment.",
    "The rapid accumulation of airborne soot and river humidity establishes deep-seated fungal blooms on stucco and brick foundations.",
    "Our approach skips dangerous mechanical blasting entirely. Instead, we carefully apply scientifically formulated algaecides to completely arrest the spread of these river-borne biological threats."
  ],
  "de-pere": [
    "Resting directly along the Fox River trail, De Pere features stunning historic architecture that demands incredibly delicate, knowledgeable handling.",
    "The ambient moisture originating from the water creates a perpetual haven for aggressive lichen and mildew to colonize on older roofing substrates.",
    "That is exactly why our fully insured crew strictly deploys advanced soft-washing protocols here. We gently exterminate the root systems of these rampant organics without ever stripping away delicate exterior paint."
  ],
  "suamico": [
    "The heavily wooded, expansive residential lots of Suamico face completely unique maintenance obstacles compared to urban centers.",
    "Dense pine canopies cast permanent shadows that encourage thick moss carpets, while falling needles leave intense, acidic tannin stains on pristine concrete.",
    "We have mastered the exact detergent formulations required to flush out tree sap, tannins, and shadow-induced mold safely, preserving the rustic beauty of your forested property."
  ],
  "howard": [
    "Rapid suburban development around Duck Creek has introduced a massive density of modern constructed homes to an incredibly humid micro-climate.",
    "The newly laid concrete flatwork and fresh siding panels are immediate targets for aggressive seasonal pollen dumps and creeping mildew.",
    "Proactive defense is absolutely mandatory here. Our precision soft washing extracts embedded soil and organic spores rapidly, guaranteeing that your new property retains its pristine factory finish."
  ],
  "bellevue": [
    "Properties located near the major highway interchanges of Bellevue are subjected to an unrelenting barrage of vehicle exhaust and scattered brake dust.",
    "This airborne metallic pollution sticks like glue to residential siding, actively oxidizing and degrading the clear coat over time.",
    "Our commercial-tier degreasing protocols act quickly to lift these stubborn hydrocarbons straight out of the surface pores, delivering a flawless aesthetic upgrade to your neighborhood."
  ],
  "ashwaubenon": [
    "The intense foot traffic and vehicle congestion surrounding the stadium district in Ashwaubenon demand that local businesses and homes maintain total curb appeal.",
    "Tailgating debris, road salt, and dense urban smog quickly saturate nearby retaining walls and pathways with embedded grime.",
    "We provide top-tier, heavy-duty flatwork sanitization. Our rotary surface cleaners powerfully digest this deep-seated contamination to ensure your property is always game-day ready."
  ],
  "allouez": [
    "Allouez is characterized by its quiet streets, mature tree canopies, and historic brick facades that have stood for generations.",
    "Unfortunately, the lack of direct sunlight under these old-growth trees accelerates the silent spread of insidious black lichen into the masonry joints.",
    "Never allow an amateur to point a high-pressure wand at historic brick. We exclusively utilize chemical eradication methods that preserve the delicate mortar while completely destroying the organic overgrowth."
  ],
  "hobart": [
    "The sprawling golf course communities and luxury subdivisions across Hobart demand the absolute highest standard of exterior cleanliness.",
    "However, manicured lawns often result in fertilizer overspray hitting the foundation, triggering bright orange iron stains that ruin the premium feel.",
    "We specialize in targeted cosmetic mineral restoration. Our applicators neutralize these precise chemical burns instantly, restoring your concrete to a bright, uniform gray."
  ],
  "little-chute": [
    "Known for its iconic windmill and proximity to the Fox River locks, Little Chute experiences intensely humid winds that carry moisture right onto residential sidings.",
    "This constant cycle of wetting and drying bakes environmental fallout directly into the protective clear coat of vinyl and aluminum surfaces.",
    "Relying on our expert sanitation techniques ensures that this baked-on sludge is chemically broken down and rinsed away cleanly, preserving the lifespan of your exterior."
  ],
  "kaukauna": [
    "The Electric City boasts a rich industrial history, but homes near the Fox River dam face intense summer humidity that supercharges algae spread.",
    "Thick, green organic films can literally consume the northern face of a home in a single season if left untreated by professionals.",
    "We step in to halt this destruction immediately. By applying eco-safe detergents, we detach the algae at the cellular level, bringing absolute cleanliness back to the community."
  ],
  "kimberly": [
    "Kimberly's proud papermaking heritage means many properties sit directly adjacent to the changing water currents of the Fox River.",
    "Managing real estate here involves a constant fight against riverfront condensation and the sticky accumulation of seasonal tree droppings.",
    "Our technicians meticulously navigate these specific local conditions. We apply specialized surfactants that digest sap and mildew simultaneously without harming your manicured landscaping."
  ],
  "combined-locks": [
    "The steep riverbanks and industrial heritage defining Combined Locks create micro-climates where heavy morning fog stubbornly refuses to burn off.",
    "This lingering dampness allows aggressive fungal networks to establish deep roots inside modern wood-composite sidings.",
    "Protecting your home from this insidious rot is our specialty. Our tailored soft wash approach sanitizes the clading completely, preventing catastrophic moisture intrusion."
  ],
  "wrightstown": [
    "Serving as a critical bridge crossing, Wrightstown mixes steady commuter traffic with wide-open agricultural surroundings.",
    "This intersection means properties are hit with both exhaust hydrocarbons and massive clouds of fertilizer-laced farm dust.",
    "We utilize advanced, multi-stage filtration to power through this unique combination of grime, ensuring your windows and siding reflect nothing but pure sunshine."
  ],
  "greenville": [
    "As one of the fastest-growing residential hubs near the Outagamie County airport, Greenville sees massive new construction exposed to jet exhaust settling.",
    "This fine, oily soot clings desperately to fresh white trim and brand-new concrete driveways, destroying the immaculate curbside appeal.",
    "Our industrial-grade degreasers are specifically calibrated to lift aviation and modern construction fallout straight off the substrate with zero abrasive damage."
  ],
  "fish-creek": [
    "Nestled beautifully near Peninsula State Park, Fish Creek properties see an incredible influx of summer tourism and heavy foot traffic.",
    "The dense overarching canopy cover combined with lake mist creates an aggressive environment where roofs can turn entirely black with rot within a few years.",
    "We actively preserve the aesthetic charm of this premier vacation destination by safely soft-washing historic shingles, extending roof life by up to a decade."
  ],
  "sister-bay": [
    "Vibrant waterfront dining and bustling marina activity make Sister Bay a highly desirable location, but Lake Michigan winds take a severe toll.",
    "Salt, sand, and constant squalls sandblast exterior paint, pushing abrasive grit deep into commercial storefront fabrics.",
    "Our low-pressure extraction protocols gently suspend and flush this grit completely out of the materials, guaranteeing your vibrant awnings and siding remain picture-perfect."
  ],
  "sturgeon-bay": [
    "The shipyards and historic downtown storefronts of Sturgeon Bay are constantly exposed to harsh maritime moisture and heavy industrial activity.",
    "Maintaining a welcoming facade here requires defending against unique marine-layer pollutants that eat away at commercial signage.",
    "We are immensely proud to restore these waterfront businesses properly. Our team deploys ultra-pure water systems to leave towering windows and brick facades flawlessly clean."
  ],
  "egg-harbor": [
    "Luxury resort properties and beautiful vacation homes dominate the landscape of Egg Harbor, demanding absolute perfection for seasonal guests.",
    "Marina condensation and lingering dampness frequently trigger unsightly mildew streaks that signal a total lack of upkeep to passing tourists.",
    "Secure your investment's reputation by utilizing our high-end sanitization techniques. We clear away the organic stains quietly and efficiently, ensuring five-star readiness."
  ],
  "ephraim": [
    "Ephraim is world-renowned for its strict aesthetic codes and brilliant white-painted historic buildings lining the waterfront.",
    "Keeping that white paint utterly flawless against relentless lake-effect humidity and localized bird activity is a massive physical challenge.",
    "We tackle this precise task with immense care. Our bespoke detergents melt away avian droppings and green algae without ever compromising the delicate, historic paint layers."
  ],
  "algoma": [
    "Directly facing the vast expanse of Lake Michigan, Algoma is characterized by persistent, heavy fog and a beautifully historic downtown.",
    "The brickwork on these older structures acts like a sponge for seasonal moisture, actively breeding destructive mold within the porous mortar.",
    "We step in to halt this degradation completely. By executing highly controlled chemical washes, we preserve the structural integrity of the masonry while restoring its original, historic color."
  ],
  "kewaunee": [
    "Operating as a critical harbor town, Kewaunee properties absorb an unimaginable amount of constant lake effect moisture.",
    "This continuous wet cycle forces residents to battle thick, slippery moss on their concrete walkways and deep-seated lichen on their roofs.",
    "Safety and preservation are paramount. We deploy hot-water surface cleaners and profound algaecides to completely reset these properties back to a sanitized, pristine state."
  ],
  "two-rivers": [
    "Fondly known as the Cool City, the dense fog and maritime climate surrounding the Lake Michigan beaches of Two Rivers punish untreated exteriors.",
    "Salt spray and heavy humidity aggressively oxidize aluminum trim while establishing stubborn fungal colonies along shaded rooflines.",
    "Our professional eradication methodology reverses this damage entirely. We implement targeted chemical rinses to safely dissolve oxidation and kill the organic threats natively."
  ],
  "manitowoc": [
    "As a major car ferry port with a massive industrial shoreline, Manitowoc homes endure heavy lake winds carrying abrasive, soot-laden dust.",
    "This dense particulate matter embeds itself into vinyl siding textures, projecting a deeply neglected, grimy appearance.",
    "Our team cuts through this heavy industrial fallout effortlessly. Relying on advanced surfactants, we detach the thick soot completely, reviving the exterior health of the community."
  ],
  "sherwood": [
    "Overlooking the vast waters of Lake Winnebago, Sherwood properties near High Cliff State Park deal with intense limestone dust and overwhelming midge swarms.",
    "When these millions of seasonal bugs adhere to the siding and bake in the sun, they leave highly acidic marks that etch directly into the protective coatings.",
    "We specialize in mitigating this exact aquatic fallout. Our precise washing protocols safely neutralize the bug splatter, returning your lakefront home to an immaculate condition."
  ],
  "shawano": [
    "Positioned along the shores of Shawano Lake, this community must constantly defend against heavy agricultural dust blowing in from the surrounding farm belts.",
    "Furthermore, the incredibly humid forested zones encircling the lake trap moisture directly against residential siding, causing extreme, rapid algae growth.",
    "Generic exterior washing ignores these specific regional factors. We deploy highly customized cleaning agents that penetrate the thick agricultural soil and completely destroy the lake-effect mold blooms."
  ],
  "ledgeview": [
    "Resting high on the Niagara Escarpment, the high-end residential subdivisions of Ledgeview face elevated wind exposure and intense driving rains.",
    "This high-altitude weather pattern forces moisture aggressively into building seams, creating a critical need for gentle, low-pressure sanitization.",
    "We absolutely refuse to use dangerous high-PSI wands on these premium homes. Our elite soft-wash protocol ensures total cleanliness while perfectly preserving the expensive architectural finishes."
  ]
};

let hubsCleaned = 0;

db.forEach(item => {
    if (item.type === 'hub') {
        const city = item.citySlug;
        const intros = cityIntros[city];
        if (!intros) {
            console.error(`MISSING CITY IN ARRAY LIST: ${city}`);
        } else {
            // Apply strict intro arrays
            item.introParagraphs = intros;

            // Remove the old intro HTML from content.
            // The old intro starts with an <h2> and continues until the first <h3> (which is the bespoke Middle we just wrote).
            let firstH3Index = item.content.indexOf('<h3>');
            if (firstH3Index !== -1) {
                // Keep only the rest of the file from <h3> onwards (the Middle and the CTA).
                item.content = item.content.substring(firstH3Index).trim();
            } else {
                // If there is no h3 anymore (unlikely, we just verified they exist), clear it out.
                // We'll leave it to be safe, but report it.
                console.log(`No H3 found in ${city}`);
            }

            hubsCleaned++;
        }
    }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 4));
console.log(`Successfully generated and sanitized intro arrays for ${hubsCleaned} hubs.`);
