import React from 'react';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import ServiceContent from '@/components/ServiceContent';
import ServiceGrid from '@/components/ServiceGrid';
import ReviewSlider from '@/components/ReviewSlider';
import VanillaMapClient from "@/components/VanillaMapClient";
import FAQAccordion from "@/components/FAQAccordion";
import { faqData } from "@/data/faqData";

export const metadata = {
    title: "Paver Patio Restorations | Valley Window Care",
    description: "Professional paver cleaning, joint sanding, and premium sealing.",
};

export default function ServicePage() {
    return (
        <main className="w-full overflow-hidden bg-slate-50">
            {/* HERO MODULE */}
            <Hero 
                h1={
                    <>
                        <span className="capitalize">Paver Patio Restorations</span> <br />
                        <span className="text-gold text-2xl md:text-3xl mt-4 block">Green Bay & Northeast Wisconsin</span>
                    </>
                }
                description="Valley Window Care and Exterior Cleaning provides premium paver restoration services to enhance your property's value."
                bgImage="/images/portfolio/paver-sealing.webp"  
                bgImageAlt="Professional Paver Sealing and Restoration in Appleton, WI"
            />

            <Process isCommercial={false} />

            <ServiceContent
                title="Paver Patio Restorations"
                description="Our paver restoration process safely cleans, perfectly re-sands, and chemically seals your investment to protect against harsh Wisconsin weather and freeze-thaw cycles."
                benefits={["Professional Quality", "Fully Insured", "Satisfaction Guaranteed"]}
                process={["Free Estimate", "Schedule Wash", "Enjoy Your Property"]}
                image="/images/portfolio/paver-restoration.webp"
                imageAlt="Professional Paver Sealing and Restoration in Appleton, WI"
            />

            <div className="bg-slate-50 border-t border-gray-200 relative mt-16">
                <VanillaMapClient />
            </div>

            <ReviewSlider />

            {/* SERVICES GRID */}
            <div className="bg-white border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl py-16 text-center">
                     <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 tracking-tight">Explore More Exterior Services</h2>
                     <ServiceGrid />
                </div>
            </div>

            <FAQAccordion
                faqs={faqData["paver-patio-restorations"] || []}
            />
        </main>
    );
}
