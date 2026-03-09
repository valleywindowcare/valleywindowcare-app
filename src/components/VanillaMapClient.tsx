"use client";

import dynamic from 'next/dynamic';

const VanillaMap = dynamic(() => import('./VanillaMap'), { ssr: false });

export default function VanillaMapClient({ city }: { city?: string }) {
    return <VanillaMap city={city} />;
}
