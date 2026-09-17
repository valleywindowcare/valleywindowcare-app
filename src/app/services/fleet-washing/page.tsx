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
    Leaf
} from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata: Metadata = {
    title: {
        absolute: "Mobile Fleet & Truck Washing Green Bay WI | Valley Pro",
    },
    description: "On-site mobile truck and commercial fleet washing in Green Bay, Appleton & Fox Valley. Hot water degreasing, salt neutralization, aluminum brightening. Free quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/fleet-washing",
    },
    openGraph: {
        title: "Mobile Fleet & Truck Washing Green Bay WI | Valley Pro",
        description: "On-site mobile truck and commercial fleet washing in Green Bay, Appleton & Fox Valley. Hot water degreasing, salt neutralization, aluminum brightening. Free quote.",
        url: "https://valleyexteriorpros.com/services/fleet-washing",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/commercial-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Mobile Fleet & Commercial Truck Washing in Green Bay & the Fox Valley",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobile Fleet & Truck Washing Green Bay WI | Valley Pro",
        description: "On-site mobile truck and commercial fleet washing in Green Bay, Appleton & Fox Valley. Hot water degreasing, salt neutralization, aluminum brightening. Free quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/commercial-cleaning.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mobile Fleet & Commercial Truck Washing in Green Bay & the Fox Valley",
    "serviceType": "Mobile Commercial Fleet & Truck Washing",
    "description": "On-site mobile truck and commercial fleet washing in Green Bay, Appleton & Fox Valley. Hot water degreasing, salt neutralization, aluminum brightening. Free quote.",
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
                    "name": "Semi-Tractor & 53ft Trailer Washdowns"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Last-Mile Delivery Van & Box Truck Fleet Washing"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Construction Equipment & Undercarriage Salt Neutralization"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Acid-Free Aluminum Brightening & Engine Degreasing"
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
            "name": "Do you wash our trucks at our location or do we bring them to you?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We are 100% mobile. Our self-contained wash rigs travel directly to your depot, yard, or job site equipped with commercial pressure washers, hot-water burners, and water supply tanks."
            }
        },
        {
            "@type": "Question",
            "name": "Can you wash our fleet after-hours or on weekends?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Most fleet managers schedule us during staging downtime—such as Friday evenings, Saturdays, or Sundays—so your trucks are fully washed and ready for route dispatch Monday morning without interrupting daily operations."
            }
        },
        {
            "@type": "Question",
            "name": "How do you handle environmental runoff and stormwater compliance?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We use eco-conscious, biodegradable cleaning solutions and employ drain protection plugs or surface berms when washing near municipal storm sewers, keeping your yard compliant with state and local clean water guidelines."
            }
        },
        {
            "@type": "Question",
            "name": "How is fleet washing priced?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pricing is structured per vehicle based on fleet size, vehicle type (e.g., cargo van vs. sleeper tractor with 53' trailer), frequency (weekly, bi-weekly, monthly), and whether aluminum brightening or undercarriage washing is required. We provide custom volume contracts."
            }
        }
    ]
};

