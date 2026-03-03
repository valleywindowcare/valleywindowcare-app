import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = path.join(process.cwd(), 'public', 'gallery', 'footer-assets');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const services = [
    "Commercial Hood Cleaning",
    "Roof Cleaning",
    "Window Cleaning",
    "House Washing",
    "Commercial Pressure Washing",
    "Permanent LED Lighting"
];

const phoneNumber = "(920) 609-7085";

async function generateFooterImage(service, index) {
    const slug = service.toLowerCase().replace(/ /g, '-');
    const filename = `footer-${slug}-${Date.now()}.webp`;
    const destPath = path.join(OUTPUT_DIR, filename);

    // Strict prompt enforcing the technician, equipment, and exact phone number watermark
    const rawPrompt = `Photorealistic ${service} technician actively working with professional equipment on a Wisconsin job site. The text "${phoneNumber}" must be clearly visible and legible on their uniform or equipment. High resolution commercial exterior cleaning photography. No blue boxes. No generic logos.`;

    // Explicit negative prompt
    const negativePrompt = "cartoon, illustration, generic placeholder, solid blue box, flat vector, low resolution, blurry";

    const encodedPrompt = encodeURIComponent(rawPrompt);
    const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=800&height=800&nologo=true&seed=${Math.floor(Math.random() * 10000)}&negative=${encodeURIComponent(negativePrompt)}`;

    console.log(`Generating asset for: ${service}...`);
    try {
        const response = await fetch(pollinationsUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const buffer = await response.arrayBuffer();
        fs.writeFileSync(destPath, Buffer.from(buffer));
        console.log(`[SUCCESS] Wrote ${filename}`);
        return `/gallery/footer-assets/${filename}`;
    } catch (error) {
        console.error(`[FAILED] Failed to generate image for ${service}:`, error);
        return null;
    }
}

async function run() {
    console.log("Starting Footer Asset Generation...");
    const results = [];
    for (let i = 0; i < services.length; i++) {
        const finalPath = await generateFooterImage(services[i], i);
        if (finalPath) {
            results.push(finalPath);
        }
        // sleep a bit to avoid rate limits
        await new Promise(r => setTimeout(r, 2000));
    }

    console.log("\n=== GENERATED PATHS FOR FOOTER.TSX ===");
    results.forEach(p => console.log(p));
}

run();
