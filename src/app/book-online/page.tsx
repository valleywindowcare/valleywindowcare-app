import OnlineBookingPage, { metadata as originalMetadata } from '../online-booking/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    ...originalMetadata,
    alternates: {
        canonical: "https://valleyexteriorpros.com/online-booking",
    },
};

export default OnlineBookingPage;
