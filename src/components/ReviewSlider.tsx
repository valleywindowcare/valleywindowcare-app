'use client';

import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const reviews = [
    {
        reviewer: "Emily Jakl",
        date: "5 months ago",
        text: "James was great to work with!"
    },
    {
        reviewer: "Mark",
        date: "5 months ago",
        text: "James was amazing! He took the time over the phone to educate me on the process. His prices are great and his workmanship even better. I would recommend James if you folks need your house professionally washed!"
    },
    {
        reviewer: "R Lucy",
        date: "5 months ago",
        text: "James and Tyler did a wonderful job. We are so happy with this service. Courteous, detail oriented, and super sweet."
    },
    {
        reviewer: "Kirk Ritchie",
        date: "5 months ago",
        text: "Both windows and exterior were done and they look like new! Very friendly and very professional! Quick work and a job we'll done"
    },
    {
        reviewer: "Barb Hoffman",
        date: "6 months ago",
        text: "Tyler & James did an awesome job! They were friendly, fast, & took shoes off when working on interior windows! I’d highly recommend them!"
    },
    {
        reviewer: "Cortney Hakkarinen",
        date: "6 months ago",
        text: "I got my windows and my driveway cleaned with this company, and they truly did an amazing job! The crew was super nice! 10/10 service ☺️"
    },
    {
        reviewer: "cynthia m",
        date: "6 months ago",
        text: "James and Tyler pressure washed our vinyl and brick house, and a stone porch and patio last week. They were friendly, efficient and did excellent work. We have an older home that had not been pressure washed for at least 20 years. Everything looks a lot cleaner and newer, particularly the flagstone patio, which they included for free. I was totally surprised to see white stones rather than grey when they were finished :). I highly recommend their services and thank them for their work."
    },
    {
        reviewer: "Jerrod Jarvis",
        date: "7 months ago",
        text: "James and Tyler cleaned my windows and a concrete patio for me and did a fantastic job. Very efficient and professional. I would 100% recommend valley window care and exterior cleaning for all your window and exterior home cleaning needs!"
    },
    {
        reviewer: "Lux Flowers",
        date: "7 months ago",
        text: "Honestly, by far the best service. Detailed, fast to respond, and reasonably priced. They handled my soft washing and window cleaning perfectly, and the results were amazing. They were recommended to me by friends, and I will now recommend them to everybody else. You won’t find a better exterior cleaning service in Green Bay Wi"
    },
    {
        reviewer: "Cindy Finney",
        date: "7 months ago",
        text: "I’m very happy with the work James and Tyler did washing my windows and pressure washed the house. They were on time, very professional and went above and beyond. I appreciate the explanation of the plan and after they were done pointing out what was done including the extras that were needed. I’ll definitely use Valley Window in the future!"
    }
];

export default function ReviewSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1
        );
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    // Get 3 visible reviews for desktop, 1 for mobile (handled via CSS/overflow in a real carousel, but simplified here for exact layout match)
    const visibleReviews = [
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length],
        reviews[(currentIndex + 2) % reviews.length]
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center lg:items-start">

                    {/* Left Column: Aggregate Rating */}
                    <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left pt-8">
                        <p className="text-blue-600 font-bold tracking-widest text-sm mb-4 uppercase">Testimonials</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                            Don't Just Take Our Word For It
                        </h2>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-5xl font-black text-gray-900">5.0</span>
                            <div className="flex flex-col">
                                <div className="flex text-gold">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="relative w-5 h-5 mx-0.5">
                                            <Image
                                                src="/star-solid.svg"
                                                alt="Star"
                                                fill
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500 font-medium mt-1">Based on 100+ Reviews</span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <button
                                onClick={prevReview}
                                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors text-navy"
                                aria-label="Previous review"
                            >
                                &larr;
                            </button>
                            <button
                                onClick={nextReview}
                                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors text-navy"
                                aria-label="Next review"
                            >
                                &rarr;
                            </button>
                        </div>

                        {/* Google Review CTA Button */}
                        <div className="mt-10">
                            <a
                                href="https://www.google.com/search?q=valley+window+care+&sca_esv=507a868014978926&ei=3eWlacP0Kc2uqtsP0LSU8Qc&biw=1772&bih=1173&ved=0ahUKEwiD1-e1-oGTAxVNl2oFHVAaJX4Q4dUDCBE&uact=5&oq=valley+window+care+&gs_lp=Egxnd3Mtd2l6LXNlcnAiE3ZhbGxleSB3aW5kb3cgY2FyZSAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHki4HlAAWJoRcAB4AZABAZgB3wKgAbAVqgEIMC4xOC4wLjG4AQPIAQD4AQGYAhKgAp4TwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAgUQLhiABMICBRAAGIAEwgIIEAAYgAQYsQPCAiAQLhiABBiRAhjRAxjHARiKBRiXBRjcBBjeBBjgBNgBAcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAg0QLhiABBixAxhDGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICCxAuGIAEGNEDGMcBwgIOEC4YgAQYxwEYjgUYrwHCAg0QABiABBixAxhDGIoFwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBiRAhiKBcICERAuGIAEGLEDGIMBGMcBGK8BwgIHEAAYgAQYCsICCRAAGIAEGAoYC8ICCBAAGIAEGMkDwgIIEAAYFhgKGB7CAgIQJpgDALoGBggBEAEYFJIHBDAuMTigB_GFArIHBDAuMTi4B54TwgcGMC43LjExyAc7gAgA&sclient=gws-wiz-serp&zx=1772479974803&no_sw_cr=1#lrd=0x8802f7860e31a465:0xc422a0d3f9df71ea,1,,,,"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-navy hover:bg-gold text-white font-bold py-3 px-6 rounded-full transition-colors text-sm shadow-md hover:shadow-lg uppercase tracking-wider hover:-translate-y-1 transform"
                            >
                                <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-full p-[2px]">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Leave a Review
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Review Slider Layout */}
                    <div className="lg:w-3/4 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleReviews.map((review, idx) => (
                                <div
                                    key={`${currentIndex}-${idx}`}
                                    className={`bg-white rounded-3xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 flex flex-col h-full transform ${idx > 0 ? 'hidden md:flex' : 'flex'} ${idx > 1 ? 'md:hidden lg:flex' : ''}`}
                                >
                                    {/* Card Header */}
                                    <div className="flex items-start justify-between mb-6 relative">
                                        <div className="flex items-center gap-4">
                                            {/* Avatar initial */}
                                            <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xl uppercase shadow-inner">
                                                {review.reviewer.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-gray-900 leading-tight">{review.reviewer}</h4>
                                                <p className="text-sm text-gray-500">{review.date}</p>
                                            </div>
                                        </div>
                                        {/* Google G Logo SVG approximation */}
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center relative shadow-sm">
                                            <Image
                                                src="/google-g.svg"
                                                alt="Google Verified Review"
                                                width={18}
                                                height={18}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    {/* Rating & Verified Badge */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex text-gold">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="relative w-4 h-4 mx-px">
                                                    <Image
                                                        src="/star-solid.svg"
                                                        alt="Star"
                                                        fill
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BadgeCheck size={16} className="text-blue-500" fill="#EBF8FF" />
                                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Verified</span>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <div className="text-gray-700 leading-relaxed text-[15px] flex-grow">
                                        <p className="line-clamp-6">{review.text}</p>
                                        {review.text.length > 180 && (
                                            <button className="text-blue-600 text-sm font-semibold mt-2 hover:underline">
                                                Read more
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
