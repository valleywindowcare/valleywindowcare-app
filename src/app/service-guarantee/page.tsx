import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck } from "lucide-react";

import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "Service Guarantee | Valley Window Care",
    description: "Our 100% Satisfaction Guarantee. We stand entirely behind the quality of our exterior cleaning services in Wisconsin.",
};

export default function ServiceGuaranteePage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <div className="bg-navy pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold uppercase tracking-wider mb-6">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-gold" />
                        <span className="text-white">Service Guarantee</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <ShieldCheck size={56} className="text-gold shrink-0 hidden md:block" />
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">Service Guarantee</h1>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 max-w-4xl">
                <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-navy-dark leading-relaxed space-y-8 absolute-center text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-8">
                        <ShieldCheck size={64} className="text-gold md:hidden" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-navy mb-6">Our 100% Satisfaction Commitment</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">At Valley Window Care and Exterior Cleaning, we measure our success entirely by your satisfaction. We handle your property with the same precision, respect, and attention to detail as if it were our own.</p>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100 mt-8 text-left">
                            <h3 className="text-xl font-bold text-navy mb-4">How Our Guarantee Works</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-gold"></div></div>
                                    <span><strong>Complete Final Walkthrough:</strong> We will not consider a job complete until we walk the property with you (when available) to visually inspect our exterior cleaning results.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-gold"></div></div>
                                    <span><strong>Immediate Correction:</strong> If you spot a streak, missed spot, or issue related to our scope of work, we will address it and reclean the area immediately on-site before we pack up.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-gold"></div></div>
                                    <span><strong>The 48-Hour Call-Back Window:</strong> Exterior lighting changes throughout the day. If you notice a streaked window or missed mark within 48 hours of our departure, call us. We will come back and fix it free of charge.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">Limitations</h2>
                        <p>Our guarantee covers the quality and execution of our cleaning services. It does not cover pre-existing damage (such as broken window seals causing fog, chipped paint, oxidized siding, or scratched glass) that our cleaning naturally reveals but did not cause.</p>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <p className="font-semibold text-lg text-navy mb-2">Notice an Issue?</p>
                        <p className="mb-4">Call us immediately and we will make it right.</p>
                        <div className="inline-flex flex-col sm:flex-row items-center gap-4 mt-2">
                            <a href="tel:920-609-7085" className="bg-navy text-white font-bold py-3 px-8 rounded-full shadow-md text-center hover:bg-gold transition-colors" rel="nofollow">
                                Call (920) 609-7085
                            </a>
                        </div>
                    </div>
                </article>
            </div>
            <ReviewSlider />
        </main>
    );
}
