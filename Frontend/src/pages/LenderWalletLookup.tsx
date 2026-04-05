import { useState } from "react";
import { Search, Check, X, Copy, ExternalLink, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const recentLookups = [
  { wallet: "0x4f3c...a812", status: "verified", time: "2 hours ago", uid: "0xabc...def" },
  { wallet: "0x9d1e...b723", status: "verified", time: "5 hours ago", uid: "0xghi...jkl" },
  { wallet: "0x2b7a...c934", status: "not_verified", time: "1 day ago", uid: "—" },
  { wallet: "0x8f5c...d045", status: "verified", time: "1 day ago", uid: "0xmno...pqr" },
  { wallet: "0x1a2b...e156", status: "verified", time: "2 days ago", uid: "0xstu...vwx" },
  { wallet: "0x3c4d...f267", status: "verified", time: "3 days ago", uid: "0xyz...123" },
  { wallet: "0x5e6f...g378", status: "expired", time: "3 days ago", uid: "0x456...789" },
  { wallet: "0x7g8h...h489", status: "verified", time: "4 days ago", uid: "0xabc...012" },
];

export default function LenderWalletLookup() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<"none" | "loading" | "verified" | "not_verified">("none");

  const handleVerify = () => {
    if (!query) return;
    setResult("loading");
    setTimeout(() => setResult(query.includes("dead") ? "not_verified" : "verified"), 1500);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-4">
        {[
          { label: "Total verifications", value: "1,247" },
          { label: "This month", value: "127" },
          { label: "Verified", value: "1,198 (96.1%)" },
          { label: "Not verified", value: "49 (3.9%)" },
        ].map((s) => (
          <div key={s.label} className="card-elevated p-4">
            <div className="text-2xs text-text-tertiary uppercase tracking-wider">{s.label}</div>
            <div className="mt-1 text-xl font-bold text-text-primary">{s.value}</div>
          </div>
        ))}
      </div>

      {/* Wallet lookup */}
      <div className="card-surface p-6 mb-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Verify a wallet</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter wallet address — 0x..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleVerify()}
            className="flex-1 input-credlink px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-tertiary"
          />
          <Button onClick={handleVerify}>Verify →</Button>
        </div>
        <div className="mt-1 text-2xs text-text-tertiary">Press Enter to verify</div>

        <div className="mt-6">
          {result === "none" && (
            <div className="flex flex-col items-center py-12 text-text-tertiary">
              <Search className="h-12 w-12" />
              <p className="mt-3 text-sm">Enter a wallet address to check verification status</p>
            </div>
          )}
          {result === "loading" && (
            <div className="flex flex-col items-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-cred-green border-t-transparent" />
              <p className="mt-3 text-sm text-text-secondary">Checking attestation on Monad...</p>
            </div>
          )}
          {result === "verified" && (
            <div className="animate-fade-in grid gap-6 rounded-xl border border-cred-green/20 p-6 md:grid-cols-2">
              <div className="flex flex-col items-center justify-center rounded-xl bg-cred-green-dim p-6">
                <Check className="h-12 w-12 text-cred-green" />
                <div className="mt-2 text-2xl font-semibold text-cred-green">Verified</div>
                <div className="mt-1 font-mono text-xs text-text-secondary">{query || "0x4f3c...a812"}</div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Issued", value: "Jan 1, 2026" },
                  { label: "Expires", value: "Jan 1, 2027" },
                  { label: "Time until expiry", value: "11 months 4 days" },
                  { label: "Network", value: "Monad" },
                  { label: "Attestation", value: "0xabc...def" },
                  { label: "Response time", value: "127ms" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between text-xs">
                    <span className="text-text-tertiary">{row.label}</span>
                    <span className="text-text-primary font-mono">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {result === "not_verified" && (
            <div className="animate-fade-in flex flex-col items-center rounded-xl border border-cred-red/20 bg-cred-red-dim p-8">
              <X className="h-12 w-12 text-cred-red" />
              <div className="mt-2 text-2xl font-semibold text-cred-red">Not verified</div>
              <div className="mt-1 font-mono text-xs text-text-secondary">{query}</div>
              <p className="mt-4 text-xs text-text-secondary text-center">This wallet has no active CredLink attestation.</p>
              <Button variant="outline" size="sm" className="mt-4" onClick={() => { setResult("none"); setQuery(""); }}>Retry</Button>
            </div>
          )}
        </div>
      </div>

      {/* Recent lookups */}
      <div className="card-surface overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-sm font-semibold text-text-primary">Recent lookups</h3>
          <Button variant="ghost" size="sm">Export</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Wallet</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Status</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Checked</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">UID</th>
                <th className="px-4 py-3 text-2xs font-semibold uppercase tracking-wider text-text-tertiary">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentLookups.map((r, i) => (
                <tr key={i} className="border-b border-border hover:bg-bg-elevated transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-text-primary">{r.wallet}</td>
                  <td className="px-4 py-3"><Badge variant={r.status === "verified" ? "verified" : r.status === "expired" ? "expired" : "failed"}>{r.status}</Badge></td>
                  <td className="px-4 py-3 text-xs text-text-secondary">{r.time}</td>
                  <td className="px-4 py-3 font-mono text-xs text-text-secondary flex items-center gap-1">{r.uid} {r.uid !== "—" && <Copy className="h-3 w-3 cursor-pointer hover:text-text-primary" />}</td>
                  <td className="px-4 py-3"><ExternalLink className="h-4 w-4 text-text-tertiary hover:text-text-primary cursor-pointer" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between p-4 text-xs text-text-secondary">
          <span>1-8 of 127 results</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
