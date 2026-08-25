import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Siding Soft Washing Guide | Green Bay & Appleton",
    description: "The definitive guide to low-pressure soft washing. Learn how sodium hypochlorite chemistry, surfactant science, and ARMA-compliant methods restore siding.",
};

const faqs = [
    {
        question: "What is soft washing, and how does it differ from traditional power washing?",
        answer: "Soft washing is a highly specialized low-pressure exterior cleaning methodology that relies entirely on chemical sanitization rather than destructive kinetic force. Traditional power washing utilizes highly pressurized water (ranging from 1,500 to 4,000 PSI) to physically blast away surface dirt. This extreme kinetic force presents severe risks, including stripping exterior paint, gouging wood decks, cracking vinyl siding panels, and forcing water behind window seals and siding seams, which breeds mold. In contrast, soft washing operates at pressures under 100 PSI—similar to a standard garden hose. It deploys specialized detergents, including algaecides and surfactants, to chemically neutralize organic growth (mold, mildew, algae, lichen) at the cellular level. This completely sterilizes the surface and prevents rapid regrowth, while ensuring zero risk of structural damage to delicate building substrates."
    },
    {
        question: "What chemical solutions are used in soft washing, and are they safe for the environment?",
        answer: "The primary active agent in soft washing is a sodium hypochlorite solution (typically diluted to a 1% to 3% concentration depending on the surface), which is scientifically formulated with specialized surfactant wetting agents. Sodium hypochlorite acts as a powerful algaecide that breaks down the cellular walls of organic micro-organisms, immediately killing mold spores, mildew, and cyanobacteria. The surfactant reduces the surface tension of the water, allowing the solution to cling to vertical surfaces for an extended dwell time and penetrate deep into porous siding substrates. Our formulations are fully biodegradable and decompose rapidly into simple table salt and water upon contact with the air and soil. Furthermore, we pre-hydrate all surrounding lawns and gardens with fresh water before, during, and after application, ensuring zero chemical absorption and protecting your valuable landscaping."
    },
    {
        question: "Why is soft washing mandatory for maintaining asphalt shingle roof warranties?",
        answer: "The Asphalt Roofing Manufacturers Association (ARMA), alongside major shingle manufacturers like GAF and Owens Corning, explicitly mandate low-pressure soft washing as the only approved roof cleaning methodology. Asphalt shingles are coated with ceramic granules that shield the asphalt backing from destructive UV rays. Using a traditional high-pressure power washer on shingles will instantly blast away these protective granules, exposing the underlying asphalt to thermal cracking, curling, and rapid degradation. This granular loss immediately voids your manufacturer's warranty. Soft washing operates at less than 60 PSI, utilizing chemical detergents to dissolve Gloeocapsa magma (black roof algae) and moss roots without mechanical abrasion. This ensures your shingles remain fully protected, your home's thermal efficiency is maintained, and your roof warranty remains completely intact."
    },
    {
        question: "How does the local Wisconsin climate necessitate professional soft washing?",
        answer: "Northeast Wisconsin's unique macroclimate provides the ideal environment for invasive organic growths on building exteriors. Our damp, humid springs and hot summers, combined with freezing winters, create a high-moisture profile that allows mold, mildew, green algae, and lichen to thrive, particularly on northern-facing or shaded siding and rooflines. Furthermore, local winter road salt usage leaves a corrosive film on siding. Standard rinsing merely wet-treats the surface, encouraging organic spores to multiply. Soft washing chemically sanitizes the siding, killing the micro-organisms at the root and sterilizing the pores of vinyl, brick, and stucco. This chemical sterilization is crucial to prevent the algae from rapidly re-colonizing during the next warm, humid cycle, ensuring a clean exterior for up to four times longer than standard washing."
    },
    {
        question: "Can soft washing safely clean stucco, Dryvit, and EIFS facade materials?",
        answer: "Yes, soft washing is the only safe method for cleaning textured synthetic siding materials like stucco, Dryvit, and Exterior Insulation and Finish Systems (EIFS). These facades are highly textured, porous, and relatively soft, making them prime targets for dark atmospheric soot and green algae buildup. Traditional high-pressure washing will easily pit the stucco surface, erode the texture, and puncture the thin EIFS backing, leading to catastrophic water damage inside the wall cavity. Our soft wash system applies custom-formulated algaecides that penetrate the porous stucco texture to suspend dirt and kill mold spores at the root. We follow this with a high-flow, low-pressure rinse that cleans the facade evenly and safely without causing any physical damage or water intrusion."
    },
    {
        question: "Will the soft wash chemicals damage my exterior window frames or paint?",
        answer: "No, our soft washing solutions are carefully balanced and fully safe for exterior window glass, painted trim, gutters, and siding when applied by our certified technicians. We custom-blend our detergents on-site based on the material type and soil severity. For vinyl windows and painted wood trim, our solutions are highly diluted to ensure zero risk of paint stripping or finish clouding. Our surfactant blends also contain specialized rinsing agents that prevent water spots on the glass. We perform thorough post-rinsing of all windows and frames to remove any chemical residue, leaving a clean, spot-free exterior."
    },
    {
        question: "How long does a professional house soft wash take, and how long does it last?",
        answer: "For a standard-sized residential home (1,500 to 2,500 square feet), a professional soft wash cleaning is typically completed in 2 to 4 hours. Because the soft wash chemicals completely sanitize the exterior by killing all microscopic spores, the results last significantly longer than standard pressure washing. A soft-washed home will typically remain free of green algae, black mold, and mildew for 2 to 3 years, depending on tree shade cover and local humidity levels, making it the most cost-effective and durable siding maintenance solution available."
    }
];

