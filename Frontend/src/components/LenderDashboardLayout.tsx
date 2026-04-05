import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Search, List, BarChart3, Key, Book, Code, User, Bell, Settings, LogOut, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navSections = [
  {
    label: "VERIFY",
    items: [
      { icon: Search, label: "Wallet Lookup", path: "/lenders/dashboard" },
      { icon: List, label: "History", path: "/lenders/dashboard/history" },
      { icon: BarChart3, label: "Analytics", path: "/lenders/dashboard/analytics" },
    ],
  },
  {
    label: "API",
    items: [
      { icon: Key, label: "API Keys", path: "/lenders/api-keys" },
      { icon: Book, label: "Documentation ↗", path: "#" },
      { icon: Code, label: "SDK & Libraries", path: "#" },
    ],
  },
  {
    label: "ACCOUNT",
    items: [
      { icon: User, label: "Profile", path: "#" },
      { icon: Bell, label: "Alerts", path: "#" },
      { icon: Settings, label: "Settings", path: "#" },
    ],
  },
];

export default function LenderDashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-bg-base">
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-bg-surface transition-transform lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="p-5">
            <Link to="/" className="text-xl font-semibold tracking-[-0.03em]">
              <span className="text-text-primary">Cred</span>
              <span className="text-cred-green">Link</span>
            </Link>
            <Badge variant="info" className="ml-2">Lender Portal</Badge>
            <div className="mt-4">
              <div className="text-sm font-medium text-text-primary">LendBase</div>
              <div className="font-mono text-2xs text-text-tertiary mt-0.5">API key: lk_live_abc...xyz</div>
            </div>
          </div>
          <nav className="flex-1 px-3">
            {navSections.map((section) => (
              <div key={section.label}>
                <div className="px-3 pb-1.5 pt-5 text-2xs font-semibold uppercase tracking-[0.08em] text-text-tertiary">{section.label}</div>
                {section.items.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link key={item.path + item.label} to={item.path} onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${active ? "border-l-2 border-cred-blue bg-cred-blue-dim text-cred-blue" : "text-text-secondary hover:bg-bg-elevated"}`}>
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>
        </div>
      </aside>
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border px-4 lg:px-8" style={{ background: "rgba(7,11,20,0.95)" }}>
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-text-primary" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5" /></button>
            <h1 className="text-base font-semibold text-text-primary">Lender Dashboard</h1>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 lg:p-8"><Outlet /></main>
      </div>
    </div>
  );
}
