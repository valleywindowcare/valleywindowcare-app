"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const VanillaMap = dynamic(() => import('./VanillaMap'), { ssr: false });

export default function VanillaMapClient({ city }: { city?: string }) {
    const [inView, setInView] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '400px' } // Pre-load 400px before entering viewport
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full min-h-[450px] relative">
            {inView ? (
                <VanillaMap city={city} />
            ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 text-slate-400 font-semibold border-t border-slate-200 min-h-[450px]">
                    <span className="text-sm tracking-wider uppercase">Loading Service Area Map...</span>
                </div>
            )}
        </div>
    );
}
