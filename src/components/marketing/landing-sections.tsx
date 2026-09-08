"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Flame,
  Search,
  Terminal,
  GitCommit,
  BookOpen,
  ShieldCheck,
  ArrowDown,
  Bug,
  Layers,
  Sparkles,
} from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const loop = [
  { id: "01", title: "REPORT", text: "Capture the full story — not a one-line ticket title." },
  { id: "02", title: "REPRODUCE", text: "Step-by-step visual timelines anyone can follow." },
  { id: "03", title: "INVESTIGATE", text: "Console, network, environment — one evidence room." },
  { id: "04", title: "UNDERSTAND", text: "Symptom → trigger → evidence → root cause." },
  { id: "05", title: "FIX", text: "Before/after diffs tied to real commits." },
  { id: "06", title: "VERIFY", text: "A bug is done only when verification passes." },
  { id: "07", title: "LEARN", text: "Resolved cases become searchable team memory." },
];

const principles = [
  {
    icon: Search,
    title: "Context is the product",
    body: "Missing reproduction details waste days. Bugroom stores the entire case — screenshots, logs, environment, and reasoning.",
  },
  {
    icon: Layers,
    title: "Investigation, not tickets",
    body: "Status columns are not enough. We visualize the forensic path from symptom to verified fix.",
  },
  {
    icon: BookOpen,
    title: "Memory compounds",
    body: "Every closed case teaches the next one. Related bugs, root causes, and lessons stay linked.",
  },
];

