export interface SlideItem {
  id: number;
  name: string;
  title: string;
  subtitle?: string;
  bgImage: string;
  videoUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  accentColor?: string;
  titleColor?: string;
  subtitleColor?: string;
  ctaBgColor?: string;
  ctaTextColor?: string;
  tagColor?: string;
  overlayTint?: 'light' | 'dark' | 'gradient' | 'glass' | 'none';
}

export interface SiteThemeConfig {
  primaryColor: string;
  accentColor: string;
  heroTitleColor: string;
  heroSubtitleColor: string;
  heroTagColor: string;
  heroButtonBgColor: string;
  heroButtonTextColor: string;
  heroOverlayStyle: 'light' | 'dark' | 'gradient' | 'glass' | 'none';
  defaultColorMode?: 'dark' | 'light';
}

export interface SliderSettings {
  autoplay: boolean;
  autoplayInterval: number; // in milliseconds
  transitionSpeed: number; // in milliseconds
  showNavigation: boolean;
  showIndicators: boolean;
  zoomEffect: boolean;
}

export interface ExecutiveProfile {
  name: string;
  title: string;
  organization: string;
  shortOrg: string;
  email: string;
  image: string;
  headline: string;
  paragraphs: string[];
  closingStatement: string;
}

export interface ImpactPillar {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  keyMetrics: string[];
  targetAudience: string[];
}

export interface TalkFormData {
  name: string;
  email: string;
  organization: string;
  topic: string;
  message: string;
  preferredDate?: string;
}

export interface CollaborationFormData {
  organizationName: string;
  contactName: string;
  email: string;
  organizationType: 'Government' | 'Multilateral Agency' | 'Private Enterprise' | 'Academic / NGO';
  focusArea: string;
  projectOverview: string;
  estimatedTimeline: string;
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
  web?: string;
}

export interface MemberStats {
  experienceYears: number;
  projectsLed: number;
  publications?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  division: 'Advisory & Strategy' | 'Research & Analysis' | 'Public Health & Social' | 'Operations & Tech';
  expertise: string[];
  education: string[];
  bio: string;
  projects: string[];
  image: string;
  socials: SocialLinks;
  stats: MemberStats;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  serviceCategory: string;
  message: string;
  urgent: boolean;
}

export type MeetingMode = 'virtual' | 'in_person';

export interface ConsultationBookingData {
  clientName: string;
  clientEmail: string;
  phone: string;
  companyName: string;
  serviceCategory: string;
  date: string;
  timeSlot: string;
  meetingMode: MeetingMode;
  notes?: string;
}

export interface OfficeInfo {
  companyName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  hours?: string;
  alternatePhone?: string;
  address: {
    building: string;
    road: string;
    area: string;
    city: string;
    country: string;
    fullAddress: string;
  };
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
  officeHours: string;
  timeZone: string;
}

export interface ServiceOption {
  id: string;
  title: string;
  description: string;
  iconName: string;
  estimatedDuration: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
  iconName: string;
}

export interface PartnerBrandItem {
  id: string;
  name: string;
  logoUrl: string;
  category?: string;
  fallbackUrl?: string;
  websiteUrl?: string;
  description?: string;
}

export interface TrustMatrixData {
  sectionBadge: string;
  sectionTitle: string;
  scrollSpeed: number;
  brands: PartnerBrandItem[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author?: string;
  authorName?: string;
  designation?: string;
  authorTitle?: string;
  role?: string;
  organization: string;
  photoUrl?: string;
  avatar?: string;
  logoUrl?: string;
  rating?: number;
}


export interface TestimonialSectionData {
  sectionBadge: string;
  sectionTitle: string;
  sectionSubtitle: string;
  items: TestimonialItem[];
}

export interface TreeBranchNode {
  id: string;
  branchNumber?: string;
  badge: string;
  title: string;
  subtitle?: string;
  desc: string;
  imageUrl?: string;
  iconName?: 'Leaf' | 'GraduationCap' | 'ShieldCheck' | 'Layers' | string;
  leaves?: string[];
}

export interface TreeFrameworkData {
  badge?: string;
  sectionBadge?: string;
  headline?: string;
  sectionTitle?: string;
  highlightWord?: string;
  subtitle?: string;
  sectionSubtitle?: string;
  trunkHeadline?: string;
  trunkSummary?: string;
  rootsHeadline?: string;
  rootsSummary?: string;
  rootNodeTitle?: string;
  branches: TreeBranchNode[];
}

export interface TrailerSceneItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  startTime: number;
  endTime: number;
  badge: string;
  narration: string;
  subtitles: {
    EN: string;
    FR: string;
    BN: string;
  };
  metrics: {
    label: string;
    value: string;
  };
  keyPillars: string[];
  themeColor: string;
  bgGradient: string;
}

export interface MovieStill {
  url: string;
  caption: string;
}

export interface Movie {
  id: string;
  title: string;
  subtitle?: string;
  imdbRating: string;
  releaseYear: string;
  runtime: string;
  genres: string[];
  backdropUrl: string;
  trailerYoutubeId?: string;
  videoUrl?: string;
  story: string;
  quote?: string;
  director: string;
  writers: string[];
  stars: string[];
  awards?: string;
  rating?: string;
  stills?: MovieStill[];
}

export interface OperationalFront {
  id: string;
  tabLabel: string;
  title: string;
  focusVector: string;
  desc: string;
  deliverable: string;
  status: string;
  image: string;
}

export interface ResearchSectionData {
  sectionTitle: string;
  headline: string;
  highlightWord: string;
  quote: string;
  bodyText: string;
}

export interface ParallaxCardItem {
  id: string;
  categoryLabel?: string;
  title: string;
  subtitle?: string;
  description: string;
  badge?: string;
  backgroundUrl: string;
  shadowUrl?: string;
  frameColor?: string;
}

export interface ServiceSolutionItem {
  id: string;
  title: string;
  shortTag: string;
  iconName: string;
  description: string;
  deliverables: string[];
  methodology: string;
  caseStudyHighlight: string;
  imageUrl?: string;
}

export interface FocusAreaItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  detailedBody: string;
  iconName: string;
  videoUrl?: string;
  imageUrl: string;
  keyStats: { label: string; value: string }[];
  keySolutions: string[];
  targetSDGs: string[];
  featuredProjectTitle: string;
  featuredProjectSummary: string;
}

export interface ProjectItemData {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  partner: string;
  partnerLogoText?: string;
  year: string;
  location: string;
  description: string;
  keyOutcome: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
}

