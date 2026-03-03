"use client";

import Image from "next/image";

interface SafeHeroImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
}

export default function SafeHeroImage({ src, alt, fallbackSrc }: SafeHeroImageProps) {
    return (
        <div className="absolute inset-0 z-0">
            <Image
                src={src}
                alt={alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                quality={85}
                unoptimized={true}
                onError={(e) => {
                    e.currentTarget.src = fallbackSrc;
                    e.currentTarget.srcset = "";
                }}
            />
            <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
        </div>
    );
}
