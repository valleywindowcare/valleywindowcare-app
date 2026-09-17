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
    Warehouse,
    Tractor,
    Droplets,
    Wind,
    Flame,
    Wrench,
    ShieldAlert,
    Gauge,
    Layers,
    Activity,
    Shield
} from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata: Metadata = {
    title: {
        absolute: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
    },
    description: "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/barn-cleaning",
    },
    openGraph: {
        title: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
        description: "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
        url: "https://valleyexteriorpros.com/services/barn-cleaning",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/commercial-roof-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Wisconsin Agricultural Barn Cleaning, Roof Soft Washing & Interior Restoration",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
        description: "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/commercial-roof-cleaning.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wisconsin Agricultural Barn Cleaning, Roof Soft Washing & Interior Restoration",
    "serviceType": "Agricultural Barn Soft Washing & Interior Facility Sanitation",
    "description": "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
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
        { "@type": "City", "name": "De Pere" },
        { "@type": "City", "name": "Oshkosh" },
        { "@type": "City", "name": "Fond du Lac" },
        { "@type": "City", "name": "Sheboygan" },
        { "@type": "City", "name": "Manitowoc" },
        { "@type": "City", "name": "Wausau" }
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
        "name": "Agricultural Barn Cleaning & Restoration Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Dedicated Non-Pressure Roof Soft Washing (Standing Seam, Corrugated & Shingle)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Deep Interior Barn Washouts & High-Dusting (Hot-Water Biofilm Eradication)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Dairy Parlor, Swine & Poultry Facility Biosecure Sanitation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Historic Gambrel & Timber Truss Restoration for Wedding Venue Conversions"
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
            "name": "Do you travel throughout the entire state of Wisconsin for barn cleaning?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. While based in De Pere, Valley Property Services provides mobile barn roof soft washing and interior washouts across all of Wisconsin, including multi-building dairy operations, equine facilities, and historic event barns."
            }
        },
        {
            "@type": "Question",
            "name": "What if our rural barn property has low water pressure or a weak well?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our commercial mobile wash trailers are equipped with large onboard water buffer tanks. This allows us to wash at high flow rates without draining or overheating your property's residential or agricultural well pump."
            }
        },
        {
            "@type": "Question",
            "name": "Can you clean 30-foot cathedral timber ceilings and roof rafters?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We utilize articulating aerial lifts, specialized high-reach carbon-fiber lances, and high-volume air sweeps to remove heavy dust, bird waste, and cobwebs from peak rafters and timber trusses safely."
            }
        },
        {
            "@type": "Question",
            "name": "How do you wash metal barn roofs without causing leaks or damage?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We strictly use dedicated low-pressure chemical soft washing—never high pressure. Our process eliminates lichen, moss, and algae at the root under gentle pressure, protecting fastener gaskets, lap seams, and painted finishes."
            }
        },
        {
            "@type": "Question",
            "name": "Do you prepare historic barns for rustic wedding and event venue conversions?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We frequently work with venue owners to transform dusty agricultural barns into clean event spaces, neutralizing odors, removing decades of bat and bird residue, and restoring weathered timber surfaces."
            }
        }
    ]
};

