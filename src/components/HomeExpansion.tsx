import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeExpansion() {
    return (
        <section className="bg-white py-20 lg:py-32 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-40">

                {/* SECTION A: Results That Speak For Themselves */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Vertical Image Stack */}
                    <div className="flex flex-col gap-6 w-full lg:w-11/12">
                        <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/assets/Roof-Cleaning-in-green-bay.png"
                                alt="Professional roof washing operations"
                                fill
                                loading="lazy"
                                quality={75}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        <div className="relative w-full h-64 sm:h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group lg:ml-12">
                            <Image
                                src="/assets/window-cleaning-8.jpg"
                                alt="Precision window cleaning services"
                                fill
                                loading="lazy"
                                quality={75}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    </div>

                    {/* Copy Segment */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div>
                            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-sm">Our Guarantee</p>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
                                Results That Speak For Themselves.
                            </h2>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            When it comes to maintaining your property, trust matters. At <strong className="text-navy">Valley Window Care</strong>, we believe our work should reflect the highest standards of quality and care. Our team is dedicated to providing Northeast Wisconsin homeowners and businesses with transformative exterior cleaning solutions.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            From restoring the curb appeal of aging siding to ensuring your roof is free of destructive organic growth, we tackle every project with precision. We utilize advanced soft washing and professional power washing techniques designed specifically to safely eradicate dirt, grime, moss, and algae without causing structural damage.
                        </p>
                        <div className="pt-4">
                            <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 uppercase tracking-wider text-sm" aria-label="Request a free diagnostic estimate for exterior cleaning">
                                Get Your Free Estimate
                            </Link>
                        </div>
                    </div>
                </div>

                {/* SECTION B: Who We Are */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Copy Segment & List */}
                    <div className="flex flex-col justify-center space-y-10 order-2 lg:order-1">
                        <div>
                            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-sm">Who We Are</p>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight">
                                Valley Window Care serving your Exterior Cleaning needs in Northeast Wisconsin since 2020.
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {/* List Item 1 */}
                            <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-navy p-3 rounded-xl shrink-0 mt-1 flex items-center justify-center">
                                    <svg role="img" aria-label="Residential House Washing Service Icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy mb-2">Residential Services</h3>
                                    <p className="text-gray-600 leading-relaxed">Absolute precision exterior cleaning for single family homes. Whether its safely washing vinyl siding or clearing high-angle gutters, we protect your largest investment.</p>
                                </div>
                            </div>
                            {/* List Item 2 */}
                            <div className="flex items-start gap-5 p-6 bg-slate-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="bg-navy p-3 rounded-xl shrink-0 mt-1 flex items-center justify-center">
                                    <svg role="img" aria-label="Commercial Building Maintenance Icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-navy mb-2">Commercial Services</h3>
                                    <p className="text-gray-600 leading-relaxed">We maintain Multi-Family complexes, city property, clinics, and business storefronts across Northeast Wisconsin. Fully licensed, insured, and ready to deploy.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Huge Action Image + Experience Badge */}
                    <div className="relative w-full aspect-square lg:aspect-auto lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
                        <Image
                            src="/assets/House-washing-company-in-suamico-wi-1-scaled.jpg"
                            alt="Valley Window Care crew serving Northeast Wisconsin"
                            fill
                            loading="lazy"
                            quality={75}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />

                        {/* The Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 sm:bottom-10 sm:-left-10 w-40 h-40 sm:w-56 sm:h-56 bg-gold rounded-full flex flex-col items-center justify-center shadow-2xl p-4 sm:p-6 text-center transform hover:scale-105 transition-transform duration-300 border-8 border-white z-10">
                            <span className="text-3xl sm:text-5xl font-black text-navy mb-1 sm:mb-2">5+</span>
                            <span className="text-xs sm:text-sm font-bold text-white uppercase tracking-widest leading-tight">Years of<br />Collective<br />Experience</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
