import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { LayoutGrid, BarChart3, Shield, Slash, FileText, Users, Key, Activity, Settings, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navSections = [
  { label: "OVERVIEW", items: [
    { icon: LayoutGrid, label: "Dashboard", path: "/admin" },
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
  ]},
  { label: "ATTESTATIONS", items: [
    { icon: Shield, label: "All attestations", path: "/admin/attestations" },
    { icon: Slash, label: "Revocation tool", path: "/admin/revoke" },
    { icon: FileText, label: "Audit log", path: "/admin/audit" },
  ]},
  { label: "USERS", items: [
    { icon: Users, label: "Borrowers", path: "/admin/borrowers" },
    { icon: Key, label: "Lender accounts", path: "/admin/lender-accounts" },
  ]},
  { label: "SYSTEM", items: [
    { icon: Activity, label: "Health", path: "/admin/health" },
    { icon: Settings, label: "Configuration", path: "/admin/config" },
  ]},
];

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-bg-base">
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-bg-surface transition-transform lg:static lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full flex-col">
          <div className="p-5">
            <Link to="/" className="text-xl font-semibold tracking-[-0.03em]">
              <span className="text-text-primary">Cred</span><span className="text-cred-green">Link</span>
            </Link>
            <Badge variant="failed" className="ml-2">Admin</Badge>
          </div>
          <nav className="flex-1 px-3">
            {navSections.map((s) => (
              <div key={s.label}>
                <div className="px-3 pb-1.5 pt-5 text-2xs font-semibold uppercase tracking-[0.08em] text-text-tertiary">{s.label}</div>
                {s.items.map((item) => {
                  const active = location.pathname === item.path;
                  return (
                    <Link key={item.path} to={item.path} onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${active ? "border-l-2 border-cred-red bg-cred-red-dim text-cred-red" : "text-text-secondary hover:bg-bg-elevated"}`}>
                      <item.icon className="h-4 w-4" />{item.label}
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
        <header className="flex h-16 items-center border-b border-border px-4 lg:px-8" style={{ background: "rgba(7,11,20,0.95)" }}>
          <button className="lg:hidden text-text-primary mr-3" onClick={() => setSidebarOpen(true)}><Menu className="h-5 w-5" /></button>
          <h1 className="text-base font-semibold text-text-primary">Admin</h1>
        </header>
        <main className="flex-1 overflow-auto p-4 lg:p-8"><Outlet /></main>
      </div>
    </div>
  );
}
