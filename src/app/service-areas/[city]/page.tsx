
function getDeterministicHero(seed: string): string {
    // Verified high-quality pool for round-robin distribution across city pages
    const imagePool = [
        "/images/portfolio/house-wash-before-after.webp",
        "/images/portfolio/concrete-cleaning.webp",
        "/images/portfolio/roof-cleaning.webp",
        "/images/portfolio/pressure-washing.webp",
        "/images/portfolio/soft-washing.webp",
        "/images/portfolio/commercial-cleaning.webp",
        "/images/portfolio/deck-cleaning.webp",
        "/images/portfolio/gutter-cleaning.webp"
    ];

    // Utilize sum of char codes to create a stable, deterministic index per city
    let sum = 0;
    for (let i = 0; i < seed.length; i++) {
        sum += seed.charCodeAt(i);
    }

    // Return the image based on the modulo of the sum
    return imagePool[sum % imagePool.length];
}
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SafeHeroImage from '@/components/SafeHeroImage';
import { ChevronRight, ShieldCheck, MapPin, ArrowRight, Phone, CheckCircle2, CreditCard, Mail, Clock } from 'lucide-react';
import PricingMatrix from '@/components/PricingMatrix';
import ReviewSlider from '@/components/ReviewSlider';
import ServiceGrid from '@/components/ServiceGrid';
import VanillaMapClient from '@/components/VanillaMapClient';
import serviceData from '@/data/serviceAreasContent.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { isRedirectDestination } from '@/utils/redirectProtection';

import { cityContextData } from '@/data/cityData';

export function generateStaticParams() {
    return serviceData
        .filter((d) => d.type === 'hub')
        .map((d) => ({ city: d.citySlug }));
}

type PageProps = {
    params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city } = await params;
    const content = serviceData.find((d) => d.type === 'hub' && d.citySlug === city);

    if (!content) {
        return { title: 'Service Area Not Found' };
    }

    const distantCities = ['wausau', 'stevens-point', 'wisconsin-rapids', 'marshfield', 'rhinelander', 'marinette', 'peshtigo', 'oconto', 'clintonville', 'new-london', 'waupaca', 'wautoma', 'berlin', 'ripon', 'markesan', 'green-lake', 'princeton', 'montello', 'westfield', 'adams', 'friendship', 'mauston', 'new-lisbon', 'necedah', 'tomah', 'sparta', 'black-river-falls', 'neillsville', 'abbotsford', 'medford', 'merrill', 'tomahawk', 'minocqua', 'woodruff', 'eagle-river', 'three-lakes', 'crandon', 'laona', 'wabeno', 'crivitz', 'wausaukee', 'pembine', 'niagara', 'florence', 'iron-mountain', 'kingsford', 'norway', 'escanaba', 'gladstone', 'manistique', 'munising', 'marquette', 'negaunee', 'ishpeming', 'gwinn', 'ironwood', 'hurley', 'mercer', 'manitowish-waters', 'boulder-junction', 'presque-isle', 'land-o-lakes'];

    const urlPath = `/service-areas/${city}`;
    const shouldNoindex = distantCities.includes(city) && !isRedirectDestination(urlPath);

    const uniqueMeta: Record<string, { title: string, description: string }> = {
        "de-pere": {
            title: "Exterior Cleaning & Soft Washing De Pere, WI | Valley Pro",
            description: "Top-rated exterior cleaning in De Pere, WI. Headquartered in De Pere at 462 S Good Hope Rd, Valley Property Services specializes in window cleaning, soft washing, and roof & gutter cleaning."
        },
        "green-bay": {
            title: "Power & Pressure Washing Green Bay, WI | Valley Pro",
            description: "Professional power & pressure washing, house washing, roof soft washing, driveway cleaning & window cleaning in Green Bay & De Pere, WI. 100% satisfaction guarantee."
        },
        "appleton": {
            title: "Power & Pressure Washing Appleton, WI | Valley Pro",
            description: "Top-rated power & pressure washing in Appleton & Fox Valley. Non-pressure roof cleaning, house soft washing, paver restoration & permanent LED lighting. Get a free quote!"
        }
    };

    const metaMatch = uniqueMeta[city];
    const generatedTitle = metaMatch ? metaMatch.title : `${content.title || `Professional Window Cleaning & Soft Washing in ${content.city}, WI`} | Valley Pro`;
    const seoDescription = metaMatch ? metaMatch.description : `Top-rated pure water window cleaning, house soft washing, and roof & gutter maintenance in ${content.city}, WI. Fully insured, 100% satisfaction guarantee.`;

    return {
        title: {
            absolute: generatedTitle
        },
        description: seoDescription,
        robots: shouldNoindex ? { index: false, follow: true } : { index: true, follow: true },
        alternates: {
            canonical: `https://valleyexteriorpros.com/service-areas/${city}`
        },
        openGraph: {
            title: generatedTitle,
            description: seoDescription,
            url: `https://valleyexteriorpros.com/service-areas/${city}`,
            siteName: "Valley Property Services",
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: generatedTitle,
            description: seoDescription,
        }
    };
}

