"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export default function MarketingScripts() {
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
        const events = ['scroll', 'mousemove', 'touchstart', 'keydown'];
        
        const loadScripts = () => {
            setShouldLoad(true);
            events.forEach(event => window.removeEventListener(event, loadScripts));
        };

        if (typeof window !== "undefined") {
            events.forEach(event => window.addEventListener(event, loadScripts, { passive: true, once: true }));
        }

        return () => {
            if (typeof window !== "undefined") {
                events.forEach(event => window.removeEventListener(event, loadScripts));
            }
        };
    }, []);

    if (!shouldLoad) return null;

    return (
        <>
            {process.env.NEXT_PUBLIC_GA_ID && (
                <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GA_ID} />
            )}
            {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID} />
            )}
        </>
    );
}
