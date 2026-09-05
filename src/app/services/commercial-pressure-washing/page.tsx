import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Commercial Pressure Washing & Building Washing | Green Bay",
    description: "Northeast Wisconsin's leading commercial pressure washing experts. Fully EPA-compliant, hot-water surface cleaning for buildings, plazas, and dumpster pads.",
};

const faqs = [
    {
        question: "What are the EPA regulations regarding commercial pressure washing wastewater?",
        answer: "The Environmental Protection Agency (EPA) and the Clean Water Act strictly regulate the disposal of commercial pressure washing runoff. It is illegal to discharge wash water containing oil, grease, heavy metals, or chemical cleaning agents directly into municipal storm sewers or surface waters like the Lower Fox River. Storm drains are designed only for rainwater and discharge directly into local waterways without filtration. We operate in strict compliance with these laws by deploying advanced wastewater recovery systems. We seal nearby storm drains, vacuum reclaim the wash water from the concrete, filter out suspended solids and oils, and dispose of the grey water safely in accordance with municipal sanitary sewer guidelines."
    },
    {
        question: "Do you offer off-hours or overnight scheduling to prevent business disruption?",
        answer: "Absolutely. We understand that daytime pressure washing can disrupt customers, interfere with parking, and create safety liabilities for retail plazas, restaurants, and banks. We offer flexible scheduling, including overnight, early morning, and weekend shifts, to complete our work when your business is closed or experiencing low foot traffic. Our crews work efficiently to ensure all walkways are completely clean, dry, and safe before your doors open for business the following morning, providing a seamless service that protects your daily operations."
    },
    {
        question: "Why is hot-water steam washing essential for commercial properties?",
        answer: "Unlike residential cleaning, which primarily targets organic mold and dust, commercial surfaces accumulate heavy petroleum grease, diesel soot, food spills, chewing gum, and hydraulic fluids. Cold-water pressure washers cannot dissolve these heavy oils; they only smear them across the concrete, leaving slippery residues. We utilize heavy-duty, trailer-mounted commercial rigs that heat water to 200°F+ at high flow rates. This high temperature acts like a dishwasher, emulsifying tough oils and grease on contact, liquefying chewing gum, and restoring the concrete surface without relying on harsh chemicals."
    },
    {
        question: "How do you wash large commercial building exteriors safely?",
        answer: "We use a specialized soft washing technique for large commercial facades, including EIFS, metal siding, brick, and stucco. Standard high pressure can damage joints, strip protective coatings, and inject water behind siding panels, leading to mold. We apply custom algaecide surfactants at low pressure to kill organic spores and loosen soot. After a brief dwell time, we rinse the building clean using high-flow, low-pressure streams. For multi-story buildings, we use boom lifts and water-fed carbon extension poles, allowing us to complete the work safely from the ground or a lift."
    },
    {
        question: "What is your dumpster pad cleaning and sanitization protocol?",
        answer: "Dumpster pads are notorious for breeding bacteria, hosting severe grease slip hazards, and causing foul odors. Our dumpster pad protocol begins with applying a commercial-grade, heavy degreaser to emulsify thick grease. We then steam clean the entire concrete enclosure at 200°F+ under high pressure. Once the wastewater is vacuum reclaimed, we apply a specialized commercial sanitizer and deodorizer to eliminate bacteria, mold, and insect attractions, restoring sanitary conditions and compliance."
    },
    {
        question: "Does your company carry appropriate liability and workers' compensation insurance?",
        answer: "Yes, we carry comprehensive commercial insurance coverage tailored for high-liability properties. This includes a $2,000,000 general liability policy, full commercial auto insurance, and complete workers' compensation insurance for all on-site personnel. We can provide certificates of insurance (COIs) with your company or property management group listed as an additional insured prior to starting any project, ensuring complete financial protection and peace of mind."
    },
    {
        question: "What is the typical service radius for your commercial division?",
        answer: "Our commercial division serves properties throughout Northeast Wisconsin, including Appleton, Green Bay, De Pere, Neenah, Menasha, Oshkosh, Manitowoc, and the surrounding Fox Valley region. For large-scale accounts, multi-location portfolios, or industrial washing contracts, our crews regularly travel throughout the state to deliver consistent quality and EPA-compliant results."
    }
];

