export interface StudioBrand {
  name: string;
  subname: string;
  founderName: string;
  founderRoles: string;
  founderQuoteLead: string;
  founderQuoteTail: string;
  founderBio: string[];
  email: string;
  tagline: string;
  heroPills: string[];
  location: string;
}

export interface ProjectItem {
  id: string;
  column: 1 | 2 | 3 | 4;
  title: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  secondaryColor: string;
  bgTone: 'dark' | 'light' | 'warm' | 'editorial';
  mockupType:
    | 'fashion'
    | 'saas'
    | 'editorial'
    | 'ai'
    | 'travel'
    | 'ecommerce'
    | 'architecture'
    | 'agency'
    | 'cinema'
    | 'brand';
  year: string;
  aspectClass: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
}

export interface ServiceRow {
  index: string;
  title: string;
  lead: string;
  description: string;
  chips: { label: string; iconName: string }[];
  previewTitle: string;
  previewSubtitle: string;
  previewType: 'design' | 'development';
}

export interface ServiceCard {
  id: string;
  title: string;
  lead: string;
  description: string;
  chips: string[];
  extraCount: string;
  linkedProjectIds: string[];
  badgeLabel: string;
  visualType: 'ecommerce' | 'interactive3d' | 'brandkit' | 'apps' | 'ai' | 'strategy';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AgencyCallout {
  index: string;
  quote: string;
  sublabel: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export const STUDIO_BRAND: StudioBrand = {
  name: 'Zero One',
  subname: 'CREATIVE STUDIOS',
  founderName: 'Sathya',
  founderRoles: 'FOUNDER · PRODUCT DESIGNER · AI & FULL-STACK ENGINEER',
  founderQuoteLead: 'Great design doesn’t just look different.',
  founderQuoteTail: 'It makes people experience something differently.”',
  founderBio: [
    'Zero One Creative Studios started from a simple obsession: the web feels crowded with identical templates, yet the best brands deserve digital worlds engineered from zero.',
    'Combining product design, interactive engineering, and applied AI workflows, Sathya partners directly with founders and teams to transform complex ideas into intuitive, unmistakable experiences.',
    'Every build is designed for real human clarity first — and measurable business momentum second.',
  ],
  email: 'hello@zeroonestudio.pro',
  tagline: 'Digital experiences, built around you.',
  heroPills: [
    'Simple for people. Powerful for business.',
    'We make complex things feel simple.',
    'Digital experiences, built around you.',
  ],
  location: 'Global · Remote Studio',
};

export const DISCIPLINES = [
  'Web Design',
  'Development',
  'E-commerce',
  'Interactive',
  'Branding',
  'Apps',
  'AI',
];

export const PROJECTS: ProjectItem[] = [
  // Column 1
  {
    id: 'siaara',
    column: 1,
    title: 'SIAARA By S&A',
    category: 'Handcrafted Heritage E-commerce',
    tagline: 'Editorial textile storytelling & tactile shopping.',
    description:
      'A bespoke digital flagship for handcrafted artisan sarees, pairing museum-grade fabric macro photography with effortless multi-currency checkout.',
    challenge:
      'Translate the tactile luxury of handloom silk into a fast mobile shopping flow without overwhelming buyers with noisy e-commerce clutter.',
    solution:
      'Designed an editorial lookbook grid with instant weave-detail zoom, drape motion previews, and a 2-step slide-out cart drawer.',
    deliverables: ['E-commerce Strategy', 'Editorial UI/UX', 'Custom Storefront', 'Motion System'],
    metrics: [
      { label: 'Conversion Lift', value: '+44%' },
      { label: 'Avg. Session', value: '4m 12s' },
      { label: 'Mobile Speed', value: '99/100' },
    ],
    accentColor: '#d9b589',
    secondaryColor: '#2a1d14',
    bgTone: 'warm',
    mockupType: 'fashion',
    year: '2026',
    aspectClass: 'aspect-[4/5]',
    image: '/images/projects/siaara.jpg',
    imageAlt:
      'Macro luxury editorial drapery of handcrafted espresso-bronze and antique gold zari silk saree fabric',
  },
  {
    id: 'tidings',
    column: 1,
    title: 'Tidings',
    category: 'Chat-Commerce SaaS',
    tagline: 'Conversations that convert in real time.',
    description:
      'Interactive marketing site and live product simulator for a conversational commerce platform built for modern retail brands.',
    challenge:
      'Demonstrate live message-to-checkout automation in the first 5 seconds of landing without requiring users to sign up for a demo.',
    solution:
      'Built an interactive scroll-driven chat simulator directly inside the hero alongside crisp metric storytelling.',
    deliverables: ['Product Positioning', 'Interactive Demo', 'Design System', 'React Build'],
    metrics: [
      { label: 'Demo Signups', value: '3.1x' },
      { label: 'Bounce Drop', value: '-38%' },
      { label: 'Lighthouse', value: '98/100' },
    ],
    accentColor: '#fb2629',
    secondaryColor: '#141414',
    bgTone: 'dark',
    mockupType: 'saas',
    year: '2026',
    aspectClass: 'aspect-[4/4.2]',
    image: '/images/projects/tidings.jpg',
    imageAlt:
      'Frosted obsidian glass conversational cards edged with luminous crimson rim lighting',
  },
  {
    id: 'hidden-stories',
    column: 1,
    title: 'Hidden Stories',
    category: 'Boutique Stays Platform',
    tagline: 'Short-stay architectural homes curated by mood.',
    description:
      'Hospitality booking experience for design-forward private residences, emphasizing spatial atmosphere and transparent date availability.',
    challenge:
      'Stand apart from generic listing marketplaces by making each property feel like an editorial magazine spread.',
    solution:
      'Created full-bleed architectural cards with live ambient lighting filters and instant direct booking flows.',
    deliverables: ['Booking UX', 'Brand Identity', 'Custom Web App', 'Search Filtering'],
    metrics: [
      { label: 'Direct Bookings', value: '+62%' },
      { label: 'Repeat Guests', value: '41%' },
      { label: 'Load Time', value: '0.8s' },
    ],
    accentColor: '#c7a47e',
    secondaryColor: '#1c1917',
    bgTone: 'warm',
    mockupType: 'architecture',
    year: '2025',
    aspectClass: 'aspect-[4/5]',
    image: '/images/projects/hidden-stories.jpg',
    imageAlt:
      'Minimalist concrete and travertine desert villa archway bathed in warm golden late-afternoon shadows',
  },
  {
    id: 'aivinci',
    column: 1,
    title: 'Aivinci Studio',
    category: 'AI Creative & Tech Studio',
    tagline: 'Where generative intelligence meets human taste.',
    description:
      'High-contrast dark launchpad for an applied AI creative lab showcasing automated pipelines and bespoke model interfaces.',
    challenge:
      'Make enterprise AI capabilities feel approachable, artistic, and grounded rather than cold sci-fi clichés.',
    solution:
      'Crafted tactile node-graph animations, dark glass cards, and interactive workflow sandboxes.',
    deliverables: ['Creative Direction', 'AI UX Patterns', 'WebGL-Free 3D', 'Frontend Engineering'],
    metrics: [
      { label: 'Inbound Leads', value: '+115%' },
      { label: 'Partner Demos', value: '85+' },
      { label: 'FPS Smoothness', value: '60fps' },
    ],
    accentColor: '#f75817',
    secondaryColor: '#0d0d0d',
    bgTone: 'dark',
    mockupType: 'ai',
    year: '2026',
    aspectClass: 'aspect-[4/4.6]',
    image: '/images/projects/aivinci.jpg',
    imageAlt:
      'Sculptural obsidian and glass fluid ribbons illuminated by molten amber-orange light',
  },

  // Column 2
  {
    id: 'aeroskys',
    column: 2,
    title: 'AeroSkys',
    category: 'Next-Gen Travel Booking',
    tagline: 'Your trip, booked in a few quiet clicks.',
    description:
      'Stripped-back flight and retreat booking platform engineered to eliminate dark patterns, popups, and choice overload.',
    challenge:
      'Travel search portals are notoriously chaotic; AeroSkys needed serene clarity across multi-city itineraries.',
    solution:
      'Unified search, cabin previews, and fare comparison into a single calm canvas with fluid spatial transitions.',
    deliverables: ['UX Architecture', 'Search Interface', 'Design Tokens', 'Production Web App'],
    metrics: [
      { label: 'Checkout Speed', value: '42s' },
      { label: 'Task Success', value: '96%' },
      { label: 'NPS Score', value: '74' },
    ],
    accentColor: '#38bdf8',
    secondaryColor: '#0c2d48',
    bgTone: 'light',
    mockupType: 'travel',
    year: '2026',
    aspectClass: 'aspect-[4/4.3]',
    image: '/images/projects/aeroskys.jpg',
    imageAlt:
      'Serene aerial view of a white aircraft wingtip gliding above sunlit clouds beneath a pale ice-blue sky',
  },
  {
    id: 'vantline',
    column: 2,
    title: 'Vantline',
    category: 'Decision-Intelligence SaaS',
    tagline: 'Operational clarity for fast-moving teams.',
    description:
      'Executive telemetry workspace and product showcase turning fragmented SaaS analytics into crisp narrative decisions.',
    challenge:
      'Present dense multi-source KPI engines clearly for non-technical founders and operators.',
    solution:
      'Built modular bento telemetry blocks with scroll-revealed insights and live scenario toggles.',
    deliverables: ['SaaS Design System', 'Dashboard UI', 'Marketing Site', 'Interactive Charts'],
    metrics: [
      { label: 'Trial-to-Paid', value: '28%' },
      { label: 'Time to Insight', value: '-60%' },
      { label: 'Teams Onboarded', value: '1,200+' },
    ],
    accentColor: '#a3e635',
    secondaryColor: '#111827',
    bgTone: 'dark',
    mockupType: 'saas',
    year: '2026',
    aspectClass: 'aspect-[4/5.1]',
    image: '/images/projects/vantline.jpg',
    imageAlt:
      'Staggered smoked-glass monoliths and matte-black aluminum fins illuminated by sharp acid-lime edge lighting',
  },
  {
    id: 'livecv',
    column: 2,
    title: 'LiveCV',
    category: 'Interactive Career Platform',
    tagline: 'Resumes that behave like live product portfolios.',
    description:
      'A web-native talent identity platform replacing static PDFs with verifiable interactive case-study profiles.',
    challenge:
      'Give creatives and engineers effortless customization while guaranteeing razor-sharp typography on every screen.',
    solution:
      'Engineered an adaptive grid engine with instant light/dark inversion and one-click recruiter view links.',
    deliverables: ['Product Design', 'Editor Experience', 'Typography System', 'Full-Stack Build'],
    metrics: [
      { label: 'Profiles Created', value: '18K+' },
      { label: 'Recruiter Replies', value: '2.4x' },
      { label: 'Render Speed', value: '0.4s' },
    ],
    accentColor: '#f4f4f2',
    secondaryColor: '#18181b',
    bgTone: 'editorial',
    mockupType: 'editorial',
    year: '2025',
    aspectClass: 'aspect-[4/4.5]',
    image: '/images/projects/livecv.jpg',
    imageAlt:
      'Monochrome editorial still-life of matte-black and ivory portfolio cards with brushed steel pen and glass prism on dark slate',
  },
  {
    id: 'vesper',
    column: 2,
    title: 'Vesper',
    category: 'Architectural Lighting',
    tagline: 'Sculpting shadow, warmth, and spatial calm.',
    description:
      'Interactive showroom for sculptural architectural luminaires where visitors dim and angle light across virtual rooms.',
    challenge:
      'Convey real-world Kelvin warmth and beam diffusion inside a browser without heavy downloads.',
    solution:
      'Used layered radial lighting gradients and scroll-scrubbed room mood transitions at 60fps.',
    deliverables: ['Interactive Showroom', 'Art Direction', 'Custom Controls', 'Brand Kit'],
    metrics: [
      { label: 'Spec Inquiries', value: '+88%' },
      { label: 'Dwell Time', value: '5m 04s' },
      { label: 'Trade Signups', value: '420+' },
    ],
    accentColor: '#fb923c',
    secondaryColor: '#17120e',
    bgTone: 'dark',
    mockupType: 'architecture',
    year: '2026',
    aspectClass: 'aspect-[4/4.8]',
    image: '/images/projects/vesper.jpg',
    imageAlt:
      'Sculptural curving architectural gallery corridor illuminated by warm amber cove lighting and soft shadows',
  },

  // Column 3
  {
    id: 'san-media',
    column: 3,
    title: 'SAN Media',
    category: 'Digital Growth Agency',
    tagline: 'Bold kinetic typography for performance storytellers.',
    description:
      'Rebrand and flagship digital home for a media house running global creator campaigns and high-converting brand films.',
    challenge:
      'Showcase high-volume campaign deliverables while maintaining disciplined minimalist restraint.',
    solution:
      'Created an expandable reel grid with instant case metrics and bold Swiss editorial pacing.',
    deliverables: ['Brand Refresh', 'Web Design', 'Case Study Architecture', 'Motion Choreography'],
    metrics: [
      { label: 'Retainer Deals', value: '+55%' },
      { label: 'Page Views', value: '3.2x' },
      { label: 'Core Web Vitals', value: '100%' },
    ],
    accentColor: '#fb2629',
    secondaryColor: '#0a0a0a',
    bgTone: 'dark',
    mockupType: 'agency',
    year: '2025',
    aspectClass: 'aspect-[4/4.8]',
    image: '/images/projects/san-media.jpg',
    imageAlt:
      'Matte-black anamorphic cinema camera lens and matte-box rim-lit with electric crimson light in a dark studio',
  },
  {
    id: 'emberpost',
    column: 3,
    title: 'Emberpost',
    category: 'People-First Email SaaS',
    tagline: 'Editorial newsletters built for thoughtful readers.',
    description:
      'Clean, distraction-free publishing platform and landing page honoring long-form digital craftsmanship.',
    challenge:
      'Differentiate from cluttered creator-marketing tools by foregrounding typography and reader focus.',
    solution:
      'Built an interactive live composer preview on the homepage with warm paper-and-ink visual themes.',
    deliverables: ['Brand Positioning', 'UI Design', 'Live Composer Preview', 'React Frontend'],
    metrics: [
      { label: 'Creator Waitlist', value: '12K+' },
      { label: 'Publish Time', value: '-45%' },
      { label: 'Read Completion', value: '82%' },
    ],
    accentColor: '#f75817',
    secondaryColor: '#faf7f2',
    bgTone: 'light',
    mockupType: 'editorial',
    year: '2026',
    aspectClass: 'aspect-[4/4.1]',
    image: '/images/projects/emberpost.jpg',
    imageAlt:
      'Folded artisanal cotton stationery on cream limestone with a burnt-orange woven ribbon and morning window shadows',
  },
  {
    id: 'vyrn',
    column: 3,
    title: 'VYRN',
    category: 'Editorial Fashion E-commerce',
    tagline: 'Kinetic streetwear drops engineered for culture.',
    description:
      'Featured flagship launch film and spatial e-commerce experience pairing lookbook motion with rapid drop checkouts.',
    challenge:
      'Handle high-concurrency product drops while delivering a cinematic editorial narrative.',
    solution:
      'Combined edge-cached product grids with a 3D perspective campaign stage and micro-animated size selectors.',
    deliverables: ['Creative Direction', 'E-commerce UX', '3D Stage Experience', 'Custom Checkout'],
    metrics: [
      { label: 'Drop Sellout', value: '14 mins' },
      { label: 'Cart Completion', value: '79%' },
      { label: 'Social Shares', value: '48K+' },
    ],
    accentColor: '#e5e5e5',
    secondaryColor: '#050505',
    bgTone: 'dark',
    mockupType: 'fashion',
    year: '2026',
    aspectClass: 'aspect-[4/5.2]',
    image: '/images/projects/vyrn.jpg',
    imageAlt:
      'High-contrast monochrome studio lookbook editorial of an oversized matte-black architectural streetwear coat in motion',
    imagePosition: 'object-[50%_20%]',
  },
  {
    id: 'finsmith',
    column: 3,
    title: 'Finsmith',
    category: 'Brand Identity & Design System',
    tagline: 'Precision visual systems for modern fintech founders.',
    description:
      'Complete brand kit, geometric mark, typographic hierarchy, and interactive web showcase for a financial craft collective.',
    challenge:
      'Bridge institutional trust with progressive studio aesthetics.',
    solution:
      'Developed an adaptable Swiss grid language, interactive token docs, and restrained motion principles.',
    deliverables: ['Logo & Brand Kit', 'Design Tokens', 'Guidelines Portal', 'Flagship Site'],
    metrics: [
      { label: 'Enterprise Trust', value: '+70%' },
      { label: 'Design Velocity', value: '2.8x' },
      { label: 'System Adoption', value: '100%' },
    ],
    accentColor: '#10b981',
    secondaryColor: '#0b1311',
    bgTone: 'light',
    mockupType: 'brand',
    year: '2025',
    aspectClass: 'aspect-[4/4.4]',
    image: '/images/projects/finsmith.jpg',
    imageAlt:
      'Swiss minimalist still-life of matte-white geometric blocks, blank cotton cards, silver bar, and emerald-green anodized cube',
  },

  // Column 4
  {
    id: 'sagewell',
    column: 4,
    title: 'Sagewell',
    category: 'AI Reasoning Workspace',
    tagline: 'The model that thinks before it speaks.',
    description:
      'Clean light-mode AI product interface and launch site visualizing multi-step reasoning chains with calm transparency.',
    challenge:
      'Present complex agentic reasoning steps without overwhelming users in walls of raw debug logs.',
    solution:
      'Designed collapsible reasoning cards, live citation highlights, and serene whitespace balance.',
    deliverables: ['AI Product Design', 'Interactive Sandbox', 'Brand Identity', 'Frontend Build'],
    metrics: [
      { label: 'Day-1 Signups', value: '9,400' },
      { label: 'Retention W4', value: '64%' },
      { label: 'Latency Felt', value: '-50%' },
    ],
    accentColor: '#18181b',
    secondaryColor: '#f4f4f2',
    bgTone: 'light',
    mockupType: 'ai',
    year: '2026',
    aspectClass: 'aspect-[4/4.7]',
    image: '/images/projects/sagewell.jpg',
    imageAlt:
      'High-key studio sculpture of crystal optical glass prisms, polished obsidian sphere, and frosted alabaster cube with soft light caustics',
  },
  {
    id: 'vynk-network',
    column: 4,
    title: 'Vynk Network',
    category: 'Global Travel eSIM App',
    tagline: 'Instant borderless connectivity across 190+ countries.',
    description:
      'Mobile-first web app and marketing platform enabling travelers to activate data plans in under 30 seconds.',
    challenge:
      'Simplify confusing roaming tiers and QR installation steps for stressed travelers at airports.',
    solution:
      'Built a 1-tap country matcher, transparent data calculator, and guided activation flow.',
    deliverables: ['Mobile Web App', 'Conversion UX', 'Visual Identity', 'Motion Graphics'],
    metrics: [
      { label: 'Activation Rate', value: '94%' },
      { label: 'Support Tickets', value: '-52%' },
      { label: 'Countries Live', value: '192' },
    ],
    accentColor: '#6366f1',
    secondaryColor: '#0f1024',
    bgTone: 'dark',
    mockupType: 'travel',
    year: '2026',
    aspectClass: 'aspect-[4/4.3]',
    image: '/images/projects/vynk-network.jpg',
    imageAlt:
      'Matte-black beveled eSIM microchip monolith suspended inside glowing indigo-violet orbital light rings',
  },
  {
    id: 'ines-morrow',
    column: 4,
    title: 'Ines Morrow',
    category: 'Film Editor Portfolio',
    tagline: 'Rhythm, cut, and silence translated to the browser.',
    description:
      'Minimalist cinema portfolio where scrolling scrubs frame-accurate film strips and director commentary.',
    challenge:
      'Showcase high-bitrate film reels instantly with zero jarring buffering or chrome clutter.',
    solution:
      'Engineered an ambient timeline scrubber with subtle timecode typography and instant screening rooms.',
    deliverables: ['Portfolio Architecture', 'Timeline Interaction', 'Typography', 'Performance'],
    metrics: [
      { label: 'Agency Bookings', value: '+90%' },
      { label: 'Reel Completion', value: '76%' },
      { label: 'First Paint', value: '0.5s' },
    ],
    accentColor: '#e11d48',
    secondaryColor: '#111111',
    bgTone: 'dark',
    mockupType: 'cinema',
    year: '2025',
    aspectClass: 'aspect-[4/4.9]',
    image: '/images/projects/ines-morrow.jpg',
    imageAlt:
      'Translucent 35mm celluloid film strips curling over a dark editing table with ruby-crimson anamorphic underglow',
  },
  {
    id: 'velora',
    column: 4,
    title: 'VELORA',
    category: 'Luxury Fragrance Showcase',
    tagline: 'Botanical alchemy framed in sculptural glass.',
    description:
      'Sensory e-commerce experience combining macro botanical visuals, scent-note layering, and bespoke gift wrapping.',
    challenge:
      'Help online shoppers intuitively feel fragrance notes without sampling in person.',
    solution:
      'Created an interactive scent-pyramid explorer paired with poetic micro-copy and clean cart flows.',
    deliverables: ['Sensory UX', 'E-commerce Design', 'Brand Storytelling', 'Custom Animations'],
    metrics: [
      { label: 'AOV Increase', value: '+34%' },
      { label: 'Gift Orders', value: '2.7x' },
      { label: 'Return Rate', value: '<2%' },
    ],
    accentColor: '#d4a373',
    secondaryColor: '#faf6f0',
    bgTone: 'warm',
    mockupType: 'ecommerce',
    year: '2026',
    aspectClass: 'aspect-[4/4.6]',
    image: '/images/projects/velora.jpg',
    imageAlt:
      'Sculptural smoked-glass luxury perfume flacon reflecting warm amber light against a dark moody stone backdrop',
  },
];

export const FEATURED_SERVICES: ServiceRow[] = [
  {
    index: '01',
    title: 'Website Design',
    lead: 'Make a great first impression.',
    description:
      'We design websites that look beautiful, feel intuitive and communicate your business clearly.',
    chips: [
      { label: 'UX Strategy', iconName: 'Compass' },
      { label: 'User Journeys', iconName: 'GitBranch' },
      { label: 'Wireframes', iconName: 'Layout' },
      { label: 'UI Design', iconName: 'Layers' },
      { label: 'Responsive Design', iconName: 'MonitorSmartphone' },
      { label: 'Prototyping', iconName: 'MousePointerClick' },
      { label: 'Design Systems', iconName: 'Grid' },
      { label: 'Interaction Design', iconName: 'Sparkles' },
    ],
    previewTitle: 'Conquer Your Days with Steady Mindfulness',
    previewSubtitle: 'MODU Studio · Editorial Product Design System',
    previewType: 'design',
  },
  {
    index: '02',
    title: 'Website Development',
    lead: 'From design to reality.',
    description:
      'We turn the design into a real, responsive and functional website engineered for speed, accessibility and scale.',
    chips: [
      { label: 'Business Websites', iconName: 'Globe' },
      { label: 'Corporate Websites', iconName: 'Building2' },
      { label: 'Landing Pages', iconName: 'Zap' },
      { label: 'CMS Websites', iconName: 'Database' },
      { label: 'Interactive Websites', iconName: 'Wand2' },
      { label: 'Web Applications', iconName: 'Cpu' },
    ],
    previewTitle: 'Clean Architecture · Sub-Second Loads',
    previewSubtitle: 'React · TypeScript · Motion · Edge Delivery',
    previewType: 'development',
  },
];

export const BENTO_SERVICES: ServiceCard[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce',
    lead: 'Make buying feel simple.',
    description:
      'From discovering a product to completing a purchase, we design every step of the experience.',
    chips: ['Product Pages', 'Shopping Experiences', 'Cart & Checkout'],
    extraCount: '+4',
    linkedProjectIds: ['siaara', 'vyrn'],
    badgeLabel: 'SIAARA · VYRN',
    visualType: 'ecommerce',
  },
  {
    id: 'interactive-3d',
    title: 'Interactive & 3D',
    lead: 'Don’t just show people. Let them experience it.',
    description:
      'We create digital experiences using motion, spatial choreography, interaction and 3D.',
    chips: ['Scroll animations', 'Interactive storytelling', 'Product interactions'],
    extraCount: '+3',
    linkedProjectIds: ['vesper'],
    badgeLabel: 'THE WORK',
    visualType: 'interactive3d',
  },
  {
    id: 'brand-kits',
    title: 'Brand Kits & Identity',
    lead: 'Your brand should feel consistent everywhere.',
    description:
      'We design your logo and build the brand kit around it — colors, typography, rules and templates.',
    chips: ['Logo Design', 'Brand Kits', 'Brand Guidelines'],
    extraCount: '+4',
    linkedProjectIds: ['finsmith'],
    badgeLabel: 'BRAND KIT',
    visualType: 'brandkit',
  },
  {
    id: 'apps-saas',
    title: 'Apps & SaaS',
    lead: 'Apps people actually want to use.',
    description:
      'We design and build web and mobile apps, from the first user flow to the working product: SaaS platforms, dashboards and tools.',
    chips: ['Mobile Apps', 'Web Apps', 'SaaS Platforms'],
    extraCount: '+4',
    linkedProjectIds: ['sagewell', 'vantline'],
    badgeLabel: 'SAGEWELL · VANTLINE',
    visualType: 'apps',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    lead: 'Make your business work smarter.',
    description:
      'Custom AI interfaces, intelligent assistants, and automated workflows tailored directly to your operations.',
    chips: ['AI Experiences', 'Workflow Automation', 'AI Interfaces'],
    extraCount: '+3',
    linkedProjectIds: ['aivinci'],
    badgeLabel: 'AIVINCI LAB',
    visualType: 'ai',
  },
  {
    id: 'digital-strategy',
    title: 'Digital Strategy',
    lead: 'Before we build, we think.',
    description:
      'Positioning, information architecture, and user research so every pixel drives a clear business outcome.',
    chips: ['Digital Positioning', 'Website Strategy', 'User Research'],
    extraCount: '+3',
    linkedProjectIds: ['san-media'],
    badgeLabel: 'THE WORK',
    visualType: 'strategy',
  },
];

export const BELIEVE_STATS = [
  { label: 'Community', from: '16K+', toNum: 25, suffix: 'K+', displayOnly: false },
  { label: 'Reach', from: '1.0M+', toNum: 2, suffix: 'M+', displayOnly: false },
  { label: 'Views Generated', from: 'Millions', toText: 'Millions', displayOnly: true },
  { label: 'Clients & Projects', from: 'Global', toText: 'Global', displayOnly: true },
];

export const AGENCY_CALLOUTS: AgencyCallout[] = [
  {
    index: '01',
    quote: "'NO UNNECESSARY LAYERS'",
    sublabel: 'WE COMMUNICATE. WE SHARE PROGRESS.',
    position: 'top-left',
  },
  {
    index: '02',
    quote: "'NO CONFUSING LANGUAGE'",
    sublabel: 'COMMUNICATE YOUR BUSINESS CLEARLY.',
    position: 'top-right',
  },
  {
    index: '03',
    quote: "'NO COPY-PASTE SOLUTIONS'",
    sublabel: 'EVERY PROJECT STARTS FROM ZERO.',
    position: 'bottom-left',
  },
  {
    index: '04',
    quote: "'JUST GOOD THINKING'",
    sublabel: 'GOOD DESIGN AND TECHNOLOGY THAT SERVES A PURPOSE.',
    position: 'bottom-right',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What does Zero One Creative Studios do?',
    answer:
      'Zero One Creative Studios is a creative website design, product engineering, and AI studio. We create interactive, thoughtful and tailor-made websites, apps and digital experiences for businesses that want to be different.',
  },
  {
    id: 'faq-2',
    question: 'I want a website for my business. Where do I start?',
    answer:
      'Start by clicking "Start a Project" and sharing whatever you already have — even if it is just a rough idea, an old link, or a single sentence. We will set up a focused conversation to clarify goals, scope, and timeline.',
  },
  {
    id: 'faq-3',
    question: 'Where do you work?',
    answer:
      'We operate globally as a remote-first creative studio, partnering smoothly with founders, startups, and established brands across North America, Europe, the Middle East, and Asia.',
  },
  {
    id: 'faq-4',
    question: 'Do I need a perfect brief before we talk?',
    answer:
      'Not at all. Half of our best projects started from an unpolished voice note or a napkin sketch. Helping you clarify the strategy and structure is part of our craft.',
  },
  {
    id: 'faq-5',
    question: 'Do you offer fixed packages?',
    answer:
      'No — every business has different goals, audiences, and technical constraints. Instead of forcing you into rigid bronze/silver/gold tiers, we scope exactly what makes sense for your launch.',
  },
  {
    id: 'faq-6',
    question: 'What can you build for us?',
    answer:
      'Custom marketing & brand websites, interactive 3D/scroll storytelling sites, high-converting e-commerce storefronts, SaaS web apps, mobile interfaces, AI workflows, and complete brand identity kits.',
  },
  {
    id: 'faq-7',
    question: 'Do you build e-commerce websites?',
    answer:
      'Yes. From tactile lookbook storefronts like SIAARA and VYRN to high-speed custom cart and checkout journeys, we design every touchpoint of the buying experience.',
  },
  {
    id: 'faq-8',
    question: 'Can you build an interactive or 3D website?',
    answer:
      'Yes. We craft buttery 60fps scroll choreography, CSS/SVG spatial perspective stages, interactive product demos, and micro-interactions engineered without bloated page weights.',
  },
  {
    id: 'faq-9',
    question: 'Do you design SaaS products and landing pages?',
    answer:
      'Yes — both the marketing engine that explains your value clearly and the actual product UI, dashboards, onboarding flows, and design systems inside your application.',
  },
  {
    id: 'faq-10',
    question: 'Will my website be custom, or a template?',
    answer:
      '100% custom. Every project starts from zero around your story, audience psychology, and visual identity. We never resell or recycle templates.',
  },
  {
    id: 'faq-11',
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We audit what is currently holding your site back — positioning, UX friction, outdated visuals, or sluggish performance — and rebuild it from the ground up.',
  },
  {
    id: 'faq-12',
    question: 'Do you work with startups and new businesses?',
    answer:
      'Frequently. Whether you are pre-seed launching a category-defining MVP or scaling post-Series A, we help you look and feel undeniable from day one.',
  },
  {
    id: 'faq-13',
    question: 'How does a project work?',
    answer:
      'We move through four transparent stages: 1) Listen & Positioning, 2) Architecture & Interactive Design, 3) Clean Engineering & Motion Polish, and 4) QA, Launch & Handover — with direct weekly previews.',
  },
  {
    id: 'faq-14',
    question: 'What happens after launch?',
    answer:
      'You own everything cleanly, backed by thorough documentation and training. We also remain available for ongoing iteration retainers, new feature launches, and optimization.',
  },
  {
    id: 'faq-15',
    question: 'How involved will we be?',
    answer:
      'You collaborate directly with the founder and builders — no layers of account managers. We share live staging links early so feedback is fast, natural, and collaborative.',
  },
  {
    id: 'faq-16',
    question: 'What is the philosophy behind the studio?',
    answer:
      'Simple for people, powerful for business. Strip away unnecessary noise until every screen feels obvious, memorable, and unmistakably yours.',
  },
];
