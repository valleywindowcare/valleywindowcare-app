import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Driveway Cleaning & Sealing in Green Bay & Appleton",
    description: "Professional concrete driveway pressure washing and sealing services. Valley Property Services removes tire marks, road salt, and oil stains across Northeast Wisconsin.",
};

const faqs = [
    {
        question: "How does winter road salt damage my residential concrete driveway?",
        answer: "During Wisconsin winters, vehicles carry road salt, magnesium chloride, and calcium chloride slurry back onto your concrete driveway. Concrete is highly porous, acting like a hard sponge. When these melted salts seep into the concrete pores, they lower the freezing point of water and attract additional moisture. As this water freezes and expands by about 9% inside the pores, it creates high internal hydraulic pressure. This pressure causes the surface layer of the concrete to crack, pit, and flake away—a process known as spalling. Standard cold-water rinsing only pushes the salt chemicals deeper into the concrete. We use specialized hot-water extraction and chemical descalers to neutralize and draw the salts out, protecting your driveway's structural integrity."
    },
    {
        question: "What is the benefit of applying a penetrating sealer to my driveway?",
        answer: "A premium silane-siloxane penetrating sealer offers the highest level of protection for concrete driveways. Unlike cheap topical sealers that form a glossy surface film that can peel, a penetrating sealer seeps deep into the concrete pores, reacting chemically to form a hydrophobic barrier. This barrier repels water, oils, and winter road salts, preventing them from soaking into the concrete. This protection drastically reduces winter spalling, makes oil spills easy to clean, and prevents organic growth like mold and algae from taking root. Penetrating sealers leave a natural, non-slip finish that will not peel, bubble, or wear away, extending your driveway's life by years."
    },
    {
        question: "Can your cleaning process completely remove motor oil and vehicle fluids?",
        answer: "Our hot-water steam washing (200°F+) combined with professional-grade, oil-emulsifying degreasers is highly effective at lifting vehicle fluids. However, the final result depends on the concrete's age and how long the oil has sat. Fresh oil spills can typically be removed completely (90% to 95% restoration). For old, weathered oil spots that have sat for months, the oil has penetrated deep into the concrete pores. We apply specialized poultice treatments to draw the oil to the surface, and while we can completely emulsify the grease to eliminate slip hazards, a light shadow may remain. We apply targeted chemical treatments to achieve the best possible result."
    },
    {
        question: "Is high pressure dangerous for concrete driveways?",
        answer: "Yes, excessive pressure can permanently damage concrete. Concrete driveways have a thin, smooth top layer called the 'cream.' If a pressure washer nozzle is held too close or if the pressure exceeds 3,500 PSI, it can blast away this cream layer, exposing the rough aggregate underneath. This damage is permanent and makes the concrete more porous and vulnerable to salt erosion. We use specialized rotary surface cleaners that distribute water pressure evenly, combined with hot water and eco-friendly surfactants. This allows us to lift dirt and stains safely using lower, non-destructive pressures."
    },
    {
        question: "How long after cleaning and sealing can I park on my driveway?",
        answer: "We recommend keeping all vehicles off the driveway for at least 24 hours after a standard hot-water cleaning to allow the concrete to dry completely. If we apply a silane-siloxane penetrating sealer, you must keep vehicles off the driveway for a full 36 to 48 hours to allow the sealer to cure and form its protective hydrophobic barrier. Walking on the driveway is completely safe as soon as the surface is dry to the touch, which typically takes 1 to 2 hours depending on sun and wind."
    },
    {
        question: "Will the cleaning chemicals harm my lawn or landscape plants?",
        answer: "No. We deploy a strict plant protection protocol to ensure your grass and landscaping remain safe. We saturate the surrounding soil with fresh water before we begin, creating a protective moisture barrier so the plants cannot absorb any runoff. During cleaning, we continuously rinse the grass edges, and we use biodegradable surfactants that neutralize when diluted, ensuring zero chemical burn risk to your lawns and gardens."
    },
    {
        question: "How often should I have my residential driveway cleaned and sealed?",
        answer: "For residential properties in Appleton, Green Bay, and De Pere, we recommend scheduling a professional driveway cleaning once a year, ideally in the spring. A spring cleaning removes the concentrated road salt, sand, and grime that accumulates over the winter before it can cause permanent spalling. For shaded patios or walkways surrounded by heavy tree cover, a bi-annual schedule (spring and fall) may be necessary to prevent slippery black algae and mold from taking over the concrete."
    }
];

