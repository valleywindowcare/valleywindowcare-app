import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
    ShieldCheck,
    Phone,
    MapPin,
    ArrowRight,
    Sparkles,
    Check,
    Building2,
    DollarSign,
    Layers,
    Droplets,
    Wrench
} from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata: Metadata = {
    title: {
        absolute: "Pressure Washing Green Bay, Appleton & De Pere WI",
    },
    description: "High-pressure surface cleaning for concrete and true low-pressure soft washing for siding. Green Bay, Appleton, De Pere. $0.15-$0.35/sq ft. Free quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/pressure-washing",
    },
    openGraph: {
        title: "Pressure Washing Green Bay, Appleton & De Pere WI",
        description: "High-pressure surface cleaning for concrete and true low-pressure soft washing for siding. Green Bay, Appleton, De Pere. $0.15-$0.35/sq ft. Free quote.",
        url: "https://valleyexteriorpros.com/services/pressure-washing",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/pressure-washing.webp",
                width: 1200,
                height: 630,
                alt: "Pressure Washing in Green Bay, Appleton & De Pere",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Pressure Washing Green Bay, Appleton & De Pere WI",
        description: "High-pressure surface cleaning for concrete and true low-pressure soft washing for siding. Green Bay, Appleton, De Pere. $0.15-$0.35/sq ft. Free quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/pressure-washing.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pressure Washing in Green Bay, Appleton & De Pere",
    "serviceType": "High-Pressure Surface Cleaning & Low-Pressure Soft Washing",
    "description": "High-pressure surface cleaning for concrete and true low-pressure soft washing for siding. Green Bay, Appleton, De Pere. $0.15-$0.35/sq ft. Free quote.",
    "provider": {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://valleyexteriorpros.com/#organization",
        "name": "Valley Property Services",
        "telephone": "920-609-7085",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "462 S Good Hope Rd",
            "addressLocality": "De Pere",
            "addressRegion": "WI",
            "postalCode": "54115"
        }
    },
    "areaServed": [
        { "@type": "City", "name": "Green Bay" },
        { "@type": "City", "name": "Appleton" },
        { "@type": "City", "name": "De Pere" },
        { "@type": "City", "name": "Neenah" },
        { "@type": "City", "name": "Menasha" },
        { "@type": "City", "name": "Kaukauna" },
        { "@type": "City", "name": "Oshkosh" },
        { "@type": "City", "name": "Howard" },
        { "@type": "City", "name": "Suamico" }
    ],
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "200",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "200.00"
        }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pressure Washing & Surface Cleaning Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "High-Pressure Rotary Surface Cleaning (Concrete, Brick & Stone)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Low-Pressure Soft Washing (Vinyl, Dryvit & Wood Siding)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Flatwork, Entryway & Dumpster Pad Cleaning"
                }
            }
        ]
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://valleyexteriorpros.com/"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://valleyexteriorpros.com/services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Pressure Washing",
            "item": "https://valleyexteriorpros.com/services/pressure-washing"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://valleyexteriorpros.com/services/pressure-washing#faq",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Will pressure washing etch or damage my concrete driveway?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It can, and that's usually a technique problem rather than a pressure problem. Damage happens when a handheld wand is used on a large slab: the narrow jet concentrates pressure in one line, and uneven hand speed leaves alternating bands of over-cleaned and under-cleaned concrete once the surface dries. That's the striping you see on a lot of driveways around town. We use an enclosed rotating surface cleaner that applies uniform pressure at a uniform rate across the whole slab. We also drop pressure and lean on pre-treatment for older, softer, or already-spalling concrete, and we inspect and flag existing damage before we start."
            }
        },
        {
            "@type": "Question",
            "name": "How much does pressure washing cost per square foot in Green Bay and Appleton?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pressure washing runs $0.15 to $0.35 per square foot, with a $200 project minimum. Concrete flatwork prices toward the lower end of that range. Siding prices higher because soft washing requires cleaning solution, dwell time, and careful rinsing rather than just pressure. Soil level, surface access, second-story elevations, and contamination like rust or heavy grease all move the number. We give you a firm quote before any work begins, with no trip charges or surprise add-ons."
            }
        },
        {
            "@type": "Question",
            "name": "Do you need to use my water, and what kind of hookup is required?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, in almost all cases we connect to an exterior spigot on your property. A standard residential outdoor faucet is sufficient — our equipment needs roughly 4 to 5 gallons per minute, which a normal 3/4-inch hose bib supplies without difficulty. Please make sure the spigot is turned on and accessible before we arrive, and let us know if it's on a well system or if water pressure at the house is unusually low so we can plan for it."
            }
        },
        {
            "@type": "Question",
            "name": "Are the cleaning solutions safe for my landscaping and pets?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The solution we use for soft washing is a diluted sodium hypochlorite mix with a surfactant — the same active ingredient family as household bleach, and it does require management around plants. We pre-saturate all landscaping in the work zone with clean water before mixing anything, tarp sensitive or newly planted material, rinse continuously during the wash rather than only at the end, and dilute to the lowest strength that will actually clean the surface. Handled that way, established landscaping is not harmed. We ask that pets stay indoors while we're working and for about an hour afterward, until treated surfaces have been rinsed and have dried."
            }
        }
    ]
};

