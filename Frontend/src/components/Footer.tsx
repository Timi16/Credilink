import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-base">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Link to="/" className="text-xl font-semibold tracking-[-0.03em]">
              <span className="text-text-primary">Cred</span>
              <span className="text-cred-green">Link</span>
            </Link>
            <p className="mt-2 text-xs text-text-secondary">Onchain identity for Nigerian businesses</p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-text-secondary">
            <Link to="/#how-it-works" className="hover:text-text-primary transition-colors">How it works</Link>
            <Link to="/lenders" className="hover:text-text-primary transition-colors">For Lenders</Link>
            <a href="#" className="hover:text-text-primary transition-colors">Docs</a>
            <a href="#" className="hover:text-text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-text-primary transition-colors">Terms</a>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 text-2xs text-text-tertiary md:flex-row md:items-center md:justify-between">
          <span>© 2026 CredLink. Built on Monad.</span>
          <span>NDPA Compliant · Zero PII Onchain · EAS Standard</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-text-secondary transition-colors">𝕏</a>
            <a href="#" className="hover:text-text-secondary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
