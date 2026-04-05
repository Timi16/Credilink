import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "For Lenders", href: "/lenders" },
  { label: "Docs", href: "#" },
  { label: "About", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [connected] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-border" style={{ background: "rgba(7,11,20,0.85)", backdropFilter: "blur(20px)" }}>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0 text-xl font-semibold tracking-[-0.03em]">
          <span className="text-text-primary">Cred</span>
          <span className="text-cred-green">Link</span>
        </Link>

        {/* Center nav - desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`relative text-sm transition-colors hover:text-text-primary ${
                location.pathname === link.href ? "text-text-primary" : "text-text-secondary"
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cred-green" />
              )}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="hidden items-center gap-3 md:flex">
          {!connected ? (
            <Button size="sm">Connect Wallet</Button>
          ) : (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5">
                <span className="h-2 w-2 rounded-full bg-cred-green" />
                <span className="text-xs text-text-secondary">Monad</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3 py-1.5">
                <span className="font-mono text-xs text-text-primary">0x4f3c...a812</span>
                <ChevronDown className="h-3 w-3 text-text-tertiary" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="absolute left-0 top-16 z-50 w-full border-b border-border bg-bg-surface p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-text-secondary hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="w-full">Connect Wallet</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
