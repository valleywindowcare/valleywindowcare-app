"use client"
import Link from "next/link";
import { Phone, Mail, Menu, ChevronDown, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isTransparent = pathname === '/contact';

    const headerClasses = isTransparent
        ? "absolute top-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/20 shadow-sm w-full h-auto py-2 md:py-3"
        : "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm w-full h-auto py-2 md:py-3";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
    return (
        <header className={headerClasses}>
            <div className="container mx-auto px-4 flex items-center justify-between min-h-[56px] md:min-h-[80px]">

                {/* Mobile Menu Toggle (Right on mobile, Hidden on desktop) */}
                <button
                    className="xl:hidden text-navy p-2 hover:bg-slate-50 rounded-lg transition-colors z-50 absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Spacer (Props up the h-auto header when Logo drops absolute) */}
                <div className="h-14 md:h-20 w-0 xl:hidden"></div>

                {/* Logo Section */}
                <Link href="/" aria-label="Home" className="flex-shrink-0 hover:opacity-90 transition-opacity z-50 py-1 absolute left-1/2 -translate-x-1/2 xl:relative xl:left-auto xl:translate-x-0">
                    <div className="relative h-14 md:h-20 w-48 md:w-64">
                        <Image
                            src="/valley-window-care-logo-without-background.png"
                            alt="Valley Window Care and Exterior Cleaning logo - Professional exterior cleaning services in Wisconsin"
                            width={250}
                            height={92}
                            className="object-contain object-center xl:object-left w-full h-full"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex gap-x-4 2xl:gap-x-8 items-center text-sm lg:text-base font-bold text-navy-dark tracking-wide pl-8 lg:pl-16">
                    {/* Services Mega Menu */}
                    <div className="relative group py-8 cursor-pointer">
                        <div className="hover:text-gold transition-colors flex items-center gap-1 uppercase">
                            Services <ChevronDown size={14} className="text-gray-400 group-hover:text-gold transition-colors" />
                        </div>

                        {/* Dropdown Container */}
                        <div className="absolute top-[80px] -left-24 w-[600px] bg-white shadow-2xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex flex-col z-50 overflow-hidden">
                            <div className="flex p-6">
                                {/* Residential Column */}
                                <div className="flex-1 pr-6 border-r border-gray-100">
                                    <h3 className="text-gold font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-4 ml-4">Residential Services</h3>
                                    <div className="flex flex-col gap-1">
                                        <Link href="/services/roof-cleaning" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Roof Cleaning</Link>
                                        <Link href="/services/house-washing" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">House Washing</Link>
                                        <Link href="/services/window-cleaning" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Window Cleaning</Link>
                                        <Link href="/services/pressure-washing" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Pressure Washing</Link>
                                        <Link href="/services/residential-permanent-led-lighting" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Permanent LED Lighting</Link>
                                    </div>
                                </div>

                                {/* Commercial Column */}
                                <div className="flex-1 pl-6">
                                    <h3 className="text-gold font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-4 ml-4">Commercial Services</h3>
                                    <div className="flex flex-col gap-1">
                                        <Link href="/services/building-washing" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Building Washing</Link>
                                        <Link href="/services/commercial-roof-cleaning" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Commercial Roof Cleaning</Link>
                                        <Link href="/services/dumpster-pad-cleaning" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Dumpster Pad Cleaning</Link>
                                        <Link href="/services/hoa-multi-unit-cleaning" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Multi-Unit / HOA Services</Link>
                                        <Link href="/services/apartment-exterior-cleaning" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Apartment Exterior Cleaning</Link>
                                        <Link href="/services/permanent-holiday-lighting" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Permanent LED Lighting</Link>
                                    </div>
                                </div>
                            </div>

                            {/* View All Services Bottom Bar */}
                            <div className="bg-slate-50 p-4 border-t border-gray-100 flex justify-center">
                                <Link href="/services" className="text-navy hover:text-gold transition-colors font-bold inline-flex items-center gap-2 group/btn">
                                    View All Services
                                    <span className="transform group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="/service-areas" className="hover:text-gold transition-colors uppercase">SERVICE AREAS</Link>

                    <Link href="/about-us" className="hover:text-gold transition-colors uppercase">ABOUT US</Link>
                    <Link href="/gallery" className="hover:text-gold transition-colors uppercase">GALLERY</Link>
                    <Link href="/reviews" className="hover:text-gold transition-colors uppercase">REVIEWS</Link>
                    <Link href="/pricing" className="hover:text-gold transition-colors uppercase">PRICING</Link>
                    <Link href="/blog" className="hover:text-gold transition-colors text-gold font-black uppercase">EXPERT GUIDES</Link>
                    <Link href="/contact" className="hover:text-gold transition-colors uppercase">CONTACT</Link>
                </nav>

                {/* Call to Action Desktop */}
                <div className="hidden xl:flex items-center gap-4 ml-6 lg:ml-8">
                    <div className="flex flex-col items-end gap-1 mr-2 max-w-full">
                        <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100 mb-1">
                            Fully Licensed & Insured
                        </span>
                        <a href="tel:920-609-7085" className="flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors max-w-full overflow-hidden" rel="nofollow" aria-label="Call Valley Window Care">
                            <Phone size={16} className="text-gold shrink-0" />
                            <span className="text-base break-words leading-tight">(920) 609-7085</span>
                        </a>
                        <a href="mailto:info@valleywindowcare.com" className="flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors max-w-full overflow-hidden" rel="nofollow" aria-label="Email Valley Window Care">
                            <Mail size={16} className="text-gold shrink-0" />
                            <span className="text-sm break-words leading-tight">info@valleywindowcare.com</span>
                        </a>
                    </div>
                    <Link href="/contact" className="bg-gold hover:bg-gold-light text-white px-6 py-2.5 rounded-full font-bold btn-hover-fx shadow-md whitespace-nowrap" aria-label="Request a free property exterior cleaning quote">
                        GET A QUOTE
                    </Link>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-80px)] mt-0 pt-0">
                    <nav className="flex flex-col p-4 text-navy font-bold tracking-wide">
                        {/* Services Accordion Toggle */}
                        <div className="border-b border-gray-100">
                            <button
                                className="w-full flex items-center justify-between py-4 uppercase text-left transition-colors hover:text-gold"
                                onClick={() => setIsServicesOpen(!isServicesOpen)}
                            >
                                Services
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-gold' : 'text-gray-400'}`}
                                />
                            </button>

                            {/* Services Expansion Content */}
                            {isServicesOpen && (
                                <div className="pl-4 pb-4 space-y-4">
                                    <div className="space-y-2">
                                        <h4 className="text-gold text-xs tracking-widest uppercase mb-2">Residential</h4>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/roof-cleaning" className="block py-2 hover:text-gold transition-colors">Roof Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/house-washing" className="block py-2 hover:text-gold transition-colors">House Washing</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/window-cleaning" className="block py-2 hover:text-gold transition-colors">Window Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/pressure-washing" className="block py-2 hover:text-gold transition-colors">Pressure Washing</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/residential-permanent-led-lighting" className="block py-2 hover:text-gold transition-colors">Permanent LED Lighting</Link>
                                    </div>
                                    <div className="space-y-2 pt-2 border-t border-gray-50">
                                        <h4 className="text-gold text-xs tracking-widest uppercase mb-2">Commercial</h4>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/building-washing" className="block py-2 hover:text-gold transition-colors">Building Washing</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/commercial-roof-cleaning" className="block py-2 hover:text-gold transition-colors">Commercial Roof Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/dumpster-pad-cleaning" className="block py-2 hover:text-gold transition-colors">Dumpster Pad Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/hoa-multi-unit-cleaning" className="block py-2 hover:text-gold transition-colors">Multi-Unit / HOA Services</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/apartment-exterior-cleaning" className="block py-2 hover:text-gold transition-colors">Apartment Exterior Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/permanent-holiday-lighting" className="block py-2 hover:text-gold transition-colors">Permanent LED Lighting</Link>
                                    </div>
                                    <div className="pt-2 border-t border-gray-50">
                                        <button onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/services'; }} className="block py-2 text-gold hover:text-navy transition-colors flex items-center justify-center w-full gap-1 font-bold" aria-label="View All Services">
                                            View All Services &rarr;
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Service Areas Accordion Toggle */}
                        <div className="border-b border-gray-100">
                            <button
                                className="w-full flex items-center justify-between py-4 uppercase text-left transition-colors hover:text-gold"
                                onClick={() => setIsServiceAreasOpen(!isServiceAreasOpen)}
                            >
                                Service Areas
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${isServiceAreasOpen ? 'rotate-180 text-gold' : 'text-gray-400'}`}
                                />
                            </button>

                            {isServiceAreasOpen && (
                                <div className="pl-4 pb-4 space-y-2">
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/green-bay" className="block py-2 hover:text-gold transition-colors">Green Bay</Link>
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/appleton" className="block py-2 hover:text-gold transition-colors">Appleton</Link>
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/oshkosh" className="block py-2 hover:text-gold transition-colors">Oshkosh</Link>
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/de-pere" className="block py-2 hover:text-gold transition-colors">De Pere</Link>
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/door-county" className="block py-2 hover:text-gold transition-colors">Door County</Link>

                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/shawano" className="block py-2 hover:text-gold transition-colors">Shawano</Link>
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/manitowoc" className="block py-2 hover:text-gold transition-colors">Manitowoc</Link>
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas" className="block py-2 text-gold hover:text-navy transition-colors flex items-center gap-1 font-bold mt-2">
                                        View All Areas <ChevronRight size={16} />
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/about-us" className="uppercase py-4 border-b border-gray-100 hover:text-gold transition-colors">ABOUT US</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/gallery" className="uppercase py-4 border-b border-gray-100 hover:text-gold transition-colors">GALLERY</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/reviews" className="uppercase py-4 border-b border-gray-100 hover:text-gold transition-colors">REVIEWS</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/pricing" className="uppercase py-4 border-b border-gray-100 hover:text-gold transition-colors">PRICING</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="uppercase py-4 border-b border-gray-100 text-gold font-black transition-colors">EXPERT GUIDES</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="uppercase py-4 hover:text-gold transition-colors">CONTACT</Link>

                        <div className="mt-8 mb-4">
                            <div className="flex justify-center mb-3">
                                <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                                    Fully Licensed & Insured
                                </span>
                            </div>
                            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="block w-full text-center bg-gold hover:bg-gold-light text-white px-6 py-4 rounded-xl font-bold shadow-md transition-colors">
                                GET A FREE QUOTE
                            </Link>
                        </div>
                    </nav>
                </div>
            )
            }
        </header >
    );
}
