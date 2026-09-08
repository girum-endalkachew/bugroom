import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EvidenceRoom } from "@/components/bugs/evidence-room";
import { ReproductionTimeline } from "@/components/bugs/reproduction-timeline";
import { RootCauseMap } from "@/components/bugs/root-cause-map";
import { FixVerification } from "@/components/bugs/fix-verification";
import { ArrowLeft, CheckCircle, Flame, User } from "lucide-react";
import Link from "next/link";

export default function BugCasePage() {
  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <Link href="/bugs" className="inline-flex items-center gap-2 text-sm text-ash hover:text-paper transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Cases
        </Link>
        <div className="flex gap-3">
          <Button variant="secondary">Edit Case</Button>
          <Button variant="primary" className="gap-2">
            <CheckCircle className="h-4 w-4" /> Verify Fix
          </Button>
        </div>
      </div>

      <div className="space-y-3 border-b border-graphite-border pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-ember font-semibold">BUG-0482</span>
          <Badge variant="ember" className="flex items-center gap-1">
            <Flame className="h-3 w-3" /> CRITICAL
          </Badge>
          <Badge variant="ash">INVESTIGATING</Badge>
        </div>
        <h1 className="text-3xl font-semibold text-paper">Authentication timeout after submitting login</h1>
        <div className="flex items-center gap-6 text-xs text-ash font-mono">
          <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" /> Assigned: Girum</span>
          <span>Project: ACA</span>
          <span>Reported: 2h ago</span>
        </div>
      </div>

      <div className="rounded-md border border-graphite-border bg-slate-card/40 p-6 space-y-2">
        <h3 className="text-xs font-mono uppercase text-ash tracking-wider">THE STORY · WHAT HAPPENED</h3>
        <p className="text-paper leading-relaxed">
          Users are intermittently logged out immediately after submitting valid credentials on the login form.
          The request hangs for several seconds before throwing a session refresh failure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <EvidenceRoom />
          <FixVerification />
        </div>
        <div className="space-y-6">
          <ReproductionTimeline />
          <RootCauseMap />
        </div>
      </div>
    </div>
  );
}