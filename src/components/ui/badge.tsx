import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "ember" | "success" | "signal" | "ash" | "outline";
}

export function Badge({ className, variant = "ash", ...props }: BadgeProps) {
  const variants = {
    ember: "bg-ember-dim text-ember border-ember-border hover:bg-ember/20",
    success: "bg-signal-success/10 text-signal-success border-signal-success/20",
    signal: "bg-signal-blue/10 text-signal-blue border-signal-blue/20",
    ash: "bg-graphite-border/50 text-ash border-graphite-border",
    outline: "bg-transparent text-paper border-graphite-border",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-mono font-medium transition-colors focus:outline-none focus:ring-1 focus:ring-ember",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
