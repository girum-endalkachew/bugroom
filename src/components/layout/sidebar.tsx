\"use client\";

import Link from \"next/link\";
import { usePathname } from \"next/navigation\";
import {
  LayoutDashboard,
  Bug,
  FolderKanban,
  Search,
  BookOpen,
  BarChart3,
  Settings,
  Flame,
} from \"lucide-react\";
import { cn } from \"@/lib/utils\";

const navItems = [
  { name: \"Overview\", href: \"/overview\", icon: LayoutDashboard },
  { name: \"Bugs\", href: \"/bugs\", icon: Bug },
  { name: \"Projects\", href: \"/projects\", icon: FolderKanban },
  { name: \"Investigations\", href: \"/investigations\", icon: Search },
  { name: \"Knowledge\", href: \"/knowledge\", icon: BookOpen },
  { name: \"Insights\", href: \"/insights\", icon: BarChart3 },
  { name: \"Settings\", href: \"/settings\", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className=\"fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-graphite-border bg-midnight-950/80 backdrop-blur-xl\">
      {/* Logo */}
      <div className=\"flex h-16 items-center gap-2.5 border-b border-graphite-border px-6\">
        <div className=\"flex h-8 w-8 items-center justify-center rounded-sm bg-ember/10 border border-ember-border\">
          <Flame className=\"h-4 w-4 text-ember\" />
        </div>
        <span className=\"text-lg font-semibold tracking-tight text-paper\">
          Bugroom
        </span>
      </div>

      {/* Navigation */}
      <nav className=\"flex-1 space-y-1 px-3 py-4\">
        {navItems.map((item) => {
          const isActive = pathname?.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                \"group flex items-center gap-3 rounded-sm px-3 py-2.5 text-sm font-medium transition-all duration-200\",
                isActive
                  ? \"bg-ember-dim text-ember border border-ember-border\"
                  : \"text-ash hover:bg-white/5 hover:text-paper border border-transparent\"
              )}
            >
              <Icon
                className={cn(
                  \"h-4 w-4 shrink-0 transition-colors\",
                  isActive ? \"text-ember\" : \"text-ash group-hover:text-paper\"
                )}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className=\"border-t border-graphite-border p-4\">
        <div className=\"flex items-center gap-3 rounded-sm bg-slate-card/50 px-3 py-2.5 border border-graphite-border\">
          <div className=\"flex h-8 w-8 items-center justify-center rounded-full bg-ember/20 text-xs font-mono font-bold text-ember\">
            G
          </div>
          <div className=\"flex flex-col\">
            <span className=\"text-sm font-medium text-paper\">Girum</span>
            <span className=\"text-xs text-ash\">Workspace</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
