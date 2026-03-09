import React, { ReactNode } from 'react';
import Link from 'next/link';

// --- HASHING UTILITY ---
const getStringHash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
};

// --- P-SEO ENUMS & CATEGORIES ---
export type ServiceCategory = 'OutdoorResidential' | 'OutdoorCommercial' | 'IndoorCommercial';

export const categorizeService = (serviceSlug: string): ServiceCategory => {
    const indoorCommercial = [
        "commercial-hood-cleaning", "commercial-hood-vent", "hood-vent-cleaning",
        "post-construction-cleanup"
    ];

    const outdoorCommercial = [
        "building-washing", "dumpster-pad-cleaning", "permanent-led-lighting",
        "commercial-roof-cleaning", "commercial-pressure-washing", "graffiti-removal",
        "hoa-multi-unit-cleaning", "storefront-cleaning", "premium-drive-thru-cleaning",
        "parking-lot-and-garage-cleaning", "chewing-gum-removal", "commercial-awning-cleaning",
        "gas-station-cleaning", "paver-patio-restorations", "apartment-exterior-cleaning",
        "commercial-awning"
    ];

    if (indoorCommercial.includes(serviceSlug)) return 'IndoorCommercial';
    if (outdoorCommercial.includes(serviceSlug)) return 'OutdoorCommercial';
    return 'OutdoorResidential'; // Default for house washing, roof cleaning, etc.
};

// --- CONTEXTUAL ASSETS & STRINGS ---

const geoModifiers = {
    OutdoorResidential: [
        "Wisconsin's harsh winter freeze-thaw cycles",
        "the unpredictable Fox Valley weather",
        "Northeast Wisconsin's extreme seasonal shifts",
        "blistering summer UV rays and heavy snow",
        "regional environmental elements"
    ],
    OutdoorCommercial: [
        "the toll of Wisconsin weather on commercial properties",
        "Northeast Wisconsin's challenging climate variations",
        "relentless Fox Valley elements",
        "seasonal grime and traffic wear",
        "local environmental buildup"
    ],
    IndoorCommercial: [
        "strict NFPA fire compliance standards",
        "rigorous local health inspection requirements",
        "high-volume commercial kitchen demands",
        "critical safety regulations",
        "industry-standard hygiene expectations"
    ]
};

const problemStatements = {
    OutdoorResidential: [
        "Over time, mold, algae, and persistent grime break down exterior surfaces.",
        "Dirt and organic growth don't just look bad—they actively degrade property value.",
        "Left untreated, environmental buildup causes permanent structural damage."
    ],
    OutdoorCommercial: [
        "First impressions dictate customer trust. A dirty exterior instantly damages brand reputation.",
        "Heavy foot traffic and daily operations leave behind stains that compromise professionalism.",
        "An unkempt exterior is a major liability that deters potential clients."
    ],
    IndoorCommercial: [
        "Grease accumulation is the number one cause of sudden, catastrophic fires.",
        "Failing a health inspection due to inadequate cleaning can shut down operations immediately.",
        "Standard janitorial services cannot safely remove dangerous, hardened exhaust grease."
    ]
};

const actionVerbs = [
    "engineered", "optimized", "specifically calibrated", "tailored", "strategically developed"
];

// --- GENERATION ENGINE ---

const GenerateLinks = (city: string, serviceSlug: string, serviceName: string) => {
    return {
        CityHub: <Link href={`/service-areas/${city}`} className="text-navy font-bold hover:text-gold transition-colors underline decoration-gold/30 underline-offset-2">{formatTitle(city)}</Link>,
        MasterService: <Link href={`/services/${serviceSlug}`} className="text-navy font-bold hover:text-gold transition-colors underline decoration-gold/30 underline-offset-2">{serviceName}</Link>,
        ContactForm: <Link href="/#quote-form" className="text-navy font-bold hover:text-gold transition-colors underline decoration-gold/30 underline-offset-2">contact us</Link>
    };
};

const formatTitle = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

/**
 * Dynamically assembles a rich HTML paragraph utilizing different structural components (Context, Problem, Solution, Links).
 */
