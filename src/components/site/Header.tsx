import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/our-process", label: "Our Process" },
  { to: "/services", label: "Services" },
  
  { to: "/our-edge", label: "Our Edge" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm text-foreground"
          : "bg-transparent text-white",
      )}
    >
      <div className="container-narrow flex h-14 items-center justify-between md:h-16">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logoAsset}
            alt="Trois Glaze"
            className={cn(
              "h-10 md:h-12 w-auto transition-all duration-300 drop-shadow-sm",
              scrolled ? "brightness-[0.25]" : "brightness-110",
            )}
            width={48}
            height={48}
          />
          <div className="flex flex-col leading-none">
            <span className={cn("font-display font-bold text-base md:text-xl tracking-[0.15em]", scrolled ? "text-navy" : "text-white")}>
              TROIS GLAZE
            </span>
            <span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] mt-0.5 text-gold">
              FACADES · FENESTRATION · LOUVRES
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative px-3 py-2 font-medium transition-colors rounded-md text-sm",
                scrolled ? "text-foreground/80 hover:text-navy" : "text-white/90 hover:text-white",
              )}
              activeProps={{ className: "!text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+919820618036"
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled ? "text-foreground/80 hover:text-navy" : "text-white/90 hover:text-white",
            )}
          >
            <Phone className="size-4" />
            <span>+91 98206 18036</span>
          </a>
          <Button asChild className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold">
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className={cn(
            "lg:hidden grid size-10 place-items-center rounded-md",
            scrolled ? "hover:bg-muted text-foreground" : "hover:bg-white/10 text-white",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className={cn(
          "lg:hidden border-t backdrop-blur-xl",
          scrolled ? "border-border bg-background/95" : "border-white/10 bg-navy/95",
        )}>
          <nav className="container-narrow flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "py-3 text-base font-medium",
                  scrolled ? "text-foreground/80 hover:text-navy" : "text-white/80 hover:text-white",
                )}
                activeProps={{ className: "!text-gold" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-3 bg-gold text-gold-foreground text-base font-semibold">
              <Link to="/contact" onClick={() => setOpen(false)}>Get Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
