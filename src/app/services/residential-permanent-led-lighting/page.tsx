import PricingMatrix from '@/components/PricingMatrix';
import { serviceContentMap } from '@/data/serviceContent';
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
    title: "Residential Permanent LED Lighting | Valley Window Care",
    description: "Professional permanent LED lighting installation for residential homes in Green Bay and Appleton.",
};

export default function ResidentialPermanentLEDLightingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION WITH HARDCODED IMAGE REPAIR */}
            <section className={`!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden text-white bg-navy`}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/permanent-led-lighting.webp"
                        alt="Residential Permanent LED Lighting"
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
                            <span className="text-gold">Professional Permanent Holiday</span> <br className="hidden md:block" />& Architectural Lighting
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-8 font-semibold leading-relaxed drop-shadow-md">
                            Powered by Omni — The Industry’s Most Durable & Versatile Smart Lighting System.
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

            {/* HARDCODED UI COMPONENTS */}
            <section className="bg-slate-50 w-full py-16 lg:py-24 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-16 max-w-4xl mx-auto text-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex justify-center mb-8 bg-[#1B365D] p-6 rounded-2xl max-w-sm mx-auto shadow-md">
                            <Image src="/images/portfolio/Omni Certified Installer Logo (1).png" alt="Powered By Omni" width={250} height={100} className="object-contain" />
                        </div>
                        <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-6 text-left font-medium">
                            <p>
                                Say goodbye to ladders and tangled strands forever. At Valley Window Care & Exterior Cleaning, we are proud to be an authorized installer of Omni Permanent Lighting. Designed to be virtually invisible by day and spectacular by night, our track-based LED system provides elegant architectural lighting and vibrant holiday displays year-round.
                            </p>
                            <div className="mt-8 text-center pt-6">
                                <a href="https://omnilighting.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-navy text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gold hover:text-navy transition-colors">
                                    Learn more about the Omni System at OmniLighting.com &rarr;
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
                                Why We Choose Omni for Wisconsin Homes:
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">1</span>
                                    Invisible Track Design
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Omni’s patented tracks are color-matched to your home’s soffit and fascia, ensuring the system is hidden from view during the daylight hours.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">2</span>
                                    True Warm White + Millions of Colors
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Unlike cheap RGB alternatives, Omni features a dedicated 'Warm White' chip for sophisticated evening accents, plus millions of color combinations for every holiday and event.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">3</span>
                                    Engineered for the Fox Valley
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Built to withstand sub-zero temperatures, heavy ice, and UV exposure, Omni systems are rated for decades of maintenance-free performance.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">4</span>
                                    Smart App Control
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Control your entire home from your phone. Set custom schedules, choose from hundreds of pre-set patterns, or create your own unique light show with the Omni app.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            <div className="bg-slate-50 border-t border-gray-200 relative">
                
            {serviceContentMap['residential-permanent-led-lighting']?.pricing && (
                <PricingMatrix {...serviceContentMap['residential-permanent-led-lighting'].pricing} />
            )}
            <VanillaMapClient />
            </div>
            
            <FAQAccordion
                faqs={faqData["residential-permanent-led-lighting"] || faqData["christmas-lighting"] || []}
            />
        </main>
    );
}
