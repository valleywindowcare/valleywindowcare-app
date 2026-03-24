'use client';

import { Phone, FileText, Calculator } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileFooter() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Basic check to ensure it only renders on the client and ideally on mobile-sized screens
        const checkMobile = () => {
            setIsVisible(window.innerWidth < 768);
        };

        // Initial check
        checkMobile();

        // Add resize listener
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 w-full z-50 md:hidden pb-safe">
            <div className="bg-white/90 backdrop-blur-md shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.1)] border-t border-gray-100 flex h-20 items-stretch">

                {/* Call Now Button (Navy) */}
                <a
                    href="tel:920-609-7085"
                    className="flex-1 bg-navy hover:bg-navy-dark text-white font-bold py-3 flex flex-col items-center justify-center gap-1 transition-colors relative overflow-hidden group rounded-l-none border-r border-white/10"
                    rel="nofollow">
                    <Phone size={18} className="text-gold group-active:scale-95 transition-transform" />
                    <span className="text-[10px] sm:text-xs tracking-wider font-bold">CALL</span>
                </a>

                {/* Instant Price Button (Gold) */}
                <Link
                    href="/pricing"
                    className="flex-grow flex-[1.5] bg-gold hover:bg-yellow-400 text-navy font-extrabold py-3 flex flex-col items-center justify-center gap-1 transition-colors shadow-inner"
                    aria-label="Calculate instant price estimate"
                >
                    <Calculator size={20} className="text-navy" />
                    <span className="text-[12px] sm:text-sm tracking-wide">INSTANT PRICE</span>
                </Link>

                {/* Get Quote Button (Navy) */}
                <Link
                    href="/contact"
                    className="flex-1 bg-navy hover:bg-navy-dark text-white font-bold py-3 flex flex-col items-center justify-center gap-1 transition-colors rounded-r-none border-l border-white/10"
                >
                    <FileText size={18} className="text-gold" />
                    <span className="text-[10px] sm:text-xs tracking-wider font-bold">QUOTE</span>
                </Link>

            </div>
        </div>
    );
}
