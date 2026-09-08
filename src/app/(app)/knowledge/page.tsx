import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Search, Network } from "lucide-react";

export default function KnowledgePage() {
  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-ember text-sm font-mono font-medium mb-1">
          <BookOpen className="h-4 w-4" /> TECHNICAL MEMORY ENGINE
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-paper">Knowledge Base</h1>
        <p className="text-ash mt-1">Lessons extracted from resolved cases across all team projects.</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ash" />
        <input
          type="text"
          placeholder="Search technical memory (e.g. authentication refresh token)..."
          className="w-full rounded-md border border-graphite-border bg-slate-card py-3 pl-12 pr-4 text-sm text-paper placeholder:text-ash focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="signal">Authentication</Badge>
                <span className="font-mono text-xs text-ash">3 related cases</span>
              </div>
              <CardTitle className="text-lg mt-2">Session expiration in protected API middleware</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="rounded-sm bg-midnight-950 p-4 border border-graphite-border space-y-2">
                <span className="text-xs font-mono text-ember font-bold">WHAT WAS LEARNED</span>
                <p className="text-paper">
                  Session expiration must be renewed before protected API requests, not during payload validation.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-ash">
                <span>Related:</span>
                <span className="text-ember">BUG-031</span>
                <span className="text-ember">BUG-219</span>
                <span className="text-ember">BUG-482</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Network className="h-4 w-4 text-signal-blue" /> KNOWLEDGE GRAPH
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-xs">
            <div className="p-3 rounded-sm border border-graphite-border bg-midnight-950 space-y-2">
              <div className="text-paper font-bold">Authentication</div>
              <div className="pl-4 border-l-2 border-graphite-border space-y-1 text-ash">
                <div>JWT Validation</div>
                <div>OAuth Callbacks</div>
                <div>Sessions</div>
                <div className="pl-4 text-ember">Refresh and Expiry</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}