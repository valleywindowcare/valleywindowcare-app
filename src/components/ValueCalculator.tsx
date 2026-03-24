"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function ValueCalculator() {
  const [service, setService] = useState<"gutter" | "house" | "roof">("house");
  const [sqft, setSqft] = useState<number>(2000);

  const calculateCost = () => {
    if (service === "gutter") return 150;
    if (service === "roof") return 500;
    // House washing: Start at $350 or ~$0.20 per sq ft
    const calculated = sqft * 0.20;
    return calculated > 350 ? Math.round(calculated) : 350;
  };

  return (
    <section className="bg-white py-12 px-6 rounded-3xl shadow-xl border border-gray-100 my-12 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
          Pressure washing cost per square foot in Wisconsin
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Use our interactive calculator to estimate the baseline value of restoring your property's exterior. 
          Professional maintenance extends the life of your investments and prevents costly structural decay.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Controls */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service</label>
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => setService("house")}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "house" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
              >
                House / Siding Soft Washing
              </button>
              <button
                onClick={() => setService("roof")}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "roof" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
              >
                Full Roof Soft Washing (Flat Rate)
              </button>
              <button
                onClick={() => setService("gutter")}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "gutter" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
              >
                Gutter Cleaning (Flat Rate)
              </button>
            </div>
          </div>

          {service === "house" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Home Size: {sqft.toLocaleString()} sq ft
              </label>
              <input
                type="range"
                min="1000"
                max="6000"
                step="100"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <span>1,000 sqft</span>
                <span>6,000+ sqft</span>
              </div>
            </div>
          )}
        </div>

        {/* Output */}
        <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-gray-100 h-full min-h-[300px]">
          <h3 className="text-xl font-bold text-gray-500 mb-2 uppercase tracking-wider">Estimated Project Base</h3>
          <div className="text-6xl font-extrabold text-navy mb-4">
            ${calculateCost()}
          </div>
          <p className="text-sm text-gray-500 mb-8 max-w-xs">
            {service === "house" 
              ? "Base rate is $350 or ~$0.20 per square foot for premium soft washing." 
              : service === "roof" 
              ? "Standard base rate for a comprehensive, zero-damage roof soft wash." 
              : "Standard base rate for full interior gutter debris removal and downspout flushing."}
          </p>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold text-lg py-4 px-8 rounded-full hover:bg-navy hover:text-white transition-all shadow-lg transform hover:-translate-y-1"
          >
            Get Exact Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
