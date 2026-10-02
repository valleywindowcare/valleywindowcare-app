import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import ReviewSlider from '@/components/ReviewSlider';

export const metadata: Metadata = {
    title: "Privacy Policy | Valley Property Services",
    description: "Privacy policy, data collection, and SMS privacy disclosures for Valley Property Services.",
    alternates: {
        canonical: "https://valleyexteriorpros.com/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-24">
            <div className="bg-navy pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-gray-300 font-semibold uppercase tracking-wider mb-6">
                        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-gold" />
                        <span className="text-white">Privacy Policy</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 max-w-4xl">
                <article className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-navy-dark leading-relaxed space-y-8">
                    <div>
                        <p className="text-gray-500 font-semibold mb-6">Last updated: March 2026</p>
                        <p>
                            Thank you for choosing <strong>Valley Property Services</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;). We respect your privacy, and this Privacy Policy explains what information we collect, how we use it, how we protect it, and your rights regarding your personal information when you visit or use our website at <Link href="https://valleyexteriorpros.com" className="text-navy font-bold hover:text-gold underline">https://valleyexteriorpros.com</Link> (the &ldquo;Site&rdquo;) or communicate with us by phone, email, or text message.
                        </p>
                    </div>

                    {/* Dedicated Section for Mobile Information & SMS */}
                    <div className="p-6 bg-slate-50 rounded-2xl border-2 border-gold/40 space-y-3">
                        <div className="flex items-center gap-2 text-navy font-black text-lg">
                            <ShieldCheck size={22} className="text-gold" />
                            <span>Mobile Information &amp; Text Messaging Privacy (10DLC Compliance)</span>
                        </div>
                        <p className="text-sm font-semibold text-navy leading-relaxed">
                            <strong>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.</strong>
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">
                            Any phone numbers collected for SMS communication and opt-in consent records are used strictly by Valley Property Services to communicate directly with you regarding your service inquiries, quotes, appointments, and job updates.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect</h2>
                        <p className="mb-4">
                            We may collect personal and non-personal information from you in several ways, including when you visit our Site, fill out a quote request form, book a service, or otherwise contact us.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Information you provide directly:</strong> Name, phone number, email address, property or service address, approximate square footage, project details, and requested exterior cleaning or lighting services.
                            </li>
                            <li>
                                <strong>Automatically collected information:</strong> IP address, browser type and version, device identifiers, operating system, referring URL, landing page URL, UTM tracking parameters, date/time stamps, and pages visited.
                            </li>
                            <li>
                                <strong>Cookies and tracking technologies:</strong> We use cookies, tracking pixels (such as Google Tag Manager and Meta Pixel), and local storage to measure website performance, remember user preferences, and attribute lead sources.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
                        <p className="mb-3">
                            We collect and use your information exclusively for legitimate business purposes, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Responding to quote requests:</strong> Calculating accurate exterior cleaning and lighting estimates based on property dimensions and customer needs.</li>
                            <li><strong>Scheduling service:</strong> Booking appointments, dispatching service crews, and confirming calendar availability.</li>
                            <li><strong>Sending updates:</strong> Providing order confirmations, appointment reminders, arrival notifications, and project completion photos.</li>
                            <li><strong>Customer support:</strong> Answering inquiries and ensuring satisfaction with our cleaning and restoration work.</li>
                            <li><strong>Analytics and optimization:</strong> Understanding website traffic, campaign performance, and improving our customer experience.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">3. Text Messaging (SMS) &amp; How to Opt Out</h2>
                        <p className="mb-3">
                            If you provide your phone number and opt in to receive text messages from Valley Property Services, we may send you notifications regarding your estimate request, appointment scheduling, and service updates.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Opt-In:</strong> You may opt in to receive text messages through our website quote forms or when requesting service. Consent is optional and is not a condition of purchase.</li>
                            <li><strong>Message Frequency:</strong> Message frequency varies depending on your project status and requests.</li>
                            <li><strong>Rates:</strong> Standard message and data rates may apply depending on your wireless mobile carrier plan.</li>
                            <li><strong>How to Opt Out:</strong> You can cancel SMS messages at any time. <strong>Reply STOP</strong> to any text message from us to be immediately unsubscribed. You may also contact us at (920) 609-7085 or email info@valleyexteriorpros.com to request removal.</li>
                            <li><strong>Assistance:</strong> Reply <strong>HELP</strong> for assistance, or call us directly at (920) 609-7085.</li>
                            <li>For complete SMS program terms, please view our <Link href="/sms-terms" className="text-navy font-bold hover:text-gold underline">SMS Terms &amp; Conditions</Link>.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">4. Sharing &amp; Disclosure of Information</h2>
                        <p className="mb-3">
                            We do not sell, rent, or trade your personal information. We only share information with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong>Service providers:</strong> Trusted third-party service providers who assist in operating our website, scheduling software, or customer communications, strictly under confidentiality agreements.
                            </li>
                            <li>
                                <strong>Legal obligations:</strong> When required by applicable law, regulation, subpoena, or government authority.
                            </li>
                            <li>
                                <strong>Important mobile data notice:</strong> As stated above, no mobile information or SMS opt-in consent data will be shared with third parties or affiliates for marketing or promotional purposes.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">5. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and local storage to maintain session data, analyze site traffic, and track lead referral sources (such as UTM parameters and ad identifiers like gclid/fbclid) for up to 90 days. You may control cookie preferences through your browser settings.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">6. Data Security &amp; Retention</h2>
                        <p>
                            We maintain standard organizational and technical security measures to protect your personal information from unauthorized access, alteration, or disclosure. We retain your information as long as necessary to provide requested services, maintain business records, and satisfy legal obligations.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">7. Your Privacy Rights</h2>
                        <p>
                            You have the right to request access to, correction of, or deletion of your personal data. You may opt out of future communications at any time. To make a privacy request, please contact us using the information below.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">8. Contact Us</h2>
                        <p className="mb-4">If you have questions about this Privacy Policy or our data practices, please contact us:</p>
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
