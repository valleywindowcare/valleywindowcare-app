import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Concrete Cleaning & Pressure Washing in Green Bay & Appleton",
    description: "Professional concrete pressure washing and driveway cleaning services. Valley Property Services removes road salt, mold, and oil stains across Northeast Wisconsin.",
};

const faqs = [
    {
        question: "How does professional cleaning prevent concrete spalling and salt damage?",
        answer: "Concrete is a highly porous material that naturally absorbs water, road salt, and liquid de-icers (like calcium chloride and magnesium chloride) during cold Wisconsin winters. When these salts settle inside the concrete pores, they attract moisture, creating a highly corrosive solution. During freeze-thaw cycles, this absorbed water expands by approximately 9% inside the concrete, creating immense internal pressure. Over time, this pressure causes the concrete surface to crack, pit, and flake off—a destructive process known as spalling. Professional hot-water washing combined with specialized chemical neutralizers completely flushes out these caustic salts from deep within the concrete pores, halting structural degradation and saving you thousands of dollars in premature replacement costs."
    },
    {
        question: "What is a rotary surface cleaner and why is it superior to pressure wands?",
        answer: "A rotary surface cleaner is a specialized professional tool that features a rotating bar with multiple spray nozzles spinning at high speed inside a circular hover dome. This design is vastly superior to standard pressure wands because it maintains a perfectly uniform nozzle distance and spray angle across the entire concrete surface. This uniform coverage eliminates 'zebra striping' (uneven, light-and-dark cleaning streaks) which is a common problem when using hand-held wands. Furthermore, surface cleaners distribute water pressure evenly, preventing the nozzle from etching or scarring the concrete cream layer, while the circular dome contains the dirty water overspray, keeping your surrounding property clean."
    },
    {
        question: "Can your cleaning process completely remove motor oil and diesel stains?",
        answer: "Our hot-water steam washing (200°F+) combined with professional-grade, oil-emulsifying degreasers is highly effective at lifting motor oil and diesel stains. However, the final result depends on how long the oil has resided on the surface. Concrete acts like a sponge, drawing oil deep into the concrete matrix. If the spill is fresh, we can typically lift 90% to 95% of the oil. For old, weathered oil spots that have sat for months or years, we can completely emulsify the slick, greasy surface residue to eliminate slip hazards, but a light shadow or stain may remain. We apply targeted, multi-stage chemical treatments to achieve the best possible aesthetic outcome."
    },
    {
        question: "Is sealing my concrete driveway necessary after pressure washing?",
        answer: "While not strictly mandatory, we highly recommend applying a premium silane-siloxane penetrating sealer after a deep cleaning. Clean concrete is highly porous and will immediately begin absorbing rain, oils, and winter road salts. A silane-siloxane sealer penetrates up to a quarter-inch into the concrete pores, forming a hydrophobic chemical barrier that repels water and prevents chemical entry. This barrier prevents liquid absorption, drastically reduces winter freeze-thaw spalling, makes oil spills easy to clean, and prevents mold and algae from taking root, extending the life of your driveway by years."
    },
    {
        question: "How long after concrete cleaning should I wait before parking my car?",
        answer: "We recommend keeping vehicles off the concrete driveway for at least 24 hours after cleaning is completed to ensure the concrete has dried completely and the pores have closed. If we have applied a silane-siloxane penetrating sealer, you must keep all vehicle traffic off the surface for a full 36 to 48 hours to allow the sealer to cure and form its protective barrier. Walking on the concrete is completely safe as soon as the surface is dry to the touch (typically within 1 to 2 hours of completion, depending on sun and wind)."
    },
    {
        question: "Does pressure washing concrete present any risk of damage to my landscaping?",
        answer: "No, we employ a strict plant protection protocol to ensure your grass, flowers, and shrubs remain perfectly safe. We saturate the surrounding soil and turf with fresh water before we begin, creating a protective barrier so the plants cannot absorb any runoff. During cleaning, we continuously rinse the perimeter of the concrete, and we apply eco-friendly, biodegradable surfactants that naturally neutralize when diluted, ensuring zero chemical burn risk to your lawns and gardens."
    },
    {
        question: "How frequently should residential concrete driveways and walkways be cleaned?",
        answer: "For residential properties in Appleton, Green Bay, and De Pere, we recommend scheduling a professional concrete cleaning once a year, ideally in the spring. A spring cleaning removes the concentrated road salt, sand, and grime that accumulates over the winter before it can cause permanent spalling. For shaded patios or walkways surrounded by heavy tree cover, a bi-annual schedule (spring and fall) may be necessary to prevent slippery black algae and mold from taking over the concrete."
    }
];

