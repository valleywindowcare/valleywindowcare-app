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
    title: "Parking Lot & Garage Cleaning | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading commercial parking lot and garage pressure washing company. Hot-water concrete cleaning and oil stain extraction.",
};

const faqs = [
    {
        question: "Do you offer overnight or off-hours scheduling for parking structures?",
        answer: "Yes, we routinely perform parking lot, deck, and garage cleaning during overnight or early morning hours. We recognize that washing during regular business hours creates significant traffic disruption, parking lot blockages, and potential slip hazards for your customers and staff. Our crews are equipped with low-noise commercial trailer rigs and high-output lighting systems to execute deep concrete pressure washing and sweep operations between 10:00 PM and 6:00 AM. We ensure all lanes are completely clean, dry, and safe before your doors open or parkers arrive, delivering a seamless restoration that keeps your daily traffic running smoothly."
    },
    {
        question: "Why is hot-water steam washing essential for commercial parking garages?",
        answer: "Commercial parking decks and garages collect heavy engine grease, leaked vehicle oils, black tire marks, and deeply embedded carbon dust that cold-water pressure washers cannot lift. Cold water only smears grease across the surface, creating highly slick slip hazards. We deploy heavy-duty trailer rigs that heat water to 200°F+ at high flow rates. This high-temperature steam emulsifies tough oils, dissolves grease, and melts tire rubber on contact, sanitizing the concrete surface and restoring its original light color without relying on highly corrosive chemicals."
    },
    {
        question: "How do you handle severe oil stains and grease accumulations on concrete?",
        answer: "Vehicle oil stains are highly stubborn and unsightly on commercial concrete. Standard pressure washing wands can etch circular scars into the concrete if held too close. We utilize specialized rotary surface cleaners combined with 200°F+ hot water and industrial-grade degreasers. The degreaser breaks down the petroleum hydrocarbons, releasing their grip on the concrete pores, while the rotating spray bar flushes the residue away cleanly. We follow this up with target chemical treatments to eliminate any dark organic shadows left behind by old oil spots."
    },
    {
        question: "How do you handle EPA compliance and water runoff on open parking structures?",
        answer: "We operate in strict compliance with Wisconsin Department of Natural Resources (WDNR) and EPA Clean Water Act guidelines. It is illegal to discharge pressure washing wastewater containing grease, oil, or chemical soaps into municipal storm drains. We block nearby storm sewers with specialized containment berms, vacuum reclaim the wash water from the concrete using commercial surface cleaners, filter out solid debris and hydrocarbons, and discharge the grey water into municipal sanitary sewers, shielding your business from heavy regulatory fines."
    },
    {
        question: "Does cleaning my parking garage help protect the underlying concrete structure?",
        answer: "Absolutely. Parking structures are subject to heavy vehicle traffic, road salt tracking, and moisture intrusion. If road salt dust and moisture accumulate on the concrete surface, they seep into the concrete pores and corrode the underlying steel rebar. As the rebar rusts, it expands, causing the surrounding concrete to crack and spall (a process known as concrete cancer). Regular pressure washing flushes away corrosive winter salts, exhaust soot, and moisture-retaining biofilms, extending the lifespan of your parking structure and reducing expensive structural concrete repairs."
    },
    {
        question: "Can your cleaning process remove old gum, paint spills, and organic mold?",
        answer: "Yes, our hot-water wash systems are highly effective at removing chewing gum, paint spills, organic mold, and weed growth from parking garages. The high-temperature steam melts the chewing gum binder and breaks down the paint overspray, allowing them to be flushed away cleanly. We also apply biodegradable algaecides to kill mold, mildew, and weeds growing inside concrete expansion joints, sanitizing the area and keeping it clean for months."
    },
    {
        question: "How frequently should a commercial parking lot or garage be washed?",
        answer: "For high-traffic commercial parking garages, retail plazas, and office complexes in Appleton and Green Bay, we recommend scheduling a professional sweep and wash twice a year—ideally in the spring to remove corrosive winter road salt and sand, and in the fall to clean off summer soot, grease, and leaf debris. Low-traffic garages or private office decks typically only require a thorough cleaning once a year in the spring."
    }
];

