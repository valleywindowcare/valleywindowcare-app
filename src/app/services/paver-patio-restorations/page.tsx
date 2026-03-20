import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: "Paver Patio Restorations & Sealing | Valley Window Care",
    description: "Professional paver cleaning, joint sanding, and premium sealing. We specialize in complete hardscape restorations.",
};

export default function ServicePage() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Paver Patio Restorations",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Valley Window Care",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Appleton",
          "addressRegion": "WI"
        }
      },
      "areaServed": ["Appleton", "Green Bay", "Northeast Wisconsin"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hardscape Restoration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paver Restoration"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "USD",
              "minPrice": "299.00"
            }
          }
        ]
      }
    };

    return (
        <main className="w-full overflow-hidden bg-slate-50">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            {/* HERO MODULE */}
            <Hero 
                h1={
                    <>
                        <span className="capitalize">Paver Patio Restorations</span> <br />
                        <span className="text-gold text-2xl md:text-3xl mt-4 block">Valley Window Care</span>
                    </>
                }
                description="Complete hardscape transformations. We safely clean, perfectly re-sand, and chemically seal your investment."
                bgImage="/images/portfolio/paver-sealing.webp"  
            />
            {/* Hidden image block for semantic SEO coverage representing Hero Image */}
            <div className="hidden">
                 <Image src="/images/portfolio/paver-sealing.webp" alt="Professional Paver Sealing and Restoration in Appleton, WI" width={800} height={600} />
            </div>

            {/* GOLD STANDARD ARCHITECTURE CONTAINER */}
            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    <section className="mb-16 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Window Care is a fully insured exterior cleaning company providing professional paver restorations in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.
                        </div>
                    </section>

                    {/* METHODOLOGY/PROCESS STEPS */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <ShieldCheck className="text-gold" size={32} />
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                                Our Execution Methodology
                            </h2>
                        </div>
                        
                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex flex-col md:flex-row gap-8 mb-8">
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">1</span>
                                    Deep Organic Cleaning
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We blast away failing polymeric sand, black mold, moss, and deep stains utilizing specialized flat-surface cleaners.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <Image src="/images/portfolio/paver-cleaning-before-after.jpg.webp" alt="Expert Paver Cleaning Services Green Bay WI" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex flex-col md:flex-row gap-8 mb-8">
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">2</span>
                                    Polymeric Sanding Installation
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    After thorough drying, we carefully sweep in high-grade polymeric locking sand to physically bind the stones and prevent massive weed root ingress.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <Image src="/images/portfolio/paver-sanding.webp" alt="Polymeric Sanding Installation De Pere WI" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 flex flex-col md:flex-row gap-8 mb-8">
                            <div className="flex-1">
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">3</span>
                                    Premium High-Solids Sealing
                                </h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    We chemically lock the hardscape utilizing premium wet-look or natural sealers, permanently repelling UV fade and penetrating engine oils.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 flex-shrink-0">
                                <Image src="/images/portfolio/paver-restoration.webp" alt="Hardscape Restoration Fox Valley" width={600} height={400} className="rounded-xl w-full h-auto object-cover" />
                            </div>
                        </div>
                    </section>

                    <section className="mb-16 bg-[#FFFFFF] text-[#1E2B3C] p-8 md:p-12 rounded-3xl not-prose shadow-[0_0_40px_rgba(30,43,60,0.06)] border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-navy border-b border-gray-100 pb-6">
                            See The Difference
                        </h2>
                        
                        <div className="mt-8">
                             <Image src="/images/portfolio/paver-sealing-green-bay.JPG" alt="High-end Paver sealing and protective coating applied in Northeast Wisconsin" width={1200} height={800} className="rounded-2xl shadow-lg w-full h-auto" />
                        </div>
                    </section>

                    {/* LOCAL SEO & CROSS-LINKING */}
                    <section className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="text-gold" size={32} />
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                                Local Routes & Complete Care
                            </h2>
                        </div>
                        <div className="space-y-6 text-lg bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <p className="leading-relaxed">
                                Maintaining clean hardscapes permanently boosts physical property value. For dedicated structural sinking repair or advanced stabilization, visit our specialized division: <strong><a href="https://greenbaypavercleaning.com" target="_blank" rel="noopener" className="text-blue-600 font-bold hover:text-gold underline transition-colors">Green Bay Paver Cleaning</a></strong>.
                            </p>
                            <div className="mt-8">
                                <Link href="/contact" className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-xl font-bold hover:bg-navy hover:text-white transition-colors">
                                    Request Your Custom Quote <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </section>

                </article>
            </div>


            <ReviewSlider />

            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl py-16 text-center">
                     <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Exterior Services</h2>
                     <ServiceGrid />
                </div>
            </div>
        </main>
    );
}
