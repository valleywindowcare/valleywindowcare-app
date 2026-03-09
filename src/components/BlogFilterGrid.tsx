'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { BlogPost, BLOG_CATEGORIES, BlogCategory } from '@/data/blogData';

type BlogFilterGridProps = {
    initialPosts: BlogPost[];
};

export default function BlogFilterGrid({ initialPosts }: BlogFilterGridProps) {
    const [activeCategory, setActiveCategory] = useState<BlogCategory | 'All Posts'>('All Posts');
    const [isOpen, setIsOpen] = useState(false);

    const filteredPosts = activeCategory === 'All Posts'
        ? initialPosts
        : initialPosts.filter(post => post.category === activeCategory);

    return (
        <div className="w-full">
            {/* Custom Category Filter Dropdown */}
            <div className="mb-12 w-full max-w-lg mx-auto relative group z-30">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full bg-white border-2 border-slate-200 text-navy font-bold text-lg py-4 px-6 rounded-2xl shadow-sm hover:border-gold hover:shadow-md focus:outline-none focus:ring-4 focus:ring-gold/20 focus:border-gold transition-all duration-300 flex items-center justify-between"
                >
                    <span className="truncate">{activeCategory === 'All Posts' ? 'Explore All Articles' : activeCategory}</span>
                    <ChevronDown className={`w-6 h-6 stroke-[2.5] text-navy group-hover:text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <ul className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 max-h-96 overflow-y-auto">
                        <li 
                            onClick={() => {
                                setActiveCategory('All Posts');
                                setIsOpen(false);
                            }}
                            className={`px-6 py-4 cursor-pointer font-bold transition-colors ${activeCategory === 'All Posts' ? 'bg-navy text-white hover:bg-navy/90' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'}`}
                        >
                            Explore All Articles
                        </li>
                        {BLOG_CATEGORIES.map((category) => (
                            <li 
                                key={category}
                                onClick={() => {
                                    setActiveCategory(category);
                                    setIsOpen(false);
                                }}
                                className={`px-6 py-4 cursor-pointer font-bold transition-colors border-t border-slate-50 ${activeCategory === category ? 'bg-navy text-white hover:bg-navy/90' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'}`}
                            >
                                {category}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Empty State / Grid Wrapper */}
            {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[400px]">
                    <div className="bg-slate-50 p-6 rounded-full border border-slate-100 mb-6">
                        <FileText className="w-12 h-12 text-slate-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-3">More articles coming soon!</h3>
                    <p className="text-slate-500 max-w-md mx-auto">
                        We are currently writing new, high-converting content for the <strong className="text-gold">{activeCategory}</strong> category. Check back shortly.
                    </p>
                    <button 
                        onClick={() => setActiveCategory('All Posts')}
                        className="mt-8 text-navy font-bold hover:text-gold transition-colors underline underline-offset-4"
                    >
                        View All Active Posts
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article 
                            key={post.id} 
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group transform hover:-translate-y-1 relative"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-56 bg-slate-200 overflow-hidden">
                                <Image
                                    src={post.imagePath}
                                    alt={`${post.title} - Valley Window Care`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                {/* Category Badge Floating */}
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-navy font-black text-xs px-3 py-1.5 rounded-full shadow-lg border border-white/40 uppercase tracking-widest z-10">
                                    {post.category}
                                </div>
                            </div>
                            
                            {/* Content Container */}
                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                <div className="flex items-center text-sm text-gold font-bold mb-3 tracking-wider uppercase">
                                    <span>{post.date}</span>
                                </div>
                                
                                <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3 line-clamp-2 leading-tight group-hover:text-gold transition-colors duration-200">
                                    {post.title}
                                </h3>
                                
                                <p className="text-slate-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                
                                <Link 
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center text-navy font-bold group-hover:text-gold transition-colors mt-auto"
                                >
                                    <span className="border-b-2 border-transparent group-hover:border-gold pb-0.5 transition-all">Read Article</span>
                                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    );
}
