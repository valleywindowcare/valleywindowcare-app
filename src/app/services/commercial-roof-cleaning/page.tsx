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
    title: "Commercial Roof Cleaning | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial roof cleaning company. ARMA-approved low-pressure soft washing for metal, TPO, EPDM, and asphalt shingle roofs.",
};

const faqs = [
    {
        question: "Why is high-pressure washing dangerous for commercial roofs?",
        answer: "Standard high-pressure washing can cause permanent, severe structural damage to almost all commercial roofing materials. On asphalt shingles, high pressure strips away the protective mineral granules, instantly aging the roof by years and voiding the manufacturer warranty. On TPO and EPDM membrane roofs, high pressure can tear the single-ply membrane, destroy the heat-welded seams, or strip away the reflective coatings. On metal roofs, excessive pressure can force water underneath the seams and lap joints, leading to interior rust and leaks. We strictly follow Asphalt Roofing Manufacturers Association (ARMA) guidelines by using a low-pressure soft wash method that applies specialized detergents to kill organic growth safely, followed by a gentle rinse that protects the structural integrity of your roof."
    },
    {
        question: "How does the soft wash process clean commercial roofs without damage?",
        answer: "Our soft washing system relies on chemistry rather than mechanical force. We apply a customized, low-pressure detergent containing biodegradable algaecides and surfactants. This solution penetrates the porous roofing materials to kill Gloeocapsa magma (black roof algae), moss, mold, and lichen at the root. Once the organic growth is neutralized, it releases its grip on the roofing substrate, allowing it to be safely rinsed away using high-flow, low-pressure water streams (similar to a garden hose). This process completely sanitizes the roof surface, removing dark stains and organic debris without stripping protective coatings or voiding manufacturer warranties."
    },
    {
        question: "Does cleaning my commercial roof prevent insurance policy cancellation?",
        answer: "Yes. In recent years, commercial property insurance providers have become extremely strict regarding roof maintenance. Insurance underwriters regularly use aerial drone photography to inspect properties. If they detect heavy moss, mold, or lichen growth on your roof, they will issue a mandatory remediation notice, threatening to cancel your policy if the roof is not cleaned. This is because moss traps moisture against the roof surface, causing rot, seam failures, and premature roof degradation. Our professional soft wash cleaning completely eradicates this organic growth and restores your roof's clean appearance, providing the documentation you need to keep your insurance coverage intact."
    },
    {
        question: "What safety protocols do your crews follow when working on commercial roofs?",
        answer: "Safety is our highest liability priority. Commercial roofs are high-liability environments with fall risks. All of our technicians are fully trained in OSHA safety standards and wear specialized slip-resistant footwear designed for wet pitches. We utilize professional roof-anchoring gear, safety harnesses, and warning lines. We also use boom lifts and scissor lifts when necessary to access high-profile sections safely. Our company is fully licensed and carries a $2,000,000 general liability policy and complete workers' compensation insurance, protecting your business from any liability or accident risks."
    },
    {
        question: "Can you clean commercial flat TPO, EPDM, and metal roofs?",
        answer: "Yes, we are highly experienced in cleaning flat and low-slope TPO, EPDM, and metal roofing systems. Flat roofs are susceptible to standing water, which breeds severe black algae and mold biofilms that trap heat and degrade the roofing membrane. We use specialized non-corrosive surfactants designed specifically for commercial membranes. These detergents emulsify dirt and soot, dissolve organic growth, and wash away easily without corroding metal joints or damaging heat-welded seams, restoring your roof's solar reflectivity."
    },
    {
        question: "Does cleaning a commercial roof improve building energy efficiency?",
        answer: "Yes, it does. White reflective roofs, such as TPO and coated metal systems, are designed to reflect solar heat, keeping your building's interior cooler and reducing air conditioning energy costs. However, as dust, dirt, and black algae build up on the roof, they darken the surface. This dark organic layer absorbs UV rays and traps heat, raising your building's cooling load. By soft washing away the dark algae and dirt, we restore your roof's original reflectivity, allowing it to reflect solar heat and lowering your seasonal energy bills."
    },
    {
        question: "How frequently should a commercial roof be professionally cleaned?",
        answer: "For most commercial and industrial properties in Northeast Wisconsin, a professional roof inspection and cleaning is recommended every 3 to 5 years. However, properties surrounded by heavy tree cover, located near industrial facilities that emit soot, or in low-lying, damp areas may require cleaning every 2 years to prevent destructive moss and lichen from taking over the seams and joints."
    }
];

