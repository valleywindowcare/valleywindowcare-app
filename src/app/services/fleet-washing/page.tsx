import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
    Truck,
    Clock,
    Flame,
    Leaf,
    Zap,
    Layers,
    Sparkles,
    ArrowRight,
    Phone
} from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata: Metadata = {
    title: {
        absolute: "Mobile Fleet & Truck Washing Green Bay, WI | Valley Pro",
    },
    description: "On-site commercial truck & fleet washing in Green Bay, Appleton & Fox Valley. Hot water washouts, road salt neutralization, 2-step touchless. Free quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/fleet-washing",
    },
    openGraph: {
        title: "Mobile Fleet & Truck Washing Green Bay, WI | Valley Pro",
        description: "On-site commercial truck & fleet washing in Green Bay, Appleton & Fox Valley. Hot water washouts, road salt neutralization, 2-step touchless. Free quote.",
        url: "https://valleyexteriorpros.com/services/fleet-washing",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/commercial-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Mobile Fleet Washing & Commercial Truck Cleaning in Green Bay & the Fox Valley",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile Fleet & Truck Washing Green Bay, WI | Valley Pro",
        description: "On-site commercial truck & fleet washing in Green Bay, Appleton & Fox Valley. Hot water washouts, road salt neutralization, 2-step touchless. Free quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/commercial-cleaning.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Fleet Washing & Commercial Truck Cleaning in Green Bay & the Fox Valley",
    "serviceType": "Mobile Commercial Fleet & Truck Washing",
    "description": "On-site commercial truck & fleet washing in Green Bay, Appleton & Fox Valley. Hot water washouts, road salt neutralization, 2-step touchless. Free quote.",
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
        { "@type": "State", "name": "Wisconsin" }
    ],
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "150",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "150.00"
        }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Commercial Fleet Washing Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Class 8 Semi-Tractor & 53ft Trailer Yard Washdowns"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Two-Step Touchless Road-Film Removal (Wrap-Safe Chemistry)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "200°F Hot-Water Undercarriage De-Icing & Salt Neutralization"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Fifth-Wheel, Engine Bay & DOT Pre-Inspection Degreasing"
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
            "name": "Fleet Washing",
            "item": "https://valleyexteriorpros.com/services/fleet-washing"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://valleyexteriorpros.com/services/fleet-washing#faq",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How does mobile fleet washing work at our terminal or yard?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our rigs arrive self-contained — onboard 200°F hot-water pressure washers running 1,500–1,800 PSI at 8.0 GPM, water buffer tanks, and full containment equipment. We walk the yard and seal at-risk storm drain inlets first, then wash on-site during your staging window. A full tractor-trailer clears in 15 to 20 minutes, so no driver leaves route. We need access and a place to stage; we supply water, heat, and power."
            }
        },
        {
            "@type": "Question",
            "name": "Will two-step touchless washing damage our vehicle wraps?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No — it's specifically the method that protects them. Touchless means no brush ever contacts the laminate, so there's no abrasion at seams, rivet lines, or wrap edges where peeling starts. On wrapped units we also switch to butyl-free detergent, because butyl surfactants can cloud some wrap laminates over repeated washes even without physical contact."
            }
        },
        {
            "@type": "Question",
            "name": "How do you keep our facility out of a stormwater violation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Containment, not just chemistry. Biodegradable detergent lowers the load, but it does not make discharge into a storm drain permissible. We seal at-risk inlets with magnetic and polyurethane drain covers, berm the wash footprint, set sediment barriers downgradient, and stage on your designated wash pad wherever one exists. This matters because under the Clean Water Act the liability for an illicit discharge typically attaches to the property owner, not only the contractor — so a wash vendor with no containment plan is your exposure, not theirs."
            }
        },
        {
            "@type": "Question",
            "name": "Why does hot water matter if the detergent does the work?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because grease has a melt point. Below it, detergent has to emulsify semi-solid residue slowly and incompletely; above it, the soil liquefies and releases with far less chemical and far less pressure. That's the entire reason we carry heat: it lets us clean harder soils at lower pressure, which is what protects paint, polished aluminum, and wraps. It's also the difference between a functional and a decorative winter undercarriage wash."
            }
        },
        {
            "@type": "Question",
            "name": "Can you wash on weekends or during overnight staging?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most fleet partners schedule Friday evening, Saturday, or Sunday so units are cleaned, dried, and dispatch-ready Monday morning. We service Green Bay, De Pere, Appleton, Neenah, Menasha, Kaukauna, and Oshkosh, and distribution centers throughout Brown, Outagamie, and Winnebago counties."
            }
        }
    ]
};

