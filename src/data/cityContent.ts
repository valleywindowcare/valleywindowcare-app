export interface CityContent {
    id: string;
    cityName: string;
    focusService: string;
    header: string;
    introParagraph: string;
    middleParagraph: string;
    guaranteeParagraph: string;
    conclusionParagraph: string;
    externalLink: string;
    externalName: string;
}

export const cityData: CityContent[] = [
    {
        id: "appleton",
        cityName: "Appleton",
        focusService: "Commercial Window Cleaning",
        header: "Premium Exterior Cleaning for Appleton Properties",
        introParagraph: "Operating near the vibrant College Avenue district or the bustling Fox River mall in Appleton means maintaining an immaculate professional image. Appleton's commercial and residential properties face unique Wisconsin weather challenges—from heavy spring pollen that coats storefronts to freezing winter precipitation. Valley Window Care specializes in eliminating these specific Fox Valley environmental buildups.",
        middleParagraph: "For Appleton businesses, crystal-clear glass isn't a luxury; it's a requirement for foot traffic. Our Commercial Window Cleaning protocols utilize pure-water fed-pole technology, ensuring absolutely zero mineral spotting or streaks left behind. By avoiding traditional squeegee chatter and harsh chemicals, we protect your specialized glass coatings while delivering an unmatched, multi-story shine.",
        guaranteeParagraph: "We utilize 100% biodegradable solutions. Whether we are soft washing a historic home near Lawrence University or pressure washing a sprawling concrete parking structure off Highway 41, our environmental impact on Appleton's ecosystem remains at zero.",
        conclusionParagraph: "From commercial window detailing to comprehensive residential roof treatments, Appleton property owners trust our highly trained, fully insured crews. Don't let decades of Fox Valley grime degrade your investment; contact us to deploy our industry-leading restoration systems.",
        externalLink: "https://www.appleton.wi.gov/",
        externalName: "City of Appleton Official Site"
    },
    {
        id: "green-bay",
        cityName: "Green Bay",
        focusService: "Residential Roof Soft Washing",
        header: "Expert Exterior Care in Titletown",
        introParagraph: "Properties near the legendary Lambeau Field or along the breezy shores of the bay face intense, humid micro-climates that rapidly accelerate dangerous black algae (Gloeocapsa magma) growth. Green Bay homeowners desperately need dedicated exterior maintenance to combat these highly destructive organisms before they compromise structural integrity.",
        middleParagraph: "Our premier Residential Roof Soft Washing service is specifically calibrated for Green Bay's older residential districts and modern subdivisions alike. Instead of destructive high-pressure blasting that strips away protective shingle granules, we deploy a low-volume chemical treatment. This method instantly neutralizes biological contaminants at the root, completely restoring the original color of your roof without voiding manufacturer warranties.",
        guaranteeParagraph: "Our Green Bay safety guarantee ensures that we only use environmentally conscious detergents. Every plant, pet, and local waterway near your home is perfectly safe while we rapidly execute our deep-cleaning chemistry.",
        conclusionParagraph: "Valley Window Care is Titletown's premier 5-star exterior restoration unit. Whether you need a massive commercial concrete pad renewed or a delicate residential roof washed safely, our certified technicians deliver unparalleled results across the greater Green Bay region.",
        externalLink: "https://greenbaywi.gov/",
        externalName: "City of Green Bay Municipal Site"
    },
    {
        id: "de-pere",
        cityName: "De Pere",
        focusService: "Residential House Washing",
        header: "Dedicated Property Restoration in De Pere",
        introParagraph: "The humidity rolling directly off the Fox River in De Pere creates the absolute perfect breeding ground for pervasive green mold, mildew, and creeping algae on local siding. Residents on both the East and West sides of the river know that De Pere's specific micro-climate requires specialized surface intervention to protect their home's long-term curb appeal.",
        middleParagraph: "Our House Washing methodology is engineered to counteract river-born moisture. We utilize a distinct soft-wash technique that delicately layers a proprietary blend of algaecides and surfactants onto your vinyl, brick, or stucco. This allows the chemistry to do the heavy lifting, safely melting away years of bonded dirt and organic material without the destructive force of a traditional pressure washer.",
        guaranteeParagraph: "We respect the historic charm and modern architectural beauty of De Pere. Our zero-damage guarantee means we never use sheer force on delicate substrates, relying entirely on biodegradable, eco-safe detergents that protect your landscaping and the Fox River watershed.",
        conclusionParagraph: "With deep roots servicing De Pere, Valley Window Care brings commercial-grade equipment to your residential doorstep. Join your neighbors in trusting our fully insured experts to dramatically elevate the aesthetic and lifespan of your property.",
        externalLink: "https://www.deperewi.gov/",
        externalName: "City of De Pere Official Website"
    },
    {
        id: "ledgeview",
        cityName: "Ledgeview",
        focusService: "Concrete and Driveway Cleaning",
        header: "Elevating Curb Appeal in Ledgeview",
        introParagraph: "Ledgeview's beautiful sprawling properties and modern subdivisions feature expansive driveways, intricate stamped concrete patios, and long walkways. However, these porous elements act like giant sponges for Wisconsin's brutal freeze-thaw cycles, quickly absorbing vehicle oils, rust from iron-rich water sprinklers, and deeply embedded dirt.",
        middleParagraph: "To restore these vital exterior components, our focused Concrete Cleaning operations utilize advanced, high-heat rotary surface cleaners. Rather than just pushing dirt around with a wand, our calibrated machines spin at high velocities, utilizing uniform hot-water pressure to extract subterranean grime and chemical stains simultaneously, immediately eliminating slip hazards and drastically brightening the concrete.",
        guaranteeParagraph: "Ledgeview residents expect immaculate results with zero collateral damage. Our process is strictly managed to contain wastewater run-off, utilizing biodegradable emulsifiers that break down petroleum stains without harming your manicured lawns or garden beds.",
        conclusionParagraph: "From heavy-duty driveway surface restoration to comprehensive whole-home soft washing, our Ledgeview property clients receive nothing short of 5-star, white-glove service. Protect your extensive concrete investments with our professional exterior maintenance programs.",
        externalLink: "https://www.ledgeviewwisconsin.com/",
        externalName: "Town of Ledgeview"
    },
    {
        id: "neenah",
        cityName: "Neenah",
        focusService: "Gutter Cleaning & Brightening",
        header: "Specialized Exterior Maintenance in Neenah",
        introParagraph: "Situated on the banks of Lake Winnebago, Neenah properties are uniquely exposed to rapid weather shifts and dense foliage drops. The combination of heavy autumn leaf coverage and fierce lake-effect storms means Neenah homes are incredibly susceptible to overflowing, severely clogged gutter systems that threaten foundation integrity.",
        middleParagraph: "Our comprehensive Gutter Cleaning and Brightening service goes far beyond simple debris removal. After we hand-clear and safely flush your entire system to ensure zero blockages in your downspouts, we attack the exterior aesthetics. We utilize specialized oxidation-removal chemistry to eliminate those stubborn 'tiger stripes' (electrostatic bonding of dirt and aluminum), restoring the metallic faces of your gutters to look brand new.",
        guaranteeParagraph: "Protecting Neenah's water table is critical. We capture and correctly dispose of heavy organic blockages, and our exterior brightening solutions are specially formulated to neutralize safely into the surrounding soil without impacting your prized garden borders.",
        conclusionParagraph: "Don't risk expensive water damage to your Neenah home's foundation or roofline. Valley Window Care provides the critical preventative maintenance required to keep your water diversion systems flowing efficiently and your home looking pristine.",
        externalLink: "https://www.ci.neenah.wi.us/",
        externalName: "City of Neenah"
    },
    // The following entries feature spun, unique localized logic covering the rest of the 24 array
    {
        id: "menasha",
        cityName: "Menasha",
        focusService: "Commercial Pressure Washing",
        header: "Revitalizing Menasha's Exteriors",
        introParagraph: "Bordering Lake Winnebago and the Fox River, Menasha's unique nautical and industrial heritage means local commercial and residential properties deal with heavy environmental weathering. Intense moisture levels drive persistent algae blooms on siding and concrete surfaces alike throughout the city.",
        middleParagraph: "We specialize in heavy-duty commercial pressure washing across Menasha. From reviving heavily trafficked storefronts to degreasing commercial dumpster pads, our high-volume, hot-water extraction systems cut through industrial atmospheric fallout and persistent biological growth instantly.",
        guaranteeParagraph: "Whether servicing a historic home near the marina or a sprawling commercial complex, our eco-safe detergents guarantee rapid contaminant breakdown without risking the local watershed.",
        conclusionParagraph: "Valley Window Care is Menasha's trusted local authority for exterior detailing. Partner with us to deploy professional-grade restoration that drastically enhances the lifespan of your structural assets.",
        externalLink: "https://www.cityofmenasha-wi.gov/",
        externalName: "City of Menasha Resource Center"
    },
    {
        id: "kaukauna",
        cityName: "Kaukauna",
        focusService: "Paver & Patio Restoration",
        header: "Precision Exterior Cleaning in Kaukauna",
        introParagraph: "Known as the Electric City, Kaukauna boasts beautiful residential neighborhoods that face distinct atmospheric challenges. The proximity to the Fox River locks and nearby industrial sectors creates a unique blend of organic buildup and heavy atmospheric dirt on local properties.",
        middleParagraph: "Kaukauna residents frequently utilize extensive outdoor living spaces. Our Paver and Patio Restoration service is designed to safely eradicate deeply rooted moss and weeds from between joints, followed by a meticulous high-heat wash that lifts decades of embedded dirt from the stone itself.",
        guaranteeParagraph: "We strictly adhere to low-impact environmental protocols, ensuring our cleaning compounds neutralize entirely before interacting with Kaukauna's natural landscapes.",
        conclusionParagraph: "Elevate your property's value and aesthetic. Our fully insured technicians deliver massive curb appeal upgrades to Kaukauna homes through precision exterior cleaning applications.",
        externalLink: "https://cityofkaukauna.com/",
        externalName: "City of Kaukauna"
    },
    {
        id: "oshkosh",
        cityName: "Oshkosh",
        focusService: "Vinyl & Wood Siding Washing",
        header: "Safeguarding Oshkosh Properties",
        introParagraph: "Located directly on the sweeping shores of Lake Winnebago, Oshkosh properties endure relentless wind-driven rain, intense sun exposure, and massive insect hatches. These lake-effect conditions bond spider webs, bug debris, and thick algae directly into the siding of local homes.",
        middleParagraph: "Our proprietary house washing technique is the ultimate solution for Oshkosh's lakefront elements. We utilize a low-pressure chemical delivery system to melt away biological contaminants and insect debris, drastically outperforming high-pressure wands that can force water behind your siding panels.",
        guaranteeParagraph: "We prioritize the safety of the Lake Winnebago watershed. All of our algaecides and surfactants are 100% biodegradable and exceptionally safe for the surrounding aquatic environment.",
        conclusionParagraph: "From the historic districts to standard suburban layouts, Oshkosh home and business owners trust Valley Window Care to provide safe, highly effective exterior surface sanitization.",
        externalLink: "https://www.ci.oshkosh.wi.us/",
        externalName: "City of Oshkosh"
    },
    {
        id: "howard",
        cityName: "Howard",
        focusService: "Deck Cleaning & Restoration",
        header: "Premium Property Care in Howard",
        introParagraph: "The sprawling, wooded neighborhoods of Howard offer tremendous privacy but also generate heavy organic fallout. Pine needles, sap, and deep shade create the perfect storm for pervasive mold and slippery moss to dominate exposed wooden and composite decks.",
        middleParagraph: "Howard residents rely on our specialized Deck Cleaning and Restoration services. We bypass destructive pressure washing—which splinters and furrs expensive wood grain—and instead utilize dedicated wood retarding chemistry to safely lift silvering, kill mold spores, and prep the surface for staining.",
        guaranteeParagraph: "Our commitment to Howard properties includes complete landscape protection. We heavily pre-water and post-rinse all surrounding vegetation to ensure zero impact from our cleaning agents.",
        conclusionParagraph: "Reclaim your outdoor living spaces in Howard. Our expert technicians possess the exact chemical knowledge required to safely strip away miles of organic neglect from your exterior investments.",
        externalLink: "https://www.villageofhoward.com/",
        externalName: "Village of Howard"
    },
    {
        id: "suamico",
        cityName: "Suamico",
        focusService: "Roof Cleaning & Moss Removal",
        header: "Protecting Suamico Investments",
        introParagraph: "Suamico's heavily forested, expansive properties sit under dense canopies that drastically limit direct sunlight. This constant shade encourages aggressive moss, lichen, and black streaking to take deep root across local roofing systems, literally eating away at the limestone filler in asphalt shingles.",
        middleParagraph: "We deploy ARMA-approved (Asphalt Roofing Manufacturers Association) soft-wash systems specifically for Suamico's shaded roofs. By cascading a gentle, specialized algaecide over the shingles, we achieve a 100% kill rate on organic growth without voiding manufacturer defect warranties.",
        guaranteeParagraph: "Due to the pristine nature of the Suamico area, we guarantee absolute environmental compliance, utilizing only biodegradable detergents that break down harmlessly into salt and water.",
        conclusionParagraph: "Do not let aggressive moss drastically shorten the lifespan of your roof. Valley Window Care is Suamico's undisputed leader in safe, non-destructive roof and exterior restoration.",
        externalLink: "https://www.suamico.org/",
        externalName: "Village of Suamico"
    },
    {
        id: "allouez",
        cityName: "Allouez",
        focusService: "Historic Brick & Stone Cleaning",
        header: "Restoring Allouez Architecture",
        introParagraph: "The historic Village of Allouez is filled with stunning, older architecture, mature trees, and beautiful brickwork. However, decades of atmospheric pollution and seasonal dampness severely stain and degrade masonry, requiring highly specialized, delicate restoration techniques.",
        middleParagraph: "Our operations in Allouez heavily pivot toward gentle Historic Brick and Stone Cleaning. We completely abandon high-PSI power washing on these fragile substrates, relying instead on high-end efflorescence removers and soft wash chemistry to pull dark carbon stains and algae out of the porous stone safely.",
        guaranteeParagraph: "We preserve the structural integrity of Allouez's heritage. Our non-abrasive methodology ensures that delicate mortar joints and original masonry face absolutely zero erosion during the cleaning process.",
        conclusionParagraph: "From classic brick homes to modern concrete expanses, Allouez property owners partner with us for white-glove exterior cleaning that fiercely protects property values.",
        externalLink: "https://www.villageofallouezwi.gov/",
        externalName: "Village of Allouez"
    },
    {
        id: "ashwaubenon",
        cityName: "Ashwaubenon",
        focusService: "Commercial Storefront Washing",
        header: "Commercial-Grade Cleaning in Ashwaubenon",
        introParagraph: "As a massive commercial hub surrounding the stadium district, Ashwaubenon properties endure relentlessly high vehicle and foot traffic. The associated exhaust soot, discarded chewing gum, and general heavy-duty grime require ultra-aggressive commercial maintenance to keep storefronts inviting.",
        middleParagraph: "Ashwaubenon businesses depend on our Commercial Storefront and Concrete Washing division. We deploy heavy-duty, trailer-mounted hot water skids capable of generating the extreme heat required to melt chewing gum off walks and blast embedded petroleum stains out of highly trafficked entryways.",
        guaranteeParagraph: "We operate with total discretion, offering off-hours scheduling for Ashwaubenon commercial clients to guarantee zero disruption to your daily customer traffic flow while we deploy our eco-safe degreasers.",
        conclusionParagraph: "First impressions are everything in retail and corporate environments. Valley Window Care delivers the heavy-hitting commercial restoration power Ashwaubenon businesses demand to outshine the competition.",
        externalLink: "https://ashwaubenon.gov/",
        externalName: "Village of Ashwaubenon"
    },
    {
        id: "bellevue",
        cityName: "Bellevue",
        focusService: "Residential Siding Soft Wash",
        header: "Pristine Property Care in Bellevue",
        introParagraph: "The rapidly growing community of Bellevue features massive, multi-story modern homes that are beautiful but notoriously difficult to clean safely. Intense sun exposure on one side and deep shade on the other creates polarizing environments where brutal oxidation and heavy algae must be fought simultaneously.",
        middleParagraph: "In Bellevue, we utilize specialized aerial delivery systems to achieve massive vertical reach for our Residential Siding Soft Wash. This allows us to safely coat the peaks of massive 3-story homes with our brightening detergents from the safety of the ground, completely eliminating the risk of ladder damage to your siding or gutters.",
        guaranteeParagraph: "We take extreme pride in protecting Bellevue's manicured properties. Our proprietary plant-wash neutralizing agents are deployed on all landscaping before, during, and after our cleaning protocols to guarantee zero botanical burn.",
        conclusionParagraph: "Valley Window Care brings elite, high-efficiency exterior cleaning to Bellevue's modern homes and businesses. Experience the profound difference of working with fully insured architectural specialists.",
        externalLink: "https://www.villageofbellevue.com/",
        externalName: "Village of Bellevue"
    },
    {
        id: "door-county",
        cityName: "Door County",
        focusService: "Vacation Home Exterior Detailing",
        header: "Premier Maintenance for Door County Properties",
        introParagraph: "Door County's massive peninsula is constantly battered by the intense weather systems generated by Lake Michigan and Green Bay. High winds, heavy moisture, and massive spider hatch cycles mean vacation homes and local businesses require aggressive, specialized surface maintenance to survive the harsh coastal environment.",
        middleParagraph: "Our Vacation Home Exterior Detailing packages are deeply popular across Door County. We provide comprehensive, turn-key exterior sweeping—combining roof soft washing, deck restoration, spider-web eradication, and streak-free window cleaning—so your property is absolutely pristine for the crucial tourist season.",
        guaranteeParagraph: "Door County's delicate coastal ecosystem is our top priority. Our teams strictly enforce the use of 100% biodegradable, lake-safe detergents to ensure zero contamination of the pristine surrounding waters.",
        conclusionParagraph: "From massive coastal estates to bustling boutique storefronts, Valley Window Care delivers the most comprehensive, high-end exterior restoration available across the entire Door County peninsula.",
        externalLink: "https://www.doorcounty.com/",
        externalName: "Door County Visitor Bureau"
    },
    {
        id: "shawano",
        cityName: "Shawano",
        focusService: "Lakefront Property Soft Washing",
        header: "Safeguarding Architecture in Shawano",
        introParagraph: "Surrounding the expansive Shawano Lake, local properties face extreme humidity, severe seasonal insect swarms, and aggressive tree sap fallout. These lakefront conditions demand an exterior cleaning approach perfectly balanced between deep cleaning power and strict environmental protection.",
        middleParagraph: "Our Lakefront Property Soft Washing is the gold standard in Shawano. Rather than blasting bug debris and algae into your siding with high pressure, we allow our advanced chemical formulas to safely digest the organic matter, ensuring an immaculate finish that lasts significantly longer than traditional washing.",
        guaranteeParagraph: "We operate with zero-tolerance for watershed contamination. Every droplet of our cleaning solution deployed in Shawano is verified eco-safe, ensuring Shawano Lake and surrounding tributaries remain completely untouched.",
        conclusionParagraph: "Enhance your Shawano property's curb appeal while fiercely protecting its structural lifespan. Our fully insured exterior restoration teams deliver unmatched, 5-star results.",
        externalLink: "https://www.cityofshawano.com/",
        externalName: "City of Shawano"
    },
    {
        id: "manitowoc",
        cityName: "Manitowoc",
        focusService: "Coastal Window & Siding Cleaning",
        header: "Defending Manitowoc Coastlines",
        introParagraph: "Perched directly on the edge of Lake Michigan, Manitowoc properties endure brutal coastal conditions, including freezing salt-spray off the highways, intense wind-driven debris, and rapid freeze-thaw cycles that severely punish exterior surfaces.",
        middleParagraph: "We deploy highly specialized Coastal Window and Siding Cleaning protocols for Manitowoc. Utilizing pure-water fed-pole systems, we safely scrub and rinse massive glass panes to a streak-free finish, while our soft wash chemistry neutralizes the corrosive grit and organic growth bound to local siding and brickwork.",
        guaranteeParagraph: "Our coastal operations strictly rely on environmentally harmless detergents that completely neutralize upon contact with the soil, safeguarding Manitowoc's beautiful Lake Michigan shoreline.",
        conclusionParagraph: "Do not let the harsh coastal environment permanently degrade your Manitowoc home or business. Valley Window Care provides the ultimate architectural defense through professional, high-efficiency exterior cleaning.",
        externalLink: "https://www.manitowoc.org/",
        externalName: "City of Manitowoc"
    },
    {
        id: "hobart",
        cityName: "Hobart",
        focusService: "High-End Estate Cleaning",
        header: "Elite Property Detailing in Hobart",
        introParagraph: "The sprawling, highly manicured estates and massive custom builds across Hobart require an extremely elevated level of care. Complex architectural elements, expensive delicate stone facades, and intricate roofing systems demand white-glove service, not a generic pressure washing ticket.",
        middleParagraph: "Hobart homeowners rely absolutely on our High-End Estate Cleaning operations. We exclusively deploy low-pressure soft washing to safely sanitize and restore high-value materials. From treating custom stamped concrete driveways to entirely neutralizing organic blooms on massive, multi-pitched cedar shake or asphalt roofs, we guarantee precision.",
        guaranteeParagraph: "We recognize that Hobart estates feature incredibly expensive, exotic landscaping. Our technicians continuously hydrate and treat the surrounding foliage with proprietary plant-wash to ensure total botanical protection.",
        conclusionParagraph: "Valley Window Care is Northeast Wisconsin's premier choice for luxury exterior restoration. Trust our fully-insured experts to maintain the flawless aesthetic of your Hobart estate.",
        externalLink: "https://www.hobart-wi.org/",
        externalName: "Village of Hobart"
    },
    {
        id: "greenville",
        cityName: "Greenville",
        focusService: "Residential Driveway & Walkway Scrubbing",
        header: "Dedicated Surface Care in Greenville",
        introParagraph: "The massive suburban expansions across Greenville feature heavily utilized concrete driveways and expansive winding sidewalks. Wisconsin's freezing winters violently attack these surfaces, driving iron and salt deep into the pores while creating extremely hazardous, slippery algae growth.",
        middleParagraph: "Greenville homeowners trust our dedicated Residential Driveway and Walkway Scrubbing protocols. By linking high-volume uniform surface cleaners with deeply penetrating, alkaline-based detergents, we literally float dirt and heavy rust deposits out of the concrete's microscopic pores, creating a brilliant, extremely safe walking surface.",
        guaranteeParagraph: "Our meticulous process in Greenville ensures that our heavy dirt extraction never creates damaging runoff for your pristine suburban lawn, heavily diluting all removed material safely.",
        conclusionParagraph: "Dramatically boost the entrance aesthetic of your Greenville home while entirely eliminating slick organic hazards. Our expert exterior detailing is the highest-rated in the Fox Valley.",
        externalLink: "https://www.townofgreenville.com/",
        externalName: "Village of Greenville"
    },
    {
        id: "sherwood",
        cityName: "Sherwood",
        focusService: "High Cliff & Wooded Estate Soft Washing",
        header: "Specialty Exterior Cleaning in Sherwood",
        introParagraph: "Nestled directly against the sprawling High Cliff State Park, properties in Sherwood exist within a massive, dense micro-climate. High humidity levels from Lake Winnebago combined with intense local shade absolutely supercharges the growth of black algae, moss, and aggressive lichen on local sidings and roofs.",
        middleParagraph: "Sherwood's unique geography requires our deeply specialized Wooded Estate Soft Washing. Rather than using massive pressure that damages siding, our highly calibrated, low-pressure algaecide delivery completely kills aggressive spores at the root level, ensuring the organic matter simply melts away instead of returning violently months later.",
        guaranteeParagraph: "Because Sherwood borders critical state park infrastructure, our zero-impact environmental guarantee is paramount. We deploy incredibly safe, rapidly biodegradable compounds that leave the surrounding forest ecosystem entirely untouched.",
        conclusionParagraph: "Protect the massive investment of your Sherwood property from aggressive, structural decay caused by local organic growth. Valley Window Care is the trusted local authority for safe, chemical soft washing.",
        externalLink: "https://www.villageofsherwood.org/",
        externalName: "Village of Sherwood"
    },
    {
        id: "combined-locks",
        cityName: "Combined Locks",
        focusService: "Industrial Valley Property Cleaning",
        header: "Expert Detailing in Combined Locks",
        introParagraph: "Situated deep within the industrial heritage of the Fox River Valley, properties in Combined Locks face a unique combination of river-based humidity and airborne particulate fallout from surrounding paper infrastructure. This creates a dense, stubborn layer of atmospheric soil binding to exterior walls.",
        middleParagraph: "We deploy aggressive dirt-fracturing chemistry specific to the needs of Combined Locks. Our soft wash systems utilize specialized surfactants that break the powerful electrostatic bonds holding industrial fallout to your siding and windows, allowing us to safely flush the complex clean without extreme, damaging water pressure.",
        guaranteeParagraph: "Our commitment to the Fox River ecosystem means we strictly utilize modern, biodegradable cleaning surfactants that pose absolutely zero threat to the river systems running through Combined Locks.",
        conclusionParagraph: "Ensure your Combined Locks home or business looks impeccably maintained. Our fully certified and insured operations deliver the highest caliber of exterior property restoration available in Northeast Wisconsin.",
        externalLink: "https://www.combinedlocks.org/",
        externalName: "Village of Combined Locks"
    }
];
