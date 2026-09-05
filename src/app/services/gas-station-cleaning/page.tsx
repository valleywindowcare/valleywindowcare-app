import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Gas Station & Convenience Store Cleaning in Green Bay & Appleton",
    description: "Deep-cleaning and grease removal for fuel canopies, pump islands, and convenience store concrete. Valley Property Services provides EPA-compliant cleaning in Northeast Wisconsin.",
};

const faqs = [
    {
        question: "How do you comply with EPA stormwater regulations during gas station cleanings?",
        answer: "Compliance with local municipal sewer codes and the EPA Clean Water Act is our highest priority. Fuel islands and pump bays carry high levels of petroleum residues, oil leaks, and heavy metals. Allowing washing runoff to enter storm sewers is a direct federal violation. We deploy specialized vacuum-recovery wash systems that isolate and capture 100% of the wastewater at the point of surface cleaning. The collected water is routed through our filtration equipment and discharged into approved sanitary sewer inlets."
    },
    {
        question: "Can your cleaning process remove deeply embedded, black engine oil stains?",
        answer: "Yes, our high-temperature steam washing (200°F+) combined with professional-grade, oil-emulsifying degreasers is highly effective at extracting engine oil and diesel stains. While extremely old, weathered stains that have deeply penetrated the concrete matrix may leave a light shadow, our multi-stage treatment lifts the active hydrocarbons and eliminates the slippery texture, making the surface safe for pedestrians."
    },
    {
        question: "Is gas station cleaning performed during high-traffic business hours?",
        answer: "To ensure customer safety and prevent business interruption, we schedule our gas station and drive-thru cleanings during overnight off-hours (typically between 10:00 PM and 6:00 AM). Our technicians block off pump lanes in small phases, allowing your station to remain partially open and continue fuel sales while we clean."
    },
    {
        question: "What is your cleaning protocol for overhead fuel canopies?",
        answer: "Overhead canopies collect soot, exhaust fumes, mold, and insect debris. We clean them using low-pressure chemical washing (soft washing) combined with specialized extension wands to safely dissolve dirt without damaging metal panels, electrical wiring, or branding decals. We complete the wash with a low-pressure rinse to prevent water intrusion into canopy lighting systems."
    },
    {
        question: "How do you clean pump islands and payment terminals safely?",
        answer: "We use a precise, low-moisture technique around sensitive electronic pump housings, card readers, and payment terminals. We hand-wipe delicate screens and apply targeted, low-pressure steam to clean the surrounding stainless steel, metal guards, and concrete bases, ensuring zero moisture intrusion into pump electronics."
    },
    {
        question: "How does regular professional cleaning affect business liability?",
        answer: "Regular cleaning is highly effective at mitigating slip-and-fall liability. Oil spills, grease, and soda residues create slick surfaces that present major hazards, especially in wet weather. By routinely removing these contaminants, you maintain a high traction rating on your concrete walkways, protecting your customers and protecting your business against costly slip-and-fall claims."
    },
    {
        question: "What types of chemicals do you use to break down gasoline and oil?",
        answer: "We utilize industrial-grade, biodegradable alkaline surfactants and petroleum emulsifiers. These specialized agents break the chemical bond between oil hydrocarbons and concrete pores, encapsulating the oil so it can be easily extracted by our vacuum system. All of our agents are fully neutralized and collected, leaving behind zero harmful chemical residues."
    }
];

