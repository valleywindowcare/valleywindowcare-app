import fs from 'fs';
import path from 'path';

// 1. Read the guaranteed live routing array map
const extracted = JSON.parse(fs.readFileSync('extracted_urls.json', 'utf8'));

const APP_DIR = path.join(process.cwd(), 'src/app');
const SERVICES_DIR = path.join(APP_DIR, 'services');
const SERVICE_AREAS_DIR = path.join(APP_DIR, 'service-areas');

// Boilerplate template for Physical Server Components enforcing Zero-Slop logic natively
const getBoilerplate = (title, slug, isBlog, destFolderType) => {
    // Determine the deep back-link matrix based on destination folder logic
    let backlink = `<Link href="/" className="hover:text-gold transition-colors">Home</Link>`;
    if (destFolderType === 'services') {
        backlink += `\\n                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />\\n                    <Link href="/services" className="hover:text-gold transition-colors">Services</Link>`;
    } else if (destFolderType === 'service-areas') {
        backlink += `\\n                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />\\n                    <Link href="/service-areas" className="hover:text-gold transition-colors">Service Areas</Link>`;
    } else if (isBlog) {
        backlink += `\\n                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />\\n                    <Link href="/blog" className="hover:text-gold transition-colors">Blog</Link>`;
    }

    return `import { Metadata } from 'next';
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
    title: "${title} | Valley Window Care and Exterior Cleaning",
    description: "Valley Window Care and Exterior Cleaning provides premium exterior services including ${title} in Northeast Wisconsin.",
    alternates: {
        canonical: "https://valleywindowcare.com/${destFolderType ? `${destFolderType}/` : ''}${slug}"
    }
};

export default function ${title.replace(/[^a-zA-Z]/g, '')}Page() {
    ${isBlog ? `const mdPath = path.join(process.cwd(), 'src/data/posts', '${slug}.md');` : `const mdPath = path.join(process.cwd(), 'src/data/pages', '${slug}.md');`}
    
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
                    ${backlink}
                    <ChevronRight size={14} className="opacity-50 flex-shrink-0" />
                    <span className="text-gold">${title}</span>
                </div>
            </div>

            <Hero
                h1={<>${title}</>}
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
`;
}

let movedUrls = [];

extracted.forEach(url => {
    let cleanSlug = url.replace(/^\/|\/$/g, '');
    if (!cleanSlug) return;

    // skip system routing definitions
    if (cleanSlug.startsWith('#') || cleanSlug.startsWith('author/') || cleanSlug.includes('category-') || cleanSlug === 'contact' || cleanSlug === 'about-us' || cleanSlug === 'gallery' || cleanSlug === 'faq' || cleanSlug === 'reviews' || cleanSlug === 'privacy-policy' || cleanSlug.includes('?')) return;

    let filename = cleanSlug;
    let isBlog = false;
    if (cleanSlug.startsWith('blog/')) {
        isBlog = true;
        filename = cleanSlug.replace('blog/', '');
    }

    if (filename === 'blog' || filename === 'service-areas' || filename === 'services') return; // root indices

    // Clean up the old root folder physically deployed during Step 1
    const oldTargetFolder = !isBlog ? path.join(APP_DIR, filename) : path.join(APP_DIR, 'blog', filename);
    if (fs.existsSync(oldTargetFolder)) {
        fs.rmSync(oldTargetFolder, { recursive: true, force: true });
        console.log(`🧹 Deleted Root Catch: /${filename}`);
    }

    // Determine the rigid Directory constraint
    let destFolderType = "";
    let targetFolder = "";

    if (isBlog) {
        targetFolder = path.join(APP_DIR, 'blog', filename);
        destFolderType = "blog";
    } else {
        // Services vs Locations logic block based on standard location string modifiers (e.g. green-bay, appleton, wisconsin, wi)
        const isLocationTarget = filename.includes('green-bay') || filename.includes('appleton') || filename.includes('wisconsin') || filename.includes('-wi');

        if (isLocationTarget) {
            destFolderType = "service-areas";
            targetFolder = path.join(SERVICE_AREAS_DIR, filename);
        } else {
            destFolderType = "services";
            targetFolder = path.join(SERVICES_DIR, filename);
        }
    }

    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder, { recursive: true });
    }

    const title = filename.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const pageFile = path.join(targetFolder, 'page.tsx');

    fs.writeFileSync(pageFile, getBoilerplate(title, filename, isBlog, destFolderType), 'utf8');
    movedUrls.push({ slug: filename, path: destFolderType });
    console.log(`✅ Migrated Physical RSC: /${destFolderType}/${filename}`);
});

console.log(`\nSuccessfully migrated ${movedUrls.length} explicit physical Next.js Page Components.`);
