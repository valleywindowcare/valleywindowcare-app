export const trackLeadConversion = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL,
    });
  }
};
