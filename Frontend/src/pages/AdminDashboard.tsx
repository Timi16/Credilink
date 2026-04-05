import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const attestations = [
  { wallet: "0x4f3c...a812", status: "active", issued: "Jan 1, 2026", expires: "Jan 1, 2027" },
  { wallet: "0x9d1e...b723", status: "active", issued: "Jan 2, 2026", expires: "Jan 2, 2027" },
  { wallet: "0x2b7a...c934", status: "revoked", issued: "Dec 15, 2025", expires: "—" },
  { wallet: "0x8f5c...d045", status: "active", issued: "Jan 3, 2026", expires: "Jan 3, 2027" },
  { wallet: "0x1a2b...e156", status: "expired", issued: "Jan 1, 2025", expires: "Jan 1, 2026" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 mb-8">
        {[
          { label: "Total", value: "523" },
          { label: "Active", value: "498" },
          { label: "Revoked", value: "12" },
          { label: "Expired", value: "13" },
          { label: "Today", value: "14" },
        ].map((s) => (
          <div key={s.label} className="card-elevated p-4 text-center">
            <div className="text-2xs text-text-tertiary uppercase">{s.label}</div>
            <div className="mt-1 text-2xl font-bold text-text-primary">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2 mb-8">
        <div className="card-surface p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">Attestations over time</h3>
          <div className="flex items-end gap-1 h-32">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="flex-1 rounded-t bg-cred-green/20 hover:bg-cred-green/40 transition-colors" style={{ height: `${20 + Math.random() * 80}%` }} />
            ))}
          </div>
        </div>
        <div className="card-surface p-6">
          <h3 className="text-sm font-semibold text-text-primary mb-4">KYC outcomes</h3>
          <div className="flex items-center justify-center h-32">
            <div className="relative h-24 w-24">
              <svg viewBox="0 0 36 36" className="h-24 w-24 -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(0,84%,60%)" strokeWidth="4" strokeDasharray="3.5 96.5" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(160,100%,38%)" strokeWidth="4" strokeDasharray="96.5 3.5" strokeDashoffset="-3.5" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg font-bold text-text-primary">523</span>
                <span className="text-2xs text-text-tertiary">total</span>
              </div>
            </div>
            <div className="ml-6 space-y-2">
              <div className="flex items-center gap-2 text-xs"><span className="h-2 w-2 rounded-full bg-cred-green" />96.5% passed</div>
              <div className="flex items-center gap-2 text-xs"><span className="h-2 w-2 rounded-full bg-cred-red" />3.5% failed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-surface overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-sm font-semibold text-text-primary">Recent attestations</h3>
          <div className="flex gap-2">{["All", "Active", "Revoked", "Expired"].map((f, i) => (
            <button key={f} className={`rounded-lg px-3 py-1 text-xs ${i === 0 ? "bg-bg-elevated text-text-primary" : "text-text-tertiary"}`}>{f}</button>
          ))}</div>
        </div>
        <table className="w-full text-left">
          <thead><tr className="border-b border-border">
            {["Wallet", "Status", "Issued", "Expires", "Action"].map((h) => (
              <th key={h} className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">{h}</th>
            ))}
          </tr></thead>
          <tbody>{attestations.map((a, i) => (
            <tr key={i} className="border-b border-border hover:bg-bg-elevated transition-colors">
              <td className="px-4 py-3 font-mono text-xs text-text-primary">{a.wallet}</td>
              <td className="px-4 py-3"><Badge variant={a.status === "active" ? "verified" : a.status === "revoked" ? "revoked" : "expired"}>{a.status}</Badge></td>
              <td className="px-4 py-3 text-xs text-text-secondary">{a.issued}</td>
              <td className="px-4 py-3 text-xs text-text-secondary">{a.expires}</td>
              <td className="px-4 py-3">{a.status === "active" && <Button variant="destructive-outline" size="sm">Revoke</Button>}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
    </div>
  );
}
