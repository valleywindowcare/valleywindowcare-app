export type FAQ = {
    question: string;
    answer: string;
};

export type FaqCategoryMap = Record<string, FAQ[]>;

export const faqData: FaqCategoryMap = {
    general: [
        {
            question: "Are you fully insured and licensed?",
            answer: "Yes, Valley Window Care and Exterior Cleaning carries comprehensive commercial liability insurance and worker’s compensation. We provide certificates of insurance (COI) upon request before beginning any residential or commercial project."
        },
        {
            question: "Do you offer free estimates?",
            answer: "Absolutely. We provide free, no-obligation written estimates for all services. We can often provide rapid quotes utilizing satellite imagery, though complex commercial projects or restorative jobs may require an on-site evaluation."
        },
        {
            question: "What areas of Wisconsin do you serve?",
            answer: "Our primary service areas include Green Bay, Appleton, Oshkosh, the Fox Valley, and Door County. We deploy highly equipped mobile rigs to cover a 60-mile radius from our central operational hub."
        }
    ],
    "roof-cleaning": [
        {
            question: "What is soft washing for roofs?",
            answer: "Soft washing is a specialized, low-pressure cleaning method. Instead of damaging high-pressure water, we use professional-grade algaecides and surfactants to safely dissolve and kill the root spores of Gloeocapsa Magma (black streaks), moss, and lichen on your shingles."
        },
        {
            question: "Will pressure washing void my roof warranty?",
            answer: "Yes, traditional high-pressure washing will strip the protective granules from your asphalt shingles and immediately void your manufacturer's warranty. Our zero-damage soft wash system is the only method approved by ARMA (Asphalt Roofing Manufacturers Association)."
        },
        {
            question: "How long does a roof cleaning last in Wisconsin?",
            answer: "Because our chemical solution kills the organic growth at the root level, rather than just blasting the surface, a professional soft wash treatment typically protects your roof and keeps it streak-free for 3 to 5 years, depending on tree coverage and humidity."
        }
    ],
    "house-washing": [
        {
            question: "Will your house washing process damage my siding?",
            answer: "No. We exclusively use a low-pressure soft wash technique for residential siding (vinyl, aluminum, stucco, and Hardie Board). We apply tailored cleaning solutions at the pressure of a garden hose to melt away dirt, algae, and mold without risking water intrusion or surface damage."
        },
        {
            question: "Are your cleaning chemicals safe for my plants and pets?",
            answer: "Yes. Property protection is our first priority. We thoroughly pre-soak and post-rinse all surrounding vegetation with fresh water. Our detergents are eco-friendly, fully biodegradable, and perfectly safe for pets and landscaping once dry."
        },
        {
            question: "How often should I have my house washed?",
            answer: "For homes in Northeast Wisconsin, we recommend a professional house wash every 12 to 18 months. Regular maintenance instantly boosts curb appeal, prevents permanent algae staining, and exposes hidden damage before it requires expensive repairs."
        }
    ],
    "window-cleaning": [
        {
            question: "Do you clean the tracks and screens?",
            answer: "Yes, our premium interior/exterior window cleaning packages include wiping down the window tracks, sills, and frames, as well as heavily brushing and cleaning the screens."
        },
        {
            question: "What happens if it rains after my windows are cleaned?",
            answer: "Rain itself does not make windows dirty; dirt does. Because our professional scrubbing and squeegee techniques remove all mineral deposits, pollen, and environmental fallout from the glass, rainwater simply sheets off without spotting for a distinct period."
        },
        {
            question: "Do you use ladders to clean high windows?",
            answer: "We utilize advanced carbon-fiber, water-fed pole systems equipped with spot-free, deionized (0-TDS) water. This allows us to safely and flawlessly clean exterior windows up to four stories high while standing safely on the ground."
        }
    ],
    "paver-patio-restorations": [
        {
            question: "Why do my pavers have weeds growing between them?",
            answer: "Over time, weather and erosion wash away the original joint sand, creating gaps for soil and weed seeds to settle. Our restoration process involves heavily deep-cleaning the matrix and installing fresh, locking polymeric sand to inhibit organic growth."
        },
        {
            question: "What is polymeric sand?",
            answer: "Polymeric sand is a highly specialized jointing material. Once swept into the paver joints and activated with water, the integrated polymers cure and harden, locking the bricks together, preventing weed growth, and resisting insect tunneling."
        },
        {
            question: "Do I need to seal my paver patio?",
            answer: "Yes, sealing is highly recommended to protect your investment. A professional-grade, breathable sealant protects the brick coloring from harsh UV fading, repels oil/grill stains, simplifies routine maintenance, and fortifies the polymeric sand joints against harsh Wisconsin winters."
        }
    ],
    "rust-removal": [
        {
            question: "Can pressure washing remove orange rust stains?",
            answer: "No, standard pressure washing cannot remove iron or battery acid stains. Rust forms a tight chemical bond with the pores of concrete and vinyl. Attempting to blast it off will simply etch and permanently damage the structural surface."
        },
        {
            question: "How do you remove rust from my property?",
            answer: "We utilize highly specialized, professional-grade restoration acids and chemical neutralizers. These specialized agents break the microscopic iron bonds, safely lifting the ugly orange staining out of the substrate without relying on damaging mechanical force."
        },
        {
            question: "Are fertilizer stains the same as rust?",
            answer: "Yes, many lawn fertilizers are heavily laden with iron. When overspray lands on your concrete and gets wet from irrigation or rain, it oxidizes instantly, creating hundreds of tiny rust spots. Our chemical rust removal completely eradicates these blemishes."
        }
    ],
    "pressure-washing": [
        {
            question: "What is the difference between pressure washing and soft washing?",
            answer: "Pressure washing uses highly pressurized water (up to 4,000 PSI) to blast tough environmental stains out of durable, flatwork surfaces like concrete and brick. Soft washing uses low pressure combined with tailored algaecides to safely clean fragile surfaces like roofs, siding, and wood."
        },
        {
            question: "Do you use hot or cold water?",
            answer: "We deploy commercial-grade trailer rigs equipped with heavy-duty burner units. We have the capability to clean with water heated over 200°F, which is essential for emulsifying and extracting oil, heavy grease, and chewing gum from concrete surfaces."
        },
        {
            question: "Can you remove tire marks from my driveway?",
            answer: "Yes. Using a combination of professional degreasing surfactants, super-heated water, and commercial rotary surface cleaners, we have excellent success significantly lifting and removing deep-seated tire marks and engine oil from residential driveways."
        }
    ],
    "christmas-lighting": [
        {
            question: "Do you install Christmas lights that I already own?",
            answer: "No, Valley Window Care provides a full-service, all-inclusive program. We supply all the commercial-grade LED materials, custom-cut the C9 tracks to perfectly fit your roofline, deeply install the system, maintain it throughout the season, and carefully take it down and store it in January."
        },
        {
            question: "What happens if a bulb goes out?",
            answer: "We actively monitor our installations and provide prompt, free service calls throughout the entire holiday season. If a bulb burns out, a clip snaps, or extreme weather disrupts a strand, simply call us and we will repair it immediately at no additional cost."
        }
    ],
    "permanent-led-lighting": [
        {
            question: "What is permanent LED track lighting?",
            answer: "It is an incredibly versatile, structural architectural lighting system explicitly installed behind your fascia trim. The advanced RGB tracks are completely invisible during the day but can be precisely controlled via a smart app to display millions of colors or warm architectural white light at night."
        },
        {
            question: "Can I use permanent lighting for holidays other than Christmas?",
            answer: "Absolutely. With individual diode control via the iOS/Android app, you can instantly set custom colors and looping animations for Halloween, the 4th of July, Packer game days, Breast Cancer Awareness Month, or simply cast an elegant warm white security glow year-round."
        },
        {
            question: "Are the lighting tracks noticeable during the day?",
            answer: "No. We utilize color-matched aluminum tracks that blend perfectly with your existing soffit and fascia. Once installed, the system acts as a distinct, seamless architectural molding profile that is virtually undetectable until illuminated."
        }
    ],
    "apartment-exterior-cleaning": [
        {
            question: "How do you manage tenant safety during a massive apartment washing project?",
            answer: "Tenant safety and site security are our highest priorities. Valley Window Care coordinates directly with property managers to distribute precise, sector-by-sector scheduling notices. We clearly cordon off active zones, manage operational hoses strictly, and utilize low-pressure soft washing techniques that present zero physical danger to surrounding pedestrian traffic."
        },
        {
            question: "Will your washing processes strip the paint off our multi-unit complex?",
            answer: "No. For vinyl, Hardy Board, wood, and painted stucco, we completely abandon destructive high-pressure techniques. Instead, we flood the building envelopes with a proprietary, low-pressure soft wash detergent that chemically neutralizes Gloeocapsa magma (algae) at the root without etching or stripping exterior sealants."
        },
        {
            question: "Can you deep-clean the breezeways and concrete stairwells as well?",
            answer: "Absolutely. In addition to our commercial soft washing rigs that handle the vertical facades, we deploy high-temperature, 200°F steam cleaning units specifically engineered to extract extreme foot-traffic grime, set-in chewing gum, and bio-hazardous stains from concrete breezeways and community dumpster pads."
        }
    ]
};
