"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";

type ServiceType = "house" | "roof" | "gutter" | "concrete" | "paver";

export default function ValueCalculator() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1 State
  const [service, setService] = useState<ServiceType>("house");
  const [region, setRegion] = useState<"Green Bay" | "Appleton" | "Other">("Green Bay");
  const [houseSqft, setHouseSqft] = useState<number>(2000);
  const [roofSqft, setRoofSqft] = useState<number>(2500);
  const [gutterFt, setGutterFt] = useState<number>(150);
  const [concreteSqft, setConcreteSqft] = useState<number>(1000);
  const [paverSqft, setPaverSqft] = useState<number>(500);

  // Step 2 State
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Pricing Matrix
  const pricingMatrix = {
    house: 0.20,
    roof: 0.40,
    gutter: 1.50,
    concrete: 0.25,
    paver: 3.25
  };

  const getActiveQuantity = () => {
    switch (service) {
      case "house": return houseSqft;
      case "roof": return roofSqft;
      case "gutter": return gutterFt;
      case "concrete": return concreteSqft;
      case "paver": return paverSqft;
    }
  };

  const calculateCost = () => {
    const qty = getActiveQuantity();
    const rate = pricingMatrix[service];
    let base = qty * rate;

    // Minimums
    if (service === "house" && base < 350) base = 350;
    if (service === "roof" && base < 500) base = 500;
    if (service === "gutter" && base < 150) base = 150;
    if (service === "concrete" && base < 250) base = 250;
    if (service === "paver" && base < 500) base = 500;

    // Regional Spring Multiplier
    const multiplier = (region === "Green Bay" || region === "Appleton") ? 1.15 : 1.0;
    return Math.round(base * multiplier);
  };

  const getServiceNameStr = () => {
    switch (service) {
      case "house": return "House Washing";
      case "roof": return "Roof Washing";
      case "gutter": return "Gutter Cleaning";
      case "concrete": return "Concrete Cleaning";
      case "paver": return "Paver Restoration";
    }
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const safeName = name.trim() || "Unknown User";
    const safePhone = phone.trim() || "Not Provided";
    const safeEmail = email.trim() || "";
    const activeQty = getActiveQuantity();
    const activeServiceStr = getServiceNameStr();

    const payload = {
        name: safeName,
        phone: safePhone,
        email: safeEmail,
        projectDetails: `Quote Generation: ${activeQty} units for ${activeServiceStr}. Region: ${region}`,
        servicesRequested: activeServiceStr
    };

    try {
        const generatedEventId = crypto.randomUUID();

        const web3Payload = {
            access_key: "c8727880-065b-4c99-9190-7f4a13170752", 
            subject: `🚨 PRICING GUIDE LEAD: ${safeName} - Valley Window Care`,
            from_name: "Pricing Engine Trap",
            name: safeName,
            email: safeEmail,
            phone: safePhone,
            message: payload.projectDetails,
            services: payload.servicesRequested
        };

        const web3Response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify(web3Payload),
        });

        const web3Result = await web3Response.json();

        if (web3Response.ok && web3Result.success) {
            fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ ...payload, eventId: generatedEventId }),
            }).catch(e => console.error("CAPI error:", e));

            if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "Lead", {}, { eventID: generatedEventId });
            }
        }
    } catch (error) {
        console.error("Form error:", error);
    } finally {
        setIsLoading(false);
        setStep(3);
    }
  };

  const estimate = calculateCost();

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
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Calculate exact professional soft washing and restoration costs in Wisconsin."
          })
        }}
      />
      <section className="bg-white py-12 px-6 rounded-3xl shadow-xl border border-gray-100 my-12 max-w-4xl mx-auto overflow-hidden">
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            Pressure washing cost per square foot in Wisconsin
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Use our interactive pricing engine. Select your service, configure your exact measurements, and unlock your algorithm-generated flat rate.
            </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* Left Col: Scope Controls (Always accessible in Step 1, disabled lightly later) */}
            <div className={`w-full md:w-1/2 space-y-6 ${step > 1 ? 'opacity-50 pointer-events-none transition-opacity' : ''}`}>
               <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Service Area (Spring Demand Weighted)</label>
                  <select 
                    value={region} 
                    onChange={(e) => setRegion(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-gold transition-colors font-semibold text-gray-700 shadow-sm"
                  >
                    <option value="Green Bay">Green Bay (1.15x Spring Demand)</option>
                    <option value="Appleton">Appleton (1.15x Spring Demand)</option>
                    <option value="Other">Other Surrounding Areas</option>
                  </select>
               </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Service</label>
                    <div className="grid grid-cols-1 gap-2">
                    <button
                        onClick={() => setService("house")}
                        className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "house" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
                    >
                        House / Siding Wash
                    </button>
                    <button
                        onClick={() => setService("roof")}
                        className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "roof" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
                    >
                        Roof Washing
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
                        Concrete Cleaning
                    </button>
                    <button
                        onClick={() => setService("paver")}
                        className={`w-full py-3 px-4 rounded-xl font-bold transition-all border-2 text-left ${service === "paver" ? "border-gold bg-gold/10 text-navy" : "border-gray-200 text-gray-500 hover:border-gold/50"}`}
                    >
                        Paver Restoration
                    </button>
                    </div>
                </div>

                {service === "house" && (
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated Home Size: {houseSqft.toLocaleString()} sq ft
                    </label>
                    <input type="range" min="1000" max="6000" step="100" value={houseSqft} onChange={(e) => setHouseSqft(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold" />
                    </div>
                )}
                {service === "roof" && (
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated Roof Size: {roofSqft.toLocaleString()} sq ft
                    </label>
                    <input type="range" min="1000" max="6000" step="100" value={roofSqft} onChange={(e) => setRoofSqft(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold" />
                    </div>
                )}
                {service === "gutter" && (
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Linear Feet: {gutterFt.toLocaleString()} ft
                    </label>
                    <input type="range" min="50" max="500" step="10" value={gutterFt} onChange={(e) => setGutterFt(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold" />
                    </div>
                )}
                {service === "concrete" && (
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated Area: {concreteSqft.toLocaleString()} sq ft
                    </label>
                    <input type="range" min="500" max="5000" step="100" value={concreteSqft} onChange={(e) => setConcreteSqft(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold" />
                    </div>
                )}
                {service === "paver" && (
                    <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Patio/Driveway Area: {paverSqft.toLocaleString()} sq ft
                    </label>
                    <input type="range" min="100" max="2000" step="50" value={paverSqft} onChange={(e) => setPaverSqft(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gold" />
                    </div>
                )}
            </div>

            {/* Right Col: The Trap / Output */}
            <div className="w-full md:w-1/2 bg-gray-50 rounded-2xl p-6 sm:p-8 flex flex-col justify-center items-center text-center border border-gray-100 min-h-[350px] relative">
               <AnimatePresence mode="wait">
                  {/* STEP 1: PENDING CALCULATION */}
                  {step === 1 && (
                     <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-center items-center space-y-6">
                        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                           <span className="text-4xl text-gray-400">?</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-700 mb-2 tracking-tight">Your Estimate Is Hidden</h3>
                        <p className="text-sm text-gray-500 mb-6 px-4">Set your required property scope on the left to activate our calculation engine.</p>
                        <button onClick={handleStep1Submit} className="w-full max-w-xs bg-navy text-white font-extrabold text-lg py-4 rounded-full transition-transform active:scale-95 shadow-lg">
                           Proceed to Estimate
                        </button>
                     </motion.div>
                  )}

                  {/* STEP 2: LEAD TRAP */}
                  {step === 2 && (
                     <motion.div key="step2" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} className="w-full">
                        <h3 className="text-xl font-extrabold text-navy mb-2">Almost there!</h3>
                        <p className="text-sm text-gray-600 mb-6">Enter your details so we know where to send this guaranteed quote.</p>
                        <form onSubmit={handleStep2Submit} className="space-y-4">
                           <input type="text" required placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" />
                           <input type="tel" required placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" />
                           <input type="email" required placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold" />
                           <button type="submit" disabled={isLoading} className="w-full bg-gold text-navy font-extrabold text-lg py-4 rounded-xl mt-4 shadow-lg active:scale-95 transition-all">
                              {isLoading ? "CALCULATING..." : "UNLOCK EXACT QUOTE"}
                           </button>
                        </form>
                     </motion.div>
                  )}

                  {/* STEP 3: THE CLOSE */}
                  {step === 3 && (
                     <motion.div key="step3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full h-full flex flex-col justify-center text-center space-y-5">
                       <div>
                          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Your Estimate</p>
                          <div className="text-6xl sm:text-7xl font-black text-navy tracking-tighter">
                            ${estimate}
                          </div>
                       </div>
                       
                       <div className="space-y-4 pt-2 w-full">
                          <div className="bg-gold/10 border border-gold p-4 rounded-xl text-center">
                             <p className="text-sm font-bold text-gray-700 mb-1">Your Exclusive Discount Code:</p>
                             <div className="text-2xl font-black text-navy tracking-widest mb-1">VALLEY10</div>
                             <p className="text-sm text-gray-600">Save 10% when you book — just mention this code when you call or text.</p>
                          </div>
                          <a href="tel:920-609-7085" className="w-full bg-navy text-white font-black text-[15px] sm:text-base py-4 px-2 rounded-xl flex justify-center items-center gap-2 hover:bg-navy-dark transition-all shadow-md active:scale-95">
                             <Phone size={20} /> Call or Text to Book &rarr; (920) 609-7085
                          </a>
                       </div>

                       <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                          <p className="text-[10px] sm:text-xs text-gray-500 leading-snug">
                             This is a baseline estimate. Final pricing is confirmed after we assess exact square footage, building height, and site conditions.
                          </p>
                       </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
        </div>
      </section>
    </>
  );
}
