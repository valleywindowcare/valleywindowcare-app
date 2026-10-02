'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

export default function AttributionTracker() {
    useEffect(() => {
        try {
            captureAttribution();
        } catch (e) {
            console.error("Attribution tracking initialization error:", e);
        }
    }, []);

    return null;
}
