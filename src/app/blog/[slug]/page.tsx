import fs from 'fs';
import path from 'path';
import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ReviewSlider from '@/components/ReviewSlider';
import { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

// Get all blogs helper parsing physical Markdown files
function getBlogs(): any[] {
    let blogsList: any[] = [];
    try {
        if (fs.existsSync(POSTS_DIR)) {
            const files = fs.readdirSync(POSTS_DIR).filter((f: string) => f.endsWith('.md'));
            for (const file of files) {
                const fileContent = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
                const { data, content } = matter(fileContent);
                blogsList.push({
                    slug: file.replace('.md', ''),
                    ...data,
                    content: content
                });
            }
        }
        return blogsList;
    } catch (e) {
        return [];
    }
}

export async function generateStaticParams() {
    const blogs = getBlogs();
    return blogs.map((b: any) => ({
        slug: b.slug,
    }));
}

type BlogProps = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BlogProps): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Fallback if not found in baseline
    const blogs = getBlogs();
    const blog = blogs.find((b: any) => b.slug === slug);
    if (blog) {
        return {
            title: `${blog.title} | Valley Window Care and Exterior Cleaning`,
            description: blog.meta_description || `Read ${blog.title} on the Valley Window Care and Exterior Cleaning blog.`
        };
    }

    return { title: 'Blog Post' };
}

export default async function BlogPost({ params }: BlogProps) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const blogs = getBlogs();
    const blog = blogs.find((b: any) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.meta_description || `Read ${blog.title} on the Valley Window Care and Exterior Cleaning blog.`,
        "image": blog.image ? (blog.image.startsWith('/') ? `https://valleywindowcare.com${blog.image}` : blog.image) : "https://valleywindowcare.com/wp-content/uploads/2026/01/Roof-Cleaning-in-green-bay.png",
        "datePublished": blog.date,
        "dateModified": blog.date,
        "author": {
            "@type": "Person",
            "name": "Valley Window Care",
            "url": "https://valleywindowcare.com/about-us"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Valley Window Care and Exterior Cleaning",
            "logo": {
                "@type": "ImageObject",
                "url": "https://valleywindowcare.com/upscalemedia-transformed.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://valleywindowcare.com/blog/${blog.slug}`
        }
    };

    return (
        <article className="bg-white min-h-screen">
            {/* JSON-LD Schema Injection */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Minimalist Hero for Article */}
            <div className="bg-navy pt-32 pb-20 relative">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-bold mb-8 uppercase tracking-widest text-sm">
                        <ChevronLeft size={16} /> Back to Blog
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
                        {blog.title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-white/70 font-semibold">
                        <Calendar size={18} className="text-gold" />
                        <time dateTime={blog.date}>
                            {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </time>
                    </div>
                </div>
            </div>

            {/* TWO-COLUMN LAYOUT */}
            <div className="max-w-7xl mx-auto px-6 py-12 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content Column */}
                    <div className="lg:col-span-8">
                        {blog.image && (
                            <div className="relative w-full h-[400px] mb-12 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                                <Image
                                    src={blog.image || '/site-gallery/authentic-crew-photo.jpg'}
                                    alt={`Valley Window Care and Exterior Cleaning - ${blog.title}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        )}

                        {/* Rendering the physical Markdown file directly formatted effectively via tailwind prose constraints */}
                        <article className="prose prose-slate lg:prose-xl max-w-none prose-table:border prose-th:bg-blue-50 break-words [overflow-wrap:anywhere]">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    a: ({ node, ...props }) => (
                                        <a {...props} className="font-bold text-navy hover:text-gold no-underline transition-colors border-b-2 border-navy/20 hover:border-gold" />
                                    )
                                }}
                            >
                                {blog.content}
                            </ReactMarkdown>
                        </article>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 space-y-8">

                            {/* Author Trust Element */}
                            <div className="bg-slate-50 rounded-3xl p-8 border-2 border-navy/10 shadow-sm">
                                <h3 className="text-xl font-bold text-navy mb-6 border-b border-gray-200 pb-4">About the Author</h3>
                                <div className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src="/site-gallery/authentic-crew-photo.jpg"
                                        alt="James Voss - Valley Window Care"
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                                <h4 className="font-bold text-lg text-navy-dark mb-2">James Voss</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    Owner and lead operator of Valley Window Care and Exterior Cleaning. James Voss is a certified exterior specialist with over 15 years of hands-on experience in Northeast Wisconsin. He holds compliance training alongside leading industry bodies like the IWCA and PWNA, specializing in biodegradable, low-pressure restorative cleaning.
                                </p>
                                <a href="tel:920-609-7085" className="block w-full text-center bg-gold hover:bg-gold-light text-navy-dark font-bold py-3 px-4 rounded-xl shadow-md transition-colors uppercase tracking-wider text-sm" rel="nofollow">
                                    Call (920) 609-7085
                                </a>
                            </div>

                            {/* Services Quick Nav */}
                            <div className="bg-navy rounded-3xl p-8 border border-navy-dark shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4 relative z-10">Our Core Services</h3>
                                <ul className="space-y-4 relative z-10">
                                    <li><Link href="/services/roof-cleaning" className="text-gray-300 hover:text-gold flex items-center gap-2 transition-colors font-medium"><ChevronRight size={16} className="text-gold" /> Roof Cleaning</Link></li>
                                    <li><Link href="/services/house-washing" className="text-gray-300 hover:text-gold flex items-center gap-2 transition-colors font-medium"><ChevronRight size={16} className="text-gold" /> House Washing</Link></li>
                                    <li><Link href="/services/window-cleaning" className="text-gray-300 hover:text-gold flex items-center gap-2 transition-colors font-medium"><ChevronRight size={16} className="text-gold" /> Window Cleaning</Link></li>
                                    <li><Link href="/services/permanent-lighting" className="text-gray-300 hover:text-gold flex items-center gap-2 transition-colors font-medium"><ChevronRight size={16} className="text-gold" /> Permanent Lighting</Link></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div> {/* End Grid */}
            </div>

            {/* Conversion Add-on: Review Carousel Injection */}
            <div className="my-16 bg-slate-50 py-12 border-y border-gray-100">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-center text-navy mb-8">What Northeast Wisconsin Says About Us</h3>
                    <ReviewSlider />
                </div>
            </div>

            {/* CTA specific to blog bottom */}
            <div className="container mx-auto px-4 mt-10 mb-20 max-w-4xl text-center">
                <h3 className="text-3xl font-bold text-navy-dark tracking-tight mb-6">Need Exterior Cleaning Services?</h3>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                    Whether you need a complete roof washing or just a concrete driveway cleanup, Valley Window Care and Exterior Cleaning delivers 5-star results.
                </p>
                <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy-dark px-10 py-4 rounded-full font-bold btn-hover-fx shadow-md text-lg">
                    GET A FREE QUOTE TODAY
                </Link>
            </div>
        </article>
    );
}
