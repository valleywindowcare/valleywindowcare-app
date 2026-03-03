import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, ShieldCheck, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';
import { seoContentMap } from '@/data/seoContentMap';

interface SEOAuthorityEngineProps {
    serviceSlug: string;
    serviceName: string;
    cityName?: string;
}

const relatedServicesMap: Record<string, { name: string, slug: string }[]> = {
    'roof-cleaning': [
        { name: 'House Washing', slug: 'house-washing' },
        { name: 'Gutter Cleaning', slug: 'gutter-cleaning' },
        { name: 'Concrete Cleaning', slug: 'concrete-cleaning' }
    ],
    'house-washing': [
        { name: 'Roof Cleaning', slug: 'roof-cleaning' },
        { name: 'Window Cleaning', slug: 'window-cleaning' },
        { name: 'Concrete Cleaning', slug: 'concrete-cleaning' }
    ],
    // default generic fallback
    'default': [
        { name: 'House Washing', slug: 'house-washing' },
        { name: 'Roof Cleaning', slug: 'roof-cleaning' },
        { name: 'Window Cleaning', slug: 'window-cleaning' }
    ]
};

export default function SEOAuthorityEngine({ serviceSlug, serviceName, cityName }: SEOAuthorityEngineProps) {
    const content = seoContentMap[serviceSlug] || seoContentMap['house-washing'];

    // Formatting helpers
    const locationText = cityName ? cityName : 'Northeast Wisconsin';
    const localH2Text = cityName ? `in ${cityName}, WI` : 'in Northeast Wisconsin';

    const relatedLinks = relatedServicesMap[serviceSlug] || relatedServicesMap['default'];

    const CallToAction = () => (
        <div className="my-12 bg-navy/5 border border-navy/10 rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="text-xl md:text-2xl font-bold text-navy mb-4">
                Ready to transform your property {localH2Text}?
            </h3>
            <p className="text-gray-600 mb-6">
                Protect your investment and restore your curb appeal today. Get a fast, free estimate from our expert team.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:920-609-7085" className="flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy-light transition-colors w-full sm:w-auto justify-center" rel="nofollow">
                    <Phone size={20} />
                    (920) 609-7085
                </a>
                <Link href="/contact" className="flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors w-full sm:w-auto justify-center">
                    Request a Free Quote <ArrowRight size={20} />
                </Link>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto bg-white text-navy rounded-2xl shadow-sm p-4 sm:p-8">
            {/* The Main Narrative */}
            <article className="prose prose-lg md:prose-xl text-gray-600 max-w-none mb-16">
                {/* The Problem Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="text-gold" size={32} />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                            The Cost of Neglect: Why {serviceName} is Critical {localH2Text}
                        </h2>
                    </div>

                    {/* 100 word localized injection */}
                    {cityName && (
                        <p className="text-xl font-medium text-navy/80 border-l-4 border-gold pl-6 mb-8">
                            Property owners in <strong>{cityName}</strong> face unique environmental challenges. Leaving your exterior surfaces unmaintained not only severely impacts your curb appeal throughout the {cityName} neighborhoods, but it actively deteriorates your building materials and lowers market value.
                        </p>
                    )}

                    <div className="space-y-6 text-lg">
                        {content.problemStatement.map((paragraph, idx) => (
                            <p key={idx} className="leading-relaxed">{paragraph}</p>
                        ))}
                    </div>
                </section>

                <CallToAction />

                {/* The Process Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <ShieldCheck className="text-gold" size={32} />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                            Our Professional {serviceName} Process {localH2Text}
                        </h2>
                    </div>

                    <p className="text-lg leading-relaxed mb-8">{content.processOverview}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                        {content.detailedProcess.map((step, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100 relative overflow-hidden group hover:border-gold/30 transition-colors">
                                <div className="text-6xl font-black text-gray-50 absolute -top-4 -right-2 z-0 group-hover:text-gold/5 transition-colors">
                                    0{idx + 1}
                                </div>
                                <h4 className="text-xl font-bold text-navy mb-4 relative z-10 flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-gold/20 text-navy flex items-center justify-center text-sm">
                                        {idx + 1}
                                    </span>
                                    {step.title}
                                </h4>
                                <p className="text-gray-600 relative z-10 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <CallToAction />

                {/* The Benefits Section - UPDATED TO PURE WHITE/HIGH CONTRAST TEXT */}
                <section className="mb-16 bg-[#FFFFFF] text-[#1E2B3C] p-8 md:p-12 rounded-3xl not-prose shadow-[0_0_40px_rgba(30,43,60,0.06)] border border-gray-100">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-navy border-b border-gray-100 pb-6">
                        The Benefits of Expert {serviceName} in {locationText}
                    </h2>
                    <p className="text-xl text-gray-600 mb-10 max-w-4xl leading-relaxed">
                        {content.benefitsOverview}
                    </p>

                    <div className="space-y-6">
                        {content.detailedBenefits.map((benefit, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <CheckCircle className="text-gold shrink-0 mt-1" size={24} />
                                <div>
                                    <h4 className="text-xl font-bold text-navy-dark mb-2">{benefit.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Local Proof Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <MapPin className="text-gold" size={32} />
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy m-0">
                            Local Expertise: Defending {locationText} Properties
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        {content.localProof.map((paragraph, idx) => (
                            <p key={idx} className="leading-relaxed">{paragraph}</p>
                        ))}
                    </div>
                </section>

                <CallToAction />

                {/* Internal Linking Engine */}
                <section className="mt-20 pt-12 border-t border-gray-200 not-prose">
                    <h3 className="text-2xl font-bold text-navy mb-6">Explore Related Services</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                        {relatedLinks.map((link, idx) => (
                            <Link
                                key={idx}
                                href={`/services/${link.slug}`}
                                className="flex items-center justify-between p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/50 transition-all group"
                            >
                                <span className="font-bold text-navy group-hover:text-gold transition-colors">{link.name}</span>
                                <ArrowRight size={18} className="text-gray-300 group-hover:text-gold transition-colors" />
                            </Link>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link href="/service-areas" className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors">
                            <MapPin size={18} /> View All Wisconsin Service Areas
                        </Link>
                    </div>

                    {/* LSI Keyword Cloud Injection for Crawlers */}
                    <div className="mt-12 pt-8 border-t border-gray-100">
                        <p className="text-xs text-gray-400 leading-loose text-center max-w-5xl mx-auto">
                            {content.lsiKeywords.join(" • ")}
                        </p>
                    </div>
                </section>
            </article>
        </div>
    );
}
