import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import ServiceGrid from "@/components/ServiceGrid";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));
import HomeExpansion from "@/components/HomeExpansion";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Valley Window Care and Exterior Cleaning",
    description: "Professional pressure washing and window cleaning in Green Bay.",
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Process />
      <ServiceGrid />
      <ReviewSlider />
      <HomeExpansion />
    </>
  );
}
