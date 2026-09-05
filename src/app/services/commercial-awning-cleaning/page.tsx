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
    title: "Commercial Awning Cleaning | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial awning cleaning company. Specialized low-pressure soft washing and UV sealants for fabric and vinyl awnings.",
};

const faqs = [
    {
        question: "Why is high-pressure washing dangerous for commercial awnings?",
        answer: "Commercial awnings and canopies are typically constructed from delicate materials such as woven acrylic fabrics (like Sunbrella) or heavy-gauge vinyl. Standard high-pressure power washing is highly destructive to these substrates. High-pressure water wands can easily rip seams, tear through fabric weave, strip away protective water-repellent coatings, and crack vinyl paneling. Even worse, high pressure can force water behind the awning frame joints, leading to frame corrosion or structural rot. We utilize specialized soft wash systems that apply biodegradable cleaners at extremely low pressure (under 100 PSI). This system kills organic mold and lifts dirt safely without any risk of structural damage or coating loss."
    },
    {
        question: "What is the difference between cleaning fabric and vinyl awnings?",
        answer: "Fabric and vinyl awnings require completely distinct cleaning chemistries and techniques. Fabric awnings are porous, allowing mold, mildew, and algae to grow deep inside the fibers. We apply algaecide sanitizers that penetrate the weave, killing organic growth at the root. We follow this with a low-pressure rinse and a fabric protectant sealer. Vinyl awnings are non-porous but collect heavy soot, grease, and bird droppings. We use specialized surfactants that break the static bond holding soot to the vinyl, followed by a vinyl sealant that restores gloss and provides UV resistance, preventing cracking and yellowing."
    },
    {
        question: "Do you apply fabric waterproofing sealants and UV protectants?",
        answer: "Yes, we offer professional fabric waterproofing sealants and UV protectants as a key addition to our cleaning services. Over time, sunlight, rain, and snow strip away the original factory water-repellent coating on fabric awnings, causing the fabric to absorb water, which leads to rapid mold growth and rotting. After a deep clean and complete drying, we spray a premium, commercial-grade fluoropolymer fabric protectant. This coating restores water repellency, prevents moisture absorption, and provides UV block filters, extending the lifespan of your awning and keeping it cleaner for longer."
    },
    {
        question: "Can you remove tough exhaust soot and grease from restaurant awnings?",
        answer: "Yes, we are highly experienced in removing tough soot, grease, and carbon buildup from restaurant, retail, and hotel awnings. Awnings located near roads, drive-thrus, or kitchen vents collect airborne greases and exhaust soot that standard soap cannot clean. We apply specialized non-butyl degreasers designed specifically for commercial fabrics and vinyls. These detergents emulsify grease, lift exhaust soot, and wash away easily under low pressure, restoring your awning's vibrant colors without damaging the fabric fibers."
    },
    {
        question: "What safety protocols do your crews follow when working on high awnings?",
        answer: "Safety is our highest priority. Awning cleaning requires working at heights over walkways and roads, presenting fall hazards and public safety risks. All of our technicians are fully trained in OSHA safety standards and wear safety harnesses. We use specialized boom lifts and carbon-fiber water-fed poles to clean high awnings safely. We also set up caution tape, warning signs, and block public walkways to ensure complete safety for your customers and employees during the clean."
    },
    {
        question: "Are your cleaning detergents safe for plants, animals, and customers?",
        answer: "Yes, our cleaning detergents are highly diluted, biodegradable, and fully safe for plants and animals when applied by our technicians. We utilize a strict plant protection protocol to safeguard all surrounding vegetation. Before applying any soaps, we saturate surrounding lawns, shrubs, and gardens with fresh water to create a moisture barrier. We continuously mist the foliage and perform a thorough post-rinse of all plants. Our cleaning chemicals break down naturally into simple salts, ensuring zero environmental damage."
    },
    {
        question: "How frequently should commercial storefront awnings be professionally cleaned?",
        answer: "For most storefront awnings in Appleton and Green Bay, we recommend a professional cleaning and sealing once or twice a year—ideally in the spring to remove winter salt dust and soot, and in the fall to clean off summer dust, bird droppings, and organic mold. Awnings located near high-volume traffic lanes or restaurants may require quarterly cleanings to prevent heavy grease stains from permanently discoloring the fabric."
    }
];