export default function DrivewayCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Driveway Cleaning & Sealing Services",
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
            "highPrice": "950",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "150.00",
                "maxPrice": "950.00"
            }
        },
        "description": "Professional driveway pressure washing, oil stain neutralization, and concrete sealing services."
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
                                "name": "Driveway Cleaning",
                                "item": "https://valleyexteriorpros.com/services/driveway-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Driveway Cleaning & Sealing</span>
                    </>
                }
                description="Restore your driveway's appearance and protect against winter salt damage. High-temperature concrete cleaning and premium penetrating sealers."
                bgImage="/images/portfolio/concrete-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional driveway pressure washing and concrete sealing services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Your driveway is one of the most prominent features of your home's exterior, directly impacting your property's curb appeal and value. Because driveways are exposed to vehicular traffic and Wisconsin's harsh seasonal changes, they quickly accumulate motor oil leaks, black tire marks, green algae, mold, dirt, and chemical road salts.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Standard pressure washing is often insufficient to clean driveways safely. Using cold-water wands can leave permanent swirl marks on your concrete and fails to lift deep petroleum stains. Even worse, excessive pressure can blast away the protective surface layer of the concrete, exposing aggregate and accelerating erosion. We use commercial-grade hot-water surface cleaners and biodegradable surfactants to lift stains safely and evenly without damaging your concrete.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Penetrating Sealer Defense Against Winter Salt</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            In Wisconsin, winter road maintenance relies on calcium chloride and magnesium chloride. When you park on your driveway, these corrosive salts seep deep into the porous concrete structure. During freeze-thaw cycles, this absorbed water expands by approximately 9%, creating high internal hydraulic pressure that cracks, pits, and flakes off the surface—a destructive process known as spalling.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            A premium silane-siloxane penetrating sealer is the best defense against this damage. Unlike cheap topical sealers that form a glossy surface film that can peel, a penetrating sealer seeps deep into the concrete pores, reacting chemically to form a hydrophobic barrier. This barrier repels water, oils, and winter road salts, preventing them from soaking into the concrete. This protection drastically reduces winter spalling, makes oil spills easy to clean, and prevents organic growth like mold and algae from taking root. Penetrating sealers leave a natural, non-slip finish that will not peel, bubble, or wear away, extending your driveway's life by years.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Oil Stain Extraction Protocol</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Motor oil and vehicle fluids penetrate deep into concrete pores, leaving permanent dark stains. We apply specialized poultice treatments to draw the oil out of the concrete matrix, and then emulsify the residue using 200°F+ hot water and biodegradable degreasers. This process removes the slippery texture and restores the concrete's appearance, ensuring a clean, safe surface.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Driveway Restoration Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Degreasing & Pre-wash</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We sweep away loose debris and apply specialized biodegradable surfactants to break down grease, oil, and loosen organic spores.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Rotary Steam Wash</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We deploy 200°F+ hot-water rotary surface cleaners. The high-temperature steam dissolves grime evenly, eliminating wand marks.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Flush & Sealer Apply</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We rinse the surface clean. For maximum protection, we apply a silane-siloxane sealer to block future salt and water intrusion.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent, flat-rate pricing based on the total square footage and state of your concrete. Below is a baseline overview of our driveway cleaning packages.
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
                                        <td className="p-4 font-bold text-navy">Small Driveway Wash</td>
                                        <td className="p-4">1-car driveway (up to 800 sq ft)</td>
                                        <td className="p-4 font-semibold">$150 - $225 </td>
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
                                        <td className="p-4 font-bold text-navy">Large Driveway & Walkway Clean</td>
                                        <td className="p-4 font-semibold">1,500 - 3,000 sq ft</td>
                                        <td className="p-4 font-semibold">$350 - $550 </td>
                                        <td className="p-4">Full driveway, walkways, and back patio steam clean, oil treatment, water sweep</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Premium Driveway Clean & Seal</td>
                                        <td className="p-4 font-semibold">Up to 2,000 sq ft</td>
                                        <td className="p-4 font-semibold">$650 - $950 </td>
                                        <td className="p-4">Deep steam wash, oil lift, joint flush, silane-siloxane sealer spray coating</td>
                                        <td className="p-4">4 - 6 hours</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our driveway cleaning and sealing services.</p>
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