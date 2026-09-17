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
    Truck,
    Clock,
    Droplets,
    Flame,
    Wrench,
    Shield,
    Leaf,
    Zap,
    Gauge,
    Layers
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
                "text": "Our mobile rigs arrive at your yard equipped with onboard industrial hot-water pressure washers, commercial pumps, and water buffer tanks. We wash your vehicles directly on-site during your scheduled staging window, eliminating driver travel and facility downtime."
            }
        },
        {
            "@type": "Question",
            "name": "Will two-step touchless washing damage our custom vinyl vehicle wraps?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Two-step touchless washing is specifically engineered to safely break down diesel soot and road film without abrasive brushes, protecting vehicle wraps, lettering, and clear coats from scratches and peeling."
            }
        },
        {
            "@type": "Question",
            "name": "Can you wash our fleet on weekends or during overnight staging?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most commercial fleet partners schedule service on Friday evenings, Saturdays, or Sundays so trucks are fully cleaned, dried, and ready for dispatch early Monday morning."
            }
        },
        {
            "@type": "Question",
            "name": "How do you protect our property from environmental runoff fines?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We strictly adhere to Clean Water Act guidelines by utilizing biodegradable detergents and deploying storm drain containment berms and drain blockers to ensure wash wastewater does not enter municipal storm sewers."
            }
        },
        {
            "@type": "Question",
            "name": "What geographic areas do you cover for scheduled fleet washing?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We provide mobile on-site fleet washing across Northeast Wisconsin, including Green Bay, De Pere, Appleton, Neenah, Menasha, Kaukauna, Oshkosh, and distribution centers throughout Brown, Outagamie, and Winnebago counties."
            }
        }
    ]
};

