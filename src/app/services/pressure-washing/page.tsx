import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import Process from "@/components/Process";
import ServiceContent from "@/components/ServiceContent";
import SEOAuthorityEngine from "@/components/SEOAuthorityEngine";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData } from "@/data/faqData";
import VanillaMapClient from "@/components/VanillaMapClient";

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
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center mb-12">
                    The Science of Clean: Soft Washing vs. Power Washing
                </h2>
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

            {/* TRANSPARENT PRICING TABLE */}
            <section className="container mx-auto px-4 py-16 max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-navy text-center mb-10">
                    Transparent Fox Valley Pricing
                </h2>
                <div className="overflow-x-auto w-full rounded-2xl shadow-lg border border-slate-200">
                    <table className="w-full text-left border-collapse min-w-[600px]">
                        <thead>
                            <tr className="bg-navy text-white text-base sm:text-lg">
                                <th className="p-4 sm:p-6 font-bold uppercase tracking-wider">Service Category</th>
                                <th className="p-4 sm:p-6 font-bold uppercase tracking-wider whitespace-nowrap">Starting Price</th>
                                <th className="p-4 sm:p-6 font-bold uppercase tracking-wider">Value Proposition</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 sm:p-6 font-semibold text-navy">House / Siding Washing</td>
                                <td className="p-4 sm:p-6 text-gold font-bold whitespace-nowrap">Starting at $150</td>
                                <td className="p-4 sm:p-6 text-gray-600">Eradication of algae/mold via safe soft wash.</td>
                            </tr>
                            <tr className="border-b border-slate-100 hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 sm:p-6 font-semibold text-navy">Full Roof Soft Wash</td>
                                <td className="p-4 sm:p-6 text-gold font-bold whitespace-nowrap">Starting at $300</td>
                                <td className="p-4 sm:p-6 text-gray-600">Removal of black streaks without shingle damage.</td>
                            </tr>
                            <tr className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 sm:p-6 font-semibold text-navy">Driveway &amp; Concrete</td>
                                <td className="p-4 sm:p-6 text-gold font-bold whitespace-nowrap">Custom per Sq. Ft.</td>
                                <td className="p-4 sm:p-6 text-gray-600">Surface restoration to prevent freeze-thaw cracking.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

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

            <div className="bg-slate-50 border-t border-gray-200 relative">
                <VanillaMapClient />
            </div>

            <FAQAccordion
                faqs={faqData["pressure-washing"] || []}
            />
        </main>
    );
}
