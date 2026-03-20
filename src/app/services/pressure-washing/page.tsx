import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import Process from "@/components/Process";
import ServiceContent from "@/components/ServiceContent";
import SEOAuthorityEngine from "@/components/SEOAuthorityEngine";
import VanillaMapClient from "@/components/VanillaMapClient";
import PricingMatrix from "@/components/PricingMatrix";

export const metadata = {
    title: "Pressure Washing | Valley Window Care",
    description: "Professional Pressure Washing services in Green Bay. Custom cleaning and safe execution.",
};

export default function PressureWashingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Pressure Washing & Soft Washing",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Valley Window Care and Exterior Cleaning",
            "telephone": "920-609-7085",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "De Pere",
                "addressRegion": "WI",
                "postalCode": "54115",
                "streetAddress": "4551 Trellis Drive E-2"
            },
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "100"
            }
        },
        "areaServed": [
            { "@type": "City", "name": "Green Bay" },
            { "@type": "City", "name": "Appleton" },
            { "@type": "City", "name": "Neenah" },
            { "@type": "City", "name": "De Pere" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pressure Washing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Residential House Washing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Commercial Concrete Cleaning"
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

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* HERO SECTION WITH HARDCODED IMAGE REPAIR */}
            <section className={`!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden text-white bg-navy`}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/building-washing-services-1.png"
                        alt="Pressure Washing"
                        fill
                        priority={true}
                        fetchPriority="high"
                        quality={100}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
                <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">
                    <div className="max-w-4xl mb-12">
                        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg mx-auto text-white`}>
                            Professional <span className="text-gold">Pressure Washing</span><br />
                            <span className="text-2xl md:text-3xl mt-4 block">Green Bay & Northeast Wisconsin</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-6 font-semibold leading-relaxed drop-shadow-md">
                            Valley Window Care and Exterior Cleaning provides premium pressure washing services to enhance your property's value.
                        </p>
                        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm text-left mb-8 shadow-lg">
                            <p className="text-base md:text-lg text-gray-100 leading-relaxed font-medium">
                                Valley Window Care is a fully licensed and insured exterior cleaning company based in De Pere, Wisconsin. We provide residential soft washing, commercial pressure washing, and roof cleaning services across Green Bay, Appleton, and the Fox Valley. Our proprietary low-pressure system effectively removes Gloeocapsa magma (roof algae), rust, and winter road salt without damaging siding or concrete infrastructure.
                            </p>
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
                                <a href="mailto:info@valleywindowcare.com" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center overflow-hidden" rel="nofollow">
                                    <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                        <Mail size={24} className="text-gold" />
                                    </div>
                                    <div className="flex flex-col items-center !text-center w-full px-1">
                                        <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Email Us</p>
                                        <p className="font-bold !text-[10px] sm:!text-xs break-all !text-center w-full">info@valleywindowcare.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <HeroForm />
                    </div>
                </div>
            </section>

            {/* THE SCIENCE OF CLEAN */}
            <section className="container mx-auto px-4 py-16 max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center mb-8">
                    What is the Scientific Difference Between Soft Washing and Power Washing?
                </h2>
                <div className="max-w-4xl mx-auto mb-12 text-center">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                        The core difference lies in pressure application and chemical reliance. Soft washing utilizes ultra-low pressure paired with eco-friendly algaecides to safely break down organic matter at the root level, protecting delicate surfaces like vinyl and shingles. Conversely, standard power washing deploys highly pressurized water to physically blast away embedded grime and freeze-thaw hazards from durable flatwork like concrete.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-navy mb-4">Soft Washing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Our residential standard. We use ultra-low pressure (similar to a garden hose) combined with custom eco-friendly algaecides to kill Gloeocapsa magma (roof algae) at the root without voiding siding warranties or stripping paint.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-navy mb-4">Standard Pressure Washing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Utilized for durable residential flatwork like concrete driveways and brick pavers to eliminate slippery organic growth and freeze-thaw hazards.
                        </p>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-navy mb-4">Commercial Power Washing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Heated, high-PSI cleaning reserved for heavy commercial grease, dumpster pads, and industrial concrete restoration.
                        </p>
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

            {/* GLOBALLY STANDARDIZED PRICING MATRIX (GEO) */}
            <PricingMatrix
                title="Transparent Pressure Washing & Local Fox Valley Pricing"
                description="Professional exterior cleaning in the Fox Valley ranges based on the specific methodology required, total square footage, and severity of organic growth."
                rateTitle="Per Square Foot Rate"
                ratePrice="$0.15 - $0.35 / Sq. Ft."
                rateDetails="Calculated based on the dimensions of your flatwork or vertical siding."
                minimumPrice="$200.00"
                minimumDetails="Our baseline rate to deploy our commercial hot-water surface cleaners and soft wash systems."
                variableTitle="Cost Variables"
                variableDetails="Final price depends on deep oil stain extraction, heavy rust removal, freeze-thaw cracking prep, and commercial compliance requirements."
            />

            <Process isCommercial={true} />

            <ServiceContent
                title="Pressure Washing"
                description="Valley Window Care and Exterior Cleaning provides premium pressure washing services."
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
                <SEOAuthorityEngine serviceSlug="pressure-washing" serviceName="Pressure Washing" />
            </div>

            {/* COMMERCIAL ENVIRONMENTAL COMPLIANCE */}
            <section className="bg-navy text-white w-full py-16 mt-4 font-sans relative z-10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-gold text-center mb-8">
                        Commercial Environmental Compliance & Zero-Runoff Protocols
                    </h2>
                    <div className="bg-white/10 p-8 md:p-10 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl">
                        <p className="text-lg text-gray-100 leading-relaxed font-medium">
                            For commercial properties in the Fox Valley, environmental liability is a critical concern. Valley Window Care operates in strict compliance with Wisconsin Department of Natural Resources (WDNR) and EPA regulations. We utilize advanced wastewater recovery protocols to ensure that heavy grease, toxic suspended solids, and chemical runoff never enter the Lower Fox River or municipal storm drains. By employing eco-friendly, non-butyl degreasers and professional water reclamation systems, we protect your business from regulatory fines while delivering a pristine clean.
                        </p>
                    </div>
                </div>
            </section>

            <div className="bg-slate-50 border-t border-gray-200 relative">
                <VanillaMapClient />
            </div>

            {/* BLUF FAQ SECTION */}
            <section className="container mx-auto px-4 py-16 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-navy mb-3">Is soft washing safe for vinyl siding?</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Yes, soft washing is the safest and most effective method for cleaning vinyl siding. Unlike high-pressure washing that can force water behind panels, we use low pressure (under 150 PSI) and eco-friendly detergents to dissolve dirt and algae safely.
                        </p>
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-navy mb-3">Will pressure washing damage my concrete driveway?</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            No, professional pressure washing restores concrete and prevents damage. We use calibrated surface cleaners to safely extract deep oil stains and organic growth, preventing the severe freeze-thaw cracking common in Wisconsin winters.
                        </p>
                    </div>
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-navy mb-3">Are your pressure washing chemicals safe for pets?</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Absolutely. Valley Window Care exclusively utilizes 100% biodegradable, non-butyl, and EPA-compliant cleaning solutions that are completely safe for your family, pets, and the local Fox Valley environment.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
