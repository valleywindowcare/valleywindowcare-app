import { Mail, Phone, ShieldCheck, CheckCircle2, Star, ArrowRight, Sparkles, Building2, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import Process from "@/components/Process";
import ServiceContent from "@/components/ServiceContent";
import SEOAuthorityEngine from "@/components/SEOAuthorityEngine";
import VanillaMapClient from "@/components/VanillaMapClient";
import PricingMatrix from "@/components/PricingMatrix";
import FAQSchema from "@/components/FAQSchema";
import dynamic from "next/dynamic";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata = {
    title: "Power & Pressure Washing Green Bay, WI | Valley Property Services",
    description: "Northeast Wisconsin's 5-star power & pressure washing company. Residential house washing, concrete flatwork, and commercial soft wash experts across Green Bay & Fox Valley.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/pressure-washing",
    },
};

const allPressureWashingFaqs = [
    {
        question: "Is soft washing safe for vinyl siding?",
        answer: "Yes, soft washing is the safest and most effective method for cleaning vinyl siding. Unlike high-pressure washing that can force water behind panels, we use low pressure (under 150 PSI) and eco-friendly detergents to dissolve dirt and algae safely."
    },
    {
        question: "Will pressure washing damage my concrete driveway?",
        answer: "No, professional pressure washing restores concrete and prevents damage. We use calibrated rotary surface cleaners to safely extract deep oil stains and organic growth, preventing the severe freeze-thaw cracking common in Wisconsin winters."
    },
    {
        question: "What surfaces are best suited for power washing?",
        answer: "Power washing is engineered for tough, durable surfaces that can withstand high pressure and thermal heat. Ideal applications include concrete driveways, aggregate walkways, parking garage decks, brick paver patios, commercial dumpster enclosures, and industrial heavy machinery."
    },
    {
        question: "What is the difference between power washing and soft washing?",
        answer: "Power washing deploys high water pressure (up to 4,000 PSI) and heated water (up to 200°F) to break down mechanical dirt, motor grease, and ground-in grime on dense masonry and concrete. Soft washing uses low pressure (under 100 PSI) with biodegradable sanitizing solutions to safely clean delicate vinyl siding and asphalt roof shingles without risking structural damage."
    },
    {
        question: "Can power washing remove motor oil and grease stains?",
        answer: "Yes. Our commercial-grade hot water power washing units heat water up to 200°F, allowing us to emulsify and lift stubborn oil spills, tire rubber marks, and barbecue grease from porous concrete and brickwork."
    },
    {
        question: "How often should I schedule power washing in Green Bay and Appleton?",
        answer: "Due to Wisconsin's high humidity during summer and heavy road salt usage during winter freeze-thaw cycles, residential driveways and commercial walkways in Green Bay, Appleton, and De Pere benefit most from annual or bi-annual professional power washing."
    },
    {
        question: "Are your pressure washing chemicals safe for pets?",
        answer: "Absolutely. Valley Property Services exclusively utilizes 100% biodegradable, non-butyl, and EPA-compliant cleaning solutions that are completely safe for your family, pets, and the local Fox Valley environment."
    },
    {
        question: "What is winter salt neutralization and concrete post-treatment?",
        answer: "Wisconsin roads use heavy calcium chloride and rock salts that degrade concrete. Our pressure washing uses specialized salt neutralizers to dissolve trapped salts, and we post-treat with algaecides to prevent organic regrowth."
    },
    {
        question: "What pressure do you use for wood decks and fences?",
        answer: "We never use high pressure on wood. We use low-pressure soft washing with specialized wood cleaners to dissolve grime and mold without gouging the wood fibers, preserving the grain."
    },
    {
        question: "How do you prevent zebra striping on concrete driveways?",
        answer: "We use professional-grade rotary surface cleaners that maintain a constant distance and uniform pressure from the concrete, ensuring a streak-free clean unlike manual wands."
    },
    {
        question: "Is your business licensed and insured?",
        answer: "Yes, we are fully licensed and carry comprehensive $2M general liability insurance to protect your property and ensure total peace of mind."
    }
];

