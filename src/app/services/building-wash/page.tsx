import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import HeroForm from "@/components/HeroForm";
import Process from "@/components/Process";
import ServiceContent from "@/components/ServiceContent";
import SEOAuthorityEngine from "@/components/SEOAuthorityEngine";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData } from "@/data/faqData";
import VanillaMapClient from "@/components/VanillaMapClient";
import PricingMatrix from "@/components/PricingMatrix";

export const metadata = {
    title: "Building Washing | Valley Window Care",
    description: "Professional Building Washing services in Green Bay. Custom cleaning and safe execution.",
};

export default function BuildingWashPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION WITH HARDCODED IMAGE REPAIR */}
            <section className={`!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden text-white bg-navy`}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/house-washing.webp"
                        alt="Building Washing"
                        fill
                        priority={true}
                        quality={100}
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
                <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">
                    <div className="max-w-4xl mb-12">
                        <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg mx-auto text-white`}>
                            Professional <span className="text-gold">Building Washing</span><br />
                            <span className="text-2xl md:text-3xl mt-4 block">Green Bay & Northeast Wisconsin</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-8 font-semibold leading-relaxed drop-shadow-md">
                            Valley Window Care and Exterior Cleaning provides premium building washing services to enhance your property's value.
                        </p>
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

            <Process isCommercial={true} />

            <ServiceContent
                title="Building Washing"
                description="Valley Window Care and Exterior Cleaning provides premium building washing services."
                benefits={["Professional Quality", "Fully Insured", "Satisfaction Guaranteed"]}
                process={["Free Quote", "Schedule Service", "Enjoy Your Clean Building"]}
                protectionProtocols={[
                    {
                        title: "High-Reach Boom Precautions",
                        description: "When accessing multi-story commercial facilities, we deploy specialized, OSHA-compliant aerial lifts with non-marking tires to prevent damage to expensive corporate hardscapes."
                    },
                    {
                        title: "HVAC & Vent Sealing",
                        description: "Before washing begins, our technicians thoroughly isolate and tape off all commercial air intakes and ventilation systems to prevent fumes and chemical ingress."
                    },
                    {
                        title: "Pedestrian Traffic Control",
                        description: "We establish hard physical perimeters and highly visible warnings to guarantee completely safe ingress and egress for your employees and daily customer traffic."
                    }
                ]}
                image="/images/portfolio/building-washing.webp"
            />

            {/* GLOBALLY STANDARDIZED PRICING MATRIX (GEO) */}
            <PricingMatrix
                title="Commercial Building Washing Quotes"
                description="We deliver transparent, localized pricing for Green Bay retail spaces, warehouses, and corporate facilities."
                rateTitle="Per Square Foot Rate"
                ratePrice="Custom Assessed"
                rateDetails="Commercial jobs require a precise site walk to determine logistics, equipment needed, and height requirements."
                minimumPrice="$500.00"
                minimumDetails="Our baseline rate to mobilize commercial-grade hot water equipment, specialized high-reach lifts, and WDNR-compliant water reclaim systems."
                variableTitle="Scope Logistics"
                variableDetails="Pricing is influenced by overnight scheduling requirements, prevailing wage reporting, extreme greases, and pedestrian traffic control."
            />

            <div className="container mx-auto px-4 py-8 mb-12">
                <SEOAuthorityEngine serviceSlug="building-washing" serviceName="Building Washing" />
            </div>

            <div className="bg-slate-50 border-t border-gray-200 relative">
                <VanillaMapClient />
            </div>
            
            <section className="py-20 bg-slate-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">Get factual, direct answers regarding our commercial building washing methodology.</p>
                    </div>
                    <div className="space-y-8">
                        {(faqData["building-washing"] || []).map((faq: { question: string, answer: string }, index: number) => (
                            <div key={index} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-gold/30 hover:shadow-md transition-all">
                                <div className="absolute top-0 left-0 w-2 h-full bg-gold"></div>
                                <h3 className="text-xl font-bold text-navy-dark mb-3 pl-4">Q: {faq.question}</h3>
                                <p className="text-gray-700 leading-relaxed font-medium pl-4 text-lg">A: {faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
