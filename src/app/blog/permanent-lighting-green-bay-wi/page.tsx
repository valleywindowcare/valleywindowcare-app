import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import dynamic from "next/dynamic";
const ReviewSlider = dynamic(() => import("@/components/ReviewSlider"));
import VanillaMap from "@/components/VanillaMap";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Permanent Lighting Green Bay Wi | Valley Window Care and Exterior Cleaning",
    description: "Valley Window Care and Exterior Cleaning provides premium exterior services including Permanent Lighting Green Bay Wi in Northeast Wisconsin.",
    alternates: {
        canonical: "https://valleywindowcare.com/blog/permanent-lighting-green-bay-wi"
    }
};

export default function PermanentLightingGreenBayWiPage() {
    const mdPath = path.join(process.cwd(), 'src/data/posts', 'permanent-lighting-green-bay-wi.md');
    
    let contentStr = "";
    if (fs.existsSync(mdPath)) {
        const fileContent = fs.readFileSync(mdPath, 'utf8');
        const { content } = matter(fileContent);
        contentStr = content;
    } else {
        contentStr = "The content for this exact LIVE URL mapped endpoint is currently being synced from the CDN.";
    }

    return (
        <>
            <div className="bg-navy text-gray-300 py-3 text-xs md:text-sm uppercase tracking-wider font-semibold border-b border-navy-dark relative z-20">
                <div className="container mx-auto px-4 max-w-7xl flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    <Link href="/" className="hover:text-gold transition-colors">Home</Link>\n                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />\n                    <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>
                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                    <span className="text-gold">Permanent Lighting Green Bay Wi</span>
                </div>
            </div>

            <Hero
                h1={<>Permanent Lighting Green Bay Wi</>}
                description="Providing premium exterior services across Northeast Wisconsin."
                bgImage="/site-gallery/authentic-IMG_3952.jpg"
            />

            <article className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-12 prose prose-slate lg:prose-xl max-w-none prose-headings:font-bold prose-headings:text-navy prose-a:text-navy prose-a:no-underline hover:prose-a:text-gold transition-colors prose-table:border prose-table:shadow-sm prose-th:bg-blue-50 prose-th:text-navy prose-th:p-4 prose-td:p-4 prose-td:border-t">
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                            a: ({node, ...props}) => (
                                <a {...props} className="font-bold text-navy hover:text-gold no-underline transition-colors border-b-2 border-navy/20 hover:border-gold" />
                            )
                        }}
                    >
                        {contentStr}
                    </ReactMarkdown>
                </div>
            </article>

            <ReviewSlider />
        </>
    );
}
