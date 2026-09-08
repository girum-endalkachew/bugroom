import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flame, ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-midnight flex items-center justify-center p-6">
      <Card className="w-full max-w-md border-graphite-border">
        <CardHeader className="text-center space-y-2">
          <div className="flex justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-ember/10 border border-ember-border">
              <Flame className="h-5 w-5 text-ember" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold text-paper">Welcome back to Bugroom</CardTitle>
          <p className="text-xs text-ash">Access your forensic bug workspace</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-xs font-mono text-ash">Email address</label>
            <input
              type="email"
              placeholder="girum@company.com"
              className="w-full rounded-sm border border-graphite-border bg-midnight-950 p-2.5 text-sm text-paper focus:border-ember focus:outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono text-ash">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-sm border border-graphite-border bg-midnight-950 p-2.5 text-sm text-paper focus:border-ember focus:outline-none"
            />
          </div>
          <Link href="/overview" className="block pt-2">
            <Button variant="primary" className="w-full gap-2">
              Sign In <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}