import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Briefcase, GraduationCap, DollarSign } from 'lucide-react';
import HeroForm from '@/components/HeroForm';

export const metadata: Metadata = {
    title: 'Pressure Washing Jobs in Wisconsin | Careers at Valley Window Care',
    description: 'Join the premier exterior maintenance team in the Fox Valley. Seeking highly-motivated individuals for pressure washing jobs and field operations.',
};

export default function Careers() {
    return (
        <main className="min-h-screen bg-gray-50">
            <section className="bg-navy pt-24 pb-20 px-4">
                <div className="container mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight">
                        Launch Your Career <span className="text-gold">With Us</span>
                    </h1>
                    <p className="text-xl text-gray-300 md:text-2xl font-light">
                        Discover elite pressure washing jobs and technical field roles here in the Fox Valley.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-navy mb-4">Why Work For Valley Window Care?</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We don't just wash homes; we are highly-trained exterior restoration professionals. If you are looking for an active, engaging, and high-paying pressure washing job in Wisconsin that isn't chained to a desk, we want you on our rigs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <DollarSign className="text-navy" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-3">Top-Tier Compensation</h3>
                        <p className="text-gray-600">Industry-leading hourly rates paired with performance bonuses for efficiency and verified 5-star customer reviews.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <GraduationCap className="text-navy" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-3">Deep Chemical Training</h3>
                        <p className="text-gray-600">You will learn the precise chemistry behind soft washing, rust mitigation, and safe architectural preservation.</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Briefcase className="text-navy" size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-3">Rapid Upward Mobility</h3>
                        <p className="text-gray-600">Start as a rig technician and rapidly advance into lead operator or commercial fleet management roles.</p>
                    </div>
                </div>

                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                    <div className="bg-navy p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Field Operations Lead</h3>
                            <p className="text-gray-300">Green Bay / Appleton • Full Time • $22-$30/hr</p>
                        </div>
                        <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold text-lg py-3 px-8 rounded-full hover:bg-white transition-all w-full md:w-auto">
                            Apply Now <ChevronRight size={20} />
                        </Link>
                    </div>
                    <div className="p-8">
                        <h4 className="text-xl font-bold text-navy mb-4">Role Overview</h4>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            As a Field Operations Lead, you will manage our cutting-edge soft wash rigs and interface directly with residential and commercial clients across our service matrix. You must be comfortable working on ladders, adhering to strict environmental compliance procedures, and mastering our proprietary CRM for job tracking.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-navy py-16">
                <div className="container mx-auto px-4 max-w-xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Start Your Application</h2>
                        <p className="text-gray-300">Submit your details below and our operations manager will contact you within 24 hours.</p>
                    </div>
                    <HeroForm />
                </div>
            </section>
        </main>
    );
}