export default function ParkingLotGarageCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Parking Lot & Garage Cleaning Services",
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
            "lowPrice": "450",
            "highPrice": "3500",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "450.00",
                "maxPrice": "3500.00"
            }
        },
        "description": "EPA-compliant hot-water pressure washing and sweeping for parking lots, parking garages, and multi-level parking decks."
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
                                "name": "Parking Lot & Garage Cleaning",
                                "item": "https://valleyexteriorpros.com/services/parking-lot-and-garage-cleaning"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Parking Lot & Garage Cleaning</span>
                    </>
                }
                description="Eradicate vehicle oil leaks, tire marks, and winter road salt buildup. EPA-compliant hot-water concrete pressure washing for parking garages and lots."
                bgImage="/images/portfolio/commercial-pressure-washing.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional commercial parking lot sweeping and garage pressure washing in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            A clean parking lot or garage is vital to your property's professional appearance and the safety of your visitors. As the first point of contact for clients, tenants, and customers, unmaintained parking surfaces can build up heavy engine oils, grease deposits, tire tracks, and destructive winter road salt. This grime looks unsightly and creates slippery hazards that invite major slip-and-fall liability claims.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Washing large parking decks and open concrete structures requires specialized commercial equipment. Cold-water wands cannot dissolve petroleum grease or lift deeply set carbon dust, and using excessive pressure can permanently scar concrete. Our commercial crews utilize heavy-duty trailer rigs that heat water to 200°F+ at high flow rates. Combined with rotary surface cleaners and eco-friendly surfactants, we clean parking decks evenly, safely, and legally under WDNR water recovery guidelines.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Technology of Parking Deck Grease & Oil Extraction</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Commercial parking decks are subject to vehicle oil leaks, road salt dust, and exhaust soot. Standard soap does not break down these petroleum hydrocarbons. We apply commercial-grade degreasers that emulsify the grease molecules, pulling them out of the porous concrete matrix. We then sweep the area with 200°F+ steam using rotary surface heads, melting gum binders and lifting dirt cleanly without pitting the concrete face.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            For multi-level parking garages, we utilize specialized boom lifts and safety lines to wash wall columns, ramps, and overhead piping. We also apply a post-wash rust inhibitor to prevent corrosive road salt from damaging reinforcing steel inside the concrete deck slabs.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict EPA Wastewater Reclamation Protocol</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                It is illegal to allow pressure washing runoff containing petroleum to flow into municipal storm drains. We seal nearby storm sewers with specialized containment berms, vacuum reclaim the wash water from the concrete using commercial surface cleaners, filter out solid debris and hydrocarbons, and discharge the grey water into municipal sanitary sewers. This process protects local Wisconsin waterways and shields your business from heavy regulatory fines.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Step Garage Cleaning Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Safety Zoning & Drain Seal</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We set up warning cones, block vehicle lanes, and seal all storm drains in the wash area to capture runoff water.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Hot-Water Steam Clean</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We wash concrete using 200°F+ hot-water rotary surface cleaners. The high temperature dissolves grease, oil, and tire marks.</p>
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
                            We provide transparent pricing based on parking lot square footage and surface dirt levels. Below is a baseline overview of our packages.
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
                                        <td className="p-4 font-bold text-navy">Small Retail Parking Lot</td>
                                        <td className="p-4">Up to 10,000 sq ft concrete/asphalt</td>
                                        <td className="p-4 font-semibold">$450 - $750</td>
                                        <td className="p-4">Litter sweep, hot steam oil spot treatment, parking bay wash, off-hours execution</td>
                                        <td className="p-4">2 - 3 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Multi-Level Parking Deck</td>
                                        <td className="p-4 font-semibold">10,000 - 50,000 sq ft</td>
                                        <td className="p-4 font-semibold">$1,200 - $3,500</td>
                                        <td className="p-4">Full concrete wash, grease extraction, wall wash, drain flush, EPA wastewater recovery</td>
                                        <td className="p-4">1 - 2 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Parking Garage</td>
                                        <td className="p-4 font-semibold">50,000+ sq ft / Plaza</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Multi-phase scheduling, overhead pipe dust wash, wall columns wash, complete oil restoration</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our parking lot and garage cleaning services.</p>
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
