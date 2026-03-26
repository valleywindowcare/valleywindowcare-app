"use client"
import Link from "next/link";
import { Phone, Mail, Menu, ChevronDown, X, ChevronRight, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const isTransparent = pathname === '/contact';

    const headerClasses = isTransparent
        ? "absolute top-0 z-50 bg-white/60 backdrop-blur-md border-b border-white/20 shadow-sm w-full h-auto"
        : "sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm w-full h-auto";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isServiceAreasOpen, setIsServiceAreasOpen] = useState(false);
    const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);
    return (
        <header className={headerClasses}>
            {/* Row 1: Utility Top-Bar (Hidden on Mobile) */}
            <div className="hidden lg:flex w-full bg-navy text-white border-b border-navy-light py-2 px-4 lg:px-8 xl:px-16 justify-end items-center gap-6 text-[10px] xl:text-xs font-bold tracking-wider uppercase">
                <Link href="/about-us" className="hover:text-gold transition-colors items-center flex h-full">Our Company</Link>
                <Link href="/service-areas" className="hover:text-gold transition-colors items-center flex h-full text-gold">Service Areas</Link>
                <Link href="/gallery" className="hover:text-gold transition-colors items-center flex h-full">Gallery</Link>
                <Link href="/pricing" className="hover:text-gold transition-colors items-center flex h-full">Pricing</Link>
                <Link href="/blog" className="hover:text-gold transition-colors items-center flex h-full">Expert Guides</Link>
            </div>

            {/* Row 2: Main Layout */}
            <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex items-center justify-between min-h-[64px] md:min-h-[80px] py-2 md:py-3 lg:py-5">

                {/* Logo Section (Left Aligned) */}
                <Link href="/" aria-label="Home" className="shrink hover:opacity-90 transition-opacity z-50 py-1 flex items-center gap-2 xl:gap-4 mr-4 xl:mr-10 relative min-w-0">
                    <div className="relative h-12 w-40 sm:h-14 sm:w-48 lg:h-16 lg:w-52 xl:h-20 xl:w-60 min-w-[150px] max-h-[80px] shrink-0">
                        <Image
                            src="/valley-window-care-logo-without-background.png"
                            alt="Valley Exterior Restoration Logo"
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 640px) 160px, (max-width: 1280px) 192px, 256px"
                            priority
                        />
                    </div>
                    <div className="hidden 2xl:flex flex-col pt-2 shrink-0">
                        <span className="text-navy font-black text-xl leading-none uppercase tracking-tight">Valley Exterior</span>
                        <span className="text-gold font-bold text-[11px] mt-0.5 leading-none uppercase tracking-widest text-left">Restoration</span>
                    </div>
                </Link>

                {/* Mobile Persistent Contact Bar + Hamburger (Right Aligned - Hidden at 1024px) */}
                <div className="flex lg:hidden items-center gap-2 z-50 ml-auto shrink-0">
                    {/* Min 48x48 Touch Target Map */}
                    <a href="tel:920-609-7085" className="w-12 h-12 flex items-center justify-center bg-slate-50 hover:bg-gold hover:text-white text-navy rounded-full transition-colors shadow-sm" aria-label="Call Us Directly">
                        <Phone size={20} className="fill-current" />
                    </a>
                    
                    <Link href="/contact" className="h-10 px-3 sm:px-5 sm:h-12 flex items-center justify-center bg-gold hover:bg-gold-light text-white font-bold rounded-lg shadow-sm text-[12px] sm:text-sm uppercase tracking-wider transition-colors whitespace-nowrap">
                        Quote
                    </Link>
                    
                    <button
                        className="w-12 h-12 flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-navy rounded-lg transition-colors shadow-sm"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu dropdown"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {/* Desktop Nav (Visible at 1024px+) */}
                <nav className="hidden lg:flex gap-x-2 xl:gap-x-4 2xl:gap-x-6 items-center text-[12px] xl:text-[13px] font-bold text-navy-dark tracking-tight pl-2 xl:pl-4 shrink">
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
                                        <Link href="/services/pressure-washing" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Pressure Washing</Link>
                                        <Link href="/services/paver-patio-restorations" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Paver Patio Restorations</Link>
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
                                        <Link href="/services/winter-salt-removal" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Winter Salt Removal</Link>
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
                    {/* Core Highest Return Services - Restored to Primary Header */}
                    <Link href="/services/roof-cleaning" className="hover:text-gold transition-colors uppercase whitespace-nowrap">ROOF CLEANING</Link>
                    <Link href="/services/paver-patio-restorations" className="hover:text-gold transition-colors uppercase whitespace-nowrap">PAVER SEALING</Link>
                    <Link href="/services/house-washing" className="hover:text-gold transition-colors uppercase whitespace-nowrap">HOUSE WASHING</Link>
                    <Link href="/services/pressure-washing" className="hover:text-gold transition-colors uppercase whitespace-nowrap">PRESSURE WASHING</Link>

                    <Link href="/contact" className="hover:text-gold transition-colors uppercase ml-2">CONTACT</Link>
                </nav>

                {/* Call to Action Desktop */}
                <div className="hidden lg:flex items-center gap-2 xl:gap-4 ml-auto shrink-0 pr-1">
                    <a href="tel:920-609-7085" className="flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors shrink-0" rel="nofollow" aria-label="Call Valley Window Care & Exterior Cleaning">
                        <span className="hidden xl:inline text-base xl:text-lg break-words leading-tight tracking-tight">(920) 609-7085</span>
                        <Phone size={22} className="text-gold shrink-0 xl:hidden" aria-label="Phone Icon" />
                        <Phone size={18} className="hidden xl:block text-gold shrink-0" />
                    </a>
                    
                    <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy-dark px-4 py-2 xl:px-6 xl:py-2.5 rounded-full font-black btn-hover-fx shadow-md whitespace-nowrap text-[12px] xl:text-[14px] shrink-0 uppercase tracking-widest" aria-label="Request a free property exterior cleaning quote">
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
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/pressure-washing" className="block py-2 hover:text-gold transition-colors">Pressure Washing</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/paver-patio-restorations" className="block py-2 hover:text-gold transition-colors">Paver Patio Restorations</Link>
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
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/services/winter-salt-removal" className="block py-2 hover:text-gold transition-colors">Winter Salt Removal</Link>
                                    </div>
                                    <div className="pt-2 border-t border-gray-50">
                                        <button onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/services'; }} className="block py-2 text-gold hover:text-navy transition-colors flex items-center justify-center w-full gap-1 font-bold" aria-label="View All Services">
                                            View All Services &rarr;
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Top-Level Secondary Mobile Links */}
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas" className="uppercase py-4 border-b border-gray-100 font-black text-navy-dark hover:text-gold transition-colors">SERVICE AREAS</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/gallery" className="uppercase py-4 border-b border-gray-100 hover:text-gold transition-colors">GALLERY</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/pricing" className="uppercase py-4 border-b border-gray-100 hover:text-gold transition-colors">PRICING</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="uppercase py-4 border-b border-gray-100 text-gold font-black transition-colors">EXPERT GUIDES</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="uppercase py-4 border-b border-gray-100 hover:text-gold transition-colors">CONTACT</Link>


                        <div className="mt-8 mb-4 px-4 flex flex-col gap-3">
                            <div className="flex justify-center mb-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-green-600 bg-green-50 px-2 py-0.5 rounded border border-green-100">
                                    Fully Licensed & Insured
                                </span>
                            </div>
                            <a href="sms:9206097085" className="flex items-center justify-center gap-2 w-full text-center bg-navy hover:bg-navy-light text-white px-6 py-4 rounded-xl font-bold shadow-md transition-colors">
                                <MessageSquare size={20} /> Text Us for a Fast Quote
                            </a>
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
