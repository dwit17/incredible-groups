// Projects Data Store - Incredible Groups Luxury Real Estate Portfolio

export interface ProjectSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface WorkDoneItem {
  discipline: string;
  scope: string;
  deliverable: string;
  duration: string;
  milestone: string;
}

export interface ProjectSection {
  id: string;
  tag: string;
  heading: string;
  subheading: string;
  description: string;
  image: string;
  exposureType: 'curtain-unveil' | 'parallax-depth' | 'split-reveal' | 'panoramic-bleed';
  aspectRatio: 'landscape' | 'portrait' | 'panoramic' | 'square';
  specs?: { label: string; value: string }[];
  highlightQuote?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  location: string;
  area: string;
  status: 'Completed' | 'In Construction' | 'Acquisition';
  valuation: string;
  leadArchitect: string;
  coverImage: string;
  sketchImage?: string;
  aspectRatio: 'portrait' | 'landscape' | 'square';
  shortDescription: string;
  fullDescription: string;
  stats: {
    label: string;
    value: string;
  }[];
  specifications: ProjectSpec[];
  workDone: WorkDoneItem[];
  sections: ProjectSection[];
  gallery: {
    url: string;
    caption: string;
    tag: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'the-aurum-monolith',
    title: 'The Aurum Monolith',
    subtitle: 'Ultra-Luxury Seafront Sky Mansions',
    category: 'Residential Landmark',
    year: '2025',
    location: 'Worli Sea Face, Mumbai',
    area: '450,000 sq.ft',
    status: 'In Construction',
    valuation: '₹1,850 Cr',
    leadArchitect: 'Atelier Incredible & Foster Partners',
    coverImage: '/images/hero-architecture.jpg',
    sketchImage: '/images/sketch-architecture.jpg',
    aspectRatio: 'portrait',
    shortDescription: 'Monolithic architectural marvel rising along the Arabian coastline with private cantilevered sky pools and 360-degree marine horizons.',
    fullDescription: 'The Aurum Monolith redefines Mumbai’s coastal skyline through brutalist precision and ethereal lightness. Crafted from custom-pigmented architectural concrete, brushed bronze accents, and floor-to-ceiling acoustic glass, each residence occupies an entire floorplate with private double-height sky terraces.',
    stats: [
      { label: 'Tower Height', value: '260 m' },
      { label: 'Private Residences', value: '28 Only' },
      { label: 'Terrace Pools', value: '100% Units' },
      { label: 'Completion', value: 'Q4 2026' }
    ],
    specifications: [
      { label: 'Structural Concrete', value: 'M80 Self-Healing Low-Carbon' },
      { label: 'Acoustic Rating', value: 'STC 58 Marine Sound Barrier' },
      { label: 'Floor-to-Ceiling', value: '4.4 Meters Clear Height' },
      { label: 'Sustainability', value: 'IGBC Platinum & LEED Zero Carbon' },
      { label: 'Private Marina Access', value: 'Direct Worli Pier Berthing' },
      { label: 'Structural Lifespan', value: '200+ Year Design Baseline' }
    ],
    workDone: [
      {
        discipline: 'Masterplanning & Coastal Permitting',
        scope: 'Acquisition of ultra-prime seafront parcel, CRZ approvals, and bespoke masterplanning.',
        deliverable: 'Unencumbered freehold title & environmental clearance',
        duration: '14 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Deep Cantilever Foundation Engineering',
        scope: 'Execution of 48-meter marine rock-socketed piling and seismic diaphragm damping.',
        deliverable: 'Heavy sub-grade foundation with zero water ingress',
        duration: '18 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Bespoke Facade Glazing & Bronze Castings',
        scope: 'Engineered triple-laminated acoustic curtain wall with bespoke patinated bronze louvers.',
        deliverable: 'Hurricane-rated dynamic thermal building envelope',
        duration: '16 Months',
        milestone: 'In Progress'
      },
      {
        discipline: 'Biophilic Sky Gardens & Infinity Pools',
        scope: 'Cantilevered private saltwater pools with submerged glass viewports on all residential floors.',
        deliverable: '28 individual structural sky waterscapes',
        duration: '12 Months',
        milestone: 'Scheduled'
      }
    ],
    sections: [
      {
        id: 'aurum-s1',
        tag: '01 / SPATIAL MONUMENTALITY',
        heading: 'Monolithic Geometry Overlooking the Arabian Sea',
        subheading: 'Sculpted in pigmented basalt concrete with uninterrupted ocean panoramas.',
        description: 'Rising 260 meters above Worli Sea Face, the tower employs a tapered aerodynamic silhouette that deflects high-velocity monsoon winds while maximizing daylight penetration and 360-degree marine horizons.',
        image: '/images/hero-architecture.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'panoramic',
        specs: [
          { label: 'Wind Deflection Efficiency', value: '+34%' },
          { label: 'Natural Solar Glare Filter', value: '92% UV Block' }
        ],
        highlightQuote: 'Architecture must not merely occupy the coastline; it must converse with the rhythm of the tides.'
      },
      {
        id: 'aurum-s2',
        tag: '02 / STRUCTURAL INTEGRITY',
        heading: 'Precision Craft & Material Permanence',
        subheading: 'High-density post-tensioned cores meeting artisanal metallurgical craftsmanship.',
        description: 'Every bronze extrusion is custom-cast in Italy and finished by master artisans. The structural concrete incorporates pozzolanic micro-silica binders that resist saline chloride penetration over multi-century lifespans.',
        image: '/images/precision-detail.jpg',
        exposureType: 'split-reveal',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Compressive Strength', value: '80 MPa' },
          { label: 'Salinity Resistance Index', value: 'Class 4 Marine' }
        ]
      },
      {
        id: 'aurum-s3',
        tag: '03 / PRIVATE LIVING SANCTUARY',
        heading: 'Entire-Floor Sky Mansions & Cantilevered Waterscapes',
        subheading: 'Double-height volume with seamless indoor-to-outdoor limestone transition.',
        description: 'Private high-speed biometric elevators open directly into grand arrival galleries. Floorplates are column-free, granting 14,000 square feet of customizable living canvas with infinity saltwater plunge pools hovering over the sea.',
        image: '/images/project-info-architecture.jpg',
        exposureType: 'parallax-depth',
        aspectRatio: 'portrait',
        specs: [
          { label: 'Floorplate Size', value: '14,200 sq.ft' },
          { label: 'Sky Pool Cantilever', value: '6.2 Meters' }
        ]
      },
      {
        id: 'aurum-s4',
        tag: '04 / ENVIRONMENTAL SOVEREIGNTY',
        heading: 'Zero-Carbon Energy & Autonomous Microgrid',
        subheading: 'Integrated solar cladding and closed-loop rainwater recycling.',
        description: 'Equipped with rooftop vertical-axis wind turbines and integrated photovoltaic skin that generates 45% of common area power requirements, paired with on-site greywater filtration.',
        image: '/images/statement-architecture.jpg',
        exposureType: 'panoramic-bleed',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Solar Output', value: '180 kWp' },
          { label: 'Water Recirculation', value: '98% Closed Loop' }
        ]
      }
    ],
    gallery: [
      { url: '/images/hero-architecture.jpg', caption: 'Seafront elevation catching golden hour reflections', tag: 'Exterior' },
      { url: '/images/precision-detail.jpg', caption: 'Brushed bronze facade louvers and textured concrete', tag: 'Detail' },
      { url: '/images/project-info-architecture.jpg', caption: 'Double-height living pavilion with panoramic glass', tag: 'Interior' },
      { url: '/images/statement-architecture.jpg', caption: 'Monolithic podium entrance and stone water courts', tag: 'Podium' }
    ]
  },
  {
    id: '2',
    slug: 'sanctuary-of-solitude',
    title: 'Sanctuary of Solitude',
    subtitle: 'Bespoke Forest Estates & Biophilic Villas',
    category: 'Private Estates',
    year: '2024',
    location: 'Assagao Hills, North Goa',
    area: '18 Acres',
    status: 'Completed',
    valuation: '₹620 Cr',
    leadArchitect: 'Studio Biophilic Craft & Incredible Atelier',
    coverImage: '/images/project-pokrovskoe.jpg',
    sketchImage: '/images/sketch-preliminary.jpg',
    aspectRatio: 'landscape',
    shortDescription: 'Secluded rainforest estates blending ancient basalt stone masonry with contemporary glass pavilions and perennial streams.',
    fullDescription: 'A sensitive intervention within the lush canopy of Assagao, Sanctuary of Solitude preserves over 800 indigenous teak and banyan trees. The architecture dissolves boundaries between interior sanctuary and wild subtropical flora through permeable louvered facades and zero-edge infinity waterscapes.',
    stats: [
      { label: 'Private Villas', value: '12 Exclusive' },
      { label: 'Plot Sizes', value: '1.2 - 2.5 Acres' },
      { label: 'Canopy Density', value: '82% Forest' },
      { label: 'LEED Status', value: 'Platinum Certified' }
    ],
    specifications: [
      { label: 'Stone Masonry', value: 'Hand-Chiseled Basalt & Laterite' },
      { label: 'Timber Construction', value: 'FSC-Certified Reclaimed Teak' },
      { label: 'Microclimate Cooling', value: 'Passive Geothermal Air Channelling' },
      { label: 'Water Supply', value: 'Perennial Natural Spring & Artisan Well' },
      { label: 'Helipad Access', value: 'Private 10-Min Transit to MOPA Airport' },
      { label: 'Security & Concierge', value: 'Discreet 24/7 Butler & Guard Command' }
    ],
    workDone: [
      {
        discipline: 'Canopy Preservation & Topographical Mapping',
        scope: '3D LiDAR drone scanning to catalog 840 trees and contour-match all villa foundations.',
        deliverable: 'Zero-tree-felling architectural layout',
        duration: '8 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Indigenous Stone Craft & Masonry',
        scope: 'Quarrying local laterite and handcrafted basalt walls using master generational stonecutters.',
        deliverable: 'Thermal-mass envelope reducing AC load by 60%',
        duration: '14 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Natural Water Basin Integration',
        scope: 'Channeling perennial hill streams into cascading zero-chemical bio-filtration pools.',
        deliverable: '12 private swimming waterscapes',
        duration: '10 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Smart Autonomous Off-Grid Grid',
        scope: 'Installation of subterranean battery banks and concealed solar slate roofing.',
        deliverable: '100% self-sufficient power grid',
        duration: '6 Months',
        milestone: 'Completed'
      }
    ],
    sections: [
      {
        id: 'sanctuary-s1',
        tag: '01 / BIOPHILIC HARMONY',
        heading: 'Architecture Embedded in Living Subtropical Canopy',
        subheading: 'Preserving old-growth banyan and teak groves with zero deforestation.',
        description: 'Each of the twelve villas is configured organically around centuries-old tree trunks, allowing natural light to filter through lush foliage while maintaining absolute visual privacy from neighboring estates.',
        image: '/images/project-pokrovskoe.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Tree Preservation', value: '100% Retained' },
          { label: 'Ambient Temperature Drop', value: '4.5°C Lower' }
        ],
        highlightQuote: 'We did not construct a retreat within the jungle; we invited the jungle to inhabit the architecture.'
      },
      {
        id: 'sanctuary-s2',
        tag: '02 / MATERIAL TRUTH',
        heading: 'Handcrafted Laterite & Reclaimed Teakwood',
        subheading: 'Traditional Goan-Portuguese masonry meeting Nordic minimalism.',
        description: 'Exposed laterite stone blocks breathe naturally, releasing humidity and keeping interiors pleasantly cool. Deep roof overhangs crafted from reclaimed seasoned teak shade expansive verandahs and reading pavilions.',
        image: '/images/precision-preliminary.jpg',
        exposureType: 'split-reveal',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Locally Sourced Materials', value: '88% Regional' },
          { label: 'Embodied Carbon', value: '-65% vs Standard' }
        ]
      },
      {
        id: 'sanctuary-s3',
        tag: '03 / WATER PURITY',
        heading: 'Living Bio-Filtration Springs & Plunge Pools',
        subheading: 'Chlorine-free aquatic sanctuaries nourished by natural rain catchment.',
        description: 'Natural aquatic reeds and volcanic gravel filter mountain spring water naturally, creating crystal-clear natural swimming pools that gently ripple alongside open-air master suites.',
        image: '/images/project-millenium.jpg',
        exposureType: 'parallax-depth',
        aspectRatio: 'portrait',
        specs: [
          { label: 'Chemical Additives', value: '0.00%' },
          { label: 'Spring Flow Rate', value: '25,000 L / Day' }
        ]
      }
    ],
    gallery: [
      { url: '/images/project-pokrovskoe.jpg', caption: 'Villa pavilion nestled into dense tropical vegetation', tag: 'Exterior' },
      { url: '/images/precision-preliminary.jpg', caption: 'Courtyard with weathered laterite and timber colonnades', tag: 'Courtyard' },
      { url: '/images/project-millenium.jpg', caption: 'Bio-filtration pool merging with subtropical gardens', tag: 'Waterscape' }
    ]
  },
  {
    id: '3',
    slug: 'the-apex-financial-pavilion',
    title: 'The Apex Pavilion',
    subtitle: 'Next-Generation Sovereign Headquarters',
    category: 'Commercial & Institutional',
    year: '2024',
    location: 'BKC, Mumbai',
    area: '820,000 sq.ft',
    status: 'Completed',
    valuation: '₹2,450 Cr',
    leadArchitect: 'KPF & Incredible Engineering',
    coverImage: '/images/project-bolshevik.jpg',
    sketchImage: '/images/sketch-detail.jpg',
    aspectRatio: 'portrait',
    shortDescription: 'Futuristic crystalline business headquarters featuring kinetic climate facades, automated drone landings, and triple-height hanging atriums.',
    fullDescription: 'The Apex Financial Pavilion serves as the command center for multi-family offices and sovereign funds. Featuring intelligent kinetic solar shading and a 14-story interior vertical botanic garden that oxygenates workplace floors naturally.',
    stats: [
      { label: 'Commercial Grade', value: 'A++ Institutional' },
      { label: 'Floor Plates', value: '45,000 sq.ft' },
      { label: 'Solar Offset', value: '48% Grid Off' },
      { label: 'Wellness Rating', value: 'WELL Platinum' }
    ],
    specifications: [
      { label: 'Kinetic Facade', value: 'AI-Actuated Photovoltaic Louvers' },
      { label: 'Air Filtration', value: 'Hospital-Grade MERV 16 + Bi-Polar Ionization' },
      { label: 'Column Grid', value: '18-Meter Super-Span Post-Tensioned' },
      { label: 'Rooftop Vertiport', value: 'eVTOL & Twin-Engine Helipad' },
      { label: 'Data Security', value: 'Tier IV Sovereign Data Center Onsite' },
      { label: 'Energy Certification', value: 'LEED Platinum & Net Zero Ready' }
    ],
    workDone: [
      {
        discipline: 'High-Density Institutional Structuring',
        scope: 'Complex urban structural engineering spanning 3 subterranean parking levels and 32 superstructure storeys.',
        deliverable: 'Vibration-isolated commercial superstructure',
        duration: '22 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Intelligent Kinetic Facade Implementation',
        scope: 'Deployment of 4,200 motorized kinetic facade fins linked to sun-tracking IoT sensors.',
        deliverable: 'Automated solar gain suppression',
        duration: '14 Months',
        milestone: 'Completed'
      },
      {
        discipline: '14-Storey Oxygenating Atrium',
        scope: 'Engineering a vertical hanging botanic garden with automated misting and nutrient dosing.',
        deliverable: 'Indoor air oxygen enrichment',
        duration: '8 Months',
        milestone: 'Completed'
      }
    ],
    sections: [
      {
        id: 'apex-s1',
        tag: '01 / INSTITUTIONAL GRAVITAS',
        heading: 'Crystalline Geometric Command Center',
        subheading: 'A monolithic financial landmark designed for intergenerational wealth stewardship.',
        description: 'Positioned at the epicentre of Bandra-Kurla Complex, The Apex Pavilion features column-free trading floors, biometric boardroom chambers, and private dining clubs for sovereign asset managers.',
        image: '/images/project-bolshevik.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'portrait',
        specs: [
          { label: 'Floor Efficiency', value: '89.4%' },
          { label: 'Elevator Speed', value: '7.0 m/s Direct Call' }
        ]
      },
      {
        id: 'apex-s2',
        tag: '02 / INTELLIGENT ENVELOPE',
        heading: 'Kinetic Solar Louvers with Real-Time AI Tracking',
        subheading: 'Dynamic facade elements that open and rotate following the sun path.',
        description: 'The exterior building skin dynamically alters its angle every 12 minutes, eliminating glare and reducing internal HVAC cooling demand by 42% while generating supplementary clean electricity.',
        image: '/images/project-kns.jpg',
        exposureType: 'split-reveal',
        aspectRatio: 'landscape',
        specs: [
          { label: 'HVAC Energy Saved', value: '-42%' },
          { label: 'Daylight Autonomy', value: '78% Daytime' }
        ]
      },
      {
        id: 'apex-s3',
        tag: '03 / SOVEREIGN CONNECTIVITY',
        heading: 'Rooftop eVTOL Vertiport & Secure Data Hub',
        subheading: 'Direct air transfers connecting BKC to Mumbai International and South Mumbai.',
        description: 'The building crown features a dual-capacity certified helipad and eVTOL charging dock, allowing executives to bypass road congestion with instantaneous direct aerial transit.',
        image: '/images/project-kotelnaya.jpg',
        exposureType: 'parallax-depth',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Helipad Capacity', value: '11-Tonne Aircraft' },
          { label: 'Airport Transit Time', value: '6 Minutes' }
        ]
      }
    ],
    gallery: [
      { url: '/images/project-bolshevik.jpg', caption: 'Monolithic glass and steel tower facade at dusk', tag: 'Architecture' },
      { url: '/images/project-kns.jpg', caption: 'Precision kinetic facade louvers and crystalline podium', tag: 'Facade' },
      { url: '/images/project-kotelnaya.jpg', caption: 'Grand triple-height entrance lobby and stone atriums', tag: 'Lobby' }
    ]
  },
  {
    id: '4',
    slug: 'elysian-clifftop-manor',
    title: 'Elysian Clifftop',
    subtitle: 'Dramatic Oceanfront Archipelago Compound',
    category: 'Private Mansions',
    year: '2025',
    location: 'Awas Coast, Alibaug',
    area: '6.5 Acres',
    status: 'In Construction',
    valuation: '₹340 Cr',
    leadArchitect: 'Marzio & Partners Architecture',
    coverImage: '/images/project-vision.jpg',
    sketchImage: '/images/sketch-architecture-gestural.jpg',
    aspectRatio: 'landscape',
    shortDescription: 'Sculptural stone residence perched on sea cliffs with private yacht berthing and helipad access.',
    fullDescription: 'Elysian Clifftop represents the zenith of private leisure living. Designed with monumental granite walls sourced from local quarries, the home unfolds as a series of cascading pavilions offering unobstructed views of Mumbai’s distant illuminated skyline across the bay.',
    stats: [
      { label: 'Seafrontage', value: '400 meters' },
      { label: 'Private Berths', value: '2 Mega-Yachts' },
      { label: 'Bedrooms', value: '9 Suites' },
      { label: 'Spa & Wellness', value: 'Private Thermal Bath' }
    ],
    specifications: [
      { label: 'Cliff Foundation', value: 'Reinforced Marine Basalt Anchors' },
      { label: 'Glass Specifications', value: 'Ultra-Clear Low-Iron Hurricane Glazing' },
      { label: 'Private Marine Pier', value: 'Deep-Draft 120-Foot Yacht Dock' },
      { label: 'Wine & Cigar Cellar', value: 'Subterranean 3,000-Bottle Climate Vault' },
      { label: 'Wellness Pavilion', value: 'Hammam, Cryo-Chamber & Onsen' },
      { label: 'Transit Access', value: 'Speedboat (18 Min to Gateway of India)' }
    ],
    workDone: [
      {
        discipline: 'Cliff Geo-Stabilization & Marine Piling',
        scope: 'Installation of 64 rock anchors into sea-facing basalt cliffs to secure foundation.',
        deliverable: 'Stable geological base with seismic isolation',
        duration: '10 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Cascading Stone Pavilion Architecture',
        scope: 'Sculpting monolithic stepped living levels following the natural coastal slope.',
        deliverable: 'Multi-level indoor/outdoor oceanfront living',
        duration: '14 Months',
        milestone: 'In Progress'
      },
      {
        discipline: 'Private Marine Dock & Breakwater Pier',
        scope: 'Hydraulic construction of private yacht berthing pier and illuminated landing jetty.',
        deliverable: 'All-weather marine yacht access',
        duration: '12 Months',
        milestone: 'In Progress'
      }
    ],
    sections: [
      {
        id: 'elysian-s1',
        tag: '01 / COASTAL DRAMA',
        heading: 'Sculpted into Basalt Cliffs Overlooking the Bay',
        subheading: 'Cascading stone terraces framing unobstructed horizons of the Arabian Sea.',
        description: 'Engineered directly into coastal rock formations, the compound blends raw quarried stone with frameless glass walls that slide completely away into wall cavities for total alfresco immersion.',
        image: '/images/project-vision.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Cliff Elevation', value: '38 Meters Above Tide' },
          { label: 'Glazing Open Span', value: '24 Meters Column-Free' }
        ]
      },
      {
        id: 'elysian-s2',
        tag: '02 / ARTISANAL LEISURE',
        heading: 'Cascading Infinity Pools & Private Thermal Onsen',
        subheading: 'Multi-tier waterscapes that visually spill directly into the ocean waves below.',
        description: 'Featuring heated saltwater lap pools, submerged sun loungers, and an authentic subterranean Japanese Onsen bath lined with volcanic black river stones.',
        image: '/images/project-almaty.jpg',
        exposureType: 'split-reveal',
        aspectRatio: 'portrait',
        specs: [
          { label: 'Total Water Surface', value: '620 m²' },
          { label: 'Thermal Pool Temp', value: '39°C Controlled' }
        ]
      },
      {
        id: 'elysian-s3',
        tag: '03 / MARITIME RETREAT',
        heading: 'Private Pier & 18-Minute Transit to South Mumbai',
        subheading: 'Direct yacht dock enabling effortless commute to the financial capital.',
        description: 'Equipped with a deep-water pier capable of docking two 120-foot motor yachts, paired with automated hydraulic jet ski lifts and private helipad.',
        image: '/images/project-elihouse.jpg',
        exposureType: 'parallax-depth',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Berth Depth', value: '7.5 Meters at Low Tide' },
          { label: 'Transit to Gateway', value: '18 Min High-Speed' }
        ]
      }
    ],
    gallery: [
      { url: '/images/project-vision.jpg', caption: 'Clifftop manor glowing at twilight with infinity pool', tag: 'Hero' },
      { url: '/images/project-almaty.jpg', caption: 'Basalt stone facade with panoramic sea-facing glass', tag: 'Facade' },
      { url: '/images/project-elihouse.jpg', caption: 'Private pier and landscaped coastal grounds', tag: 'Pier' }
    ]
  },
  {
    id: '5',
    slug: 'millenium-private-park',
    title: 'Millenium Private Park',
    subtitle: 'High-Elevation Ridge Sanctuary & Botanical Courtyards',
    category: 'Ultra-Luxury Residential',
    year: '2024',
    location: 'Jubilee Hills, Hyderabad',
    area: '320,000 sq.ft',
    status: 'Completed',
    valuation: '₹980 Cr',
    leadArchitect: 'Incredible Atelier & Olson Kundig Collaborators',
    coverImage: '/images/project-millenium.jpg',
    sketchImage: '/images/sketch-detail.jpg',
    aspectRatio: 'landscape',
    shortDescription: 'Perched along the granite ridge with tiered Japanese dry gardens, kinetic louvers, and private subterranean art galleries.',
    fullDescription: 'Millenium Private Park sits atop one of Hyderabad’s highest natural granite elevations. Integrating raw bedrock outcrops directly into internal light wells, each bespoke villa features custom hand-patinated bronze screening, subterranean climate-controlled wine cellars, and 50-meter cantilevered infinity pools.',
    stats: [
      { label: 'Total Residences', value: '8 Mansions' },
      { label: 'Ridge Elevation', value: '540m MSL' },
      { label: 'Bedrock Integration', value: '100% In-Situ' },
      { label: 'Green Coverage', value: '74% Canopy' }
    ],
    specifications: [
      { label: 'Granite Craft', value: 'Deccan Grey In-Situ Bedrock' },
      { label: 'Thermal Envelope', value: 'Double-Skin Ventilated Bronze Facade' },
      { label: 'Art Vaults', value: 'Museum-Grade RH 50% / 21°C Microclimate' },
      { label: 'Water Independence', value: '100% Rainwater Harvester with UV Filter' },
      { label: 'Private Security', value: 'Optical Fiber Perimeter & Guard Chamber' },
      { label: 'Structural Warranty', value: '150-Year Structural Design Life' }
    ],
    workDone: [
      {
        discipline: 'Bedrock Sculpting & Geotechnical Excavation',
        scope: 'Precision hydraulic diamond-wire cutting to shape living spaces around ancient granite boulders.',
        deliverable: 'Integrated natural bedrock living walls',
        duration: '12 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Bespoke Bronze Kinetic Louver Installation',
        scope: 'Fabrication of 2,400 motorized bronze shading fins that dynamically adapt to the Deccan sun.',
        deliverable: 'Automated solar gain suppression envelope',
        duration: '10 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Ridge Infinity Cantilever Engineering',
        scope: 'Post-tensioned 14-meter cantilevered concrete slabs supporting private horizon pools.',
        deliverable: 'Floating sky waterscapes over Hyderabad skyline',
        duration: '16 Months',
        milestone: 'Completed'
      }
    ],
    sections: [
      {
        id: 'millenium-s1',
        tag: '01 / TOPOGRAPHICAL DIALOGUE',
        heading: 'Architecture Carved Directly into Ancient Deccan Granite',
        subheading: 'Preserving billion-year-old rock formations as interior sculptural elements.',
        description: 'Rather than blasting the ridge flat, the foundations were micro-anchored around monolithic granite boulders, creating dramatic subterranean wine vaults and sunlit courtyards where stone meets water.',
        image: '/images/project-millenium.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Bedrock Preserved', value: '100% Intact' },
          { label: 'Ridge View Horizon', value: '360-Degree Panorama' }
        ],
        highlightQuote: 'We do not build upon the stone; the stone dictates the soul of the residence.'
      },
      {
        id: 'millenium-s2',
        tag: '02 / METALLURGICAL MASTERY',
        heading: 'Artisanal Bronze Facades & Climate Shading',
        subheading: 'Double-skin ventilated screens patinated to age gracefully with the elements.',
        description: 'Every screen is hand-rubbed with natural oils to create an oxidized warm bronze patina that shields internal glass galleries from intense afternoon radiation while casting calligraphic shadows.',
        image: '/images/precision-detail.jpg',
        exposureType: 'split-reveal',
        aspectRatio: 'portrait',
        specs: [
          { label: 'Solar Heat Gain Coeff', value: 'SHGC 0.22' },
          { label: 'Bronze Purity', value: 'CuSn8 Marine Alloy' }
        ]
      }
    ],
    gallery: [
      { url: '/images/project-millenium.jpg', caption: 'Cantilevered pool deck overlooking Jubilee Hills ridge', tag: 'Exterior' },
      { url: '/images/precision-detail.jpg', caption: 'Hand-finished bronze louver details and shadow play', tag: 'Detail' },
      { url: '/images/statement-architecture.jpg', caption: 'Monolithic entrance portal cut into Deccan granite', tag: 'Portal' }
    ]
  },
  {
    id: '6',
    slug: 'kns-stolbovo-residences',
    title: 'KNS Stolbovo Residences',
    subtitle: 'High-Density Smart Urban Enclave & Tech Campus',
    category: 'Urban Landmark',
    year: '2024',
    location: 'Outer Ring Road, Bengaluru',
    area: '680,000 sq.ft',
    status: 'Completed',
    valuation: '₹1,250 Cr',
    leadArchitect: 'Atelier Incredible & UNStudio',
    coverImage: '/images/project-kns.jpg',
    sketchImage: '/images/sketch-100.jpg',
    aspectRatio: 'landscape',
    shortDescription: 'AI-automated residential tower complex featuring modular bio-facades, drone landing pads, and co-working sky bridges.',
    fullDescription: 'KNS Stolbovo represents the convergence of software intelligence and physical architecture. Designed for visionary tech entrepreneurs and researchers, the towers incorporate automated IoT energy balancing, vertical aeroponic sky farms, and acoustic isolation pods.',
    stats: [
      { label: 'Total Units', value: '140 Sky Suites' },
      { label: 'Smart Automation', value: '100% AI Managed' },
      { label: 'EV Superchargers', value: '80 Bays' },
      { label: 'Energy Savings', value: '42% Below Baseline' }
    ],
    specifications: [
      { label: 'Smart Grid', value: 'Vanguard PropTech Neural Integration' },
      { label: 'Acoustic Barrier', value: 'Triple-Pane Argon Acoustic Glazing' },
      { label: 'Connectivity', value: 'Redundant 10Gbps Fiber to Every Unit' },
      { label: 'Drone Port', value: 'Automated Package Delivery Hub on Sky Bridge' },
      { label: 'Air Quality', value: 'Continuous Clean-Room Class Air Filtration' },
      { label: 'Certification', value: 'LEED Platinum & WELL Gold Standard' }
    ],
    workDone: [
      {
        discipline: 'Smart Infrastructure & Neural BMS Integration',
        scope: 'Deployment of 12,000 optical sensors and edge neural compute nodes across towers.',
        deliverable: 'Autonomous real-time building optimization',
        duration: '14 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Sky Bridge Structural Assembly',
        scope: 'Lifting and anchoring a 42-meter steel sky bridge connecting the twin residential towers.',
        deliverable: 'Suspended communal workspace and garden',
        duration: '8 Months',
        milestone: 'Completed'
      }
    ],
    sections: [
      {
        id: 'kns-s1',
        tag: '01 / INTELLIGENT URBANISM',
        heading: 'A Self-Regulating Architectural Superstructure',
        subheading: 'Powered by Vanguard PropTech neural networks for zero-energy waste.',
        description: 'The twin towers dynamically adjust their ventilation louvers, chillers, and shading blinds according to localized occupancy densities and solar radiation, reducing operating carbon by 42%.',
        image: '/images/project-kns.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Energy Reduction', value: '42% Audited' },
          { label: 'Autonomous Response', value: '<500ms Cycle' }
        ]
      },
      {
        id: 'kns-s2',
        tag: '02 / ELEVATED SOCIALITY',
        heading: 'The 42-Meter Suspended Sky Bridge',
        subheading: 'Co-working lounges, private meeting pods, and botanical running tracks at 80m height.',
        description: 'Connecting the residential wings, the aerodynamic glass sky bridge creates an inspiring communal environment where founders collaborate with uninterrupted views of Bengaluru’s tech corridor.',
        image: '/images/project-bolshevik.jpg',
        exposureType: 'split-reveal',
        aspectRatio: 'portrait',
        specs: [
          { label: 'Bridge Length', value: '42 Meters' },
          { label: 'Structural Span', value: 'Column-Free Cantilever' }
        ]
      }
    ],
    gallery: [
      { url: '/images/project-kns.jpg', caption: 'Monolithic towers with geometric kinetic facade fins', tag: 'Exterior' },
      { url: '/images/project-bolshevik.jpg', caption: 'Illuminated glass sky bridge connecting twin structures', tag: 'Sky Bridge' },
      { url: '/images/project-info-architecture.jpg', caption: 'Double-height co-working atrium and private pods', tag: 'Interior' }
    ]
  },
  {
    id: '7',
    slug: 'kotelnaya-kinetics-pavilion',
    title: 'Kotelnaya Cultural Pavilion',
    subtitle: 'Industrial Transformation & Sovereign Art Center',
    category: 'Cultural & Commercial',
    year: '2023',
    location: 'Lower Parel, Mumbai',
    area: '180,000 sq.ft',
    status: 'Completed',
    valuation: '₹750 Cr',
    leadArchitect: 'Incredible Atelier & Herzog De Meuron Inspired',
    coverImage: '/images/project-kotelnaya.jpg',
    sketchImage: '/images/sketch-detail.jpg',
    aspectRatio: 'landscape',
    shortDescription: 'Adaptive transformation of historic textile mill boiler house into a soaring multi-level museum and sovereign private club.',
    fullDescription: 'Kotelnaya Kinetics breathes new life into historic industrial brickwork and cast-iron trusses. Featuring a 24-meter clear-span exhibition atrium, private art storage vaults, and an open-air rooftop sculpture terrace overlooking the mill district.',
    stats: [
      { label: 'Atrium Height', value: '24 Meters' },
      { label: 'Historic Brick Preserved', value: '100% Restored' },
      { label: 'Exhibition Area', value: '65,000 sq.ft' },
      { label: 'Private Membership', value: '300 Patrons' }
    ],
    specifications: [
      { label: 'Historic Restoration', value: '1890s Exposed Heritage Brick & Cast Iron' },
      { label: 'Acoustic Treatment', value: 'Micro-Perforated Timber Acoustic Panels' },
      { label: 'Lighting Design', value: 'Museum-Grade DALI 98+ CRI System' },
      { label: 'Climate Control', value: 'Micro-Zoned Geothermal Displacement HVAC' },
      { label: 'Dining Curation', value: 'Michelin-Grade Chef Tasting Kitchen' },
      { label: 'Heritage Status', value: 'Grade II Industrial Heritage Monument' }
    ],
    workDone: [
      {
        discipline: 'Heritage Masonry Restoration & Structural Stitching',
        scope: 'Chemical stabilization of 130-year-old load-bearing brick walls and carbon-fiber reinforcement.',
        deliverable: 'Seismically upgraded historic industrial shell',
        duration: '18 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Steel Truss Retrofitting & Glass Skylights',
        scope: 'Restoration of antique riveted iron roof trusses and installation of triple-glazed acoustic skylights.',
        deliverable: 'Daylit 24-meter central exhibition hall',
        duration: '12 Months',
        milestone: 'Completed'
      }
    ],
    sections: [
      {
        id: 'kotelnaya-s1',
        tag: '01 / INDUSTRIAL HERITAGE',
        heading: 'Preserving Mumbai’s Mill Heritage through Contemporary Craft',
        subheading: 'Harmonizing weathered red brick with precision blackened steel and glass.',
        description: 'The monumental boiler room was sensitively adapted to host monumental art installations, symphony performances, and private family office summits while celebrating authentic architectural history.',
        image: '/images/project-kotelnaya.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Ceiling Height', value: '24 Meters' },
          { label: 'Brick Age', value: '130+ Years' }
        ]
      }
    ],
    gallery: [
      { url: '/images/project-kotelnaya.jpg', caption: 'Restored brick facade and monumental blackened steel portal', tag: 'Heritage' },
      { url: '/images/statement-architecture.jpg', caption: 'Central exhibition hall with natural overhead daylighting', tag: 'Atrium' }
    ]
  },
  {
    id: '8',
    slug: 'almaty-stone-manor',
    title: 'Almaty Heritage Manor',
    subtitle: 'Monumental Basalt Mountain Compound',
    category: 'Private Estates',
    year: '2024',
    location: 'Lonavala Hills, Maharashtra',
    area: '24 Acres',
    status: 'Completed',
    valuation: '₹420 Cr',
    leadArchitect: 'Incredible Atelier & Marzio Partners',
    coverImage: '/images/project-almaty.jpg',
    sketchImage: '/images/sketch-architecture-gestural.jpg',
    aspectRatio: 'portrait',
    shortDescription: 'Dramatic mountain retreat constructed from heavy basalt masonry with private lakefrontage and equestrian paddocks.',
    fullDescription: 'Almaty Heritage Manor crowns a private mist-shrouded plateau in the Western Ghats. Crafted with 600mm-thick hand-dressed basalt stone walls, heated mineral plunge pools, and expansive glass portals framing cascading monsoon waterfalls.',
    stats: [
      { label: 'Estate Size', value: '24 Acres' },
      { label: 'Private Lakefront', value: '800 Meters' },
      { label: 'Suites', value: '8 Master Pavilions' },
      { label: 'Helipad Access', value: 'Direct 18-Min Transit' }
    ],
    specifications: [
      { label: 'Stone Thickness', value: '600mm Solid Basalt Blockwork' },
      { label: 'Plunge Pools', value: 'Heated Mountain Mineral Waters' },
      { label: 'Equestrian Center', value: '6-Stall Stables & Sand Arena' },
      { label: 'Power Autonomy', value: '100% Off-Grid Solar & Battery' },
      { label: 'Helipad', value: 'Certified Night-Landing Helipad' },
      { label: 'Climate Design', value: 'Deep Roof Overhangs & Passive Chimneys' }
    ],
    workDone: [
      {
        discipline: 'Plateau Masterplanning & Lake Revitalization',
        scope: 'Ecological lake desilting, rainwater channeling, and organic plateau zoning.',
        deliverable: 'Pristine private aquatic sanctuary',
        duration: '10 Months',
        milestone: 'Completed'
      },
      {
        discipline: 'Monolithic Basalt Stone Masonry',
        scope: 'Quarrying and hand-chiseling over 8,000 tons of local volcanic basalt blocks.',
        deliverable: 'Centuries-lasting thermal mass structure',
        duration: '16 Months',
        milestone: 'Completed'
      }
    ],
    sections: [
      {
        id: 'almaty-s1',
        tag: '01 / MOUNTAIN PERMANENCE',
        heading: 'Heavy Stone Fortification Embracing the Ghats Mist',
        subheading: 'Designed to withstand heavy monsoon deluges while offering warm, fireside intimacy.',
        description: 'The monumental stone walls create total acoustic silence from monsoon downpours, while large hearths crafted from raw copper and river rocks radiate gentle warmth throughout the suites.',
        image: '/images/project-almaty.jpg',
        exposureType: 'curtain-unveil',
        aspectRatio: 'portrait',
        specs: [
          { label: 'Wall Thickness', value: '600 mm' },
          { label: 'Thermal Stability', value: '±1.5°C Daily Variance' }
        ]
      },
      {
        id: 'almaty-s2',
        tag: '02 / COASTAL MOUNTAIN SANCTUARY',
        heading: 'Private Pier & Lakeside Wellness Pavilion',
        subheading: 'Heated thermal pools gazing across serene mirror-like waters.',
        description: 'Featuring an open-air cedar wood sauna, Japanese cold plunge basin, and private boat jetty for quiet morning rowboat excursions across the mist-shrouded private lake.',
        image: '/images/project-elihouse.jpg',
        exposureType: 'split-reveal',
        aspectRatio: 'landscape',
        specs: [
          { label: 'Lake Frontage', value: '800 Meters' },
          { label: 'Thermal Pool Temp', value: '38°C Controlled' }
        ]
      }
    ],
    gallery: [
      { url: '/images/project-almaty.jpg', caption: 'Basalt stone elevation framing the Western Ghats ridge', tag: 'Elevation' },
      { url: '/images/project-elihouse.jpg', caption: 'Lakeside private jetty and open-air cedar pavilion', tag: 'Lakeside' },
      { url: '/images/studio-01.jpg', caption: 'Architectural atelier crafting hand-carved stone models', tag: 'Process' }
    ]
  }
];