const faqs = [
    {
        question: "How does mobile fleet washing work at our terminal or yard?",
        answer: "Our rigs arrive self-contained — onboard 200°F hot-water pressure washers running 1,500–1,800 PSI at 8.0 GPM, water buffer tanks, and full containment equipment. We walk the yard and seal at-risk storm drain inlets first, then wash on-site during your staging window. A full tractor-trailer clears in 15 to 20 minutes, so no driver leaves route. We need access and a place to stage; we supply water, heat, and power."
    },
    {
        question: "Will two-step touchless washing damage our vehicle wraps?",
        answer: "No — it's specifically the method that protects them. Touchless means no brush ever contacts the laminate, so there's no abrasion at seams, rivet lines, or wrap edges where peeling starts. On wrapped units we also switch to butyl-free detergent, because butyl surfactants can cloud some wrap laminates over repeated washes even without physical contact."
    },
    {
        question: "How do you keep our facility out of a stormwater violation?",
        answer: "Containment, not just chemistry. Biodegradable detergent lowers the load, but it does not make discharge into a storm drain permissible. We seal at-risk inlets with magnetic and polyurethane drain covers, berm the wash footprint, set sediment barriers downgradient, and stage on your designated wash pad wherever one exists. This matters because under the Clean Water Act the liability for an illicit discharge typically attaches to the property owner, not only the contractor — so a wash vendor with no containment plan is your exposure, not theirs."
    },
    {
        question: "Why does hot water matter if the detergent does the work?",
        answer: "Because grease has a melt point. Below it, detergent has to emulsify semi-solid residue slowly and incompletely; above it, the soil liquefies and releases with far less chemical and far less pressure. That's the entire reason we carry heat: it lets us clean harder soils at lower pressure, which is what protects paint, polished aluminum, and wraps. It's also the difference between a functional and a decorative winter undercarriage wash."
    },
    {
        question: "Can you wash on weekends or during overnight staging?",
        answer: "Yes. Most fleet partners schedule Friday evening, Saturday, or Sunday so units are cleaned, dried, and dispatch-ready Monday morning. We service Green Bay, De Pere, Appleton, Neenah, Menasha, Kaukauna, and Oshkosh, and distribution centers throughout Brown, Outagamie, and Winnebago counties."
    }
];

