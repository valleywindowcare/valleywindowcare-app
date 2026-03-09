import fs from 'fs';

const cityData = [
  { slug: "green-bay", name: "Green Bay", landmark: "Lambeau Field and the Fox River", condition: "heavy bay-effect moisture driving destructive mold and algae growth on siding" },
  { slug: "appleton", name: "Appleton", landmark: "the Fox Cities Performing Arts Center and historic downtown", condition: "dense urban exhaust and river humidity accelerating siding oxidation" },
  { slug: "oshkosh", name: "Oshkosh", landmark: "Lake Winnebago and the EAA Aviation Museum", condition: "relentless lake-effect humidity and seasonal midge swarms that leave baked-on organic matter" },
  { slug: "door-county", name: "Door County", landmark: "the shores of Lake Michigan and Green Bay", condition: "heavy forestation, pine needle accumulation, and coastal moisture accelerating Gloeocapsa magma (black roof streaks)" },
  { slug: "neenah", name: "Neenah", landmark: "Lake Winnebago and Riverside Park", condition: "constant lake breezes bringing unpredictable moisture and aggressive localized algae colonization" },
  { slug: "menasha", name: "Menasha", landmark: "the Fox River and Doty Island", condition: "riverfront humidity accelerating mildew and deep concrete staining" },
  { slug: "de-pere", name: "De Pere", landmark: "St. Norbert College and the Fox River trail", condition: "rapid freeze-thaw cycles near the water causing micro-fractures and moss on shaded exteriors" },
  { slug: "suamico", name: "Suamico", landmark: "the NEW Zoo and Bay Beach", condition: "dense wooded canopies pushing organics and sap deep into porous exterior materials" },
  { slug: "howard", name: "Howard", landmark: "the Mountain Bay Trail and surrounding wetlands", condition: "high environmental humidity promoting aggressive, rapid-spreading lichen on roofs" },
  { slug: "bellevue", name: "Bellevue", landmark: "Highway 172 and local commercial districts", condition: "high-traffic dust and suburban runoff compounding standard weather-related grime" },
  { slug: "ashwaubenon", name: "Ashwaubenon", landmark: "the Resch Center and surrounding retail zones", condition: "heavy commercial fallout and urban particulate settling on high-visibility storefronts" },
  { slug: "allouez", name: "Allouez", landmark: "Heritage Hill State Park and historic neighborhoods", condition: "mature tree canopies restricting UV light, leading to chronic moss and algae issues on older siding" },
  { slug: "hobart", name: "Hobart", landmark: "Centennial Centre and local golf courses", condition: "open-field wind exposure driving agricultural dust and heavy spring pollen into siding seams" },
  { slug: "little-chute", name: "Little Chute", landmark: "the Fox River and the historic Windmill", condition: "river humidity combining with industrial dust to form stubborn, acidic stains" },
  { slug: "kaukauna", name: "Kaukauna", landmark: "the 1000 Islands Environmental Center", condition: "airborne industrial particles and river moisture creating a corrosive exterior film" },
  { slug: "kimberly", name: "Kimberly", landmark: "Sunset Park and the Fox River", condition: "persistent moisture driving invasive algae deep into concrete and roofing materials" },
  { slug: "combined-locks", name: "Combined Locks", landmark: "the nearby locks and paper mills", condition: "localized industrial fallout mixing with river humidity to degrade exterior paint" },
  { slug: "wrightstown", name: "Wrightstown", landmark: "the Fox River bridge and rural outskirts", condition: "aggressive agricultural dust and fertilizer runoff accelerating surface rust" },
  { slug: "greenville", name: "Greenville", landmark: "Appleton International Airport and surrounding farmlands", condition: "heavy agricultural dust and aviation fallout settling uniformly on large roofs" },
  { slug: "fish-creek", name: "Fish Creek", landmark: "Peninsula State Park and the harbor", condition: "coastal saltwater spray and deep forest canopy shade promoting intense fungal growth" },
  { slug: "sister-bay", name: "Sister Bay", landmark: "the marina and bustling waterfront", condition: "heavy nautical moisture and gull droppings causing rapid degradation of fabrics and siding" },
  { slug: "sturgeon-bay", name: "Sturgeon Bay", landmark: "the shipping canal and historic maritime zones", condition: "industrial marine fallout and heavy coastal fog driving mold deep into architectural features" },
  { slug: "egg-harbor", name: "Egg Harbor", landmark: "the village marina and local orchards", condition: "agricultural pollen and bay moisture creating perfect petri-dish conditions for lichen" },
  { slug: "ephraim", name: "Ephraim", landmark: "Eagle Harbor and the historic moravian church", condition: "constant coastal winds driving acidic moisture into delicate historic siding" },
  { slug: "algoma", name: "Algoma", landmark: "the Lake Michigan shoreline and historic lighthouse", condition: "relentless lake-effect weather driving freezing moisture and algae into porous materials" },
  { slug: "kewaunee", name: "Kewaunee", landmark: "the harbor and large agricultural zones", condition: "agricultural dust combining with massive lake moisture to cause rapid surface oxidation" },
  { slug: "two-rivers", name: "Two Rivers", landmark: "Neshotah Beach and Lake Michigan", condition: "heavy lake effect snow and summer humidity accelerating brick spalling and siding mold" },
  { slug: "manitowoc", name: "Manitowoc", landmark: "the SS Badger port and Lake Michigan shoreline", condition: "marine moisture and harsh coastal winds forcing corrosive elements into structural joints" },
  { slug: "sherwood", name: "Sherwood", landmark: "High Cliff State Park and Lake Winnebago", condition: "massive seasonal midge hatches and dense forest humidity ruining exterior aesthetics" },
  { slug: "shawano", name: "Shawano", landmark: "Shawano Lake and surrounding woodlands", condition: "heavy lake moisture and dense pine canopies dropping corrosive sap onto roofing systems" },
  { slug: "ledgeview", name: "Ledgeview", landmark: "the Niagara Escarpment and local golf courses", condition: "high-elevation wind exposure driving hard water and agricultural dust into siding" }
];

