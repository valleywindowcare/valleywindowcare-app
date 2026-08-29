'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function PromoModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check localStorage to see if it's already dismissed
        const isDismissed = localStorage.getItem('vps-lighting-promo-dismissed');
        if (!isDismissed) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000); // 3-second delay
            return () => clearTimeout(timer);
        }
    }, []);

    const dismissModal = () => {
        setIsOpen(false);
        localStorage.setItem('vps-lighting-promo-dismissed', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300">
            {/* Modal Container */}
            <div className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
                
                {/* Close Button 'X' top right */}
                <button
                    onClick={dismissModal}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/20 hover:bg-slate-950/30 text-white transition-colors"
                    aria-label="Close promotional popup"
                >
                    <X size={20} />
                </button>

                {/* Left/Top visual column */}
                <div className="relative w-full md:w-1/2 h-56 md:h-auto min-h-[320px]">
                    <Image
                        src="/images/portfolio/lightpopup.JPG"
                        alt="Holiday & Permanent Lighting display - Valley Property Services"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Right/Bottom content column */}
                <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center text-left bg-white">
                    <span className="text-xs font-black tracking-widest text-gold uppercase mb-2 block">
                        Seasonal Offer
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-navy leading-tight mb-3">
                        Holiday &amp; Permanent Lighting
                    </h2>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                        Instantly elevate your property's curb appeal with our professional holiday and architectural permanent LED installations. App-controlled, energy-efficient, and custom-fit.
                    </p>

                    <div className="flex flex-col items-stretch gap-3">
                        <Link
                            href="/contact"
                            onClick={dismissModal}
                            className="bg-gold hover:bg-gold-light text-white font-black text-center py-3.5 px-6 rounded-full shadow-md transition-all active:scale-98 text-sm uppercase tracking-wider block"
                        >
                            Get a Free Quote
                        </Link>
                        
                        <button
                            onClick={dismissModal}
                            className="text-xs text-slate-400 hover:text-slate-600 transition-colors underline text-center cursor-pointer"
                        >
                            Close and dismiss offer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
