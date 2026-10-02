import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "SMS Terms & Conditions | Valley Property Services",
    description: "SMS and text messaging terms and conditions for Valley Property Services customer notifications.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/sms-terms",
    },
};

export default function SmsTermsPage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <div className="bg-navy pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold uppercase tracking-wider mb-6">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-gold" />
                        <span className="text-white">SMS Terms</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">SMS Terms &amp; Conditions</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 max-w-4xl">
                <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-navy-dark leading-relaxed space-y-8">
                    <div>
                        <p className="text-gray-500 font-semibold mb-6">Effective Date: March 2026</p>
                        <p>
                            These SMS Terms &amp; Conditions govern text messaging services provided by <strong>Valley Property Services</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). By opting in to receive SMS messages from Valley Property Services, you agree to these terms.
                        </p>
                    </div>

                    {/* Program Information Overview Card */}
                    <div className="p-6 bg-slate-50 rounded-2xl border border-gold/40 space-y-3">
                        <div className="flex items-center gap-2 text-navy font-black text-lg">
                            <MessageSquare size={22} className="text-gold" />
                            <span>Program Overview</span>
                        </div>
                        <ul className="text-sm space-y-2 text-gray-800">
                            <li><strong>Program Name:</strong> Valley Property Services quote and service notifications</li>
                            <li><strong>Description:</strong> Texts about quote requests, estimates, appointment scheduling and service updates.</li>
                            <li><strong>Frequency:</strong> Message frequency varies based on customer interaction and active service status.</li>
                            <li><strong>Cost:</strong> Message and data rates may apply.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">1. Program Description</h2>
                        <p className="mb-3">
                            When you request a quote or book an exterior cleaning or lighting service through our website, you have the option to receive SMS notifications. Our SMS program delivers:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Instant confirmations and responses to your estimate requests.</li>
                            <li>Detailed digital quote links and estimate reviews.</li>
                            <li>Appointment confirmations, scheduling reminders, and crew arrival alerts.</li>
                            <li>Direct customer service follow-ups regarding your cleaning project.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">2. Message Frequency</h2>
                        <p>
                            Message frequency varies based on your requests and appointment activity. We only send transactional and service-related messages pertinent to your specific quote or scheduled work.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">3. Rates &amp; Charges</h2>
                        <p>
                            Valley Property Services does not charge for sending or receiving text messages; however, <strong>message and data rates may apply</strong> based on your wireless carrier service plan. Please check with your mobile service provider for pricing details.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">4. How to Opt Out (Cancellation)</h2>
                        <p className="mb-3">
                            You may opt out of our text messaging program at any time:
                        </p>
                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 text-sm">
                            <p className="font-semibold text-navy">
                                <strong>Reply STOP</strong> to any text message from Valley Property Services to cancel.
                            </p>
                            <p className="text-gray-600 mt-1">
                                After sending STOP, you will receive a single confirmation message confirming that you have been unsubscribed. No further text messages will be sent to your mobile device unless you explicitly opt back in.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">5. How to Get Help or Support</h2>
                        <p className="mb-3">
                            If you encounter any issues or require assistance with our messaging program:
                        </p>
                        <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 text-sm">
                            <p className="font-semibold text-navy">
                                <strong>Reply HELP</strong> to any text message for customer support, or contact us directly:
                            </p>
                            <ul className="mt-2 space-y-1 text-gray-700">
                                <li><strong>Phone:</strong> <a href="tel:920-609-7085" className="font-bold hover:text-gold">(920) 609-7085</a></li>
                                <li><strong>Email:</strong> <a href="mailto:info@valleyexteriorpros.com" className="font-bold hover:text-gold">info@valleyexteriorpros.com</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">6. Carrier Disclaimer</h2>
                        <p>
                            <strong>Carriers are not liable for delayed or undelivered messages.</strong> Delivery of mobile messages is subject to effective transmission from your mobile network provider.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">7. Privacy &amp; Data Protection</h2>
                        <p className="mb-3">
                            Your privacy is paramount. Please review our <Link href="/privacy-policy" className="text-navy font-bold hover:text-gold underline">Privacy Policy</Link> for full details on how we safeguard your personal data.
                        </p>
                        <p className="text-sm font-semibold text-navy bg-slate-50 p-4 rounded-xl border border-gray-200">
                            No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">8. Contact Information</h2>
                        <div className="bg-slate-50 p-6 rounded-2xl border border-gray-200 space-y-2 text-sm">
                            <p className="font-bold text-navy text-base">Valley Property Services</p>
                            <div className="flex items-center gap-2 text-gray-700">
                                <MapPin size={16} className="text-gold shrink-0" />
                                <span>462 S Good Hope Rd, De Pere, WI 54115</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Phone size={16} className="text-gold shrink-0" />
                                <a href="tel:920-609-7085" className="hover:text-gold font-semibold">(920) 609-7085</a>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                                <Mail size={16} className="text-gold shrink-0" />
                                <a href="mailto:info@valleyexteriorpros.com" className="hover:text-gold font-semibold">info@valleyexteriorpros.com</a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <ReviewSlider />
        </main>
    );
}
