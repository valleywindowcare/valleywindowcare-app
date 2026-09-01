'use client';

import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function MarkateBookingWidget() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Inject Markate dynamic resize and booking script
        const scriptId = 'markate-booking-script';
        let s = document.getElementById(scriptId) as HTMLScriptElement | null;

        if (!s) {
            s = document.createElement('script');
            s.id = scriptId;
            s.type = 'text/javascript';
            s.async = true;
            const u = 'https://www.markate.com/public/widget/booking/js';
            const t = Math.random() * 10000000000000000;
            s.src = `${u}?id=31e10699e522b50401e3edc96d0d30cf:45956:967bd553&ref=${encodeURIComponent(window.location.href)}&t=${t}`;
            
            const w = document.getElementById('markate-widget-booking');
            if (w && w.parentNode) {
                w.parentNode.insertBefore(s, w);
            }
        }

        // Handle auto-resize postMessage from Markate iframe
        const handleMessage = (e: MessageEvent) => {
            if (e.origin && (e.origin.includes('markate.com') || e.origin.includes('www.markate.com'))) {
                setIsLoading(false);
                try {
                    const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
                    if (data && (data.height || data.iframe_height)) {
                        const h = data.height || data.iframe_height;
                        const iframe = document.getElementById('markate-widget-booking-iframe') as HTMLIFrameElement | null;
                        if (iframe && typeof h === 'number' && h > 300) {
                            iframe.style.height = `${h}px`;
                        }
                    }
                } catch {
                    // Ignore non-JSON postMessage events
                }
            }
        };

        window.addEventListener('message', handleMessage);

        // Fallback to remove loader after 2.5s
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => {
            window.removeEventListener('message', handleMessage);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="relative w-full min-h-[750px] flex flex-col items-center">
            {isLoading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl py-16 transition-opacity duration-300">
                    <Loader2 className="w-10 h-10 text-gold animate-spin mb-4" />
                    <p className="text-navy font-bold text-base">Loading Instant Booking System...</p>
                    <p className="text-gray-500 text-sm">Connecting to Valley Property Services online booking schedule</p>
                </div>
            )}
            
            <div id="markate-widget-booking" className="w-full" />
            
            <iframe
                id="markate-widget-booking-iframe"
                src="https://www.markate.com/public/widget/booking/products/31e10699e522b50401e3edc96d0d30cf:45956:967bd553"
                width="100%"
                height="1000"
                scrolling="no"
                frameBorder="0"
                allowTransparency={true}
                onLoad={() => setIsLoading(false)}
                style={{
                    border: 'none',
                    overflow: 'hidden',
                    minHeight: '800px',
                    width: '100%'
                }}
                className="w-full rounded-2xl transition-all duration-300"
                title="Valley Property Services Online Booking & Automated Estimate"
            />
        </div>
    );
}
