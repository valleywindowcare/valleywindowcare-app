export interface FAQ {
    q: string;
    a: string;
}

export interface FAQCategory {
    service: string;
    mappedSlugs: string[]; // Slugs this FAQ set applies to
    faqs: FAQ[];
}

export const faqData: Record<string, FAQ[]> = {
    "roof-cleaning": [
        {
            q: "Is soft washing safe for my roof?",
            a: "Yes, soft washing is a safe and effective method for cleaning and preserving the integrity of various types of roofs, including asphalt shingles, metal roofs, and tile roofs. The low-pressure technique avoids damaging delicate roofing materials."
        },
        {
            q: "How often should I have my roof soft washed?",
            a: "Most homeowners should plan to soft wash their roof every 2 to 3 years to maintain its appearance and protect the roofing materials. Regular roof soft wash services can extend the life of your roof and prevent costly repairs."
        },
        {
            q: "Will roof cleaning affect my home’s energy efficiency?",
            a: "Yes, a clean roof can improve your home’s energy efficiency. Dark streaks of algae and moss can absorb more heat from the sun, leading to higher attic temperatures. Soft washing helps your roof reflect more sunlight."
        },
        {
            q: "Does roof cleaning come with any warranties?",
            a: "Many shingle manufacturers require regular cleaning to maintain the warranty, as organic growth like moss and lichen can cause shingles to deteriorate prematurely."
        }
    ],
    "commercial-roof-cleaning": [
        {
            q: "Is soft washing safe for my roof?",
            a: "Yes, soft washing is a safe and effective method for cleaning and preserving the integrity of various types of roofs, including asphalt shingles, metal roofs, and tile roofs. The low-pressure technique avoids damaging delicate roofing materials."
        },
        {
            q: "How often should I have my roof soft washed?",
            a: "Most homeowners should plan to soft wash their roof every 2 to 3 years to maintain its appearance and protect the roofing materials. Regular roof soft wash services can extend the life of your roof and prevent costly repairs."
        },
        {
            q: "Will roof cleaning affect my home’s energy efficiency?",
            a: "Yes, a clean roof can improve your home’s energy efficiency. Dark streaks of algae and moss can absorb more heat from the sun, leading to higher attic temperatures. Soft washing helps your roof reflect more sunlight."
        },
        {
            q: "Does roof cleaning come with any warranties?",
            a: "Many shingle manufacturers require regular cleaning to maintain the warranty, as organic growth like moss and lichen can cause shingles to deteriorate prematurely."
        }
    ],
    "pressure-washing": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "commercial-pressure-washing": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "building-washing": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "house-washing": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "concrete-cleaning": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "dumpster-pad-cleaning": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "graffiti-removal": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "storefront-cleaning": [
        {
            q: "Is pressure washing safe for my home’s siding or roof?",
            a: "Yes, when done correctly. We use soft washing techniques for delicate surfaces like vinyl siding, stucco, and roofing to prevent any damage. For concrete, brick, or hard surfaces, we apply high-pressure washing to remove stains effectively."
        },
        {
            q: "What is the difference between pressure washing and soft washing?",
            a: "Pressure washing uses high-pressure water to physically blast away dirt, while soft washing utilizes specialized cleaning solutions and low-pressure water to kill and remove organic growth at the source."
        },
        {
            q: "What surfaces can be cleaned with soft washing?",
            a: "Soft washing is versatile and can be used on roofs, vinyl siding, stucco, wood decks, fences, and other delicate exterior finishes."
        }
    ],
    "window-cleaning": [
        {
            q: "What’s included in your window cleaning service?",
            a: "Our standard service includes exterior and interior glass cleaning, removal of dirt, debris, and smudges, wipe down of window frames and sills, and screen cleaning if applicable."
        },
        {
            q: "How much does window cleaning cost?",
            a: "Typical residential window cleaning starts at $250. Pricing varies based on the size of the home, number of windows, and whether interior/exterior cleaning is required."
        },
        {
            q: "How often should I have my windows professionally cleaned?",
            a: "We recommend professional cleaning at least twice a year—once in the spring and once in the fall—to maintain the glass and frames."
        }
    ],
    "gutter-cleaning": [
        {
            q: "Why is gutter cleaning important?",
            a: "Gutter cleaning is essential for maintaining proper drainage. It prevents clogs, blockages, and water damage to your home’s foundation, roof, walls, and landscaping."
        },
        {
            q: "What are the risks of not cleaning my gutters?",
            a: "Neglecting gutters can lead to clogged downspouts, roof damage from moisture rot, pest infestations (mosquitoes, birds, rodents), and damaging ice dams in winter."
        },
        {
            q: "Should I consider gutter guards or covers?",
            a: "Gutter guards can be beneficial in reducing cleaning frequency, but they still require occasional maintenance to ensure they are functioning properly."
        }
    ],
    "paver-patio-restorations": [
        {
            q: "What is involved in paver patio restoration?",
            a: "Restoration includes deep cleaning, repairing any damaged or loose pavers, and applying a protective sealant to enhance the look and lifespan of the patio."
        },
        {
            q: "Can you remove rust off my driveway?",
            a: "Yes, we use specialized cleaning solutions and techniques to effectively remove rust stains from driveways and other concrete surfaces."
        }
    ],
    "rust-removal-in-green-bay-wisconsin": [
        {
            q: "What is involved in paver patio restoration?",
            a: "Restoration includes deep cleaning, repairing any damaged or loose pavers, and applying a protective sealant to enhance the look and lifespan of the patio."
        },
        {
            q: "Can you remove rust off my driveway?",
            a: "Yes, we use specialized cleaning solutions and techniques to effectively remove rust stains from driveways and other concrete surfaces."
        }
    ],
    "permanent-led-lighting": [
        {
            q: "What is permanent lighting and how does it work in Wisconsin’s climate?",
            a: "Permanent lighting is a year-round LED solution installed in tracks. It is specifically designed to withstand snow, ice, and freezing temperatures common in Northeast Wisconsin."
        },
        {
            q: "Can permanent lighting withstand snow and ice?",
            a: "Yes, the systems we install are weather-rated for extreme conditions and will continue to function perfectly throughout the winter months."
        }
    ],
    "christmas-lighting": [
        {
            q: "What is permanent lighting and how does it work in Wisconsin’s climate?",
            a: "Permanent lighting is a year-round LED solution installed in tracks. It is specifically designed to withstand snow, ice, and freezing temperatures common in Northeast Wisconsin."
        },
        {
            q: "Can permanent lighting withstand snow and ice?",
            a: "Yes, the systems we install are weather-rated for extreme conditions and will continue to function perfectly throughout the winter months."
        }
    ],
    "residential-permanent-led-lighting": [
        {
            q: "What is permanent lighting and how does it work in Wisconsin’s climate?",
            a: "Permanent lighting is a year-round LED solution installed in tracks. It is specifically designed to withstand snow, ice, and freezing temperatures common in Northeast Wisconsin."
        },
        {
            q: "Can permanent lighting withstand snow and ice?",
            a: "Yes, the systems we install are weather-rated for extreme conditions and will continue to function perfectly throughout the winter months."
        }
    ]
};
