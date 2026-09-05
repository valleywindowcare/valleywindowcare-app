import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Commercial Chewing Gum Removal in Green Bay & Appleton",
    description: "Eliminate chewing gum stains from commercial walkways, entrances, and drive-thrus. Valley Property Services provides hot-water steam gum removal across Northeast Wisconsin.",
};

const faqs = [
    {
        question: "Why is professional high-temperature washing necessary for chewing gum?",
        answer: "Chewing gum is composed of synthetic rubbers and resins that form an incredibly strong chemical bond with porous masonry surfaces like concrete and brick. Regular cold-water pressure washing is ineffective because it lacks the thermal energy to melt these polymers, which often forces operators to use dangerously high pressure that permanently etches, cracks, or pits the concrete cream layer. We use specialized commercial burners to heat water to over 200°F, turning the gum into a soft liquid that is easily released from the surface without requiring destructive physical pressure."
    },
    {
        question: "Can your gum removal process cause damage to concrete or joint sand?",
        answer: "No, our process is specifically designed to prevent masonry damage. By leveraging thermal energy (200°F+ hot water and steam) rather than raw mechanical force, we safely release the adhesive bond of the gum at low, non-destructive pressures (typically under 1,500 PSI). For paver installations, our technicians use precise angles to ensure that joint sand remains intact, and we offer post-cleaning joint stabilization sand sweeps if required."
    },
    {
        question: "How do you handle EPA Clean Water Act compliance during commercial cleanings?",
        answer: "We take environmental compliance very seriously. The Clean Water Act strictly prohibits the discharge of washwater containing oils, heavy metals, or chemical cleaning residues into the storm sewer system. We utilize specialized surface cleaners equipped with integrated vacuum recovery systems to extract the wastewater at the point of cleaning. The water is then filtered to remove solids and disposed of in compliance with local municipal codes in Appleton, Green Bay, and De Pere."
    },
    {
        question: "Is chewing gum removal performed during business hours?",
        answer: "To minimize disruption to your operations, tenants, and customers, we offer flexible scheduling, including overnight and early morning operations. For high-traffic areas such as retail entrances, bank drive-thrus, and restaurant walkways, we typically perform our services between 9:00 PM and 6:00 AM, ensuring a clean, dry, and safe entrance for your customers when your doors open."
    },
    {
        question: "Do you use harsh chemical solvents to dissolve the gum?",
        answer: "In 95% of cases, no chemical solvents are necessary because our thermal steam system is highly effective at releasing the gum naturally. For extremely aged, fossilized gum stains that have left deep organic staining, we may apply a biodegradable, citrus-based cleaning agent that is fully neutralized and extracted along with our washwater, ensuring zero risk to local landscaping, pets, or pedestrians."
    },
    {
        question: "How frequently should a commercial property have gum removal performed?",
        answer: "The ideal frequency depends entirely on foot traffic and property type. High-volume retail storefronts, convenience stores, and fast-food drive-thrus typically require quarterly or bi-monthly services to maintain a pristine, professional appearance. Mid-traffic office buildings, school entrances, and municipal walkways generally schedule services bi-annually (typically in the spring and fall) to prevent long-term concrete staining."
    },
    {
        question: "What is the difference between gum removal and standard concrete pressure washing?",
        answer: "Standard concrete pressure washing is designed to lift general dirt, dust, and light biological growth (like algae or mold) using ambient temperature water and a wide spray pattern. Chewing gum removal is a highly targeted, restoration-level service that requires specialized high-temperature burners (steam capabilities), rotating surface clean heads, and industrial degreasers to extract the oily binders of the gum from deep within the concrete pores."
    }
];

