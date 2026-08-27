import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { ExternalLink, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: "Trusted Local Partners | Valley Property Services",
    description: "Discover our network of trusted local contractors and service providers in Green Bay, Appleton, and the Fox Valley area who share our standards.",
};

interface Partner {
    name: string;
    category: string;
    location: string;
    websiteUrl: string;
    description: string;
    logoPlaceholderText: string;
    logoUrl?: string;
}

const partners: Partner[] = [
    {
        name: "Diamond Detail & Tint",
        category: "Automotive Detailing, Ceramic Coating & Window Tinting",
        location: "Fox Valley / Northeast WI",
        websiteUrl: "https://www.diamond-tinting.com/",
        description: "When our clients ask for the best automotive protection and vehicle care in the region, we proudly recommend Diamond Detail & Tint. From precision window tinting and paint correction to durable ceramic coatings and interior detailing, their team delivers exceptional craftsmanship and attention to detail.",
        logoPlaceholderText: "DDT",
        logoUrl: "/images/partners/diamond-detail-tint.webp"
    }
];

export default function TrustedPartnersPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20 text-navy">
            <Hero 
                h1="Trusted Local Partners & Community Network" 
                description="Exceptional Northeast Wisconsin businesses we know, trust, and proudly recommend to our clients." 
            />

            <div className="container mx-auto max-w-5xl px-4 mt-16">
                {/* Intro Section */}
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-sm mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        At Valley Property Services, we believe in supporting local craftsmanship. Below are trusted local service providers across Green Bay, the Fox Valley, and Northeast Wisconsin who share our commitment to top-tier quality and customer satisfaction.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid gap-8">
                    {partners.map((partner) => (
                        <div 
                            key={partner.name} 
                            className="bg-white rounded-3xl border border-gray-200/80 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow grid md:grid-cols-12 gap-6 items-center"
                        >
                            {/* Logo */}
                            <div className="md:col-span-3 flex justify-center">
                                {partner.logoUrl ? (
                                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-slate-900 flex items-center justify-center p-3 shadow-inner relative">
                                        <div className="w-full h-full relative">
                                            <Image 
                                                src={partner.logoUrl} 
                                                alt={`${partner.name} Logo`} 
                                                fill 
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-navy to-blue-700 flex items-center justify-center text-white text-3xl font-black shadow-inner">
                                        {partner.logoPlaceholderText}
                                    </div>
                                )}
                            </div>

                            {/* Details */}
                            <div className="md:col-span-9 text-left space-y-4">
                                <div className="space-y-1">
                                    <span className="inline-block bg-navy/5 text-navy font-bold text-xs uppercase px-3 py-1 rounded-full border border-navy/10">
                                        {partner.category}
                                    </span>
                                    <h2 className="text-2xl font-black text-navy">{partner.name}</h2>
                                    <p className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                                        <MapPin size={16} className="text-gold" />
                                        {partner.location}
                                    </p>
                                </div>

                                <p className="text-gray-600 leading-relaxed">
                                    {partner.description}
                                </p>

                                <div>
                                    <a 
                                        href={partner.websiteUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold px-6 py-3 rounded-xl shadow-sm text-sm transition-all hover:translate-x-1"
                                    >
                                        <span>Visit {partner.name} ↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call To Action */}
                <div className="bg-gradient-to-br from-slate-900 to-navy text-white text-center rounded-3xl p-8 md:p-12 shadow-xl mt-16 border border-white/10 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-extrabold mb-4 tracking-tight">
                        Interested in Partnering with Valley Property Services?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
                        We love cross-referring and collaborating with top-rated local contractors and businesses across Northeast Wisconsin.
                    </p>
                    <Link 
                        href="/contact" 
                        className="bg-gold hover:bg-yellow-400 text-navy font-black px-8 py-4 rounded-xl shadow-md text-lg transition-colors inline-flex items-center gap-2"
                    >
                        <span>Contact Our Team</span>
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </main>
    );
}
