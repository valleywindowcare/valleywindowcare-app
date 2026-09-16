import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ShieldCheck,
    CheckCircle2,
    Star,
    Phone,
    MapPin,
    AlertTriangle,
    Droplets,
    TreePine,
    Home,
    Sparkles,
    CheckSquare,
    ArrowRight,
    Clock,
    DollarSign
} from "lucide-react";
import FAQSchema from "@/components/FAQSchema";
import FAQAccordion from "@/components/FAQAccordion";
import GutterQuoteModal, { GutterCTAButton } from "@/components/GutterQuoteModal";

export const metadata: Metadata = {
    title: {
        absolute: "Professional Gutter Cleaning & Downspout Flushing | Green Bay & Fox Valley WI",
    },
    description: "Northeast Wisconsin's top-rated gutter cleaning & downspout flushing service. Prevent ice dams, pine needle blockages, and basement water intrusion in Green Bay, Appleton & De Pere.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/gutter-cleaning",
    },
    openGraph: {
        title: "Professional Gutter Cleaning & Downspout Flushing | Green Bay & Fox Valley WI",
        description: "Northeast Wisconsin's top-rated gutter cleaning & downspout flushing service. Prevent ice dams, pine needle blockages, and basement water intrusion in Green Bay, Appleton & De Pere.",
        url: "https://valleyexteriorpros.com/services/gutter-cleaning",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/gutter-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Professional Gutter Cleaning and Downspout Flushing in Green Bay and Fox Valley",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Professional Gutter Cleaning & Downspout Flushing | Green Bay & Fox Valley WI",
        description: "Northeast Wisconsin's top-rated gutter cleaning & downspout flushing service. Prevent ice dams, pine needle blockages, and basement water intrusion in Green Bay, Appleton & De Pere.",
        images: ["https://valleyexteriorpros.com/images/portfolio/gutter-cleaning.webp"],
    },
};

const gutterFaqs = [
    {
        question: "How often should gutters be cleaned in Wisconsin?",
        answer: "In Wisconsin, gutters should be professionally cleaned at least twice a year to handle the state's extreme seasonal foliage and climate shifts. The first critical service is late-spring seed drop (late May to June), when heavy oak tassels, helicopter maple seeds, and spring blossom debris choke downspout entry points. The second, and most vital, cleanout is late-autumn oak and pine cleanout (late October to November), once mature deciduous trees shed their leaves and evergreens drop needles. Cleaning gutters thoroughly before the first sustained winter freeze ensures melting snow can drain freely, preventing catastrophic ice dams from forming along your roofline."
    },
    {
        question: "Do you flush the downspouts as well?",
        answer: "Yes, absolutely. Clearing the horizontal gutter troughs is only half the job. Every Valley Property Services gutter cleaning service includes comprehensive downspout flow verification. Our crew conducts complete ground-level line checks and flushes every vertical downpipe with pressurized pure water to verify unrestricted flow. We clear stubborn debris jammed in tight downspout elbow joints and verify discharge through ground-level splash blocks or underground storm drain exits, ensuring roof water is safely channeled away from your foundation."
    },
    {
        question: "Do I need to be home for gutter cleaning?",
        answer: "No, you do not need to be home during your gutter cleaning service. We provide a seamless outside-only service designed for total homeowner convenience. As long as our technicians have exterior perimeter access, outdoor spigots are operational, and pets remain indoors, we can execute the full cleanout while you are away. Upon completion, we provide complete transparency by emailing you detailed digital before-and-after photos alongside a digital invoice with secure online payment options."
    },
    {
        question: "How do you protect fragile aluminum gutters from ladder damage?",
        answer: "We never lean heavy extension ladders directly against your aluminum gutters, which easily causes bent lips, warped pitch, and permanent dents. Our technicians exclusively utilize professional padded ladder standoff stabilizer arms. These rest the ladder's weight safely against your roof deck or exterior wall studs, keeping ladders suspended safely away from your gutter troughs."
    },
    {
        question: "What happens to the debris removed from my gutters?",
        answer: "We guarantee a 100% mess-free clean-up. Unlike amateur operators who use high-powered leaf blowers that splatter black gutter sludge across your siding, windows, and landscaping, our crew hand-clears debris directly into heavy-duty contractor bags at roof level. All organic sludge, pine needles, and shingle grit are bagged, hauled off-site, and responsibly composted."
    }
];

