const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'src', 'data', 'serviceAreasContent.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
let serviceData = JSON.parse(rawData);

// Extract all unique city hubs to loop over
const cityHubs = serviceData.filter(d => d.type === 'hub');

const fullSchemaMissingServices = [
    {
        serviceName: "Residential Rust Removal",
        serviceSlug: "rust-removal",
        category: "Concrete Cleaning",
        headerImage: "/images/portfolio/rust-removal.webp",
        introParagraphs: [
            "Rust stains from irrigation systems, metal patio furniture, or hard water runoff can permanently etch into your concrete and siding if left untreated.",
            "Standard pressure washing will never remove iron oxide—it requires specialized acidic restorative chemicals to chemically break the molecular bond of the rust.",
            "Our certified technicians apply professional-grade rust removal compounds that safely lift massive, deep-set orange stains without burning your masonry or damaging delicate siding."
        ],
        faqs: [
            {
                question: "Can pressure washing alone remove rust?",
                "answer": "No. Rust (iron oxide) forms a chemical bond with the substrate. High-pressure water will only erode the concrete while leaving the embedded rust stain perfectly intact. It requires our specialized acidic soft-wash treatment to dissolve."
            },
            {
                question: "Will the rust removal chemicals damage my grass?",
                "answer": "No. Before, during, and after the rust treatment, we heavily saturate all surrounding organic landscaping with fresh water. We also use neutralizing agents immediately after the rust is lifted to ensure your soil pH remains perfectly balanced."
            },
            {
                question: "Can you remove battery acid stains like rust?",
                "answer": "Yes. Battery acid (often from golf carts or lawnmowers) leaves a flash-rust appearance on concrete. We have proprietary restorers specifically formulated to pull battery acid stains and standard rust out of porous concrete."
            }
        ],
        trustSignals: [
            "We are authorized applicators of top-tier professional rust removal compounds, meaning we use proven, predictable chemistry rather than dangerous over-the-counter DIY acids that can permanently scorch your concrete.",
            "Because rust removal requires specialized chemical knowledge, our elite technicians undergo specific hazard and application training, ensuring we restore your property perfectly without risking structural integrity or environmental damage."
        ]
    },
    {
        serviceName: "Soft Wash",
        serviceSlug: "soft-wash",
        category: "House Washing",
        headerImage: "/images/portfolio/house-wash-before-after.webp",
        introParagraphs: [
            "High-pressure washing is highly destructive to modern vinyl siding, delicate stucco, and historic masonry, forcing water behind the moisture barrier and causing hidden rot.",
            "Soft Washing is the industry-approved alternative. We use specialized low-pressure pumps (under 100 PSI, similar to a garden hose) to carefully apply our proprietary algaecide solutions.",
            "This chemical approach doesn't just blast top-layer dirt away; it actively kills algae, mold, and Gloeocapsa magma at the root, keeping your home spotless for significantly longer."
        ],
        faqs: [
            {
                question: "What is the difference between pressure washing and soft washing?",
                "answer": "Pressure washing uses high mechanical force (up to 4,000 PSI) to forcefully strip dirt, which can easily damage siding and roofs. Soft washing uses low pressure (under 100 PSI) combined with specialized, biodegradable detergents to kill mold and algae at the root chemically."
            },
            {
                question: "Is the soft wash chemical safe for my pets and plants?",
                "answer": "Absolutely. We are meticulously trained in plant and property protection. We pre-wet all landscaping, apply our biodegradable algaecides, and then perform a thorough post-rinse. Once the solution dries, it is 100% safe for pets and children."
            },
            {
                question: "How long does a soft wash treatment last compared to pressure washing?",
                "answer": "Because soft washing uses algaecides to actually kill the biological root systems of mold and algae, rather than just blasting off the surface layer, a soft wash typically lasts 4 to 6 times longer than standard pressure washing."
            }
        ],
        trustSignals: [
            "We exclusively utilize modern, low-pressure soft wash manifolds and specific algaecide dosing systems, guaranteeing your home's delicate exterior is never subjected to destructive, high-impact mechanical blasting.",
            "Our technicians are deeply versed in exactly which chemical ratios to deploy based on your specific siding material, ensuring we eradicate all organic growth while flawlessly protecting your home's structural warranties."
        ]
    },
    {
        serviceName: "Driveway Cleaning",
        serviceSlug: "driveway-cleaning",
        category: "Concrete Cleaning",
        headerImage: "/images/portfolio/drive-way-cleaning.webp",
        introParagraphs: [
            "Your driveway is the focal point of your property's curb appeal. Over time, it acts like a giant sponge, absorbing engine oil, tire rubber, winter road salt, and organic algae.",
            "If these contaminants are left to freeze and expand during harsh winters, they will cause irreversible spalling, cracking, and structural pitting in the concrete.",
            "We deploy highly calibrated rotary surface cleaners and penetrating alkaline degreasers to extract deep-set stains, uniformly restoring the bright, original finish of your poured concrete."
        ],
        faqs: [
            {
                question: "Will cleaning my driveway remove oil stains completely?",
                "answer": "We use professional-grade alkaline degreasers that break down hydrocarbon chains, significantly lightening and often completely removing oil stains. However, the exact success rate depends on how long the oil has been baking into the porous concrete."
            },
            {
                question: "Do you use a wand to clean the driveway?",
                "answer": "We exclusively use professional 20-inch rotary surface cleaners for expansive flatwork. Wands leave unsightly 'zebra stripes' and uneven etching. Our rotary cleaners provide a perfectly uniform, damage-free finish across the entire slab."
            },
            {
                question: "How often should I have my driveway professionally cleaned?",
                "answer": "We highly recommend an annual driveway cleaning, ideally right after winter or early spring. This removes the corrosive road salts, chemical de-icers, and winter slush before they have a chance to permanently pit and crack your concrete."
            }
        ],
        trustSignals: [
            "We invest in heavy-duty, high-GPM (Gallons Per Minute) commercial pressure washing rigs and calibrated rotary surface cleaners. This ensures we don't 'zebra stripe' or accidentally etch your expensive concrete flatwork.",
            "Before applying any pressure, our technicians expertly pre-treat your driveway with customized alkaline surfactants designed specifically to break the bond of tire marks and organic algae without polluting local storm drains."
        ]
    },
    {
        serviceName: "Solar Panel Cleaning",
        serviceSlug: "solar-panel-cleaning",
        category: "Roof Cleaning",
        headerImage: "/images/portfolio/solar-panel-cleaning.webp",
        introParagraphs: [
            "Dirty solar panels can lose up to 30% of their energy yield due to the accumulated buildup of pollen, airborne agricultural dust, bird droppings, and industrial smog.",
            "Relying on rainfall to clean your panels is ineffective—it's like relying on a rainstorm to wash your car windshield. You need agitation and purified water to restore peak crystalline efficiency.",
            "We utilize specialized soft-bristle water-fed poles utilizing 100% deionized, purified water, ensuring we wipe away performance-blocking grime without leaving hard water spots or scratching the delicate photovoltaic glass."
        ],
        faqs: [
            {
                question: "Can I just hose off my solar panels myself?",
                "answer": "No. Standard tap water contains heavy minerals (calcium and magnesium) that will bake onto the hot photovoltaic glass, creating permanent hard water spots that drastically reduce energy absorption. We strictly use 100% deionized, purified water."
            },
            {
                question: "Do you walk on the roof to clean the solar panels?",
                "answer": "Whenever possible, we clean panels safely from the ground or from sturdy ladders using ultra-lightweight, carbon fiber water-fed poles that extend up to 40 feet, minimizing foot traffic and protecting the structural integrity of your roof shingles."
            },
            {
                question: "How much more energy will my clean panels produce?",
                "answer": "Depending on the severity of the fouling (especially bird droppings or heavy agricultural dust), professional cleaning can instantly restore energy yields by anywhere from 15% to 30%, rapidly paying for the cost of the cleaning itself."
            }
        ],
        trustSignals: [
            "We utilize advanced multi-stage water filtration systems that produce zero-TDS (Total Dissolved Solids) pure water, guaranteeing that your expensive photovoltaic panels dry perfectly spot-free for maximum solar absorption.",
            "Safety is our ultimate priority. Our technicians use carbon fiber extension poles with specialized non-abrasive boar's hair brushes, ensuring your fragile solar arrays are painstakingly cleaned without applying any damaging weight to your roof structure."
        ]
    }
];

