import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
};

export function PageHero({ eyebrow, title, description, children, image, imageAlt }: Props) {
  return (
    <section className="relative overflow-hidden text-navy-foreground" style={{ background: "linear-gradient(135deg, var(--navy) 0%, color-mix(in oklab, var(--navy) 75%, var(--navy-light)) 55%, var(--navy-light) 100%)" }}>
      <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-glow)" }} />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {image && (
        <div className="pointer-events-none absolute inset-0 md:inset-y-0 md:right-0 md:left-auto w-full md:w-[55%] lg:w-[52%]">
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="size-full object-cover object-center"
            loading="lazy"
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(to bottom, var(--navy) 0%, color-mix(in oklab, var(--navy) 75%, transparent) 45%, color-mix(in oklab, var(--navy) 55%, transparent) 70%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, var(--navy) 0%, color-mix(in oklab, var(--navy) 45%, transparent) 18%, color-mix(in oklab, var(--navy-light) 15%, transparent) 50%, transparent 100%)",
            }}
          />
        </div>
      )}
      <div className="container-narrow relative pt-32 md:pt-40 pb-16 md:pb-20">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-sm font-medium tracking-wider uppercase text-gold mb-5">
            <span className="size-1.5 rounded-full bg-gold" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold max-w-5xl leading-[1.05]">{title}</h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-navy-foreground/75 max-w-2xl leading-relaxed">{description}</p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
