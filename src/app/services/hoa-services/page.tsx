import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "HOA & Multi-Unit Exterior Cleaning Services in Green Bay & Appleton",
    description: "Low-pressure soft washing and exterior property maintenance for condominium complexes, townhomes, and HOA residential communities in Northeast Wisconsin.",
};

const faqs = [
    {
        question: "How do you coordinate exterior cleaning schedules with residents and tenants?",
        answer: "Logistics and resident communication are critical for successful HOA cleaning projects. Once a project is booked, we provide the HOA board or property manager with a digital communication kit, including customized email templates, printable flyer PDFs, and scheduled timeline notices. We typically request residents to close all windows, remove patio furniture, and park vehicles away from target cleaning zones on scheduled workdays. Our team operates in clear, pre-announced phases to minimize disruption."
    },
    {
        question: "What cleaning methods do you use for multi-family complexes to prevent damage?",
        answer: "We strictly utilize low-pressure soft washing for delicate siding materials (vinyl, stucco, Hardie Board) and roof systems. High-pressure washing should never be used on siding as it can blast water behind the panels, causing mold growth, or crack the material itself. Our soft washing system uses specialized, bio-friendly sanitizing solutions applied at low pressure (under 150 PSI) to safely kill algae, moss, and mold at the root, followed by a gentle, high-volume rinse."
    },
    {
        question: "Is Valley Property Services fully licensed and insured for large commercial complexes?",
        answer: "Yes, we carry comprehensive commercial credentials designed for multi-unit and commercial operations. We maintain a $2,000,000 general liability policy, commercial auto insurance, and full worker's compensation coverage. We can supply certificates of insurance (COIs) naming your HOA board or property management firm as an additional insured prior to starting any operations."
    },
    {
        question: "How do you handle water access for large, multi-family projects?",
        answer: "We coordinate with the HOA or property manager to determine the most cost-effective and logistically viable water source. Typically, we hook up to on-site commercial spigots or hydrants (with municipal metering permits). If water access is restricted, our mobile service trucks are equipped with large, on-board water buffer tanks, ensuring that we maintain a constant water supply and can complete our work efficiently."
    },
    {
        question: "Do you offer multi-year service contracts or reserve fund planning discounts?",
        answer: "Yes! Many HOA boards and property managers partner with us to set up multi-year maintenance agreements. This helps you lock in competitive rates, plan your capital reserve allocations, and ensure your community's siding, roofs, and concrete remain clean year after year. We customize these programs based on your community's needs, offering bi-annual or annual service rotations."
    },
    {
        question: "Are your cleaning agents safe for local landscaping, pets, and children?",
        answer: "Yes. Our cleaning solutions are fully biodegradable and are neutralized and rinsed clean during our washing process. Our technicians follow a strict plant protection protocol, saturating all adjacent lawn areas and plants with water before, during, and after application. Once the cleaned surfaces are fully dry (typically within 1-2 hours of completion), the treated areas are completely safe for pets and children."
    },
    {
        question: "How do you handle phase-based billing for large-scale communities?",
        answer: "We offer flexible, structured invoicing aligned with project milestones. For community-wide cleanings that span several weeks, we can divide the billing by completed phases (e.g., billing by street, building group, or neighborhood quadrant). This allows HOA boards to review the work completed in each phase before processing payments, ensuring complete transparency and satisfaction."
    }
];

