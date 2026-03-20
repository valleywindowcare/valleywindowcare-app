import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Home, Building2 } from 'lucide-react';
import { serviceContentMap } from '@/data/serviceContent';

export type DynamicGridItem = {
    serviceName: string;
    serviceSlug: string;
    imagePath?: string; // Optional now as we don't render them in the table view
};

interface ServiceGridProps {
    city?: string;
    gridItems?: DynamicGridItem[];
}

const formatSlug = (city: string) => city.toLowerCase().replace(/ /g, '-');

// Helper to determine category
const isCommercial = (name: string) => {
    if (name === "Residential Permanent LED Lighting") return false;
    const commercialKeywords = ['Commercial', 'Building', 'Dumpster', 'Graffiti', 'HOA', 'Storefront', 'Drive-Thru', 'Parking Lot', 'Awning', 'Gas Station', 'Post Construction', 'Chewing Gum', 'Hood', 'Apartment', 'Permanent LED Lighting'];
    return commercialKeywords.some(keyword => name.includes(keyword));
};

const DEFAULT_SERVICES = [
    { name: "Roof Cleaning", slug: "roof-cleaning" },
    { name: "House Washing", slug: "house-washing" },
    { name: "Gutter Cleaning", slug: "gutter-cleaning" },
    { name: "Concrete Cleaning", slug: "concrete-cleaning" },
    { name: "Window Cleaning", slug: "window-cleaning" },
    { name: "Christmas Lighting", slug: "christmas-lighting" },
    { name: "Pressure Washing", slug: "pressure-washing" },
    { name: "Residential Permanent LED Lighting", slug: "residential-permanent-led-lighting" },
    { name: "Fence Cleaning", slug: "fence-cleaning" },
    { name: "Deck Cleaning", slug: "deck-cleaning" },
    { name: "Oxidation Removal", slug: "oxidation-removal" },
    { name: "Building Washing", slug: "building-washing" },
    { name: "Dumpster Pad Cleaning", slug: "dumpster-pad-cleaning" },
    { name: "Permanent LED Lighting", slug: "permanent-led-lighting" },
    { name: "Commercial Roof Cleaning", slug: "commercial-roof-cleaning" },
    { name: "Commercial Pressure Washing", slug: "commercial-pressure-washing" },
    { name: "Graffiti Removal", slug: "graffiti-removal" },
    { name: "HOA Services", slug: "hoa-services" },
    { name: "Storefront Cleaning", slug: "storefront-cleaning" },
    { name: "Premium Drive-Thru Cleaning", slug: "premium-drive-thru-cleaning" },
    { name: "Parking Lot & Garage Cleaning", slug: "parking-lot-and-garage-cleaning" },
    { name: "Chewing Gum Removal", slug: "chewing-gum-removal" },
    { name: "Professional Awning Cleaning", slug: "commercial-awning-cleaning" },
    { name: "Gas Station Cleaning", slug: "gas-station-cleaning" },
    { name: "Post Construction Cleanup", slug: "post-construction-cleanup" },
    { name: "Paver Patio Restorations", slug: "paver-patio-restorations" },
    { name: "Commercial Hood Cleaning", slug: "commercial-hood-cleaning" },
    { name: "Apartment Exterior Cleaning", slug: "apartment-exterior-cleaning" },
    { name: "Rust Removal", slug: "rust-removal" },
    { name: "Soft Wash", slug: "soft-wash" },
    { name: "Driveway Cleaning", slug: "driveway-cleaning" },
    { name: "Solar Panel Cleaning", slug: "solar-panel-cleaning" }
];

export default function ServiceGrid({ city, gridItems }: ServiceGridProps) {
    const itemsToRender: DynamicGridItem[] = gridItems && gridItems.length > 0
        ? gridItems
        : DEFAULT_SERVICES.map(s => ({
            serviceName: s.name,
            serviceSlug: s.slug
        }));

    const residentialServices = itemsToRender.filter(item => !isCommercial(item.serviceName));
    const commercialServices = itemsToRender.filter(item => isCommercial(item.serviceName));

    const locationsText = city
        ? `We provide top-rated residential and commercial cleaning services specifically tailored for ${city}, Wisconsin and surrounding areas.`
        : "We provide top-rated residential and commercial cleaning services across Green Bay, Appleton, Door County, and Oshkosh.";

    const renderList = (items: DynamicGridItem[], icon: React.ReactNode, title: string) => (
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 overflow-hidden mb-12">
            <div className="bg-slate-50 border-b border-gray-100 p-8 flex items-center gap-4">
                <div className="bg-navy p-3 rounded-xl text-white">
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-navy">{title}</h3>
            </div>

            <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {items.map((service, idx) => {
                        const href = `/services/${service.serviceSlug}`;

                        return (
                            <Link
                                key={idx}
                                href={href}
                                className="group relative overflow-hidden bg-navy border-2 border-transparent hover:border-gold rounded-2xl hover:shadow-xl transition-all duration-300 flex flex-col h-64"
                            >
                                <Image src={serviceContentMap[service.serviceSlug]?.image || "/images/portfolio/house-washing.webp"} alt={service.serviceName} fill quality={75} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500 z-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                                <div className="relative z-20 flex flex-row items-end justify-between h-full p-6">
                                    <span className="font-bold text-white group-hover:text-gold transition-colors text-xl">
                                        {service.serviceName}
                                    </span>
                                    <div className="bg-white/10 p-2 rounded-full transform group-hover:scale-110 transition-all">
                                        <ChevronRight className="text-gold" size={20} />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 translate-x-32 opacity-50 z-0 hidden lg:block pointer-events-none"></div>

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <div className="flex flex-col mb-16 gap-4 text-center items-center">
                    <p className="text-gold font-bold tracking-widest text-sm uppercase">Complete Service Catalog</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight">
                        Professional Services {city ? `in ${city}` : 'in Wisconsin'}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl">
                        {locationsText}
                    </p>
                </div>

                {residentialServices.length > 0 &&
                    renderList(residentialServices, <Home size={28} />, `Residential Cleaning in ${city || 'Wisconsin'}`)
                }

                {commercialServices.length > 0 &&
                    renderList(commercialServices, <Building2 size={28} />, `Commercial Exterior Services in ${city || 'Wisconsin'}`)
                }
            </div>
        </section>
    );
}
