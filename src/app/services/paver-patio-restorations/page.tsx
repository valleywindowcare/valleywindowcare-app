import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Professional Paver Patio Restoration in Green Bay & Appleton",
    description: "Expert brick paver cleaning, polymeric sanding, and sealing services. Valley Property Services restores and protects patios, driveways, and plazas in Northeast Wisconsin.",
};

const faqs = [
    {
        question: "What is polymeric sand and why is it essential for brick paver patios?",
        answer: "Polymeric sand is a specialized mixture of fine-graded sand and advanced polymer binders designed specifically to lock brick pavers in place. When dry sand is swept into paver joints and activated with water, the polymers activate and cure, creating a durable, flexible seal. This joint lock is crucial because it prevents shifting and wobbling, stops weed seeds from germinating in the joints, and blocks burrowing insects like ants from destabilizing the base. Using standard play sand or leaving joints empty allows water to wash away the underlying bedding sand, leading to sinking, cracking, and structural failure. Our restoration protocol always includes full joint excavation and complete polymeric sand replacement using commercial-grade polymers."
    },
    {
        question: "How long should I wait to use my paver patio after cleaning and re-sanding?",
        answer: "We recommend keeping all foot traffic off the newly restored paver surface for a minimum of 24 hours after polymeric sand activation. If we have also applied a premium protective sealer, this curing window should be extended to 48 hours for light pedestrian traffic and a full 72 hours before returning heavy patio furniture, grills, or vehicles. Curing times are heavily dependent on local Wisconsin weather conditions, including humidity levels, direct sunlight, and ambient temperature. Walking on the pavers or moving heavy items before the polymers and sealers have fully cured can compromise the joint lock, smear the sealer, or create tracking patterns on the surface."
    },
    {
        question: "What is the difference between wet-look, satin, and natural-look paver sealers?",
        answer: "The primary difference lies in the visual finish and the type of protective barrier formed. Wet-look sealers are typically solvent-based acrylics that deepen the color of the brick, giving it a rich, darkened appearance with a high-gloss or semi-gloss shine. Satin sealers offer a moderate color enhancement with a low-sheen, matte finish. Natural-look sealers are water-based silane-siloxane penetrating formulas that protect the brick from water absorption and stain penetration without changing the color, texture, or slip resistance of the surface. We evaluate your specific brick type, age, and personal preferences during our initial consultation to recommend the ideal protective sealer for your patio."
    },
    {
        question: "Can you fix uneven, shifting, or sinking brick pavers during restoration?",
        answer: "Yes, minor leveling and spot repairs are a standard part of our comprehensive restoration process. Sinking pavers are usually caused by base erosion, water pooling, or heavy vehicle traffic. We remove the affected pavers, excavate the failing base material, lay down compactable crushed stone and screeded bedding sand, and reinstall the pavers to match the surrounding grade. For extensive structural failures across large sections of a patio, we coordinate with specialized hardscape contractors to perform sub-base remediation before we execute our cleaning, sanding, and sealing operations."
    },
    {
        question: "How do you safely remove moss, mold, and weed growth from paver joints?",
        answer: "We use a multi-stage eradication process to ensure organic growth is completely destroyed. We begin by applying a specialized biodegradable algaecide to kill moss, mold, and weed roots at the molecular level, preventing them from regenerating. Next, we use specialized pressure-regulated rotary surface cleaners to flush out the dead organic material and old, contaminated joint sand without shifting the pavers or damaging their edges. This deep extraction leaves the joints completely clean, sterile, and ready for fresh polymeric sand installation."
    },
    {
        question: "Does sealing pavers prevent them from becoming slippery when wet?",
        answer: "High-quality penetrating sealers do not alter the texture of the brick, maintaining its natural slip resistance when wet. If you select a topical semi-gloss or wet-look sealer, we incorporate a specialized micronized polymer grip additive into the liquid sealer prior to application. This additive creates a micro-textured surface that provides excellent traction for feet and tires, preventing the pavers from becoming slick during rain or humid weather, ensuring complete safety for your family and guests."
    },
    {
        question: "How frequently should a paver patio be cleaned, re-sanded, and sealed?",
        answer: "For residential properties in Northeast Wisconsin, a professional cleaning and re-sanding rotation is recommended every 2 to 3 years to prevent organic growth and maintain joint integrity. Premium protective sealing typically lasts between 3 to 5 years, depending on sunlight exposure, traffic volume, and winter salt exposure. Properties surrounded by heavy tree cover or located in low-lying, damp areas may require more frequent cleanings to keep algae and moss from taking over the joints."
    }
];

