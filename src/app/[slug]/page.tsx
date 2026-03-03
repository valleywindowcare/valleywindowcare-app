import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ServiceGrid from "@/components/ServiceGrid";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));
import ServiceContent from "@/components/ServiceContent";
import { serviceContentMap } from "@/data/serviceContent";
import { MapPin, ChevronRight, Phone } from "lucide-react";
import VanillaMap from "@/components/VanillaMap";

interface PageProps {
    params: Promise<{ slug: string }>;
}

import { CITIES } from '@/app/service-areas/page';

// 1. Generate Static Params: Pre-build the new local matrix
export async function generateStaticParams() {
    const paths: { slug: string }[] = [];
    const addedSlugs = new Set<string>();

    CITIES.forEach((cityName) => {
        const citySlug = cityName.toLowerCase().replace(/ /g, '-');
        Object.keys(serviceContentMap).forEach((serviceSlug) => {
            const newSlug = `${serviceSlug}-${citySlug}-wi`;
            if (!addedSlugs.has(newSlug)) {
                paths.push({ slug: newSlug });
                addedSlugs.add(newSlug);
            }
        });
    });

    return paths;
}

import * as he from 'he';
import FAQAccordion from '@/components/FAQAccordion';
import { faqData } from '@/data/faqs';
import Link from 'next/link';

// 2. Dynamic Metadata Injection
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    // Dynamic generation for the new [service]-[city]-wi pattern
    let inferredTitle = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ').replace(' Wi', ', WI');
    let titleParts = inferredTitle.split(' ');

    // Try to isolate the service and city strings
    let detectedService = "Exterior Cleaning";
    let detectedCity = "Wisconsin";

    CITIES.forEach((c: string) => {
        const citySlug = c.toLowerCase().replace(/ /g, '-');
        if (slug.includes(`-${citySlug}-wi`)) {
            let serviceSlug = slug.replace(`-${citySlug}-wi`, '');
            detectedService = serviceSlug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            detectedCity = c;
        }
    });

    return {
        title: `${detectedService} in ${detectedCity}, WI | Valley Window Care and Exterior Cleaning`,
        description: `Valley Window Care and Exterior Cleaning provides premium ${detectedService.toLowerCase()} services in ${detectedCity}, Wisconsin and surrounding areas.`,
        alternates: {
            canonical: `https://valleywindowcare.com/${slug}`
        }
    };
}

