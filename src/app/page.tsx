import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, ArrowRight, ShieldCheck, Terminal, Search, BookOpen, CheckCircle2, Zap } from "lucide-react";

const coreLoop = [
  { step: "REPORT", desc: "Preserve full context on issue creation" },
  { step: "REPRODUCE", desc: "Interactive step-by-step visual timelines" },
  { step: "INVESTIGATE", desc: "Evidence room with console & network traces" },
  { step: "UNDERSTAND", desc: "Symptom → Trigger → Root Cause mapping" },
  { step: "FIX", desc: "Code diffs linked directly to commits" },
  { step: "VERIFY", desc: "Multi-stage verification checkpoints" },
  { step: "LEARN", desc: "Transform resolved bugs into technical memory" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-midnight text-paper flex flex-col justify-between selection:bg-ember/30 selection:text-paper">
      {/* Navigation */}
      <header className="border-b border-graphite-border bg-midnight-950/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-ember/10 border border-ember-border">
              <Flame className="h-4 w-4 text-ember" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-paper font-sans">Bugroom</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/overview">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/overview">
              <Button variant="primary" size="sm" className="gap-2">
                Launch Workspace <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="relative py-24 px-6 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ember/10 blur-[140px] rounded-full pointer-events-none" />
          
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <Badge variant="ember" className="inline-flex items-center gap-1 px-3 py-1">
              <Flame className="h-3.5 w-3.5" /> FORENSIC BUG INVESTIGATION
            </Badge>

            <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight text-paper font-sans">
              Every bug has a story. <br />
              <span className="text-ember">Find it. Fix it. Remember it.</span>
            </h1>

            <p className="text-lg text-ash max-w-2xl mx-auto leading-relaxed">
              Bugroom isn't just storing ticket titles. It preserves the complete investigation context—screenshots, network logs, step-by-step reproduction, and root causes.
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="/overview">
                <Button variant="primary" size="lg" className="gap-2 text-base px-8">
                  Open Workspace <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/bugs/bug-0482">
                <Button variant="secondary" size="lg" className="text-base">
                  View Live Case Study
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Visual Preview Room */}
        <section className="max-w-5xl mx-auto px-6 pb-20">
          <div className="glass-panel rounded-md p-6 border border-graphite-border shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-graphite-border pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-ember font-bold">BUG-0482</span>
                <Badge variant="ember">CRITICAL</Badge>
                <span className="text-sm font-medium text-paper">Authentication timeout after submitting login</span>
              </div>
              <Badge variant="success">VERIFIED FIX</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="rounded-sm bg-midnight-950 p-3 border border-graphite-border space-y-1">
                <span className="text-ash flex items-center gap-1.5"><Terminal className="h-3.5 w-3.5 text-ember" /> CONSOLE</span>
                <p className="text-ember">TypeError: session is null</p>
              </div>
              <div className="rounded-sm bg-midnight-950 p-3 border border-graphite-border space-y-1">
                <span className="text-ash flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-signal-blue" /> NETWORK</span>
                <p className="text-paper">POST /api/auth 401 Unauthorized</p>
              </div>
              <div className="rounded-sm bg-midnight-950 p-3 border border-graphite-border space-y-1">
                <span className="text-ash flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-signal-success" /> CHECKPOINT</span>
                <p className="text-signal-success">✓ 3/3 Tests Passed</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Core Loop */}
        <section className="border-t border-graphite-border/60 bg-midnight-950/40 py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-2">
              <h2 className="text-xs font-mono uppercase text-ember tracking-widest">THE FORENSIC CYCLE</h2>
              <p className="text-2xl font-semibold text-paper">The Bugroom Core Loop</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-3">
              {coreLoop.map((item, idx) => (
                <div key={item.step} className="rounded-sm border border-graphite-border bg-slate-card/60 p-4 space-y-2 flex flex-col justify-between text-center">
                  <div className="font-mono text-xs text-ember font-bold">{String(idx + 1).padStart(2, "0")}</div>
                  <div className="font-mono text-xs font-semibold text-paper">{item.step}</div>
                  <div className="text-[11px] text-ash leading-snug">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-graphite-border py-8 px-6 text-center text-xs text-ash font-mono">
        <p>Bugroom — Technical memory & forensic investigation platform for engineering teams.</p>
      </footer>
    </div>
  );
}