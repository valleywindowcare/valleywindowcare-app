import Link from 'next/link';

import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: "blog | Valley Window Care",
    description: "Professional exterior cleaning services in Northeast Wisconsin."
};

export default function GeneratedPage() {
    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight capitalize">
                        blog
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <strong>Valley Window Care and Exterior Cleaning delivers premium maintenance and restoration solutions across Northeast Wisconsin. We utilize advanced soft washing and precision pressure washing techniques to safely eradicate organic growth and environmental staining, permanently revitalizing your property.</strong>
                    </p>
                    <div className="mt-8 max-w-3xl mx-auto text-left text-gray-600 text-lg">
                        <p>
                            Our dedicated fleet provides top-tier services to our primary service areas, including <Link href="/service-areas/green-bay" className="text-blue-600 hover:text-gold transition-colors font-semibold">Green Bay</Link> and <Link href="/service-areas/appleton" className="text-blue-600 hover:text-gold transition-colors font-semibold">Appleton</Link>. For industry standards and exterior cleaning best practices, we strictly adhere to the guidelines set by the <a href="https://www.pwax.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-gold transition-colors font-semibold">PWNA</a>.
                        </p>
                    </div>
                </div>
    <ReviewSlider />
</div>
        </section>
    );
}
