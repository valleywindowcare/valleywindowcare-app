'use client';

import { Phone, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MobileFooter() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsVisible(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    if (!isVisible) return null;

    const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const targetId = ['quote-form', 'hero-form', 'quote-page-form', 'contact-page-form', 'quote'].find(id => document.getElementById(id));
        if (targetId) {
            e.preventDefault();
            const element = document.getElementById(targetId);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-3 pb-safe flex gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
            {/* Button 1: Call / Text Us */}
            <a
                href="tel:920-609-7085"
                className="flex-1 flex items-center justify-center gap-2 bg-navy hover:bg-navy-dark text-white font-bold py-3.5 rounded-xl border border-navy/15 shadow-sm active:scale-98 transition-all text-xs sm:text-sm uppercase tracking-wider"
                rel="nofollow"
            >
                <Phone size={16} className="text-gold" />
                <span>Call / Text Us</span>
            </a>

            {/* Button 2: Get Instant Quote */}
            <Link
                href="/contact"
                onClick={handleQuoteClick}
                className="flex-[1.2] flex items-center justify-center gap-2 bg-gold hover:bg-yellow-400 text-navy font-extrabold py-3.5 rounded-xl shadow-md active:scale-98 transition-all text-xs sm:text-sm uppercase tracking-wider"
            >
                <span>Get Instant Quote</span>
                <ArrowRight size={16} />
            </Link>
        </div>
    );
}
