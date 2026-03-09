'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

type ImageProps = {
    src: string;
    title: string;
    category: string;
    alt: string;
};

export default function GalleryClient({ images }: { images: ImageProps[] }) {
    const [filter, setFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const categories = ['All', 'House Washing', 'Roof Cleaning', 'Window Cleaning', 'Gutter Cleaning', 'Concrete Cleaning', 'Commercial', 'Holiday Lighting'];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <section className="container mx-auto px-4 max-w-7xl pt-16 mt-8">
            {/* Filter Bar */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setFilter(category)}
                        className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${filter === category
                            ? 'bg-navy text-white shadow-md scale-105'
                            : 'bg-white text-gray-600 hover:bg-slate-100 hover:text-navy border border-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Masonry / Grid Container */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {filteredImages.map((image, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 bg-white"
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <div className="relative overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold tracking-widest text-sm uppercase px-4 py-2 border-2 border-white rounded-full">
                                    View Project
                                </span>
                            </div>
                        </div>
                        <div className="p-4 bg-white">
                            <p className="text-xs text-gold font-bold uppercase tracking-wider mb-1">{image.category}</p>
                            <p className="text-sm text-navy-dark font-medium leading-snug line-clamp-2">{image.title}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Empty State Fallback */}
            {filteredImages.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-xl text-gray-500 font-medium">No images found for this category yet.</p>
                </div>
            )}

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-6 right-6 text-white hover:text-gold transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
                        aria-label="Close lightbox"
                    >
                        <X size={32} />
                    </button>
                    <div className="relative max-w-5xl w-full max-h-[90vh]">
                        <img
                            src={selectedImage}
                            alt="Expanded project view"
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
