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
            {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
                <Script
                    id="fb-pixel"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                        fbq('track', 'PageView');
                        `,
                    }}
                />
            )}
        </>
    );
}
