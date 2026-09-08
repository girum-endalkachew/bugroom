import { Card, CardContent, CardHeader, CardTitle } from \"@/components/ui/card\";
import { Badge } from \"@/components/ui/badge\";
import { BarChart3, TrendingUp, Clock, ShieldCheck, Zap } from \"lucide-react\";

export default function InsightsPage() {
  return (
    <div className=\"p-8 space-y-8 max-w-6xl mx-auto\">
      <div>
        <div className=\"flex items-center gap-2 text-signal-blue text-sm font-mono font-medium mb-1\">
          <BarChart3 className=\"h-4 w-4\" /> WORKSPACE & PERSONAL ANALYTICS
        </div>
        <h1 className=\"text-3xl font-semibold tracking-tight text-paper\">Insights</h1>
        <p className=\"text-ash mt-1\">Forensic metrics that answer questions, not just display charts.</p>
      </div>

      {/* Metrics Row */}
      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">
        <Card>
          <CardHeader className=\"pb-2\">
            <CardTitle className=\"text-sm text-ash flex items-center gap-2\">
              <Clock className=\"h-4 w-4 text-ember\" /> Avg Time to Resolve
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=\"text-3xl font-semibold text-paper font-mono\">2h 43m</div>
            <p className=\"text-xs text-signal-success mt-1\">? 18% faster than last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className=\"pb-2\">
            <CardTitle className=\"text-sm text-ash flex items-center gap-2\">
              <ShieldCheck className=\"h-4 w-4 text-signal-success\" /> First-Time Fix Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=\"text-3xl font-semibold text-paper font-mono\">89.4%</div>
            <p className=\"text-xs text-signal-success mt-1\">? 4.2% verification success</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className=\"pb-2\">
            <CardTitle className=\"text-sm text-ash flex items-center gap-2\">
              <Zap className=\"h-4 w-4 text-signal-blue\" /> Recurring Problems
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className=\"text-3xl font-semibold text-paper font-mono\">3 Categories</div>
            <p className=\"text-xs text-ash mt-1\">Auth (14), API (11), UI State (8)</p>
          </CardContent>
        </Card>
      </div>

      {/* Debugging Profile Section */}
      <Card className=\"border-ember-border/40 bg-gradient-to-br from-slate-card via-slate-card to-ember-dim/10\">
        <CardHeader>
          <div className=\"flex items-center justify-between\">
            <CardTitle className=\"text-base flex items-center gap-2\">
              <TrendingUp className=\"h-5 w-5 text-ember\" /> YOUR DEBUGGING PROFILE
            </CardTitle>
            <Badge variant=\"ember\">GIRUM · LEVEL 4 INVESTIGATOR</Badge>
          </div>
        </CardHeader>
        <CardContent className=\"grid grid-cols-1 md:grid-cols-4 gap-6 pt-2\">
          <div className=\"space-y-1\">
            <span className=\"text-xs font-mono text-ash\">AVERAGE RESOLUTION</span>
            <div className=\"text-xl font-bold text-signal-success font-mono\">? 34%</div>
            <p className=\"text-xs text-ash\">Resolving bugs faster</p>
          </div>

          <div className=\"space-y-1\">
            <span className=\"text-xs font-mono text-ash\">REPEATED MISTAKES</span>
            <div className=\"text-xl font-bold text-signal-success font-mono\">? 21%</div>
            <p className=\"text-xs text-ash\">Fewer duplicate root causes</p>
          </div>

          <div className=\"space-y-1\">
            <span className=\"text-xs font-mono text-ash\">STRONGEST AREA</span>
            <div className=\"text-xl font-bold text-paper font-mono\">Frontend</div>
            <p className=\"text-xs text-ash\">Fastest resolution time</p>
          </div>

          <div className=\"space-y-1\">
            <span className=\"text-xs font-mono text-ash\">AREA TO WATCH</span>
            <div className=\"text-xl font-bold text-ember font-mono\">Authentication</div>
            <p className=\"text-xs text-ash\">High complexity cases</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
