import Link from 'next/link';
import { MapPin } from 'lucide-react';

import ReviewSlider from '@/components/ReviewSlider';

export const CITIES = [
    "Green Bay", "Appleton", "De Pere", "Neenah", "Menasha",
    "Kaukauna", "Oshkosh", "Howard", "Suamico", "Allouez",
    "Ashwaubenon", "Bellevue", "Door County", "Fish Creek",
    "Sturgeon Bay", "Shawano", "Manitowoc", "Ledgeview",
    "Hobart", "Egg Harbor", "Sister Bay", "Greenville",
    "Sherwood", "Combined Locks"
];

const generateSlug = (city: string) => city.toLowerCase().replace(/ /g, '-');

export const metadata = {
    title: "Service Areas | Valley Window Care and Exterior Cleaning",
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
                        <strong>Valley Window Care and Exterior Cleaning is proud to deploy specialized local exterior-cleaning fleets across every major city in Northeast Wisconsin. Whether you require meticulous residential window cleaning or large-scale commercial pressure washing, our technicians mobilize rapidly to provide unparalleled property restoration throughout our entire service network.</strong>
                    </p>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Select your city below to see specialized services.
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
    <ReviewSlider />
</div>
        </section>
    );
}
