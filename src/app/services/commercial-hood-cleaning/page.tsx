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
    title: "Commercial Kitchen Hood Cleaning | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading NFPA 96-compliant commercial kitchen hood exhaust cleaning company. Professional steam cleaning and grease extraction.",
};

const faqs = [
    {
        question: "What is NFPA 96 compliance, and why is it mandatory for commercial kitchens?",
        answer: "NFPA 96 (National Fire Protection Association standard 96) is the strict regulatory standard governing ventilation control and fire protection of commercial cooking operations. It mandates that commercial kitchen exhaust systems (hoods, ducts, fans, and filters) be professionally inspected and cleaned to bare metal at scheduled intervals to eliminate combustible grease accumulation. Failure to comply with NFPA 96 guidelines presents severe structural fire hazards, voids your commercial business property insurance policy, and can lead to immediate health department closure or heavy municipal fire code fines. Our technicians are fully trained in NFPA 96 standards, executing deep steam cleaning and providing the official compliance certification stickers required by local Wisconsin inspectors."
    },
    {
        question: "How does your hood cleaning process extract grease from vertical ductwork?",
        answer: "Kitchen grease vapors travel through the hood filters and settle on the interior walls of your vertical ductwork, forming a thick, highly flammable tar-like layer. To clean this hidden ductwork to bare metal, we utilize specialized high-temperature steam pressure washing systems. First, we install heavy-duty plastic containment funnels under the hood canopy to catch all runoff. We then scrape away the thick grease crusts using non-abrasive hand tools. Next, we feed specialized rotary spray nozzles through the exhaust ducting, applying 200°F+ hot water and grease-emulsifying chemicals. This high-temperature wash melts the grease throughout the entire duct run, flushing it down into our containment system for safe disposal."
    },
    {
        question: "Do you clean the rooftop exhaust fan and fan bowl assemblies?",
        answer: "Yes, cleaning the rooftop exhaust fan assembly is a critical component of a complete NFPA 96 compliant service. Grease accumulates on the fan blades, housing, and rooftop fan bowl. This accumulation creates an off-balance fan motor, leading to premature motor failure, reduced kitchen ventilation, and combustible grease spilling onto your roof membrane, which rots the roof. We lift the fan assembly, install specialized hinge kits where necessary for safe access, clean the fan blades and housing to bare metal, clean out the grease drainage channels, and verify that the grease trap catches run-off."
    },
    {
        question: "How do you protect my kitchen equipment and appliances during cleaning?",
        answer: "Kitchen hood cleaning is a wet, messy process that involves high-temperature steam and chemicals. To protect your commercial kitchen assets, our crews follow a strict containment protocol. Before starting, we cover all underlying stoves, grills, fryers, countertops, and prep tables with heavy-duty, commercial-grade plastic sheeting. We build plastic containment tents around the hood assemblies to funnel all wastewater directly into collection barrels. This containment prevents water or grease splatter from contacting your appliances, pilot lights, or electrical components, leaving your kitchen clean, dry, and ready for service."
    },
    {
        question: "What is your kitchen hood filter exchange and cleaning service?",
        answer: "Hood filters are the first line of defense, trapping bulk grease before it enters the ductwork. If filters are clogged, air flow drops, raising kitchen temperatures and fire risks. We clean your baffle filters to bare metal using hot-water soaking tanks. We also offer a filter exchange service. We inspect your existing filters for wear, damage, or gaps that allow grease bypass. We can supply and install brand-new, NSF-approved stainless steel baffle filters that are perfectly sized for your hood, ensuring safe airflow and compliance."
    },
    {
        question: "Do you offer overnight or off-hours scheduling for restaurants?",
        answer: "Yes, we perform almost all kitchen hood cleaning services during overnight or early morning off-hours. We recognize that kitchen operations cannot be interrupted during regular prep and service hours. Our crews typically arrive after your kitchen closes (between 9:00 PM and 11:00 PM) and work through the night to execute the deep clean, duct flush, and rooftop service. We ensure the entire kitchen is fully cleaned, sanitized, and ready for your morning prep staff before we leave the site."
    },
    {
        question: "How frequently does a commercial kitchen hood require professional cleaning?",
        answer: "The cleaning frequency is determined by your cooking volume and fuel type under NFPA 96 standards. High-volume kitchens utilizing solid fuel (such as wood or charcoal) require monthly cleanings. Standard high-volume cooking operations (such as fast-food restaurants, 24-hour diners, and heavy wok frying) require quarterly cleanings. Moderate-volume kitchens (such as standard sit-down restaurants, school cafeterias, and nursing homes) require bi-annual cleanings, while low-volume operations (such as church kitchens and seasonal facilities) require annual services."
    }
];