export default function CommercialPressureWashingPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Pressure Washing Services",
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
            "lowPrice": "350",
            "highPrice": "12000",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "350.00",
                "maxPrice": "12000.00"
            }
        },
        "description": "Professional EPA-compliant commercial pressure washing, building soft washing, and concrete grease cleaning."
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
                                "name": "Commercial Pressure Washing",
                                "item": "https://valleyexteriorpros.com/services/commercial-pressure-washing"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Commercial Pressure Washing</span>
                    </>
                }
                description="Professional EPA-compliant hot-water pressure washing. Fleet trailer rigs for building washing, retail plazas, parking garages, and grease recovery."
                bgImage="/images/portfolio/building-washing-services-1.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional, EPA-compliant commercial pressure washing services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Commercial properties, including retail centers, dining establishments, bank branches, and warehouse facilities, face heavy traffic and rapid dirt accumulation. Sidewalks, dumpster enclosures, loading bays, and entryways collect chewing gum, spilled grease, atmospheric soot, rust, and tire marks. These stains hurt customer perception and present slip hazards.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Washing commercial properties requires specialized heavy-duty equipment. Standard residential pressure washers lack the heat, water flow, and vacuum recovery needed to clean large concrete surfaces safely and legally. Our commercial crews deploy trailer-mounted hot-water systems, water reclamation tools, and eco-friendly surfactants to ensure a clean property that adheres to environmental standards.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Importance of EPA Wastewater Compliance</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            For commercial property managers in Wisconsin, environmental compliance is a critical concern. Under the Clean Water Act, discharging wash water containing petroleum oils, heavy metals, or chemical degreasers into storm sewers is illegal and can lead to heavy municipal fines. Storm drains discharge directly into local waterways like the Lower Fox River without filtration.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We operate in strict compliance with these laws by deploying advanced wastewater recovery systems. We seal nearby storm drains, vacuum reclaim the wash water from the concrete, filter out suspended solids and oils, and dispose of the grey water safely in accordance with municipal sanitary sewer guidelines.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Slip and Fall Liability Mitigation</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Slippery entryways and sidewalks represent a major liability hazard, especially during rainy or humid weather. Spilled food grease, drink residues, and algae growth form a slick organic biofilm. We do not just wash away surface dirt; we treat concrete with specialized algaecides and hot water to eradicate biofilm at the root, restoring natural traction and ensuring safe walkways for your customers and employees.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Commercial Washing Process</h2>
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
                            We provide transparent, flat-rate pricing based on total square footage and surface soil levels. Below is a baseline overview of our commercial pressure washing packages.
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
                                        <td className="p-4 font-bold text-navy">Storefront Sidewalk Clean</td>
                                        <td className="p-4">Up to 1,500 sq ft</td>
                                        <td className="p-4 font-semibold">$350 - $600 </td>
                                        <td className="p-4">Hot-water wash, gum removal, organic sanitization, off-hours scheduling</td>
                                        <td className="p-4">1.5 - 3 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Dumpster Pad Enclosure Clean</td>
                                        <td className="p-4 font-semibold">Standard double-dumpster pad</td>
                                        <td className="p-4 font-semibold">$250 - $450 </td>
                                        <td className="p-4">Heavy grease degreasing, hot steam cleaning, bacterial sanitization, wash water recovery</td>
                                        <td className="p-4">1 - 2 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Multi-Story Building Soft Wash</td>
                                        <td className="p-4 font-semibold">10,000 - 30,000 sq ft siding</td>
                                        <td className="p-4 font-semibold">$1,500 - $3,500 </td>
                                        <td className="p-4">Full building exterior soft wash, window rinse, lift rental, safety zones</td>
                                        <td className="p-4">1 - 2 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Parking Garage / Industrial Wash</td>
                                        <td className="p-4 font-semibold">Large concrete structures</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Massive hot-water wash, tire tracks lift, vacuum water reclamation, multi-phase setup</td>
                                        <td className="p-4">Flexible scheduling</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial pressure washing services.</p>
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
