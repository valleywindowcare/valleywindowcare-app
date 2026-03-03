import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar } from 'lucide-react';
import Hero from '@/components/Hero';
import BlogFeed from '@/components/BlogFeed';

const POSTS_DIR = path.join(process.cwd(), 'src/data/posts');

export default async function BlogIndex() {
    let blogs: any[] = [];
    try {
        if (fs.existsSync(POSTS_DIR)) {
            const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.md'));
            for (const file of files) {
                const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
                const matter = require('gray-matter');
                const { data } = matter(content);
                blogs.push({
                    slug: file.replace('.md', ''),
                    ...data
                });
            }
        }
    } catch (e) {
        console.error("Could not load blog content:", e);
    }

    // Sort by date descending
    blogs.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Basic SEO data for the index
    const pageSeo = {
        h1: "Valley Window Care and Exterior Cleaning Home Maintenance Blog",
        meta_title: "Home Maintenance & Exterior Cleaning Blog | Valley Window Care and Exterior Cleaning",
        meta_description: "Expert tips and tricks for maintaining your home's exterior in Green Bay and Appleton, WI."
    };

    return (
        <>
            <Hero h1={"Valley Window Care and Exterior Cleaning Blog"} description={pageSeo.meta_description} />
            <BlogFeed blogs={blogs} />
        </>
    );
}
