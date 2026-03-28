"use client";

import { useState } from "react";
import SuccessState from "./SuccessState";
import { motion } from "framer-motion";

declare global {
  interface Window {
    gtag: any;
    fbq: any;
    dataLayer: any[];
  }
}

export default function HeroForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        
        // Capture all selected checkboxes into a comma-separated string
        const selectedServices = formData.getAll("service").join(", ");
        
        // Safe Fallbacks to prevent Web3Forms API rejection
        const safeName = formData.get("name")?.toString().trim() || "Unknown User";
        const safePhone = formData.get("phone")?.toString().trim() || "Not Provided";
        const safeEmail = formData.get("email")?.toString().trim() || "";
        const safeSqFt = formData.get("squareFootage")?.toString().trim() || "Not Provided";
        const safeDetails = formData.get("projectDetails")?.toString().trim() || "No details provided.";
        const safeServices = selectedServices || "No specific services selected";

        const payload = {
            name: safeName,
            phone: safePhone,
            email: safeEmail,
            squareFootage: safeSqFt,
            projectDetails: safeDetails,
            servicesRequested: safeServices
        };

        try {
            // Generate a secure UUID for Meta Event Deduplication
            const generatedEventId = crypto.randomUUID();

            // 1. Fire Web3Forms directly from the browser to bypass Cloudflare Bot Management on Vercel IPs
            const web3Payload = {
                access_key: "c8727880-065b-4c99-9190-7f4a13170752", 
                subject: `🚨 NEW WEBSITE LEAD: ${safeName} - Valley Window Care`,
                from_name: "Website Quote Form",
                name: safeName,
                email: safeEmail,
                phone: safePhone,
                square_footage: safeSqFt,
                message: safeDetails,
                services: safeServices
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
                alert("Submission issue: " + (web3Result.message || "Please call us directly at (920) 609-7085."));
                setIsLoading(false);
                return;
            }

            // 2. Fire CAPI Server Proxy for backend Meta deduplication logging
            const submissionData = {
                ...payload,
                eventId: generatedEventId
            };

            // Fire and forget server-side proxy so we don't hold up the user UI
            fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(submissionData),
            }).catch(e => console.error("Non-fatal CAPI proxy error:", e));
            
            // Trigger 100% Success completion
            setIsSubmitted(true); 
            
            // Fire Meta Pixel 'Lead' Event AFTER confirmation (with Deduplication ID)
            if (typeof window !== "undefined" && window.fbq) {
                window.fbq("track", "Lead", {}, { eventID: generatedEventId });
            }
            
            // GTM DataLayer Intercept Configuration
            if (typeof window !== "undefined") {
                 window.dataLayer = window.dataLayer || [];
                 window.dataLayer.push({
                     event: "generate_lead",
                     currency: "USD",
                     value: 350.00
                 });
                 window.dataLayer.push({ event: "ads_conversion_Form_1" });
            }
        } catch (error) {
            console.error("CRITICAL FORM CRASH:", error);
            alert("Submission failed. Please check your connection or call us.");
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="w-full bg-transparent relative h-full flex flex-col justify-center">
            {isSubmitted ? (
                <SuccessState onReset={() => setIsSubmitted(false)} />
            ) : (
                <div className="p-8 h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-extrabold mb-6 text-navy !text-center !w-full !block">Request a Free Quote</h3>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="sr-only" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                aria-label="Name"
                                autoComplete="name"
                                placeholder="Your Name"
                                className="w-full px-5 py-4 rounded-[28px] border border-gray-200 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-navy transition-all shadow-inner"
                            />
                        </div>
                        <div className="!flex !flex-row !gap-2 !w-full">
                            <div className="flex-1">
                                <label className="sr-only" htmlFor="phone">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    aria-label="Phone"
                                    autoComplete="tel"
                                    placeholder="Phone"
                                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-[28px] border border-gray-200 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base shadow-inner"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="sr-only" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    aria-label="Email"
                                    autoComplete="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-[28px] border border-gray-200 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base shadow-inner"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="squareFootage">Approximate Square Footage</label>
                            <input
                                type="text"
                                id="squareFootage"
                                name="squareFootage"
                                aria-label="Approximate Square Footage"
                                placeholder="Approx. Sq Ft or Number of Windows"
                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-[28px] border border-gray-200 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base mt-2 shadow-inner"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="projectDetails">Project Details & Service Address</label>
                            <textarea
                                id="projectDetails"
                                name="projectDetails"
                                rows={4}
                                required
                                aria-label="Project Details"
                                placeholder="Tell us about your project (e.g., number of windows, roof type) and provide the service address for an accurate quote"
                                className="!w-full !mt-4 px-4 py-3 sm:px-5 sm:py-4 rounded-[28px] border border-gray-200 bg-white/50 backdrop-blur-sm focus:bg-white/90 focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base resize-y min-h-[100px] shadow-inner"
                            />
                        </div>
                        <div>
                            <fieldset>
                                <legend className="text-sm font-bold text-navy mb-2">Services Needed</legend>
                                <div className="grid grid-cols-2 gap-3 mt-1 text-sm text-gray-700">
                                    <label htmlFor="chk-house-washing" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-house-washing" aria-label="House Washing" type="checkbox" name="service" value="house-washing" className="accent-gold w-4 h-4 cursor-pointer" /> House Washing
                                    </label>
                                    <label htmlFor="chk-roof-cleaning" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-roof-cleaning" aria-label="Roof Cleaning" type="checkbox" name="service" value="roof-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Roof Cleaning
                                    </label>
                                    <label htmlFor="chk-window-cleaning" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-window-cleaning" aria-label="Window Cleaning" type="checkbox" name="service" value="window-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Window Cleaning
                                    </label>
                                    <label htmlFor="chk-gutter-cleaning" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-gutter-cleaning" aria-label="Gutter Cleaning" type="checkbox" name="service" value="gutter-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Gutter Cleaning
                                    </label>
                                    <label htmlFor="chk-concrete-cleaning" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-concrete-cleaning" aria-label="Concrete Cleaning" type="checkbox" name="service" value="concrete-cleaning" className="accent-gold w-4 h-4 cursor-pointer" /> Concrete Cleaning
                                    </label>
                                    <label htmlFor="chk-permanent-led" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-permanent-led" aria-label="Permanent LED Lighting" type="checkbox" name="service" value="permanent-led-lighting" className="accent-gold w-4 h-4 cursor-pointer" /> Permanent LED Lighting
                                    </label>
                                    <label htmlFor="chk-commercial" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-commercial" aria-label="Commercial Services" type="checkbox" name="service" value="commercial-services" className="accent-gold w-4 h-4 cursor-pointer" /> Commercial Services
                                    </label>
                                    <label htmlFor="chk-paver-patio-restorations" className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors">
                                        <input id="chk-paver-patio-restorations" aria-label="Paver Patio Restorations" type="checkbox" name="service" value="paver-patio-restorations" className="accent-gold w-4 h-4 cursor-pointer" /> Paver Patio Restorations
                                    </label>
                                </div>
                            </fieldset>
                        </div>
                        <motion.button
                            whileHover={{ scale: isLoading ? 1 : 1.05 }}
                            whileTap={{ scale: isLoading ? 1 : 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            type="submit"
                            disabled={isLoading}
                            className={`w-full text-white font-black tracking-widest text-lg py-5 rounded-[32px] transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.12)] mt-5 ${
                                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gradient-to-r from-navy to-navy-dark hover:shadow-[0_20px_40px_rgba(11,35,65,0.4)]"
                            }`}
                        >
                            {isLoading ? "SENDING..." : "GET QUOTE NOW"}
                        </motion.button>
                    </form>
                </div>
            )}
        </div>
    );
}
