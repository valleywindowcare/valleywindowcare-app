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
    title: "Permanent Holiday Lighting Installation | Valley Window Care",
    description: "Professional permanent holiday lighting installation in Green Bay. Custom designs and safe installation.",
};

export default function PermanentHolidayLightingPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* HERO SECTION WITH HARDCODED IMAGE REPAIR */}
            <section className={`!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden text-white bg-navy`}>
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/permanent-led-lighting.webp"
                        alt="Permanent Holiday Lighting Installation"
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
                            Professional <span className="text-gold">Permanent Holiday Lighting</span><br />
                            <span className="text-2xl md:text-3xl mt-4 block">Green Bay & Northeast Wisconsin</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-8 font-semibold leading-relaxed drop-shadow-md">
                            Valley Window Care and Exterior Cleaning provides premium permanent holiday lighting services to enhance your property's value.
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
                        <div className="text-gray-600 text-lg md:text-xl leading-relaxed space-y-6 text-left font-medium">
                            <p>
                                Maintaining your property’s curb appeal doesn't stop when the sun goes down. At Valley Window Care, we believe your home or business deserves to shine year-round. Our premium permanent LED lighting services are specifically calibrated to withstand brutal Wisconsin winters while beautifully illuminating your property's exterior architecture.
                            </p>
                            <p>
                                We are proud to partner with Omni Lighting, the industry leader in high-performance permanent track lighting. By utilizing Omni Lighting's state-of-the-art RGBW technology, we deliver unmatched brightness, color accuracy, and durability. Our proprietary, color-matched aluminum tracks are custom-cut on-site to blend seamlessly into your existing soffit and fascia, hiding the wires and hardware completely from view during the day.
                            </p>
                            <p>
                                Forget the annual hassle and danger of climbing icy ladders to hang temporary string lights. With our Omni Lighting systems, you have a 100% permanent solution. Whether you want classic warm white for nightly architectural security, vibrant green and gold for Packers game days, or dynamic animated patterns for Christmas and Halloween, complete control is always right at your fingertips.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
                                Next-Generation Lighting Features
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">1</span>
                                    Invisible Daytime Profile
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Custom color-matched tracks that blend seamlessly into your home's soffit and trim, practically invisible during the day.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">2</span>
                                    Smart App Control
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Fully customizable colors, patterns, and timers controlled directly from your smartphone from anywhere in the world.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">3</span>
                                    Safety & Convenience
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Never climb a dangerous ladder again. Enjoy effortless year-round lighting for every holiday, architectural accent, or Packers game day.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/50 transition-colors group">
                                <h4 className="text-2xl font-black text-navy mb-4 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center text-lg shadow-inner group-hover:bg-gold transition-colors">4</span>
                                    Durability & Security
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    Weather-proof, energy-efficient LED technology rated for extreme Wisconsin winters, brightening dark areas around your property at night for added peace of mind.
                                </p>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </section>

            <div className="bg-slate-50 border-t border-gray-200 relative">
                
            {serviceContentMap['christmas-lighting']?.pricing && (
                <PricingMatrix {...serviceContentMap['christmas-lighting'].pricing} />
            )}
            <VanillaMapClient />
            </div>
            
            <FAQAccordion
                faqs={faqData["permanent-holiday-lighting"] || faqData["christmas-lighting"] || []}
            />
        </main>
    );
}
