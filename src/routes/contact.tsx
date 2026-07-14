import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import heroFacade from "@/assets/hero-facade.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Trois Glaze — Request a Façade Quote" },
      { name: "description", content: "Get a façade, fenestration or louvre project quote within 24 hours. Call +91 98206 18036 or email info@troisglaze.com." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [successId, setSuccessId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim() || null;
    const email = String(fd.get("email") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const city = String(fd.get("city") ?? "").trim();
    const service = String(fd.get("service") ?? "").trim();
    const location = String(fd.get("location") ?? "").trim();
    const budget = String(fd.get("budget") ?? "").trim();
    const messageText = String(fd.get("message") ?? "").trim();

    if (!name || !email || !phone || !messageText) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Merge additional fields into the message for storage
    const composed = [
      messageText,
      service && `Service Required: ${service}`,
      budget && `Budget: ${budget}`,
    ].filter(Boolean).join("\n\n");

    const composedLocation = [city, location].filter(Boolean).join(" · ") || null;

    setSubmitting(true);
    const { error } = await supabase
      .from("enquiries")
      .insert({
        name,
        company,
        email,
        phone,
        location: composedLocation,
        message: composed,
        source: "contact_form",
      });
    setSubmitting(false);

    if (error) {
      console.error("Enquiry insert failed:", error);
      toast.error("Could not send enquiry. Please try again or call us directly.");
      return;
    }
    if (error) {
  console.error("Enquiry insert failed:", error);
  toast.error("Could not send enquiry. Please try again or call us directly.");
  return;
}

// Send email notification
try {
  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: "7b2c08d4-4b2b-4ec5-b026-03bf4483a372",

      subject: "New Website Enquiry - Trois Glaze",

      name,
      company,
      email,
      phone,
      city,
      service,
      budget,
      location,

      message: messageText,
    }),
  });
} catch (mailError) {
  console.error("Email notification failed:", mailError);
}

const enquiryId = Math.random().toString(36).slice(2, 10).toUpperCase();
setSuccessId(enquiryId);

toast.success(
  "Thank you ! Enquiry Received.We will contact you shortly"
);

form.reset();

    //const enquiryId = Math.random().toString(36).slice(2, 10).toUpperCase();
    //setSuccessId(enquiryId);
   // toast.success(`Thank you! Enquiry #${enquiryId} received. We'll contact you shortly.`);
    //form.reset();

  };

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let's engineer your next landmark."
        description="Share your drawings and requirements — our team responds within 24 hours."
        image={heroFacade}
        imageAlt="Trois Glaze façade project"
      />

      <section className="py-24">
        <div className="container-narrow grid lg:grid-cols-[1.3fr_1fr] gap-10">
          {/* Form */}
          <div className="relative">
            <div className="p-8 md:p-10 bg-card border border-border shadow-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold">Enquiry Form</div>
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-6">Request a Free Quote</h2>

              {successId && (
                <div className="mb-6 p-4 bg-gold/10 border-l-4 border-gold flex gap-3 items-start">
                  <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Thank you ! Enquiry Received.We will contact you shortly
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Full name *</Label><Input name="name" required maxLength={200} className="mt-1.5 rounded-sm" /></div>
                  <div><Label>Company</Label><Input name="company" maxLength={200} className="mt-1.5 rounded-sm" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Email *</Label><Input name="email" required type="email" maxLength={320} className="mt-1.5 rounded-sm" /></div>
                  <div><Label>Phone *</Label><Input name="phone" required type="tel" maxLength={40} className="mt-1.5 rounded-sm" /></div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>City</Label><Input name="city" maxLength={100} className="mt-1.5 rounded-sm" placeholder="Mumbai" /></div>
                  <div>
                    <Label>Service required</Label>
                    <select name="service" className="mt-1.5 flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Select...</option>
                      <option>Facades</option>
                      <option>Fenestration</option>
                      <option>Louvres</option>
                      <option>Multiple / Full Envelope</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><Label>Project location</Label><Input name="location" maxLength={200} className="mt-1.5 rounded-sm" placeholder="Site address / area" /></div>
                  <div><Label>Approx. budget</Label><Input name="budget" maxLength={100} className="mt-1.5 rounded-sm" placeholder="Optional" /></div>
                </div>
                <div>
                  <Label>Project details *</Label>
                  <Textarea name="message" required rows={5} maxLength={5000} className="mt-1.5 rounded-sm" placeholder="Type of façade, area (sqm), timeline, drawings available..." />
                </div>
                <Button type="submit" size="lg" disabled={submitting} className="w-full bg-gold hover:bg-gold/90 text-gold-foreground rounded-sm font-semibold h-12">
                  {submitting ? "Sending…" : "Submit Enquiry"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Your enquiry is stored securely and shared only with our team. We respond within 24 hours.
                </p>
              </form>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            {[
              { icon: MapPin, t: "Corporate Office", d: "104, A Wing, Arnica, Jangid Enclave,\nMira Road (E)" },
              { icon: Phone, t: "Phone", d: "+91 98206 18036", href: "tel:+919820618036" },
              { icon: Mail, t: "Email", d: "info@troisglaze.com", href: "mailto:info@troisglaze.com" },
            ].map((c) => {
              const Wrap: React.ElementType = c.href ? "a" : "div";
              return (
                <Wrap key={c.t} {...(c.href ? { href: c.href } : {})} className="block p-5 bg-card border border-border hover:border-gold transition-colors flex gap-4">
                  <div className="size-11 shrink-0 border border-gold/50 rotate-45 grid place-items-center text-gold">
                    <c.icon className="size-4 -rotate-45" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-navy uppercase tracking-wider">{c.t}</div>
                    <div className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{c.d}</div>
                  </div>
                </Wrap>
              );
            })}

            <div className="p-6 bg-navy text-navy-foreground">
              <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-2">Emergency Support</div>
              <div className="text-sm">For urgent site queries on existing projects, call our support line directly.</div>
              <a href="tel:+919820618036" className="mt-3 inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-semibold">
                <Phone className="size-4" /> +91 98206 18036
              </a>
            </div>
          </div>
        </div>

        <div className="container-narrow mt-10">
          <div className="rounded-sm overflow-hidden border border-border h-[400px] bg-surface">
            <iframe
              title="Office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.82%2C18.92%2C72.90%2C18.98&layer=mapnik"
              className="size-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
