import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CANNIBALIZATION_REDIRECTS: Record<string, string> = {
  '/blog/average-cost-for-residential-power-washing': 'https://valleyexteriorpros.com/services/pressure-washing',
  '/blog/what-does-pressure-washing-cost-in-wisconsin': 'https://valleyexteriorpros.com/services/pressure-washing',
  '/blog/power-washing-green-bay': 'https://valleyexteriorpros.com/service-areas/green-bay',
  '/blog/green-bay-pressure-washing-services': 'https://valleyexteriorpros.com/service-areas/green-bay',
  '/blog/when-to-hire-someone-to-clean-your-gutters': 'https://valleyexteriorpros.com/services/gutter-cleaning',
  '/blog/gutter-cleaning-services-in-green-bay-wisconsin': 'https://valleyexteriorpros.com/services/gutter-cleaning',
  '/services/permanent-holiday-lighting': 'https://valleyexteriorpros.com/services/permanent-led-lighting',
  '/services/power-washing': 'https://valleyexteriorpros.com/services/pressure-washing',
};

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  if (host.includes('valleywindowcare.com')) {
    const url = request.nextUrl.clone();
    url.host = 'valleyexteriorpros.com';
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  const pathname = request.nextUrl.pathname;
  const normalizedPath = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  if (CANNIBALIZATION_REDIRECTS[normalizedPath]) {
    return NextResponse.redirect(CANNIBALIZATION_REDIRECTS[normalizedPath], 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

