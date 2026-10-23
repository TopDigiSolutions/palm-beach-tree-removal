export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tag: string;
  features: string[];
  equipment: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  image: string;
  span: string;
  description: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  location: string;
  service: string;
  timeline: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  problem: string;
  solution: string;
  impact: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
  verifiedEstate: boolean;
}

export interface ServiceAreaDetail {
  city: string;
  state: string;
  responseTime: string;
  coverageDetail: string;
  permitsInfo: string;
  popularServices: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "licensing" | "estimate" | "emergency" | "services" | "protection";
}

export const siteConfig = {
  name: "Palm Beach Tree Removal",
  legalName: "Palm Beach Tree Removal & Arboricultural Services LLC",
  tagline: "Precision Tree Removal & Estate Arboriculture Since 1992",
  established: "1992",
  yearsInBusiness: 34,
  hero: {
    badge: "Est. 1992 • 34+ Years Serving Palm Beach County",
    title: "Precision Tree Removal & Estate Arboriculture",
    highlight: "Since 1992",
    description:
      "Palm Beach County's trusted tree removal and estate care specialist since 1992. ISA Certified Master Arborists, 100-ton all-terrain crane fleet, guaranteed zero lawn damage, and $5,000,000 in comprehensive liability protection.",
  },
  logo: "/images/logo.png",
  phone: "",
  phoneRaw: "",
  emergencyPhone: "",
  email: "",
  contactEmail: "",
  address: {
    street: "250 Worth Avenue, Suite 340",
    city: "Palm Beach",
    state: "FL",
    zip: "33480",
    county: "Palm Beach County",
    country: "USA",
  },
  yardAddress: {
    street: "1400 N Florida Mango Rd",
    city: "West Palm Beach",
    state: "FL",
    zip: "33409",
  },
  licensing: {
    stateLicense: "FL State Certified Contractor # CBC1264890",
    countyLicense: "PBC Tree Removal License # TR-1992-048",
    arboristCert: "ISA Certified Master Arborists # FL-4982A",
    tciaMember: "TCIA Accredited Company # 78201",
    insurance: "$5,000,000 Commercial General Liability & Comprehensive Workers' Comp",
  },
  hours: {
    regular: "Mon – Fri: 7:00 AM – 7:00 PM | Sat: 8:00 AM – 5:00 PM",
    emergency: "24/7 / 365 Rapid Hurricane & Emergency Dispatch",
  },
  serviceAreas: [
    "Boynton Beach, FL",
    "Delray Beach, FL",
    "Boca Raton, FL",
    "Boca Del Mar, FL",
    "Highland Beach, FL",
    "Lake Worth, FL",
    "West Palm Beach, FL",
    "Wellington, FL",
  ],
  serviceAreaDetails: [
    {
      city: "Boynton Beach",
      state: "FL",
      responseTime: "30-45 Minutes",
      coverageDetail: "Full residential estate & waterfront canal properties",
      permitsInfo: "City of Boynton Beach Tree Removal Permit expediting",
      popularServices: ["Hazardous Tree Removal", "Canopy Thinning", "Stump Grinding"],
      coordinates: { lat: 26.5256, lng: -80.0664 },
    },
    {
      city: "Delray Beach",
      state: "FL",
      responseTime: "30-45 Minutes",
      coverageDetail: "Historic downtown, beachside estates & Atlantic Dunes corridor",
      permitsInfo: "Delray Beach Municipal Arborist coordination",
      popularServices: ["100-Ton Crane Takedowns", "Palm Sculpting", "Emergency Response"],
      coordinates: { lat: 26.4615, lng: -80.0728 },
    },
    {
      city: "Boca Raton",
      state: "FL",
      responseTime: "35-50 Minutes",
      coverageDetail: "Gated communities, Royal Palm Yacht & Country Club, Sanctuary",
      permitsInfo: "City of Boca Raton Environmental Tree Ordinances handled",
      popularServices: ["Zero-Damage Lawn Rigging", "Ficus Hedge Trimming", "Specimen Care"],
      coordinates: { lat: 26.3683, lng: -80.1289 },
    },
    {
      city: "Boca Del Mar",
      state: "FL",
      responseTime: "35-50 Minutes",
      coverageDetail: "Golf villas, sprawling suburban compounds & HOA communities",
      permitsInfo: "Boca Del Mar HOA compliance & county filings",
      popularServices: ["Stump Grinding", "Storm Deadwood Pruning", "Root Management"],
      coordinates: { lat: 26.3484, lng: -80.1601 },
    },
    {
      city: "Highland Beach",
      state: "FL",
      responseTime: "40-50 Minutes",
      coverageDetail: "A1A oceanfront compounds & coastal barrier island estates",
      permitsInfo: "Highland Beach Coastal Dune & Tree Protection code compliance",
      popularServices: ["Salt-Tolerant Tree Care", "Crane Rigging Over Pools", "Debris Removal"],
      coordinates: { lat: 26.3995, lng: -80.0695 },
    },
    {
      city: "Lake Worth",
      state: "FL",
      responseTime: "25-35 Minutes",
      coverageDetail: "Historic cottage districts, Intracoastal waterfront properties",
      permitsInfo: "Lake Worth Beach Historic Preservation & Tree Board filings",
      popularServices: ["Mature Oak Pruning", "Emergency Storm Dispatch", "Stump Extraction"],
      coordinates: { lat: 26.6160, lng: -80.0684 },
    },
    {
      city: "West Palm Beach",
      state: "FL",
      responseTime: "20-30 Minutes (Direct Dispatch)",
      coverageDetail: "El Cid, Flamingo Park, Northwood & Palm Beach Island estates",
      permitsInfo: "WPB City Arborist & Town of Palm Beach Landmarks approval",
      popularServices: ["Royal Palm Avenue Diamond Cut", "Hazard Tree Dismantling", "Crane Takedowns"],
      coordinates: { lat: 26.7153, lng: -80.0534 },
    },
    {
      city: "Wellington",
      state: "FL",
      responseTime: "35-45 Minutes",
      coverageDetail: "Equestrian estates, barn compounds, polo clubs & Aero Club",
      permitsInfo: "Village of Wellington Equestrian Overlay Tree Regulations",
      popularServices: ["Paddock Canopy Elevation", "Fallen Timber Clearing", "Heavy Grapple Hauling"],
      coordinates: { lat: 26.6618, lng: -80.2684 },
    },
  ] as ServiceAreaDetail[],
  stats: [
    { label: "Established In", value: "1992", suffix: "" },
    { label: "Years of Heritage", value: "34+", suffix: "Years" },
    { label: "Estate Trees Cleared", value: "14,800+", suffix: "" },
    { label: "Liability Insurance", value: "$5,000,000", suffix: "Coverage" },
    { label: "Hydraulic Crane Fleet", value: "100-Ton", suffix: "All-Terrain" },
    { label: "Lawn Damage Guarantee", value: "0%", suffix: "Zero Footprint" },
  ],
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Service Areas", href: "/#service-areas" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ],
  services: [
    {
      id: "tree-removal",
      title: "Tree Removal",
      shortDesc: "Surgical, zero-impact takedown of dead, diseased, hazardous, or encroaching specimen trees using high-capacity cranes and composite turf protection.",
      fullDesc: "Our licensed ISA arborists engineer every removal to protect adjacent luxury residences, screen enclosures, and tournament turf. Utilizing specialized multi-line rigging systems and all-terrain cranes, we dismantle trees section by section without ground impact. Every project includes municipal permit acquisition and spotless wood processing.",
      image: "/images/service-hazardous-removal.jpg",
      tag: "Surgical Removal",
      features: [
        "Friction rigging over fragile tile roofs & glass loggias",
        "AlturnaMAT composite ground protection (zero lawn rutting)",
        "Municipal permitting & arborist condition reports",
        "Complete log processing & thorough site restoration",
      ],
      equipment: "100-Ton all-terrain hydraulic cranes, spider lifts & rigging blocks",
    },
    {
      id: "tree-trimming-pruning",
      title: "Tree Trimming & Pruning",
      shortDesc: "Scientific canopy thinning, ANSI A300 structural pruning, and aesthetic shaping to enhance wind permeability and protect property value.",
      fullDesc: "Proper tree pruning is both arboricultural science and landscape art. We shape specimen trees to withstand South Florida hurricane winds by thinning dense canopies, elevating clearance above structures and driveways, and removing crossing deadwood that harbors wood-boring pests and disease.",
      image: "/images/service-palm-sculpting.jpg",
      tag: "Arborist Care & Shaping",
      features: [
        "Canopy thinning for hurricane-force wind permeability",
        "ANSI A300 certified structural safety pruning",
        "Roofline, driveway & utility wire setback clearance",
        "Health inspection & diagnostics by ISA Master Arborists",
      ],
      equipment: "Articulated boom lifts with non-marking turf tires & arborist climbing rigs",
    },
    {
      id: "emergency-tree",
      title: "Emergency Tree Services",
      shortDesc: "24/7 priority emergency response for storm damage, fallen limbs on roofs, blocked access gates, and immediate hazardous extractions.",
      fullDesc: "When tropical depressions, sustained gale winds, or lightning strikes impact your estate, our rapid-response task force deploys within 60 to 90 minutes. Equipped with heavy grapple trucks, telescopic cranes, and industrial chain saws, we stabilize structures, eliminate hazards, and document damage for insurance claims.",
      image: "/images/service-emergency-storm.jpg",
      tag: "24/7 Rapid Response",
      features: [
        "60 to 90 minute rapid emergency dispatch across Palm Beach County",
        "Fallen tree stabilization & hydraulic crane extraction",
        "Emergency roof tarping & structural hazard mitigation",
        "Detailed photo logs & arborist reports for insurance adjusters",
      ],
      equipment: "Heavy forestry grapple trucks, 100-ton crane & storm recovery rigs",
    },
    {
      id: "hedge-trimming",
      title: "Hedge Trimming",
      shortDesc: "Laser-straight perimeter hedging, formal architectural box cuts, and restorative pruning for Ficus, Clusia, and Podocarpus privacy screens.",
      fullDesc: "Maintain dense, razor-sharp estate perimeter boundaries with our dedicated hedge trimming division. We specialize in formal shaping, height reductions, and rejuvenation for South Florida's premier hedge varieties, complemented by organic treatments for pest prevention and pristine cleanup.",
      image: "/images/hero-poster.jpg",
      tag: "Estate Privacy Shaping",
      features: [
        "Laser-level precision hedge shaping & formal box cutting",
        "Specialists in Ficus, Clusia, Podocarpus & Bougainvillea",
        "Height reduction & inner foliage rejuvenation",
        "Complete raking, vacuuming & debris haul-away",
      ],
      equipment: "Commercial dual-action reciprocating trimmers & mobile scaffolding",
    },
    {
      id: "stump-grinding",
      title: "Stump Grinding",
      shortDesc: "Sub-surface root eradication down to 18 inches below grade, preparing your grounds for pristine sod replanting or construction.",
      fullDesc: "Eliminate unsightly tripping hazards, termite attractants, and decaying root balls. Our compact, rubber-tracked stump grinders traverse manicured lawns on composite mats without leaving ruts, clearing underground roots while protecting sprinkler pipes, pavers, and underground utilities.",
      image: "/images/service-stump-grinding.jpg",
      tag: "Sub-Grade Root Clearance",
      features: [
        "Grinds 12 to 18 inches beneath soil grade for replanting",
        "Complete 811 underground utility locating clearance",
        "Backfill with premium enriched topsoil or clean mulch",
        "Complete eradication of surface root flare traces",
      ],
      equipment: "Bandit & Carlton remote-controlled low-ground-pressure track grinders",
    },
    {
      id: "debris-hauling",
      title: "Debris Hauling",
      shortDesc: "Full-scale vegetative waste removal, heavy log loading, storm debris haul-away, and magnetic lawn sweeping leaving zero footprint.",
      fullDesc: "Leave no trace of tree work on your property. Our self-loading hydraulic grapple trucks and high-volume dump trailers rapidly remove tons of limbs, trunks, palm fronds, and storm residue. Every job concludes with thorough lawn raking, hardscape power blowing, and magnetic nail sweeps.",
      image: "/images/service-crane-removal.jpg",
      tag: "Zero-Footprint Cleanup",
      features: [
        "High-capacity hydraulic grapple truck loading",
        "Zero-contact rapid removal available upon request",
        "Full estate raking, hardscape blowing & magnetic sweep",
        "100% green recycling into organic Florida mulch",
      ],
      equipment: "Kodiak heavy forestry grapple trucks & 30-yard custom dump trailers",
    },
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Victoria & Sterling H.",
      role: "Estate Homeowners",
      location: "Palm Beach Island (S. Ocean Blvd)",
      rating: 5,
      quote:
        "Extracting a massive 70-foot diseased live oak wedged between our pool loggia and guest house seemed impossible without damaging the Spanish tile roof. Palm Beach Tree Removal brought in their 100-ton crane, rigged every branch with surgical precision, and left our lawn completely untouched. Absolute masterclass in arboriculture.",
      service: "Hazardous Crane Tree Removal",
      verifiedEstate: true,
    },
    {
      id: "test-2",
      name: "Arthur M. Vance",
      role: "Property Managing Director",
      location: "Wellington Equestrian Compound",
      rating: 5,
      quote:
        "After Hurricane winds fractured several mature pines across our primary paddock access, their emergency team arrived within 75 minutes. By evening, all roadways were cleared, hazardous hanging limbs were dismantled, and our horses were completely safe. We have retained them exclusively since.",
      service: "24/7 Emergency Storm Dispatch",
      verifiedEstate: true,
    },
    {
      id: "test-3",
      name: "Dr. Julian Montgomery",
      role: "Waterfront Residence",
      location: "Boca Raton Coastal Estate",
      rating: 5,
      quote:
        "Their zero-lawn-damage guarantee is 100% genuine. They laid composite ground mats across our tournament-grade Bermuda grass and navigated heavy equipment without a single tire mark. Their ISA arborist also handled the entire city permit approval seamlessly.",
      service: "Palm Sculpting & Stump Grinding",
      verifiedEstate: true,
    },
    {
      id: "test-4",
      name: "Eleanor Davenport",
      role: "Historic District Resident",
      location: "El Cid, West Palm Beach",
      rating: 5,
      quote:
        "Serving Palm Beach since 1992 is not just a slogan—it shows in their crew's discipline and respect for historic grounds. They pruned our century-old banyan and royal palms to perfection. Transparent pricing, fixed estimate, and immaculate cleanup.",
      service: "Canopy Pruning & Hedge Sculpting",
      verifiedEstate: true,
    },
  ] as TestimonialItem[],
  gallery: [
    {
      id: "gal-1",
      title: "100-Ton Heavy Crane Specimen Palm Lift",
      category: "crane",
      categoryLabel: "Crane Operations",
      location: "Highland Beach Coastal Compound",
      image: "/images/gallery/gallery-4.jpg",
      span: "col-span-2",
      description: "Extracted and precision-relocated a mature 30-foot Canary Island Date Palm over residential grounds with zero lawn rutting using our heavy all-terrain crane.",
    },
    {
      id: "gal-2",
      title: "Precision Grapple Saw Canopy Dismantling",
      category: "crane",
      categoryLabel: "Crane & Grapple",
      location: "Palm Beach Island Estate",
      image: "/images/gallery/gallery-3.jpg",
      span: "col-span-1",
      description: "Remote-controlled hydraulic grapple saw sectioning large hazardous boughs at elevation and depositing directly into heavy debris carriers.",
    },
    {
      id: "gal-3",
      title: "Serco Emergency Disaster Relief Fleet",
      category: "emergency",
      categoryLabel: "Emergency Storm",
      location: "West Palm Beach Historic District",
      image: "/images/gallery/gallery-2.jpg",
      span: "col-span-1",
      description: "Rapid deployment of our DOT-certified heavy grapple loader and high-volume disposal trucks for immediate roadside and community clearance.",
    },
    {
      id: "gal-4",
      title: "Surgical Estate Driveway Palm Extraction",
      category: "palms",
      categoryLabel: "Palm Removal",
      location: "Boca Raton Waterfront Estate",
      image: "/images/gallery/gallery-6.jpg",
      span: "col-span-1",
      description: "Tandem hydraulic grapple arm and mini-excavator extraction of declining palm trees preserving adjacent mature specimens and concrete driveways.",
    },
    {
      id: "gal-5",
      title: "Compact Zero-Impact Root Ball Excavation",
      category: "stump",
      categoryLabel: "Root & Lawn Care",
      location: "Delray Beach Estate",
      image: "/images/gallery/gallery-7.jpg",
      span: "col-span-1",
      description: "Rubber-tracked compact mini-excavator carefully unearthing extensive palm root structures while preserving adjoining manicured sod and irrigation.",
    },
    {
      id: "gal-6",
      title: "High-Reach Boom Lift Community Tree Trimming",
      category: "palms",
      categoryLabel: "Canopy Management",
      location: "Wellington Equestrian Community",
      image: "/images/gallery/gallery-1.jpg",
      span: "col-span-1",
      description: "Articulated aerial boom lift performing ANSI A300 clearance pruning and deadwood removal over residential roadways and carports.",
    },
    {
      id: "gal-7",
      title: "Full-Scale Palm Extraction & Debris Loading",
      category: "emergency",
      categoryLabel: "Disaster Recovery",
      location: "Jupiter Island Compound",
      image: "/images/gallery/gallery-8.jpg",
      span: "col-span-1",
      description: "Active site operations featuring whole-tree removal, trunk sectioning, and mechanical loader feeding into our high-capacity dump body.",
    },
    {
      id: "gal-8",
      title: "High-Elevation Commercial Canopy Pruning",
      category: "palms",
      categoryLabel: "Estate Maintenance",
      location: "El Cid, West Palm Beach",
      image: "/images/gallery/gallery-5.jpg",
      span: "col-span-2",
      description: "Precision canopy thinning and storm-prep elevation of massive shade trees adjacent to two-story residences and parking facilities.",
    },
  ],
  beforeAfter: {
    title: "Project Spotlight: Hazardous Storm Recovery",
    location: "Seminole Docks Estate, Palm Beach FL",
    service: "Emergency Hazardous Extraction & Complete Lawn Restoration",
    timeline: "Completed in 14 Hours",
    beforeImage: "/images/service-emergency-storm.jpg",
    afterImage: "/images/service-palm-sculpting.jpg",
    beforeLabel: "Before: Critical Hazard",
    afterLabel: "After: Pristine Sanctuary",
    problem: "A 65-foot diseased oak suffered severe trunk splitting during sustained 75mph tropical storm wind gusts, shifting 18 degrees directly toward the estate's glass loggia and pool patio.",
    solution: "Mobilized our 100-ton crane within 2 hours. Rigged and extracted the canopy in 3 balanced sections, ground the stump 18 inches below grade, and laid fresh certified sod with zero structural impact.",
    impact: "$1.2M potential structural damage averted with 100% property integrity preserved.",
  },
  faqs: [
    {
      question: "Do you have the required licenses and $5M insurance for Palm Beach municipalities?",
      answer: "Yes. Palm Beach Tree Removal holds Florida State Contractor License #CBC1264890, Palm Beach County Tree License #TR-1992-048, and maintains an active $5,000,000 Commercial General Liability policy alongside full Workers' Compensation coverage. Certificates of Insurance naming your estate or HOA as additionally insured are issued promptly upon request.",
      category: "licensing",
    },
    {
      question: "How do you prevent heavy equipment from damaging our luxury turf, pavers, or driveways?",
      answer: "We deploy high-density composite ground protection mats (AlturnaMats) across all transit corridors. These disperse machine loads to under 8 psi—gentler than a human footstep—preventing tire ruts, cracked pavers, and root compaction. Our crane outriggers sit on custom oversized load-spreading oak timber cribbing.",
      category: "protection",
    },
    {
      question: "How fast can your team respond to an urgent tree emergency or storm damage?",
      answer: "Our 24/7 Emergency Dispatch unit operates around the clock. For life-safety threats, trees resting on roofs, or blocked estate gates in Palm Beach County, our on-call supervisors arrive on-site within 60 to 90 minutes with emergency stabilization gear.",
      category: "emergency",
    },
    {
      question: "Do you handle the tree removal permits required by Palm Beach County and local towns?",
      answer: "Yes, our ISA Certified Master Arborists handle the entire municipal permitting process from start to finish. We conduct the official Tree Condition Assessment, compile necessary diagnostic documentation, submit town filings, and coordinate on-site municipal arborist inspections.",
      category: "services",
    },
    {
      question: "How quickly can I receive a written estimate for my property?",
      answer: "For non-emergency projects, you can submit details via our online calculator or schedule a site inspection. An ISA Certified Arborist typically visits your estate within 24 hours and provides a fixed, transparent written estimate with no hidden surcharges.",
      category: "estimate",
    },
  ],
};

export const processSteps = [
  { title: "Inspect & estimate", description: "An ISA Certified Arborist visits your property, assesses the work, and provides a transparent written estimate." },
  { title: "Plan & protect", description: "The team coordinates municipal permits, plans the rigging, and protects lawns and access routes with composite ground mats." },
  { title: "Complete & clear", description: "Tree work is followed by log processing, debris hauling, thorough lawn raking, and hardscape cleanup." },
];
