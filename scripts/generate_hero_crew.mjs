import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function generateHeroCrew() {
    const width = 1920;
    const height = 1080;
    const destPath = path.join(process.cwd(), 'public', 'site-gallery', 'synthetic-crew-photo.webp');
    const truckPath = path.join(process.cwd(), 'public', 'ai-base-assets', 'van-cutout.png');

    // Create an SVG text overlay buffer for the phone number and logo text
    const svgText = `
        <svg width="${width}" height="${height}">
            <rect x="50" y="${height - 150}" width="800" height="120" fill="rgba(27, 54, 93, 0.9)" rx="20" ry="20"/>
            <text x="80" y="${height - 70}" font-family="Arial, sans-serif" font-size="52" font-weight="900" fill="#FACC15">
                Valley Window Care - (920) 609-7085
            </text>
        </svg>
    `;
    const svgBuffer = Buffer.from(svgText);

    try {
        const text = "Valley Window Care professional cleaning crew";
        const context = `Professional exterior cleaning crew standing confidently next to their work equipment. They are wearing matching company uniforms. Highly detailed, 4k resolution, professional team photography, bright and welcoming.`;

        const prompt = `Photorealistic ${text}. ${context}`;
        const encodedPrompt = encodeURIComponent(prompt);

        console.log(`Generating AI Crew Photo via Pollinations...`);
        const res = await fetch(`https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&nologo=true&seed=${Math.floor(Math.random() * 1000000)}`);

        if (!res.ok) throw new Error("Pollinations API failure");

        const bgBuffer = await res.arrayBuffer();

        await sharp(Buffer.from(bgBuffer))
            .resize(width, height, { fit: 'cover' })
            .composite([
                { input: truckPath, gravity: 'northeast', blend: 'over' }, // Logo truck overlay
                { input: svgBuffer, top: 0, left: 0 } // Phone Number Banner
            ])
            .webp({ quality: 90 }) // Higher quality for the hero
            .toFile(destPath);

        console.log("Successfully generated:", destPath);

    } catch (e) {
        console.error(`Failed to generate crew photo via API, using local fallback base asset. Error:`, e.message);

        // Fallback to local AI pool if fetch fails
        const baseChoice = Math.floor(Math.random() * 3) + 1;
        const basePath = path.join(process.cwd(), 'public', 'ai-base-assets', `base${baseChoice}.png`);

        await sharp(basePath)
            .resize(width, height, { fit: 'cover' })
            .composite([
                { input: truckPath, gravity: 'northeast', blend: 'over' },
                { input: svgBuffer, top: 0, left: 0 }
            ])
            .webp({ quality: 90 })
            .toFile(destPath);

        console.log("Successfully generated fallback image:", destPath);
    }
}

generateHeroCrew();
