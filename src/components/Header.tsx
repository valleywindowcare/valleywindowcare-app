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
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Spacer (Props up the h-auto header when Logo drops absolute) */}
                <div className="h-14 md:h-20 w-0 xl:hidden"></div>

                {/* Logo Section */}
                <Link href="/" className="flex-shrink-0 hover:opacity-90 transition-opacity z-50 py-1 absolute left-1/2 -translate-x-1/2 xl:relative xl:left-auto xl:translate-x-0">
                    <div className="relative h-14 md:h-20 w-48 md:w-64">
                        <Image
                            src="/valley-window-care-logo-without-background.png"
                            alt="Valley Window Care and Exterior Cleaning logo - Professional exterior cleaning services in Wisconsin"
                            fill
                            className="object-contain object-center xl:object-left"
                            priority
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
                        <div className="absolute top-[80px] -left-24 w-[600px] bg-white shadow-2xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 flex p-6 z-50">

                            {/* Residential Column */}
                            <div className="flex-1 pr-6 border-r border-gray-100">
                                <h3 className="text-gold font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-4 ml-4">Residential Services</h3>
                                <div className="flex flex-col gap-1">
                                    <Link href="/roof-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Roof Cleaning</Link>
                                    <Link href="/house-washing-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">House Washing</Link>
                                    <Link href="/gutter-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Gutter Cleaning</Link>
                                    <Link href="/concrete-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Concrete Cleaning</Link>
                                    <Link href="/window-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Window Cleaning</Link>
                                    <Link href="/christmas-lighting-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Christmas Lighting</Link>
                                    <Link href="/residential-permanent-led-lighting-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Residential Permanent LED Lighting</Link>
                                    <Link href="/pressure-washing-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Pressure Washing</Link>
                                    <Link href="/fence-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Fence Cleaning</Link>
                                    <Link href="/deck-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Deck Cleaning</Link>
                                    <Link href="/oxidation-removal-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Oxidation Removal</Link>
                                </div>
                            </div>

                            {/* Commercial Column */}
                            <div className="flex-1 pl-6">
                                <h3 className="text-gold font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-4 ml-4">Commercial Services</h3>
                                <div className="flex flex-col gap-1">
                                    <Link href="/building-washing-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Building Washing</Link>
                                    <Link href="/dumpster-pad-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Dumpster Pad Cleaning</Link>
                                    <Link href="/permanent-led-lighting-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Permanent LED Lighting</Link>
                                    <Link href="/commercial-roof-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Commercial Roof Cleaning</Link>
                                    <Link href="/commercial-pressure-washing-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Commercial Pressure Wash</Link>
                                    <Link href="/graffiti-removal-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Graffiti Removal</Link>
                                    <Link href="/hoa-services-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Multi-Unit / HOA Services</Link>
                                    <Link href="/hood-vent-cleaning-green-bay-wi" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy-dark hover:text-gold transition-colors font-semibold">Commercial Hood Cleaning</Link>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <Link href="/service-areas" className="px-4 py-2 hover:bg-slate-50 rounded-xl text-navy hover:text-gold transition-colors font-bold flex items-center gap-2 group/btn">
                                            View All Service Areas
                                            <span className="transform group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <Link href="/about-us" className="hover:text-gold transition-colors uppercase">ABOUT US</Link>
                    <Link href="/gallery" className="hover:text-gold transition-colors uppercase">GALLERY</Link>
                    <Link href="/reviews" className="hover:text-gold transition-colors uppercase">REVIEWS</Link>
                    <Link href="/blog" className="hover:text-gold transition-colors text-gold font-black uppercase">BLOG</Link>
                    <Link href="/contact" className="hover:text-gold transition-colors uppercase">CONTACT</Link>
                </nav>

                {/* Call to Action Desktop */}
                <div className="hidden xl:flex items-center gap-4 ml-6 lg:ml-8">
                    <div className="flex flex-col items-end gap-1 mr-2 max-w-full">
                        <a href="tel:920-609-7085" className="flex items-center gap-2 text-navy font-bold hover:text-gold transition-colors max-w-full overflow-hidden" rel="nofollow">
                            <Phone size={16} className="text-gold shrink-0" />
                            <span className="text-base break-words leading-tight">(920) 609-7085</span>
                        </a>
                        <a href="mailto:info@valleywindowcare.com" className="flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors max-w-full overflow-hidden" rel="nofollow">
                            <Mail size={16} className="text-gold shrink-0" />
                            <span className="text-sm break-words leading-tight">info@valleywindowcare.com</span>
                        </a>
                    </div>
                    <Link href="/contact" className="bg-gold hover:bg-gold-light text-white px-6 py-2.5 rounded-full font-bold btn-hover-fx shadow-md whitespace-nowrap" aria-label="Request a free property exterior cleaning quote">
                        GET A QUOTE
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isMobileMenuOpen && (
                <div className="xl:hidden absolute top-[96px] left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-96px)]">
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
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/roof-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Roof Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/house-washing-green-bay-wi" className="block py-2 hover:text-gold transition-colors">House Washing</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/gutter-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Gutter Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/concrete-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Concrete Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/window-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Window Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/christmas-lighting-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Christmas Lighting</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/residential-permanent-led-lighting-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Residential Permanent LED Lighting</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/pressure-washing-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Pressure Washing</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/fence-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Fence Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/deck-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Deck Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/oxidation-removal-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Oxidation Removal</Link>
                                    </div>
                                    <div className="space-y-2 pt-2 border-t border-gray-50">
                                        <h4 className="text-gold text-xs tracking-widest uppercase mb-2">Commercial</h4>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/building-washing-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Building Washing</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/dumpster-pad-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Dumpster Pad Cleaning</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/permanent-led-lighting-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Permanent LED Lighting</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/commercial-pressure-washing-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Commercial Pressure Wash</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/graffiti-removal-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Graffiti Removal</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/hoa-services-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Multi-Unit / HOA Services</Link>
                                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/hood-vent-cleaning-green-bay-wi" className="block py-2 hover:text-gold transition-colors">Commercial Hood Cleaning</Link>
                                    </div>
                                    <div className="pt-2 border-t border-gray-50">
                                        <button onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/service-areas'; }} className="block py-2 text-gold hover:text-navy transition-colors flex items-center justify-center w-full gap-1 font-bold">
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
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/fish-creek" className="block py-2 hover:text-gold transition-colors">Fish Creek</Link>
                                    <Link onClick={() => setIsMobileMenuOpen(false)} href="/service-areas/sturgeon-bay" className="block py-2 hover:text-gold transition-colors">Sturgeon Bay</Link>
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
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/blog" className="uppercase py-4 border-b border-gray-100 text-gold font-black transition-colors">BLOG</Link>
                        <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="uppercase py-4 hover:text-gold transition-colors">CONTACT</Link>

                        <div className="mt-8 mb-4">
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
