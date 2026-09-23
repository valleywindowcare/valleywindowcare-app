"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { trackLeadConversion } from "@/lib/gtag";
import { Upload, X, Camera, ShieldCheck, Sparkles } from "lucide-react";

declare global {
  interface Window {
    gtag: any;
    fbq: any;
    oaiq: any;
    dataLayer: any[];
  }
}

interface LightingQuoteFormProps {
    idPrefix?: string;
}

export default function LightingQuoteForm({ idPrefix = "lighting" }: LightingQuoteFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const prefix = idPrefix ? `${idPrefix}-` : "";

    const handleFileSelection = (fileList: FileList | null) => {
        if (!fileList) return;
        const newFiles = Array.from(fileList).filter((file) => {
            // Validate image files under 10MB
            const isImage = file.type.startsWith("image/");
            const isUnder10MB = file.size <= 10 * 1024 * 1024;
            return isImage && isUnder10MB;
        });

        setSelectedFiles((prev) => {
            // Keep up to 4 photos
            const combined = [...prev, ...newFiles];
            return combined.slice(0, 4);
        });
    };

    const handleRemoveFile = (indexToRemove: number) => {
        setSelectedFiles((prev) => prev.filter((_, idx) => idx !== indexToRemove));
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const safeName = formData.get("name")?.toString().trim() || "Unknown User";
        const safePhone = formData.get("phone")?.toString().trim() || "Not Provided";
        const safeEmail = formData.get("email")?.toString().trim() || "";
        const safeAddress = formData.get("address")?.toString().trim() || "";
        const safeFootage = formData.get("footage")?.toString().trim() || "Not Sure / Please Measure for Me";
        const safeNotes = formData.get("notes")?.toString().trim() || "";

        if (!safeAddress) {
            alert("Property address is required for satellite roofline measurement.");
            setIsLoading(false);
            return;
        }

        try {
            // Generate a secure UUID for Meta & GTM Event Deduplication
            const generatedEventId = crypto.randomUUID();

            // 1. Submit via Web3Forms with multipart FormData support for attachments
            const web3FormData = new FormData();
            web3FormData.append("access_key", "c8727880-065b-4c99-9190-7f4a13170752");
            web3FormData.append(
                "subject",
                `🚨 [LIGHTING DESIGN & ESTIMATE] NEW LEAD: ${safeName} (${safeAddress}) - Valley Property Services`
            );
            web3FormData.append("from_name", "Valley Property Services Lighting Design Form");
            web3FormData.append("replyto", safeEmail || "info@valleyexteriorpros.com");
            web3FormData.append("name", safeName);
            web3FormData.append("email", safeEmail);
            web3FormData.append("phone", safePhone);
            web3FormData.append("address", safeAddress);
            web3FormData.append("property_address", safeAddress);
            web3FormData.append("estimated_linear_footage", safeFootage);
            web3FormData.append("service", "Permanent LED Lighting Installation");
            web3FormData.append("services", "Permanent LED Lighting");
            web3FormData.append(
                "message",
                `Service: Permanent LED Lighting Installation\nEstimated Linear Footage / Home Size: ${safeFootage}\n${
                    safeNotes ? `Special Notes / Track Color: ${safeNotes}\n` : ""
                }${selectedFiles.length > 0 ? `Attached Photos: ${selectedFiles.length} file(s)\n` : ""}`
            );

            // Append attached home photos for Web3Forms email dispatch
            if (selectedFiles.length > 0) {
                selectedFiles.forEach((file) => {
                    web3FormData.append("attachment", file);
                });
            }

            const web3Response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    // NOTE: Do not set Content-Type header to allow browser to calculate boundary
                },
                body: web3FormData,
            });

            const web3Result = await web3Response.json();

            if (!web3Response.ok || !web3Result.success) {
                console.error("WEB3FORMS LIGHTING ERROR:", web3Result);
                alert("Submission issue: " + (web3Result.message || "Please call us directly at (920) 609-7085."));
                setIsLoading(false);
                return;
            }

            // 2. Fire CAPI Server Proxy for backend Meta deduplication logging
            const submissionData = {
                name: safeName,
                email: safeEmail,
                phone: safePhone,
                address: safeAddress,
                squareFootage: safeFootage,
                projectDetails: `Permanent LED Lighting Request - Roofline: ${safeFootage}${
                    safeNotes ? `. Notes: ${safeNotes}` : ""
                }${selectedFiles.length > 0 ? ` (${selectedFiles.length} photo(s) attached)` : ""}`,
                servicesRequested: "Permanent LED Lighting",
                eventId: generatedEventId,
            };

            fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(submissionData),
            }).catch((e) => console.error("Non-fatal CAPI proxy error:", e));

            // 3. Fire Meta Pixel 'Lead' Event AFTER confirmation
            if (typeof window !== "undefined" && window.fbq) {
                window.fbq(
                    "track",
                    "Lead",
                    {
                        content_name: "Permanent LED Lighting Design & Estimate",
                        content_category: "Permanent LED Lighting",
                        value: 1500.0,
                        currency: "USD",
                    },
                    { eventID: generatedEventId }
                );
            }

            // 4. Fire OpenAI Conversion Event
            if (typeof window !== "undefined" && window.oaiq) {
                window.oaiq("measure", "lead_created", { type: "customer_action" }, { event_id: generatedEventId });
            }

            // 5. GTM DataLayer Intercept Configuration
            if (typeof window !== "undefined") {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    event: "generate_lead",
                    event_id: generatedEventId,
                    currency: "USD",
                    value: 1500.0,
                    email: safeEmail,
                    phone: safePhone,
                    address: safeAddress,
                    firstName: safeName.split(" ")[0] || safeName,
                    lastName: safeName.includes(" ") ? safeName.substring(safeName.indexOf(" ") + 1) : "",
                    country: "US",
                    services: "Permanent LED Lighting",
                    linearFootage: safeFootage,
                });
                window.dataLayer.push({ event: "ads_conversion_Form_1" });
            }

            // 6. Explicitly fire the trackLeadConversion helper
            trackLeadConversion(generatedEventId);

            // 7. Route to success page
            router.push("/quote/success");
        } catch (error) {
            console.error("CRITICAL LIGHTING FORM CRASH:", error);
            alert("Submission failed. Please check your connection or call us at (920) 609-7085.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full bg-transparent relative flex flex-col justify-center">
            <div className="p-4 sm:p-7 flex flex-col justify-center">
                {/* Dedicated Lighting Header */}
                <div className="text-center mb-5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-navy font-bold text-xs uppercase tracking-wider mb-2">
                        <Sparkles size={14} className="text-gold" />
                        <span>Omni Smart Track™ Estimate</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-navy tracking-tight">
                        Request a Lighting Design &amp; Estimate
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md mx-auto">
                        Enter your property address below for a satellite roofline measurement and custom digital rendering.
                    </p>
                </div>

                <form className="space-y-3.5" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                        <label className="sr-only" htmlFor={`${prefix}name`}>Full Name</label>
                        <input
                            type="text"
                            id={`${prefix}name`}
                            name="name"
                            required
                            aria-label="Full Name"
                            autoComplete="name"
                            placeholder="Full Name *"
                            className="w-full px-4 py-3 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base shadow-inner placeholder:text-gray-400"
                        />
                    </div>

                    {/* Phone & Email side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
                        <div>
                            <label className="sr-only" htmlFor={`${prefix}phone`}>Phone</label>
                            <input
                                type="tel"
                                id={`${prefix}phone`}
                                name="phone"
                                required
                                aria-label="Phone Number"
                                autoComplete="tel"
                                placeholder="Phone Number *"
                                className="w-full px-4 py-3 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base shadow-inner placeholder:text-gray-400"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor={`${prefix}email`}>Email</label>
                            <input
                                type="email"
                                id={`${prefix}email`}
                                name="email"
                                required
                                aria-label="Email Address"
                                autoComplete="email"
                                placeholder="Email Address *"
                                className="w-full px-4 py-3 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base shadow-inner placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    {/* Property Address (for satellite roofline measurement) */}
                    <div>
                        <label className="sr-only" htmlFor={`${prefix}address`}>
                            Property Address (for satellite roofline measurement)
                        </label>
                        <input
                            type="text"
                            id={`${prefix}address`}
                            name="address"
                            required
                            aria-label="Property Address (for satellite roofline measurement)"
                            autoComplete="street-address"
                            placeholder="Property Address (for satellite roofline measurement) *"
                            className="w-full px-4 py-3 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base shadow-inner placeholder:text-gray-400"
                        />
                    </div>

                    {/* Estimated Linear Footage / Home Size dropdown */}
                    <div>
                        <label htmlFor={`${prefix}footage`} className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5 text-left">
                            Estimated Linear Footage / Home Size <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                id={`${prefix}footage`}
                                name="footage"
                                required
                                defaultValue=""
                                className="w-full px-4 py-3 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy transition-all text-sm sm:text-base shadow-inner text-gray-800 appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Select estimated roofline length / home size...</option>
                                <option value="Single-Story Front Eaves (~75–125 ft)">Single-Story Front Eaves (~75–125 ft)</option>
                                <option value="Two-Story Front & Gables (~125–225 ft)">Two-Story Front &amp; Gables (~125–225 ft)</option>
                                <option value="Full Perimeter / Large Estate (225+ ft)">Full Perimeter / Large Estate (225+ ft)</option>
                                <option value="Commercial Storefront">Commercial Storefront</option>
                                <option value="Not Sure / Please Measure for Me">Not Sure / Please Measure for Me</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Optional Photo Upload */}
                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label htmlFor={`${prefix}file-input`} className="block text-xs font-bold text-navy uppercase tracking-wider text-left">
                                Home Photos <span className="text-gray-400 font-normal lowercase">(Optional)</span>
                            </label>
                            {selectedFiles.length > 0 && (
                                <span className="text-[11px] font-semibold text-emerald-600">
                                    {selectedFiles.length} photo{selectedFiles.length > 1 ? "s" : ""} ready
                                </span>
                            )}
                        </div>

                        <div
                            onDragOver={(e) => {
                                e.preventDefault();
                                setIsDragOver(true);
                            }}
                            onDragLeave={() => setIsDragOver(false)}
                            onDrop={(e) => {
                                e.preventDefault();
                                setIsDragOver(false);
                                handleFileSelection(e.dataTransfer.files);
                            }}
                            onClick={() => fileInputRef.current?.click()}
                            className={`border-2 border-dashed rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center cursor-pointer transition-all ${
                                isDragOver
                                    ? "border-gold bg-gold/10"
                                    : "border-gray-300 hover:border-gold/70 bg-slate-50/70 hover:bg-gold/5"
                            }`}
                        >
                            <input
                                ref={fileInputRef}
                                type="file"
                                id={`${prefix}file-input`}
                                accept="image/*"
                                multiple
                                onChange={(e) => handleFileSelection(e.target.files)}
                                className="hidden"
                            />

                            <div className="flex flex-col items-center justify-center gap-1.5">
                                <div className="p-2 rounded-full bg-white shadow-xs text-navy">
                                    <Camera size={20} className="text-navy" />
                                </div>
                                <p className="text-xs sm:text-sm font-semibold text-gray-700">
                                    Upload front/side exterior photos of your home for a fast digital mock-up.
                                </p>
                                <p className="text-[11px] text-gray-400">
                                    Click or drag photos here (PNG, JPG, HEIC up to 10MB)
                                </p>
                            </div>
                        </div>

                        {/* Selected Files Preview List */}
                        {selectedFiles.length > 0 && (
                            <div className="mt-2 space-y-1.5">
                                {selectedFiles.map((file, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center justify-between bg-slate-100/80 px-3 py-1.5 rounded-lg text-xs text-gray-700"
                                    >
                                        <span className="truncate max-w-[240px] font-medium">{file.name}</span>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleRemoveFile(idx);
                                            }}
                                            className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            aria-label="Remove photo"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Optional Notes */}
                    <div>
                        <label className="sr-only" htmlFor={`${prefix}notes`}>
                            Notes / Track Color Preference
                        </label>
                        <input
                            type="text"
                            id={`${prefix}notes`}
                            name="notes"
                            placeholder="Track color preference or roofline notes (Optional)"
                            className="w-full px-4 py-2.5 rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy transition-all text-xs sm:text-sm shadow-inner placeholder:text-gray-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        viewport={{ once: true }}
                        whileHover={{ scale: isLoading ? 1 : 1.02 }}
                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        type="submit"
                        disabled={isLoading}
                        className={`w-full text-white font-extrabold tracking-wide text-sm sm:text-base py-3.5 sm:py-4 rounded-xl sm:rounded-[28px] transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] mt-3 cursor-pointer ${
                            isLoading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-gradient-to-r from-navy via-[#1B365D] to-navy-dark hover:from-[#234574] hover:to-navy hover:shadow-[0_20px_40px_rgba(27,54,93,0.4)]"
                        }`}
                    >
                        {isLoading ? "Preparing Your Estimate..." : "Get My Custom Lighting Mock-Up & Estimate"}
                    </motion.button>

                    {/* Micro Trust Bar */}
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] text-gray-500 font-medium">
                        <span className="inline-flex items-center gap-1">
                            <ShieldCheck size={13} className="text-emerald-600" /> Certified Omni Installers
                        </span>
                        <span>•</span>
                        <span>🛰️ Free Satellite Measurement</span>
                        <span>•</span>
                        <span>🔒 100% Privacy Protected</span>
                    </div>
                </form>
            </div>
        </div>
    );
}
