import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  BadgeCheck, 
  ScrollText, 
  Workflow, 
  ChevronRight, 
  Sparkles, 
  Users,
  Building2,
  Landmark,
  ShieldCheck,
  CheckCircle2,
  Quote,
  Target,
  Layers,
  FileCheck,
  GraduationCap,
  Briefcase,
  Globe2,
  Award,
  BookOpen,
  History,
  Compass,
  Scale,
  Calendar,
  ExternalLink,
  PhoneCall
} from 'lucide-react';
import { TeamSection } from './TeamSection';
import { ExecutiveCard } from './ExecutiveCard';
import { TestimonialCard } from './TestimonialCard';

export const PRINCIPLES = [
  {
    icon: ScrollText,
    tag: 'Evidence Standard',
    index: '01',
    title: 'We publish what we can evidence',
    body: 'Engagements, figures and quotations appear on this site only when they can be substantiated and disclosure is permitted. Where an engagement is confidential we describe the institution and context rather than naming it.',
  },
  {
    icon: Workflow,
    tag: 'Delivery Model',
    index: '02',
    title: 'We stay past the recommendation',
    body: 'Analysis that nobody can implement is not a deliverable. Our model carries a reform through policy design, financing structure, delivery systems and measurement.',
  },
  {
    icon: BadgeCheck,
    tag: 'Operational Realism',
    index: '03',
    title: 'We design for the institution that exists',
    body: 'Policy that assumes data an agency does not hold, or capacity it does not have, will not survive contact with reality. We design against administrative and political facts.',
  },
  {
    icon: Scale,
    tag: 'Data Fidelity',
    index: '04',
    title: 'Zero-tolerance for simulated metrics',
    body: 'Our econometric and field models rely exclusively on ground-truth CAPI surveys, verified institutional logs, and reproducible econometric pipelines.',
  },
];

const CLIENT_ECOSYSTEM = [
  { label: 'Governments & Ministries', icon: Landmark, desc: 'Cabinet offices, finance, energy & planning ministries across emerging economies' },
  { label: 'Development Partners & MDBs', icon: Building2, desc: 'World Bank, ADB, UN agencies & bilateral development finance institutions' },
  { label: 'Financial Institutions & Enterprises', icon: ShieldCheck, desc: 'Central banks, sovereign wealth funds, commercial lenders & green bond issuers' },
  { label: 'Research Institutes & Think Tanks', icon: Layers, desc: 'Global universities, economic policy institutes & independent non-profits' },
];

const DELIVERY_JOINS = [
  {
    step: '01',
    title: 'Policy Research & Empirical Modeling',
    desc: 'Econometric forecasts, micro-simulations, and field baseline data gathering using secure CAPI pipelines.',
  },
  {
    step: '02',
    title: 'Institutional Design & Regulatory Frameworks',
    desc: 'Statutory drafting, institutional governance blueprints, and inter-agency coordination mechanisms.',
  },
  {
    step: '03',
    title: 'Financing Structures & Green Capital',
    desc: 'Blended finance vehicles, sovereign green bond frameworks, and multi-tier public investment appraisals.',
  },
  {
    step: '04',
    title: 'Field Implementation & MERLA Support',
    desc: 'Longitudinal monitoring, evaluation, research, learning and institutional capacity handoff.',
  }
];

const TIMELINE_MILESTONES = [
  {
    year: '2008',
    badge: 'Founding',
    title: 'Establishment of IP3 Consulting',
    description: 'Founded in Dhaka with a core mission to bridge macro policy analysis and operational public sector delivery.',
  },
  {
    year: '2014',
    badge: 'Expansion',
    title: 'Multilateral Accord Integration',
    description: 'Appointed as strategic advisory partner for major World Bank and Asian Development Bank governance initiatives.',
  },
  {
    year: '2019',
    badge: 'Innovation',
    title: 'Computational Research & CAPI Lab',
    description: 'Pioneered custom high-frequency CAPI survey platforms and spatial econometric models across 64 districts.',
  },
  {
    year: '2023',
    badge: 'Sovereign Impact',
    title: 'Climate Resilience & Sustainable Finance',
    description: 'Structured national green financing roadmaps, sovereign bond advisory, and cross-ministerial climate action plans.',
  },
  {
    year: '2026',
    badge: 'Current Era',
    title: 'Global Policy Faculty & Field Network',
    description: 'Deploying senior faculty, visiting scholars, and specialized implementation task forces across multiple jurisdictions.',
  }
];

