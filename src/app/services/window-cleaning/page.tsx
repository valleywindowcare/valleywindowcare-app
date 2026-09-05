import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import PricingMatrix from '@/components/PricingMatrix';
import FAQSchema from '@/components/FAQSchema';

export const metadata = {
    title: "Window Cleaning Services in Northeast Wisconsin",
    description: "Professional window cleaning services. Valley Property Services delivers pure-water glass maintenance solutions across Northeast Wisconsin.",
};

export default function ServicePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Window Cleaning",
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
        "areaServed": ["Appleton", "Green Bay", "Northeast Wisconsin"],
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "149",
            "highPrice": "449",
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": "USD",
                "minPrice": "149.00",
                "maxPrice": "449.00"
            }
        },
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
                                "name": "Window Cleaning",
                                "item": "https://valleyexteriorpros.com/services/window-cleaning"
                            }
                        ]
                    })
                }}
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
                showTrustBadges={true}
            />

            {/* GOLD STANDARD ARCHITECTURE CONTAINER */}
            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">

                    {/* ENTITY CAPSULE */}
                    <section className="mb-16 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is a fully insured exterior cleaning company providing professional pure-water window cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.
                        </div>
                        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                            <Image src="/assets/window-cleaning-8.webp"
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
                        <FAQSchema faqs={[
                            {
                                question: "How often should I have my windows professionally cleaned in Northeast Wisconsin?",
                                answer: "For most residential properties in Green Bay, Appleton, and the Fox Valley, we recommend a minimum of two professional cleanings per year (typically spring and fall). Homes surrounded by dense trees, dirt roads, or lake winds (such as Door County waterfront estates) may require quarterly cleanings to prevent mineral buildup and insect debris."
                            },
                            {
                                question: "What safety equipment and protocols does your team use for multi-story window cleaning?",
                                answer: "Safety is our absolute priority. We utilize advanced carbon-fiber water-fed extension poles that allow us to clean windows up to 3 stories high safely from the ground. For higher panes, our technicians are trained in OSHA-compliant ladder safety and stand-off stabilizer brackets that rest on structural walls rather than delicate siding or gutters. We are fully insured with a $2M general liability policy for your complete peace of mind."
                            },
                            {
                                question: "Do you guarantee a streak-free finish? What if it rains right after my service?",
                                answer: "Yes, we back all of our window cleaning services with a 100% Streak-Free Guarantee. Our multi-stage deionized water filtration system strips all dissolved solids, leaving zero residue. If you notice any streaks or spots within 48 hours of your service, notify us and we will return to re-clean those panes completely free of charge. If it rains within 24 hours of your cleaning, we also cover you under our local weather warranty."
                            },
                            {
                                question: "Is seasonal window cleaning available during late autumn or winter?",
                                answer: "We offer professional window cleaning throughout the spring, summer, and late autumn months (typically down to 35°F). In the late autumn, window cleaning is crucial for removing summer pollen and preparing your home for winter's low-angle sunlight. We do not perform window cleaning in freezing winter temperatures due to ice safety hazards for our technicians and risk of glass thermal shock."
                            },
                            {
                                question: "How does pure-water cleaning work without soap or squeegees?",
                                answer: "We utilize multi-stage deionization filtration (pure water technology) that strips regular tap water of all minerals (calcium, magnesium, etc.). Because the water is completely pure, it behaves like a natural solvent, aggressively drawing dirt, organic matter, and dust off the glass surface. The windows are then left to dry naturally, leaving a completely spot-free, streak-free finish with no soapy residue that would quickly attract new dirt."
                            },
                            {
                                question: "Do you clean window screens, tracks, and frames, or just the glass?",
                                answer: "Every standard window cleaning service includes complimentary dry-brushing of screens and wiping out of the immediate exterior window tracks and sills. For heavily soiled tracks or screens requiring deep chemical washing and restoration, we offer premium screen-cleaning upgrades to restore them to like-new condition."
                            },
                            {
                                question: "Can you remove hard water spots, paint, or construction debris from windows?",
                                answer: "Standard window cleaning easily removes dirt, pollen, and insect spots. For windows with heavy white hard water etching (caused by mineral-heavy lawn sprinklers or concrete runoff) or post-construction paint overspray and tape residue, we offer specialized restoration services utilizing acid-based mineral dissolving solutions and safety glass scrapers to safely lift the contaminants."
                            },
                            {
                                question: "Do you clean interior windows as well as exterior?",
                                answer: "Yes! We provide both interior and exterior window cleaning packages. When cleaning interior windows, our technicians wear protective shoe covers, utilize clean drop cloths under every window, and use specialized micro-mist sprayers to ensure zero water drips or overspray on your walls, baseboards, or carpets."
                            }
                        ]} />
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-lg">Direct, factual answers concerning our local window cleaning methodology.</p>
                        </div>
                        <div className="space-y-6 text-left">
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: How often should I have my windows professionally cleaned in Northeast Wisconsin?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: For most residential properties in Green Bay, Appleton, and the Fox Valley, we recommend a minimum of two professional cleanings per year (typically spring and fall). Homes surrounded by dense trees, dirt roads, or lake winds (such as Door County waterfront estates) may require quarterly cleanings to prevent mineral buildup and insect debris.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: What safety equipment and protocols does your team use for multi-story window cleaning?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Safety is our absolute priority. We utilize advanced carbon-fiber water-fed extension poles that allow us to clean windows up to 3 stories high safely from the ground. For higher panes, our technicians are trained in OSHA-compliant ladder safety and stand-off stabilizer brackets that rest on structural walls rather than delicate siding or gutters. We are fully insured with a $2M general liability policy for your complete peace of mind.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Do you guarantee a streak-free finish? What if it rains right after my service?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Yes, we back all of our window cleaning services with a 100% Streak-Free Guarantee. Our multi-stage deionized water filtration system strips all dissolved solids, leaving zero residue. If you notice any streaks or spots within 48 hours of your service, notify us and we will return to re-clean those panes completely free of charge. If it rains within 24 hours of your cleaning, we also cover you under our local weather warranty.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Is seasonal window cleaning available during late autumn or winter?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: We offer professional window cleaning throughout the spring, summer, and late autumn months (typically down to 35°F). In the late autumn, window cleaning is crucial for removing summer pollen and preparing your home for winter's low-angle sunlight. We do not perform window cleaning in freezing winter temperatures due to ice safety hazards for our technicians and risk of glass thermal shock.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: How does pure-water cleaning work without soap or squeegees?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: We utilize multi-stage deionization filtration (pure water technology) that strips regular tap water of all minerals (calcium, magnesium, etc.). Because the water is completely pure, it behaves like a natural solvent, aggressively drawing dirt, organic matter, and dust off the glass surface. The windows are then left to dry naturally, leaving a completely spot-free, streak-free finish with no soapy residue that would quickly attract new dirt.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Do you clean window screens, tracks, and frames, or just the glass?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Every standard window cleaning service includes complimentary dry-brushing of screens and wiping out of the immediate exterior window tracks and sills. For heavily soiled tracks or screens requiring deep chemical washing and restoration, we offer premium screen-cleaning upgrades to restore them to like-new condition.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Can you remove hard water spots, paint, or construction debris from windows?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Standard window cleaning easily removes dirt, pollen, and insect spots. For windows with heavy white hard water etching (caused by mineral-heavy lawn sprinklers or concrete runoff) or post-construction paint overspray and tape residue, we offer specialized restoration services utilizing acid-based mineral dissolving solutions and safety glass scrapers to safely lift the contaminants.</p>
                            </div>
                            <div className="p-6 bg-slate-50 border-l-4 border-gold rounded-r-xl">
                                <h3 className="text-xl font-bold text-navy mb-2">Q: Do you clean interior windows as well as exterior?</h3>
                                <p className="text-gray-700 leading-relaxed font-medium">A: Yes! We provide both interior and exterior window cleaning packages. When cleaning interior windows, our technicians wear protective shoe covers, utilize clean drop cloths under every window, and use specialized micro-mist sprayers to ensure zero water drips or overspray on your walls, baseboards, or carpets.</p>
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
