import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Destructure payload injected by client, including the uuid for deduplication
        const {
            name,
            email,
            phone,
            squareFootage,
            projectDetails,
            servicesRequested,
            eventId
        } = body;
        


        // --- 2. FIRE META CONVERSIONS API (CAPI) LEAD EVENT ---
        // Ensure tokens are present in the server environment
        const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
        const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN;
        
        if (META_PIXEL_ID && META_CAPI_TOKEN) {
            // Hash user data per Meta's strict privacy requirements (SHA-256)
            // https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters#hash
            const hashData = (data: string) => {
                if (!data) return '';
                return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
            };
            
            // Generate client IP and User Agent headers for better event matching
            const ipAddress = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';
            const userAgent = request.headers.get('user-agent') || '';

            const capiPayload = {
                data: [
                    {
                        event_name: "Lead",
                        event_time: Math.floor(Date.now() / 1000), // Unix timestamp in seconds
                        action_source: "website",
                        event_id: eventId, // CRITICAL: This exact UUID must map to the browser Pixel eventID
                        event_source_url: request.headers.get('referer') || "https://valleywindowcare.com/",
                        user_data: {
                            client_ip_address: ipAddress,
                            client_user_agent: userAgent,
                            em: [hashData(email)],
                            ph: [hashData(phone)], // Phone should ideally include country code e.g. '19206097085'
                        }
                    }
                ],
                // Add test code here if debugging via Events Manager: test_event_code: "TEST57034"
            };

            const capiResponse = await fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${META_CAPI_TOKEN}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(capiPayload)
            });
            
            const capiText = await capiResponse.text();
            let capiResult;
            
            try {
                capiResult = JSON.parse(capiText);
            } catch (e) {
                console.error("META CAPI RAW ERROR HTML:", capiText);
                capiResult = { error: { message: "Invalid Non-JSON response from Meta" } };
            }
            
            if (!capiResponse.ok) {
                console.error("META CAPI ERROR IN API ROUTE:", capiResult);
                // We don't fail the complete lead response if tracking fails, just log it.
            } else {
                console.log("META CAPI EVENT SUCCESSFULLY FIRED. EVENT_ID:", eventId);
            }
        } else {
            console.warn("Meta Pixel ID or CAPI Token missing from environment variables. Skipping CAPI event.");
        }

        // --- 3. RESPOND SUCCESS BACK TO CLIENT ROUTE ---
        return NextResponse.json({ success: true, message: "Lead submitted successfully" }, { status: 200 });

    } catch (error) {
        console.error("API ROUTE CRITICAL CRASH:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error submitting lead." },
            { status: 500 }
        );
    }
}
