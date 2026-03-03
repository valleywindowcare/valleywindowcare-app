'use client';

import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import SafeHeroImage from "@/components/SafeHeroImage";
import SuccessState from "./SuccessState";

interface HeroProps {
    h1?: React.ReactNode;
    description?: string;
    bgImage?: string;
}

export default function Hero({
    bgImage = "/assets/authentic-crew-photo.jpg",
    h1,
    description
}: HeroProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Capture Form Data Payload
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Lead Capture Payload:", data);

        // Simulate a network request
        setIsSubmitted(true);
    };

    const isDefault = !bgImage || bgImage.includes("placeholder");

    return (
        <section className={`!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden bg-navy text-white`}>
            {/* Background with optimized Next/Image architecture */}
            <SafeHeroImage
                src={bgImage || "/assets/authentic-crew-photo.jpg"}
                alt="Valley Window Care and Exterior Cleaning"
                fallbackSrc="/assets/authentic-crew-photo.jpg"
            />
            <div className="absolute inset-0 bg-navy/30"></div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center">
                {/* Top Section: Messaging */}
                <div className="max-w-4xl mb-12">
                    <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg mx-auto text-white`}>
                        {h1 || (
                            <>
                                Valley Window Care <br />
                                <span className="text-gold text-3xl md:text-4xl lg:text-5xl block mt-2">and Exterior Cleaning</span>
                            </>
                        )}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 font-semibold leading-relaxed drop-shadow-md">
                        {description || "Enhance your property's appeal with expert exterior cleaning services in Green Bay from Valley Window Care and Exterior Cleaning."}
                    </p>
                </div>

                {/* Bottom Section: Dual-Action Quote Box (Zero-Gap Stack) */}
                <div className="!relative !z-10 !w-full !max-w-xl !mx-auto !bg-white !rounded-xl !shadow-2xl !overflow-hidden flex flex-col text-navy-dark min-h-[500px] sm:min-h-[480px]" id="quote-form">
                    {/* Top Action Header */}
                    <div className="bg-gradient-to-br from-[#1B365D]/95 to-[#2c538c]/95 text-white w-full border-b border-white/10">
                        <div className="!flex !flex-col !items-center !justify-center !text-center !w-full pt-4 pb-2">
                            <h3 className="text-2xl font-bold !text-center !w-full !block">Get In Touch Fast</h3>
                        </div>

                        <div className="!flex !flex-row !justify-around !items-center !p-6 !w-full">
                            <a href="tel:920-609-7085" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center" rel="nofollow">
                                <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                    <Phone size={24} className="text-gold" />
                                </div>
                                <div className="flex flex-col items-center !text-center w-full">
                                    <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Call Or Text</p>
                                    <p className="font-bold !text-xs sm:!text-sm whitespace-nowrap !text-center">(920) 609-7085</p>
                                </div>
                            </a>

                            <a href="mailto:info@valleywindowcare.com" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center overflow-hidden" rel="nofollow">
                                <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                    <Mail size={24} className="text-gold" />
                                </div>
                                <div className="flex flex-col items-center !text-center w-full px-1">
                                    <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Email Us</p>
                                    <p className="font-bold !text-[10px] sm:!text-xs break-all !text-center w-full">info@valleywindowcare.com</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Bottom Action Body (Form OR Success State) */}
                    <div className="w-full bg-transparent relative h-full flex flex-col justify-center">
                        {isSubmitted ? (
                            <SuccessState onReset={() => setIsSubmitted(false)} />
                        ) : (
                            <div className="p-8 h-full flex flex-col justify-center">
                                <h3 className="text-2xl font-extrabold mb-6 text-navy !text-center !w-full !block">Request a Free Quote</h3>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="sr-only" htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Your Name"
                                            className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                                        />
                                    </div>
                                    <div className="!flex !flex-row !gap-2 !w-full">
                                        <div className="flex-1">
                                            <label className="sr-only" htmlFor="phone">Phone</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                placeholder="Phone"
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all text-sm sm:text-base"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="sr-only" htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                placeholder="Email"
                                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all text-sm sm:text-base"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="sr-only" htmlFor="projectDetails">Project Details & Service Address</label>
                                        <textarea
                                            id="projectDetails"
                                            name="projectDetails"
                                            rows={4}
                                            required
                                            placeholder="Tell us about your project (e.g., number of windows, roof type) and provide the service address for an accurate quote"
                                            className="!w-full !mt-4 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all text-sm sm:text-base resize-y min-h-[100px]"
                                        />
                                    </div>
                                    <div>
                                        <fieldset>
                                            <legend className="text-sm font-bold text-navy mb-2">Services Needed</legend>
                                            <div className="grid grid-cols-2 gap-3 mt-1 text-sm text-gray-700">
                                                <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                                    <input type="checkbox" name="service" value="house-washing" className="accent-gold w-4 h-4 cursor-pointer" /> House Washing
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                                    <input type="checkbox" name="service" value="roof-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Roof Cleaning
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                                    <input type="checkbox" name="service" value="window-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Window Cleaning
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                                    <input type="checkbox" name="service" value="gutter-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Gutter Cleaning
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                                    <input type="checkbox" name="service" value="concrete-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Concrete Cleaning
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                                    <input type="checkbox" name="service" value="permanent-led-lighting" className="accent-gold w-4 h-4 cursor-pointer" /> Permanent LED Lighting
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors col-span-2">
                                                    <input type="checkbox" name="service" value="commercial-services" className="accent-gold w-4 h-4 cursor-pointer" /> Commercial Services
                                                </label>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full bg-gold hover:bg-gold-light text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-md hover:shadow-xl hover:-translate-y-1 mt-2"
                                    >
                                        GET QUOTE NOW
                                    </button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section >
    );
}
