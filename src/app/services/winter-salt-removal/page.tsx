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
    title: "Winter Salt Removal Services | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading winter salt removal and concrete neutralization company. Safe chemical extraction of corrosive road salt from concrete, brick, and siding.",
};

const faqs = [
    {
        question: "Why is winter road salt highly corrosive to concrete and masonry?",
        answer: "Winter road salt (primarily sodium chloride and calcium chloride) is highly hygroscopic, meaning it absorbs moisture from the air. When salt residues settle on porous concrete and brick, they draw moisture into the substrate. During winter freeze-thaw cycles in Wisconsin, this trapped water expands, creating severe internal pressure that causes the concrete surface to crack, scale, and spall (break off in flakes). Furthermore, salt is chemically corrosive to concrete's alkaline structure and rusts the internal steel rebar, causing concrete cancer. Regular spring salt removal washes away these corrosive residues, protecting the structural integrity of your driveways, sidewalks, and parking decks."
    },
    {
        question: "Why does standard cold-water pressure washing fail to remove salt?",
        answer: "Standard cold-water pressure washing merely wet-treats the surface, pushing salt minerals deeper into the porous concrete concrete capillaries rather than extracting them. As the concrete dries, the salt recrystallizes and returns to the surface as a white haze (efflorescence), continuing its corrosive work. We utilize specialized chemical salt-neutralizing agents combined with high-flow warm water. The neutralizer breaks the chemical bond between the salt ions and the concrete substrate, suspending the salts so they can be completely flushed out of the pores, ensuring a deep, permanent extraction."
    },
    {
        question: "How do you remove the white salt film from vinyl and metal siding?",
        answer: "Wind-blown road salt mist deposits a stubborn white, chalky film on vinyl siding, window frames, and commercial metal panels. This film looks unsightly and corrodes aluminum trim and siding hardware. We apply low-pressure soft washing utilizing specialized salt-neutralizing detergents. These detergents dissolve the salt crystals on contact, allowing them to be rinsed away safely under low pressure (under 100 PSI) without stripping paint or damage. We follow this with a pure-water rinse of all window glass to leave a spot-free finish."
    },
    {
        question: "When is the best time to schedule spring salt removal in Wisconsin?",
        answer: "The ideal time to schedule professional salt removal is in the early spring, immediately after the final snowstorms have passed and temperatures consistently stay above freezing. This is typically between late March and early May. Washing the salt away early in the spring prevents the minerals from reacting with summer heat and rain, which accelerates corrosion and allows algae to breed on the salt film, keeping your concrete clean and secure for the upcoming season."
    },
    {
        question: "Will the salt neutralization chemicals damage my landscaping or lawn?",
        answer: "No, our salt neutralizing agents are fully biodegradable and completely safe for lawns, gardens, and pets when applied by our technicians. We utilize a strict plant protection protocol. Before washing, we pre-hydrate all surrounding lawns and shrubs to create a protective moisture barrier. We continuously mist the foliage and perform a thorough post-wash rinse of all plants. Furthermore, neutralizing the salt runoff actually helps protect your lawn, as road salt runoff itself is highly toxic to grass and shrubs, causing winter burn."
    },
    {
        question: "Can you clean winter salt from multi-level parking garages and commercial decks?",
        answer: "Yes, we are fully equipped to clean winter salt residues from large commercial parking structures, retail walkways, and warehouse bays. Parking garages accumulate massive salt loads tracked in by vehicles, which corrodes the concrete joints. We utilize heavy-duty trailer rigs, hot-water steam surface cleaners, and salt neutralizers to wash parking decks, ramps, and walls, reclaiming all wastewater to comply with local EPA stormwater regulations."
    },
    {
        question: "How frequently should salt removal be scheduled for commercial properties?",
        answer: "For commercial properties, retail centers, and high-traffic parking garages in Appleton and Green Bay, we recommend scheduling professional salt removal twice a year—ideally in the early spring to remove winter accumulations, and a lighter wash in late winter during a warm thaw cycle to minimize continuous corrosion. Residential driveways typically only require a thorough cleaning once a year in the spring."
    }
];

