import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | Valley Window Care and Exterior Cleaning",
    description: "Get a free quote for pressure washing, window cleaning, and exterior maintenance in Northeast Wisconsin.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 pt-24 pb-20">
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
                        <p className="text-gray-600 font-medium">4551 Trellis Drive E-2<br />De Pere, WI 54115</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
