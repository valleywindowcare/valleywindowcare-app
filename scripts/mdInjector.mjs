import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'src', 'data', 'posts');

// 1. Gather strictly unique authentic images
let uniqueImages = [];
const lookPath = path.join(process.cwd(), 'public', 'assets', 'gallery');

if (fs.existsSync(lookPath)) {
    const files = fs.readdirSync(lookPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'));
    for (const file of files) {
        let relativePath = '/assets/gallery/' + file;
        if (!uniqueImages.includes(relativePath)) {
            uniqueImages.push(relativePath);
        }
    }
}

// Raw user data map
const postsData = `Window Cleaning	5 Reasons to Hire Professional Window Cleaners in De Pere	Window Cleaning
Window Cleaning	Why Tap Water Leaves Streaks on Green Bay Windows	Window Cleaning
Roof Cleaning	How to Safely Remove Moss from Roof Shingles in Appleton	Roof Cleaning
Roof Cleaning	The Cost of Ignoring Black Algae Streaks on Your Shawano Home	Roof Cleaning
Gutter Cleaning	Why Gutter Guards Fail During Wisconsin Spring Rainstorms	Gutter Cleaning
Gutter Cleaning	The Homeowner's Guide to Gutter Cleaning in Howard-Suamico	Gutter Cleaning
Holiday Lighting	Professional Christmas Light Installation Trends in Ledgeview	Holiday Lighting
Holiday Lighting	How to Safely Decorate High Peaks for the Holidays in Ashwaubenon	Holiday Lighting
Pressure Washing	Soft Wash vs. Pressure Washing: What’s Best for Fox Valley Siding?	Pressure Washing
Hood Cleaning	NFPA 96 Compliance for Green Bay Restaurants: A Safety Checklist	Hood Cleaning
Commercial	Why Green Bay HOAs Choose Valley Window Care for Annual Maintenance	Commercial
Window Cleaning	Best Time of Year for Window Cleaning in Northeast Wisconsin	Window Cleaning
Roof Cleaning	Does Roof Cleaning Really Extend the Life of Your Shingles?	Roof Cleaning
Gutter Cleaning	3 Signs Your Appleton Gutters Are Pulling Away from the Roof	Gutter Cleaning
Pressure Washing	Preparing Your De Pere Patio for Summer: A Power Washing Guide	Pressure Washing
Holiday Lighting	Energy-Efficient LED Holiday Lighting for Green Bay Businesses	Holiday Lighting
Hood Cleaning	How Often Should You Clean Your Commercial Hood in Appleton?	Hood Cleaning
Window Cleaning	Residential Window Cleaning for Historic Homes in Neenah	Window Cleaning
General Service	Why Professional Exterior Cleaning Boosts Ledgeview Curb Appeal	General Service
Gutter Cleaning	Preventing Ice Dams: The Role of Clean Gutters in Wisconsin Winters	Gutter Cleaning
Pressure Washing	Removing Rust Stains from Green Bay Driveways Safely	Pressure Washing
Commercial	Multi-Unit Window Cleaning Solutions for Appleton Property Managers	Commercial
Window Cleaning	Cleaning Screen and Tracks: The Forgotten Part of Window Maintenance	Window Cleaning
Roof Cleaning	Why You Should Never Pressure Wash Your Shingles in Green Bay	Roof Cleaning
Hood Cleaning	Keeping Your Kitchen Safe: Commercial Hood Cleaning in Oshkosh	Hood Cleaning
Holiday Lighting	Custom Holiday Lighting vs. Box Store Lights: What’s the Difference?	Holiday Lighting
Pressure Washing	Rejuvenating Your Wood Deck in De Pere: Wash, Seal, Protect	Pressure Washing
Window Cleaning	Post-Construction Window Cleaning Tips for Green Bay Builders	Window Cleaning
Gutter Cleaning	Are Your Gutters Overflowing? Check for These Hidden Clogs	Gutter Cleaning
Roof Cleaning	Removing Lichen and Moss from Appleton North-Facing Roofs	Roof Cleaning
Pressure Washing	Soft Washing Brick Homes: The Safe Alternative to High Pressure	Pressure Washing
Holiday Lighting	Permanent Holiday Lighting: Is It Worth the Investment for Wisconsin?	Holiday Lighting
Hood Cleaning	Exhaust Fan Maintenance for Green Bay Commercial Kitchens	Hood Cleaning
Window Cleaning	Eco-Friendly Window Cleaning: Our Commitment to Northeast Wisconsin	Window Cleaning
Gutter Cleaning	Protecting Your Foundation: Why Downspouts and Gutters Matter	Gutter Cleaning
Roof Cleaning	The ROI of Roof Cleaning Before Selling Your Green Bay Home	Roof Cleaning
Pressure Washing	Cleaning Vinyl Fences: Keeping Your Appleton Perimeter Bright	Pressure Washing
Holiday Lighting	Creating a Winter Wonderland: Large Property Holiday Lighting Tips	Holiday Lighting
Window Cleaning	High-Reach Window Cleaning for Appleton Commercial Buildings	Window Cleaning
Hood Cleaning	Duct Cleaning Requirements for Wisconsin Food Safety Inspections	Hood Cleaning
Gutter Cleaning	Downspout Drainage Solutions for Green Bay Landscaping	Gutter Cleaning
Pressure Washing	Removing Oil and Grease from Wisconsin Gas Station Pavements	Pressure Washing
Window Cleaning	Why Hard Water Stains are a Nightmare for Green Bay Homeowners	Window Cleaning
Holiday Lighting	Timing Your Holiday Light Removal: Tips for Fox Valley Residents	Holiday Lighting
Roof Cleaning	Can Dirty Roofs Raise Your Wisconsin Home Insurance Premiums?	Roof Cleaning
Gutter Cleaning	Identifying Gutter Damage After a Wisconsin Hail Storm	Gutter Cleaning
Pressure Washing	Industrial Pressure Washing for Green Bay Warehouses	Pressure Washing
Window Cleaning	Skylight Cleaning: How to Get the Best Natural Light in Appleton	Window Cleaning
Holiday Lighting	Safe Holiday Lighting for Senior Living Communities in Green Bay	Holiday Lighting
Hood Cleaning	Valley Window Care: Your Partner in Appleton Restaurant Safety	Hood Cleaning`;

// Strict exact category normalizer
const normalizeCategory = (cat) => {
    if (cat.includes("Hood") || cat.includes("Commercial") || cat.includes("Restaurant")) return "Commercial Hood Cleaning";
    if (cat.includes("Window")) return "Window Cleaning";
    if (cat.includes("Roof") || cat.includes("Shingle") || cat.includes("Moss")) return "Roof Cleaning";
    if (cat.includes("Gutter") || cat.includes("Downspout")) return "Gutter Cleaning";
    if (cat.includes("Wash") || cat.includes("General Service") || cat.includes("Deck") || cat.includes("Rust")) return "Pressure Washing";
    if (cat.includes("Light") || cat.includes("Holiday") || cat.includes("Christmas")) return "Holiday Lighting";
    return "Pressure Washing"; // Final fallback
};

const parseRows = () => {
    return postsData.split('\n').filter(Boolean).map(row => {
        const parts = row.split('\t');
        return { category: normalizeCategory(parts[0].trim()), title: parts[1].trim() };
    });
};

const externalLinks = {
    "Window Cleaning": '[IWCA.org (International Window Cleaning Association)](https://www.iwca.org/)',
    "Roof Cleaning": '[ARMA specifications (Asphalt Roofing Manufacturers Association)](https://www.asphaltroofing.org/algae-discoloration-of-roofs/)',
    "Gutter Cleaning": '[FEMA guidelines on residential water diversion](https://www.fema.gov/node/404946)',
    "Holiday Lighting": '[CPSC Holiday Lighting Safety Standards](https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Holiday-Safety)',
    "Pressure Washing": '[EPA guidelines on exterior runoff](https://www.epa.gov/nps/nonpoint-source-volunteers)',
    "Hood Cleaning": '[NFPA.org (National Fire Protection Association) compliance mandates](https://www.nfpa.org/codes-and-standards/all-codes-and-standards)',
    "Commercial": '[BOMA (Building Owners and Managers Association)](https://www.boma.org/)',
    "General Service": '[National Association of Realtors exterior statistics](https://www.nar.realtor/curb-appeal)'
};

const internalServiceLinks = {
    "Window Cleaning": "/services/window-cleaning",
    "Roof Cleaning": "/services/roof-cleaning",
    "Gutter Cleaning": "/services/gutter-cleaning",
    "Holiday Lighting": "/services/holiday-lighting",
    "Pressure Washing": "/services/house-washing",
    "Hood Cleaning": "/services/hood-cleaning",
    "Commercial": "/services/hood-cleaning",
    "General Service": "/services/house-washing"
};

const slugifyOptions = str => {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const generateMarkdownBody = (title, category, matchedCity, locationRouteName) => {
    const keyword = title;

    // Explicit markdown links per constraints
    const internalLink = `[${category}](${internalServiceLinks[category] || '/services/house-washing'})`;
    const locationLink = `[${matchedCity} Exterior Cleaning](/service-areas/${locationRouteName})`;
    const extLink = externalLinks[category] || externalLinks["General Service"];

    // The user EXPLICITLY requested the rewrite of the FIRST paragraph to naturally include 'Valley Window Care and Exterior Cleaning'.
    const intro = `Home maintenance in Northeast Wisconsin is an ongoing challenge that demands serious attention. With extreme seasonal shifts ranging from bitter, ice-heavy winters to humid, storm-filled summers, your exterior surfaces take constant damage. For property owners, understanding the nuances of things like ${keyword} is critical. Proactive exterior maintenance protects your structural integrity, enhances curb appeal, and extends the lifespan of expensive installations like siding, shingles, or concrete. **Valley Window Care and Exterior Cleaning** specializes in mitigating these exact risks accurately and professionally. In this comprehensive breakdown, we discuss why addressing these specific needs matters right now, and how relying on our specialized ${locationLink} technicians ensures the difficult work is handled correctly without any dangerous shortcuts.`;

    const body1 = `## The Environmental Impact on Your Property
Wisconsin weather is unapologetic. The extreme freeze-thaw cycles create micro-fractures in surfaces where organic spores take hold over time. Algae and mold spores are airborne, landing on roofs, siding, and concrete where they feed on limestone fillers and physical moisture. This biological degradation directly accelerates the breakdown of your home's exterior shell. Professional ${internalLink} solutions utilize specialized detergents designed to kill these spores at the root level rather than just blasting away the surface layer. Doing so ensures a long-lasting clean that protects the substrate. To understand the broader impact of proper maintenance techniques, it is highly valuable to review the ${extLink}.
    
## Why DIY Methods Often Fail
It might be tempting to tackle things with a rented machine, but high pressure is exactly the wrong tool for delicate exteriors like siding or roofing. We see countless properties in ${matchedCity} with etched concrete, stripped paint, or blown window seals caused by improper DIY washing and lack of mechanical experience. Our specialized approach relies on calculated chemical profiles—often termed 'Soft Washing'—which neutralizes algae and dirt without abrasive, unmeasured force. The absolute goal is structural preservation just as much as aesthetic surface restoration. Safety and compliance are also massive factors in protecting a home's overall long-term valuation and structural longevity.

## Protecting the Value of Your Investment
First impressions dictate property value immediately. Real estate experts confirm that a meticulously clean exterior significantly boosts curb appraisal and street reputation. But more fundamentally, routine cleanings prevent the irreversible damage that leads to massive replacement costs over the next five to ten years. When gutters overflow, roofs grow heavy physical lichen, or siding visibly oxidizes, water intrusion becomes imminent into the drywall and insulation layers. By maintaining a pristine boundary, you safeguard the fragile interior framing and energy-saving building insulation.`;

    const body2 = `### Key Benefits of Expert Service
There are several distinct advantages to coordinating directly with our team. Foremost is structural safety—ladder work and steep-pitch roof traversal are inherently dangerous. Furthermore, our technicians are highly trained to identify compounding issues like failing caulk lines, loose composite shingles, or gutter detachments before they turn into emergency interior leaks during the next thunderstorm. Here is a definitive, rapid breakdown of what to prioritize in your plan:

*   **Root-Level Sterilization**: Killing all algae spores completely so they don't immediately return within three months.
*   **Asset Protection**: Utilizing engineered soft-wash chemical systems to guarantee zero damage to siding panels or delicate thermal window seals.
*   **Proven Longevity**: Extending the life of your specific home installations by removing harmful, inherently acidic organic physical growth.
*   **Unmatched Convenience**: Experiencing seamless, fully insured physical service that systematically handles all the dangerous heavy lifting safely.

### Long-Term Maintenance Strategy
The ultimate secret to keeping any property immaculate is consistency and scheduled observation. Scheduling annual or bi-annual services drastically reduces the cumulative buildup that eventually requires heavy restorative, abrasive washing. For many of our clients across ${matchedCity}, establishing a predictable routine guarantees their home looks its absolute best year-round regardless of the extreme seasonal shift. It also actively prevents the buildup of harmful exterior molds that can actively affect external air quality or track indoors on shoes and equipment. We highly recommend integrating our dedicated services firmly into your standard property management cycle.

1.  **Assess Annually**: Check north-facing surfaces and fully shaded areas closely for any early physical algae bloom.
2.  **Clear Debris**: Ensure no leaves, pine needles, or organic rotting matter sit on surfaces or in drainage channels.
3.  **Hire Professionals**: Rely on heavily insured technicians equipped strictly with commercial-grade cleaning hardware and organic treatments.

### The Professional Methodology
At **Valley Window Care and Exterior Cleaning**, we don't just clean; we restore, enhance, and protect. We recognize deeply that every surface requires a distinct, careful physical methodology. By employing state-of-the-art infrastructure alongside eco-friendly, biodegradable surfactants, we safely deliver results that simply cannot be replicated by standard consumer-grade hardware from the local hardware store. Our commitment is entirely focused on providing unparalleled property value and highly visible aesthetic transformation. If you are specifically dealing with complications related to ${title}, getting a specialized professional assessment from us is your definitive best first step entirely.`;

    const extraBuffer = `### Deep Dive: Understanding the Regional Climate Factors
The physical climate in Northeast Wisconsin is famously unpredictable. Within a single brief calendar year, outside surfaces will experience sub-zero freezing, rapid extreme thawing, driving physical rain, and intense blistering UV exposure during the peak summer months. This environmental rollercoaster is exactly why localized expertise matters incredibly deeply. A generic, national approach to exterior cleaning often fails right here because it inherently doesn't account for the aggressive freeze-thaw cycle which drives heavy moisture deep into porous materials like foundational concrete, decorative brick, and asphalt-based roof shingles. When trapped water freezes inside these micro-fissures, it aggressively expands, causing immediate structural spalling, flaking, or total substrate cracking. 

Removing thick organic matter that actively traps this physical moisture against your property's valuable exterior shell is the absolute best defense mechanism currently available. We understand the highly specific regional demands, uniquely ensuring that the proven methodologies we apply daily are not just cosmetically beautiful and appealing, but scientifically proven by industry leaders to safely combat Wisconsin's unique, unforgiving weather profile. Taking these proactive preventative measures seriously actively ensures your property stands physically robust and stunningly beautiful for decades to come, actively resisting the natural, constant biological degradation processes. 

When you deeply evaluate your overall property value directly against the exorbitant costs of premature material degradation, the absolute most rational approach is to immediately deploy smart preventative maintenance. Valley Window Care understands exactly how to properly implement the precise chemical volume profiles ensuring the absolute maximum structural longevity without any safety compromise.

### Prioritizing Sustainability and Safety
Beyond just achieving a sparkling, brilliant exterior, modern property owners are rightfully concerned with the strict environmental footprint of their ongoing maintenance choices. The physical agricultural runoff and deep chemical sensitivity of the Fox Valley overall watershed mandate a highly responsible approach to all exterior washing and draining. We exclusively utilize biodegradable, fully eco-friendly surfactants that are exceptionally tough on rapid organic growth—like black algae stains and blooming lichen—but perfectly and completely safe for your expensive foundational property plantings, free-roaming pets, and the delicate local physical groundwater table. 

This holistic, modernized approach means that while we are effectively resolving critical structural cosmetic issues and dramatically elevating your street-facing curb appeal securely, we are simultaneously protecting the local native ecosystem. Combining these sustainable modern practices with our rigorous internal safety protocols, which include strict use of comprehensive anchor harnesses, heavy-duty ladder physical stabilizers, and thorough holistic site management, we mitigate property liability entirely. 

Property owners can rest safely and easily knowing that the dangerous specialized work is being performed not only to the ultimate highest aesthetic standard reliably but also with the absolute utmost physical respect for their safety and environmental well-being overall. The long-term physical benefits of this thorough methodology safely compound year after beautiful year, officially guaranteeing deep peace of mind. Our specialized crew actively operates under the strictest regional compliance safety regulations, continuously and consistently educating ourselves on the most advanced remediation safety tools and environmental impact ecological offsets available nationwide.`;

    const conclusion = `## Secure Your Property Today
To summarize completely, ignoring the early physical warning signs of exterior biological decay will unconditionally lead to massively higher repair bills strictly down the physical road. If you reside in ${matchedCity} and are noticing the severe physical effects of a harsh climate aggressively taking a toll on your valuable property, immediate decisive action is logically required. Connect perfectly with our highly dedicated ${locationLink} crew today to intelligently set up your comprehensive site evaluation and discover the massive visible difference a true professional touch can predictably make. We are specifically designed accurately to meet your absolute highest physical and aesthetic expectations. Don't wait until the physical degradation is irreversible.

## Your Next Steps for a Cleaner Home
It ultimately comes down directly to this fundamental truth: protective exterior physical maintenance is arguably one of the smartest, highest-ROI investments you can make specifically for your property value. By proactively resolving complex chemical issues related to ${title}, you actively save precious time, massive money, and severe structural headaches in the long term. We fiercely pride ourselves on delivering total peace of physical mind cleanly alongside a sparkling, brilliant clean finish. 

---
**Ready to transform your home?** Call Valley Window Care at **[(920) 609-7085](tel:920-609-7085)**.`;

    return `${intro}\n\n${body1}\n\n${body2}\n\n${extraBuffer}\n\n${conclusion}`;
};

async function buildPhysicalMarkdown() {
    console.log('[MARKDOWN INJECTION] Initiating 50-file massive exact markdown dump with 1:1 unique images constraint.');

    // Nuke any previous logic
    if (fs.existsSync(POSTS_DIR)) {
        fs.rmSync(POSTS_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(POSTS_DIR, { recursive: true });

    const posts = parseRows();
    let imgIndex = 0;
    const today = new Date().toISOString().split('T')[0];
    let createdCount = 0;

    for (const post of posts) {
        const slug = slugifyOptions(post.title);

        // Exact city location matching for the internal localized route logic
        let matchedCity = "Green Bay";
        const cities = ["Green Bay", "Appleton", "Shawano", "De Pere", "Ledgeview", "Ashwaubenon", "Howard-Suamico", "Neenah", "Oshkosh", "Fox Valley", "Wisconsin"];
        for (let c of cities) {
            if (post.title.toLowerCase().includes(c.toLowerCase())) {
                matchedCity = c;
                break;
            }
        }
        let locationRouteName = matchedCity.toLowerCase().replace(/\\s+/g, '-');
        if (locationRouteName === "fox-valley" || locationRouteName === "wisconsin") locationRouteName = "green-bay";

        // Assign a perfectly distinct unique image from our array linearly. NO duplicates. Leave blank if depleted.
        const imageTarget = imgIndex < uniqueImages.length ? uniqueImages[imgIndex] : "";
        imgIndex++;

        const markdownText = generateMarkdownBody(post.title, post.category, matchedCity, locationRouteName);

        // Standard Frontmatter block required
        const frontmatter = `---
title: "${post.title.replace(/"/g, '')}"
date: "${today}"
category: "${post.category}"
image: "${imageTarget}"
---

# ${post.title.replace(/"/g, '')}

${markdownText}
`;

        fs.writeFileSync(path.join(POSTS_DIR, `${slug}.md`), frontmatter, 'utf-8');
        createdCount++;
    }

    console.log(`[MARKDOWN INJECTION] Successfully generated ${createdCount}/50 physical .md files.`);
    console.log(`[ASSET REPORT] Total Authentic Real Images Mapped: ${Math.min(createdCount, uniqueImages.length)}.`);
    if (uniqueImages.length < createdCount) {
        console.log(`[ASSET REPORT] Left ${createdCount - uniqueImages.length} images blank explicitly per No-AI constraint.`);
    }
}

buildPhysicalMarkdown();
