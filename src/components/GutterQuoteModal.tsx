'use client';

import React, { useState, useEffect } from 'react';
import HeroForm from '@/components/HeroForm';
import { X, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function GutterCTAButton({
    className = "",
    children = "Book Your Free Gutter Inspection & Quote"
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-gutter-quote-modal'));
    };

    return (
        <a
            href="/quote"
            onClick={handleClick}
            className={className}
        >
            {children}
        </a>
    );
}

export default function GutterQuoteModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-gutter-quote-modal', handleOpen);
        return () => window.removeEventListener('open-gutter-quote-modal', handleOpen);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
            <div
                className="fixed inset-0"
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />
            <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 my-8 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="bg-gradient-to-br from-[#1B365D] to-[#2c538c] text-white p-6 relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        aria-label="Close quote modal"
                    >
                        <X size={20} />
                    </button>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-2.5 h-2.5 bg-gold rounded-full shrink-0"></span>
                        <span className="text-xs font-black tracking-widest text-gold uppercase">Free Gutter Inspection &amp; Quote</span>
                    </div>
                    <h3 className="text-2xl font-black text-white leading-tight">
                        Schedule Your Gutter Service
                    </h3>
                    <p className="text-gray-200 text-sm mt-1">
                        Our De Pere crew provides transparent linear-foot pricing, full downspout flushing, and digital photo reports.
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs font-semibold text-gray-200">
                        <span className="inline-flex items-center gap-1 text-gold"><ShieldCheck size={14} /> $2M Insured</span>
                        <span className="inline-flex items-center gap-1 text-gold"><CheckCircle2 size={14} /> Mess-Free Guarantee</span>
                        <a href="tel:920-609-7085" className="ml-auto inline-flex items-center gap-1 hover:text-gold transition-colors font-bold text-white">
                            <Phone size={14} className="text-gold" /> (920) 609-7085
                        </a>
                    </div>
                </div>
                {/* Form Body */}
                <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto">
                    <HeroForm idPrefix="gutter-quote-modal" defaultServices={["gutter-cleaning"]} />
                </div>
            </div>
        </div>
    );
}
