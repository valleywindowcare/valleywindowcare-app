import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const cwd = process.cwd();
const DATA_DIR = path.join(cwd, 'src/data');
const OUTPUT_JSON_PATH = path.join(DATA_DIR, 'serviceAreasContent.json');
const GALLERY_DIR = path.join(cwd, 'public/gallery');
const SOURCE_MEDIA_DIR = path.join(cwd, 'public/live-scraped');

global.fallbackPool = fs.readdirSync(GALLERY_DIR).filter(f => f.startsWith('grid-') && f.endsWith('.webp'));
console.log(`Loaded ${global.fallbackPool.length} internal grid assets for fallback resolution.`);

const CITIES = [
    "Appleton", "Green Bay", "De Pere", "Howard", "Suamico", "Bellevue",
    "Oshkosh", "Neenah", "Menasha", "Ashwaubenon", "Allouez",
    "Hobart", "Little Chute", "Kaukauna", "Kimberly", "Combined Locks",
    "Wrightstown", "Greenville", "Fish Creek", "Sister Bay", "Sturgeon Bay",
    "Egg Harbor", "Ephraim", "Algoma", "Kewaunee", "Two Rivers", "Manitowoc",
    "Door County", "Sherwood", "Shawano", "Ledgeview"
];

const SERVICES = [
    { name: "Roof Cleaning", slug: "roof-cleaning", category: "Roof Cleaning" },
    { name: "House Washing", slug: "house-washing", category: "House Washing" },
    { name: "Gutter Cleaning", slug: "gutter-cleaning", category: "Gutter Cleaning" },
    { name: "Concrete Cleaning", slug: "concrete-cleaning", category: "Concrete Cleaning" },
    { name: "Window Cleaning", slug: "window-cleaning", category: "Window Cleaning" },
    { name: "Christmas Lighting", slug: "christmas-lighting", category: "Permanent LED Lighting" },
    { name: "Pressure Washing", slug: "pressure-washing", category: "Concrete Cleaning" },
    { name: "Residential Permanent LED Lighting", slug: "residential-permanent-led-lighting", category: "Permanent LED Lighting" },
    { name: "Fence Cleaning", slug: "fence-cleaning", category: "House Washing" },
    { name: "Deck Cleaning", slug: "deck-cleaning", category: "House Washing" },
    { name: "Oxidation Removal", slug: "oxidation-removal", category: "House Washing" },
    { name: "Building Washing", slug: "building-washing", category: "House Washing" },
    { name: "Dumpster Pad Cleaning", slug: "dumpster-pad-cleaning", category: "Concrete Cleaning" },
    { name: "Permanent LED Lighting", slug: "permanent-led-lighting", category: "Permanent LED Lighting" },
    { name: "Commercial Roof Cleaning", slug: "commercial-roof-cleaning", category: "Roof Cleaning" },
    { name: "Commercial Pressure Washing", slug: "commercial-pressure-washing", category: "Concrete Cleaning" },
    { name: "Graffiti Removal", slug: "graffiti-removal", category: "Concrete Cleaning" },
    { name: "HOA Services", slug: "hoa-services", category: "House Washing" },
    { name: "Storefront Cleaning", slug: "storefront-cleaning", category: "Window Cleaning" },
    { name: "Premium Drive-Thru Cleaning", slug: "premium-drive-thru-cleaning", category: "Concrete Cleaning" },
    { name: "Parking Lot & Garage Cleaning", slug: "parking-lot-and-garage-cleaning", category: "Concrete Cleaning" },
    { name: "Chewing Gum Removal", slug: "chewing-gum-removal", category: "Concrete Cleaning" },
    { name: "Professional Awning Cleaning", slug: "professional-awning-cleaning", category: "House Washing" },
    { name: "Gas Station Cleaning", slug: "gas-station-cleaning", category: "Concrete Cleaning" },
    { name: "Post Construction Cleanup", slug: "post-construction-cleanup", category: "Concrete Cleaning" },
    { name: "Paver Patio Restorations", slug: "paver-patio-restorations", category: "Concrete Cleaning" },
    { name: "Hood Vent Cleaning", slug: "hood-vent-cleaning", category: "Concrete Cleaning" }
];

const FOLDER_MAP = {
    "Window Cleaning": ":window-cleaning",
    "Roof Cleaning": ":roof-cleaning",
    "Permanent LED Lighting": ":permanent-lighting",
    "Gutter Cleaning": ":gutter-cleaning",
    "House Washing": ":house-wash",
    "Concrete Cleaning": ":concrete-cleaning",
    "City Hub": ":house-wash"
};

