import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ShieldCheck,
    Phone,
    MapPin,
    ArrowRight,
    TreePine,
    Sparkles,
    Calendar,
    DollarSign,
    Building2,
    Layers,
    HelpCircle,
    Check,
    Snowflake,
    AlertCircle,
    Wind
} from "lucide-react";

export const metadata: Metadata = {
    title: {
        absolute: "Gutter Cleaning Green Bay, Appleton & De Pere WI | Valley",
    },
    description: "Hand-cleaned gutters and flushed downspouts across Green Bay, Appleton and De Pere. Pine needles, oak tassels, ice dam prevention. Fully insured. Free quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/gutter-cleaning",
    },
    openGraph: {
        title: "Gutter Cleaning Green Bay, Appleton & De Pere WI | Valley",
        description: "Hand-cleaned gutters and flushed downspouts across Green Bay, Appleton and De Pere. Pine needles, oak tassels, ice dam prevention. Fully insured. Free quote.",
        url: "https://valleyexteriorpros.com/services/gutter-cleaning",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/gutter-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Gutter Cleaning in Green Bay, Appleton & De Pere",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Gutter Cleaning Green Bay, Appleton & De Pere WI | Valley",
        description: "Hand-cleaned gutters and flushed downspouts across Green Bay, Appleton and De Pere. Pine needles, oak tassels, ice dam prevention. Fully insured. Free quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/gutter-cleaning.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gutter Cleaning in Green Bay, Appleton & De Pere",
    "serviceType": "Gutter Cleaning, Downspout Flushing & Debris Removal",
    "description": "Hand-cleaned gutters and flushed downspouts across Green Bay, Appleton and De Pere. Pine needles, oak tassels, ice dam prevention. Fully insured. Free quote.",
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
    "areaServed": [
        { "@type": "City", "name": "Green Bay" },
        { "@type": "City", "name": "Appleton" },
        { "@type": "City", "name": "De Pere" },
        { "@type": "City", "name": "Howard" },
        { "@type": "City", "name": "Suamico" },
        { "@type": "City", "name": "Allouez" },
        { "@type": "City", "name": "Bellevue" },
        { "@type": "City", "name": "Ashwaubenon" },
        { "@type": "City", "name": "Neenah" },
        { "@type": "City", "name": "Menasha" },
        { "@type": "City", "name": "Kaukauna" }
    ],
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "150",
        "highPrice": "450",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "150.00"
        }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Gutter Cleaning & Maintenance Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Residential Gutter Hand-Cleaning & Bagged Debris Removal"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Pure Water Downspout Flushing & Flow Verification"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Gutter Inspection & Condition Report"
                }
            }
        ]
    }
};

const breadcrumbSchema = {
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
            "name": "Gutter Cleaning",
            "item": "https://valleyexteriorpros.com/services/gutter-cleaning"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://valleyexteriorpros.com/services/gutter-cleaning#faq",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How much does gutter cleaning cost in Green Bay and the Fox Valley?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gutter cleaning in the Green Bay, Appleton, and De Pere area runs $1.00 to $2.50 per linear foot, with a $150 service minimum. Where you land in that range depends on total linear feet of gutter, number of stories, roof pitch and access, and how much debris has accumulated since the last cleaning. Homes with gutter guards that need removal and reinstallation cost more. We give you a firm quote before any work starts, with no trip charges or surprise add-ons."
            }
        },
        {
            "@type": "Question",
            "name": "How often should I have my gutters cleaned in Northeast Wisconsin?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Twice a year is right for most Northeast Wisconsin homes: once in late spring after oak tassels and maple seeds finish dropping, and once in late fall after the final leaf drop but before the first hard freeze. Properties surrounded by pine need service two to three times a year, because pine needles shed continuously rather than seasonally and are small enough to pass through most gutter guards. Homes with minimal tree cover can often go with a single fall cleaning."
            }
        },
        {
            "@type": "Question",
            "name": "Will cleaning my gutters prevent ice dams?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Clean gutters are an important part of ice dam prevention, but not a complete solution on their own. A clogged gutter holds standing water that freezes into a solid ridge along the roof edge, and meltwater then pools behind that ridge and works backward under the shingles. A clear, draining gutter removes that anchor point. However, ice dams are also driven by heat escaping into the attic, so adequate attic insulation and ventilation matter just as much. The best protection is a gutter cleaning completed after the last leaf drop and before the first hard freeze, combined with a properly insulated attic."
            }
        },
        {
            "@type": "Question",
            "name": "Do I still need gutter cleaning if I have gutter guards?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, though usually less often. Gutter guards are effective at keeping out whole leaves, but pine needles, oak tassels, shingle grit, and pollen are small enough to pass through most guard systems and accumulate underneath. Debris also builds up on top of the guards themselves, where it blocks water from entering the gutter at all. We remove the guards, clean the trough and downspouts, clear the guard surface, and reinstall. Most guarded homes in our area do well on an annual schedule instead of twice yearly."
            }
        }
    ]
};

