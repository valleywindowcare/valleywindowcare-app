import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
    ShieldCheck,
    Phone,
    MapPin,
    ArrowRight,
    Check,
    X,
    AlertTriangle,
    Droplets,
    TreePine,
    Sparkles,
    Snowflake,
    Wrench,
    Camera,
    Sliders,
    Layers,
    Shield,
    CheckCircle2,
    HelpCircle
} from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata: Metadata = {
    title: {
        absolute: "Stainless Steel Gutter Guards Green Bay & Fox Valley | Valley",
    },
    description: "Commercial-grade stainless steel micro-mesh gutter guards in Green Bay, Appleton & De Pere. Blocks pine needles, oak tassels & shingle grit. Free quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/gutter-guards",
    },
    openGraph: {
        title: "Stainless Steel Gutter Guards Green Bay & Fox Valley | Valley",
        description: "Commercial-grade stainless steel micro-mesh gutter guards in Green Bay, Appleton & De Pere. Blocks pine needles, oak tassels & shingle grit. Free quote.",
        url: "https://valleyexteriorpros.com/services/gutter-guards",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/gutter-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Stainless steel micro-mesh gutter guard close-up on asphalt shingle roof",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Stainless Steel Gutter Guards Green Bay & Fox Valley | Valley",
        description: "Commercial-grade stainless steel micro-mesh gutter guards in Green Bay, Appleton & De Pere. Blocks pine needles, oak tassels & shingle grit. Free quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/gutter-cleaning.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stainless Steel Micro-Mesh Gutter Guard Installation",
    "serviceType": "Gutter Guard Installation & System Reconditioning",
    "description": "Commercial-grade surgical stainless steel micro-mesh gutter guard installation in an extruded aluminum chassis across Green Bay, Appleton, De Pere, and the Fox Valley.",
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
        { "@type": "City", "name": "Neenah" },
        { "@type": "City", "name": "Menasha" },
        { "@type": "City", "name": "Howard" },
        { "@type": "City", "name": "Suamico" },
        { "@type": "City", "name": "Oshkosh" }
    ]
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://valleyexteriorpros.com"
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
            "name": "Gutter Guards",
            "item": "https://valleyexteriorpros.com/services/gutter-guards"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://valleyexteriorpros.com/services/gutter-guards#faq",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Will micro-mesh gutter guards prevent pine needles and shingle grit?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our stainless steel micro-mesh weave is tight enough to block the thinnest pine needles, oak tassels, and roof gravel shingle grit while letting heavy rainwater pass through freely."
            }
        },
        {
            "@type": "Question",
            "name": "Do gutter guards cause or prevent winter ice dams?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No gutter guard cures attic heat loss—which is the root cause of ice dams. However, our rigid aluminum frame and mesh prevent gutters from filling with frozen debris, keeping downspouts clear to drain meltwater rather than anchoring solid ice blocks on the roof edge."
            }
        },
        {
            "@type": "Question",
            "name": "Will installing gutter guards void my shingle roof warranty?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. Our system mounts directly to the front lip of the gutter and slides neatly under or alongside the drip edge without penetrating or nailing into the roof deck, keeping your manufacturer shingle warranty fully intact."
            }
        },
        {
            "@type": "Question",
            "name": "Do I ever have to clean my gutters again after installing guards?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "You will never have to scoop wet, rotted debris out of the trough or unclog downspout elbows again. In heavily wooded environments, natural wind usually blows dry leaves off the top; occasional sweeping or a quick rinse from the ground with a hose nozzle once every 2 to 3 years is all that is ever needed."
            }
        },
        {
            "@type": "Question",
            "name": "How much does professional gutter guard installation cost?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Professional installation runs based on linear footage, roof pitch, story height, and whether gutters need re-pitching or bracket reinforcement. We provide transparent, on-site quotes that include complete pre-cleaning and gutter tune-up before installation."
            }
        }
    ]
};

