export interface LeadAttribution {
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
    gclid: string;
    fbclid: string;
    landing_page: string;
    referrer: string;
    timestamp?: number;
}

const STORAGE_KEY = "vps_lead_attribution";
const COOKIE_NAME = "vps_lead_attr";
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;
const NINETY_DAYS_SEC = 90 * 24 * 60 * 60;

/**
 * Safely parse cookie string by name
 */
function getCookie(name: string): string | null {
    if (typeof document === "undefined") return null;
    try {
        const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
    } catch {
        return null;
    }
}

/**
 * Safely set a 90-day first-party cookie
 */
function setCookie(name: string, value: string): void {
    if (typeof document === "undefined") return;
    try {
        document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${NINETY_DAYS_SEC}; SameSite=Lax`;
    } catch {
        // Silently handle blocked cookies
    }
}

/**
 * Safely read stored attribution data from localStorage or Cookie
 */
export function getStoredAttribution(): LeadAttribution | null {
    if (typeof window === "undefined") return null;

    // 1. Try localStorage
    try {
        const item = window.localStorage.getItem(STORAGE_KEY);
        if (item) {
            const parsed = JSON.parse(item) as LeadAttribution;
            if (parsed && (!parsed.timestamp || Date.now() - parsed.timestamp < NINETY_DAYS_MS)) {
                return parsed;
            }
        }
    } catch {
        // localStorage might be blocked or restricted
    }

    // 2. Fallback to Cookie
    try {
        const cookieVal = getCookie(COOKIE_NAME);
        if (cookieVal) {
            const parsed = JSON.parse(cookieVal) as LeadAttribution;
            if (parsed && (!parsed.timestamp || Date.now() - parsed.timestamp < NINETY_DAYS_MS)) {
                return parsed;
            }
        }
    } catch {
        // Cookie parsing failed or blocked
    }

    return null;
}

/**
 * Safely save attribution to both localStorage and Cookie
 */
export function saveAttribution(data: LeadAttribution): void {
    if (typeof window === "undefined") return;

    const dataWithTimestamp = {
        ...data,
        timestamp: data.timestamp || Date.now(),
    };
    const serialized = JSON.stringify(dataWithTimestamp);

    // Save to localStorage
    try {
        window.localStorage.setItem(STORAGE_KEY, serialized);
    } catch {
        // Ignore if storage full or blocked
    }

    // Save to Cookie
    try {
        setCookie(COOKIE_NAME, serialized);
    } catch {
        // Ignore if cookies disabled
    }
}

/**
 * Captures attribution from current URL and document.referrer.
 * Adheres strictly to the rule:
 * Keep FIRST touch values; don't overwrite unless a new gclid or fbclid arrives.
 */
export function captureAttribution(): LeadAttribution {
    if (typeof window === "undefined") {
        return {
            utm_source: "",
            utm_medium: "",
            utm_campaign: "",
            utm_term: "",
            utm_content: "",
            gclid: "",
            fbclid: "",
            landing_page: "",
            referrer: "",
        };
    }

    let urlParams: URLSearchParams | null = null;
    try {
        urlParams = new URLSearchParams(window.location.search);
    } catch {
        // Fallback for safety
    }

    const currentGclid = urlParams?.get("gclid")?.trim() || "";
    const currentFbclid = urlParams?.get("fbclid")?.trim() || "";
    const currentSource = urlParams?.get("utm_source")?.trim() || "";
    const currentMedium = urlParams?.get("utm_medium")?.trim() || "";
    const currentCampaign = urlParams?.get("utm_campaign")?.trim() || "";
    const currentTerm = urlParams?.get("utm_term")?.trim() || "";
    const currentContent = urlParams?.get("utm_content")?.trim() || "";

    const currentLandingPage = window.location.href;
    const currentReferrer = typeof document !== "undefined" ? document.referrer || "" : "";

    const existing = getStoredAttribution();

    // Check if a new gclid or fbclid arrived that differs from what we stored
    const hasNewGclid = Boolean(currentGclid && (!existing || existing.gclid !== currentGclid));
    const hasNewFbclid = Boolean(currentFbclid && (!existing || existing.fbclid !== currentFbclid));

    // If we already have stored first-touch data and NO new ad click arrived, keep the existing data
    if (existing && !hasNewGclid && !hasNewFbclid) {
        return existing;
    }

    // Otherwise, calculate new touch attribution
    let derivedSource = currentSource;
    let derivedMedium = currentMedium;

    if (!derivedSource && currentReferrer) {
        try {
            const refUrl = new URL(currentReferrer);
            const host = refUrl.hostname.toLowerCase();
            if (host.includes("google.")) {
                derivedSource = "google";
                derivedMedium = derivedMedium || "organic";
            } else if (host.includes("bing.")) {
                derivedSource = "bing";
                derivedMedium = derivedMedium || "organic";
            } else if (host.includes("facebook.") || host.includes("fb.me")) {
                derivedSource = "facebook";
                derivedMedium = derivedMedium || "social";
            } else if (host.includes("instagram.")) {
                derivedSource = "instagram";
                derivedMedium = derivedMedium || "social";
            } else if (host.includes("yahoo.")) {
                derivedSource = "yahoo";
                derivedMedium = derivedMedium || "organic";
            } else if (!host.includes(window.location.hostname.toLowerCase())) {
                derivedSource = host;
                derivedMedium = derivedMedium || "referral";
            }
        } catch {
            // Ignore URL parsing errors
        }
    }

    if (!derivedSource && (currentGclid || currentFbclid)) {
        derivedSource = currentGclid ? "google" : "facebook";
        derivedMedium = derivedMedium || "cpc";
    }

    const newAttribution: LeadAttribution = {
        utm_source: derivedSource || "",
        utm_medium: derivedMedium || "",
        utm_campaign: currentCampaign || "",
        utm_term: currentTerm || "",
        utm_content: currentContent || "",
        gclid: currentGclid || "",
        fbclid: currentFbclid || "",
        landing_page: currentLandingPage,
        referrer: currentReferrer,
        timestamp: Date.now(),
    };

    saveAttribution(newAttribution);
    return newAttribution;
}

/**
 * Get empty fallback attribution object
 */
export function getDefaultAttribution(): LeadAttribution {
    return {
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: "",
        gclid: "",
        fbclid: "",
        landing_page: "",
        referrer: "",
    };
}
