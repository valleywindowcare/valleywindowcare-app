import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Sparkles, Target, Users, CheckCircle2, History, ShieldAlert, Award } from "lucide-react";
import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "About Us | Valley Property Services",
    description: "Learn about Valley Property Services's history since 2020, our exterior cleaning philosophy, and our commitment to serving Green Bay & Fox Valley.",
};

export default function AboutUsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://valleyexteriorpros.com/#organization",
                "name": "Valley Property Services",
                "url": "https://valleyexteriorpros.com",
                "logo": "https://valleyexteriorpros.com/images/og-default.jpg",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "920-609-7085",
                    "contactType": "customer service"
                }
            },
            {
                "@type": "Person",
                "@id": "https://valleyexteriorpros.com/about-us#james",
                "name": "James",
                "jobTitle": "Owner & Founder",
                "worksFor": { "@id": "https://valleyexteriorpros.com/#organization" },
                "url": "https://valleyexteriorpros.com/about-us"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-slate-50 text-navy">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
                        <div className="md:w-1/2 bg-navy text-white flex flex-col justify-between overflow-hidden relative min-h-[500px]">
                            {/* Profile Image Background */}
                            <div className="relative w-full h-64 shrink-0 border-b border-white/10">
                                <Image
                                    src="/images/portfolio/building-wash-copy.webp"
                                    alt="James, Founder and Owner-Operator of Valley Property Services"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D] via-[#1B365D]/30 to-transparent"></div>
                                <div className="absolute bottom-4 left-6">
                                    <span className="bg-gold text-navy font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">Owner-Operator</span>
                                </div>
                            </div>
                            
                            <div className="p-8 sm:p-10 flex-grow flex flex-col justify-center bg-[#1B365D]">
                                <h2 className="text-2xl font-extrabold mb-1 text-gold">Meet the Founder</h2>
                                <h3 className="text-xl font-bold text-white mb-4">James</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base italic">
                                    "I founded Valley Property Services with a single goal: to deliver uncompromising technical quality and absolute operational transparency to property owners in Northeast Wisconsin. I'm personally involved in every project, overseeing our safety protocols and ensuring our work exceeds your expectations."
                                </p>
                                <p className="font-bold text-sm tracking-wider uppercase text-gold">– James, Founder &amp; Owner-Operator</p>
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

            {/* EXPANDED DETAILED TEXT - HISTORY & PHILOSOPHY */}
            <section className="py-16 bg-white border-b border-gray-100 relative z-10">
                <div className="container mx-auto max-w-4xl px-4">
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                        
                        {/* SECTION 1: BUSINESS HISTORY SINCE 2020 */}
                        <div>
                            <h2 className="text-3xl font-extrabold text-navy mb-4 flex items-center gap-3">
                                <History className="text-gold" size={28} /> Our History Since 2020
                            </h2>
                            <p className="leading-relaxed">
                                Valley Property Services was founded in 2020 by James during a time of shifting service sector standards. What began as a single-operator business equipped with a single professional-grade cold-water pressure washing rig has grown year-over-year into a premier commercial and residential exterior restoration team. James recognized that the property cleaning industry in Northeast Wisconsin lacked two fundamental things: rigorous technical safety and absolute operational transparency.
                            </p>
                            <p className="leading-relaxed">
                                Over the years, we expanded our capabilities, investing in state-of-the-art equipment such as high-reach carbon-fiber pure-water poles, dedicated low-pressure soft wash trailer rigs, and high-temperature steam cleaning systems. By 2023, Valley Property Services was serving not only single-family homeowners but also major retail complexes, industrial warehouses, and multi-unit housing developments across the Fox Valley corridor. Our growth is built entirely on word-of-mouth referrals, secured through our uncompromising quality control and commitment to doing the job right the first time.
                            </p>
                        </div>

                        {/* SECTION 2: EXTERIOR CLEANING PHILOSOPHY */}
                        <div>
                            <h2 className="text-3xl font-extrabold text-navy mb-4 flex items-center gap-3">
                                <Award className="text-gold" size={28} /> Our Exterior Cleaning Philosophy
                            </h2>
                            <p className="leading-relaxed">
                                Our cleaning philosophy centers on **chemistry over pressure**. Standard power washing companies rely on high physical water pressure to shear away grime. While this is fast, it is highly destructive to modern building materials, easily cracking vinyl siding, gouging wood decks, eroding stucco, and forcing water behind siding seams, which breeds mold.
                            </p>
                            <p className="leading-relaxed">
                                We utilize specialized soft wash systems that apply biodegradable cleaners at low pressure (under 100 PSI). This system kills organic growth, mold, algae, and lichen at the root, completely sanitizing the surface rather than merely cleaning it. This algaecide treatment keeps surfaces clean up to four times longer than traditional washing, ensuring long-term structural protection for your building's exterior.
                            </p>
                            <p className="leading-relaxed">
                                We operate with strict environmental safety guidelines. We pre-hydrate surrounding lawns and landscaping to create a protective moisture barrier, continuously mist plants, and reclaim wash water when cleaning grease pad enclosures to prevent storm drain runoff in compliance with EPA regulations.
                            </p>
                        </div>

                        {/* SECTION 3: COMMUNITY COMMITMENT */}
                        <div>
                            <h2 className="text-3xl font-extrabold text-navy mb-4 flex items-center gap-3">
                                <ShieldAlert className="text-gold" size={28} /> Commitment to the Fox Valley & Green Bay Community
                            </h2>
                            <p className="leading-relaxed">
                                We are proudly based in Northeast Wisconsin, serving property owners throughout Appleton, Green Bay, De Pere, Neenah, and Oshkosh. We understand the specific demands of local environments, including high moisture levels from the Lower Fox River basin that breed black roof algae, and winter road salt tracking that corrodes driveways and siding.
                            </p>
                            <p className="leading-relaxed">
                                We are dedicated to protecting local properties from the harsh freeze-thaw cycles of Wisconsin winters. Our crews carry specialized compaction plates, commercial drying blowers, and warm-water rotary wash systems to ensure a perfect finish. We carry a $2,000,000 general liability policy and complete workers' compensation insurance, protecting our crews, our clients, and our local community.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* MODULE 2: The Valley Property Services Standard */}
            <section className="py-16 bg-slate-50 relative z-10">
                <div className="container mx-auto max-w-6xl px-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center tracking-tight">The Valley Property Services Standard</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-navy">
                        {/* Column 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/30 transition-colors">
                            <Shield className="w-12 h-12 text-gold mb-6" />
                            <h3 className="text-xl font-bold mb-4">Fully Insured</h3>
                            <p className="text-lg leading-relaxed text-gray-700">
                                We carry comprehensive commercial liability insurance. We protect high-value residential properties safely. We secure major commercial storefronts legally. You bear zero physical risk.
                            </p>
                        </div>
                        {/* Column 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/30 transition-colors">
                            <Users className="w-12 h-12 text-gold mb-6" />
                            <h3 className="text-xl font-bold mb-4">Owner-Operated</h3>
                            <p className="text-lg leading-relaxed text-gray-700">
                                You deal directly with our ownership team. We enforce strict, personal quality control. We eliminate unresponsive middle management. We guarantee absolute project accountability.
                            </p>
                        </div>
                        {/* Column 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/30 transition-colors">
                            <Sparkles className="w-12 h-12 text-gold mb-6" />
                            <h3 className="text-xl font-bold mb-4">Premium Equipment</h3>
                            <p className="text-lg leading-relaxed text-gray-700">
                                We utilize modern deionized pure-water systems for flawless <Link href="/services/window-cleaning" className="text-blue-600 font-bold hover:text-gold transition-colors">Window Cleaning</Link>. We deploy dedicated low-pressure soft wash rigs. We never damage delicate exterior siding.
                            </p>
                        </div>
                    </div>
                    {/* Contextual Link */}
                    <div className="mt-12 text-center text-xl text-gray-700 font-medium">
                        Ready to elevate your property standards? <Link href="/contact" className="text-gold font-bold hover:text-navy transition-colors underline mt-2 block sm:inline">Contact our ownership team for your exact quote.</Link>
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

            <ReviewSlider />

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
