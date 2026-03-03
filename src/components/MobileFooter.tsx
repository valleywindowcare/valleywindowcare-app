'use client';

import { Phone, FileText } from "lucide-react";
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
                    className="flex-1 bg-navy hover:bg-navy-dark text-white font-bold py-4 px-2 flex flex-col items-center justify-center gap-1 transition-colors btn-hover-fx relative overflow-hidden group rounded-l-2xl max-w-full"
                 rel="nofollow">
                    <Phone size={20} className="group-active:scale-95 transition-transform" />
                    <span className="text-base break-words leading-tight text-center">(920) 609-7085</span>
                </a>

                {/* Get Quote Button (Gold) */}
                <Link
                    href="/contact"
                    className="flex-1 bg-gold hover:bg-gold-light text-white font-bold py-4 px-2 flex items-center justify-center gap-2 transition-colors btn-hover-fx rounded-r-2xl"
                >
                    <FileText size={24} className="mb-1" />
                    <span className="text-sm font-bold tracking-wider">GET QUOTE</span>
                </Link>

            </div>
        </div>
    );
}
