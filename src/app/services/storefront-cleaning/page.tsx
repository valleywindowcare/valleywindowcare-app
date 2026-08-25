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
    title: "Storefront Cleaning & Pressure Washing | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial storefront washing company. Hot-water concrete pressure washing, chewing gum removal, and window cleaning.",
};

const faqs = [
    {
        question: "Do you offer overnight or off-hours scheduling for storefront cleaning?",
        answer: "Yes, we routinely perform storefront washing during overnight or early morning hours. We recognize that washing during regular business hours creates significant foot traffic disruption, parking lot blockages, and potential slip hazards for your customers and staff. Our crews are equipped with low-noise commercial trailer rigs and high-output lighting systems to execute deep concrete pressure washing and facade cleaning between 10:00 PM and 6:00 AM. We ensure all walkways are completely clean, dry, and safe before your doors open for business, delivering a seamless restoration that keeps your daily commerce running smoothly."
    },
    {
        question: "Why is hot-water steam washing essential for commercial storefront concrete?",
        answer: "Commercial entryways and walkways collect heavy grease, spilled beverages, oil drops from vehicles, tire marks, and deeply embedded black grime that cold-water pressure washers cannot lift. Cold water only smears grease across the surface, creating highly slick slip hazards. We deploy heavy-duty trailer rigs that heat water to 200°F+ at high flow rates. This high-temperature steam emulsifies tough oils, dissolves grease, and melts chewing gum on contact, sanitizing the concrete surface and restoring its original light color without relying on highly corrosive chemicals."
    },
    {
        question: "How do you handle deeply embedded chewing gum stains on retail entryways?",
        answer: "Chewing gum is one of the most stubborn and unsightly problems on commercial concrete. Standard pressure washing wands can etch circular scars into the concrete if held too close. We utilize specialized rotary surface cleaners combined with 200°F+ hot water. The heat melts the gum's binder molecules, releasing its grip on the concrete pores, while the rotating spray bar flushes the gum away cleanly. We follow this up with target chemical treatments to eliminate any dark organic shadows left behind by old gum spots, restoring a perfectly uniform finish."
    },
    {
        question: "Is your storefront facade washing process safe for delicate signage and awnings?",
        answer: "Yes, we use a low-pressure soft washing methodology for all vertical facades, windows, signage, and fabric canopy awnings. High pressure can tear fabric, damage lettering, strip paint, or inject water behind EIFS and stucco panels, leading to structural rot. Our soft wash process applies customized, biodegradable detergents to kill organic growth and loosen atmospheric soot. We follow this with a high-flow, low-pressure rinse (less than 300 PSI) that is completely safe for delicate vinyl signs, lighting fixtures, and metal paneling, ensuring zero damage to your building's exterior components."
    },
    {
        question: "Does storefront cleaning help protect my business from slip-and-fall liability?",
        answer: "Absolutely. Algae, mildew, spilled food, and grease create an organic biofilm on concrete walkways that becomes highly slippery when wet. If a customer or employee slips on your walkway, your business faces substantial legal liability. Regular storefront pressure washing eliminates this biofilm, restores the concrete's slip-resistant texture, and removes slick grease spills. We sanitize the concrete to kill organic spores, keeping the entryways clean and slip-free for months, which is key to protecting your customers and reducing insurance liability."
    },
    {
        question: "Are your commercial washing services fully EPA-compliant?",
        answer: "Yes, we operate in strict compliance with Wisconsin Department of Natural Resources (WDNR) and EPA Clean Water Act guidelines. It is illegal to discharge pressure washing wastewater containing grease, soap, or suspended solids into municipal storm drains. We block nearby storm sewers with specialized containment berms, vacuum reclaim the wash water from the concrete using commercial surface cleaners, filter out solid debris, and discharge the grey water into municipal sanitary sewers. This process protects local Wisconsin waterways and shields your business from heavy regulatory fines."
    },
    {
        question: "How frequently should a retail storefront be professionally washed?",
        answer: "For high-traffic retail storefronts, plazas, and restaurant entrances in Appleton and Green Bay, we recommend scheduling a professional wash every 1 to 3 months. High-volume traffic leads to rapid gum and grease accumulation that can quickly degrade your business's curb appeal. Low-traffic office buildings or professional complexes typically only require a thorough cleaning twice a year, ideally in the spring to remove winter salt deposits, and in the fall to clean off dust and organic buildup."
    }
];

