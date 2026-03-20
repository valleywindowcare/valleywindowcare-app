import { Metadata } from 'next';
import Hero from '@/components/Hero';
import PricingGuide from '@/components/PricingGuide';

export const metadata: Metadata = {
    title: 'Exterior Cleaning Pricing in Northeast Wisconsin | Valley Window Care',
    description: 'Explore baseline pricing estimates for professional roof washing, window cleaning, and exterior maintenance across Green Bay, Appleton, and Door County.',
    alternates: {
        canonical: 'https://valleywindowcare.com/pricing'
    }
};

export default function PricingPage() {
    return (
        <main className="w-full bg-slate-50">
            <Hero
                h1="Exterior Cleaning Pricing in Northeast Wisconsin"
                description="We believe in upfront, honest pricing. These baseline estimates help you understand the starting costs for our professional services before scheduling your free, exact quote."
            />
            <PricingGuide />
        </main>
    );
}
