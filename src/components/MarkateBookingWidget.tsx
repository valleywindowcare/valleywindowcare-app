'use client';

import React, { useEffect } from 'react';

export default function MarkateBookingWidget() {
    useEffect(() => {
        const loadMarkateWidget = () => {
            const container = document.getElementById('markate-widget-booking');
            if (!container) return;

            // Clear any existing elements inside container to avoid multiple iframes
            container.innerHTML = '';

            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            const u = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'www.markate.com/public/widget/booking/js';
            const t = Math.random() * 10000000000000000;
            s.src = `${u}?id=31e10699e522b50401e3edc96d0d30cf:45956:967bd553&ref=${encodeURIComponent(window.location.href)}&t=${t}`;
            
            if (container.parentNode) {
                container.parentNode.insertBefore(s, container);
            }
        };

        if (document.readyState === 'complete') {
            loadMarkateWidget();
        } else {
            window.addEventListener('load', loadMarkateWidget, { once: true });
        }

        return () => {
            window.removeEventListener('load', loadMarkateWidget);
        };
    }, []);

    return (
        <div className="w-full min-h-[700px] relative">
            <div id="markate-widget-booking" className="w-full min-h-[700px]" />
        </div>
    );
}
