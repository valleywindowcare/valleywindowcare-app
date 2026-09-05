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
    title: "Post-Construction Exterior Cleanup | Green Bay & Appleton",
    description: "Northeast Wisconsin's leading post-construction exterior cleanup company. Specialized removal of mortar haze, concrete splatter, paint, and drywall dust.",
};

const faqs = [
    {
        question: "How do you remove concrete splatter and mortar haze from brick and glass?",
        answer: "Concrete splatter and mortar haze are highly alkaline cementitious materials that bond chemically to glass and brick surfaces. Scrape-cleaning or standard washing will scratch glass panes and erode brick surfaces. We use specialized, organic-acid-based concrete dissolvers. These products break down the calcium carbonate binders inside the concrete or mortar, converting the hard splatter back into a soft, rinseable paste. We apply these dissolvers at low pressure, allow them to react, and then gently rinse them away using warm water, leaving brick and window frames completely clean without scratching the substrate."
    },
    {
        question: "Is post-construction window cleaning different from standard window cleaning?",
        answer: "Yes, post-construction window cleaning is a highly specialized process. Window glass at construction sites is covered in drywall dust, paint overspray, silicone caulk residue, and stucco splatter. Standard squeegeeing will scratch the glass due to abrasive dust. We apply a multi-stage process. First, we rinse the windows with pure water to remove loose dust. Next, we apply specialized chemical paint-lifters and concrete dissolvers. Finally, we use specialized brass safety scrapers (brass is softer than glass and will not scratch it) and pure-water-fed poles to clean the frames, tracks, and glass, leaving a streak-free, spot-free finish."
    },
    {
        question: "How do you schedule your cleanup around other subcontractors during handoff?",
        answer: "We are accustomed to working closely with General Contractors (GCs) and project managers during the hectic final handoff phases of a construction project. We offer flexible scheduling, including overnight, weekend, and multi-phase cleaning schedules, to work around painters, landscapers, and flooring installers. We can coordinate our phases, such as performing a rough clean early on and returning for a final finish wash right before the client walkthrough, ensuring the building looks pristine when the keys are handed over."
    },
    {
        question: "Are your crews fully equipped with appropriate PPE and OSHA training?",
        answer: "Yes. Post-construction sites are active construction zones that present safety hazards. All of our technicians are fully trained in OSHA safety guidelines and carry complete personal protective equipment (PPE). This includes high-visibility vests, hard hats, steel-toe boots, protective eyewear, and safety harnesses. We are accustomed to participating in daily contractor safety briefings and strictly adhere to all site safety rules. Our company is fully licensed and carries a $2,000,000 general liability policy and complete workers' compensation insurance, ensuring a safe, compliant cleanup."
    },
    {
        question: "Can your cleaning process remove paint overspray and caulking residue?",
        answer: "Yes, we are highly experienced in removing paint overspray, caulking residue, silicone runs, and adhesive stickers from window frames, siding, and walkways. We utilize target chemical solvents designed to dissolve specific adhesive and paint binders without melting vinyl window frames, stripping powder-coated metal panels, or leaving oily residues. We follow this up with detail hand-scrubbing and low-pressure rinses to restore all surfaces to their original, post-factory appearance."
    },
    {
        question: "Will the cleaning chemicals damage newly installed landscaping or grass?",
        answer: "No. We utilize a strict plant protection protocol to ensure newly installed landscaping, sod, and trees remain completely safe. We saturate the surrounding soil with fresh water before applying any cleaning agents, creating a protective moisture barrier so the roots cannot absorb runoff. Throughout the cleanup process, we continuously mist the foliage and use biodegradable cleaning agents that neutralize when diluted, ensuring zero chemical burn risk to your lawns and gardens."
    },
    {
        question: "How frequently should post-construction exterior cleanups be scheduled?",
        answer: "Post-construction cleanup is typically a one-time, multi-phase service performed at the completion of a construction or renovation project. However, for large commercial developments or multi-building residential subdivisions, GCs often schedule us on a recurring basis. This includes a rough clean phase (after framing and masonry are complete) to keep the site manageable, and a final finish clean phase (just prior to tenant occupancy) to ensure the property is move-in ready."
    }
];

