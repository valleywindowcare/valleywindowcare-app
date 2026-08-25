import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PricingGuide from '@/components/PricingGuide';
import ValueCalculator from '@/components/ValueCalculator';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
    title: 'Exterior Cleaning Pricing in Northeast Wisconsin',
    description: 'Explore baseline pricing estimates for professional roof washing, window cleaning, and exterior maintenance across Green Bay, Appleton, and Door County.',
};

const pricingFaqs = [
  {
    question: "How do you calculate the cost of exterior cleaning services?",
    answer: "For standard residential services, we use clear flat-rate pricing based on your property's dimensions and height. Commercial projects are typically priced by the square foot or estimated based on specific logistics and compliance requirements."
  },
  {
    question: "Do you offer discounts for bundling services?",
    answer: "Yes, absolutely! Bundling multiple services—such as a roof clean combined with house washing and window cleaning—is the best way to maximize value and save on mobilization fees."
  },
  {
    question: "Are your pricing estimates completely free?",
    answer: "Yes, all of our estimates are 100% free and carry no obligation. We can often provide rapid quotes using satellite imagery and home size records, or schedule an on-site visit for complex projects."
  },
  {
    question: "Is there a minimum service price?",
    answer: "Our minimum project price for single-visit services is $350. This helps cover the mobilization of our professional hot-water trailer rigs, eco-friendly cleaners, and safety gear."
  }
];

