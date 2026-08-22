import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PricingGuide from '@/components/PricingGuide';
import ValueCalculator from '@/components/ValueCalculator';
import FAQAccordion from '@/components/FAQAccordion';
import FAQSchema from '@/components/FAQSchema';

export const metadata: Metadata = {
    title: 'Exterior Cleaning Pricing in Northeast Wisconsin | Valley Property Services',
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
            <PricingGuide />
            <section className="bg-white border-t border-gray-100 py-12">
                <FAQAccordion faqs={pricingFaqs} />
                <FAQSchema faqs={pricingFaqs} />
            </section>
        </main>
    );
}