// 3. Page Component
export default async function DynamicCityPage({ params }: PageProps) {
    const { slug } = await params;

    let detectedCity = "";
    let content = null;
    let h1Text = null;

    // NEW URL PATTERN PARSING: [service]-[city]-wi (Phase 15 Logic)
    CITIES.forEach((c) => {
        const citySlug = c.toLowerCase().replace(/ /g, '-');
        if (slug.includes(`-${citySlug}-wi`)) {
            let serviceSlug = slug.replace(`-${citySlug}-wi`, '');
            detectedCity = c;

            if (serviceContentMap[serviceSlug]) {
                content = {
                    title: serviceSlug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                    data: { ...serviceContentMap[serviceSlug] }
                };
                content.data.image = "/site-gallery/authentic-IMG_3952.jpg";
            } else {
                // EMERGENCY CONTENT FILL: Dynamically generate service details if not specifically mapped
                content = {
                    title: serviceSlug.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                    data: {
                        description: `Welcome to Valley Window Care and Exterior Cleaning's premier ${serviceSlug.split('-').join(' ')} service. We are proud to offer professional ${serviceSlug.split('-').join(' ')} solutions to residential and commercial properties throughout ${detectedCity}, Wisconsin and the surrounding areas.`,
                        benefits: ["Professional Quality", "Fully Insured", "Satisfaction Guaranteed"],
                        process: ["Free Quote", "Schedule Service", "Enjoy Your Clean Property"]
                    }
                };
            }

            h1Text = `${content.title} in ${detectedCity}, WI`;
        }
    });

    // If it's a completely unknown URL, 404
    if (!detectedCity && !content) notFound();

    const lowerSlug = slug.toLowerCase();

    // Fallback fuzzy search if content wasn't explicitly matched by the exact city split above
    if (!content) {
        if (lowerSlug.includes('roof-cleaning')) content = { title: "Roof Cleaning", data: serviceContentMap["roof-cleaning"] };
        else if (lowerSlug.includes('house-washing')) content = { title: "House Washing", data: serviceContentMap["house-washing"] };
        else if (lowerSlug.includes('gutter-cleaning')) content = { title: "Gutter Cleaning", data: serviceContentMap["gutter-cleaning"] };
        else if (lowerSlug.includes('concrete-cleaning') || lowerSlug.includes('paver')) content = { title: "Concrete Cleaning", data: serviceContentMap["concrete-cleaning"] };
        else if (lowerSlug.includes('window-cleaning')) content = { title: "Window Cleaning", data: serviceContentMap["window-cleaning"] };
        else if (lowerSlug.includes('christmas-lighting')) content = { title: "Christmas Lighting", data: serviceContentMap["christmas-lighting"] };
        else if (lowerSlug.includes('pressure-washing')) content = { title: "Pressure Washing", data: serviceContentMap["pressure-washing"] };
        else if (lowerSlug.includes('building-washing')) content = { title: "Building Washing", data: serviceContentMap["building-washing"] };
        else if (lowerSlug.includes('dumpster-pad')) content = { title: "Dumpster Pad Cleaning", data: serviceContentMap["dumpster-pad-cleaning"] };
        else if (lowerSlug.includes('graffiti')) content = { title: "Graffiti Removal", data: serviceContentMap["graffiti-removal"] };
        else if (lowerSlug.includes('residential-permanent-led-lighting')) content = { title: "Residential Permanent LED Lighting", data: serviceContentMap["residential-permanent-led-lighting"] };
        else if (lowerSlug.includes('permanent-led-lighting')) content = { title: "Permanent LED Lighting", data: serviceContentMap["permanent-led-lighting"] };
        else if (lowerSlug.includes('hoa')) content = { title: "Multi-Unit Property Cleaning", data: serviceContentMap["hoa-services"] };
        else if (serviceContentMap[lowerSlug]) content = { title: lowerSlug.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '), data: serviceContentMap[lowerSlug] };
    }

    // Default H1 for new pages if none provided
    if (!h1Text && content && detectedCity) {
        h1Text = `${content.title} in ${detectedCity}, WI`;
    }

    const isCommercial =
        lowerSlug.includes('commercial') ||
        lowerSlug.includes('hoa') ||
        lowerSlug.includes('building') ||
        lowerSlug.includes('dumpster') ||
        lowerSlug.includes('storefront') ||
        lowerSlug.includes('graffiti') ||
        lowerSlug.includes('parking') ||
        lowerSlug.includes('gas-station') ||
        lowerSlug.includes('awning') ||
        lowerSlug.includes('post-construction') ||
        lowerSlug.includes('chewing-gum') ||
        lowerSlug.includes('paver');

    return (
        <>
            {/* Structural SEO Routing (Breadcrumbs) (Phase 99) */}
            {detectedCity && content && (
                <div className="bg-navy text-gray-300 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold border-b border-navy-dark relative z-20">
                    <div className="container mx-auto px-4 max-w-7xl flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                        <Link href="/service-areas" className="hover:text-gold transition-colors">Service Areas</Link>
                        <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                        <Link href={`/service-areas/${detectedCity.toLowerCase().replace(/ /g, '-')}`} className="hover:text-gold transition-colors">{detectedCity}</Link>
                        <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                        <span className="text-gold">{content.title}</span>
                    </div>
                </div>
            )}

            <Hero
                h1={
                    h1Text ? (
                        <>
                            {h1Text} <br />
                            <span className="text-gold text-2xl md:text-3xl mt-4 block">Valley Window Care and Exterior Cleaning</span>
                        </>
                    ) : undefined
                }
                description={content?.data?.description}
                bgImage={content?.data?.image}
            />
            <Process isCommercial={isCommercial} />
            {content && (
                <ServiceContent
                    title={content.title}
                    description={content.data?.description || "Valley Window Care and Exterior Cleaning provides premium exterior services."}
                    benefits={content.data?.benefits || ["Professional Quality", "Fully Insured", "Satisfaction Guaranteed"]}
                    process={content.data?.process || ["Free Quote", "Schedule Service", "Enjoy Your Clean Property"]}
                    city={detectedCity}
                    image={content.data?.image}
                />
            )}

            {/* Contextual FAQ Injection */}
            {(() => {
                const searchSlug = content?.title?.toLowerCase().replace(/ /g, '-') || lowerSlug;
                const serviceFAQCategory = faqData.find(cat => cat.mappedSlugs.includes(searchSlug));
                if (!serviceFAQCategory) return null;

                return (
                    <section className="py-20 bg-slate-50 border-t border-gray-100">
                        <div className="container mx-auto px-4 max-w-4xl">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
                                <p className="text-gray-600 text-lg">Common questions about our {content?.title?.toLowerCase() || 'cleaning'} services.</p>
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

            {/* Localized Internal Cross-Linking Matrix */}
            {detectedCity && (
                <section className="py-20 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-navy mb-4">More Exterior Services in {detectedCity}</h2>
                            <p className="text-gray-600">Complete property care solutions for your home or business.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                { name: "Roof Cleaning", slug: "roof-cleaning" },
                                { name: "House Washing", slug: "house-washing" },
                                { name: "Window Cleaning", slug: "window-cleaning" },
                                { name: "Gutter Cleaning", slug: "gutter-cleaning" },
                                { name: "Pressure Washing", slug: "pressure-washing" }
                            ].map((s) => (
                                <Link
                                    key={s.slug}
                                    href={`/${s.slug}-${detectedCity.toLowerCase().replace(/ /g, '-')}-wi`}
                                    className="block p-6 bg-slate-50 hover:bg-navy text-navy-dark hover:text-white rounded-2xl border border-gray-100 transition-all shadow-sm font-bold text-center group"
                                >
                                    {s.name} <span className="text-gold group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-10">
                            <Link href={`/service-areas/${detectedCity.toLowerCase().replace(/ /g, '-')}`} className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white font-bold py-3 px-8 rounded-full transition-colors uppercase text-sm tracking-wider">
                                Back to {detectedCity} Overview
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            <ReviewSlider />

            {/* Deep Local SEO Area based on Phase 6 Requirements */}
            {detectedCity && (
                <div className="bg-slate-50 border-t border-gray-200 relative">
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
                                    "name": `${detectedCity}, WI`
                                },
                                "telephone": "(920) 609-7085",
                                "url": `https://valleywindowcare.com/${slug}`,
                                "geo": {
                                    "@type": "GeoCoordinates",
                                    "latitude": 44.5192,
                                    "longitude": -88.0198
                                }
                            })
                        }}
                    />

                    <VanillaMap city={detectedCity} />
                </div>
            )}
        </>
    );
}
