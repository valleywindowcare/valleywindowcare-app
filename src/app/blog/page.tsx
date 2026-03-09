import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Home } from 'lucide-react';
import SafeHeroImage from '@/components/SafeHeroImage';
import { blogData } from '@/data/blogData';
import BlogFilterGrid from '@/components/BlogFilterGrid';

import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: 'Exterior Cleaning Insights & Tips | Valley Window Care Blog',
    description: 'Read expert advice on roof cleaning, commercial pressure washing, and permanent lighting solutions across Northeast Wisconsin.',
};

export default function BlogIndexPage() {
    return (
        <main className="w-full overflow-hidden bg-slate-50">
            {/* HERO SECTION */}
            <section className="relative w-full h-[50vh] sm:h-[60vh] flex items-center justify-center bg-navy">
                <SafeHeroImage
                    src="/images/portfolio/building-wash-copy.webp"
                    fallbackSrc="/images/portfolio/building-wash-copy.webp"
                    alt="Valley Window Care Team - Exterior Cleaning Experts"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-navy/60 z-10" />

                {/* Content */}
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-16 sm:mt-20">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
                        Our Exterior <span className="text-gold">Insights</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-100 font-medium max-w-2xl mx-auto drop-shadow-md pb-4">
                        Expert tips, home maintenance guides, and inside knowledge on protecting your Wisconsin property.
                    </p>
                    <Link 
                        href="/contact" 
                        className="inline-block bg-gold text-navy font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mt-4"
                    >
                        Request a Free Quote
                    </Link>
                </div>

                {/* Decorative Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-slate-50 to-transparent z-20" />
            </section>

            {/* BREADCRUMBS */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-slate-600 font-medium">
                        <Link href="/" className="hover:text-gold transition-colors flex items-center">
                            <Home className="w-4 h-4 mr-1" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                        <span className="text-navy">Blog</span>
                    </nav>
                </div>
            </div>

            {/* BLOG GRID SECTION */}
            <section className="py-20 sm:py-24 bg-slate-50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-4">
                            Latest Articles
                        </h2>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Discover the most effective, safest ways to care for your siding, roofing systems, and concrete substrates.
                        </p>
                    </div>

                    <BlogFilterGrid initialPosts={blogData} />
                </div>
            </section>
            
            {/* CTA Section */}
            <section className="bg-navy py-16 mt-8">
               <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-6">Need Professional Help Today?</h2>
                    <p className="text-lg text-slate-300 mb-8">Skip the research. Let our fully insured professionals safely restore your property's exterior right now.</p>
                    <Link href="tel:920-609-7085" className="inline-flex items-center bg-gold text-navy font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-colors duration-300 shadow-lg hover:shadow-gold/20">
                        Call (920) 609-7085
                    </Link>
               </div>
            </section>
            <ReviewSlider />
        </main>
    );
}