export default function GasStationCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Gas Station & Convenience Store Cleaning",
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
            "highPrice": "2200",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "350.00",
                "maxPrice": "2200.00"
            }
        },
        "description": "Professional EPA-compliant gas station canopy, pump island, and concrete grease cleaning."
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
                                "name": "Gas Station Cleaning",
                                "item": "https://valleyexteriorpros.com/services/gas-station-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Gas Station & C-Store Cleaning</span>
                    </>
                }
                description="Professional grease extraction, oil stain neutralization, and fuel canopy cleaning. Fully EPA-compliant wastewater recovery."
                bgImage="/images/portfolio/concrete-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional, EPA-compliant gas station and convenience store cleaning services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            For gas stations and convenience stores, clean storefronts and pristine fuel lanes are essential for attracting customers and maintaining a professional image. High-volume traffic leads to heavy accumulation of motor oil, diesel spills, grease stains, tire marks, soda residue, and discarded chewing gum. Beyond the negative aesthetic impact, grease and oil buildup creates major safety hazards, leaving walkways slick and exposing your business to slip-and-fall liability claims.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Unlike standard pressure washing, gas station cleaning requires highly specialized equipment and strict environmental controls. Because fuel lanes contain concentrated petroleum hydrocarbons, municipal and federal EPA guidelines strictly prohibit letting washwater drain into storm sewers. Our crews deploy advanced high-temperature steam extraction equipment combined with integrated vacuum recovery systems to contain and filter 100% of the washwater, keeping your property clean, safe, and fully compliant.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Heavy Grease Extraction</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Petroleum-based contaminants like motor oil and diesel fuel are highly hydrophobic, meaning they naturally repel water and penetrate deep into concrete pores. Attempting to wash these stains with cold-water pressure washers will only spread the oil sheen, making the surface slicker and expanding the stained area.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            To extract oil and grease effectively, we use specialized industrial degreasers and high-temperature steam. We apply alkaline surfactants that break down the complex organic oil structures into soluble emulsions. Our rigs then heat water to over 200°F (93°C), liquefying the grease and drawing the oil out of the concrete pores. Our vacuum recovery system instantly captures the dirty water, ensuring a clean finish and zero runoff.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">EPA-Compliant Environmental Stewardship</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Allowing washwater containing oil, fuel, and grease residues to run into storm sewers is a direct federal violation of the Clean Water Act, subject to substantial civil penalties. We utilize specialized vacuum surface cleaners that seal against the concrete, reclaiming wastewater at the point of impact. The captured water is filtered and legally discharged into approved sanitary sewers, ensuring your business stays fully compliant with local municipal codes in Appleton, Green Bay, and De Pere.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Gas Station Restoration Protocol</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Degreasing Pre-Treatment</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We sweep the area and apply commercial-grade, biodegradable petroleum emulsifiers to fuel islands, walkways, and dumpster pads to break the oil bond.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">High-Temp Steam Extraction</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We deploy 200°F+ hot-water surface cleaners to liquefy and lift embedded grease, chewing gum, and tire stains from concrete aggregates.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Vacuum Capture & Filtration</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Our integrated vacuum recovery system collects all wastewater at the source, channeling it to our holding tanks for filtration and legal disposal.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent commercial pricing tailored to the size and traffic volume of your gas station. Below is a baseline overview of our packages.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Property/Surface Scale</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Walkway & Entryway Deep Clean</td>
                                        <td className="p-4">Storefront concrete & sidewalks</td>
                                        <td className="p-4 font-semibold">$350 - $550 </td>
                                        <td className="p-4">Soda spill treatment, gum removal, window frame wash, storefront concrete scrub</td>
                                        <td className="p-4">2 - 3 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Fuel Island Bay Cleaning</td>
                                        <td className="p-4 font-semibold">4 - 8 pump lanes</td>
                                        <td className="p-4 font-semibold">$600 - $950 </td>
                                        <td className="p-4">Oil degreasing, hot-water pump bases scrub, gum extraction, vacuum containment</td>
                                        <td className="p-4">3.5 - 5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Full Site Wash & Canopy</td>
                                        <td className="p-4 font-semibold">Fuel bays, walkways & overhead canopy</td>
                                        <td className="p-4 font-semibold">$1,200 - $2,200 </td>
                                        <td className="p-4">Soft wash canopy, deep scrub pump concrete, storefront walkway wash, dumpster pad clean</td>
                                        <td className="p-4">6 - 9 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Multi-Location Maintenance</td>
                                        <td className="p-4 font-semibold">Multiple regional properties</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Scheduled monthly or quarterly rotation packages with locked-in commercial rates</td>
                                        <td className="p-4">Off-hours coordination</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: GEOGRAPHY */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Serving Gas Stations Across the Fox Valley</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Valley Property Services provides commercial cleaning services for convenience stores and fuel stations across Appleton, Green Bay, De Pere, Neenah, and Oshkosh. We design our cleaning workflows to prevent disruptions to your business operations. Our service vehicles are equipped with warm-water burners, oil-containment dikes, and vacuum recovery systems.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We are fully insured, carry $2M general liability policies, and supply comprehensive post-service reports, ensuring complete transparency and compliance for your business operations.
                        </p>
                    </section>

                    {/* SECTION 6: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our gas station and convenience store cleaning operations.</p>
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Commercial Services</h2>
                    <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
