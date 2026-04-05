import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Shield, Calendar, Link2, Eye, Check, X, Wallet, ShieldCheck, Lock, Code, Zap, Gavel, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

function HeroDashboardMockup() {
  return (
    <div className="mx-auto mt-16 max-w-[960px] overflow-hidden rounded-[20px] border border-border" style={{ boxShadow: "0 0 80px rgba(0,196,140,0.08), 0 0 160px rgba(124,58,237,0.05)" }}>
      <div className="flex h-10 items-center gap-2 border-b border-border bg-bg-surface px-4">
        <span className="h-3 w-3 rounded-full bg-cred-red" />
        <span className="h-3 w-3 rounded-full bg-cred-gold" />
        <span className="h-3 w-3 rounded-full bg-cred-green" />
      </div>
      <div className="flex h-[400px] bg-bg-base">
        <div className="hidden w-[200px] flex-col gap-2 border-r border-border bg-bg-surface p-4 md:flex">
          {["Dashboard", "Attestation", "Activity", "Wallet", "Share"].map((item, i) => (
            <div key={item} className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-cred-green-dim text-cred-green" : "text-text-secondary"}`}>{item}</div>
          ))}
        </div>
        <div className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "STATUS", value: "Verified", color: "text-cred-green" },
              { label: "EXPIRES", value: "11 months", color: "text-text-primary" },
              { label: "NETWORK", value: "Monad", color: "text-text-primary" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-bg-elevated p-4">
                <div className="text-2xs uppercase tracking-widest text-text-tertiary">{s.label}</div>
                <div className={`mt-1 text-lg font-bold ${s.color}`}>{s.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-cred-green/30 bg-cred-green-dim p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-cred-green" />
              <span className="text-sm font-semibold text-cred-green">Identity Verified</span>
              <Badge variant="verified" className="ml-auto">Active</Badge>
            </div>
            <div className="mt-2 font-mono text-xs text-text-secondary">0xabc4f3c9d1e2b7a8...</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { value: "₦2B+", label: "Financing gap we're fixing" },
    { value: "96.5%", label: "Sumsub Nigeria KYC pass rate" },
    { value: "< 5 min", label: "Average verification time" },
    { value: "0", label: "PII records stored onchain" },
  ];
  return (
    <section className="border-y border-border bg-bg-surface py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl font-bold text-text-primary">{s.value}</div>
            <div className="mt-1 text-xs text-text-secondary">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1100px] gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-cred-green">THE PROBLEM</span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text-primary">
            African SMEs are creditworthy. They're just illegible.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
            <p>Tunde moves ₦8M a month through his provisions business in Alaba Market. He pays suppliers via USDT, collects via Opay, runs a rotating savings group with six other traders.</p>
            <p>Access Bank doesn't know Tunde exists. His financial life is invisible to every credit system that might lend to him.</p>
            <p>He's not uncreditworthy. He's <em>unreadable</em>.</p>
            <p className="font-semibold text-text-primary">CredLink makes him readable.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-cred-red/20 bg-cred-red-dim p-5">
              <X className="h-5 w-5 text-cred-red" />
              <div className="mt-2 text-2xl font-bold text-cred-red">$400B+</div>
              <div className="mt-1 text-xs text-text-secondary">Annual SME financing gap in Africa</div>
            </div>
            <div className="rounded-xl border border-cred-green/20 bg-cred-green-dim p-5">
              <Check className="h-5 w-5 text-cred-green" />
              <div className="mt-2 text-2xl font-bold text-cred-green">87%</div>
              <div className="mt-1 text-xs text-text-secondary">Of rejected borrowers have stable income</div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[20px]">
          <img
            src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80"
            alt="Nigerian business owner"
            className="h-[520px] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(transparent 50%, rgba(0,196,140,0.15))" }} />
          <div className="absolute bottom-0 left-0 p-6">
            <div className="text-sm font-semibold text-text-primary">Tunde, Lagos</div>
            <div className="text-xs text-text-secondary">₦8M/month. Zero bank credit.</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      color: "text-cred-green",
      iconBg: "bg-cred-green-dim",
      icon: <Wallet className="h-6 w-6 text-cred-green" />,
      title: "Connect your wallet",
      body: "Link MetaMask, Coinbase Wallet, or any WalletConnect-compatible wallet. No personal data is captured at this step.",
      tag: "< 10 seconds",
    },
    {
      num: "02",
      color: "text-cred-purple",
      iconBg: "bg-cred-purple-dim",
      icon: <ShieldCheck className="h-6 w-6 text-cred-purple" />,
      title: "Verify your BVN",
      body: "Sumsub checks your BVN against CBN records, runs a live face match, and confirms you're real. You never leave the page.",
      tag: "< 5 minutes",
    },
    {
      num: "03",
      color: "text-cred-gold",
      iconBg: "bg-cred-gold-dim",
      icon: <Link2 className="h-6 w-6 text-cred-gold" />,
      title: "Receive your attestation",
      body: "A cryptographic proof is written to Monad. Your BVN never touches the chain — only a verified: true flag attributed to your wallet.",
      tag: "Valid 12 months",
    },
  ];

  return (
    <section id="how-it-works" className="bg-bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-text-primary">Three steps to financial legibility</h2>
          <p className="mt-4 text-lg text-text-secondary">The fastest path from invisible borrower to verified identity on any chain.</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="card-surface p-6">
              <div className={`text-4xl font-bold opacity-30 ${step.color}`}>{step.num}</div>
              <div className={`mt-4 flex h-12 w-12 items-center justify-center rounded-full ${step.iconBg}`}>
                {step.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.body}</p>
              <div className="mt-4">
                <Badge variant="outline">{step.tag}</Badge>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-text-secondary">
          Then share your attestation UID with any lender. One credential. Everywhere.
        </p>
      </div>
    </section>
  );
}

