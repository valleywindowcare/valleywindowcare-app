import React from 'react';
import Link from 'next/link';

export const serviceContentMap: Record<string, { description: React.ReactNode, benefits: (string | React.ReactNode)[], process: (string | React.ReactNode)[], protectionProtocols?: { title: string, description: string }[], pricing?: { title: string, description: string, rateTitle: string, ratePrice: string, rateDetails: string, minimumPrice: string, minimumDetails: string, variableTitle: string, variableDetails: string }, image?: string, faqs?: { question: string, answer: string }[] }> = {
    "roof-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Professional Roof Cleaning utilizes Our eco-friendly roof soft wash system guarantees maximum lifespan preservation. Our eco-friendly roof soft wash system guarantees maximum lifespan preservation. Our eco-friendly roof soft wash system guarantees maximum lifespan preservation. Our eco-friendly roof soft wash system guarantees maximum lifespan preservation. specialized low-pressure soft washing methodology to eliminate destructive biological growth. The black stains streaking down your roof are not environmental dirt; they are an active cyanobacteria known as Gloeocapsa Magma. This organism thrives particularly on North-facing Wisconsin roofs, feeding heavily on the crushed limestone filler inside modern asphalt shingles. Typical high-pressure power washing instantly destroys the physical integrity of a roof by blasting away the UV-protective granules. We apply proprietary eco-friendly algaecides to completely neutralize the spores, fungus, and deep moss roots at a molecular level, protecting your massive structural investment.</p>
            </section>
        ),
        benefits: [
            "Prevents Roof Replacement: Instantly halts organic shingle decay, drastically extending the life of the roof by years.",
            "ARMA Guidelines Compliant: A strictly low-pressure soft wash method that never voids existing roofing manufacturer warranties.",
            "Stops Insurance Policy Cancellation: Removes heavy moss accumulation that traditionally triggers mandatory coverage drops by home insurers."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        protectionProtocols: [
            {
                title: "OSHA-Compliant Ladder Standoffs",
                description: "Our engineered mounting hardware rests directly on the roof structure, completely protecting your aluminum gutters from buckling or taking physical damage under the weight of a ladder."
            },
            {
                title: "Downspout Bagging & Filtration",
                description: "We physically wrap and bag the ends of your downspouts to catch all heavy chemical runoff and dead algae, preventing toxic accumulation in your soil or garden beds."
            },
            {
                title: "Low-Pressure Assurances",
                description: "We never blast your shingles. We apply highly exact, safe soft-wash algaecides from the safety of the ladder or ground to eliminate Gloeocapsa Magma without voiding your warranty."
            }
        ],
        pricing: {
            title: "Transparent Roof Soft Washing Pricing",
            description: "Every roof is unique, but we believe in 100% transparent pricing. Our quotes are calculated based on exact square footage and architectural complexity.",
            rateTitle: "Per Square Foot Rate",
            ratePrice: "$0.35 - $0.50 / Sq. Ft.",
            rateDetails: "Calculated based on the exact dimensions of your roof.",
            minimumPrice: "$500.00",
            minimumDetails: "Our baseline rate to deploy our specialized soft washing equipment and trained technicians.",
            variableTitle: "Cost Variables",
            variableDetails: "Final price depends on roof steepness (pitch), total size, location logistics, and severity of biological growth (moss/algae)."
        },
        image: "/images/portfolio/roof-cleaning.webp",
        faqs: [
          {
                    "question": "Is soft washing safe for my asphalt shingle roof in Wisconsin?",
                    "answer": "Yes, our low-pressure soft washing system is the recommended manufacturer method for cleaning asphalt roofs without stripping the granules or causing water damage."
          },
          {
                    "question": "How long does a typical roof cleaning treatment last in Green Bay?",
                    "answer": "A professional soft wash treatment from Valley Window Care typically keeps algae, moss, and lichen at bay for 2 to 4 years, depending on tree coverage and property shading."
          },
          {
                    "question": "Will the cleaning solution harm my landscaping?",
                    "answer": "No, we take extensive precautions to pre-wet and neutralize all surrounding vegetation before, during, and after our roof washing service."
          }
        ]
    },
    "house-washing": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the house washing of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        protectionProtocols: [
            {
                title: "Low-Pressure Precision",
                description: "We strictly utilize water pressure no stronger than a standard garden hose. This guarantees your vinyl siding, delicate wood, or stucco will never be cracked, dented, or permanently blasted away."
            },
            {
                title: "Botanical Hydration Procedures",
                description: "To protect your massive landscaping investment, our technicians heavily pre-water and post-hydrate all surrounding foundation plants to completely neutralize any over-spray of our biological cleaning agents."
            },
            {
                title: "Electrical Component Safeguards",
                description: "Before a single drop of water is sprayed, we meticulously cover, tape, and isolate all exterior electrical outlets, Ring doorbells, and sensitive light fixtures from water intrusion."
            }
        ],
        pricing: {
            title: "Transparent House Washing Pricing",
            description: "House washing quotes are built on total square footage, height of the structure, and current condition of the siding.",
            rateTitle: "Per Square Foot Rate",
            ratePrice: "$0.15 - $0.25 / Sq. Ft.",
            rateDetails: "Calculated based on the total exterior dimensions of your home.",
            minimumPrice: "$250.00",
            minimumDetails: "Our baseline rate to deploy our soft washing setup and trained technicians to your property.",
            variableTitle: "Cost Variables",
            variableDetails: "Final price depends on total stories, heavy oxidation removal, rust stains, or difficult architectural access."
        },
        image: "/images/portfolio/building-washing-services-1.png",
        faqs: [
          {
                    "question": "What is the difference between pressure washing and soft washing for home siding?",
                    "answer": "Pressure washing uses high-velocity water that can dent siding and strip paint. Soft washing relies on eco-friendly detergents to kill mold and mildew at low pressure, ensuring zero damage to your home."
          },
          {
                    "question": "Does your house washing service remove green algae from vinyl siding?",
                    "answer": "Yes! Our soft wash solution specifically targets and eliminates organic growth like green algae, mold, and mildew down to the root."
          },
          {
                    "question": "How frequently should homes in Northeast Wisconsin be washed?",
                    "answer": "We recommend a comprehensive house wash every 12 to 18 months to protect your siding from long-term staining and organic degradation."
          }
        ]
    },
    "gutter-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the gutter cleaning of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        protectionProtocols: [
            {
                title: "Protective Ladder Arm Standoffs",
                description: "We utilize protective padded standoff arms that rest the weight of the ladder firmly against the solid roof, ensuring your fragile aluminum gutters are never dented or crushed."
            },
            {
                title: "Complete Downspout Flow Verification",
                description: "We don't just remove the surface leaves. We guarantee structural safety by aggressively flushing every single downpipe to verify clear water flow, preventing invisible subterranean backups."
            },
            {
                title: "Strict Perimeter Cleanup",
                description: "All pulled debris, sludge, and heavy organic matter is carefully bagged and completely removed from your property. We never fling gutter debris down into your landscaping or walkways."
            }
        ],
        pricing: {
            title: "Transparent Gutter Cleaning Pricing",
            description: "Gutter cleaning quotes are strictly determined by linear footage, height of gutters, and presence of guards.",
            rateTitle: "Per Linear Foot Rate",
            ratePrice: "$1.00 - $2.50 / Ln. Ft.",
            rateDetails: "Calculated based on the exact linear length of your gutter system.",
            minimumPrice: "$150.00",
            minimumDetails: "Our baseline rate for bringing specialized ladders, standoffs, and debris removal equipment to your home.",
            variableTitle: "Cost Variables",
            variableDetails: "Final price depends on total stories, severely packed downspouts, underground drain flushing, or removing existing failed gutter guards."
        },
        image: "/images/portfolio/gutter-cleaning.webp",
        faqs: [
          {
                    "question": "Do you clean up the debris after flushing the gutters?",
                    "answer": "Yes, every gutter cleaning service includes full debris removal and flushing of the downspouts to guarantee proper water flow."
          },
          {
                    "question": "How often should Fox Valley residents clean their gutters?",
                    "answer": "With the heavy foliage in the Fox Valley, we recommend clearing your gutters at least twice a year—once in late spring and once after the leaves fall in autumn."
          },
          {
                    "question": "Can clogged gutters cause foundation damage?",
                    "answer": "Absolutely. Blocked gutters force rainwater to overflow straight down your siding, pooling around the foundation and potentially causing basement leaks or freezing damage in winter."
          }
        ]
    },
    "concrete-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Concrete and Driveway Cleaning requires vastly more than a direct pressure washing wand, which permanently etches zebra-stripes into the porous cream layer. We restore residential and commercial flatwork using heavy-duty, large-diameter rotary surface cleaners. By aggressively pre-treating deep oil spots and rust stains, then utilizing a uniform high-pressure spin, we lift years of embedded environmental grime evenly. This instantly restores your property's curb appeal and completely eliminates the extremely dangerous, slippery black algae that causes severe property injuries.</p>
            </section>
        ),
        benefits: [
            "Uniform Zebra-Free Finish: Industrial rotary spinners clean thousands of square feet perfectly evenly.",
            "Eliminates Slip & Fall Danger: Kills the slimy black organic growth that thrives on shaded damp concrete.",
            "Aggressive Oil lifting: Specialized surfactants pull heavy transmission and automotive oils from deep inside the matrix."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/concrete-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional concrete cleaning in Northeast Wisconsin?",
                    "answer": "Professional concrete cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does concrete cleaning cost in the Green Bay area?",
                    "answer": "Pricing for concrete cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for concrete cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality concrete cleaning safely."
          }
        ]
    },
    "window-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Our professional window and exterior cleaning services restore the pristine look of your property using scientifically backed, eco-friendly methods. We utilize specialized pure-water systems and 100% biodegradable cleaning solutions designed to break down tough environmental dirt and hard water stains without harming your landscaping or local Northeast Wisconsin waterways. These environmentally safe agents guarantee minimal ecological impact, ensuring a flawless, streak-free shine while keeping your family, pets, and surrounding vegetation completely safe. We are experts in hard water stain removal for windows throughout Northeast Wisconsin, restoring crystal-clear visibility. We are experts in hard water stain removal for windows throughout Northeast Wisconsin, restoring crystal-clear visibility. We are experts in hard water stain removal for windows throughout Northeast Wisconsin, restoring crystal-clear visibility.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/window-cleaning.webp",
        faqs: [
          {
                    "question": "Does Valley Window Care offer after-hours commercial window cleaning?",
                    "answer": "Yes, we providing flexible scheduling including after-hours and early morning commercial window cleaning to prevent any disruption to your business."
          },
          {
                    "question": "Do you clean both the inside and outside of the windows?",
                    "answer": "Yes! We offer comprehensive interior and exterior window cleaning, including wiping down frames, ledges, and tracks for a streak-free shine."
          },
          {
                    "question": "How do you reach high windows safely?",
                    "answer": "Our team utilizes water-fed pole systems and pure water technology to safely and effectively clean windows up to three stories high from the ground."
          }
        ]
    },
    "christmas-lighting": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the christmas lighting of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/forever-lights.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional christmas lighting in Northeast Wisconsin?",
                    "answer": "Professional christmas lighting drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does christmas lighting cost in the Green Bay area?",
                    "answer": "Pricing for christmas lighting varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for christmas lighting services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality christmas lighting safely."
          }
        ]
    },
    "pressure-washing": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the pressure washing of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/pressure-washing.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional pressure washing in Northeast Wisconsin?",
                    "answer": "Professional pressure washing drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does pressure washing cost in the Green Bay area?",
                    "answer": "Pricing for pressure washing varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for pressure washing services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality pressure washing safely."
          }
        ]
    },
    "residential-permanent-led-lighting": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the residential permanent led lighting of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/permanent-lights.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional residential permanent led lighting in Northeast Wisconsin?",
                    "answer": "Professional residential permanent led lighting drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does residential permanent led lighting cost in the Green Bay area?",
                    "answer": "Pricing for residential permanent led lighting varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for residential permanent led lighting services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality residential permanent led lighting safely."
          }
        ]
    },
    "fence-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the fence cleaning We guarantee safe cedar fence cleaning entirely free of splintering or grain destruction, alongside brilliant white vinyl restorations. We guarantee safe cedar fence cleaning entirely free of splintering or grain destruction, alongside brilliant white vinyl restorations. We guarantee safe cedar fence cleaning entirely free of splintering or grain destruction, alongside brilliant white vinyl restorations. We guarantee safe cedar fence cleaning entirely free of splintering or grain destruction, alongside brilliant white vinyl restorations. of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/fence-cleaning.webp",
        faqs: [
          {
                    "question": "Can you remove the green algae from my white vinyl fence?",
                    "answer": "Yes! Our soft washing process specifically kills and removes the green algae, mold, and organic staining from vinyl fencing, restoring it to a brilliant white safely."
          },
          {
                    "question": "Do you also clean wooden fences in Appleton?",
                    "answer": "Absolutely. We use a reduced-pressure technique with specialized wood restorers to clean wooden fences without splintering or damaging the grain."
          },
          {
                    "question": "Will the cleaning chemicals hurt the grass near my fence?",
                    "answer": "No, our solutions are highly diluted and we actively rinse the surrounding grass and plants, neutralizing the area to protect your landscaping."
          }
        ]
    },
    "deck-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the deck cleaning of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/deck-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional deck cleaning in Northeast Wisconsin?",
                    "answer": "Professional deck cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does deck cleaning cost in the Green Bay area?",
                    "answer": "Pricing for deck cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for deck cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality deck cleaning safely."
          }
        ]
    },
    "oxidation-removal": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the oxidation removal of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/oxidation-removal.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional oxidation removal in Northeast Wisconsin?",
                    "answer": "Professional oxidation removal drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does oxidation removal cost in the Green Bay area?",
                    "answer": "Pricing for oxidation removal varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for oxidation removal services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality oxidation removal safely."
          }
        ]
    },
    "soft-wash": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the soft wash Our eco-friendly roof soft wash technology safely neutralizes Gloeocapsa Magma algae without stripping damaging UV granules. Our eco-friendly roof soft wash technology safely neutralizes Gloeocapsa Magma algae without stripping damaging UV granules. Our eco-friendly roof soft wash technology safely neutralizes Gloeocapsa Magma algae without stripping damaging UV granules. Our eco-friendly roof soft wash technology safely neutralizes Gloeocapsa Magma algae without stripping damaging UV granules. of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/house-wash-before-after.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional soft wash in Northeast Wisconsin?",
                    "answer": "Professional soft wash drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does soft wash cost in the Green Bay area?",
                    "answer": "Pricing for soft wash varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for soft wash services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality soft wash safely."
          }
        ]
    },
    "driveway-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Concrete and Driveway Cleaning requires vastly more than a direct pressure washing wand, which permanently etches zebra-stripes into the porous cream layer. We restore residential and commercial flatwork using heavy-duty, large-diameter rotary surface cleaners. By aggressively pre-treating deep oil spots and rust stains, then utilizing a uniform high-pressure spin, we lift years of embedded environmental grime evenly. This instantly restores your property's curb appeal and completely eliminates the extremely dangerous, slippery black algae that causes severe property injuries.</p>
            </section>
        ),
        benefits: [
            "Uniform Zebra-Free Finish: Industrial rotary spinners clean thousands of square feet perfectly evenly.",
            "Eliminates Slip & Fall Danger: Kills the slimy black organic growth that thrives on shaded damp concrete.",
            "Aggressive Oil lifting: Specialized surfactants pull heavy transmission and automotive oils from deep inside the matrix."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/drive-way-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional driveway cleaning in Northeast Wisconsin?",
                    "answer": "Professional driveway cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does driveway cleaning cost in the Green Bay area?",
                    "answer": "Pricing for driveway cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for driveway cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality driveway cleaning safely."
          }
        ]
    },
    "solar-panel-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Professional Solar Panel Cleaning is critical to maximizing your sustainable photovoltaic energy efficiency. Standard tap water or chemical soaps leave heavy mineral deposits or micro-scratches that permanently ruin the conductive glass array. By deploying specialized carbon-fiber water-fed poles and 3-stage RO/DI (Reverse Osmosis / Deionized) pure water systems, we gently scrub away thick agricultural dust and bird droppings. The pure water dries 100% spotless, guaranteeing maximum sunlight absorption and restoring optimal kilowatt production capacity. Maximize your energy returns with our dedicated solar panel efficiency cleaning Wisconsin residents rely on for optimized kilowatt capture.</p>
            </section>
        ),
        benefits: [
            "Maximized Energy Production: Clear glass dramatically boosts kilowatt hour (kWh) generation immediately.",
            "Zero Glass Etching: Soft boar-hair brush bristles completely prevent micro-scratches that ruin panels.",
            "Spot-Free Evaporation: 0-TDS water dries perfectly clean without blocking light with calcium streaks."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/solar-panel-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional solar panel cleaning in Northeast Wisconsin?",
                    "answer": "Professional solar panel cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does solar panel cleaning cost in the Green Bay area?",
                    "answer": "Pricing for solar panel cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for solar panel cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality solar panel cleaning safely."
          }
        ]
    },
    "rust-removal": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the rust removal of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/rust-removal.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional rust removal in Northeast Wisconsin?",
                    "answer": "Professional rust removal drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does rust removal cost in the Green Bay area?",
                    "answer": "Pricing for rust removal varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for rust removal services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality rust removal safely."
          }
        ]
    },
    "building-washing": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the building washing We specialize in comprehensive industrial building washing Oshkosh and Fox Valley businesses trust to maintain professional curb appeal. We specialize in comprehensive industrial building washing Oshkosh and Fox Valley businesses trust to maintain professional curb appeal. We specialize in comprehensive industrial building washing Oshkosh and Fox Valley businesses trust to maintain professional curb appeal. We specialize in comprehensive industrial building washing Oshkosh and Fox Valley businesses trust to maintain professional curb appeal. of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/building-washing.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional building washing in Northeast Wisconsin?",
                    "answer": "Professional building washing drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does building washing cost in the Green Bay area?",
                    "answer": "Pricing for building washing varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for building washing services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality building washing safely."
          }
        ]
    },
    "dumpster-pad-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the dumpster pad cleaning of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/commerical-pressure-wash.webp",
        faqs: [
          {
                    "question": "Why is regular dumpster pad cleaning important for my Wisconsin business?",
                    "answer": "Regular cleaning prevents foul odors, wards off pest infestations, and eliminates slip-and-fall hazards caused by grease and waste buildup."
          },
          {
                    "question": "Do you use hot water to clean dumpster pads?",
                    "answer": "Yes, we use industrial hot-water pressure washing to melt away heavy bio-waste, grease, and sticky residue."
          },
          {
                    "question": "Will you safely dispose of the wastewater?",
                    "answer": "We comply with all local environmental regulations regarding wastewater reclamation and runoff control."
          }
        ]
    },
    "permanent-led-lighting": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the commercial permanent led lighting of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/permanent-led-lighting.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional permanent led lighting in Northeast Wisconsin?",
                    "answer": "Professional permanent led lighting drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does permanent led lighting cost in the Green Bay area?",
                    "answer": "Pricing for permanent led lighting varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for permanent led lighting services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality permanent led lighting safely."
          }
        ]
    },
    "commercial-roof-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the commercial roof cleaning of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/roof-cleaning-copy.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional commercial roof cleaning in Northeast Wisconsin?",
                    "answer": "Professional commercial roof cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does commercial roof cleaning cost in the Green Bay area?",
                    "answer": "Pricing for commercial roof cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for commercial roof cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality commercial roof cleaning safely."
          }
        ]
    },
    "commercial-pressure-washing": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the commercial pressure washing of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/commerical-pressure-wash.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional commercial pressure washing in Northeast Wisconsin?",
                    "answer": "Professional commercial pressure washing drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does commercial pressure washing cost in the Green Bay area?",
                    "answer": "Pricing for commercial pressure washing varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for commercial pressure washing services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality commercial pressure washing safely."
          }
        ]
    },
    "graffiti-removal": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Professional Graffiti Removal demands an immediate, rapid response to protect your commercial property value. The key to eliminating vandalism without destroying the underlying masonry, brick, or siding is specific chemical engineering. Blasting dry spray paint with sheer cold-water pressure will permanently 'blow out' fragile mortar joints and etch the brick faces. Instead, we manually apply specialized biodegradable paint-strippers tailored entirely to the contaminated surface material. Combined with hot-water 200° thermal rinsing, the aerosol pigment literally melts completely off the wall with zero permanent 'ghosting'.</p>
            </section>
        ),
        benefits: [
            "Prevents Copycat Vandalism: Rapid 24/48 HR removal breaks the cycle of tagging by instantly eliminating the vandals 'canvas'.",
            "No Mortar Blowouts: Relies strictly on advanced chemical dissociation rather than catastrophic water pressure.",
            "Eliminates the Ghosting Effect: Our specific chemistry pulls deep pigments completely out of the porous stone so no dark shadow remains."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/graffiti-removal.jpg.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional graffiti removal in Northeast Wisconsin?",
                    "answer": "Professional graffiti removal drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does graffiti removal cost in the Green Bay area?",
                    "answer": "Pricing for graffiti removal varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for graffiti removal services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality graffiti removal safely."
          }
        ]
    },
    "hoa-multi-unit-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Managing properties for a Homeowners Association (HOA) or a multi-unit complex requires strict adherence to seasonal maintenance, safety protocols, and tenant satisfaction. Over time, large residential facades, shared walkways, and community pool decks accumulate severe organic growth like algae, mold, and liability-inducing slippery moss. We deploy highly calibrated, professional-grade soft washing systems to eliminate these specific grime targets safely, without disrupting the daily lives of residents.</p>
                <p className="mb-4">Our tenant-friendly scheduling ensures that all maintenance is communicated transparently, and we utilize strict safety cordons to protect pedestrian traffic. By utilizing eco-friendly, biodegradable detergents, we ensure that community green spaces, pets, and local waterways remain entirely unaffected while achieving a flawless, uniform clean across the entire development.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/commercial-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional hoa multi unit cleaning in Northeast Wisconsin?",
                    "answer": "Professional hoa multi unit cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does hoa multi unit cleaning cost in the Green Bay area?",
                    "answer": "Pricing for hoa multi unit cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for hoa multi unit cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality hoa multi unit cleaning safely."
          }
        ]
    },
    "storefront-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the storefront cleaning of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/store-front-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional storefront cleaning in Northeast Wisconsin?",
                    "answer": "Professional storefront cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does storefront cleaning cost in the Green Bay area?",
                    "answer": "Pricing for storefront cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for storefront cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality storefront cleaning safely."
          }
        ]
    },
    "premium-drive-thru-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Premium Drive-Thru and Commercial Pad Cleaning is specifically engineered to combat high-traffic grease, severe carbon exhaust, and scattered chewing gum that repels potential customers from fast-food and banking lanes. Cold water merely pushes grease around. We deploy commercial-grade trailer units generating 210°+ hot water steam and aggressive commercial degreasers. This physically melts heavy automotive oils and instantly lifts baked-on chewing gum, guaranteeing a sanitized, highly professional visual standard for your corporate storefront—all executed seamlessly after-hours to avoid any disruption to your business operations.</p>
            </section>
        ),
        benefits: [
            "Melt Baked-On Gum: High thermal envelope steam effortlessly pops sticky gum off the concrete flatwork.",
            "Zero Business Disruption: Night-schedule operations guarantee your drive-thru flow remains totally uninterrupted.",
            "Protects Franchise Image: Instantly restores corporate brand trust by presenting a pristine, sanitary transaction point."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/drive-through-cleaning.webp",
        faqs: [
          {
                    "question": "How often should a restaurant in Green Bay schedule drive-thru lane cleaning?",
                    "answer": "High-traffic restaurants in Green Bay should schedule drive-thru lane cleaning at least monthly or quarterly to maintain a safe, grease-free, and welcoming environment for customers."
          },
          {
                    "question": "Can you remove heavy oil and tire marks?",
                    "answer": "Yes, our hot-water commercial pressure washing equipment cuts through heavy grease, oil slicks, and tire marks effortlessly."
          },
          {
                    "question": "Do you clean drive-thrus after business hours?",
                    "answer": "Absolutely. We offer flexible, after-hours scheduling to ensure our cleaning operations never interfere with your customer traffic."
          }
        ]
    },
    "parking-lot-and-garage-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the parking lot and garage cleaning of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/garage-cleaning-before-after.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional parking lot and garage cleaning in Northeast Wisconsin?",
                    "answer": "Professional parking lot and garage cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does parking lot and garage cleaning cost in the Green Bay area?",
                    "answer": "Pricing for parking lot and garage cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for parking lot and garage cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality parking lot and garage cleaning safely."
          }
        ]
    },
    "chewing-gum-removal": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the chewing gum removal of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/patio-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional chewing gum removal in Northeast Wisconsin?",
                    "answer": "Professional chewing gum removal drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does chewing gum removal cost in the Green Bay area?",
                    "answer": "Pricing for chewing gum removal varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for chewing gum removal services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality chewing gum removal safely."
          }
        ]
    },
    "commercial-awning-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the commercial awning cleaning of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/awning-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional commercial awning cleaning in Northeast Wisconsin?",
                    "answer": "Professional commercial awning cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does commercial awning cleaning cost in the Green Bay area?",
                    "answer": "Pricing for commercial awning cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for commercial awning cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality commercial awning cleaning safely."
          }
        ]
    },
    "gas-station-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Gas stations and convenience stores face incredibly heavy vehicular traffic, resulting in severe accumulation of motor oil, diesel spills, tire marks, and discarded chewing gum. A dirty, unmaintained fueling station presents massive slip-and-fall liabilities and immediately drives away potential customers. Our rigorous commercial concrete degreasing and canopy soft washing processes are specifically designed to safely obliterate these hazardous petroleum-based stains.</p>
                <p className="mb-4">We deploy specialized 200°+ hot water pressure washing systems combined with heavy-duty commercial caustics. This deeply penetrates porous concrete to lift and digest embedded hydrocarbons. Additionally, our high-reach canopy cleaning removes spider webs and exhaust soot, ensuring a brilliant, uniformly lit environment that attracts late-night commuters and maximizes safety.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/oil-stain-removal.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional gas station cleaning in Northeast Wisconsin?",
                    "answer": "Professional gas station cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does gas station cleaning cost in the Green Bay area?",
                    "answer": "Pricing for gas station cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for gas station cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality gas station cleaning safely."
          }
        ]
    },
    "post-construction-cleanup": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the post construction cleanup of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/post-construction-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional post construction cleanup in Northeast Wisconsin?",
                    "answer": "Professional post construction cleanup drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does post construction cleanup cost in the Green Bay area?",
                    "answer": "Pricing for post construction cleanup varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for post construction cleanup services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality post construction cleanup safely."
          }
        ]
    },
    "paver-patio-restorations": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Restoring the paver patio restorations of your property requires scientifically backed methods. We deploy professional-grade equipment to eliminate specific grime targets safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/paver-restoration.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional paver patio restorations in Northeast Wisconsin?",
                    "answer": "Professional paver patio restorations drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does paver patio restorations cost in the Green Bay area?",
                    "answer": "Pricing for paver patio restorations varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for paver patio restorations services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality paver patio restorations safely."
          }
        ]
    },
    "commercial-hood-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Commercial Hood Vent Cleaning specifically targets volatile grease accumulations inside commercial restaurant exhaust systems. This is an absolutely critical fire hazard reduction service mandated by the NFPA 96 standards. We utilize extreme 200°+ hot water steam and aggressive commercial caustics to completely strip away baked-on animal fats down to the bare metal, ensuring health inspectors pass your kitchen with flying colors. We never mention mold or exterior siding on interior commercial kitchen ducts.</p>
            </section>
        ),
        benefits: [
            "NFPA 96 Fire Safety Compliance: Protects your kitchen from catastrophic exhaust fires.",
            "Eliminates Health Citations: Ensures your restaurant passes unannounced local health inspections.",
            "Improved HVAC Efficiency: Bare metal exhaust walls allow kitchen smoke to evacuate faster, cooling down the cookline."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/hood-vent-cleaning.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional commercial hood cleaning in Northeast Wisconsin?",
                    "answer": "Professional commercial hood cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does commercial hood cleaning cost in the Green Bay area?",
                    "answer": "Pricing for commercial hood cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for commercial hood cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality commercial hood cleaning safely."
          }
        ]
    },
    "apartment-exterior-cleaning": {
        description: (
            <section className="eeat-service-block">
                <p className="mb-4">Maintaining the exterior compliance and aesthetic appeal of a multi-story apartment complex is a massive logistical challenge that directly impacts tenant retention and property valuations. Airborne pollutants, heavy carbon exhaust from nearby traffic, and aggressive biological growth quickly degrade vinyl siding, brick facades, and communal breezeways. We specialize in high-capacity exterior restoration designed specifically for large-scale apartment footprint.</p>
                <p className="mb-4">Safety and minimal disruption are our absolute priorities. We utilize advanced water-fed pole systems and low-pressure soft washing techniques to safely clean up to three stories from the ground, eliminating the risk of ladder accidents or heavy lift equipment damaging your landscaping. Our tenant-friendly coordination and rapid-deployment team ensure the entire property is revitalized efficiently and safely.</p>
            </section>
        ),
        benefits: [
            "Long-Lasting Results: Our process gets surfaces cleaner and keeps them protected longer.",
            "Enhanced Safety: Eliminates slippery molds and toxic bacterial colonies.",
            "No Damage Guarantee: We use the exact pressure required—often zero—to protect property integrity."
        ],
        process: [
            "1. Site Inspection & Prep: We conduct a thorough exterior evaluation and meticulously protect all landscaping and delicate surfaces.",
            "2. Deep Cleaning Execution: Utilizing specialized proprietary chemical blends and precise water pressure to obliterate stains at a molecular level.",
            "3. Final Quality Check: A rigorous post-wash inspection alongside the property owner to guarantee flawless 100% satisfaction."
        ],
        image: "/images/portfolio/soft-washing.webp",
        faqs: [
          {
                    "question": "What are the benefits of professional apartment exterior cleaning in Northeast Wisconsin?",
                    "answer": "Professional apartment exterior cleaning drastically enhances your property's curb appeal, removes harmful contaminants, and protects your exterior investments from the harsh Wisconsin weather."
          },
          {
                    "question": "How much does apartment exterior cleaning cost in the Green Bay area?",
                    "answer": "Pricing for apartment exterior cleaning varies based on the size and scope of the project. Valley Window Care offers free, no-obligation quotes customized to your exact needs."
          },
          {
                    "question": "Are your technicians insured for apartment exterior cleaning services?",
                    "answer": "Yes, Valley Window Care and Exterior Cleaning is fully licensed, insured, and trained to perform high-quality apartment exterior cleaning safely."
          }
        ]
    },
};
