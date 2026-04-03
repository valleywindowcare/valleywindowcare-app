import React from "react";
import GlobalCalculator from "@/components/GlobalCalculator";

export const metadata = {
  title: "Get a Custom Quote | Valley Window Care",
  description: "Use our custom quote engine to get an immediate, algorithmically generated estimate for our exterior restoration services.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
          Northeast Wisconsin's Instant Quote Engine
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get an exact, guaranteed baseline estimate for professional window cleaning, gutter clearing, and soft washing instantly.
        </p>
      </div>
      
      <GlobalCalculator />
      
    </div>
  );
}
