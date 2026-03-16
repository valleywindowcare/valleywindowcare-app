
function getDeterministicHero(seed: string): string {
    const images = [
        "/images/portfolio/house-wash-before-after.webp",
        "/images/portfolio/concrete-cleaning.webp",
        "/images/portfolio/roof-cleaning.webp",
        "/images/portfolio/pressure-washing.webp",
        "/images/portfolio/soft-washing.webp",
        "/images/portfolio/building-wash-copy.webp",
        "/images/portfolio/house-washing.webp",
        "/images/portfolio/commercial-cleaning.webp",
        "/images/portfolio/deck-cleaning.webp"
    ];
    let sum = 0;
    for (let i = 0; i < seed.length; i++) {
        sum += seed.charCodeAt(i);
    }
    return images[sum % images.length];
}
import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));
import ServiceContent from "@/components/ServiceContent";
import SEOAuthorityEngine from "@/components/SEOAuthorityEngine";
import FAQAccordion from "@/components/FAQAccordion";
import PricingGuide from "@/components/PricingGuide";
import { serviceContentMap } from "@/data/serviceContent";
import VanillaMapClient from "@/components/VanillaMapClient";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import HeroForm from '@/components/HeroForm';
import Image from 'next/image';

// Known services mapped from NW Softwash breakdown
const validServices = [
    // Residential
    "roof-cleaning",
    "house-washing",
    "gutter-cleaning",
    "concrete-cleaning",
    "window-cleaning",
    "christmas-lighting",
    "pressure-washing",
    "residential-permanent-led-lighting",
    "fence-cleaning",
    "deck-cleaning",
    "oxidation-removal",
    "soft-wash",
    "driveway-cleaning",
    "solar-panel-cleaning",
    "rust-removal",
    // Commercial
    "building-washing",
    "dumpster-pad-cleaning",
    "permanent-led-lighting",
    "commercial-roof-cleaning",
    "commercial-pressure-washing",
    "graffiti-removal",
    "hoa-multi-unit-cleaning",
    "storefront-cleaning",
    "premium-drive-thru-cleaning",
    "parking-lot-and-garage-cleaning",
    "chewing-gum-removal",
    "commercial-awning-cleaning",
    "gas-station-cleaning",
    "post-construction-cleanup",
    "paver-patio-restorations",
    "commercial-hood-cleaning",
    "apartment-exterior-cleaning"
];

const commercialServices = [
    "building-washing",
    "dumpster-pad-cleaning",
    "permanent-led-lighting",
    "commercial-roof-cleaning",
    "commercial-pressure-washing",
    "graffiti-removal",
    "hoa-multi-unit-cleaning",
    "storefront-cleaning",
    "premium-drive-thru-cleaning",
    "parking-lot-and-garage-cleaning",
    "chewing-gum-removal",
    "commercial-awning-cleaning",
    "gas-station-cleaning",
    "post-construction-cleanup",
    "paver-patio-restorations",
    "commercial-hood-cleaning",
    "apartment-exterior-cleaning"
];

export function generateStaticParams() {
    return validServices.map((service) => ({
        service: service,
    }));
}

const formatTitle = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

