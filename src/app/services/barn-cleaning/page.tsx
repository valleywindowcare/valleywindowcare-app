import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
    ShieldCheck,
    Phone,
    MapPin,
    ArrowRight,
    Sparkles,
    Building2,
    Warehouse,
    Tractor,
    Droplets,
    Flame,
    ShieldAlert,
    Gauge,
    Shield
} from "lucide-react";
import ServiceGrid from "@/components/ServiceGrid";

const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));

export const metadata: Metadata = {
    title: {
        absolute: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
    },
    description: "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/services/barn-cleaning",
    },
    openGraph: {
        title: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
        description: "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
        url: "https://valleyexteriorpros.com/services/barn-cleaning",
        siteName: "Valley Property Services",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://valleyexteriorpros.com/images/portfolio/commercial-roof-cleaning.webp",
                width: 1200,
                height: 630,
                alt: "Agricultural & Dairy Barn Cleaning in the Fox Valley and Northeast Wisconsin",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Wisconsin Barn Cleaning & Roof Soft Washing | Valley Pro",
        description: "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
        images: ["https://valleyexteriorpros.com/images/portfolio/commercial-roof-cleaning.webp"],
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Agricultural & Dairy Barn Cleaning in the Fox Valley and Northeast Wisconsin",
    "serviceType": "Agricultural Barn Soft Washing & Interior Facility Sanitation",
    "description": "Statewide Wisconsin barn roof soft washing & interior deep cleaning. Dairy parlors, historic timber frames, equine facilities, pole barns. Free custom quote.",
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
        { "@type": "State", "name": "Wisconsin" },
        { "@type": "City", "name": "Green Bay" },
        { "@type": "City", "name": "Appleton" },
        { "@type": "City", "name": "De Pere" },
        { "@type": "City", "name": "Oshkosh" },
        { "@type": "City", "name": "Fond du Lac" },
        { "@type": "City", "name": "Sheboygan" },
        { "@type": "City", "name": "Manitowoc" },
        { "@type": "City", "name": "Wausau" }
    ],
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "500",
        "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "USD",
            "minPrice": "500.00"
        }
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Agricultural Barn Cleaning & Restoration Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Dedicated Non-Pressure Roof Soft Washing (Standing Seam, Corrugated & Shingle)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Deep Interior Barn Washouts & High-Dusting (Hot-Water Biofilm Eradication)"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Dairy Parlor, Swine & Poultry Facility Biosecure Sanitation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Historic Gambrel & Timber Truss Restoration for Wedding Venue Conversions"
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
            "name": "Barn Cleaning",
            "item": "https://valleyexteriorpros.com/services/barn-cleaning"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://valleyexteriorpros.com/services/barn-cleaning#faq",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What exactly do you do between farms to prevent carrying disease onto our operation?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The rig gets a full wash-down before it leaves the previous site — exterior, tires, wheel wells, hose reels, wands, surface cleaners, and lift equipment — followed by disinfectant on every contact surface that touched a livestock area, held for full label contact time. Crews change into clean boots at your perimeter and use dedicated PPE. If your operation has a written biosecurity plan, a Line of Separation, or a required entry point, we follow yours rather than ours. We also won't run two livestock operations back-to-back without a complete decontamination cycle in between."
            }
        },
        {
            "@type": "Question",
            "name": "Will washing our metal barn roof cause leaks?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Not the way we do it. Leaks come from high-pressure washing, which loosens seam crimps and drives water up under flashings and fastener heads. We apply biodegradable algaecide under 300 PSI and let the chemistry kill the lichen and moss at the root, then rinse at low pressure. Nothing about the process flexes the panel or disturbs the seam. On older roofs with already-failing fasteners we'll tell you what we find before we start."
            }
        },
        {
            "@type": "Question",
            "name": "Can you actually remove milkstone, or just clean around it?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Remove it. Milkstone is a calcium and magnesium mineral scale bonded with milk protein, and it's the reason parlors that get washed every week still look grey. Alkaline detergent alone will not touch the mineral component — it needs a dedicated acid descaling pass to dissolve the scale, usually alternated with an alkaline pass for the organic layer, both at temperature. Anyone quoting a parlor wash without describing a two-chemistry approach is planning to clean the surface film and leave the scale."
            }
        },
        {
            "@type": "Question",
            "name": "Our well is weak — will you drain it?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. We assume rural water constraints by default. Many farms here run 3–5 GPM private wells, which cannot sustain commercial washing. Our rigs carry high-capacity buffer tanks and haul water in, so we're not drawing from your supply and your milkhouse and house pressure are unaffected while we work."
            }
        },
        {
            "@type": "Question",
            "name": "Do you clean 30-foot cathedral timber ceilings and truss structures?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes — aerial reach systems and high-reach air and water lances handle full-height timber barns, cathedral ceilings, and truss webs. This is the work that matters most in feed-handling areas, where accumulated dust on ledges and trusses is a genuine explosion hazard rather than an appearance problem, and in equine facilities where rafter dust drives respiratory issues."
            }
        }
    ]
};

