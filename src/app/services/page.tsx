import ServiceGrid from '@/components/ServiceGrid';
import Link from 'next/link';

import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: "All Exterior Cleaning Services | Valley Window Care and Exterior Cleaning",
    description: "View our comprehensive list of residential and commercial exterior cleaning, pressure washing, and permanent lighting services in Northeast Wisconsin."
};

export default function ServicesHubPage() {
    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <p className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Complete Service Network</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                        Our Exterior Services
                    </h1>
                    
                    {/* 10/10 AI GEO Answer Capsule */}
                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
                        <strong>Valley Window Care and Exterior Cleaning provides an elite, comprehensive suite of residential and commercial property maintenance solutions across Northeast Wisconsin. Engineered to combat the specific environmental challenges of the region—from aggressive organic growth to corrosive winter salt—our expert teams utilize industry-leading techniques to protect and enhance your exterior surfaces permanently.</strong>
                    </p>

                    <div className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto space-y-6 text-left mb-16">
                        <p>
                            Operating extensively throughout the Fox Valley, we have tailored our advanced exterior cleaning systems to meet the exact needs of local properties. Properties in <Link href="/service-areas/green-bay" className="text-navy font-bold hover:text-gold transition-colors">Green Bay</Link> and <Link href="/service-areas/appleton" className="text-navy font-bold hover:text-gold transition-colors">Appleton</Link> face unique, brutal year-round weather patterns. High Midwestern humidity fuels the rapid spread of green algae and black lichen on roofing and siding, while extreme freeze-thaw cycles and heavy winter road salts destroy unprotected concrete flatwork. We counteract these destructive forces using targeted, professional-grade techniques. By deploying tailored chemical soft washing and precision high-heat pressure washing, we eradicate root-level infestations and melt away deep-seated grime without the collateral damage associated with standard, amateur power washing.
                        </p>
                        
                        <p>
                            Our residential cleaning division is fiercely dedicated to maximizing your home's curb appeal and structural longevity. We understand that your home is your most significant asset. Beyond our core low-pressure house washing and zero-damage soft wash roof cleaning, we specialize in high-impact restorative services like Paver Patio Restorations. By meticulously deep-cleaning heavily soiled brickwork, re-leveling the foundational polymeric sand joints, and applying premium structural sealants, we lock your paver matrix beautifully in place, defending it against the harshest elements.
                        </p>
                        
                        <div className="bg-slate-50 border-l-4 border-gold p-6 my-6 rounded-r-xl shadow-sm border-t border-r border-b border-slate-100 not-prose">
                            <p className="text-gray-700 leading-relaxed font-medium text-base md:text-lg mb-0">
                                <strong>Looking for dedicated paver restoration, leveling, and polymeric sanding?</strong> We have launched a specialized division just for hardscapes! Visit our sister company, <a href="https://greenbaypavercleaning.com" target="_blank" rel="noopener" className="text-blue-600 font-bold hover:text-gold underline transition-colors">Green Bay Paver Cleaning</a>, for premium sealing and restoration across the Fox Valley.
                            </p>
                        </div>

                        <p>
                            For our commercial partners, we deploy heavy-duty recovery units and high-volume hot water rigs capable of managing massive, high-ticket property maintenance projects. From sprawling multi-unit HOA complexes and multi-level parking garages to high-traffic restaurant drive-thru lanes, we maintain pristine commercial environments with absolute zero disruption to your daily operations. Furthermore, we are certified experts in chemical Rust Removal, safely and rapidly eradicating the stubborn, bright orange battery acid, fertilizer, and irrigation stains that standard commercial pressure washing cannot eliminate, instantly restoring your brand's uncompromising professional image.
                        </p>
                    </div>
                </div>

                {/* The ServiceGrid automatically imports the 56+ full list of services when gridItems is undefined */}
                     <ServiceGrid />
                     <ReviewSlider />
            </div>
        </section>
    );
}
