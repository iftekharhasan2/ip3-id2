import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SYSTEM_NODES, SystemNodeId } from '../data/systemsData';

interface OrbitalSystemProps {
  onSelectNode: (nodeId: SystemNodeId) => void;
  selectedNodeId?: SystemNodeId | null;
  className?: string;
}

export const OrbitalSystem: React.FC<OrbitalSystemProps> = ({
  onSelectNode,
  selectedNodeId,
  className = '',
}) => {
  const [hoveredNode, setHoveredNode] = useState<SystemNodeId | null>(null);

  // Exact positions mapped for orbital layout
  // Canvas coordinate system (0 to 100% center at 50, 50)
  const nodePositions: Record<SystemNodeId, { x: number; y: number; ring: number }> = {
    institutions: { x: 50, y: 15, ring: 3 },
    policy: { x: 19, y: 44, ring: 3 },
    evidence: { x: 81, y: 44, ring: 3 },
    technology: { x: 23, y: 76, ring: 3 },
    finance: { x: 77, y: 76, ring: 3 },
    core: { x: 50, y: 50, ring: 0 },
  };

  const activeNodeData = hoveredNode ? SYSTEM_NODES[hoveredNode] : null;

  return (
    <div
      id="orbital-system-container"
      className={`relative w-full max-w-[580px] aspect-square mx-auto flex items-center justify-center select-none ${className}`}
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[85%] h-[85%] rounded-full bg-teal-950/20 blur-3xl opacity-70" />
        <div className="w-[50%] h-[50%] rounded-full bg-teal-500/10 blur-2xl opacity-60 animate-pulse" />
      </div>

      {/* SVG Vector Connections & Orbital Rings */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-1000"
        viewBox="0 0 500 500"
      >
        <defs>
          <radialGradient id="centerGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0f766e" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#050a12" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="laserLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Ring */}
        <ellipse
          cx="250"
          cy="250"
          rx="210"
          ry="195"
          fill="none"
          stroke="rgba(45, 212, 191, 0.16)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Middle Orbit Ring */}
        <ellipse
          cx="250"
          cy="250"
          rx="155"
          ry="142"
          fill="none"
          stroke="rgba(45, 212, 191, 0.22)"
          strokeWidth="1.2"
        />

        {/* Inner Orbit Ring */}
        <ellipse
          cx="250"
          cy="250"
          rx="105"
          ry="96"
          fill="none"
          stroke="rgba(45, 212, 191, 0.28)"
          strokeWidth="1"
          strokeDasharray="2 4"
        />

        {/* Radial Center Ambient Fill */}
        <circle cx="250" cy="250" r="130" fill="url(#centerGlowGrad)" />

        {/* Active connection rays when hovering a node */}
        {hoveredNode && hoveredNode !== 'core' && (
          <g className="transition-all duration-300">
            {/* Ray from node to IP3 Center Core */}
            <line
              x1={nodePositions[hoveredNode].x * 5}
              y1={nodePositions[hoveredNode].y * 5}
              x2="250"
              y2="250"
              stroke="#2dd4bf"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              className="animate-pulse"
            />
            {/* Ray to secondary interconnected nodes */}
            {SYSTEM_NODES[hoveredNode].connections.map((targetId) => {
              if (targetId === 'core') return null;
              const targetPos = nodePositions[targetId];
              return (
                <line
                  key={`ray-${hoveredNode}-${targetId}`}
                  x1={nodePositions[hoveredNode].x * 5}
                  y1={nodePositions[hoveredNode].y * 5}
                  x2={targetPos.x * 5}
                  y2={targetPos.y * 5}
                  stroke="rgba(56, 189, 248, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />
              );
            })}
          </g>
        )}
      </svg>

      {/* 1. TOP NODE: INSTITUTIONS */}
      <div
        style={{
          left: `${nodePositions.institutions.x}%`,
          top: `${nodePositions.institutions.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute z-10"
      >
        <motion.button
          id="node-institutions-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onMouseEnter={() => setHoveredNode('institutions')}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => onSelectNode('institutions')}
          className={`group px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            hoveredNode === 'institutions' || selectedNodeId === 'institutions'
              ? 'bg-[#0b1d33] border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] ring-1 ring-cyan-400'
              : 'bg-[#071322]/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
          INSTITUTIONS
        </motion.button>
      </div>

      {/* 2. LEFT NODE: POLICY */}
      <div
        style={{
          left: `${nodePositions.policy.x}%`,
          top: `${nodePositions.policy.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute z-10"
      >
        <motion.button
          id="node-policy-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onMouseEnter={() => setHoveredNode('policy')}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => onSelectNode('policy')}
          className={`group pl-4 pr-[16px] mr-[16px] py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            hoveredNode === 'policy' || selectedNodeId === 'policy'
              ? 'bg-[#261313] border-[#ff7e67] text-[#ffa190] shadow-[0_0_20px_rgba(255,126,103,0.4)] ring-1 ring-[#ff7e67]'
              : 'bg-[#071322]/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff7e67] group-hover:animate-ping" />
          POLICY
        </motion.button>
      </div>

      {/* 3. RIGHT NODE: EVIDENCE */}
      <div
        style={{
          left: `${nodePositions.evidence.x}%`,
          top: `${nodePositions.evidence.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute z-10"
      >
        <motion.button
          id="node-evidence-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onMouseEnter={() => setHoveredNode('evidence')}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => onSelectNode('evidence')}
          className={`group ml-[30px] px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            hoveredNode === 'evidence' || selectedNodeId === 'evidence'
              ? 'bg-[#0d221c] border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)] ring-1 ring-emerald-400'
              : 'bg-[#071322]/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
          EVIDENCE
        </motion.button>
      </div>

      {/* 4. BOTTOM LEFT NODE: TECHNOLOGY */}
      <div
        style={{
          left: `${nodePositions.technology.x}%`,
          top: `${nodePositions.technology.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute z-10"
      >
        <motion.button
          id="node-technology-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onMouseEnter={() => setHoveredNode('technology')}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => onSelectNode('technology')}
          className={`group px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            hoveredNode === 'technology' || selectedNodeId === 'technology'
              ? 'bg-[#151532] border-indigo-400 text-indigo-300 shadow-[0_0_20px_rgba(129,140,248,0.4)] ring-1 ring-indigo-400'
              : 'bg-[#071322]/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:animate-ping" />
          TECHNOLOGY
        </motion.button>
      </div>

      {/* 5. BOTTOM RIGHT NODE: FINANCE */}
      <div
        style={{
          left: `${nodePositions.finance.x}%`,
          top: `${nodePositions.finance.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute z-10"
      >
        <motion.button
          id="node-finance-btn"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          onMouseEnter={() => setHoveredNode('finance')}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => onSelectNode('finance')}
          className={`group px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
            hoveredNode === 'finance' || selectedNodeId === 'finance'
              ? 'bg-[#2b220e] border-amber-400 text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.4)] ring-1 ring-amber-400'
              : 'bg-[#071322]/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover:animate-ping" />
          FINANCE
        </motion.button>
      </div>

      {/* CENTER CORE: IP3 + SYSTEM OVERLAPS */}
      <div className="absolute z-15 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.button
          id="node-core-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onMouseEnter={() => setHoveredNode('core')}
          onMouseLeave={() => setHoveredNode(null)}
          onClick={() => onSelectNode('core')}
          className="relative w-36 h-36 md:w-44 md:h-44 rounded-full flex flex-col items-center justify-center p-3 text-center cursor-pointer transition-all duration-500 group shadow-[0_0_40px_rgba(45,212,191,0.25)]"
        >
          {/* Glowing Radial Core Background */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#08182b] via-[#040e1b] to-[#02060c] border border-teal-500/40 group-hover:border-teal-400/80 group-hover:shadow-[0_0_50px_rgba(45,212,191,0.4)] transition-all duration-500" />

          {/* Internal rotating subtle ring */}
          <div className="absolute inset-2 rounded-full border border-teal-400/20 border-dashed animate-spin [animation-duration:20s] pointer-events-none" />

          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="font-serif font-bold text-3xl md:text-4xl text-white tracking-wide group-hover:text-teal-200 transition-colors drop-shadow-md">
              IP3
            </span>
            <span className="mt-1 font-mono text-[8.5px] md:text-[9.5px] text-teal-300/90 tracking-[0.2em] uppercase font-semibold">
              SYSTEM OVERLAPS
            </span>
          </div>

          {/* Pulsing radar point in center */}
          <div className="absolute bottom-4 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400/80 animate-ping" />
          </div>
        </motion.button>
      </div>

      {/* Floating Hover Context Preview Card */}
      <AnimatePresence>
        {activeNodeData && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-72 bg-[#081424]/95 backdrop-blur-md border border-teal-500/30 rounded-xl p-2.5 shadow-2xl text-center"
          >
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeNodeData.color }}
              />
              <span>{activeNodeData.label}</span>
              <span className="text-[10px] text-slate-400 font-normal">
                • {activeNodeData.category}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 mt-1 line-clamp-2 leading-relaxed font-light">
              {activeNodeData.tagline}
            </p>
            <div className="text-[9px] font-mono text-teal-400 mt-1 uppercase tracking-wider">
              Click node for full system architecture
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
