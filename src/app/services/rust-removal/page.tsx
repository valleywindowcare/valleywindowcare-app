import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Professional Rust Removal Services in Green Bay & Appleton",
    description: "Safely eliminate rust, fertilizer stains, and battery acid burns from concrete, siding, and brick. Valley Property Services provides expert stain neutralization in Northeast Wisconsin.",
};

const faqs = [
    {
        question: "What causes rust stains on residential and commercial siding and concrete?",
        answer: "Rust stains are the physical result of iron oxide formation. On concrete, this is commonly caused by metal lawn furniture, snowplow scrape marks, or high-iron well water from irrigation sprinkler systems. On siding, rust is typically caused by failing metal fasteners, overflowing steel gutters, or chimney flashing leaks. Each type of rust has a unique chemical structure, requiring custom acid-based chelating agents to safely break the metallic bond and lift the stain without damaging the underlying substrate."
    },
    {
        question: "How do you distinguish between standard iron rust and orange battery acid burns?",
        answer: "Standard iron rust is a simple ferric oxide stain that resides on the surface of the concrete. Battery acid burns (typically from golf carts, lawnmowers, or vehicle batteries) are caused by sulfuric acid leaking onto the concrete and reacting with the calcium hydroxide in the cement paste. This creates a deep, permanent chemical burn that penetrates deep into the concrete cream. Standard rust removers will not affect battery acid burns; we must apply specialized, heavy-duty mineral acid neutralizers to lift these deep orange stains."
    },
    {
        question: "Will your rust removal chemicals damage my grass, shrubs, or landscaping?",
        answer: "No, we take extensive preventative measures to ensure your landscaping is completely protected. Before applying any rust-neutralizing chemicals, we saturate the surrounding turf, flowers, and shrubbery with fresh water to create a moisture barrier. During chemical application, we closely monitor runoff and apply alkaline neutralizing agents to restore neutral pH before final rinsing. This completely eliminates any risk of chemical burn to your grass or plants."
    },
    {
        question: "Is rust removal a permanent solution for well-water irrigation stains?",
        answer: "We can completely remove existing well-water rust stains, but the staining will return over time if the high-iron water source continues to spray the surface. To achieve long-term control, we recommend adjusting your irrigation sprinkler heads to avoid spraying sidewalks and siding, installing an inline iron filtration system on your well line, or scheduling bi-annual preventative maintenance rinses with us to keep the staining at bay."
    },
    {
        question: "Can pressure washing alone remove rust stains from concrete?",
        answer: "No. Attempting to remove rust stains with high-pressure water alone is a common mistake that can permanently damage your concrete. Because rust is chemically bonded to the cement paste, blasting it with raw pressure will only etch the surface, leaving permanent swirl marks and exposing aggregate while leaving the orange stain intact. Effective rust removal requires chemical chelating agents to dissolve the iron bond, followed by a low-pressure hot-water rinse."
    },
    {
        question: "What types of surfaces can you safely treat for rust stains?",
        answer: "We can safely treat a wide variety of exterior surfaces, including brushed concrete, exposed aggregate, asphalt, clay brick, natural stone, stucco, vinyl siding, aluminum, and painted wood. Our technicians adjust the chemical concentration, contact time, and rinsing pressure to match the specific structural tolerances of each material, ensuring zero damage."
    },
    {
        question: "How long does the rust removal chemical application take to work?",
        answer: "The reaction time depends on the severity and age of the stain. Light irrigation stains may dissolve within 5 to 10 minutes of chemical application. Deeply embedded battery acid burns or heavy chimney runoff stains can require multiple applications, agitation with specialized detail brushes, and a dwell time of 20 to 45 minutes before they are ready for hot-water extraction."
    }
];