export default function PricingPage() {
    return (
        <main className="w-full bg-slate-50">
            <Hero
                h1="Instant Northeast Wisconsin Pricing"
                description="We believe in upfront, honest pricing. These baseline estimates help you understand the starting costs for our professional services before scheduling your free, exact quote."
                showScrollArrow={true}
            />
            <div id="calculator-hub">
                <ValueCalculator />
            </div>

            {/* Package Comparison Table */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-4">Service Package Comparison</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Choose the level of cleaning that fits your home's needs. All packages utilize our low-pressure soft wash process.
                        </p>
                    </div>

                    <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm">
                        <table className="w-full text-left border-collapse bg-white">
                            <thead>
                                <tr className="bg-navy text-white text-sm uppercase tracking-wider">
                                    <th className="p-6 font-bold">Package Tier</th>
                                    <th className="p-6 font-bold">Sq Footage Range</th>
                                    <th className="p-6 font-bold">Features Included</th>
                                    <th className="p-6 font-bold text-right">Est. Starting Price</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-gray-700">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-navy">
                                        Basic Soft Wash
                                        <span className="block text-xs font-normal text-gray-500 mt-1">Essential siding treatment</span>
                                    </td>
                                    <td className="p-6 text-sm">Up to 2,000 sq ft</td>
                                    <td className="p-6 text-sm">
                                        <ul className="space-y-1.5 list-disc list-inside">
                                            <li>House Soft Wash (Siding Only)</li>
                                            <li>Mildew, Mold & Algae Treatment</li>
                                            <li>Landscape & Plant Protection Protocol</li>
                                        </ul>
                                    </td>
                                    <td className="p-6 font-extrabold text-navy text-right text-lg">$350 </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors bg-slate-50/30">
                                    <td className="p-6 font-bold text-navy">
                                        Premium Exterior Clean
                                        <span className="block text-xs font-normal text-gold mt-1 font-semibold">★ Most Popular</span>
                                    </td>
                                    <td className="p-6 text-sm">Up to 3,000 sq ft</td>
                                    <td className="p-6 text-sm">
                                        <ul className="space-y-1.5 list-disc list-inside">
                                            <li>House Soft Wash (All Siding)</li>
                                            <li>Gutter Cleaning & Downspout Flushing</li>
                                            <li>Streak-Free Exterior Window Cleaning</li>
                                            <li>Premium Soap & Wax Upgrade</li>
                                        </ul>
                                    </td>
                                    <td className="p-6 font-extrabold text-navy text-right text-lg">$550 </td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-navy">
                                        Ultimate Curb Appeal Package
                                        <span className="block text-xs font-normal text-gray-500 mt-1">All-inclusive restoration</span>
                                    </td>
                                    <td className="p-6 text-sm">Up to 4,000 sq ft</td>
                                    <td className="p-6 text-sm">
                                        <ul className="space-y-1.5 list-disc list-inside">
                                            <li>House Soft Wash (All Siding)</li>
                                            <li>Full Roof Soft Wash (Moss & Lichen Kill)</li>
                                            <li>Gutter Cleaning & Downspout Flushing</li>
                                            <li>Streak-Free Exterior Window Cleaning</li>
                                            <li>Concrete Driveway & Walkway Power Wash</li>
                                            <li>Salt Neutralization & Post-Treatment</li>
                                        </ul>
                                    </td>
                                    <td className="p-6 font-extrabold text-navy text-right text-lg">$950 </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Per-Service Breakdown Table */}
            <section className="py-16 bg-slate-50 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-navy mb-4">Per-Service Pricing Breakdown</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Detailed starting estimates and typical job specifications for each of our core services.
                        </p>
                    </div>

                    <div className="overflow-x-auto border border-gray-200 rounded-2xl shadow-sm bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-navy text-white text-sm uppercase tracking-wider">
                                    <th className="p-6 font-bold">Service Name</th>
                                    <th className="p-6 font-bold">Property Size / Range</th>
                                    <th className="p-6 font-bold">Estimated Price Range</th>
                                    <th className="p-6 font-bold">Key Inclusions</th>
                                    <th className="p-6 font-bold">Typical Time on Site</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 text-gray-700">
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-navy">Roof Cleaning</td>
                                    <td className="p-6 text-sm">1,500 - 3,000 sq ft (Roof area)</td>
                                    <td className="p-6 text-sm font-semibold">$500 - $950 </td>
                                    <td className="p-6 text-sm">ARMA-compliant soft wash, moss/lichen kill, gutter rinse</td>
                                    <td className="p-6 text-sm">2.5 - 4 hours</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-navy">House Washing</td>
                                    <td className="p-6 text-sm">1,500 - 3,000 sq ft (Siding area)</td>
                                    <td className="p-6 text-sm font-semibold">$350 - $600 </td>
                                    <td className="p-6 text-sm">Low-pressure soft wash siding, gutter exterior brightening</td>
                                    <td className="p-6 text-sm">1.5 - 3 hours</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-navy">Window Cleaning</td>
                                    <td className="p-6 text-sm">15 - 30 Windows (Interior/Exterior)</td>
                                    <td className="p-6 text-sm font-semibold">$150 - $300 </td>
                                    <td className="p-6 text-sm">Streak-free glass wash, screen wipe, sill cleaning</td>
                                    <td className="p-6 text-sm">2 - 3.5 hours</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-navy">Gutter Cleaning</td>
                                    <td className="p-6 text-sm">100 - 250 linear ft</td>
                                    <td className="p-6 text-sm font-semibold">$150 - $350 </td>
                                    <td className="p-6 text-sm">Debris extraction, downspout flushing & flow check</td>
                                    <td className="p-6 text-sm">1 - 2 hours</td>
                                </tr>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-navy">Concrete Cleaning</td>
                                    <td className="p-6 text-sm">400 - 1,200 sq ft (Driveway/Walkways)</td>
                                    <td className="p-6 text-sm font-semibold">$250 - $500 </td>
                                    <td className="p-6 text-sm">Hot-water pressure wash, post-treatment brightening</td>
                                    <td className="p-6 text-sm">1.5 - 3 hours</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <PricingGuide />
            <section className="bg-white border-t border-gray-100 py-12">
                <FAQAccordion faqs={pricingFaqs} />
                <FAQSchema faqs={pricingFaqs} />
            </section>
        </main>
    );
}