const CITY_CONTEXT = {
    "Appleton": {
        landmarks: ["Lawrence University", "College Avenue", "Fox Cities Performing Arts Center", "Hearthstone Historic House", "Fox River Trail"],
        weathers: ["Fox River humidity", "dense suburban tree canopies", "winter freeze-thaw cycles", "heavy spring pollen"]
    },
    "Green Bay": {
        landmarks: ["Lambeau Field", "Titletown District", "Bay Beach Amusement Park", "Fox River", "University of Wisconsin-Green Bay"],
        weathers: ["frigid Lake Michigan winds", "heavy industrial shipping exhaust", "dense winter snow squalls", "bay-effect moisture"]
    },
    "De Pere": {
        landmarks: ["St. Norbert College", "Voyager Park", "De Pere Riverwalk", "historic downtown De Pere", "Fox River Locks"],
        weathers: ["riverfront moisture", "historic district pollution", "Fox River freezing", "heavy autumn leaf drop"]
    },
    "Howard": {
        landmarks: ["Meadowbrook Park", "Mountain Bay Trail", "Village Center", "Duck Creek", "Pamperin Park"],
        weathers: ["deep wooded shade", "extended morning dew", "suburban wind channels", "winter snowpack"]
    },
    "Suamico": {
        landmarks: ["Suamico River", "Ancestry Pkwy", "NEW Zoo & Adventure Park", "Barkhausen Waterfowl Preserve", "Sunset Beach Park"],
        weathers: ["heavy algae growth near Suamico marshlands", "severe winter freezes", "coastal bay moisture", "heavy tree canopy debris"]
    },
    "Bellevue": {
        landmarks: ["Josten Park", "Osprey Point", "East River Trail", "DeBroux Park", "Huron Road commercial district"],
        weathers: ["construction dust in new Bellevue subdivisions", "suburban wind drift", "summer heat", "spring rain runoff"]
    },
    "Oshkosh": {
        landmarks: ["EAA Aviation Museum", "Menominee Park", "Lake Winnebago", "Paine Art Center", "Main Street Historic District"],
        weathers: ["Fox River moisture", "lake-effect snow from Winnebago", "heavy summer insects", "EAA AirVenture dust"]
    },
    "Neenah": {
        landmarks: ["Riverside Park", "Bergstrom-Mahler Museum", "Shattuck Park", "Lake Winnebago", "Doty Island"],
        weathers: ["waterfront humidity", "Fox River valley winds", "lake-effect winter squalls", "heavy mature tree canopy debris"]
    },
    "Menasha": {
        landmarks: ["Heckrodt Wetland Reserve", "Jefferson Park", "Fox River Trails", "Menasha Marina", "Barlow Planetarium"],
        weathers: ["wetland moisture", "industrial exhaust", "Fox River freezing", "dense spring fog"]
    },
    "Ashwaubenon": {
        landmarks: ["Titletown District", "Resch Center", "National Railroad Museum", "Ashwaubomay Park", "Capital Credit Union Park"],
        weathers: ["stadium event traffic exhaust", "Fox River proximity moisture", "suburban commercial district fallout", "winter wind chill"]
    },
    "Allouez": {
        landmarks: ["Green Isle Park", "Heritage Hill State Historical Park", "Fox River Trail", "East River", "Webster Avenue commercial corridor"],
        weathers: ["historic district tree sap", "river valley humidity", "heavy autumn leaf accumulation", "spring flooding potential"]
    },
    "Hobart": {
        landmarks: ["Brown County Golf Course", "Centennial Centre", "Duck Creek", "Oneida Nation properties", "Four Seasons Park"],
        weathers: ["golf course irrigation drift", "open suburban wind exposure", "heavy winter snow drift", "wooded acreage pollen"]
    },
    "Little Chute": {
        landmarks: ["Little Chute Windmill", "Doyle Park", "Fox River", "Island Park", "Heesakker Park"],
        weathers: ["riverfront moisture", "historic brick weathering", "Fox River locking dam humidity", "seasonal freeze cycles"]
    },
    "Kaukauna": {
        landmarks: ["Kaukauna Locks", "1000 Islands Environmental Center", "Hydro Park", "Grignon Mansion", "Wisconsin Avenue"],
        weathers: ["Fox River industrial moisture", "heavy riverfront fog", "dense summer insect activity", "historic masonry degradation"]
    },
    "Kimberly": {
        landmarks: ["Sunset Park", "Fox River", "Papermaker Stadium", "Treaty Park", "Kimberly Avenue"],
        weathers: ["suburban Fox River humidity", "industrial paper mill exhaust legacy", "heavy parkland tree debris", "Fox River winter freeze"]
    },
    "Wrightstown": {
        landmarks: ["Fox River Gorge", "Wrightstown bridge", "Mueller Park", "St. Paul Catholic Church", "Brown County Fairgrounds vicinity"],
        weathers: ["Fox River freezing fog", "agricultural dust drift", "steep riverbank moisture", "rural wind channels"]
    },
    "Greenville": {
        landmarks: ["Lions Park", "Jennerjohn Park", "Appleton International Airport", "Heritage Park", "Greenville Sports Complex"],
        weathers: ["airport traffic exhaust", "open prairie wind exposure", "heavy agricultural pollen", "summer heat domes"]
    },
    "Fish Creek": {
        landmarks: ["Peninsula State Park", "Fish Creek Beach", "Founders Square", "Sunset Beach Park", "Eagle Tower"],
        weathers: ["Green Bay coastal wind", "heavy summer tourism traffic", "dense state park tree canopy", "Lake Michigan lake-effect snow"]
    },
    "Sister Bay": {
        landmarks: ["Waterfront Park", "Sister Bay Marina", "Pebble Beach", "Al Johnson's Swedish Restaurant", "Door County Maritime Museum"],
        weathers: ["Door County peninsula winds", "heavy maritime moisture", "severe winter freeze cycles", "salt spray drift"]
    },
    "Egg Harbor": {
        landmarks: ["Harbor View Park", "Egg Harbor Marina", "Alpine Resort", "Chief Oshkosh Native American Arts", "Peg Egan Performing Arts Center"],
        weathers: ["Lake Michigan bay moisture", "heavy seasonal tourism wear", "shoreline wind shear", "dense maritime fog"]
    },
    "Ephraim": {
        landmarks: ["Eagle Harbor", "Peninsula State Park", "Wilson's Restaurant", "Ephraim Historical Foundation", "Anderson Dock"],
        weathers: ["Eagle Harbor crosswinds", "historic white siding preservation needs", "lake-effect snow dumping", "coastal freezing"]
    },
    "Algoma": {
        landmarks: ["Algoma Pierhead Lighthouse", "Crescent Beach Boardwalk", "Ahnapee State Trail", "von Stiehl Winery", "Steele Street historic district"],
        weathers: ["direct Lake Michigan moisture", "severe pierhead winds", "heavy lakeshore fog", "commercial beachfront exhaust"]
    },
    "Kewaunee": {
        landmarks: ["Kewaunee Pierhead Lighthouse", "Father Marquette Memorial", "Harbor Park", "Pioneer Courthouse", "Selner Park beach"],
        weathers: ["heavy Lake Michigan squalls", "maritime fog roll-in", "coastal freezing", "historic brick weathering"]
    },
    "Two Rivers": {
        landmarks: ["Point Beach State Forest", "Neshotah Park", "Rawley Point Lighthouse", "Hamilton Wood Type Museum", "Twin Rivers converge"],
        weathers: ["Lake Michigan cooling effect", "heavy woodland tree debris", "dense shoreline moisture", "severe winter freezes"]
    },
    "Manitowoc": {
        landmarks: ["Wisconsin Maritime Museum", "S.S. Badger ferry docking", "Manitowoc Breakwater Lighthouse", "Lincoln Park Zoo", "Silver Creek Park"],
        weathers: ["heavy maritime shipping exhaust", "lake-effect snow pack", "gale force shoreline winds", "dense summer fog"]
    },
    "Door County": {
        landmarks: ["Cave Point County Park", "Door County Trolley", "Peninsula State Park", "Cana Island Lighthouse", "Eagle Tower"],
        weathers: ["Lake Michigan coastal winds", "heavy winter lake-effect snow", "dense maritime fog", "seasonal tourism traffic exhaust"]
    },
    "Sherwood": {
        landmarks: ["High Cliff State Park", "Lake Winnebago", "Sherwood Village Center", "Wanick Choute Park", "Sherwood Forest Golf Club"],
        weathers: ["Lake Winnebago moisture", "heavy summer insects", "rural wind channels", "winter freeze-thaw cycles"]
    },
    "Shawano": {
        landmarks: ["Shawano Lake", "Main Street Historic District", "Navarino State Wildlife Area", "Flea Market", "Crawford Center"],
        weathers: ["lake-effect humidity", "rural agricultural dust", "heavy snow drift", "wooded acreage pollen"]
    },
    "Ledgeview": {
        landmarks: ["Ledgeview Golf Course", "Fox River Trail", "Fonferek's Glen", "Niagara Escarpment", "Dickinson Road"],
        weathers: ["escarpment wind exposure", "suburban housing dust", "winter freeze cycles", "Fox River moisture"]
    },
    "Default": {
        landmarks: ["historic downtown", "local city parks", "central business district", "residential subdivisions", "major local highways"],
        weathers: ["sweeping winds", "summer humidity", "winter freeze-thaw cycles", "heavy spring rains"]
    }
};