export const generatePseoDescription = (citySlug: string, serviceSlug: string, serviceName: string): ReactNode => {
    const seed = getStringHash(citySlug + serviceSlug);
    const category = categorizeService(serviceSlug);
    const links = GenerateLinks(citySlug, serviceSlug, serviceName);

    // Select assets based on category and seed
    const context = geoModifiers[category][seed % geoModifiers[category].length];
    const problem = problemStatements[category][(seed + 1) % problemStatements[category].length];
    const verb = actionVerbs[(seed + 2) % actionVerbs.length];

    // Structural Variation Logic
    const variationType = seed % 3;

    if (variationType === 0) {
        // Variant A: Problem -> Agitate -> Solve + Links
        return (
            <span>
                {problem} When dealing with {context}, standard maintenance isn't enough. Our {links.MasterService} operations are {verb} to protect your property. We understand {links.CityHub} properties require dedicated care, which is why we deliver results that last. Ready to upgrade your facility? Please {links.ContactForm} today.
            </span>
        );
    } else if (variationType === 1) {
        // Variant B: Authority -> Solve -> Local Assure -> Links
        return (
            <span>
                Rely on our local expertise. We have {verb} our {links.MasterService} routines specifically to combat {context}. {problem} Our teams run routes through the {links.CityHub} area daily, ensuring top-tier reliability. Don't wait for damage to occur—{links.ContactForm} for a prompt evaluation.
            </span>
        );
    } else {
        // Variant C: Outcome -> Problem -> Links
        return (
            <span>
                Protecting your investment against {context} requires professional precision. {problem} That's why our custom {links.MasterService} is {verb} for maximum effectiveness and safety. Serving the entire {links.CityHub} community, we guarantee satisfaction. You can quickly {links.ContactForm} to schedule your service.
            </span>
        );
    }
};

/**
 * Generates dynamically varied and contextually appropriate bullet points without relying on the base JSON.
 */
export const generatePseoBenefits = (citySlug: string, serviceSlug: string, serviceName: string): ReactNode[] => {
    const seed = getStringHash(citySlug + serviceSlug);
    const category = categorizeService(serviceSlug);

    if (category === 'IndoorCommercial') {
        const indoorBase = [
            "Ensures full NFPA 96 fire code compliance.",
            "Eliminates dangerous class-A fire hazards.",
            "Passes local health and safety inspections effortlessly.",
            "Improves HVAC efficiency and air quality.",
            "Provides a safe environment for your staff and customers."
        ];
        // Scramble order based on seed
        return indoorBase.sort(() => 0.5 - (seed % 10) / 10).slice(0, 3).map((text, i) => (
            <span key={i}>{text} Guaranteed in {formatTitle(citySlug)}.</span>
        ));
    }

    if (category === 'OutdoorCommercial') {
        const commercialOutBase = [
            "Instantly elevates neighborhood curb appeal.",
            "Removes liabilities like slippery algae and dangerous grime.",
            "Protects expensive exterior structural investments.",
            "Invites customers with a pristine, professional storefront.",
            "Eliminates biological growth before permanent damage occurs."
        ];
        return commercialOutBase.sort(() => 0.5 - (seed % 10) / 10).slice(0, 3).map((text, i) => (
            <span key={i}>{text} A necessity for {formatTitle(citySlug)} businesses.</span>
        ));
    }

    // Default OutdoorResidential
    const residentialBase = [
        "Restores your home's original beauty safely.",
        "Prevents costly premature roof and siding replacements.",
        "Eradicates harmful moss, algae, and lichen.",
        "Significantly boosts property resale value.",
        "Utilizes safe, low-pressure techniques to protect materials."
    ];
    return residentialBase.sort(() => 0.5 - (seed % 10) / 10).slice(0, 3).map((text, i) => (
        <span key={i}>{text} Perfect for {formatTitle(citySlug)} weather conditions.</span>
    ));
};

/**
 * Generates dynamically varied execution methodology.
 */
export const generatePseoProcess = (citySlug: string, serviceSlug: string, serviceName: string): ReactNode[] => {
    const seed = getStringHash(citySlug + serviceSlug);
    const category = categorizeService(serviceSlug);

    const processPrefixes = [
        `Our local ${formatTitle(citySlug)} crew`,
        `The Valley Window Care team`,
        `Our specialized technicians`
    ];
    const prefix = processPrefixes[seed % processPrefixes.length];

    if (category === 'IndoorCommercial') {
        return [
            <span key="1"><strong>1. Detailed Safety Audit:</strong> {prefix} begins by evaluating the entire grease containment system to identify high-risk zones.</span>,
            <span key="2"><strong>2. Strict Remediation:</strong> We utilize specialized chemicals to dissolve hardened grease down to bare metal, adhering to all codes.</span>,
            <span key="3"><strong>3. Certification verification:</strong> We provide comprehensive reporting and compliance tagging for your records post-cleaning.</span>
        ];
    } else {
        return [
            <span key="1"><strong>1. Thorough Site Inspection:</strong> {prefix} evaluates the property to identify vulnerable areas and optimal cleaning solutions.</span>,
            <span key="2"><strong>2. Professional Execution:</strong> We apply proprietary, safe treatments engineered specifically for the materials involved.</span>,
            <span key="3"><strong>3. Quality Assurance:</strong> We perform a rigorous final walkthrough to guarantee results that exceed your expectations.</span>
        ];
    }
};