export default function PressureWashingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Power & Pressure Washing Services",
        "serviceType": "Power Washing, Pressure Washing & Commercial Surface Cleaning",
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
            { "@type": "City", "name": "Neenah" },
            { "@type": "City", "name": "De Pere" },
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
            "name": "Power & Pressure Washing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Residential House Washing & Soft Wash"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Concrete Driveway & Sidewalk Power Washing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial Walkway & Storefront Cleaning"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Dumpster Pad & Heavy Equipment Degreasing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Roof Soft Washing"
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
                "name": "Pressure Washing",
                "item": "https://valleyexteriorpros.com/services/pressure-washing"
            }
        ]
    };

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
            <section className="!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden text-white bg-navy py-16">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/building-washing-services-1.webp"
                        alt="Professional Power and Pressure Washing in Green Bay and Fox Valley"
                        fill
                        priority={true}
                        fetchPriority="high"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
                <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">
                    <div className="max-w-4xl mb-12">
                        <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-widest mb-6">
                            <Sparkles size={16} />
                            <span>Professional High-Pressure &amp; Soft Wash Restoration</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg mx-auto text-white">
                            Professional <span className="text-gold">Power &amp; Pressure Washing</span><br />
                            <span className="text-2xl md:text-3xl mt-4 block">Green Bay &amp; Fox Valley</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-6 font-semibold leading-relaxed drop-shadow-md">
                            Valley Property Services provides premium power &amp; pressure washing services to restore and enhance your property's value across Northeast Wisconsin.
                        </p>
                        <div className="mb-6 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-bold text-white relative z-10">
                          <div className="bg-slate-900/90 text-white border border-slate-700/60 px-3.5 py-1.5 rounded-full shadow-md font-semibold text-xs md:text-sm inline-flex items-center gap-2">
                            <ShieldCheck className="text-gold" size={18} />
                            <span>Licensed &amp; $2M Insured</span>
                          </div>
                          <div className="bg-slate-900/90 text-white border border-slate-700/60 px-3.5 py-1.5 rounded-full shadow-md font-semibold text-xs md:text-sm inline-flex items-center gap-2">
                            <CheckCircle2 className="text-gold" size={18} />
                            <span>100% Satisfaction Guarantee</span>
                          </div>
                          <div className="bg-slate-900/90 text-white border border-slate-700/60 px-3.5 py-1.5 rounded-full shadow-md font-semibold text-xs md:text-sm inline-flex items-center gap-2">
                            <Star className="text-gold fill-gold" size={18} />
                            <span>4.9★ (119+ Verified Reviews)</span>
                          </div>
                        </div>
                        <div className="bg-navy/90 p-6 rounded-2xl border border-white/20 text-left mb-8 shadow-xl backdrop-blur-sm">
                            <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium">
                                Valley Property Services is a fully licensed and insured exterior restoration company physically headquartered right here in De Pere, Wisconsin. We provide residential soft washing, commercial hot-water power washing, and roof cleaning services across Green Bay, Appleton, De Pere, and the entire Fox Valley. Our proprietary low-pressure soft wash and high-temperature surface cleaning rigs effectively remove Gloeocapsa magma (roof algae), heavy motor oil stains, rust, and corrosive winter road salt without damaging siding or concrete infrastructure.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/quote"
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

                    {/* Hero Form Stack */}
                    <div className="!relative !z-10 !w-full !max-w-xl !mx-auto !bg-white !rounded-xl !shadow-2xl !overflow-hidden flex flex-col text-navy-dark min-h-[500px] sm:min-h-[480px]">
                        <div className="bg-gradient-to-br from-[#1B365D]/95 to-[#2c538c]/95 text-white w-full border-b border-white/10">
                            <div className="!flex !flex-col !items-center !justify-center !text-center !w-full pt-4 pb-2">
                                <h3 className="text-2xl font-bold !text-center !w-full !block">Get In Touch Fast</h3>
                            </div>
                            <div className="!flex !flex-row !justify-around !items-center !p-6 !w-full">
                                <a href="tel:920-609-7085" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center" rel="nofollow">
                                    <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                        <Phone size={24} className="text-gold" />
                                    </div>
                                    <div className="flex flex-col items-center !text-center w-full">
                                        <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Call Or Text</p>
                                        <p className="font-bold !text-xs sm:!text-sm whitespace-nowrap !text-center">(920) 609-7085</p>
                                    </div>
                                </a>
                                <a href="mailto:info@valleyexteriorpros.com" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center overflow-hidden" rel="nofollow">
                                    <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                        <Mail size={24} className="text-gold" />
                                    </div>
                                    <div className="flex flex-col items-center !text-center w-full px-1">
                                        <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Email Us</p>
                                        <p className="font-bold !text-[10px] sm:!text-xs break-all !text-center w-full">info@valleyexteriorpros.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <HeroForm />
                    </div>
                </div>
            </section>

            {/* THE SCIENCE OF CLEAN: DIFFERENCE BETWEEN SOFT WASHING & POWER WASHING */}
            <section className="container mx-auto px-4 py-16 max-w-6xl">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs font-black uppercase tracking-widest text-gold block mb-2">Technical Cleaning Distinction</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight">
                        What is the Scientific Difference Between Soft Washing and Power Washing?
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium mt-4">
                        The core difference lies in pressure application, thermal heat, and chemical reliance. Soft washing utilizes ultra-low pressure paired with eco-friendly algaecides to safely break down organic matter at the root level without harming delicate siding or shingles. Conversely, standard power washing deploys heated, highly pressurized water to physically blast away embedded grease, tire marks, and freeze-thaw hazards from durable concrete flatwork.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-2xl bg-gold/20 text-navy flex items-center justify-center mb-6">
                            <Home size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-4">Soft Washing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Our residential standard for siding and roofing. We use ultra-low pressure (&lt;100 PSI, similar to a garden hose) combined with custom eco-friendly algaecides to kill Gloeocapsa magma (roof algae) at the root without voiding siding warranties or stripping protective shingle granules.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-2xl bg-navy text-gold flex items-center justify-center mb-6">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-4">Standard Pressure Washing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Utilized for durable residential flatwork like concrete driveways, sidewalks, and brick pavers to eliminate slippery organic growth, dark mildew, and winter road salt spalling hazards using uniform rotary surface cleaners.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-12 h-12 rounded-2xl bg-navy text-gold flex items-center justify-center mb-6">
                            <Building2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-4">Commercial Power Washing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Heated, high-PSI cleaning up to 200°F reserved for heavy commercial grease, restaurant dumpster pads, oil stains, and industrial warehouse concrete decontamination.
                        </p>
                    </div>
                </div>
            </section>

            {/* COMMERCIAL & RESIDENTIAL POWER WASHING APPLICATIONS */}
            <section className="bg-slate-50 py-20 border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-black uppercase tracking-widest text-gold block mb-2">Versatile Exterior Capabilities</span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight">
                            Commercial &amp; Residential Power Washing Applications
                        </h2>
                        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                            From Green Bay residential homes to high-traffic commercial facilities in Appleton and De Pere, our industrial trailer rigs tackle tough exterior cleaning challenges across Northeast Wisconsin.
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
                                    First impressions matter. We eliminate hardened chewing gum, soot, food stains, and pedestrian traffic grime from commercial walkways and retail shopping center entryways.
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

            {/* WHY WISCONSIN WEATHER REQUIRES REGULAR POWER WASHING */}
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
                                href="/quote"
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

            {/* PROPERTY PROTECTION PROTOCOL */}
            <section className="bg-slate-50 py-16 border-y border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center mb-12">
                        Our Strict Property Protection Protocol
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors">
                            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gold/20 text-navy-dark flex items-center justify-center text-sm font-black tracking-tighter">01</span>
                                Pre-Wash Inspection
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                Before any equipment is started, our technicians conduct a comprehensive walkthrough to document existing oxidation, failing window seals, or delicate architectural features.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors">
                            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gold/20 text-navy-dark flex items-center justify-center text-sm font-black tracking-tighter">02</span>
                                Botanical Safeguards
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                Your landscaping is an investment. We thoroughly pre-hydrate and post-hydrate all surrounding plants, grass, and vegetation with fresh water to completely neutralize any cleaning solutions.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors">
                            <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-full bg-gold/20 text-navy-dark flex items-center justify-center text-sm font-black tracking-tighter">03</span>
                                Low-Pressure Guarantee
                            </h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                We strictly prohibit the use of destructive high-pressure blasting on delicate surfaces like vinyl siding and asphalt roofs, ensuring your manufacturer warranties remain perfectly intact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ESTIMATED PROJECT BASE // GET A FREE QUOTE CTA */}
            <div className="container mx-auto px-4 max-w-4xl text-center my-12 py-10 bg-white rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-3xl font-extrabold text-navy mb-4">Ready to Get a Custom Quote?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6 text-lg">
                    Contact our owner-operator team today for a free, exact estimate tailored to your property's specific size and cleaning needs.
                </p>
                <Link href="/quote" className="inline-block bg-gold hover:bg-gold-light text-navy font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-lg">
                    Get Your Custom Quote Today
                </Link>
            </div>

            {/* GLOBALLY STANDARDIZED PRICING MATRIX (GEO) */}
            <PricingMatrix
                title="Transparent Pressure & Power Washing Pricing"
                description="Professional exterior cleaning in the Fox Valley ranges based on the specific methodology required, total square footage, and severity of organic or grease contamination."
                rateTitle="Per Square Foot Rate"
                ratePrice="$0.15 - $0.35 / Sq. Ft."
                rateDetails="Calculated based on the dimensions of your flatwork or vertical siding."
                minimumPrice="$200.00"
                minimumDetails="Our baseline rate to deploy our commercial hot-water surface cleaners and soft wash systems."
                variableTitle="Cost Variables"
                variableDetails="Final price depends on deep oil stain extraction, heavy rust removal, freeze-thaw cracking prep, and commercial compliance requirements."
            />

            <Process isCommercial={true} />

            {/* COMMERCIAL AUTHORITY EXPANSION PAYLOAD */}
            <section className="bg-slate-50 py-16 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Dedicated Commercial Maintenance</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            As a leading Professional Pressure &amp; Power Washing Company in Wisconsin, we deploy massive hot-water trailer rigs specifically engineered to handle high-liability commercial accounts.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/30 transition-colors">
                            <h3 className="text-xl font-bold text-navy mb-3">Dumpster Pad Cleaning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Restaurant and retail dumpster pads are notorious for breeding severe bacteria, extremely dangerous slip hazards, and foul odors. Our 200°F steam-cleaning system emulsifies heavily set-in grease and bio-hazards, completely restoring sanitary conditions while adhering to strict environmental wastewater runoff protocols.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/30 transition-colors">
                            <h3 className="text-xl font-bold text-navy mb-3">Storefront Washing &amp; Concrete</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Your building's facade and entryways directly impact customer perception. We provide massive-scale storefront washing, removing deeply embedded chewing gum, atmospheric soot, and rust stains from high-traffic commercial concrete without disrupting your daily business operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceContent
                title="Power & Pressure Washing"
                description="Valley Property Services provides premium power and pressure washing services."
                benefits={["Professional Quality", "Fully Insured", "Satisfaction Guaranteed"]}
                process={["Free Quote", "Schedule Service", "Enjoy Your Clean Property"]}
                image="/images/portfolio/pressure-washing.webp"
            />

            <section className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-slate-50 border-l-4 border-gold p-6 md:p-8 rounded-r-xl shadow-sm border-t border-r border-b border-slate-100">
                    <p className="text-gray-700 leading-relaxed font-medium text-lg mb-0 text-left">
                        <strong>Looking for dedicated paver restoration, leveling, and polymeric sanding?</strong> We have launched a specialized division just for hardscapes! Visit our sister company, <a href="https://greenbaypavercleaning.com" target="_blank" rel="noopener" className="text-blue-600 font-bold hover:text-gold underline transition-colors">Green Bay Paver Cleaning</a>, for premium sealing and restoration across the Fox Valley.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-8 mb-12">
                <SEOAuthorityEngine serviceSlug="pressure-washing" serviceName="Power & Pressure Washing" />
            </div>

            {/* REVIEWS SLIDER */}
            <div className="py-12 bg-slate-50 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-5xl text-center mb-8">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                        Verified 5-Star Customer Reviews
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">
                        See why property owners in Green Bay, Appleton, and De Pere trust Valley Property Services for power &amp; pressure washing.
                    </p>
                </div>
                <ReviewSlider />
            </div>

            {/* COMMERCIAL ENVIRONMENTAL COMPLIANCE */}
            <section className="bg-navy text-white w-full py-16 font-sans relative z-10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gold text-center mb-8">
                        Commercial Environmental Compliance &amp; Zero-Runoff Protocols
                    </h2>
                    <div className="bg-navy p-8 md:p-10 rounded-2xl border border-white/20 shadow-2xl">
                        <p className="text-lg text-gray-100 leading-relaxed font-medium">
                            For commercial properties in the Fox Valley, environmental liability is a critical concern. Valley Property Services operates in strict compliance with Wisconsin Department of Natural Resources (WDNR) and EPA regulations. We utilize advanced wastewater recovery protocols to ensure that heavy grease, toxic suspended solids, and chemical runoff never enter the Lower Fox River or municipal storm drains. By employing eco-friendly, non-butyl degreasers and professional water reclamation systems, we protect your business from regulatory fines while delivering a pristine clean.
                        </p>
                    </div>
                </div>
            </section>

            <div className="bg-slate-50 border-t border-gray-200 relative">
                <VanillaMapClient />
            </div>

            <section className="container mx-auto px-4 py-16 max-w-4xl">
                <FAQSchema faqs={allPressureWashingFaqs} />
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    {allPressureWashingFaqs.map((faq, index) => (
                        <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-gold/30 hover:shadow-md transition-all">
                            <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
                            <h3 className="text-xl font-bold text-navy-dark mb-3 pl-4">{faq.question}</h3>
                            <p className="text-gray-700 leading-relaxed font-medium pl-4 text-lg">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
