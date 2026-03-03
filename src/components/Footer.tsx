import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import FooterGalleryImage from "./FooterGalleryImage";

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-gray-200">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

                    {/* Column 1: Brand & Bio */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="relative h-14 w-56 mb-6">
                            <Image
                                src="/valley-window-care-logo-without-background.png"
                                alt="Valley Window Care and Exterior Cleaning"
                                fill
                                className="object-contain object-center md:object-left"
                            />
                        </div>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-sm">
                            Discover why Valley Window Care and Exterior Cleaning is the trusted name in Wisconsin for professional window, roof, and permanent LED lighting services.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" aria-label="Visit Valley Window Care on Facebook" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors hover:scale-110 active:scale-95 duration-200">
                                <Facebook size={18} />
                            </a>
                            <a href="#" aria-label="Visit Valley Window Care on Instagram" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors hover:scale-110 active:scale-95 duration-200">
                                <Instagram size={18} />
                            </a>
                            <a href="#" aria-label="Visit Valley Window Care on YouTube" className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center hover:bg-gold transition-colors hover:scale-110 active:scale-95 duration-200">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Core Services */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Core Services</h3>
                        <ul className="space-y-3 font-semibold text-navy">
                            <li>
                                <Link href="/roof-cleaning-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Roof Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/house-washing-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    House Washing
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/gutter-cleaning-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Gutter Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/fence-cleaning-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Fence Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/deck-cleaning-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Deck Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/concrete-cleaning-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Concrete Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/window-cleaning-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Window Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/oxidation-removal-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Oxidation Removal
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/permanent-led-lighting-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Commercial LED Lighting
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/residential-permanent-led-lighting-green-bay-wi" className="hover:text-gold transition-colors inline-block relative group">
                                    Residential Permanent LED Lighting
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/hoa-multi-unit-cleaning" className="hover:text-gold transition-colors inline-block relative group">
                                    HOA / Multi-Unit Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/commercial-hood-cleaning" className="hover:text-gold transition-colors inline-block relative group">
                                    Commercial Hood Cleaning
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Get In Touch */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="tel:920-609-7085" aria-label="Call Valley Window Care at (920) 609-7085" className="flex items-center gap-3 text-navy font-bold hover:text-gold transition-colors group" rel="nofollow">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                        <Phone size={14} className="text-navy group-hover:text-gold transition-colors" />
                                    </div>
                                    (920) 609-7085
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@valleywindowcare.com" aria-label="Email info@valleywindowcare.com" className="flex items-center gap-3 text-navy font-bold hover:text-gold transition-colors group" rel="nofollow">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                                        <Mail size={14} className="text-navy group-hover:text-gold transition-colors" />
                                    </div>
                                    <span className="text-sm">info@valleywindowcare.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-start gap-3 text-navy font-bold">
                                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                                        <MapPin size={14} className="text-navy" />
                                    </div>
                                    <span className="text-sm leading-tight mt-1.5">Appleton & Green Bay,<br />Wisconsin</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Legal & Resources */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Legal & Trust</h3>
                        <ul className="space-y-3 font-semibold text-navy">
                            <li>
                                <Link href="/service-guarantee" className="hover:text-gold transition-colors inline-block relative group">
                                    Service Guarantee
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-and-conditions" className="hover:text-gold transition-colors inline-block relative group">
                                    Terms & Conditions
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="hover:text-gold transition-colors inline-block relative group">
                                    Privacy Policy
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li className="pt-2">
                                <a
                                    href="https://www.google.com/search?q=valley+window+care+&sca_esv=507a868014978926&ei=3eWlacP0Kc2uqtsP0LSU8Qc&biw=1772&bih=1173&ved=0ahUKEwiD1-e1-oGTAxVNl2oFHVAaJX4Q4dUDCBE&uact=5&oq=valley+window+care+&gs_lp=Egxnd3Mtd2l6LXNlcnAiE3ZhbGxleSB3aW5kb3cgY2FyZSAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHki4HlAAWJoRcAB4AZABAZgB3wKgAbAVqgEIMC4xOC4wLjG4AQPIAQD4AQGYAhKgAp4TwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAgUQLhiABMICBRAAGIAEwgIIEAAYgAQYsQPCAiAQLhiABBiRAhjRAxjHARiKBRiXBRjcBBjeBBjgBNgBAcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAg0QLhiABBixAxhDGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICCxAuGIAEGNEDGMcBwgIOEC4YgAQYxwEYjgUYrwHCAg0QABiABBixAxhDGIoFwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBiRAhiKBcICERAuGIAEGLEDGIMBGMcBGK8BwgIHEAAYgAQYCsICCRAAGIAEGAoYC8ICCBAAGIAEGMkDwgIIEAAYFhgKGB7CAgIQJpgDALoGBggBEAEYFJIHBDAuMTigB_GFArIHBDAuMTi4B54TwgcGMC43LjExyAc7gAgA&sclient=gws-wiz-serp&zx=1772479974803&no_sw_cr=1#lrd=0x8802f7860e31a465:0xc422a0d3f9df71ea,1,,,,"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gold font-bold hover:text-navy hover:underline transition-colors lg:whitespace-nowrap inline-flex items-center gap-1"
                                >
                                    Leave Your Review Here &rarr;
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Photo Gallery Grid */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Recent Work</h3>
                        <div className="grid grid-cols-2 gap-2 w-full max-w-[240px]">
                            <Link href="/services/commercial-hood-cleaning" aria-label="View Commercial Hood Cleaning" className="relative aspect-square rounded-lg overflow-hidden group block">
                                <FooterGalleryImage src="/gallery/footer-assets/footer_hood_cleaning_1772481113171.png" alt="Commercial Hood Cleaning Results - Valley Window Care" />
                            </Link>
                            <Link href="/services/roof-cleaning" aria-label="View Roof Cleaning" className="relative aspect-square rounded-lg overflow-hidden group block">
                                <FooterGalleryImage src="/gallery/footer-assets/footer_roof_cleaning_1772481126835.png" alt="Roof Cleaning Results - Valley Window Care" />
                            </Link>
                            <Link href="/services/window-cleaning" aria-label="View Window Cleaning" className="relative aspect-square rounded-lg overflow-hidden group block">
                                <FooterGalleryImage src="/gallery/footer-assets/footer_window_cleaning_1772481140215.png" alt="Window Cleaning Results - Valley Window Care" />
                            </Link>
                            <Link href="/services/house-washing" aria-label="View House Washing" className="relative aspect-square rounded-lg overflow-hidden group block">
                                <FooterGalleryImage src="/gallery/footer-assets/footer_house_washing_1772481154476.png" alt="House Washing Results - Valley Window Care" />
                            </Link>
                            <Link href="/services/commercial-exterior-cleaning" aria-label="View Commercial Pressure Washing" className="relative aspect-square rounded-lg overflow-hidden group block">
                                <FooterGalleryImage src="/gallery/footer-assets/footer_pressure_washing_1772481170028.png" alt="Pressure Washing Results - Valley Window Care" />
                            </Link>
                            <Link href="/services/permanent-holiday-lighting" aria-label="View Permanent LED Lighting" className="relative aspect-square rounded-lg overflow-hidden group block">
                                <FooterGalleryImage src="/gallery/footer-assets/footer_led_lighting_1772481182471.png" alt="Permanent LED Lighting Results - Valley Window Care" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Proudly Serving Section (Phase 99 Local SEO Anchors) */}
            <div className="border-t border-gray-200 py-12 text-center mt-4 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h3 className="text-navy font-bold uppercase tracking-widest text-sm mb-6">Proudly Serving Northeast Wisconsin</h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-sm text-gray-600 font-medium">
                        {[
                            "Green Bay", "Appleton", "De Pere", "Neenah", "Menasha",
                            "Kaukauna", "Oshkosh", "Howard", "Suamico", "Allouez",
                            "Ashwaubenon", "Bellevue", "Door County", "Fish Creek",
                            "Sturgeon Bay", "Shawano", "Manitowoc", "Ledgeview",
                            "Hobart", "Egg Harbor", "Sister Bay", "Greenville",
                            "Sherwood", "Combined Locks"
                        ].map((city, index, array) => (
                            <div key={city} className="flex items-center gap-x-4">
                                <Link
                                    href={`/service-areas/${city.toLowerCase().replace(/ /g, '-')}`}
                                    className="hover:text-gold transition-colors whitespace-nowrap"
                                >
                                    {city}
                                </Link>
                                {index < array.length - 1 && <span className="text-gray-300">|</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Copyright Ribbon */}
            <div className="bg-navy py-6 border-t border-navy-dark">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; 2026 Valley Window Care and Exterior Cleaning. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
