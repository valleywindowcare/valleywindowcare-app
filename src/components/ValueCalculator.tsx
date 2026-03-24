"use client";

import React, { useState } from "react";
import Link from 'next/link';

export default function ValueCalculator() {
  const [service, setService] = useState<"gutter" | "house" | "roof" | "concrete" | "paver">("house");
  const [houseSqft, setHouseSqft] = useState<number>(2000);
  const [roofSqft, setRoofSqft] = useState<number>(2500);
  const [gutterFt, setGutterFt] = useState<number>(150);
  const [concreteSqft, setConcreteSqft] = useState<number>(1000);
  const [paverSqft, setPaverSqft] = useState<number>(500);

  const calculateCost = () => {
    if (service === "gutter") {
      return Math.max(150, Math.round(gutterFt * 1.50));
    }
    if (service === "roof") {
      return Math.max(500, Math.round(roofSqft * 0.40));
    }
    if (service === "concrete") {
      return Math.max(250, Math.round(concreteSqft * 0.40));
    }
    if (service === "paver") {
      return Math.max(500, Math.round(paverSqft * 3.00));
    }
    // House washing: Start at $350 or ~$0.20 per sq ft
    const calculated = houseSqft * 0.20;
    return Math.max(350, Math.round(calculated));
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Property Exterior Restoration Value Calculator",
            "operatingSystem": "All",
            "applicationCategory": "BusinessApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "Calculate exact professional soft washing and restoration costs in Wisconsin."
          })
        }}
      />
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
                Full Roof Soft Washing
              </button>
              <button
                onClick={() => setService("gutter")}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "gutter" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
              >
                Gutter Cleaning
              </button>
              <button
                onClick={() => setService("concrete")}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "concrete" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
              >
                Professional Concrete Cleaning
              </button>
              <button
                onClick={() => setService("paver")}
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "paver" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
              >
                Paver Patio Restoration & Sealing
              </button>
            </div>
          </div>

          {service === "house" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Home Size: {houseSqft.toLocaleString()} sq ft
              </label>
              <input
                type="range"
                min="1000"
                max="6000"
                step="100"
                value={houseSqft}
                onChange={(e) => setHouseSqft(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <span>1,000 sqft</span>
                <span>6,000+ sqft</span>
              </div>
            </div>
          )}

          {service === "roof" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Roof Size: {roofSqft.toLocaleString()} sq ft
              </label>
              <input
                type="range"
                min="1000"
                max="6000"
                step="100"
                value={roofSqft}
                onChange={(e) => setRoofSqft(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <span>1,000 sqft</span>
                <span>6,000+ sqft</span>
              </div>
            </div>
          )}

          {service === "gutter" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Gutter Length: {gutterFt.toLocaleString()} linear ft
              </label>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={gutterFt}
                onChange={(e) => setGutterFt(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <span>50 ft</span>
                <span>500+ ft</span>
              </div>
            </div>
          )}

          {service === "concrete" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Area: {concreteSqft.toLocaleString()} sq ft
              </label>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={concreteSqft}
                onChange={(e) => setConcreteSqft(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <span>500 sqft</span>
                <span>5,000+ sqft</span>
              </div>
            </div>
          )}

          {service === "paver" && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Estimated Patio Size: {paverSqft.toLocaleString()} sq ft
              </label>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={paverSqft}
                onChange={(e) => setPaverSqft(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2 font-medium">
                <span>100 sqft</span>
                <span>2,000+ sqft</span>
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
          <p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">
            {service === "house" 
              ? "Base rate is $350 or ~$0.20 per square foot for premium soft washing." 
              : service === "roof" 
              ? "Base rate is $500 or ~$0.40 per square foot for a zero-damage roof soft wash." 
              : service === "gutter"
              ? "Base rate is $150 or ~$1.50 per linear foot for full interior gutter debris removal."
              : service === "concrete"
              ? "Base rate is $250 or ~$0.40 per square foot for professional surface degreasing and brightening."
              : "Base rate is $500 or ~$3.00 per square foot. Includes deep cleaning, polymeric sand refilling, and premium sealant application."}
          </p>
          <Link 
            href="/contact" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-navy font-bold text-lg py-4 px-8 rounded-full hover:bg-navy hover:text-white transition-all shadow-lg transform hover:-translate-y-1"
          >
            Get Exact Quote
          </Link>
          {service === "paver" && (
            <Link href="/paver-patio-restorations" className="mt-6 text-sm text-gold hover:text-navy underline font-bold transition-colors">
              Explore the Paver Restoration Gallery →
            </Link>
          )}
          {service !== "paver" && (
            <Link href="/pricing" className="mt-6 text-sm text-gold hover:text-navy underline font-bold transition-colors">
              View the full 2026 Price Guide →
            </Link>
          )}
        </div>
      </div>
    </section>
    </>
  );
}