export default function HoaServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "HOA & Multi-Unit Exterior Cleaning",
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
        "description": "Professional multi-unit soft washing and concrete cleaning for HOAs, condos, and apartments."
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
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">HOA & Multi-Unit Exterior Cleaning</span>
                    </>
                }
                description="Professional low-pressure soft washing for condominium complexes, townhomes, and residential HOA communities."
                bgImage="/images/portfolio/building-wash-copy.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional multi-unit soft washing and HOA community maintenance in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Managing a large multi-family community, condominium association, or HOA requires maintaining a delicate balance between property aesthetics, resident satisfaction, and financial planning. Over time, atmospheric pollution, humidity, and biological growth (such as algae, moss, and black mold) can stain your community's siding, roofs, and concrete walkways, degrading property values and accelerating building deterioration.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Standard high-pressure washing is entirely unsuitable for multi-unit communities. Raw pressure can crack vinyl panels, damage joint seals, and cause extensive water intrusion behind siding, leading to internal rot and mold. Our team utilizes low-pressure soft washing—a process that uses safe, biodegradable cleaning solutions applied at low, gentle pressure to kill mold, algae, and organic contaminants at the source. This ensures a deep, long-lasting clean while protecting your community's physical assets.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Logistics & Resident Coordination for HOA Cleaning</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Executing a multi-unit cleaning project involves complex logistics, including coordinating vehicle movement, scheduling, and resident notifications. Unlike standard residential washing, an HOA project requires thorough planning to ensure operations run smoothly and residents remain informed and cooperative.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide HOA boards and property managers with a comprehensive logistics kit, including custom resident notifications, parking reminders, and detailed timeline schedules. Our crews operate in pre-announced phases, ensuring that residents have ample time to clear patio furniture, close windows, and move vehicles away from target wash zones. We coordinate water logistics, wastewater compliance, and safety parameters, minimizing disruption to your community's daily life.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Maximizing Reserve Fund Efficiency</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Exterior building maintenance is one of the largest capital expenditures for an HOA board. Neglecting biological growth on roofs and siding can lead to premature roof failure and structural rot, depleting capital reserves. Regular soft washing preserves structural longevity, extending siding life by up to 10 years and delaying roof replacements, ensuring your HOA's reserve funds are allocated efficiently.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Multi-Unit Cleaning Protocol</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Phase Planning</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We establish a customized timeline and supply resident notification templates to ensure all vehicles are moved and outdoor spaces are cleared.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Property Protection</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Our technicians seal exterior electrical outlets, tape key locks, and saturate surrounding landscaping to protect the property before cleaning begins.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Low-Pressure Washing</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply our specialized sanitizing solution to dissolve algae and mold at the root, followed by a high-volume, low-pressure rinse to restore the surface.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & HOA Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We offer flat-rate pricing based on your community's size and layout. Below is an overview of our baseline pricing for HOA projects.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Scale of Community</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Duplex / Triplex Complexes</td>
                                        <td className="p-4">2 - 4 units</td>
                                        <td className="p-4 font-semibold">$600 - $1,200 </td>
                                        <td className="p-4">Full siding wash, window sill rinse, plant protection, gutter exterior brush</td>
                                        <td className="p-4">1 workday</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Townhouse Blocks</td>
                                        <td className="p-4 font-semibold">5 - 12 units (single block)</td>
                                        <td className="p-4 font-semibold">$1,500 - $3,500 </td>
                                        <td className="p-4">Soft wash siding, entry concrete rinse, exterior window pane detail</td>
                                        <td className="p-4">2 - 3 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Mid-Size Condo Community</td>
                                        <td className="p-4 font-semibold">15 - 40 units (multiple buildings)</td>
                                        <td className="p-4 font-semibold">$5,000 - $12,000 </td>
                                        <td className="p-4">Full building soft wash, breezeway cleaning, common walkway wash</td>
                                        <td className="p-4">1 - 2 weeks</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large HOA Neighborhood</td>
                                        <td className="p-5 font-semibold">50+ units / single-family blocks</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Comprehensive multi-phase siding, roof, and sidewalk maintenance package</td>
                                        <td className="p-4">Flexible phase scheduling</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: GEOGRAPHY */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Serving the Northeast Wisconsin HOA Market</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Valley Property Services works directly with community managers and HOA boards across Appleton, Green Bay, De Pere, Neenah, and Oshkosh. We are deeply familiar with regional architectural styles and local climate challenges. From dealing with winter road-salt buildup to treating heavy biological growth caused by humid Wisconsin summers, we design our cleaning schedules to meet the unique needs of local properties.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide comprehensive estimates, fully detailed scope-of-work documentation, and post-service reports, ensuring clear communication and absolute transparency for your board and community members.
                        </p>
                    </section>

                    {/* SECTION 6: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our HOA and multi-unit cleaning services.</p>
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
