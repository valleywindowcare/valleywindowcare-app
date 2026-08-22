"use client";

import React, { useState } from "react";

interface BeforeAfterSliderProps {
    combinedImage: string;
    alt: string;
    aspectRatio?: string;
}

export default function BeforeAfterSlider({
    combinedImage,
    alt,
    aspectRatio = "aspect-[4/3]"
}: BeforeAfterSliderProps) {
    const [sliderPos, setSliderPos] = useState(50);

    return (
        <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl shadow-xl select-none group border border-slate-100`}>
            {/* After Image Container (Shows Right Half of Combined Image) */}
            <div className="absolute inset-0 w-full h-full bg-slate-100">
                <div className="absolute inset-0 w-full h-full">
                    {/* Width 200% with object-position right displays the right 50% of the image stretched across the container */}
                    <img
                        src={combinedImage}
                        alt={`${alt} - After`}
                        className="absolute top-0 right-0 w-[200%] h-full object-cover"
                        style={{ maxWidth: "none" }}
                    />
                </div>
                <div className="absolute bottom-4 right-4 bg-navy/80 backdrop-blur-sm text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider z-10">
                    After
                </div>
            </div>

            {/* Before Image Container (Shows Left Half of Combined Image, clipped by clip-path) */}
            <div
                className="absolute inset-0 w-full h-full z-10 pointer-events-none"
                style={{
                    clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
                }}
            >
                <div className="absolute inset-0 w-full h-full">
                    {/* Width 200% with object-position left displays the left 50% of the image stretched across the container */}
                    <img
                        src={combinedImage}
                        alt={`${alt} - Before`}
                        className="absolute top-0 left-0 w-[200%] h-full object-cover"
                        style={{ maxWidth: "none" }}
                    />
                </div>
                <div className="absolute bottom-4 left-4 bg-gold text-navy px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                    Before
                </div>
            </div>

            {/* Slider Divider Line */}
            <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize pointer-events-none z-20"
                style={{ left: `${sliderPos}%` }}
            >
                {/* Drag Handle Button */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-navy-dark rounded-full shadow-2xl flex items-center justify-center border-2 border-gold font-bold select-none group-hover:scale-110 transition-transform">
                    <span className="text-navy text-sm font-extrabold">&harr;</span>
                </div>
            </div>

            {/* Invisible native range input that spans the entire container for native mouse/touch tracking */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                aria-label="Before and after slider handle"
            />
        </div>
    );
}
