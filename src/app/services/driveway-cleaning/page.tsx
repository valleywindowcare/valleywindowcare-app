import React from 'react';
import Link from 'next/link';
import ServiceGrid from '@/components/ServiceGrid';
import Hero from '@/components/Hero';
import { ShieldCheck, CheckCircle, ArrowRight, MapPin } from 'lucide-react';

import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: "Driveway Cleaning | Valley Window Care",
    description: "Professional concrete and asphalt surface cleaning. We physically remove oil stains, tire marks, and organic buildup.",
};

export default function ServicePage() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Residential Driveway Cleaning",
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
        "name": "Residential Driveway Cleaning Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Driveway Cleaning"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "USD",
              "minPrice": "149.00"
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
                        <span className="capitalize">Driveway Cleaning</span> <br />
                        <span className="text-gold text-2xl md:text-3xl mt-4 block">Valley Window Care</span>
                    </>
                }
                description="Professional concrete and asphalt surface cleaning. We physically remove oil stains, tire marks, and organic buildup."
                bgImage="/images/portfolio/commercial-cleaning.webp"  
            />

            {/* GOLD STANDARD ARCHITECTURE CONTAINER */}
            <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8 mt-12 mb-20 relative z-10">
                <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                    
                    {/* ENTITY CAPSULE */}
                    <section className="mb-16 mt-8">
                        <div className="text-lg leading-relaxed mb-8 font-bold text-navy">
                            Valley Window Care is a fully insured exterior cleaning company providing professional driveway cleaning in <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold font-semibold transition-colors">Appleton</Link>, <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold font-semibold transition-colors">Green Bay</Link>, and <Link href="/service-areas/door-county" className="text-blue-600 hover:text-gold font-semibold transition-colors">Door County</Link>, WI.
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
                                    Surface Pre-Treatment
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We sweep the driveway completely. We apply specialized alkaline detergents. We break down the heavy oil stains.
                                </p>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">02</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">2</span>
                                    Surface Cleaner Agitation
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We deploy professional surface cleaner attachments. We utilize uniform high pressure. We strip the embedded dirt evenly. We eliminate standard wand zebra stripes.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">03</div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">3</span>
                                    High-Volume Rinse
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    We rinse the concrete pad clean. We blast away the detached grime. We restore the bright cement finish safely.
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
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Concrete Pads</h4>
                                    <p className="text-gray-600 leading-relaxed">We pressure wash standard cement driveways. We cut through heavy organic growth. We restore the bright white appearance.</p>
                                </div>
                            </div>
                            
                            {/* Type 2 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Asphalt Surfaces</h4>
                                    <p className="text-gray-600 leading-relaxed">We gently clean residential blacktop. We use specialized soft-wash mixes. We avoid high-pressure surface deterioration.</p>
                                </div>
                            </div>

                            {/* Type 3 */}
                            <div className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">Paver Systems</h4>
                                    <p className="text-gray-600 leading-relaxed">We wash interlocking driveway stones. We clear out the dirty joints. We prevent destructive weed growth perfectly.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* PRICING EXPECTATIONS MODULE */}
                    <section className="mb-16 bg-navy text-white p-8 md:p-12 rounded-3xl not-prose shadow-lg border border-navy-light">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gold border-b border-white/20 pb-6">
                            Pricing Expectations
                        </h2>
                        <div className="text-xl text-gray-200 leading-relaxed">
                            Residential driveway cleaning starts at $149. The final quote depends on total square footage. Heavy oil stain removal increases the overall price. We provide exact quotes upfront. Ready to protect your property? <Link href="/contact" className="text-gold font-bold hover:text-white transition-colors underline">Contact our team for a free, no-obligation quote today.</Link>
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
                                We dispatch commercial route vehicles daily through <Link href="/service-areas/green-bay" className="text-gold font-bold hover:underline">Green Bay</Link> and <Link href="/service-areas/appleton" className="text-gold font-bold hover:underline">Appleton</Link>. Maintaining clean concrete permanently boosts physical property value.
                            </p>
                            <p className="leading-relaxed">
                                Need your vinyl siding washed too? We offer professional, high-volume <Link href="/services/house-washing" className="text-gold font-bold hover:underline">House Washing</Link> alongside our concrete operations. 
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