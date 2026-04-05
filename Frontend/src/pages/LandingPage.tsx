import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Building2, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-10 md:px-10 md:py-14">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-cred-green-dim" />
            <div className="text-lg font-semibold tracking-tight">Credilink</div>
          </div>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link to="/lenders">For lenders</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/verify">Verify now</Link>
            </Button>
          </div>
        </header>

        <section className="card-surface relative overflow-hidden p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,196,140,0.18),transparent_50%)]" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-end">
            <div className="space-y-5">
              <Badge variant="info">Trust Layer for Onchain Credit</Badge>
              <h1 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
                Portable attestations for wallets, users, and lending protocols.
              </h1>
              <p className="max-w-xl text-base text-muted-foreground">
                Issue, verify, and share verifiable credit attestations with fast checks and privacy-aware workflows.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/verify">
                    Start verification
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/dashboard">Open dashboard</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-1">
              <div className="card-elevated p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <BadgeCheck className="h-4 w-4 text-emerald-300" />
                  Successful checks
                </div>
                <div className="text-2xl font-semibold">98.2%</div>
              </div>
              <div className="card-elevated p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-sky-300" />
                  Active attestations
                </div>
                <div className="text-2xl font-semibold">14,320</div>
              </div>
              <div className="card-elevated p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4 text-violet-300" />
                  Integrated lenders
                </div>
                <div className="text-2xl font-semibold">42</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <article className="card-elevated p-5">
            <h2 className="mb-2 text-sm font-semibold">Issue</h2>
            <p className="text-sm text-muted-foreground">
              Generate signed attestations tied to identity, repayment behavior, and onchain activity.
            </p>
          </article>
          <article className="card-elevated p-5">
            <h2 className="mb-2 text-sm font-semibold">Verify</h2>
            <p className="text-sm text-muted-foreground">
              Validate claims instantly with source context, status history, and revocation signals.
            </p>
          </article>
          <article className="card-elevated p-5">
            <h2 className="mb-2 text-sm font-semibold">Share</h2>
            <p className="text-sm text-muted-foreground">
              Share proof with lenders or apps using one-time links and API-ready payloads.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