const cityEditorialOverviews: Record<string, React.ReactNode> = {
    'green-bay': (
        <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-8 max-w-4xl">
            Green Bay&apos;s freeze-thaw winters grind chloride residue into concrete and leave a gray-green film across every shaded elevation, which is why most local jobs start with <Link href="/services/pressure-washing" className="text-blue-600 hover:underline font-medium">surface-cleaning driveways and siding each spring</Link> and <Link href="/services/gutter-cleaning" className="text-blue-600 hover:underline font-medium">clearing the gutter runs</Link> that carried four months of meltwater. Homes under the mature canopy in Allouez, Bellevue, and the older east side usually need <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline font-medium">the black streaking treated off their north-facing roof slopes</Link> at the same time, with <Link href="/services/window-cleaning" className="text-blue-600 hover:underline font-medium">glass cleaned</Link> once the siding has been rinsed and dried. Along the industrial and logistics corridors, our mobile hot-water rigs provide scheduled <Link href="/services/fleet-washing" className="text-blue-600 hover:underline font-medium">on-site commercial fleet washing</Link> and salt neutralization during staging hours. It&apos;s also common to close out the season with <Link href="/services/permanent-led-lighting" className="text-blue-600 hover:underline font-medium">LED lighting run permanently along the roofline</Link>, so nobody is on a ladder in December.
        </p>
    ),
    'appleton': (
        <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-8 max-w-4xl">
            Fox Valley properties take a harder spring hit than the rest of the region — oak tassels drop in volumes that overwhelm gutter guards, which makes <Link href="/services/gutter-cleaning" className="text-blue-600 hover:underline font-medium">a late-May gutter clearing</Link> the single most useful thing most Appleton homeowners do all year. From there it&apos;s typically <Link href="/services/pressure-washing" className="text-blue-600 hover:underline font-medium">low-pressure siding washing and concrete surface cleaning</Link> through the summer, <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline font-medium">non-pressure treatment for roof algae</Link> on shaded elevations, and <Link href="/services/window-cleaning" className="text-blue-600 hover:underline font-medium">storefront and residential glass detailing</Link> along the commercial corridors. For transport yards and regional distribution hubs along I-41, we deploy mobile units for <Link href="/services/fleet-washing" className="text-blue-600 hover:underline font-medium">on-site commercial fleet washing</Link> to eliminate driver travel. We install <Link href="/services/permanent-led-lighting" className="text-blue-600 hover:underline font-medium">architectural LED lighting that stays up year-round</Link> across Appleton, Neenah, Menasha, and Kaukauna.
        </p>
    ),
    'de-pere': (
        <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-8 max-w-4xl">
            De Pere is home — our shop sits on South Good Hope Road, which means short drive times and same-week scheduling for everything from <Link href="/services/pressure-washing" className="text-blue-600 hover:underline font-medium">power washing the original concrete in the older river district</Link> to <Link href="/services/gutter-cleaning" className="text-blue-600 hover:underline font-medium">flushing gutters and downspouts</Link> in the newer subdivisions south of town. The downtown mix of mature trees and painted wood trim means a good share of these properties need <Link href="/services/roof-cleaning" className="text-blue-600 hover:underline font-medium">a non-pressure roof wash</Link> and <Link href="/services/window-cleaning" className="text-blue-600 hover:underline font-medium">careful glass work</Link> rather than anything aggressive. We also handle <Link href="/services/permanent-led-lighting" className="text-blue-600 hover:underline font-medium">permanent LED lighting along rooflines and soffits</Link> throughout De Pere and neighboring Ledgeview and Hobart.
        </p>
    )
};

