import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl;
    
    // Specifically allow traffic to our authorized Power Hubs
    if (
        url.pathname.startsWith('/service-areas/neenah/') ||
        url.pathname.startsWith('/service-areas/appleton/') ||
        url.pathname.startsWith('/service-areas/green-bay/')
    ) {
        return NextResponse.next();
    }

    // Intercept any OTHER request matching the /service-areas/:city/:service pattern
    // and forcefully return a 410 Gone status code, explicitly telling search
    // engines that the deep matrix pages have been permanently removed.
    return new Response(null, { status: 410, statusText: 'Gone' });
}

export const config = {
    // Only trigger this middleware on deep matrix (City/Service) routes.
    // Parent city hubs (e.g., /service-areas/appleton) will bypass this safely.
    matcher: '/service-areas/:city/:service',
};

