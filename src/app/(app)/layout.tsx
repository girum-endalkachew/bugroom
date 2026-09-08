import { Sidebar } from "@/components/layout/sidebar";
import { BugProvider } from "@/context/bug-context";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BugProvider>
      <div className="min-h-screen bg-midnight">
        <Sidebar />
        <main className="pl-64">
          <div className="min-h-screen border-l border-graphite-border/40">
            {children}
          </div>
        </main>
      </div>
    </BugProvider>
  );
}