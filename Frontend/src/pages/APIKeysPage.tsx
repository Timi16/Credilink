import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, Plus } from "lucide-react";

const existingKeys = [
  { name: "Production", key: "lk_live_abc...xyz", created: "Jan 1, 2026", lastUsed: "2 hours ago", requests: 127, limit: 1000 },
  { name: "Staging", key: "lk_test_def...uvw", created: "Jan 5, 2026", lastUsed: "5 days ago", requests: 23, limit: 100 },
];

export default function APIKeysPage() {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-text-primary">API Keys</h2>
      <p className="mt-2 text-sm text-text-secondary">Manage your access credentials for the CredLink verification API.</p>

      {/* Existing keys */}
      <div className="mt-8 space-y-4">
        {existingKeys.map((k) => (
          <div key={k.name} className="card-surface p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-text-primary">{k.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-mono text-xs text-text-secondary">{k.key}</span>
                  <button className="text-text-tertiary hover:text-text-primary"><Copy className="h-3 w-3" /></button>
                </div>
              </div>
              <Badge variant="verified">Active</Badge>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 text-xs">
              <div><span className="text-text-tertiary">Created</span><div className="text-text-primary">{k.created}</div></div>
              <div><span className="text-text-tertiary">Last used</span><div className="text-text-primary">{k.lastUsed}</div></div>
              <div><span className="text-text-tertiary">Requests</span><div className="text-text-primary">{k.requests} / {k.limit}</div></div>
              <div>
                <span className="text-text-tertiary">Usage</span>
                <div className="mt-1 h-1.5 w-full rounded-full bg-bg-base overflow-hidden">
                  <div className="h-full rounded-full bg-cred-blue" style={{ width: `${(k.requests / k.limit) * 100}%` }} />
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <Button variant="outline" size="sm">Rotate</Button>
              <Button variant="destructive-outline" size="sm">Delete</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Create new */}
      <div className="mt-8 card-surface p-6">
        <h3 className="text-base font-semibold text-text-primary mb-4">Create a new API key</h3>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setShowCreate(true); }}>
          <div>
            <label className="text-xs text-text-secondary">Key name</label>
            <input placeholder="e.g. Production, Staging, Test" className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary" />
          </div>
          <div>
            <label className="text-xs text-text-secondary block mb-2">Permissions</label>
            {["verify:read — Look up wallet verification status", "webhooks:write — Receive verification event webhooks", "audit:read — Access verification logs"].map((p, i) => (
              <label key={p} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input type="checkbox" defaultChecked={i === 0} className="accent-cred-green" />
                <span className="text-xs text-text-secondary">{p}</span>
              </label>
            ))}
          </div>
          <div>
            <label className="text-xs text-text-secondary">Rate limit</label>
            <select className="mt-1 w-full input-credlink px-3 py-2.5 text-sm text-text-primary">
              <option>100 req/day (Free)</option>
              <option>1,000 req/day (Standard)</option>
              <option>10,000 req/day (Growth)</option>
            </select>
          </div>
          <Button type="submit"><Plus className="h-4 w-4" /> Create API key</Button>
        </form>
      </div>
    </div>
  );
}
