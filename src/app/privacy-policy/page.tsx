import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Privacy Policy | Valley Window Care",
    description: "Privacy policy and data collection practices for Valley Window Care and Exterior Cleaning.",
    robots: {
        index: false,
        follow: true,
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
                        <p className="text-gray-500 font-semibold mb-6">Last updated: October 2, 2025</p>
                        <p>Thank you for choosing Valley Window Care (“we,” “us,” “our”). We respect your privacy, and this Privacy Policy explains what information we collect, how we use it, and your rights regarding that information when you visit or use our website at https://valleywindowcare.com (the “Site”).</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect</h2>
                        <p className="mb-4">We may collect personal and non-personal information from you in several ways, including when you visit the Site, fill out forms, request a quote, subscribe to communications, or otherwise interact with us.</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>a) Information you provide directly:</strong> Name, Email address, Phone number, Physical or service address, Messages, comments, or other content you submit, Billing / payment information (if applicable).</li>
                            <li><strong>b) Automatically collected information:</strong> IP address, Browser type and version, Operating system, Referring/exit pages, Pages viewed, time & date stamps, clicks, navigation paths, Device identifiers and technical data, Cookies, tracking pixels, and similar technologies.</li>
                            <li><strong>c) Information from third parties:</strong> We may receive information about you from third parties (for example, analytics, advertising, or marketing partners).</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Your Information</h2>
                        <p>We use your information for: Responding to inquiries, requests, and quotes; Performing and delivering services; Customer communication and support; Marketing and promotions (with your consent); Analytics and site improvement; Security, fraud detection, and compliance.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">3. Cookies and Tracking Technologies</h2>
                        <p>We use cookies to remember preferences, track site usage, and improve performance. You can control or disable cookies in your browser settings, but some features may not function properly without them.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">4. Sharing & Disclosure of Information</h2>
                        <p className="mb-4">We do not sell your personal information. We may share data with:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Service providers and contractors (e.g., hosting, analytics, payment processing).</li>
                            <li>Legal authorities if required by law.</li>
                            <li>In the event of a merger, acquisition, or transfer of assets.</li>
                            <li>Aggregated or anonymized data that cannot identify you.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">5. Third-Party Links</h2>
                        <p>Our Site may contain links to third-party websites or tools. Those have their own privacy policies, and we are not responsible for their practices.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">6. Security</h2>
                        <p>We use reasonable measures to protect your information, but no online transmission or storage is 100% secure.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">7. Retention of Data</h2>
                        <p>We retain your information as long as necessary for business, legal, or compliance purposes. Data no longer needed will be securely deleted or anonymized.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">8. Your Rights & Choices</h2>
                        <p>Depending on your location, you may have rights to: Access and receive a copy of your data; Correct or update your data; Request deletion of your data; Restrict or object to processing; Opt out of marketing communications. To exercise your rights, please contact us.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">9. Children’s Privacy</h2>
                        <p>Our Site and services are not directed to children under 13, and we do not knowingly collect data from children.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">10. International Transfers</h2>
                        <p>If you access our Site from outside the U.S., your data may be transferred to servers in the U.S. or other jurisdictions.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">11. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. The “Last updated” date will reflect changes. Your continued use after updates means you accept the revised policy.</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-navy mb-4">12. Contact Us</h2>
                        <p className="mb-4">If you have questions about this Privacy Policy, contact us at:</p>
                        <p className="font-semibold">Valley Window Care</p>
                        <ul className="space-y-1">
                            <li><strong>Email:</strong> James@ValleyWindowCare.com</li>
                            <li><strong>Phone:</strong> (920) 609-7085</li>
                            <li><strong>Address:</strong> 4551 Trellis Drive E-2, De Pere, Wisconsin 54115</li>
                        </ul>
                    </div>
                </article>
            </div>
        </main>
    );
}
