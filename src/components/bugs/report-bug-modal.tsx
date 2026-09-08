"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Trash2, Flame, Terminal, AlertCircle } from "lucide-react";

interface ReportBugModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (bugData: any) => void;
}

export function ReportBugModal({ isOpen, onClose }: ReportBugModalProps) {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("ACA");
  const [severity, setSeverity] = useState<"critical" | "high" | "medium" | "low">("high");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState<string[]>(["Open application landing page", "Click submit without entering email"]);

  if (!isOpen) return null;

  const addStep = () => setSteps([...steps, ""]);
  const removeStep = (index: number) => setSteps(steps.filter((_, i) => i !== index));
  const updateStep = (index: number, val: string) => {
    const next = [...steps];
    next[index] = val;
    setSteps(next);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("New case submitted to workspace!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-md border border-graphite-border bg-slate-card p-6 shadow-2xl space-y-6 my-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-graphite-border pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-ember-dim border border-ember-border text-ember">
              <Flame className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-paper font-sans">Report Bug Case</h2>
              <p className="text-xs text-ash font-mono">NEW_CASE_FILE_INTAKE</p>
            </div>
          </div>
          <button onClick={onClose} className="text-ash hover:text-paper transition-colors">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          {/* Title & Project */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="sm:col-span-3 space-y-1.5">
              <label className="text-xs font-mono text-ash uppercase tracking-wider">Bug Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Session token expires prematurely on OAuth redirect"
                className="w-full rounded-sm border border-graphite-border bg-midnight-950 p-2.5 text-sm text-paper placeholder:text-ash/50 focus:border-ember focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-mono text-ash uppercase tracking-wider">Project</label>
              <select
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="w-full rounded-sm border border-graphite-border bg-midnight-950 p-2.5 text-sm text-paper focus:border-ember focus:outline-none"
              >
                <option value="ACA">ACA Web</option>
                <option value="API">Gateway API</option>
                <option value="MOB">Mobile App</option>
              </select>
            </div>
          </div>

          {/* Severity selector */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-ash uppercase tracking-wider">Severity Level</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: "critical", label: "🔥 Critical", border: "border-ember text-ember bg-ember-dim" },
                { id: "high", label: "⚠️ High", border: "border-signal-warning text-signal-warning bg-signal-warning/10" },
                { id: "medium", label: "⚡ Medium", border: "border-signal-blue text-signal-blue bg-signal-blue/10" },
                { id: "low", label: "ℹ️ Low", border: "border-graphite-border text-ash bg-midnight-950" },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSeverity(s.id as any)}
                  className={`py-2 px-3 rounded-sm border text-xs font-mono font-medium transition-all ${
                    severity === s.id ? s.border : "border-graphite-border text-ash bg-midnight-950 opacity-60 hover:opacity-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Story / Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono text-ash uppercase tracking-wider">Story · What Happened</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the bug behavior in detail..."
              className="w-full rounded-sm border border-graphite-border bg-midnight-950 p-2.5 text-sm text-paper placeholder:text-ash/50 focus:border-ember focus:outline-none"
            />
          </div>

          {/* Reproduction steps */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono text-ash uppercase tracking-wider">Reproduction Flow Steps</label>
              <button
                type="button"
                onClick={addStep}
                className="text-xs font-mono text-ember hover:underline flex items-center gap-1"
              >
                <Plus className="h-3 w-3" /> Add Step
              </button>
            </div>
            <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
              {steps.map((st, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-mono text-xs text-ember w-6 text-right font-bold">{String(i + 1).padStart(2, "0")}</span>
                  <input
                    type="text"
                    value={st}
                    onChange={(e) => updateStep(i, e.target.value)}
                    placeholder={`Step ${i + 1}`}
                    className="flex-1 rounded-sm border border-graphite-border bg-midnight-950 p-2 text-xs text-paper focus:border-ember focus:outline-none"
                  />
                  {steps.length > 1 && (
                    <button type="button" onClick={() => removeStep(i)} className="text-ash hover:text-ember">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-graphite-border">
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" className="gap-2">
              <Flame className="h-4 w-4" /> Open Case File
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}