const SERVICE_MATRIX = {
    "Roof Cleaning": {
        tech: ["sodium hypochlorite", "low-pressure soft wash", "Gloeocapsa magma eradication", "biodegradable algaecides"],
        problem: ["black streaks eating your shingles", "moss lifting roof tiles", "destructive lichen root systems", "premature roof granule loss"],
        solution: ["deploying our specialized soft washing manifold", "neutralizing fungal growth at the root", "applying warranty-safe roof treatments", "utilizing ARMA-approved detergents"],
        benefit: ["restoring your roof's original color", "saving thousands on premature replacement", "drastically improving neighborhood curb appeal", "maintaining home insurance compliance"]
    },
    "Window Cleaning": {
        tech: ["pure water technology", "water-fed poles", "deionized multi-stage filtration", "streak-free squeegee techniques"],
        problem: ["hard water mineral etching", "foggy, smudged insulated glass", "cobwebs obscuring your view", "pollen caked on exterior panes"],
        solution: ["scrubbing with ultra-pure filtered water", "dissolving mineral deposits safely", "removing screen debris comprehensively", "utilizing non-abrasive scrubbing pads"],
        benefit: ["maximizing natural solar light", "providing crystal-clear property views", "preventing permanent glass degradation", "boosting exterior visual presentation"]
    },
    "House Washing": {
        tech: ["soft washing surfactants", "vinyl-safe detergents", "low-pressure application", "oxidation removal compounds"],
        problem: ["green algae covering siding", "spider webs and bug nests", "chalky oxidation buildup", "grimy exterior walls"],
        solution: ["applying a thick layer of cleaning foam", "gently rinsing away dissolved dirt", "treating organic growth directly", "utilizing low-PSI volume washing"],
        benefit: ["instantly boosting curb appeal", "protecting siding longevity", "creating a healthier home exterior", "preparing surfaces for flawless painting"]
    },
    "Concrete Cleaning": {
        tech: ["high-pressure surface cleaners", "penetrating degreasers", "hot water extraction", "concrete sealing"],
        problem: ["slippery algae on walkways", "automotive oil stains", "rust and battery acid discoloration", "grimy, black driveways"],
        solution: ["blasting deep-seated dirt with surface spinners", "lifting suspended grease", "neutralizing rust spots", "flushing concrete pores entirely"],
        benefit: ["eliminating absolute slip hazards", "brightening your entire driveway", "restoring property value", "protecting concrete from winter cracking"]
    },
    "Permanent LED Lighting": {
        tech: ["Oelo/Gemstone track systems", "app-controlled diodes", "weather-sealed tracking", "custom architectural routing"],
        problem: ["dangerous ladders in winter", "tangled temporary lights", "fading plastic displays", "time-consuming holiday decorating"],
        solution: ["installing permanent color-changing LED tracks", "hiding wires elegantly in the soffit", "providing smartphone connectivity", "securing commercial-grade waterproof fixtures"],
        benefit: ["celebrating every holiday with a button press", "increasing nighttime architectural security", "never climbing a ladder again", "enjoying a seamless, invisible daytime look"]
    },
    "Default": {
        tech: ["commercial-grade equipment", "eco-friendly solutions", "advanced cleaning methodology", "specialized restoration tools"],
        problem: ["unsightly environmental buildup", "property degradation", "stubborn organic staining", "years of accumulated grime"],
        solution: ["executing a meticulous cleaning protocol", "deploying safe, effective treatments", "targeting the root cause of the mess", "utilizing professional-grade application"],
        benefit: ["enhancing overall property value", "ensuring long-lasting protection", "delivering an immaculate finish", "providing ultimate peace of mind"]
    }
};

