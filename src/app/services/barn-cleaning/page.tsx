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
    CheckCircle2,
    DollarSign,
    Layers,
    Warehouse,
    Tractor,
    Droplets,
    Wind,
    Flame,
    Wrench
} from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata: Metadata = {
    title: {
        absolute: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
    },
    description: "Agricultural barn roof soft washing and complete interior washouts across all of Wisconsin. Dairy parlors, pole barns, equine facilities. Free custom quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/barn-cleaning",
    },
    openGraph: {
        title: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
        description: "Agricultural barn roof soft washing and complete interior washouts across all of Wisconsin. Dairy parlors, pole barns, equine facilities. Free custom quote.",
        url: "https://valleyexteriorpros.com/services/barn-cleaning",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/commercial-roof-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Agricultural Barn Roof Cleaning & Interior Washouts Across Wisconsin",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
        description: "Agricultural barn roof soft washing and complete interior washouts across all of Wisconsin. Dairy parlors, pole barns, equine facilities. Free custom quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/commercial-roof-cleaning.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Agricultural Barn Roof Cleaning & Interior Washouts Across Wisconsin",
    "serviceType": "Agricultural Barn Soft Washing & Interior Facility Sanitation",
    "description": "Agricultural barn roof soft washing and complete interior washouts across all of Wisconsin. Dairy parlors, pole barns, equine facilities. Free custom quote.",
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
        { "@type": "State", "name": "Wisconsin" },
        { "@type": "City", "name": "Green Bay" },
        { "@type": "City", "name": "Appleton" },
        { "@type": "City", "name": "De Pere" }
    ],
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "500",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "500.00"
        }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Agricultural & Barn Cleaning Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Low-Pressure Barn Roof Soft Washing (Metal, Cedar & Shingle)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Deep Interior Barn Washouts & Livestock Stall Sanitation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "High-Reach Timber Truss Dusting & Cobweb Blasting"
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
            "name": "Barn Cleaning",
            "item": "https://valleyexteriorpros.com/services/barn-cleaning"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://valleyexteriorpros.com/services/barn-cleaning#faq",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you travel outside of Northeast Wisconsin for barn cleaning?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We provide statewide barn roof cleaning and interior washouts across all of Wisconsin for large agricultural properties, multi-barn facilities, dairy operations, and commercial event spaces."
            }
        },
        {
            "@type": "Question",
            "name": "Will cleaning solutions harm livestock or farm animals?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For interior cleanings, animals must be temporarily relocated during washing and drying. We use specialized agricultural-grade cleaners and eco-safe degreasers, followed by complete clean-water flushes. Exterior roof treatments are carefully contained to ensure runoff does not contaminate stock tanks or pastures."
            }
        },
        {
            "@type": "Question",
            "name": "Can you clean high barn ceilings, rafters, and timber trusses?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our crews utilize high-reach extension lances, specialty air tools, and scaffolding/articulating lifts to access peak rafters, eliminating years of cobwebs, bird droppings, and dust accumulation without damaging historic framing."
            }
        },
        {
            "@type": "Question",
            "name": "How do you price agricultural barn cleaning projects?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Pricing depends on roof pitch, total square footage, water access, and the severity of interior accumulation. Because agricultural properties vary widely, we provide fast, transparent quotes based on photos or an on-site evaluation before any work begins."
            }
        }
    ]
};

const faqs = [
    {
        question: "Do you travel outside of Northeast Wisconsin for barn cleaning?",
        answer: "Yes. We provide statewide barn roof cleaning and interior washouts across all of Wisconsin for large agricultural properties, multi-barn facilities, dairy operations, and commercial event spaces."
    },
    {
        question: "Will cleaning solutions harm livestock or farm animals?",
        answer: "For interior cleanings, animals must be temporarily relocated during washing and drying. We use specialized agricultural-grade cleaners and eco-safe degreasers, followed by complete clean-water flushes. Exterior roof treatments are carefully contained to ensure runoff does not contaminate stock tanks or pastures."
    },
    {
        question: "Can you clean high barn ceilings, rafters, and timber trusses?",
        answer: "Yes. Our crews utilize high-reach extension lances, specialty air tools, and scaffolding/articulating lifts to access peak rafters, eliminating years of cobwebs, bird droppings, and dust accumulation without damaging historic framing."
    },
    {
        question: "How do you price agricultural barn cleaning projects?",
        answer: "Pricing depends on roof pitch, total square footage, water access, and the severity of interior accumulation. Because agricultural properties vary widely, we provide fast, transparent quotes based on photos or an on-site evaluation before any work begins."
    }
];

