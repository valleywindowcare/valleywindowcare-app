'use client';

import { usePathname } from 'next/navigation';

export default function CanonicalURL() {
  const pathname = usePathname() || '';
  // Set self-referencing canonical URL dynamically matching the path, normalized without trailing slash
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '');
  const canonicalUrl = `https://valleyexteriorpros.com${cleanPath}`;

  return <link rel="canonical" href={canonicalUrl} />;
}
