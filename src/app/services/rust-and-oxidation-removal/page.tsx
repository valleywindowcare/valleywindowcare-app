import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Droplet, ShieldCheck, Wrench } from 'lucide-react';
import ValueCalculator from '@/components/ValueCalculator';
import HeroForm from '@/components/HeroForm';

export const metadata: Metadata = {
    title: 'Rust & Oxidation Removal in Wisconsin | Valley Window Care',
    description: 'Expert rust repairs, irrigation stain remediation, and vinyl siding cleaning for Green Bay, Appleton, and the surrounding Fox Valley.',
};

export default function RustRemovalService() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-navy pt-24 pb-20 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                        Professional <span className="text-gold">Rust & Oxidation</span> Removal
                    </h1>
                    <p className="text-xl text-gray-300 md:text-2xl font-light">
                        Targeted chemical remediation for stubborn stains and vinyl siding degradation.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-3xl font-extrabold text-navy mb-6">Restoring Vinyl Siding to Factory Quality</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Whether it's caustic battery acid stains on your concrete driveway or deep rust repairs required underneath a leaking commercial AC unit, standard pressure washing will not remove metallic staining. In fact, high pressure often forces the oxidation deeper into the substrate. 
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            When handling comprehensive vinyl siding cleaning, we utilize highly-specialized reactive chemical compounds that safely lift the oxidation layer (often appearing as chalky white residue) off your home, restoring the original vibrant color.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
                            <div className="bg-navy p-3 rounded-full text-gold shrink-0">
                                <Droplet size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">Irrigation Stain Eradication</h3>
                                <p className="text-gray-600">Neutralizing well-water iron buildup that leaves dense, orange metallic streaks along your brick and foundation.</p>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-start gap-4">
                            <div className="bg-navy p-3 rounded-full text-gold shrink-0">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-navy mb-2">Safe Vinyl Siding Wash</h3>
                                <p className="text-gray-600">Our comprehensive house washing starts at a highly accessible <span className="font-bold text-black">$350 baseline</span>, ensuring top-tier chemical oxidation removal for total property protection.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20">
                    <ValueCalculator />
                </div>
            </section>
            
            <section className="bg-navy py-16">
                <div className="container mx-auto px-4 max-w-xl">
                    <HeroForm />
                </div>
            </section>
        </main>
    );
}
