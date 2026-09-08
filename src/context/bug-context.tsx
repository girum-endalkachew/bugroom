"use client";

import React, { createContext, useContext, useState } from "react";
import { BugCase, BugStatus, Severity } from "@/types/bug";

const initialBugs: BugCase[] = [
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
    reproduction: [
      { stepNumber: 1, description: "Open login page" },
      { stepNumber: 2, description: "Enter valid credentials" },
      { stepNumber: 3, description: "Press Sign in button" },
      { stepNumber: 4, description: "Request hangs at POST /api/auth", isFailedStep: true },
    ],
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

interface BugContextType {
  bugs: BugCase[];
  addBug: (newBug: {
    title: string;
    description: string;
    project: string;
    severity: Severity;
    steps: string[];
  }) => void;
  updateBugStatus: (id: string, newStatus: BugStatus) => void;
}

const BugContext = createContext<BugContextType | undefined>(undefined);

export function BugProvider({ children }: { children: React.ReactNode }) {
  const [bugs, setBugs] = useState<BugCase[]>(initialBugs);

  const addBug = (data: {
    title: string;
    description: string;
    project: string;
    severity: Severity;
    steps: string[];
  }) => {
    const nextIdNumber = bugs.length + 483;
    const bugId = `BUG-${String(nextIdNumber).padStart(4, "0")}`;

    const newBugCase: BugCase = {
      id: bugId,
      title: data.title,
      description: data.description,
      severity: data.severity,
      status: "reported",
      project: data.project,
      assignee: { name: "Girum" },
      reportedAt: "Just now",
      updatedAt: "Just now",
      evidence: [],
      reproduction: data.steps.map((st, i) => ({
        stepNumber: i + 1,
        description: st,
      })),
    };

    setBugs((prev) => [newBugCase, ...prev]);
  };

  const updateBugStatus = (id: string, newStatus: BugStatus) => {
    setBugs((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, status: newStatus, updatedAt: "Just now" } : b
      )
    );
  };

  return (
    <BugContext.Provider value={{ bugs, addBug, updateBugStatus }}>
      {children}
    </BugContext.Provider>
  );
}

export function useBugs() {
  const context = useContext(BugContext);
  if (!context) {
    throw new Error("useBugs must be used within a BugProvider");
  }
  return context;
}