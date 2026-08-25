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
    title: "Commercial Dumpster Pad Cleaning | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial dumpster pad pressure washing company. Hot-water concrete cleaning, degreasing, and sanitization.",
};

const faqs = [
    {
        question: "Why is professional dumpster pad cleaning critical for health code compliance?",
        answer: "Dumpster pad enclosures are prime breeding grounds for biological pathogens, mold, and bacteria such as E. coli, Salmonella, and Listeria. Food waste, liquid packaging leaks, and organic grease accumulate on the concrete, generating severe odor problems and drawing insects, flies, rats, and mice. Health department inspectors in Green Bay and Appleton strictly monitor dumpster pad sanitation. If they detect excessive biological grease, fly infestations, or rodent nesting, they will issue a citation or order immediate health code remediation. Regular dumpster pad pressure washing and chemical sanitization neutralize these bacteria, eliminate food odors, and discourage pests, keeping your business fully compliant with all local health department rules."
    },
    {
        question: "Why is hot-water steam washing essential for dumpster pad concrete?",
        answer: "Dumpster pads accumulate thick, heavy grease deposits, leaking garbage juices, spilled motor oils, and food wastes that cold-water pressure washers cannot lift. Cold water only smears grease across the surface, creating highly slick slip hazards. We deploy heavy-duty trailer rigs that heat water to 200°F+ at high flow rates. This high-temperature steam emulsifies tough grease, dissolves sticky food waste, and sanitizes the concrete surface, restoring its clean appearance without relying on highly corrosive chemicals."
    },
    {
        question: "How do you handle severe oil stains and grease accumulations on concrete dumpster pads?",
        answer: "Heavy food grease and motor oil are extremely stubborn on commercial concrete. Standard pressure washing wands can etch circular scars into the concrete if held too close. We utilize specialized rotary surface cleaners combined with 200°F+ hot water and industrial-grade degreasers. The degreaser breaks down the grease hydrocarbons, releasing their grip on the concrete pores, while the rotating spray bar flushes the residue away cleanly. We follow this up with target chemical treatments to eliminate any dark organic shadows left behind by old oil spots."
    },
    {
        question: "Do you sanitize and deodorize the pad and surrounding enclosure walls?",
        answer: "Yes, our dumpster pad cleaning service includes complete sanitization and deodorization of the concrete pad, surrounding brick/metal enclosure walls, and the exterior of the dumpster containers. We apply a post-wash algaecide sanitizer that kills organic bacteria and mold spores, preventing bad odors from returning. We also apply commercial-grade deodorizing agents that chemically neutralize bad smells rather than merely masking them with fragrances, ensuring a clean, odor-free dumpster pad enclosure."
    },
    {
        question: "How do you handle EPA compliance and water runoff during dumpster pad washing?",
        answer: "We operate in strict compliance with Wisconsin Department of Natural Resources (WDNR) and EPA Clean Water Act guidelines. It is illegal to discharge pressure washing wastewater containing grease, oil, or chemical soaps into municipal storm drains. We block nearby storm sewers with specialized containment berms, vacuum reclaim the wash water from the concrete using commercial surface cleaners, filter out solid debris and hydrocarbons, and discharge the grey water into municipal sanitary sewers, shielding your business from heavy regulatory fines."
    },
    {
        question: "Can you wash commercial trash compactors and heavy waste containers?",
        answer: "Yes, we are fully equipped to wash large commercial trash compactors, roll-off dumpsters, and heavy waste containers. Trash compactors accumulate severe grease and liquid leaks underneath the compactor frame, which is difficult to reach. We utilize high-reach pressure extension wands and hot-water steam spray to wash under the compactor, clean the outer containment frame, flush away grease buildup, and sanitize the surrounding concrete, reducing odor and rodent risks."
    },
    {
        question: "How frequently should a retail or restaurant dumpster pad be cleaned?",
        answer: "For restaurants, grocery stores, food processors, and high-traffic shopping centers in Appleton and Green Bay, we recommend scheduling a professional dumpster pad wash monthly or bi-monthly, especially during the warm summer months when bacteria and odors multiply rapidly. Lower-volume retail plazas, offices, or warehouse complexes typically only require a thorough cleaning quarterly or twice a year."
    }
];

