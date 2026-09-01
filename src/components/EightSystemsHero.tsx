import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles } from 'lucide-react';
import { SystemItem } from '../types';

interface EightSystemsHeroProps {
  systems: SystemItem[];
  selectedSystemId: string | null;
  onSelectSystem: (system: SystemItem) => void;
  fontFamily: 'newsreader' | 'playfair' | 'cormorant' | 'instrument';
  glowIntensity: number; // 0 to 1
  hoveredSystemId: string | null;
  setHoveredSystemId: (id: string | null) => void;
}

export const EightSystemsHero: React.FC<EightSystemsHeroProps> = ({
  systems,
  selectedSystemId,
  onSelectSystem,
  fontFamily,
  glowIntensity,
  hoveredSystemId,
  setHoveredSystemId,
}) => {
  // Active system to display in extended preview
  const previewSystem =
    systems.find((s) => s.id === hoveredSystemId) || null;

  const getFontClass = () => {
    switch (fontFamily) {
      case 'playfair':
        return 'font-serif-playfair';
      case 'cormorant':
        return 'font-serif-cormorant';
      case 'instrument':
        return 'font-serif-instrument';
      case 'newsreader':
      default:
        return 'font-serif-newsreader';
    }
  };

  const getDotGlowClass = (systemId: string) => {
    switch (systemId) {
      case 'climate-sustainability':
        return 'glow-dot-emerald';
      case 'education-human-capital':
        return 'glow-dot-blue';
      case 'health-social-protection':
        return 'glow-dot-teal';
      case 'data-digital-governance':
        return 'glow-dot-sky';
      case 'institutional-effectiveness':
        return 'glow-dot-orange';
      case 'economic-transition':
        return 'glow-dot-amber';
      case 'esg-circular-economy':
        return 'glow-dot-mint';
      case 'ai-public-systems':
        return 'glow-dot-purple';
      default:
        return '';
    }
  };

  const renderPill = (system: SystemItem) => {
    const isSelected = selectedSystemId === system.id;
    const isHovered = hoveredSystemId === system.id;
    const glowClass = getDotGlowClass(system.id);

    return (
      <button
        key={system.id}
        id={`system-pill-${system.id}`}
        type="button"
        onClick={() => onSelectSystem(system)}
        onMouseEnter={() => setHoveredSystemId(system.id)}
        onMouseLeave={() => setHoveredSystemId(null)}
        className={`group relative w-full h-[52px] flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full text-[13.5px] sm:text-[14.5px] leading-tight font-medium font-sans-body transition-all duration-200 cursor-pointer select-none outline-none text-center ${
          isSelected
            ? 'bg-[#0b1728] border-[#ff7e67]/60 text-white shadow-lg ring-1 ring-[#ff7e67]/30'
            : isHovered
            ? 'bg-[#0b1728] border-[#ff7e67]/40 text-white scale-[1.02] shadow-md'
            : 'bg-[#081220]/90 hover:bg-[#0b1728] border-slate-800 hover:border-slate-700 text-slate-200 hover:text-white'
        } border`}
        style={{
          boxShadow: isSelected
            ? `0 0 24px ${system.glowColor.replace('0.7', '0.25')}, inset 0 1px 1px rgba(255,255,255,0.1)`
            : isHovered
            ? `0 0 20px ${system.glowColor.replace('0.7', '0.35')}, 0 4px 12px rgba(5,10,18,0.7)`
            : 'none',
        }}
      >
        {/* Glow dot */}
        <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0 self-center">
          {/* Subtle pulsating halo if selected or hovered */}
          {(isSelected || isHovered) && (
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
              style={{
                backgroundColor: system.color,
                animationDuration: isHovered ? '1.5s' : '2.5s',
              }}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${glowClass}`}
            style={{
              backgroundColor: system.color,
              filter: `drop-shadow(0 0 ${4 * glowIntensity}px ${system.color})`,
            }}
          />
        </span>

        {/* Text */}
        <span className="truncate tracking-[-0.01em]">
          {system.name}
        </span>
      </button>
    );
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-4 sm:pt-8 md:pt-10 pb-12 sm:pb-16 select-text transition-all duration-300">
      {/* Background ambient lighting subtle glow */}
      <div
        className="pointer-events-none absolute -left-20 top-24 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(255,126,103,0.2) 0%, rgba(45,212,191,0.1) 70%, transparent 100%)',
        }}
      />

      {/* Main Section Header */}
      <div className="space-y-6 sm:space-y-8">
        {/* Exact Typography Clone */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-1"
        >
          <h1
            className={`${getFontClass()} text-4xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.08] sm:leading-[1.06] tracking-[-0.025em] text-slate-100 font-normal`}
          >
            <span className="block">Eight systems. One</span>
            <span className="block text-slate-300">overlapping reality.</span>
          </h1>
        </motion.div>

        {/* 8 Systems Pills Grid / Equalized Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 sm:pt-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
            {systems.map(renderPill)}
          </div>
        </motion.div>

        {/* Extended Section on Hover ONLY */}
        <AnimatePresence>
          {previewSystem && (
            <motion.div
              key={previewSystem.id}
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setHoveredSystemId(previewSystem.id)}
              onMouseLeave={() => setHoveredSystemId(null)}
              className="overflow-hidden pt-4"
            >
              <div
                className="p-5 sm:p-6 rounded-2xl bg-[#081220]/95 backdrop-blur-md border transition-all shadow-2xl space-y-4 border-slate-800"
                style={{
                  borderColor: `${previewSystem.color}50`,
                  boxShadow: `0 12px 36px -8px rgba(5,10,18,0.8), 0 0 28px ${previewSystem.glowColor.replace('0.7', '0.15')}`,
                }}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 shadow-sm"
                      style={{
                        backgroundColor: previewSystem.color,
                        boxShadow: `0 0 10px ${previewSystem.color}`,
                      }}
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium text-slate-100 tracking-tight">
                        {previewSystem.name}
                      </h3>
                      <span className="text-xs text-[#ff7e67] font-mono uppercase tracking-wider">
                        {previewSystem.category}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-slate-500 font-mono">
                    System 0{systems.indexOf(previewSystem) + 1} of 08
                  </span>
                </div>

                {/* Core Strategic Mandate Only */}
                <div className="space-y-3 pt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    <Compass className="w-4 h-4 text-[#ff7e67]" />
                    Core Strategic Mandate
                  </div>
                  <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-sans-body font-light">
                    {previewSystem.coreMandate}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
