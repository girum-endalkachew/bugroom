import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Flame, ArrowRight } from "lucide-react";
import Link from "next/link";

const investigations = [
  {
    id: "BUG-0482",
    title: "Authentication timeout after login submit",
    stage: "Root cause mapping",
    severity: "critical",
    owner: "Girum",
    updatedAt: "8m ago",
  },
  {
    id: "BUG-0481",
    title: "Mobile menu fails to close on route change",
    stage: "Fix in progress",
    severity: "high",
    owner: "Liya",
    updatedAt: "1h ago",
  },
  {
    id: "BUG-0479",
    title: "Checkout crash on empty promo code",
    stage: "Verification",
    severity: "high",
    owner: "Girum",
    updatedAt: "34m ago",
  },
];

export default function InvestigationsPage() {
  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-ember text-sm font-mono font-medium mb-1">
          <Search className="h-4 w-4" /> ACTIVE FORENSIC WORK
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-paper">Investigations</h1>
        <p className="text-ash mt-1">Cases currently moving through reproduce, understand, fix, verify.</p>
      </div>

      <div className="space-y-4">
        {investigations.map((item) => (
          <Link key={item.id} href={`/bugs/${item.id.toLowerCase()}`}>
            <Card className="hover:border-ember-border transition-all mb-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-ember font-semibold">{item.id}</span>
                  <Badge variant={item.severity === "critical" ? "ember" : "signal"}>
                    {item.severity === "critical" ? (
                      <span className="inline-flex items-center gap-1">
                        <Flame className="h-3 w-3" /> {item.severity}
                      </span>
                    ) : (
                      item.severity
                    )}
                  </Badge>
                  <Badge variant="ash">{item.stage}</Badge>
                </div>
                <ArrowRight className="h-4 w-4 text-ash" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-base font-medium text-paper">{item.title}</CardTitle>
                <p className="text-xs font-mono text-ash mt-2">
                  {item.owner} · updated {item.updatedAt}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}