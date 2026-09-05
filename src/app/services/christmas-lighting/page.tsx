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
    title: "Professional Christmas Light Installation | Green Bay & Fox Valley",
    description: "Hang your holiday lights safely with Northeast Wisconsin's premier Christmas light installers. Custom-cut commercial-grade LED design, maintenance, removal, and storage.",
};

const faqs = [
    {
        question: "Do I buy the holiday lights, or does your company lease them?",
        answer: "We operate on a complete, all-inclusive lease model. We supply commercial-grade C9 LED lighting specifically designed and custom-cut to your home's unique roofline dimensions. Because we lease the lights, you do not have to worry about upfront bulb purchases, failing strands, or bulb deterioration. If a bulb burns out or a clip slips during the holiday season, we replace it at no charge. At the end of the season, we remove the lights, label them for your property, and store them in our climate-controlled facility. This lease structure guarantees a stress-free holiday display with brand-new, commercial-grade components every year."
    },
    {
        question: "What is the difference between commercial-grade C9 LEDs and store-bought holiday lights?",
        answer: "Standard retail lights are typically thin-gauge, mass-produced wires with non-removable bulbs that easily break, fail, or tangle. Commercial-grade C9 LED light strings are built with heavy-gauge, UV-protected copper wires and use custom socket configurations. The bulbs are threaded and utilize durable acrylic casings that are virtually shatterproof. Furthermore, because we build each display custom to your roofline, there are no messy overlapping strands or extension cords hanging over your siding. The commercial C9 bulbs are also significantly brighter, delivering a crisp, high-lumen, uniform holiday aesthetic that store-bought strands cannot match."
    },
    {
        question: "Is maintenance and bulb replacement included during the holiday season?",
        answer: "Yes, complete seasonal maintenance is included in our lease contract at zero additional cost. Wisconsin winters can bring heavy snow, ice storms, and high winds that can shift light clips or compromise wiring. If you ever notice a bulb burns out, a clip slips, or a strand stops illuminating, simply contact our office. We guarantee to send a service technician to your property within 24 to 48 hours to resolve the issue, keeping your holiday display looking perfect from Thanksgiving through New Year's."
    },
    {
        question: "When do you install the lights, and when do you remove them?",
        answer: "Our installation window begins in early October and runs through mid-December. We recommend booking early, as our schedule fills up rapidly by November. We can install the light tracks early in the autumn when temperatures are milder, and you can plug in the timers whenever you are ready to illuminate your display. Removal begins in early January, typically starting after New Year's Day, and runs through mid-February depending on winter snow accumulation and eave ice conditions. You do not need to be home for either the installation or the removal process."
    },
    {
        question: "How do you configure timers, and are they smart app-controlled?",
        answer: "We supply heavy-duty, weather-rated digital phototimers or smart outdoor plugs with every installation. The standard timers use photosensors to turn the lights on automatically at dusk and can be programmed to run for 2, 4, 6, or 8 hours, or remain on until dawn. If you prefer, we can integrate smart Wi-Fi plugs that connect to your home Wi-Fi, allowing you to set custom schedules, turn the lights on or off remotely, or integrate the display with your existing smart home systems directly from your smartphone."
    },
    {
        question: "What safety protocols do your crews follow when installing roofline lights?",
        answer: "Safety is our highest priority. Hanging holiday lights requires working on high rooflines in freezing weather, presenting major fall hazards. Our technicians are fully trained in OSHA safety guidelines, wear specialized slip-resistant footwear designed for roof pitches, and utilize professional safety harnesses and anchoring gear. We are fully insured with a $2M general liability policy and complete workers' compensation insurance, protecting you from any personal liability or injury risk on your property."
    },
    {
        question: "Do you install Christmas lights on commercial buildings or retail storefronts?",
        answer: "Yes, we have a dedicated commercial holiday lighting division serving shopping plazas, offices, restaurants, bank branches, and municipalities across Green Bay, Appleton, and De Pere. Commercial holiday displays increase customer traffic, draw attention to your storefront, and enhance employee morale. We handle the entire design, municipal power planning, overnight installation, maintenance, and seasonal storage, allowing you to focus on your holiday business operations."
    }
];

