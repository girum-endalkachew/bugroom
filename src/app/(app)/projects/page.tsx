import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FolderKanban, Plus, Flame, Users, Bug } from "lucide-react";

const mockProjects = [
  {
    id: "proj_aca",
    key: "ACA",
    name: "ACA Web Application",
    description: "Core client dashboard and web platform.",
    activeBugs: 12,
    criticalBugs: 2,
    members: 6,
    updatedAt: "10m ago",
  },
  {
    id: "proj_api",
    key: "API",
    name: "Core Gateway Service",
    description: "Authentication and payload routing microservices.",
    activeBugs: 4,
    criticalBugs: 0,
    members: 4,
    updatedAt: "2h ago",
  },
  {
    id: "proj_mob",
    key: "MOB",
    name: "Mobile App (iOS/Android)",
    description: "React Native client application.",
    activeBugs: 2,
    criticalBugs: 0,
    members: 3,
    updatedAt: "1d ago",
  },
];

export default function ProjectsPage() {
  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-ember text-sm font-mono font-medium mb-1">
            <FolderKanban className="h-4 w-4" /> WORKSPACE PROJECTS
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-paper">Projects</h1>
          <p className="text-ash mt-1">Manage active software projects and case distributions.</p>
        </div>
        <Button variant="primary" className="gap-2">
          <Plus className="h-4 w-4" /> Create Project
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockProjects.map((proj) => (
          <Card key={proj.id} className="relative overflow-hidden group hover:border-ember-border transition-all">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-ember font-bold px-2 py-0.5 rounded bg-ember-dim border border-ember-border">
                  {proj.key}
                </span>
                <span className="text-xs font-mono text-ash">{proj.updatedAt}</span>
              </div>
              <CardTitle className="text-lg mt-3 group-hover:text-ember transition-colors">
                {proj.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-ash leading-relaxed">{proj.description}</p>
              
              <div className="flex items-center justify-between pt-3 border-t border-graphite-border/60 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-paper">
                  <Bug className="h-3.5 w-3.5 text-ash" />
                  <span>{proj.activeBugs} active</span>
                </div>
                {proj.criticalBugs > 0 && (
                  <Badge variant="ember" className="gap-1">
                    <Flame className="h-3 w-3" /> {proj.criticalBugs} Critical
                  </Badge>
                )}
                <div className="flex items-center gap-1 text-ash">
                  <Users className="h-3.5 w-3.5" />
                  <span>{proj.members}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}