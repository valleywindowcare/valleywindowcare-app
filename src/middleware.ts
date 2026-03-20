import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Intercept any request matching the /service-areas/:city/:service pattern
    // and forcefully return a 410 Gone status code, explicitly telling search
    // engines that the deep matrix pages have been permanently removed.
    return new Response(null, { status: 410, statusText: 'Gone' });
}

export const config = {
    // Only trigger this middleware on deep matrix (City/Service) routes.
    // Parent city hubs (e.g., /service-areas/appleton) will bypass this safely.
    matcher: '/service-areas/:city/:service',
};
