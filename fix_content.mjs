import fs from 'fs';

const dataFile = 'src/data/serviceAreasContent.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

const targetCities = ["Green Bay", "Neenah", "Appleton", "Ashwaubenon", "Menasha", "Kaukauna"];
const services = [
    {
        name: "Roof Cleaning",
        slug: "roof-cleaning",
        keywords: ["Soft Wash", "ARMA standards"],
        paragraphs: [
            "Your roof is your property's first line of defense. Over time, unsightly black streaks caused by Gloeocapsa Magma algae can take root, degrading shingles and drastically reducing curb appeal.",
            "Using our specialized Soft Wash system, we safely eliminate these biological threats without the use of damaging high pressure. Our methods strictly adhere to ARMA standards (Asphalt Roofing Manufacturers Association), ensuring your warranty remains fully intact while delivering a stunning, streak-free clean."
        ]
    },
    {
        name: "Commercial Pressure Washing",
        slug: "commercial-pressure-washing",
        keywords: ["heavy foot traffic", "commercial properties", "stains compromising professionalism"],
        paragraphs: [
            "First impressions matter for commercial properties. Built-up grime, oil, and organic growth from heavy foot traffic can quickly lead to unsightly stains compromising professionalism and deterring potential customers.",
            "Our Commercial Pressure Washing services are designed to cut through the toughest buildup. Using industrial-grade equipment and specialized eco-friendly detergents, we restore your concrete, brick, and siding, ensuring your business always looks its absolute best."
        ]
    },
    {
        name: "Paver Patio Restorations",
        slug: "paver-patio-restorations",
        keywords: ["polymeric sand", "joint stabilization"],
        paragraphs: [
            "A well-maintained patio is the centerpiece of outdoor living. However, weather, weeds, and shifting can quickly diminish its beauty and structural integrity.",
            "Our comprehensive Paver Patio Restorations breathe new life into your hardscaping. After a deep, restorative clean, we meticulously apply high-quality polymeric sand to ensure complete joint stabilization. This locks pavers in place, inhibits weed growth, and restores the vibrant, pristine look you originally envisioned."
        ]
    },
    {
        name: "Permanent LED Lighting",
        slug: "permanent-led-lighting",
        keywords: ["year-round holiday lighting", "invisible track systems"],
        paragraphs: [
            "Elevate your property's nighttime aesthetic and security with our premium lighting solutions. Say goodbye to the annual hassle of climbing ladders and storing tangled wires.",
            "We install state-of-the-art year-round holiday lighting utilizing precision-engineered invisible track systems. Controlled seamlessly from your smartphone, these low-voltage LEDs offer millions of color combinations, blending perfectly into your architecture by day and dazzling by night."
        ]
    }
];

function generateContentBlock(city, serviceName, keywords, paragraphs) {
    return `
    <h2>The Premier ${serviceName} Services in ${city}, Wisconsin</h2>
    <p>${paragraphs[0]}</p>
    
    <p>Our expansive experience working in ${city} has shown that ignoring standard maintenance inevitably leads to severe degradation. Home and business owners throughout ${city} specifically demand a customized, methodical approach for their ${serviceName} needs.</p>

    <h3>The Science Behind Our Protocol in ${city}</h3>
    <p>Our proven method is carefully adapted to the exact atmospheric conditions found in ${city}. The localized environmental fallout dictates our precise chemical application. We don't employ generic "splash and dash" methods; instead, we deploy targeted solutions designed for absolute efficacy.</p>

    <p>${paragraphs[1]}</p>

    <h3>Boosting Value and Aesthetics</h3>
    <p>Executing a proper ${serviceName} instantly boosts curb appeal while extending the lifespan of your exterior substrates by decades. Properties located in ${city} recognize massive ROI when their exteriors are maintained. Whether you manage a sprawling commercial complex or a residential estate, it is the smartest maintenance decision you can make this season.</p>

    <p>Furthermore, standardizing your maintenance reduces the frequency of necessary interventions. By investing in our services, you ensure your property remains protected and vibrant year after year.</p>

    <h3>Your Dedicated Local ${serviceName} Experts</h3>
    <p>There is absolutely no substitute for geographic familiarity and proven local expertise. Because we operate constantly within the ${city} grid, we precisely understand the unique architectural features that populate this region. Our elite technicians are highly trained, fully insured professionals who prioritize quality.</p>
    
    <p>By scheduling your expert ${serviceName} today, you are actively choosing the safest, most technologically advanced exterior restoration provider completely dedicated to the long-term protection of the ${city} community.</p>
    
    <!-- Conversion Hook -->
    <div class="my-12 bg-navy text-center py-12 px-8 md:px-12 rounded-2xl shadow-xl border border-gold/40 flex flex-col items-center justify-center">
        <h3 class="text-3xl md:text-4xl font-extrabold !text-[#FFFFFF] mb-4 tracking-tight w-full">Protect Your Investment Today</h3>
        <p class="!text-[#FFFFFF] text-lg md:text-xl mb-8 max-w-2xl mx-auto w-full leading-relaxed opacity-95">Contact the verified exterior cleaning professionals right now for a secure, hassle-free evaluation of your property.</p>
        <a href="tel:920-609-7085" class="inline-flex items-center justify-center gap-3 !bg-gold !text-navy font-bold text-2xl py-5 px-10 md:px-14 rounded-full hover:!bg-white transition-all shadow-[0_0_25px_rgba(234,179,8,0.3)] transform hover:-translate-y-1 max-w-xs w-full sm:w-auto">
            Call (920) 609-7085
        </a>
    </div>
`;
}

let modifiedCount = 0;

targetCities.forEach(city => {
    services.forEach(service => {
        const id = `svc-${city.toLowerCase().replace(/\s+/g, '-')}-${service.slug}`;
        
        let existingNode = data.find(item => item.id === id);
        if (existingNode) {
            existingNode.content = generateContentBlock(city, service.name, service.keywords, service.paragraphs);
            modifiedCount++;
        }
    });
});

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log(`Successfully updated content for ${modifiedCount} nodes.`);
