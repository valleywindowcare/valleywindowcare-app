"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface SafeHeroImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
}

export default function SafeHeroImage({ src, alt, fallbackSrc }: SafeHeroImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <div className="absolute inset-0 z-0">
            <Image
                src={imgSrc}
                alt={alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                onError={() => {
                    setImgSrc(fallbackSrc);
                }}
            />
            <div className="absolute inset-0 bg-navy/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
        </div>
    );
}
