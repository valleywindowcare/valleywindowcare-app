"use client";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroForm from "./HeroForm";
import { motion } from "framer-motion";

interface HeroProps {
    h1?: React.ReactNode;
    description?: string;
    bgImage?: string;
    bgImageAlt?: string;
    cityName?: string;
    serviceName?: string;
}

export default function Hero({
    bgImage = "/images/portfolio/house-wash-before-after.webp",
    bgImageAlt = "Valley Window Care & Exterior Cleaning",
    h1,
    description,
    cityName,
    serviceName
}: HeroProps) {

    const isDefault = !bgImage || bgImage.includes("placeholder");

    return (
        <section className={`!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden text-white bg-navy pb-24 lg:pb-32`}>
            {/* Background Image */}
            {bgImage && !bgImage.includes("placeholder") && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={bgImage}
                        alt={bgImageAlt}
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
            )}

            {/* Dark Semi-Transparent Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">
                {/* Top Section: Messaging */}
                <div className="max-w-4xl mb-12">
                    <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg mx-auto text-white`}>
                        {h1 || (
                            <>
                                Northeast Wisconsin’s Elite <br />
                                <span className="text-gold text-3xl md:text-4xl lg:text-5xl block mt-2">Exterior Restoration Specialists</span>
                            </>
                        )}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 font-semibold leading-relaxed drop-shadow-md max-w-3xl mx-auto">
                        {description || "Green Bay’s Premier Exterior Restoration & Soft-Wash Specialists."}
                    </p>
                </div>

                {/* Bottom Section: Dual-Action Quote Box (Zero-Gap Stack) */}
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="!relative !z-10 !w-full !max-w-xl !mx-auto bg-white/80 backdrop-blur-2xl !rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/20 !overflow-hidden flex flex-col text-navy-dark min-h-[500px] sm:min-h-[480px]" 
                    id="quote-form"
                >
                    {/* Top Action Header */}
                    <div className="bg-gradient-to-br from-[#1B365D]/90 to-[#2c538c]/90 text-white w-full border-b border-white/10 backdrop-blur-md">
                        <div className="!flex !flex-col !items-center !justify-center !text-center !w-full pt-4 pb-2">
                            <h3 className="text-2xl font-bold !text-center !w-full !block">Get In Touch Fast</h3>
                        </div>

                        <div className="!flex !flex-row !justify-around !items-center !p-6 !w-full">
                            <a href="tel:920-609-7085" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center" rel="nofollow" aria-label="Call Us">
                                <div className="bg-white/10 p-2 sm:p-3 rounded-2xl group-hover:bg-gold/20 transition-colors shrink-0">
                                    <Phone size={24} className="text-gold" />
                                </div>
                                <div className="flex flex-col items-center !text-center w-full">
                                    <p className="!text-xs text-gray-300 font-bold mb-1 tracking-wider uppercase !text-center">Call Or Text</p>
                                    <p className="font-bold !text-xs sm:!text-sm whitespace-nowrap !text-center">(920) 609-7085</p>
                                </div>
                            </a>

                            <a href="mailto:info@valleywindowcare.com" className="!min-w-0 flex flex-col items-center gap-2 hover:text-gold transition-colors group !text-center overflow-hidden" rel="nofollow" aria-label="Email Us">
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
                    <HeroForm />
                </motion.div>
            </div>
        </section >
    );
}
