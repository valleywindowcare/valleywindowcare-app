"use client";


interface SafeHeroImageProps {
    src: string;
    alt: string;
    fallbackSrc: string;
}

export default function SafeHeroImage({ src, alt, fallbackSrc }: SafeHeroImageProps) {
    return (
        <div className="absolute inset-0 z-0">
            <img
                src={src}
                alt={alt}
                fetchPriority="high"
                className="w-full h-full object-cover"
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
