// Companies & Investment Portfolio Data Store
// Incredible Groups - 10 Strategic Investment Companies

export interface CompanyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface CompanyImage {
  url: string;
  caption: string;
  category: string;
}

export interface Company {
  id: string;
  name: string;
  slug: string;
  tickerOrCode: string;
  sector: string;
  investedCapital: string;
  equityStake: string;
  foundedYear: string;
  headquarters: string;
  valuation: string;
  shortDescription: string;
  fullOverview: string;
  thesis: string;
  
  // Ethics & About Us
  aboutUs: string;
  ethicsAndMission: string;
  atelierWhyWeInvested: string;
  coreValues: string[];
  
  // Problem & Solution
  problemStatement: string;
  marketFriction: string;
  howTheyAreSolving: string;
  proprietaryTech: string[];
  
  // Metrics & Visuals
  keyMetrics: CompanyMetric[];
  logo: string;
  brandBadge: string;
  gallery: CompanyImage[];
}

export const companies: Company[] = [
  {
    id: 'c1',
    name: 'Vanguard PropTech',
    slug: 'vanguard-proptech',
    tickerOrCode: 'VPT-AI',
    sector: 'Real Estate Artificial Intelligence & Facility Automation',
    investedCapital: '₹140 Cr ($17M)',
    equityStake: '24.5%',
    foundedYear: '2021',
    headquarters: 'Bengaluru, India',
    valuation: '$120M USD',
    shortDescription: 'Autonomous building management systems and machine vision platforms for high-density smart towers.',
    fullOverview: 'Vanguard PropTech develops proprietary IoT micro-sensor networks and neural energy optimization models that reduce carbon footprint by up to 38% across Class-A commercial towers and luxury residential complexes.',
    thesis: 'Decarbonization and autonomous facility engineering represent the highest-margin inflection point in modern commercial asset valuation.',
    
    aboutUs: 'Vanguard PropTech was founded by former aerospace engineers and architectural physicists dedicated to bringing autonomous intelligence to high-density buildings. The company turns passive concrete structures into self-optimizing ecosystems.',
    ethicsAndMission: 'Committed to accelerating the real estate industry toward zero-carbon operations through open data standards, uncompromising privacy safeguards, and strict ethical AI stewardship.',
    atelierWhyWeInvested: 'Incredible Groups backed Vanguard as their primary commercial deployment partner, implementing their AI brains across all our institutional and luxury developments to achieve permanent energy alpha.',
    coreValues: ['Zero-Carbon Imperative', 'Algorithmic Truth', 'Resilient Micro-Infrastructure', 'Radical Privacy'],
    
    problemStatement: 'Modern commercial superstructures consume 40% of global electricity, with over 30% wasted due to static, uncoordinated HVAC, lighting, and elevator scheduling that cannot adapt to real-time human density.',
    marketFriction: 'Traditional legacy BMS systems are closed, expensive, and require manual engineering calibration that lags real occupancy fluctuations by hours or days.',
    howTheyAreSolving: 'Vanguard deploys non-invasive optical micro-sensors and edge neural processors that sample environmental parameters every 500 milliseconds, automatically tuning chillers, dampers, and solar louvers in real time.',
    proprietaryTech: [
      'NeuralHVAC™ Predictive Thermal Equilibrium Engine',
      'QuantumSens™ Optical Occupancy Matrix (GDPR-Compliant)',
      'Sub-Second Energy Arbitrage & Battery Dispatch Algorithm'
    ],
    
    keyMetrics: [
      { label: 'Square Footage Managed', value: '42M sq.ft', subtext: 'Across 68 Grade-A Towers' },
      { label: 'Energy Savings Delivered', value: '38% Avg', subtext: 'Audited by Bureau of Energy' },
      { label: 'ARR Growth YoY', value: '+185%', subtext: 'Trailing 12 Months' },
      { label: 'Carbon Abated', value: '84,000 MT', subtext: 'Cumulative Since Inception' }
    ],
    logo: '/placeholders/company-logo-1.svg',
    brandBadge: 'VPT',
    gallery: [
      { url: '/images/precision-detail.jpg', caption: 'Neural sensor array integrated into architectural facade', category: 'Hardware' },
      { url: '/images/project-bolshevik.jpg', caption: 'Command center managing 42M sq.ft of smart commercial space', category: 'Operations' },
      { url: '/images/studio-01.jpg', caption: 'R&D engineers calibrating optical micro-sensor prototypes', category: 'Atelier Labs' }
    ]
  },
  {
    id: 'c2',
    name: 'Aethelred Capital & Credit',
    slug: 'aethelred-capital',
    tickerOrCode: 'AC-CRED',
    sector: 'Structured Real Estate Debt & Special Situation Bridge Finance',
    investedCapital: '₹350 Cr ($42M)',
    equityStake: '35.0%',
    foundedYear: '2019',
    headquarters: 'Mumbai, India',
    valuation: '$240M USD',
    shortDescription: 'Alternative asset debt provider catering to prime metropolitan land acquisitions and construction bridge finance.',
    fullOverview: 'Aethelred Capital provides institutional-grade structured credit solutions with rigorous collateral underwriting, focused exclusively on Tier-1 land parcels and premium urban renewal programs.',
    thesis: 'Institutional capital discipline paired with swift execution creates irreplaceable high-yield opportunities in prime urban infrastructure.',
    
    aboutUs: 'Aethelred Capital was formed to bridge the liquidity vacuum in bespoke metropolitan real estate, providing sovereign family offices and developers with flexible, non-dilutive credit.',
    ethicsAndMission: 'Absolute fiduciary transparency, zero-default risk underwriting, and strict alignment with conservative asset-backed collateralization.',
    atelierWhyWeInvested: 'Allows Incredible Groups to anchor strategic land bank acquisitions ahead of the market while generating consistent 18%+ net IRRs through structured senior debt tranches.',
    coreValues: ['Fiduciary Conservatism', 'Speed of Execution', 'Collateral Primacy', 'Sovereign Alignment'],
    
    problemStatement: 'Tier-1 real estate acquisitions face rigid 6-9 month approval cycles from commercial banking institutions, causing developers to lose prime marquee land opportunities.',
    marketFriction: 'Traditional non-banking financial companies lack in-house architectural engineering capabilities to assess true residual land value accurately.',
    howTheyAreSolving: 'Aethelred combines proprietary spatial valuation algorithms with in-house technical due diligence to disburse senior secured bridge credit within 14 business days.',
    proprietaryTech: [
      'SpatialUnderwrite™ Automated Land Title & Residual Value Engine',
      'Live Escrow & Construction Milestone Smart Auditing',
      'Dynamic Collateral Coverage Monitoring System'
    ],
    
    keyMetrics: [
      { label: 'AUM Deployed', value: '₹1,850 Cr', subtext: 'Senior Secured Tranches' },
      { label: 'NPA Default Rate', value: '0.00%', subtext: 'Across 34 Transactions' },
      { label: 'Net IRR Realized', value: '18.4%', subtext: 'Annualized Sovereign Return' },
      { label: 'Average Loan-to-Value', value: '46.5%', subtext: 'Conservative Collateral Buffer' }
    ],
    logo: '/placeholders/company-logo-2.svg',
    brandBadge: 'AC',
    gallery: [
      { url: '/images/project-info-architecture.jpg', caption: 'Institutional investment committee headquarters in BKC', category: 'Headquarters' },
      { url: '/images/project-kns.jpg', caption: 'Prime urban development asset underwritten by Aethelred', category: 'Portfolio' },
      { url: '/images/studio-02.jpg', caption: 'Quantitative credit risk analysts reviewing transaction models', category: 'Executive' }
    ]
  },
  {
    id: 'c3',
    name: 'Kallisto Luxury Living',
    slug: 'kallisto-luxury-living',
    tickerOrCode: 'KLL-HOSP',
    sector: 'Ultra-Luxury Hospitality & Private Members Sanctuaries',
    investedCapital: '₹220 Cr ($26M)',
    equityStake: '40.0%',
    foundedYear: '2020',
    headquarters: 'Assagao, Goa & London',
    valuation: '$145M USD',
    shortDescription: 'Curator of private coastal sanctuaries, discreet members clubs, and bespoke concierge residential management.',
    fullOverview: 'Kallisto manages bespoke hospitality suites and private beachfront clubs across Goa, Alibaug, and the Mediterranean, blending Michelin-grade culinary curation with private aviation and yacht charters.',
    thesis: 'HNW lifestyle migration towards experiential coastal living demands uncompromising, personalized hospitality services.',
    
    aboutUs: 'Kallisto operates the world’s most discreet private sanctuaries, catering exclusively to invited global patrons, creative visionaries, and sovereign family principals.',
    ethicsAndMission: 'Harmonizing luxury with radical environmental preservation, zero single-use plastics, hyper-local farm sourcing, and empowerment of regional craft communities.',
    atelierWhyWeInvested: 'Provides an integrated hospitality and lifestyle management layer for all Incredible Groups residential estates, significantly boosting rental yields and long-term asset prestige.',
    coreValues: ['Discreet Excellence', 'Regenerative Hospitality', 'Culinary Craft', 'Uncompromised Privacy'],
    
    problemStatement: 'Ultra-high-net-worth homeowners face severe operational decay and staffing friction when maintaining private luxury coastal estates that sit vacant for parts of the year.',
    marketFriction: 'Standard luxury hospitality brands are too rigid and commercialized, failing to provide the intimate discretion and bespoke customization demanded by discerning estate owners.',
    howTheyAreSolving: 'Kallisto provides turnkey estate asset management, offering private butler training, seasonal botanical upkeep, and an invitation-only members exchange network.',
    proprietaryTech: [
      'Kallisto Concierge OS™ Encrypted Client Preference Engine',
      'Microclimate Wine & Artwork Preservation IoT Systems',
      'Private Yacht & Aviation Fleet Shared Dispatch Protocol'
    ],
    
    keyMetrics: [
      { label: 'Active Sanctuaries', value: '14 Estates', subtext: 'Goa, Alibaug & Maldives' },
      { label: 'Exclusive Members', value: '650 Invited', subtext: 'Global HNW Registry' },
      { label: 'Guest Retention', value: '94%', subtext: 'Annual Repeat Bookings' },
      { label: 'Estate Yield Uplift', value: '+32%', subtext: 'Net Operational Yield' }
    ],
    logo: '/placeholders/company-logo-3.svg',
    brandBadge: 'KLL',
    gallery: [
      { url: '/images/project-pokrovskoe.jpg', caption: 'Kallisto Private Forest Sanctuary in North Goa', category: 'Sanctuary' },
      { url: '/images/project-millenium.jpg', caption: 'Private dining pavilion and infinity reflection pool', category: 'Experience' },
      { url: '/images/studio-03.jpg', caption: 'Artisanal culinary and bespoke mixology curation laboratory', category: 'Culinary' }
    ]
  },
  {
    id: 'c4',
    name: 'Zenith Modular Systems',
    slug: 'zenith-modular',
    tickerOrCode: 'ZMS-IND',
    sector: 'Offsite Precision Prefabrication & Sustainable ConTech',
    investedCapital: '₹180 Cr ($21.5M)',
    equityStake: '28.0%',
    foundedYear: '2022',
    headquarters: 'Pune, India',
    valuation: '$110M USD',
    shortDescription: 'Robotic modular construction delivering architectural-grade luxury villa shells within 45 days.',
    fullOverview: 'Operating state-of-the-art robotic assembly facilities, Zenith constructs high-precision timber-concrete composite pods with sub-millimeter tolerances, speeding up construction by 400%.',
    thesis: 'Offsite precision engineering eradicates site delays, waste, and quality variance in bespoke luxury architectural projects.',
    
    aboutUs: 'Zenith Modular merges industrial aerospace robotics with architectural craft, moving construction from chaotic outdoor job sites into dust-free, climatically controlled advanced manufacturing facilities.',
    ethicsAndMission: 'Eliminating construction landfill waste, drastically reducing on-site diesel generator emissions, and promoting sustainably harvested engineered mass timber.',
    atelierWhyWeInvested: 'Enables Incredible Groups to deliver complex clifftop and remote forest sanctuaries in half the traditional timeline with zero compromise on structural permanence.',
    coreValues: ['Sub-Millimeter Precision', 'Waste Zero', 'Speed of Assembly', 'Craftsmanship at Scale'],
    
    problemStatement: 'Conventional on-site building construction in remote luxury destinations suffers 40%+ cost overruns, chronic weather delays, and severe structural quality variances.',
    marketFriction: 'Wet construction techniques generate enormous material waste, noise pollution, and heavy carbon emissions that damage delicate natural ecosystems.',
    howTheyAreSolving: 'Zenith pre-engineers complete modular volumetric pods—complete with plumbing, wiring, and bespoke stone finishes—and assembles them on-site in under 45 days.',
    proprietaryTech: [
      'RoboPod™ 6-Axis Robotic Timber-Concrete Joining Cells',
      'AeroSeal™ Sub-Millimeter Acoustic Interlocking Joints',
      'BIM-to-Factory Direct CNC Fabrication Pipeline'
    ],
    
    keyMetrics: [
      { label: 'Factory Output / Year', value: '1.2M sq.ft', subtext: 'Annual Fabrication Capacity' },
      { label: 'Construction Speedup', value: '4x Faster', subtext: 'From Foundation to Key Handover' },
      { label: 'Material Waste Reduction', value: '88%', subtext: 'Recycled in Closed Factory Loops' },
      { label: 'Structural Tolerance', value: '±0.5 mm', subtext: 'Aerospace-Grade Precision' }
    ],
    logo: '/placeholders/company-logo-4.svg',
    brandBadge: 'ZMS',
    gallery: [
      { url: '/images/precision-preliminary.jpg', caption: 'Robotic gantry manufacturing modular timber-concrete pod', category: 'Factory' },
      { url: '/images/project-vision.jpg', caption: 'Completed luxury clifftop villa assembled in 38 days', category: 'Completed' },
      { url: '/images/studio-04.jpg', caption: 'Structural engineers verifying BIM connection tolerances', category: 'Engineering' }
    ]
  },
  {
    id: 'c5',
    name: 'Solaria Clean Energy Grid',
    slug: 'solaria-energy',
    tickerOrCode: 'SOL-PWR',
    sector: 'Renewable Microgrids & Rooftop Solar Infrastructure',
    investedCapital: '₹160 Cr ($19M)',
    equityStake: '22.0%',
    foundedYear: '2020',
    headquarters: 'Ahmedabad, India',
    valuation: '$135M USD',
    shortDescription: 'Industrial and residential solar canopy microgrids powering zero-emission real estate developments.',
    fullOverview: 'Solaria finances, installs, and operates decentralized battery storage and high-efficiency bifacial solar arrays for large commercial campuses and gated townships.',
    thesis: 'Net-zero real estate commands premium tenancy rates and benefits from guaranteed regulatory compliance over 25-year horizons.',
    
    aboutUs: 'Solaria transforms passive real estate rooftops, carports, and facades into high-yield decentralized clean power stations with localized storage.',
    ethicsAndMission: 'Accelerating energy democratization, eliminating dependency on fossil fuel peaker plants, and guaranteeing 100% renewable uptime.',
    atelierWhyWeInvested: 'Provides proprietary clean energy infrastructure across Incredible Groups master developments, unlocking green building certifications and zero-cost common power.',
    coreValues: ['Solar Dominance', 'Energy Autonomy', 'Grid Resilience', 'Predictable Alpha'],
    
    problemStatement: 'Real estate developments face rising municipal electricity tariffs, frequent grid brownouts, and stringent new ESG carbon taxes.',
    marketFriction: 'Traditional solar installations are fragmented, poorly maintained, and lack battery integration to handle evening peak demand.',
    howTheyAreSolving: 'Solaria delivers fully funded, turnkey microgrid solutions incorporating bifacial N-type solar modules, liquid-cooled battery storage, and dynamic AI grid arbitrage.',
    proprietaryTech: [
      'BifacialOptic™ High-Yield Solar Cladding Systems',
      'SolariaFlow™ Liquid-Cooled Lithium-Iron Storage Containers',
      'Virtual Power Plant (VPP) Peak Shaving Protocol'
    ],
    
    keyMetrics: [
      { label: 'Capacity Commissioned', value: '120 MWp', subtext: 'Across Commercial & Luxury Portfolios' },
      { label: 'Offset CO2 / Year', value: '140,000 MT', subtext: 'Equivalent to 2.8M Trees' },
      { label: 'Long-term PPAs', value: '100% Locked', subtext: '25-Year Guaranteed Contracts' },
      { label: 'Grid Uptime', value: '99.98%', subtext: 'Zero Blackout Guarantee' }
    ],
    logo: '/placeholders/company-logo-5.svg',
    brandBadge: 'SOL',
    gallery: [
      { url: '/images/statement-architecture.jpg', caption: 'Architecturally integrated solar canopy on commercial podium', category: 'Solar' },
      { url: '/images/project-kotelnaya.jpg', caption: 'Decentralized battery energy storage installation', category: 'Storage' },
      { url: '/images/studio-05.jpg', caption: 'Energy grid telemetry monitoring live kilowatt generation', category: 'Telemetry' }
    ]
  },
  {
    id: 'c6',
    name: 'Helios Aviation Services',
    slug: 'helios-aviation',
    tickerOrCode: 'HAS-AIR',
    sector: 'Urban Air Mobility & Private Helipad Infrastructure',
    investedCapital: '₹95 Cr ($11.5M)',
    equityStake: '30.0%',
    foundedYear: '2023',
    headquarters: 'Mumbai, India',
    valuation: '$75M USD',
    shortDescription: 'Point-to-point luxury helicopter shuttles and eVTOL vertiport network across Western India.',
    fullOverview: 'Helios connects South Mumbai, BKC, Alibaug, and Pune through rapid urban air transfers, slashing transit times from 3 hours to 14 minutes.',
    thesis: 'Seamless multimodal transit infrastructure directly multiplies the land value of luxury coastal retreats and satellite enclaves.',
    
    aboutUs: 'Helios is pioneering the next era of point-to-point urban air transit, establishing certified vertiports and operating quiet, luxury aircraft for business leaders and estate owners.',
    ethicsAndMission: 'Pioneering ultra-low acoustic footprint flight corridors, transitioning to electric eVTOL fleets, and maintaining uncompromising aviation safety records.',
    atelierWhyWeInvested: 'Directly unlocks massive land value appreciation in our Alibaug and Goa coastal sanctuaries by turning multi-hour commutes into a scenic 10-minute flight.',
    coreValues: ['Aviation Safety', 'Time Sovereignty', 'Acoustic Discretion', 'eVTOL Readiness'],
    
    problemStatement: 'Severe metropolitan traffic congestion in Western India cripples mobility, isolating prime coastal sanctuaries and causing hours of lost executive productivity.',
    marketFriction: 'Private aviation chartering has historically been fragmented, cumbersome, and lacked dedicated rooftop vertiport landing rights in financial districts.',
    howTheyAreSolving: 'Helios secures exclusive rooftop helipad concessions across premier towers and operates a fleet of twin-engine luxury helicopters and eVTOL charging hubs.',
    proprietaryTech: [
      'HeliosFlight™ On-Demand Point-to-Point Booking Protocol',
      'WhisperRotor™ Acoustic Suppression Flight Path Algorithm',
      'Next-Gen High-Voltage Vertiport Rapid Charger (400 kW)'
    ],
    
    keyMetrics: [
      { label: 'Monthly Flights', value: '420+ Trips', subtext: 'South Mumbai • Alibaug • Pune' },
      { label: 'Private Helipads', value: '18 Hubs', subtext: 'Exclusive Landing Rights' },
      { label: 'On-Time Reliability', value: '99.2%', subtext: 'Zero Flight Incident Record' },
      { label: 'Transit Time Reduction', value: '-85%', subtext: 'From 3.5 Hrs to 14 Mins' }
    ],
    logo: '/placeholders/company-logo-6.svg',
    brandBadge: 'HAS',
    gallery: [
      { url: '/images/project-almaty.jpg', caption: 'Helios rooftop vertiport overlooking coastal skyline', category: 'Vertiport' },
      { url: '/images/project-vision.jpg', caption: 'Private estate helipad touchdown in Alibaug', category: 'Estate Hub' },
      { url: '/images/studio-06.jpg', caption: 'Flight operations and safety telemetry monitoring center', category: 'Operations' }
    ]
  },
  {
    id: 'c7',
    name: 'Orion Materials Research',
    slug: 'orion-materials',
    tickerOrCode: 'OMR-MAT',
    sector: 'Advanced Bio-Concrete & Self-Healing Smart Composites',
    investedCapital: '₹110 Cr ($13M)',
    equityStake: '32.5%',
    foundedYear: '2022',
    headquarters: 'Hyderabad, India',
    valuation: '$85M USD',
    shortDescription: 'Next-generation architectural composites engineered for extreme marine salinity and climate resilience.',
    fullOverview: 'Orion manufactures ultra-high-performance concrete (UHPC) and carbon-negative bio-binders that double structural lifespan in coastal environments.',
    thesis: 'High-performance proprietary materials allow bolder architectural geometries with significantly reduced maintenance liability.',
    
    aboutUs: 'Orion is a deep-tech material science laboratory engineering advanced mineral binders, bacterial self-healing concrete, and carbon-sequestering aggregates.',
    ethicsAndMission: 'Decarbonizing heavy civil infrastructure by replacing traditional Portland cement with circular industrial pozzolans and bio-calcifying enzymes.',
    atelierWhyWeInvested: 'Gives Incredible Groups exclusive proprietary access to marine-grade concrete capable of withstanding extreme coastal salt-spray for over two centuries.',
    coreValues: ['Material Longevity', 'Carbon Negative', 'Molecular Precision', 'Architectural Liberty'],
    
    problemStatement: 'Reinforced concrete structures in coastal zones suffer severe salt-induced rebar corrosion and micro-cracking within 25 years, causing massive structural degradation.',
    marketFriction: 'Standard concrete suppliers use cheap standard OPC binders that have high embodied carbon and lack resistance to aggressive chloride ion attacks.',
    howTheyAreSolving: 'Orion embeds bio-mineralizing bacterial spores and carbon nanotubes into the cement matrix that automatically seal micro-cracks upon moisture contact.',
    proprietaryTech: [
      'BioHeal™ Bacterial Calcite Auto-Sealing Admixture',
      'CarbonNanoCore™ High-Tensile Structural UHPC Matrix',
      'ChlorideShield™ Graphene Micro-Barrier Coating'
    ],
    
    keyMetrics: [
      { label: 'Patents Granted', value: '14 Global', subtext: 'US, EU & Indian Patent Offices' },
      { label: 'Structural Durability', value: '200+ Years', subtext: 'Marine Salt Spray Certified' },
      { label: 'Embodied Carbon', value: '-45% Base', subtext: 'vs Traditional OPC Cement' },
      { label: 'Compressive Strength', value: '160 MPa', subtext: 'Ultra-High Performance Baseline' }
    ],
    logo: '/placeholders/company-logo-7.svg',
    brandBadge: 'OMR',
    gallery: [
      { url: '/images/precision-detail.jpg', caption: 'Electron microscope analysis of self-healing bio-concrete', category: 'Material' },
      { url: '/images/project-info-architecture.jpg', caption: 'UHPC cantilevered architectural pavilion casting', category: 'Structure' },
      { url: '/images/studio-07.jpg', caption: 'Materials laboratory conducting hydraulic compressive tests', category: 'Testing' }
    ]
  },
  {
    id: 'c8',
    name: 'Terra Nova Urban Farms',
    slug: 'terra-nova-farms',
    tickerOrCode: 'TNV-AGRI',
    sector: 'Rooftop Hydroponics & Biophilic Agro-Architecture',
    investedCapital: '₹75 Cr ($9M)',
    equityStake: '25.0%',
    foundedYear: '2021',
    headquarters: 'Bengaluru, India',
    valuation: '$60M USD',
    shortDescription: 'Integrated vertical farming and edible landscapes embedded directly into luxury residential podiums.',
    fullOverview: 'Terra Nova converts underutilized rooftop spaces into commercial hydroponic greenhouses delivering fresh organic produce directly to resident doorsteps.',
    thesis: 'Hyper-local food systems elevate wellbeing metrics and create authentic farm-to-table living within urban superstructures.',
    
    aboutUs: 'Terra Nova reimagines the relationship between food and modern architecture, turning residential rooftops into lush, pesticide-free vertical hydroponic gardens.',
    ethicsAndMission: 'Eliminating food miles, recycling 95% of agricultural water, and supplying clean, nutrient-dense organic greens directly to urban inhabitants.',
    atelierWhyWeInvested: 'Creates a signature biophilic amenity for Incredible Groups communities, delivering fresh organic harvests to residents every morning.',
    coreValues: ['Zero Food Miles', 'Nutritional Purity', 'Water Circularity', 'Biophilic Wellbeing'],
    
    problemStatement: 'Urban food supply chains are fragile, highly carbon-intensive, and rely on produce that loses 50% of its nutrients during days of refrigerated transit.',
    marketFriction: 'Real estate developers often view landscaping purely as an ornamental expense rather than a productive, regenerative food-producing asset.',
    howTheyAreSolving: 'Terra Nova designs and manages automated vertical nutrient-film hydroponic greenhouses directly integrated into building HVAC heat-recovery systems.',
    proprietaryTech: [
      'AgroPod™ Modular Closed-Loop Hydroponic Racks',
      'NutriSense™ AI Automated Mineral Dosing System',
      'HVAC Waste-Heat Greenhouse Climate Controller'
    ],
    
    keyMetrics: [
      { label: 'Monthly Produce Harvest', value: '25,000 kg', subtext: 'Organic Leafy Greens & Microgreens' },
      { label: 'Water Recirculation', value: '95% Loop', subtext: 'vs Traditional Soil Agriculture' },
      { label: 'Active Facilities', value: '8 Towers', subtext: 'Incredible Groups & Third-Party' },
      { label: 'Pesticide Usage', value: '0.00%', subtext: '100% Biological Pest Control' }
    ],
    logo: '/placeholders/company-logo-8.svg',
    brandBadge: 'TNV',
    gallery: [
      { url: '/images/project-pokrovskoe.jpg', caption: 'Rooftop vertical hydroponic greenhouse garden', category: 'Farm' },
      { url: '/images/project-millenium.jpg', caption: 'Biophilic edible landscape integrated into resident podium', category: 'Podium' },
      { url: '/images/studio-08.jpg', caption: 'Agricultural scientists measuring nutrient solution purity', category: 'Agronomy' }
    ]
  },
  {
    id: 'c9',
    name: 'Hyperion Water Stewardship',
    slug: 'hyperion-water',
    tickerOrCode: 'HWS-WTR',
    sector: 'Zero-Discharge Desalination & Closed-Loop Water Tech',
    investedCapital: '₹130 Cr ($15.5M)',
    equityStake: '27.0%',
    foundedYear: '2021',
    headquarters: 'Chennai, India',
    valuation: '$95M USD',
    shortDescription: 'Nanofiltration and solar-powered sea water desalination plants for coastal developments.',
    fullOverview: 'Hyperion provides sovereign water independence for luxury islands, coastal villas, and remote estates through low-energy membrane technology.',
    thesis: 'Water security is the foundational prerequisite for long-term real estate valuation and environmental sustainability in coastal zones.',
    
    aboutUs: 'Hyperion develops next-generation graphene-membrane water purification and sea water desalination plants that operate with 60% lower energy.',
    ethicsAndMission: 'Protecting fragile coastal aquifers from over-extraction, achieving 100% zero-liquid discharge, and neutralizing mineral brine responsibly.',
    atelierWhyWeInvested: 'Guarantees complete sovereign water independence for all our remote island, coastal cliff, and luxury beach sanctuaries without municipal reliance.',
    coreValues: ['Water Sovereignty', 'Zero Discharge', 'Energy Frugality', 'Aquifer Preservation'],
    
    problemStatement: 'Rapid coastal development depletes groundwater reserves, causing saltwater intrusion into freshwater wells and leaving estates vulnerable to droughts.',
    marketFriction: 'Traditional reverse-osmosis desalination systems consume excessive diesel power and discharge corrosive, concentrated chemical brine back into the sea.',
    howTheyAreSolving: 'Hyperion utilizes solar-coupled low-pressure graphene nanofiltration membranes with automated mineral crystallization for zero liquid discharge.',
    proprietaryTech: [
      'GrapheneFlux™ Low-Pressure Desalination Membranes',
      'SolarSteam™ Thermal Zero-Liquid-Discharge Crystallizer',
      'AquaPure™ Continuous Spectroscopic Water Purity Sensor'
    ],
    
    keyMetrics: [
      { label: 'Daily Water Produced', value: '4.5M Liters', subtext: 'WHO Mineral Drinking Standard' },
      { label: 'Energy Footprint', value: '1.8 kWh / m³', subtext: '60% Lower than Legacy Desalination' },
      { label: 'Zero-Discharge', value: '100% Closed', subtext: 'Zero Ocean Brine Dumping' },
      { label: 'Operating Plants', value: '16 Facilities', subtext: 'Coastal Estates & Resorts' }
    ],
    logo: '/placeholders/company-logo-9.svg',
    brandBadge: 'HWS',
    gallery: [
      { url: '/images/project-elihouse.jpg', caption: 'Concealed subterranean solar desalination facility', category: 'Facility' },
      { url: '/images/project-kns.jpg', caption: 'Water reclamation and mineral enrichment filtration tanks', category: 'Infrastructure' },
      { url: '/images/studio-09.jpg', caption: 'Chemical engineers testing spectroscopic water purity', category: 'Laboratory' }
    ]
  },
  {
    id: 'c10',
    name: 'Aegis Asset Tokenization',
    slug: 'aegis-tokenization',
    tickerOrCode: 'AAT-RWA',
    sector: 'Real World Asset (RWA) Fractionalization & Digital Custody',
    investedCapital: '₹155 Cr ($18.5M)',
    equityStake: '20.0%',
    foundedYear: '2023',
    headquarters: 'GIFT City, Gujarat & Singapore',
    valuation: '$160M USD',
    shortDescription: 'Regulated blockchain custody and fractional liquidity exchange for prime commercial real estate.',
    fullOverview: 'Aegis enables global accredited investors to trade fractional shares of Class-A commercial towers and trophy estates with institutional KYC/AML compliance.',
    thesis: 'Digital asset rails unlock global capital liquidity and reduce transaction friction for high-value real estate assets.',
    
    aboutUs: 'Aegis is a regulated fintech infrastructure provider bridging sovereign institutional real estate with global capital markets via compliant blockchain tokenization.',
    ethicsAndMission: 'Democratizing access to high-yielding prime real estate, ensuring bulletproof regulatory compliance, and eliminating predatory intermediary fees.',
    atelierWhyWeInvested: 'Provides Incredible Groups with an institutional digital capital channel to syndicate trophy real estate assets to accredited global family offices.',
    coreValues: ['Regulatory Compliance', 'Liquidity Precision', 'Cryptographic Custody', 'Institutional Transparency'],
    
    problemStatement: 'High-value trophy real estate transactions suffer 6-month closing timelines, massive 6-8% brokerage fees, and zero secondary market liquidity.',
    marketFriction: 'Retail and cross-border accredited investors cannot access fractional shares of Tier-1 commercial towers due to minimum ticket sizes exceeding $10M.',
    howTheyAreSolving: 'Aegis legalizes smart contract ownership tokens backed 1-to-1 by special purpose vehicles (SPVs) regulated under GIFT City IFSCA and MAS frameworks.',
    proprietaryTech: [
      'AegisToken™ ERC-3643 Permissioned RWA Smart Contracts',
      'SovereignVault™ Multi-Sig Institutional Custody Protocol',
      'Automated Rental Yield Distribution & Tax Withholding Engine'
    ],
    
    keyMetrics: [
      { label: 'Tokenized Asset Value', value: '$220M USD', subtext: 'Across 4 Commercial Superstructures' },
      { label: 'Secondary Volume / Mo', value: '$18M USD', subtext: 'Instant 24/7 Liquidity Settlement' },
      { label: 'Global Investors', value: '12,000+ Users', subtext: 'Verified Across 48 Jurisdictions' },
      { label: 'Distribution Yield', value: '8.4% Net', subtext: 'Quarterly Automated USDC/INR Dividends' }
    ],
    logo: '/placeholders/company-logo-10.svg',
    brandBadge: 'AAT',
    gallery: [
      { url: '/images/project-bolshevik.jpg', caption: 'Tokenized Grade-A institutional financial tower in GIFT City', category: 'Asset' },
      { url: '/images/project-vision.jpg', caption: 'Luxury coastal private estate fractionalized on Aegis', category: 'Tokenized Estate' },
      { url: '/images/studio-10.jpg', caption: 'Cryptographic security engineers verifying smart contract audits', category: 'FinTech' }
    ]
  }
];
