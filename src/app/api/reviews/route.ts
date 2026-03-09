import { NextResponse } from 'next/server';

const fallbackReviews = [
    {
        reviewer: "Emily Jakl",
        date: "5 months ago",
        text: "James was great to work with! I needed my roof cleaned and he took the time to explain the entire soft washing process. The results are incredible."
    },
    {
        reviewer: "Mark",
        date: "5 months ago",
        text: "James was amazing! He took the time over the phone to educate me on the process. His prices are great and his workmanship even better. I would recommend James if you folks need your house professionally washed!"
    },
    {
        reviewer: "Kirk Ritchie",
        date: "5 months ago",
        text: "Both windows and exterior were done and they look like new! Very friendly and very professional! Quick work and a job well done."
    },
    {
        reviewer: "Cortney Hakkarinen",
        date: "6 months ago",
        text: "I got my windows and my driveway cleaned with this company, and they truly did an amazing job! The crew was super nice! 10/10 service ☺️"
    },
    {
        reviewer: "cynthia m",
        date: "6 months ago",
        text: "James and Tyler pressure washed our vinyl and brick house, and a stone porch and patio last week. They were friendly, efficient and did excellent work. Everything looks a lot cleaner and newer, particularly the flagstone patio. I highly recommend their services!"
    },
    {
        reviewer: "Lux Flowers",
        date: "7 months ago",
        text: "Honestly, by far the best service. Detailed, fast to respond, and reasonably priced. They handled my soft washing and window cleaning perfectly, and the results were amazing."
    }
];

export async function GET() {
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.PLACE_ID;

    // Server-side functional fallback for missing keys
    if (!apiKey || !placeId) {
        return NextResponse.json(fallbackReviews);
    }

    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&reviews_sort=newest`);
        const data = await response.json();

        if (data.status === 'OK' && data.result.reviews) {
            const fiveStarReviews = data.result.reviews
                .filter((r: any) => r.rating === 5)
                .map((r: any) => ({
                    reviewer: r.author_name,
                    date: r.relative_time_description,
                    text: r.text
                }))
                .slice(0, 6);

            if (fiveStarReviews.length >= 3) {
                return NextResponse.json(fiveStarReviews);
            }
        }
        
        return NextResponse.json(fallbackReviews);
    } catch (error) {
        console.error("Google Places API error:", error);
        return NextResponse.json(fallbackReviews);
    }
}
