import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import HeroForm from "@/components/HeroForm";
import { ShieldCheck, CheckCircle, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Solar Panel Cleaning Services | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading solar panel cleaning company. Specialized pure-water spot-free cleaning to restore solar efficiency.",
};

const faqs = [
    {
        question: "Why is pure, deionized water mandatory for cleaning solar panels?",
        answer: "Solar panels are coated with specialized anti-reflective glass layers that maximize solar light absorption. Washing panels with standard municipal tap water or well water introduces hard minerals such as calcium, magnesium, and iron. As the tap water evaporates under the sun, these minerals settle onto the glass, forming a white crust (hard water spotting) that permanently etches the glass and blocks solar radiation, reducing energy output. We utilize advanced multi-stage reverse-osmosis and deionization water-filtration systems. This process strips all minerals and dissolved solids from the water (0 PPM pure water). Pure water acts as a natural solvent, dissolving dirt and dust and evaporating to leave a perfectly spot-free, residue-free finish."
    },
    {
        question: "Why should soap or chemical cleaning detergents never be used on solar panels?",
        answer: "Using standard soaps, dish detergents, or chemical window cleaners on solar panels is a major mistake. Soaps leave a thin, sticky chemical residue or film on the glass face. This film acts like a magnet, catching wind-blown dust, agricultural pollen, and industrial soot, causing the panels to get dirty far faster than before. Furthermore, harsh chemicals can react with the aluminum frames or corrode the silicone seals holding the glass panel in place, leading to moisture intrusion and wiring failures that ruin the array. We clean panels utilizing only 100% pure deionized water and specialized nylon solar brushes, ensuring a safe, residue-free clean."
    },
    {
        question: "What is thermal shock, and how do you prevent panel cracking during cleaning?",
        answer: "Solar panels absorb intense sunlight and can reach temperatures exceeding 150°F during the middle of the day. If cold water is sprayed onto a hot solar panel, the sudden temperature drop creates severe thermal stress. This stress can cause the tempered glass face to instantly shatter or micro-crack, destroying the solar cells and voiding the manufacturer's warranty. To prevent thermal shock, our crews schedule solar cleaning during the early morning hours when panels are cool, or on overcast days. We also monitor water temperatures to ensure they match the panel surface temperature, guaranteeing a safe cleaning process."
    },
    {
        question: "How much energy efficiency is lost when solar panels are dirty?",
        answer: "Dust, dirt, pollen, bird droppings, and industrial soot build up on solar panels, creating a shading barrier that prevents sunlight from reaching the photovoltaic cells. Studies from the National Renewable Energy Laboratory (NREL) show that dirty solar panels lose between 10% and 25% of their total energy generation efficiency. In agricultural areas near Appleton or industrial zones in Green Bay, this efficiency loss can be even higher. Regular solar panel cleaning removes this shading barrier, allowing your array to operate at its maximum rated output and securing the full return on your solar investment."
    },
    {
        question: "Will professional cleaning void my solar panel manufacturer's warranty?",
        answer: "No, professional cleaning will protect and maintain your manufacturer's warranty. Major solar panel manufacturers (such as SunPower, LG, and Tesla) explicitly recommend regular cleaning with pure water and soft-bristle brushes to maintain maximum system efficiency. They also warn against using high pressure, abrasive sponges, or chemical soaps, as these void the warranty. Our technicians are fully trained in manufacturer-approved cleaning guidelines, using only pure-water-fed poles and soft nylon brushes, protecting your investment and keeping your warranty secure."
    },
    {
        question: "Do you inspect the solar array for damage or cracks during the cleaning?",
        answer: "Yes, our technicians perform a visual inspection of your solar array before and after the cleaning process. We check for visible cracks or chips in the glass, physical damage to the aluminum frames, loose or hanging electrical wires, and signs of pest nesting (such as squirrels or birds nesting underneath the panels). If we detect any structural or electrical issues, we document them with high-resolution photos and report them to you so you can contact your solar installer for repairs."
    },
    {
        question: "How frequently should solar panels be professionally cleaned in Wisconsin?",
        answer: "For most residential and commercial solar arrays in Northeast Wisconsin, a professional cleaning is recommended once or twice a year. The ideal scheduling is in the late spring to remove winter soot and spring tree pollen, and in the late autumn to clean off summer dust and bird droppings before the winter snow arrives. Panels located near gravel roads, farm fields, or industrial areas may require quarterly cleanings to maintain maximum energy generation."
    }
];

