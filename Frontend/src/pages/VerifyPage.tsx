import { useState, type ReactNode } from "react";
import { ArrowRight, Camera, Check, Copy, Lock, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

type WalletOption = {
  id: string;
  name: string;
  subtitle: string;
  popular?: boolean;
  logo: ReactNode;
};

const steps = ["Connect Wallet", "Verify Identity", "Complete"];

const walletOptions: WalletOption[] = [
  {
    id: "metamask",
    name: "MetaMask",
    subtitle: "Browser wallet extension",
    popular: true,
    logo: (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <polygon points="16,2 6,10 10,20 16,17" fill="#F6851B" />
        <polygon points="16,2 26,10 22,20 16,17" fill="#E2761B" />
        <polygon points="10,20 16,30 22,20 16,23" fill="#C0AD9E" />
      </svg>
    ),
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    subtitle: "Mobile and extension wallet",
    logo: (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#0052FF" />
        <circle cx="16" cy="16" r="7" fill="white" />
      </svg>
    ),
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    subtitle: "Connect with QR code",
    logo: (
      <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
        <path d="M8 13a11 11 0 0 1 16 0" stroke="#3B99FC" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M11 17a7 7 0 0 1 10 0" stroke="#3B99FC" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M14.5 20.5a2 2 0 0 1 3 0" stroke="#3B99FC" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

const trustChecks = [
  "BVN checked against CBN records",
  "Live selfie liveness detection",
  "Face match against BVN image",
  "No BVN or selfie stored onchain",
  "NDPA-compliant data handling",
];

export default function VerifyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedWallet, setSelectedWallet] = useState<WalletOption | null>(null);
  const [consented, setConsented] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleConnect = (wallet: WalletOption) => {
    setSelectedWallet(wallet);
  };

  const handleStartVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setCurrentStep(2);
      setVerifying(false);
    }, 3000);
  };

  const handleCopyUid = async () => {
    try {
      await navigator.clipboard.writeText("0xabc4f3c9d1e2b7a8...");
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[380px_1fr] lg:px-8 lg:py-8">
        <aside className="hidden rounded-3xl border border-border bg-bg-surface p-7 lg:flex lg:flex-col">
          <div>
            <Badge variant="info">Secure verification flow</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text-primary">
              Verify once.
              <br />
              Borrow anywhere.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-text-secondary">
              Your BVN stays with the KYC provider. Your wallet gets a cryptographic pass signal that lenders can trust.
            </p>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-bg-elevated p-4">
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=80"
              alt="Verified user portrait"
              className="h-[300px] w-full rounded-xl bg-bg-base object-contain object-center p-2"
              loading="lazy"
            />
            <p className="mt-3 text-xs text-text-tertiary">500+ verified users already using their attestations.</p>
          </div>

          <div className="mt-6 space-y-3">
            {trustChecks.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 text-cred-green" />
                <span className="text-xs text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </aside>

        <main className="rounded-3xl border border-border bg-bg-surface p-5 sm:p-7 lg:p-9">
          <div className="mb-8 lg:hidden">
            <div className="rounded-2xl border border-border bg-bg-elevated p-4">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=900&q=80"
                alt="Verified user portrait"
                className="h-[220px] w-full rounded-xl bg-bg-base object-contain object-center p-2"
                loading="lazy"
              />
              <p className="mt-3 text-xs text-text-tertiary">Secure verification in minutes.</p>
            </div>
          </div>

          <div className="mb-8 flex flex-wrap items-center gap-3 sm:gap-4">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                    i < currentStep
                      ? "border-2 border-cred-green text-cred-green"
                      : i === currentStep
                        ? "bg-cred-green text-text-on-green"
                        : "border-2 border-border text-text-tertiary"
                  }`}
                >
                  {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`text-xs ${i === currentStep ? "text-text-primary" : "text-text-tertiary"}`}>{label}</span>
                {i < steps.length - 1 && (
                  <div className={`h-px w-6 sm:w-10 ${i < currentStep ? "bg-cred-green" : "border-t border-dashed border-border"}`} />
                )}
              </div>
            ))}
          </div>

          {currentStep === 0 && (
            <section className="animate-fade-in">
              {!selectedWallet ? (
                <div>
                  <h3 className="text-2xl font-semibold text-text-primary">Connect your wallet</h3>
                  <p className="mt-2 text-sm text-text-secondary">Choose where your verification attestation will be issued.</p>

                  <div className="mt-6 grid gap-3">
                    {walletOptions.map((wallet) => (
                      <button
                        key={wallet.id}
                        onClick={() => handleConnect(wallet)}
                        className="group flex w-full items-center gap-4 rounded-2xl border border-border bg-bg-elevated p-4 text-left transition-all hover:border-cred-green/40 hover:bg-bg-base"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-surface">
                          {wallet.logo}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-text-primary">{wallet.name}</div>
                          <div className="text-xs text-text-secondary">{wallet.subtitle}</div>
                        </div>
                        {wallet.popular && <Badge variant="verified">Popular</Badge>}
                        <ArrowRight className="h-4 w-4 text-text-tertiary transition-transform group-hover:translate-x-0.5" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-cred-green/30 bg-cred-green-dim p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">Wallet connected</h3>
                      <p className="mt-1 text-sm text-text-secondary">Continue to identity verification.</p>
                    </div>
                    <Badge variant="verified">Connected</Badge>
                  </div>
                  <div className="mt-4 rounded-xl border border-border bg-bg-surface p-4">
                    <div className="text-2xs uppercase tracking-wider text-text-tertiary">Selected wallet</div>
                    <div className="mt-1 text-sm font-medium text-text-primary">{selectedWallet.name}</div>
                    <div className="mt-2 font-mono text-xs text-text-secondary">0x4f3c...a812</div>
                  </div>
                  <Button className="mt-5 w-full" onClick={() => setCurrentStep(1)}>
                    Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </section>
          )}

          {currentStep === 1 && (
            <section className="animate-fade-in">
              <h3 className="text-2xl font-semibold text-text-primary">Verify your identity</h3>
              <p className="mt-2 text-sm text-text-secondary">This takes about 3 to 5 minutes.</p>

              <div className="mt-5 rounded-2xl border border-cred-green/30 bg-cred-green-dim p-4">
                <div className="flex items-start gap-3">
                  <Lock className="mt-0.5 h-4 w-4 text-cred-green" />
                  <p className="text-xs leading-relaxed text-text-secondary">
                    By continuing, you consent to KYC processing under NDPA rules. Only verification status is returned to CredLink.
                  </p>
                </div>
              </div>

              <label className="mt-4 flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={consented}
                  onChange={(e) => setConsented(e.target.checked)}
                  className="h-4 w-4 rounded border-border accent-cred-green"
                />
                <span className="text-sm text-text-secondary">I understand and consent to verification.</span>
              </label>

              {!verifying ? (
                <div className="mt-6 rounded-2xl border border-dashed border-border p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-elevated">
                      <Camera className="h-5 w-5 text-text-tertiary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-text-primary">Identity session</div>
                      <div className="text-xs text-text-secondary">BVN + selfie + liveness check</div>
                    </div>
                  </div>
                  <Button className="mt-6 w-full" disabled={!consented} onClick={handleStartVerify}>
                    Start verification
                  </Button>
                </div>
              ) : (
                <div className="mt-6 rounded-2xl border border-border bg-bg-elevated p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-cred-green border-t-transparent" />
                    <div>
                      <div className="text-sm font-medium text-text-primary">Connecting to verification provider...</div>
                      <div className="text-xs text-text-secondary">Please keep this tab open.</div>
                    </div>
                  </div>
                  <div className="mt-5 flex h-[260px] items-center justify-center rounded-xl border border-border bg-bg-base">
                    <span className="text-xs text-text-tertiary">KYC interface loading</span>
                  </div>
                </div>
              )}
            </section>
          )}

          {currentStep === 2 && (
            <section className="animate-fade-in text-center">
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-cred-green bg-cred-green-dim">
                <ShieldCheck className="h-9 w-9 text-cred-green" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-cred-green">Verification complete</h3>
              <p className="mt-2 text-sm text-text-secondary">Your identity attestation is ready to use.</p>

              <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-border bg-bg-elevated p-5 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-2xs uppercase tracking-wider text-text-tertiary">Attestation UID</span>
                  <button onClick={handleCopyUid} className="text-text-tertiary transition-colors hover:text-text-primary" aria-label="Copy UID">
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-2 font-mono text-xs text-text-primary">0xabc4f3c9d1e2b7a8...</div>
                {copied && <div className="mt-2 text-2xs text-cred-green">Copied</div>}

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {[
                    { label: "Issued", value: "January 1, 2026" },
                    { label: "Expires", value: "January 1, 2027" },
                    { label: "Status", value: "Verified" },
                    { label: "Standard", value: "CredLink v1" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="text-2xs text-text-tertiary">{item.label}</div>
                      <div className="text-xs text-text-primary">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="mt-6 w-full sm:mx-auto sm:max-w-xl" onClick={() => navigate("/dashboard")}>
                Go to my dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="mt-2 w-full sm:mx-auto sm:max-w-xl">
                Share with a lender
              </Button>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