export default function StorefrontCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Storefront Cleaning & Pressure Washing Services",
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
            "highPrice": "1800",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "350.00",
                "maxPrice": "1800.00"
            }
        },
        "description": "EPA-compliant commercial storefront washing, chewing gum removal, and entryway concrete cleaning."
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
                                "name": "Storefront Cleaning",
                                "item": "https://valleyexteriorpros.com/services/storefront-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Storefront Cleaning & Washing</span>
                    </>
                }
                description="Restore your retail curb appeal and prevent slip-and-fall liability. EPA-compliant hot-water concrete pressure washing, chewing gum extraction, and facade soft washing."
                bgImage="/images/portfolio/building-washing-services-1.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional commercial storefront pressure washing and facade cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Your building's storefront is the direct handshake with your customers, playing a critical role in customer perception and brand reputation. High-traffic walkways, entry vestibules, and outdoor plazas quickly accumulate chewing gum stains, grease spills, black tire marks, and dark atmospheric dirt. This grime looks unprofessional and creates slippery hazards that invite major slip-and-fall liability claims.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Washing storefront entryways requires specialized commercial equipment. Cold-water wands cannot dissolve petroleum grease or lift deeply set gum, and using excessive pressure can permanently scar concrete. Our commercial crews utilize heavy-duty trailer rigs that heat water to 200°F+ at high flow rates. Combined with rotary surface cleaners and eco-friendly surfactants, we clean entryways evenly, safely, and legally under WDNR water recovery guidelines.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Storefront Grease & Gum Neutralization</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Commercial entries are subject to petroleum leaks, vehicle exhaust soot, and food grease. Standard soap does not break down these oil bonds. We apply commercial-grade degreasers that emulsify the grease molecules, pulling them out of the porous concrete matrix. We then sweep the area with 200°F+ steam using rotary heads, melting gum binders and lifting dirt cleanly without pitting the concrete face.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            For vertical surfaces, EIFS, metal siding, and fabric canopy awnings, we use a low-pressure soft wash system. High pressure can tear canopy fabrics, peel letters, or inject moisture behind building panels. Our soft wash applies biodegradable sanitizers to kill organic growth at the root, followed by a gentle rinse that protects delicate signage.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict EPA Wastewater Reclamation Protocol</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                It is illegal to allow pressure washing runoff to flow into municipal storm drains. We seal nearby storm sewers with specialized containment berms, vacuum reclaim the wash water from the concrete using commercial surface cleaners, filter out solid debris, and discharge the grey water into municipal sanitary sewers. This process protects local Wisconsin waterways and shields your business from heavy regulatory fines.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Step Storefront Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Safety Zoning & Drain Seal</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We set up warning cones, block public walkways, and seal all storm drains in the wash area to capture runoff water.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Hot-Water Steam Clean</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We wash concrete using 200°F+ hot-water rotary surface cleaners. The high temperature dissolves grease, oil, and chewing gum.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Wastewater Reclamation</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We vacuum reclaim the wash water, filter out oil and debris, and discharge it safely into the sanitary sewer system.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on storefront square footage and surface dirt levels. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Small Retail Entry</td>
                                        <td className="p-4">Up to 1,000 sq ft concrete</td>
                                        <td className="p-4 font-semibold">$350 - $500</td>
                                        <td className="p-4">Entry sidewalk wash, chewing gum removal, facade rinse, off-hours execution</td>
                                        <td className="p-4">1.5 - 2 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Mid-Sized Plaza Storefront</td>
                                        <td className="p-4 font-semibold">1,000 - 2,500 sq ft</td>
                                        <td className="p-4 font-semibold">$600 - $950</td>
                                        <td className="p-4">Walkway hot steam wash, full gum extraction, facade soft wash, entrance window squeegee</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Retail Center Facade</td>
                                        <td className="p-4 font-semibold">2,500 - 5,000 sq ft</td>
                                        <td className="p-4 font-semibold">$1,000 - $1,800</td>
                                        <td className="p-4">Full concrete wash, sign facade cleaning, awning treatment, EPA wastewater recovery</td>
                                        <td className="p-4">4 - 6 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Multi-Location Contract</td>
                                        <td className="p-4 font-semibold">5,000+ sq ft / Plural Sites</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Scheduled monthly/quarterly maintenance, grease pad washing, bulk commercial rates</td>
                                        <td className="p-4">Multi-phase overnight</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial storefront cleaning services.</p>
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
