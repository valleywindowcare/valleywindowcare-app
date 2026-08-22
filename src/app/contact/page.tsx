import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import { Phone, Mail, MapPin } from "lucide-react";

import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "Contact Us | Valley Property Services",
    description: "Get a free quote for pressure washing, window cleaning, and exterior maintenance in Northeast Wisconsin.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            <Hero h1="Contact Our Team" description="We're ready to provide crystal clear service for your property. Fill out the form to get started." />

            <div className="container mx-auto max-w-6xl px-4 mt-20 relative z-20">
                <div className="grid md:grid-cols-3 gap-8">
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
                        <a href="mailto:info@valleywindowcare.com" className="text-gray-600 hover:text-gold transition-colors font-medium break-all" rel="nofollow">info@valleywindowcare.com</a>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm text-center border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="bg-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-gold">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
                        <p className="text-gray-600 font-medium">462 S Good Hope Rd<br />De Pere, WI 54115</p>
                    </div>
                </div>

                <div className="w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg mt-8 border border-gray-200/20">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d900.5056045384954!2d-88.06395880642742!3d44.43266399605391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802f7860e31a465%3A0xc422a0d3f9df71ea!2sValley%20Property%20Services!5e0!3m2!1sen!2sus!4v1787425054243!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Google Maps Location for Valley Property Services"
                  />
                </div>
            </div>
            <ReviewSlider />
        </main>
    );
}
