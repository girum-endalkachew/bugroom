"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ForensicScanner } from "@/components/marketing/forensic-scanner";
import { ArrowUpRight, Flame, Circle } from "lucide-react";

const ease: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto pt-10 sm:pt-16 pb-8">
      {/* Top meta bar — dossier style */}
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={ease}
        className="flex flex-wrap items-center justify-between gap-3 mb-10 sm:mb-14 border-b border-white/5 pb-4"
      >
        <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs tracking-[0.18em] text-ash uppercase">
          <span className="inline-flex items-center gap-1.5 text-ember">
            <Circle className="h-2 w-2 fill-ember text-ember animate-pulse" />
            Live room
          </span>
          <span className="text-white/10">|</span>
          <span>Case file protocol</span>
          <span className="text-white/10">|</span>
          <span>v0.1 · Phase 1</span>
        </div>
        <div className="font-mono text-[10px] sm:text-xs text-ash tracking-wider">
          WORKSPACE · ACA · 18 ACTIVE
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        {/* Left — editorial story */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div custom={1} initial="hidden" animate="visible" variants={ease} className="space-y-2">
            <div className="font-mono text-xs text-ember tracking-[0.25em]">
              BR — 00 · MANIFESTO
            </div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.05] text-paper">
              Software fails
              <span className="block text-ash font-normal italic mt-1">in chapters.</span>
            </h1>
          </motion.div>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={ease}
            className="text-base sm:text-lg text-ash leading-relaxed max-w-md border-l-2 border-ember/50 pl-5"
          >
            Bugroom is the room where those chapters are kept —
            <span className="text-paper"> evidence, reasoning, fix, and memory </span>
            in one continuous case.
          </motion.p>

          {/* Tagline chips — not a giant orange slogan block */}
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={ease}
            className="flex flex-wrap gap-2"
          >
            {["Find it", "Fix it", "Remember it"].map((t, idx) => (
              <span
                key={t}
                className={`font-mono text-xs sm:text-sm px-3 py-1.5 rounded-sm border ${
                  idx === 1
                    ? "border-ember-border bg-ember-dim text-ember"
                    : "border-graphite-border bg-midnight-950/80 text-paper"
                }`}
              >
                {String(idx + 1).padStart(2, "0")} · {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={ease}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link href="/overview">
              <Button
                variant="primary"
                size="lg"
                className="rounded-sm h-12 px-6 gap-2 shadow-[0_0_24px_rgba(255,104,53,0.25)]"
              >
                Enter investigation
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/bugs/bug-0482">
              <Button variant="outline" size="lg" className="rounded-sm h-12 px-6 font-mono text-xs tracking-wide">
                OPEN BUG-0482 →
              </Button>
            </Link>
          </motion.div>

          {/* Mini proof row */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={ease}
            className="grid grid-cols-3 gap-4 pt-6 max-w-md border-t border-white/5"
          >
            {[
              { n: "7", l: "Stage loop" },
              { n: "1", l: "Case file" },
              { n: "∞", l: "Memory" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-mono text-2xl text-paper">{s.n}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-ash mt-0.5">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — floating case board */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={ease}
          className="lg:col-span-6 relative"
        >
          {/* Decorative offset frame */}
          <div className="absolute -inset-3 rounded-lg border border-dashed border-white/5 pointer-events-none hidden sm:block" />
          <div className="absolute -top-3 -left-3 hidden sm:flex items-center gap-2 font-mono text-[10px] text-ash">
            <Flame className="h-3 w-3 text-ember" />
            EVIDENCE STREAM
          </div>

          <div className="relative rounded-md border border-graphite-border bg-gradient-to-b from-slate-card/90 to-midnight-950 p-1 shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/5">
              <span className="font-mono text-[10px] text-ember">BUG-0482 · CRITICAL</span>
              <span className="font-mono text-[10px] text-ash">AUTH · INVESTIGATING</span>
            </div>
            <div className="p-2 sm:p-3">
              <ForensicScanner />
            </div>
            <div className="px-3 py-2 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-ash">
              <span>symptom → trigger → cause</span>
              <span className="text-signal-success">verified path ready</span>
            </div>
          </div>

          {/* Floating note */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="hidden lg:block absolute -right-2 bottom-16 w-44 rounded-sm border border-ember-border/40 bg-midnight-950/95 p-3 shadow-xl backdrop-blur-md"
          >
            <div className="text-[9px] font-mono text-ember tracking-widest mb-1">NOTE</div>
            <p className="text-[11px] text-paper leading-snug">
              Refresh token never renewed before the expiry gate.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}