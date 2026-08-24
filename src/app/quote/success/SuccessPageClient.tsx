"use client";

import React from 'react';
import SuccessState from '@/components/SuccessState';
import { useRouter } from 'next/navigation';

export default function SuccessPageClient() {
  const router = useRouter();

  return <SuccessState onReset={() => router.push('/')} />;
}
