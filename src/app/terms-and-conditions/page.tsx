import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "Terms and Conditions | Valley Window Care",
    description: "Terms and conditions for usage of Valley Window Care and Exterior Cleaning services.",
};

export default function TermsAndConditionsPage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <div className="bg-navy pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold uppercase tracking-wider mb-6">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-gold" />
                        <span className="text-white">Terms & Conditions</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">Terms & Conditions</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 max-w-4xl">
                <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-navy-dark leading-relaxed space-y-8">
                    <div>
                        <p className="text-gray-500 font-semibold mb-6">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        <p>These terms and conditions outline the rules and regulations for the use of Valley Window Care and Exterior Cleaning's Website and Professional Services. By accessing this website and booking our services, we assume you accept these terms and conditions.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">1. Estimate & Quoting Process</h2>
                        <p>All quotes provided remotely (via phone, email, or digital form) are estimates based on the information provided. Final pricing is subject to on-site verification. We reserve the right to amend the price if the scope of work significantly differs from the original description.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">2. Scheduling & Weather Dependability</h2>
                        <p>Exterior cleaning services are weather-dependent. While we strive to adhere strictly to scheduled appointments, we reserve the right to reschedule services due to rain, high winds, freezing temperatures, or other unsafe conditions without penalty.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">3. Property Preparation</h2>
                        <p>Customers are required to ensure all windows are fully closed, delicate items are securely moved away from the exterior, and external power sources are accessible if necessary. Valley Window Care is not liable for water intrusion due to faulty or open weather stripping and window seals.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">4. Payment Terms</h2>
                        <p>Payment is due upon completion of the service unless prior arrangements have been made. We accept major credit cards, checks, and digital payments. Late payments may be subject to additional fees.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">5. Liability & Damage</h2>
                        <p>Valley Window Care is fully insured. While we take the utmost care in executing our services, we are not responsible for pre-existing damage, localized flaking paint, or degraded surfaces that may be revealed or exacerbated during standard cleaning processes.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">6. Intellectual Property</h2>
                        <p>Unless otherwise stated, Valley Window Care owns the intellectual property rights for all material on this website, including photographs of completed jobs. You may not republish, sell, or reproduce content from this site without explicit permission.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">7. Modifications to the Service</h2>
                        <p>We reserve the right to modify or discontinue, temporarily or permanently, the services (or any part thereof) with or without notice.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">8. Contact Information</h2>
                        <p className="mb-4">For any inquiries regarding these terms, please contact us directly:</p>
                        <p className="font-semibold">Valley Window Care</p>
                        <ul className="space-y-1">
                            <li><strong>Email:</strong> James@ValleyWindowCare.com</li>
                            <li><strong>Phone:</strong> (920) 609-7085</li>
                            <li><strong>Address:</strong> 4551 Trellis Drive E-2, De Pere, Wisconsin 54115</li>
                        </ul>
                    </div>
                </article>
            </div>
            <ReviewSlider />
        </main>
    );
}
