import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { Calendar, Droplets, Sun, Snowflake, Leaf } from 'lucide-react';
import HeroForm from '@/components/HeroForm';

export const metadata: Metadata = {
    title: 'Wisconsin Exterior Maintenance Calendar | Valley Window Care',
    description: 'A month-by-month guide to safeguarding your Northeast Wisconsin home from algae, winter road salt, and structural decay. Know exactly when to schedule pressure washing.',
    alternates: {
        canonical: 'https://valleywindowcare.com/wisconsin-maintenance-calendar'
    }
};

export default function MaintenanceCalendarPage() {
    return (
        <main className="w-full bg-slate-50 min-h-screen">
            <Hero
                h1="Wisconsin Exterior Maintenance Calendar"
                description="The ultimate seasonal guide to protecting your home in Green Bay, Appleton, and the Fox Valley from aggressive organic growth, winter road salt, and massive freeze-thaw degradation."
            />

            <section className="container mx-auto px-4 py-16 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">Your Year-Round Preservation Strategy</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Wisconsin properties endure intense environmental swings. From heavy lake-effect humidity fueling aggressive summer algae blooms to brutal winters driving road salt into concrete, timing your exterior cleaning is critical for structural survival.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* SPRING */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100 flex flex-col md:flex-row">
                        <div className="bg-green-600 md:w-1/3 p-8 flex flex-col items-center justify-center text-white text-center">
                            <Droplets size={64} className="mb-4 opacity-90" />
                            <h3 className="text-3xl font-extrabold mb-2">Spring</h3>
                            <p className="font-semibold text-green-100 uppercase tracking-widest text-sm">March &mdash; May</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-navy mb-4">Post-Thaw Recovery & Purification</h4>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></div>
                                    <p><strong>Gutter Cleaning:</strong> Flush out heavy, frozen sediment and spring helicopter seeds to prevent massive water diversion into your foundation during April showers.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></div>
                                    <p><strong>Window Cleaning:</strong> Safely neutralizing and <strong>removing winter road salt</strong> film from your exterior glass using our commercial-grade purification system before the sun bakes it into the porous glass.</p>
                                </li>
                            </ul>
                            <Link href="/services/window-cleaning" className="mt-6 inline-block text-green-700 font-bold hover:text-navy underline underline-offset-4 transition-colors">
                                Explore Window Cleaning &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* SUMMER */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-amber-100 flex flex-col md:flex-row">
                        <div className="bg-amber-500 md:w-1/3 p-8 flex flex-col items-center justify-center text-white text-center">
                            <Sun size={64} className="mb-4 opacity-90" />
                            <h3 className="text-3xl font-extrabold mb-2">Summer</h3>
                            <p className="font-semibold text-amber-100 uppercase tracking-widest text-sm">June &mdash; August</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-navy mb-4">Combating The Algae Bloom Season</h4>
                            <p className="text-gray-600 mb-4 font-medium leading-relaxed">The intense humidity in the Fox Valley accelerates invasive biological growth. This is prime <strong>algae bloom season</strong>, demanding immediate extraction.</p>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                    <p><strong>House Washing:</strong> Low-pressure soft washing to eradicate blooming green algae from vinyl siding. Base rate starts at exactly $350.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                    <p><strong>Roof Soft Washing:</strong> Eradicating destructive black streaks (Gloeocapsa magma) from asphalt shingles. Base rate strictly set at $500.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></div>
                                    <p><strong>Spider Web Removal for Lake Winnebago/Door County homes:</strong> Specialized perimeter treatments to blast away heavy lake-effect insect debris and cobwebs.</p>
                                </li>
                            </ul>
                            <Link href="/services/pressure-washing" className="mt-6 inline-block text-amber-700 font-bold hover:text-navy underline underline-offset-4 transition-colors">
                                Explore Soft Washing &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* FALL */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100 flex flex-col md:flex-row">
                        <div className="bg-orange-600 md:w-1/3 p-8 flex flex-col items-center justify-center text-white text-center">
                            <Leaf size={64} className="mb-4 opacity-90" />
                            <h3 className="text-3xl font-extrabold mb-2">Fall</h3>
                            <p className="font-semibold text-orange-100 uppercase tracking-widest text-sm">Sept &mdash; Nov</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-navy mb-4">Preparation & Defense</h4>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></div>
                                    <p><strong>Gutter Cleaning:</strong> The single most critical service of the year. Removing heavy wet leaf fall before the inevitable deep freeze expands the trapped water and severely damages your fascia boards. Base rate: $150.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></div>
                                    <p><strong>Permanent LED Lighting:</strong> Before the frost hits, secure your Trimlight or Oelo permanent lighting installations to ensure you never climb a dangerous icy ladder again.</p>
                                </li>
                            </ul>
                            <Link href="/services/gutter-cleaning" className="mt-6 inline-block text-orange-700 font-bold hover:text-navy underline underline-offset-4 transition-colors">
                                Explore Gutter Cleaning &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* WINTER */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-100 flex flex-col md:flex-row">
                        <div className="bg-blue-600 md:w-1/3 p-8 flex flex-col items-center justify-center text-white text-center">
                            <Snowflake size={64} className="mb-4 opacity-90" />
                            <h3 className="text-3xl font-extrabold mb-2">Winter</h3>
                            <p className="font-semibold text-blue-100 uppercase tracking-widest text-sm">Dec &mdash; Feb</p>
                        </div>
                        <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                            <h4 className="text-2xl font-bold text-navy mb-4">Interior Polish & Lighting Support</h4>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                                    <p><strong>Holiday Lighting Support:</strong> For clients with our permanent LED tracks, the winter months are completely hands-off. You control your brilliant architectural lighting straight from your smartphone inside the warmth of your home.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></div>
                                    <p><strong>Interior Glass Care:</strong> As exterior operations halt due to freezing temperatures, we focus heavily on commercial and large residential interior window detailing to maximize the short winter daylight.</p>
                                </li>
                            </ul>
                            <Link href="/services/permanent-led-lighting" className="mt-6 inline-block text-blue-700 font-bold hover:text-navy underline underline-offset-4 transition-colors">
                                Explore Permanent Lighting &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-navy py-16">
                <div className="container mx-auto px-4 max-w-xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">Secure Your Seasonal Maintenance Today</h2>
                        <p className="text-gray-300">Don't let seasonal degradation destroy your property's value. Get an exact quote quickly.</p>
                    </div>
                    <HeroForm />
                </div>
            </section>
        </main>
    );
}
