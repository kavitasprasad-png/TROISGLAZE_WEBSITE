import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Mail, Phone, Search, LogOut, RefreshCw, Trash2 } from "lucide-react";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({
    meta: [
      { title: "Enquiries Dashboard — Elevate Facade" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

type Enquiry = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  phone: string;
  location: string | null;
  message: string;
  source: string | null;
  status: string;
  admin_notes: string | null;
  created_at: string;
};

const NOTIFY_EMAIL = "info@troisglaze.com";

function AdminPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | "new" | "in_progress" | "closed">("all");
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    setRows((data ?? []) as Enquiry[]);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      const { data: userData } = await supabase.auth.getUser();
      if (!userData.user) return;
      const { data: roleRows } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userData.user.id);
      const admin = (roleRows ?? []).some((r) => r.role === "admin");
      setIsAdmin(admin);
      if (admin) load();
    })();
  }, []);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      if (filter !== "all" && r.status !== filter) return false;
      if (!q.trim()) return true;
      const s = q.toLowerCase();
      return (
        r.name.toLowerCase().includes(s) ||
        r.email.toLowerCase().includes(s) ||
        r.phone.toLowerCase().includes(s) ||
        (r.company ?? "").toLowerCase().includes(s) ||
        (r.location ?? "").toLowerCase().includes(s) ||
        r.message.toLowerCase().includes(s)
      );
    });
  }, [rows, q, filter]);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("enquiries").update({ status }).eq("id", id);
    if (error) return toast.error(error.message);
    setRows((r) => r.map((row) => (row.id === id ? { ...row, status } : row)));
    toast.success(`Marked as ${status.replace("_", " ")}`);
  };

  const deleteEnquiry = async (id: string) => {
    if (!confirm("Delete this enquiry?")) return;
    const { error } = await supabase.from("enquiries").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setRows((r) => r.filter((row) => row.id !== id));
    toast.success("Deleted");
  };

  const emailUrl = (r: Enquiry) => {
    const subject = `Enquiry from ${r.name}${r.company ? ` (${r.company})` : ""}`;
    const body = `Name: ${r.name}\nCompany: ${r.company ?? "-"}\nEmail: ${r.email}\nPhone: ${r.phone}\nLocation: ${r.location ?? "-"}\n\nMessage:\n${r.message}\n\n---\nReceived: ${new Date(r.created_at).toLocaleString()}`;
    return `mailto:${NOTIFY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  if (isAdmin === null) {
    return <div className="min-h-dvh grid place-items-center text-muted-foreground">Loading…</div>;
  }
  if (isAdmin === false) {
    return (
      <div className="min-h-dvh grid place-items-center px-6 text-center">
        <div className="max-w-md">
          <h1 className="font-display text-2xl font-bold">Not authorised</h1>
          <p className="mt-2 text-muted-foreground text-sm">Your account is signed in but does not have admin access. Ask an existing admin to grant you the <code className="px-1 rounded bg-muted">admin</code> role.</p>
          <Button onClick={signOut} variant="outline" className="mt-6">Sign out</Button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-dvh py-28 md:py-32 bg-surface">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">Enquiries</h1>
            <p className="text-muted-foreground mt-1 text-sm">
              {rows.length} total · {rows.filter((r) => r.status === "new").length} new
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={load}><RefreshCw className="size-4 mr-1.5" />Refresh</Button>
            <Button variant="outline" size="sm" onClick={signOut}><LogOut className="size-4 mr-1.5" />Sign out</Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input placeholder="Search name, email, company, message…" value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" />
          </div>
          <div className="flex gap-1.5 bg-card border border-border rounded-md p-1">
            {(["all", "new", "in_progress", "closed"] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold rounded capitalize transition-colors ${filter === f ? "bg-navy text-navy-foreground" : "text-foreground hover:bg-muted"}`}
              >
                {f.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="text-center py-16 text-muted-foreground">Loading enquiries…</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground bg-card border border-border rounded-xl">No enquiries found.</div>
        ) : (
          <div className="space-y-4">
            {filtered.map((r) => (
              <Card key={r.id} className="p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display font-semibold text-lg text-foreground">{r.name}</h3>
                      {r.company && <span className="text-sm text-muted-foreground">· {r.company}</span>}
                      <Badge variant={r.status === "new" ? "default" : r.status === "closed" ? "secondary" : "outline"} className="capitalize">
                        {r.status.replace("_", " ")}
                      </Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <a href={`mailto:${r.email}`} className="hover:text-brand inline-flex items-center gap-1"><Mail className="size-3" />{r.email}</a>
                      <a href={`tel:${r.phone}`} className="hover:text-brand inline-flex items-center gap-1"><Phone className="size-3" />{r.phone}</a>
                      {r.location && <span>📍 {r.location}</span>}
                      <span>{new Date(r.created_at).toLocaleString()}</span>
                    </div>
                    <p className="mt-3 text-sm text-foreground whitespace-pre-line leading-relaxed">{r.message}</p>
                  </div>
                  <div className="flex md:flex-col gap-2 flex-wrap md:w-44 shrink-0">
                    <Button asChild size="sm" variant="outline" className="justify-start">
                      <a href={emailUrl(r)}><Mail className="size-4 mr-1.5" />Email</a>
                    </Button>
                    {r.status !== "in_progress" && r.status !== "closed" && (
                      <Button size="sm" variant="outline" onClick={() => updateStatus(r.id, "in_progress")}>Mark In Progress</Button>
                    )}
                    {r.status !== "closed" && (
                      <Button size="sm" variant="outline" onClick={() => updateStatus(r.id, "closed")}>Mark Closed</Button>
                    )}
                    <Button size="sm" variant="ghost" onClick={() => deleteEnquiry(r.id)} className="text-destructive hover:text-destructive hover:bg-destructive/10 justify-start">
                      <Trash2 className="size-4 mr-1.5" />Delete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