const faqs = [
    {
        question: "What exactly do you do between farms to prevent carrying disease onto our operation?",
        answer: "The rig gets a full wash-down before it leaves the previous site — exterior, tires, wheel wells, hose reels, wands, surface cleaners, and lift equipment — followed by disinfectant on every contact surface that touched a livestock area, held for full label contact time. Crews change into clean boots at your perimeter and use dedicated PPE. If your operation has a written biosecurity plan, a Line of Separation, or a required entry point, we follow yours rather than ours. We also won't run two livestock operations back-to-back without a complete decontamination cycle in between."
    },
    {
        question: "Will washing our metal barn roof cause leaks?",
        answer: "Not the way we do it. Leaks come from high-pressure washing, which loosens seam crimps and drives water up under flashings and fastener heads. We apply biodegradable algaecide under 300 PSI and let the chemistry kill the lichen and moss at the root, then rinse at low pressure. Nothing about the process flexes the panel or disturbs the seam. On older roofs with already-failing fasteners we'll tell you what we find before we start."
    },
    {
        question: "Can you actually remove milkstone, or just clean around it?",
        answer: "Remove it. Milkstone is a calcium and magnesium mineral scale bonded with milk protein, and it's the reason parlors that get washed every week still look grey. Alkaline detergent alone will not touch the mineral component — it needs a dedicated acid descaling pass to dissolve the scale, usually alternated with an alkaline pass for the organic layer, both at temperature. Anyone quoting a parlor wash without describing a two-chemistry approach is planning to clean the surface film and leave the scale."
    },
    {
        question: "Our well is weak — will you drain it?",
        answer: "No. We assume rural water constraints by default. Many farms here run 3–5 GPM private wells, which cannot sustain commercial washing. Our rigs carry high-capacity buffer tanks and haul water in, so we're not drawing from your supply and your milkhouse and house pressure are unaffected while we work."
    },
    {
        question: "Do you clean 30-foot cathedral timber ceilings and truss structures?",
        answer: "Yes — aerial reach systems and high-reach air and water lances handle full-height timber barns, cathedral ceilings, and truss webs. This is the work that matters most in feed-handling areas, where accumulated dust on ledges and trusses is a genuine explosion hazard rather than an appearance problem, and in equine facilities where rafter dust drives respiratory issues."
    }
];

