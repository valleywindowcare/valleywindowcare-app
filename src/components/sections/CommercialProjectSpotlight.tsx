'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Phone, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface CommercialProjectSpotlightProps {
  className?: string;
  id?: string;
}

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Commercial Soft Washing 50,000 Sq. Ft. of Siding at OH SNAP! Pickles | 4K Drone Footage",
  "description": "Commercial exterior soft washing of 50,000 sq. ft. of siding at the OH SNAP! Pickles facility in Northeast Wisconsin by Valley Property Services.",
  "thumbnailUrl": [
    "https://img.youtube.com/vi/zB6sXZgdVrU/maxresdefault.jpg"
  ],
  "uploadDate": "2026-09-26T00:00:00Z",
  "contentUrl": "https://www.youtube.com/watch?v=zB6sXZgdVrU",
  "embedUrl": "https://www.youtube-nocookie.com/embed/zB6sXZgdVrU",
  "publisher": {
    "@type": "Organization",
    "name": "Valley Property Services",
    "logo": {
      "@type": "ImageObject",
      "url": "https://valleyexteriorpros.com/logo.png"
    }
  }
};

export default function CommercialProjectSpotlight({
  className = "",
  id = "case-study-oh-snap",
}: CommercialProjectSpotlightProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id={id}
      aria-label="Commercial Case Study: OH SNAP! Pickles 50,000 Sq. Ft. Exterior Wash"
      className={`bg-gradient-to-b from-[#112240] via-navy to-[#0F1E36] py-16 lg:py-24 text-white relative overflow-hidden border-y border-slate-700/50 ${className}`}
    >
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Ambient background lighting glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (Text & Proof - 5 Cols) */}
          <div className="lg:col-span-5 text-left mb-10 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/15 border border-gold/40 text-gold text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              COMMERCIAL CASE STUDY
            </div>

            {/* H2 Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3">
              Industrial Scale Exterior Restoration
            </h2>

            {/* Subheading */}
            <h3 className="text-lg sm:text-xl font-bold text-gold mb-5 leading-snug">
              Safely Restoring 50,000 Sq. Ft. of Commercial Siding at OH SNAP! Pickles
            </h3>

            {/* Body */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              When large-scale industrial and food-grade facilities require exterior cleaning, high pressure is never the answer. Our specialized low-pressure soft wash process neutralizes road film, algae, and industrial fallout across 50,000+ square feet—protecting factory coatings, siding seals, and manufacturer warranties without interrupting facility operations.
            </p>

            {/* Key Bullets */}
            <ul className="space-y-3 mb-8">
              {[
                "50,000 Sq. Ft. Siding Restored",
                "Low-Pressure, Eco-Conscious Detergents",
                "Zero Interruption to Plant Production",
                "Fully Insured & Commercial Safety Compliant",
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-200 font-semibold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-gold hover:bg-gold-light text-navy font-black text-base uppercase tracking-wider py-4 px-8 rounded-xl shadow-xl hover:shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all text-center group"
              >
                <span>Request a Commercial Proposal</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:920-609-7085"
                className="inline-flex items-center justify-center gap-2 text-gray-300 hover:text-white font-bold text-sm py-2 px-3 transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>(920) 609-7085</span>
              </a>
            </div>
          </div>

          {/* Right Column (Video - 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50 bg-slate-950 group">
              {!isPlaying ? (
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full block focus:outline-none focus-visible:ring-4 focus-visible:ring-gold/50 cursor-pointer text-left"
                  aria-label="Play Video: Commercial Soft Washing 50,000 Sq. Ft. of Siding at OH SNAP! Pickles"
                >
                  <Image
                    src="https://img.youtube.com/vi/zB6sXZgdVrU/maxresdefault.jpg"
                    alt="Commercial Soft Washing 50,000 Sq. Ft. of Siding at OH SNAP! Pickles 4K Drone Footage Thumbnail"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={false}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-slate-950/40 group-hover:via-transparent transition-colors duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 bg-navy/90 backdrop-blur-md text-gold text-xs font-black tracking-wider uppercase px-3 py-1.5 rounded-full border border-gold/30 shadow-lg">
                      <Building2 size={13} className="text-gold" />
                      OH SNAP! Pickles Facility
                    </span>
                    <span className="inline-flex items-center gap-1 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md border border-white/10 shadow-lg">
                      <Sparkles size={12} className="text-gold" />
                      4K Drone Video
                    </span>
                  </div>

                  {/* Centered Branded YouTube Play Button with Hover Animation */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="relative flex items-center justify-center">
                      {/* Glow halo */}
                      <div className="absolute -inset-4 bg-red-600/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Branded YouTube Play Button */}
                      <div className="w-16 h-12 sm:w-20 sm:h-14 bg-[#FF0000] hover:bg-[#CC0000] rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(255,0,0,0.65)]">
                        <svg
                          className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-current ml-1"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                    <div>
                      <p className="text-white font-bold text-sm sm:text-base drop-shadow-md line-clamp-1">
                        Commercial Soft Washing 50,000 Sq. Ft. of Siding
                      </p>
                      <p className="text-xs text-gray-300 drop-shadow flex items-center gap-1 mt-0.5">
                        <ShieldCheck size={13} className="text-gold" />
                        <span>Click to watch 4K drone project walkthrough</span>
                      </p>
                    </div>
                    <span className="bg-black/80 backdrop-blur-md text-gray-200 text-xs font-mono font-medium px-2.5 py-1 rounded border border-white/10 shadow">
                      YouTube 4K
                    </span>
                  </div>
                </button>
              ) : (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/zB6sXZgdVrU?autoplay=1&rel=0"
                  title="Commercial Soft Washing 50,000 Sq. Ft. of Siding at OH SNAP! Pickles | 4K Drone Footage"
                  className="w-full h-full border-0 absolute inset-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