const faqs = [
    {
        question: "Do you travel throughout the entire state of Wisconsin for barn cleaning?",
        answer: "Yes. While based in De Pere, Valley Property Services provides mobile barn roof soft washing and interior washouts across all of Wisconsin, including multi-building dairy operations, equine facilities, and historic event barns."
    },
    {
        question: "What if our rural barn property has low water pressure or a weak well?",
        answer: "Our commercial mobile wash trailers are equipped with large onboard water buffer tanks. This allows us to wash at high flow rates without draining or overheating your property's residential or agricultural well pump."
    },
    {
        question: "Can you clean 30-foot cathedral timber ceilings and roof rafters?",
        answer: "Yes. We utilize articulating aerial lifts, specialized high-reach carbon-fiber lances, and high-volume air sweeps to remove heavy dust, bird waste, and cobwebs from peak rafters and timber trusses safely."
    },
    {
        question: "How do you wash metal barn roofs without causing leaks or damage?",
        answer: "We strictly use dedicated low-pressure chemical soft washing—never high pressure. Our process eliminates lichen, moss, and algae at the root under gentle pressure, protecting fastener gaskets, lap seams, and painted finishes."
    },
    {
        question: "Do you prepare historic barns for rustic wedding and event venue conversions?",
        answer: "Yes. We frequently work with venue owners to transform dusty agricultural barns into clean event spaces, neutralizing odors, removing decades of bat and bird residue, and restoring weathered timber surfaces."
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
            <section className="relative w-full min-h-[620px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/commercial-roof-cleaning.webp"
                        alt="Wisconsin Agricultural Barn Cleaning, Roof Soft Washing & Interior Restoration"
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
                        Wisconsin Agricultural Barn Cleaning, Roof Soft Washing &amp; Interior Restoration
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Statewide mobile service for dairy facilities, horse stables, modern pole buildings, and historic timber barns. Equipped with commercial hot-water rigs, remote water buffer tanks, and aerial reach systems to handle multi-acre agricultural properties with zero down-time.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote?service=barn-cleaning"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Statewide Barn Estimate</span>
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
                        Statewide Wisconsin Travel · $2M Commercial Liability · On-Site Water Buffer Support · Bio-Security Protocol Compliant
                    </div>
                </div>
            </section>

            {/* SECTION 1: EXTERIOR AGRICULTURAL WASHING CAPABILITIES */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Droplets size={16} />
                            <span>Chemical Low-Pressure Preservation</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Dedicated Non-Pressure Roof &amp; Exterior Soft Washing
                        </h2>
                    </div>

                    <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                        <p>
                            Decades of biological infestation—heavy lichen crusts, moss carpets, and <em>Gloeocapsa magma</em> algae—destroy the factory coatings on corrugated metal, corrode exposed fasteners, and rot cedar shake roofing. Blasting agricultural roofs with standard high pressure strips protective paint layers, loosens metal seam crimps, and injects water under flashings. We utilize custom chemical soft wash delivery systems applying biodegradable algaecides under 300 PSI, neutralizing root structures down to the substrate.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-4">
                                Specialized Surfaces:
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Standing Seam &amp; Corrugated Metal Roofs
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Gentle lichen dissolution and chemical rust pre-treatment without surface denting or seam degradation.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Historic Gambrel &amp; Timber Barn Shingles
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Safe moss and mold extermination preserving fragile decking, weathered asphalt, and cedar shakes.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Board &amp; Batten, Siding Panels &amp; Masonry Foundations
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Removal of road dust, soil splash-back, and biological growth from fieldstone, poured concrete, and weathered pine siding.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                    <h4 className="font-bold text-navy text-base mb-1.5 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-gold shrink-0"></span>
                                        Silos &amp; Outbuildings
                                    </h4>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        High-reach soft wash cleaning of concrete stave silos, bulk feed bins, and machinery sheds.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: COMPREHENSIVE INTERIOR BARN WASHOUTS & HIGH-DUSTING */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Warehouse size={16} />
                            <span>Facility Decontamination &amp; Restoration</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Interior Sanitation, Truss Cobweb Blasting &amp; Deep Degreasing
                        </h2>
                    </div>

                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                        <p>
                            Interior agricultural accumulations present severe dust-explosion hazards, reduce air quality, and fail municipal or food-safety inspections. Our industrial rigs deliver up to 200°F commercial hot water and specialty high-reach air/water lances to strip decades of grime from cathedral ceilings down to concrete floors.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-sm font-black text-navy uppercase tracking-widest mb-4">
                                Facility Focus Areas:
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                                            <Tractor size={18} />
                                        </div>
                                        <h4 className="font-bold text-navy text-base">
                                            Commercial Dairy Parlors &amp; Holding Areas
                                        </h4>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        High-temperature washouts of parlor pits, milking stalls, stainless wash lines, and glazed tile, eliminating milkstone, organic waste, and biofilm.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <h4 className="font-bold text-navy text-base">
                                            Equine Barns, Stables &amp; Indoor Arenas
                                        </h4>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Stall-by-stall sanitation, rubber mat extraction, wash rack degreasing, and arena rafter dust mitigation to protect equine respiratory health.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                                            <Sparkles size={18} />
                                        </div>
                                        <h4 className="font-bold text-navy text-base">
                                            Pre-Sale Prep &amp; Wedding Venue Conversions
                                        </h4>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Specialized deep-cleaning for historic post-and-beam structures. We strip centuries of cobwebs, swallow nests, bird droppings, and diesel soot while preserving natural aged timber patina.
                                    </p>
                                </div>

                                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-9 h-9 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0">
                                            <Activity size={18} />
                                        </div>
                                        <h4 className="font-bold text-navy text-base">
                                            Poultry &amp; Swine Housing
                                        </h4>
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        Complete turn-cycle sanitation and disinfectant flushes between livestock rotations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: REMOTE FIELD INFRASTRUCTURE & BIO-SECURITY */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Gauge size={16} />
                            <span>Self-Contained Rig Infrastructure</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Fully Self-Contained Rigs for Remote Agricultural Operations
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mb-4">
                                    <Droplets size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    On-Board Water Hauling &amp; Buffer Tanks
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Rural farms often rely on low-yield private wells (3–5 GPM). Our rigs carry high-capacity buffer tanks to ensure continuous operation without straining your well pump.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mb-4">
                                    <ShieldAlert size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    Bio-Security Sanitation Protocols
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    To prevent cross-farm pathogen contamination (such as avian influenza or PRRS), our equipment, hoses, and boots undergo complete disinfection before entering your biosecure perimeter.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-navy text-gold flex items-center justify-center shrink-0 mb-4">
                                    <Shield size={20} />
                                </div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    Runoff &amp; Environmental Safeguards
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    All chemical applications are tightly metered and contained to keep wash runoff away from livestock watering troughs, surface pastures, and wetlands.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: STATEWIDE WISCONSIN SERVICE AREAS */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-3">
                            <MapPin size={16} />
                            <span>All 72 Wisconsin Counties</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
                            Serving Rural Estates, Farms &amp; Commercial Venues Statewide
                        </h2>
                        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                            <p>
                                From our central shop in De Pere, our commercial crews dispatch across all 72 Wisconsin counties:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4 pt-2 text-sm text-slate-200">
                                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                                    <strong className="text-gold block mb-1">Fox Valley &amp; Lakeshore:</strong>
                                    Brown, Outagamie, Calumet, Winnebago, Manitowoc, and Kewaunee counties.
                                </div>
                                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                                    <strong className="text-gold block mb-1">Central Wisconsin Agricultural Belt:</strong>
                                    Marathon, Clark, Wood, Portage, and Waupaca counties.
                                </div>
                                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                                    <strong className="text-gold block mb-1">Southern &amp; Eastern Dairy Hubs:</strong>
                                    Fond du Lac, Sheboygan, Dodge, Green Lake, and Dane counties.
                                </div>
                                <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700">
                                    <strong className="text-gold block mb-1">Door County &amp; Northern Regions:</strong>
                                    Agricultural estates, orchard facilities, and commercial destination event barns.
                                </div>
                            </div>
                            <p className="pt-2">
                                In addition to full barn restorations, our crews provide high-output{" "}
                                <Link
                                    href="/services/pressure-washing"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    pressure washing
                                </Link>{" "}
                                for milking parlor holding pens, feed alleys, and machinery pads, as well as comprehensive{" "}
                                <Link
                                    href="/service-areas/green-bay"
                                    className="text-gold hover:text-white font-bold underline decoration-gold/50 underline-offset-4 transition-colors"
                                >
                                    commercial exterior cleaning
                                </Link>{" "}
                                for agribusiness operations across Wisconsin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: ADVANCED SCHEMA & STRUCTURAL FAQS */}
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
                        Request Your Statewide Wisconsin Barn Cleaning Estimate
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Dedicated low-pressure soft washing and hot-water interior washouts for dairy farms, horse stables, and rustic wedding venues across all 72 counties. Fully insured ($2M Liability).
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote?service=barn-cleaning"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Statewide Barn Estimate</span>
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
