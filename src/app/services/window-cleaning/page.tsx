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
                        <span className="capitalize text-4xl md:text-5xl lg:text-7xl">Premium Window Cleaning for Green Bay & De Pere Homes</span>
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
                            Valley Window Care & Exterior Cleaning is a fully insured exterior cleaning company providing professional pure-water window cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.
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
                            We deliver professional window restoration designed to maximize natural light and protect your glass from permanent etching. We are experts in hard water stain removal throughout Northeast Wisconsin, completely restoring crystal-clear visibility and elevating your property's curb appeal.
                        </p>
                        <div className="bg-slate-50 border-l-4 border-gold p-6 mt-8 mb-4 rounded-r-2xl shadow-sm">
                            <h4 className="text-navy font-bold text-xl mb-3">Powered by Pure Water Technology</h4>
                            <p className="text-gray-700 leading-relaxed font-medium">We utilize specialized multi-stage filtration systems capable of complete deionization. By stripping microscopic minerals from the water supply, we guarantee a flawless, streak-free shine on every pane without relying on harsh chemical residue or abrasive squeegees.</p>
                        </div>
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
                                The Pure-Water Window Cleaning Process
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

            {/* DYNAMIC MAP AND NAP INJECTION (INTERACTIVE JS) */}
            <div className="container mx-auto px-4 py-8 mb-12 relative z-10">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-navy mb-4 capitalize">Local Window Cleaning Services</h3>
                    <p className="text-gray-600 mb-6">We provide specialized, professional exterior cleaning securely tailored to the unique environmental conditions of the following Wisconsin communities:</p>
                    
                    {/* Alphabetized Canonical Routing Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-2 md:gap-x-6 border-t border-gray-100 pt-6">
                        {[
                            { name: "Allouez", url: "/service-areas/green-bay" },
                            { name: "Appleton", url: "/service-areas/appleton" },
                            { name: "Ashwaubenon", url: "/service-areas/green-bay" },
                            { name: "Bellevue", url: "/service-areas/green-bay" },
                            { name: "De Pere", url: "/service-areas/green-bay" },
                            { name: "Fish Creek", url: "/service-areas/door-county" },
                            { name: "Green Bay", url: "/service-areas/green-bay" },
                            { name: "Howard", url: "/service-areas/green-bay" },
                            { name: "Kaukauna", url: "/service-areas/appleton" },
                            { name: "Menasha", url: "/service-areas/appleton" },
                            { name: "Neenah", url: "/service-areas/appleton" },
                            { name: "Oshkosh", url: "/service-areas/oshkosh" },
                            { name: "Shawano", url: "/service-areas/shawano" },
                            { name: "Sturgeon Bay", url: "/service-areas/door-county" },
                            { name: "Suamico", url: "/service-areas/green-bay" }
                        ].map((loc, idx) => (
                            <Link key={idx} href={loc.url} className="text-blue-600 hover:text-gold font-semibold transition-all flex items-center justify-between group p-3 hover:bg-slate-50/80 rounded-xl border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md">
                                <span className="truncate pr-2 capitalize">{loc.name} window cleaning</span>
                                <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0 text-gold">&rarr;</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

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
