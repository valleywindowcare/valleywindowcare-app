import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import HeroForm from "@/components/HeroForm";
import { ShieldCheck, CheckCircle, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';
import PricingMatrix from '@/components/PricingMatrix';
import VanillaMapClient from '@/components/VanillaMapClient';

export const metadata = {
    title: "Permanent LED Lighting Installers | Green Bay & Appleton",
    description: "Northeast Wisconsin's certified Omni permanent holiday and architectural lighting installers. Low-profile smart track systems for homes and businesses.",
};

const faqs = [
    {
        question: "What is Omni Permanent LED Lighting, and how does it compare to other track systems?",
        answer: "Omni Permanent LED Lighting is a premium, architectural-grade smart track system designed to be permanently mounted under your home's roofline. Unlike other systems like Oelo or Trimlight, Omni utilizes a highly durable, custom-extruded aluminum track that is precisely color-matched to your existing gutters, soffit, and fascia. This ensure that by day, the system is completely invisible, maintaining your property's clean architectural lines. By night, the individually addressable RGBW LED diodes deliver stunning, high-lumen lighting. Omni also uses a dedicated, true-warm-white LED chip alongside the RGB diodes. This allows you to generate a soft, elegant 2700K warm white wash for everyday architectural security, as well as millions of vibrant holiday colors, which is a major advantage over standard RGB systems that produce a harsh, bluish-white light."
    },
    {
        question: "Is the permanent track visible from the street during the day?",
        answer: "No. The Omni track system is specifically engineered for low-profile aesthetics. The custom aluminum tracks are professionally color-matched to your home's fascia or soffits. The track mounts directly under the eave behind the drip edge, facing downward or outward depending on your home's architectural shape. The LED diodes are recessed inside the channel, meaning they do not protrude or catch the light. From the street, the track looks like a natural, built-in piece of trim molding, making the entire installation virtually invisible during the day."
    },
    {
        question: "How are the permanent LED lights controlled, and can they be scheduled?",
        answer: "The Omni system is powered by a state-of-the-art cloud controller that connects to your local Wi-Fi network. You control the lights using a dedicated smartphone app (iOS and Android). The app allows you to customize every single light diode individually, select from hundreds of pre-built holiday and sports-themed animations, or build your own custom color palettes. It features an advanced calendar scheduling system, allowing you to set programs to run automatically for specific holidays, birthdays, or game days, or activate a soft architectural warm white to turn on at sunset and off at sunrise for year-round security lighting."
    },
    {
        question: "What is the lifespan and warranty of the Omni permanent lighting system?",
        answer: "Omni permanent LED systems are built to withstand Northeast Wisconsin's extreme weather, including sub-zero winter temperatures and heavy summer storms. The LED diodes are rated for 50,000 hours of active use, which translates to over 15 to 20 years of normal operation. The system is backed by a comprehensive manufacturer's product warranty covering the diodes and controller, and Valley Property Services provides a dedicated labor warranty on our professional installations. If an individual diode ever fails, our modular track design allows us to swap out that single bulb quickly without replacing the entire track."
    },
    {
        question: "What is the electricity cost of running permanent LED lighting year-round?",
        answer: "Permanent LED lighting is incredibly energy-efficient. Because the system utilizes low-voltage DC power (12V or 24V depending on the run length), the power draw is a fraction of standard incandescent or traditional Christmas light strings. Running a standard 150-foot Omni system for 4 hours every evening costs approximately $1.50 to $3.00 per month in electricity. This allows you to use the system every night for architectural security lighting without worrying about high electric bills."
    },
    {
        question: "Do you install permanent lighting on commercial buildings and storefronts?",
        answer: "Yes, we provide professional permanent LED lighting installations for commercial properties, including retail centers, corporate offices, c-stores, and hospitality venues across the Fox Valley. Permanent commercial lighting is an excellent way to draw attention to your business, highlight your building's architecture, and display custom brand colors or seasonal holiday designs. The system also serves as highly effective night security lighting, reducing liability and protecting your storefront."
    },
    {
        question: "How long does a professional permanent lighting installation take?",
        answer: "For a standard residential home (150 to 250 linear feet), a professional installation is typically completed in 1 to 2 workdays. Our certified technicians use professional safety ladders and boom lifts to install the track securely under your eaves. We handle all low-voltage wiring, mount the weather-rated controller box, and walk you through the app setup and scheduling configurations on your phone before we leave the job site."
    }
];

export default function PermanentLEDLightingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Permanent LED Lighting Installation Services",
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
        "areaServed": ["Appleton", "Green Bay", "De Pere", "Northeast Wisconsin"],
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "500.00",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "price": "500.00"
            }
        },
        "description": "Certified installers of Omni permanent LED holiday and architectural lighting systems."
    };

    return (
        <main className="min-h-screen bg-slate-50 text-navy">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
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
                                "name": "Permanent LED Lighting",
                                "item": "https://valleyexteriorpros.com/services/permanent-led-lighting"
                            }
                        ]
                    })
                }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-navy">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/permanent-led-lighting.webp"
                        alt="Permanent LED Lighting Installation"
                        fill
                        priority={true}
                        quality={100}
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-slate-900/75 z-10"></div>
                <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center pt-24 pb-12">
                    <div className="max-w-4xl mb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg mx-auto text-white">
                            Permanent <span className="text-gold">LED Lighting</span><br />
                            <span className="text-2xl md:text-3xl mt-4 block">Green Bay & Northeast Wisconsin</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-6 font-semibold leading-relaxed drop-shadow-md">
                            Certified Omni Installers. Year-round smart holiday and architectural accent track systems.
                        </p>
                        <div className="mb-6 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-bold text-white relative z-10">
                          <div className="bg-slate-900/90 text-white border border-slate-700/60 px-3.5 py-1.5 rounded-full shadow-md font-semibold text-xs md:text-sm inline-flex items-center gap-2">
                            <span className="text-gold">🛡️</span> Licensed &amp; Insured
                          </div>
                          <div className="bg-slate-900/90 text-white border border-slate-700/60 px-3.5 py-1.5 rounded-full shadow-md font-semibold text-xs md:text-sm inline-flex items-center gap-2">
                            <span className="text-gold">✅</span> 100% Satisfaction Guarantee
                          </div>
                        </div>
                    </div>
                    {/* Hero Form Stack */}
                    <div className="relative z-10 w-full max-w-xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col text-navy-dark min-h-[500px]">
                        <div className="bg-gradient-to-br from-[#1B365D]/95 to-[#2c538c]/95 text-white w-full border-b border-white/10">
                            <div className="flex flex-col items-center justify-center text-center w-full pt-4 pb-2">
                                <h3 className="text-2xl font-bold text-center w-full block">Get In Touch Fast</h3>
                            </div>
                            <div className="flex flex-row justify-around items-center p-6 w-full">
                                <a href="tel:920-609-7085" className="min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group text-center" rel="nofollow">
                                    <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                        <Phone size={24} className="text-gold" />
                                    </div>
                                    <div className="flex flex-col items-center text-center w-full">
                                        <p className="text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase text-center">Call Or Text</p>
                                        <p className="font-bold text-xs sm:text-sm whitespace-nowrap text-center">(920) 609-7085</p>
                                    </div>
                                </a>
                                <a href="mailto:info@valleyexteriorpros.com" className="min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group text-center overflow-hidden" rel="nofollow">
                                    <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                        <Mail size={24} className="text-gold" />
                                    </div>
                                    <div className="flex flex-col items-center text-center w-full px-1">
                                        <p className="text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase text-center">Email Us</p>
                                        <p className="font-bold text-[10px] sm:text-xs break-all text-center w-full">info@valleyexteriorpros.com</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <HeroForm />
                    </div>
                </div>
            </section>

            {/* EXPANDED CONTENT AREA */}
            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* Omni Certified Installer Block */}
                    <div className="mb-16 max-w-4xl mx-auto text-center bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm not-prose">
                        <div className="flex justify-center mb-6 bg-[#1B365D] p-6 rounded-2xl max-w-xs mx-auto shadow-md">
                            <Image src="/images/portfolio/Omni Certified Installer Logo (1).webp" alt="Powered By Omni" width={250} height={100} className="object-contain" />
                        </div>
                        <p className="text-gray-700 text-lg leading-relaxed font-medium text-left max-w-2xl mx-auto">
                            Say goodbye to ladders and tangled strands forever. If you are searching for an <strong>Oelo and Trimlight Authorized Installer</strong> in Green Bay or Appleton, Valley Property Services serves as your elite alternative. We are proud to exclusively deploy Omni Permanent Lighting. Designed to be virtually invisible by day and spectacular by night, our track-based LED system provides elegant architectural lighting and vibrant holiday displays year-round.
                        </p>
                    </div>

                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading certified installer of premium Omni Permanent LED Smart Track lighting for properties throughout <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Year-round lighting is a major upgrade for any modern home. Standard holiday string lights deteriorate quickly, require dangerous ladder climbs twice a year, and clutter your eaves. By installing a custom permanent track system, you secure a long-term architectural asset.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We utilize Omni track systems built with high-lumen RGBW smart diodes. The custom-extruded aluminum track is color-matched to your home's fascia, completely hiding the tracks during the day. By night, you can choose from millions of colors, set scheduling routines, or use a soft 2700K warm white for year-round architectural accent and safety.
                        </p>
                    </section>

                    {/* SECTION 2: TECHNICAL DETAILS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Technology Behind Omni Smart Track Systems</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Many consumers compare Omni to older generation systems like Trimlight. The key difference lies in the diode structure and aluminum extrusion durability. Omni uses individually addressable LED diodes that feature a dedicated, independent warm white chip. This enables you to emit a true soft-white glow rather than the harsh, unnatural bluish-white color created by standard RGB-only tracks.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            The tracks themselves are built from heavy-gauge aluminum designed to withstand high winds, sub-zero winter temperatures, and summer UV rays. Diodes are recessed inside the track, preventing them from catching sunlight or street view angles, ensuring the track blends in with your trim.
                        </p>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Installation Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Measure & Color Match</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We inspect your roofline, calculate total linear footage, and select the aluminum track color that matches your soffit.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Precision Eave Mount</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We mount the low-profile aluminum tracks, run the low-voltage wiring, and set up a weather-rated smart controller.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">App Config & Handoff</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We hook the controller to your Wi-Fi, help you install the Omni app, and program your initial holiday schedules.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide flat-rate, linear-foot pricing based on the total complexity and length of your home's rooflines.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Surface Scale</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Small Track Package</td>
                                        <td className="p-4">Up to 100 linear ft</td>
                                        <td className="p-4 font-semibold">$1,500 - $2,500 </td>
                                        <td className="p-4">Color-matched tracks, RGBW smart diodes, Omni controller, app setup</td>
                                        <td className="p-4">1 workday</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Home Package</td>
                                        <td className="p-4 font-semibold">100 - 200 linear ft</td>
                                        <td className="p-4 font-semibold">$2,500 - $4,500 </td>
                                        <td className="p-4">Full front roofline, peaked gables, Omni controller, complete scheduling config</td>
                                        <td className="p-4">1 - 2 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Premium Estate Package</td>
                                        <td className="p-4 font-semibold">200 - 350 linear ft</td>
                                        <td className="p-4 font-semibold">$4,500 - $7,500 </td>
                                        <td className="p-4">Full perimeter track, multi-controller power injection, smart integration, tutorials</td>
                                        <td className="p-4">2 - 3 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Track System</td>
                                        <td className="p-4 font-semibold">350+ linear ft / Plaza</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Industrial controllers, high-output power amps, brand color match, overnight install</td>
                                        <td className="p-4">Flexible scheduling</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our permanent LED smart lighting systems.</p>
                        </div>
                        <div className="space-y-6 text-left">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                    <h3 className="text-xl font-bold text-navy mb-2">Q: {faq.question}</h3>
                                    <p className="text-gray-700 leading-relaxed font-medium">A: {faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
            </div>

            <FAQSchema faqs={faqs} />
            <ReviewSlider />

            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Exterior Services</h2>
                    <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
