'use client';

import { usePathname } from 'next/navigation';

export default function CanonicalURL() {
  const pathname = usePathname();
  // Set the canonical URL dynamically matching the path, ignoring queries/hashes
  const canonicalUrl = `https://www.valleyexteriorpros.com${pathname === '/' ? '' : pathname}`;
  return <link rel="canonical" href={canonicalUrl} />;
}