class PRNG {
    constructor(seedString) {
        let hash = crypto.createHash('sha256').update(seedString).digest('hex');
        this.seed = parseInt(hash.substring(0, 8), 16);
    }
    next() {
        this.seed = (this.seed * 9301 + 49297) % 233280;
        return this.seed / 233280;
    }
    choice(array) {
        return array[Math.floor(this.next() * array.length)];
    }
}

function parseSpintax(text, prng) {
    let result = text;
    const spinRegex = /\{([^{}]+)\}/g;

    while (spinRegex.test(result)) {
        result = result.replace(spinRegex, (match, options) => {
            const choices = options.split('|');
            return prng.choice(choices);
        });
    }
    return result;
}

function generate600WordText(city, serviceName) {
    const seed = city + "_" + serviceName;
    const prng = new PRNG(seed);
    const ctx = CITY_CONTEXT[city] || CITY_CONTEXT["Default"];

    let matchedKey = Object.keys(SERVICE_MATRIX).find(k => serviceName.includes(k));
    const svcData = matchedKey ? SERVICE_MATRIX[matchedKey] : SERVICE_MATRIX["Default"];

    const l1 = prng.choice(ctx.landmarks);
    const l2 = prng.choice(ctx.landmarks.filter(l => l !== l1)) || prng.choice(ctx.landmarks);
    const l3 = prng.choice(ctx.landmarks.filter(l => l !== l1 && l !== l2)) || prng.choice(ctx.landmarks);

    const w1 = prng.choice(ctx.weathers);
    const w2 = prng.choice(ctx.weathers.filter(w => w !== w1)) || prng.choice(ctx.weathers);

    const t1 = prng.choice(svcData.tech);
    const p1 = prng.choice(svcData.problem);
    const s1 = prng.choice(svcData.solution);
    const b1 = prng.choice(svcData.benefit);

    const template = `
    <h2>{Expert|Professional|Top-Rated|The Premier} ${serviceName} {Services|} in ${city}, Wisconsin</h2>
    <p>{If your property is located near|Whether you own a home near|Operating close to|Servicing homes and businesses near} ${l1} {or anywhere within the greater|or throughout the broader|and across the entire} ${city} {area|region|limits}, you are {heavily familiar with|acutely aware of|no stranger to} the {aggressive|relentless|constant} impacts of ${w1}. {In our volatile local climate|Given the environmental shifts|With these specific weather patterns}, implementing a {highly rigorous|strict and consistent|professional} <strong>${serviceName}</strong> routine is {absolutely vital|crucial|essential} to {protect your structural investments|safeguard your property|defend your exterior} from {catastrophic organic decay|${p1}|costly structural damage}.</p>
    
    <p>{Decades of experience|Years of continuous operation|Our extensive track record} {operating across Wisconsin|working in ${city}|servicing properties near ${l2}} {have definitively proven|shows clearly|demonstrates} that ignoring standard maintenance {inevitably leads to|always results in|causes} {severe material rot|invasive water damage|deeply embedded biological stains}. When ${w2} {actively drives moisture|pushes environmental grime|forces organics} deep into the pores of your exterior surfaces, relying upon {unverified contractors|amateur DIY solutions|untrained workers} only accelerates the degradation. Home and business owners throughout ${city} {specifically demand|require|expect} a {specialized|customized}, {scientifically sound|methodical} approach to exterior {restoration|cleaning|maintenance}.</p>

    <h3>The {Science Behind|Strategy For|Process of} Our Protocol in ${city}</h3>
    <p>Our {operational architecture|specialized approach|proven method} for <strong>${serviceName}</strong> is {meticulously tailored|carefully adapted|customized} to the {exact atmospheric conditions|specific environment|local realities} found in ${city}. The localized environmental fallout—whether that stems from {industrial particles|agricultural dust|coastal humidity|dense tree dropping} near ${l3}—dictates our precise {chemical application|cleaning methodology|approach}. We don't employ generic {"splash and dash" methods|strategies|tactics}; instead, we {formulate custom solutions including|deploy ${t1} and|utilize ${t1} to ensure we are} actively targeting the exact strains of {moss, algae, and grime|dirt and organic matter} indigenous to your specific neighborhood.</p>

    <p>{For example, taking into account|Considering|Dealing with} the constant environmental pressure from ${w1}, we specifically {deploy robust neutralizing agents|focus on ${s1}|implement safe washing techniques} that {dissolve organic root systems|safely clean surfaces|extract the mess} without requiring ultra-high-pressure mechanical forcing. Using {dangerous|damaging|reckless} high-pressure wands indiscriminately can {literally strip the structural integrity|permanently void warranties|cause massive damage}. We completely avoid those {massive liabilities|risks|dangers} by {defaulting to superior, eco-safe applications|focusing on the proper ${t1} methodology|using our advanced training} wherever structurally mandated.</p>

    <h3>{Long-Term Financial Protection|Massive ROI and Curb Appeal|Boosting Value and Aesthetics}</h3>
    <p>{Executing a proper|Investing in professional|Committing to routine} <strong>${serviceName}</strong> {vastly improves your real estate value|instantly boosts curb appeal|protects your investment} while extending the lifespan of your exterior substrates by decades. Properties located near prime commercial zones or historic residential sectors like ${l1} recognize massive ROI when their {facades, concrete flatwork, and roofing systems|exteriors} are {immaculately restored|properly cleaned|maintained}. Whether you manage a {sprawling commercial complex|secluded residential estate|local storefront}, preventing the buildup of corrosive algae and freeze-thaw water damage is the {single highest-yielding investment|best choice|smartest maintenance decision} you can make this season. You will immediately enjoy the benefit of ${b1}.</p>

    <p>{Furthermore|Additionally|Moreover}, standardizing your maintenance reduces the frequency of necessary interventions. When we apply our {proprietary agents|specialized detergents} during the cleaning process, {invisible barriers are formed|we create optimal conditions} that {significantly delay the return of green surface algae|stop organic regrowth|keep surfaces cleaner}, providing your ${city} property with an extended window of flawless presentation.</p>

    <h3>{Why Trust Our Local Specialized Technicians?|Your Dedicated Local Cleaning Experts|The Trusted Choice in ${city}}</h3>
    <p>There is absolutely {no substitute for|nothing better than} geographic familiarity and proven local expertise. Because we operate constantly within the ${city} grid, we precisely understand the {unique architectural features|specific building materials|intricate layouts}—from delicate historic masonry to modern polymer sidings—that populate this region. Our {elite technicians|professional crews|dedicated staff} are {exhaustively trained, fully insured professionals|experts} who prioritize {environmental stewardship|safety|quality}. Every droplet of our detergent payload is {radically biodegradable|eco-friendly}, ensuring that your {expensive manicured landscaping|local pets|property} and the broader water table remain entirely {untouched and pristine|safe}.</p>
    
    <p>By scheduling your {comprehensive|professional|expert} <strong>${serviceName}</strong> today, you are actively choosing the {safest, most technologically advanced|best|most reliable} exterior restoration provider completely dedicated to the long-term protection of the ${city} community.</p>
    `;

    return parseSpintax(template, prng);
}

