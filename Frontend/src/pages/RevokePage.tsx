import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function RevokePage() {
  const [wallet, setWallet] = useState("");
  const [found, setFound] = useState(false);
  const [confirmText, setConfirmText] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-text-primary">Revocation Tool</h2>
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-cred-red/30 bg-cred-red-dim p-4">
        <AlertTriangle className="h-5 w-5 text-cred-red" />
        <span className="text-xs text-cred-red">Revoking an attestation is irreversible. The borrower will be immediately unverified onchain.</span>
      </div>

      <div className="mt-8 card-surface p-6">
        <div className="flex gap-2">
          <input value={wallet} onChange={(e) => setWallet(e.target.value)} placeholder="Enter wallet address" className="flex-1 input-credlink px-3 py-2.5 font-mono text-sm text-text-primary placeholder:text-text-tertiary" />
          <Button variant="secondary" onClick={() => setFound(true)}>Look up</Button>
        </div>
        {found && (
          <div className="mt-6 space-y-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-5 text-xs">
              {[{ l: "Wallet", v: wallet || "0x4f3c...a812" }, { l: "Status", v: "Active" }, { l: "Issued", v: "Jan 1, 2026" }, { l: "Expires", v: "Jan 1, 2027" }, { l: "BVN hash", v: "0xhash..." }].map((r) => (
                <div key={r.l}><span className="text-text-tertiary">{r.l}</span><div className="text-text-primary font-mono mt-0.5">{r.v}</div></div>
              ))}
            </div>
            <div>
              <label className="text-xs text-text-secondary">Revocation reason (required)</label>
              <select required className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary">
                <option value="">Select reason...</option>
                <option>Fraud detected</option>
                <option>User request — wallet compromised</option>
                <option>Regulatory instruction</option>
                <option>Duplicate identity detected</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-text-secondary">Notes (optional)</label>
              <textarea className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary min-h-[60px]" />
            </div>
            <Button variant="destructive" onClick={() => setShowModal(true)}>Revoke Attestation</Button>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md rounded-2xl border border-cred-red/30 bg-bg-surface p-6">
            <h3 className="text-lg font-semibold text-text-primary">Revoke {wallet || "0x4f3c...a812"}?</h3>
            <p className="mt-2 text-xs text-text-secondary">This will write a revocation flag to Monad. The wallet will immediately fail all isVerified() calls.</p>
            <div className="mt-4">
              <label className="text-xs text-text-secondary">Type REVOKE to confirm</label>
              <input value={confirmText} onChange={(e) => setConfirmText(e.target.value)} className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary" />
            </div>
            <div className="mt-4 flex gap-3">
              <Button variant="outline" onClick={() => setShowModal(false)}>Cancel</Button>
              <Button variant="destructive" disabled={confirmText !== "REVOKE"}>Confirm Revocation</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
