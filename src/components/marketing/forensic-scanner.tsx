"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldAlert, Zap, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

export function ForensicScanner() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto mt-12 rounded-md border border-graphite-border bg-midnight-950/80 backdrop-blur-2xl shadow-2xl shadow-ember/5 overflow-hidden">
      {/* Mac-like Window Header */}
      <div className="h-10 border-b border-graphite-border flex items-center px-4 gap-2 bg-slate-card/50">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-graphite-hover" />
          <div className="h-2.5 w-2.5 rounded-full bg-graphite-hover" />
          <div className="h-2.5 w-2.5 rounded-full bg-graphite-hover" />
        </div>
        <div className="mx-auto flex items-center gap-2 font-mono text-[10px] text-ash tracking-widest">
          <ShieldAlert className="h-3 w-3 text-ember" /> BUG-0482_INVESTIGATION
        </div>
      </div>

      <div className="p-6 font-mono text-xs space-y-4 relative min-h-[220px]">
        {/* Animated Scanline */}
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="absolute left-0 right-0 h-[1px] bg-ember/40 shadow-[0_0_8px_2px_rgba(255,104,53,0.3)] z-10"
        />

        {/* Step 1: Log */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: step >= 0 ? 1 : 0, x: step >= 0 ? 0 : -10 }}
          className="flex gap-3 text-ash"
        >
          <Terminal className="h-4 w-4 shrink-0 text-ash" />
          <div>
            <div className="text-paper">POST /api/auth/login <span className="text-signal-success">200 OK</span></div>
            <div className="mt-1">session_token: generated...</div>
          </div>
        </motion.div>

        {/* Step 2: The Bug */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: step >= 1 ? 1 : 0, x: step >= 1 ? 0 : -10 }}
          className="flex gap-3"
        >
          <Zap className="h-4 w-4 shrink-0 text-ember" />
          <div className="rounded-sm border border-ember-border/50 bg-ember-dim/30 p-2 text-ember">
            <div>TypeError: Cannot read properties of undefined (reading 'refresh')</div>
            <div className="text-[10px] opacity-70 mt-1">at AuthMiddleware (middleware.ts:42:12)</div>
          </div>
        </motion.div>

        {/* Step 3: Root Cause Mapping */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }} 
          animate={{ opacity: step >= 2 ? 1 : 0, x: step >= 2 ? 0 : -10 }}
          className="flex gap-3 text-signal-blue"
        >
          <div className="h-4 w-4 shrink-0 flex items-center justify-center font-bold">↳</div>
          <div>
            <div className="font-bold">ROOT CAUSE ISOLATED</div>
            <div className="text-[10px] text-ash">Session expiration unhandled before protected API.</div>
          </div>
        </motion.div>

        {/* Step 4: Verification */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: step >= 3 ? 1 : 0, scale: step >= 3 ? 1 : 0.95 }}
          className="flex gap-3"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-signal-success" />
          <div className="text-signal-success font-bold">
            COMMIT a81f29c VERIFIED
          </div>
        </motion.div>
      </div>
    </div>
  );
}