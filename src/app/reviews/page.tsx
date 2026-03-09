import React from 'react';
import Link from 'next/link';
import { Star, BadgeCheck, MessageCircleHeart } from 'lucide-react';

import ReviewSlider from '@/components/ReviewSlider';

export const metadata = {
    title: 'Customer Reviews & Testimonials | Valley Window Care',
    description: 'Read what our customers in Northeast Wisconsin say about our window cleaning, roof washing, and exterior cleaning services. 100+ 5-star Google Reviews.',
    alternates: {
        canonical: 'https://valleywindowcare.com/reviews'
    }
};

const reviews = [
    {
        reviewer: "Emily Jakl",
        date: "5 months ago",
        text: "James was great to work with! I would highly recommend him for any of your window cleaning needs."
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
    },
    {
        reviewer: "Samantha",
        date: "8 months ago",
        text: "Valley Window Care did a fantastic job on our home. They were responsive to our quote request and got us on the schedule quickly. Our house looks brand new!"
    },
    {
        reviewer: "Thomas K.",
        date: "8 months ago",
        text: "Highly professional service. They cleaned our gutters which were completely overflowing, and power washed the siding. The guys were polite and respectful of our property. Five stars."
    },
    {
        reviewer: "Melissa G.",
        date: "10 months ago",
        text: "We use them for our bi-annual window cleaning. Always on time, always leave the glass spotless. Highly recommend James and his team."
    },
    {
        reviewer: "David Schmidt",
        date: "1 year ago",
        text: "Tremendous value! I called them for a roof washing because we had some dark streaks forming. They completely eradicated the algae safely without pressure washing. Very knowledgeable about treating shingles."
    },
    {
        reviewer: "Sarah Johnston",
        date: "1 year ago",
        text: "They installed our permanent holiday lighting and we absolutely love it! The app is super easy to use, and they hid the wires perfectly behind our trim. The neighborhood loves our house!"
    }
];

export default function ReviewsPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-blue-50 bg-opacity-50 rounded-full flex items-center justify-center">
                            <MessageCircleHeart className="text-gold" size={40} />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-navy-dark mb-4">
                        Results That Speak For Themselves
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Over 100+ 5-Star reviews from homeowners across Northeast Wisconsin. We take pride in delivering a pristine clean, every single time.
                    </p>

                    {/* Top CTA */}
                    <a
                        href="https://www.google.com/search?q=valley+window+care+&sca_esv=507a868014978926&ei=3eWlacP0Kc2uqtsP0LSU8Qc&biw=1772&bih=1173&ved=0ahUKEwiD1-e1-oGTAxVNl2oFHVAaJX4Q4dUDCBE&uact=5&oq=valley+window+care+&gs_lp=Egxnd3Mtd2l6LXNlcnAiE3ZhbGxleSB3aW5kb3cgY2FyZSAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHki4HlAAWJoRcAB4AZABAZgB3wKgAbAVqgEIMC4xOC4wLjG4AQPIAQD4AQGYAhKgAp4TwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAgUQLhiABMICBRAAGIAEwgIIEAAYgAQYsQPCAiAQLhiABBiRAhjRAxjHARiKBRiXBRjcBBjeBBjgBNgBAcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAg0QLhiABBixAxhDGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICCxAuGIAEGNEDGMcBwgIOEC4YgAQYxwEYjgUYrwHCAg0QABiABBixAxhDGIoFwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBiRAhiKBcICERAuGIAEGLEDGIMBGMcBGK8BwgIHEAAYgAQYCsICCRAAGIAEGAoYC8ICCBAAGIAEGMkDwgIIEAAYFhgKGB7CAgIQJpgDALoGBggBEAEYFJIHBDAuMTigB_GFArIHBDAuMTi4B54TwgcGMC43LjExyAc7gAgA&sclient=gws-wiz-serp&zx=1772479974803&no_sw_cr=1#lrd=0x8802f7860e31a465:0xc422a0d3f9df71ea,1,,,,"
                        id="google-review-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-navy hover:bg-gold text-white font-bold py-4 px-8 rounded-full transition-colors text-lg shadow-md hover:shadow-lg"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-full p-1 border-2 border-white">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Leave Us A Google Review
                    </a>
                </div>

                {/* Trust Banner List */}
                <div className="flex flex-col gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-6 md:p-8 shadow-soft border border-gray-100 hover:border-blue-100 transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xl uppercase shadow-inner flex-shrink-0">
                                        {review.reviewer.charAt(0)}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 leading-none mb-1">{review.reviewer}</h3>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:items-end gap-1">
                                    <div className="flex text-gold">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} fill="#D4AF37" className="text-gold" />
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <BadgeCheck size={14} className="text-blue-500" fill="#EBF8FF" />
                                        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Verified</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-700 leading-relaxed text-[16px]">
                                <p>{review.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold text-navy-dark mb-6">Had a Great Experience?</h2>
                    <a
                        href="https://www.google.com/search?q=valley+window+care+&sca_esv=507a868014978926&ei=3eWlacP0Kc2uqtsP0LSU8Qc&biw=1772&bih=1173&ved=0ahUKEwiD1-e1-oGTAxVNl2oFHVAaJX4Q4dUDCBE&uact=5&oq=valley+window+care+&gs_lp=Egxnd3Mtd2l6LXNlcnAiE3ZhbGxleSB3aW5kb3cgY2FyZSAyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHki4HlAAWJoRcAB4AZABAZgB3wKgAbAVqgEIMC4xOC4wLjG4AQPIAQD4AQGYAhKgAp4TwgIREC4YgAQYkQIY0QMYxwEYigXCAgsQABiABBiRAhiKBcICERAuGIAEGLEDGNEDGIMBGMcBwgIOEC4YgAQYsQMY0QMYxwHCAgUQLhiABMICBRAAGIAEwgIIEAAYgAQYsQPCAiAQLhiABBiRAhjRAxjHARiKBRiXBRjcBBjeBBjgBNgBAcICChAAGIAEGEMYigXCAgsQABiABBixAxiDAcICCxAuGIAEGLEDGIMBwgILEC4YgAQYxwEYrwHCAg0QLhiABBixAxhDGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICCxAuGIAEGNEDGMcBwgIOEC4YgAQYxwEYjgUYrwHCAg0QABiABBixAxhDGIoFwgIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQHCAgsQLhiABBiRAhiKBcICERAuGIAEGLEDGIMBGMcBGK8BwgIHEAAYgAQYCsICCRAAGIAEGAoYC8ICCBAAGIAEGMkDwgIIEAAYFhgKGB7CAgIQJpgDALoGBggBEAEYFJIHBDAuMTigB_GFArIHBDAuMTi4B54TwgcGMC43LjExyAc7gAgA&sclient=gws-wiz-serp&zx=1772479974803&no_sw_cr=1#lrd=0x8802f7860e31a465:0xc422a0d3f9df71ea,1,,,,"
                        id="google-review-btn-bottom"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-navy hover:bg-gold text-white font-bold py-4 px-8 rounded-full transition-colors text-lg shadow-md hover:shadow-lg"
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="bg-white rounded-full p-1 border-2 border-white">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Leave Your Review Here
                    </a>
                </div>

            </div>
    <ReviewSlider />
</div>
    );
}