export default function CommercialHoodCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Kitchen Hood Cleaning Services",
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
            "lowPrice": "450",
            "highPrice": "1100",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "450.00",
                "maxPrice": "1100.00"
            }
        },
        "description": "NFPA 96-compliant commercial kitchen hood exhaust steam cleaning, duct cleaning, and fan washing."
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
                                "name": "Commercial Hood Cleaning",
                                "item": "https://valleyexteriorpros.com/services/commercial-hood-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Commercial Hood Cleaning</span>
                    </>
                }
                description="NFPA 96-compliant kitchen exhaust steam cleaning. Bare-metal restoration for commercial kitchen hoods, ductwork, and rooftop fans."
                bgImage="/images/portfolio/commercial-pressure-washing.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of NFPA 96-compliant commercial kitchen hood and exhaust cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Operating a commercial kitchen requires maintaining strict safety standards. During cooking operations, grease vapors travel through hood filters and settle on the interior walls of your hood canopy, ductwork, and rooftop exhaust fan. Over time, this grease forms a thick, highly flammable layer. This grease accumulation looks unprofessional, blocks airflow, and presents a severe structural fire hazard.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Cleaning commercial kitchen exhaust systems requires specialized equipment and training. We strictly follow NFPA 96 fire codes by utilizing high-temperature steam pressure washing systems. Our crews scrape away grease crusts, steam flush vertical ductwork to bare metal, clean rooftop fan assemblies, and provide the official compliance certification stickers required by local inspectors.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Bare-Metal Grease Extraction</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Kitchen grease changes chemically under high heat, forming a sticky polymer bond with metal ductwork. Standard detergents cannot break this bond. We apply specialized alkaline degreasers that react with the grease molecules, softening the layer. We then sweep the ductwork with 200°F+ steam at high pressure, melting grease and flushing it down into containment funnels.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We clean the entire exhaust system, not just the visible hood. This includes vertical and horizontal ducts, dampers, and the rooftop exhaust fan assembly. We install access panels in ductwork where necessary to ensure every linear foot is cleaned to bare metal, preventing hidden grease fires.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Fire Code Compliance guarantee</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                We provide complete documentation for local fire marshals, insurance underwriters, and health inspectors. After cleaning, we place an official compliance sticker on the hood canopy, detailing the cleaning date, next service date, and system status, protecting your business from regulatory closures and liability.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Hood Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Equipment Containment</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We cover all kitchen appliances with plastic sheeting, and build plastic funnels under the hood canopy to collect runoff.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Bare-Metal Steam Wash</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We scrape heavy grease crusts, apply chemical degreasers, and steam wash ducts and fans to bare metal.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Polishing & Certification</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We hand-polish the stainless steel hood, clean the kitchen area, and apply the NFPA 96 compliance sticker.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the length of your hood canopy and duct complexity. Below is a baseline overview of our packages.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Hood Length</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Small Kitchen Hood</td>
                                        <td className="p-4">Up to 10 ft single canopy</td>
                                        <td className="p-4 font-semibold">$450 - $650</td>
                                        <td className="p-4">Hood canopy scrape, duct steam wash, fan cleaning, NFPA 96 compliance sticker</td>
                                        <td className="p-4">3 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Medium Restaurant Hood</td>
                                        <td className="p-4 font-semibold">10 - 20 ft canopy</td>
                                        <td className="p-4 font-semibold">$700 - $1,100</td>
                                        <td className="p-4">Full hood scrape, vertical duct wash, roof fan wash, hinge kit install, window filter wash</td>
                                        <td className="p-4">4 - 6 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Institutional / Hospital</td>
                                        <td className="p-4 font-semibold">20+ ft multi-canopy</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Multi-canopy scraping, high-duct routing, multi-fan roof washing, complete system detail</td>
                                        <td className="p-4">Scheduled overnight</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial kitchen hood cleaning services.</p>
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
