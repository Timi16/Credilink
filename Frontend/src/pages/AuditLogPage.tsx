import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const logs = [
  { id: 1, event: "ISSUED", wallet: "0x4f3c...a812", trigger: "Sumsub webhook", time: "Jan 1, 2026 14:23", tx: "0xabc...def" },
  { id: 2, event: "ISSUED", wallet: "0x9d1e...b723", trigger: "Sumsub webhook", time: "Jan 1, 2026 13:11", tx: "0xdef...ghi" },
  { id: 3, event: "REVOKED", wallet: "0x2b7a...c934", trigger: "Admin: fraud", time: "Jan 2, 2026 09:44", tx: "0xghi...jkl" },
  { id: 4, event: "FAILED", wallet: "0x8f5c...d045", trigger: "Sumsub RED", time: "Jan 2, 2026 08:30", tx: "—" },
  { id: 5, event: "ISSUED", wallet: "0x1a2b...e156", trigger: "Sumsub webhook", time: "Jan 3, 2026 10:15", tx: "0xmno...pqr" },
  { id: 6, event: "ISSUED", wallet: "0x3c4d...f267", trigger: "Sumsub webhook", time: "Jan 3, 2026 11:30", tx: "0xstu...vwx" },
];

export default function AuditLogPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-text-primary">Audit Log</h2>
      <p className="mt-2 text-sm text-text-secondary">Every issuance and revocation. Immutable. Timestamped.</p>

      <div className="mt-6 flex flex-wrap gap-3 items-center">
        {["All", "Issued", "Revoked", "Failed"].map((f, i) => (
          <button key={f} className={`rounded-lg px-3 py-1.5 text-xs ${i === 0 ? "bg-bg-elevated text-text-primary" : "text-text-tertiary hover:text-text-primary"}`}>{f}</button>
        ))}
        <div className="ml-auto">
          <Button variant="outline" size="sm">Export full log (CSV)</Button>
        </div>
      </div>

      <div className="mt-6 card-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead><tr className="border-b border-border">
              {["#", "Event", "Wallet", "Triggered by", "Timestamp", "Tx Hash"].map((h) => (
                <th key={h} className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {logs.map((log) => (
                <tr key={log.id} className={`border-b border-border transition-colors hover:bg-bg-elevated ${log.event === "REVOKED" ? "bg-cred-red-dim/30" : ""}`}>
                  <td className="px-4 py-3 text-xs text-text-tertiary">{log.id}</td>
                  <td className="px-4 py-3">
                    <Badge variant={log.event === "ISSUED" ? "verified" : log.event === "REVOKED" ? "revoked" : "failed"}>{log.event}</Badge>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-text-primary">{log.wallet}</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">{log.trigger}</td>
                  <td className="px-4 py-3 text-xs text-text-secondary">{log.time}</td>
                  <td className="px-4 py-3 font-mono text-xs">{log.tx !== "—" ? <a href="#" className="text-cred-green hover:underline">{log.tx} ↗</a> : <span className="text-text-tertiary">—</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
