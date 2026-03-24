/* 
 * PHYSICAL CACHE-BUSTING BLOCK
 * TIMESTAMP: 2026-03-05T20:04:25-06:00
 * DIRECTIVE: Force Next.js chunk hash invalidation for stale Homepage Hero image
 */
import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ServiceGrid from "@/components/ServiceGrid";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));
import HomeExpansion from "@/components/HomeExpansion";
import Link from 'next/link';

// Metadata inherited from strict server layout.tsx
export default function Home() {
  return (
    <>
      <Hero 
        bgImage="/images/portfolio/store-front-cleaning.webp" 
        bgImageAlt="Professional commercial storefront cleaning services by Valley Window Care & Exterior Cleaning in Green Bay, WI"
      />
      <Process />
      <ServiceGrid />

      {/* HIGH-AUTHORITY PAGERANK FUNNEL (SEO) */}
      <section className="bg-navy py-12 border-t border-[#1e3e6b] text-center shadow-inner relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">Specialty Seasonal Services</h2>
          <p className="text-gray-300 font-semibold mb-8 max-w-2xl mx-auto text-lg leading-relaxed">Fast-track to our most requested premium preservation and architectural lighting installations.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/paver-patio-restorations" className="bg-gold text-navy border-2 border-gold font-black text-lg px-8 py-4 rounded-xl shadow-xl hover:bg-transparent hover:text-gold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
              Explore Paver Restoration <span className="text-xl">&rarr;</span>
            </Link>
            <Link href="/services/permanent-led-lighting" className="bg-gold text-navy border-2 border-gold font-black text-lg px-8 py-4 rounded-xl shadow-xl hover:bg-transparent hover:text-gold hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
              Explore Permanent Lighting <span className="text-xl">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <ReviewSlider />
      <HomeExpansion />
      <div className="bg-slate-50 py-16 text-center border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-navy mb-8">Featured Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Green Bay", "Appleton", "Neenah", "De Pere", "Howard"
            ].map((city) => (
              <Link
                key={city}
                href={`/service-areas/${city.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border text-lg border-gray-200 text-gray-700 hover:text-gold hover:border-gold px-6 py-3 rounded-full font-semibold transition-all shadow-sm"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
