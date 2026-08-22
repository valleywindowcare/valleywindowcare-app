"use client";

import dynamic from 'next/dynamic';

const ReviewSliderInner = dynamic(() => import('./ReviewSliderInner'), {
    ssr: false,
    loading: () => (
        <div className="py-24 bg-slate-50 relative flex items-center justify-center min-h-[300px] border-t border-slate-200">
            <div className="text-slate-400 font-semibold uppercase tracking-wider text-sm">
                Loading Testimonials...
            </div>
        </div>
    )
});

export default function ReviewSlider({ city }: { city?: string }) {
    return <ReviewSliderInner city={city} />;
}
