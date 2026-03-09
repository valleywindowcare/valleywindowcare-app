import fs from 'fs';

const dbPath = './src/data/serviceAreasContent.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Unique FAQs & Trust Signals for Appleton
const appletonData = {
    faqs: [
        {
            question: "How often should I clean my roof in Appleton?",
            answer: "Due to the dense tree canopies in historic Appleton neighborhoods and ambient humidity from the Fox River, we recommend a professional soft wash every 3 to 5 years to prevent Gloeocapsa magma (black streaks) from taking root."
        },
        {
            question: "Will pressure washing damage my historic Fox Valley home?",
            answer: "Yes, using high-pressure wands on older masonry or delicate siding is incredibly dangerous. We exclusively utilize low-PSI soft washing protocols that melt away organic growth safely."
        },
        {
            question: "How do you handle winter salt on concrete driveways?",
            answer: "Fox Cities traffic tracks heavy road salt and slush onto residential concrete. We deploy high-heat rotary surface cleaners tailored specifically to extract this corrosive winter slurry before it causes irreversible spalling."
        }
    ],
    trustSignals: [
        "As a fully insured and highly vetted local contractor serving the Appleton community, we hold ourselves to the strictest safety standards. Every piece of equipment we operate on your property is meticulously calibrated to protect your delicate architectural trim and expensive landscaping.",
        "We are deeply committed to protecting the Fox River watershed. Our entire chemical payload consists of 100% biodegradable, eco-friendly detergents that neutralize organic threats natively without introducing toxic runoff into local aquatic ecosystems."
    ]
};

// Unique FAQs & Trust Signals for Green Bay
const greenBayData = {
    faqs: [
        {
            question: "Why does my Green Bay siding get green so quickly?",
            answer: "The rapid algae growth is directly caused by the volatile mix of lake-effect moisture blowing off the bay and humid summer temperatures, creating a perfect petri dish on northern-facing walls."
        },
        {
            question: "Can you remove rust stains from my property?",
            answer: "Absolutely. Whether it's fertilizer overspray or hard water from older irrigation systems, we use targeted acid neutralizers to safely lift orange oxidation off concrete and vinyl."
        },
        {
            question: "Is your roof cleaning method safe for asphalt shingles?",
            answer: "We strictly adhere to ARMA (Asphalt Roofing Manufacturers Association) guidelines, employing a non-pressure chemical treatment that kills deep-rooted lichen without dislodging your protective shingle granules."
        }
    ],
    trustSignals: [
        "Operating closely within the Green Bay grid requires a deep understanding of unique weather patterns and building materials. We provide total peace of mind through comprehensive liability insurance and a steadfast dedication to doing the job right the first time.",
        "Protecting the local bay environment is paramount. We exclusively utilize professional-grade, environmentally safe surfactants that break down dirt and soot entirely, ensuring your property is spotless while keeping our local water tables pristine."
    ]
};

// Unique FAQs & Trust Signals for Door County
const doorCountyData = {
    faqs: [
        {
            question: "Do you clean historic bed-and-breakfast properties?",
            answer: "Yes, we specialize in delicate exterior restoration. We understand that historic Door County architecture demands a gentle, measured approach to preserve delicate paint and intricate woodwork."
        },
        {
            question: "How do you handle heavy lake-effect moisture?",
            answer: "Living on the peninsula means constant exposure to Lake Michigan fog and humidity. Our advanced algaecides are specifically mixed to penetrate and destroy the aggressive mildew that thrives in this maritime climate."
        },
        {
            question: "Is your window cleaning spot-free?",
            answer: "We utilize cutting-edge, pure water-fed pole systems that filter out all hard minerals, leaving your vacation home or storefront windows crystal clear without any streaks or squeegee marks."
        }
    ],
    trustSignals: [
        "Tourism is the lifeblood of the peninsula, and maintaining a flawless exterior is critical for five-star reviews. As a fully insured operational partner, we guarantee absolute professionalism and discretion while sanitizing your resort or private estate.",
        "The pristine beauty of the lake and surrounding State Parks must be preserved. Our cleaning methodology relies entirely on biodegradable, plant-safe detergents that thoroughly eradicate grime without harming the sensitive coastal ecosystem."
    ]
};