const faqs = [
    {
        question: "Will pressure washing etch or damage my concrete driveway?",
        answer: "It can, and that's usually a technique problem rather than a pressure problem. Damage happens when a handheld wand is used on a large slab: the narrow jet concentrates pressure in one line, and uneven hand speed leaves alternating bands of over-cleaned and under-cleaned concrete once the surface dries. That's the striping you see on a lot of driveways around town. We use an enclosed rotating surface cleaner that applies uniform pressure at a uniform rate across the whole slab. We also drop pressure and lean on pre-treatment for older, softer, or already-spalling concrete, and we inspect and flag existing damage before we start."
    },
    {
        question: "How much does pressure washing cost per square foot in Green Bay and Appleton?",
        answer: "Pressure washing runs $0.15 to $0.35 per square foot, with a $200 project minimum. Concrete flatwork prices toward the lower end of that range. Siding prices higher because soft washing requires cleaning solution, dwell time, and careful rinsing rather than just pressure. Soil level, surface access, second-story elevations, and contamination like rust or heavy grease all move the number. We give you a firm quote before any work begins, with no trip charges or surprise add-ons."
    },
    {
        question: "Do you need to use my water, and what kind of hookup is required?",
        answer: "Yes, in almost all cases we connect to an exterior spigot on your property. A standard residential outdoor faucet is sufficient — our equipment needs roughly 4 to 5 gallons per minute, which a normal 3/4-inch hose bib supplies without difficulty. Please make sure the spigot is turned on and accessible before we arrive, and let us know if it's on a well system or if water pressure at the house is unusually low so we can plan for it."
    },
    {
        question: "Are the cleaning solutions safe for my landscaping and pets?",
        answer: "The solution we use for soft washing is a diluted sodium hypochlorite mix with a surfactant — the same active ingredient family as household bleach, and it does require management around plants. We pre-saturate all landscaping in the work zone with clean water before mixing anything, tarp sensitive or newly planted material, rinse continuously during the wash rather than only at the end, and dilute to the lowest strength that will actually clean the surface. Handled that way, established landscaping is not harmed. We ask that pets stay indoors while we're working and for about an hour afterward, until treated surfaces have been rinsed and have dried."
    }
];

