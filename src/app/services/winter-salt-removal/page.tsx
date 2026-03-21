import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Snowflake, Beaker } from 'lucide-react';
import PricingMatrix from '@/components/PricingMatrix';
import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: 'Commercial Winter Salt Removal Services | Valley Window Care',
    description: 'Protect your commercial concrete from costly spalling and slip-and-fall liability. We use specialized chemical neutralizers to eliminate harsh road salts and magnesium chlorides.',
};

export default function WinterSaltRemovalPage() {
    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/portfolio/concrete-cleaning.webp"
                        alt="Commercial Winter Salt and Chloride Removal"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-100 font-medium text-sm mb-6 border border-blue-400/30">
                            <Snowflake size={16} />
                            <span>B2B Commercial Service</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                            Commercial Winter <span className="text-gold block mt-2">Salt Removal</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-light">
                            Stop expensive concrete spalling and entirely eliminate winter slip-and-fall liability. Standard rinsing actually pushes caustic municipal road salts deeper into the pores. We deploy advanced chemical descalers to molecularly neutralize destructive chlorides and magnesium deposits from your storefronts and walkways.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy-dark px-8 py-4 rounded-full font-bold text-center transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 hover:-translate-y-1">
                                Secure Winter Protection <ArrowRight size={20} />
                            </Link>
                            <a href="tel:920-609-7085" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full font-bold text-center transition-all flex items-center justify-center gap-2">
                                Call (920) 609-7085
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">Advanced Chloride Neutralization</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Abrasive winter de-icing chemicals are designed to aggressively melt ice, but they simultaneously destroy the structural integrity of your expensive porous concrete and entryway masonry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6">
                                <AlertTriangle size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-dark mb-4">The Danger of "Just Rinsing"</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Simply using a hose or standard pressure washer with warm water dissolves the salt temporarily, forcing the highly toxic caustic brine deeper into the micro-fissures of your concrete. When that water inevitably refreezes, it expands massively, instantly causing irreversible spalling and surface cracking.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                                <Beaker size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-dark mb-4">Molecular Descaling</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Our highly trained technicians deploy specialized, commercial-grade chemical neutralizers that specifically target and bond to calcium and magnesium chlorides. This chemical reaction breaks down the salt at a molecular level so it can be extracted cleanly without being driven into the porous substrate.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow lg:col-span-1 md:col-span-2">
                            <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-navy-dark mb-4">Liability Mitigation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Beyond the massive aesthetic improvement for your storefront brand image, properly extracting deeply embedded winter slurry dramatically reduces the slippery, greasy film left behind by modern de-icers. This direct intervention severely curtails your physical slip-and-fall liability risk during the active winter season.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROPERTY PROTECTION PROTOCOL */}
            <section className="py-24 bg-navy text-white relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="w-full md:w-1/3 text-center md:text-left">
                                <ShieldCheck size={80} className="text-gold mx-auto md:mx-0 mb-6" />
                                <h2 className="text-3xl font-bold mb-4">Winter Protection <span className="text-gold block">Protocol</span></h2>
                                <p className="text-gray-300">
                                    Our operational standards drastically exceed industry norms, perfectly tailored for brutal freeze-thaw cycles.
                                </p>
                            </div>
                            <div className="w-full md:w-2/3 space-y-6">
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Cold-Weather Operations</h3>
                                        <p className="text-gray-300 leading-relaxed">We utilize specialized high-heat systems precisely engineered to function correctly mid-winter, allowing for safe extraction even in sub-optimal ambient temperatures.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Freeze-Thaw Prevention</h3>
                                        <p className="text-gray-300 leading-relaxed">By chemically neutralizing and immediately extracting the briny liquid from the surface, we stop the moisture from penetrating the concrete, entirely preventing the destructive seasonal expansion cycle.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="text-gold shrink-0 mt-1" size={24} />
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Surface Ph Balancing</h3>
                                        <p className="text-gray-300 leading-relaxed">Our protocol leaves your concrete in a perfectly pH-balanced state, restoring traction to commercial walkways and instantly preventing the highly acidic salt from causing microscopic etching.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING MATRIX */}
            <PricingMatrix 
                title="Transparent Winter Extraction Pricing"
                description="We actively cater our extraction services to commercial storefronts, banking drive-thrus, and B2B property managers. Every proposal is custom-quoted based on structural footprint and chemical requirement."
                rateTitle="Commercial Walkways"
                ratePrice="Custom Quote"
                rateDetails="Evaluated per linear foot based on historic salt accumulation and overall porous damage severity."
                minimumPrice="$300.00"
                minimumDetails="Baseline mobilization for commercial storefronts and walkway salt neutralization."
                variableTitle="Large Parking Pads"
                variableHeading="Custom Assessed"
                variableDetails="Volumetric extraction utilizing heavy-duty ride-on surface rotary units for mass chloride mitigation."
            />

            {/* BLUF FAQS */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">Bottom Line Up Front (BLUF)</h2>
                        <p className="text-gray-600 font-medium">Direct answers to the most common winter maintenance questions.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-navy-dark mb-3 flex items-start gap-3">
                                <span className="text-gold font-black">Q:</span>
                                Why can't we just wash the salt away with warm water in the spring?
                            </h3>
                            <p className="text-gray-600 leading-relaxed flex items-start gap-3">
                                <span className="text-navy font-black">A:</span>
                                Warm water only dissolves salt temporarily and physically drives the caustic brine deeper into your porous concrete. When the temperatures eventually drop again at night, that deeply embedded moisture refreezes and expands, fracturing your slab from the inside out. We strictly use specialized descaling chemicals to permanently neutralize the chlorides at the surface level.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-navy-dark mb-3 flex items-start gap-3">
                                <span className="text-gold font-black">Q:</span>
                                Is the chemical neutralizer safe for the landscaping near our entryway?
                            </h3>
                            <p className="text-gray-600 leading-relaxed flex items-start gap-3">
                                <span className="text-navy font-black">A:</span>
                                Yes. The specialized compounds we utilize solely target and react with volatile calcium and magnesium chlorides. They are biodegradable and infinitely safer for your surrounding highly sensitive ornamental commercial plantings than allowing the toxic municipal road salt to continually leach into the soil.
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-gray-100">
                            <h3 className="text-xl font-bold text-navy-dark mb-3 flex items-start gap-3">
                                <span className="text-gold font-black">Q:</span>
                                Does this service actually help prevent slip-and-fall accidents?
                            </h3>
                            <p className="text-gray-600 leading-relaxed flex items-start gap-3">
                                <span className="text-navy font-black">A:</span>
                                Absolutely. Modern liquid de-icers naturally leave a greasy, highly slick film on cold concrete that standard rain cannot effectively wash away. Our extraction protocol chemically dissolves this film, restoring the natural, friction-heavy traction of the bare concrete and critically protecting your customers and staff.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REVIEWS & CTA */}
            <div className="bg-slate-50 py-12">
                <ReviewSlider />
            </div>

            <section className="py-24 bg-gold relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-navy-dark mb-6 tracking-tight">Secure Your Commercial Concrete Today</h2>
                    <p className="text-xl text-navy/80 mb-10 font-bold max-w-2xl mx-auto">
                        Don't let municipal road salt destroy your expensive property structures. Book your professional winter extraction now.
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-navy px-10 py-5 rounded-full font-black text-lg shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 uppercase tracking-widest">
                        Request a Free Commercial Proposal &rarr;
                    </Link>
                </div>
            </section>
        </div>
    );
}