const faqs = [
    {
        question: "How does mobile fleet washing work at our terminal or yard?",
        answer: "Our mobile rigs arrive at your yard equipped with onboard industrial hot-water pressure washers, commercial pumps, and water buffer tanks. We wash your vehicles directly on-site during your scheduled staging window, eliminating driver travel and facility downtime."
    },
    {
        question: "Will two-step touchless washing damage our custom vinyl vehicle wraps?",
        answer: "No. Two-step touchless washing is specifically engineered to safely break down diesel soot and road film without abrasive brushes, protecting vehicle wraps, lettering, and clear coats from scratches and peeling."
    },
    {
        question: "Can you wash our fleet on weekends or during overnight staging?",
        answer: "Yes. Most commercial fleet partners schedule service on Friday evenings, Saturdays, or Sundays so trucks are fully cleaned, dried, and ready for dispatch early Monday morning."
    },
    {
        question: "How do you protect our property from environmental runoff fines?",
        answer: "We strictly adhere to Clean Water Act guidelines by utilizing biodegradable detergents and deploying storm drain containment berms and drain blockers to ensure wash wastewater does not enter municipal storm sewers."
    },
    {
        question: "What geographic areas do you cover for scheduled fleet washing?",
        answer: "We provide mobile on-site fleet washing across Northeast Wisconsin, including Green Bay, De Pere, Appleton, Neenah, Menasha, Kaukauna, Oshkosh, and distribution centers throughout Brown, Outagamie, and Winnebago counties."
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
                        Turnkey on-site washing for logistics hubs, distribution terminals, utility fleets, and heavy machinery. Powered by commercial 200°F hot-water rigs and self-contained water transport—scheduled during fleet staging hours with zero driver downtime.
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

                    {/* Authority Badges */}
                    <div className="pt-3 text-xs sm:text-sm text-slate-300 font-semibold tracking-wide border-t border-white/15 inline-block max-w-3xl">
                        Fully Insured ($2M Commercial Liability) · Mobile Hot-Water Rigs · EPA Stormwater Best Practices · After-Hours &amp; Weekend Availability
                    </div>
                </div>
            </section>

            {/* SECTION 1: COMMERCIAL FLEET CLASSES & EQUIPMENT WE SERVICE */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Truck size={16} />
                            <span>Yard &amp; Terminal Staging Turnarounds</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            On-Site Washing Built for Logistics, Trades &amp; Municipalities
                        </h2>
                    </div>

                    <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                        <p>
                            Commercial truck washes take drivers off route and rack up costly fuel and labor hours. We mobilize directly to your yard or staging terminal across the I-41 corridor on weekly, bi-weekly, or monthly rotations.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-4">
                                Service Categories:
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Class 8 Semi-Tractors &amp; 53&apos; Trailers
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Complete cab exterior cleaning, sleeper box detailing, trailer skin restoration (reefers, dry vans, flatbeds), and rear door debrowning.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Last-Mile &amp; Parcel Delivery Vans
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        High-volume route turnarounds for Sprinters, Transits, and step vans—safely maintaining painted finishes and corporate vinyl wraps.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Vocational &amp; Heavy Construction Equipment
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        High-impact mud clearing and frame degreasing for dump trucks, concrete mixers, heavy haulers, and excavators.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Municipal, Utility &amp; Service Fleets
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Consistent, clean image preservation for municipal utility trucks, work vans, and company pickups.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: THE TWO-STEP TOUCHLESS CHEMISTRY & ROAD-FILM REMOVAL */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Zap size={16} />
                            <span>Wrap-Safe Electrostatic Bond Breaking</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Advanced Two-Step Touchless Washing That Protects Vinyl Graphics
                        </h2>
                    </div>

                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                        <p>
                            Brushes scratch clear coats, dull polished finishes, and peel corporate vinyl decals. We utilize an industrial two-step chemical application that breaks the static electricity bond holding diesel soot and fine magnetic road film to your paint.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-4">
                                The Process:
                            </h3>
                            <div className="grid sm:grid-cols-3 gap-4">
                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                    <div className="w-8 h-8 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm mb-3">
                                        1
                                    </div>
                                    <h4 className="font-bold text-navy text-base mb-1.5">
                                        Low-pH Pre-Conditioner
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Targets mineral deposits, road grime, and light oxidation across exterior panels.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                    <div className="w-8 h-8 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm mb-3">
                                        2
                                    </div>
                                    <h4 className="font-bold text-navy text-base mb-1.5">
                                        High-pH Neutralizing Wash
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Reacts with the initial coat to lift grease, organic oils, and diesel film without abrasive friction.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                    <div className="w-8 h-8 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm mb-3">
                                        3
                                    </div>
                                    <h4 className="font-bold text-navy text-base mb-1.5">
                                        High-Volume Clean Rinse
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Rinses completely clean, leaving a spot-free, paint-protected finish without swirl marks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: WINTER SALT MITIGATION & DOT MECHANICAL DEGREASING */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Flame size={16} />
                            <span>High-Heat Chassis Preservation</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Undercarriage De-Icing, Salt Neutralization &amp; DOT Inspection Prep
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mb-4">
                                    <Flame size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    High-Flow Hot Water Undercarriage Wash
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    200°F water strips encrusted magnesium chloride and calcium road brines from chassis rails, suspension pins, and brake lines to prevent premature corrosion.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mb-4">
                                    <Wrench size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    Fifth-Wheel &amp; Engine Bay Degreasing
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Heavy hot-water degreasing to remove caked grease, oil, and grime so mechanics and DOT safety officers can easily inspect structural welds, kingpins, and seals.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mb-4">
                                    <Sparkles size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    Acid-Free Aluminum Wheel &amp; Tank Brightening
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Removes road haze and oxidation from fuel tanks, rims, and steps without leaving the white, chalky finish caused by harsh acid washes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: STORMWATER & ENVIRONMENTAL STEWARDSHIP */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                            <Leaf size={16} />
                            <span>EPA Clean Water Compliance</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
                            Compliant On-Site Cleaning &amp; Stormwater Runoff Management
                        </h2>
                        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                Fleet managers face strict EPA and Wisconsin DNR clean-water scrutiny. We wash using 100% biodegradable detergents. Where municipal storm sewers are present, our crews deploy specialized wash berms, drain seals, and water diversion tools to prevent oily wastewater or chemical runoff from entering local watersheds.
                            </p>
                            <p>
                                In addition to scheduled truck wash rotations, our self-contained mobile rigs provide facility support including{" "}
                                <Link
                                    href="/services/pressure-washing"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    commercial pressure washing
                                </Link>{" "}
                                for fueling aprons and maintenance bays, as well as high-traffic{" "}
                                <Link
                                    href="/service-areas/green-bay"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    parking lot and concrete cleaning
                                </Link>{" "}
                                throughout logistics parks in Green Bay, Appleton, and the Fox Valley.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
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
