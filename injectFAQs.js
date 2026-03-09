const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'serviceContent.tsx');
let content = fs.readFileSync(filePath, 'utf8');

if (content.includes('faqs: [')) {
    console.log("FAQs already injected.");
    process.exit(0);
}

const faqsByService = {
  "roof-cleaning": [
    { question: "Is soft washing safe for my asphalt shingle roof in Wisconsin?", answer: "Yes, our low-pressure soft washing system is the recommended manufacturer method for cleaning asphalt roofs without stripping the granules or causing water damage." },
    { question: "How long does a typical roof cleaning treatment last in Green Bay?", answer: "A professional soft wash treatment from Valley Window Care typically keeps algae, moss, and lichen at bay for 2 to 4 years, depending on tree coverage and property shading." },
    { question: "Will the cleaning solution harm my landscaping?", answer: "No, we take extensive precautions to pre-wet and neutralize all surrounding vegetation before, during, and after our roof washing service." }
  ],
  "house-washing": [
    { question: "What is the difference between pressure washing and soft washing for home siding?", answer: "Pressure washing uses high-velocity water that can dent siding and strip paint. Soft washing relies on eco-friendly detergents to kill mold and mildew at low pressure, ensuring zero damage to your home." },
    { question: "Does your house washing service remove green algae from vinyl siding?", answer: "Yes! Our soft wash solution specifically targets and eliminates organic growth like green algae, mold, and mildew down to the root." },
    { question: "How frequently should homes in Northeast Wisconsin be washed?", answer: "We recommend a comprehensive house wash every 12 to 18 months to protect your siding from long-term staining and organic degradation." }
  ],
  "premium-drive-thru-cleaning": [
    { question: "How often should a restaurant in Green Bay schedule drive-thru lane cleaning?", answer: "High-traffic restaurants in Green Bay should schedule drive-thru lane cleaning at least monthly or quarterly to maintain a safe, grease-free, and welcoming environment for customers." },
    { question: "Can you remove heavy oil and tire marks?", answer: "Yes, our hot-water commercial pressure washing equipment cuts through heavy grease, oil slicks, and tire marks effortlessly." },
    { question: "Do you clean drive-thrus after business hours?", answer: "Absolutely. We offer flexible, after-hours scheduling to ensure our cleaning operations never interfere with your customer traffic." }
  ],
  "window-cleaning": [
    { question: "Does Valley Window Care offer after-hours commercial window cleaning?", answer: "Yes, we providing flexible scheduling including after-hours and early morning commercial window cleaning to prevent any disruption to your business." },
    { question: "Do you clean both the inside and outside of the windows?", answer: "Yes! We offer comprehensive interior and exterior window cleaning, including wiping down frames, ledges, and tracks for a streak-free shine." },
    { question: "How do you reach high windows safely?", answer: "Our team utilizes water-fed pole systems and pure water technology to safely and effectively clean windows up to three stories high from the ground." }
  ],
  "gutter-cleaning": [
    { question: "Do you clean up the debris after flushing the gutters?", answer: "Yes, every gutter cleaning service includes full debris removal and flushing of the downspouts to guarantee proper water flow." },
    { question: "How often should Fox Valley residents clean their gutters?", answer: "With the heavy foliage in the Fox Valley, we recommend clearing your gutters at least twice a year—once in late spring and once after the leaves fall in autumn." },
    { question: "Can clogged gutters cause foundation damage?", answer: "Absolutely. Blocked gutters force rainwater to overflow straight down your siding, pooling around the foundation and potentially causing basement leaks or freezing damage in winter." }
  ],
  "dumpster-pad-cleaning": [
    { question: "Why is regular dumpster pad cleaning important for my Wisconsin business?", answer: "Regular cleaning prevents foul odors, wards off pest infestations, and eliminates slip-and-fall hazards caused by grease and waste buildup." },
    { question: "Do you use hot water to clean dumpster pads?", answer: "Yes, we use industrial hot-water pressure washing to melt away heavy bio-waste, grease, and sticky residue." },
    { question: "Will you safely dispose of the wastewater?", answer: "We comply with all local environmental regulations regarding wastewater reclamation and runoff control." }
  ],
  "fence-cleaning": [
    { question: "Can you remove the green algae from my white vinyl fence?", answer: "Yes! Our soft washing process specifically kills and removes the green algae, mold, and organic staining from vinyl fencing, restoring it to a brilliant white safely." },
    { question: "Do you also clean wooden fences in Appleton?", answer: "Absolutely. We use a reduced-pressure technique with specialized wood restorers to clean wooden fences without splintering or damaging the grain." },
    { question: "Will the cleaning chemicals hurt the grass near my fence?", answer: "No, our solutions are highly diluted and we actively rinse the surrounding grass and plants, neutralizing the area to protect your landscaping." }
  ]
};

const genericFallback = (key) => {
  const name = key.replace(/-/g, ' ');
  return [
    { question: `What are the benefits of professional ${name} in Northeast Wisconsin?`, answer: `Professional ${name} drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather.` },
    { question: `How much does ${name} cost in the Green Bay area?`, answer: `Pricing for ${name} varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs.` },
    { question: `Are your technicians insured for ${name} services?`, answer: `Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality ${name} safely.` }
  ];
};

const keys = Array.from(content.matchAll(/\s+"([a-z0-9-]+)":\s*\{/g)).map(m => m[1]);

for (const key of keys) {
  const faqs = faqsByService[key] || genericFallback(key);
  // Find the exact block for this key to inject FAQs right after the image property
  // We use string replacement targeting the exact image line within that key.
  // First extract the image line for this specific key
  const blockRegex = new RegExp(`("${key}":\\s*\\{[\\s\\S]*?image:\\s*"[^"]+")`, 'm');
  content = content.replace(blockRegex, (match) => {
      // Indent nicely
      const faqString = `,\n        faqs: ${JSON.stringify(faqs, null, 10).replace(/\]$/, '        ]')}`;
      return match + faqString;
  });
}

fs.writeFileSync(filePath, content);
console.log('Successfully injected faqs array into all service objects!');
