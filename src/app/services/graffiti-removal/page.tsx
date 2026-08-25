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
    title: "Commercial Graffiti Removal | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial graffiti removal company. Fast, safe chemical paint extraction from brick, concrete, stone, and metal.",
};

const faqs = [
    {
        question: "How quickly can your crew respond to a graffiti vandalism report?",
        answer: "We offer priority 24 to 48-hour response times for all commercial graffiti removal requests in Green Bay and Appleton. Rapid removal is critical because the longer paint sits on a porous surface like brick or concrete, the deeper it penetrates into the material's pores, making it far more difficult to extract without shadowing. Furthermore, studies show that removing graffiti immediately acts as a strong deterrent, discouraging vandals from returning, whereas leaving the graffiti encourages additional vandalism on the same building. We prioritize commercial graffiti calls to restore your building's professional appearance as quickly as possible."
    },
    {
        question: "Will the graffiti removal process damage my underlying brick or stone facade?",
        answer: "No, we use specialized chemical paint-dissolving agents and low-pressure hot water to melt and extract the paint safely without damaging the underlying brick, stone, or concrete. Standard high-pressure blasting is highly destructive to masonry; it can permanently scar the stone, blast away mortar joints, or strip the protective outer face of brick, making it porous and prone to moisture spalling. We apply targeted paint-breakers that break the chemical bond of the spray paint, allowing it to be rinsed away at low pressure, preserving the structural integrity of your building's masonry."
    },
    {
        question: "What is 'ghosting' or 'shadowing' in graffiti removal, and how do you prevent it?",
        answer: "'Ghosting' or 'shadowing' occurs when a faint, dark outline of the original graffiti remains visible on the masonry after the surface paint has been washed away. This happens because porous stone absorbs the paint pigment deep into its capillaries. To prevent ghosting, we apply a specialized secondary chemical poultice or shadow-lifter after the bulk wash. This chemical penetrates the stone pores to dissolve the deep-seated pigments and draw them to the surface. We then wash the area again using hot steam, leaving a perfectly clean, uniform wall with zero ghosting lines."
    },
    {
        question: "Can you remove graffiti from delicate surfaces like vinyl siding, metal, or glass?",
        answer: "Yes, we can safely remove graffiti from delicate vertical surfaces. Each material requires a distinct chemical paint-releasing agent. For glass, we use solvent-free cleaners and brass blades that scrape away the dried paint without scratching the glass pane. For vinyl siding and painted metal surfaces, we apply gentle, non-butyl chemical washes that dissolve the spray paint pigment without melting the vinyl substrate or stripping the building's original factory paint coatings, ensuring a safe, damage-free restoration."
    },
    {
        question: "Do you offer permanent anti-graffiti protective coatings?",
        answer: "Yes, we offer professional anti-graffiti coatings that act as a permanent or sacrificial barrier on your walls. Sacrificial coatings are clear wax-like polymers that prevent spray paint from bonding to the brick. When graffiti occurs, we simply wash the area with hot water, melting the wax barrier and flushing the paint away with it, after which we reapply the wax. Permanent coatings are hydrophobic silicones that prevent spray paint from adhering at all, allowing it to be easily wiped off with a simple solvent and cloth, which is a great investment for properties located in high-risk zones."
    },
    {
        question: "Are your graffiti removal chemical solvents safe for the environment?",
        answer: "Yes, we prioritize environmental safety by utilizing eco-friendly, biodegradable paint-release solvents. Many older graffiti removal methods rely on harsh methylene chloride or highly toxic acids that present severe chemical burn hazards and damage surrounding landscaping. The products we select break down naturally and are free of VOCs. We also saturate the surrounding soil and grass with water before starting to prevent any chemical absorption, and we reclaim all rinse water to comply with EPA runoff regulations, protecting your local environment."
    },
    {
        question: "Does your graffiti removal service cover spray paint, permanent markers, and stickers?",
        answer: "Yes, our restoration technicians are equipped to remove all types of vandalism. This includes aerosol spray paint, high-adhesion industrial primers, permanent markers, wax crayons, adhesive stickers, and wheat-paste posters. We utilize different chemical formulations and scrubbing techniques tailored specifically to each type of adhesive or pigment, ensuring a complete restoration of the surface regardless of the medium used by the vandals."
    }
];

