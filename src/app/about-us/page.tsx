import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Sparkles, Target, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us | Valley Window Care and Exterior Cleaning",
    description: "Learn about Valley Window Care and Exterior Cleaning's story, our team, and our commitment to crystal clear exterior cleaning services in Green Bay.",
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Minimalist Hero */}
            <section className="bg-navy pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 pattern-grid-lg"></div>
                <div className="container mx-auto max-w-4xl relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Our <span className="text-gold">Story</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed">
                        Building WIN-WIN relationships through professional exterior cleaning in Northeast Wisconsin.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
                        <div className="md:w-1/2 bg-navy p-12 text-white flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-6 text-gold">Meet the Team</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed italic">
                                "As the face of Valley Window Care and Exterior Cleaning, I pride myself on our team's outstanding ability to provide professional services, build relationships with customers, and safely beat expectations on the job."
                            </p>
                            <p className="font-bold text-xl mb-8">– James</p>

                            <div className="pt-8 border-t border-white/10">
                                <h3 className="text-xl font-bold mb-3">James & Tyler</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Our clients recognize James and Tyler as a duo that delivers "wonderful" results. Known for being courteous, detail-oriented, and highly professional on every property.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-navy mb-8">Our Mission</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                Our primary goal is to provide a <strong className="text-navy">crystal clear service and experience</strong>. We want each client to be fully satisfied—and we strive to go above and beyond expectations.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/10 p-3 rounded-2xl text-gold shrink-0"><Target size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg mb-1">Accountability</h4>
                                        <p className="text-gray-600 text-sm">We take full ownership of every project to ensure perfect results.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/10 p-3 rounded-2xl text-gold shrink-0"><Shield size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg mb-1">Safety First</h4>
                                        <p className="text-gray-600 text-sm">Prioritizing the safety of our team and your property above all else.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/10 p-3 rounded-2xl text-gold shrink-0"><Sparkles size={24} /></div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg mb-1">Professionalism</h4>
                                        <p className="text-gray-600 text-sm">Maintaining high standards in both our service and communication.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 bg-white relative z-10">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">Why Choose Us?</h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Crystal Clear Results", desc: "Unmatched attention to detail for a flawless finish." },
                            { title: "Safety Focused", desc: "Industry-approved methods that protect your property." },
                            { title: "Local Roots", desc: "Proudly serving Green Bay, Appleton & surrounding areas." },
                            { title: "Respectful Team", desc: "Courteous professionals you can trust around your home." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all text-center group cursor-pointer hover:-translate-y-1">
                                <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 relative z-10 bg-slate-50">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-navy mb-8">Ready to work with knowledgeable experts?</h2>
                    <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1 text-lg">
                        Get Your Free Quote Today
                    </Link>
                </div>
            </section>
        </main>
    );
}