const generateRust = (cityEntry) => {
    return [
        {
            subtitle: "Cosmetic Iron Restoration",
            p1: `In ${cityEntry.name}, frequent heavy rains and localized water sources like ${cityEntry.landmark} lead to aggressive iron oxidation on residential siding and surrounding concrete surfaces. Eradicating these bright orange blemishes not only preserves the structural integrity of your property but instantly restores your home’s aesthetic value.`,
            p2: `We use professional-grade restoration acids to safely remove hard-water stains and fertilizer burns from your ${cityEntry.name} property, directly combatting the ${cityEntry.condition} that regular pressure washing absolutely cannot touch.`
        },
        {
            subtitle: "Preventative Structural Care",
            p1: `Unchecked rust and battery acid runoff can severely degrade concrete driveways and discolor vinyl siding across ${cityEntry.name}. The localized environmental pressure—specifically the ${cityEntry.condition} near ${cityEntry.landmark}—accelerates this decay.`,
            p2: `Rely on our commercial-grade rust eradication protocols to safely lift hard-water stains from your ${cityEntry.name} home without relying on dangerous high-pressure wands.`
        },
        {
            subtitle: "Targeted Blemish Eradication",
            p1: `Properties located near ${cityEntry.landmark} often suffer from aggressive, localized iron oxidation that ruins curb appeal. We deploy highly targeted, neutralizing agents specifically engineered to dissolve iron bonds without compromising delicate landscaping or exterior paint.`,
            p2: `Combat the effects of ${cityEntry.condition} by restoring the original beauty of your ${cityEntry.name} concrete flatwork utilizing our proprietary, low-pressure rust mitigation process.`
        }
    ];
};

const generateSoft = (cityEntry) => {
    return [
         {
            subtitle: "Safe Organic Destruction",
            p1: `The volatile weather patterns near ${cityEntry.landmark} create the perfect breeding ground for destructive algae and lichen on delicate siding. Our specialized soft washing neutralizes these invasive organic threats, especially the ${cityEntry.condition}, without applying dangerous high pressure.`,
            p2: `Protect your delicate siding, paint, and trim from the harsh, destructive impact of high-pressure washing. Our Soft Wash system utilizes safe, eco-friendly detergents to completely break down and kill organic growth at its source, keeping your ${cityEntry.name} exterior cleaner for much longer.`
        },
        {
            subtitle: "Gentle Mold Remediation",
            p1: `High pressure washing can easily force water behind your siding panels, promoting hidden black mold growth—a massive risk given the ${cityEntry.condition} common near ${cityEntry.landmark}. We exclusively rely on our advanced Soft Wash methodology to melt away dense fungal blooms.`,
            p2: `Ensure maximum longevity for your ${cityEntry.name} property with our biodegradable, low-PSI cleaning solutions that completely sanitize your exterior walls safely.`
        },
        {
            subtitle: "Damage-Free Exterior Sanitization",
            p1: `Vinyl, stucco, and wood-composite materials require careful handling, especially when combating ${cityEntry.condition} in ${cityEntry.name}. Our professional soft washing technique uses specialized detergents to actively break down dirt, pollen, and algae at the cellular level.`,
            p2: `Watch years of deeply embedded environmental grime safely rinse away from your ${cityEntry.name} home, revealing a spotless exterior without risking any mechanical wand damage.`
        }
    ];
};

