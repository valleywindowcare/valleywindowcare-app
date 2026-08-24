import Link from 'next/link';
import SafeHeroImage from '@/components/SafeHeroImage';
import { ChevronRight, ShieldCheck, MapPin, ArrowRight, Phone, CheckCircle2, CreditCard } from 'lucide-react';
import PricingMatrix from '@/components/PricingMatrix';
import ReviewSlider from '@/components/ReviewSlider';
import VanillaMapClient from '@/components/VanillaMapClient';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

const VALID_INTERSECTIONS = {
  "green-bay": {
    "pressure-washing": {
      title: "Professional Pressure Washing in Green Bay, WI",
      description: "Get elite, commercial-grade pressure washing in Green Bay, WI. High-power concrete cleaning, driveway wash, and exterior restoration near Lambeau Field and Astor Park.",
      heroTitle: "Elite Pressure Washing in Green Bay, WI",
      heroDesc: "Professional hot-water flatwork cleaning and exterior restoration for residential and commercial properties.",
      heroImage: "/images/portfolio/pressure-washing.webp",
      cityName: "Green Bay",
      serviceName: "Pressure Washing",
      serviceSlug: "pressure-washing",
      intro: "Our professional pressure washing services are specifically tailored for residential and commercial properties in Green Bay, Wisconsin. From high-traffic driveways near Lambeau Field to historic brick walkways in Astor Park, we use commercial-grade hot-water flatwork cleaners and specialized pressure washing techniques to safely strip away years of built-up oil, winter salt, tire marks, grime, and environmental soot.",
      features: [
        "Commercial-grade hot water flatwork extraction",
        "Zebra-stripe free rotary surface cleaning",
        "Safe eco-friendly pre-treatment detergents",
        "Complete removal of corrosive winter road salt",
        "Fully licensed, bonded, and insured technicians"
      ],
      p1Title: "Why Green Bay Properties Need Professional Concrete & Exterior Wash",
      p1Text: "Wisconsin's harsh winter freeze-thaw cycles trap corrosive road salt and moisture inside concrete flatwork. This chemical slurry bakes into the surface, causing spalling, cracking, and deterioration. Our hot-water pressure washing system extracts these dangerous salts, grease, and grime, ensuring your pathways, patio, and driveways remain structurally sound and beautiful.",
      p2Title: "Uniform Surface Cleaning vs. Wand Blasting",
      p2Text: "We utilize professional-grade rotary surface cleaners and variable pressure wands. We pre-treat surfaces with eco-friendly detergents to lift oil stains and kill deep-seated organic growth, followed by a uniform, streak-free pressure rinse that leaves your concrete looking brand new and avoids the destructive lining left by DIY wands.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Professional Pressure Washing in Green Bay",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Valley Property Services",
          "telephone": "+1-920-609-7085",
          "url": "https://valleyexteriorpros.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Green Bay"
        },
        "description": "Commercial-grade hot-water pressure washing and driveway restoration in Green Bay, Wisconsin."
      }
    },
    "roof-cleaning": {
      title: "Safe Soft Wash Roof Cleaning in Green Bay, WI",
      description: "Protect your roof with professional soft wash roof cleaning in Green Bay, WI. Safely remove black algae streaks, moss, and lichen from shingles without damage.",
      heroTitle: "Safe Soft Wash Roof Cleaning in Green Bay, WI",
      heroDesc: "Eliminate black algae streaks, moss, and lichen safely using low-pressure soft washing techniques.",
      heroImage: "/images/portfolio/roof-cleaning.webp",
      cityName: "Green Bay",
      serviceName: "Roof Cleaning",
      serviceSlug: "roof-cleaning",
      intro: "Preserve the life of your roof with our professional soft wash roof cleaning services in Green Bay, WI. Those dark, ugly black streaks on your asphalt shingles aren't dirt—they are Gloeocapsa magma, a destructive type of algae that feeds on the limestone filler in your shingles. We utilize safe, low-pressure soft washing methods recommended by the Asphalt Roofing Manufacturers Association (ARMA) to eliminate these organisms at the root.",
      features: [
        "Low-pressure soft wash sanitization (ARMA compliant)",
        "Deep root elimination of moss, lichen, and algae",
        "Biodegradable, eco-friendly chemical solutions",
        "Can extend shingle service life by up to 10 years",
        "Full landscape and plant protection protocol"
      ],
      p1Title: "Why Soft Washing is Essential for Your Green Bay Roof",
      p1Text: "Traditional high-pressure blasting can strip the protective granules off your shingles, leading to premature roof failure. Our soft washing system uses specialized biodegradable algaecides and low-pressure delivery to gently sanitize your roof, removing moss, lichen, and algae streaks safely. This treatment not only boosts your home's curb appeal but can extend your shingle lifespan by up to 10 years.",
      p2Title: "Green Bay Climate & Roof Care",
      p2Text: "Due to our proximity to the Bay and Lake Michigan, high humidity levels during Northeast Wisconsin summers accelerate biological growth. Shaded roofs near the Fox River are particularly susceptible. Protect your roof today with our gentle, certified soft wash service.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Soft Wash Roof Cleaning in Green Bay",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Valley Property Services",
          "telephone": "+1-920-609-7085",
          "url": "https://valleyexteriorpros.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Green Bay"
        },
        "description": "ARMA-compliant low-pressure soft wash roof cleaning to safely remove algae and moss in Green Bay, Wisconsin."
      }
    }
  },
  "appleton": {
    "pressure-washing": {
      title: "Professional Pressure Washing in Appleton, WI",
      description: "Premium power washing and concrete cleaning in Appleton, WI. Keep your driveways, patios, and commercial walkways clean along the I-41 corridor.",
      heroTitle: "Premium Pressure Washing in Appleton, WI",
      heroDesc: "Professional concrete washing, driveway cleaning, and commercial flatwork restoration.",
      heroImage: "/images/portfolio/pressure-washing.webp",
      cityName: "Appleton",
      serviceName: "Pressure Washing",
      serviceSlug: "pressure-washing",
      intro: "Keep your Appleton property looking its absolute best with our premium pressure washing and exterior restoration services. Serving residential and commercial clients along the I-41 corridor and across the Fox River Valley, we deploy high-heat flatwork cleaners to wash away stubborn tire tracks, oil stains, mold, and baked-on winter salt.",
      features: [
        "High-temperature flatwork cleaning",
        "Removal of stubborn oil, rust, and clay stains",
        "Uniform rotary head pressure (no zebra stripes)",
        "Salt damage prevention treatments",
        "Appleton commercial storefront sidewalk cleaning"
      ],
      p1Title: "Appleton Concrete Restoration & Surface Cleaning",
      p1Text: "Porous surfaces like concrete driveways, stone patios, and commercial sidewalks accumulate heavy dirt and carbon deposits from vehicular traffic and environmental exposure. Our professional surface cleaners spin twin high-pressure jets just inches from the ground, providing a perfectly uniform wash without the zebra-striping marks left by DIY spray wands. We extract deeply embedded contaminants, restoring safety and curb appeal.",
      p2Title: "Protecting Your Investment from Wisconsin Winters",
      p2Text: "Concrete cleaning isn't just about appearance—it's preventative maintenance. Wisconsin salt and ice-melt chemicals degrade concrete over time. Our power washing service removes these corrosive agents, extending the lifespan of your flatwork.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Premium Pressure Washing in Appleton",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Valley Property Services",
          "telephone": "+1-920-609-7085",
          "url": "https://valleyexteriorpros.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Appleton"
        },
        "description": "High-temperature power washing and flatwork cleaning along the I-41 corridor in Appleton, Wisconsin."
      }
    },
    "house-washing": {
      title: "Safe Soft Wash House Washing in Appleton, WI",
      description: "Expert soft wash house washing in Appleton, WI. Safely clean vinyl, brick, and stucco siding without high pressure. Eco-friendly algae and mold removal.",
      heroTitle: "Safe Soft Wash House Washing in Appleton, WI",
      heroDesc: "Gentle low-pressure exterior siding cleaning for vinyl, brick, wood, and stucco home exteriors.",
      heroImage: "/images/portfolio/house-wash-before-after.webp",
      cityName: "Appleton",
      serviceName: "House Washing",
      serviceSlug: "house-washing",
      intro: "Restore the beauty of your Appleton home with our safe and effective soft wash house washing services. High-pressure washing should never be used on residential siding, as it can blast water behind panels, crack vinyl, blow out window seals, and strip paint. We use a gentle, low-pressure soft washing system that cleans your home's exterior safely and thoroughly.",
      features: [
        "100% safe low-pressure soft wash method",
        "Neutralizes mold, mildew, and green algae at the root",
        "Protects siding panels from high-pressure water intrusion",
        "Biodegradable formulas safe for lawns, plants, and pets",
        "Increases home value and immediate curb appeal"
      ],
      p1Title: "Eliminate Algae, Mold, and Grime Safely",
      p1Text: "Wisconsin's humid summers and damp winters lead to rapid organic growth on the north and shaded sides of Appleton homes. Our soft wash process applies eco-friendly, biodegradable cleaning solutions that kill mold, mildew, and algae at the root level, rather than just blasting the surface. This ensures a deep clean that keeps your siding bright up to 3-4 times longer than pressure washing.",
      p2Title: "Appleton Neighborhood Siding Specialists",
      p2Text: "Whether your home features delicate vinyl siding, historic brick, or modern stucco, we adjust our cleaning solutions specifically for your property. Our technicians are fully trained, insured, and dedicated to preserving the structural integrity of your Appleton home.",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Soft Wash House Washing in Appleton",
        "provider": {
          "@type": "HomeAndConstructionBusiness",
          "name": "Valley Property Services",
          "telephone": "+1-920-609-7085",
          "url": "https://valleyexteriorpros.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Appleton"
        },
        "description": "Safe, low-pressure soft wash house siding cleaning services in Appleton, Wisconsin."
      }
    }
  }
};