export default function ChewingGumRemovalPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Commercial Chewing Gum Removal",
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
            "highPrice": "1500",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "350.00",
                "maxPrice": "1500.00"
            }
        },
        "description": "Professional high-temperature commercial chewing gum removal and concrete steam cleaning."
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
                                "name": "Chewing Gum Removal",
                                "item": "https://valleyexteriorpros.com/services/chewing-gum-removal"
                            }
                        ]
                    })
                }}
            />

            <Hero
                h1={
                    <>
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Commercial Chewing Gum Removal</span>
                    </>
                }
                description="Eliminate ugly gum stains and restore commercial curb appeal. High-temperature steam cleaning for sidewalks, drive-thrus, and shopping plazas."
                bgImage="/images/portfolio/concrete-cleaning.webp"
                showTrustBadges={true}
            />

            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* SECTION 1: INTRODUCTION */}
                    <section className="mb-12 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is a fully insured exterior cleaning company providing professional, commercial-grade chewing gum removal and concrete restoration services in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-gold font-semibold transition-colors">De Pere</Link>, WI.
                        </div>
                        <p className="leading-relaxed text-lg mb-6">
                            For a commercial facility, first impressions dictate customer perception and brand value. When walkways, entryways, and drive-thrus are littered with hundreds of dark, unsightly chewing gum spots, it conveys neglect and negatively impacts your business. Unfortunately, chewing gum is not simply a cosmetic issue; it is a highly persistent contaminant that bonds chemically with the aggregates of concrete, asphalt, and brick.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Standard cold-water pressure washers are entirely incapable of resolving this issue. Attempting to blast gum off concrete using cold water often requires excessive, dangerous pressures that permanently damage the concrete, leaving ugly scars, pitted patterns, and exposed aggregates. Our technical approach utilizes advanced, high-temperature thermal extraction to safely melt and lift the gum structure from deep within the concrete pores.
                        </p>
                    </section>

                    {/* SECTION 2: DEPTH ANALYSIS */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">The Science of Thermal Gum Extraction</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            Discarded chewing gum consists of synthetic polymers, elastomers, and softeners that cure and harden over time when exposed to the elements. As pedestrians walk over the gum, dirt and soot attach to the tacky residue, turning it into a dark, solid spot that is highly resistant to standard cleaning methods. To successfully remove this bond, we must alter the physical state of the gum using high thermal energy.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            Our state-of-the-art mobile cleaning rigs feature commercial-grade water heaters capable of delivering pressurized water and steam at temperatures exceeding 200°F (93°C). When this extreme heat hits the chewing gum, it instantly liquefies the synthetic binders and breaks down the adhesive polymers. The gum is then lifted gently from the pores of the masonry, utilizing a specialized rotary surface cleaner that distributes the pressure evenly, preventing concrete etching or scoring.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-8 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">EPA-Compliant Wastewater Reclamation</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">
                                Commercial exterior cleaning in Wisconsin must strictly adhere to EPA stormwater regulations and clean water guidelines. Standard pressure washing that allows dirty water, oil residues, and synthetic gum waste to run freely into local storm sewers is subject to massive civil penalties. We prevent this by utilizing specialized vacuum recovery surface cleaners that extract wastewater at the source, allowing us to contain, filter, and legally discharge the water.
                            </p>
                        </div>
                    </section>

                    {/* SECTION 3: WORKFLOW */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Our 3-Step Walkway Restoration Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">01</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Surface Pre-Treatment</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We sweep the area to remove loose debris and apply specialized biodegradable alkaline detergents to soften grease, oil, and atmospheric dirt surrounding the gum spots.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">02</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Thermal Steam Extraction</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">Our technicians deploy 200°F+ hot-water rotary surface cleaners. The thermal steam dissolves the gum instantly, flushing the pores clean without concrete damage.</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                                <span className="text-gold font-black text-2xl mb-2 block">03</span>
                                <h4 className="text-lg font-bold text-navy mb-2">Vacuum Recovery & Rinse</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">We extract the wastewater and dissolved rubber slurry using powerful vacuum lines. A final low-pressure rinse ensures a perfectly uniform, streak-free surface.</p>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 4: TABLE */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Scope of Work & Pricing Matrix</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We provide transparent, flat-rate commercial pricing customized to the square footage and gum density of your property. Below is a baseline overview of our commercial packages.
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
                                        <td className="p-4 font-bold text-navy">Retail Entry Clean</td>
                                        <td className="p-4">Up to 1,500 sq ft</td>
                                        <td className="p-4 font-semibold">$350 - $600 </td>
                                        <td className="p-4">Entrance wash, gum melting, window sill rinse, oil spot treatment</td>
                                        <td className="p-4">1.5 - 2.5 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Restaurant Drive-Thru</td>
                                        <td className="p-4 font-semibold">Single lane (up to 3,000 sq ft)</td>
                                        <td className="p-4 font-semibold">$450 - $750 </td>
                                        <td className="p-4">High-grease degreasing, gum extraction, dumpster pad rinse</td>
                                        <td className="p-4">2.5 - 4 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Shopping Center Walkways</td>
                                        <td className="p-4 font-semibold">3,000 - 8,000 sq ft</td>
                                        <td className="p-4 font-semibold">$750 - $1,500 </td>
                                        <td className="p-4">Multi-storefront steam wash, comprehensive gum lift, vacuum sweep</td>
                                        <td className="p-4">4 - 7 hours</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50 transition-colors">
                                        <td className="p-4 font-bold text-navy">Large Plaza / Transit Hub</td>
                                        <td className="p-4 font-semibold">8,000+ sq ft</td>
                                        <td className="p-4 font-semibold">Custom Quote </td>
                                        <td className="p-4">Full perimeter deep clean, chemical rust lift, multi-phase steam extraction</td>
                                        <td className="p-4">Multi-night operations</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* SECTION 5: GEOGRAPHY */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Serving the Northeast Wisconsin Commercial Corridor</h2>
                        <p className="leading-relaxed text-lg mb-6">
                            We proudly serve commercial property managers, building owners, HOA boards, and municipal coordinators throughout the Fox Valley. Our mobile units are fully equipped to handle projects in industrial parks near Interstate 41 in Appleton, busy commercial sectors in Green Bay, shopping complexes in De Pere, and waterfront properties in Sturgeon Bay.
                        </p>
                        <p className="leading-relaxed text-lg mb-6">
                            By partnering with Valley Property Services, you receive comprehensive project documentation, including water-usage permits, environmental containment records, and before-and-after photographic proof. We carry comprehensive $2M liability policies and full worker's compensation, ensuring complete safety and compliance on every single job site.
                        </p>
                    </section>

                    {/* SECTION 6: FAQ ACCORDION */}
                    <section className="mb-12 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 not-prose">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, factual answers concerning our commercial chewing gum removal operations.</p>
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
