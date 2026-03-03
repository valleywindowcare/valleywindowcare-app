"use client";

import Image from "next/image";
import { useState } from "react";
import { Sparkles } from "lucide-react";

interface FooterGalleryImageProps {
    src: string;
    alt: string;
}

export default function FooterGalleryImage({ src, alt }: FooterGalleryImageProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return (
            <div className="w-full h-full bg-navy border border-gold/30 rounded-lg flex flex-col items-center justify-center p-2 group-hover:bg-navy-dark transition-colors duration-300">
                <Sparkles className="text-gold mb-1" size={16} />
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider text-center">Transforming<br />Spaces</span>
                <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
            </div>
        );
    }

    return (
        <>
            <Image
                src={src}
                alt={alt}
                fill
                loading="lazy"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setHasError(true)}
                sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
        </>
    );
}
