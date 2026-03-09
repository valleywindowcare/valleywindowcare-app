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
// Metadata inherited from strict server layout.tsx
export default function Home() {
  return (
    <>
      <Hero bgImage="/images/portfolio/building-washing-services-1.png" />
      <Process />
      <ServiceGrid />
      <ReviewSlider />
      <HomeExpansion />
    </>
  );
}
