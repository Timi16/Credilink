import { Shield, Copy, ExternalLink, X, Check, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AttestationDetail() {
  return (
    <div>
      <div className="text-xs text-text-tertiary mb-6">Dashboard &gt; My Attestation</div>

      {/* Hero card */}
      <div className="card-surface p-6 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cred-green-dim">
          <Shield className="h-7 w-7 text-cred-green" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-text-primary">Active Attestation</h2>
          <div className="mt-1 font-mono text-xs text-text-secondary">0xabc4f3c9d1e2b7a84f3c9d1e2b7a8000000...</div>
          <div className="mt-2 flex flex-wrap gap-2">
            <Badge variant="verified">Verified</Badge>
            <Badge variant="info">Monad</Badge>
            <Badge variant="purple">EAS Compatible</Badge>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-text-secondary">11 months 4 days remaining</div>
          <div className="mt-2 mx-auto md:ml-auto h-20 w-20 rounded-full border-4 border-cred-green/30 flex items-center justify-center">
            <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(160,100%,38%)" strokeWidth="3" strokeDasharray="100" strokeDashoffset="8" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          {/* Metadata */}
          <div className="card-surface p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Attestation details</h3>
            <div className="divide-y divide-border">
              {[
                { label: "Attestation UID", value: "0xabc4f3c9d1e2b7a8...", mono: true, copy: true },
                { label: "Issuer", value: "CredLink Protocol", link: true },
                { label: "Recipient wallet", value: "0x4f3c...a812", mono: true, link: true },
                { label: "Issued at", value: "Jan 1, 2026 · 14:23:01 UTC" },
                { label: "Expires at", value: "Jan 1, 2027 · 14:23:01 UTC" },
                { label: "Network", value: "Monad (chain ID: 10143)" },
                { label: "Schema", value: "CredLink v1" },
                { label: "Status", value: "Active" },
                { label: "Transaction hash", value: "0xdef...123", mono: true, link: true },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between py-3">
                  <span className="text-xs text-text-tertiary">{row.label}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs text-text-primary ${row.mono ? "font-mono" : ""}`}>{row.value}</span>
                    {row.copy && <button className="text-text-tertiary hover:text-text-primary"><Copy className="h-3 w-3" /></button>}
                    {row.link && <ExternalLink className="h-3 w-3 text-text-tertiary" />}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Raw data */}
          <div className="card-surface p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">Onchain data</h3>
            <pre className="rounded-xl bg-bg-elevated p-4 font-mono text-xs leading-relaxed text-text-secondary overflow-x-auto">
{`{
  "verifiedAt": 1735689600,
  "expiresAt": 1767225600,
  "revoked": false,
  "issuer": "0xCredLinkIssuer...",
  "schemaVersion": "1"
}`}
            </pre>
            <a href="#" className="mt-3 inline-block text-xs text-cred-green hover:underline">View on Monad explorer ↗</a>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-2">
          {/* Privacy */}
          <div className="rounded-xl border border-cred-red/30 bg-cred-red-dim p-6">
            <h3 className="text-base font-semibold text-text-primary mb-4">What is NOT in this attestation</h3>
            {["BVN number", "NIN number", "Full legal name", "Date of birth", "Phone number", "Selfie or biometric data", "Address", "Any Sumsub data"].map((item) => (
              <div key={item} className="flex items-center gap-2 py-1">
                <X className="h-4 w-4 text-cred-red" />
                <span className="text-sm text-text-primary">{item}</span>
              </div>
            ))}
            <p className="mt-4 text-xs text-text-secondary">CredLink is designed so that a database breach of our onchain data reveals nothing about you.</p>
          </div>

          {/* Revoke */}
          <div className="rounded-xl border border-cred-gold/30 bg-cred-gold-dim p-6">
            <h3 className="text-base font-semibold text-text-primary mb-2">Revoke this attestation</h3>
            <p className="text-xs text-text-secondary mb-4">You can revoke your attestation if your wallet is compromised. You will need to re-verify with a new wallet.</p>
            <Button variant="destructive-outline" size="sm">Revoke attestation</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
