"use client";

import { useEffect, useState, Suspense } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
    interface Window {
        fbq: any;
    }
}

function PixelEvents({ interacted }: { interacted: boolean }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (interacted && typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "PageView");
        }
    }, [pathname, searchParams, interacted]);

    return null;
}

export default function MarketingScripts() {
    const [interacted, setInteracted] = useState(false);

    useEffect(() => {
        const handleInteraction = () => {
            setInteracted(true);
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("mousemove", handleInteraction);
        };

        window.addEventListener("scroll", handleInteraction, { passive: true });
        window.addEventListener("touchstart", handleInteraction, { passive: true });
        window.addEventListener("mousemove", handleInteraction, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleInteraction);
            window.removeEventListener("touchstart", handleInteraction);
            window.removeEventListener("mousemove", handleInteraction);
        };
    }, []);

    if (!interacted) return null;

    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

    return (
        <>
            {gaId && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                        strategy="afterInteractive"
                    />
                    <Script id="google-analytics" strategy="afterInteractive">
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gaId}');
            `}
                    </Script>
                </>
            )}

            {pixelId && (
                <>
                    <Suspense fallback={null}>
                        <PixelEvents interacted={interacted} />
                    </Suspense>
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
                fbq('init', '${pixelId}');
                fbq('track', 'PageView');
              `,
                        }}
                    />
                    <noscript>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            height="1"
                            width="1"
                            style={{ display: "none" }}
                            src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
                            alt=""
                        />
                    </noscript>
                </>
            )}
        </>
    );
}
