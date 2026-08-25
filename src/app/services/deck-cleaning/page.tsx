import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Professional Deck Cleaning & Restoration in Green Bay & Appleton",
    description: "Expert wood and composite deck cleaning and soft washing services. Valley Property Services restores cedar, pressure-treated, and Trex decks across Northeast Wisconsin.",
};

const faqs = [
    {
        question: "Why is high-pressure washing highly dangerous for wood decks?",
        answer: "Standard high-pressure washing is one of the most common causes of permanent damage to wood decks. Wood is a relatively soft, fibrous material. When subjected to high-pressure water streams (typically exceeding 1,500 PSI), the force easily tears, shreds, and splinters the wood fibers. This damage destroys the smooth surface layer, raises the wood grain, and creates micro-cracks that allow water to collect, leading to rapid rotting. High pressure can also leave deep, permanent gouges and uneven lines across the deck boards. We strictly use a low-pressure soft wash method that relies on chemical neutralization to break down gray wood cells and mold, followed by a gentle rinse that is as safe as a garden hose."
    },
    {
        question: "How does soft washing cedar and pressure-treated wood decks work?",
        answer: "Our soft wash process is a scientifically formulated treatment designed to clean wood without mechanical force. We apply a specialized, low-pressure detergent containing biodegradable sanitizers and surfactants. This solution penetrates the porous wood, killing mold, algae, and mildew at the root. After a brief dwell time, we gently rinse away the dead organic growth and gray, UV-damaged wood fibers. Finally, we apply a specialized wood brightener (usually citric or oxalic acid). This brightener neutralizes the pH balance of the wood, opens the grain, and reacts with the natural tannins to restore the wood's rich, warm cedar or redwood color."
    },
    {
        question: "How do you clean composite decks like Trex, and does it require different methods?",
        answer: "Yes, composite decks (made of plastic polymers and wood fibers) require a different cleaning chemistry than standard wood. Composite decking is susceptible to black mold spots that embed inside the plastic texture, as well as greasy food spills and tannin stains from leaves. High pressure must never be used on composite decks as it can permanently scar the synthetic material and void the manufacturer's warranty. We apply a specialized surfactant blend designed specifically for composite materials that penetrates the synthetic pores, lifts embedded black mold, and suspends dirt. We then perform a low-pressure rinse, restoring the original color and texture of the decking."
    },
    {
        question: "How long should I wait to stain or seal my wood deck after it has been cleaned?",
        answer: "We recommend waiting a minimum of 24 to 48 hours of dry, sunny weather before applying any stain or sealer to a freshly cleaned wood deck. Wood must reach an internal moisture content of 12% or lower to allow a sealer or stain to bond properly. If you seal wood that is still damp, the moisture will trap underneath, causing the sealer to bubble, peel, or turn cloudy. We monitor the local Wisconsin weather forecast and use professional moisture meters to test the deck boards before executing any staining or sealing operations, ensuring a long-lasting finish."
    },
    {
        question: "Can your cleaning process remove old, peeling paint or solid stains?",
        answer: "Our standard deck cleaning service is designed to remove dirt, gray UV-damaged wood cells, mold, and mildew. It is not a paint stripping service. While our cleaning will loosen and wash away old, flaking paint or failing stain that has already lost its bond, it will not strip sound, adhered paint or solid stains. If your goal is to completely change the color of your deck or remove all old paint, a full chemical paint stripping and sanding process is required. We can evaluate your deck's condition during our initial consultation to discuss your restoration options."
    },
    {
        question: "Will the deck cleaning process damage my surrounding lawn or flowers?",
        answer: "No. Protecting your landscaping is a critical part of our service. Before applying any cleaning agents to the deck, we saturate all surrounding grass, shrubs, and flowers with fresh water. This hydration fills the plant cells, preventing them from absorbing any cleaning solution runoff. Throughout the cleaning process, we continuously mist the surrounding foliage, and we use biodegradable cleaning agents that neutralize when diluted, ensuring zero risk of chemical burns to your lawn and gardens."
    },
    {
        question: "How frequently should a residential deck be cleaned?",
        answer: "For residential decks in Appleton, Green Bay, and De Pere, we recommend a professional soft wash cleaning once a year, preferably in the late spring or early summer. Annual cleaning prevents organic biofilm from building up, making the deck safe and non-slippery. It also prevents mold from eating into the wood fibers, extending the life of the deck. Wood decks that are sealed or stained typically need to be re-sealed every 2 to 3 years to maintain UV and water barrier protection."
    }
];

