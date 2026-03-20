import { CheckCircle2, ChevronRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceContentProps {
    title: string;
    description: React.ReactNode;
    benefits: (string | React.ReactNode)[];
    process: (string | React.ReactNode)[];
    city?: string; // Optional city injection for local SEO
    image?: string; // High-res architectural payload
}

export default function ServiceContent({ title, description, benefits, process, city, image }: ServiceContentProps) {
    const localText = city ? ` in ${city}, WI` : "";

    // Dynamic 'Types We Clean' Synthetic SEO Generation
    const getTypesWeClean = (serviceTitle: string) => {
        const lowerTitle = serviceTitle.toLowerCase();
        if (lowerTitle.includes("roof")) return ["Asphalt Shingles", "Cedar Shake", "Metal Roofing", "Tile Roofs", "Flat Commercial Membrane (TPO/EPDM)"];
        if (lowerTitle.includes("window")) return ["Exterior & Interior Glass", "Skylights & Sunrooms", "Storm Windows", "Screens & Tracks", "Commercial Storefronts"];
        if (lowerTitle.includes("house") || lowerTitle.includes("building") || lowerTitle.includes("siding")) return ["Vinyl Siding", "Brick & Masonry", "Stucco & EIFS", "Hardie Board & Fiber Cement", "Wood & Cedar Siding"];
        if (lowerTitle.includes("gutter")) return ["Seamless Aluminum", "Copper Gutters", "Vinyl Systems", "Galvanized Steel", "Downspouts & French Drains"];
        if (lowerTitle.includes("concrete") || lowerTitle.includes("paver") || lowerTitle.includes("drive-thru") || lowerTitle.includes("parking")) return ["Exposed Aggregate", "Stamped Concrete", "Brick Pavers", "Asphalt Pads", "Limestone & Natural Stone"];
        if (lowerTitle.includes("lighting") || lowerTitle.includes("led")) return ["Architectural Facade Lighting", "Custom Holiday & Event Displays", "Patio & Deck Perimeters", "Commercial Storefront Tracks", "Landscape Accent Paths"];
        if (lowerTitle.includes("deck") || lowerTitle.includes("fence")) return ["Treated Pine Wood", "Cedar & Redwood", "Trex & Composite", "Vinyl Fencing", "Aluminum Railings"];
        // Fallback Matrix
        return ["Residential Single Family Homes", "Commercial Office Buildings", "HOA & Multi-Family Communities", "Retail Storefronts & Promenades", "Industrial Parks"];
    };

    const typesWeClean = getTypesWeClean(title);
    const firstBenefit = benefits.length > 0 && typeof benefits[0] === 'string' ? benefits[0].split(':')[0] : "Professional Exterior Cleaning";

    return (
        <section className="bg-white w-full overflow-hidden">
            {/* Massive Authority SEO Block & Highlight Cards */}
            <div className="py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-16 max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-navy leading-tight mb-8">
                            {title}{localText} — {firstBenefit}
                        </h2>

                        {/* High-Density 500+ Word Dynamic SEO Synthesis Shell */}
                        <div className="text-gray-600 text-lg leading-relaxed space-y-6 text-left">
                            <div className="mt-6 mb-6">
                                {description}
                            </div>
                            <p>
                                When you choose Valley Window Care for your {title.toLowerCase()}{localText}, you're investing in a trusted local team completely dedicated to unparalleled results. We exclusively utilize eco-friendly, biodegradable cleaning detergents that pose absolutely zero threat to your landscaping, your pets, or your family.
                            </p>
                        </div>
                    </div>

                    {/* Massive Action Image Interrogator */}
                    <div className="relative w-full h-80 sm:h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl lg:mt-24 group">
                        <img src="/images/portfolio/house-washing.webp" alt="Service Image" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent"></div>
                        <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 text-white">
                            <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2 tracking-tight">{title} Excellence</p>
                            <p className="text-lg sm:text-xl text-gold font-bold">Delivering pristine results for homeowners and businesses{localText}.</p>
                        </div>
                    </div>

                    {/* Highlight Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-20 lg:mt-32">
                        {/* Why Choose Us Output */}
                        <div className="bg-slate-50 p-8 lg:p-12 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-8 relative z-10">Why Choose Us For {title}?</h3>
                            <ul className="space-y-6 relative z-10">
                                {benefits.map((benefit, index) => {
                                    const isString = typeof benefit === 'string';
                                    const heading = isString && benefit.includes(':') ? benefit.split(':')[0] : null;
                                    const body = isString && benefit.includes(':') ? benefit.split(':').slice(1).join(':').trim() : null;
                                    return (
                                        <li key={index} className="flex gap-4">
                                            <div className="flex-shrink-0 mt-1 text-gold">
                                                <CheckCircle2 size={28} />
                                            </div>
                                            <div>
                                                {heading && body ? (
                                                    <>
                                                        <span className="font-bold text-navy-dark text-lg block mb-1">{heading}</span>
                                                        <span className="text-gray-600 leading-relaxed">{body}</span>
                                                    </>
                                                ) : (
                                                    <div className="text-gray-600 leading-relaxed">{typeof benefit === 'string' ? benefit : benefit}</div>
                                                )}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* #1 Licensed & Certified Historical Correction - UPDATED TO WHITE/NO NAVY */}
                        <div className="bg-white p-8 lg:p-12 rounded-3xl text-navy shadow-[0_0_40px_rgba(30,43,60,0.08)] relative overflow-hidden flex flex-col justify-center border border-gray-100 border-b-8 border-gold">
                            <div className="absolute inset-0 bg-gold/5 transform -skew-y-12 scale-150 origin-top-left"></div>
                            <div className="relative z-10 text-center">
                                <div className="inline-flex items-center justify-center w-24 h-24 bg-gold rounded-full mb-8 shadow-xl border-4 border-white">
                                    <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                </div>
                                <h3 className="text-3xl font-extrabold mb-4 text-navy">#1 Licensed & Certified</h3>
                                <p className="text-xl text-gray-600 md:px-6 mb-8 font-medium">Serving Northeast Wisconsin since <strong>2020</strong> with over <strong className="text-navy">100+</strong> 5-Star Reviews.</p>
                                <div className="space-y-4 text-left mx-auto max-w-xs bg-slate-50 border border-gray-100 p-6 rounded-2xl">
                                    <div className="flex items-center gap-3"><Check className="text-gold shrink-0" /> <span className="font-semibold text-sm text-navy-dark">Fully Insured & Bonded</span></div>
                                    <div className="flex items-center gap-3"><Check className="text-gold shrink-0" /> <span className="font-semibold text-sm text-navy-dark">Professional Grade Equipment</span></div>
                                    <div className="flex items-center gap-3"><Check className="text-gold shrink-0" /> <span className="font-semibold text-sm text-navy-dark">100% Satisfaction Guarantee</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Methodology & Types We Clean Integration Block */}
            <div className="bg-slate-50 py-20 lg:py-32 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                        {/* Process Execution Block */}
                        <div>
                            <p className="text-gold font-bold tracking-widest uppercase mb-3 text-sm">Methodology</p>
                            <h3 className="text-3xl lg:text-4xl font-extrabold text-navy mb-12">Our {title} Process</h3>

                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px before:h-full before:w-1 before:bg-gray-200">
                                {process.map((step, index) => {
                                    const isString = typeof step === 'string';
                                    const heading = isString && step.includes(':') ? step.split(':')[0] : null;
                                    const body = isString && step.includes(':') ? step.split(':').slice(1).join(':').trim() : null;

                                    return (
                                        <div key={index} className="relative flex items-start gap-6 group">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-50 bg-gold text-navy-dark font-black text-lg shadow-md shrink-0 z-10 transition-transform group-hover:scale-110">
                                                {index + 1}
                                            </div>
                                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 transition-all group-hover:shadow-md group-hover:border-gold/30">
                                                {heading && body ? (
                                                    <>
                                                        <h4 className="font-bold text-navy-dark text-xl mb-2">{heading}</h4>
                                                        <p className="text-gray-600 leading-relaxed">{body}</p>
                                                    </>
                                                ) : (
                                                    <div className="text-gray-600 leading-relaxed">{typeof step === 'string' ? step : step}</div>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                                <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-4 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1 w-full sm:w-auto uppercase tracking-wider text-sm">
                                    Get Started Today <ChevronRight size={18} />
                                </Link>
                                <Link href="tel:920-609-7085" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-navy border border-gray-200 px-8 py-4 rounded-full font-bold shadow-sm transition-transform hover:-translate-y-1 w-full sm:w-auto uppercase tracking-wider text-sm" rel="nofollow">
                                    Call (920) 609-7085
                                </Link>
                            </div>
                        </div>

                        {/* Synthetic Types We Clean Logic */}
                        <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-2 bg-gold"></div>
                            <h3 className="text-2xl font-bold text-navy mb-8 pb-4 border-b border-gray-100">Types We Can Handle</h3>
                            <ul className="space-y-5">
                                {typesWeClean.map((type, index) => (
                                    <li key={index} className="flex items-center gap-4 text-gray-700 text-lg">
                                        <div className="bg-gold/20 p-2 rounded-lg text-gold-dark"><Check size={20} className="stroke-[3]" /></div>
                                        <span className="font-semibold">{type}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-dashed border-gray-300 text-center">
                                <p className="text-navy-dark font-medium mb-3">Don't see your specific material or property type listed?</p>
                                <p className="text-gray-500 text-sm mb-4">Our specialized soft-wash and cleaning systems are highly versatile and adaptable to almost any exterior surface.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}
