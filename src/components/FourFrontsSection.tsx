import React, { useState, useEffect } from 'react';
import { ParallaxCardsSection } from './ParallaxCardsSection';
import { useCMS } from '../context/CMSContext';

export const FourFrontsSection: React.FC = () => {
  const { data } = useCMS();
  const research = data.researchSection || {
    sectionTitle: "Research and Insights",
    headline: "Turning Institutional Pressure Into Actionable Architecture",
    quote: "When overlapping systems are understood, pressure stops being only a threat. It becomes material for design.",
    bodyText: "IP3 translates complexity into strategies, policy models, financing pathways, implementation plans, monitoring systems, digital tools, and decision frameworks until crisis becomes architecture.",
  };
  const fronts = data.operationalFronts && data.operationalFronts.length > 0 ? data.operationalFronts : [
    {
      id: "01",
      tabLabel: "01 STRATEGY",
      title: "Sovereign Strategy & Diagnostics",
      focusVector: "Systemic Risk Mapping & Scenario Planning",
      desc: "Rigorous evidence gathering, institutional mapping, and threat vector analysis to decipher complex, overlapping stress factors.",
      deliverable: "SOVEREIGN RISK MATRIX & TRANSITION ROADMAP",
      status: "READY",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const safeIdx = activeTabIdx < fronts.length ? activeTabIdx : 0;
  const activeFront = fronts[safeIdx] || fronts[0];

  // Auto-change timer
  useEffect(() => {
    if (isPaused || fronts.length <= 1) return;
    const interval = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % fronts.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, fronts.length]);

  return (
    <section id="about" className="relative bg-[#050a12] text-slate-100 py-8 md:py-12 px-4 sm:px-6 lg:px-10 border-t border-slate-800 font-sans overflow-hidden">
      <div id="reform" className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 font-serif tracking-tight text-center">
          {research.sectionTitle}
        </h1>

        {/* Combined Unified Research & Operational Engine Card - Full Width Layout */}
        <div className="w-full bg-[#081220]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden ring-1 ring-slate-800/80 backdrop-blur-sm space-y-8">
          {/* Subtle Ambient Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff7e67]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top Full-Width Section: Strategic Insights & Philosophical Narrative */}
          <div className="w-full space-y-5 relative z-10">
            <div>
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#ff7e67] uppercase">
                STRATEGIC INSIGHTS &amp; INSTITUTIONAL THESIS
              </span>
            </div>

            {/* Display Headline across full width */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 leading-tight tracking-tight max-w-4xl">
              {research.headline}
            </h2>

            {/* Quote Block */}
            <div className="border-l-2 border-[#ff7e67] pl-4 py-2 bg-[#ff7e67]/5 rounded-r-2xl max-w-4xl">
              <p 
                className="text-sm sm:text-base md:text-lg text-slate-100 font-medium leading-relaxed italic text-glow-subtle"
                style={{ textShadow: '0 0 16px rgba(255, 126, 103, 0.45), 0 0 32px rgba(255, 126, 103, 0.22)' }}
              >
                "{research.quote}"
              </p>
            </div>

            {/* Body Text */}
            <p 
              className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-4xl text-glow-subtle"
              style={{ textShadow: '0 0 14px rgba(255, 126, 103, 0.35), 0 0 28px rgba(255, 126, 103, 0.18)' }}
            >
              {research.bodyText}
            </p>
          </div>

          {/* Bottom Full-Width Section: Operational Engine / Four Fronts (Merged & Auto-Changing) */}
          <div 
            className="w-full pt-6 border-t border-slate-800/80 space-y-4 relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full bg-[#ff7e67] ${isPaused ? '' : 'animate-pulse'}`} />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7e67] font-bold">
                KNOWLEDGE MATRIX // PUBLICATIONS & DISSEMINATION
              </span>
            </div>

            {/* Unified Merged Matrix Card */}
            <div className="bg-[#0a182b]/95 rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
              
              {/* Header Segment: Integrated Pill Switcher & Progress Indicator */}
              <div className="p-2 sm:p-2.5 bg-[#081220] border-b border-slate-800/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
                  {fronts.map((front, idx) => {
                    const isActive = safeIdx === idx;
                    return (
                      <button
                        key={front.id || idx}
                        onClick={() => {
                          setActiveTabIdx(idx);
                        }}
                        className={`relative py-2.5 px-3 rounded-xl font-mono text-[18px] tracking-wider transition-all duration-300 text-center cursor-pointer overflow-hidden ${
                          isActive
                            ? 'bg-[#ff7e67] text-[#070d18] font-bold shadow-md shadow-[#ff7e67]/30'
                            : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
                        }`}
                      >
                        <span className="relative z-10 truncate block text-[18px]">{front.tabLabel}</span>
                        {/* Auto-rotation active progress line */}
                        {isActive && !isPaused && (
                          <span 
                            key={safeIdx}
                            className="absolute bottom-0 left-0 h-0.5 bg-white/80 animate-[progress_4.5s_linear]" 
                            style={{ width: '100%' }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Body Segment: Active Front Details + Visual Image */}
              {activeFront && (
                <div className="p-5 sm:p-6 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    {/* Left Details */}
                    <div className="lg:col-span-7 space-y-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-slate-100 leading-tight">
                          {activeFront.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span className="text-slate-400 uppercase tracking-widest font-bold">FOCUS VECTOR:</span>
                        <span className="text-[#2dd4bf] font-semibold">{activeFront.focusVector}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                        {activeFront.desc}
                      </p>
                    </div>

                    {/* Right Image Banner */}
                    <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-slate-800 h-44 sm:h-52 group shadow-md">
                      <img 
                        key={activeFront.image}
                        src={activeFront.image} 
                        alt={activeFront.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      
                      {/* Gradient vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a12]/95 via-[#050a12]/20 to-transparent" />

                      {/* Deliverable Badge Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#050a12] via-[#050a12]/90 to-transparent flex items-center justify-between gap-2">
                        <span className="font-mono text-xs text-slate-200 truncate">
                          <span className="text-[#ff7e67] uppercase font-bold mr-1.5">FRONT 0{safeIdx + 1}:</span>
                          {activeFront.title}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Unified Embedded Section: Sovereign Reform Parallax Showcase */}
          <div className="w-full pt-6 border-t border-slate-800/80 space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff7e67] animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7e67] font-bold">
                  INSTITUTIONAL DECK // REFORM ARCHITECTURE SHOWCASE
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#081220] text-slate-400 border border-slate-800">
                3D Interactive Artifacts
              </span>
            </div>

            <ParallaxCardsSection embedded={true} />
          </div>

        </div>
      </div>
    </section>
  );
};

