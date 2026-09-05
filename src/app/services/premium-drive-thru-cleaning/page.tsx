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
    title: "Premium Drive-Thru Cleaning | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial drive-thru pressure washing company. Hot-water grease removal, chewing gum extraction, and facade cleaning.",
};

const faqs = [
    {
        question: "Do you offer overnight or off-hours scheduling for drive-thru lanes?",
        answer: "Yes, we routinely perform drive-thru lane cleaning during overnight or early morning hours. We recognize that washing during regular business hours creates significant lane blockages, customer service delays, and potential slip hazards for your patrons and staff. Our crews are equipped with low-noise commercial trailer rigs and high-output lighting systems to execute deep concrete pressure washing and facade cleaning between 11:00 PM and 5:00 AM. We ensure all lanes are completely clean, dry, and safe before your breakfast rush begins, delivering a seamless restoration that keeps your daily commerce running smoothly."
    },
    {
        question: "Why is hot-water steam washing essential for commercial drive-thru lanes?",
        answer: "Drive-thru lanes collect heavy engine grease, leaked vehicle oils, spilled sugary beverages, food residues, and deeply embedded carbon dust that cold-water pressure washers cannot lift. Cold water only smears grease across the surface, creating highly slick slip hazards. We deploy heavy-duty trailer rigs that heat water to 200°F+ at high flow rates. This high-temperature steam emulsifies tough oils, dissolves sugary syrups, and melts chewing gum on contact, sanitizing the concrete surface and restoring its original light color without relying on highly corrosive chemicals."
    },
    {
        question: "How do you handle deeply embedded chewing gum stains on drive-thru lanes?",
        answer: "Chewing gum is one of the most stubborn and unsightly problems in drive-thru lanes. Standard pressure washing wands can etch circular scars into the concrete if held too close. We utilize specialized rotary surface cleaners combined with 200°F+ hot water and industrial-grade degreasers. The heat melts the gum's binder molecules, releasing its grip on the concrete pores, while the rotating spray bar flushes the gum away cleanly. We follow this up with target chemical treatments to eliminate any dark organic shadows left behind by old gum spots."
    },
    {
        question: "Is your drive-thru facade washing process safe for delicate signage and ordering screens?",
        answer: "Yes, we use a low-pressure soft washing methodology for all vertical facades, menu boards, intercom speaker columns, and digital ordering screens. High pressure can tear graphics, damage electronic screens, strip paint, or inject water behind EIFS and stucco panels, leading to structural rot. Our soft wash process applies customized, biodegradable detergents to kill organic growth and loosen atmospheric soot. We follow this with a high-flow, low-pressure rinse (less than 300 PSI) that is completely safe for delicate electronic components, vinyl signs, and metal siding."
    },
    {
        question: "Does drive-thru cleaning help protect my business from slip-and-fall liability?",
        answer: "Absolutely. Algae, mildew, spilled food, and grease create an organic biofilm on concrete walkways and drive-thru curbs that becomes highly slippery when wet. If a customer or employee slips on your driveway or walkway, your business faces substantial legal liability. Regular drive-thru pressure washing eliminates this biofilm, restores the concrete's slip-resistant texture, and removes slick grease spills. We sanitize the concrete to kill organic spores, keeping the lanes clean and slip-free for months."
    },
    {
        question: "Are your commercial washing services fully EPA-compliant?",
        answer: "Yes, we operate in strict compliance with Wisconsin Department of Natural Resources (WDNR) and EPA Clean Water Act guidelines. It is illegal to discharge pressure washing wastewater containing grease, soap, or suspended solids into municipal storm drains. We block nearby storm sewers with specialized containment berms, vacuum reclaim the wash water from the concrete using commercial surface cleaners, filter out solid debris and hydrocarbons, and discharge the grey water into municipal sanitary sewers, shielding your business from heavy regulatory fines."
    },
    {
        question: "How frequently should a high-volume drive-thru be professionally cleaned?",
        answer: "For high-volume drive-thru lanes (such as fast-food restaurants, banks, and pharmacies) in Appleton and Green Bay, we recommend scheduling a professional wash every 1 to 2 months. High-volume traffic leads to rapid gum, oil, and grease accumulation that can quickly degrade your business's curb appeal. Lower-volume bank drive-thrus or pharmacy pickup lanes typically only require a thorough cleaning quarterly or bi-annually."
    }
];

