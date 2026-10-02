import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Destructure payload injected by client, including tracking & consent
        const {
            name,
            email,
            phone,
            address,
            squareFootage,
            projectDetails,
            servicesRequested,
            eventId,
            sms_consent,
            smsConsent,
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content,
            gclid,
            fbclid,
            landing_page,
            referrer
        } = body;

        const resolvedSmsConsent = sms_consent || smsConsent || "no";

        // Server-side validation for required property address
        if (!address || typeof address !== 'string' || !address.trim()) {
            return NextResponse.json(
                { success: false, message: "Property address is required to provide an accurate estimate." },
                { status: 400 }
            );
        }

        console.log("📥 LEAD SUBMISSION RECEIVED:", {
            name,
            email,
            phone,
            address,
            squareFootage,
            servicesRequested,
            sms_consent: resolvedSmsConsent,
            utm_source: utm_source || "",
            utm_medium: utm_medium || "",
            utm_campaign: utm_campaign || "",
            utm_term: utm_term || "",
            utm_content: utm_content || "",
            gclid: gclid || "",
            fbclid: fbclid || "",
            landing_page: landing_page || "",
            referrer: referrer || "",
            eventId: eventId || ""
        });

        // --- 1. OPTIONAL ZAPIER / CRM WEBHOOK FORWARDING ---
        const webhookUrl = process.env.ZAPIER_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL;
        if (webhookUrl) {
            fetch(webhookUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    name,
                    email,
                    phone,
                    address,
                    squareFootage,
                    projectDetails,
                    servicesRequested,
                    sms_consent: resolvedSmsConsent,
                    utm_source: utm_source || "",
                    utm_medium: utm_medium || "",
                    utm_campaign: utm_campaign || "",
                    utm_term: utm_term || "",
                    utm_content: utm_content || "",
                    gclid: gclid || "",
                    fbclid: fbclid || "",
                    landing_page: landing_page || "",
                    referrer: referrer || "",
                    eventId: eventId || ""
                }),
            }).catch(e => console.error("Zapier / CRM Webhook forwarding error:", e));
        }

        // --- 2. FIRE META CONVERSIONS API (CAPI) LEAD EVENT ---
        // Ensure tokens are present in the server environment
        const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "585331990290278";
        const META_CAPI_TOKEN = process.env.META_CAPI_TOKEN;
        
        if (META_PIXEL_ID && META_CAPI_TOKEN) {
            // Hash user data per Meta's strict privacy requirements (SHA-256)
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
                        event_source_url: request.headers.get('referer') || landing_page || "https://valleyexteriorpros.com/",
                        user_data: {
                            client_ip_address: ipAddress,
                            client_user_agent: userAgent,
                            em: [hashData(email || '')],
                            ph: [hashData(phone || '')],
                        }
                    }
                ],
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
