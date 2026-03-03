import Link from 'next/link';
import Image from 'next/image';
import SafeHeroImage from '@/components/SafeHeroImage';
import { ChevronRight, ShieldCheck, MapPin, ArrowRight, Phone } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';
import ServiceGrid from '@/components/ServiceGrid';
import VanillaMap from '@/components/VanillaMap';
import serviceData from '@/data/serviceAreasContent.json';

export function generateStaticParams() {
    return serviceData
        .filter((d) => d.type === 'hub')
        .map((d) => ({ city: d.citySlug }));
}

type PageProps = {
    params: Promise<{ city: string }>;
};

export async function generateMetadata({ params }: PageProps) {
    const { city } = await params;
    const content = serviceData.find((d) => d.type === 'hub' && d.citySlug === city);

    if (!content) {
        return { title: 'Service Area Not Found' };
    }

    return {
        title: content.title,
        description: `Top-rated exterior cleaning services dedicated to properties in ${content.city}, Wisconsin.`
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
        "Roof Cleaning": "/site-gallery/roof1.jpg",
        "House Washing": "/site-gallery/house1.jpg",
        "Gutter Cleaning": "/site-gallery/gutter1.jpg",
        "Concrete Cleaning": "/site-gallery/concrete1.jpg",
        "Window Cleaning": "/site-gallery/window1.jpg",
        "Christmas Lighting": "/site-gallery/xmas1.jpg",
        "Pressure Washing": "/site-gallery/pressure1.jpg",
        "Residential Permanent LED Lighting": "/site-gallery/xmas1.jpg",
        "Commercial Roof Cleaning": "/site-gallery/hood1.jpg",
        "Building Washing": "/site-gallery/house1.jpg",
        "Hood Vent Cleaning": "/site-gallery/hood1.jpg"
    };

    // Safe execution: If no hero image was generated, forcefully load authentically.
    const safeImage = heroImage || categoryFallbacks[(content.category || "House Washing") as keyof typeof categoryFallbacks] || "/site-gallery/authentic-crew-photo.jpg";

    return (
        <main className="w-full overflow-hidden bg-slate-50">
            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
                <SafeHeroImage
                    src={safeImage}
                    fallbackSrc={categoryFallbacks[(content.category || "House Washing") as keyof typeof categoryFallbacks] || "/site-gallery/authentic-crew-photo.jpg"}
                    alt={content.altText || `Professional Exterior Cleaning in ${cityName}, WI - Valley Window Care`}
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
                        Expert roof washing, window cleaning, and power washing services engineered specifically for {cityName} weather.
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
                    <div
                        className="prose prose-lg md:prose-xl prose-headings:text-[#1E2B3C] prose-headings:font-bold prose-p:text-black text-black max-w-none dangerously-injected-html"
                        dangerouslySetInnerHTML={{
                            __html: content.content
                                .replace(/<h2/g, '<h1')
                                .replace(/<\/h2>/g, '</h1>')
                                .replace(/<h3/g, '<h2')
                                .replace(/<\/h3>/g, '</h2>')
                        }}
                    />
                </div>
            </section>

            {/* FEATURED SERVICE EXPANSION INJECTION */}
            {(content.citySlug === 'green-bay' || content.citySlug === 'appleton') && (
                <section className="py-20 bg-slate-50 border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight">Our Expanded Services in {cityName}</h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We have rapidly expanded our capabilities to provide these highly requested, premium services to our residential and commercial clients across {cityName}.</p>
                        </div>

                        <div className="space-y-16">
                            {/* Service 1 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                    <Image src="/site-gallery/authentic-IMG_5941.jpg" alt={`Residential Rust Removal in ${cityName}`} fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Residential Rust Removal</h3>
                                    <p className="text-left">Eradicate ugly orange rust stains caused by irrigation systems, battery acid, or metal runoff. We use professional-grade restoration acids to safely remove stains from your {cityName} property that regular pressure washing absolutely cannot touch.</p>
                                    <Link href={`/services/rust-removal`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                    <Image src="/site-gallery/authentic-IMG_8432.jpg" alt={`Soft Wash in ${cityName}`} fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Professional Soft Wash</h3>
                                    <p className="text-left">Protect your delicate siding, paint, and trim from the harsh, destructive impact of high-pressure washing. Our Soft Wash system utilizes safe, eco-friendly detergents to completely break down and kill organic growth at its source, keeping your {cityName} exterior cleaner for much longer.</p>
                                    <Link href={`/services/soft-washing`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                    <Image src="/gallery/audit-replacements/audit-1772396199144-839.webp" alt={`Driveway Cleaning in ${cityName}`} fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Driveway Cleaning</h3>
                                    <p className="text-left">Safely blast away deep oil, grease, tire mark grime, and slippery algae from your walking surfaces. Using our professional-grade rotary surface cleaners, we ensure a perfectly uniform, deep clean for your {cityName} driveway without leaving any destructive zebra stripes behind.</p>
                                    <Link href={`/services/driveway-cleaning`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Service 4 */}
                            <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                    <Image src="/gallery/audit-replacements/audit-1772396199746-444.webp" alt={`Solar Panel Cleaning in ${cityName}`} fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Solar Panel Cleaning</h3>
                                    <p className="text-left">Maximize your energy output with professional, deionized pure-water solar panel cleaning. We carefully remove the pollen, dust, and bird droppings that block UV rays and reduce efficiency for residential and commercial solar arrays across {cityName}.</p>
                                    <Link href={`/services/solar-panel-cleaning`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                            {/* Service 5 */}
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                                <div className="w-full md:w-1/2 relative h-[300px] rounded-2xl overflow-hidden shrink-0">
                                    <Image src="/gallery/audit-replacements/audit-1772396199407-371.webp" alt={`Commercial Awning Cleaning in ${cityName}`} fill className="object-cover" />
                                </div>
                                <div className="w-full md:w-1/2 prose prose-slate lg:prose-xl max-w-none">
                                    <h3 className="text-3xl font-bold text-navy mt-0 text-left">Commercial Awning Cleaning</h3>
                                    <p className="text-left">Safely restore commercial fabric, vinyl, and metal awnings using our low-pressure cleaning systems. We meticulously remove bird droppings, mold, and atmospheric fallout that dull your brand identity, restoring the professional appearance of your {cityName} storefront.</p>
                                    <Link href={`/services/professional-awning-cleaning`} className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold transition-colors mt-4 no-underline">
                                        Learn More <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>

                        </div>
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
                            "image": "https://valleywindowcare.com/_next/image?url=%2Fsite-gallery%2Fjob2.jpg&w=1920&q=85",
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

                <VanillaMap city={cityName} />
            </div>

            {/* MASSIVE REVIEW SLIDER INJECTION LOGIC */}
            <div className="bg-slate-50 pt-20">
                <ReviewSlider />
            </div>
        </main>
    );
}
