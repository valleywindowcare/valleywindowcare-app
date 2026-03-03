import fs from 'fs';
import path from 'path';

const BLOG_DATA_FILE = path.join(process.cwd(), 'src/data/blogContent.json');

const windowCleaningContent = `
<div class="prose prose-lg max-w-none text-gray-800">
    <p class="lead text-xl text-gray-600 mb-8">Achieving crystal clear, streak-free windows can instantly elevate the look of your home or business in Green Bay. However, doing it right requires more than just a paper towel and standard glass cleaner.</p>
    
    <h2>1. Ditch the Paper Towels</h2>
    <p>Paper towels leave behind lint and dust. Instead, use a professional-grade microfiber cloth or a high-quality squeegee. A squeegee allows you to wipe away the cleaning solution efficiently without smearing the dirt.</p>

    <h2>2. Clean on a Cloudy Day</h2>
    <p>It might seem counterintuitive, but cleaning windows in direct sunlight causes the cleaning solution to dry too quickly, leaving stubborn streaks baked onto the glass. Overcast days are your best friend for window washing.</p>

    <h2>3. The Two-Scrubber Method</h2>
    <p>Always have one scrubber designated strictly for applying the cleaning solution and another dry microfiber cloth specifically for detailing the edges. This prevents dirty water from being pushed back onto the clean pane.</p>

    <h2>4. Mind the Frames and Sills</h2>
    <p>Before touching the glass, ensure you vacuum or wipe down the window tracks and sills. If you wet the glass first, any dirt in the sill can turn into mud and ruin your clean window when you reach the bottom.</p>
    
    <div class="my-10 bg-navy text-center p-8 rounded-2xl shadow-lg border border-navy-dark relative overflow-hidden">
        <h3 class="text-3xl font-extrabold text-white mb-4 relative z-10">Skip the Ladder. Hire the Pros.</h3>
        <p class="text-gray-300 text-lg mb-6 relative z-10">Don't risk injury for streaky windows. Let Valley Window Care deliver a flawless shine.</p>
        <a href="tel:920-609-7085" class="inline-flex items-center justify-center bg-gold text-navy-dark font-black text-lg py-4 px-10 rounded-full hover:bg-gold-light transition-all shadow-lg hover:-translate-y-1 relative z-10 uppercase tracking-widest">
            Call (920) 609-7085
        </a>
    </div>

    <h2>5. Use a Purified Water System</h2>
    <p>Tap water contains minerals like calcium and magnesium, which cause hard water stains. At Valley Window Care, we utilize a multi-stage water purification system that leaves spot-free results every time.</p>

    <h2>6. Don't Forget the Screens</h2>
    <p>Washing your windows but leaving the screens dirty means the first time it rains, dirt will transfer right back onto the glass. Remove and gently scrub your screens with a soft bristle brush and mild detergent.</p>

    <h2>7. Set a Regular Schedule</h2>
    <p>For optimal maintenance and to prevent permanent hard water etching, we recommend cleaning your exterior windows at least twice a year—once in the spring and once in the Fall.</p>
</div>
`;

const defaultContent = (service) => `
<div class="prose prose-lg max-w-none text-gray-800">
    <p class="lead text-xl text-gray-600 mb-8">Maintaining the exterior of your property is essential for long-term value and curb appeal. At Valley Window Care, we take ${service} seriously.</p>
    <h2>The Importance of Professional Maintenance</h2>
    <p>Doing it yourself can lead to property damage or injury. Professional technicians have the right pressure systems, biodegradable solutions, and safety equipment to ensure a flawless finish without destroying your siding or roofing materials.</p>
    <ul>
        <li>Protects against organic growth (algae, moss)</li>
        <li>Increases property resale value</li>
        <li>Extends the life of your exterior surfaces</li>
    </ul>
    
    <div class="my-10 bg-navy text-center p-8 rounded-2xl shadow-lg border border-navy-dark relative overflow-hidden">
        <h3 class="text-3xl font-extrabold text-white mb-4 relative z-10">Ready to Restore Your Property?</h3>
        <p class="text-gray-300 text-lg mb-6 relative z-10">We deliver premium ${service} across Green Bay.</p>
        <a href="tel:920-609-7085" class="inline-flex items-center justify-center bg-gold text-navy-dark font-black text-lg py-4 px-10 rounded-full hover:bg-gold-light transition-all shadow-lg hover:-translate-y-1 relative z-10 uppercase tracking-widest">
            Call (920) 609-7085
        </a>
    </div>
</div>
`;

const manualBlogs = [
    {
        slug: "window-cleaning-company-in-green-bay-wisconsin",
        url: "https://valleywindowcare.com/window-cleaning-company-in-green-bay-wisconsin/",
        title: "7 Tips for Dazzling Window Cleaning and a Streak-Free Shine",
        author: "Valley Window Care",
        date: new Date("2024-03-25T14:30:00Z").toISOString(),
        image: "/gallery/blog-historic-window-cleaning-2.webp",
        content: windowCleaningContent.trim(),
        category: "Window Cleaning"
    },
    {
        slug: "professional-power-washing-services-green-bay-wisconsin-valley-window-care",
        url: "https://valleywindowcare.com/professional-power-washing-services-green-bay-wisconsin-valley-window-care/",
        title: "Professional Power Washing Services Green Bay Wisconsin",
        author: "Valley Window Care",
        date: new Date("2024-03-24T10:00:00Z").toISOString(),
        image: "/gallery/blog-historic-house-washing-1.webp",
        content: defaultContent("Power Washing").trim(),
        category: "Power Washing"
    },
    {
        slug: "blog-exterior-home-cleaning-guide",
        url: "https://valleywindowcare.com/blog-exterior-home-cleaning-guide/",
        title: "An Expert’s Guide to Cleaning the Exterior of Your Property",
        author: "Valley Window Care",
        date: new Date("2024-03-20T09:15:00Z").toISOString(),
        image: "/site-gallery/job1.jpg",
        content: defaultContent("Exterior Cleaning").trim(),
        category: "Exterior Cleaning"
    },
    {
        slug: "diy-paver-patio-cleaning-solutions-with-household-products",
        url: "https://valleywindowcare.com/diy-paver-patio-cleaning-solutions-with-household-products/",
        title: "DIY Paver Patio Cleaning Solutions with Household Products",
        author: "Valley Window Care",
        date: new Date("2024-03-15T11:45:00Z").toISOString(),
        image: "/site-gallery/job2.jpg",
        content: defaultContent("Paver Restoration").trim(),
        category: "Paver Restoration"
    },
    {
        slug: "how-often-should-you-clean-your-roof",
        url: "https://valleywindowcare.com/how-often-should-you-clean-your-roof/",
        title: "How Often Should You Clean Your Roof?",
        author: "Valley Window Care",
        date: new Date("2024-03-10T16:20:00Z").toISOString(),
        image: "/gallery/blog-historic-roof-cleaning-0.webp",
        content: defaultContent("Roof Cleaning").trim(),
        category: "Roof Cleaning"
    }
];

function run() {
    console.log('[START] Wiping old buggy blogContent.json...');
    fs.writeFileSync(BLOG_DATA_FILE, JSON.stringify(manualBlogs, null, 2));
    console.log('[SUCCESS] Directly injected 5 manual blog posts into blogContent.json.');
    console.log('[SUCCESS] Window Cleaning Tips post perfectly injected with full HTML and 920-609-7085 callout.');
}

run();
