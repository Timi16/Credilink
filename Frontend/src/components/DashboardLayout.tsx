import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { LayoutGrid, Shield, Clock, Wallet, Lock, Link2, Code, LogOut, Bell, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navSections = [
  {
    label: "OVERVIEW",
    items: [
      { icon: LayoutGrid, label: "Dashboard", path: "/dashboard" },
      { icon: Shield, label: "My Attestation", path: "/dashboard/attestation" },
      { icon: Clock, label: "Activity", path: "/dashboard/activity" },
    ],
  },
  {
    label: "IDENTITY",
    items: [
      { icon: Wallet, label: "Wallet Settings", path: "/dashboard/wallet" },
      { icon: Lock, label: "Privacy", path: "/dashboard/privacy" },
    ],
  },
  {
    label: "LENDERS",
    items: [
      { icon: Link2, label: "Share Attestation", path: "/dashboard/share" },
      { icon: Code, label: "API Preview", path: "/dashboard/api" },
    ],
  },
];

export default function DashboardLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-bg-base">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-bg-surface transition-transform lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="p-5">
            <Link to="/" className="text-xl font-semibold tracking-[-0.03em]">
              <span className="text-text-primary">Cred</span>
              <span className="text-cred-green">Link</span>
            </Link>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-8 w-8 rounded-full" style={{ background: "linear-gradient(135deg, hsl(160,100%,38%), hsl(263,84%,58%))" }} />
              <div>
                <div className="font-mono text-xs text-text-primary">0x4f3c...a812</div>
                <Badge variant="info" className="mt-0.5">Monad</Badge>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-3">
            {navSections.map((section) => (
              <div key={section.label}>
                <div className="px-3 pb-1.5 pt-5 text-2xs font-semibold uppercase tracking-[0.08em] text-text-tertiary">
                  {section.label}
                </div>
                {section.items.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                        active
                          ? "border-l-2 border-cred-green bg-cred-green-dim text-cred-green"
                          : "text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            ))}
          </nav>

          <div className="border-t border-border p-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full" style={{ background: "linear-gradient(135deg, hsl(160,100%,38%), hsl(263,84%,58%))" }} />
              <div className="flex-1">
                <div className="text-xs text-text-primary">My Wallet</div>
                <div className="font-mono text-2xs text-text-tertiary">0x4f3c...a812</div>
              </div>
              <button className="text-text-tertiary hover:text-text-primary">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="flex h-16 items-center justify-between border-b border-border px-4 lg:px-8" style={{ background: "rgba(7,11,20,0.95)", backdropFilter: "blur(12px)" }}>
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-text-primary" onClick={() => setSidebarOpen(true)}>
              <Menu className="h-5 w-5" />
            </button>
            <h1 className="text-base font-semibold text-text-primary">
              {navSections.flatMap((s) => s.items).find((i) => i.path === location.pathname)?.label || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative text-text-secondary hover:text-text-primary">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cred-green" />
            </button>
            <div className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-cred-green" />
              <span className="text-xs text-text-secondary">Monad</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
