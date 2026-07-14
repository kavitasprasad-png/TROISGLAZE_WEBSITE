import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Login — Elevate Facade" },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin", replace: true });
    });
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Account created. If email confirmation is enabled, check your inbox. Otherwise, you're signed in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: "/admin", replace: true });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-dvh grid place-items-center py-24 px-6 bg-surface">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-lift">
        <h1 className="font-display text-2xl font-bold text-foreground">
          {mode === "signin" ? "Admin Login" : "Create Admin Account"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Access the enquiries dashboard.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <Label>Email</Label>
            <Input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5" autoComplete="email" />
          </div>
          <div>
            <Label>Password</Label>
            <Input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1.5" minLength={6} autoComplete={mode === "signin" ? "current-password" : "new-password"} />
          </div>
          <Button type="submit" size="lg" disabled={loading} className="w-full bg-navy text-navy-foreground hover:bg-navy/90">
            {loading ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>
        <button
          type="button"
          onClick={() => setMode((m) => (m === "signin" ? "signup" : "signin"))}
          className="mt-5 text-sm text-brand hover:underline w-full text-center"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
        <p className="mt-6 text-xs text-muted-foreground text-center">
          The first user to sign up should be granted the admin role from the Cloud dashboard.
        </p>
      </div>
    </section>
  );
}
