"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface BlogPost {
    slug: string;
    title: string;
    date: string;
    image: string;
    category?: string;
}

export default function BlogFeed({ blogs }: { blogs: BlogPost[] }) {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories = [
        'All',
        'Window Cleaning',
        'Roof & Exterior Cleaning',
        'Permanent LED Lighting',
        'Company News/Tips'
    ];

    const filteredBlogs = activeCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === activeCategory);

    return (
        <section className="py-20 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Category Navigation Bar */}
                <div className="max-w-7xl mx-auto mb-16">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-sm ${activeCategory === cat
                                    ? 'bg-navy text-white scale-105 shadow-md'
                                    : 'bg-white text-gray-600 hover:bg-gold hover:text-white border border-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredBlogs.length > 0 ? (
                        filteredBlogs.map((blog: any) => (
                            <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 flex flex-col btn-hover-fx">
                                {blog.image ? (
                                    <div className="w-full h-56 relative overflow-hidden bg-slate-100">
                                        <img
                                            src={blog.image || '/images/portfolio/building-wash-copy.webp'}
                                            alt={`Valley Window Care and Exterior Cleaning - ${blog.category || 'Service Profile'}`}
                                            loading="lazy"
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-56 relative overflow-hidden bg-slate-100">
                                        <img
                                            src="/images/portfolio/building-wash-copy.webp"
                                            alt={`Valley Window Care and Exterior Cleaning - ${blog.category || 'Service Profile'}`}
                                            loading="lazy"
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                )}

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-gold font-semibold text-sm mb-4">
                                        <Calendar size={16} />
                                        <time dateTime={blog.date}>
                                            {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                        </time>
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-dark leading-tight mb-4 group-hover:text-navy transition-colors">
                                        {blog.title}
                                    </h3>
                                    <div className="mt-auto pt-4 flex items-center gap-2 text-navy font-bold uppercase tracking-wider text-sm group-hover:text-gold transition-colors">
                                        Read Article <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <h3 className="text-2xl font-bold text-navy-dark mb-4">No posts found for {activeCategory}.</h3>
                            <p className="text-gray-600">Please select another category to view our content.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