const CONTACT_FORM_HTML = `
    <!-- Conversion Hook -->
    <div class="my-12 bg-navy text-center py-12 px-8 md:px-12 rounded-2xl shadow-xl border border-gold/40 flex flex-col items-center justify-center">
        <h3 class="text-3xl md:text-4xl font-extrabold !text-[#FFFFFF] mb-4 tracking-tight w-full">Protect Your Investment Today</h3>
        <p class="!text-[#FFFFFF] text-lg md:text-xl mb-8 max-w-2xl mx-auto w-full leading-relaxed opacity-95">Contact the verified exterior cleaning professionals right now for a secure, hassle-free evaluation of your property.</p>
        <a href="tel:920-609-7085" class="inline-flex items-center justify-center gap-3 !bg-gold !text-navy font-bold text-2xl py-5 px-10 md:px-14 rounded-full hover:!bg-white transition-all shadow-[0_0_25px_rgba(234,179,8,0.3)] transform hover:-translate-y-1 max-w-xs w-full sm:w-auto">
            Call (920) 609-7085
        </a>
    </div>
`;

// Global scramble function for absolute uniqueness
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

async function createSyntheticImage(serviceName, city, destPath, width, height) {
    const truckPath = path.join(process.cwd(), 'public', 'ai-base-assets', 'van-cutout.png');

    // Create an SVG text overlay buffer for the phone number
    const svgText = `
        <svg width="${width}" height="${height}">
            <rect x="20" y="${height - 120}" width="650" height="100" fill="rgba(27, 54, 93, 0.85)" rx="15" ry="15"/>
            <text x="40" y="${height - 55}" font-family="Arial, sans-serif" font-size="42" font-weight="bold" fill="#FACC15">
                Valley Window Care - (920) 609-7085
            </text>
        </svg>
    `;
    const svgBuffer = Buffer.from(svgText);

    try {
        // Strict Category Match Mapping
        const serviceQueries = {
            "Roof Cleaning": "roof cleaning washing scaffolding safety",
            "House Washing": "house siding cleaning pressure washing exterior",
            "Gutter Cleaning": "technician ladder gutter cleaning roof",
            "Concrete Cleaning": "surface cleaner driveway pressure washing concrete",
            "Window Cleaning": "professional window cleaning squeegee glass -lawn -grass",
            "Christmas Lighting": "installing holiday christmas lights exterior roof",
            "Pressure Washing": "pressure washer water spray cleaning concrete technician",
            "Residential Permanent LED Lighting": "architectural exterior lighting installation led roof",
            "Fence Cleaning": "cleaning wood fence pressure washing",
            "Deck Cleaning": "wood deck cleaning pressure washing patio",
            "Oxidation Removal": "restoring siding cleaning exterior house",
            "Building Washing": "commercial building exterior pressure washing",
            "Dumpster Pad Cleaning": "industrial commercial cleaning pressure washing concrete",
            "Permanent LED Lighting": "commercial exterior architectural lighting led",
            "Commercial Roof Cleaning": "flat commercial roof cleaning industrial",
            "Commercial Pressure Washing": "commercial industrial pressure washing surface",
            "Graffiti Removal": "cleaning graffiti brick wall pressure washing",
            "HOA Services": "neighborhood exterior maintenance pressure washing",
            "Storefront Cleaning": "commercial storefront glass window cleaning",
            "Premium Drive-Thru Cleaning": "drive thru lane concrete pressure washing",
            "Parking Lot & Garage Cleaning": "parking garage concrete pressure washing",
            "Chewing Gum Removal": "concrete surface cleaning pressure washing sidewalk",
            "Professional Awning Cleaning": "commercial awning fabric cleaning exterior",
            "Gas Station Cleaning": "gas station concrete pressure washing industrial",
            "Post Construction Cleanup": "construction site cleanup exterior commercial",
            "Paver Patio Restorations": "brick paver patio cleaning pressure washing",
            "Hood Vent Cleaning": "industrial commercial kitchen hood exhaust vent cleaning"
        };

        const strictQuery = serviceQueries[serviceName] || `technician ${serviceName}`;
        const query = encodeURIComponent(strictQuery);
        let res, data, imgUrl;

        for (let attempt = 1; attempt <= 3; attempt++) {
            console.log(`[Attempt ${attempt}] Generating Category Explicit AI Image: ${serviceName} in ${city} via Unsplash... [Query: ${strictQuery}]`);
            res = await fetch(`https://unsplash.com/napi/search/photos?query=${query}&per_page=10&page=${Math.floor(Math.random() * 5) + 1}`);
            if (res.ok) {
                data = await res.json();
                if (data && data.results && data.results.length > 0) {
                    const randomChoice = data.results[Math.floor(Math.random() * data.results.length)];
                    imgUrl = randomChoice.urls.raw + '&w=1920&q=80';
                    break;
                }
            }
            if (attempt === 3) throw new Error("API failure after 3 attempts");
            await new Promise(r => setTimeout(r, 2000));
        }

        if (!imgUrl) throw new Error("Unsplash returned no results.");

        const imgRes = await fetch(imgUrl);
        const bgBuffer = await imgRes.arrayBuffer();

        await sharp(Buffer.from(bgBuffer))
            .resize(width, height, { fit: 'cover' })
            .composite([
                { input: truckPath, gravity: 'northeast', blend: 'over' }, // Logo truck overlay
                { input: svgBuffer, top: 0, left: 0 } // Phone Number Banner
            ])
            .webp({ quality: 85 })
            .toFile(destPath);

    } catch (e) {
        console.log(`CRITICAL GENERATION OUTAGE: Unsplash missed ${serviceName} in ${city}. Synthesizing from internal authentic grid proxy...`);
        const randomFallback = global.fallbackPool[Math.floor(Math.random() * global.fallbackPool.length)];
        const fallbackPath = path.join(process.cwd(), 'public', 'gallery', randomFallback);
        await sharp(fallbackPath)
            .resize(width, height, { fit: 'cover' })
            .composite([
                { input: truckPath, gravity: 'northeast', blend: 'over' },
                { input: svgBuffer, top: 0, left: 0 }
            ])
            .webp({ quality: 85 })
            .toFile(destPath);
    }
}



