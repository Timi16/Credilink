import { Shield, Calendar, Link2, Eye, Copy, Share2, RefreshCw, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function DashboardMain() {
  return (
    <div>
      <div className="mb-6">
        <div className="text-sm text-text-secondary">Good morning</div>
        <h2 className="text-2xl font-semibold text-text-primary">Your identity is active</h2>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "ATTESTATION STATUS", value: "Verified", valueClass: "text-cred-green", sub: "Active and portable", icon: Shield, iconClass: "text-cred-green" },
          { label: "EXPIRES IN", value: "11 months", sub: "January 1, 2027", icon: Calendar, iconClass: "text-text-secondary", bar: true },
          { label: "NETWORK", value: "Monad", sub: "EVM compatible", icon: Link2, iconClass: "text-cred-blue" },
          { label: "LENDERS CAN VERIFY", value: "Always", sub: "Onchain · 24/7 · Instant", icon: Eye, iconClass: "text-text-secondary" },
        ].map((card) => (
          <div key={card.label} className="card-elevated p-5">
            <div className="flex items-start justify-between">
              <div className="text-2xs font-semibold uppercase tracking-[0.08em] text-text-tertiary">{card.label}</div>
              <card.icon className={`h-5 w-5 ${card.iconClass}`} />
            </div>
            <div className={`mt-2 text-2xl font-bold ${card.valueClass || "text-text-primary"}`}>{card.value}</div>
            <div className="mt-1 text-xs text-text-secondary">{card.sub}</div>
            {card.bar && (
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-bg-base">
                <div className="h-full w-[92%] rounded-full bg-cred-green" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-3">
          {/* Attestation card */}
          <div className="card-surface p-6">
            <div className="flex items-center gap-3">
              <h3 className="text-base font-semibold text-text-primary">Your Attestation</h3>
              <Badge variant="verified">Verified</Badge>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-bg-elevated p-4">
              <div>
                <div className="text-2xs uppercase tracking-wider text-text-tertiary">ATTESTATION UID</div>
                <div className="mt-1 font-mono text-xs text-text-primary">0xabc4f3c9d1e2b7a84f3c9d...</div>
              </div>
              <button className="text-text-tertiary hover:text-text-primary"><Copy className="h-4 w-4" /></button>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { label: "Issued", value: "1 Jan 2026" },
                { label: "Expires", value: "1 Jan 2027" },
                { label: "Network", value: "Monad" },
                { label: "Standard", value: "CredLink v1" },
                { label: "Issuer", value: "CredLink Protocol" },
                { label: "Schema", value: "v1.0" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-2xs text-text-tertiary">{m.label}</div>
                  <div className="text-xs font-medium text-text-primary">{m.value}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 border-t border-border pt-5">
              <div className="text-2xs uppercase tracking-wider text-text-tertiary">LENDER VERIFICATION URL</div>
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-bg-elevated px-3 py-2">
                <code className="flex-1 font-mono text-xs text-text-secondary">GET api.credlink.xyz/v1/verify/0x4f3c...a812</code>
                <button className="text-text-tertiary hover:text-text-primary"><Copy className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>

          {/* Roadmap */}
          <div className="card-surface p-6">
            <h3 className="text-base font-semibold text-text-primary">Your CredLink roadmap</h3>
            <div className="mt-5 space-y-0">
              {[
                { active: true, tag: "COMPLETE", title: "Identity attestation", desc: "Your wallet is verified. Any lender can trust you." },
                { active: false, tag: "COMING SOON", title: "Credit scoring", desc: "Your onchain tx history scored under your verified identity." },
                { active: false, tag: "FUTURE", title: "Receivables tokenisation", desc: "Tokenise POs and invoices as KYC'd collateral." },
                { active: false, tag: "FUTURE", title: "SME lending", desc: "Apply for working capital from the diaspora lending pool." },
              ].map((item, i) => (
                <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className={`h-3 w-3 rounded-full ${item.active ? "bg-cred-green" : "border border-dashed border-border"}`} />
                    {i < 3 && <div className="mt-1 w-px flex-1 border-l border-dashed border-border" />}
                  </div>
                  <div className={`flex-1 ${!item.active ? "opacity-40" : ""}`}>
                    <Badge variant={item.active ? "verified" : "outline"} className="text-2xs">{item.tag}</Badge>
                    <h4 className="mt-1 text-sm font-semibold text-text-primary">{item.title}</h4>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Lender lookups */}
          <div className="card-surface p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-text-primary">Lender lookups</h3>
              <span className="text-2xs text-text-tertiary">Past 30 days</span>
            </div>
            <div className="mt-4 flex items-end gap-1.5 h-20">
              {[40, 65, 30, 85, 50, 20, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-cred-green/20 hover:bg-cred-green/40 transition-colors cursor-pointer" style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mt-1 flex justify-between text-2xs text-text-tertiary">
              {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                <span key={i} className="flex-1 text-center">{d}</span>
              ))}
            </div>
            <div className="mt-4 text-xs text-text-secondary">12 total verifications this month</div>

            <div className="mt-4 space-y-3">
              {[
                { name: "LendBase", time: "2 hours ago" },
                { name: "Fundo", time: "1 day ago" },
                { name: "Unknown Protocol", time: "3 days ago" },
              ].map((l) => (
                <div key={l.name} className="flex items-center justify-between rounded-lg bg-bg-elevated p-3">
                  <div>
                    <div className="text-xs font-medium text-text-primary">{l.name}</div>
                    <div className="text-2xs text-text-tertiary">{l.time}</div>
                  </div>
                  <span className="text-2xs text-cred-green">✓ verified</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="card-surface p-6">
            <h3 className="text-sm font-semibold text-text-primary">Quick actions</h3>
            <div className="mt-4 space-y-2">
              {[
                { icon: Share2, label: "Share attestation" },
                { icon: RefreshCw, label: "Renew attestation" },
                { icon: Download, label: "Download proof" },
              ].map((action) => (
                <button key={action.label} className="flex w-full items-center gap-3 rounded-lg p-3 text-sm text-text-secondary transition-colors hover:bg-bg-elevated hover:text-text-primary">
                  <action.icon className="h-4 w-4" />
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