export default function RustRemovalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Rust Removal",
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
        "description": "Professional rust and mineral stain removal for residential and commercial concrete, brick, and siding."
    };

    return (
        <main className="w-full overflow-hidden bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Specialized Rust & Stain Removal</span>
                    </>
                }
                description="Safely eliminate ugly orange rust, fertilizer spots, and battery acid burns. Eco-friendly chemical neutralization for concrete, brick, and siding."
                bgImage="/images/portfolio/concrete-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is the leading provider of professional rust removal and mineral stain restoration services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Rust stains are among the most stubborn and unsightly blemishes that can affect your residential or commercial property. Whether it's an orange streak running down your vinyl siding from a chimney cap, dark spots on your driveway from high-iron fertilizer pellets, or deep chemical burns caused by leaking golf cart batteries, these stains detract significantly from your curb appeal.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Many homeowners and property managers mistakenly believe that high-pressure washing or scrubbing with store-bought bleach will solve the problem. In reality, rust is not a surface layer of dirt; it is a metallic oxidation compound that is chemically bonded to the aggregates of your concrete or siding. Blasting rust with high pressure will only etch your concrete or chip your brick, while bleach can actually oxidize the metal further, setting the stain permanently. Our specialized treatment chemically neutralizes and lifts the metallic bond, safely restoring your surfaces to their original condition.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Chemistry of Rust Stain Neutralization</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            To remove rust safely, we must reverse the chemical oxidation reaction. Ferric iron ($Fe_2O_3$) is insoluble in water, which is why rain and standard pressure washing have no effect on it. Our process involves applying specialized chelating agents and organic acids (such as oxalic and phosphoric acid formulations) that react with the iron molecules.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            This reaction converts the insoluble iron oxide into a soluble double-salt compound that can be gently rinsed away with warm water. Because we rely on chemical neutralization rather than raw mechanical force, we protect the delicate cream layer of your concrete and prevent damage to vinyl siding or clay brick. For complex stains like battery acid burns, we use deep-penetrating acid formulas that break down the sulfuric acid residue and lift the orange burn from deep within the concrete matrix.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict Landscaping and Plant Protection Protocol</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                We utilize highly effective, professional-grade chemicals, which requires strict adherence to safety protocols. Before applying any chemical treatments, we saturate all adjacent grass, flowerbeds, and shrubs with water to prevent the plants from absorbing the treatment. During the process, we constantly monitor the runoff and apply alkaline neutralizing agents to stabilize the pH level of the wastewater before it is extracted and disposed of safely.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Stain Restoration Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Identify & Prep</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We classify the stain (fertilizer, battery acid, iron well water) and thoroughly pre-wet the surrounding concrete and adjacent landscaping to prevent damage.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Chemical Application</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply the specialized neutralizing compound directly to the stain. We allow it to dwell and react, gently agitating with detail brushes for deep burns.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Neutralize & Extract</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We neutralize the chemical mixture to restore a safe pH level, followed by a hot-water extraction and low-pressure rinse, leaving a clean, unstained surface.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent, flat-rate pricing based on the surface area and severity of the staining. Below is a baseline overview of our residential and commercial rust removal packages.
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
                                        <td className="p-4 font-bold text-navy">Residential Siding Treatment</td>
                                        <td className="p-4">Single chimney run or window streak</td>
                                        <td className="p-4 font-semibold">$195 - $295 </td>
                                        <td className="p-4">Siding pre-wet, rust lift application, low-pressure rinse, plant protection</td>
                                        <td className="p-4">1 - 2 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Concrete Driveway Spot Treat</td>
                                        <td className="p-4 font-semibold">Up to 4 battery or fertilizer spots</td>
                                        <td className="p-4 font-semibold">$250 - $395 </td>
                                        <td className="p-4">Spot chemical neutralization, surface agitation, hot-water extraction</td>
                                        <td className="p-4">1.5 - 2.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Full Sidewalk Irrigation Clear</td>
                                        <td className="p-4 font-semibold">Up to 2,000 sq ft of orange staining</td>
                                        <td className="p-4 font-semibold">$495 - $895 </td>
                                        <td className="p-4">Complete irrigation stain removal, run-off neutralization, post-rinse sweep</td>
                                        <td className="p-4">3 - 5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Commercial Building Exterior</td>
                                        <td className="p-4 font-semibold">Multi-story or retail plaza</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Full structural diagnostic, multi-stage acid lift, vacuum waste containment</td>
                                        <td className="p-4">Flexible off-hours</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: GEOGRAPHY */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Serving the Northeast Wisconsin Corridor</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Valley Property Services serves residential and commercial clients across the entire Fox Valley region. We operate daily in industrial corridors, downtown retail locations, and residential neighborhoods across Appleton, Green Bay, De Pere, and Oshkosh. Our service trucks are equipped with dedicated chemical spray units, warm-water burners, and water containment gear.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We are fully licensed, carry $2M commercial liability policies, and follow strict EPA runoff guidelines, giving you complete peace of mind that your property restoration is handled with absolute safety and professionalism.
                        </p>
                    </section>

                    {/* SECTION 6: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our rust and mineral stain removal services.</p>
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
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Cleaning Services</h2>
                    <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
