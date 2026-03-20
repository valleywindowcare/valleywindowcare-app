import React from 'react';
import PricingMatrix from '@/components/PricingMatrix';
import { serviceContentMap } from '@/data/serviceContent';
import Link from 'next/link';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';

import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: "Residential Rust Removal | Valley Window Care",
    description: "Professional battery acid and fertilizer rust removal. We safely extract deep orange stains from exterior concrete.",
};

export default function ServicePage() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Residential Rust Removal Services",
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
        "name": "Residential Rust Removal Services Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Rust Removal"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "USD",
              "minPrice": "99.00"
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
                        <span className="capitalize">Residential Rust Removal</span> <br />
                        <span className="text-gold text-2xl md:text-3xl mt-4 block">Valley Window Care</span>
                    </>
                }
                description="Professional battery acid and fertilizer rust removal. We safely extract deep orange stains from exterior concrete."
                bgImage="/images/portfolio/rust-removal-before-after.webp"  
            />

            {/* GOLD STANDARD ARCHITECTURE CONTAINER */}
            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* ENTITY CAPSULE */}
                    <section className="mb-16 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Window Care is a fully insured exterior cleaning company providing professional residential rust removal in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.
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
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                            {/* Step 1 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">01</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">1</span>
                                    Stain Identification
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We inspect the orange concrete stains. We identify the exact chemical source. We determine if it is fertilizer or battery acid.
                                </p>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">02</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">2</span>
                                    Acidic Application
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We apply professional-grade rust removers. We allow proper chemical dwell time. The acid neutralizes the iron oxidation.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">03</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">3</span>
                                    Neutralizing Rinse
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We rinse the treatment area thoroughly. We neutralize the acidic chemicals. We restore the natural concrete color. We protect the surrounding grass instantly.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* TYPES WE HANDLE (BENEFITS CONTAINER) */}
                    <section className="mb-16 bg-[#FFFFFF] text-[#1E2B3C] p-8 md:p-12 rounded-3xl not-prose shadow-[0_0_40px_rgba(30,43,60,0.06)] border border-gray-100">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-navy border-b border-gray-100 pb-6">
                            Target Surfaces
                        </h2>
                        
                        <div className="space-y-6 mt-10">
                            {/* Type 1 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Fertilizer Stains</h4>
                                    <p className="text-gray-600 leading-relaxed">We remove orange dots from driveways. Iron pellets rust on wet concrete. We dissolve these specific mineral stains safely.</p>
                                    
                                    <div className="bg-slate-50 border-l-4 border-gold p-6 mt-6 rounded-r-lg shadow-sm border-t border-r border-b border-slate-100 max-w-2xl">
                                        <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base mb-0">
                                            <strong>Looking for dedicated paver restoration, leveling, and polymeric sanding?</strong> We have launched a specialized division just for hardscapes! Visit our sister company, <a href="https://greenbaypavercleaning.com" target="_blank" rel="noopener" className="text-blue-600 font-bold hover:text-gold underline transition-colors">Green Bay Paver Cleaning</a>, for premium sealing and restoration across the Fox Valley.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Type 2 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Battery Acid Burns</h4>
                                    <p className="text-gray-600 leading-relaxed">We treat golf cart battery leaks. We neutralize the deep white burns. We restore the damaged garage floor appearance.</p>
                                </div>
                            </div>

                            {/* Type 3 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Irrigation Runoff</h4>
                                    <p className="text-gray-600 leading-relaxed">We clear hard water rust marks. Sprinklers spray iron-rich well water. We eliminate the resulting orange sidewalk stripes.</p>
                                </div>
                            </div>
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
                                We dispatch truck units daily through <Link href="/service-areas/green-bay" className="text-gold font-bold hover:underline">Green Bay</Link> and <Link href="/service-areas/appleton" className="text-gold font-bold hover:underline">Appleton</Link>. Removing destructive rust permanently boosts physical property value.
                            </p>
                            <p className="leading-relaxed">
                                Need your entire driveway cleaned? We offer comprehensive <Link href="/services/driveway-cleaning" className="text-gold font-bold hover:underline">Driveway Cleaning</Link> completely eliminating standard dirt. 
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


            
            {serviceContentMap['rust-removal']?.pricing && (
                <PricingMatrix {...serviceContentMap['rust-removal'].pricing} />
            )}
            <ReviewSlider />

            {/* SERVICES GRID */}
            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl py-16 text-center">
                     <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Exterior Services</h2>
                     <ServiceGrid />
                </div>
            </div>
        </main>
    );
}