export default async function CityHubPage({ params }: PageProps) {
    const { city } = await params;
    const content = serviceData.find((d) => d.type === 'hub' && d.citySlug === city);

    if (!content) {
        notFound();
    }

    const cityName = content.city;
    const heroImage = content.headerImage;

    // Strict Visual Category Lockdown Fallbacks
    const categoryFallbacks = {
        "Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
        "House Washing": "/images/portfolio/house-wash-before-after.webp",
        "Gutter Cleaning": "/images/portfolio/gutter-cleaning.webp",
        "Concrete Cleaning": "/images/portfolio/concrete-cleaning.webp",
        "Window Cleaning": "/images/portfolio/window-cleaning-before-after.JPG.webp",
        "Christmas Lighting": "/images/portfolio/permanent-lights.webp",
        "Pressure Washing": "/images/portfolio/pressure-washing.webp",
        "Residential Permanent LED Lighting": "/images/portfolio/permanent-lights.webp",
        "Commercial Roof Cleaning": "/images/portfolio/roof-cleaning.webp",
        "Building Washing": "/images/portfolio/building-washing.webp",
        "Hood Vent Cleaning": "/images/portfolio/building-washing.webp",
        "Commercial Hood Vent Cleaning": "/images/portfolio/building-washing.webp",
        "Default": getDeterministicHero(city)
    };

    // Safe execution: If no hero image was generated, forcefully load authentically.
    const safeImage = heroImage || categoryFallbacks[(content.category || "House Washing") as keyof typeof categoryFallbacks] || getDeterministicHero(city);

    // Utilize the pre-computed geographic matrix
    const localContext = cityContextData[content.citySlug as keyof typeof cityContextData];

    // Generate a deterministic index (0-2) based on the city slug for the narrative variations
    const seedHash = content.citySlug.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0);
    const variationIndex = seedHash % 3;

    // Fallback safely to generated content if somehow a city is missed in the massive matrix
    const fallbackRust = {
        subtitle: "Cosmetic Iron Restoration",
        p1: `In Wisconsin, heavy rains accelerate iron oxidation on residential siding.`,
        p2: `We safely remove hard-water stains from your ${cityName} home.`
    };
    const fallbackSoft = {
        subtitle: "Safe Organic Destruction",
        p1: "Volatile weather patterns create the perfect breeding ground for algae.",
        p2: `Protect your ${cityName} exterior with our Soft Wash system.`
    };
    const fallbackDriveway = {
        subtitle: "Deep Concrete Degreasing",
        p1: "Wisconsin winters demand heavy salt that degrades concrete.",
        p2: `Safely blast away grime from your ${cityName} driveway.`
    };
    const fallbackSolar = {
        subtitle: "Maximum UV Ray Penetration",
        p1: "Maximizing your solar panel efficiency is essential.",
        p2: `We remove pollen and dust from ${cityName} solar arrays.`
    };
    const fallbackAwning = {
        subtitle: "Commercial Fabric Restoration",
        p1: "Local businesses face unique aesthetic challenges from harsh elements.",
        p2: `Safely restore your ${cityName} commercial awnings.`
    };

    const vRust = localContext?.rustRemoval || fallbackRust;
    const vSoft = localContext?.softWash || fallbackSoft;
    const vDrive = localContext?.driveway || fallbackDriveway;
    const vSolar = localContext?.solar || fallbackSolar;
    const vAwning = localContext?.awning || fallbackAwning;

    // Local Geo-Context Mapping Engine
    const countyMap: Record<string, string> = {
        "green-bay": "Brown", "wrightstown": "Brown", "de-pere": "Brown", "howard": "Brown", "suamico": "Brown", "ashwaubenon": "Brown", "allouez": "Brown", "bellevue": "Brown", "hobart": "Brown", "ledgeview": "Brown",
        "appleton": "Outagamie", "kaukauna": "Outagamie", "little-chute": "Outagamie", "kimberly": "Outagamie", "greenville": "Outagamie", "combined-locks": "Outagamie",
        "sherwood": "Calumet",
        "neenah": "Winnebago", "oshkosh": "Winnebago", "menasha": "Winnebago",
        "door-county": "Door", "sturgeon-bay": "Door", "egg-harbor": "Door", "fish-creek": "Door", "sister-bay": "Door",
        "shawano": "Shawano",
        "manitowoc": "Manitowoc", "two-rivers": "Manitowoc",
        "algoma": "Kewaunee", "kewaunee": "Kewaunee"
    };

    const targetCounty = countyMap[content.citySlug] || "Wisconsin";

    const localizedAlts: Record<string, string> = {
        "de-pere": "soft-wash-roof-cleaning-de-pere-wi.webp",
        "green-bay": "power-washing-driveway-green-bay-wi.webp",
        "appleton": "house-washing-and-permanent-led-lighting-appleton-wi.webp"
    };
    const heroAlt = localizedAlts[content.citySlug] || `${content.category || 'Professional Exterior Cleaning'} in ${cityName || 'Green Bay'}, WI`;

    return (
        <main className="w-full overflow-hidden bg-slate-50">
            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
                <SafeHeroImage
                    src={safeImage}
                    fallbackSrc={categoryFallbacks[(content.category || "House Washing") as keyof typeof categoryFallbacks] || getDeterministicHero(city)}
                    alt={heroAlt}
                />

                <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center mt-16 sm:mt-0">
                    <div className="inline-flex items-center gap-2 bg-white/90 border border-white/20 text-slate-900 px-4 md:px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase">
                        <MapPin size={16} className="text-gold" />
                        Serving {cityName}, WI
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        {content.citySlug === 'de-pere' ? 'Premier Exterior Cleaning & Soft Washing in De Pere' : `Elite Power & Pressure Washing in ${cityName}`}
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
                        {content.citySlug === 'de-pere' ? 'Headquartered in De Pere, WI — Expert window cleaning, soft washing, and roof & gutter restoration.' : 'Expert roof washing, window cleaning, and power washing services.'}
                    </p>
                </div>
            </section>

            {/* BREADCRUMBS */}
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl py-4 flex flex-col md:flex-row items-center justify-between text-sm font-semibold text-gray-400 uppercase tracking-wider gap-4">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link href="/service-areas" className="hover:text-gold transition-colors">Service Areas</Link>
                        <ChevronRight size={14} />
                        <span className="text-navy">{cityName}</span>
                    </div>
                </div>
            </div>

            {/* QUICK SERVICE MENU INJECTION */}
            <div className="bg-slate-50 border-b border-gray-200 py-6">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <span className="text-navy font-bold flex items-center gap-2 shrink-0">
                            <span className="bg-gold w-2 h-2 rounded-full"></span> 
                            {cityName} Service Menu:
                        </span>
                        <div className="flex flex-wrap items-center gap-3">
                            <Link href="/services/roof-cleaning" className="bg-white border border-gray-200 hover:border-gold hover:text-gold text-navy px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm shrink-0">Roof Cleaning</Link>
                            <Link href="/services/house-washing" className="bg-white border border-gray-200 hover:border-gold hover:text-gold text-navy px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm shrink-0">House Washing</Link>
                            <Link href="/services/window-cleaning" className="bg-white border border-gray-200 hover:border-gold hover:text-gold text-navy px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm shrink-0">Window Cleaning</Link>
                            <Link href="/services/gutter-cleaning" className="bg-white border border-gray-200 hover:border-gold hover:text-gold text-navy px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm shrink-0">Gutter Cleaning</Link>
                            <Link href="/services/pressure-washing" className="bg-white border border-gray-200 hover:border-gold hover:text-gold text-navy px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm shrink-0">Pressure Washing</Link>
                            <Link href="/services/paver-patio-restorations" className="bg-white border border-gray-200 hover:border-gold hover:text-gold text-navy px-4 py-2 rounded-full text-sm font-bold transition-all shadow-sm shrink-0">Paver Restoration</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT BLOCK */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* DYNAMIC EXACT-MATCH 'NEAR ME' H2 INJECTION */}
                    {['green-bay', 'appleton', 'neenah', 'de-pere'].includes(content.citySlug) && (
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">
                            {content.citySlug === 'de-pere' ? 'Top-Rated Exterior Cleaning & Soft Washing in De Pere, WI' : `Top-Rated Pressure Washing Service Near You in ${cityName}`}
                        </h2>
                    )}

                    {/* DYNAMIC CONTEXTUAL SERVICE OVERVIEW BLOCK FOR PRIMARY CITY LANDING PAGES */}
                    {['green-bay', 'appleton', 'de-pere'].includes(content.citySlug) ? (
                        <div className="mb-10 p-6 sm:p-8 bg-slate-50/80 border-l-4 border-gold rounded-r-2xl shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-extrabold text-navy mb-4 flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-gold rounded-full shrink-0"></span>
                                Professional Exterior Service Overview in {cityName}, WI
                            </h3>
                            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
                                {content.citySlug === 'green-bay' && (
                                    <>
                                        <p>
                                            For homeowners and commercial property managers across Green Bay, our specialized <Link href="/services/pressure-washing" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">exterior pressure washing and soft washing</Link> services eliminate stubborn organic staining, lake-effect humidity grime, and abrasive winter road salt from siding, walkways, and masonry.
                                        </p>
                                        <p>
                                            To protect Green Bay foundations and rooflines from Wisconsin&apos;s intense freeze-thaw cycles, we deliver comprehensive <Link href="/services/gutter-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">gutter cleaning and downspout flushing</Link> that prevents water backup and basement seepage.
                                        </p>
                                        <p>
                                            When black Gloeocapsa Magma algae and damp shade threaten Green Bay roof shingles, our non-pressure <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">roof moss removal and soft wash roof cleaning</Link> treatments safely eradicate active fungal spores without voiding manufacturer shingle warranties.
                                        </p>
                                        <p>
                                            Property owners in Green Bay seeking year-round curb appeal and customized security illumination can upgrade to our low-profile <Link href="/services/permanent-led-lighting" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">permanent architectural LED lighting</Link> systems, seamlessly integrated beneath your roofline for invisible daytime aesthetics and brilliant nighttime color.
                                        </p>
                                        <p>
                                            Finally, we provide crystal-clear, streak-free clarity for Green Bay residential windows using advanced multi-stage <Link href="/services/window-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">pure water window cleaning</Link> technology that leaves glass, sills, and screens spotless without chemical residue.
                                        </p>
                                        <p>
                                            Additionally, logistics terminals and municipal fleets across Green Bay count on our mobile hot-water wash trailers for scheduled <Link href="/services/fleet-washing" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">on-site commercial fleet washing</Link>, diesel soot removal, and winter road salt neutralization.
                                        </p>
                                    </>
                                )}
                                {content.citySlug === 'appleton' && (
                                    <>
                                        <p>
                                            For homeowners and commercial facility managers throughout Appleton, our professional <Link href="/services/pressure-washing" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">exterior pressure washing and soft washing</Link> treatments safely remove deep-set Fox Valley grime, mildew, and surface contaminants from vinyl siding, concrete flatwork, and brickwork.
                                        </p>
                                        <p>
                                            With Appleton properties surrounded by dense mature tree canopies, regular <Link href="/services/gutter-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">gutter cleaning and downspout flushing</Link> is critical to ensure unimpeded storm drainage and avoid costly roofline moisture damage.
                                        </p>
                                        <p>
                                            To safeguard local roofing materials against biological decay, our Appleton specialists utilize gentle, ARMA-compliant <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">roof moss removal and soft wash roof cleaning</Link> techniques that neutralize stubborn lichen and algae at the root.
                                        </p>
                                        <p>
                                            We also help Appleton homeowners elevate their exterior aesthetics every evening with app-controlled <Link href="/services/permanent-led-lighting" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">permanent architectural LED lighting</Link> engineered to withstand harsh Northeast Wisconsin winters while providing versatile holiday lighting.
                                        </p>
                                        <p>
                                            To complete your home&apos;s transformation, our Appleton team delivers sparkling views through deionized <Link href="/services/window-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">pure water window cleaning</Link>, ensuring spot-free glass and thoroughly detailed sills without detergent residue.
                                        </p>
                                        <p>
                                            For Fox Valley logistics centers and commercial depots, we mobilize dedicated wash trailers for <Link href="/services/fleet-washing" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">on-site commercial fleet washing</Link>, delivering high-temperature degreasing, two-step touchless chemistry, and clean-water compliance directly to your yard.
                                        </p>
                                    </>
                                )}
                                {content.citySlug === 'de-pere' && (
                                    <>
                                        <p>
                                            Headquartered right here in De Pere on Good Hope Road, we provide homeowners and local commercial facilities with premier <Link href="/services/pressure-washing" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">exterior pressure washing and soft washing</Link> to lift river-corridor grime, algae, and road salt from all exterior surfaces.
                                        </p>
                                        <p>
                                            For properties in De Pere managing heavy fall leaves and seasonal precipitation, our thorough <Link href="/services/gutter-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">gutter cleaning and downspout flushing</Link> guarantees free-flowing gutters that safeguard roof eaves and foundations.
                                        </p>
                                        <p>
                                            When heavy shade along the Fox River fosters shingle discoloration, our De Pere crew applies gentle <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">roof moss removal and soft wash roof cleaning</Link> solutions that restore asphalt shingle health without harmful high pressure.
                                        </p>
                                        <p>
                                            Transform your De Pere residence for every holiday and season with custom-fit <Link href="/services/permanent-led-lighting" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">permanent architectural LED lighting</Link> built for seamless, invisible daylight integration and vibrant nighttime brilliance.
                                        </p>
                                        <p>
                                            Our De Pere exterior specialists finish every project with streak-free <Link href="/services/window-cleaning" className="text-blue-600 hover:text-gold font-bold underline decoration-blue-300 underline-offset-4 transition-colors">pure water window cleaning</Link>, leaving your home&apos;s glass, screens, and frames crystal clear without harsh chemical runoff.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Property Services is a fully insured exterior cleaning company providing professional, low-pressure roof washing, window cleaning, and high-ticket <Link href="/services/paver-patio-restorations" className="text-blue-600 hover:text-gold font-semibold transition-colors underline decoration-blue-200 underline-offset-4">expert paver restoration</Link> in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI. We specialize in delicate <Link href="/services/roof-cleaning" className="text-blue-600 hover:text-gold font-semibold transition-colors underline decoration-blue-200 underline-offset-4">soft-wash roof treatments</Link> that destroy organic material without extreme water pressure.
                        </div>
                    )}

                    {/* ENFORCED ARRAY MAPPING FOR BESPOKE INTRODUCTIONS */}
                    {content.introParagraphs && (
                        <div className="mb-10 text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                            {content.introParagraphs.map((p: string, idx: number) => (
                                <p key={idx} className="mb-6 text-left font-medium text-slate-700 leading-relaxed tracking-wide">
                                    {p}
                                </p>
                            ))}
                        </div>
                    )}

                    {/* DYNAMIC LANDMARK SATURATION INJECTION (DE PERE HEADQUARTERS HUB) */}
                    {content.citySlug === 'de-pere' && (
                        <div className="mb-10 p-8 bg-blue-50/50 border-l-4 border-gold rounded-r-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-navy mb-3 flex items-center gap-2">
                                <MapPin className="text-gold" />
                                Our Hometown Storefront &amp; Operational Headquarters
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                Valley Property Services is physically headquartered right here in De Pere at <strong>462 S Good Hope Rd, De Pere, WI 54115</strong>. From Broadway to West De Pere, Voyageur Park, and St. Norbert College neighborhoods, we are proud to provide our community with premier window cleaning, siding soft washing, and roof/gutter preservation.
                            </p>
                        </div>
                    )}

                    {/* DYNAMIC LANDMARK SATURATION INJECTION (NEENAH POWER HUB) */}
                    {content.citySlug === 'neenah' && (
                        <div className="mb-10 p-8 bg-blue-50/50 border-l-4 border-navy rounded-r-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                                <MapPin className="text-gold" />
                                Protecting Neenah&apos;s Local Landmarks
                            </h3>
                            <p className="text-lg text-slate-700 leading-relaxed font-medium">
                                We proudly serve all of Neenah, from the historic properties on Doty Island to the areas surrounding the Kimberly Point Lighthouse.
                            </p>
                        </div>
                    )}

                    <div
                        className="prose prose-lg md:prose-xl prose-headings:text-[#1E2B3C] prose-headings:font-bold prose-p:text-black text-black max-w-none dangerously-injected-html"
                        dangerouslySetInnerHTML={{
                            __html: content.content
                        }}
                    />

                    {/* DYNAMIC EEAT TRUST SIGNALS INJECTION */}
                    {content.trustSignals && content.trustSignals.length > 0 && (
                        <div className="mt-12 p-8 bg-blue-50/50 rounded-2xl border border-blue-100">
                            <h3 className="text-2xl font-bold text-navy mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-gold" />
                                Verified Local Property Protection
                            </h3>
                            {content.trustSignals.map((ts: string, idx: number) => (
                                <p key={idx} className="mb-4 text-slate-700 leading-relaxed font-medium">
                                    {ts}
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* DYNAMIC PRICING EXPECTATIONS INJECTION */}
            <section className="py-8 bg-slate-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-xl my-10 text-center max-w-4xl mx-auto border border-slate-800">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                            {cityName} Pricing Expectations
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                            Professional exterior cleaning prices vary based on total square footage, building height, and the severity of the organic buildup. We provide exact, transparent quotes before any work begins on your {cityName} property.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 transition-colors cursor-pointer"
                        >
                            Request your free quote today.
                        </Link>
                    </div>
                </div>
            </section>

            {/* FEATURED SERVICE EXPANSION INJECTION */}
            <article className="py-20 bg-slate-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight">Our Expanded Services in {cityName}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">We have rapidly expanded our capabilities to provide these highly requested, premium services to our residential and commercial clients across {cityName}.</p>
                    </div>

                    <div className="space-y-16">
                        {/* Service 1 */}
                        <section className="flex flex-col md:flex-row gap-8 items-center bg-white/95 p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,35,65,0.15)]">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-inner">
                                <Image src={'/images/portfolio/rust-removal-before-after.webp'} alt={`Professional rust removal and mineral extraction in ${cityName}, ${targetCounty} County`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading="lazy" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/rust-removal" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-black tracking-tight text-navy mt-0 text-left">Rust Removal</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vRust.subtitle}</p>
                                <p className="text-left">{vRust.p1}</p>
                                <p className="text-left">{vRust.p2.replace('{cityName}', cityName)}</p>
                                <Link href="/services/rust-removal" aria-label={`Learn more about rust removal in ${targetCounty} County`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 2 */}
                        <section className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white/95 p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,35,65,0.15)]">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-inner">
                                <Image src={'/images/portfolio/soft-washing.webp'} alt={`Safe low-pressure soft wash exterior cleaning in ${cityName}, ${targetCounty} County`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/soft-wash" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-black tracking-tight text-navy mt-0 text-left">Professional Soft Wash</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vSoft.subtitle}</p>
                                <p className="text-left">{vSoft.p1}</p>
                                <p className="text-left">{vSoft.p2.replace('{cityName}', cityName)}</p>
                                <Link href="/services/soft-wash" aria-label={`Learn more about soft washing in ${targetCounty} County`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 3 */}
                        <section className="flex flex-col md:flex-row gap-8 items-center bg-white/95 p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,35,65,0.15)]">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-inner">
                                <Image src={'/images/portfolio/drive-way-cleaning.webp'} alt={`Concrete driveway power washing and flatwork restoration in ${cityName}, ${targetCounty} County`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/driveway-cleaning" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-black tracking-tight text-navy mt-0 text-left">Driveway Cleaning</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vDrive.subtitle}</p>
                                <p className="text-left">{vDrive.p1}</p>
                                <p className="text-left">{vDrive.p2.replace('{cityName}', cityName)}</p>
                                <Link href="/services/driveway-cleaning" aria-label={`Learn more about driveway cleaning in ${targetCounty} County`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 4 */}
                        <section className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white/95 p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,35,65,0.15)]">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-inner">
                                <Image src={'/images/portfolio/solar-panel-cleaning.webp'} alt={`Rooftop solar panel washing and efficiency optimization in ${cityName}, ${targetCounty} County`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/solar-panel-cleaning" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-black tracking-tight text-navy mt-0 text-left">Solar Panel Cleaning</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vSolar.subtitle}</p>
                                <p className="text-left">{vSolar.p1}</p>
                                <p className="text-left">{vSolar.p2.replace('{cityName}', cityName)}</p>
                                <Link href="/services/solar-panel-cleaning" aria-label={`Learn more about solar panel cleaning in ${targetCounty} County`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 5 */}
                        <section className="flex flex-col md:flex-row gap-8 items-center bg-white/95 p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/40 transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(11,35,65,0.15)]">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0 shadow-inner">
                                <Image src={'/images/portfolio/store-front-cleaning.webp'} alt={`Commercial storefront and canvas awning exterior washing in ${cityName}, ${targetCounty} County`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/commercial-awning-cleaning" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-black tracking-tight text-navy mt-0 text-left">Commercial Awning Cleaning</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vAwning.subtitle}</p>
                                <p className="text-left">{vAwning.p1}</p>
                                <p className="text-left">{vAwning.p2.replace('{cityName}', cityName)}</p>
                                <Link href="/services/commercial-awning-cleaning" aria-label={`Learn more about commercial awning cleaning in ${targetCounty} County`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                    </div>
                </div>
            </article>

            {/* DYNAMIC FAQ SCHEMA INJECTION */}
            {content.faqs && content.faqs.length > 0 && (
                <section className="mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
                        Frequently Asked Questions in {cityName}
                    </h2>
                    <div className="space-y-6">
                        {content.faqs?.map((faq: { question: string, answer: string }, index: number) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-semibold mb-3 text-slate-800">
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* SERVICES GRID (6-Grid Bottom Injection Hook) */}
            <div className="bg-slate-50 border-t border-gray-200">
                {cityEditorialOverviews[content.citySlug] && (
                    <div className="container mx-auto px-4 max-w-5xl pt-16 -mb-12 relative z-20 flex justify-center text-left">
                        {cityEditorialOverviews[content.citySlug]}
                    </div>
                )}
                <ServiceGrid city={cityName} />
            </div>

            {/* REGIONAL HUB CRO COMPONENTS */}
            <div className="bg-white py-16 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <PricingMatrix 
                        title={`${cityName} Property Maintenance`}
                        description={`Secure professional, reliable exterior cleaning for your ${cityName} property.`}
                        rateTitle="Standard Rate"
                        ratePrice="$350.00"
                        rateDetails="Minimum baseline per visit"
                        minimumPrice="$350.00"
                        minimumDetails="Depending on travel distance and complexity"
                        variableTitle="Comprehensive Projects"
                        variableHeading="Custom Assessed"
                        variableDetails="Multi-service treatments, commercial building washing, and high-liability projects require an on-site evaluation."
                    />

                    {/* Flexible Financing Available */}
                    <div className="mt-12 bg-gradient-to-r from-slate-900 to-navy p-1 rounded-2xl shadow-xl">
                        <div className="bg-white p-8 rounded-xl flex flex-col md:flex-row items-center gap-6 justify-between">
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-50 p-4 rounded-full">
                                    <CreditCard size={32} className="text-navy" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-navy mb-1">Flexible Financing Available</h3>
                                    <p className="text-gray-600">Break your massive {cityName} restoration project down into manageable monthly payments.</p>
                                </div>
                            </div>
                            <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap text-lg text-center w-full md:w-auto shadow-md block">
                                Apply Now
                            </Link>
                        </div>
                    </div>

                    {/* 100% Satisfaction Guarantee from the Valley Property Services team */}
                    <div className="mt-8 flex items-center justify-center gap-4 p-6 bg-slate-50 rounded-2xl border border-gray-100">
                        <div className="bg-green-100 p-3 rounded-full shrink-0">
                            <ShieldCheck className="text-green-600" size={28} />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-navy">100% Satisfaction Guarantee</h4>
                            <p className="text-gray-600 text-sm">Backed by the Valley Property Services team.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* DYNAMIC MAP AND NAP INJECTION (INTERACTIVE JS) */}
            <div className="bg-slate-50 border-t border-gray-200 relative">
                {/* JSON-LD Structured Data Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "HomeAndConstructionBusiness",
                            "@id": `https://valleyexteriorpros.com/service-areas/${content.citySlug}#location`,
                            "parentOrganization": {
                                "@id": "https://valleyexteriorpros.com/#organization"
                            },
                            "name": `Valley Property Services - ${cityName}`,
                            "image": "https://valleyexteriorpros.com/images/portfolio/building-wash-copy.webp",
                            "telephone": "(920) 609-7085",
                            "url": `https://valleyexteriorpros.com/service-areas/${content.citySlug}`,
                            "areaServed": {
                                "@type": "City",
                                "name": `${cityName}, WI`
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 44.5192,
                                "longitude": -88.0198
                            },
                            "keywords": [
                                "pressure washing Green Bay WI", "pressure washing Appleton WI", "house washing Green Bay", "house washing Appleton WI",
                                "soft wash siding cleaning Green Bay WI", "roof soft washing Appleton", "roof stain removal Green Bay",
                                "concrete pressure washing Appleton", "driveway cleaning Green Bay", "commercial pressure washing Fox Valley",
                                "commercial building washing Green Bay", "Gloeocapsa magma roof cleaning Green Bay", "non pressure roof cleaning Appleton WI",
                                "winter road salt concrete washing Green Bay", "rust stain removal pressure washer Appleton",
                                "dumpster pad hot water steam cleaning Green Bay", "commercial hood cleaning De Pere / Green Bay",
                                "permanent LED holiday lighting installer Appleton WI"
                            ],
                            "knowsAbout": [
                                "pressure washing Green Bay WI", "pressure washing Appleton WI", "house washing Green Bay", "house washing Appleton WI",
                                "soft wash siding cleaning Green Bay WI", "roof soft washing Appleton", "roof stain removal Green Bay",
                                "concrete pressure washing Appleton", "driveway cleaning Green Bay", "commercial pressure washing Fox Valley",
                                "commercial building washing Green Bay", "Gloeocapsa magma roof cleaning Green Bay", "non pressure roof cleaning Appleton WI",
                                "winter road salt concrete washing Green Bay", "rust stain removal pressure washer Appleton",
                                "dumpster pad hot water steam cleaning Green Bay", "commercial hood cleaning De Pere / Green Bay",
                                "permanent LED holiday lighting installer Appleton WI"
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Valley Property Services Exterior Restoration Catalog",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Pressure Washing Green Bay WI & Appleton"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "House Washing & Soft Wash Siding Cleaning"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Gloeocapsa Magma Roof Cleaning & Stain Removal"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Winter Road Salt Concrete Washing"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Commercial Kitchen Exhaust & Hood Cleaning"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Permanent LED Holiday Lighting Installation"
                                        }
                                    }
                                ]
                            }
                        }).replace(/</g, '\\u003c').replace(/'/g, "&apos;")
                    }}
                />

                <VanillaMapClient city={cityName} />
            </div>

            {/* Our Service Hub & Headquarters Section */}
            <section className="bg-white py-16 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold text-navy">Our Service Hub & Headquarters</h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            While we dispatch our specialized exterior cleaning rigs daily throughout {cityName} and the wider Fox Valley region, our physical storefront and administrative headquarters are located in De Pere.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-5 space-y-6">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-105 space-y-4">
                                <h3 className="text-xl font-bold text-navy">Valley Property Services</h3>
                                <div className="space-y-3 text-gray-600 font-medium text-sm sm:text-base">
                                    <p className="flex items-start gap-2">
                                        <MapPin className="text-gold shrink-0 mt-1" size={18} />
                                        <span>462 S Good Hope Rd<br />De Pere, WI 54115</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Phone className="text-gold shrink-0" size={18} />
                                        <a href="tel:920-609-7085" className="hover:text-gold transition-colors">(920) 609-7085</a>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <Mail className="text-gold shrink-0" size={18} />
                                        <a href="mailto:info@valleyexteriorpros.com" className="hover:text-gold transition-colors">info@valleyexteriorpros.com</a>
                                    </p>
                                    <p className="flex items-start gap-2">
                                        <Clock className="text-gold shrink-0 mt-1" size={18} />
                                        <span>Monday – Sunday: 8:00 AM – 8:00 PM</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-7">
                            <div className="w-full h-[320px] sm:h-[350px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-slate-50 relative">
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0151754639163!2d-88.06446349282405!3d44.433056645497985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802f7860e31a465%3A0xc422a0d3f9df71ea!2sValley%20Property%20Services!5e0!3m2!1sen!2sus!4v1787846763291!5m2!1sen!2sus" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={true} 
                                    loading="lazy" 
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    title="Valley Property Services Storefront Google Map Location"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MASSIVE REVIEW SLIDER INJECTION LOGIC */}
            <div className="bg-slate-50 pt-20">
                <ReviewSlider city={cityName} />
            </div>
        </main>
    );
}
