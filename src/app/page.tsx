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
      <Hero bgImage="/images/portfolio/building-washing-services-1.png" />
      <Process />
      <ServiceGrid />
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