export default function WinterSaltRemovalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Winter Salt Removal Services",
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
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "250",
            "highPrice": "850",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "250.00",
                "maxPrice": "850.00"
            }
        },
        "description": "Chemical winter salt removal, concrete neutralization, and siding salt-film washing."
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
                                "name": "Winter Salt Removal",
                                "item": "https://valleyexteriorpros.com/services/winter-salt-removal"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Winter Salt Removal</span>
                    </>
                }
                description="Neutralize and extract corrosive road salt deposits. Chemical concrete neutralization and siding washing for residential and commercial properties."
                bgImage="/images/portfolio/winter-salt-removal.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional winter salt removal and concrete neutralization in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Wisconsin winters require heavy road salt and de-icing chemicals to keep walkways and roads safe. However, as cars track this salt onto your driveway, sidewalks, and parking garages, it creates a corrosive mineral layer. Road salt is highly hygroscopic, drawing moisture into the concrete pores, which expands during freeze-thaw cycles, causing cracking, scaling, and spalling.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Simply washing concrete with cold water does not solve the problem. Cold water merely pushes salt minerals deeper into the concrete pores, where they recrystallize as a white haze (efflorescence) and continue to corrode the internal rebar. We utilize specialized chemical neutralizing agents and warm-water rotary cleaners to break the salt bonds, extracting the minerals completely and protecting your masonry surfaces.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Salt Neutralization & Concrete Protection</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Road salts are chemical compounds that bond to concrete's alkaline pores. We apply specialized chemical salt-neutralizing agents that break the chemical bond between the salt ions and the concrete. Once the bond is broken, the salts dissolve completely in water, allowing them to be flushed out of the concrete capillaries using warm-water rotary surface cleaners.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            For vinyl and metal siding facades, road salt mist tracked by wind deposits a chalky white film. We apply low-pressure soft washing with salt-neutralizing detergents. This dissolves the salt crystals on contact, which we then rinse away at low pressure (under 100 PSI), leaving window frames and trim salt-free.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Landscape and Water compliance guarantee</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Road salt runoff is highly toxic to grass, shrubs, and local waterways. We pre-hydrate all surrounding landscaping with fresh water before starting to shield plant roots. We continuously mist foliage and vacuum reclaim all rinse runoff where required, discharging wastewater safely into municipal sanitary sewers to protect local Wisconsin ecosystems.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Salt Removal Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Identify & Pre-treat</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We pre-hydrate surrounding lawns, identify salt buildup areas, and apply chemical neutralizing detergents to break salt bonds.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Warm-Water Extraction</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We wash concrete using warm-water rotary surface cleaners, extracting salt minerals deep from concrete capillaries.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Rinse & Protect</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We rinse siding and window glass to remove mist film, flush surrounding lawns, and verify a clean, spot-free finish.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the total concrete square footage and severity of salt film. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Residential Entry & Siding</td>
                                        <td className="p-4">Up to 1,500 sq ft concrete/siding</td>
                                        <td className="p-4 font-semibold">$250 - $400</td>
                                        <td className="p-4">Driveway salt wash, entryway neutralization, siding salt-film rinse, plant protection</td>
                                        <td className="p-4">1.5 - 2.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Walkway & Facade</td>
                                        <td className="p-4 font-semibold">1,500 - 5,000 sq ft concrete</td>
                                        <td className="p-4 font-semibold">$450 - $850</td>
                                        <td className="p-4">Storefront walkway wash, salt neutralization, entrance window squeegee, EPA runoff control</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Parking Deck</td>
                                        <td className="p-4 font-semibold">5,000+ sq ft / Plural sites</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Multi-level deck salt wash, ramp washing, joint salt neutralization, complete sweep prep</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our winter salt removal services.</p>
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
