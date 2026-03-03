import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Residential Rust Removal | Valley Window Care and Exterior Cleaning",
    description: "Valley Window Care and Exterior Cleaning provides premium Residential Rust Removal in Northeast Wisconsin.",
    alternates: {
        canonical: "https://valleywindowcare.com/services/rust-removal"
    }
};

export default function rustremovalPage() {
    return (
        <>
            <div className="bg-navy text-gray-300 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold border-b border-navy-dark relative z-20">
                <div className="container mx-auto px-4 max-w-7xl flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                    <Link href="/services" className="hover:text-gold transition-colors">Services</Link>
                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                    <span className="text-gold">Residential Rust Removal</span>
                </div>
            </div>

            <Hero
                h1={<>Residential Rust Removal</>}
                description="Providing premium exterior services across Northeast Wisconsin."
                bgImage="/site-gallery/authentic-IMG_5941.jpg"
            />

            <article className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate lg:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-a:text-navy prose-a:no-underline hover:prose-a:text-gold transition-colors prose-table:border prose-table:shadow-sm prose-th:bg-blue-50 prose-th:text-navy prose-th:p-4 prose-td:p-4 prose-td:border-t">
                    <p><strong>Valley Window Care and Exterior Cleaning provides professional Residential Rust Removal to restore and protect your property.</strong> Our dedicated team utilizes advanced, safe exterior cleaning methods to dramatically improve your property's curb appeal while preventing long-term damage caused by harsh environmental elements.</p>
                    
                    <h2>Why Choose Our Residential Rust Removal?</h2>
                    <p>We take pride in delivering a flawless clean safely. Whether you need an immediate aesthetic boost or routine maintenance, our technicians have the experience and equipment to achieve an optimal finish. We proudly service property owners across our primary <Link href="/service-areas/green-bay">Green Bay</Link> and <Link href="/service-areas/appleton">Appleton</Link> service areas.</p>
                    
                    <h2>Industry Best Cleaning Standards</h2>
                    <p>When you hire professionals, you expect professional results. We rigorously adhere to the safety and quality standards set forth by the <a href="https://iwca.org" target="_blank" rel="noopener noreferrer">IWCA</a>, ensuring that your delicate surfaces are never damaged by excessive pressure or negligent practices. From deep stain eradication to delicate biological wash downs, our methods are guaranteed to impress.</p>

                    <h3>Contact Us Today</h3>
                    <p>If you're ready to drastically improve your home or business exterior, contact our expert wash team today to schedule your free estimate and consultation.</p>
                </div>
            </article>

            <Process isCommercial={false} />
            <ReviewSlider />
        </>
    );
}
