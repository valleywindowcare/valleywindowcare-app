import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const servicesDir = path.join(__dirname, 'src', 'app', 'services');

const requiredShortSlugs = [
    'window-cleaning',
    'soft-wash',
    'commercial-awning-cleaning',
    'residential-rust-removal',
    'driveway-cleaning',
    'solar-panel-cleaning'
];

function generatePageTemplate(slug) {
    const title = slug.replace(/-/g, ' ');
    return `import Link from 'next/link';
import SEOAuthorityEngine from '@/components/SEOAuthorityEngine';

export default function GeneratedPage() {
    return (
        <>
            <SEOAuthorityEngine 
                pageType="Service"
                geoTarget="Northeast Wisconsin"
                primaryKeyword="${title}"
            />
            <section className="py-24 bg-slate-50 min-h-screen">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight capitalize">
                            ${title}
                        </h1>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <strong>Valley Window Care and Exterior Cleaning delivers premium maintenance and restoration solutions across Northeast Wisconsin. We utilize advanced techniques to safely eradicate organic growth and environmental staining, permanently revitalizing your property.</strong>
                        </p>
                        <div className="mt-8 max-w-3xl mx-auto text-left text-gray-600 text-lg">
                            <p>
                                Our dedicated fleet provides top-tier services to our primary service areas, including <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold transition-colors font-semibold">Green Bay</Link> and <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold transition-colors font-semibold">Appleton</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
`;
}

if (!fs.existsSync(servicesDir)) fs.mkdirSync(servicesDir, { recursive: true });

let restoredCount = 0;
for (const slug of requiredShortSlugs) {
    const dir = path.join(servicesDir, slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const filePath = path.join(dir, 'page.tsx');
    fs.writeFileSync(filePath, generatePageTemplate(slug));
    console.log(`Restored exact legacy service: ${slug}`);
    restoredCount++;
}

console.log(`Successfully restored ${restoredCount} core service mappings.`);