let updatedCount = 0;

// Step 1: Remove the "lite" versions we just injected to avoid duplicates
const slugsToRemove = fullSchemaMissingServices.map(s => s.serviceSlug);
serviceData = serviceData.filter(entry => {
    // Keep hubs, and keep services that are NOT in our missing list
    if (entry.type === 'hub') return true;
    if (!slugsToRemove.includes(entry.serviceSlug)) return true;
    return false; // Filter out the old lite versions of rust-removal, soft-wash, etc.
});

// Step 2: Inject the rich schema versions
cityHubs.forEach(hub => {
    fullSchemaMissingServices.forEach(missing => {
        const newEntry = {
            id: `svc-${hub.citySlug}-${missing.serviceSlug}`,
            city: hub.city,
            citySlug: hub.citySlug,
            service: missing.serviceName,
            serviceSlug: missing.serviceSlug,
            type: "service",
            title: `${missing.serviceName} in ${hub.city}, WI`,
            content: `
    <h2>The Premier ${missing.serviceName} in ${hub.city}, Wisconsin</h2>
    <p>Operating throughout the ${hub.city} region, implementing a highly rigorous <strong>${missing.serviceName}</strong> routine is essential to safeguard your property from degradation.</p>
    
    <p>Years of continuous operation have definitively proven that ignoring standard exterior maintenance inevitably leads to deeply embedded stains and physical decay. Home and business owners throughout ${hub.city} expect a customized, methodical approach to exterior restoration.</p>

    <h3>The Strategy For Our Protocol in ${hub.city}</h3>
    <p>Our proven method for <strong>${missing.serviceName}</strong> is customized to the exact atmospheric conditions found in ${hub.city}. We don't employ generic tactics; instead, we formulate custom solutions actively targeting the exact strains of dirt and grime indigenous to your specific neighborhood.</p>

    <h3>Long-Term Financial Protection</h3>
    <p>Committing to routine <strong>${missing.serviceName}</strong> instantly boosts curb appeal while extending the lifespan of your exterior substrates by decades. Properties located in prime residential or commercial zones recognize massive ROI when their exteriors are immaculately restored.</p>

    <h3>Why Trust Our Local Specialized Technicians?</h3>
    <p>Because we operate constantly within the ${hub.city} grid, we precisely understand the unique architectural features that populate this region. Our elite technicians are exhaustively trained, fully insured professionals who prioritize environmental stewardship.</p>
    
    <!-- Conversion Hook -->
    <div class="my-12 bg-navy text-center py-12 px-8 md:px-12 rounded-2xl shadow-xl border border-gold/40 flex flex-col items-center justify-center">
        <h3 class="text-3xl md:text-4xl font-extrabold !text-[#FFFFFF] mb-4 tracking-tight w-full">Protect Your Investment Today</h3>
        <p class="!text-[#FFFFFF] text-lg md:text-xl mb-8 max-w-2xl mx-auto w-full leading-relaxed opacity-95">Contact the verified exterior cleaning professionals right now for a secure, hassle-free evaluation of your property.</p>
        <a href="tel:920-609-7085" class="inline-flex items-center justify-center gap-3 !bg-gold !text-navy font-bold text-2xl py-5 px-10 md:px-14 rounded-full hover:!bg-white transition-all shadow-[0_0_25px_rgba(234,179,8,0.3)] transform hover:-translate-y-1 max-w-xs w-full sm:w-auto">
            Call (920) 609-7085
        </a>
    </div>
`,
            category: missing.category,
            altText: `${missing.serviceName} in ${hub.city}, WI - Valley Window Care`,
            headerImage: missing.headerImage,
            introParagraphs: missing.introParagraphs,
            faqs: missing.faqs,
            trustSignals: missing.trustSignals
        };

        serviceData.push(newEntry);
        updatedCount++;
    });
});

fs.writeFileSync(dataPath, JSON.stringify(serviceData, null, 2), 'utf-8');
console.log(`Successfully removed lite entries and injected ${updatedCount} FULL schema service entries into serviceAreasContent.json`);
