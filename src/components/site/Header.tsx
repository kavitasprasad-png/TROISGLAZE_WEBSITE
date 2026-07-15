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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-sky text-navy border-b border-sky-200",
        scrolled ? "shadow-md" : "shadow-sm",
      )}
    >
      <div className="container-narrow flex h-24 items-center justify-between md:h-32">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logoAsset}
            alt="Trois Glaze"
            className="h-20 md:h-28 w-auto transition-all duration-300"
            width={112}
            height={112}
          />
          <div className="flex flex-col leading-none">
            <span className="font-display font-bold text-2xl md:text-4xl tracking-[0.15em] text-navy whitespace-nowrap">
              TROIS GLAZE
            </span>
            <span className="text-[9px] md:text-[11px] font-medium tracking-[0.25em] mt-1 pl-3 text-foreground">
              FACADE | FENESTRATION | LOUVRES
            </span>
          </div>
        </Link>


        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative px-3 py-2 font-medium transition-colors rounded-md text-sm text-navy/80 hover:text-navy"
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
            className="flex items-center gap-2 text-sm font-medium transition-colors text-navy/80 hover:text-navy"
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
          className="lg:hidden grid size-10 place-items-center rounded-md text-navy hover:bg-navy/10"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-sky-200 bg-sky backdrop-blur-xl">
          <nav className="container-narrow flex flex-col py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-navy/80 hover:text-navy"
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
