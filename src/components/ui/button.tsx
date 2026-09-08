import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg" | "icon";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const variants = {
    primary: "bg-ember text-white hover:bg-ember-hover shadow-lg shadow-ember/20 border border-transparent",
    secondary: "bg-graphite-border text-paper hover:bg-graphite-hover border border-graphite-border",
    ghost: "bg-transparent text-ash hover:text-paper hover:bg-white/5 border border-transparent",
    outline: "bg-transparent text-paper border border-graphite-border hover:border-ash hover:bg-white/5",
    danger: "bg-ember-dim text-ember border border-ember-border hover:bg-ember/20",
  };

  const sizes = {
    sm: "h-8 px-3 text-xs rounded-sm",
    md: "h-10 px-4 text-sm rounded-sm",
    lg: "h-12 px-6 text-base rounded-md",
    icon: "h-10 w-10 rounded-sm flex items-center justify-center",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