type PageProps = {
    params: Promise<{ service: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { service } = await params;
    const formattedName = formatTitle(service);

    const isCommercial = commercialServices.includes(service);

    const categoryFallbacks: Record<string, string> = {
        "roof-clean": "/images/portfolio/roof-cleaning.webp",
        "roof-cleaning": "/images/portfolio/roof-cleaning.webp",
        "house-washing": "/images/portfolio/house-wash-before-after.webp",
        "gutter-cleaning": "/images/portfolio/gutter-cleaning.webp",
        "concrete-cleaning": "/images/portfolio/concrete-cleaning.webp",
        "window-cleaning": "/images/portfolio/window-cleaning-before-after.JPG.webp",
        "christmas-lighting": "/images/portfolio/permanent-lighting-night-suamico.webp",
        "permanent-led-lighting": "/images/portfolio/permanent-lighting-night-suamico.webp",
        "pressure-washing": "/images/portfolio/pressure-washing.webp",
        "commercial-roof-cleaning": "/images/portfolio/roof-cleaning.webp",
        "building-washing": "/images/portfolio/building-washing.webp",
        "hood-vent-cleaning": "/images/portfolio/building-washing.webp",
        "commercial-hood-cleaning": "/images/portfolio/building-washing.webp",
        "commercial-hood-vent": "/images/portfolio/building-washing.webp",
        "commercial-awning": "/images/portfolio/awning-cleaning.webp",
        "commercial-awning-cleaning": "/images/portfolio/awning-cleaning.webp",
        "drive-way-cleaning": "/images/portfolio/drive-way-cleaning.webp",
        "driveway-cleaning": "/images/portfolio/drive-way-cleaning.webp",
        "residential-rust-removal": "/images/portfolio/rust-removal-before-after.webp",
        "solar-panel": getDeterministicHero(service),
        "solar-panel-cleaning": getDeterministicHero(service),
        "soft-washing": "/images/portfolio/soft-washing.webp",
        "soft-wash": "/images/portfolio/soft-washing.webp"
    };



    const seoTitle = isCommercial
        ? `Commercial ${formattedName} in Green Bay & Northeast WI`
        : `${formattedName} in Green Bay & Northeast WI`;

    const seoDescription = isCommercial
        ? `Valley Window Care and Exterior Cleaning provides premium ${formattedName.toLowerCase()} and property maintenance for businesses in Green Bay, Appleton, and surrounding areas.`
        : `Valley Window Care and Exterior Cleaning offers premium ${formattedName.toLowerCase()} for residential properties in Green Bay, Appleton, and surrounding areas.`;

    const seoImage = categoryFallbacks[service] || "/images/portfolio/house-washing.webp";

    return {
        title: seoTitle,
        description: seoDescription,
        alternates: {
            canonical: `https://valleywindowcare.com/services/${service}`
        },
        openGraph: {
            title: seoTitle,
            description: seoDescription,
            url: `https://valleywindowcare.com/services/${service}`,
            siteName: 'Valley Window Care',
            images: [
                {
                    url: `https://valleywindowcare.com${seoImage}`,
                    width: 1200,
                    height: 630,
                    alt: `${formattedName} Portfolio Showcase in Wisconsin`,
                }
            ],
            type: 'website',
        }
    };
}

export default async function ServiceGenericPage({ params }: PageProps) {
    const { service } = await params;
    const formattedName = formatTitle(service);

    const content = serviceContentMap[service] || {
        description: `Valley Window Care and Exterior Cleaning provides premium ${formattedName.toLowerCase()} services.`,
        benefits: ["Professional Quality", "Fully Insured", "Satisfaction Guaranteed"],
        process: ["Free Quote", "Schedule Service", "Enjoy Your Clean Property"]
    };


    const isCommercial = commercialServices.includes(service);

    // BRUTE FORCE LIGHTING OVERRIDE (Resolves Next.js Image shatter)
    const isLightingPage = service.includes('lighting');
    const heroImageToUse = isLightingPage ? "/images/portfolio/permanent-lighting-night-suamico.webp" : (content?.image || "/images/portfolio/house-washing.webp");
    const bodyImageToUse = isLightingPage ? "/images/portfolio/permanent-lighting.webp" : (content?.image || "/images/portfolio/house-washing.webp");

    return (
        <>
            <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center py-20 bg-slate-900 overflow-hidden">
                <img src={heroImageToUse || "/images/portfolio/house-washing.webp"} alt="Service Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-50" />
                <div className="relative z-10 w-full max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-tight drop-shadow-lg text-white">
                        Professional <span className="text-gold">{formattedName}</span><br />
                        <span className="text-2xl md:text-3xl mt-2 block">Green Bay & Northeast Wisconsin</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 font-semibold leading-relaxed drop-shadow-md pb-8">
                        Valley Window Care and Exterior Cleaning provides premium {formattedName.toLowerCase()} services to restore, protect, and enhance your property's value.
                    </p>
                </div>

                {/* Bottom Section: Dual-Action Quote Box (Zero-Gap Stack) */}
                <div className="!relative !z-10 !w-full !max-w-xl !mx-auto !bg-white !rounded-xl !shadow-2xl !overflow-hidden flex flex-col text-navy-dark min-h-[500px] sm:min-h-[480px]" id="quote-form">
                    {/* Top Action Header */}
                    <div className="bg-gradient-to-br from-[#1B365D]/95 to-[#2c538c]/95 text-white w-full border-b border-white/10">
                        <div className="!flex !flex-col !items-center !justify-center !text-center !w-full pt-4 pb-2">
                            <h3 className="text-2xl font-bold !text-center !w-full !block">Get In Touch Fast</h3>
                        </div>

                        <div className="!flex !flex-row !justify-around !items-center !p-6 !w-full">
                            <a href="tel:920-609-7085" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center" rel="nofollow" aria-label="Call Us">
                                <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                    <Phone size={24} className="text-gold" />
                                </div>
                                <div className="flex flex-col items-center !text-center w-full">
                                    <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Call Or Text</p>
                                    <p className="font-bold !text-xs sm:!text-sm whitespace-nowrap !text-center">(920) 609-7085</p>
                                </div>
                            </a>

                            <a href="mailto:info@valleywindowcare.com" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center overflow-hidden" rel="nofollow" aria-label="Email Us">
                                <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                    <Mail size={24} className="text-gold" />
                                </div>
                                <div className="flex flex-col items-center !text-center w-full px-1">
                                    <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Email Us</p>
                                    <p className="font-bold !text-[10px] sm:!text-xs break-all !text-center w-full">info@valleywindowcare.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Action Body (Form OR Success State) */}
                    <HeroForm />
                </div>
            </section>
            <Process isCommercial={isCommercial} />
            {content && (
                <ServiceContent
                    title={formattedName}
                    description={content.description}
                    benefits={content.benefits}
                    process={content.process}
                    image={bodyImageToUse}
                />
            )}

            {/* Injects 1,000+ words of Semantic Core Content globally per service */}
            <div className="container mx-auto px-4 py-8 mb-12">
                <SEOAuthorityEngine
                    serviceSlug={service}
                    serviceName={formattedName}
                />
            </div>

            {/* DYNAMIC MAP AND NAP INJECTION (INTERACTIVE JS) */}
            {service === "roof-cleaning" && (
                <div className="container mx-auto px-4 py-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-navy mb-4">Local Roof Cleaning Services</h3>
                        <p className="text-gray-600 mb-6">We provide specialized, soft-wash roof cleaning tailored to the unique environmental conditions of the following Wisconsin communities:</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <Link href="/service-areas/green-bay/roof-cleaning" className="text-blue-600 hover:text-gold font-semibold transition-colors flex items-center gap-2">Green Bay Roof Cleaning <span aria-hidden="true">&rarr;</span></Link>
                            <Link href="/service-areas/neenah/roof-cleaning" className="text-blue-600 hover:text-gold font-semibold transition-colors flex items-center gap-2">Neenah Roof Cleaning <span aria-hidden="true">&rarr;</span></Link>
                            <Link href="/service-areas/appleton/roof-cleaning" className="text-blue-600 hover:text-gold font-semibold transition-colors flex items-center gap-2">Appleton Roof Cleaning <span aria-hidden="true">&rarr;</span></Link>
                            <Link href="/service-areas/ashwaubenon/roof-cleaning" className="text-blue-600 hover:text-gold font-semibold transition-colors flex items-center gap-2">Ashwaubenon Roof Cleaning <span aria-hidden="true">&rarr;</span></Link>
                            <Link href="/service-areas/menasha/roof-cleaning" className="text-blue-600 hover:text-gold font-semibold transition-colors flex items-center gap-2">Menasha Roof Cleaning <span aria-hidden="true">&rarr;</span></Link>
                            <Link href="/service-areas/kaukauna/roof-cleaning" className="text-blue-600 hover:text-gold font-semibold transition-colors flex items-center gap-2">Kaukauna Roof Cleaning <span aria-hidden="true">&rarr;</span></Link>
                        </div>
                    </div>
                </div>
            )}
            <div className="bg-slate-50 border-t border-gray-200 relative">
                {/* JSON-LD Structured Data Schema - Upgraded to 'Service' */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": formattedName,
                            "serviceType": formattedName,
                            "description": `Valley Window Care and Exterior Cleaning provides premium ${formattedName.toLowerCase()} and property maintenance for homes and businesses in Northeast Wisconsin.`,
                            "image": `https://valleywindowcare.com${bodyImageToUse}`,
                            "provider": {
                                "@type": "LocalBusiness",
                                "name": "Valley Window Care and Exterior Cleaning",
                                "image": "https://valleywindowcare.com/images/portfolio/house-wash-before-after.webp",
                                "telephone": "(920) 609-7085",
                                "url": `https://valleywindowcare.com/services/${service}`
                            },
                            "areaServed": [
                                { "@type": "City", "name": "Green Bay" },
                                { "@type": "City", "name": "De Pere" },
                                { "@type": "City", "name": "Appleton" },
                                { "@type": "City", "name": "Oshkosh" },
                                { "@type": "City", "name": "Door County" }
                            ],
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": `${formattedName} Services`,
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": formattedName
                                        },
                                        "priceCurrency": "USD",
                                        "price": "149.00"
                                    }
                                ]
                            }
                        })
                    }}
                />

                {/* BreadcrumbList Schema */}
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
                                    "item": "https://valleywindowcare.com/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Services",
                                    "item": "https://valleywindowcare.com/services"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": formattedName,
                                    "item": `https://valleywindowcare.com/services/${service}`
                                }
                            ]
                        })
                    }}
                />

                <VanillaMapClient />
            </div>

            <PricingGuide />

            {/* Contextual FAQ Injection */}
            {(() => {
                const serviceFaqs = content.faqs;
                if (!serviceFaqs || serviceFaqs.length === 0) return null;

                const localFaqSchema = {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": serviceFaqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                };

                return (
                    <section className="py-20 bg-slate-50 border-t border-gray-100">
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaqSchema) }}
                        />
                        <div className="container mx-auto px-4 max-w-4xl">
                            <FAQAccordion faqs={serviceFaqs} />
                            <div className="text-center mt-12 block">
                                <Link href="/faq" className="inline-flex font-bold text-navy hover:text-gold transition-colors items-center gap-2">
                                    View All FAQs <span aria-hidden="true">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                );
            })()}

            <ReviewSlider />
        </>
    );
}
