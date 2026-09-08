import { Card, CardContent, CardHeader, CardTitle } from \"@/components/ui/card\";
import { ArrowDown, XCircle } from \"lucide-react\";

const steps = [
  \"Open login page at /auth/login\",
  \"Enter valid credentials (user@company.com)\",
  \"Press 'Sign in' button\",
  \"Request hangs at POST /api/auth\",
  \"Session expires before refresh token issue\",
];

export function ReproductionTimeline() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className=\"text-base\">?? REPRODUCTION FLOW</CardTitle>
      </CardHeader>
      <CardContent className=\"space-y-3\">
        {steps.map((step, idx) => (
          <div key={idx} className=\"flex flex-col items-center\">
            <div className=\"w-full flex items-center gap-4 rounded-sm border border-graphite-border bg-midnight-950/60 p-3 text-sm\">
              <span className=\"font-mono text-xs text-ember font-bold\">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className=\"text-paper font-sans\">{step}</span>
            </div>
            {idx < steps.length - 1 && (
              <ArrowDown className=\"h-4 w-4 text-ash my-1 opacity-60\" />
            )}
          </div>
        ))}

        <div className=\"mt-4 flex items-center justify-center gap-2 rounded-sm border border-ember-border bg-ember-dim p-3 text-ember font-mono text-xs font-bold\">
          <XCircle className=\"h-4 w-4\" />
          <span>? BUG REPRODUCED</span>
        </div>
      </CardContent>
    </Card>
  );
}
