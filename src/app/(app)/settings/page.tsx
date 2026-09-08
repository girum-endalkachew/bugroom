import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Settings, Users, Shield, Bell, UserPlus } from "lucide-react";

const members = [
  { name: "Girum Endalkachew", email: "girum@bugroom.io", role: "Owner", status: "Active" },
  { name: "Liya Tadesse", email: "liya@bugroom.io", role: "Admin", status: "Active" },
  { name: "Eyuel Berhanu", email: "eyuel@bugroom.io", role: "Developer", status: "Active" },
];

export default function SettingsPage() {
  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-2 text-ash text-sm font-mono font-medium mb-1">
          <Settings className="h-4 w-4" /> WORKSPACE CONFIGURATION
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-paper">Settings</h1>
        <p className="text-ash mt-1">Manage workspace members, roles, permissions and notifications.</p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="h-4 w-4 text-ember" /> Workspace Members
            </CardTitle>
            <p className="text-xs text-ash mt-1">Manage who has access to Bugroom cases and knowledge base.</p>
          </div>
          <Button variant="primary" size="sm" className="gap-2">
            <UserPlus className="h-3.5 w-3.5" /> Invite Member
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-graphite-border">
            {members.map((m) => (
              <div key={m.email} className="flex items-center justify-between p-4 text-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ember/20 text-xs font-mono font-bold text-ember">
                    {m.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-paper">{m.name}</div>
                    <div className="text-xs font-mono text-ash">{m.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={m.role === 'Owner' ? 'ember' : 'ash'}>{m.role}</Badge>
                  <Button variant="ghost" size="sm">Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}