const faqs = [
    {
        question: "Do you wash our trucks at our location or do we bring them to you?",
        answer: "We are 100% mobile. Our self-contained wash rigs travel directly to your depot, yard, or job site equipped with commercial pressure washers, hot-water burners, and water supply tanks."
    },
    {
        question: "Can you wash our fleet after-hours or on weekends?",
        answer: "Yes. Most fleet managers schedule us during staging downtime—such as Friday evenings, Saturdays, or Sundays—so your trucks are fully washed and ready for route dispatch Monday morning without interrupting daily operations."
    },
    {
        question: "How do you handle environmental runoff and stormwater compliance?",
        answer: "We use eco-conscious, biodegradable cleaning solutions and employ drain protection plugs or surface berms when washing near municipal storm sewers, keeping your yard compliant with state and local clean water guidelines."
    },
    {
        question: "How is fleet washing priced?",
        answer: "Pricing is structured per vehicle based on fleet size, vehicle type (e.g., cargo van vs. sleeper tractor with 53' trailer), frequency (weekly, bi-weekly, monthly), and whether aluminum brightening or undercarriage washing is required. We provide custom volume contracts."
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
            <section className="relative w-full min-h-[580px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/commercial-cleaning.webp"
                        alt="Mobile Fleet & Commercial Truck Washing in Green Bay & the Fox Valley"
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
                        Mobile Fleet &amp; Commercial Truck Washing in Green Bay &amp; the Fox Valley
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Scheduled on-site exterior washing, road-salt neutralization, and engine/frame degreasing. Mobile hot-water wash rigs dispatched directly to your yard—keeping your fleet clean and compliant with zero driver downtime.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Request a Fleet Washing Proposal</span>
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
                        Fully Insured ($2M Liability) · On-Site Yard Washing · Weekend &amp; After-Hours Scheduling
                    </div>
                </div>
            </section>

            {/* SECTION 1: COMMERCIAL FLEET SERVICES */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Truck size={16} />
                            <span>Zero Driver Downtime</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            On-Site Fleet Maintenance Built Around Your Schedule
                        </h2>
                    </div>

                    <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                        <p>
                            Running your drivers through commercial truck washes burns billable hours, fuel, and driver logs. We bring commercial mobile wash rigs directly to your yard, terminal, or depot on scheduled evening or weekend rotations.
                        </p>

                        <div className="pt-4">
                            <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-4">
                                Fleet Vehicles We Service:
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Class 8 Semi-Tractors &amp; 53&apos; Trailers
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Complete cab hand washes, bug removal, fuel tank detailing, and trailer washdowns (reefers, dry vans, flatbeds).
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Last-Mile Delivery Vans &amp; Box Trucks
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        High-volume maintenance washes for parcel couriers, food distributors, and local trade contractors.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Construction &amp; Municipal Equipment
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Heavy mud evacuation, grease cutting, and undercarriage flushing on dump trucks, concrete mixers, loaders, and excavators.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <div className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Utility &amp; Service Fleets
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Consistent, uniform presentation for service vans, pickups, and corporate vehicle pools.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: WISCONSIN WINTER DE-ICING & SALT MITIGATION */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Flame size={16} />
                            <span>Commercial Hot-Water Systems</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Winter Salt Neutralization &amp; Undercarriage Preservation
                        </h2>
                    </div>

                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                        <p>
                            Northeast Wisconsin winter highways are saturated with liquid magnesium chloride and abrasive road salts that actively corrode brake lines, electrical harnesses, aluminum rims, and frame rails. Standard cold-water rinses do not dissolve heavy brine crusts. We utilize commercial high-volume hot water systems combined with neutralizing wash agents to melt encrusted road salts and slow metal oxidation beneath your vehicles.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 3: DEDICATED DETAILING & BRIGHTENING CAPABILITIES */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Fleet Detailing &amp; Compliance</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Two-Step Washing, Aluminum Brightening &amp; Degreasing
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                <Droplets size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-1.5">
                                    Touchless &amp; Low-Friction Two-Step Washing
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Advanced chemical combinations that strip road film and diesel soot without scratching vinyl vehicle wraps or clear coats.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-1.5">
                                    Acid-Free Aluminum Brightening
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Safe restoration of dull or oxidized diamond plate, fuel tanks, steps, and aluminum wheels without causing milky haze or pitting.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                <Wrench size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-1.5">
                                    Fifth Wheel &amp; Engine Degreasing
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Focused hot-water degreasing to prepare tractors for DOT safety inspections and mechanical servicing.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                <Leaf size={20} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-1.5">
                                    Environmental Best Practices
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Biodegradable detergents, drain protection, and runoff management to keep your yard compliant with local stormwater regulations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SERVICE COVERAGE AREA */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                            <MapPin size={16} />
                            <span>I-41 Logistics Corridor &amp; Fox Valley</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
                            Serving Logistics Yards Along the I-41 Corridor &amp; Fox Valley
                        </h2>
                        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                Headquartered in De Pere, our mobile washing units operate throughout Brown, Outagamie, Winnebago, and surrounding counties. We regularly service industrial parks and fleet yards in Green Bay, De Pere, Appleton, Neenah, Kaukauna, and Oshkosh.
                            </p>
                            <p>
                                In addition to scheduled on-site truck wash rotations, our crews provide facility support including{" "}
                                <Link
                                    href="/services/pressure-washing"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    commercial pressure washing
                                </Link>{" "}
                                for fueling pads and maintenance bays, as well as comprehensive{" "}
                                <Link
                                    href="/service-areas/green-bay"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    parking lot and concrete cleaning
                                </Link>{" "}
                                to keep your operations clean, compliant, and hazard-free.
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
                        Request Your Commercial Fleet Washing Proposal
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Keep your commercial fleet road-ready, DOT-compliant, and brand-sharp without burning driver hours. Serving yards and depots across Green Bay, Appleton, and the Fox Valley.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Request a Fleet Washing Proposal</span>
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