export default function BarnCleaningPage() {
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
            <section className="relative w-full min-h-[620px] flex flex-col items-center justify-center py-20 bg-navy text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/commercial-roof-cleaning.webp"
                        alt="Agricultural & Dairy Barn Cleaning in the Fox Valley and Northeast Wisconsin"
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
                        Agricultural &amp; Dairy Barn Cleaning in the Fox Valley and Northeast Wisconsin
                    </h1>

                    {/* Subhead / Hero Subtext */}
                    <p className="text-lg sm:text-xl text-slate-200 font-medium max-w-3xl mx-auto mb-8 leading-relaxed">
                        Mobile barn washing, roof soft washing, and interior facility sanitation for dairy operations, livestock housing, horse stables, modern pole buildings, and historic timber barns across Brown, Outagamie, Kewaunee, Manitowoc, Shawano, and Winnebago counties. Commercial 200°F hot-water rigs, on-board water buffer tanks, aerial reach systems, and full between-site biosecurity decontamination.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote?service=barn-cleaning"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Statewide Barn Estimate</span>
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

                    {/* Authority Badges / Trust Bar */}
                    <div className="pt-3 text-xs sm:text-sm text-slate-300 font-semibold tracking-wide border-t border-white/15 inline-block max-w-3xl">
                        $2M Commercial Liability · On-Site Water Buffer Support · Between-Farm Biosecurity Protocol · Statewide Travel Available
                    </div>
                </div>
            </section>

            {/* SECTION 1: NORTHEAST WISCONSIN AGRICULTURE */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Tractor size={16} />
                            <span>Northeast Wisconsin Agriculture</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Built for the Farms Between Green Bay and the Fox River
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                Northeast Wisconsin runs a particular kind of agriculture, and it makes particular messes. Brown, Kewaunee, and Manitowoc counties carry one of the densest concentrations of dairy operations in the country — a mix of legacy tie-stall barns still in daily use, 1990s freestall expansions, and new-build parlors on the same section of road. Outagamie and Shawano add cash crop and mixed livestock. Door County adds orchard and equine.
                            </p>
                            <p>
                                That mix matters because a 1920s gambrel with original timber decking and a six-year-old steel-clad freestall cannot be cleaned the same way, and a contractor who only owns a pressure washer will damage one of them.
                            </p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg sm:text-xl font-bold text-navy mb-2 flex items-center gap-2">
                            <MapPin size={18} className="text-gold" />
                            Where we work
                        </h3>
                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                            Green Bay, De Pere, Kaukauna, Little Chute, Wrightstown, Seymour, Pulaski, Denmark, Luxemburg, Casco, Algoma, Kewaunee, Two Rivers, Shawano, Appleton, and surrounding agricultural townships. Statewide travel remains available for multi-building facilities and major agricultural operations across Wisconsin.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: BETWEEN-SITE DECONTAMINATION */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <ShieldAlert size={16} />
                            <span>Between-Site Decontamination</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Biosecurity Is the First Thing We Do, Not a Line in the Brochure
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                This is the section to read carefully if you run livestock, because it is where most exterior cleaning contractors will fail you.
                            </p>
                            <p>
                                A pressure washing rig is an outstanding disease vector. It carries water, organic material, boot traffic, hose that drags across bedding and manure, and tires that sat in another producer&apos;s yard yesterday. Pathogens that matter in this region — <strong>PRRS</strong> in swine, <strong>Salmonella</strong> and <strong>Mycoplasma</strong> in dairy, <strong>avian influenza</strong> in poultry, and <strong>H5N1</strong> circulating in dairy cattle — move between operations on exactly this kind of equipment. A contractor who drives from one farm to the next without a wash-out between them is carrying whatever was on the last floor onto yours.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-lg sm:text-xl font-bold text-navy mb-4">
                            Our between-site protocol
                        </h3>
                        <ol className="space-y-4 text-slate-700 text-base sm:text-lg">
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm shrink-0 mt-0.5">
                                    1
                                </span>
                                <div>
                                    <strong>Full equipment wash-down before we leave the previous site:</strong> Rig exterior, wheel wells, tires, hose reels, wands, surface cleaners, ladders, and lift equipment are washed before the truck goes back on the road — not after it arrives at yours.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm shrink-0 mt-0.5">
                                    2
                                </span>
                                <div>
                                    <strong>Disinfectant application to all contact surfaces:</strong> Hoses, lances, nozzles, boots, and any tooling that touched a livestock surface receive an EPA-registered agricultural peroxygen or quaternary ammonium disinfectant held for full label contact time.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm shrink-0 mt-0.5">
                                    3
                                </span>
                                <div>
                                    <strong>Clean boots and dedicated PPE per site:</strong> Crews change footwear at your perimeter. Disposable coveralls are used where a producer&apos;s plan requires them.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm shrink-0 mt-0.5">
                                    4
                                </span>
                                <div>
                                    <strong>We work to your plan, not ours:</strong> If your operation has a written biosecurity plan, a designated Line of Separation, a required entry point, or a footbath station, tell us at scheduling and we follow it. If you participate in the Secure Milk Supply or a comparable program, we can work inside those requirements.
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-7 h-7 rounded-full bg-navy text-gold font-black flex items-center justify-center text-sm shrink-0 mt-0.5">
                                    5
                                </span>
                                <div>
                                    <strong>Scheduling sequence:</strong> Where possible we sequence livestock operations first in the day, ahead of non-livestock work, and we will not schedule two separate livestock operations back-to-back without a full decontamination cycle between them.
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CHEMICAL LOW-PRESSURE PRESERVATION */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Droplets size={16} />
                            <span>Chemical Low-Pressure Preservation</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Roof &amp; Exterior Soft Washing Without Stripping the Building
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                Decades of biological infestation — heavy lichen crusts, moss carpets, and Gloeocapsa magma algae — destroy factory coatings on corrugated metal, corrode exposed fasteners, and rot cedar shake roofing. Blasting agricultural roofs with standard high pressure strips protective paint layers, loosens metal seam crimps, and injects water under flashings, which is how a cleaning turns into a leak.
                            </p>
                            <p>
                                We apply biodegradable algaecides through a custom soft wash delivery system <strong>under 300 PSI</strong>, neutralizing root structures down to the substrate. The chemistry kills the organism; it doesn&apos;t sand the building.
                            </p>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6">
                        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    Standing seam &amp; corrugated metal roofs
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Gentle lichen dissolution and chemical rust pre-treatment without surface denting or seam degradation. Lichen on steel is not a surface stain — the rhizines penetrate the coating, and scrubbing them off takes the paint with them. Dissolving them does not.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    Historic gambrel &amp; timber barn shingles
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Safe moss and mold extermination that preserves fragile decking, weathered asphalt, and cedar shakes. On century barns with original sheathing, the decking is often the most fragile component on the property and the least visible from the ground.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-2">
                                    Board &amp; batten, siding panels &amp; masonry foundations
                                </h3>
                                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                                    Removal of road dust, soil splash-back, and biological growth from fieldstone, poured concrete, and weathered pine siding. Field dust loading on the prevailing-wind side of a barn is usually far heavier than owners realize until one elevation is finished.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: HEAVY ORGANIC DESCALING */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Warehouse size={16} />
                            <span>Heavy Organic Descaling</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            Interior Sanitation, Milkstone Removal &amp; Deep Degreasing
                        </h2>
                        <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                            <p>
                                Interior agricultural accumulation is a genuine hazard, not a cosmetic problem. Dust loading on trusses and ledges is a <strong>dust-explosion risk</strong> in feed-handling areas, degrades air quality for both livestock and workers, and fails food-safety and insurance inspections.
                            </p>
                            <p>
                                Our rigs deliver up to <strong>200°F commercial hot water</strong> with specialty high-reach air and water lances to strip decades of grime from cathedral ceilings down to concrete floors.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                Why heat is the whole job on organic soils
                            </h3>
                            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-4">
                                Organic farm soil is a layered problem: protein, fat, and mineral, usually bonded together and baked on. Cold water and a general-purpose detergent move almost none of it.
                            </p>
                            <ul className="space-y-3.5 text-slate-700 text-base sm:text-lg">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>Fats and butterfat residue</strong> have a melt point. Above roughly 140°F they liquefy and release; below it, you are scraping.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>Protein films</strong> need alkalinity, not pressure. A chlorinated alkaline detergent breaks the protein bond so it can be rinsed rather than chiselled.
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 rounded-full bg-gold shrink-0 mt-2.5"></span>
                                    <div>
                                        <strong>Milkstone</strong> is the hard one — a calcium-and-magnesium mineral scale bonded with milk protein that builds on parlor walls, stall dividers, glazed tile, and stainless wash lines. It does not respond to alkaline cleaners at all. It requires an <strong>acid descaling pass</strong> (phosphoric or dairy-approved acid) to dissolve the mineral component, typically alternated with an alkaline pass to take the organic layer.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                High-flow hot-water rinsing
                            </h3>
                            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                                Descaling chemistry is only half the result — the rinse is the other half. We rinse at <strong>high volume and low pressure</strong>, because volume is what carries suspended organic load off a wall and down a drain. High pressure at low volume aerosolizes it instead, which on a livestock facility means you&apos;ve just put contamination into the air and onto adjacent surfaces.
                            </p>
                        </div>

                        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h3 className="text-lg sm:text-xl font-bold text-navy mb-4">
                                Facility focus areas
                            </h3>
                            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
                                <p>
                                    <strong>Commercial dairy parlors &amp; holding areas:</strong> High-temperature washouts of parlor pits, milking stalls, stainless wash lines, and glazed tile, eliminating milkstone, organic waste, and biofilm.
                                </p>
                                <p>
                                    <strong>Freestall barns &amp; tie-stall facilities:</strong> Alley, curtain, fan, and ceiling cleaning. Fan blades and shroud loading directly reduce ventilation performance, which drives heat stress and somatic cell count.
                                </p>
                                <p>
                                    <strong>Equine barns, stables &amp; indoor arenas:</strong> Stall-by-stall sanitation, rubber mat extraction, wash rack degreasing, and arena rafter dust mitigation to protect equine respiratory health.
                                </p>
                                <p>
                                    <strong>Poultry &amp; swine housing:</strong> Complete turn-cycle sanitation and disinfectant flushes between livestock rotations, sequenced around your placement schedule.
                                </p>
                                <p>
                                    <strong>Pre-sale prep &amp; wedding venue conversions:</strong> Specialized deep-cleaning for historic post-and-beam structures. We strip generations of cobwebs, swallow nests, bird droppings, and diesel soot while preserving the aged timber patina.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: SELF-CONTAINED RIG INFRASTRUCTURE */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Gauge size={16} />
                            <span>Self-Contained Rig Infrastructure</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
                            We Don&apos;t Drain Your Well
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                    On-board water hauling &amp; buffer tanks
                                </h3>
                                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                                    Rural properties frequently run low-yield private wells in the <strong>3–5 GPM</strong> range. A commercial wash draws far more than that continuously, and pulling it from the house well means a burned pump and no water in the milkhouse. Our rigs carry high-capacity buffer tanks and haul water in, so the operation runs continuously without touching your supply.
                                </p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-3">
                                    Runoff &amp; environmental safeguards
                                </h3>
                                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                                    Chemical application is tightly metered and contained to keep wash runoff away from livestock watering troughs, open pasture, field tile inlets, and wetlands. On operations with a nutrient management plan or a DNR-permitted manure storage system, we plan the wash footprint and discharge path around it rather than improvising on the day.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: DIRECT ANSWERS / FAQS */}
            <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-100" id="faq">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="max-w-3xl mx-auto mb-12 text-center">
                        <div className="inline-flex items-center gap-2 text-gold font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-2">
                            <Sparkles size={16} />
                            <span>Direct Answers</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-navy tracking-tight">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
                                <h3 className="text-lg sm:text-xl font-bold text-navy mb-3 pl-2 sm:pl-3">
                                    {faq.question}
                                </h3>
                                <p className="text-slate-700 leading-relaxed font-medium pl-2 sm:pl-3 text-base sm:text-lg">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* VERIFIED REVIEWS */}
            <ReviewSlider />

            {/* CLOSING CTA BLOCK */}
            <section className="py-16 sm:py-20 bg-navy text-white relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        Request Your Statewide Wisconsin Barn Cleaning Estimate
                    </h2>
                    <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto mb-8 leading-relaxed">
                        Dedicated low-pressure soft washing and hot-water interior washouts for dairy farms, horse stables, and rustic wedding venues across all 72 counties. Fully insured ($2M Liability).
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                        <Link
                            href="/quote?service=barn-cleaning"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base sm:text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:-translate-y-0.5 uppercase tracking-wider"
                        >
                            <span>Get a Statewide Barn Estimate</span>
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
                    <p className="text-sm text-slate-300 font-medium tracking-wide">
                        Valley Property Services · 462 S Good Hope Rd, De Pere, WI 54115 · Fully Insured ($2M Liability) · Statewide Wisconsin Service
                    </p>
                </div>
            </section>

            {/* EXPLORE MORE SERVICES */}
            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl py-16 text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold text-navy mb-8 tracking-tight">
                        Explore More Exterior Services
                    </div>
                    <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