export default function FleetWashingPage() {
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
            <section className="relative w-full min-h-[620px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/commercial-cleaning.webp"
                        alt="Mobile Fleet Washing & Commercial Truck Cleaning in Green Bay & the Fox Valley"
                        fill
                        priority={true}
                        quality={90}
                        sizes="100vw"
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy z-10" />

                <div className="container mx-auto px-4 relative z-20 max-w-4xl text-center">
                    {/* H1 */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md text-white mb-6">
                        Mobile Fleet Washing &amp; Commercial Truck Cleaning in Green Bay &amp; the Fox Valley
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Turnkey on-site washing for logistics hubs, distribution terminals, utility fleets, and heavy machinery. Powered by commercial 200°F hot-water rigs and self-contained water transport — scheduled during fleet staging hours with zero driver downtime.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Request a Commercial Fleet Proposal</span>
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

                    {/* Authority Badges / Trust Bar */}
                    <div className="pt-3 text-xs sm:text-sm text-slate-300 font-semibold tracking-wide border-t border-white/15 inline-block max-w-3xl">
                        Fully Insured ($2M Commercial Liability) · Mobile Hot-Water Rigs · EPA Stormwater Best Practices · After-Hours &amp; Weekend Availability
                    </div>
                </div>
            </section>

            {/* SECTION 1: YARD & TERMINAL STAGING TURNAROUNDS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Truck size={16} />
                            <span>Yard &amp; Terminal Staging Turnarounds</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            On-Site Washing Built for Logistics, Trades &amp; Municipalities
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                Commercial truck washes take drivers off route and rack up fuel and labor hours that never show up on the wash invoice. A 40-minute round trip to a tunnel wash, multiplied across a 20-truck fleet on a weekly rotation, is <strong>50+ driver-hours a month</strong> spent not moving freight.
                            </p>
                            <p>
                                We mobilize directly to your yard or staging terminal across the I-41 corridor on weekly, bi-weekly, or monthly rotations. Our rigs carry their own water, their own heat, and their own containment — so the only thing we need from your facility is access and a staging window.
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Class 8 Semi-Tractors &amp; 53&apos; Trailers
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Complete cab exterior cleaning, sleeper box detailing, trailer skin restoration (reefers, dry vans, flatbeds), and rear door debrowning. Trailer skins pick up a specific stripe of traffic film along the lower third of the panel; that band needs a longer chemical dwell than the upper skin, and we adjust application accordingly rather than raising pressure.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Last-Mile &amp; Parcel Delivery Vans
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    High-volume route turnarounds for Sprinters, Transits, and step vans. Last-mile fleets are almost always wrapped, and wraps are where pressure does the most expensive damage — lifted edges, cracked laminate, and color fade that makes a two-year-old wrap look five. Everything we do on a wrapped unit is touchless by default.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Vocational &amp; Heavy Construction Equipment
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    High-impact mud clearing and frame degreasing for dump trucks, concrete mixers, heavy haulers, and excavators. Cured concrete slurry, clay, and hydraulic residue each respond to different chemistry, and we sort them before the first trigger pull instead of trying to solve all three with pressure.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Municipal, Utility &amp; Service Fleets
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Consistent image preservation for municipal utility trucks, work vans, and company pickups — the units the public actually sees parked in neighborhoods. We serve commercial fleets, logistics terminals, and regional service contractors across Brown, Outagamie, and Winnebago counties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: WRAP-SAFE ELECTROSTATIC BOND BREAKING */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Zap size={16} />
                            <span>Wrap-Safe Electrostatic Bond Breaking</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Two-Step Touchless Washing, and Why the Chemistry Does the Work
                        </h2>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                            Diesel soot doesn&apos;t sit loose on a painted panel. It bonds. Exhaust particulate carries a static charge, and fine ferrous road film — brake dust, rail dust, and metallic grit off the highway — grips clear coat the way iron filings grip a magnet. Brushes remove it by abrading the surface it&apos;s stuck to. That&apos;s why brush-washed fleets develop a dull, swirled cast across the hood and doors by year three. Two-step chemistry breaks the bond instead of scrubbing it.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-9 h-9 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm mb-4">
                                    1
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2">
                                    Step 1 — Low-pH Pre-Conditioner
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    An acidic pre-soak in the <strong>pH 1–3 range</strong> is applied cold to cool panels and allowed to dwell. It dissolves mineral scale, hard-water spotting, and light oxidation, and it strips the ferrous film that makes road grime cling. Applied bottom-up so the solution never runs over dry paint and streaks.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-9 h-9 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm mb-4">
                                    2
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2">
                                    Step 2 — High-pH Neutralizing Wash
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    A caustic, surfactant-loaded detergent in the <strong>pH 11–13 range</strong> goes on over the still-wet acid. The two reacting against each other is the actual mechanism — the neutralization reaction lifts grease, organic oils, and diesel film off the surface and holds them in suspension so they rinse away instead of redepositing. This is the step brushes are trying to substitute for, and it does the job without touching the paint.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-9 h-9 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm mb-4">
                                    3
                                </div>
                                <h3 className="font-bold text-navy text-lg mb-2">
                                    Step 3 — High-Volume Clean Rinse
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    A high-flow, low-pressure rinse carries everything off in one pass and leaves a spot-free finish. Volume matters more than pressure here: it takes water to move suspended soil off a 53-foot trailer, and turning up the pressure only drives residue into seams and wrap edges.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                            Why We Don&apos;t Use Brushes on Wrapped or Polished Units
                        </h3>
                        <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
                            Brushes scratch clear coats, dull polished aluminum, and peel vinyl at the seams and rivet lines. On a wrapped fleet that&apos;s a direct hit to a <strong>$4,000–$6,500+</strong> wrap investment per unit. On polished tanks and bumpers it&apos;s a haze that only comes back with machine work. Touchless costs slightly more per unit in chemistry and takes slightly longer in dwell time — and it&apos;s why fleets that switch stop replacing wraps early.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: HOT WATER SPECIFICATIONS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Flame size={16} />
                            <span>Hot Water Specifications</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Why 200°F Changes What Comes Off the Truck
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                Temperature is the variable most mobile operators skip, because heat is expensive to carry. It&apos;s also the one that does the most work on a diesel fleet.
                            </p>
                            <p>
                                Grease and oil have a melt point. Below it, detergent has to emulsify cold, semi-solid residue and the chemistry works slowly and incompletely. Above it, the soil liquefies and releases with far less chemical load and far less pressure. <strong>Our rigs deliver water at up to 200°F at the nozzle</strong>, which is the practical ceiling before flash-off wastes the energy you spent heating it.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8">
                        <h3 className="text-lg sm:text-xl font-bold text-navy mb-4">
                            What that means in practice
                        </h3>
                        <ul className="space-y-4 text-slate-700 text-base sm:text-lg">
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                <div>
                                    <strong>Less pressure on the paint:</strong> Hot water at moderate pressure outperforms cold water at high pressure on grease. We run <strong>1,500–1,800 working PSI at 8.0 GPM</strong> and let heat, volume, and chemistry carry the load — not force.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                <div>
                                    <strong>Faster dwell-to-rinse cycles:</strong> Hot chemistry activates in a fraction of the time, which is how a full tractor-trailer clears in a single staging window.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                <div>
                                    <strong>Better winter performance:</strong> Cold-water washing in a Wisconsin January is largely theater — the water sheets and freezes before it lifts anything. Heat is what makes December-through-March undercarriage work actually function.
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                        <h3 className="text-lg sm:text-xl font-bold text-navy">
                            Nozzle and pressure mapping by surface
                        </h3>
                        <p>
                            Not every panel gets the same setup. Wrapped sides, cabs, and polished tanks get <strong>40° wide-fan nozzles</strong> at increased standoff distance, which spreads 8 GPM across a broad contact patch so the water does the carrying rather than the impact. Chassis, frame rails, wheels, and wheel wells step down to <strong>25° nozzles</strong> for the tighter, higher-impact work that caked brine and packed mud actually require.
                        </p>
                        <p>
                            The 8 GPM flow rate is the specification that matters most here and the one most mobile operators can&apos;t match. Volume is what removes suspended soil from a 53-foot trailer in one pass. Operators running 4 GPM have to compensate with pressure, and pressure is what damages wraps.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: CHEMISTRY BY SOIL TYPE */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Layers size={16} />
                            <span>Chemistry by Soil Type</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Degreasers Matched to What&apos;s Actually on the Unit
                        </h2>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                            &quot;Degreaser&quot; is not one product. Using the wrong one is how aluminum gets etched and wraps get clouded.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Diesel soot and traffic film
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Handled by the two-step above. Butyl-based surfactants are effective but aggressive on some wrap laminates, so wrapped units get <strong>butyl-free, high-surfactant detergent</strong> instead.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Fifth-wheel, engine bay, and chassis grease
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Heavy caked grease gets a dedicated <strong>hot-water degreasing pass</strong> with extended dwell before the body wash begins, so lifted grease never runs across clean panels. This is the step that makes kingpins, structural welds, and seals actually visible for DOT inspection — a mechanic can&apos;t find a hairline crack under a quarter inch of packed grease.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Aluminum wheels, tanks, and steps
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Brightened with <strong>acid-free aluminum brightener</strong>. Traditional hydrofluoric and ammonium bifluoride brighteners flash-clean and then leave the white chalky etch that ruins polished tanks permanently. Acid-free is slower and does not etch.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-gold shrink-0"></span>
                                    Winter brine and chloride neutralization
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Magnesium chloride and calcium chloride don&apos;t rinse off with plain water — they re-absorb moisture and keep corroding. They need a <strong>salt-neutralizing chelating rinse</strong> applied hot to chassis rails, suspension pins, air lines, and brake components, followed by a clean-water flush.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: EPA CLEAN WATER COMPLIANCE */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Leaf size={16} />
                            <span>EPA Clean Water Compliance</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Wash-Water Containment on the I-41 Corridor
                        </h2>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                            This is the part that turns a wash program into a liability if it&apos;s done wrong, and it&apos;s the reason to ask any mobile vendor for their containment plan before they ever show up.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <h3 className="text-lg sm:text-xl font-bold text-navy">
                                Why storm drains are the line
                            </h3>
                            <p>
                                Under the Clean Water Act, vehicle wash water is generally treated as <strong>process wastewater, not stormwater</strong>. Stormwater is rain. Wash water carries detergent, oil, grease, heavy metals from brake dust, and suspended solids — and discharging it into a municipal separate storm sewer system without authorization is a permit violation, because storm sewers in Green Bay, De Pere, Appleton, and the surrounding communities discharge largely untreated into the Fox and East rivers and ultimately the bay.
                            </p>
                            <p>
                                In Wisconsin the NPDES program is delegated to the DNR and administered as <strong>WPDES</strong>, with municipal stormwater requirements under <strong>NR 216</strong>. Practically, that means the enforcement exposure usually lands on the <strong>property owner</strong> — the facility whose drain it went into — not only on the contractor who held the wand.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-4">
                                What we deploy on site
                            </h3>
                            <ul className="space-y-3.5 text-slate-700 text-base sm:text-lg mb-6">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>Heavy-duty magnetic and polyurethane storm drain seals</strong> placed over every at-risk inlet inside the wash footprint before the first drop of water is discharged. Magnetic seals form a gasket against steel inlet frames; polyurethane mats handle concrete and irregular grates.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>Containment berms</strong> to define the wash footprint and direct flow away from inlets and site perimeter.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>Sediment barriers</strong> at the downgradient edge of the wash area to capture solids — grit, brake dust, and organic debris — before they can migrate.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>Facility-designated wash pads</strong> wherever the site has one. Washing on a pad that drains to a sanitary connection or an oil-water separator is always the preferred setup, and we plan the staging sequence around it.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>100% biodegradable detergents</strong> throughout, which lowers the load but does not by itself make discharge to a storm drain lawful — containment is what does.
                                    </div>
                                </li>
                            </ul>
                            <p className="text-slate-700 text-base sm:text-lg leading-relaxed pt-2 border-t border-slate-200/80">
                                We walk the yard and identify inlets before the rig is staged, not after. If a site has no wash pad and no viable containment destination, we tell you that during the site assessment rather than washing anyway and leaving the exposure with you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: SCHEDULING */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Clock size={16} />
                            <span>Scheduling</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            What a Rotation Actually Looks Like
                        </h2>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            Most fleets land on one of three cadences: <strong>weekly</strong> for parcel and last-mile units that are public-facing daily, <strong>bi-weekly</strong> for regional Class 8 tractors, and <strong>monthly</strong> with a mid-winter undercarriage add-on for vocational and municipal equipment.
                        </p>
                        <p>
                            We work around dispatch, not against it. Friday evening, Saturday, and Sunday windows are the most common, with units cleaned, dried, and staged for Monday morning. <strong>A full tractor-trailer combination clears in 15 to 20 minutes</strong> — which is what makes a 20-unit yard a single-window job rather than a two-day project.
                        </p>
                        <p>
                            Beyond scheduled truck rotations, our self-contained rigs handle facility support on the same visit —{" "}
                            <Link
                                href="/services/commercial-pressure-washing"
                                className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors"
                            >
                                commercial pressure washing
                            </Link>{" "}
                            for fueling aprons and maintenance bays, and{" "}
                            <Link
                                href="/services/parking-lot-and-garage-cleaning"
                                className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors"
                            >
                                parking lot and garage cleaning
                            </Link>{" "}
                            across logistics parks in Green Bay, Appleton, and the Fox Valley.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 7: DIRECT ANSWERS / FAQS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100" id="faq">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Direct Answers</span>
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
                        Request Your Commercial Fleet Proposal
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Keep your logistics, utility, or construction fleet compliant, protected against winter salt corrosion, and brand-sharp. Servicing terminals across Green Bay, Appleton, and the Fox Valley.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Request a Commercial Fleet Proposal</span>
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
                    <p className="text-sm text-slate-300 font-medium tracking-wide">
                        Valley Property Services · 462 S Good Hope Rd, De Pere, WI 54115 · Fully Insured ($2M Liability) · On-Site Commercial Mobile Washing
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
