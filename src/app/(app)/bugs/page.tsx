import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BugCase } from "@/types/bug";
import { Plus, Search, Filter } from "lucide-react";
import Link from "next/link";

const mockBugs: BugCase[] = [
  {
    id: "BUG-0482",
    title: "Authentication timeout intermittent failure",
    description: "Users are intermittently logged out after submitting the login form.",
    severity: "critical",
    status: "investigating",
    project: "ACA",
    assignee: { name: "Girum" },
    reportedAt: "2h ago",
    updatedAt: "8m ago",
    evidence: [],
    reproduction: [],
  },
  {
    id: "BUG-0481",
    title: "Mobile menu fails to close on item click",
    description: "Navigation overlay stays open after route change on iOS Safari.",
    severity: "high",
    status: "fixing",
    project: "ACA",
    assignee: { name: "Liya" },
    reportedAt: "5h ago",
    updatedAt: "1h ago",
    evidence: [],
    reproduction: [],
  },
  {
    id: "BUG-0480",
    title: "User avatar missing in settings page",
    description: "404 on default gravatar fallback URL.",
    severity: "low",
    status: "resolved",
    project: "ACA",
    assignee: { name: "Eyuel" },
    reportedAt: "1d ago",
    updatedAt: "3h ago",
    evidence: [],
    reproduction: [],
  },
  {
    id: "BUG-0479",
    title: "Checkout process crash on empty promo code",
    description: "Null pointer exception when applying empty discount field.",
    severity: "high",
    status: "verifying",
    project: "ACA",
    assignee: { name: "Girum" },
    reportedAt: "1d ago",
    updatedAt: "34m ago",
    evidence: [],
    reproduction: [],
  },
];

export default function BugsPage() {
  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-paper">Cases</h1>
          <p className="text-sm text-ash">Manage, investigate and verify reported software bugs.</p>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" /> Report Bug
        </Button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ash" />
          <input
            type="text"
            placeholder="Search bugs by ID, title or stack trace..."
            className="w-full rounded-sm border border-graphite-border bg-slate-card py-2 pl-9 pr-4 text-sm text-paper placeholder:text-ash focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember"
          />
        </div>
        <Button variant="secondary" className="gap-2">
          <Filter className="h-4 w-4" /> Filters
        </Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-graphite-border bg-midnight-950/50 text-xs font-mono uppercase text-ash">
                <tr>
                  <th className="px-6 py-3.5">ID</th>
                  <th className="px-6 py-3.5">Title</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5">Severity</th>
                  <th className="px-6 py-3.5">Assignee</th>
                  <th className="px-6 py-3.5">Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-graphite-border/60">
                {mockBugs.map((bug) => (
                  <tr
                    key={bug.id}
                    className="group hover:bg-white/[0.02] transition-colors cursor-pointer"
                  >
                    <td className="px-6 py-4 font-mono text-xs text-ember font-medium">
                      <Link href={`/bugs/${bug.id.toLowerCase()}`}>{bug.id}</Link>
                    </td>
                    <td className="px-6 py-4 font-medium text-paper group-hover:text-ember transition-colors">
                      <Link href={`/bugs/${bug.id.toLowerCase()}`}>{bug.title}</Link>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="ash">{bug.status}</Badge>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        variant={
                          bug.severity === "critical"
                            ? "ember"
                            : bug.severity === "high"
                              ? "signal"
                              : "ash"
                        }
                      >
                        {bug.severity}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-ash">{bug.assignee.name}</td>
                    <td className="px-6 py-4 text-ash font-mono text-xs">{bug.updatedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}