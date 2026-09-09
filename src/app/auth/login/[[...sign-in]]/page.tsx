import { SignIn } from "@clerk/nextjs";
import { Flame } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-midnight flex flex-col items-center justify-center p-6 relative">
      <div className="absolute top-8 left-8 flex items-center gap-2.5">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-ember/10 border border-ember-border">
            <Flame className="h-4 w-4 text-ember" />
          </div>
          <span className="text-base font-semibold tracking-tight text-paper">Bugroom</span>
        </Link>
      </div>

      <div className="w-full max-w-md flex flex-col items-center space-y-4">
        <div className="text-center space-y-1 mb-2">
          <h1 className="text-2xl font-semibold text-paper font-sans">Open Investigation Desk</h1>
          <p className="text-xs text-ash font-mono">AUTHENTICATE_CASE_ACCESS</p>
        </div>
        <SignIn routing="path" path="/auth/login" />
      </div>
    </div>
  );
}