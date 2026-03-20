import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import PricingMatrix from '@/components/PricingMatrix';

export const metadata = {
    title: "Window Cleaning Services in Northeast Wisconsin | Valley Window Care",
    description: "Professional window cleaning services. Valley Window Care delivers pure-water glass maintenance solutions across Northeast Wisconsin.",
};

export default function ServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Window Cleaning",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Valley Window Care",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Appleton",
                "addressRegion": "WI"
            }
        },
        "areaServed": ["Appleton", "Green Bay", "Northeast Wisconsin"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Window Cleaning Packages",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Exterior Residential Window Cleaning"
                    },
                    "priceSpecification": {
                        "@type": "UnitPriceSpecification",
                        "priceCurrency": "USD",
                        "minPrice": "149.00"
                    }
                }
            ]
        }
    };

    return (
        <main className="w-full overflow-hidden bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO MODULE */}
            <Hero
                h1={
                    <>
                        <span className="capitalize">Window Cleaning</span> <br />
                        <span className="text-gold text-2xl md:text-3xl mt-4 block">Valley Window Care</span>
                    </>
                }
                description="Professional pure-water exterior window cleaning. We physically remove dirt, cobwebs, and hard water stains."
                bgImage="/images/portfolio/window-cleaning-before-after.jpg.webp"
            />

            {/* GOLD STANDARD ARCHITECTURE CONTAINER */}
            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">

                    {/* ENTITY CAPSULE */}
                    <section className="mb-16 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Window Care is a fully insured exterior cleaning company providing professional pure-water window cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.
                        </div>
                        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image src="/assets/window-cleaning-8.jpg"
                                alt="Professional window cleaning in Green Bay WI"
                                fill
                                className="object-cover"
                                quality={100}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>
                        <p className="leading-relaxed text-lg">
                            We clean local residential homes. We wash regional commercial storefronts. James Voss owns the company. He physically operates the equipment on every job site. You receive direct contractor accountability. Ladder falls cause permanent physical injuries. We eliminate DIY safety risks. We carry authorized commercial liability insurance. We protect your physical property.
                        </p>
                    </section>

                    {/* STRICT PROPERTY PROTECTION PROTOCOL */}
                    <section className="mb-16 bg-[#F8FAFC] p-8 md:p-12 rounded-3xl border-t-4 border-gold shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="text-gold" size={32} />
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                                Our Strict Property Protection Protocol
                            </h2>
                        </div>
                        <p className="text-lg leading-relaxed mb-8 text-gray-700 font-medium">
                            We deploy proprietary, zero-damage methods to safeguard your exterior surfaces and interior furnishings.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 not-prose">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold text-navy-dark mb-3">Pure-Water Guarantee</h4>
                                <p className="text-gray-600 leading-relaxed">We use 100% deionized purified water. This completely eliminates hard mineral spotting on your siding or delicate brickwork when rinsing glass.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold text-navy-dark mb-3">Interior Bootie Protocol</h4>
                                <p className="text-gray-600 leading-relaxed">When cleaning interior glass panes, our technicians are strictly required to wear clean surgical booties to protect your expensive flooring and carpets.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold text-navy-dark mb-3">Ladder Standoff Mitigation</h4>
                                <p className="text-gray-600 leading-relaxed">We utilize specialized carbon-fiber poles reaching up to three stories. This permanently eliminates the need for heavy metal ladders crashing against your home.</p>
                            </div>
                        </div>
                    </section>

                    {/* METHODOLOGY/PROCESS STEPS */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="text-gold" size={32} />
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                                What is the Professional Pure-Water Window Cleaning Process in Wisconsin?
                            </h2>
                        </div>

                        <p className="text-lg leading-relaxed mb-8">
                            We deploy highly specialized carbon-fiber poles and advanced filtration units. We execute a strict three-phase methodology on every property.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                            {/* Step 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">01</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">1</span>
                                    Screen & Frame Prep
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We remove window screens safely. We wipe exterior tracks. We dry-brush bug screens. We scrub exterior frames. Clean frames prevent dirty water runoff.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">02</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">2</span>
                                    Pure Water Agitation
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We pump tap water through specialized filtration tanks. We produce pure deionized water. We use soft-bristle brushes. We agitate heavy dirt and bird droppings.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">03</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">3</span>
                                    Spot-Free Deionized Rinse
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We rinse the glass with pure water. We remove all agitated dirt. The water contains zero hard minerals. The glass dries perfectly spotless. We eliminate squeegee streaks.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TYPES WE HANDLE (BENEFITS CONTAINER) */}
                    <section className="mb-16 bg-[#FFFFFF] text-[#1E2B3C] p-8 md:p-12 rounded-3xl not-prose shadow-[0_0_40px_rgba(30,43,60,0.06)] border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-navy border-b border-gray-100 pb-6">
                            What Types of Glass Do We Professionally Clean in Green Bay?
                        </h2>

                        <div className="space-y-6 mt-10">
                            {/* Type 1 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Residential Glass</h4>
                                    <p className="text-gray-600 leading-relaxed">We clean two-story and three-story residential windows. We use 40-foot carbon-fiber poles. We keep heavy ladders off delicate vinyl siding.</p>
                                </div>
                            </div>

                            {/* Type 2 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Commercial Storefronts</h4>
                                    <p className="text-gray-600 leading-relaxed">We wash retail display glass. We remove urban exhaust film. Clear, transparent glass actively attracts commercial foot traffic.</p>
                                </div>
                            </div>

                            {/* Type 3 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Transoms & Skylights</h4>
                                    <p className="text-gray-600 leading-relaxed">We clean inaccessible architectural glass safely. We clear heavy organic debris. We restore blocked natural sunlight securely from the ground.</p>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* LOCAL SEO & CROSS-LINKING */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="text-gold" size={32} />
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                                Local Routes & Complete Care
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <div className="space-y-6 text-lg">
                                <p className="leading-relaxed">
                                    We dispatch commercial route vehicles daily through <Link href="/service-areas/green-bay" className="text-gold font-bold hover:underline">Green Bay</Link> and <Link href="/service-areas/appleton" className="text-gold font-bold hover:underline">Appleton</Link>. Maintaining clean glass permanently boosts physical property value.
                                </p>
                                <p className="leading-relaxed">
                                    Need your green siding cleaned too? We offer professional, high-volume <Link href="/services/house-washing" className="text-gold font-bold hover:underline">House Washing</Link> alongside our pure-water window operations. Partnering services saves you significant scheduling hassle.
                                </p>
                                <div className="mt-8">
                                    <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-xl font-bold hover:bg-navy hover:text-white transition-colors">
                                        Request Your Custom Quote <ArrowRight size={20} />
                                    </Link>
                                </div>
                            </div>
                            <div className="relative w-full h-64 md:h-full min-h-[250px] rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src="/images/service-areas/appleton/window-cleaning-appleton.webp"
                                    alt="Expert window cleaners in Appleton WI"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* BLUF FAQ SECTION */}
                    <section className="mb-16 mt-16 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, factual answers concerning our local window cleaning methodology.</p>
                        </div>
                        <div className="space-y-6 text-left">
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Do you clean window screens and exterior tracks?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Yes. Every exterior window washing service includes complimentary dry-brushing of screens and wiping out of the immediate exterior window tracks.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Does pure-water cleaning really work without soap?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Absolutely. By aggressively filtering regular tap water with reverse-osmosis and deionizing resin, the hungry pure water molecules act as a powerful solvent that breaks down dirt naturally, leaving a 100% streak-free finish.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Do you offer commercial window cleaning for Green Bay businesses?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Yes. We offer customized commercial route schedules for local storefronts, offices, and multi-story retail locations to ensure your business constantly attracts foot traffic.</p>
                            </div>
                        </div>
                    </section>

                </article>
            </div>


            <PricingMatrix
                title="Transparent Window Cleaning Pricing"
                description="Residential exterior window cleaning starts at $149. We provide exact quotes upfront."
                rateTitle="Per Pane Rate"
                ratePrice="$5.00 - $12.00 / Pane"
                rateDetails="Calculated based on standard residential dimensional exterior panes."
                minimumPrice="$149.00"
                minimumDetails="Our baseline rate to deploy our pure-water filtration tanks and specialized carbon-fiber poles."
                variableTitle="Cost Variables"
                variableDetails="Final price depends on interior cleaning, screen washing, true French panes, or post-construction paint removal."
            />

            <ReviewSlider />

            {/* SERVICES GRID */}
            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl py-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Exterior Services</h2>
                    <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
