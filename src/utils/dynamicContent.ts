import { ReactNode } from "react";

// Hash function to guarantee consistent variations per city
const getStringHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
};

// --- COPYWRITING VARIATIONS ---

const climateModifiers = [
    "Northeast Wisconsin's extreme seasonal shifts",
    "the Fox Valley humidity",
    "Wisconsin's harsh winter freeze-thaw cycles",
    "the unpredictable Midwestern weather",
    "regional environmental factors"
];

const actionVerbs = [
    "engineered", "optimized", "tailored", "specifically adapted", "calibrated"
];

const localAssurances = [
    "We understand {city} properties.",
    "Your {city} home deserves dedicated care.",
    "Our teams run routes through {city} daily.",
    "Rely on our local {city} expertise.",
    "We protect investments across {city}."
];

// Helper to extract plain text if the input is a ReactNode
function extractText(node: ReactNode): string {
    if (typeof node === 'string') return node;
    // For this simple generation, if it's a complex ReactNode we'll provide a graceful fallback 
    // rather than doing full React tree traversal on the server side which risks hydration errors.
    return "Professional exterior maintenance.";
}

/**
 * Weaves the city name and service organically into a unique descriptive paragraph.
 */
export function generateLocalDescription(city: string, serviceTitle: string, baseDescription: ReactNode): string {
    const seed = getStringHash(city + serviceTitle);

    // Determine variations based on the seed
    const climate = climateModifiers[seed % climateModifiers.length];
    const verb = actionVerbs[(seed + 1) % actionVerbs.length];
    const assurance = localAssurances[(seed + 2) % localAssurances.length].replace('{city}', city);

    let baseText = extractText(baseDescription);
    // Strip any leading generic "Valley Window Care provides..." if present so we can rebuild it
    baseText = baseText.replace(/^(Valley Window Care|We) (provides|offers) (premium |professional )?(.*?)(\. |\.?$)/i, '');

    // Construct a natural paragraph
    const constructions = [
        `When dealing with ${climate}, standard cleaning isn't enough. Our ${serviceTitle.toLowerCase()} operations are ${verb} to protect your ${city} property. ${baseText} ${assurance}`,
        `${assurance} Our specialized ${serviceTitle.toLowerCase()} is ${verb} to withstand ${climate}. We deliver results that last. ${baseText}`,
        `Protecting surfaces against ${climate} requires expertise. That's why our ${serviceTitle.toLowerCase()} is ${verb} for maximum effectiveness. ${baseText} Serving the entire ${city} community.`
    ];

    return constructions[(seed + 3) % constructions.length];
}

/**
 * Varies the bullet points slightly by injecting localized context into the strings.
 */
export function generateLocalBenefits(baseBenefits: (string | ReactNode)[], city: string, serviceSlug: string): string[] {
    const seed = getStringHash(city + serviceSlug);

    return baseBenefits.map((benefit, index) => {
        let text = extractText(benefit);

        // Randomly add a localized piece to the end of ~1 out of every 3 benefits
        if ((seed + index) % 3 === 0) {
            const additions = [
                ` Ideal for properties in ${city}.`,
                ` Specifically valuable during ${city} summers.`,
                ` A requirement for maintaining property value in the ${city} area.`
            ];
            text += additions[(seed + index) % additions.length];
        }
        return text;
    });
}

/**
 * Adds natural variations to the methodology/process steps.
 */
export function generateLocalProcess(baseProcess: (string | ReactNode)[], city: string, serviceSlug: string): string[] {
    const seed = getStringHash(city + serviceSlug);

    return baseProcess.map((step, index) => {
        let text = extractText(step);

        // Slightly vary the beginning of steps based on the seed
        if ((seed + index) % 4 === 0) {
            text = text.replace(/^We /, `Our ${city} technicians `);
        } else if ((seed + index) % 4 === 1) {
            text = text.replace(/Our team /, `The local ${city} crew `);
        }

        return text;
    });
}