async function executeGeoRestore() {
    console.log("Staging geographic parameters...");
    let allPages = [];
    let auditCounts = { local: 0, ai: 0 };

    for (const city of CITIES) {
        const citySlug = city.toLowerCase().replace(/ /g, '-');

        // 1. City Hub Page
        let contentHub = generate600WordText(city, "Comprehensive Exterior Cleaning");
        contentHub += CONTACT_FORM_HTML;

        allPages.push({
            id: `hub-${citySlug}`,
            city: city,
            citySlug: citySlug,
            service: null,
            serviceSlug: null,
            type: "hub",
            title: `Professional Exterior Cleaning in ${city}, WI`,
            content: contentHub,
            category: "City Hub",
            altText: `Comprehensive Exterior Cleaning in ${city}, WI - Valley Window Care`
        });

        // 2. Service Pages (27 Services)
        for (const svc of SERVICES) {
            let contentSvc = generate600WordText(city, svc.name);
            contentSvc += CONTACT_FORM_HTML;

            allPages.push({
                id: `svc-${citySlug}-${svc.slug}`,
                city: city,
                citySlug: citySlug,
                service: svc.name,
                serviceSlug: svc.slug,
                type: "service",
                title: `${svc.name} in ${city}, WI`,
                content: contentSvc,
                category: svc.category,
                altText: `${svc.name} in ${city}, WI - Valley Window Care`
            });
        }
    }

    // --- CONTEXTUAL IMAGE RESTORATION (RULE OF 3) ---
    console.log("Analyzing local media assets...");
    const scrapeDir = path.join(process.cwd(), 'public', 'live-scraped');
    const syncDir = path.join(process.cwd(), 'public', 'synthetic-cache');

    if (!fs.existsSync(syncDir)) fs.mkdirSync(syncDir, { recursive: true });

    let authenticPool = {};
    if (fs.existsSync(scrapeDir)) {
        fs.readdirSync(scrapeDir).forEach(folder => {
            const fullFolder = path.join(scrapeDir, folder);
            if (fs.statSync(fullFolder).isDirectory()) {
                authenticPool[folder.replace(':', '')] = [];
                fs.readdirSync(fullFolder).forEach(file => {
                    const ext = path.extname(file).toLowerCase();
                    const b = file.toLowerCase();
                    const isBanned = ['logo', 'lake', 'packaging', 'placeholder', 'upscale', 'bg'].some(ban => b.includes(ban));
                    if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext) && !isBanned) {
                        authenticPool[folder.replace(':', '')].push(`/live-scraped/${folder}/${file}`);
                    }
                });
            }
        });
    }

    const scratchOrganizedDir = path.join(process.cwd(), '.antigravity', 'scratch', 'organized-media');
    const publicOrganizedDir = path.join(process.cwd(), 'public', 'organized-media');
    let organizedPool = {};

    if (fs.existsSync(scratchOrganizedDir)) {
        if (!fs.existsSync(publicOrganizedDir)) fs.mkdirSync(publicOrganizedDir, { recursive: true });
        fs.cpSync(scratchOrganizedDir, publicOrganizedDir, { recursive: true });

        fs.readdirSync(publicOrganizedDir).forEach(folder => {
            const fullFolder = path.join(publicOrganizedDir, folder);
            if (fs.statSync(fullFolder).isDirectory()) {
                organizedPool[folder.replace(':', '')] = [];
                fs.readdirSync(fullFolder).forEach(file => {
                    const ext = path.extname(file).toLowerCase();
                    const b = file.toLowerCase();
                    const isBanned = ['logo', 'lake', 'packaging', 'placeholder', 'upscale', 'bg'].some(ban => b.includes(ban));
                    if (['.webp', '.jpg', '.jpeg', '.png'].includes(ext) && !isBanned) {
                        organizedPool[folder.replace(':', '')].push(`/organized-media/${folder}/${file}`);
                    }
                });
            }
        });
    }

    // NEW SHUFFLE BLOCK TO SCRAMBLE ALL ASSIGNMENTS GLOBALLY
    for (let key in authenticPool) shuffleArray(authenticPool[key]);
    for (let key in organizedPool) shuffleArray(organizedPool[key]);

    let usageCounts = {};

    for (let i = 0; i < allPages.length; i++) {
        const page = allPages[i];
        let assignedImage = null;

        // Stage 1: Primary Authority Scraping matching Service Category
        if (page.serviceSlug) {
            let matchedCategory = Object.keys(authenticPool).find(k => k !== 'deep-pool' && (page.serviceSlug.includes(k) || k.includes(page.serviceSlug) || (k === 'permanent-lighting' && page.serviceSlug.includes('lighting'))));

            if (matchedCategory && authenticPool[matchedCategory].length > 0) {
                for (let img of authenticPool[matchedCategory]) {
                    usageCounts[img] = usageCounts[img] || 0;
                    if (usageCounts[img] < 3) {
                        assignedImage = img;
                        usageCounts[img]++;
                        auditCounts.local++;
                        break;
                    }
                }
            }
        }

        // Stage 1 Fallback: Generic 'deep-pool' authentic photos scraped site-wide
        if (!assignedImage && authenticPool['deep-pool'] && authenticPool['deep-pool'].length > 0) {
            for (let img of authenticPool['deep-pool']) {
                usageCounts[img] = usageCounts[img] || 0;
                if (usageCounts[img] < 3) {
                    assignedImage = img;
                    usageCounts[img]++;
                    auditCounts.local++;
                    break;
                }
            }
        }

        // Stage 2: Organized Folder Content (.antigravity/scratch/organized-media)
        if (!assignedImage && page.serviceSlug) {
            let matchedCategory = Object.keys(organizedPool).find(k => page.serviceSlug.includes(k) || k.includes(page.serviceSlug) || (k === 'permanent-lighting' && page.serviceSlug.includes('lighting')));

            if (matchedCategory && organizedPool[matchedCategory].length > 0) {
                for (let img of organizedPool[matchedCategory]) {
                    usageCounts[img] = usageCounts[img] || 0;
                    if (usageCounts[img] < 3) {
                        assignedImage = img;
                        usageCounts[img]++;
                        auditCounts.local++; // Still counts as local authentic
                        break;
                    }
                }
            }
        }

        // Global Final Fallback: Traverse all known authentic pools for ANY image under 3 uses
        if (!assignedImage) {
            let finalFallbackImage = null;
            const allPools = [...Object.values(authenticPool), ...Object.values(organizedPool)].flat();
            for (let img of allPools) {
                usageCounts[img] = usageCounts[img] || 0;
                if (usageCounts[img] < 3) {
                    finalFallbackImage = img;
                    usageCounts[img]++;
                    auditCounts.local++;
                    break;
                }
            }

            if (finalFallbackImage) {
                assignedImage = finalFallbackImage;
            }
        }

        // Final Assignment: Authentic under limit vs. Generative Contextual AI
        if (assignedImage) {
            allPages[i].headerImage = assignedImage;
        } else {
            const safeTitle = page.title.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '-').toLowerCase();
            // Inject -uid suffix to ensure absolutely zero URL caching conflicts across site pages.
            const aiFileName = `ai-${safeTitle}-${Date.now()}-${i}-uid.webp`;
            const absolutePath = path.join(syncDir, aiFileName);

            allPages[i].headerImage = `/synthetic-cache/${aiFileName}`;
            auditCounts.ai++;
            if (!global.generationQueue) global.generationQueue = [];
            global.generationQueue.push(async () => {
                await createSyntheticImage(page.service || 'Comprehensive Exterior Cleaning', page.city, absolutePath, 1920, 1080);
            });
        }
    }

    if (global.generationQueue && global.generationQueue.length > 0) {
        console.log(`Processing High-Concurrency AI Generation Queue: ${global.generationQueue.length} items...`);
        const chunkSize = 5;
        for (let j = 0; j < global.generationQueue.length; j += chunkSize) {
            process.stdout.write(`\nGenerating batch ${Math.floor(j / chunkSize) + 1} of ${Math.ceil(global.generationQueue.length / chunkSize)}...`);
            const chunk = global.generationQueue.slice(j, j + chunkSize);
            await Promise.all(chunk.map(fn => fn()));
            // Give the API a brief moment to breathe between batches
            await new Promise(r => setTimeout(r, 1500));
        }
        console.log("\nQueue processing complete!");
    }

    fs.writeFileSync(OUTPUT_JSON_PATH, JSON.stringify(allPages, null, 2), 'utf8');

    console.log(`\n=== STAGED REWRITE METRICS ===`);
    console.log(`Successfully precision migrated ${allPages.length} geographic entries.`);
    console.log(`Local Authentic Assets Slotted: ${auditCounts.local}`);
    console.log(`Generative Contextual AI Created: ${auditCounts.ai}`);
    console.log(`======================`);
    console.log(`======================`);
}

executeGeoRestore().catch(console.error);
