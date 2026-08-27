import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import HeroForm from "@/components/HeroForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "Contact Us | Valley Property Services",
    description: "Get a free quote for pressure washing, window cleaning, and soft wash siding cleaning in Northeast Wisconsin. Contact our De Pere storefront team today.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20 text-navy">
            <Hero h1="Contact Our Team" description="We're ready to provide crystal clear service for your property. Fill out the form or visit our storefront for a custom quote." />

            {/* Quick Contact Info Cards */}
            <div className="container mx-auto max-w-6xl px-4 mt-16 relative z-20">
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                            <Phone size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-2">Call or Text</h3>
                        <a href="tel:920-609-7085" className="text-gray-600 hover:text-gold transition-colors font-medium text-lg" rel="nofollow">(920) 609-7085</a>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                            <Mail size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-2">Email Us</h3>
                        <a href="mailto:info@valleyexteriorpros.com" className="text-gray-600 hover:text-gold transition-colors font-medium break-all" rel="nofollow">info@valleyexteriorpros.com</a>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
                        <p className="text-gray-600 font-medium">462 S Good Hope Rd<br />De Pere, WI 54115</p>
                    </div>
                </div>

                {/* Primary Content Grid: Form vs Map/NAP */}
                <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
                    {/* Left Column: Quote Form */}
                    <div className="lg:col-span-7 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        <HeroForm idPrefix="contact-page" />
                    </div>

                    {/* Right Column: Map Embed and NAP Details */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Storefront & NAP Info Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                            <h2 className="text-2xl font-bold text-navy">Storefront Headquarters</h2>
                            <div className="space-y-4 text-gray-600 font-medium">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-gold shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-navy">Business Name &amp; Address</p>
                                        <p>Valley Property Services</p>
                                        <p>462 S Good Hope Rd</p>
                                        <p>De Pere, WI 54115</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Phone className="text-gold shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-navy">Phone</p>
                                        <a href="tel:920-609-7085" className="hover:text-gold transition-colors">(920) 609-7085</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Mail className="text-gold shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-navy">Email</p>
                                        <a href="mailto:info@valleyexteriorpros.com" className="hover:text-gold transition-colors">info@valleyexteriorpros.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="text-gold shrink-0 mt-1" size={20} />
                                    <div>
                                        <p className="font-semibold text-navy">Hours of Operation</p>
                                        <p>Monday – Sunday: 8:00 AM – 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Verified Location Google Map Embed */}
                        <div className="w-full h-[320px] sm:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-md border border-gray-200 relative bg-slate-100">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.0151754639163!2d-88.06446349282405!3d44.433056645497985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802f7860e31a465%3A0xc422a0d3f9df71ea!2sValley%20Property%20Services!5e0!3m2!1sen!2sus!4v1787846763291!5m2!1sen!2sus" 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0 }} 
                                allowFullScreen={true} 
                                loading="lazy" 
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Valley Property Services Storefront Google Map Location"
                            />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-12 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-6">Service Overview & Expectations</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-navy mb-2">Estimate Response Timeline</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We respect your time. All contact form submissions and online estimate requests are reviewed and responded to by a local team member <strong>within 24 hours</strong>. If you need immediate assistance or are experiencing an urgent cleanup request, please call or text us at <strong>(920) 609-7085</strong>.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-navy mb-2">Licensing & General Liability Insurance</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Valley Property Services is fully registered, licensed, and bonded in the State of Wisconsin. We maintain a comprehensive <strong>$2,000,000 general liability insurance policy</strong> and full workers' compensation coverage. Your home and commercial properties are in completely safe, qualified hands.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-navy mb-2">Northeast Wisconsin Service Areas</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Our service trucks travel daily throughout Brown, Outagamie, Winnebago, and Door counties. We regularly service properties in Green Bay, Appleton, De Pere, Howard, Suamico, Bellevue, Hobart, Neenah, Menasha, Oshkosh, Sturgeon Bay, Egg Harbor, Fish Creek, and Sister Bay.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-gray-200/50">
                        <h2 className="text-2xl font-bold text-navy mb-6">Customer Preparation Checklist</h2>
                        <p className="text-gray-600 mb-6">
                            To ensure a smooth, efficient, and completely safe exterior restoration, we kindly ask that you review these preparation guidelines before our team arrives:
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="flex items-center justify-center bg-gold text-navy font-bold rounded-full w-6 h-6 text-sm shrink-0 mt-0.5">1</span>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <strong>Secure All Openings:</strong> Please double-check and ensure all windows and exterior doors are completely closed and locked to prevent water entry.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex items-center justify-center bg-gold text-navy font-bold rounded-full w-6 h-6 text-sm shrink-0 mt-0.5">2</span>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <strong>Clear Service Areas:</strong> Move vehicles from driveways, pull patio furniture away from walls, and relocate children's toys, potted plants, and pet bowls.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex items-center justify-center bg-gold text-navy font-bold rounded-full w-6 h-6 text-sm shrink-0 mt-0.5">3</span>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <strong>Water & Gate Access:</strong> Ensure all outdoor spigots have working water supply and unlock side gates or back perimeter fences so our technicians can safely access your property.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="flex items-center justify-center bg-gold text-navy font-bold rounded-full w-6 h-6 text-sm shrink-0 mt-0.5">4</span>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <strong>Safety First:</strong> Keep all pets and family members safely indoors during the duration of our cleaning service to protect against active spray.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ReviewSlider />
        </main>
    );
}
