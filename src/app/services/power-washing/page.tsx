import { Mail, Phone, ShieldCheck, CheckCircle2, Star, Clock, Calendar, ArrowRight, Sparkles, Building2, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import Process from "@/components/Process";
import PricingMatrix from "@/components/PricingMatrix";
import FAQSchema from "@/components/FAQSchema";
import VanillaMapClient from "@/components/VanillaMapClient";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata = {
    title: "Expert Power Washing Services in Green Bay & Appleton | Valley Property Services",
    description: "Northeast Wisconsin's premier power washing company. High-pressure concrete washing, commercial walkways, and heavy equipment degreasing in Green Bay, Appleton & De Pere.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/power-washing",
    },
};

export default function PowerWashingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Expert Power Washing Services",
        "serviceType": "Power Washing & High-Pressure Surface Cleaning",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "@id": "https://valleyexteriorpros.com/#organization",
            "name": "Valley Property Services",
            "telephone": "920-609-7085",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "De Pere",
                "addressRegion": "WI",
                "postalCode": "54115",
                "streetAddress": "462 S Good Hope Rd"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "Green Bay" },
            { "@type": "City", "name": "Appleton" },
            { "@type": "City", "name": "De Pere" },
            { "@type": "City", "name": "Neenah" },
            { "@type": "City", "name": "Oshkosh" }
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
            "name": "Power Washing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Concrete Driveway Power Washing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial Walkway & Storefront Power Washing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dumpster Pad & Heavy Equipment Power Washing"
                    }
                }
            ]
        }
    };

    const breadcrumbLd = {
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
                "name": "Power Washing",
                "item": "https://valleyexteriorpros.com/services/power-washing"
            }
        ]
    };

    const powerWashingFaqs = [
        {
            question: "What surfaces are best suited for power washing?",
            answer: "Power washing is engineered for tough, durable surfaces that can withstand high pressure and thermal heat. Ideal applications include concrete driveways, aggregate walkways, parking garage decks, brick paver patios, commercial dumpster enclosures, and industrial heavy machinery."
        },
        {
            question: "How does power washing differ from soft washing?",
            answer: "Power washing deploys high water pressure (up to 4,000 PSI) and hot water to break down mechanical dirt, grease, and ground-in grime on dense surfaces like concrete. Soft washing uses low pressure (under 100 PSI) with biodegradable sanitizing solutions to safely clean delicate vinyl siding and asphalt roof shingles without risking structural damage."
        },
        {
            question: "How often should I schedule power washing in Green Bay and Appleton?",
            answer: "Due to Wisconsin's high humidity during summer and heavy road salt usage during winter freeze-thaw cycles, residential driveways and commercial walkways in Green Bay and Appleton benefit most from annual or bi-annual professional power washing."
        },
        {
            question: "Can power washing remove motor oil and grease stains?",
            answer: "Yes. Our commercial-grade hot water power washing units heat water up to 200°F, allowing us to emulsify and lift stubborn oil spills, tire rubber marks, and barbecue grease from porous concrete and brickwork."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden text-white bg-navy pt-12 pb-20">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/pressure-washing.webp"
                        alt="Expert power washing service in Green Bay and Appleton by Valley Property Services"
                        fill
                        priority={true}
                        fetchPriority="high"
                        quality={90}
                        sizes="100vw"
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/80 z-10" />

                <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center mt-6">
                    <div className="max-w-4xl mb-10">
                        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest mb-6">
                            <Sparkles size={16} />
                            <span>Professional High-Pressure Restoration</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg text-white">
                            Expert Power Washing Services in Green Bay &amp; Appleton
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                            Restore embedded concrete flatwork, eliminate hazardous winter salt deposits, and sanitize high-traffic commercial spaces with our advanced commercial power washing systems.
                        </p>

                        {/* Badges */}
                        <div className="flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-bold text-white mb-8">
                            <div className="bg-slate-900/90 border border-slate-700/60 px-4 py-2 rounded-full shadow-md inline-flex items-center gap-2">
                                <ShieldCheck className="text-gold" size={18} />
                                <span>Licensed &amp; $2M Insured</span>
                            </div>
                            <div className="bg-slate-900/90 border border-slate-700/60 px-4 py-2 rounded-full shadow-md inline-flex items-center gap-2">
                                <CheckCircle2 className="text-gold" size={18} />
                                <span>100% Satisfaction Guarantee</span>
                            </div>
                            <div className="bg-slate-900/90 border border-slate-700/60 px-4 py-2 rounded-full shadow-md inline-flex items-center gap-2">
                                <Star className="text-gold fill-gold" size={18} />
                                <span>4.9★ (119+ Verified Reviews)</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="bg-gold hover:bg-gold-light text-navy-dark font-black py-4 px-8 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 text-base uppercase tracking-wider"
                            >
                                Get a Free Quote
                            </Link>
                            <Link
                                href="/online-booking"
                                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-full shadow-md transition-all text-base uppercase tracking-wider backdrop-blur-sm"
                            >
                                Book Online Instant
                            </Link>
                        </div>
                    </div>

                    {/* Integrated Lead Form Stack */}
                    <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden text-navy-dark border border-gray-200 mt-4">
                        <div className="bg-gradient-to-r from-navy to-navy-dark text-white p-6 text-center border-b border-white/10">
                            <h3 className="text-2xl font-bold">Request Fast Power Washing Estimate</h3>
                            <p className="text-sm text-gray-300 mt-1">Direct response from our De Pere headquarters</p>
                        </div>
                        <div className="p-6">
                            <HeroForm idPrefix="power-washing-hero" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: What is the difference between Power Washing and Soft Washing? */}
            <section className="container mx-auto px-4 py-20 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs font-black uppercase tracking-widest text-gold block mb-2">Technical Cleaning Distinction</span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
                        What is the difference between Power Washing and Soft Washing?
                    </h2>
                    <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                        Understanding when to utilize high-pressure power washing versus low-pressure soft washing is crucial for protecting your property while achieving deep decontamination.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                    {/* Power Washing Card */}
                    <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-navy text-gold flex items-center justify-center mb-6">
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-navy mb-4">
                                High-Pressure Power Washing
                            </h3>
                            <p className="text-gray-700 leading-relaxed font-medium mb-6">
                                Professional <strong>power washing</strong> uses heavy-duty commercial equipment to deliver heated, high-pressure water streams (typically 3,000 to 4,000+ PSI). This immense mechanical energy is specifically engineered for tough stains, embedded dirt, motor oil leaks, and tire rubber marks on durable masonry and concrete flatwork.
                            </p>
                            <ul className="space-y-3 text-sm font-semibold text-gray-700">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-gold shrink-0" size={18} />
                                    <span>Heated water up to 200°F for deep oil emulsification</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-gold shrink-0" size={18} />
                                    <span>Porous concrete driveways, sidewalks &amp; commercial pads</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-gold shrink-0" size={18} />
                                    <span>High-PSI rotary surface cleaners for uniform streak-free results</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <span className="text-xs font-bold text-navy-dark uppercase tracking-wider block">Best For: Durable Concrete, Brick &amp; Industrial Sites</span>
                        </div>
                    </div>

                    {/* Soft Washing Card */}
                    <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-gold/20 text-navy flex items-center justify-center mb-6">
                                <Home size={24} />
                            </div>
                            <h3 className="text-2xl font-extrabold text-navy mb-4">
                                Low-Pressure Soft Washing
                            </h3>
                            <p className="text-gray-700 leading-relaxed font-medium mb-6">
                                Soft washing relies on specialized low-pressure chemical delivery systems (under 100 PSI) combined with biodegradable algaecide surfactants. Instead of blasting delicate siding with high pressure, soft washing safely sanitizes living bacterial spores, lichen, and algae at the root level without water intrusion or surface damage.
                            </p>
                            <ul className="space-y-3 text-sm font-semibold text-gray-700">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-green-600 shrink-0" size={18} />
                                    <span>Gentle pressure equivalent to a standard garden hose</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-green-600 shrink-0" size={18} />
                                    <span>Vinyl, fiber cement, stucco, and asphalt roof shingles</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="text-green-600 shrink-0" size={18} />
                                    <span>Protects manufacturer warranties and prevents siding oxidation</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-200">
                            <span className="text-xs font-bold text-navy-dark uppercase tracking-wider block">Best For: Residential Siding, Soffits &amp; Shingle Roofs</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Commercial & Residential Power Washing Applications */}
            <section className="bg-slate-50 py-20 border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-black uppercase tracking-widest text-gold block mb-2">Versatile Exterior Capabilities</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
                            Commercial &amp; Residential Power Washing Applications
                        </h2>
                        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                            From Green Bay residential homes to high-traffic commercial facilities in Appleton and De Pere, our commercial-grade trailer rigs tackle tough exterior cleaning challenges across Northeast Wisconsin.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Application 1 */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-gold/50 transition-all flex flex-col justify-between">
                            <div>
                                <div className="bg-navy/10 w-12 h-12 rounded-2xl flex items-center justify-center text-navy font-bold mb-4">
                                    01
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">Concrete Driveways &amp; Sidewalks</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Our high-temperature power washing blasts out embedded winter road salts, tire tracks, and dark mold growth on residential concrete driveways, walkways, and patios.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-bold text-gold uppercase">
                                Residential Driveway Care
                            </div>
                        </div>

                        {/* Application 2 */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-gold/50 transition-all flex flex-col justify-between">
                            <div>
                                <div className="bg-navy/10 w-12 h-12 rounded-2xl flex items-center justify-center text-navy font-bold mb-4">
                                    02
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">Commercial Walkways &amp; Storefronts</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    First impressions matter. We eliminate hardened chewing gum, food stains, and pedestrian traffic grime from commercial walkways and retail shopping center entryways.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-bold text-gold uppercase">
                                Retail &amp; Office Facilities
                            </div>
                        </div>

                        {/* Application 3 */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-gold/50 transition-all flex flex-col justify-between">
                            <div>
                                <div className="bg-navy/10 w-12 h-12 rounded-2xl flex items-center justify-center text-navy font-bold mb-4">
                                    03
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">Dumpster Pads &amp; Loading Docks</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Restaurant and industrial dumpster pads accumulate thick layers of grease, bio-matter, and foul odors. Our 200°F power washing sanitizes surfaces and removes slip hazards.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-bold text-gold uppercase">
                                Health Code Compliance
                            </div>
                        </div>

                        {/* Application 4 */}
                        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm hover:border-gold/50 transition-all flex flex-col justify-between">
                            <div>
                                <div className="bg-navy/10 w-12 h-12 rounded-2xl flex items-center justify-center text-navy font-bold mb-4">
                                    04
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">Heavy Equipment &amp; Industrial Pads</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Contractors and logistics facilities trust our high-pressure mobile power washing rigs to degrease fleet equipment, concrete staging areas, and warehouse bays.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-bold text-gold uppercase">
                                Heavy Fleet Degreasing
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Why Wisconsin Weather Requires Regular Power Washing */}
            <section className="container mx-auto px-4 py-20 max-w-6xl">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-6 space-y-6">
                        <span className="text-xs font-black uppercase tracking-widest text-gold block">Regional Climate Impact</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
                            Why Wisconsin Weather Requires Regular Power Washing
                        </h2>
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                            Northeast Wisconsin experiences some of the most volatile weather swings in the Midwest. In communities like <strong>Green Bay</strong>, <strong>Appleton</strong>, and <strong>De Pere</strong>, our proximity to the Bay and Lake Michigan creates dense summer humidity followed by brutal sub-zero winter temperatures.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                <h4 className="text-base font-bold text-navy mb-1 flex items-center gap-2">
                                    <span className="text-gold">☀️</span> Summer Humidity &amp; Algae Proliferation
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Prolonged summer humidity combined with frequent rainfall creates an ideal breeding ground for green algae, black mold, and slippery lichen on shaded concrete flatwork and exterior surfaces.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                                <h4 className="text-base font-bold text-navy mb-1 flex items-center gap-2">
                                    <span className="text-gold">❄️</span> Freeze/Thaw Cycles &amp; Road Salt Spalling
                                </h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    During winter, road crews spread thousands of pounds of corrosive calcium chloride and rock salt. When moisture freezes and thaws inside porous concrete pores, it causes irreversible surface spalling and cracking unless thoroughly extracted with seasonal power washing.
                                </p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-navy hover:bg-navy-dark text-white font-bold py-4 px-8 rounded-full shadow-md transition-all text-sm uppercase tracking-wider"
                            >
                                <span>Schedule Seasonal Power Washing</span>
                                <ArrowRight size={16} className="text-gold" />
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="relative w-full h-80 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                            <Image
                                src="/images/portfolio/concrete-cleaning.webp"
                                alt="Concrete power washing removing deep grime in Wisconsin"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-8">
                                <div className="text-white">
                                    <p className="text-xs font-bold text-gold uppercase tracking-widest">Local Wisconsin Protection</p>
                                    <p className="text-xl font-extrabold">Prevent $1,000s in Concrete Replacement Costs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CALL TO ACTION BANNER */}
            <section className="bg-navy text-white py-16 px-4 relative overflow-hidden">
                <div className="container mx-auto max-w-5xl text-center relative z-10 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Protect Your Property with Professional Power Washing
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        Contact Valley Property Services today for a free, fast estimate on residential and commercial power washing in Green Bay, Appleton, De Pere, and across the Fox Valley.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                        <Link
                            href="/contact"
                            className="bg-gold hover:bg-gold-light text-navy-dark font-black py-4 px-10 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 text-base uppercase tracking-wider"
                        >
                            Get a Free Quote
                        </Link>
                        <a
                            href="tel:920-609-7085"
                            className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold py-4 px-8 rounded-full shadow-md transition-all text-base flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>(920) 609-7085</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* PRICING MATRIX */}
            <PricingMatrix
                title="Transparent Power Washing Pricing in Green Bay & Appleton"
                description="Our flat-rate power washing pricing is calculated based on exact surface square footage, severity of contamination, and required water heating temperatures."
                rateTitle="Flatwork Square Footage Rate"
                ratePrice="$0.18 - $0.35 / Sq. Ft."
                rateDetails="Calculated per square foot for concrete driveways, commercial walkways, and patios."
                minimumPrice="$200.00"
                minimumDetails="Our baseline mobilization rate for commercial hot-water trailer rigs."
                variableTitle="Price Factors"
                variableDetails="Deep grease extraction, chewing gum removal, and commercial water reclamation protocols."
            />

            {/* PROCESS SECTION */}
            <Process isCommercial={true} />

            {/* REVIEWS SLIDER */}
            <div className="py-12 bg-slate-50">
                <div className="container mx-auto px-4 max-w-5xl text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                        Verified 5-Star Customer Reviews
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                        See why property owners in Green Bay and Appleton trust Valley Property Services for power washing.
                    </p>
                </div>
                <ReviewSlider />
            </div>

            {/* MAP AND FAQS */}
            <div className="bg-white border-t border-gray-200">
                <VanillaMapClient />
            </div>

            <section className="container mx-auto px-4 py-16 max-w-4xl">
                <FAQSchema faqs={powerWashingFaqs} />
            </section>
        </main>
    );
}