export default function DeckCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Deck Cleaning & Restoration Services",
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
            "highPrice": "1500",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "250.00",
                "maxPrice": "1500.00"
            }
        },
        "description": "Professional wood and composite deck soft washing, brightener application, and restoration services."
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
                                "name": "Deck Cleaning",
                                "item": "https://valleyexteriorpros.com/services/deck-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Deck Cleaning & Restoration</span>
                    </>
                }
                description="Safely restore wood and composite decks without destructive high pressure. Low-pressure soft washing, wood brightening, and stain preparation."
                bgImage="/images/portfolio/soft-washing.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional wood and composite deck cleaning services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            A deck is an extension of your home's living space, providing the perfect setting for summer barbecues, family gatherings, and outdoor relaxation. However, because decks are horizontal surfaces exposed directly to the elements, they rapidly collect moisture, dirt, leaf tannins, green algae, black mold, and grey UV-weathered wood cells.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Standard pressure washing is highly destructive to wood decks. Standard wands easily splinter wood fibers, leave permanent gouges, and cause fuzzy, raised grain. Composite decking can also be permanently scarred by high pressure, which voids manufacturer warranties. Our professional deck cleaning uses specialized soft wash detergents and wood brighteners to lift stains safely and evenly without damaging the wood structure.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Wood Brightening & Composite Care</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Wood deck restoration involves chemical balance, not physical force. We apply a low-pressure cleaner that breaks down mold spores and loosens dead, gray wood cells. Once rinsed away, the wood is often dark and alkaline. We then apply an acid-based wood brightener that lowers the wood's pH, opening the pores and reacting with natural tannins to restore the original warm, golden tone of the cedar or pine.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Composite decks like Trex require specialized care. Unlike wood, composite materials contain synthetic plastics that trap mold and food grease within their texture. We use custom surfactants that penetrate these synthetic pores to suspend stains, allowing them to be gently rinsed away without high pressure.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Plant and Decking Safeguards</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Your landscaping is an investment. We pre-hydrate all surrounding lawns, shrubs, and gardens with fresh water to create a protective moisture barrier. During cleaning, we continuously mist the surrounding foliage and use biodegradable surfactants that neutralize when diluted, ensuring zero chemical burn risk to your lawns and gardens.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Step Deck Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Pre-Hydration & Prep</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We sweep away debris, pre-hydrate surrounding plants, and shield delicate outdoor electronics or furniture.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Soft Wash Treatment</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply custom algaecides and surfactants at low pressure to kill mold, algae, and lift dirt safely.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Brighten & Rinse</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply wood brightener to restore the natural wood pH and color, followed by a gentle low-pressure rinse.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent, flat-rate pricing based on deck square footage and material type. Below is a baseline overview of our deck cleaning packages.
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
                                        <td className="p-4 font-bold text-navy">Small Deck Clean</td>
                                        <td className="p-4">Up to 250 sq ft (Wood/Composite)</td>
                                        <td className="p-4 font-semibold">$250 - $400 </td>
                                        <td className="p-4">Pre-hydration, soft wash algaecide treatment, wood brightening, soft rinse</td>
                                        <td className="p-4">1.5 - 2.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Deck Clean</td>
                                        <td className="p-4 font-semibold">250 - 500 sq ft (Wood/Composite)</td>
                                        <td className="p-4 font-semibold">$450 - $700 </td>
                                        <td className="p-4">Deep soft wash, mold eradication, structural railing clean, wood brightening</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large/Multi-Tier Deck Clean</td>
                                        <td className="p-4 font-semibold">500 - 1,000 sq ft</td>
                                        <td className="p-4 font-semibold">$750 - $1,200 </td>
                                        <td className="p-4">Full multi-tier clean, staircase detail, wood brightening, structural support wash</td>
                                        <td className="p-4">4 - 6 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Premium Clean & Stain Prep</td>
                                        <td className="p-4 font-semibold">Up to 600 sq ft</td>
                                        <td className="p-4 font-semibold font-bold text-navy">$800 - $1,500 </td>
                                        <td className="p-4">Deep cleaning, wood brightener, grain opening, sanding prep, moisture check</td>
                                        <td className="p-4">1 workday</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our wood and composite deck cleaning services.</p>
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
