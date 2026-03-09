import fs from 'fs';
import { cityData } from './src/data/cityData.js';

const dbPath = './src/data/serviceAreasContent.json';
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Variation Functions utilizing the contextual landmarks and conditions
const generateRust = (cityEntry) => {
    return [
        {
            subtitle: "Cosmetic Iron Restoration",
            p1: `In ${cityEntry.name}, frequent heavy rains and localized water sources like ${cityEntry.landmark} lead to aggressive iron oxidation on residential siding and surrounding concrete surfaces. Eradicating these bright orange blemishes not only preserves the structural integrity of your property but instantly restores your home’s aesthetic value.`,
            p2: `We use professional-grade restoration acids to safely remove hard-water stains and fertilizer burns from your ${cityEntry.name} property, directly combatting the ${cityEntry.condition}.`
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
            p2: `Safely blast away deep oil, grease, tire mark grime, and slippery algae from your walking surfaces. Using our professional-grade rotary surface cleaners, we ensure a perfectly uniform, deep clean for your ${cityEntry.name} driveway.`
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


fs.writeFileSync('./src/data/cityData.js', `export const expandedContextData = ${JSON.stringify(
  cityData.map(c => ({
    citySlug: c.slug,
    rustRemoval: generateRust(c),
    softWash: generateSoft(c),
    driveway: generateDriveway(c),
    solar: generateSolar(c),
    awning: generateAwning(c)
  })), null, 2
)};\n`);

console.log("Written variation matrix to cityData.js");