export default function CommercialAwningCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Awning Cleaning Services",
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
            "highPrice": "750",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "250.00",
                "maxPrice": "750.00"
            }
        },
        "description": "Safe commercial awning soft washing, UV protection, and fabric waterproofing services."
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
                                "name": "Commercial Awning Cleaning",
                                "item": "https://valleyexteriorpros.com/services/commercial-awning-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Commercial Awning Cleaning</span>
                    </>
                }
                description="Restore canopy fabrics and vinyls. Specialized low-pressure soft washing, mold removal, and UV waterproofing sealants."
                bgImage="/images/portfolio/commercial-awning-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional commercial awning cleaning and sealing in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Commercial awnings are a prominent branding tool, welcoming customers to your storefront. However, exposure to weather conditions leads to the rapid build-up of dark atmospheric soot, road salts, bird droppings, mold, and green algae. If left unmaintained, this organic biofilm decomposes awning fabrics and fades vinyl panels, causing permanent damage.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Using high pressure to clean awnings is a major mistake. High pressure will tear seams, split fabric weave, and crack vinyl. We utilize specialized soft wash systems that apply biodegradable cleaners at low pressure (under 100 PSI). This system kills mold and lifts dirt safely without any risk of structural damage or coating loss, preserving your storefront image.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Technology of Fabric & Vinyl Restoration</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Fabric and vinyl awnings require completely distinct cleaning chemistries. Fabric is porous, trapping mold spores inside the weave. We apply algaecide surfactants that penetrate the weave, killing organic growth. We follow this with a low-pressure rinse and a fabric protectant sealer. Vinyl is non-porous but collects heavy soot and grease. We use specialized surfactants that break the static bond holding soot, followed by a vinyl sealant that restores gloss and provides UV resistance.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            After cleaning, we apply professional waterproofing sealants. Over time, UV rays strip the factory water-repellent coating. We spray a premium fluoropolymer protectant that restores water repellency, prevents moisture absorption, and provides UV blocks, extending awning lifespan.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Public Safety and Environmental protocols</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Awning washing is performed over public entryways and walkways. We block off areas, set up safety cones, cover outdoor electronics, and schedule washes during off-hours. We also protect surrounding landscaping by pre-hydrating foliage to ensure zero chemical runoff absorption.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Awning Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Safety Prep & Tape</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We block public walkways, pre-hydrate surrounding vegetation, and tape off door electronics and signs.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Soft Wash Treatment</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply custom algaecide surfactants at low pressure to kill organic growth and break down soot bonds.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Rinse & Protect Sealer</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We rinse the awning clean under low pressure, and apply fluoropolymer waterproofing sealants after drying.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the linear footage and material type of your commercial awning. Below is a baseline overview of our packages.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Awning Length</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Small Entry Canopy</td>
                                        <td className="p-4">Up to 15 linear ft</td>
                                        <td className="p-4 font-semibold">$250 - $375</td>
                                        <td className="p-4">Soft wash detergent, low-pressure rinse, window protection, off-hours execution</td>
                                        <td className="p-4">1.5 - 2 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Standard Storefront Awning</td>
                                        <td className="p-4 font-semibold">15 - 50 linear ft</td>
                                        <td className="p-4 font-semibold">$400 - $750</td>
                                        <td className="p-4">Deep soft wash, mold removal, frame rinse, water-repellent sealer application</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Retail Plaza</td>
                                        <td className="p-4 font-semibold">50+ linear ft / Plural Sites</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Multi-site scheduling, boom lift access, detailed fabric restoration, bulk commercial rates</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial awning cleaning services.</p>
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