export default function PostConstructionCleanupPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Post-Construction Exterior Cleanup Services",
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
            "lowPrice": "450",
            "highPrice": "1800",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "450.00",
                "maxPrice": "1800.00"
            }
        },
        "description": "Professional post-construction exterior cleanup, concrete splatter removal, mortar haze removal, and window cleaning."
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
                                "name": "Post-Construction Cleanup",
                                "item": "https://valleyexteriorpros.com/services/post-construction-cleanup"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Post-Construction Cleanup</span>
                    </>
                }
                description="Professional exterior cleanup for commercial developments and new builds. Specialized concrete splatter removal, mortar haze dissolution, and window detailing."
                bgImage="/images/portfolio/building-washing-services-1.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services provides professional post-construction exterior cleanup services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            Completing a new commercial build or structural renovation is a major accomplishment. However, before the building is handed over to the client or tenant, the exterior is typically covered in drywall dust, paint overspray, mortar haze, concrete splatters, and caulk runs. This construction debris looks unprofessional and can cause permanent damage to window glass and siding if not cleaned immediately.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Cleaning construction debris requires specialized chemical agents and scraping tools. Abrasive cleaning will scratch glass panes and pit brick surfaces. We use specialized, organic-acid-based concrete dissolvers and non-butyl paint-lifters combined with brass scrapers. This allows us to lift cement, paint, and silicone caulk safely without scratching glass or damaging siding, restoring all surfaces to their original, post-factory appearance.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Importance of Concrete Dissolution & Glass Preservation</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Concrete and mortar are highly alkaline cementitious materials that form a chemical bond to glass and masonry. Scraping them away mechanically will scratch glass and pit brick. We apply targeted concrete dissolvers that break down the calcium carbonate binders, turning the hard splatter into a soft paste that rinses away safely.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Window cleaning at active construction sites requires a multi-stage process. Windows are covered in drywall dust, paint overspray, silicone caulk, and stucco splatter. We first flush the windows with pure water to remove dust. We then apply specialized chemical paint-lifters and concrete dissolvers. Finally, we use specialized brass safety scrapers (brass is softer than glass and will not scratch it) to clean the glass, frames, and tracks, leaving a streak-free, spot-free finish.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Our strict OSHA and General Contractor safety protocols</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Active construction zones present safety hazards. All of our technicians are fully trained in OSHA safety guidelines and carry complete personal protective equipment (PPE), including hard hats, vests, steel-toe boots, protective eyewear, and safety harnesses. We are fully insured with a $2,000,000 general liability policy and complete workers' compensation insurance, protecting you from any liability.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Phase Cleanup Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Dust Rinse & Prep</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We rinse the facade and windows with pure water to remove abrasive dust, and protect sensitive hardware.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Splatter Dissolution</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We apply organic concrete dissolvers and paint-lifters to soften cement, mortar haze, and silicone caulking.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Brass Scrape & Finish</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We detail all window panes using brass safety scrapers, clean the frames and tracks, and wash surrounding walkways.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent pricing based on the total building footprint, number of windows, and severity of debris. Below is a baseline overview of our packages.
                        </p>
                        <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white not-prose">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-navy text-white text-xs sm:text-sm uppercase tracking-wider">
                                        <th className="p-4 font-bold border-b border-gray-200">Service Type</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Building Footprint</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Est. Investment</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Key Inclusions</th>
                                        <th className="p-4 font-bold border-b border-gray-200">Time on Site</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700 text-xs sm:text-sm">
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Small Commercial Site</td>
                                        <td className="p-4">Up to 2,000 sq ft building footprint</td>
                                        <td className="p-4 font-semibold">$450 - $850</td>
                                        <td className="p-4">Exterior facade wash, window concrete splatter removal, entry sidewalk cleaning, sticker removal</td>
                                        <td className="p-4">1 workday</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Medium Retail/Office Complex</td>
                                        <td className="p-4 font-semibold">2,000 - 5,000 sq ft</td>
                                        <td className="p-4 font-semibold">$900 - $1,800</td>
                                        <td className="p-4">Full building exterior wash, window scraping detail, mortar haze removal from siding, pathway pressure cleaning</td>
                                        <td className="p-4">1 - 2 workdays</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Industrial / Development</td>
                                        <td className="p-4 font-semibold">5,000+ sq ft / Multi-Build</td>
                                        <td className="p-4 font-semibold">Custom Quote</td>
                                        <td className="p-4">Multi-phase rough and finish cleaning, boom lift operation, parking lot sweeping prep, EPA compliance</td>
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
                            <p className="text-gray-600 text-lg">Direct, technical answers regarding our post-construction exterior cleanup services.</p>
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
