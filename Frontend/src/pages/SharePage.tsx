import { Copy, QrCode } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const methods = [
  {
    tag: "RECOMMENDED FOR PROTOCOLS",
    title: "REST API",
    code: "GET api.credlink.xyz/v1/verify/0x4f3c...a812",
    body: "Lenders can call this endpoint with their API key. Returns verified: true with no personal data.",
    link: "Request API access for your lender →",
  },
  {
    tag: "TRUSTLESS",
    title: "Direct onchain read",
    code: `address: 0xCredLinkContract...\nfn: isVerified("0x4f3c...a812")`,
    body: "Lenders can read your verification status directly from Monad. No API key required. Fully trustless.",
  },
  {
    tag: "SIMPLEST",
    title: "Attestation UID",
    code: "0xabc4f3c9d1e2b7a84f3c9d1e2b7a8000000...",
    body: "Share this UID directly. Lenders can look it up on the CredLink explorer.",
  },
];

export default function SharePage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-text-primary">Share your attestation</h2>
      <p className="mt-2 text-sm text-text-secondary">Give lenders a way to verify you. Choose your preferred method.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {methods.map((m) => (
          <div key={m.title} className="card-surface p-6">
            <Badge variant="outline" className="text-2xs">{m.tag}</Badge>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">{m.title}</h3>
            <div className="mt-3 flex items-center gap-2 rounded-lg bg-bg-elevated p-3">
              <pre className="flex-1 font-mono text-2xs text-cred-green whitespace-pre-wrap">{m.code}</pre>
              <button className="text-text-tertiary hover:text-text-primary"><Copy className="h-3.5 w-3.5" /></button>
            </div>
            <p className="mt-3 text-xs text-text-secondary leading-relaxed">{m.body}</p>
            {m.link && <a href="#" className="mt-3 inline-block text-xs text-cred-green hover:underline">{m.link}</a>}
          </div>
        ))}
      </div>

      <div className="mt-8 card-surface p-8 text-center max-w-sm mx-auto">
        <QrCode className="h-40 w-40 mx-auto text-text-tertiary" />
        <p className="mt-4 text-xs text-text-secondary">Scan to verify this wallet</p>
      </div>
    </div>
  );
}
