import { Card, CardContent, CardHeader, CardTitle } from \"@/components/ui/card\";
import { Badge } from \"@/components/ui/badge\";
import { Terminal, Image, Globe, Monitor } from \"lucide-react\";

export function EvidenceRoom() {
  return (
    <Card className=\"border-graphite-border\">
      <CardHeader>
        <CardTitle className=\"text-base flex items-center justify-between\">
          <span>?? EVIDENCE ROOM</span>
          <Badge variant=\"ash\">4 attachments</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className=\"grid grid-cols-1 md:grid-cols-2 gap-4\">
        {/* Console Log Evidence */}
        <div className=\"rounded-sm border border-graphite-border bg-midnight-950 p-4 space-y-2 font-mono text-xs\">
          <div className=\"flex items-center gap-2 text-ash border-b border-graphite-border pb-2\">
            <Terminal className=\"h-3.5 w-3.5 text-ember\" />
            <span>Console Output</span>
          </div>
          <p className=\"text-ember\">TypeError: Cannot read properties of undefined (reading 'token')</p>
          <p className=\"text-ash\">at AuthMiddleware (middleware.ts:42:12)</p>
          <p className=\"text-ash\">at async POST /api/auth/login (14:32:08)</p>
        </div>

        {/* Network Request Evidence */}
        <div className=\"rounded-sm border border-graphite-border bg-midnight-950 p-4 space-y-2 font-mono text-xs\">
          <div className=\"flex items-center gap-2 text-ash border-b border-graphite-border pb-2\">
            <Globe className=\"h-3.5 w-3.5 text-signal-blue\" />
            <span>Network Request</span>
          </div>
          <div className=\"flex justify-between text-paper\">
            <span>POST /api/session/refresh</span>
            <span className=\"text-ember font-bold\">401 Unauthorized</span>
          </div>
          <p className=\"text-ash\">Latency: 242ms · Payload: &#123; session_id: \"sess_982\" &#125;</p>
        </div>

        {/* Environment Context */}
        <div className=\"rounded-sm border border-graphite-border bg-midnight-950 p-4 space-y-2 font-mono text-xs md:col-span-2 flex items-center justify-between\">
          <div className=\"flex items-center gap-2 text-ash\">
            <Monitor className=\"h-3.5 w-3.5 text-signal-success\" />
            <span>Environment Context</span>
          </div>
          <span className=\"text-paper\">macOS Sonoma 14.5 · Chrome 128.0 · Viewport 1440x900</span>
        </div>
      </CardContent>
    </Card>
  );
}
