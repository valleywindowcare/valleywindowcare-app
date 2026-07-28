"use client";

import React from 'react';
import SuccessState from '@/components/SuccessState';
import { useRouter } from 'next/navigation';

export default function QuoteSuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full h-[600px] mt-10 shadow-xl rounded-2xl bg-white relative overflow-hidden">
        <SuccessState onReset={() => router.push('/')} />
      </div>
    </div>
  );
}
