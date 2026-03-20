
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
import Link from 'next/link';
import Image from 'next/image';
import SafeHeroImage from '@/components/SafeHeroImage';
import { ChevronRight, ShieldCheck, MapPin, ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
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

    const distantCities = ['wausau', 'stevens-point', 'wisconsin-rapids', 'marshfield', 'rhinelander', 'marinette', 'peshtigo', 'oconto', 'shawano', 'clintonville', 'new-london', 'waupaca', 'wautoma', 'berlin', 'ripon', 'markesan', 'green-lake', 'princeton', 'montello', 'westfield', 'adams', 'friendship', 'mauston', 'new-lisbon', 'necedah', 'tomah', 'sparta', 'black-river-falls', 'neillsville', 'abbotsford', 'medford', 'merrill', 'tomahawk', 'minocqua', 'woodruff', 'eagle-river', 'three-lakes', 'crandon', 'laona', 'wabeno', 'crivitz', 'wausaukee', 'pembine', 'niagara', 'florence', 'iron-mountain', 'kingsford', 'norway', 'escanaba', 'gladstone', 'manistique', 'munising', 'marquette', 'negaunee', 'ishpeming', 'gwinn', 'ironwood', 'hurley', 'mercer', 'manitowish-waters', 'boulder-junction', 'presque-isle', 'land-o-lakes'];

    const urlPath = `/service-areas/${city}`;
    const shouldNoindex = distantCities.includes(city) && !isRedirectDestination(urlPath);

    return {
        title: content.title,
        description: `Top-rated exterior cleaning services dedicated to properties in ${content.city}, Wisconsin.`,
        robots: shouldNoindex ? { index: false, follow: true } : { index: true, follow: true },
        alternates: {
            canonical: `https://valleywindowcare.com/service-areas/${content.citySlug}`
        }
    };
}

