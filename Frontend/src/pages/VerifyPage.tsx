import { useState } from "react";
import { Check, Wallet, ShieldCheck, Link2, Camera, Lock, ArrowRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";

const steps = ["Connect Wallet", "Verify Identity", "Complete"];

export default function VerifyPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [consented, setConsented] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const navigate = useNavigate();

  const handleConnect = () => {
    setWalletConnected(true);
  };

  const handleStartVerify = () => {
    setVerifying(true);
    setTimeout(() => {
      setCurrentStep(2);
      setVerifying(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left Panel */}
        <div className="hidden w-[40%] flex-col justify-between border-r border-border bg-bg-surface p-12 lg:flex">
          <div>
            <div className="text-xl font-semibold tracking-[-0.03em]">
              <span className="text-text-primary">Cred</span>
              <span className="text-cred-green">Link</span>
            </div>
            <h2 className="mt-16 text-3xl font-bold tracking-[-0.03em] text-text-primary">
              Verify once.<br />Borrow anywhere.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-text-secondary">
              Your BVN stays with Sumsub. Your wallet gets a cryptographic proof. Lenders see verified: true. Nothing else.
            </p>
            <div className="mt-8 space-y-3">
              {[
                "BVN checked against CBN records",
                "Liveness detection — you're real",
                "Face match against BVN photo",
                "Zero data written to the blockchain",
                "NDPA compliant data handling",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-cred-green" />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&q=80"
              alt="Verified Nigerian"
              className="mt-8 h-[200px] w-full rounded-xl object-cover opacity-50"
              loading="lazy"
            />
            <p className="mt-3 text-xs text-text-tertiary">500+ Nigerians already verified</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-1 flex-col items-center justify-start p-8 lg:p-12">
          {/* Stepper */}
          <div className="mb-12 flex items-center gap-4">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold ${
                  i < currentStep ? "border-2 border-cred-green text-cred-green" :
                  i === currentStep ? "bg-cred-green text-text-on-green" :
                  "border-2 border-border text-text-tertiary"
                }`}>
                  {i < currentStep ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`hidden text-xs sm:block ${i === currentStep ? "text-text-primary" : "text-text-tertiary"}`}>{label}</span>
                {i < steps.length - 1 && <div className={`h-px w-8 ${i < currentStep ? "bg-cred-green" : "border-t border-dashed border-border"}`} />}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <div className="w-full max-w-md">
            {currentStep === 0 && (
              <div className="card-surface p-8 animate-fade-in">
                {!walletConnected ? (
                  <>
                    <h3 className="text-xl font-semibold text-text-primary">Connect your wallet</h3>
                    <p className="mt-2 text-sm text-text-secondary">We'll issue your attestation to this address.</p>
                    <div className="mt-6 space-y-3">
                      {[
                        { name: "MetaMask", color: "bg-cred-gold", popular: true },
                        { name: "Coinbase Wallet", color: "bg-cred-blue", popular: false },
                        { name: "WalletConnect", color: "bg-cred-purple", popular: false },
                      ].map((wallet) => (
                        <button
                          key={wallet.name}
                          onClick={handleConnect}
                          className="flex w-full items-center gap-3 rounded-xl border border-border bg-bg-elevated p-4 transition-all hover:border-cred-green/30"
                        >
                          <div className={`h-8 w-8 rounded-full ${wallet.color}`} />
                          <span className="flex-1 text-left text-sm font-medium text-text-primary">{wallet.name}</span>
                          {wallet.popular && <Badge variant="verified">Popular</Badge>}
                          <ArrowRight className="h-4 w-4 text-text-tertiary" />
                        </button>
                      ))}
                    </div>
                    <div className="my-6 flex items-center gap-3">
                      <div className="h-px flex-1 bg-border" />
                      <span className="text-xs text-text-tertiary">or</span>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                    <p className="text-xs text-text-secondary">
                      New to crypto wallets? <a href="#" className="text-cred-green hover:underline">Learn how to create one →</a>
                    </p>
                  </>
                ) : (
                  <div className="text-center animate-fade-in">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cred-green-dim">
                      <Check className="h-8 w-8 text-cred-green" />
                    </div>
                    <div className="mt-4 font-mono text-sm text-text-primary">0x4f3c...a812</div>
                    <Badge variant="info" className="mt-2">Monad Testnet</Badge>
                    <Button className="mt-6 w-full" onClick={() => setCurrentStep(1)}>Continue <ArrowRight className="h-4 w-4" /></Button>
                  </div>
                )}
              </div>
            )}

            {currentStep === 1 && (
              <div className="card-surface p-8 animate-fade-in">
                <h3 className="text-xl font-semibold text-text-primary">Verify your identity</h3>
                <div className="mt-4 rounded-xl border border-cred-green/30 bg-cred-green-dim p-4">
                  <div className="flex items-start gap-3">
                    <Lock className="mt-0.5 h-4 w-4 text-cred-green" />
                    <p className="text-xs leading-relaxed text-text-secondary">
                      By continuing you consent to Sumsub processing your BVN under their privacy policy and Nigeria's NDPA. CredLink receives only a pass/fail result.
                    </p>
                  </div>
                </div>
                <label className="mt-4 flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consented}
                    onChange={(e) => setConsented(e.target.checked)}
                    className="h-4 w-4 rounded border-border accent-cred-green"
                  />
                  <span className="text-sm text-text-secondary">I understand and consent</span>
                </label>

                {!verifying ? (
                  <div className="mt-6">
                    <div className="flex flex-col items-center rounded-xl border border-dashed border-border-hover bg-bg-elevated p-12">
                      <Camera className="h-10 w-10 text-text-tertiary" />
                      <p className="mt-3 text-sm text-text-tertiary">Verification will open here</p>
                    </div>
                    <Button className="mt-6 w-full" disabled={!consented} onClick={handleStartVerify}>
                      Start Verification
                    </Button>
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col items-center gap-4">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-cred-green border-t-transparent" />
                    <p className="text-sm text-text-secondary">Connecting to Sumsub...</p>
                    <div className="h-[300px] w-full rounded-xl border border-border bg-bg-elevated flex items-center justify-center">
                      <span className="text-xs text-text-tertiary">Sumsub KYC Interface</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="card-surface p-8 text-center animate-fade-in">
                <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-cred-green bg-cred-green-dim">
                  <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="hsl(160,100%,38%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" strokeDasharray="30" strokeDashoffset="0" className="animate-draw-check" />
                  </svg>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-cred-green">You're verified</h3>
                <p className="mt-2 text-sm text-text-secondary">Your onchain identity attestation is live.</p>

                <div className="mt-8 rounded-xl border border-border bg-bg-elevated p-5 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-2xs uppercase tracking-wider text-text-tertiary">Attestation UID</span>
                    <button className="text-text-tertiary hover:text-text-primary"><Copy className="h-3.5 w-3.5" /></button>
                  </div>
                  <div className="mt-1 font-mono text-xs text-text-primary">0xabc4f3c9d1e2b7a8...</div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-left">
                    {[
                      { label: "Issued", value: "1 Jan 2026" },
                      { label: "Expires", value: "1 Jan 2027" },
                      { label: "Network", value: "Monad" },
                      { label: "Standard", value: "CredLink v1" },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="text-2xs text-text-tertiary">{item.label}</div>
                        <div className="text-xs text-text-primary">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="mt-6 w-full" onClick={() => navigate("/dashboard")}>
                  Go to my dashboard <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="ghost" className="mt-2 w-full">Share with a lender</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