export default function GutterCleaningPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Gutter Cleaning & Downspout Flushing",
        "serviceType": "Gutter Cleaning, Downspout Flushing & Debris Removal",
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
            { "@type": "City", "name": "Neenah" }
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
                        "name": "Gutter Inspection & Minor Alignment Tune-Up"
                    }
                }
            ]
        }
    };

    const breadcrumbLd = {
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

    return (
        <main className="min-h-screen bg-white">
            {/* JSON-LD Schemas */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
            />
            <FAQSchema faqs={gutterFaqs} />

            {/* HERO SECTION */}
            <section className="relative w-full min-h-[640px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/gutter-cleaning.webp"
                        alt="Professional Gutter Cleaning & Downspout Flushing in Green Bay & Fox Valley"
                        fill
                        priority={true}
                        fetchPriority="high"
                        quality={90}
                        sizes="100vw"
                        className="object-cover opacity-35"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy z-10"></div>

                <div className="container mx-auto px-4 relative z-20 max-w-5xl text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6">
                        <Sparkles size={16} />
                        <span>Northeast Wisconsin Foundation &amp; Roofline Protection</span>
                    </div>

                    {/* H1 */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight drop-shadow-md text-white mb-6">
                        Professional Gutter Cleaning &amp; Downspout Flushing in Green Bay &amp; Fox Valley
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Protect your home from winter ice dams, pine needle blockages, and costly basement water intrusion. Our De Pere-based crew provides meticulous hand clearing, pure water downspout flushing, and 100% bagged debris removal.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-bold text-white mb-10">
                        <div className="bg-slate-900/90 text-white border border-slate-700/60 px-4 py-2 rounded-full shadow-md inline-flex items-center gap-2">
                            <ShieldCheck className="text-gold" size={18} />
                            <span>Licensed &amp; $2M Insured</span>
                        </div>
                        <div className="bg-slate-900/90 text-white border border-slate-700/60 px-4 py-2 rounded-full shadow-md inline-flex items-center gap-2">
                            <CheckCircle2 className="text-gold" size={18} />
                            <span>100% Mess-Free Guarantee</span>
                        </div>
                        <div className="bg-slate-900/90 text-white border border-slate-700/60 px-4 py-2 rounded-full shadow-md inline-flex items-center gap-2">
                            <Star className="text-gold fill-gold" size={18} />
                            <span>4.9★ (119+ Local Reviews)</span>
                        </div>
                    </div>

                    {/* Primary CTA Button */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <GutterCTAButton className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider">
                            <span>Book Your Free Gutter Inspection &amp; Quote</span>
                            <ArrowRight size={20} />
                        </GutterCTAButton>
                        <a
                            href="tel:920-609-7085"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base px-6 py-4 rounded-full transition-colors"
                        >
                            <Phone size={18} className="text-gold" />
                            <span>Call (920) 609-7085</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* SECTION 1: THE PROBLEM */}
            <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-rose-600 font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-3">
                            <AlertTriangle size={18} />
                            <span>Critical Northeast Wisconsin Property Risks</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                            The Problem: Why Clogged Gutters Threaten Northeast Wisconsin Foundations
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                            Gutters are your property&apos;s first line of defense against catastrophic water damage. When seasonal debris obstructs water flow in Northeast Wisconsin, the compounding effects of heavy rainfall and sub-zero temperatures rapidly threaten your roof deck, fascia, and structural foundation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Ice Dam Prevention */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                                <Droplets size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3 leading-snug">
                                Winter Ice Dam Prevention
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                                In Northeast Wisconsin, harsh winter freeze-thaw cycles turn clogged gutters into catastrophic ice dams. When trapped water and wet foliage freeze solid inside troughs, melting snow from warm attic spaces backs up underneath asphalt shingles. This trapped moisture rots roof sheathing, soaks insulation, stains interior ceilings, and exerts extreme weight that wrenches aluminum gutters away from fascia boards.
                            </p>
                        </div>

                        {/* Pine Needle Blockages */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                                <TreePine size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3 leading-snug">
                                Pine Needle Blockages
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                                Across Green Bay, Howard, and Fox Valley communities, mature white pines, hemlocks, and evergreens shed dense needles that interlace with spring seed pods into thick, felt-like barriers. These compact fibrous mats easily bypass standard gutter screens, cementing themselves directly over downspout elbow drop outlets and creating flash overflows during severe Wisconsin summer thunderstorms.
                            </p>
                        </div>

                        {/* Basement Water Intrusion */}
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                                <Home size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy mb-3 leading-snug">
                                Basement Water Intrusion
                            </h3>
                            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                                An average home sheds over 1,500 gallons of water during a 1-inch rainfall. When clogged troughs overflow, torrential runoff pours straight against your foundation. The regional clay soils around Green Bay and Appleton rapidly saturate, creating immense hydrostatic pressure that forces water through subterranean foundation fissures, causing flooded basements, hazardous mold, and costly structural movement.
                            </p>
                        </div>
                    </div>

                    {/* Mid-Content Highlight Box */}
                    <div className="mt-12 p-6 sm:p-8 bg-amber-50/80 border-l-4 border-amber-500 rounded-r-2xl">
                        <div className="flex items-start gap-4">
                            <AlertTriangle className="text-amber-600 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-lg font-bold text-navy mb-1">
                                    Avoid Costly Foundation Excavations and Shingle Warranties
                                </h4>
                                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                                    A routine preventative gutter cleaning schedule costs a fraction of the tens of thousands required for foundation tuckpointing, drain tile replacement, or mold remediation. Keeping downspouts flowing freely ensures roof runoff exits safely away from your building envelope.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: OUR PROCESS */}
            <section className="py-20 lg:py-28 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-3">
                            <CheckSquare size={18} />
                            <span>Systematic Methodology</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                            Our Process: Complete Debris Removal, Downspout Flow Verification, and Mess-Free Clean-up
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                            We don&apos;t use noisy leaf blowers that blast muddy debris onto your clean siding, windows, and manicured landscaping. Our certified technicians follow a meticulous, white-glove protocol engineered to leave your gutters free-flowing and your grounds pristine.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex gap-6">
                            <div className="w-12 h-12 bg-navy text-gold font-black rounded-2xl flex items-center justify-center shrink-0 text-xl">
                                01
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">
                                    Property Standoff &amp; Ladder Protection
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                    We protect your home before climbing. Our crew equips ladders with heavy-duty padded standoff arms that rest directly against the solid roof decking, ensuring zero weight touches your fragile aluminum gutter rims and preventing dents or pitch alterations.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex gap-6">
                            <div className="w-12 h-12 bg-navy text-gold font-black rounded-2xl flex items-center justify-center shrink-0 text-xl">
                                02
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">
                                    Meticulous Hand Clearing
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                    Technicians meticulously hand-scoop every ounce of packed organic muck, decomposing tree sludge, interlocking pine needles, and heavy shingle grit from every linear foot of your gutter channels, ensuring water channels are completely empty.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex gap-6">
                            <div className="w-12 h-12 bg-navy text-gold font-black rounded-2xl flex items-center justify-center shrink-0 text-xl">
                                03
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">
                                    Bagged Debris Removal &amp; Mess-Free Clean-up
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                    All removed sludge is placed directly into heavy-duty contractor bags right at the roofline. We never fling gutter grime down onto decks, flowerbeds, or walkways. All collected foliage is hauled completely away for off-site organic composting.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white p-8 rounded-3xl border border-slate-200/60 shadow-sm flex gap-6">
                            <div className="w-12 h-12 bg-navy text-gold font-black rounded-2xl flex items-center justify-center shrink-0 text-xl">
                                04
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">
                                    Pure Water Downspout Flow Verification
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                                    We conclude with pure water downspout flushing. Water is run down each vertical pipe to clear stubborn elbow blockages and verify clean, unrestricted flow down to ground level and into subterranean drainage pipes before sign-off.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Banner inside Process */}
                    <div className="mt-14 p-8 bg-gradient-to-r from-navy via-[#1f3d6b] to-navy rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                        <div>
                            <span className="text-gold uppercase tracking-widest text-xs font-black block mb-1">Zero Hassle Scheduling</span>
                            <h3 className="text-2xl font-black">Ready for spot-free, free-flowing gutters?</h3>
                            <p className="text-slate-200 text-sm mt-1">Get an exact linear-foot estimate with zero high-pressure sales.</p>
                        </div>
                        <GutterCTAButton className="shrink-0 bg-gold hover:bg-gold-light text-navy font-black py-4 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 text-base uppercase tracking-wider">
                            Book Your Free Gutter Inspection &amp; Quote
                        </GutterCTAButton>
                    </div>
                </div>
            </section>

            {/* SECTION 3: SERVICE COVERAGE */}
            <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-3">
                            <MapPin size={18} />
                            <span>Regional Hub &amp; Operations</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                            Service Coverage: Serving De Pere, Green Bay, Appleton, Howard, and Surrounding Communities
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                            Centrally operating from our physical headquarters in De Pere, Wisconsin, Valley Property Services dispatches dedicated exterior maintenance crews across Brown, Outagamie, and Calumet counties every day.
                        </p>
                    </div>

                    {/* Contextual Narrative Hub */}
                    <div className="bg-slate-50/80 border-l-4 border-gold p-8 sm:p-10 rounded-r-3xl shadow-sm mb-12">
                        <h3 className="text-2xl font-extrabold text-navy mb-4 flex items-center gap-3">
                            <span className="w-3 h-3 bg-gold rounded-full shrink-0"></span>
                            Local Fox Valley Exterior Drainage Experts
                        </h3>
                        <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                            <p>
                                Headquartered right here at <strong>462 S Good Hope Rd in De Pere</strong>, we take immense pride in protecting homes and commercial facilities across Northeast Wisconsin. For homeowners throughout <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">Green Bay</Link>, our specialized teams provide fast, dependable gutter cleaning and downspout flushing to clear bayfront humidity grime, damp organic sludge, and pine needles before harsh winter freeze-thaw cycles set in.
                            </p>
                            <p>
                                Across Outagamie County and the Fox Cities, we serve residential properties throughout <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">Appleton</Link>, Neenah, Kimberly, and Little Chute. Properties nestled beneath mature tree canopies in Appleton rely on our scheduled seasonal cleanouts to safeguard roof eaves and prevent costly water pooling around aging foundation walls.
                            </p>
                            <p>
                                We also maintain comprehensive daily route coverage for growing suburban neighborhoods in <strong>Howard</strong>, <strong>Suamico</strong>, <strong>Allouez</strong>, <strong>Bellevue</strong>, and <strong>Ashwaubenon</strong>. Whether your residence features steep multi-pitch rooflines in Howard or historical architecture in De Pere, our certified technicians arrive equipped with specialized ladder standoffs and high-volume flushing equipment to guarantee unimpeded storm runoff.
                            </p>
                        </div>
                    </div>

                    {/* Cities Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
                        <Link href="/service-areas/green-bay" className="p-4 bg-white border border-slate-200 hover:border-gold rounded-2xl shadow-sm hover:shadow transition-all group">
                            <span className="block font-bold text-navy group-hover:text-gold transition-colors">Green Bay, WI</span>
                            <span className="text-xs text-slate-500 font-medium">Brown County</span>
                        </Link>
                        <Link href="/service-areas/appleton" className="p-4 bg-white border border-slate-200 hover:border-gold rounded-2xl shadow-sm hover:shadow transition-all group">
                            <span className="block font-bold text-navy group-hover:text-gold transition-colors">Appleton, WI</span>
                            <span className="text-xs text-slate-500 font-medium">Outagamie County</span>
                        </Link>
                        <Link href="/service-areas/de-pere" className="p-4 bg-white border border-slate-200 hover:border-gold rounded-2xl shadow-sm hover:shadow transition-all group">
                            <span className="block font-bold text-navy group-hover:text-gold transition-colors">De Pere, WI</span>
                            <span className="text-xs text-slate-500 font-medium">HQ &amp; Storefront</span>
                        </Link>
                        <Link href="/service-areas/neenah" className="p-4 bg-white border border-slate-200 hover:border-gold rounded-2xl shadow-sm hover:shadow transition-all group">
                            <span className="block font-bold text-navy group-hover:text-gold transition-colors">Neenah, WI</span>
                            <span className="text-xs text-slate-500 font-medium">Winnebago County</span>
                        </Link>
                        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <span className="block font-bold text-navy">Howard, WI</span>
                            <span className="text-xs text-slate-500 font-medium">Brown County</span>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <span className="block font-bold text-navy">Suamico, WI</span>
                            <span className="text-xs text-slate-500 font-medium">Brown County</span>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <span className="block font-bold text-navy">Allouez, WI</span>
                            <span className="text-xs text-slate-500 font-medium">Brown County</span>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                            <span className="block font-bold text-navy">Bellevue, WI</span>
                            <span className="text-xs text-slate-500 font-medium">Brown County</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: PRICING GUIDE */}
            <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-3">
                            <DollarSign size={18} />
                            <span>Transparent Investment</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight">
                            Straightforward Linear-Foot Pricing
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Clear, upfront estimates based on your home&apos;s exact linear footage and roof complexity.
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
                        <div className="grid sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                            <div className="pt-4 sm:pt-0 sm:px-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Standard Rate</span>
                                <span className="text-3xl sm:text-4xl font-black text-navy">$1.00 - $2.50</span>
                                <span className="text-sm font-semibold text-slate-500 block mt-1">Per Linear Foot</span>
                                <p className="text-xs text-slate-400 mt-2">Calculated by total perimeter gutter footage.</p>
                            </div>
                            <div className="pt-6 sm:pt-0 sm:px-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Service Minimum</span>
                                <span className="text-3xl sm:text-4xl font-black text-navy">$150.00</span>
                                <span className="text-sm font-semibold text-slate-500 block mt-1">Baseline Setup</span>
                                <p className="text-xs text-slate-400 mt-2">Includes standoff ladder setup &amp; full downspout flushing.</p>
                            </div>
                            <div className="pt-6 sm:pt-0 sm:px-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Cost Factors</span>
                                <span className="text-xl sm:text-2xl font-black text-navy">Roof Pitch &amp; Height</span>
                                <span className="text-sm font-semibold text-slate-500 block mt-1">Stories &amp; Guard Removal</span>
                                <p className="text-xs text-slate-400 mt-2">Steep access or underground line unclogging.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
            <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-3">
                            <Clock size={18} />
                            <span>Helpful Guidance</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                            Have questions about our Wisconsin gutter cleaning and downspout flushing protocols? Here are straightforward answers from our local team.
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <FAQAccordion faqs={gutterFaqs} />
                </div>
            </section>

            {/* FINAL CALL TO ACTION */}
            <section className="py-20 lg:py-28 bg-gradient-to-b from-navy to-[#112440] text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-6">
                        <ShieldCheck size={16} />
                        <span>Protect Your Investment Today</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                        Ready to Protect Your Roofline &amp; Foundation?
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                        Prevent costly basement water seepage and winter ice dams before the next seasonal storm. Our De Pere team is standing by to deliver transparent pricing and reliable service.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <GutterCTAButton className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-lg px-10 py-5 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider">
                            <span>Book Your Free Gutter Inspection &amp; Quote</span>
                            <ArrowRight size={22} />
                        </GutterCTAButton>
                        <a
                            href="tel:920-609-7085"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-lg px-8 py-5 rounded-full transition-colors"
                        >
                            <Phone size={20} className="text-gold" />
                            <span>(920) 609-7085</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Interactive Quote Modal Triggered by Buttons */}
            <GutterQuoteModal />
        </main>
    );
}
