import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Grid3x3,
  Layers,
  Square,
  DoorOpen,
  MoveHorizontal,
  MoveVertical,
  Boxes,
  Component,
  Wrench,
  PanelsTopLeft,
  Warehouse,
  ParkingSquare,
  Factory,
  Home,
  Building,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";

import facadesHero from "@/assets/services-facades-hero.jpg";
import fenestrationHero from "@/assets/services-fenestration-hero.jpg";
import louvresHero from "@/assets/services-louvres-hero.jpg";
import louvresAsset from "@/assets/louvre.jpg";

// Subtype imagery
import imgStructural from "@/assets/svc-structural-glazing.jpg";
import imgSpider from "@/assets/svc-spider-glazing.jpg";
import imgUnitized from "@/assets/svc-unitized.jpg";
import imgSemiUnitized from "@/assets/svc-semi-unitized.jpg";
import imgStick from "@/assets/svc-stick-glazing.jpg";
import imgDoubleSkin from "@/assets/svc-double-skin.jpg";
import imgFixed from "@/assets/svc-fixed-window.jpg";
import imgCasement from "@/assets/svc-casement.jpg";
import imgSliders from "@/assets/svc-sliders.jpg";
import imgDoubleHung from "@/assets/svc-double-hung.jpg";
import imgCommercial from "@/assets/svc-commercial-facade.jpg";
import imgBalconies from "@/assets/svc-balconies.jpg";
import imgHighrise from "@/assets/svc-highrise.jpg";
import imgWarehouse from "@/assets/svc-warehouse.jpg";
import imgParking from "@/assets/svc-parking.jpg";
import imgRoofPlant from "@/assets/svc-roof-plant.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Trois Glaze Façade Solutions" },
      {
        name: "description",
        content:
          "Facades, Fenestration and Louvres & Specialty Solutions — engineered building envelopes, windows, doors and shading systems designed for performance and beauty.",
      },
    ],
  }),
  component: Services,
});

type Item = { icon: LucideIcon; title: string; desc: string; image: string };

type Discipline = {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  overview: string;
  image: string;
  icon: LucideIcon;
  items: Item[];
};

const disciplines: Discipline[] = [
  {
    id: "facades",
    eyebrow: "Our Services",
    title: "Facades",
    tagline: "Shaping Spaces. Building Tomorrow.",
    overview:
      "Innovative façade systems that blend performance, aesthetics and sustainability to elevate every structure.",
    image: facadesHero,
    icon: Building2,
    items: [
      { icon: Component, title: "Structural Glazing", desc: "Glass panels structurally bonded to the frame for a sleek, seamless and modern look.", image: imgStructural },
      { icon: Sparkles, title: "Spider Glazing", desc: "Point-fixed glass system using stainless steel spider fittings for minimal visual impact.", image: imgSpider },
      { icon: Boxes, title: "Unitized Facades System", desc: "Pre-fabricated, factory-assembled panels for faster installation and superior performance.", image: imgUnitized },
      { icon: PanelsTopLeft, title: "Semi Unitized Facades", desc: "On-site installation with pre-fabricated panels for flexibility and design adaptability.", image: imgSemiUnitized },
      { icon: Grid3x3, title: "Stick Glazing", desc: "Traditional on-site glazing system offering design versatility and cost effectiveness.", image: imgStick },
      { icon: Layers, title: "Double Skin Facades", desc: "Dual-layer façade system that enhances thermal performance, reduces energy consumption and improves comfort.", image: imgDoubleSkin },
    ],
  },
  {
    id: "fenestration",
    eyebrow: "Our Services",
    title: "Fenestration",
    tagline: "Design. Performance. Comfort.",
    overview:
      "Windows and door systems that bring together design, performance and comfort — thermally-broken aluminium and uPVC for uninterrupted views and quiet interiors.",
    image: fenestrationHero,
    icon: Grid3x3,
    items: [
      { icon: Square, title: "Fixed / Picture Window", desc: "Non-operable windows that offer clear views, enhanced daylight and energy efficiency.", image: imgFixed },
      { icon: DoorOpen, title: "Casement", desc: "Side-hinged windows that open outward for excellent ventilation and a tight seal.", image: imgCasement },
      { icon: MoveHorizontal, title: "Sliders", desc: "Smooth-sliding windows that save space and provide easy operation and wide views.", image: imgSliders },
      { icon: MoveVertical, title: "Double Hung", desc: "Vertical sliding windows with two operable sashes for versatile ventilation and easy cleaning.", image: imgDoubleHung },
    ],
  },
  {
    id: "louvres",
    eyebrow: "Our Services",
    title: "Louvres & Specialty Solutions",
    tagline: "Enhancing building performance with smart, sustainable solutions.",
    overview:
      "Louvre systems and specialty envelopes engineered to shade, ventilate and screen — adding rhythm and character to every façade.",
    image: louvresHero,
    icon: Layers,
    items: [
      { icon: Building, title: "Modern Commercial Glass Facade", desc: "Sleek, high-performance facades that enhance aesthetics and energy efficiency.", image: imgCommercial },
      { icon: Home, title: "Residential Balconies", desc: "Stylish and durable balcony systems that ensure safety, comfort and design flexibility.", image: imgBalconies },
      { icon: Building2, title: "High Rise External Envelope", desc: "Engineered envelope solutions for high-rise buildings that deliver strength and efficiency.", image: imgHighrise },
      { icon: Warehouse, title: "Industrial Warehouse", desc: "Robust and efficient fenestration solutions for industrial and warehouse facilities.", image: imgWarehouse },
      { icon: ParkingSquare, title: "Parking Garages (Podium)", desc: "Ventilated and secure facade systems for parking structures with optimal performance.", image: imgParking },
      { icon: Factory, title: "Roof Plants and Factories", desc: "Specialized fenestration solutions designed for roof structures and industrial environments.", image: imgRoofPlant },
    ],
  },
];

