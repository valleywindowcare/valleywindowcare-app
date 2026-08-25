import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Professional Fence Cleaning & Restoration in Green Bay & Appleton",
    description: "Expert wood and vinyl fence pressure washing and soft washing services. Valley Property Services restores properties across Northeast Wisconsin.",
};

const faqs = [
    {
        question: "Is pressure washing dangerous for wood and vinyl fences?",
        answer: "Yes, standard high-pressure washing can cause permanent, severe damage to both wood and vinyl fencing. Wood is relatively soft and fibrous; high pressure easily shreds the wood grain, splinters the boards, and leaves deep, permanent nozzle scars. Vinyl fences, while more durable, can become brittle over time from UV exposure. High-pressure water can easily crack or puncture the vinyl panels, or blast away the outer protective gloss layer, leaving the vinyl rough and prone to rapid dirt re-soiling. We use a low-pressure soft wash method that applies specialized detergents to chemically neutralize mold, algae, and grime, followed by a gentle rinse that is as safe as a garden hose."
    },
    {
        question: "How does the soft wash process clean wood fences without damage?",
        answer: "Our wood fence soft washing process relies on chemistry rather than mechanical force. We apply a customized, low-pressure detergent containing biodegradable sanitizers and surfactants. This solution penetrates the porous wood structure to kill mold, mildew, and algae spores at the root. Once the organic growth is neutralized, we gently rinse away the dead organic matter and gray, weathered wood cells. We then apply an acid-based wood brightener (oxalic or citric acid) to neutralize the wood's pH, open the grain, and restore the wood's natural warm, golden cedar or pine color, ready for staining or sealing."
    },
    {
        question: "How do you remove green mold and black mildew from vinyl fences?",
        answer: "Green mold and black mildew thrive on vinyl fences due to humidity and shade. These organic growths feed on dust and organic pollen that settle on the vinyl panels. We use a specialized vinyl-cleaning surfactant that chemically neutralizes the organic growth on contact, loosening its grip on the smooth vinyl surface. After a brief dwell time, we perform a low-pressure rinse to wash away the neutralized spores and dirt. This complete sanitization kills the microscopic spores, keeping the fence clean up to four times longer than standard pressure washing alone."
    },
    {
        question: "How long should I wait to stain or seal my wood fence after cleaning?",
        answer: "We recommend waiting a minimum of 24 to 48 hours of dry, sunny weather before applying any stain or sealer to a freshly cleaned wood fence. The wood must reach an internal moisture level of 12% or lower to allow a sealer or stain to bond properly. Staining a damp fence traps water inside the wood fibers, which will cause the stain to bubble, peel, or turn cloudy. We monitor local Wisconsin weather forecasts and recommend testing the wood with a moisture meter before applying any finishes to ensure a long-lasting coating."
    },
    {
        question: "Can your cleaning process remove old stain or paint from a fence?",
        answer: "Our standard fence cleaning service is designed to remove dirt, mold, mildew, and weathered gray wood cells. It is not a paint or stain stripping service. While our cleaning will loosen and wash away old, flaking paint or failing stain that has already lost its bond to the wood, it will not strip solid, well-adhered coatings. If you want to change the color of your fence or remove all old paint, a specialized chemical paint stripping and sanding process is required, which we can evaluate during our initial property consultation."
    },
    {
        question: "Will the cleaning agents harm my grass or surrounding landscape plants?",
        answer: "No. Protecting your landscaping is a critical part of our service. Before applying any cleaning agents to the fence, we saturate all surrounding grass, shrubs, and flowers with fresh water. This hydration fills the plant cells, preventing them from absorbing any cleaning solution runoff. Throughout the cleaning process, we continuously mist the surrounding foliage, and we use biodegradable cleaning agents that neutralize when diluted, ensuring zero risk of chemical burns to your lawn and gardens."
    },
    {
        question: "How often should a wood or vinyl fence be professionally cleaned?",
        answer: "For properties in Appleton, Green Bay, and De Pere, we recommend scheduling a professional fence cleaning every 2 to 3 years. Fences located in shaded areas, under heavy tree canopies, or in low-lying, damp sections of a property may require annual cleaning to prevent slippery black algae and mold from taking over the surfaces. Vinyl fences are easy to maintain and typically only require a soft wash every 3 years to maintain their bright, clean appearance."
    }
];

export default function FenceCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Fence Cleaning & Restoration Services",
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
            "lowPrice": "195",
            "highPrice": "1200",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "195.00",
                "maxPrice": "1200.00"
            }
        },
        "description": "Professional wood and vinyl fence soft washing, mold removal, and wood brightening services."
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
                                "name": "Fence Cleaning",
                                "item": "https://valleyexteriorpros.com/services/fence-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Fence Cleaning & Restoration</span>
                    </>
                }
                description="Safely restore wood and vinyl fences without destructive high pressure. Low-pressure soft washing, mold eradication, and wood brightening."
                bgImage="/images/portfolio/soft-washing.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional wood and vinyl fence cleaning services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Fences define property boundaries, enhance privacy, and secure your yard. However, because they are vertical barriers exposed to wind, rain, and soil moisture, they rapidly collect dark green mold, black mildew, dirt, and weathered gray wood cells.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Standard pressure washing is highly destructive to fences. High-pressure wands easily splinter wood boards and crack vinyl panels, which can void manufacturer warranties. Our professional fence cleaning uses specialized soft wash detergents and wood brighteners to lift stains safely and evenly without damaging the fence structure.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Soft Washing Wood & Vinyl Fences</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Fence restoration is about chemical balance, not physical force. We apply a low-pressure cleaner that breaks down mold spores and loosens dead, gray wood cells. Once rinsed away, the wood is often dark and alkaline. We then apply an acid-based wood brightener that lowers the wood's pH, opening the pores and reacting with natural tannins to restore the original warm, golden tone of the cedar or pine.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Vinyl fences require specialized care. Unlike wood, vinyl surfaces are non-porous but collect dark organic biofilms and dirt. We use specialized surfactants that break the electrostatic bond holding grime to the vinyl, allowing it to be gently rinsed away without high pressure.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Plant and Fencing Safeguards</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Your landscaping is an investment. We pre-hydrate all surrounding lawns, shrubs, and gardens with fresh water to create a protective moisture barrier. During cleaning, we continuously mist the surrounding foliage and use biodegradable surfactants that neutralize when diluted, ensuring zero chemical burn risk to your lawns and gardens.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Step Fence Cleaning Process</h2>
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
                            We provide transparent, flat-rate pricing based on fence linear footage and material type. Below is a baseline overview of our fence cleaning packages.
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
                                        <td className="p-4 font-bold text-navy">Small Fence Clean</td>
                                        <td className="p-4">Up to 100 linear ft (Wood/Vinyl)</td>
                                        <td className="p-4 font-semibold">$195 - $295 </td>
                                        <td className="p-4">Pre-hydration, soft wash algaecide treatment, wood brightening (if wood), soft rinse</td>
                                        <td className="p-4">1.5 - 2.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Fence Clean</td>
                                        <td className="p-4 font-semibold">100 - 250 linear ft (Wood/Vinyl)</td>
                                        <td className="p-4 font-semibold">$350 - $600 </td>
                                        <td className="p-4">Deep soft wash, mold eradication, structural gate clean, wood brightening</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Property Fence Clean</td>
                                        <td className="p-4 font-semibold">250 - 500 linear ft</td>
                                        <td className="p-4 font-semibold">$700 - $1,200 </td>
                                        <td className="p-4">Full fence perimeter clean, post detail, wood brightening, ground-level debris wash</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our wood and vinyl fence cleaning services.</p>
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
