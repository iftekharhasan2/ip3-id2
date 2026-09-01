export interface NavPromoItem {
  eyebrow: string;
  title: string;
  image: string;
  href: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  sectionId?: string;
  desc?: string;
  page?: 'home' | 'about' | 'approach' | 'focus' | 'services';
}

export interface NavColumnItem {
  title?: string;
  links: NavLinkItem[];
}

export interface PrimaryNavItem {
  id: string;
  label: string;
  href: string;
  sectionId: string;
  page?: 'home' | 'about' | 'approach' | 'focus' | 'services';
  links: NavLinkItem[];
  columns: NavColumnItem[];
  promos: NavPromoItem[];
}

export const primaryNav: PrimaryNavItem[] = [
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    sectionId: '#overview',
    page: 'about',
    links: [
      { label: 'Overview', href: '/about#overview', sectionId: '#overview', page: 'about', desc: 'Mission, institutional heritage, ecosystem & four strategic fronts' },
      { label: 'IP3 People', href: '/about#people', sectionId: '#people', page: 'about', desc: 'Global faculty of economists, researchers, fellows & executive leadership' },
      { label: 'Approach', href: '/about#approach', sectionId: '#approach', page: 'about', desc: '6-stage delivery lifecycle from complexity & evidence to sustainable handover' },
      { label: 'Principles', href: '/about#principles', sectionId: '#principles', page: 'about', desc: 'Standards of evidence, operational realism & sovereign governance ethics' },
    ],
    columns: [
      {
        title: 'About Sub-Pages',
        links: [
          { label: '01. Overview', href: '/about#overview', sectionId: '#overview', page: 'about' },
          { label: '02. IP3 People', href: '/about#people', sectionId: '#people', page: 'about' },
          { label: '03. Approach', href: '/about#approach', sectionId: '#approach', page: 'about' },
          { label: '04. Principles', href: '/about#principles', sectionId: '#principles', page: 'about' },
        ],
      },
      {
        title: 'Institutional Governance',
        links: [
          { label: 'Mission & Operating Model', href: '/about#overview', sectionId: '#overview', page: 'about' },
          { label: 'Faculty & Global Fellows', href: '/about#people', sectionId: '#people', page: 'about' },
          { label: 'Delivery Lifecycle', href: '/about#approach', sectionId: '#approach', page: 'about' },
          { label: 'Standards of Evidence', href: '/about#principles', sectionId: '#principles', page: 'about' },
        ],
      },
    ],
    promos: [
      {
        eyebrow: 'IP3 PEOPLE',
        title: 'Meet our global faculty of economists, researchers, and policy practitioners',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
        href: '/about#people',
      },
      {
        eyebrow: 'OUR APPROACH',
        title: 'The 6-stage lifecycle from systemic complexity to sustainable sovereign delivery',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        href: '/about#approach',
      },
    ],
  },
  {
    id: 'focus-areas',
    label: 'Focus Areas',
    href: '/focus',
    sectionId: '#focus-areas',
    page: 'focus',
    links: [
      { label: 'Climate Action & ESG Strategy', href: '/focus#focus-branch-0', sectionId: '#focus-branch-0', page: 'focus', desc: 'Decarbonization audits, circular economy & industrial ESG roadmaps' },
      { label: 'Educational Innovation & Pedagogy', href: '/focus#focus-branch-1', sectionId: '#focus-branch-1', page: 'focus', desc: 'Digital learning platforms, ADB secondary education & curriculum reform' },
      { label: 'Data & Digital Governance', href: '/focus#focus-branch-2', sectionId: '#focus-branch-2', page: 'focus', desc: 'Future-ready governance, municipal capacity (BMDF) & data ecosystems' },
    ],
    columns: [
      {
        title: 'Strategic Priorities',
        links: [
          { label: 'Decarbonization Pathways', href: '/focus#focus-branch-0', sectionId: '#focus-branch-0', page: 'focus' },
          { label: 'Green Bond Issuance & Audits', href: '/focus#focus-branch-0', sectionId: '#focus-branch-0', page: 'focus' },
          { label: 'Smart Grid & Clean Energy', href: '/focus#focus-branch-0', sectionId: '#focus-branch-0', page: 'focus' },
        ],
      },
      {
        title: 'Human & Digital Systems',
        links: [
          { label: 'Blended Learning Platforms', href: '/focus#focus-branch-1', sectionId: '#focus-branch-1', page: 'focus' },
          { label: 'Institutional Diagnostics', href: '/focus#focus-branch-2', sectionId: '#focus-branch-2', page: 'focus' },
          { label: 'Public Financial Management', href: '/focus#focus-branch-2', sectionId: '#focus-branch-2', page: 'focus' },
        ],
      },
    ],
    promos: [
      {
        eyebrow: 'CASE STUDY',
        title: 'Mobilizing $140M in Green Municipal Bonds with BMDF',
        image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800',
        href: '/focus',
      },
      {
        eyebrow: 'INNOVATION SPOTLIGHT',
        title: 'Adaptive Multi-Domain Systems for Emerging Economies',
        image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800',
        href: '/focus',
      },
    ],
  },
  {
    id: 'services',
    label: 'Our Services',
    href: '/services',
    sectionId: '#services',
    page: 'services',
    links: [
      { label: 'Macro & Sector Policy Advisory', href: '/services#macro-policy', sectionId: '#macro-policy', page: 'services', desc: 'Fiscal frameworks, industrial policy & sovereign debt modeling' },
      { label: 'MERLA Monitoring & Evaluation', href: '/services#merla', sectionId: '#merla', page: 'services', desc: 'Impact measurement, telemetry dashboards & adaptive learning' },
      { label: 'CAPI & Field Survey Architecture', href: '/services#capi-surveys', sectionId: '#capi-surveys', page: 'services', desc: 'Large-scale socio-economic censuses & high-frequency data pipelines' },
      { label: 'Digital Transformation & Civic Systems', href: '/services#digital-systems', sectionId: '#digital-systems', page: 'services', desc: 'PFM modernization, civic registries & municipal automation' },
      { label: 'Institutional Capacity & Executive Training', href: '/services#capacity-building', sectionId: '#capacity-building', page: 'services', desc: 'Ministerial crisis simulations & leadership fellowships' },
    ],
    columns: [
      {
        title: 'Analytical & Advisory Practices',
        links: [
          { label: 'Macro & Sector Policy Advisory', href: '/services#macro-policy', sectionId: '#macro-policy', page: 'services' },
          { label: 'MERLA Monitoring & Evaluation', href: '/services#merla', sectionId: '#merla', page: 'services' },
          { label: 'CAPI & Field Survey Architecture', href: '/services#capi-surveys', sectionId: '#capi-surveys', page: 'services' },
        ],
      },
      {
        title: 'Systems & Human Capital',
        links: [
          { label: 'Digital Transformation & Civic Systems', href: '/services#digital-systems', sectionId: '#digital-systems', page: 'services' },
          { label: 'Institutional Capacity & Training', href: '/services#capacity-building', sectionId: '#capacity-building', page: 'services' },
          { label: 'All 5 Practice Deliverables', href: '/services', sectionId: '#services', page: 'services' },
        ],
      },
    ],
    promos: [
      {
        eyebrow: 'PRACTICE 01 • MACRO ADVISORY',
        title: 'Sovereign Macro-Fiscal Realignment and DSGE Modeling Suites',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
        href: '/services#macro-policy',
      },
      {
        eyebrow: 'PRACTICE 03 • FIELD CAPI',
        title: 'High-Frequency CAPI Field Survey Architecture in 12 Regions',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
        href: '/services#capi-surveys',
      },
    ],
  },
  {
    id: 'approach',
    label: 'Approch',
    href: '#research',
    sectionId: '#trailer',
    page: 'approach',
    links: [
      { label: 'The Policy Shift Paradigm (Film)', href: '#trailer', sectionId: '#trailer', desc: 'Interactive visual exploration of macroeconomic systemic shifts' },
      { label: 'Global Knowledge & Publications', href: '/approach', page: 'approach', desc: 'Peer-reviewed working papers, briefs, and empirical datasets' },
      { label: 'Empirical Policy Working Papers', href: '/approach', page: 'approach', desc: 'Deep-dive analytical findings for multilateral institutions' },
      { label: 'Executive Briefings & Podcasts', href: '#trailer', sectionId: '#trailer', desc: 'Thought leadership and foresight for policy makers' },
    ],
    columns: [
      {
        title: 'Publications & Series',
        links: [
          { label: 'Sovereign Transition White Papers', href: '/approach', page: 'approach' },
          { label: 'Regional Economic Outlooks', href: '/approach', page: 'approach' },
          { label: 'Public Sector Tech Disruption', href: '/approach', page: 'approach' },
          { label: 'Sustainable Cities Monograph', href: '/approach', page: 'approach' },
        ],
      },
      {
        title: 'Data & Insights',
        links: [
          { label: 'CAPI Open Survey Instruments', href: '#services', sectionId: '#services' },
          { label: 'Macroeconomic Scenario Models', href: '#trailer', sectionId: '#trailer' },
          { label: 'Impact Evaluation Toolkits', href: '#services', sectionId: '#services' },
          { label: 'Quarterly Policy Digest', href: '#connect', sectionId: '#connect' },
        ],
      },
    ],
    promos: [
      {
        eyebrow: 'FEATURE FILM',
        title: 'The Policy Shift: Navigating Sovereign Transformation',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
        href: '#trailer',
      },
      {
        eyebrow: 'WHITE PAPER',
        title: 'Municipal Debt Architecture: From Development Aid to Investment Grade',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        href: '/approach',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Navbar chrome (brand, CTA, top bar) — CMS controlled                */
/* ------------------------------------------------------------------ */

export interface NavbarBrandConfig {
  /** Short mark shown inside the coloured logo tile, e.g. "IP3". */
  badgeText: string;
  /** Wordmark next to the logo tile. */
  name: string;
  /** Small line under the wordmark. */
  tagline: string;
  /** Green "live" dot on the logo tile. */
  showStatusDot: boolean;
  /** Optional image URL; replaces the badge tile when set. */
  logoImage?: string;
}

export interface NavbarCtaConfig {
  enabled: boolean;
  label: string;
  /** Section id to scroll to, e.g. "#contact-advisory". */
  targetId: string;
}

export interface NavbarTopBarConfig {
  enabled: boolean;
  showEmail: boolean;
  showPhone: boolean;
  showLocation: boolean;
  /** Pulsing-dot label on the right, e.g. "Global Policy Advisory Desk". */
  statusLabel: string;
}

export interface NavbarConfig {
  brand: NavbarBrandConfig;
  cta: NavbarCtaConfig;
  topBar: NavbarTopBarConfig;
  searchEnabled: boolean;
  searchPlaceholder: string;
  /** Badge in the top-right of every mega menu panel. */
  megaMenuBadge: string;
  skipLinkLabel: string;
}

export const defaultNavbarConfig: NavbarConfig = {
  brand: {
    badgeText: 'IP3',
    name: 'IP3 AGRISCIENCE',
    tagline: 'Precision Research Farm',
    showStatusDot: true,
    logoImage: '',
  },
  cta: {
    enabled: true,
    label: 'Field Trials & Contact',
    targetId: '#contact-advisory',
  },
  topBar: {
    enabled: true,
    showEmail: true,
    showPhone: true,
    showLocation: true,
    statusLabel: 'Research Farm Operations Active',
  },
  searchEnabled: true,
  searchPlaceholder: 'Search field trials, soil science & research data...',
  megaMenuBadge: 'IP3 AGRISCIENCE',
  skipLinkLabel: 'Skip to main content',
};

