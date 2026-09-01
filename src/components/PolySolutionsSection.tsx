import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LAYERS_DATA } from '../data/layersData';
import { LayerCard } from './LayerCard';
import { LayerData } from '../types';

export const PolySolutionsSection: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<LayerData | null>(null);

  const handleSelectCard = (layer: LayerData) => {
    setSelectedLayer((prev) => (prev?.id === layer.id ? null : layer));
  };

  return (
    <section
      id="polysolutions-section"
      className="relative w-full bg-[#050a12] pt-20 sm:pt-28 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Ambient Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff7e67]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2dd4bf]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#ff7e67] font-semibold">
              SYSTEMIC EXECUTION ENGINE
            </span>
          </div>

          <h2
            id="polysolutions-headline"
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-slate-100 font-bold tracking-tight leading-[1.15]"
          >
            From poly-crises to poly-solutions.
          </h2>

          <p
            id="polysolutions-subtext"
            className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Context-responsive, evidence-led, technology-enabled solutions — built for scale, equity,
            resilience, and institutional adoption.
          </p>
        </div>

        {/* 3-Tier Layer Cards Grid */}
        <div
          id="polysolutions-grid"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {LAYERS_DATA.map((layer, index) => (
            <LayerCard
              key={layer.id}
              layer={layer}
              index={index}
              isSelected={selectedLayer?.id === layer.id}
              onSelect={handleSelectCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolySolutionsSection;
