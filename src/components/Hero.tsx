import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import HeroForm from "./HeroForm";

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
    bgImageAlt = "Valley Window Care Exterior Cleaning",
    h1,
    description,
    cityName,
    serviceName
}: HeroProps) {

    const isDefault = !bgImage || bgImage.includes("placeholder");

    return (
        <section className={`!relative !w-full !min-h-screen !flex !flex-col !items-center !justify-center overflow-hidden text-white bg-navy`}>
            {/* Background with optimized Next/Image architecture */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bgImage}
                    alt={bgImageAlt}
                    fill
                    priority={true}
                    fetchPriority="high"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                />
            </div>

            {/* Dark Overlay Tint */}
            <div className="absolute inset-0 bg-slate-900/75 z-10"></div>

            <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center text-center">
                {/* Top Section: Messaging */}
                <div className="max-w-4xl mb-12">
                    <h1 className={`text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-lg mx-auto text-white`}>
                        {h1 || (
                            <>
                                Top-Rated Exterior Cleaning <br />
                                <span className="text-gold text-3xl md:text-4xl lg:text-5xl block mt-2">& Window Washing in Green Bay, WI</span>
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
                </div>
            </div>
        </section >
    );
}
