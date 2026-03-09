import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import SafeHeroImage from '@/components/SafeHeroImage';
import { blogData } from '@/data/blogData';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Script from 'next/script';

// Generate Static Params for all 15 active CSV mappings
import ReviewSlider from '@/components/ReviewSlider';

export function generateStaticParams() {
    return blogData.map((post) => ({
        slug: post.slug,
    }));
}

// Intercept Localized SEO Schemas
type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
    const resolvedParams = await params;
    const post = blogData.find((p) => p.slug === resolvedParams.slug);

    if (!post) {
        return {
            title: 'Post Not Found | Valley Window Care',
        };
    }

    return {
        title: `${post.title} | Valley Window Care`,
        description: post.excerpt,
    };
}

export default async function BlogPostTemplate({ params }: Props) {
    const resolvedParams = await params;
    const post = blogData.find((p) => p.slug === resolvedParams.slug);

    // Hard fallback if the requested URL isn't natively supported in our array
    if (!post) {
        notFound();
    }

    return (
        <main className="w-full overflow-hidden bg-white">
            {/* HERO SECTION */}
            <section className="relative w-full h-[40vh] sm:h-[50vh] flex items-center justify-center bg-navy">
                <SafeHeroImage
                    src={post.imagePath}
                    fallbackSrc="/images/portfolio/building-wash-copy.webp"
                    alt={post.title}
                />
                
                {/* Dark Overlay for text legibility */}
                <div className="absolute inset-0 bg-navy/70 z-10" />

                {/* Content */}
                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-12">
                    <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
                        <div className="inline-block bg-gold text-navy font-black px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-widest uppercase shadow-lg border border-gold/20">
                            {post.category}
                        </div>
                        <div className="inline-block bg-navy/40 backdrop-blur-md text-white font-medium px-4 py-1.5 rounded-full text-xs sm:text-sm tracking-widest uppercase border border-white/20 shadow-sm">
                            {post.date}
                        </div>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg leading-tight w-full relative">
                        {post.title}
                    </h1>
                </div>
            </section>

            {/* BREADCRUMBS */}
            <div className="bg-slate-50 border-b border-slate-200 sticky top-0 z-30 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <nav className="flex items-center space-x-2 text-sm text-slate-600 font-medium">
                        <Link href="/" className="hover:text-gold transition-colors flex items-center">
                            <Home className="w-4 h-4 mr-1" />
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <Link href="/blog" className="hover:text-gold transition-colors">
                            Blog
                        </Link>
                        <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                        <span className="text-navy truncate max-w-[150px] sm:max-w-[300px]">{post.title}</span>
                    </nav>
                </div>
            </div>

            {/* ARTICLE CONTENT */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
                
                {/* Back Button */}
                <Link 
                    href="/blog" 
                    className="inline-flex items-center text-slate-500 hover:text-navy font-medium mb-10 transition-colors group"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                    Back to Articles
                </Link>

                {/* Excerpt Leader */}
                <div className="mb-12 PB-12 border-b border-slate-200">
                    <p className="text-xl sm:text-2xl text-slate-700 font-medium leading-relaxed">
                        {post.excerpt}
                    </p>
                </div>

                {/* Main Body HTML & Markdown Injection */}
                <div 
                    className="prose prose-lg sm:prose-xl text-slate-700 max-w-none 
                    prose-headings:text-navy prose-headings:font-bold 
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:leading-relaxed prose-p:mb-6
                    prose-a:text-gold prose-a:font-bold hover:prose-a:text-navy prose-a:transition-colors
                    prose-strong:text-navy
                    prose-li:my-2"
                >
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm]} 
                        rehypePlugins={[rehypeRaw]}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Author Block */}
                <div className="mt-16 sm:mt-24 pt-10 border-t border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-md">
                        <img src="/images/portfolio/building-wash-copy.webp" 
                            alt="Valley Window Care Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="text-center sm:text-left">
                        <h3 className="text-xl font-bold text-navy mb-2">
                            {post.authorName || 'Written by James Voss'}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                            {post.authorBio || 'James Voss is the Owner and Operator of Valley Window Care, bringing years of hands-on exterior cleaning and permanent lighting expertise to Northeast Wisconsin. Fully insured and committed to unparalleled quality, James specializes in protecting and elevating high-value properties.'}
                        </p>
                        <Link href="/about-us" className="text-gold font-bold hover:text-navy transition-colors underline underline-offset-4">
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </article>

            {/* CALL TO ACTION */}
            <section className="bg-navy py-16 sm:py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">Ready to Experience the Difference?</h2>
                    <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">Skip the guesswork. Let our fully insured, professional technicians restore your property safely and efficiently.</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="tel:920-609-7085" className="inline-flex items-center justify-center bg-gold text-navy font-bold px-8 py-4 rounded-full text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] transform hover:-translate-y-1 w-full sm:w-auto">
                            Call (920) 609-7085
                        </Link>
                        <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border-2 border-slate-400 text-white font-bold px-8 py-4 rounded-full text-lg hover:border-white hover:bg-white/10 transition-all duration-300 w-full sm:w-auto">
                            Get a Free Quote
                        </Link>
                    </div>
                </div>
            </section>
            <ReviewSlider />

            {/* JSON-LD Schema for Blog Posting */}
            <Script id={`schema-${post.slug}`} type="application/ld+json" strategy="lazyOnload">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `https://valleywindowcare.com/blog/${post.slug}`
                    },
                    "headline": post.title,
                    "description": post.excerpt,
                    "image": `https://valleywindowcare.com${post.imagePath}`,
                    "author": {
                        "@type": "Person",
                        "name": post.authorName || "James Voss",
                        "url": "https://valleywindowcare.com/about-us"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "Valley Window Care",
                        "logo": {
                            "@type": "ImageObject",
                            "url": "https://valleywindowcare.com/valley-window-care-logo-without-background.png"
                        }
                    },
                    "datePublished": post.date,
                    "dateModified": post.date
                })}
            </Script>
        </main>
    );
}
