import Hero from '@/components/Hero';
import GalleryClient from '@/components/GalleryClient';
import ReviewSlider from '@/components/ReviewSlider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Project Gallery | Valley Window Care and Exterior Cleaning",
    description: "Browse our portfolio of professional exterior cleaning, window washing, roof cleaning, and permanent lighting projects across Northeast Wisconsin."
};

const DYNAMIC_PORTFOLIO_MAPPING = [
    { src: "/images/portfolio/awning-cleaning.webp", title: "Commercial Awning Cleaning", category: "Commercial", alt: "Commercial exterior awning cleaning in Northeast Wisconsin" },
    { src: "/images/portfolio/building-wash.webp", title: "Commercial Building Soft Wash", category: "Commercial", alt: "Soft washing a commercial building exterior" },
    { src: "/images/portfolio/building-washing.webp", title: "Large Scale Building Washing", category: "Commercial", alt: "Large scale commercial building pressure washing" },
    { src: "/images/portfolio/commerical-pressure-wash.webp", title: "Commercial Pressure Washing", category: "Commercial", alt: "High power commercial pressure washing" },
    { src: "/images/portfolio/concrete-cleaning.webp", title: "Concrete & Driveway Cleaning", category: "Concrete Cleaning", alt: "Before and after concrete and driveway pressure washing" },
    { src: "/images/portfolio/deck-cleaning.webp", title: "Wood Deck Restoration & Cleaning", category: "House Washing", alt: "Professional wood deck cleaning and restoration" },
    { src: "/images/portfolio/drive-way-cleaning.webp", title: "Driveway Pressure Washing", category: "Concrete Cleaning", alt: "Concrete driveway power washing" },
    { src: "/images/portfolio/fence-cleaning-before-after.jpg.webp", title: "Vinyl Fence Cleaning", category: "House Washing", alt: "Before and after vinyl fence cleaning" },
    { src: "/images/portfolio/fence-cleaning.webp", title: "Wood Fence Soft Washing", category: "House Washing", alt: "Wood fence exterior soft washing" },
    { src: "/images/portfolio/forever-lights.webp", title: "Forever Lights Track Installation", category: "Holiday Lighting", alt: "Permanent track lighting installation" },
    { src: "/images/portfolio/graffiti-removal.jpg.webp", title: "Graffiti Removal Services", category: "Commercial", alt: "Commercial graffiti removal on brick" },
    { src: "/images/portfolio/gutter-cleaning.jpg.webp", title: "Gutter Debris Removal", category: "Gutter Cleaning", alt: "Before and after gutter cleaning and debris removal" },
    { src: "/images/portfolio/gutter-cleaning.webp", title: "Gutter Brightening", category: "Gutter Cleaning", alt: "Exterior gutter brightening and cleaning" },
    { src: "/images/portfolio/house-wash-before-after.webp", title: "Vinyl Siding House Wash", category: "House Washing", alt: "Before and after vinyl siding soft washing" },
    { src: "/images/portfolio/oil-stain-removal.webp", title: "Driveway Oil Stain Removal", category: "Concrete Cleaning", alt: "Oil stain removal from concrete driveway" },
    { src: "/images/portfolio/oxidation-removal.webp", title: "Siding Oxidation Removal", category: "House Washing", alt: "Vinyl siding chalky oxidation removal" },
    { src: "/images/portfolio/patio-cleaning.webp", title: "Concrete Patio Cleaning", category: "Concrete Cleaning", alt: "Concrete backyard patio pressure washing" },
    { src: "/images/portfolio/paver-cleaning-before-after.jpg.webp", title: "Paver Patio Cleaning", category: "Concrete Cleaning", alt: "Before and after brick paver patio cleaning" },
    { src: "/images/portfolio/paver-cleaning.webp", title: "Brick Paver Power Washing", category: "Concrete Cleaning", alt: "Brick paver power washing" },
    { src: "/images/portfolio/paver-restoration.webp", title: "Paver Restoration Process", category: "Concrete Cleaning", alt: "Paver restoration and cleaning" },
    { src: "/images/portfolio/paver-sanding.webp", title: "Paver Re-Sanding", category: "Concrete Cleaning", alt: "Polymeric sand application for pavers" },
    { src: "/images/portfolio/paver-sealing.webp", title: "Paver Sealing & Protection", category: "Concrete Cleaning", alt: "Applying protective sealant to brick pavers" },
    { src: "/images/portfolio/permanent-lighting.webp", title: "Permanent LED Lighting Installation", category: "Holiday Lighting", alt: "Permanent holiday LED lighting under eaves" },
    { src: "/images/portfolio/permanent-lights.webp", title: "Custom Permanent Home Lighting", category: "Holiday Lighting", alt: "Custom permanent LED home lighting system at night" },
    { src: "/images/portfolio/post-construction-cleaning.webp", title: "Post-Construction Window Cleaning", category: "Window Cleaning", alt: "Window cleaning on new construction" },
    { src: "/images/portfolio/pressure-wash-before-after.jpg.webp", title: "Exterior Pressure Washing", category: "House Washing", alt: "Before and after exterior pressure washing" },
    { src: "/images/portfolio/pressure-washing.webp", title: "High Power Surface Cleaning", category: "Concrete Cleaning", alt: "Surface cleaner operating on concrete" },
    { src: "/images/portfolio/roof-clean.webp", title: "Asphalt Shingle Roof Soft Wash", category: "Roof Cleaning", alt: "Soft washing asphalt shingle roof" },
    { src: "/images/portfolio/roof-cleaning-before-after.jpg.webp", title: "Roof Stain Removal", category: "Roof Cleaning", alt: "Before and after black streak removal on roof" },
    { src: "/images/portfolio/roof-cleaning.webp", title: "Professional Roof Cleaning", category: "Roof Cleaning", alt: "Professional soft wash roof cleaning" },
    { src: "/images/portfolio/rust-removal-before-after.webp", title: "Residential Rust Removal", category: "House Washing", alt: "Before and after rust stain removal on siding" },
    { src: "/images/portfolio/soft-washing.webp", title: "Gentle Exterior Soft Washing", category: "House Washing", alt: "Gentle low pressure soft washing" },
    { src: "/images/portfolio/store-front-cleaning.webp", title: "Storefront Concrete Cleaning", category: "Commercial", alt: "Commercial storefront concrete cleaning" },
    { src: "/images/portfolio/valley-window-care-truck.webp", title: "Valley Window Care Equipment", category: "House Washing", alt: "Fully equipped Valley Window Care truck" },
    { src: "/images/portfolio/window-cleaning-before-after.jpg.webp", title: "Residential Window Cleaning", category: "Window Cleaning", alt: "Before and after streak-free window cleaning" },

    { src: "/images/portfolio/commercial-cleaning.webp", title: "Commercial Exterior Cleaning", category: "Commercial", alt: "Commercial exterior soft washing and cleaning" },
    { src: "/images/portfolio/deck-cleaning.webp", title: "Deck Cleaning & Restoration", category: "House Washing", alt: "Professional wood deck cleaning and restoration" },
    { src: "/images/portfolio/drive-through-cleaning-before-after-copy-2.webp", title: "Drive-Through Cleaning Before & After", category: "Commercial", alt: "Before and after commercial drive-through cleaning" },
    { src: "/images/portfolio/drive-through-cleaning-copy.webp", title: "Drive-Through Pressure Washing", category: "Commercial", alt: "Commercial drive-through pressure washing" },
    { src: "/images/portfolio/drive-through-cleaning.webp", title: "Drive-Through Cleaning", category: "Commercial", alt: "Drive-through concrete cleaning" },
    { src: "/images/portfolio/estimate-meeting.webp", title: "In-Person Project Estimate", category: "Commercial", alt: "On-site exterior cleaning project estimate" },
    { src: "/images/portfolio/garage-cleaning-before-after.webp", title: "Garage Floor Cleaning", category: "Concrete Cleaning", alt: "Before and after garage floor cleaning" },
    { src: "/images/portfolio/hood-vent-cleaning.webp", title: "Commercial Hood Vent Cleaning", category: "Commercial", alt: "Restaurant hood vent cleaning" },
    { src: "/images/portfolio/house-washing.webp", title: "Residential House Washing", category: "House Washing", alt: "Residential house washing" },
    { src: "/images/portfolio/parking-lot-cleaning-before-after.webp", title: "Parking Lot Cleaning", category: "Commercial", alt: "Before and after parking lot cleaning" },
    { src: "/images/portfolio/parking-lot-cleaning-before-and-after.webp", title: "Commercial Parking Lot Washing", category: "Commercial", alt: "Commercial parking lot washing before and after" },
    { src: "/images/portfolio/restuarnt-cleaning.webp", title: "Restaurant Exterior Cleaning", category: "Commercial", alt: "Restaurant exterior washing" },
    { src: "/images/portfolio/roof-cleaning-copy-3.webp", title: "Residential Roof Soft Washing", category: "Roof Cleaning", alt: "Residential roof soft washing" },
    { src: "/images/portfolio/rust-removal.webp", title: "Rust Stain Removal", category: "House Washing", alt: "Rust stain removal from exterior" },
    { src: "/images/portfolio/solar-panel-cleaning.webp", title: "Solar Panel Cleaning", category: "Window Cleaning", alt: "Professional solar panel cleaning" },
    { src: "/images/portfolio/window-cleaning-copy.webp", title: "Residential Window Washing", category: "Window Cleaning", alt: "Residential window washing" },
    { src: "/images/portfolio/window-cleaning.webp", title: "Commercial Window Cleaning", category: "Window Cleaning", alt: "Commercial window cleaning" }
];

export default function GalleryPage() {
    return (
        <main className="bg-slate-50 min-h-screen pb-20">
            <Hero
                h1="Our Work Gallery"
                description="Browse our portfolio of professional exterior cleaning and permanent lighting projects across Northeast Wisconsin."
            />
            {/* Fully Type-Safe Semantic Mapping Inject */}
            <GalleryClient images={DYNAMIC_PORTFOLIO_MAPPING} />
            <ReviewSlider />
        </main>
    );
}