function SubtypeCard({ item, index }: { item: Item; index: number }) {
  return (
    <Reveal delay={index * 60} y={20}>
      <div className="group flex flex-col h-full rounded-sm border border-border bg-card hover:border-gold/60 hover:shadow-lg transition-all duration-500 overflow-hidden">
        {/* Image — TOP */}
        <div className="relative aspect-[4/3] overflow-hidden border-b border-border group-hover:border-gold/60 transition-colors">
          <img
            src={item.image}
            alt={item.title}
            width={1024}
            height={768}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content — BOTTOM */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="grid size-10 place-items-center rounded-full border border-gold/40 bg-gold/10 text-navy transition-all duration-300 group-hover:bg-gold group-hover:scale-110">
              <item.icon className="size-5" />
            </span>
            <h4 className="font-display text-xl md:text-2xl font-bold text-navy leading-snug">
              {item.title}
            </h4>
          </div>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
            {item.desc}
          </p>
          <div className="mt-4 h-px w-16 bg-gold transition-all duration-500 group-hover:w-28" />
        </div>
      </div>
    </Reveal>
  );
}

function DisciplineSection({ d }: { d: Discipline }) {
  return (
    <section id={d.id} className="relative py-20 md:py-28 scroll-mt-24">
      <div className="container-narrow">
        {/* Section header — content LEFT, image RIGHT */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-14">
          <Reveal className="lg:col-span-7 order-2 lg:order-1" y={20}>
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">
              {d.eyebrow}
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.05]">
              {d.title}
            </h2>
            <div className="mt-4 text-lg md:text-xl text-navy/80 font-medium max-w-xl">
              {d.tagline}
            </div>
            <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl">
              {d.overview}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 max-w-24 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-navy/60 font-semibold">
                {d.items.length} Solutions
              </span>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5 order-1 lg:order-2" y={30}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-sm blur-2xl opacity-70"
                style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--navy) 30%, transparent), color-mix(in oklab, var(--gold) 25%, transparent))" }}
              />
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl border border-white/10 zoom-img">
                <img
                  src={d.image}
                  alt={d.title}
                  width={1600}
                  height={2000}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(115deg, var(--navy) 0%, color-mix(in oklab, var(--navy) 88%, transparent) 35%, transparent 55%)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(115deg, transparent 53%, var(--gold) 53%, var(--gold) 53.4%, transparent 53.4%)",
                    opacity: 0.9,
                  }}
                />
                <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-start">
                  <div className="text-[11px] tracking-[0.3em] uppercase text-white/80 font-semibold">
                    {d.eyebrow}
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white leading-[1.1] max-w-[70%]">
                    <span className="gradient-text">{d.title.split(" ")[0]}</span>
                    {d.title.includes(" ") && (
                      <span className="block text-white">
                        {d.title.split(" ").slice(1).join(" ")}
                      </span>
                    )}
                  </h3>
                </div>
                <div className="absolute bottom-5 right-5 grid size-14 place-items-center rounded-full bg-gold text-navy shadow-lg">
                  <d.icon className="size-6" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Subtype grid — two columns */}
        <div className="grid md:grid-cols-2 gap-5">
          {d.items.map((item, i) => (
            <SubtypeCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10">
            <Button asChild className="bg-navy text-navy-foreground hover:bg-navy/90 rounded-sm press">
              <Link to="/contact">
                Enquire About {d.title.split(" ")[0]} <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Facades, Fenestration, Louvres"
        description="Three integrated disciplines — engineered façade systems, precision windows and doors, and smart louvre & specialty solutions."
        image={louvresAsset}
        imageAlt="Aluminium louvre façade system"
      />

      {/* Quick nav */}
      <section className="border-b border-border bg-surface/60 sticky top-16 z-30 backdrop-blur">
        <div className="container-narrow py-3 flex flex-wrap items-center gap-2 md:gap-3 text-sm">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mr-2">Jump to</span>
          {disciplines.map((d) => (
            <a
              key={d.id}
              href={`#${d.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-navy font-medium hover:bg-navy hover:text-navy-foreground hover:border-navy transition-colors"
            >
              <d.icon className="size-3.5" /> {d.title}
            </a>
          ))}
          <Link
            to="/our-process"
            className="ml-auto inline-flex items-center gap-1.5 text-navy hover:text-gold transition-colors font-medium story-link"
          >
            <Wrench className="size-4" /> Installation Process
          </Link>
        </div>
      </section>

      <div className="divide-y divide-border/60">
        {disciplines.map((d) => (
          <DisciplineSection key={d.id} d={d} />
        ))}
      </div>

      {/* CTA */}
      <section
        className="relative py-20 md:py-24 text-navy-foreground overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, color-mix(in oklab, var(--navy) 70%, var(--navy-light)) 60%, var(--navy-light) 100%)" }}
      >
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
        <div className="container-narrow relative text-center max-w-3xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
              <span className="size-1.5 rounded-full bg-gold" /> Let's build together
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">
              Ready to discuss your project?
            </h2>
            <p className="mt-4 text-navy-foreground/85 text-base md:text-lg">
              Share your drawings — our engineering team responds within 24 hours with feasibility, timelines and budget guidance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-sm h-12 px-8 font-semibold press">
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm h-12 px-8 font-semibold border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white">
                <Link to="/our-process">See Our Process</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