// Unique FAQs & Trust Signals for Shawano
const shawanoData = {
    faqs: [
        {
            question: "Can you remove agricultural dust from my exterior?",
            answer: "Yes. The farm belts surrounding Shawano generate massive amounts of airborne soil that cakes onto siding. We utilize heavy-duty, low-pressure detergents that suspend and flush this specific agricultural fallout completely."
        },
        {
            question: "Do you offer cleaning for lakefront properties?",
            answer: "Absolutely. Properties bordering Shawano Lake experience intense, rapid algae blooms due to the trapped moisture from the dense forested zones. Our soft wash system is engineered to neutralize these aquatic organic threats."
        },
        {
            question: "Will the cleaning solutions harm my lawn?",
            answer: "No. We utilize meticulous property protection protocols, including pre-soaking and post-rinsing all vegetation, ensuring our eco-friendly chemical applications only target the stains and mildew on your home."
        }
    ],
    trustSignals: [
        "True local expertise means understanding the specific challenges of rural and lakefront real estate. We are a fully licensed and insured exterior cleaning firm that stands resolutely behind the quality and safety of every project we undertake in the community.",
        "Respecting the natural beauty of the local waterways is non-negotiable. Our specialized algae treatments are 100% biodegradable, thoroughly breaking down the biological growth on your siding without posing any risk to the local aquatic wildlife or well systems."
    ]
};

// Unique FAQs & Trust Signals for De Pere
const dePereData = {
    faqs: [
        {
            question: "How do you clean delicate brickwork near the river?",
            answer: "Historic masonry in De Pere acts like a sponge for Fox River moisture. We never use high-pressure wands; instead, we apply targeted organic neutralizers that kill the moss and lichen rooted inside the mortar safely."
        },
        {
            question: "What is the best way to maintain my concrete driveway?",
            answer: "Routine extraction of magnesium chloride from winter plowing and localized automotive drips is vital. Our hot-water rotary cleaners pull these stubborn petro-chemicals straight out of the concrete pores to prevent premature cracking."
        },
        {
            question: "How often should commercial storefront awnings be washed?",
            answer: "Due to the abrasive sand and exhaust rolling through downtown transit routes, we recommend an annual low-PSI washing to remove grit and preserve the protective weatherproofing on your canvas fabrics."
        }
    ],
    trustSignals: [
        "Securing the historical and commercial value of De Pere properties is our primary objective. We back our specialized, low-PSI cleaning methodologies with comprehensive liability coverage, guaranteeing that your valuable architecture is entirely protected during the sanitization process.",
        "We prioritize the health of the Fox River watershed above all else. By utilizing highly advanced, biodegradable surfactants, we melt away embedded soot and river-borne mold without flushing any toxic artificial chemicals into the local drainage basins."
    ]
};

// General generation pools for the remaining 26 cities
const fqA = [
    "How do you handle heavy seasonal pollen on windows?",
    "Will professional washing damage my modern vinyl siding?",
    "What is the most effective way to remove driveway oil stains?",
    "Can black streaks on my roof be permanently removed?",
    "Is it safe to power wash my composite deck?",
    "How do you clean heavily oxidized aluminum trim?",
    "What makes soft washing better than traditional pressure washing?",
    "Do you provide commercial building exterior sanitization?",
    "How often should gutters be cleaned in heavily wooded areas?",
    "Can you restore the original color of fading stucco?",
    "Is it possible to clean solar panels without scratching them?",
    "How do you remove thick moss from concrete retaining walls?"
];

const faA = [
    "We utilize a pure-water filtration system that dissolves sticky tree sap and dense pollen without requiring abrasive scrubbing, leaving the glass completely spotless.",
    "Absolutely not. We exclusively rely on an advanced low-pressure chemical application that detaches dirt at the cellular level, protecting your clading's factory finish.",
    "Our team deploys commercial-grade, high-heat rotary scrubbers paired with specialized degreasers to pull hydrocarbons straight out of the porous concrete.",
    "Yes. Those streaks are actually a cyanobacteria called Gloeocapsa magma. Our bespoke algaecides exterminate the root system, ensuring they do not quickly return.",
    "Using high pressure will instantly splinter the composite fibers. Instead, we use a gentle detergent soak that safely lifts organic matter from the textured grain.",
    "We apply custom-formulated oxidation removal agents that chemically convert the chalky buildup, safely restoring the underlying metal without aggressive friction.",
    "Traditional mechanical blasting forces water behind seals and strips paint. Soft washing relies completely on eco-friendly chemistry to do the heavy lifting safely.",
    "Yes, we have specialized rigs capable of performing high-volume, low-pressure washing for massive commercial complexes and storefronts efficiently.",
    "Properties surrounded by dense, mature tree canopies require strict bi-annual clearing to prevent catastrophic water overflow and subsequent foundation damage.",
    "Yes. Fading is often just a thick layer of embedded atmospheric fallout and micro-algae. Our targeted sanitization pulls this out of the pores, brightening the surface instantly.",
    "We use strict deionized water protocols and specialized ultra-soft bristle poles to flush away the smog barrier, maximizing UV penetration safely.",
    "Thick moss holds incredible amounts of moisture against your pathways. We organically neutralize the spores and follow up with a gentle surface extraction."
];