export function LandingSections() {
  return (
    <div className="relative z-10">
      {/* Scroll cue */}
      <div className="flex justify-center pb-16">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-ash"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Scroll the investigation</span>
          <ArrowDown className="h-4 w-4 text-ember" />
        </motion.div>
      </div>

      {/* Core loop */}
      <section className="border-t border-white/5 bg-midnight-950/50 py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-6xl mx-auto space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center space-y-3">
            <Badge variant="ember" className="font-mono text-[10px] tracking-widest">
              THE CORE LOOP
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-paper">
              From report to memory
            </h2>
            <p className="text-ash max-w-xl mx-auto text-sm sm:text-base">
              Seven stages. One continuous case file. Nothing important falls out of the thread.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {loop.map((item, i) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="relative rounded-md border border-graphite-border bg-slate-card/40 p-4 hover:border-ember-border/60 hover:bg-ember-dim/20 transition-all duration-300 group"
              >
                <div className="font-mono text-[10px] text-ember mb-3">{item.id}</div>
                <div className="font-mono text-xs font-bold text-paper tracking-wide mb-2 group-hover:text-ember transition-colors">
                  {item.title}
                </div>
                <p className="text-[11px] leading-relaxed text-ash">{item.text}</p>
                {i < loop.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-ash/40 text-xs z-10">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-6xl mx-auto space-y-14"
        >
          <motion.div variants={fadeUp} className="max-w-2xl space-y-3">
            <div className="flex items-center gap-2 text-ember text-xs font-mono tracking-widest">
              <Sparkles className="h-3.5 w-3.5" /> WHY BUGROOM
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-paper">
              Built for engineers who care about the whole story
            </h2>
            <p className="text-ash">
              Most trackers optimize for closing tickets. Bugroom optimizes for understanding software failures — and never forgetting what you learned.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  className="glass-panel rounded-2xl p-7 border-white/5 hover:border-ember-border/40 transition-all duration-500 group"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm border border-graphite-border bg-midnight-950 group-hover:border-ember-border group-hover:bg-ember-dim transition-colors">
                    <Icon className="h-5 w-5 text-ember" />
                  </div>
                  <h3 className="text-lg font-semibold text-paper mb-2">{p.title}</h3>
                  <p className="text-sm text-ash leading-relaxed">{p.body}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Case walkthrough strip */}
      <section className="border-y border-white/5 bg-gradient-to-b from-midnight-950/80 to-midnight py-24 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="max-w-6xl mx-auto space-y-12"
        >
          <motion.div variants={fadeUp} className="text-center space-y-3">
            <Badge variant="signal" className="font-mono text-[10px]">LIVE CASE ANATOMY</Badge>
            <h2 className="text-3xl sm:text-4xl font-semibold text-paper tracking-tight">
              Inside BUG-0482
            </h2>
            <p className="text-ash text-sm max-w-lg mx-auto">
              A single authentication timeout — fully preserved as story, evidence, root cause, and verified fix.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: Bug,
                label: "THE STORY",
                title: "Intermittent logout after sign-in",
                body: "Users submit valid credentials. The request hangs. Session refresh fails. Context was incomplete in every previous tracker.",
                tone: "text-ember",
              },
              {
                icon: Terminal,
                label: "EVIDENCE",
                title: "Console + network + environment",
                body: "TypeError on token read. 401 from /api/session/refresh. Chrome 128 · 1440×900. All attached to one room.",
                tone: "text-signal-blue",
              },
              {
                icon: Layers,
                label: "ROOT CAUSE",
                title: "Refresh never ran before expiry check",
                body: "Symptom → expired token trigger → 401 evidence → middleware root cause. Mapped, not guessed.",
                tone: "text-signal-warning",
              },
              {
                icon: ShieldCheck,
                label: "VERIFIED",
                title: "Commit a81f29c · 3/3 checkpoints",
                body: "Reproduction clean. Regression green. Staging verified. Closed with a lesson in the knowledge graph.",
                tone: "text-signal-success",
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  variants={fadeUp}
                  className="rounded-2xl border border-graphite-border bg-slate-card/50 p-6 hover:border-white/15 transition-all duration-300"
                >
                  <div className={`flex items-center gap-2 text-[10px] font-mono tracking-widest mb-3 ${card.tone}`}>
                    <Icon className="h-3.5 w-3.5" />
                    {card.label}
                  </div>
                  <h3 className="text-lg font-semibold text-paper mb-2">{card.title}</h3>
                  <p className="text-sm text-ash leading-relaxed">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Stats band */}
      <section className="py-20 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { k: "2h 43m", v: "Avg time to resolve" },
            { k: "89%", v: "First-time fix rate" },
            { k: "7 stages", v: "Full forensic loop" },
            { k: "∞", v: "Lessons retained" },
          ].map((s) => (
            <motion.div key={s.v} variants={fadeUp} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-semibold font-mono text-paper">{s.k}</div>
              <div className="text-xs text-ash font-mono tracking-wide">{s.v}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl border border-ember-border/40 bg-gradient-to-br from-ember-dim/40 via-slate-card to-midnight-950 p-10 sm:p-14 text-center"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 bg-ember/20 blur-[100px] rounded-full pointer-events-none" />
          <Flame className="h-8 w-8 text-ember mx-auto mb-5 relative" />
          <h2 className="text-3xl sm:text-4xl font-semibold text-paper relative mb-3">
            Open the investigation room
          </h2>
          <p className="text-ash max-w-md mx-auto mb-8 relative text-sm sm:text-base">
            Stop losing context between Slack, Jira, and half-written tickets. Preserve the full lifecycle of every bug.
          </p>
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/overview"
              className="inline-flex h-12 items-center justify-center rounded-full bg-ember px-8 text-sm font-medium text-white shadow-[0_0_24px_rgba(255,104,53,0.35)] hover:bg-ember-hover transition-colors"
            >
              Launch workspace
            </a>
            <a
              href="/bugs/bug-0482"
              className="inline-flex h-12 items-center justify-center rounded-full border border-graphite-border bg-midnight-950/60 px-8 text-sm font-medium text-paper hover:border-ash transition-colors"
            >
              Inspect sample case
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ash">
          <div className="flex items-center gap-2">
            <Flame className="h-3.5 w-3.5 text-ember" />
            <span>Bugroom — every bug has a story</span>
          </div>
          <div className="flex gap-6">
            <span>Overview</span>
            <span>Cases</span>
            <span>Knowledge</span>
            <span>Insights</span>
          </div>
        </div>
      </footer>
    </div>
  );
}