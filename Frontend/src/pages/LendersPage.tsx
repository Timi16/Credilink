import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Zap, Gavel, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function LendersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />

      {/* Hero */}
      <section className="py-24 lg:py-32 px-4" style={{ background: "radial-gradient(ellipse at top right, rgba(59,130,246,0.06), transparent 50%)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="info">FOR LENDING PROTOCOLS</Badge>
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.03em] text-text-primary lg:text-4xl">
            Verify any Nigerian wallet in one call.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-text-secondary">
            CredLink attestations are written to Monad. Read them onchain or via REST API. No KYC re-run. No personal data. Just a cryptographic proof.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild><a href="#request-access">Request API access</a></Button>
            <Button size="lg" variant="secondary">Read the docs</Button>
          </div>

          <div className="mt-12 mx-auto max-w-[700px] overflow-hidden rounded-2xl border border-border" style={{ background: "#0D1117" }}>
            <div className="flex items-center gap-2 border-b border-border px-4 py-2">
              <span className="h-3 w-3 rounded-full bg-cred-red" />
              <span className="h-3 w-3 rounded-full bg-cred-gold" />
              <span className="h-3 w-3 rounded-full bg-cred-green" />
              <span className="ml-2 text-xs text-text-tertiary">Integration</span>
            </div>
            <pre className="p-6 font-mono text-xs leading-relaxed text-text-secondary text-left overflow-x-auto">
{`// Option 1 — REST API
const res = await fetch(
  'https://api.credlink.xyz/v1/verify/' + walletAddress,
  { headers: { 'X-API-Key': process.env.CREDLINK_KEY } }
)
const { verified, expiresAt } = await res.json()
// verified: true ✓

// Option 2 — Onchain (trustless)
const verified = await resolver.isVerified(walletAddress)
// true ✓`}
            </pre>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 md:grid-cols-3">
          {[
            { icon: Lock, bg: "bg-cred-purple-dim", color: "text-cred-purple", title: "No personal data. Ever.", body: "You receive verified: true. Nothing else. Borrower name, BVN, and biometric data are never exposed. NDPA compliant by design." },
            { icon: Zap, bg: "bg-cred-green-dim", color: "text-cred-green", title: "Skip the KYC queue.", body: "Borrowers verify once on CredLink. Your protocol reads the attestation. No SDK. No Sumsub contract. No waiting." },
            { icon: Gavel, bg: "bg-cred-gold-dim", color: "text-cred-gold", title: "Enforceable loans.", body: "A defaulted borrower is not anonymous. The attestation links a wallet to a real, identified Nigerian person. Legal recovery becomes viable." },
          ].map((b) => (
            <div key={b.title} className="card-surface p-6">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${b.bg}`}>
                <b.icon className={`h-6 w-6 ${b.color}`} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-text-primary">{b.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Request access form */}
      <section id="request-access" className="py-24 px-4">
        <div className="mx-auto max-w-lg card-surface p-8">
          {!submitted ? (
            <>
              <h3 className="text-xl font-semibold text-text-primary">Request API access</h3>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="mt-6 space-y-4">
                {[
                  { label: "Protocol name", type: "text", placeholder: "e.g. LendBase" },
                  { label: "Website", type: "url", placeholder: "https://..." },
                  { label: "Contact email", type: "email", placeholder: "you@protocol.xyz" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-xs text-text-secondary">{field.label}</label>
                    <input type={field.type} placeholder={field.placeholder} required className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary" />
                  </div>
                ))}
                <div>
                  <label className="text-xs text-text-secondary">Use case</label>
                  <textarea placeholder="Tell us how you'll use CredLink" required className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary min-h-[80px]" />
                </div>
                <div>
                  <label className="text-xs text-text-secondary">Expected volume</label>
                  <select required className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary">
                    <option value="">Select...</option>
                    <option>{"< 100 verifications/month"}</option>
                    <option>100-1,000/month</option>
                    <option>1,000-10,000/month</option>
                    <option>10,000+/month</option>
                  </select>
                </div>
                <Button type="submit" className="w-full">Submit request</Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cred-green-dim">
                <ArrowRight className="h-8 w-8 text-cred-green" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-cred-green">Request received</h3>
              <p className="mt-2 text-sm text-text-secondary">We'll be in touch within 48 hours.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
