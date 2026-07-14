import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About Us" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { to: "/services", label: "Facades" },
      { to: "/services", label: "Fenestration" },
      { to: "/services", label: "Louvres" },
      { to: "/contact", label: "Get a Quote" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative text-navy-foreground overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy) 0%, color-mix(in oklab, var(--navy) 60%, var(--navy-light)) 100%)" }}>
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ background: "var(--gradient-glow)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-narrow relative py-10 md:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4 leading-none">
              <div className="font-display font-bold text-base tracking-[0.15em]">TROIS GLAZE</div>
              <div className="text-[8px] tracking-[0.25em] text-gold mt-1">FACADES · FENESTRATION · LOUVRES</div>
            </div>
            <p className="text-sm text-navy-foreground/70 leading-relaxed max-w-sm italic">
              Engineering Skylines. Creating Landmarks.
            </p>
            <p className="text-sm text-navy-foreground/60 leading-relaxed max-w-sm mt-2">
              Technology-driven façade engineering delivering end-to-end solutions in facades, fenestration and louvres.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/zeecorporate/about/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid size-8 place-items-center rounded-sm border border-white/15 hover:border-gold hover:text-gold transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider mb-3 text-gold">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((l, i) => (
                  <li key={i}>
                    <Link to={l.to} className="text-sm text-navy-foreground/75 hover:text-gold transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display font-semibold text-xs uppercase tracking-wider mb-3 text-gold">Get in Touch</h3>
            <div className="space-y-2.5 text-sm text-navy-foreground/75">
              <div className="flex items-start gap-2"><MapPin className="size-4 mt-0.5 shrink-0 text-gold" /><span>104, A Wing, Arnica, Jangid Enclave, Mira Road (E)</span></div>
              <a href="tel:+919820618036" className="flex items-center gap-2 hover:text-gold transition-colors"><Phone className="size-4 shrink-0 text-gold" /><span>+91 98206 18036</span></a>
              <a href="mailto:info@troisglaze.com" className="flex items-center gap-2 hover:text-gold transition-colors"><Mail className="size-4 shrink-0 text-gold" /><span>info@troisglaze.com</span></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-navy-foreground/60">
          <p>© Trois Glaze™. All rights reserved. · Innovating Today. Building Tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