export default function SolarPanelCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Solar Panel Cleaning Services",
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "@id": "https://valleyexteriorpros.com/#organization",
            "name": "Valley Property Services",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Appleton",
                "addressRegion": "WI"
            }
        },
        "areaServed": ["Appleton", "Green Bay", "De Pere", "Northeast Wisconsin"],
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "199",
            "highPrice": "550",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "199.00",
                "maxPrice": "550.00"
            }
        },
        "description": "Pure-water spot-free solar panel cleaning, frame washing, and visual array inspections."
    };

    return (
        <main className="w-full overflow-hidden bg-slate-50 text-navy">
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
                                "name": "Solar Panel Cleaning",
                                "item": "https://valleyexteriorpros.com/services/solar-panel-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Solar Panel Cleaning</span>
                    </>
                }
                description="Maximize your solar array's energy output. Specialized mineral-free pure water cleaning for residential and commercial solar panels."
                bgImage="/images/portfolio/solar-panel-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional solar panel cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Solar panel arrays are a major investment, built to lower your energy bills and carbon footprint. However, because they are constantly exposed to the elements, panels collect dust, pollen, bird droppings, soot, and agricultural film. This dirty shading barrier blocks solar radiation, reducing the energy generation of your photovoltaic cells.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Cleaning solar panels requires specialized care. Standard tap water leaves behind mineral crusts that etch the glass, and using chemical soaps creates a sticky film that attracts dirt. We utilize advanced multi-stage water filtration systems that generate pure, deionized water. Cleaned only with soft-bristle nylon brushes and pure water, your solar panels dry spot-free, allowing them to operate at peak efficiency.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Pure-Water Cleaning & Thermal Shock Prevention</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Solar glass has a porous, anti-reflective coating. Tap water minerals settle inside these pores, creating white spots that block light. Our pure water filtration process strips out all dissolved minerals, leaving 0 PPM (parts per million) water. This mineral-free water acts as a natural solvent, absorbing dirt molecules and drying cleanly without leaving any residue or spots.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We also monitor and prevent thermal shock. On hot summer days, panels can reach temperatures above 150°F. If cold water is sprayed onto a hot panel, the glass can shatter. We schedule all solar cleanings in the early morning when panels are cool, or on overcast days, ensuring zero risk of glass cracking.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Manufacturer Warranty compliance guarantee</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Major solar manufacturers recommend cleaning panels using only pure water and soft nylon brushes. High-pressure wands or chemical solvents will void the warranty. Our pure-water-fed poles apply water at low pressure, matching manufacturer guidelines and keeping your solar panel warranties secure.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Solar Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Visual Inspection</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We inspect the array for cracks, frame damage, or wire issues, documenting our findings with high-res photos.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Pure-Water Scrub</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We wash panels using mineral-free water and soft solar brushes, lifting dirt without leaving chemical films.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Spot-Free Drying</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">The mineral-free water evaporates completely, leaving a spot-free finish that maximizes solar output.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the size of your solar array and access difficulty. Below is a baseline overview of our packages.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Array Scale</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Small Residential Array</td>
                                        <td className="p-4">Up to 15 panels</td>
                                        <td className="p-4 font-semibold">$199 - $299</td>
                                        <td className="p-4">Visual inspection, pure-water wash, spot-free rinse, safety setup</td>
                                        <td className="p-4">1 - 1.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Residential Array</td>
                                        <td className="p-4 font-semibold">15 - 35 panels</td>
                                        <td className="p-4 font-semibold">$300 - $550</td>
                                        <td className="p-4">Full array pure water scrub, frame detail, wire check, diagnostic photos</td>
                                        <td className="p-4">1.5 - 3 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Rooftop Array</td>
                                        <td className="p-4 font-semibold">35+ panels / Multi-site</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">High-volume water filtration, boom lift access, detailed output checks, scheduled contract rates</td>
                                        <td className="p-4">Scheduled phases</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our professional solar panel cleaning services.</p>
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