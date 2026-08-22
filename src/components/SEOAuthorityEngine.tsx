"use client";

import dynamic from 'next/dynamic';

const SEOAuthorityEngineInner = dynamic(() => import('./SEOAuthorityEngineInner'), {
    ssr: false,
    loading: () => (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 text-center min-h-[200px] flex items-center justify-center border border-slate-100">
            <div className="text-slate-400 font-semibold uppercase tracking-wider text-sm">
                Loading Authority Narrative...
            </div>
        </div>
    )
});

interface SEOAuthorityEngineProps {
    serviceSlug: string;
    serviceName: string;
    cityName?: string;
}

export default function SEOAuthorityEngine({ serviceSlug, serviceName, cityName }: SEOAuthorityEngineProps) {
    return <SEOAuthorityEngineInner serviceSlug={serviceSlug} serviceName={serviceName} cityName={cityName} />;
}