export default function DumpsterPadCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Dumpster Pad Cleaning Services",
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
            "lowPrice": "250",
            "highPrice": "650",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "250.00",
                "maxPrice": "650.00"
            }
        },
        "description": "EPA-compliant hot-water commercial dumpster pad pressure washing, degreasing, and sanitization."
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
                                "name": "Dumpster Pad Cleaning",
                                "item": "https://valleyexteriorpros.com/services/dumpster-pad-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Dumpster Pad Cleaning</span>
                    </>
                }
                description="Eradicate bad odors, rodent attraction, and grease leaks. EPA-compliant hot-water pressure washing and chemical sanitization for dumpster pads."
                bgImage="/images/portfolio/commercial-pressure-washing.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional commercial dumpster pad cleaning and sanitization in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Dumpster pads are critical areas that require regular maintenance. Liquid trash leaks, rotting food wastes, and organic grease accumulate on the concrete pad, breeding severe bad odors and drawing flies, rats, and mice to your property. Unmaintained dumpster pads present health code violations and create slippery concrete surfaces that pose fall risks.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Cleaning dumpster pads requires specialized equipment. Cold-water wands cannot dissolve food grease or sanitize concrete pores, and using excessive pressure can permanently damage concrete. Our commercial crews utilize heavy-duty trailer rigs that heat water to 200°F+ at high flow rates. Combined with rotary surface cleaners, degreasers, and disinfectants, we wash and sanitize dumpster pad enclosures safely and legally.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Importance of Deodorization & Runoff Control</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Dumpster pads are subject to food grease, rot, and petroleum spills. Standard soap does not kill biological odors or break down oil. We apply commercial-grade degreasers that emulsify grease molecules, followed by 200°F+ hot-water steam washing using rotary surface cleaners to melt grease and sanitize concrete pores. We then apply biodegradable algaecide sanitizers to eliminate odor-causing bacteria at the root.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We wash the entire enclosure area, including brick walls, metal gates, and the dumpster containers. We schedule wash operations during off-hours (overnight or early morning) to prevent any disturbance to your daily kitchen or retail operations.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict EPA Wastewater Reclamation Protocol</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Dumpster pad wastewater contains high grease, soap, and bacteria loads, making it illegal to discharge into storm drains. We block nearby storm sewers with specialized containment berms, vacuum reclaim all wash runoff, filter out suspended solids and fats, and discharge the grey water safely into municipal sanitary sewers, keeping your business fully compliant.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Dumpster Pad Sanitizing Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Setup & Drain Block</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We set up safety zoning, clear dumpster bins, and seal all storm drains in the area to capture chemical runoff.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Degrease & Steam Wash</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply grease-dissolving chemicals, and wash concrete using 200°F+ hot-water rotary surface cleaners.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Sanitization & Reclaim</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply algaecide sanitizers to eliminate biological odors, vacuum reclaim wash runoff, and discharge it safely.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the dumpster enclosure scale and grease levels. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Single Dumpster Enclosure</td>
                                        <td className="p-4">Up to 1 dumpster pad</td>
                                        <td className="p-4 font-semibold">$250 - $400</td>
                                        <td className="p-4">Concrete pad degrease, wall rinse, algaecide sanitization, wastewater reclamation</td>
                                        <td className="p-4">1.5 - 2 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Double Dumpster Enclosure</td>
                                        <td className="p-4 font-semibold">Up to 2 dumpster pads</td>
                                        <td className="p-4 font-semibold">$450 - $650</td>
                                        <td className="p-4">Full concrete wash, enclosure gate wash, container exterior rinse, deep deodorization</td>
                                        <td className="p-4">2.5 - 3.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Compactor Pad</td>
                                        <td className="p-4 font-semibold">1 compactor pad / Heavy Spill</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Trash compactor wash, heavy grease chemical extraction, scheduled monthly cleaning rates</td>
                                        <td className="p-4">Multi-phase overnight</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial dumpster pad cleaning services.</p>
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