export default function CommercialRoofCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Roof Cleaning Services",
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
            "lowPrice": "1200",
            "highPrice": "5500",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "1200.00",
                "maxPrice": "5500.00"
            }
        },
        "description": "ARMA-approved commercial roof cleaning and low-pressure soft washing for metal, TPO, EPDM, and shingle roofs."
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
                                "name": "Commercial Roof Cleaning",
                                "item": "https://valleyexteriorpros.com/services/commercial-roof-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Commercial Roof Cleaning</span>
                    </>
                }
                description="Eradicate destructive moss, algae, and mold. ARMA-approved low-pressure soft washing for TPO, EPDM, metal, and shingle commercial roofs."
                bgImage="/images/portfolio/commercial-roof-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional commercial roof cleaning and soft washing services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            A commercial roof is a massive capital asset. Replacing a commercial roofing system represents a significant expense for any property owner or business. However, roofs are subjected to harsh weather conditions, leading to the accumulation of dust, dirt, soot, and destructive organic growth like moss, mold, lichen, and black cyanobacteria.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Using high pressure to clean commercial roofs is a severe mistake. Pressure wands can rip membranes, split seams, strip protective coatings, and inject moisture into structural components, leading to interior rot. We strictly follow Asphalt Roofing Manufacturers Association (ARMA) guidelines by utilizing low-pressure soft washing. We apply biodegradable detergents at low pressure to kill organic growth safely, followed by a gentle rinse that protects the structural integrity of your roof.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Importance of Solar Reflectivity & Membrane Care</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Modern flat commercial roofs, such as TPO and EPDM membrane systems, rely on highly reflective coatings to bounce away solar heat. This reflection lowers the building's internal cooling loads, significantly reducing HVAC energy usage. As black algae and soot cover the roof surface, they darken the membrane, causing it to absorb solar heat and raise interior temperatures.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Moss and lichen present an even greater structural threat. These organisms grow root-like structures that anchor into the roofing seams and mineral surfaces. During winter freeze-thaw cycles, moisture trapped inside these organic structures expands, causing seam separations and water intrusion. Our soft wash process chemically neutralizes these organisms, killing them at the root so they release their grip without tearing the membrane.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict OSHA safety and plant protection guarantee</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Commercial roof environments demand high-liability safety management. We operate under strict OSHA compliance, utilizing safety lines, harnesses, and perimeter warning systems. We also protect your surrounding landscaping. We pre-hydrate all surrounding lawns and gardens to create a protective moisture barrier, and we rinse the foliage continuously during cleaning to ensure zero run-off damage.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Commercial Roof Washing Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">OSHA Prep & Hydration</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We set up roof safety anchors and lines, pre-hydrate surrounding landscaping, and shield building intakes.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Soft Wash Application</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply custom algaecide surfactants at low pressure to chemically kill moss, lichen, and algae at the root.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Low-Pressure Flush</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We gently rinse away the neutralized organic debris and dirt using high-flow, low-pressure streams.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on roof square footage, material type, and severity of moss growth. Below is a baseline overview of our commercial roof cleaning packages.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Roof Area</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Small Commercial Flat / Pitch</td>
                                        <td className="p-4">Up to 5,000 sq ft</td>
                                        <td className="p-4 font-semibold">$1,200 - $2,500</td>
                                        <td className="p-4">Safety setup, soft wash chemical treatment, low-pressure rinse, ground-level plant protection</td>
                                        <td className="p-4">1 workday</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Mid-Sized Facility Roof</td>
                                        <td className="p-4 font-semibold">5,000 - 15,000 sq ft</td>
                                        <td className="p-4 font-semibold">$2,500 - $5,500</td>
                                        <td className="p-4">Full safety lines, heavy moss chemical treatment, gutter flush, reflective membrane cleaning</td>
                                        <td className="p-4">2 - 3 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Industrial / Warehouse</td>
                                        <td className="p-4 font-semibold">15,000+ sq ft</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Multi-phase scheduling, boom lift access, full gutter cleaning, complete membrane restoration</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial roof cleaning services.</p>
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
