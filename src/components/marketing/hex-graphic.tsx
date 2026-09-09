"use client";

import { motion } from "framer-motion";

export function HexGraphic() {
  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-ember/10 blur-[100px] rounded-full pointer-events-none" />
      
      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10 overflow-visible">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Ring/Grid Lines */}
        <motion.circle 
          cx="200" cy="200" r="160" 
          fill="none" stroke="rgba(139, 148, 158, 0.1)" strokeWidth="1" strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />

        {/* Connecting Lines */}
        <g stroke="rgba(139, 148, 158, 0.3)" strokeWidth="1.5">
          <motion.line x1="200" y1="200" x2="80" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
          <motion.line x1="200" y1="200" x2="320" y2="100" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
          <motion.line x1="200" y1="200" x2="80" y2="300" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
          <motion.line x1="200" y1="200" x2="320" y2="300" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
          <motion.line x1="200" y1="200" x2="360" y2="200" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }} />
        </g>

        {/* Central Hexagon */}
        <motion.polygon
          points="200,110 278,155 278,245 200,290 122,245 122,155"
          fill="rgba(255, 104, 53, 0.05)"
          stroke="#FF6835"
          strokeWidth="2"
          filter="url(#glow)"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Central Text */}
        <text x="200" y="205" textAnchor="middle" fill="#FF6835" className="font-mono text-sm font-bold" filter="url(#glow)">
          BUG-0482
        </text>

        {/* Satellite Nodes */}
        {[
          { cx: 80, cy: 100, label: "SYS" },
          { cx: 320, cy: 100, label: "NET" },
          { cx: 80, cy: 300, label: "LOG" },
          { cx: 320, cy: 300, label: "ERR" },
          { cx: 360, cy: 200, label: "DB" },
        ].map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.cx} cy={node.cy} r="20"
              fill="#0D1117" stroke="#21262D" strokeWidth="2"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + (i * 0.1) }}
            />
            <motion.circle
              cx={node.cx} cy={node.cy} r="4"
              fill="#8B949E"
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 + (i * 0.1) }}
            />
            <text x={node.cx} y={node.cy - 28} textAnchor="middle" fill="#8B949E" className="font-mono text-[10px]">
              {node.label}
            </text>
          </g>
        ))}

        {/* Active Pulses */}
        <motion.circle cx="320" cy="100" r="20" fill="none" stroke="#58A6FF" strokeWidth="1.5"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle cx="80" cy="300" r="20" fill="none" stroke="#FF6835" strokeWidth="1.5"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </svg>
    </div>
  );
}