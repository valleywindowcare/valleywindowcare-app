import React from "react";
import HeroForm from "@/components/HeroForm";

export const metadata = {
  title: "Get a Custom Quote | Valley Property Services",
  description: "Request a custom quote for our professional exterior restoration, siding soft washing, and window cleaning services in Green Bay & Appleton.",
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 flex flex-col items-center">
      <div className="max-w-4xl text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-navy tracking-tight mb-4">
          Request a Custom Quote
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Contact our owner-operator team today for an exact, guaranteed estimate for our professional window cleaning, gutter clearing, and soft washing services.
        </p>
      </div>
      
      <div className="w-full max-w-xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
        <HeroForm />
      </div>
      
    </div>
  );
}
