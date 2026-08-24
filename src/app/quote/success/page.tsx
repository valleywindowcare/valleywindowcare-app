import React from 'react';
import SuccessPageClient from './SuccessPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Quote Request Received | Valley Property Services",
  description: "Thank you for contacting Valley Property Services. Your request has been received.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function QuoteSuccessPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full h-[600px] mt-10 shadow-xl rounded-2xl bg-white relative overflow-hidden">
        <SuccessPageClient />
      </div>
    </div>
  );
}
