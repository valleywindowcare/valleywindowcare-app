import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

import ReviewSlider from '@/components/ReviewSlider';

export const CITIES = [
    "Green Bay", "Appleton", "De Pere", "Door County", "Neenah",
    "Oshkosh", "Manitowoc", "Algoma", "Kewaunee", "Kimberly",
    "Little Chute", "Two Rivers", "Wrightstown", "Shawano"
];

const SURROUNDING_COMMUNITIES = [
    { name: "Howard", hub: "/service-areas/howard", region: "Greater Green Bay" },
    { name: "Suamico", hub: "/service-areas/suamico", region: "Greater Green Bay" },
    { name: "Ashwaubenon", hub: "/service-areas/ashwaubenon", region: "Greater Green Bay" },
    { name: "Allouez", hub: "/service-areas/allouez", region: "Greater Green Bay" },
    { name: "Bellevue", hub: "/service-areas/bellevue", region: "Greater Green Bay" },
    { name: "Hobart", hub: "/service-areas/hobart", region: "Greater Green Bay" },
    { name: "Ledgeview", hub: "/service-areas/ledgeview", region: "Greater Green Bay" },
    { name: "Menasha", hub: "/service-areas/menasha", region: "Fox Cities" },
    { name: "Kaukauna", hub: "/service-areas/kaukauna", region: "Fox Cities" },
    { name: "Greenville", hub: "/service-areas/greenville", region: "Fox Cities" },
    { name: "Combined Locks", hub: "/service-areas/combined-locks", region: "Fox Cities" },
    { name: "Sherwood", hub: "/service-areas/sherwood", region: "Fox Cities" },
    { name: "Sturgeon Bay", hub: "/service-areas/sturgeon-bay", region: "Door County" },
    { name: "Fish Creek", hub: "/service-areas/fish-creek", region: "Door County" },
    { name: "Egg Harbor", hub: "/service-areas/egg-harbor", region: "Door County" },
    { name: "Sister Bay", hub: "/service-areas/sister-bay", region: "Door County" }
];

const generateSlug = (city: string) => city.toLowerCase().replace(/ /g, '-');

export const metadata = {
    title: "Service Areas",
    description: "View our full coverage area across Northeast Wisconsin including Green Bay, Appleton, and Oshkosh."
};

export default function ServiceAreasPage() {
    return (
        <section className="py-24 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <p className="text-gold font-bold tracking-widest text-sm mb-4 uppercase">Regional Network</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-6 tracking-tight">
                        Areas We Serve
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <strong>Valley Property Services is proud to deploy specialized local exterior-cleaning fleets across every major city in Northeast Wisconsin. Whether you require meticulous residential window cleaning or large-scale commercial pressure washing, our technicians mobilize rapidly to provide unparalleled property restoration throughout our entire service network.</strong>
                    </p>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Select your primary service hub below:
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {CITIES.map((city) => (
                        <Link
                            key={city}
                            href={`/service-areas/${generateSlug(city)}`}
                            className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 flex items-center gap-4 group hover:-translate-y-1 border border-gray-100"
                        >
                            <div className="bg-slate-50 p-3 rounded-full text-gray-400 group-hover:text-gold group-hover:bg-gold/10 transition-colors">
                                <MapPin size={24} />
                            </div>
                            <span className="text-lg font-bold text-navy group-hover:text-gold transition-colors">{city}</span>
                        </Link>
                    ))}
                </div>

                {/* Additional Surrounding Communities */}
                <div className="mt-16 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-bold text-navy mb-4 text-center">Surrounding Communities & Neighborhoods</h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
                        We also provide full mobile dispatch and exterior cleaning services to all surrounding towns and suburbs across Northeast Wisconsin:
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {SURROUNDING_COMMUNITIES.map((comm) => (
                            <Link
                                key={comm.name}
                                href={comm.hub}
                                className="px-4 py-2 bg-slate-50 hover:bg-gold/10 text-navy hover:text-gold font-medium rounded-full text-sm border border-gray-200 transition-colors"
                            >
                                {comm.name} ({comm.region})
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Our Service Hub & Headquarters Section */}
                <div className="bg-white py-16 border-t border-gray-200 mt-20 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-5 space-y-6 text-left">
                            <h2 className="text-3xl font-bold text-navy">Our Service Hub & Headquarters</h2>
                            <p className="text-gray-600 leading-relaxed">
                                While we dispatch our specialized exterior cleaning rigs daily throughout all service areas in Northeast Wisconsin, our physical storefront and administrative headquarters are located in <Link href="/service-areas/de-pere" className="text-navy font-bold hover:text-gold underline decoration-gold/50 underline-offset-4">De Pere, WI</Link>.
                            </p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 space-y-3 text-gray-600 font-medium">
                                <p className="flex items-start gap-2">
                                    <MapPin className="text-gold shrink-0 mt-1" size={18} />
                                    <span>Valley Property Services<br />462 S Good Hope Rd<br />De Pere, WI 54115</span>
                                </p>
                                <p className="flex items-center gap-2">
                                    <Phone className="text-gold shrink-0" size={18} />
                                    <a href="tel:920-609-7085" className="hover:text-gold transition-colors">(920) 609-7085</a>
                                </p>
                                <p className="flex items-start gap-2">
                                    <Clock className="text-gold shrink-0 mt-1" size={18} />
                                    <span>Monday – Sunday: 8:00 AM – 8:00 PM</span>
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-7">
                            <div className="w-full h-[320px] sm:h-[350px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-slate-50 relative">
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
                </div>

                <ReviewSlider />
            </div>
        </section>
    );
}