export default function PaverPatioRestorationPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Paver Patio Restoration Services",
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
            "lowPrice": "350",
            "highPrice": "3000",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "350.00",
                "maxPrice": "3000.00"
            }
        },
        "description": "Professional brick paver cleaning, polymeric re-sanding, leveling, and sealing services."
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
                                "name": "Paver Patio Restoration",
                                "item": "https://valleyexteriorpros.com/services/paver-patio-restorations"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Paver Patio Restoration</span>
                    </>
                }
                description="Restore the beauty and structural integrity of your brick pavers. Deep cleaning, professional polymeric re-sanding, and premium sealing."
                bgImage="/images/portfolio/concrete-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional brick paver cleaning, polymeric sanding, and sealing services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            A brick paver patio, driveway, or walkway is a premium investment that adds significant structural value and aesthetic beauty to your property. However, due to Northeast Wisconsin's harsh freeze-thaw cycles, high seasonal humidity, and heavy rains, unmaintained pavers quickly degrade. Moss, weeds, and black mold take root in the joints, while the structural joint sand washes away, leaving the pavers loose, wobbly, and prone to sinking.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Standard pressure washing is not enough to resolve these issues. In fact, using high pressure incorrectly can wash away the underlying bedding sand, causing the pavers to sink further, or pit the brick surfaces. Our restoration process involves deep chemical sanitization, complete extraction of old, contaminated sand, precise installation of high-quality polymeric joint sand, and application of commercial-grade sealers to protect against water, stains, and weed growth.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Polymeric Sanding & Sealing</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            The secret to a durable paver installation is joint stabilization. Polymeric sand contains dry organic polymers that, when swept into the joints and hydrated, bind the sand particles together to create a flexible, rubber-like seal. This seal allows the pavers to expand and contract during temperature swings without cracking, while blocking water from washing away the sub-grade.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Following re-sanding, applying a high-performance sealer is essential. The sealer penetrates the porous clay or concrete brick, forming a protective barrier against oil drops, food spills, and UV rays. It also binds the polymeric sand joints even further, preventing erosion. We offer wet-look, satin, and natural-finish sealers containing slip-resistant polymer grit to ensure maximum safety and durability.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Weed and Moss Prevention Guarantee</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                We don't just blast away surface weeds; we eradicate them at the root. We treat all joints with biodegradable algaecides and herbicides, completely sterilizing the soil bed. We then wash away the organic debris, dry the joints, and install premium polymeric sand compacted to the perfect depth. This complete joint seal eliminates the space weed seeds need to germinate, ensuring a clean patio for years.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 4-Step Paver Restoration Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Deep Clean & Sterilize</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">We treat the surface with algaecides and use rotary surface cleaners to extract old sand, weeds, moss, and dirt.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Dry & Level</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">We let the pavers dry completely and perform minor leveling adjustments to fix wobbly or sinking bricks.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Polymeric Sanding</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">We sweep premium polymeric sand into the joints, compact it with plates, and hydrate it to activate the polymers.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">04</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Sealer Protection</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">We spray commercial-grade sealer (matte, satin, or gloss) with anti-slip grit to lock in the sand and block stains.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent, flat-rate pricing based on the square footage and state of your paver installation. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Basic Clean & Re-Sand</td>
                                        <td className="p-4">Up to 500 sq ft</td>
                                        <td className="p-4 font-semibold">$350 - $600 </td>
                                        <td className="p-4">Joint extraction, algaecide sanitization, premium polymeric sand, cleanup</td>
                                        <td className="p-4">1 workday</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Patio Restoration</td>
                                        <td className="p-4 font-semibold">500 - 1,000 sq ft</td>
                                        <td className="p-4 font-semibold">$750 - $1,500 </td>
                                        <td className="p-4">Complete deep wash, weed sterilize, polymeric re-sanding, matte sealer spray</td>
                                        <td className="p-4">1.5 - 2 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Premium Restoration & Seal</td>
                                        <td className="p-4 font-semibold">1,000 - 1,500 sq ft</td>
                                        <td className="p-4 font-semibold">$1,500 - $3,000 </td>
                                        <td className="p-4">Sinking paver leveling, steam clean, re-sanding, two-coat gloss sealer, grip grit</td>
                                        <td className="p-4">2 - 3 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Plaza Restoration</td>
                                        <td className="p-4 font-semibold">1,500+ sq ft</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Heavy grease wash, deep joint extraction, bulk commercial polymeric sand, natural sealer</td>
                                        <td className="p-4">Flexible phase scheduling</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: GEOGRAPHY */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Serving properties across the Fox Valley</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Valley Property Services serves residential and commercial properties throughout Appleton, Green Bay, De Pere, Neenah, and Oshkosh. We are experts in dealing with local soil types, clay compaction, and extreme winter freeze-thaw cycles. Our crews carry specialized compaction plates, commercial drying blowers, and warm-water rotary wash systems to ensure a perfect finish.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We are fully licensed and carry a $2M liability policy, providing complete safety and peace of mind on every single job site.
                        </p>
                    </section>

                    {/* SECTION 6: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our brick paver restoration and sealing services.</p>
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
