export const trackLeadConversion = (transactionId?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL,
      ...(transactionId ? { transaction_id: transactionId } : {}),
    });
  }
};

