import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQAccordion from '@/components/FAQAccordion';
import { ArrowRight } from 'lucide-react';
import { faqData } from '@/data/faqs';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | Valley Window Care and Exterior Cleaning',
    description: 'Find answers to the most common questions about our exterior cleaning and permanent lighting services in Northeast Wisconsin.',
};

export default function FAQPage() {
    return (
        <main>
            <Hero
                h1="Frequently Asked Questions"
                description="Find answers to common questions about roof cleaning, washing techniques, pricing, and our permanent lighting installations."
            />

            {/* FAQ Accordion Sections */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-16">
                        {faqData.map((category, idx) => (
                            <div key={idx} id={category.service.toLowerCase().replace(/[^a-z0-9]+/g, '-')}>
                                <div className="mb-8 border-b pb-4">
                                    <h2 className="text-3xl font-bold text-navy">{category.service} FAQs</h2>
                                </div>
                                <FAQAccordion faqs={category.faqs} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Site Map / Quick Links for SEO */}
            <section className="py-20 bg-slate-50 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-navy mb-4">Quick Links Directory</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Looking for something specific? Browse our complete directory of services and local coverage areas below.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Core Services */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-100">Core Services</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/roof-cleaning" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Roof Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/house-washing" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> House Washing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/window-cleaning" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Window Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/gutter-cleaning" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Gutter Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/paver-patio-restorations" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Paver Restoration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/permanent-led-lighting" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Permanent LED Lighting
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Services */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-100">Specialty Washing</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/services/pressure-washing" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Pressure Washing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/soft-washing" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Soft Washing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/concrete-cleaning" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Concrete Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/deck-restoration" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Deck Restoration
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/fence-cleaning" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Fence Cleaning
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company & Resources */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-100">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about-us" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Cleaning Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Service Areas
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="text-gold font-medium flex items-center gap-2">
                                        <ArrowRight size={14} className="text-gold" /> Frequently Asked Questions
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Top Service Areas */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-100">Top Service Areas</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/service-areas/green-bay" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Green Bay, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/appleton" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Appleton, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/de-pere" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> De Pere, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/oshkosh" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Oshkosh, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/howard" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Howard, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/suamico" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Suamico, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/door-county" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Door County, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/fish-creek" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Fish Creek, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/sturgeon-bay" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Sturgeon Bay, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/shawano" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Shawano, WI
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/manitowoc" className="text-gray-600 hover:text-gold transition-colors flex items-center gap-2 group">
                                        <ArrowRight size={14} className="text-gray-300 group-hover:text-gold transition-colors" /> Manitowoc, WI
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
