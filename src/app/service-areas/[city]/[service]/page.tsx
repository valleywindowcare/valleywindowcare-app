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
        .filter((d) => d.type === 'service')
        .map((d) => ({ city: d.citySlug, service: d.serviceSlug }));
}

type PageProps = {
    params: Promise<{ city: string, service: string }>;
};

export async function generateMetadata({ params }: PageProps) {
    const { city, service } = await params;
    const content = serviceData.find((d) => d.type === 'service' && d.citySlug === city && d.serviceSlug === service);

    if (!content) {
        return { title: 'Service Area Not Found' };
    }

    return {
        title: content.title,
        description: `Premium ${content.service} dedicated to properties in ${content.city}, Wisconsin.`
    };
}

export default async function CityServicePage({ params }: PageProps) {
    const { city, service } = await params;

    const content = serviceData.find((d) => d.type === 'service' && d.citySlug === city && d.serviceSlug === service);

    if (!content) {
        return <div className="p-20 text-center text-3xl font-bold">404: Service Not Found</div>;
    }

    const cityName = content.city;
    const serviceName = content.service || "Exterior Cleaning";
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

    const safeImage = heroImage || categoryFallbacks[serviceName as keyof typeof categoryFallbacks] || "/site-gallery/authentic-crew-photo.jpg";

    return (
        <main className="w-full overflow-hidden bg-slate-50">
            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-navy">
                <SafeHeroImage
                    src={safeImage}
                    fallbackSrc={categoryFallbacks[serviceName as keyof typeof categoryFallbacks] || "/site-gallery/authentic-crew-photo.jpg"}
                    alt={content.altText || `${serviceName} in ${cityName}, WI - Valley Window Care`}
                />

                <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center mt-16 sm:mt-0">
                    <div className="inline-flex items-center gap-2 backdrop-blur-md px-4 md:px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase bg-white/10 border-white/20 text-white">
                        <MapPin size={16} className="text-gold" />
                        Serving {cityName}, WI
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-white">
                        {content.title}
                    </h1>
                    <p className="text-lg md:text-2xl font-light mb-10 max-w-3xl mx-auto leading-relaxed text-slate-300">
                        Precision-engineered <strong>{serviceName.toLowerCase()}</strong> operations designed specifically for {cityName} environmental requirements.
                    </p>
                </div>
            </section>

            {/* BREADCRUMBS */}
            <div className="bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 max-w-7xl py-4 flex flex-wrap items-center text-sm font-semibold text-gray-400 gap-2 uppercase tracking-wider">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <Link href="/service-areas" className="hover:text-gold transition-colors">Service Areas</Link>
                    <ChevronRight size={14} />
                    <Link href={`/service-areas/${content.citySlug}`} className="hover:text-gold transition-colors">{cityName}</Link>
                    <ChevronRight size={14} />
                    <span className="text-navy">{serviceName}</span>
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

            {/* SERVICES GRID */}
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
                            "url": `https://valleywindowcare.com/service-areas/${content.citySlug}/${content.serviceSlug}`,
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

            {/* REVIEWS */}
            <div className="bg-slate-50 pt-20">
                <ReviewSlider />
            </div>
        </main>
    );
}
