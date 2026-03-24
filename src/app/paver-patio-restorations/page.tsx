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
    title: "Paver Restoration | Starting at $500 | Get a Fast Quote",
    description: "Professional paver cleaning, polymeric sand refilling, and premium sealing. Local Fox Valley Experts. 100% Satisfaction Guarantee.",
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
                description="Valley Window Care & Exterior Cleaning provides premium paver restoration services to enhance your property's value."
                bgImage="/images/paver-restoration-v1.webp"  
                bgImageAlt="Valley Window Care & Exterior Cleaning expert paver patio restoration and cleaning in De Pere, WI"
            />

            <Process isCommercial={false} />

            <ServiceContent
                title="Paver Patio Restorations"
                description="Our paver restoration process safely cleans, perfectly re-sands, and chemically seals your investment to protect against harsh Wisconsin weather and freeze-thaw cycles."
                benefits={["Professional Quality", "Fully Insured", "Satisfaction Guaranteed"]}
                process={["Free Estimate", "Schedule Wash", "Enjoy Your Property"]}
                image="/images/portfolio/paver-sealing.webp"
                imageAlt="Finished paver sealing and restoration results by Valley Window Care & Exterior Cleaning"
            />

            <div className="bg-slate-50 border-t border-gray-200 relative mt-16">
                <VanillaMapClient />
            </div>

            <ReviewSlider />

            {/* SEO LONG-TAIL INJECTION */}
            <section className="bg-white py-16 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Polymeric Sand Refilling & Joint Stabilization</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Failing joints are the leading cause of weed growth and foundational shifting. We don't just wash your patio; we perform complete polymeric sand refilling using commercial-grade aggregates. This locks the pavers in place, resists ant washouts, and provides a structural baseline capable of surviving Wisconsin's brutal freeze-thaw cycles.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold text-navy mb-4">Old Patio Restoration vs. Replacement</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                Before spending thousands tearing out and replacing sunken, faded brickwork, consider professional old patio restoration. Our multi-stage cleaning and extraction process pulls deeply embedded stains and efflorescence from the porous stone, while our color-enhancing sealers breathe vibrant new life back into the surface, saving you tens of thousands on brand new hardscaping.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold text-navy mb-4">#1 Rated Paver Sealing Near Me</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                If you are searching for "paver sealing near me" across the Fox Valley or Green Bay area, you need a team that understands local environmental demands. Valley Window Care & Exterior Cleaning exclusively utilizes breathable, solvent-based or premium water-based sealers that protect against UV degradation and winter road salts, ensuring 100% satisfaction guaranteed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

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