function PrivacyArchitecture() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1100px] gap-16 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <h3 className="mb-6 text-lg font-semibold text-text-primary">What lives onchain vs. what doesn't</h3>
          <div className="space-y-4">
            <div className="rounded-xl border border-cred-green/30 bg-cred-green-dim p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-cred-green">Onchain (public, permanent)</div>
              {["Wallet address", "Verified: true", "Issued: timestamp", "Expires: timestamp"].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1">
                  <Check className="h-4 w-4 text-cred-green" />
                  <span className="text-sm text-text-primary">{item}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-cred-red/30 bg-cred-red-dim p-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-cred-red">Never onchain (ever)</div>
              {["BVN or NIN number", "Full name", "Date of birth", "Selfie or photo", "Phone number", "Any Sumsub data"].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1">
                  <X className="h-4 w-4 text-cred-red" />
                  <span className="text-sm text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-cred-green">ZERO-KNOWLEDGE DESIGN</span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text-primary">
            Prove you're real. Without proving who you are.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary">
            CredLink uses a one-way cryptographic hash of your BVN — stored only off-chain for duplicate detection. On Monad, the only thing written is that your wallet passed KYC. A lender learns exactly one thing: this is a real person.
          </p>
          <div className="mt-8 rounded-xl border border-border bg-bg-elevated p-5">
            <pre className="font-mono text-xs leading-relaxed text-text-secondary">
{`// What a lender sees
isVerified("0x4f3c...a812")
→ true

// What they don't see
→ your name, BVN, face, anything else`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoItsFor() {
  const personas = [
    {
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
      name: "Wholesale traders",
      desc: "Moving ₦5M+ monthly across bank, mobile money, and crypto. Invisible to traditional credit.",
      tags: ["USDT payments", "P2P crypto", "Alaba / Ladipo"],
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      name: "Freelancers & remote workers",
      desc: "Earning in USDC from international clients. Naira income statements don't reflect their real earnings.",
      tags: ["USDC income", "Dollar earners", "Tech / Creative"],
    },
    {
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      name: "P2P crypto traders",
      desc: "Running ₦15M+ monthly on Binance P2P. No formal business registration. Fully auditable onchain.",
      tags: ["Binance P2P", "High volume", "Crypto native"],
    },
  ];

  return (
    <section className="bg-bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-[-0.03em] text-text-primary">
          Built for the businesses banks ignore
        </h2>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {personas.map((p) => (
            <div key={p.name} className="overflow-hidden rounded-2xl border border-border bg-bg-surface">
              <img src={p.image} alt={p.name} className="h-[200px] w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-text-primary">{p.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="outline">{t}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LenderCTA() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px] px-4 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-border bg-bg-elevated p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <Badge variant="info">FOR LENDING PROTOCOLS</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-text-primary">One call. Verified borrower.</h2>
            <p className="mt-4 text-base text-text-secondary">
              Integrate CredLink in an afternoon. Read our attestations directly onchain or via REST API.
            </p>
            <div className="mt-6 rounded-xl border border-border bg-bg-base p-5">
              <pre className="font-mono text-xs leading-relaxed text-cred-green">
{`// Verify before underwriting — that's it
const verified = await resolver.isVerified(walletAddress)
if (!verified) return rejectLoan()
// proceed with full confidence`}
              </pre>
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild><Link to="/lenders">Request API access <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button variant="ghost">Read integration docs</Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm rounded-2xl border border-border bg-bg-surface p-6">
              <div className="text-xs text-text-tertiary uppercase tracking-wider">API Response</div>
              <pre className="mt-3 font-mono text-xs leading-relaxed text-text-primary">
{`{
  "verified": true,
  "attestationUid": "0xabc...def",
  "issuedAt": 1735689600,
  "expiresAt": 1767225600,
  "chain": "monad"
}`}
              </pre>
              <p className="mt-4 text-2xs text-text-tertiary">No PII. No name. No BVN. Just verified: true</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const layers = [
    { active: true, color: "border-cred-green", dotColor: "bg-cred-green", label: "COMPLETE", title: "Identity Bridge ← You are here", desc: "Verify once. Portable across all EVM lending protocols." },
    { active: false, color: "border-cred-purple", dotColor: "bg-cred-purple", label: "COMING SOON", title: "Credit Scoring", desc: "Aggregate onchain history under your verified identity." },
    { active: false, color: "border-border", dotColor: "bg-text-tertiary", label: "FUTURE", title: "Receivables Tokenisation", desc: "Tokenise invoices as KYC'd collateral." },
    { active: false, color: "border-border", dotColor: "bg-text-tertiary", label: "FUTURE", title: "SME Lending", desc: "Automated underwriting. Diaspora liquidity. Nigerian SME loans." },
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-[-0.03em] text-text-primary">What comes after identity</h2>
        <div className="mt-16 text-left">
          {layers.map((layer, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              <div className="flex flex-col items-center">
                <div className={`h-4 w-4 rounded-full ${layer.dotColor} ${layer.active ? "animate-pulse-green" : ""}`} />
                {i < layers.length - 1 && <div className="mt-1 w-px flex-1 border-l border-dashed border-border" />}
              </div>
              <div className={`flex-1 rounded-xl border p-5 ${layer.active ? "border-cred-green/30 bg-cred-green-dim" : "border-border bg-bg-surface"} ${!layer.active ? "opacity-50" : ""}`}>
                <Badge variant={layer.active ? "verified" : "outline"}>{layer.label}</Badge>
                <h3 className="mt-2 text-lg font-semibold text-text-primary">{layer.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-bg-surface py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-4xl font-bold leading-tight tracking-[-0.03em] text-text-primary lg:text-hero">
          <span className="block animate-fade-up opacity-0 stagger-1">The borrowers exist.</span>
          <span className="block animate-fade-up opacity-0 stagger-2">The credit system doesn't see them.</span>
          <span className="block animate-fade-up text-cred-green opacity-0 stagger-3">Until now.</span>
        </h2>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild><Link to="/verify">Verify my wallet <ArrowRight className="h-4 w-4" /></Link></Button>
          <Button size="lg" variant="secondary" asChild><Link to="/lenders">For lenders</Link></Button>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-bg-base">
      <Navbar />
      
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-16" style={{ background: "radial-gradient(ellipse at top right, rgba(124,58,237,0.08), transparent 50%), radial-gradient(ellipse at bottom left, rgba(0,196,140,0.05), transparent 50%)" }}>
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cred-green/30 bg-cred-green-dim px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-cred-green animate-pulse-green" />
            <span className="text-xs font-medium text-cred-green">Now live on Monad Testnet</span>
          </div>

          <h1 className="mt-8 text-4xl font-bold tracking-[-0.04em] text-text-primary md:text-hero" style={{ fontSize: "clamp(48px, 7vw, 80px)" }}>
            Your identity.<br />
            Your credit. <span className="text-cred-green">Onchain.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
            CredLink turns your BVN into a portable, private onchain identity credential. Verify once — any lending protocol on any EVM chain can trust you forever.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild><Link to="/verify">Get Verified Free</Link></Button>
            <Button size="lg" variant="secondary" asChild><a href="#how-it-works">See how it works ↓</a></Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-text-tertiary md:gap-8">
            <span className="flex items-center gap-2">🔐 Zero PII onchain</span>
            <span className="hidden h-4 w-px bg-border md:block" />
            <span className="flex items-center gap-2">⚡ Under 5 minutes</span>
            <span className="hidden h-4 w-px bg-border md:block" />
            <span className="flex items-center gap-2">🌍 All EVM chains</span>
          </div>

          <HeroDashboardMockup />
        </div>
      </section>

      <StatsBar />
      <ProblemSection />
      <HowItWorks />
      <PrivacyArchitecture />
      <WhoItsFor />
      <LenderCTA />
      <Roadmap />
      <FinalCTA />
      <Footer />
    </div>
  );
}
