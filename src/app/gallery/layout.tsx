import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Work Gallery | Valley Window Care and Exterior Cleaning',
    description: 'Explore our portfolio showcasing premium residential and commercial exterior cleaning, power washing, and permanent LED lighting installations delivering incredible results across Door County, Green Bay, and all of Northeast Wisconsin.'
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
