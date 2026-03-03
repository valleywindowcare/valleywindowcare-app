import fs from 'fs';
async function test() {
    const prompt = encodeURIComponent("Photorealistic pressure washing van in Appleton Wisconsin with Valley Property Services and 920-609-7085 written on the side panel. 4k daylight");
    const url = `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=576&nologo=true`;
    console.log("Fetching from " + url);
    const res = await fetch(url);
    if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync("public/ai-base-assets/pollinations-test.jpg", Buffer.from(buffer));
        console.log("Success! Saved test image.");
    } else {
        console.log("Failed " + res.status);
    }
}
test();
