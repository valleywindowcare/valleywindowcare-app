"use client";

import { useState } from "react";
import SuccessState from "./SuccessState";

declare global {
  interface Window {
    gtag: any;
    fbq: any;
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
            
            // Fire Google Analytics Conversion Event AFTER confirmation
            if (typeof window !== "undefined" && window.gtag) {
                 window.gtag("event", "generate_lead", {
                   currency: "USD",
                   value: 350.00
                 });
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
                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all"
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
                                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all text-sm sm:text-base"
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
                                    className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all text-sm sm:text-base"
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
                                className="w-full px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all text-sm sm:text-base mt-2"
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
                                className="!w-full !mt-4 px-4 py-3 sm:px-5 sm:py-4 rounded-2xl border border-gray-200 bg-white/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold transition-all text-sm sm:text-base resize-y min-h-[100px]"
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
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-md mt-2 ${
                                isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-gold hover:bg-gold-light hover:shadow-xl hover:-translate-y-1"
                            }`}
                        >
                            {isLoading ? "SENDING..." : "GET QUOTE NOW"}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
