"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";

export default function GlobalCalculator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 State
  const [region, setRegion] = useState<"Green Bay" | "Appleton" | "Other">("Green Bay");
  const [serviceType, setServiceType] = useState<"window" | "gutter" | "solar" | "house">("house");
  const [quantity, setQuantity] = useState<number>(2000);

  // Step 2 State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Constants
  const prices = {
    window: 15,    // per window
    gutter: 1.5,   // per ft
    solar: 10,     // per panel
    house: 0.20    // per sq ft
  };

  const labels = {
    window: "Number of Windows",
    gutter: "Linear Feet of Gutters",
    solar: "Number of Solar Panels",
    house: "House Square Footage"
  };

  const calculateEstimate = () => {
    let base = prices[serviceType] * quantity;
    const multiplier = (region === "Green Bay" || region === "Appleton") ? 1.15 : 1.0;
    return Math.round(base * multiplier);
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quantity > 0) setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const safeName = name.trim() || "Unknown User";
    const safePhone = phone.trim() || "Not Provided";
    const safeEmail = email.trim() || "";
    
    const payload = {
        name: safeName,
        phone: safePhone,
        email: safeEmail,
        projectDetails: `Calculator Request: ${quantity} ${labels[serviceType]} (${serviceType}). Region: ${region}`,
        servicesRequested: serviceType
    };

    try {
        const generatedEventId = crypto.randomUUID();

        const web3Payload = {
            access_key: "c8727880-065b-4c99-9190-7f4a13170752", 
            subject: `🚨 LEAD TRAP ESTIMATE: ${safeName} - Valley Window Care`,
            from_name: "Global Quote Calculator",
            name: safeName,
            email: safeEmail,
            phone: safePhone,
            message: payload.projectDetails,
            services: payload.servicesRequested
        };

        const web3Response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(web3Payload),
        });

        const web3Result = await web3Response.json();

        if (!web3Response.ok || !web3Result.success) {
            console.error("WEB3FORMS CLIENT ERROR:", web3Result);
            // Proceed anyway so we don't break the UX
        } else {
            // Fire CAPI Server Proxy for backend Meta deduplication logging
            fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ ...payload, eventId: generatedEventId }),
            }).catch(err => console.error("Non-fatal CAPI proxy error:", err));

            // Fire Meta Pixel 'Lead' Event
            if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "Lead", {}, { eventID: generatedEventId });
            }
        }
        
    } catch (error) {
        console.error("Form error:", error);
    } finally {
        setIsLoading(false);
        setStep(3); // The Close
    }
  };

  const estimate = calculateEstimate();

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden relative min-h-[500px] flex flex-col">
      {/* Header */}
      <div className="bg-navy text-white text-center py-6 px-4">
        <h2 className="text-2xl font-extrabold">Instant Quote Engine</h2>
        {step === 1 && <p className="text-gray-300 text-sm mt-1">Tell us about your project</p>}
        {step === 2 && <p className="text-gold font-bold text-sm mt-1 animate-pulse">Your Estimate is Ready!</p>}
        {step === 3 && <p className="text-gray-300 text-sm mt-1">Here is your estimate.</p>}
      </div>

      <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative">
        <AnimatePresence mode="wait">
          {/* STEP 1: SCOPE */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <form onSubmit={handleStep1Submit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Service Area</label>
                  <select 
                    value={region} 
                    onChange={(e) => setRegion(e.target.value as any)}
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                  >
                    <option value="Green Bay">Green Bay (Spring Demand Active)</option>
                    <option value="Appleton">Appleton (Spring Demand Active)</option>
                    <option value="Other">Other Surrounding Areas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Service Type</label>
                  <select 
                    value={serviceType} 
                    onChange={(e) => {
                      setServiceType(e.target.value as any);
                      if (e.target.value === 'window') setQuantity(20);
                      else if (e.target.value === 'gutter') setQuantity(150);
                      else if (e.target.value === 'solar') setQuantity(20);
                      else setQuantity(2000);
                    }}
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                  >
                    <option value="house">House/Siding Washing</option>
                    <option value="window">Window Cleaning</option>
                    <option value="gutter">Gutter Cleaning</option>
                    <option value="solar">Solar Panel Cleaning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">{labels[serviceType]}</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                  />
                  {serviceType === "window" && <p className="text-xs text-gray-500 mt-1">Ext/Int counts as 2 windows per frame.</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-navy font-extrabold text-lg py-4 rounded-full mt-2 hover:bg-navy hover:text-white transition-colors duration-300 shadow-md"
                >
                  Calculate Estimate
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 2: THE TRAP */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="space-y-6"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎉</span>
                </div>
                <h3 className="text-xl font-bold text-navy">We've generated your custom quote!</h3>
                <p className="text-sm text-gray-600 mt-2">Where should we send this estimate and our contact details?</p>
              </div>

              <form onSubmit={handleStep2Submit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-navy text-white font-extrabold text-xl py-5 rounded-full mt-2 transition-colors duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-2"
                >
                  {isLoading ? "UNLOCKING..." : "UNLOCK MY ESTIMATE"}
                </button>
                <p className="text-xs text-center text-gray-400">By proceeding, you agree to receive follow-up communication regarding your quote.</p>
              </form>
            </motion.div>
          )}

          {/* STEP 3: THE CLOSE */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center flex flex-col h-full space-y-6"
            >
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Estimated Starting Price</p>
                <div className="text-7xl font-extrabold text-navy tracking-tighter">
                  ${estimate}
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <a 
                  href="tel:9205285732"
                  className="w-full bg-gold text-navy font-black text-lg py-4 rounded-full flex justify-center items-center gap-3 hover:bg-gold/90 transition-transform active:scale-95 shadow-md"
                >
                  <Phone size={24} /> Tap to Claim 10% Discount
                </a>
                <a 
                  href={`sms:9205285732?body=Hi, I just generated a quote for ${quantity} ${labels[serviceType]} for $${estimate}. Can we schedule this?`}
                  className="w-full bg-navy text-white font-black text-lg py-4 rounded-full flex justify-center items-center gap-3 hover:bg-navy-dark transition-transform active:scale-95 shadow-md"
                >
                  <MessageSquare size={24} /> Text Us To Book
                </a>
              </div>

              <div className="mt-auto pt-6 px-4 bg-gray-50 rounded-2xl p-4 border border-gray-200">
                <p className="text-[11px] text-gray-500 leading-tight">
                  <strong className="text-gray-700">Liability Disclaimer:</strong> This is a baseline algorithmic estimate subject to final on-site verification. Factors such as severe hard water stains, storm windows, multi-story difficulties, and heavy oxidation may alter final scope.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