interface AboutPageProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
  initialSection?: string;
  onOpenTalk?: () => void;
  onOpenCollaborate?: (area?: string) => void;
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
  onNavigateApproach?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  darkMode = false,
  setDarkMode = () => {},
  initialSection,
  onOpenTalk = () => {},
  onOpenCollaborate = () => {},
  onNavigateHome = () => {},
  onNavigateContact = () => {},
  onNavigateApproach = () => {},
}) => {
  // Available sub-tabs within the separate About Us page
  const [activeTab, setActiveTab] = useState<'overview' | 'people' | 'principles' | 'timeline'>('overview');

  useEffect(() => {
    if (initialSection) {
      if (initialSection.includes('people') || initialSection.includes('team') || initialSection.includes('faculty')) {
        setActiveTab('people');
      } else if (initialSection.includes('principles') || initialSection.includes('governance')) {
        setActiveTab('principles');
      } else if (initialSection.includes('timeline') || initialSection.includes('heritage')) {
        setActiveTab('timeline');
      } else {
        setActiveTab('overview');
      }

      setTimeout(() => {
        const el = document.querySelector(initialSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  }, [initialSection]);

  return (
    <div className="w-full min-h-screen bg-[#050a12] text-slate-100 font-sans">
      {/* Page Header / Sub-Page Banner with Navigation Switcher */}
      <section className="relative w-full pt-12 pb-10 sm:pt-16 sm:pb-14 px-6 sm:px-12 lg:px-16 border-b border-slate-800 overflow-hidden bg-gradient-to-b from-[#050a12] via-[#081220] to-[#050a12]">
        {/* Subtle Background Blueprint Grid */}
        <div 
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ff7e67 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
            <button 
              onClick={onNavigateHome}
              className="hover:text-[#ff7e67] transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-slate-400">About Us</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-[#ff7e67] font-semibold capitalize">
              {activeTab === 'overview' ? 'Institutional Overview' : activeTab === 'people' ? 'IP3 People & Faculty' : activeTab === 'principles' ? 'Operating Principles' : 'Heritage & Milestones'}
            </span>
          </nav>

          {/* Header Title and Navigation Pill Tabs */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <span className="h-[2px] w-8 bg-[#ff7e67]" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#ff7e67]">
                  ABOUT IP3 CONSULTING
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
                {activeTab === 'overview' && 'An Advisory Firm Built for Institutional Longevity'}
                {activeTab === 'people' && 'IP3 People, Faculty & Leadership'}
                {activeTab === 'principles' && 'Standards of Evidence & Operating Principles'}
                {activeTab === 'timeline' && 'Institutional Heritage & Milestone Track Record'}
              </h1>
            </div>

            {/* Sub-Page Navigation Tabs */}
            <div className="flex items-center flex-wrap p-1.5 rounded-full bg-[#081220] border border-slate-800 shadow-inner shrink-0">
              {[
                { id: 'overview', label: 'Overview', icon: Landmark },
                { id: 'people', label: 'IP3 People', icon: Users },
                { id: 'principles', label: 'Principles', icon: FileCheck },
                { id: 'timeline', label: 'Milestones', icon: History },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'text-[#050a12] shadow-md shadow-black/40'
                        : 'text-slate-400 hover:text-slate-100'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="aboutPagePill"
                        className="absolute inset-0 bg-[#ff7e67] rounded-full"
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                      />
                    )}
                    <TabIcon className="w-3.5 h-3.5 relative z-10" />
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-4xl leading-relaxed font-normal mt-6 mb-8">
            {activeTab === 'overview' && 'IP3 Consulting Limited works with sovereign governments, multilateral development institutions, and enterprise leaders to transform systemic risk into durable institutional capacity through empirical research, policy design, financing structures, and public delivery.'}
            {activeTab === 'people' && 'Meet the economists, public policy researchers, data architects, and executive advisors driving systemic reform and empirical policy analysis across global jurisdictions.'}
            {activeTab === 'principles' && 'Our work is governed by strict evidence standards, operational realism, and non-disclosure protocols. We publish only what we can verify and stay past the recommendation.'}
            {activeTab === 'timeline' && 'Over nearly two decades of sovereign policy reform, IP3 has mobilized over $2.4B in program value, advising on macroeconomic governance, spatial analytics, and climate resilience.'}
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-2xl bg-[#081220] border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#ff7e67] mb-1">18+ Yrs</div>
              <div className="text-xs text-slate-400 font-medium">Sovereign Advisory Record</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#081220] border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-1">$2.4B+</div>
              <div className="text-xs text-slate-400 font-medium">Mobilized Program Value</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#081220] border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#2dd4bf] mb-1">40+</div>
              <div className="text-xs text-slate-400 font-medium">Specialists, Economists & Fellows</div>
            </div>
            <div className="p-4 rounded-2xl bg-[#081220] border border-slate-800">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-1">12</div>
              <div className="text-xs text-slate-400 font-medium">Multilateral & State Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tabbed Content Area */}
      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div
            key="tab-overview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            id="overview"
          >
            {/* Main Position & Thesis Section */}
            <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-16 border-b border-slate-800 bg-[#050a12]">
              <div className="max-w-7xl mx-auto">
                <div className="grid gap-12 lg:grid-cols-[1.18fr_1fr] lg:gap-16 items-start">
                  {/* Left Narrative Column */}
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="h-[2px] w-6 bg-[#ff7e67]" />
                        <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ff7e67]">
                          Position & Thesis
                        </span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight mb-4">
                        At the intersection of research, policy, finance and delivery
                      </h2>
                      <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
                        IP3 Consulting Limited works with governments and ministries, development partners, financial institutions, and research entities. The common thread is institutional: our clients are trying to change how a system behaves, not simply to buy an opinion about it.
                      </p>
                    </div>

                    {/* The 4 Joins Architecture Banner */}
                    <div className="p-6 rounded-3xl bg-[#081220] border border-slate-800 shadow-xl">
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#ff7e67] flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          <span>Operating Across The Joins</span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-[#050a12] px-2.5 py-0.5 rounded-full border border-slate-800">
                          Integrated Delivery Architecture
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                        Reform programmes fail at the joins — between the analysis and the policy, between the policy and the money, between the money and the people expected to run it. Those joins are where we do our work.
                      </p>

                      {/* 4 Pillars Detailed Steps */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                        {DELIVERY_JOINS.map((join, idx) => (
                          <div key={idx} className="p-3.5 rounded-2xl bg-[#050a12] border border-slate-800 flex flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-md bg-[#ff7e67] text-[#050a12] text-[10px] font-mono font-bold flex items-center justify-center shrink-0">
                                {join.step}
                              </span>
                              <h4 className="text-xs font-bold text-slate-100">{join.title}</h4>
                            </div>
                            <p className="text-[11px] text-slate-400 leading-relaxed pl-7">
                              {join.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Ecosystem Who We Advise */}
                    <div className="space-y-3">
                      <div className="text-xs font-mono font-bold uppercase tracking-[0.15em] text-slate-400">
                        Client & Institutional Counterparts
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CLIENT_ECOSYSTEM.map((client, idx) => {
                          const ClientIcon = client.icon;
                          return (
                            <div 
                              key={idx} 
                              className="p-3.5 rounded-2xl bg-[#081220] border border-slate-800 flex flex-col gap-1 hover:border-[#ff7e67]/40 transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 rounded-lg bg-[#ff7e67]/10 text-[#ff7e67] flex items-center justify-center shrink-0">
                                  <ClientIcon className="w-4 h-4" />
                                </div>
                                <span className="text-xs font-bold text-slate-100">
                                  {client.label}
                                </span>
                              </div>
                              <span className="text-[11px] text-slate-400 pl-9">
                                {client.desc}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Geographic Footprint Note */}
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-l-2 border-[#ff7e67] pl-4 py-1 italic bg-[#081220]/60 rounded-r-2xl">
                      We operate from Dhaka and work with counterparts in other sovereign jurisdictions. Where an engagement is confidential, we explicitly say so rather than describing it vaguely to imply something else.
                    </p>

                    {/* Navigation Action Buttons */}
                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => {
                          setActiveTab('people');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-6 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-[#ff7e67]/20 cursor-pointer flex items-center gap-2"
                      >
                        <Users className="w-4 h-4" />
                        <span>Explore IP3 People & Faculty</span>
                      </button>
                      <button
                        onClick={onNavigateApproach}
                        className="px-6 py-3.5 rounded-full bg-[#081220] hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2"
                      >
                        <span>How We Deliver</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Core Principles Highlights Column */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#ff7e67] flex items-center gap-2">
                        <FileCheck className="w-4 h-4" />
                        <span>Core Operating Principles</span>
                      </div>
                      <button
                        onClick={() => {
                          setActiveTab('principles');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-[11px] font-mono text-[#ff7e67] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        <span>View All 4 Standards</span>
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>

                    {PRINCIPLES.map((principle) => {
                      const Icon = principle.icon;
                      return (
                        <div
                          key={principle.title}
                          className="p-5 sm:p-6 rounded-3xl bg-[#081220] border border-slate-800 hover:border-[#ff7e67]/60 transition-all duration-300 shadow-xl shadow-black/20 group relative overflow-hidden"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-[#050a12] border border-[#ff7e67]/30 text-[#ff7e67] flex items-center justify-center shrink-0 group-hover:bg-[#ff7e67] group-hover:text-[#050a12] transition-colors duration-300 shadow-inner">
                              <Icon className="w-5 h-5" aria-hidden="true" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff7e67] bg-[#ff7e67]/10 px-2 py-0.5 rounded border border-[#ff7e67]/20">
                                  {principle.tag}
                                </span>
                                <span className="font-mono text-xs text-slate-400">
                                  {principle.index}
                                </span>
                              </div>
                              <h3 className="text-sm sm:text-base font-bold text-slate-100 leading-snug group-hover:text-[#ff7e67] transition-colors">
                                {principle.title}
                              </h3>
                              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                                {principle.body}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Leadership Spotlight Card */}
            <div id="executive">
              <ExecutiveCard
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onOpenTalk={onOpenTalk}
                onOpenCollaborate={onOpenCollaborate}
              />
            </div>
          </motion.div>
        )}

        {activeTab === 'people' && (
          <motion.div
            key="tab-people"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            id="people"
          >
            {/* Full Team Roster Component */}
            <div id="team">
              <TeamSection />
            </div>

            {/* Strategic Leadership & Executive Briefing */}
            <div id="executive">
              <ExecutiveCard
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                onOpenTalk={onOpenTalk}
                onOpenCollaborate={onOpenCollaborate}
              />
            </div>

            {/* Visiting Scholars & Fellowships Callout */}
            <section className="py-16 sm:py-20 px-6 sm:px-12 lg:px-16 border-t border-slate-800 bg-[#050a12]">
              <div className="max-w-7xl mx-auto">
                <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#081220] via-[#0a182b] to-[#050a12] border border-slate-800 shadow-2xl relative overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-xs font-mono font-bold text-[#ff7e67]">
                        <GraduationCap className="w-4 h-4" />
                        <span>GLOBAL FELLOWSHIPS & VISITING SCHOLARS</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 leading-tight">
                        Join IP3's Multidisciplinary Research Faculty
                      </h2>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
                        We host senior policy fellows, doctoral researchers, and visiting economists from international universities and multilateral development institutions. Collaborate on cutting-edge macroeconomic modeling, CAPI field architectures, and sovereign climate governance.
                      </p>
                    </div>

                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                      <button
                        onClick={onNavigateContact}
                        className="px-6 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-[#ff7e67]/20 cursor-pointer flex items-center justify-center gap-2 text-center"
                      >
                        <Briefcase className="w-4 h-4" />
                        <span>Apply for 2026 Fellowship</span>
                      </button>
                      <button
                        onClick={() => {
                          setActiveTab('overview');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-6 py-3.5 rounded-full bg-[#050a12] hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
                      >
                        <Landmark className="w-4 h-4 text-slate-400" />
                        <span>Explore Institutional Model</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials & Endorsements */}
            <div id="testimonials">
              <TestimonialCard />
            </div>
          </motion.div>
        )}

        {activeTab === 'principles' && (
          <motion.div
            key="tab-principles"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            id="principles"
            className="py-16 sm:py-24 px-6 sm:px-12 lg:px-16"
          >
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-xs font-mono font-bold text-[#ff7e67]">
                  <Scale className="w-4 h-4" />
                  <span>GOVERNANCE & ETHICAL CODES</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
                  Standards of Evidence & Advisory Ethics
                </h2>
                <p className="text-sm sm:text-base text-slate-400">
                  Our advisory relationships are grounded in legal rigor, reproducible empirical science, and strict institutional privacy.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRINCIPLES.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <div
                      key={principle.title}
                      className="p-8 rounded-3xl bg-[#081220] border border-slate-800 hover:border-[#ff7e67]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-[#050a12] border border-[#ff7e67]/30 text-[#ff7e67] flex items-center justify-center">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="font-mono text-xs text-[#ff7e67] bg-[#ff7e67]/10 px-3 py-1 rounded-full border border-[#ff7e67]/20 font-bold">
                            RULE {principle.index}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {principle.title}
                        </h3>
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {principle.body}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span>Domain: {principle.tag}</span>
                        <span className="text-[#ff7e67] font-bold">Verified Protocol</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-6 rounded-2xl bg-[#081220] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#ff7e67] shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-400">
                    Compliant with World Bank, ADB, and Sovereign Integrity & Anti-Corruption Frameworks.
                  </span>
                </div>
                <button
                  onClick={onNavigateContact}
                  className="px-5 py-2.5 rounded-full bg-[#ff7e67] text-[#050a12] text-xs font-bold shrink-0 hover:bg-[#ff8f7b] transition-colors"
                >
                  Request Compliance Disclosure
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'timeline' && (
          <motion.div
            key="tab-timeline"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            id="timeline"
            className="py-16 sm:py-24 px-6 sm:px-12 lg:px-16"
          >
            <div className="max-w-5xl mx-auto space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-xs font-mono font-bold text-[#ff7e67]">
                  <History className="w-4 h-4" />
                  <span>INSTITUTIONAL HERITAGE</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-100">
                  Eighteen Years of Institutional Architecture
                </h2>
                <p className="text-sm sm:text-base text-slate-400">
                  From pioneering public enterprise governance to nationwide digital survey infrastructure and green sovereign financing.
                </p>
              </div>

              {/* Vertical Milestone Flow */}
              <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-10">
                {TIMELINE_MILESTONES.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#081220] border-2 border-[#ff7e67] flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
                      <div className="w-2 h-2 rounded-full bg-[#ff7e67]" />
                    </div>

                    {/* Year Label */}
                    <div className="sm:absolute sm:-left-32 sm:top-1 font-mono text-base font-bold text-[#ff7e67] mb-2 sm:mb-0">
                      {item.year}
                    </div>

                    <div className="p-6 rounded-3xl bg-[#081220] border border-slate-800 group-hover:border-[#ff7e67]/50 transition-colors shadow-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#ff7e67] bg-[#ff7e67]/10 px-2 py-0.5 rounded border border-[#ff7e67]/20">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-100 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Call to Action */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 border-t border-slate-800 bg-[#050a12]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff7e67] uppercase tracking-wider mb-2">
              <PhoneCall className="w-4 h-4" />
              <span>Direct Advisory Engagement</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2">
              Ready to structure systemic reform?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              Connect with our Managing Director and Practice Leads for an initial confidential institutional briefing.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenTalk}
              className="px-6 py-3.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-[#ff7e67]/20 cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onNavigateHome}
              className="px-6 py-3.5 rounded-full bg-[#081220] hover:bg-slate-800 border border-slate-700 text-slate-200 font-medium text-xs sm:text-sm transition-all cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