export default function GraffitiRemovalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Graffiti Removal Services",
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
            "highPrice": "850",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "250.00",
                "maxPrice": "850.00"
            }
        },
        "description": "Fast commercial graffiti removal, paint extraction, shadow-lifting, and anti-graffiti barrier coating."
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
                                "name": "Graffiti Removal",
                                "item": "https://valleyexteriorpros.com/services/graffiti-removal"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Commercial Graffiti Removal</span>
                    </>
                }
                description="Fast priority response to eliminate vandalism and restore your property's professional image. Safe chemical paint extraction with zero masonry damage."
                bgImage="/images/portfolio/building-washing-services-1.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional commercial graffiti removal and paint extraction in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Graffiti vandalism is a frustrating issue that immediately compromises your property's professional image and hurts customer perception. If left unaddressed, graffiti can damage your brand, lower property values, and invite further vandalism. Spray paint seeps deep into the pores of concrete, brick, and stone, requiring specialized care to remove completely.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Using high pressure to clean graffiti is a severe mistake. High-pressure wands easily scar stone, blast away mortar joints, or strip brick surfaces, causing permanent damage. We utilize specialized chemical paint-dissolving agents and low-pressure hot water to melt and extract the paint safely, followed by shadow-lifters to eliminate any ghosting outlines, leaving a clean, uniform finish.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Paint Extraction & Anti-Graffiti Barriers</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Graffiti removal requires chemical breakdown, not mechanical force. We apply target paint-breakers that dissolve the paint binder molecules. The paint is then flushed away using 200°F+ hot water at low pressure. For porous brick or stone, pigments can remain deep inside the capillaries, creating a ghosting outline. We apply specialized shadow-lifters that draw these deep pigments to the surface, ensuring complete removal.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            For properties in high-risk areas, we offer anti-graffiti protective barriers. These coatings are clear polymer waxes or silicones that prevent paint from bonding to the masonry, making future graffiti easy to rinse away with hot water, saving you money on future cleaning services.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Masonry Preservation Guarantee</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Historic brick and sandstone are easily damaged by pressure washing. We never use abrasive media or harsh acids that corrode masonry. Our chemical paint-lifters are pH-neutral and VOC-compliant, reacting only with the paint pigments. We flush the paint using high-flow, low-pressure steam, preserving the delicate face of your masonry structures.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Step Graffiti Extraction Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Identify & Pre-treat</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We identify the paint type and masonry substrate, and apply custom chemical paint-breakers to dissolve the paint bond.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Steam Extraction</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We rinse the dissolved paint away using 200°F+ hot water at low pressure, preventing any damage to the brick face.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Shadow Lift & Protect</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply shadow-lifters to remove ghosting shadows. For high-risk areas, we apply an anti-graffiti barrier coating.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide upfront, flat-rate pricing based on total square footage, height, and substrate material. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Spot Graffiti Removal</td>
                                        <td className="p-4">Up to 100 sq ft concrete/brick</td>
                                        <td className="p-4 font-semibold">$250 - $400</td>
                                        <td className="p-4">Pre-treatment, low-pressure steam extraction, shadow-lifting, final neutralization</td>
                                        <td className="p-4">1 - 2 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Area Graffiti Cleanup</td>
                                        <td className="p-4 font-semibold">100 - 500 sq ft</td>
                                        <td className="p-4 font-semibold">$450 - $850</td>
                                        <td className="p-4">Full paint-breaker application, deep hot-water extraction, shadow-lifting, cleanup</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Facade Restoration</td>
                                        <td className="p-4 font-semibold">500+ sq ft / High Reach</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Scaffolding/lift setup, full paint extraction, shadow-lifting, anti-graffiti barrier coating</td>
                                        <td className="p-4">Multi-day phase</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial graffiti removal services.</p>
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
