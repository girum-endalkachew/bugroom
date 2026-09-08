import { Card, CardContent, CardHeader, CardTitle } from \"@/components/ui/card\";
import { Badge } from \"@/components/ui/badge\";
import { CheckCircle2, GitCommit } from \"lucide-react\";

export function FixVerification() {
  return (
    <div className=\"space-y-6\">
      {/* Fix Code Diff */}
      <Card>
        <CardHeader className=\"flex flex-row items-center justify-between space-y-0\">
          <CardTitle className=\"text-base\">?? FIX IMPLEMENTATION</CardTitle>
          <div className=\"flex items-center gap-2 font-mono text-xs text-ash\">
            <GitCommit className=\"h-3.5 w-3.5 text-signal-blue\" />
            <span>Commit a81f29c</span>
          </div>
        </CardHeader>
        <CardContent className=\"space-y-4 font-mono text-xs\">
          <div className=\"rounded-sm border border-ember-border/50 bg-ember-dim/30 p-3 space-y-1\">
            <span className=\"text-ember font-bold\">BEFORE</span>
            <p className=\"text-paper/80\">if (!session) return null;</p>
          </div>
          <div className=\"rounded-sm border border-signal-success/30 bg-signal-success/10 p-3 space-y-1\">
            <span className=\"text-signal-success font-bold\">AFTER</span>
            <p className=\"text-paper\">await refreshSession();</p>
          </div>
        </CardContent>
      </Card>

      {/* Verification Checkpoints */}
      <Card>
        <CardHeader>
          <CardTitle className=\"text-base flex items-center justify-between\">
            <span>? VERIFICATION CHECKPOINTS</span>
            <Badge variant=\"success\">3 / 3 PASSED</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className=\"space-y-3\">
          {[
            \"Original reproduction flow verified clean\",
            \"Regression tests passed on /auth middleware\",
            \"Staging environment deployment verified\",
          ].map((check, i) => (
            <div key={i} className=\"flex items-center gap-3 rounded-sm border border-graphite-border bg-midnight-950 p-3 text-sm\">
              <CheckCircle2 className=\"h-4 w-4 text-signal-success shrink-0\" />
              <span className=\"text-paper\">{check}</span>
            </div>
          ))}
          <div className=\"pt-2 text-xs font-mono text-ash text-right\">
            Verified by <span className=\"text-paper font-semibold\">Girum</span> on Sept 8, 2026
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