export default function PremiumDriveThruCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Premium Drive-Thru Cleaning Services",
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
            "highPrice": "950",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "350.00",
                "maxPrice": "950.00"
            }
        },
        "description": "EPA-compliant commercial drive-thru hot-water pressure washing, chewing gum removal, and facade cleaning."
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
                                "name": "Premium Drive-Thru Cleaning",
                                "item": "https://valleyexteriorpros.com/services/premium-drive-thru-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Premium Drive-Thru Cleaning</span>
                    </>
                }
                description="Restore your restaurant or retail curb appeal and prevent slip-and-fall liability. EPA-compliant hot-water pressure washing and chewing gum extraction."
                bgImage="/images/portfolio/premium-drive-thru-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional commercial drive-thru lane cleaning and hot-water pressure washing in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Drive-thru lanes at fast-food restaurants, Quick Service Restaurants (QSRs), banks, and pharmacies experience high volumes of slow-moving, idling vehicle traffic. This continuous idling leads to heavy accumulations of dripping engine oil, leaking transmission fluids, tire rubber residue, and exhaust soot. Combined with spilled sugary beverages and food grease, drive-thru lanes quickly become dark, sticky, and highly slippery concrete surfaces that pose severe slip risks.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Washing grease-laden drive-thru lanes requires specialized commercial equipment. Standard cold-water pressure washers cannot dissolve oil binders or lift deeply set petroleum stains. Our commercial crews utilize heavy-duty, trailer-mounted pressure washing rigs that heat water to 200°F+ at high flow rates. Combined with industrial-grade degreasers and rotary surface cleaners, we sweep and deep-clean lanes, curbs, and trash receptacles safely and legally under WDNR water recovery guidelines.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Targeted Cleaning for Idling Lanes, Menu Boards, and Ordering Columns</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Drive-thru operations collect distinct pollutants that are different from standard storefront sidewalks. Idling engines drop hot oil and carbon exhaust that bake directly into the concrete pores. We apply specialized alkaline degreasers that chemically react with these petroleum hydrocarbons, emulsifying and drawing the oils to the surface. We then wash the lane concrete using 200°F+ hot steam at high pressure, melting the oil binders and lifting the stains without etching the concrete face.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We also clean the surrounding transaction components. This includes low-pressure soft washing of digital ordering menu boards, order intercom speakers, traffic bollards, and overhead height clearance bars. We utilize gentle surfactants to clean dust and grease off these components, protecting delicate digital screens and electrical wiring from water damage.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict EPA Wastewater Reclamation Protocol</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Drive-thru wastewater carries high petroleum oil, grease, and surfactant loads, making it illegal to discharge into municipal storm sewers. We block nearby storm sewers with specialized containment berms, vacuum reclaim all wash runoff, filter out suspended solids and hydrocarbons, and discharge the grey water safely into municipal sanitary sewers, keeping your business fully compliant.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Step Drive-Thru Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Safety Zoning & Drain Seal</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We set up warning cones, block drive-thru lanes, and seal all storm drains in the wash area to capture runoff water.</p>
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
                            We provide transparent pricing based on drive-thru square footage and surface dirt levels. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Single Lane Drive-Thru</td>
                                        <td className="p-4">Up to 1,500 sq ft concrete</td>
                                        <td className="p-4 font-semibold">$350 - $550</td>
                                        <td className="p-4">Lane sidewalk wash, chewing gum removal, digital screens rinse, off-hours execution</td>
                                        <td className="p-4">1.5 - 2 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Dual Lane Drive-Thru</td>
                                        <td className="p-4 font-semibold">1,500 - 3,000 sq ft</td>
                                        <td className="p-4 font-semibold">$600 - $950</td>
                                        <td className="p-4">Walkway hot steam wash, full gum extraction, menu boards soft wash, entrance window squeegee</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">High-Volume Restaurant</td>
                                        <td className="p-4 font-semibold">3,000+ sq ft</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Scheduled monthly/quarterly maintenance, grease pad washing, bulk commercial rates</td>
                                        <td className="p-4">Multi-phase overnight</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our commercial drive-thru cleaning services.</p>
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