type PageProps = {
  params: Promise<{ city: string; service: string }>;
};

export function generateStaticParams() {
  const paramsList: { city: string; service: string }[] = [];
  Object.entries(VALID_INTERSECTIONS).forEach(([city, services]) => {
    Object.keys(services).forEach((service) => {
      paramsList.push({ city, service });
    });
  });
  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city, service } = await params;
  const cityData = VALID_INTERSECTIONS[city as keyof typeof VALID_INTERSECTIONS];
  if (!cityData) return notFound();
  
  const pageContent = cityData[service as keyof typeof cityData];
  if (!pageContent) return notFound();

  return {
    title: pageContent.title,
    description: pageContent.description,
    robots: { index: true, follow: true }
  };
}

export default async function GeoServiceIntersectionPage({ params }: PageProps) {
  const { city, service } = await params;
  const cityData = VALID_INTERSECTIONS[city as keyof typeof VALID_INTERSECTIONS];
  if (!cityData) return notFound();

  const pageContent = cityData[service as keyof typeof cityData];
  if (!pageContent) return notFound();

  return (
    <main className="w-full overflow-hidden bg-slate-50">
      {/* LOCALIZED SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageContent.schema) }}
      />

      {/* HERO SECTION */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center">
        <SafeHeroImage
          src={pageContent.heroImage}
          fallbackSrc="/images/portfolio/pressure-washing.webp"
          alt={`${pageContent.serviceName} in ${pageContent.cityName}, WI`}
        />

        <div className="relative z-10 container mx-auto px-4 max-w-5xl text-center mt-16 sm:mt-0">
          <div className="inline-flex items-center gap-2 bg-white/90 border border-white/20 text-slate-900 px-4 md:px-6 py-2 rounded-full mb-6 text-sm font-semibold tracking-widest uppercase">
            <MapPin size={16} className="text-gold" />
            {pageContent.cityName}, WI
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            {pageContent.heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
            {pageContent.heroDesc}
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
      </section>

      {/* BREADCRUMBS */}
      <div className="bg-white border-b border-gray-100 py-4 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <Link href="/service-areas" className="hover:text-gold transition-colors">Service Areas</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <Link href={`/service-areas/${city}`} className="hover:text-gold transition-colors capitalize">{pageContent.cityName}</Link>
          <ChevronRight size={14} className="text-gray-300" />
          <span className="text-navy font-semibold">{pageContent.serviceName}</span>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <section className="py-20 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Side */}
            <div className="lg:col-span-7 space-y-10">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mb-6">
                  Elite Local {pageContent.serviceName} Services
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  {pageContent.intro}
                </p>
                <div className="mt-8 space-y-4">
                  {pageContent.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-navy mb-4">{pageContent.p1Title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{pageContent.p1Text}</p>
                
                <h3 className="text-2xl font-bold text-navy mb-4">{pageContent.p2Title}</h3>
                <p className="text-gray-600 leading-relaxed">{pageContent.p2Text}</p>
              </div>
            </div>

            {/* Right Sidebar Form Side */}
            <div className="lg:col-span-5 lg:sticky lg:top-8 space-y-8">
              <div className="bg-navy p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black mb-4">Request a Free Quote</h3>
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                    Ready to transform your property? Contact us today to schedule your specialized local service in {pageContent.cityName}.
                  </p>
                  
                  <div className="space-y-4">
                    <a
                      href="tel:920-609-7085"
                      className="w-full bg-gold text-navy font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-white hover:text-navy transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/20"
                    >
                      <Phone size={20} />
                      Call or Text: (920) 609-7085
                    </a>
                    
                    <Link
                      href="/contact"
                      className="w-full bg-white/10 border border-white/20 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition-all text-center"
                    >
                      Fill Out Our Online Form
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <ShieldCheck className="text-gold mb-2" size={24} />
                      <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">100% Insured</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <CreditCard className="text-gold mb-2" size={24} />
                      <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Card/Check Pay</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -mr-20 -mt-20" />
              </div>

              {/* Back links context panel */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
                <h4 className="font-bold text-navy">Related Services & Locations</h4>
                <div className="flex flex-col gap-2.5 text-sm">
                  <Link href={`/services/${pageContent.serviceSlug}`} className="text-gold font-semibold hover:underline flex items-center gap-1.5">
                    View General {pageContent.serviceName} service details <ArrowRight size={14} />
                  </Link>
                  <Link href={`/service-areas/${city}`} className="text-gold font-semibold hover:underline flex items-center gap-1.5">
                    View all {pageContent.cityName} services <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING MATRIX */}
      <section className="py-20 bg-white border-t border-b border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">Transparent Local Pricing</h2>
          <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
            Honest, competitive service pricing with zero hidden fees. Exact quotes provided prior to start.
          </p>
          <PricingMatrix 
            title={`${pageContent.cityName} ${pageContent.serviceName}`}
            description={`Secure professional, reliable ${pageContent.serviceName.toLowerCase()} for your ${pageContent.cityName} property.`}
            rateTitle="Standard Rate"
            ratePrice="$350.00"
            rateDetails="Minimum baseline per visit"
            minimumPrice="$350.00"
            minimumDetails="Depending on travel distance and complexity"
            variableTitle="Comprehensive Projects"
            variableHeading="Custom Assessed"
            variableDetails="Multi-service treatments, commercial building washing, and high-liability projects require an on-site evaluation."
          />
        </div>
      </section>

      {/* REVIEWS */}
      <ReviewSlider />

      {/* MAP */}
      <VanillaMapClient />
    </main>
  );
}
