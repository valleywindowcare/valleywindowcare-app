import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { AlertTriangle, CheckCircle, Droplets, Shield } from 'lucide-react';
import ValueCalculator from '@/components/ValueCalculator';

export const metadata: Metadata = {
    title: 'DIY vs Professional Pressure Washing | Valley Window Care',
    description: 'Expert advice on why professional soft washing systems outclass destructive retail pressure washers. Calculate your exact Wisconsin property restoration costs online.',
};

export default function DiyVsPro() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-navy pt-24 pb-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                        DIY vs. Professional <span className="text-gold">Pressure Washing</span>
                    </h1>
                    <p className="text-xl text-gray-300 md:text-2xl font-light">
                        Why risking thousands in siding damage isn't worth saving a few dollars on a weekend rental.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-red-500 p-3 rounded-full text-white">
                                <AlertTriangle size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy">The DIY Risks</h2>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Retail pressure washers (like standard Ryobi or Craftsman box store units) operate by blasting incredibly concentrated water streams—often upwards of 3,500 to 4,000 PSI. Homeowners attempting to clean organic growth from their siding with these units frequently inflict irreversible catastrophic damage.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-600 font-medium">
                                <AlertTriangle className="text-red-400 shrink-0" size={20} />
                                Forcing water <span className="italic font-bold">behind</span> vinyl siding panels, causing trapped mold and internal drywall rot.
                            </li>
                            <li className="flex gap-3 text-gray-600 font-medium">
                                <AlertTriangle className="text-red-400 shrink-0" size={20} />
                                Stripping the UV-protective coating and oxidation layer off aluminum and vinyl siding, leaving permanent zebra stripes.
                            </li>
                            <li className="flex gap-3 text-gray-600 font-medium">
                                <AlertTriangle className="text-red-400 shrink-0" size={20} />
                                Fracturing fragile window seals and etching glass with high-pressure nozzles.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-gold p-3 rounded-full text-navy">
                                <Shield size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-navy">The Pro Standard</h2>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Professional exterior restoration completely abandons destructive high-pressure techniques when cleaning delicate siding or roofing. Valley Window Care relies on state-of-the-art Soft Wash architecture, ensuring an immaculate result without compromising the structural integrity of your investment.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-600 font-medium">
                                <CheckCircle className="text-green-500 shrink-0" size={20} />
                                100% Biodegradable algaecides engineered to melt away Gloeocapsa magma and thick green algae at the root level.
                            </li>
                            <li className="flex gap-3 text-gray-600 font-medium">
                                <Droplets className="text-blue-500 shrink-0" size={20} />
                                Low-pressure delivery systems applying cleaning solutions at the same PSI as a standard garden hose.
                            </li>
                            <li className="flex gap-3 text-gray-600 font-medium">
                                <CheckCircle className="text-green-500 shrink-0" size={20} />
                                Comprehensive $2,000,000 liability insurance coverage protecting your entire property.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mb-20">
                    <ValueCalculator />
                </div>
                
                <div className="text-center bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <h3 className="text-3xl font-extrabold text-navy mb-4">View The Full Price Matrix</h3>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Don't risk destroying your siding for a DIY project. Review our transparent 2026 Price Guide and see exactly what it takes to protect your Wisconsin real estate.
                    </p>
                    <Link href="/pricing" className="inline-block bg-navy text-white font-bold text-xl px-12 py-5 rounded-full hover:bg-gold hover:text-navy transition-all transform hover:-translate-y-1 shadow-xl">
                        View The 2026 Price Guide
                    </Link>
                </div>
            </section>
        </main>
    )
}