const generateDriveway = (cityEntry) => {
    return [
        {
            subtitle: "Deep Concrete Degreasing",
            p1: `Wisconsin winters demand heavy salt application, which, combined with the ${cityEntry.condition} found near ${cityEntry.landmark}, severely degrades concrete driveways over time. By combining our commercial-grade surface cleaning with professional degreasers, we extract deeply embedded contaminants.`,
            p2: `Safely blast away deep oil, grease, tire mark grime, and slippery algae from your walking surfaces. Using our professional-grade rotary surface cleaners, we ensure a perfectly uniform, deep clean for your ${cityEntry.name} driveway without leaving any destructive zebra stripes behind.`
        },
        {
             subtitle: "Salt & Algae Mitigation",
             p1: `Seasonal accumulation of automotive fluids and organic algae creates dangerous slip hazards that are only worsened by the ${cityEntry.condition} common throughout ${cityEntry.name}. Our rigorous, multi-step concrete restoration cleans deep into the porous material.`,
             p2: `Protect your expensive ${cityEntry.name} concrete surfaces from premature pitting and severe surface spalling with our high-heat, high-flow driveway cleaning apparatus.`
        },
        {
            subtitle: "Uniform Surface Washing",
             p1: `Standard residential pressure washers lack the raw GPM required to properly flush localized sediment built up near ${cityEntry.landmark}, often leaving terrible 'tiger stripes.' Our calibrated commercial surface cleaners guarantee a perfectly smooth, streak-free concrete restoration.`,
             p2: `Elevate your ${cityEntry.name} curb appeal instantly by safely eradicating years of embedded tire rubber, chemical spills, and dense dirt buildup from your driveway.`
        }
    ];
};

const generateSolar = (cityEntry) => {
    return [
        {
            subtitle: "Maximum UV Ray Penetration",
            p1: `With limited winter sunlight and the effects of ${cityEntry.condition} in ${cityEntry.name}, maximizing your solar panel efficiency is essential. Our pure-water, scratch-free cleaning removes the debris and atmospheric fallout that block vital UV rays.`,
            p2: `We carefully remove the pollen, dust, and bird droppings that block UV rays and reduce efficiency for residential and commercial solar arrays near ${cityEntry.landmark}.`
        },
        {
            subtitle: "Deionized Water Wash",
             p1: `Standard tap water leaves behind hard mineral deposits that can permanently etch photovoltaic cells—a costly mistake near ${cityEntry.landmark}. We strictly utilize a 3-stage deionized pure-water filtration system fed through ultra-soft bristled poles to combat ${cityEntry.condition}.`,
             p2: `Maximize the electrical output of your ${cityEntry.name} solar investment by safely stripping away dense atmospheric smog and localized agricultural dust.`
        },
        {
             subtitle: "Safe Array Maintenance",
             p1: `Working on elevated rooflines to maintain expensive solar equipment in ${cityEntry.name} is dangerous. Our trained technicians navigate the highest-risk exterior zones safely while delivering a flawless, spot-free clean to counteract ${cityEntry.condition}.`,
             p2: `Protect your hardware warranties and boost the ROI of your ${cityEntry.name} residential solar grid with our professional, chemical-free glass cleansing.`
        }
    ];
};

const generateAwning = (cityEntry) => {
    return [
        {
             subtitle: "Commercial Fabric Restoration",
             p1: `Local businesses near ${cityEntry.landmark} face unique aesthetic challenges from harsh winds, road salt spray, and ${cityEntry.condition}. Safely cleaning and restoring commercial awnings revitalizes your storefront's brand image, welcoming customers while preventing premature fabric rot.`,
             p2: `Safely restore commercial fabric, vinyl, and metal awnings using our low-pressure cleaning systems. We meticulously remove bird droppings, mold, and atmospheric fallout that dull your brand identity in ${cityEntry.name}.`
        },
        {
             subtitle: "Atmospheric Fallout Removal",
             p1: `Your commercial storefront serves as the very first impression for potential clients in ${cityEntry.name}. When localized traffic smog and aggressive mold spores settle deep into your exterior awning canvas due to ${cityEntry.condition}, the perceived value of your business temporarily plummets.`,
             p2: `Renew the vibrant colors and structural longevity of your ${cityEntry.name} business awnings with our highly targeted, low-pressure commercial washing protocol.`
        },
        {
             subtitle: "Brand Identity Protection",
             p1: `Neglected exterior awnings near ${cityEntry.landmark} quickly accumulate black streaks and permanent fungal damage because of ${cityEntry.condition}. Our dedicated business-cleaning branch utilizes safe, low-PSI detergents that melt away organic growth without tearing delicate seams.`,
             p2: `Maintain an impeccable, welcoming facade for your ${cityEntry.name} customer base by scheduling our specialized commercial awning restoration service.`
        }
    ];
};

const outputData = {};

cityData.forEach(c => {
  outputData[c.slug] = {
    rustRemoval: generateRust(c),
    softWash: generateSoft(c),
    driveway: generateDriveway(c),
    solar: generateSolar(c),
    awning: generateAwning(c)
  };
});

const outStr = `export const cityContextData = ${JSON.stringify(outputData, null, 2)};\n`;
fs.writeFileSync('./src/data/cityData.ts', outStr);
console.log("Geographic Matrix successfully written to src/data/cityData.ts");