const includedItems = [
    {
        title: "Full hand-clearing of every gutter run",
        desc: "Debris is removed and bagged, never blown onto your roof, landscaping, or into the downspouts."
    },
    {
        title: "Downspout flushing and verification",
        desc: "We run water through every downspout and confirm flow at the discharge. Clogged elbows get cleared or hydro-jetted on the spot."
    },
    {
        title: "Gutter interior wipe-down",
        desc: "Where buildup has stained or caked the trough."
    },
    {
        title: "Ground cleanup",
        desc: "Roofs, walks, drives, and beds are rinsed and left clean."
    },
    {
        title: "A photo report",
        desc: "Of each section, before and after."
    },
    {
        title: "A condition note",
        desc: "Loose spikes, separated seams, sagging runs, pitch problems, or rusted-through sections get flagged with a photo so nothing surprises you in February."
    }
];

export default function GutterCleaningPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[580px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/gutter-cleaning.webp"
                        alt="Gutter Cleaning in Green Bay, Appleton & De Pere"
                        fill
                        priority={true}
                        quality={90}
                        sizes="100vw"
                        className="object-cover opacity-30"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy z-10" />

                <div className="container mx-auto px-4 relative z-20 max-w-4xl text-center">
                    {/* H1 */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md text-white mb-6">
                        Gutter Cleaning in Green Bay, Appleton &amp; De Pere
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Hand-cleaned gutters, flushed downspouts, and a photo report when we&apos;re done — so you know the water is actually moving, not just that the leaves are gone.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get My Free Gutter Quote</span>
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+19206097085"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base sm:text-lg px-7 py-4 rounded-full transition-colors"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>Call (920) 609-7085</span>
                        </a>
                    </div>

                    {/* Trust Bar (Single line under CTAs) */}
                    <div className="pt-2 text-sm sm:text-base text-slate-300 font-medium tracking-wide border-t border-white/15 inline-block">
                        Serving Northeast Wisconsin since 2020 · Fully insured · 100% satisfaction guarantee
                    </div>
                </div>
            </section>

            {/* OPENING SECTION (No header - sits directly under the hero) */}
            <section className="py-14 sm:py-16 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-3xl text-base sm:text-lg text-slate-700 leading-relaxed space-y-6">
                    <p className="font-medium text-slate-800 text-lg sm:text-xl leading-relaxed">
                        Most gutter problems in Northeast Wisconsin don&apos;t start with a gutter full of leaves. They start with a downspout elbow packed with wet pine needles in a gutter that still <em>looks</em> clear from the ground.
                    </p>
                    <p>
                        That&apos;s why water sheets over the front edge during a hard rain, why the mulch bed under the eave keeps washing out, and why the same corner of the fascia keeps rotting no matter how many times it gets repainted.
                    </p>
                    <p>
                        We clean gutters by hand, bag the debris, then flush every downspout and watch the water exit at the bottom. If it doesn&apos;t exit, we&apos;re not done. You get before-and-after photos of each run so you can see the condition of your gutters without getting on a ladder yourself.
                    </p>
                </div>
            </section>

            {/* H2: WHAT'S INCLUDED IN EVERY GUTTER CLEANING */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Comprehensive Service Standard</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            What&apos;s Included in Every Gutter Cleaning
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
                        {includedItems.map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-navy text-gold flex items-center justify-center shrink-0 mt-0.5">
                                    <Check size={18} />
                                </div>
                                <div>
                                    <div className="text-base font-bold text-navy mb-1 leading-snug">
                                        {item.title}
                                    </div>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-navy border-slate-200 shadow-sm text-slate-700 text-sm sm:text-base leading-relaxed">
                        <p>
                            We do <strong>not</strong> pressure-wash the inside of gutters. High pressure drives water up under the shingle course and loosens seams. Hand-clearing plus a controlled flush is the right tool here — the same reasoning behind our <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors">soft wash approach to roof cleaning</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* CITY-LEVEL SECTIONS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl space-y-16">
                    {/* H2: Gutter Cleaning in Green Bay */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                            <MapPin size={16} />
                            <span>Brown County</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
                            Gutter Cleaning in Green Bay
                        </h2>
                        <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                            <p>
                                Green Bay&apos;s older east-side and Astor neighborhoods sit under mature silver maple and box elder, which means two heavy debris loads a year — seed pods in late spring, leaves in late fall — on homes whose gutters are often original to the house. Newer builds out toward Bellevue, Allouez, and Howard have longer uninterrupted runs and fewer downspouts per foot, so a single blocked outlet takes a much larger section of roof out of service.
                            </p>
                            <p>
                                Both situations get the same treatment: clear by hand, flush, verify, photograph. If your home also has algae streaking on the north-facing roof slope, it&apos;s usually worth handling in the same visit — see our <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors">Green Bay service area page</Link> for everything we cover locally.
                            </p>
                        </div>
                    </div>

                    {/* H2: Gutter Cleaning in Appleton and the Fox Valley */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                            <MapPin size={16} />
                            <span>Outagamie &amp; Winnebago Counties</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
                            Gutter Cleaning in Appleton and the Fox Valley
                        </h2>
                        <div className="space-y-4 text-base text-slate-700 leading-relaxed">
                            <p>
                                Fox Valley homes take a harder spring hit than most of our Green Bay customers. The oak canopy through Appleton, Neenah, Menasha, and Kaukauna drops tassels in May in volumes that overwhelm <Link href="/services/gutter-guards" className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors">standard gutter guards</Link> and pack downspout openings solid. Riverside properties along the Fox add cottonwood fluff to the mix, which mats with the first rain and turns into a felt-like plug.
                            </p>
                            <p>
                                We schedule Fox Valley spring cleanings deliberately late — after the oaks finish dropping, not during — so you pay for one visit instead of two.
                            </p>
                        </div>
                    </div>

                    {/* H2: Gutter Cleaning in De Pere */}
                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-wider mb-2">
                            <MapPin size={16} />
                            <span>HQ &amp; Local Hub</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-navy mb-4">
                            Gutter Cleaning in De Pere
                        </h2>
                        <div className="text-base text-slate-700 leading-relaxed">
                            <p>
                                De Pere is home. Our shop is on South Good Hope Road, which means shorter drive times, tighter scheduling windows, and the ability to come back quickly if something isn&apos;t right. See everything we cover locally on our <Link href="/service-areas/de-pere" className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors">De Pere service area page</Link>. Many De Pere properties combine mature hardwoods in the older grid near the river with newer subdivisions on the south end — we handle both, plus the commercial buildings and apartment properties along the Highway 41 corridor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: THE FOUR THINGS THAT ACTUALLY CLOG GUTTERS IN WISCONSIN */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <AlertCircle size={16} />
                            <span>Seasonal Debris Realities</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            The Four Things That Actually Clog Gutters in Wisconsin
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* H3: Pine needles */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                                    <TreePine size={22} />
                                </div>
                                <h3 className="text-xl font-black text-navy mb-3">
                                    Pine needles (year-round, worst in fall)
                                </h3>
                                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                                    <p>
                                        White and red pine shed needles continuously, not seasonally. Needles are the worst debris type we deal with because they&apos;re small enough to pass through most gutter guards and thin enough to slip into the downspout opening, where they mat into a dense plug that water can&apos;t push through. Properties in Suamico, Howard, and anywhere near a pine windbreak typically need service twice a year minimum, sometimes three times.
                                    </p>
                                    <p className="font-semibold text-slate-800">
                                        A gutter full of leaves still drains. A downspout packed with needles does not.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* H3: Oak tassels */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                                    <Sparkles size={22} />
                                </div>
                                <h3 className="text-xl font-black text-navy mb-3">
                                    Oak tassels (May, Fox Valley especially)
                                </h3>
                                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                                    <p>
                                        Oak catkins — the stringy yellow-green tassels that drop for about two weeks each spring — are the single most underestimated clog source in the Appleton and Neenah area. They&apos;re light enough to blow into gutters from a neighbor&apos;s tree, and they bind together with pollen into ropes that wrap around downspout outlets. Homeowners often clean in April, then find gutters overflowing by early June and assume the cleaning was done badly.
                                    </p>
                                    <p className="font-semibold text-slate-800">
                                        It wasn&apos;t. It was done two weeks too early.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* H3: Maple seeds and cottonwood fluff */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                                    <Wind size={22} />
                                </div>
                                <h3 className="text-xl font-black text-navy mb-3">
                                    Maple seeds and cottonwood fluff (late spring)
                                </h3>
                                <div className="text-sm text-slate-600 leading-relaxed">
                                    <p>
                                        Silver maple helicopters germinate <em>in the gutter</em>. We routinely pull four-inch seedlings with real root systems out of troughs that were cleaned the previous fall. Cottonwood fluff mats with the first rain into a water-resistant layer that sits on top of existing debris and sheds water over the lip instead of through it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* H3: Winter ice dams */}
                        <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
                                    <Snowflake size={22} />
                                </div>
                                <h3 className="text-xl font-black text-navy mb-3">
                                    Winter ice dams (December–March)
                                </h3>
                                <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                                    <p className="font-semibold text-rose-700">
                                        This is the expensive one.
                                    </p>
                                    <p>
                                        A clogged gutter holds standing water. When that water freezes, the ice fills the trough and then builds back up onto the lower edge of the roof. Meltwater running down from the warmer part of the roof hits that ice ridge, pools behind it, and — because shingles are designed to shed water downhill, not hold it — works backward under the shingle course and through the roof deck.
                                    </p>
                                    <p>
                                        Northeast Wisconsin runs through dozens of freeze-thaw cycles between December and March. Each one is another chance for that cycle to repeat. Clean gutters won&apos;t prevent every ice dam (attic insulation and ventilation matter just as much), but a gutter that can drain meltwater is the single cheapest piece of the defense, and a gutter full of frozen pine needles is a guaranteed anchor point.
                                    </p>
                                    <p className="font-medium text-slate-800">
                                        The fix is timing: get the final cleaning done <strong>after the last leaf drop and before the first hard freeze</strong> — in our area, late October through mid-November.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: WHEN TO SCHEDULE */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Calendar size={16} />
                            <span>Optimal Seasonal Timetable</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            When to Schedule
                        </h2>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                        <table className="w-full text-left text-sm text-slate-700">
                            <thead className="bg-navy text-white text-xs uppercase tracking-wider">
                                <tr>
                                    <th className="py-4 px-6 font-extrabold">Timing</th>
                                    <th className="py-4 px-6 font-extrabold">Who needs it</th>
                                    <th className="py-4 px-6 font-extrabold">Why</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 bg-white">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-6 font-bold text-navy whitespace-nowrap">
                                        Late spring (late May–June)
                                    </td>
                                    <td className="py-4 px-6">
                                        Fox Valley oak properties, maple and cottonwood lots
                                    </td>
                                    <td className="py-4 px-6">
                                        After tassels and seeds finish dropping — one visit instead of two
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-6 font-bold text-navy whitespace-nowrap">
                                        Late fall (late Oct–mid Nov)
                                    </td>
                                    <td className="py-4 px-6">
                                        Everyone
                                    </td>
                                    <td className="py-4 px-6 font-medium text-slate-900">
                                        The critical one. Clears the season&apos;s leaf load before freeze-up
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-6 font-bold text-navy whitespace-nowrap">
                                        Twice yearly (spring + fall)
                                    </td>
                                    <td className="py-4 px-6">
                                        Pine properties, heavy tree cover, gutter guards installed
                                    </td>
                                    <td className="py-4 px-6">
                                        Needles and fine debris defeat single-visit schedules
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="py-4 px-6 font-bold text-navy whitespace-nowrap">
                                        Quarterly
                                    </td>
                                    <td className="py-4 px-6">
                                        Commercial buildings, apartment complexes, HOA properties
                                    </td>
                                    <td className="py-4 px-6">
                                        Liability, tenant complaints, and roof warranty requirements
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base italic">
                        <strong>Not sure which you are?</strong> Send us a photo of your roofline and we&apos;ll tell you honestly — including if the answer is &quot;once a year is fine.&quot;
                    </p>
                </div>
            </section>

            {/* H2: COMMERCIAL AND MULTI-FAMILY GUTTER CLEANING */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Building2 size={16} />
                            <span>Commercial Portfolio Service</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-6">
                            Commercial and Multi-Family Gutter Cleaning
                        </h2>
                        <div className="space-y-4 text-base text-slate-700 leading-relaxed mb-8">
                            <p>
                                We maintain gutters on apartment complexes, HOA-managed communities, retail strips, churches, and office buildings across Brown, Outagamie, and Winnebago counties on recurring schedules.
                            </p>
                            <p>
                                Commercial service includes documented visit reports for your maintenance records, coordinated scheduling that avoids tenant disruption, and certificates of insurance on file before we arrive. For property managers running several buildings, we&apos;ll build a single rotating schedule across the portfolio so gutters aren&apos;t the thing that gets forgotten until a tenant calls about a leak.
                            </p>
                        </div>
                        <div>
                            <Link
                                href="/quote"
                                className="inline-flex items-center gap-3 bg-navy hover:bg-navy-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5"
                            >
                                <span>Request a Commercial Maintenance Quote</span>
                                <ArrowRight size={18} className="text-gold" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: GUTTER CLEANING PRICING */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <DollarSign size={16} />
                            <span>Transparent Rates</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Gutter Cleaning Pricing
                        </h2>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="space-y-4 text-base text-slate-700 leading-relaxed mb-8">
                            <p className="text-lg font-medium text-slate-900">
                                Gutter cleaning runs <strong>$1.00-$2.50 per linear foot</strong>, with a <strong>$150 service minimum</strong>. A typical single-story home with 150 feet of gutter lands near the bottom of that range; two-story homes, steep pitches, difficult access, and heavy pine load move toward the top of it.
                            </p>
                            <p>
                                What changes the price: total linear feet of gutter, number of stories, roof pitch and access, how long it&apos;s been since the last cleaning, and whether gutter guards need to be removed and reinstalled.
                            </p>
                            <p>
                                We quote before we start. No trip charges, no surprise add-ons, and if you&apos;re not satisfied we come back — that&apos;s what the 100% satisfaction guarantee means.
                            </p>
                            <p>
                                See full pricing across all services on our <Link href="/pricing" className="text-blue-600 hover:text-navy font-bold underline decoration-blue-300 underline-offset-4 transition-colors">pricing page</Link>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-200">
                            <Link
                                href="/quote"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base px-8 py-4 rounded-full shadow-md transition-all hover:-translate-y-0.5 uppercase tracking-wider"
                            >
                                <span>Get My Free Quote</span>
                                <ArrowRight size={18} />
                            </Link>
                            <span className="text-slate-500 font-medium">Or call</span>
                            <a
                                href="tel:+19206097085"
                                className="text-navy hover:text-blue-600 font-bold text-lg inline-flex items-center gap-2"
                            >
                                <Phone size={18} className="text-gold" />
                                <span>(920) 609-7085</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: OFTEN BOOKED TOGETHER */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Layers size={16} />
                            <span>Complete Exterior Care</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Often Booked Together
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-lg font-bold text-navy mb-2">
                                    <Link href="/services/roof-cleaning" className="hover:text-gold transition-colors">
                                        Roof Cleaning &rarr;
                                    </Link>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    If the roof is streaked black, that&apos;s <em>Gloeocapsa magma</em> algae, and the same visit that clears your gutters can treat it.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <Link href="/services/roof-cleaning" className="text-xs font-bold text-blue-600 hover:text-navy uppercase tracking-wider">
                                    Learn more
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-lg font-bold text-navy mb-2">
                                    <Link href="/services/house-washing" className="hover:text-gold transition-colors">
                                        House Washing &rarr;
                                    </Link>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Overflowing gutters leave vertical stain tracks down siding and fascia. Worth doing together.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <Link href="/services/house-washing" className="text-xs font-bold text-blue-600 hover:text-navy uppercase tracking-wider">
                                    Learn more
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <div className="text-lg font-bold text-navy mb-2">
                                    <Link href="/services/window-cleaning" className="hover:text-gold transition-colors">
                                        Window Cleaning &rarr;
                                    </Link>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Gutter overflow spots windows directly below the eave.
                                </p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <Link href="/services/window-cleaning" className="text-xs font-bold text-blue-600 hover:text-navy uppercase tracking-wider">
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* H2: FREQUENTLY ASKED QUESTIONS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10 text-center">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <HelpCircle size={16} />
                            <span>Straight Answers</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* FAQ 1 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                How much does gutter cleaning cost in Green Bay and the Fox Valley?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                Gutter cleaning in the Green Bay, Appleton, and De Pere area runs $1.00 to $2.50 per linear foot, with a $150 service minimum. Where you land in that range depends on total linear feet of gutter, number of stories, roof pitch and access, and how much debris has accumulated since the last cleaning. Homes with gutter guards that need removal and reinstallation cost more. We give you a firm quote before any work starts, with no trip charges or surprise add-ons.
                            </p>
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                How often should I have my gutters cleaned in Northeast Wisconsin?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                Twice a year is right for most Northeast Wisconsin homes: once in late spring after oak tassels and maple seeds finish dropping, and once in late fall after the final leaf drop but before the first hard freeze. Properties surrounded by pine need service two to three times a year, because pine needles shed continuously rather than seasonally and are small enough to pass through most gutter guards. Homes with minimal tree cover can often go with a single fall cleaning.
                            </p>
                        </div>

                        {/* FAQ 3 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                Will cleaning my gutters prevent ice dams?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                Clean gutters are an important part of ice dam prevention, but not a complete solution on their own. A clogged gutter holds standing water that freezes into a solid ridge along the roof edge, and meltwater then pools behind that ridge and works backward under the shingles. A clear, draining gutter removes that anchor point. However, ice dams are also driven by heat escaping into the attic, so adequate attic insulation and ventilation matter just as much. The best protection is a gutter cleaning completed after the last leaf drop and before the first hard freeze, combined with a properly insulated attic.
                            </p>
                        </div>

                        {/* FAQ 4 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                Do I still need gutter cleaning if I have gutter guards?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                Yes, though usually less often unless you have commercial-grade <Link href="/services/gutter-guards" className="text-navy font-bold hover:underline">stainless steel micro-mesh gutter guards</Link>. Standard big-box plastic or slotted covers are effective at keeping out whole leaves, but pine needles, oak tassels, shingle grit, and pollen are small enough to pass through most generic guard systems and accumulate underneath. Debris also builds up on top of the guards themselves, where it blocks water from entering the gutter at all. We remove the guards, clean the trough and downspouts, clear the guard surface, and reinstall. Most guarded homes in our area do well on an annual schedule instead of twice yearly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING CTA BLOCK */}
            {/* H2: GET YOUR GUTTERS HANDLED BEFORE WINTER */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-navy via-navy to-navy-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6">
                        <ShieldCheck size={16} />
                        <span>Protect Your Roofline &amp; Foundation</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                        Get Your Gutters Handled Before Winter
                    </h2>

                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Free quotes, straight answers, and a photo report when we&apos;re finished. Serving Green Bay, Appleton, De Pere, Neenah, Menasha, Kaukauna, Suamico, Howard, Oshkosh, Door County, and the surrounding communities.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <Link
                            href="/quote"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-9 py-4 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get My Free Gutter Quote</span>
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+19206097085"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-full transition-colors"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>Call or text (920) 609-7085</span>
                        </a>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-400 font-medium">
                        Valley Property Services · 462 S Good Hope Rd, De Pere, WI 54115 · Fully insured · Serving Northeast Wisconsin since 2020
                    </p>
                </div>
            </section>
        </main>
    );
}
