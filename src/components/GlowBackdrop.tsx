import React from 'react';
import { motion } from 'motion/react';

interface GlowBackdropProps {
  mousePos?: { x: number; y: number };
}

export const GlowBackdrop: React.FC<GlowBackdropProps> = ({ mousePos = { x: 0, y: 0 } }) => {
  // Smooth parallax offset
  const offsetX = mousePos.x * 25;
  const offsetY = mousePos.y * 25;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Base deep background */}
      <div className="absolute inset-0 bg-[#050a12]" />

      {/* Top Main Glow Orb */}
      <motion.div
        animate={{
          x: offsetX * 0.7,
          y: offsetY * 0.7,
          scale: [1, 1.05, 1],
        }}
        transition={{
          scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          x: { duration: 0.8, ease: 'easeOut' },
          y: { duration: 0.8, ease: 'easeOut' },
        }}
        className="absolute top-[-8%] left-[12%] md:left-[22%] lg:left-[28%] w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[650px] lg:h-[650px] rounded-full pointer-events-none"
      >
        {/* Outer Teal / Oceanic Aura */}
        <div
          className="absolute inset-0 rounded-full opacity-70 blur-[90px] md:blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.25) 0%, rgba(8, 18, 32, 0.6) 45%, rgba(5, 10, 18, 0) 75%)',
          }}
        />
        {/* Inner Warm Coral/Teal Core */}
        <div
          className="absolute top-[18%] left-[20%] w-[64%] h-[64%] rounded-full opacity-85 blur-[65px] md:blur-[85px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 126, 103, 0.55) 0%, rgba(45, 212, 191, 0.3) 40%, rgba(255, 126, 103, 0.15) 70%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Bottom Glow Orb */}
      <motion.div
        animate={{
          x: -offsetX * 0.5,
          y: -offsetY * 0.5,
          scale: [1, 1.08, 1],
        }}
        transition={{
          scale: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          x: { duration: 0.8, ease: 'easeOut' },
          y: { duration: 0.8, ease: 'easeOut' },
        }}
        className="absolute bottom-[-12%] left-[18%] md:left-[26%] lg:left-[34%] w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] lg:w-[600px] lg:h-[600px] rounded-full pointer-events-none"
      >
        {/* Outer subtle surface blend */}
        <div
          className="absolute inset-0 rounded-full opacity-60 blur-[85px] md:blur-[115px]"
          style={{
            background: 'radial-gradient(circle, rgba(45, 212, 191, 0.2) 0%, rgba(8, 18, 32, 0.4) 50%, transparent 75%)',
          }}
        />
        {/* Inner warm radiant coral/teal core */}
        <div
          className="absolute top-[15%] left-[18%] w-[68%] h-[68%] rounded-full opacity-80 blur-[60px] md:blur-[80px]"
          style={{
            background: 'radial-gradient(circle, rgba(255, 126, 103, 0.6) 0%, rgba(45, 212, 191, 0.35) 45%, transparent 80%)',
          }}
        />
      </motion.div>

      {/* Subtle atmospheric vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,10,18,0.7)_100%)] pointer-events-none" />
    </div>
  );
};
