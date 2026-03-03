import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));
import ServiceContent from "@/components/ServiceContent";
import SEOAuthorityEngine from "@/components/SEOAuthorityEngine";
import FAQAccordion from "@/components/FAQAccordion";
import { serviceContentMap } from "@/data/serviceContent";
import { faqData } from "@/data/faqs";
import VanillaMap from "@/components/VanillaMap";
import Link from "next/link";
import { Phone } from "lucide-react";

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
    "professional-awning-cleaning",
    "gas-station-cleaning",
    "post-construction-cleanup",
    "paver-patio-restorations",
    "commercial-hood-cleaning"
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
    "professional-awning-cleaning",
    "gas-station-cleaning",
    "post-construction-cleanup",
    "paver-patio-restorations",
    "commercial-hood-cleaning"
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

    return {
        title: isCommercial
            ? `Commercial ${formattedName} | Property Maintenance | Valley Window Care and Exterior Cleaning`
            : `Professional ${formattedName} Services | Valley Window Care and Exterior Cleaning`,
        description: isCommercial
            ? `Valley Window Care and Exterior Cleaning provides premium ${formattedName.toLowerCase()} and property maintenance for businesses in Green Bay, Appleton, and surrounding areas.`
            : `Valley Window Care and Exterior Cleaning offers premium ${formattedName.toLowerCase()} for residential properties in Green Bay, Appleton, and surrounding areas.`,
        alternates: {
            canonical: `https://valleywindowcare.com/services/${service}`
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

    return (
        <>
            <Hero
                h1={
                    <>
                        Professional <span className="text-gold">{formattedName}</span><br />
                        <span className="text-2xl md:text-3xl mt-4 block">Green Bay & Northeast Wisconsin</span>
                    </>
                }
                description={`Valley Window Care and Exterior Cleaning provides premium ${formattedName.toLowerCase()} services to restore, protect, and enhance your property's value.`}
                bgImage={content?.image}
            />
            <Process isCommercial={isCommercial} />
            {content && (
                <ServiceContent
                    title={formattedName}
                    description={content.description}
                    benefits={content.benefits}
                    process={content.process}
                    image={content.image}
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
                                "name": "Northeast Wisconsin"
                            },
                            "telephone": "(920) 609-7085",
                            "url": `https://valleywindowcare.com/services/${service}`,
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 44.5192,
                                "longitude": -88.0198
                            }
                        })
                    }}
                />

                <VanillaMap />
            </div>

            {/* Contextual FAQ Injection */}
            {(() => {
                const serviceFAQCategory = faqData.find(cat => cat.mappedSlugs.includes(service));
                if (!serviceFAQCategory) return null;

                return (
                    <section className="py-20 bg-slate-50 border-t border-gray-100">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                                <p className="text-gray-600 text-lg">Common questions about our {formattedName.toLowerCase()} services.</p>
                            </div>
                            <FAQAccordion faqs={serviceFAQCategory.faqs} />
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
