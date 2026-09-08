import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, AlertCircle, Zap, FileSearch, Target } from "lucide-react";

export function RootCauseMap() {
  const nodes = [
    {
      label: "SYMPTOM",
      text: "Login request hangs continuously",
      icon: AlertCircle,
      color: "text-ember",
    },
    {
      label: "TRIGGER",
      text: "Expired session token passed to auth middleware",
      icon: Zap,
      color: "text-signal-warning",
    },
    {
      label: "EVIDENCE",
      text: "401 Unauthorized from /api/session/refresh",
      icon: FileSearch,
      color: "text-signal-blue",
    },
    {
      label: "ROOT CAUSE",
      text: "Refresh token fails to renew prior to expiration check",
      icon: Target,
      color: "text-signal-success",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">INVESTIGATION REASONING MAP</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-full rounded-sm border border-graphite-border bg-midnight-950 p-4 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-ash">
                  <Icon className={`h-4 w-4 ${node.color}`} />
                  <span>{node.label}</span>
                </div>
                <p className="text-sm text-paper font-sans pl-6">{node.text}</p>
              </div>
              {idx < nodes.length - 1 && (
                <ArrowDown className="h-4 w-4 text-ash my-1 opacity-60" />
              )}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}