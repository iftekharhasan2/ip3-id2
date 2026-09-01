import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Layers,
  Leaf,
  GraduationCap,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Play,
  X,
  BookOpen,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Target,
  BarChart3,
  Globe2,
  FileCheck2,
  TrendingUp,
  Building2,
  Cpu,
  Compass
} from 'lucide-react';
import { useCMS } from '../context/CMSContext';
import { FOCUS_AREAS, FocusArea } from '../data/policyData';

interface FocusPageProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean | ((prev: boolean) => boolean)) => void;
  initialSection?: string;
  onOpenTalk?: () => void;
  onOpenCollaborate?: (area?: string) => void;
  onNavigateHome?: () => void;
  onNavigateContact?: () => void;
  onNavigateApproach?: () => void;
  onNavigateAbout?: () => void;
}

// In-Depth Case & Video Presentation Modal
const FocusAreaDetailModal: React.FC<{
  area: FocusArea | null;
  onClose: () => void;
  onOpenContact: () => void;
}> = ({ area, onClose, onOpenContact }) => {
  if (!area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#081220] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[#050a12]/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full bg-[#ff7e67]/10 text-[#ff7e67] border border-[#ff7e67]/30 text-xs font-mono font-bold uppercase tracking-wider">
            {area.badge}
          </span>
          <span className="text-xs font-mono text-slate-400">Strategic Policy Domain</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mb-2">{area.title}</h3>
        <p className="text-sm font-semibold text-[#ff7e67] mb-4">{area.subtitle}</p>

        {/* Video / Visual Asset */}
        <div className="rounded-2xl overflow-hidden border border-slate-800 mb-6 bg-[#050a12]">
          {area.videoUrl ? (
            <div className="relative aspect-video bg-black">
              <video
                src={area.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-video">
              <img
                src={area.imageUrl}
                alt={area.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Description & Solutions Matrix */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-100 mb-2">
              Systemic Problem Statement & Methodology
            </h4>
            <p>{area.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-100 mb-3">
              Action Initiatives & Strategic Interventions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {area.keySolutions.map((sol, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-[#050a12] p-3.5 rounded-xl border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-[#ff7e67] shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-200">{sol}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-100 mb-2">
              Relevant Sustainable Development Goals (SDGs)
            </h4>
            <div className="flex flex-wrap gap-2">
              {(area.targetSDGs || []).map((sdg, idx) => (
                <span key={idx} className="px-3 py-1 rounded-xl bg-[#ff7e67]/10 text-[#ff7e67] border border-[#ff7e67]/30 text-xs font-mono font-semibold">
                  {sdg}
                </span>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#050a12] border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#ff7e67] mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Featured Institutional Benchmark</span>
            </div>
            <h4 className="font-bold text-slate-100 text-sm mb-1">{area.featuredProjectTitle}</h4>
            <p className="text-xs text-slate-400">{area.featuredProjectSummary}</p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 border border-slate-700 text-xs font-semibold cursor-pointer"
          >
            Close Overview
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-xs shadow-md shadow-[#ff7e67]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
          >
            <span>Inquire About {area.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const FocusPage: React.FC<FocusPageProps> = ({
  initialSection,
  onOpenTalk,
  onOpenCollaborate,
  onNavigateHome,
  onNavigateContact,
  onNavigateApproach,
  onNavigateAbout,
}) => {
  const { data } = useCMS();
  const focusList = (data.focusAreas && data.focusAreas.length > 0 ? data.focusAreas : FOCUS_AREAS) as FocusArea[];

  const [selectedArea, setSelectedArea] = useState<FocusArea | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (initialSection) {
      setTimeout(() => {
        const el = document.querySelector(initialSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 150);
    }
  }, [initialSection]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-6 h-6 text-[#2dd4bf]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#ff7e67]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#38bdf8]" />;
      default:
        return <Layers className="w-6 h-6 text-[#ff7e67]" />;
    }
  };

  const getPillarAccent = (index: number) => {
    if (index === 0) return { border: 'hover:border-[#2dd4bf]', tagBg: 'bg-[#2dd4bf]/10 text-[#2dd4bf] border-[#2dd4bf]/30', dot: 'bg-[#2dd4bf]' };
    if (index === 1) return { border: 'hover:border-[#ff7e67]', tagBg: 'bg-[#ff7e67]/10 text-[#ff7e67] border-[#ff7e67]/30', dot: 'bg-[#ff7e67]' };
    return { border: 'hover:border-[#38bdf8]', tagBg: 'bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/30', dot: 'bg-[#38bdf8]' };
  };

  return (
    <div className="min-h-screen bg-[#050a12] text-slate-100 font-sans antialiased">
      
      {/* 1. Page Header & Institutional Breadcrumb */}
      <div className="border-b border-slate-800 bg-[#050a12]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#ff7e67] font-bold">Strategic Focus Areas</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
            <button
              onClick={onNavigateAbout}
              className="hover:text-white transition-colors cursor-pointer"
            >
              About IP3 Faculty
            </button>
            <span>•</span>
            <button
              onClick={onNavigateApproach}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Approach & Publications
            </button>
            <span>•</span>
            <button
              onClick={onNavigateContact}
              className="text-[#ff7e67] hover:underline cursor-pointer"
            >
              Advisory Desk
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-16 pb-16 overflow-hidden bg-gradient-to-b from-[#081220] via-[#050a12] to-[#050a12]">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff7e67]/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-[#2dd4bf]/5 blur-[130px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>Core Pillars of Institutional Practice</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-100 tracking-tight leading-[1.1]">
              Strategic Focus Areas
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We design and execute empirical research, macroeconomic modeling, and policy architecture across three interlocked pillars: <strong className="text-slate-100">Green Transitions</strong>, <strong className="text-slate-100">Educational Innovation</strong>, and <strong className="text-slate-100">Digital Governance</strong>.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 max-w-3xl mx-auto">
              <div className="p-3.5 rounded-2xl bg-[#081220] border border-slate-800 text-left">
                <div className="text-xl font-extrabold text-[#2dd4bf]">3</div>
                <div className="text-[11px] text-slate-400 font-medium">Core Strategic Pillars</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#081220] border border-slate-800 text-left">
                <div className="text-xl font-extrabold text-[#ff7e67]">$140M+</div>
                <div className="text-[11px] text-slate-400 font-medium">Capital Mobilized</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#081220] border border-slate-800 text-left">
                <div className="text-xl font-extrabold text-[#38bdf8]">12+</div>
                <div className="text-[11px] text-slate-400 font-medium">Sovereign Jurisdictions</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#081220] border border-slate-800 text-left">
                <div className="text-xl font-extrabold text-slate-100">40+</div>
                <div className="text-[11px] text-slate-400 font-medium">Action Research Programs</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Main Focus Areas Section */}
      <section id="focus-areas" className="py-16 sm:py-24 relative bg-[#050a12]">
        <div id="focus-area" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-12">
            {focusList.map((area, index) => {
              const originalIndex = focusList.findIndex((f) => f.id === area.id);
              const accent = getPillarAccent(originalIndex >= 0 ? originalIndex : index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={area.id}
                  id={`focus-branch-${originalIndex >= 0 ? originalIndex : index}`}
                  data-area-id={area.id}
                  className={`bg-[#081220] p-6 sm:p-10 rounded-3xl border border-slate-800 relative overflow-hidden shadow-2xl transition-all ${accent.border}`}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    
                    {/* Left Details Column */}
                    <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full border ${accent.tagBg}`}>
                            {area.badge}
                          </span>
                          <span className="text-xs font-mono text-slate-400">
                            Pillar 0{originalIndex + 1}
                          </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-1.5 tracking-tight">
                          {area.title}
                        </h2>
                      </div>

                      <p className="text-sm font-semibold text-[#ff7e67]">
                        {area.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {area.description}
                      </p>

                      {/* Key Solutions & Action Initiatives */}
                      <div className="space-y-3 pt-2">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                          <Target className="w-3.5 h-3.5 text-[#ff7e67]" />
                          <span>Key Solutions & Action Initiatives</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {area.keySolutions.map((sol, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200 bg-[#050a12] p-3 rounded-xl border border-slate-800 hover:border-[#ff7e67]/40 transition-colors">
                              <CheckCircle className="w-4 h-4 text-[#ff7e67] shrink-0" />
                              <span className="text-[11.5px] leading-snug">{sol}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* SDGs Tags */}
                      <div className="pt-2">
                        <span className="text-[11px] font-mono text-slate-400 block mb-2">Sustainable Development Alignment:</span>
                        <div className="flex flex-wrap gap-2">
                          {(area.targetSDGs || []).map((sdg, sIdx) => (
                            <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-[#050a12] border border-slate-800 text-[11px] text-slate-300 font-mono">
                              {sdg}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedArea(area)}
                          className="px-5 py-2.5 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-xs shadow-md shadow-[#ff7e67]/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                        >
                          <span>Explore In-Depth Case & Presentation</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => {
                            if (onOpenCollaborate) {
                              onOpenCollaborate(area.title);
                            } else if (onNavigateContact) {
                              onNavigateContact();
                            }
                          }}
                          className="px-5 py-2.5 rounded-full bg-[#050a12] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                        >
                          Request Advisory
                        </button>
                      </div>
                    </div>

                    {/* Right Media / Benchmark Card */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#050a12] shadow-2xl group">
                        
                        {area.videoUrl ? (
                          <div className="relative aspect-video bg-black">
                            <video
                              src={area.videoUrl}
                              controls
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-3 left-3 bg-[#081220]/95 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-mono font-bold text-[#ff7e67] border border-[#ff7e67]/30 flex items-center gap-1.5 shadow-md">
                              <Play className="w-3 h-3 text-[#ff7e67] fill-[#ff7e67]" />
                              <span>IP3 Institutional Presentation</span>
                            </div>
                          </div>
                        ) : (
                          <div className="relative aspect-video overflow-hidden">
                            <img
                              src={area.imageUrl}
                              alt={area.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#050a12] via-transparent to-transparent" />
                          </div>
                        )}

                        {/* Benchmark Showcase Banner */}
                        <div className="p-4 sm:p-5 bg-[#050a12] border-t border-slate-800 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-mono font-bold text-[#ff7e67] tracking-wider flex items-center gap-1.5">
                              <BookOpen className="w-3.5 h-3.5" />
                              <span>Featured Benchmark Project</span>
                            </span>
                            <span className="text-[10px] font-mono text-[#2dd4bf]">Active</span>
                          </div>

                          <h3 className="text-sm font-bold text-slate-100 line-clamp-1 group-hover:text-[#ff7e67] transition-colors">
                            {area.featuredProjectTitle}
                          </h3>

                          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                            {area.featuredProjectSummary}
                          </p>

                          <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-800/80">
                            <button
                              onClick={() => setSelectedArea(area)}
                              className="text-[#ff7e67] hover:underline font-semibold flex items-center gap-1 text-xs cursor-pointer"
                            >
                              <span>View Full Methodology</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-[10px] font-mono text-slate-400">Multilateral Tier</span>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Strategic Interdisciplinary Matrix */}
      <section className="py-16 bg-[#081220] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7e67]/10 border border-[#ff7e67]/30 text-[#ff7e67] text-xs font-mono font-bold uppercase tracking-widest">
              <Compass className="w-3.5 h-3.5" />
              <span>Cross-Cutting Systemic Impact</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100">
              How Our 3 Pillars Interlock
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Complex policy pressures arrive together. Our cross-cutting methodology bridges green capital, human capacity, and digital institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#050a12] border border-slate-800 space-y-4 shadow-lg hover:border-[#2dd4bf] transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#2dd4bf]/10 text-[#2dd4bf] border border-[#2dd4bf]/30 flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Green Municipal Finance</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Combining climate economics with municipal development funds (BMDF) to structure $140M in green municipal bonds for climate-resilient urban infrastructure.
              </p>
              <div className="pt-2 text-xs font-mono text-[#2dd4bf] font-semibold">
                Climate + Governance
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#050a12] border border-slate-800 space-y-4 shadow-lg hover:border-[#ff7e67] transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#ff7e67]/10 text-[#ff7e67] border border-[#ff7e67]/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Blended Learning EdTech</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Embedding digital learning management systems and data analytics inside national secondary education reforms (ADB NSEP) for real-time pedagogical feedback.
              </p>
              <div className="pt-2 text-xs font-mono text-[#ff7e67] font-semibold">
                Education + Digital Systems
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#050a12] border border-slate-800 space-y-4 shadow-lg hover:border-[#38bdf8] transition-all">
              <div className="w-10 h-10 rounded-2xl bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-100">Sovereign MERLA Dashboards</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Deploying cabinet-level monitoring, evaluation, and learning platforms to give sovereign ministers live telemetry on multi-sector policy execution.
              </p>
              <div className="pt-2 text-xs font-mono text-[#38bdf8] font-semibold">
                Governance + MERLA
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Bottom Engagement & Action Strip */}
      <section className="py-16 bg-[#050a12] border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#081220] via-[#0a182b] to-[#081220] border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7e67]/10 blur-3xl rounded-full pointer-events-none" />
            
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ff7e67] block mb-2">
              Institutional Advisory & Collaboration
            </span>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 max-w-2xl mx-auto">
              Initiate an Advisory Engagement Across Our Focus Areas
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mt-2 leading-relaxed">
              Connect directly with our practice specialists and principal researchers to structure bespoke policy architecture, empirical surveys, or impact evaluations.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenTalk}
                className="px-6 py-3 rounded-full bg-[#ff7e67] hover:bg-[#ff8f7b] text-[#050a12] font-bold text-xs shadow-lg shadow-[#ff7e67]/30 flex items-center gap-2 cursor-pointer transition-all transform hover:-translate-y-0.5"
              >
                <span>Schedule Strategic Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateApproach}
                className="px-6 py-3 rounded-full bg-[#050a12] hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold cursor-pointer transition-colors"
              >
                Read Working Papers & Working Method
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal View for Focus Area Detail */}
      <FocusAreaDetailModal
        area={selectedArea}
        onClose={() => setSelectedArea(null)}
        onOpenContact={onNavigateContact || (() => {})}
      />

    </div>
  );
};
