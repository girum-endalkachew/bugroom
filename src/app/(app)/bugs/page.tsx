"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReportBugModal } from "@/components/bugs/report-bug-modal";
import { BugCase, BugStatus } from "@/types/bug";
import { Plus, Search, Filter, LayoutList, Kanban, Flame, User } from "lucide-react";
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

const kanbanColumns: { id: BugStatus; title: string }[] = [
  { id: "reported", title: "Reported" },
  { id: "investigating", title: "Investigating" },
  { id: "fixing", title: "Fixing" },
  { id: "verifying", title: "Verifying" },
  { id: "resolved", title: "Resolved" },
];

export default function BugsPage() {
  const [viewMode, setViewMode] = useState<"list" | "kanban">("list");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-8 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-paper">Cases</h1>
          <p className="text-sm text-ash">Manage, investigate and verify reported software bugs.</p>
        </div>
        <Button variant="primary" className="gap-2" onClick={() => setIsModalOpen(true)}>
          <Plus className="h-4 w-4" /> Report Case
        </Button>
      </div>

      {/* Filter & View Switcher Bar */}
      <div className="flex items-center justify-between gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ash" />
          <input
            type="text"
            placeholder="Search bugs by ID, title or stack trace..."
            className="w-full rounded-sm border border-graphite-border bg-slate-card py-2 pl-9 pr-4 text-sm text-paper placeholder:text-ash focus:border-ember focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex rounded-sm border border-graphite-border bg-midnight-950 p-1">
            <button
              onClick={() => setViewMode("list")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-xs transition-colors ${
                viewMode === "list" ? "bg-ember-dim text-ember font-bold" : "text-ash hover:text-paper"
              }`}
            >
              <LayoutList className="h-3.5 w-3.5" /> List
            </button>
            <button
              onClick={() => setViewMode("kanban")}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-xs transition-colors ${
                viewMode === "kanban" ? "bg-ember-dim text-ember font-bold" : "text-ash hover:text-paper"
              }`}
            >
              <Kanban className="h-3.5 w-3.5" /> Kanban
            </button>
          </div>
          <Button variant="secondary" className="gap-2 text-xs">
            <Filter className="h-3.5 w-3.5" /> Filters
          </Button>
        </div>
      </div>

      {/* LIST VIEW */}
      {viewMode === "list" && (
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
                    <tr key={bug.id} className="group hover:bg-white/[0.02] transition-colors">
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
                        <Badge variant={bug.severity === "critical" ? "ember" : bug.severity === "high" ? "signal" : "ash"}>
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
      )}

      {/* KANBAN BOARD VIEW */}
      {viewMode === "kanban" && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {kanbanColumns.map((col) => {
            const bugsInCol = mockBugs.filter((b) => b.status === col.id);
            return (
              <div key={col.id} className="rounded-md border border-graphite-border bg-midnight-950/60 p-3 space-y-3 min-w-[220px]">
                <div className="flex items-center justify-between border-b border-graphite-border pb-2 font-mono text-xs">
                  <span className="font-bold text-paper uppercase tracking-wider">{col.title}</span>
                  <span className="text-ash font-mono">({bugsInCol.length})</span>
                </div>
                <div className="space-y-3">
                  {bugsInCol.map((bug) => (
                    <Link key={bug.id} href={`/bugs/${bug.id.toLowerCase()}`}>
                      <div className="rounded-sm border border-graphite-border bg-slate-card p-3 space-y-2 hover:border-ember-border transition-all cursor-pointer">
                        <div className="flex items-center justify-between font-mono text-xs">
                          <span className="text-ember font-bold">{bug.id}</span>
                          <Badge variant={bug.severity === "critical" ? "ember" : "ash"}>{bug.severity}</Badge>
                        </div>
                        <p className="text-xs font-medium text-paper line-clamp-2">{bug.title}</p>
                        <div className="flex items-center justify-between pt-2 border-t border-graphite-border/40 text-[10px] text-ash font-mono">
                          <span className="flex items-center gap-1"><User className="h-3 w-3" /> {bug.assignee.name}</span>
                          <span>{bug.updatedAt}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      <ReportBugModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}