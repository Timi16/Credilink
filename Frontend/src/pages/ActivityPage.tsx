import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Clock, ExternalLink } from "lucide-react";

const activities = [
  { type: "issued", icon: Shield, desc: "Wallet 0x4f3c...a812 verified on Monad", time: "Jan 1, 2026 · 14:23 UTC", tx: "0xabc...def", status: "Success" },
  { type: "lookup", icon: Eye, desc: "LendBase checked wallet verification", time: "Jan 3, 2026 · 09:12 UTC", tx: "— (offchain)", status: "Returned: verified" },
  { type: "lookup", icon: Eye, desc: "Fundo verified wallet status", time: "Jan 3, 2026 · 11:44 UTC", tx: "— (offchain)", status: "Returned: verified" },
  { type: "lookup", icon: Eye, desc: "Unknown protocol checked wallet", time: "Jan 4, 2026 · 08:30 UTC", tx: "— (offchain)", status: "Returned: verified" },
  { type: "lookup", icon: Eye, desc: "LendBase re-checked verification", time: "Jan 5, 2026 · 16:22 UTC", tx: "— (offchain)", status: "Returned: verified" },
  { type: "lookup", icon: Eye, desc: "Fundo wallet lookup", time: "Jan 6, 2026 · 13:05 UTC", tx: "— (offchain)", status: "Returned: verified" },
];

export default function ActivityPage() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex gap-2">
          {["All", "Issuances", "Verifications", "Lender lookups"].map((f, i) => (
            <button key={f} className={`rounded-lg px-3 py-1.5 text-xs transition-colors ${i === 0 ? "bg-bg-elevated text-text-primary" : "text-text-secondary hover:text-text-primary"}`}>{f}</button>
          ))}
        </div>
        <Button variant="outline" size="sm">Export CSV</Button>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="card-elevated p-4 text-center">
          <div className="text-xl font-bold text-text-primary">12</div>
          <div className="text-2xs text-text-secondary">lender lookups this month</div>
        </div>
        <div className="card-elevated p-4 text-center">
          <div className="text-xl font-bold text-text-primary">1</div>
          <div className="text-2xs text-text-secondary">attestation issued</div>
        </div>
        <div className="card-elevated p-4 text-center">
          <div className="text-xl font-bold text-text-primary">0</div>
          <div className="text-2xs text-text-secondary">revocations</div>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Type</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Description</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Date & Time</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Transaction</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Status</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a, i) => (
                <tr key={i} className="border-b border-border transition-colors hover:bg-bg-elevated">
                  <td className="px-4 py-4">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-full ${a.type === "issued" ? "bg-cred-green-dim" : "bg-cred-blue-dim"}`}>
                      <a.icon className={`h-4 w-4 ${a.type === "issued" ? "text-cred-green" : "text-cred-blue"}`} />
                    </div>
                  </td>
                  <td className="px-4 py-4 text-xs text-text-primary">{a.desc}</td>
                  <td className="px-4 py-4 text-xs text-text-secondary">{a.time}</td>
                  <td className="px-4 py-4 font-mono text-xs text-text-secondary">{a.tx !== "— (offchain)" ? <a href="#" className="text-cred-green hover:underline">{a.tx} ↗</a> : a.tx}</td>
                  <td className="px-4 py-4"><Badge variant={a.type === "issued" ? "verified" : "default"}>{a.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
