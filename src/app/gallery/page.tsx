import fs from 'fs';
import path from 'path';
import Hero from '@/components/Hero';
import GalleryClient from '@/components/GalleryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Project Gallery | Valley Window Care and Exterior Cleaning",
    description: "Browse our portfolio of professional exterior cleaning, window washing, roof cleaning, and permanent lighting projects across Northeast Wisconsin."
};

// Map filenames to sensible categories and SEO alt text safely
function determineImageData(filename: string) {
    const fn = filename.toLowerCase();

    // Assign Strict Category Filters Supported Exactly By Front-End Matrix
    let category = 'House Washing';
    if (fn.includes('roof') || fn.includes('shingle')) category = 'Roof Cleaning';
    else if (fn.includes('window') || fn.includes('glass')) category = 'Window Cleaning';
    else if (fn.includes('gutter') || fn.includes('downspout')) category = 'Gutter Cleaning';
    else if (fn.includes('concrete') || fn.includes('driveway') || fn.includes('patio')) category = 'Concrete Cleaning';
    else if (fn.includes('commercial') || fn.includes('hood') || fn.includes('business')) category = 'Commercial';
    else if (fn.includes('holiday') || fn.includes('light') || fn.includes('christmas')) category = 'Holiday Lighting';

    // Determine City uniquely based on modulo hash length safely preventing generic placeholder overrides
    const cities = ["Green Bay", "Appleton", "Shawano", "De Pere", "Ledgeview", "Ashwaubenon", "Howard-Suamico", "Neenah", "Oshkosh", "Fox Valley"];
    const city = cities[filename.length % cities.length];

    // Determine semantic natural modifiers exclusively
    const modifiers = ["Professional", "Residential", "Expert", "Commercial", "Top-Rated"];
    const modifier = modifiers[fn.charCodeAt(0) % modifiers.length];

    const altText = `${modifier} ${category} Services in ${city}`;

    return { category, alt: altText };
}

export default function GalleryPage() {
    const GALLERY_DIR = path.join(process.cwd(), 'public', 'assets', 'gallery');

    let images = [];
    try {
        if (fs.existsSync(GALLERY_DIR)) {
            // Physically retrieve ALL images locally deposited into the local cache safely parsing extensions
            const files = fs.readdirSync(GALLERY_DIR).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp') || f.endsWith('.jpeg'));

            for (const file of files) {
                const data = determineImageData(file);
                images.push({
                    src: `/assets/gallery/${file}`,
                    category: data.category,
                    alt: data.alt
                });
            }
        }
    } catch (e) {
        console.error("Gallery Sync Error:", e);
    }

    // Maintain aesthetic sort mapping
    images.sort((a, b) => b.src.localeCompare(a.src));

    return (
        <main className="bg-slate-50 min-h-screen pb-20">
            <Hero
                h1="Our Work Gallery"
                description="Browse our portfolio of professional exterior cleaning and permanent lighting projects across Northeast Wisconsin."
            />

            {/* Dynamic FileSystem Driven Component */}
            <GalleryClient images={images} />
        </main>
    );
}