export default function ChristmasLightingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Christmas Light Installation Services",
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
        "description": "Professional commercial-grade Christmas light installation, lease, maintenance, and storage services."
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
                                "name": "Christmas Lighting",
                                "item": "https://valleyexteriorpros.com/services/christmas-lighting"
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
                        alt="Christmas Light Installation"
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
                            Holiday & <span className="text-gold">Christmas Light Hanging</span><br />
                            <span className="text-2xl md:text-3xl mt-4 block">Green Bay & Northeast Wisconsin</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-6 font-semibold leading-relaxed drop-shadow-md">
                            Safely hang your holiday lights. Custom-cut commercial-grade C9 LEDs, maintenance, removal, and storage.
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
                                <h3 className="text-2xl font-bold text-center w-full block">Get a Holiday Quote Fast</h3>
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
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional Christmas light installation and leasing services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Decorating your home for the holidays is a beloved tradition, but it presents major safety risks. Balancing on tall extension ladders in icy, freezing weather to hang holiday lights can lead to severe accidents. Furthermore, store-bought string lights fail frequently, leave messy hanging cords, and require hours of detangling and packaging every winter.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide a completely hands-free holiday solution. We design, supply, install, maintain, remove, and store your Christmas displays. We utilize commercial-grade, shatterproof C9 LED lights that are custom-cut to your home's rooflines, ensuring a spectacular, uniform glow with zero overlapping wires or extension cords.
                        </p>
                    </section>

                    {/* SECTION 2: LEASING MODEL DETAIL */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our Turnkey Lease & Storage Model</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We operate on a complete lease model, meaning you do not have to purchase expensive lighting gear that will degrade over time. We supply the lighting strands, custom-fit clips, wiring, and phototimers. If any bulb burns out or a storm shifts a strand, our crews come out and repair it at no cost.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            After the holidays, we remove the display, label the layout for your property, and store it in our dry, climate-controlled facility. This ensures your lights stay protected from dust, water, and pests, keeping them ready for a bright re-installation next season.
                        </p>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 4-Step Holiday Light Service</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Custom Design</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">We calculate your roofline lengths, help you select bulb colors (white, multi, warm, etc.), and schedule an install slot.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Pro Installation</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">Our crews hang the custom-cut C9 strands using specialized roofline clips and set up outdoor timers.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Free Maintenance</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">If a bulb burns out or a clip slips, we send a technician to fix it within 24 to 48 hours for free.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">04</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Take Down & Store</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">In January, we take down the lights, inspect all strands, label them, and store them in our climate-controlled warehouse.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide upfront, flat-rate pricing based on total linear footage and display complexity. Below is a baseline overview of our holiday lighting packages.
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
                                        <td className="p-4 font-bold text-navy">Basic Front Gutter Line</td>
                                        <td className="p-4">Up to 80 linear ft</td>
                                        <td className="p-4 font-semibold">$500 - $750 </td>
                                        <td className="p-4">Custom-cut C9 LED bulbs, gutter clips, phototimer, post-season removal & storage</td>
                                        <td className="p-4">2 - 3 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Eaves & Peaked Gables</td>
                                        <td className="p-4 font-semibold">100 - 180 linear ft</td>
                                        <td className="p-4 font-semibold">$750 - $1,200 </td>
                                        <td className="p-4">Front gutter line + all front peaked gables, commercial phototimer, seasonal maintenance</td>
                                        <td className="p-4">3 - 5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Premium Roofline & Ridges</td>
                                        <td className="p-4 font-semibold">180 - 300 linear ft</td>
                                        <td className="p-4 font-semibold">$1,200 - $2,500 </td>
                                        <td className="p-4">Complete front roofline, side gables, main ridge caps, ground stakes, timers</td>
                                        <td className="p-4">1 workday</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Plaza display</td>
                                        <td className="p-4 font-semibold">300+ linear ft / Plaza</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Storefront wash prep, high-voltage timers, multi-controller setups, overnight installs</td>
                                        <td className="p-4">Flexible off-hours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our Christmas light installation and leasing services.</p>
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