export default function BarnCleaningPage() {
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
                        src="/images/portfolio/commercial-roof-cleaning.webp"
                        alt="Agricultural Barn Roof Cleaning & Interior Washouts Across Wisconsin"
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
                        Agricultural Barn Roof Cleaning &amp; Interior Washouts Across Wisconsin
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Dedicated low-pressure roof soft washing, timber truss cobweb extraction, and complete livestock stall sanitation. Headquartered in De Pere, serving farms and rural estates statewide.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Free Agricultural Estimate</span>
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
                        Fully Insured ($2M Liability) · Statewide Wisconsin Service · Surface-Safe Equipment
                    </div>
                </div>
            </section>

            {/* SECTION 1: DEDICATED BARN ROOF SOFT WASHING */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Droplets size={16} />
                            <span>Exterior Barn Preservation</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Low-Pressure Roof Soft Washing for Metal &amp; Shingle Barns
                        </h2>
                    </div>

                    <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                        <p>
                            Decades of biological buildup—lichen, moss, and aggressive <em>Gloeocapsa magma</em> algae—eat away at painted metal roof coatings and asphalt shingle grit. High pressure ruins metal lap seams and strips protective coatings around screw heads. We utilize dedicated low-pressure chemical soft washing to eradicate root-level fungal colonies without compromising metal fasteners, tin coats, or structural integrity.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-6 pt-4">
                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                    Standing Seam &amp; Corrugated Metal
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Chemical eradication of lichen scale and rust staging without surface denting.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                    Pole Barns &amp; Machine Sheds
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    High-volume rinse systems tailored to high-pitch agricultural spans.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                                <h3 className="text-lg font-bold text-navy mb-2 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                    Historic Timber &amp; Shingle Barns
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Gentle treatments designed to preserve weathered cedar and fragile decking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: INTERIOR BARN CLEANING & SANITATION */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Warehouse size={16} />
                            <span>Agricultural Facility Decontamination</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Deep Interior Washouts, High-Dusting &amp; Cobweb Blasting
                        </h2>
                    </div>

                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                        <p>
                            Agricultural dust, cobwebs, dried manure, and bird nesting create extreme fire hazards and harbor bacteria inside operational facilities. Our crews bring industrial-grade mobile washing units, high-reach air-lance tools, and surface degreasers to sanitize the interior from the roof trusses down to the concrete slab.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                    <Tractor size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy mb-1">
                                        Dairy Parlors &amp; Milking Facilities
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Washdowns of tile, stainless steel, holding pens, and parlor pits.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy mb-1">
                                        Equine Barns &amp; Stables
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Thorough disinfectant washouts of horse stalls, rubber mats, wash racks, and aisleways.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                    <Wind size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy mb-1">
                                        Timber Framing &amp; Upper Trusses
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        High-reach dust, bird waste, and cobweb removal on cathedral-ceiling barns and event venues.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mt-1">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-navy mb-1">
                                        Pre-Sale &amp; Wedding Venue Conversions
                                    </h3>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Comprehensive restoration of rustic timber frames to eliminate musty odors, soot, and agricultural residue.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: STATEWIDE WISCONSIN TRAVEL COVERAGE */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                            <MapPin size={16} />
                            <span>All 72 Wisconsin Counties</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
                            Serving Farms, Ranches &amp; Commercial Properties Statewide
                        </h2>
                        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                While our headquarters is located in De Pere, our commercial mobile wash rigs travel to agricultural clients throughout all 72 Wisconsin counties. Whether your operation is in the Fox Valley, Door County, Central Wisconsin’s dairy belt, or the Driftless Region, we mobilize self-contained rigs equipped to tackle large square-footage barns and multi-building complexes.
                            </p>
                            <p>
                                From heavy-duty{" "}
                                <Link
                                    href="/services/pressure-washing"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    pressure washing
                                </Link>{" "}
                                for concrete aprons, feeding alleys, and manure storage pads to comprehensive{" "}
                                <Link
                                    href="/service-areas/green-bay"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    commercial exterior cleaning
                                </Link>
                                , our certified technicians arrive equipped with dedicated buffer tanks, high-flow water recovery units, and non-corrosive agricultural soft-wash formulas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
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
                                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
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
                        Request Your Free Agricultural Barn Cleaning Estimate
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Serving agricultural operations, dairy farms, equine stables, and rustic event venues across all 72 counties in Wisconsin. Fully insured with $2M liability coverage.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Free Agricultural Estimate</span>
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
                        Valley Property Services · 462 S Good Hope Rd, De Pere, WI 54115 · Fully Insured ($2M Liability) · Statewide Wisconsin Service
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
