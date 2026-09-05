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
    title: "Commercial Building Washing | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial building washing company. Safe low-pressure soft washing for office buildings, retail centers, and industrial facilities.",
};

const faqs = [
    {
        question: "Why is soft washing critical for commercial building facades?",
        answer: "Commercial building facades are often constructed with delicate exterior materials, including stucco, Dryvit (EIFS), metal siding, brick veneer, and architectural concrete. Standard high-pressure power washing can cause catastrophic, permanent damage to these materials. High pressure can blast away paint, erode stucco textures, crack vinyl panels, and tear EIFS surfaces. Even worse, high-pressure water can penetrate behind siding seams and window seals, trapping moisture inside the wall cavity and leading to hidden structural rot and toxic black mold growth. Our soft wash process utilizes specialized, low-pressure delivery systems (under 300 PSI) combined with custom biodegradable detergents. This system kills organic growth, emulsifies dirt, and lifts grease safely without any risk of structural damage or warranty voiding."
    },
    {
        question: "How do you wash large commercial buildings and multi-story structures?",
        answer: "We are fully equipped to wash large-scale and multi-story commercial buildings safely and efficiently. Our technicians are trained and certified in operating high-reach aerial platforms, including boom lifts, scissor lifts, and spider lifts. We also utilize advanced carbon-fiber water-fed extension poles that allow us to apply cleaning solutions and execute pure-water rinsing up to four stories high directly from the ground. This combination of heavy lift equipment and advanced extension tools allows us to clean difficult-to-reach peaks, glass panels, and high-profile architectural facades while maintaining strict on-site safety standards."
    },
    {
        question: "Are your building wash chemicals safe for surrounding landscaping and public areas?",
        answer: "Yes, our cleaning solutions are highly diluted, biodegradable, and completely safe when applied by our trained technicians. We utilize a strict plant protection protocol to safeguard all surrounding vegetation. Before applying any detergents, we saturate the surrounding soil, lawns, and shrubs with fresh water to create a protective barrier so the plant roots cannot absorb runoff. During the wash process, we continuously mist the foliage and apply neutralizing agents where necessary. We also block off public entryways, cover outdoor electronics, and schedule washes during off-hours to ensure the complete safety of your customers and employees."
    },
    {
        question: "Do your building washing services include window cleaning?",
        answer: "Our standard building wash service includes a thorough low-pressure rinsing of all exterior windows to flush away loosened dirt, soot, and chemical detergents. While this rinse removes bulk grime, it does not replace a professional window squeegee service. If you want a streak-free, crystal-clear window finish, we recommend adding our pure-water window cleaning service to your package. We utilize advanced reverse-osmosis and deionization water-filtration systems to clean the glass, frames, and sills, leaving a spot-free shine without any residue."
    },
    {
        question: "Do you offer overnight or off-hours scheduling for building washing?",
        answer: "Yes, we routinely perform storefront and building washing during overnight or early morning hours. We recognize that washing during regular business hours creates significant foot traffic disruption, parking lot blockages, and potential slip hazards for your customers and staff. Our crews are equipped with low-noise commercial trailer rigs and high-output lighting systems to execute deep concrete pressure washing and facade cleaning between 10:00 PM and 6:00 AM. We ensure all walkways are completely clean, dry, and safe before your doors open for business, delivering a seamless restoration that keeps your daily commerce running smoothly."
    },
    {
        question: "What are the EPA regulations regarding commercial pressure washing wastewater?",
        answer: "The Environmental Protection Agency (EPA) and the Clean Water Act strictly regulate the disposal of commercial pressure washing runoff. It is illegal to discharge wash water containing oil, grease, heavy metals, or chemical cleaning agents directly into municipal storm sewers or surface waters like the Lower Fox River. Storm drains are designed only for rainwater and discharge directly into local waterways without filtration. We operate in strict compliance with these laws by deploying advanced wastewater recovery systems. We seal nearby storm drains, vacuum reclaim the wash water from the concrete, filter out suspended solids and oils, and dispose of the grey water safely in accordance with municipal sanitary sewer guidelines."
    },
    {
        question: "How frequently should a commercial building exterior be washed?",
        answer: "For most commercial office buildings, medical centers, and shopping plazas in Northeast Wisconsin, a professional exterior building wash is recommended once a year, ideally in the spring. Spring washing removes winter salt dust, industrial soot, and organic mold that builds up over the winter. High-traffic retail locations, gas stations, or buildings surrounded by heavy tree canopies may require bi-annual cleanings (spring and fall) to prevent black algae streaks from degrading the building's exterior appearance."
    }
];

