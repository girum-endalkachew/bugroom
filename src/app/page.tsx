"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ForensicScanner } from "@/components/marketing/forensic-scanner";
import { Flame, ArrowRight, BookOpen, Search, Layers, GitCommit } from "lucide-react";

export default function LandingPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="min-h-screen bg-midnight text-paper overflow-hidden selection:bg-ember/30 selection:text-paper">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute inset-0 bg-midnight [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Nav */}
      <header className="relative z-50 border-b border-white/5 bg-midnight-950/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded bg-ember/10 border border-ember-border shadow-[0_0_10px_rgba(255,104,53,0.2)]">
              <Flame className="h-3.5 w-3.5 text-ember" />
            </div>
            <span className="text-base font-semibold tracking-tight text-paper">Bugroom</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm" className="text-xs">Sign In</Button>
            </Link>
            <Link href="/overview">
              <Button variant="primary" size="sm" className="h-8 gap-2 text-xs">
                Launch App <ArrowRight className="h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-24 pb-32 px-6">
        {/* HERO */}
        <motion.section 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <Badge variant="outline" className="gap-2 border-white/10 bg-white/5 text-ash rounded-full px-4 py-1.5 shadow-xl">
              <span className="flex h-2 w-2 rounded-full bg-ember shadow-[0_0_8px_rgba(255,104,53,0.8)] animate-pulse" />
              Bugroom v1.0 is live
            </Badge>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-paper to-ash">
            Every bug has a story. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ember to-[#FF8C63]">
              Find it. Fix it. Remember it.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-ash max-w-2xl mx-auto leading-relaxed">
            Not just another issue tracker. An investigation room that preserves the entire lifecycle—evidence, root cause, and technical memory.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 pt-4">
            <Link href="/overview">
              <Button variant="primary" size="lg" className="rounded-full px-8 shadow-[0_0_20px_rgba(255,104,53,0.3)]">
                Start Investigating
              </Button>
            </Link>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ForensicScanner />
          </motion.div>
        </motion.section>

        {/* BENTO BOX FEATURES */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto mt-40 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Evidence */}
          <motion.div variants={fadeUp} className="md:col-span-2 glass-panel p-8 rounded-2xl border-white/5 bg-gradient-to-br from-slate-card/80 to-midnight relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-signal-blue/5 rounded-full blur-3xl group-hover:bg-signal-blue/10 transition-colors duration-700" />
            <Search className="h-8 w-8 text-signal-blue mb-6" />
            <h3 className="text-2xl font-semibold text-paper mb-2">The Evidence Room</h3>
            <p className="text-ash max-w-md">Attach console logs, network payloads, and environment states directly to the case. Stop the back-and-forth.</p>
          </motion.div>

          {/* Card 2: Knowledge */}
          <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl border-white/5 bg-gradient-to-bl from-slate-card/80 to-midnight relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-ember/5 rounded-full blur-3xl group-hover:bg-ember/10 transition-colors duration-700" />
            <BookOpen className="h-8 w-8 text-ember mb-6" />
            <h3 className="text-2xl font-semibold text-paper mb-2">Technical Memory</h3>
            <p className="text-ash">Turn resolved cases into a searchable knowledge graph so your team never solves the same bug twice.</p>
          </motion.div>

          {/* Card 3: Root Cause */}
          <motion.div variants={fadeUp} className="glass-panel p-8 rounded-2xl border-white/5 bg-gradient-to-tr from-slate-card/80 to-midnight relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-48 h-48 bg-signal-success/5 rounded-full blur-3xl group-hover:bg-signal-success/10 transition-colors duration-700" />
            <Layers className="h-8 w-8 text-signal-success mb-6" />
            <h3 className="text-2xl font-semibold text-paper mb-2">Reasoning Maps</h3>
            <p className="text-ash">Map symptoms to triggers to root causes.</p>
          </motion.div>

          {/* Card 4: Verification */}
          <motion.div variants={fadeUp} className="md:col-span-2 glass-panel p-8 rounded-2xl border-white/5 bg-gradient-to-tl from-slate-card/80 to-midnight relative overflow-hidden group flex flex-col justify-end">
            <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
            <GitCommit className="h-8 w-8 text-paper mb-6" />
            <h3 className="text-2xl font-semibold text-paper mb-2">Fix & Verify</h3>
            <p className="text-ash max-w-md">Connect directly to commits. Establish multi-stage verification checkpoints before a case is truly closed.</p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}