export default function ConcreteCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Concrete Cleaning & Pressure Washing Services",
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
            "lowPrice": "150",
            "highPrice": "1200",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "150.00",
                "maxPrice": "1200.00"
            }
        },
        "description": "Professional concrete cleaning, road salt removal, and driveway pressure washing services."
    };

    return (
        <main className="w-full overflow-hidden bg-slate-50">
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
                                "name": "Concrete Cleaning",
                                "item": "https://valleyexteriorpros.com/services/concrete-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Concrete Cleaning & Pressure Washing</span>
                    </>
                }
                description="Eradicate slippery mold, dark organic growth, and winter road salt. High-temperature rotary concrete washing for driveways, patios, and walkways."
                bgImage="/images/portfolio/concrete-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional concrete pressure washing and driveway restoration services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Concrete surfaces like driveways, walkways, patios, and pool decks are major functional and aesthetic components of your property. However, concrete is inherently highly porous, meaning it absorbs water, oils, road salts, and organic materials. Over time, exposure to humid Wisconsin summers and freezing winters leads to the accumulation of black mold, slippery green algae, tire marks, oil spots, and caustic road salt.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Many property owners try to clean their concrete using cheap electric pressure washers or simple garden hoses. This often results in a patchy finish, leaving ugly wand marks, and failing to lift deep stains. Even worse, using high pressure incorrectly can permanently etch the surface cream layer of the concrete, exposing aggregate and making it more vulnerable to erosion. Our professional concrete cleaning uses commercial-grade hot-water surface cleaners and specialized eco-friendly detergents to lift stains safely and evenly.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Importance of Spring Salt Flushing</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Winter road maintenance in Wisconsin relies heavily on calcium chloride and magnesium chloride. As vehicles park on your driveway, these salts melt and seep deep into the porous concrete structure. During winter freeze-thaw cycles, this absorbed water expands by approximately 9%, creating high internal pressure that cracks, pits, and flakes off the surface—a destructive process known as spalling.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Flushing these salts out in the spring is essential to save your concrete. Our high-flow, hot-water rotary cleaning systems flush these chemical salts out from deep within the concrete matrix, protecting the structural integrity of your driveway. Following cleaning, we recommend applying a premium silane-siloxane penetrating sealer. This sealer creates a hydrophobic chemical barrier that repels water and prevents future salt absorption, extending the life of your concrete by years.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Slip and Fall Liability Mitigation</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Slippery concrete walkways and entryways are a major liability hazard, especially during rainy or humid weather. Mold, mildew, and black algae build up on concrete, forming a slick organic biofilm. We do not just wash away this surface growth; we sanitize the concrete using biodegradable algaecides that kill the organic spores at the root, restoring natural friction and ensuring safe walkways for your family, guests, or retail customers.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Concrete Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Pre-Treatment & Sweep</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We sweep away loose debris and apply specialized biodegradable surfactants to break down grease, oil, and loosen organic spores.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Rotary Steam Wash</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We deploy 200°F+ hot-water rotary surface cleaners. The high-temperature steam dissolves grime evenly, eliminating wand marks.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Flush, Neutralize & Seal</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We rinse the surface clean. For maximum protection, we apply a silane-siloxane sealer to block future salt and water intrusion.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent, flat-rate pricing based on the total square footage and state of your concrete. Below is a baseline overview of our concrete cleaning packages.
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
                                        <td className="p-4 font-bold text-navy">Sidewalk & Walkway Pack</td>
                                        <td className="p-4">Up to 800 sq ft</td>
                                        <td className="p-4 font-semibold">$150 - $250 </td>
                                        <td className="p-4">Pre-treatment, rotary steam wash, edge detail, organic sanitization, final rinse</td>
                                        <td className="p-4">1 - 1.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Driveway Clean</td>
                                        <td className="p-4 font-semibold">2-car driveway (up to 1,500 sq ft)</td>
                                        <td className="p-4 font-semibold">$200 - $350 </td>
                                        <td className="p-4">Salt neutralization, deep steam wash, tire mark removal, joint rinse</td>
                                        <td className="p-4">1.5 - 2.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Driveway & Patio Clean</td>
                                        <td className="p-4 font-semibold">1,500 - 3,000 sq ft</td>
                                        <td className="p-4 font-semibold">$350 - $600 </td>
                                        <td className="p-4">Full driveway, walkways, and back patio steam clean, oil treatment, water sweep</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Concrete scrubbing</td>
                                        <td className="p-4 font-semibold">3,000+ sq ft / Commercial lot</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Off-hours steam wash, grease emulsifier, wastewater vacuum recovery, EPA containment</td>
                                        <td className="p-4">Flexible off-hours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: GEOGRAPHY */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Serving the Northeast Wisconsin Corridor</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Valley Property Services works daily in neighborhoods, commercial developments, and industrial parks throughout Appleton, Green Bay, De Pere, Neenah, and Oshkosh. We are experts in dealing with local soil types, clay compaction, and extreme winter freeze-thaw cycles. Our crews carry specialized compaction plates, commercial drying blowers, and warm-water rotary wash systems to ensure a perfect finish.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We are fully licensed and carry a $2M liability policy, providing complete safety and peace of mind on every single job site.
                        </p>
                    </section>

                    {/* SECTION 6: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our concrete pressure washing and cleaning services.</p>
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Cleaning Services</h2>
                    <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