export default function GutterGuardsPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-800">
            {/* INJECT SCHEMA */}
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
            <section className="relative w-full min-h-[620px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/gutter-cleaning.webp"
                        alt="Stainless steel micro-mesh gutter guard close-up on asphalt shingle roof"
                        fill
                        priority={true}
                        quality={90}
                        sizes="100vw"
                        className="object-cover opacity-25"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy/95 via-navy/85 to-navy z-10" />

                <div className="container mx-auto px-4 relative z-20 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6">
                        <ShieldCheck size={16} />
                        <span>Surgical-Grade Micro-Mesh Protection</span>
                    </div>

                    {/* H1 */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md text-white mb-6">
                        Stainless Steel Micro-Mesh Gutter Guard Installation in Green Bay &amp; the Fox Valley
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Permanent protection engineered for Wisconsin’s heaviest tree canopies and harshest winters. We install commercial-grade surgical stainless steel mesh in an extruded aluminum chassis—keeping out pine needles, oak tassels, and roof grit without overflowing in summer storms.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote?service=gutter-guards"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Free Gutter Guard Quote</span>
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

                    {/* Trust Bar */}
                    <div className="pt-4 text-xs sm:text-sm text-slate-300 font-semibold tracking-wide border-t border-white/15 inline-block max-w-3xl">
                        Serving Northeast Wisconsin Since 2020 · $2M Fully Insured · 100% Surface-Safe Guarantee
                    </div>
                </div>
            </section>

            {/* SECTION 1: WHY STAINLESS STEEL MICRO-MESH BEATS GENERIC GUARDS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Layers size={16} />
                            <span>Precision Engineering</span>
                        </div>
                        {/* H2 */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            The Difference Between True Protection and Trapped Debris
                        </h2>
                    </div>

                    <div className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed mb-10">
                        <p>
                            Most big-box plastic screens, foam inserts, and slotted reverse-curve helmet systems fail in Northeast Wisconsin. Slotted covers allow thin pine needles and stringy oak tassels to slip right through, while helmet systems sheet heavy water over the edge during intense thunderstorms.
                        </p>
                        <p>
                            Generic foam inserts quickly degrade into sponge-like debris filters that encourage weed and moss growth inside the trough. Reverse-curve systems rely on water surface tension, which easily breaks during torrential midwestern downpours, dumping thousands of gallons of rainwater directly against your basement walls. By pairing <strong>surgical-grade 316 stainless steel micro-mesh</strong> with an <strong>extruded aluminum chassis</strong>, our system captures every drop while shedding all tree debris naturally.
                        </p>
                    </div>

                    {/* Comparison Feature Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gold/15 text-navy flex items-center justify-center mb-4">
                                <ShieldCheck size={26} className="text-gold" />
                            </div>
                            <h3 className="text-xl font-black text-navy mb-3">
                                Surgical-Grade Stainless Steel Mesh
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                Woven so densely that pine needles, roof shingle grit, maple helicopters, and seeds cannot penetrate—only water enters the gutter trough.
                            </p>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gold/15 text-navy flex items-center justify-center mb-4">
                                <Sliders size={26} className="text-gold" />
                            </div>
                            <h3 className="text-xl font-black text-navy mb-3">
                                Extruded Aluminum Frame
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                Rigid structural support that will not warp under summer heat or sag under winter snow loads like PVC, foam, or thin plastic guards.
                            </p>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gold/15 text-navy flex items-center justify-center mb-4">
                                <CheckCircle2 size={26} className="text-gold" />
                            </div>
                            <h3 className="text-xl font-black text-navy mb-3">
                                Low-Profile Fascia Mount
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                Installs flush under the roofline without nailing through or voiding your asphalt shingle roof warranty, keeping manufacturer guidelines intact.
                            </p>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-gold/15 text-navy flex items-center justify-center mb-4">
                                <Droplets size={26} className="text-gold" />
                            </div>
                            <h3 className="text-xl font-black text-navy mb-3">
                                High-Volume Water Capacity
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                Channels over 60 inches of rainfall per hour, eliminating storm overflow on foundation landscape beds, walkways, and walkout basement patios.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: ENGINEERED FOR WISCONSIN WINTERS & TREE CANOPY */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <TreePine size={16} />
                            <span>Climate &amp; Foliage Defense</span>
                        </div>
                        {/* H2 */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Built for Pine Needles, Oak Tassels &amp; Sub-Zero Freezes
                        </h2>
                    </div>

                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl">
                        Properties in Suamico, Howard, and wooded lots across the Fox Valley face debris that defeats standard guards:
                    </p>

                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                                <TreePine size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-navy mb-2">
                                    Continuous Pine Needle Shedding
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    White and red pines shed needle clusters year-round across Suamico, Howard, and Hobart. Standard slotted guards have openings large enough for needles to spear straight through and establish a tangled dam at downspout outlets. Micro-mesh prevents needles from penetrating or nesting in elbows entirely.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                                <Sparkles size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-navy mb-2">
                                    Spring Oak Tassels &amp; Pollen Ropes
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    May catkins in Appleton, Neenah, and older Green Bay neighborhoods drop heavily over a 2-week span. When mixed with pine pollen, they form thick, wet felt ropes that choke standard gutter screens. On our micro-mesh, oak tassels dry quickly in the sun and simply blow away with natural crosswinds.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
                            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                                <Snowflake size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-navy mb-2">
                                    Heavy Winter Snow &amp; Ice Load Support
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Northeast Wisconsin winters put immense frozen weight on gutter runs. The extruded aluminum chassis acts as structural reinforcement for your gutter trough, preventing heavy ice and snow pack from buckling the front lip or pulling the gutters away from the fascia boards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: FULL-SYSTEM INSTALLATION PROCESS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Wrench size={16} />
                            <span>System Restoration First</span>
                        </div>
                        {/* H2 */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            We Don’t Just Cover Dirty Gutters—We Recondition Them
                        </h2>
                    </div>

                    <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
                        Installing guards over misaligned, leaking, or clogged gutters creates long-term structural moisture damage. Every installation by Valley Property Services is preceded by a complete trough renewal and tune-up.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        {/* Step 1 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 relative">
                            <span className="text-4xl font-black text-gold/40 absolute top-4 right-6">01</span>
                            <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold text-base mb-4">
                                1
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-navy mb-2">
                                Comprehensive Cleanout &amp; Downspout Hydro-Flush
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                We remove all accumulated sludge, shingle grit, and decayed organic matter by hand, then run high-volume water through all downspouts and underground drains to verify 100% clean discharge. (Learn more about our dedicated{" "}
                                <Link href="/services/gutter-cleaning" className="text-navy font-bold hover:underline">
                                    gutter cleaning process
                                </Link>).
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 relative">
                            <span className="text-4xl font-black text-gold/40 absolute top-4 right-6">02</span>
                            <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold text-base mb-4">
                                2
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-navy mb-2">
                                Pitch Alignment &amp; Fascia Re-Securing
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                We inspect slope angle for proper drainage toward outlets, replace failed spike-and-ferrule pins with heavy-duty hidden screw hangers driven into structural rafter tails, and reseal leaking corner miters with commercial grade sealant.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 relative">
                            <span className="text-4xl font-black text-gold/40 absolute top-4 right-6">03</span>
                            <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold text-base mb-4">
                                3
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-navy mb-2">
                                Precision Custom Fitting
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                Each guard run is measured, miter-cut at roof valleys, and mechanically riveted securely to the front gutter lip and rear chassis. This prevents guard displacement during intense freeze-thaw expansion cycles.
                            </p>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 relative">
                            <span className="text-4xl font-black text-gold/40 absolute top-4 right-6">04</span>
                            <div className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center font-bold text-base mb-4">
                                4
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-navy mb-2">
                                Post-Installation Water Flow Test &amp; Photo Report
                            </h3>
                            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                We run flow tests across every section to prove zero overflow and full downspout intake, then supply a digital before-and-after photo report verifying workmanship for your records.
                            </p>
                        </div>
                    </div>

                    {/* Synergy Box */}
                    <div className="bg-navy text-white p-8 rounded-3xl relative overflow-hidden">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="space-y-2">
                                <span className="text-gold font-bold uppercase tracking-wider text-xs">Total Exterior Protection</span>
                                <h3 className="text-xl sm:text-2xl font-black">Combine with Low-Pressure Roof Cleaning</h3>
                                <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
                                    Eliminate moss and algae spores before installing guards. We soft wash asphalt shingles safely to extend shingle life and protect gutter flow. Explore our{" "}
                                    <Link href="/services/roof-cleaning" className="text-gold font-bold underline hover:text-white transition-colors">
                                        roof cleaning services
                                    </Link>.
                                </p>
                            </div>
                            <Link
                                href="/quote?service=gutter-guards"
                                className="shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy font-black px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all"
                            >
                                <span>Get Bundle Quote</span>
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: VISUAL ASSETS & 3-COLUMN COMPARISON CARD */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Shield size={16} />
                            <span>System Comparison</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Comparing Gutter Protection Options
                        </h2>
                        <p className="text-slate-600 text-base mt-2">
                            See how commercial-grade surgical stainless steel micro-mesh outperforms big-box and helmet designs under Wisconsin weather.
                        </p>
                    </div>

                    {/* 3-Column Comparison Table */}
                    <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden mb-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                            {/* Column 1: Cheap Plastic Mesh */}
                            <div className="p-6 sm:p-8 bg-slate-50/70 flex flex-col">
                                <div className="text-center pb-6 border-b border-slate-200">
                                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full inline-block mb-2">
                                        Big Box Plastic Screens
                                    </span>
                                    <h3 className="text-xl font-black text-navy">Plastic / Slotted Mesh</h3>
                                    <p className="text-xs text-slate-500 mt-1">PVC, foam inserts &amp; perforated vinyl</p>
                                </div>
                                <ul className="space-y-4 text-xs sm:text-sm text-slate-600 py-6 flex-1">
                                    <li className="flex items-start gap-2">
                                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                        <span><strong>Pine Needles:</strong> Spear into holes, clogging openings within months.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                        <span><strong>Oak Tassels:</strong> Mat into dense felt plugs across the surface.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                        <span><strong>Water Flow:</strong> Pollen and silt seal openings, causing heavy bypass.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                        <span><strong>Snow &amp; Ice:</strong> Cracks, warps, and sags under heavy winter weight.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <X size={16} className="text-rose-500 shrink-0 mt-0.5" />
                                        <span><strong>Shingle Grit:</strong> Passes through and silts up downspouts.</span>
                                    </li>
                                </ul>
                                <div className="text-center pt-4 border-t border-slate-200 text-xs text-rose-600 font-bold">
                                    Requires frequent replacement
                                </div>
                            </div>

                            {/* Column 2: Reverse Curve Helmets */}
                            <div className="p-6 sm:p-8 bg-slate-50/70 flex flex-col">
                                <div className="text-center pb-6 border-b border-slate-200">
                                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full inline-block mb-2">
                                        Reverse Curve Systems
                                    </span>
                                    <h3 className="text-xl font-black text-navy">Solid Gutter Helmets</h3>
                                    <p className="text-xs text-slate-500 mt-1">Surface tension curved metal hoods</p>
                                </div>
                                <ul className="space-y-4 text-xs sm:text-sm text-slate-600 py-6 flex-1">
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                        <span><strong>Pine Needles:</strong> Wash directly into the horizontal nose slot.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                        <span><strong>Oak Tassels:</strong> Adhere to damp curved metal and wash inside.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                        <span><strong>Water Flow:</strong> Torrential summer rain sheets directly over the nose.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                        <span><strong>Warranty Risk:</strong> Often nailed through shingles, voiding warranties.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                        <span><strong>Bee Nests:</strong> Open horizontal gap creates ideal wasp harborage.</span>
                                    </li>
                                </ul>
                                <div className="text-center pt-4 border-t border-slate-200 text-xs text-amber-700 font-bold">
                                    High cost, frequent storm overflow
                                </div>
                            </div>

                            {/* Column 3: Stainless Steel Micro-Mesh */}
                            <div className="p-6 sm:p-8 bg-navy text-white flex flex-col relative shadow-xl">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy font-black text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                                    Engineered for Wisconsin
                                </div>
                                <div className="text-center pb-6 border-b border-white/15">
                                    <span className="text-xs font-bold uppercase tracking-wider text-gold bg-gold/20 px-3 py-1 rounded-full inline-block mb-2">
                                        Valley Pro Recommendation
                                    </span>
                                    <h3 className="text-xl font-black text-white">Stainless Steel Micro-Mesh</h3>
                                    <p className="text-xs text-slate-300 mt-1">316 Surgical Mesh + Extruded Chassis</p>
                                </div>
                                <ul className="space-y-4 text-xs sm:text-sm text-slate-200 py-6 flex-1">
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                                        <span><strong>Pine Needles:</strong> 100% blocked; cannot penetrate tight weave.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                                        <span><strong>Oak Tassels:</strong> Dry quickly on mesh surface and blow away naturally.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                                        <span><strong>Water Flow:</strong> Handles 60+ inches of rainfall/hr without overshoot.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                                        <span><strong>Snow &amp; Ice:</strong> Extruded aluminum adds structural box rigidity.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check size={16} className="text-gold shrink-0 mt-0.5" />
                                        <span><strong>Roof Warranty:</strong> Mounts to fascia &amp; gutter lip without roof nails.</span>
                                    </li>
                                </ul>
                                <div className="text-center pt-4 border-t border-white/15 text-xs text-gold font-bold">
                                    Permanent Commercial Protection
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Responsive Image Cards with Alt Tags */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="relative h-64 w-full bg-slate-900">
                                <Image
                                    src="/images/portfolio/gutter-cleaning.webp"
                                    alt="Stainless steel micro-mesh gutter guard close-up on asphalt shingle roof"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-black text-navy text-lg mb-1">Micro-Mesh Filtration Close-Up</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Stainless steel micro-mesh bead-blasting water into an aluminum gutter trough along an asphalt shingle roofline with zero overflow.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                            <div className="relative h-64 w-full bg-slate-900">
                                <Image
                                    src="/images/portfolio/gutter-cleaning.jpg.webp"
                                    alt="Gutter realignment and bracket reinforcement before guard installation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-black text-navy text-lg mb-1">Structural Bracket Reinforcement</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Technician securing heavy-duty hidden screw hangers on an aluminum gutter run before precision micro-mesh custom fitting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: ADVANCED SCHEMA & STRUCTURAL FAQS */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100" id="faq">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <HelpCircle size={16} />
                            <span>Transparent Answers</span>
                        </div>
                        {/* H2 */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {/* FAQ 1 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                Will micro-mesh gutter guards prevent pine needles and shingle grit?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                Yes. Our stainless steel micro-mesh weave is tight enough to block the thinnest pine needles, oak tassels, and roof gravel shingle grit while letting heavy rainwater pass through freely.
                            </p>
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                Do gutter guards cause or prevent winter ice dams?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                No gutter guard cures attic heat loss—which is the root cause of ice dams. However, our rigid aluminum frame and mesh prevent gutters from filling with frozen debris, keeping downspouts clear to drain meltwater rather than anchoring solid ice blocks on the roof edge.
                            </p>
                        </div>

                        {/* FAQ 3 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                Will installing gutter guards void my shingle roof warranty?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                No. Our system mounts directly to the front lip of the gutter and slides neatly under or alongside the drip edge without penetrating or nailing into the roof deck, keeping your manufacturer shingle warranty fully intact.
                            </p>
                        </div>

                        {/* FAQ 4 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                Do I ever have to clean my gutters again after installing guards?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                You will never have to scoop wet, rotted debris out of the trough or unclog downspout elbows again. In heavily wooded environments, natural wind usually blows dry leaves off the top; occasional sweeping or a quick rinse from the ground with a hose nozzle once every 2 to 3 years is all that is ever needed.
                            </p>
                        </div>

                        {/* FAQ 5 */}
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                How much does professional gutter guard installation cost?
                            </h3>
                            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                Professional installation runs based on linear footage, roof pitch, story height, and whether gutters need re-pitching or bracket reinforcement. We provide transparent, on-site quotes that include complete pre-cleaning and gutter tune-up before installation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING CTA BLOCK */}
            <section className="py-20 lg:py-24 bg-gradient-to-b from-navy via-navy to-navy-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6">
                        <ShieldCheck size={16} />
                        <span>Guaranteed Lifetime Performance</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                        Protect Your Home With Stainless Steel Micro-Mesh
                    </h2>

                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Schedule an on-site assessment across Green Bay, Appleton, De Pere, Neenah, Suamico, and the Fox Valley. Complete gutter tune-up included with every installation.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <Link
                            href="/quote?service=gutter-guards"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-9 py-5 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Free Gutter Guard Quote</span>
                            <ArrowRight size={20} />
                        </Link>
                        <a
                            href="tel:+19206097085"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-base sm:text-lg px-8 py-5 rounded-full transition-colors"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>Call (920) 609-7085</span>
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-slate-300 font-semibold">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            316 Surgical Stainless Steel
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            Extruded Aluminum Box Chassis
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gold"></span>
                            Roof Warranty Safe Mount
                        </span>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID & REVIEWS */}
            <ServiceGrid />
            <ReviewSlider />
        </main>
    );
}
