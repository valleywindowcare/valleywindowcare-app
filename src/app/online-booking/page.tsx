import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Calendar, Clock, Star, Phone, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import MarkateBookingWidget from '@/components/MarkateBookingWidget';
import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "Online Booking & Instant Estimate | Valley Property Services",
    description: "Book professional exterior cleaning, roof washing, and window cleaning online. Get instant automated pricing and secure your appointment with Valley Property Services.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/online-booking",
    },
};

export default function OnlineBookingPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20 text-navy">
            {/* Page Header / Hero Banner */}
            <section className="bg-navy text-white pt-12 pb-20 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-gradient from-navy-light/20 via-transparent to-navy/80 pointer-events-none" />
                <div className="container mx-auto max-w-5xl text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-6">
                        <Calendar size={14} className="text-gold" />
                        <span>Automated Booking &amp; Instant Estimates</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                        Book Online &amp; Get an Instant Estimate
                    </h1>

                    <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                        Select your exterior cleaning services below to calculate automated pricing and reserve your preferred appointment date in real-time.
                    </p>

                    {/* Trust Highlights */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2 text-left">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                            <CheckCircle2 className="text-gold shrink-0" size={20} />
                            <div>
                                <p className="text-xs font-bold text-white leading-tight">Instant Pricing</p>
                                <p className="text-[11px] text-slate-300">Upfront &amp; Transparent</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                            <Clock className="text-gold shrink-0" size={20} />
                            <div>
                                <p className="text-xs font-bold text-white leading-tight">Live Calendar</p>
                                <p className="text-[11px] text-slate-300">Pick Your Date &amp; Time</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                            <ShieldCheck className="text-gold shrink-0" size={20} />
                            <div>
                                <p className="text-xs font-bold text-white leading-tight">$2M Insured</p>
                                <p className="text-[11px] text-slate-300">Fully Licensed Team</p>
                            </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3.5 flex items-center gap-3">
                            <Star className="text-gold shrink-0 fill-gold" size={20} />
                            <div>
                                <p className="text-xs font-bold text-white leading-tight">4.9 Star Rated</p>
                                <p className="text-[11px] text-slate-300">119+ Verified Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Widget Container */}
            <div className="container mx-auto max-w-5xl px-4 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden p-4 sm:p-6 md:p-10">
                    <div className="mb-6 pb-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-black text-navy">
                                Step 1: Select Services &amp; Customize Options
                            </h2>
                            <p className="text-gray-500 text-sm mt-1">
                                Follow the prompts below to build your service package and schedule your cleaning.
                            </p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Live System Active</span>
                        </div>
                    </div>

                    {/* Markate Embed Widget */}
                    <MarkateBookingWidget />
                </div>

                {/* Alternative Contact / Assistance Callout */}
                <div className="mt-12 bg-white rounded-3xl p-8 border border-gray-200 shadow-sm grid md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8 space-y-2">
                        <span className="text-xs font-black uppercase tracking-widest text-gold">Need Custom Help?</span>
                        <h3 className="text-2xl font-black text-navy">
                            Prefer a Custom Quote or Have a Large Commercial Project?
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            If your property requires specialized attention, custom multi-unit HOA pricing, or non-standard commercial restoration, our team is ready to provide a free customized proposal.
                        </p>
                    </div>
                    <div className="md:col-span-4 flex flex-col gap-3">
                        <Link
                            href="/contact"
                            className="bg-navy hover:bg-navy-dark text-white font-bold text-center py-3.5 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                        >
                            <span>Standard Contact Form</span>
                            <ArrowRight size={16} />
                        </Link>
                        <a
                            href="tel:920-609-7085"
                            className="bg-slate-100 hover:bg-slate-200 text-navy font-bold text-center py-3 px-6 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                        >
                            <Phone size={16} className="text-gold" />
                            <span>Call (920) 609-7085</span>
                        </a>
                    </div>
                </div>

                {/* Verified Customer Reviews Carousel */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-black text-navy">Trusted by 100+ Homeowners &amp; Businesses Across Northeast Wisconsin</h3>
                        <p className="text-gray-600 text-sm mt-2">See what our clients say about our prompt communication, careful work, and 5-star results.</p>
                    </div>
                    <ReviewSlider />
                </div>
            </div>
        </main>
    );
}