export default function BuildingWashingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Building Washing Services",
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
            "lowPrice": "500",
            "highPrice": "3500",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "500.00",
                "maxPrice": "3500.00"
            }
        },
        "description": "Safe commercial building soft washing for EIFS, stucco, brick, and metal facade structures."
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
                                "name": "Commercial Building Washing",
                                "item": "https://valleyexteriorpros.com/services/building-washing"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Commercial Building Washing</span>
                    </>
                }
                description="Safely restore EIFS, stucco, brick, and metal siding. Commercial soft washing systems for offices, retail plazas, and warehouses."
                bgImage="/images/portfolio/building-washing-services-1.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional commercial building washing and soft washing services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            The exterior facade of your building represents your business's professional image. Over time, exposure to vehicle exhaust soot, wind-blown dust, bird droppings, mold, and black algae streaks can severely degrade your property's appearance. Unmaintained siding looks unprofessional and can cause permanent staining and damage to architectural materials.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Using high pressure to clean commercial facades is a major mistake. High-pressure wands easily chip stucco, tear EIFS siding, peel paint, and inject water behind window seals, leading to rot. We utilize specialized soft wash systems that apply biodegradable sanitizers at low pressure to kill organic growth and loosen dirt safely, followed by a high-flow, low-pressure rinse that protects the structural integrity of your building.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Importance of EIFS, Stucco, and Metal Facade Care</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Different exterior materials require unique cleaning chemistries. EIFS and stucco are highly textured and porous, easily trapping mold spores and dirt within their pores. High pressure will tear these synthetic plaster layers. We apply specialized algaecide surfactants that penetrate the porous texture, killing mold spores at the root. Metal paneling and vinyl siding are non-porous but collect dark atmospheric soot. We use specialized surfactants that break the electrostatic bond holding soot to the panels, allowing it to be rinsed away cleanly.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We are fully equipped to wash large-scale and multi-story commercial buildings. Our technicians are certified in operating high-reach aerial platforms, including boom lifts, scissor lifts, and spider lifts. We also utilize advanced carbon-fiber water-fed extension poles that allow us to apply cleaning solutions and execute pure-water rinsing up to four stories high directly from the ground.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Plant and Building Protection protocols</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                We protect your surrounding landscaping. We pre-hydrate all surrounding lawns and gardens to create a protective moisture barrier, and we rinse the foliage continuously during cleaning to ensure zero run-off damage. We also cover building air intakes and electrical boxes to prevent any moisture intrusion, ensuring complete safety.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Building Washing Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Pre-Hydration & Tape</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We pre-hydrate surrounding lawns, tape off exterior electronic card readers, and cover air vent intakes.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Soft Wash Treatment</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply custom algaecide surfactants at low pressure to chemically kill organic growth and suspend dirt.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Low-Pressure Flush</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We gently rinse the facade clean using high-flow, low-pressure water streams and clean all entry windows.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the total wall square footage, height, and facade material of your commercial building.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Wall Area</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Small Commercial Building</td>
                                        <td className="p-4">Up to 5,000 sq ft wall area</td>
                                        <td className="p-4 font-semibold">$500 - $1,200</td>
                                        <td className="p-4">Safety setup, soft wash chemical treatment, low-pressure rinse, window squeegee</td>
                                        <td className="p-4">1 workday</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Medium Retail / Office</td>
                                        <td className="p-4 font-semibold">5,000 - 15,000 sq ft</td>
                                        <td className="p-4 font-semibold">$1,200 - $3,500</td>
                                        <td className="p-4">Full safety lines, EIFS/stucco algae removal, gutter rinse, entry door window squeegee</td>
                                        <td className="p-4">2 - 3 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Industrial / Warehouse</td>
                                        <td className="p-4 font-semibold">15,000+ sq ft</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Multi-phase scheduling, boom lift access, full facade wash, EPA runoff containment</td>
                                        <td className="p-4">Scheduled phases</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: GEOGRAPHY */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Serving local Fox Valley commercial properties</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Valley Property Services works daily in retail centers, corporate complexes, and industrial parks throughout Appleton, Green Bay, De Pere, Neenah, and Oshkosh. We are experts in dealing with local soil types, clay compaction, and extreme winter freeze-thaw cycles. Our crews carry specialized compaction plates, commercial drying blowers, and warm-water rotary wash systems to ensure a perfect finish.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We are fully licensed and carry a $2M liability policy, providing complete safety and peace of mind on every single job site.
                        </p>
                    </section>

                    {/* SECTION 6: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial building washing services.</p>
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