const tsA = [
    "Delivering absolute perfection requires more than just powerful equipment; it demands accountability. We are a fully licensed and insured regional contractor totally dedicated to safeguarding your property against any operational risk.",
    "Every aspect of our service is designed to elevate your property's overall valuation while maintaining rigorous safety standards. Our elite crews treat your home with the exact identical care and precision they would demand for their own.",
    "We have spent years optimizing our exterior restoration techniques to ensure maximum aesthetic transformation. Partnering with our highly verified technicians means choosing a stress-free, deeply reliable maintenance experience.",
    "Protecting your real estate asset is our ultimate priority. We maintain extensive liability coverage and strictly employ highly trained specialists to guarantee your architectural investment remains perfectly intact.",
    "You deserve an exterior cleaning partner that prioritizes total transparency and unparalleled quality. We stand resolutely behind our work, bringing specialized expertise directly to your most challenging restoration projects."
];

const tsB = [
    "Furthermore, we are resolutely committed to eco-friendly operational standards. The bespoke detergents we deploy are 100% biodegradable, neutralizing aggressive mold without compromising the underlying health of the local ecosystem.",
    "We absolutely refuse to utilize harsh, toxic chemicals. Our proprietary cleaning methodology leverages plant-safe algaecides that thoroughly eradicate grime while ensuring the nearby water table remains unpolluted.",
    "Protecting your landscaping is just as important as cleaning your clading. Our crews meticulously pre-water and protect all surrounding vegetation, utilizing incredibly safe, biodegradable formulas exclusively.",
    "Our advanced soft-wash protocols are engineered to be aggressively tough on atmospheric fallout but incredibly gentle on the environment. We guarantee a pristine exterior without sacrificing localized ecological safety.",
    "By adopting strict, pure-water cleaning systems and biodegradable surfactants, we systematically destroy invasive organics while completely respecting the natural integrity of your surrounding neighborhood."
];

// Helper deterministic generator
const getDist = (str, arr) => {
    let sum = 0;
    for(let i=0; i<str.length; i++) sum += str.charCodeAt(i);
    return arr[sum % arr.length];
};

let hubsUpdated = 0;

db.forEach((item, index) => {
    if (item.type === 'hub') {
        const city = item.citySlug;
        
        let faqs = [];
        let trustSignals = [];

        if (city === "appleton") {
            faqs = appletonData.faqs;
            trustSignals = appletonData.trustSignals;
        } else if (city === "green-bay") {
            faqs = greenBayData.faqs;
            trustSignals = greenBayData.trustSignals;
        } else if (city === "door-county") {
            faqs = doorCountyData.faqs;
            trustSignals = doorCountyData.trustSignals;
        } else if (city === "shawano") {
            faqs = shawanoData.faqs;
            trustSignals = shawanoData.trustSignals;
        } else if (city === "de-pere") {
            faqs = dePereData.faqs;
            trustSignals = dePereData.trustSignals;
        } else {
            // Generate deterministic bespoke logic for the remaining cities
            let faqsUsed = new Set();
            for(let i=0; i<3; i++) {
                let checkStr = city + "q" + i;
                let qIdx = 0;
                let sum = 0;
                for(let c=0; c<checkStr.length; c++) sum += checkStr.charCodeAt(c);
                
                // Ensure no identical FAQs within the same city
                let offset = sum;
                while(true) {
                    qIdx = offset % fqA.length;
                    if(!faqsUsed.has(qIdx)) {
                        faqsUsed.add(qIdx);
                        break;
                    }
                    offset++;
                }
                
                faqs.push({
                    question: fqA[qIdx],
                    answer: faA[qIdx]
                });
            }

            trustSignals.push(getDist(city + "ts1", tsA));
            trustSignals.push(getDist(city + "ts2", tsB));
        }

        item.faqs = faqs;
        item.trustSignals = trustSignals;
        hubsUpdated++;
    }
});

fs.writeFileSync(dbPath, JSON.stringify(db, null, 4));
console.log(`Successfully injected Local SEO Expansion Arrays into ${hubsUpdated} hubs.`);
