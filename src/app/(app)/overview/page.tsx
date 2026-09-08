import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, CheckCircle2, AlertTriangle, Clock } from "lucide-react";

export default function OverviewPage() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-paper">Good evening, Girum</h1>
        <p className="mt-2 text-ash">
          Your workspace has <span className="text-paper font-medium">18 active cases</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="relative overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ash flex items-center gap-2">
              <Flame className="h-4 w-4 text-ember" /> Active Investigations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-paper">18</div>
            <p className="text-xs text-ash mt-1">↑ 12% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ash flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-ember" /> Critical
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-ember">2</div>
            <p className="text-xs text-ash mt-1">Needs immediate attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ash flex items-center gap-2">
              <Clock className="h-4 w-4 text-signal-blue" /> Needs Attention
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-paper">5</div>
            <p className="text-xs text-ash mt-1">Awaiting investigation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-ash flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-signal-success" /> Resolved
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-semibold text-signal-success">47</div>
            <p className="text-xs text-ash mt-1">This month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="mt-1 h-2 w-2 rounded-full bg-ember shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-ember">BUG-0482</span>
                <Badge variant="ember">Critical</Badge>
              </div>
              <p className="text-sm text-paper">Authentication timeout</p>
              <p className="text-xs text-ash">Girum · 8 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 h-2 w-2 rounded-full bg-signal-success shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-ash">BUG-0479</span>
                <Badge variant="success">Resolved</Badge>
              </div>
              <p className="text-sm text-paper">Mobile navigation fixed</p>
              <p className="text-xs text-ash">Liya · 34 minutes ago</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}