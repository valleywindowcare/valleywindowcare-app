import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight } from 'lucide-react';

interface PricingMatrixProps {
    title: string;
    description: string;
    rateTitle: string;
    ratePrice: string;
    rateDetails: string;
    minimumPrice: string;
    minimumDetails: string;
    variableTitle: string;
    variableHeading?: string;
    variableDetails: string;
}

export default function PricingMatrix({
    title,
    description,
    rateTitle,
    ratePrice,
    rateDetails,
    minimumPrice,
    minimumDetails,
    variableTitle,
    variableHeading = "Custom Assessed",
    variableDetails
}: PricingMatrixProps) {
    return (
        <section className="bg-slate-50 py-20 border-t border-gray-100 relative z-10">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-navy mb-6 tracking-tight">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">{description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 text-center relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-2">
                        <div className="absolute top-0 left-0 w-full h-2 bg-navy"></div>
                        <h3 className="text-2xl font-bold text-navy-dark mb-4">{rateTitle}</h3>
                        <div className="text-4xl font-black text-gold mb-6">{ratePrice}</div>
                        <p className="text-gray-600 font-medium leading-relaxed">{rateDetails}</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-navy rounded-3xl p-8 lg:p-10 shadow-2xl text-center relative overflow-hidden group transform md:-translate-y-4 border border-navy-light">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gold"></div>
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <ShieldCheck size={100} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white/90 mb-4 relative z-10">Project Minimum</h3>
                        <div className="text-5xl font-black text-white mb-6 relative z-10">{minimumPrice}</div>
                        <p className="text-gray-300 font-medium relative z-10 leading-relaxed">{minimumDetails}</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-gray-100 text-center relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-2">
                        <div className="absolute top-0 left-0 w-full h-2 bg-navy"></div>
                        <h3 className="text-2xl font-bold text-navy-dark mb-4">{variableTitle}</h3>
                        <div className="text-3xl font-black text-navy mb-6 tracking-tight mt-1">{variableHeading}</div>
                        <p className="text-gray-600 font-medium leading-relaxed">{variableDetails}</p>
                    </div>
                </div>

                <div className="text-center">
                    <Link href="/contact" className="inline-flex items-center justify-center gap-3 bg-gold text-navy hover:bg-navy hover:text-white px-10 py-5 rounded-full font-extrabold shadow-xl transition-all hover:-translate-y-1 uppercase tracking-widest text-sm">
                        Get an Exact Quote <ArrowRight size={22} />
                    </Link>
                </div>

                {/* Trust Badge / Owner Guarantee */}
                <div className="mt-12 max-w-2xl mx-auto bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex items-start gap-4 text-left">
                    <ShieldCheck className="text-gold shrink-0 mt-1" size={28} />
                    <p className="text-sm md:text-base text-navy font-medium leading-relaxed">
                        <strong className="text-navy-dark uppercase tracking-widest text-xs block mb-1">Personal Accountability</strong>
                        All work is backed by a 100% Satisfaction Guarantee from Owner/Operator James Voss. We treat your property like our own.
                    </p>
                </div>
            </div>
        </section>
    );
}