export default async function CityHubPage({ params }: PageProps) {
    const { city } = await params;
    const content = serviceData.find((d) => d.type === 'hub' && d.citySlug === city);

    if (!content) {
        return <div>404: City Not Found</div>;
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

    return (
        <main className="w-full overflow-hidden bg-slate-50">
            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
                <SafeHeroImage
                    src={safeImage}
                    fallbackSrc={categoryFallbacks[(content.category || "House Washing") as keyof typeof categoryFallbacks] || getDeterministicHero(city)}
                    alt={`${content.category || 'Professional Exterior Cleaning'} in ${cityName || 'Green Bay, WI'}`}
                />

                <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center mt-16 sm:mt-0">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 md:px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase">
                        <MapPin size={16} className="text-gold" />
                        Serving {cityName}, WI
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        {content.title}
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
                        Expert roof washing, window cleaning, and power washing services.
                    </p>
                </div>
            </section>

            {/* BREADCRUMBS */}
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl py-4 flex items-center text-sm font-semibold text-gray-400 gap-2 uppercase tracking-wider">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link href="/service-areas" className="hover:text-gold transition-colors">Service Areas</Link>
                    <ChevronRight size={14} />
                    <span className="text-navy">{cityName}</span>
                </div>
            </div>

            {/* MAIN CONTENT BLOCK */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* DYNAMIC ENTITY CAPSULE INJECTION */}
                    <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                        Valley Window Care is a fully insured exterior cleaning company providing professional, low-pressure roof washing, window cleaning, and power washing in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.
                    </div>

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
            <section className="py-16 bg-navy text-white border-t border-navy-light relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-xl">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gold border-b border-white/20 pb-6">
                            {cityName} Pricing Expectations
                        </h2>
                        <div className="text-xl text-gray-200 leading-relaxed">
                            Professional exterior cleaning prices vary based on total square footage, building height, and the severity of the organic buildup. We provide exact, transparent quotes before any work begins on your {cityName} property. <Link href="/contact" className="text-gold font-bold hover:text-white transition-colors underline">Request your free quote today.</Link>
                        </div>
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
                        <section className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                <Image src={'/images/portfolio/rust-removal-before-after.webp'} alt={`Rust Removal in ${cityName}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/residential-rust-removal" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Rust Removal</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vRust.subtitle}</p>
                                <p className="text-left">{vRust.p1}</p>
                                <p className="text-left">{vRust.p2.replace('{cityName}', cityName)}</p>
                                <Link href={`/service-areas/${content.citySlug}/rust-removal`} aria-label="Learn more about rust removal services" className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 2 */}
                        <section className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                <Image src={'/images/portfolio/soft-washing.webp'} alt={`Soft Wash in ${cityName}`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/soft-wash" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Professional Soft Wash</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vSoft.subtitle}</p>
                                <p className="text-left">{vSoft.p1}</p>
                                <p className="text-left">{vSoft.p2.replace('{cityName}', cityName)}</p>
                                <Link href={`/service-areas/${content.citySlug}/soft-wash`} aria-label="Learn more about soft washing services" className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 3 */}
                        <section className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                <Image src={'/images/portfolio/drive-way-cleaning.webp'} alt={`Driveway Cleaning in ${cityName}`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/driveway-cleaning" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Driveway Cleaning</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vDrive.subtitle}</p>
                                <p className="text-left">{vDrive.p1}</p>
                                <p className="text-left">{vDrive.p2.replace('{cityName}', cityName)}</p>
                                <Link href={`/service-areas/${content.citySlug}/driveway-cleaning`} aria-label="Learn more about driveway cleaning services" className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 4 */}
                        <section className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                <Image src={'/images/portfolio/solar-panel-cleaning.webp'} alt={`Solar Panel Cleaning in ${cityName}`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/solar-panel-cleaning" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Solar Panel Cleaning</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vSolar.subtitle}</p>
                                <p className="text-left">{vSolar.p1}</p>
                                <p className="text-left">{vSolar.p2.replace('{cityName}', cityName)}</p>
                                <Link href={`/service-areas/${content.citySlug}/solar-panel-cleaning`} aria-label="Learn more about solar panel cleaning services" className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                    Learn More <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </section>

                        {/* Service 5 */}
                        <section className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                            <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                <Image src={'/images/portfolio/store-front-cleaning.webp'} alt={`Commercial Awning Cleaning in ${cityName}`} fill className="object-cover" />
                            </div>
                            <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                <Link href="/services/commercial-awning-cleaning" className="no-underline hover:text-gold transition-colors">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Commercial Awning Cleaning</h3>
                                </Link>
                                <p className="font-semibold text-gray-700">{vAwning.subtitle}</p>
                                <p className="text-left">{vAwning.p1}</p>
                                <p className="text-left">{vAwning.p2.replace('{cityName}', cityName)}</p>
                                <Link href={`/service-areas/${content.citySlug}/commercial-awning-cleaning`} aria-label="Learn more about commercial awning cleaning services" className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
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
                <ServiceGrid city={cityName} />
            </div>

            {/* DYNAMIC MAP AND NAP INJECTION (INTERACTIVE JS) */}
            <div className="bg-slate-50 border-t border-gray-200 relative">
                {/* JSON-LD Structured Data Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Valley Window Care and Exterior Cleaning",
                            "image": "https://valleywindowcare.com/images/portfolio/building-wash-copy.webp",
                            "areaServed": {
                                "@type": "City",
                                "name": `${cityName}, WI`
                            },
                            "telephone": "(920) 609-7085",
                            "url": `https://valleywindowcare.com/service-areas/${content.citySlug}`,
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 44.5192,
                                "longitude": -88.0198
                            }
                        }).replace(/</g, '\\u003c').replace(/'/g, "&apos;")
                    }}
                />

                <VanillaMapClient city={cityName} />
            </div>

            {/* MASSIVE REVIEW SLIDER INJECTION LOGIC */}
            <div className="bg-slate-50 pt-20">
                <ReviewSlider />
            </div>
        </main>
    );
}