export default function PressureWashingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[580px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/pressure-washing.webp"
                        alt="Pressure Washing in Green Bay, Appleton & De Pere"
                        fill
                        priority={true}
                        quality={90}
                        sizes="100vw"
                        className="object-cover opacity-35"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy z-10" />

                <div className="container mx-auto px-4 relative z-20 max-w-4xl text-center">
                    {/* H1 */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md text-white mb-6">
                        Pressure Washing in Green Bay, Appleton &amp; De Pere
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        The right pressure for the surface — 4,000 PSI on concrete, under 500 PSI on your siding. Most companies own one machine and use it on everything. That&apos;s how driveways get striped and vinyl gets water behind it.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get My Free Quote</span>
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+19206097085"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base sm:text-lg px-7 py-4 rounded-full transition-colors"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>Call (920) 609-7085</span>
                        </a>
                    </div>

                    {/* Trust Bar */}
                    <div className="pt-2 text-sm sm:text-base text-slate-300 font-medium tracking-wide border-t border-white/15 inline-block">
                        Serving Northeast Wisconsin since 2020 · $2M insured · 100% satisfaction guarantee
                    </div>
                </div>
            </section>

            {/* OPENING SECTION (No header - sits directly under the hero) */}
            <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl text-base sm:text-lg text-slate-700 leading-relaxed space-y-6">
                    <p className="font-medium text-slate-800 text-lg sm:text-xl leading-relaxed">
                        There&apos;s a reason your neighbor&apos;s driveway has faint stripes across it and your siding has a chalky streak under every window.
                    </p>
                    <p>
                        Pressure washing is not one service. Concrete wants high pressure delivered evenly across a wide surface. Siding wants almost no pressure at all and a cleaning solution that does the work chemically. Using the concrete method on siding damages the siding. Using the siding method on concrete does nothing at all.
                    </p>
                    <p>
                        We run both, and we decide which one your property gets before we unspool a hose — not after.
                    </p>
                </div>
            </section>

            {/* H2: TWO DIFFERENT MACHINES, TWO DIFFERENT JOBS */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Surface-Specific Engineering</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Two Different Machines, Two Different Jobs
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {/* H3: High-pressure surface cleaning */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                                    <Wrench size={20} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-navy">
                                    High-pressure surface cleaning — concrete, brick, and stone
                                </h3>
                            </div>
                            <div className="text-slate-700 leading-relaxed space-y-4 text-base sm:text-lg">
                                <p>
                                    For driveways, sidewalks, patios, loading docks, and dumpster pads we use a <strong>rotating surface cleaner</strong>: an enclosed disc with two or more jets spinning on a bar beneath it, running at roughly <strong>3,000–4,000 PSI</strong>.
                                </p>
                                <p>
                                    The enclosure is the whole point. A handheld wand concentrates all that pressure into a single narrow line, and moving that line by hand across 800 square feet of concrete guarantees uneven dwell time. That&apos;s what produces &quot;zebra striping&quot; — the alternating light and dark bands that show up a week later once the slab dries. A surface cleaner delivers uniform pressure at a uniform speed, so the whole slab lifts at the same rate.
                                </p>
                                <p>
                                    Heavily soiled concrete also gets hot water and a pre-treatment to break down the oil, grease, and organic film before the pressure ever touches it. Pressure alone doesn&apos;t remove grease — it just moves it around.
                                </p>
                            </div>
                        </div>

                        {/* H3: Low-pressure soft washing */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                                    <Droplets size={20} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-navy">
                                    Low-pressure soft washing — vinyl, Dryvit, and painted wood
                                </h3>
                            </div>
                            <div className="text-slate-700 leading-relaxed space-y-4 text-base sm:text-lg">
                                <p>
                                    Vinyl siding, EIFS/Dryvit, painted wood, cedar, aluminum, and stucco get <strong>soft washed at under 500 PSI</strong> — roughly the pressure of a garden hose with your thumb over it.
                                </p>
                                <p>
                                    The cleaning is chemical, not mechanical. A sodium hypochlorite solution with a surfactant is applied, allowed to dwell, and rinsed. It kills the algae, mold, mildew, and <em>Gloeocapsa magma</em> at the root rather than blasting the surface layer off and leaving the spores to regrow in six weeks.
                                </p>
                                <p className="font-semibold text-navy pt-2">
                                    Here&apos;s why the pressure matters, surface by surface:
                                </p>
                                <ul className="space-y-3 pt-1">
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                            <Check size={14} className="text-navy" />
                                        </div>
                                        <span><strong>Vinyl siding</strong> is lapped, not sealed. High pressure aimed upward drives water behind the laps and into the wall cavity, where it has no path out. It also voids the warranty on most major vinyl brands.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                            <Check size={14} className="text-navy" />
                                        </div>
                                        <span><strong>Dryvit and EIFS</strong> are a thin synthetic lamina over foam board. High pressure punches through it. This damage is expensive and not repairable by cleaning.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                            <Check size={14} className="text-navy" />
                                        </div>
                                        <span><strong>Painted and stained wood</strong> raises grain and strips finish under pressure. The paint job is usually worth more than the cleaning.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                            <Check size={14} className="text-navy" />
                                        </div>
                                        <span><strong>Aluminum siding</strong> oxidizes. Pressure accelerates the chalking rather than removing it — oxidation needs a chemical restoration, not force.</span>
                                    </li>
                                </ul>
                                <p className="pt-2 text-slate-800 font-medium">
                                    If a company quotes you &quot;pressure washing&quot; for your house and shows up with one wand, they are about to do one of the things on that list.
                                </p>
                            </div>
                        </div>

                        {/* H3: How we decide which one your property gets */}
                        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                                    <Layers size={20} />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-navy">
                                    How we decide which one your property gets
                                </h3>
                            </div>
                            <div className="text-slate-700 leading-relaxed text-base sm:text-lg">
                                <p>
                                    We walk the property first and identify every substrate: concrete, vinyl, brick, EIFS, painted trim, composite decking. Each gets matched to a method and a pressure before anything is cleaned. Most homes need both — soft wash on the house, high pressure on the flatwork — and that&apos;s quoted as one visit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCALIZED SERVICE SECTIONS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl space-y-16">
                    {/* H2: Pressure Washing in Green Bay: Flatwork and Siding */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                            <MapPin size={16} />
                            <span>Brown County</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
                            Pressure Washing in Green Bay: Flatwork and Siding
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p className="font-semibold text-slate-900">
                                Green Bay splits cleanly into two jobs.
                            </p>
                            <p>
                                <strong>The flatwork</strong> is driveways, sidewalks, and patios carrying four months of road salt, deicer residue, and the gray-green algae film that grows on north-facing concrete. Salt doesn&apos;t just look bad — chloride works into the pore structure and accelerates spalling through every freeze-thaw cycle, and Green Bay runs through dozens of those between December and March. Spring surface cleaning is maintenance, not cosmetics.
                            </p>
                            <p>
                                <strong>The siding</strong> is the other half. Homes in Allouez, Bellevue, and the older east-side neighborhoods sit under mature canopy that holds moisture against north and east elevations, and that&apos;s where the black streaking starts. Newer construction out toward Howard and Suamico has more exposure and less shade but takes more airborne dirt from open ground.
                            </p>
                            <p>
                                Both get handled in one visit. Everything we cover locally is on our{" "}
                                <Link
                                    href="/service-areas/green-bay"
                                    className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors"
                                >
                                    Green Bay service area page
                                </Link>.
                            </p>
                        </div>
                    </div>

                    {/* H2: Fox Valley Commercial and Residential Pressure Washing */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                            <Building2 size={16} />
                            <span>Outagamie &amp; Winnebago Counties</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
                            Fox Valley Commercial and Residential Pressure Washing
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                Appleton, Neenah, Menasha, Kaukauna, and Oshkosh are where our commercial work concentrates — retail strips, restaurant entryways, apartment complexes, office parks, and industrial pads.
                            </p>
                            <p>
                                Commercial exterior cleaning is a different discipline from residential. Entryway concrete at a restaurant needs degreasing on a schedule, not once a year. Dumpster pads need hot water and containment. Storefronts get cleaned in early-morning windows so you don&apos;t lose foot traffic. And property managers need documented visit records and a certificate of insurance on file before anyone shows up.
                            </p>
                            <p>
                                Residential Fox Valley work runs the same as Green Bay — soft wash the house, surface-clean the flatwork — with one regional difference: oak and cottonwood cover through the Fox corridor means more organic staining on north elevations and more debris ground into patios.
                            </p>
                            <div className="pt-4">
                                <Link
                                    href="/quote"
                                    className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold px-6 py-3 rounded-full transition-colors text-base shadow-sm"
                                >
                                    <span>Request a Commercial Quote</span>
                                    <ArrowRight size={18} className="text-gold" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* H2: Pressure Washing in De Pere */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                            <MapPin size={16} />
                            <span>Headquarters Market</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
                            Pressure Washing in De Pere
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                De Pere is our home market. Our shop is on South Good Hope Road, which means shorter drive times, tighter scheduling windows, and the ability to come back same-week if something isn&apos;t right.
                            </p>
                            <p>
                                The work here spans the older grid near the river — mature trees, original concrete, plenty of painted wood trim that must not be hit with pressure — and the newer subdivisions on the south end with large driveways and vinyl elevations. We also handle the commercial corridor along Highway 41.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: WHAT PRESSURE WASHING COSTS IN NORTHEAST WISCONSIN */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <DollarSign size={16} />
                            <span>Transparent Local Pricing</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            What Pressure Washing Costs in Northeast Wisconsin
                        </h2>
                    </div>

                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-slate-800 text-center">
                            <p className="text-2xl sm:text-3xl font-extrabold text-gold mb-1">
                                $0.15–$0.35 per square foot
                            </p>
                            <p className="text-slate-300 font-medium text-base">
                                with a $200 project minimum
                            </p>
                        </div>

                        <p className="font-semibold text-navy">
                            Where you land in that range depends on:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                    <Check size={14} className="text-navy" />
                                </div>
                                <span><strong>Surface type</strong> — concrete flatwork prices lower per square foot than siding, which needs chemical dwell time and careful rinsing.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                    <Check size={14} className="text-navy" />
                                </div>
                                <span><strong>Soil level</strong> — a driveway cleaned last year prices lower than one with five years of algae and oil.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                    <Check size={14} className="text-navy" />
                                </div>
                                <span><strong>Access</strong> — second-story elevations, steep grades, and tight side yards add labor.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-slate-100 text-gold flex items-center justify-center shrink-0 mt-1">
                                    <Check size={14} className="text-navy" />
                                </div>
                                <span><strong>Contamination</strong> — rust, battery acid, and heavy grease need targeted treatment beyond a standard wash.</span>
                            </li>
                        </ul>

                        <p>
                            A typical 800 sq ft driveway lands near the bottom of the range. A full house soft wash plus driveway and walkway is usually quoted as a bundle.
                        </p>
                        <p>
                            We quote before we start. No trip charges, no surprise add-ons. Full pricing across every service is on our{" "}
                            <Link
                                href="/pricing"
                                className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors"
                            >
                                pricing page
                            </Link>.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                            <Link
                                href="/quote"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-navy font-black text-base px-8 py-3.5 rounded-full shadow-md transition-all uppercase tracking-wider"
                            >
                                <span>Get My Free Quote</span>
                                <ArrowRight size={18} />
                            </Link>
                            <a
                                href="tel:+19206097085"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white font-bold text-base px-7 py-3.5 rounded-full transition-colors"
                            >
                                <Phone size={18} className="text-gold" />
                                <span>Or call (920) 609-7085</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: WHAT WE PROTECT BEFORE WE START */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <ShieldCheck size={16} />
                            <span>Property Protection Protocols</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            What We Protect Before We Start
                        </h2>
                    </div>

                    <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed">
                        <p className="font-semibold text-slate-900 text-lg">
                            Cleaning solution that isn&apos;t managed will burn your landscaping. Ours is managed:
                        </p>

                        <ol className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-full bg-navy text-gold font-bold flex items-center justify-center shrink-0 text-sm">
                                    1
                                </span>
                                <div>
                                    <strong className="text-navy">Pre-saturation.</strong> Every plant, shrub, and grass area in the work zone is soaked with clean water before any solution is mixed. Saturated foliage can&apos;t absorb much of anything else.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-full bg-navy text-gold font-bold flex items-center justify-center shrink-0 text-sm">
                                    2
                                </span>
                                <div>
                                    <strong className="text-navy">Coverage where it&apos;s needed.</strong> Sensitive or newly planted material gets tarped rather than just watered.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-full bg-navy text-gold font-bold flex items-center justify-center shrink-0 text-sm">
                                    3
                                </span>
                                <div>
                                    <strong className="text-navy">Continuous rinsing.</strong> We rinse landscaping during the wash, not only after, so nothing sits and dwells where it shouldn&apos;t.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-full bg-navy text-gold font-bold flex items-center justify-center shrink-0 text-sm">
                                    4
                                </span>
                                <div>
                                    <strong className="text-navy">Controlled dilution.</strong> Solution is mixed to the lowest strength that will do the job on that specific substrate — not one strong mix used everywhere.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-8 h-8 rounded-full bg-navy text-gold font-bold flex items-center justify-center shrink-0 text-sm">
                                    5
                                </span>
                                <div>
                                    <strong className="text-navy">Runoff control on commercial sites.</strong> Storm drains get protected where site conditions require it.
                                </div>
                            </li>
                        </ol>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 mt-6 text-slate-800">
                            <p>
                                We also cover exterior outlets and fixtures, close and check windows and doors, and note any pre-existing damage with photos before we begin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: OFTEN BOOKED TOGETHER */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Layers size={16} />
                            <span>Service Bundles</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Often Booked Together
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xl font-bold text-navy mb-2">
                                    <Link href="/services/roof-cleaning" className="text-navy hover:text-gold transition-colors">
                                        Roof Cleaning
                                    </Link>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Black streaking on your roof is <em>Gloeocapsa magma</em>, and it&apos;s the same soft-wash chemistry we use on siding. Doing both in one visit costs less than two trips.
                                </p>
                            </div>
                            <Link
                                href="/services/roof-cleaning"
                                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-navy transition-colors"
                            >
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xl font-bold text-navy mb-2">
                                    <Link href="/services/gutter-cleaning" className="text-navy hover:text-gold transition-colors">
                                        Gutter Cleaning
                                    </Link>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    Worth doing before a house wash. Clearing gutters first means the debris and runoff come down before the siding gets cleaned, not after.
                                </p>
                            </div>
                            <Link
                                href="/services/gutter-cleaning"
                                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-navy transition-colors"
                            >
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-xl font-bold text-navy mb-2">
                                    <Link href="/services/house-washing" className="text-navy hover:text-gold transition-colors">
                                        House Washing
                                    </Link>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                    The dedicated soft-wash service for full siding elevations.
                                </p>
                            </div>
                            <Link
                                href="/services/house-washing"
                                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-navy transition-colors"
                            >
                                <span>Learn more</span>
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: FREQUENTLY ASKED QUESTIONS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Transparent Answers</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 pl-2 sm:pl-3">
                                    {faq.question}
                                </h3>
                                <p className="text-slate-700 leading-relaxed font-medium pl-2 sm:pl-3 text-base sm:text-lg">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VERIFIED REVIEWS */}
            <ReviewSlider />

            {/* CLOSING CTA BLOCK */}
            <section className="py-16 sm:py-20 bg-navy text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Get a Free Pressure Washing Quote
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Straight answers, the right pressure for every surface, and a firm number before we start. Serving Green Bay, Appleton, De Pere, Neenah, Menasha, Kaukauna, Oshkosh, Suamico, Howard, Door County, and the surrounding communities.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get My Free Quote</span>
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+19206097085"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base sm:text-lg px-7 py-4 rounded-full transition-colors"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>Call or text (920) 609-7085</span>
                        </a>
                    </div>
                    <p className="text-sm text-slate-300 font-medium tracking-wide">
                        Valley Property Services · 462 S Good Hope Rd, De Pere, WI 54115 · $2M insured · Serving Northeast Wisconsin since 2020
                    </p>
                </div>
            </section>

            {/* EXPLORE MORE SERVICES */}
            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl py-16 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-navy mb-8 tracking-tight">
                        Explore More Exterior Services
                    </div>
                    <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