export default function SoftWashGuidePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Siding Soft Washing Services",
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
            "lowPrice": "299",
            "highPrice": "1500",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "299.00",
                "maxPrice": "1500.00"
            }
        },
        "description": "Safe low-pressure soft washing services for residential siding, stucco, and roofs."
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
                                "name": "Soft Wash Guide",
                                "item": "https://valleyexteriorpros.com/services/soft-wash"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Siding Soft Washing Guide</span>
                    </>
                }
                description="The definitive technical guide to low-pressure soft washing. Learn how sodium hypochlorite chemistry, surfactant science, and ARMA-compliant methods restore siding safely."
                bgImage="/images/portfolio/soft-washing.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional low-pressure soft washing and siding cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Exterior building siding is a massive component of your property's value. However, exposure to high humidity, shifting temperatures, and organic pollen in Northeast Wisconsin leads to the rapid build-up of dark green algae, black mold, mildew, and lichen. If left unmaintained, this organic biofilm degrades siding materials, traps heat, and hurts your property's curb appeal.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Traditional high-pressure power washing is not a safe way to clean siding. High pressure can blast away paint, strip textures, crack vinyl panels, and force water behind window seals and siding seams, which breeds mold. We utilize specialized soft wash systems that apply biodegradable detergents at low pressure (under 100 PSI) to kill organic growth safely, followed by a gentle rinse that protects the structural integrity of your home.
                        </p>
                    </section>

                    {/* SECTION 2: TECHNICAL DETAIL */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Chemistry of Soft Washing: Surfactants & Sodium Hypochlorite</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Soft washing is built on chemistry rather than mechanical force. The primary active sanitizing agent is sodium hypochlorite, which we mix with specialized surfactant wetting agents. Sodium hypochlorite acts as a powerful algaecide that breaks down the cellular walls of organic micro-organisms, killing mold, mildew, algae, and lichen spores at the root.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            The surfactant is a crucial component of the mix. Surfactants reduce the surface tension of water, allowing the cleaning solution to cling to vertical walls for an extended dwell time and penetrate deep into the porous siding material. This dwell time allows the chemicals to dissolve the organic buildup cleanly, so it can be rinsed away with low pressure, equivalent to a gentle garden hose (under 100 PSI).
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">ARMA Warranty Compliance & Roof Granule Protection</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Shingle manufacturers (including GAF and Owens Corning) explicitly mandate soft washing for roof cleaning. High pressure will instantly strip away the shingle's protective ceramic granules, exposing the underlying asphalt to cracking and voiding the manufacturer's warranty. Our soft wash roof cleaning operates under 60 PSI, utilizing chemical detergents to dissolve black algae streaks safely while protecting your shingle warranty.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: PRESSURE COMPARISON */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Pressure Washing vs. Soft Washing Comparison</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Understanding the technical difference between these two methods is key to protecting your exterior investment.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Feature</th>
                                        <th className="p-4 font-bold border-b border-gray-200">High-Pressure Washing</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Low-Pressure Soft Washing</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Working Pressure</td>
                                        <td className="p-4">1,500 to 4,000 PSI (High kinetic force)</td>
                                        <td className="p-4 font-semibold">Under 100 PSI (Low flow, gentle mist)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Mechanism</td>
                                        <td className="p-4">Physical friction (blasts away surface layers)</td>
                                        <td className="p-4 font-semibold">Chemical sanitization (kills organic spores)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Algae/Mold Treatment</td>
                                        <td className="p-4">Shears the top layer (root system survives)</td>
                                        <td className="p-4 font-semibold">Neutralizes entirely (kills roots and spores)</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Substrate Damage Risk</td>
                                        <td className="p-4 text-red-600 font-medium">High (gouges wood, tears stucco, splits siding)</td>
                                        <td className="p-4 text-green-600 font-semibold">Zero (completely safe for EIFS, shingle, vinyl)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12 mt-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the total square footage and height of your home's exterior walls. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Small Siding Soft Wash</td>
                                        <td className="p-4">Up to 1,500 sq ft wall area</td>
                                        <td className="p-4 font-semibold">$299 - $450</td>
                                        <td className="p-4">Pre-hydration, soft wash algaecide treatment, siding sanitization, post-wash plant flush</td>
                                        <td className="p-4">1.5 - 2.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Siding Soft Wash</td>
                                        <td className="p-4 font-semibold">1,500 - 2,500 sq ft</td>
                                        <td className="p-4 font-semibold">$450 - $750</td>
                                        <td className="p-4">Deep soft wash, mold eradication, structural trim wash, gutter exterior rinse, plant hydration</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large / Multi-Story Wash</td>
                                        <td className="p-4 font-semibold">2,500 - 4,000 sq ft</td>
                                        <td className="p-4 font-semibold">$750 - $1,500</td>
                                        <td className="p-4">Full multi-story soft wash, chimney exterior wash, soffit detail, pure-water window rinse</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our siding soft washing services.</p>
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