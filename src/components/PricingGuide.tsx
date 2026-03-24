import React from 'react';
import { Info, CheckCircle2 } from 'lucide-react';

export default function PricingGuide() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
                        2026 Pressure Washing & Exterior Cleaning Cost Guide for the Fox Valley
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        We believe in upfront, authoritative pricing. Whether you are actively searching for "cost per square foot" benchmarks or exact flat-rate packages, these 2026 baseline estimates deliver the exact starting costs for our professional operations.
                    </p>
                </div>

                {/* SEO: Cost Per Sq Ft vs Flat Rate Comparison Hook */}
                <div className="bg-white border rounded-2xl border-gray-200 p-8 shadow-sm mb-12">
                     <h3 className="text-2xl font-bold text-navy mb-6">Pricing Methodology: Flat Rate vs. Cost Per Square Foot</h3>
                     <div className="grid md:grid-cols-2 gap-8">
                         <div>
                             <h4 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-100 pb-2">Cost Per Square Foot</h4>
                             <p className="text-gray-600 leading-relaxed mb-4">
                                 Calculating pressure washing cost per square foot is typically reserved for massive commercial projects, sprawling warehouse footprints, or extensive concrete flatwork. Because exact surface areas vary wildly, commercial square footage rates allow us to scale our WDNR-compliant water recapture rigs and massive hot-water trailers efficiently based on exact geometry.
                             </p>
                         </div>
                         <div>
                             <h4 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-100 pb-2">Standard Flat Rate</h4>
                             <p className="text-gray-600 leading-relaxed">
                                 For standard residential exterior cleaning, Valley Window Care exclusively utilizes transparent flat-rate pricing. This completely guarantees you will never be surprised by hidden fees or padded hours. A $350 House Wash quote remains $350, ensuring maximum trust and absolute predictability for Northeast Wisconsin homeowners.
                             </p>
                         </div>
                     </div>
                </div>

                {/* Minimum Project Price Banner */}
                <div className="bg-[#1E2B3C] border border-[#1E2B3C] p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-12 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="bg-gold/20 p-3 rounded-2xl shrink-0 relative z-10">
                        <Info className="text-gold" size={28} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-white mb-1 tracking-wide">Minimum Project Price: $350 per visit for one-time services.</h3>
                        <p className="text-slate-300 text-base">
                            We highly recommend <strong className="text-gold font-semibold">bundling services</strong> (e.g., Roof Wash + Exterior Windows) to maximize your value!
                        </p>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {/* Item 1 */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 hover:border-gold/50 transition-all shadow-sm hover:shadow-lg group">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5 border-b border-gray-200 pb-5">
                            <h4 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">Residential Window Cleaning</h4>
                            <span className="text-lg font-black text-navy bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm whitespace-nowrap">Starting at $150</span>
                        </div>
                        <p className="text-gray-600 flex items-start gap-3 text-base leading-relaxed">
                            <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                            Streak-free views and ladder safety.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 hover:border-gold/50 transition-all shadow-sm hover:shadow-lg group">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5 border-b border-gray-200 pb-5">
                            <h4 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">Standard Gutter Cleaning</h4>
                            <span className="text-lg font-black text-navy bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm whitespace-nowrap">Starting at $150</span>
                        </div>
                        <p className="text-gray-600 flex items-start gap-3 text-base leading-relaxed">
                            <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                            Prevention of ice dams and foundation rot.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 hover:border-gold/50 transition-all shadow-sm hover:shadow-lg group">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5 border-b border-gray-200 pb-5">
                            <h4 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">House/Siding Washing</h4>
                            <span className="text-lg font-black text-navy bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm whitespace-nowrap">Starting at $350</span>
                        </div>
                        <p className="text-gray-600 flex items-start gap-3 text-base leading-relaxed">
                            <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                            Instant curb appeal and removal of organic growth.
                        </p>
                    </div>

                    {/* Item 4 */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 hover:border-gold/50 transition-all shadow-sm hover:shadow-lg group">
                        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 mb-5 border-b border-gray-200 pb-5">
                            <h4 className="text-xl font-bold text-navy group-hover:text-gold transition-colors">Full Roof Soft Wash</h4>
                            <span className="text-lg font-black text-navy bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm whitespace-nowrap">Starting at $500</span>
                        </div>
                        <p className="text-gray-600 flex items-start gap-3 text-base leading-relaxed">
                            <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                            Extends shingle life by 5-10 years safely.
                        </p>
                    </div>
                </div>

                {/* SEO: The Vinyl Siding Authority Hook */}
                <div className="bg-slate-50 border border-gray-200 p-8 rounded-2xl shadow-inner mb-12">
                    <h3 className="text-2xl font-bold text-navy mb-4">The Danger of Pressure Washing Vinyl Siding</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        A massive volume of homeowners search for "pressure washing vinyl siding" without realizing that high mechanical pressure instantly drives water directly behind the siding panels, stripping UV insulation layers and breeding hidden toxic mold inside the wall cavity. 
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Instead of tearing apart your home's envelope with archaic 4,000 PSI wands, Valley Window Care exclusively utilizes low-pressure <strong className="text-navy font-bold">Soft Washing</strong>. Our commercial algaecides chemically melt away heavy green algae, black mold, and oxidation at the exact pressure of a standard garden hose—restoring your vinyl to a zero-damage, factory finish.
                    </p>
                </div>

                {/* Disclaimer */}
                <div className="text-center bg-gray-50 py-4 px-6 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-500 italic max-w-4xl mx-auto">
                        Please note: These are estimated baseline prices. Final quotes are customized based on exact square footage, property height, and specific job requirements.
                    </p>
                </div>
            </div>
        </section>
    );
}
