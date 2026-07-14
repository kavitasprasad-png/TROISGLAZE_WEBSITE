import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Clock,
  DollarSign,
  Gem,
  Globe2,
  HeartHandshake,
  Layers,
  Leaf,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Truck,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import edgeLifetimeCare from "@/assets/edge-lifetime-care.jpg";
import ontimeDelivery from "@/assets/ontime-delivery.jpg";
import precisionDetail from "@/assets/precision-detail.jpg";
import edgeTransparent from "@/assets/edge-transparent-pricing.jpg";
import edgeSmartDigital from "@/assets/edge-smart-digital.jpg";
import edgeOnestop from "@/assets/edge-onestop.jpg";
import edgeLuxury from "@/assets/edge-luxury.jpg";
import inhouseExpertise from "@/assets/inhouse-expertise.jpg";
import globalStandard from "@/assets/global-standard.jpg";
import sustainableFacade from "@/assets/sustainable-facade.jpg";
import lifetimeMaintenance from "@/assets/lifetime-maintenance.jpg";
import longtermValue from "@/assets/longterm-value.jpg";

export const Route = createFileRoute("/our-edge")({
  head: () => ({
    meta: [
      { title: "Our Edge — Why Partners Choose Trois Glaze" },
      {
        name: "description",
        content:
          "Precision, in-house expertise, global standards, on-time delivery, sustainability, transparent pricing, lifetime maintenance and long-term value — every reason to choose Trois Glaze on one page.",
      },
    ],
  }),
  component: OurEdge,
});

type EdgeItem = {
  icon: typeof Wrench;
  title: string;
  intro: string;
  points?: { label: string; text: string }[];
  usp?: string;
  image: string;
  quote: string;
  quoteIcon: typeof Clock;
};

const edgeItems: EdgeItem[] = [
  {
    icon: Wrench,
    title: "From Design to Lifetime Care",
    intro:
      "We don't just install windows and façades — we deliver complete lifetime support through design consultation, precision installation and bi-annual maintenance.",
    usp: "A single accountable partner from the first sketch to decades of after-care.",
    image: edgeLifetimeCare,
    quote: "Your building, our responsibility — today, tomorrow, always.",
    quoteIcon: HeartHandshake,
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    intro:
      "Timely delivery sits at the core of our commitment. A disciplined project management approach ensures your deadlines are not just met, but respected — with timely compensation for any delays.",
    points: [
      { label: "Detailed Planning", text: "Comprehensive scheduling, resource allocation and risk assessment." },
      { label: "Efficient Execution", text: "Streamlined processes and real-time progress tracking." },
      { label: "Proactive Communication", text: "Regular updates and transparent reporting at every stage." },
      { label: "Deadline Commitment", text: "We plan smart, act fast and deliver on time — every time." },
    ],
    usp: "Committed project timelines with guaranteed completion and timely compensation for any delays.",
    image: ontimeDelivery,
    quote: "Your time is valuable. We value it even more.",
    quoteIcon: Clock,
  },
  {
    icon: Award,
    title: "Precision Installation Promise",
    intro:
      "Every installation is executed by certified crews following a multi-point quality checklist — from anchor alignment to sealant continuity — so the finish matches the drawing, every time.",
    usp: "Laser-level accuracy, certified installers and a multi-point quality checklist for flawless execution.",
    image: precisionDetail,
    quote: "Measured twice. Installed once. Guaranteed forever.",
    quoteIcon: Award,
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    intro:
      "No hidden costs. Every project starts with a clear, itemised breakdown of components, engineering and installation — so you know exactly what you're investing in.",
    usp: "Clear breakdown of every component and installation charge before we begin.",
    image: edgeTransparent,
    quote: "Fair price. Full clarity. Zero surprises.",
    quoteIcon: DollarSign,
  },
  {
    icon: Smartphone,
    title: "Smart Digital Experience",
    intro:
      "Track your project in real-time from manufacturing to installation through our digital platform or WhatsApp — with live milestones, quality checkpoints and document access.",
    usp: "Real-time updates from manufacturing to installation via our digital platform or WhatsApp.",
    image: edgeSmartDigital,
    quote: "Your project, in your pocket.",
    quoteIcon: Smartphone,
  },
  {
    icon: Layers,
    title: "One-Stop Facade & Fenestration Partner",
    intro:
      "Everything under one roof — windows, doors, façades, glass, railings, partitions, pergolas and automation. One accountable partner, one integrated design language.",
    usp: "Windows, doors, façades, glass, railings, partitions, pergolas & automation — all in-house.",
    image: edgeOnestop,
    quote: "One partner. Every envelope solution.",
    quoteIcon: Layers,
  },
  {
    icon: Gem,
    title: "Luxury Without Compromise",
    intro:
      "Premium European-inspired designs with Indian pricing and dedicated local service — luxury that's accessible, serviceable and built to last.",
    usp: "Premium European-inspired designs with Indian pricing and dedicated local service support.",
    image: edgeLuxury,
    quote: "European finesse. Indian value.",
    quoteIcon: Gem,
  },
  {
    icon: Target,
    title: "Precision in Every Detail",
    intro:
      "Our engineering-led approach ensures unmatched accuracy and quality in every project — from the first CAD line to the final sealant bead.",
    image: precisionDetail,
    quote: "Precision is not a promise — it's our process.",
    quoteIcon: Target,
  },
  {
    icon: Users,
    title: "In-House Expertise",
    intro:
      "In-house design, engineering and BIM capabilities drive seamless project execution — one studio, one signature of quality across every deliverable.",
    image: inhouseExpertise,
    quote: "One studio. One signature of quality.",
    quoteIcon: Users,
  },
  {
    icon: Globe2,
    title: "Global Standard Solutions",
    intro:
      "High-performance systems from our global partners meet international quality benchmarks and are tuned for Indian climates and site conditions.",
    image: globalStandard,
    quote: "Global systems. Local mastery.",
    quoteIcon: Globe2,
  },
  {
    icon: Leaf,
    title: "Sustainable & Energy-Efficient",
    intro:
      "We design and deliver façade solutions that are aesthetically modern, environmentally responsible and energy-efficient — supporting greener buildings and lower operating costs.",
    points: [
      { label: "Energy Efficiency", text: "Advanced glazing and shading systems reduce heat gain and optimise natural light." },
      { label: "Sustainable Materials", text: "Recyclable, durable and eco-friendly materials specified by default." },
      { label: "Green Building Compliance", text: "Solutions that support LEED, IGBC and other green certifications." },
      { label: "Future-Ready", text: "Contributing to a greener planet while lowering operational costs." },
    ],
    image: sustainableFacade,
    quote: "Better for your building. Better for our tomorrow.",
    quoteIcon: Leaf,
  },
  {
    icon: Wrench,
    title: "Lifetime Maintenance & After-Sales Support",
    intro:
      "Our commitment doesn't end at installation. We provide comprehensive maintenance and dedicated after-sales support through the building's entire lifecycle.",
    points: [
      { label: "Preventive Maintenance", text: "Regular inspections and scheduled service before issues arise." },
      { label: "Quick Response", text: "Dedicated support team for prompt resolution of any concerns." },
      { label: "Genuine Quality", text: "High-quality materials and OEM components for lasting performance." },
      { label: "Extended Lifespan", text: "Proactive care that maximises durability and efficiency." },
    ],
    image: lifetimeMaintenance,
    quote: "Installed once. Cared for always.",
    quoteIcon: HeartHandshake,
  },
  {
    icon: ShieldCheck,
    title: "Built for Long-Term Value",
    intro:
      "We engineer façade solutions that stand the test of time — delivering exceptional performance, aesthetic appeal and strong return on investment for years to come.",
    points: [
      { label: "Durability", text: "Robust systems designed to withstand harsh weather and everyday wear." },
      { label: "Aesthetic Excellence", text: "Timeless designs that enhance the visual value of your building." },
      { label: "Cost Efficiency", text: "Energy-efficient solutions that reduce operational costs over time." },
      { label: "Future Ready", text: "Innovative systems that adapt to evolving needs and technologies." },
    ],
    image: longtermValue,
    quote: "Stronger today. Greater value tomorrow.",
    quoteIcon: Sparkles,
  },
];

const pillars = [
  { icon: Building2, label: "Innovate", text: "We embrace innovation to create smarter, stronger solutions." },
  { icon: Wrench, label: "Engineer", text: "We engineer with precision, turning ideas into structures that stand the test of time." },
  { icon: Lightbulb, label: "Inspire", text: "We inspire through design, quality and our commitment to excellence." },
  { icon: HeartHandshake, label: "Partner", text: "We believe in partnerships built on trust, collaboration and shared success." },
  { icon: Truck, label: "Deliver", text: "We deliver with integrity, ensuring value in every project." },
];

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px", ...options },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}


function useParallax<T extends HTMLElement>(intensity = 40) {
  const ref = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const progress = (rect.top + rect.height / 2) / vh; // 0 top, 1 bottom
      const clamped = Math.max(-0.5, Math.min(1.5, progress));
      setOffset((0.5 - clamped) * intensity);
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [intensity]);
  return { ref, offset };
}

function EdgeRow({ item, index }: { item: EdgeItem; index: number }) {
  const Icon = item.icon;
  const QIcon = item.quoteIcon;
  const { ref, inView } = useInView<HTMLElement>();
  const parallax = useParallax<HTMLDivElement>(50);

  return (
    <article
      ref={ref}
      className="group relative bg-card border border-border shadow-sm hover:shadow-lift transition-all duration-500 rounded-sm overflow-hidden scroll-mt-32 hover:-translate-y-1"
      style={{ opacity: inView ? 1 : 0, transition: "opacity 700ms ease, transform 500ms ease" }}
    >
      {/* Animated gold accent bar */}
      <div
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-gold via-gold/60 to-transparent origin-left"
        style={{
          width: "100%",
          transform: inView ? "scaleX(1)" : "scaleX(0)",
          transition: `transform 1200ms cubic-bezier(0.16,1,0.3,1) ${index * 40}ms`,
        }}
      />

      <div className="grid gap-0 items-stretch md:grid-cols-12">
        {/* LEFT — CONTENT (7 cols) — slides in from left */}
        <div
          className="md:col-span-7 p-6 md:p-10 relative flex flex-col"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-40px)",
            transition: "opacity 800ms cubic-bezier(0.16,1,0.3,1) 150ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 150ms",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="size-10 md:size-12 shrink-0 rounded-full border border-gold grid place-items-center text-gold bg-navy/[0.03] transition-transform duration-500 group-hover:rotate-[10deg] group-hover:bg-gold group-hover:text-gold-foreground">
              <Icon className="size-5 md:size-6" />
            </div>
            <h2 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-navy leading-tight uppercase">
              {item.title}
            </h2>
          </div>
          <div
            className="h-0.5 bg-gold origin-left"
            style={{
              width: "4rem",
              transform: inView ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 700ms cubic-bezier(0.16,1,0.3,1) 500ms",
            }}
          />

          <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed">
            {item.intro}
          </p>

          {item.points && (
            <ul className="mt-6 space-y-3">
              {item.points.map((pt, i) => (
                <li
                  key={pt.label}
                  className="flex items-start gap-3 py-2 border-b border-border/60 hover:border-gold transition-colors"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateY(0)" : "translateY(10px)",
                    transition: `opacity 500ms ease ${400 + i * 100}ms, transform 500ms ease ${400 + i * 100}ms`,
                  }}
                >
                  <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5" />
                  <div className="text-sm md:text-[0.95rem]">
                    <span className="font-bold text-navy">{pt.label}:</span>{" "}
                    <span className="text-muted-foreground">{pt.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {item.usp && (
            <div
              className="mt-6 bg-navy/[0.03] border-l-4 border-gold px-5 py-4 rounded-sm hover:bg-navy/[0.06] transition-colors"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 700ms ease 500ms, transform 700ms ease 500ms",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Rocket className="size-4 text-gold" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-navy">
                  USP
                </span>
              </div>
              <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                {item.usp}
              </p>
            </div>
          )}
        </div>

        {/* RIGHT — IMAGE (5 cols) — slides in from right with parallax */}
        <div
          className="md:col-span-5 relative p-4 md:p-6 md:pl-0"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 800ms cubic-bezier(0.16,1,0.3,1) 200ms, transform 800ms cubic-bezier(0.16,1,0.3,1) 200ms",
          }}
        >
          <div
            ref={parallax.ref}
            className="relative overflow-hidden bg-black/70 border-2 border-gold/40 group-hover:border-gold transition-colors h-64 md:h-full min-h-[340px]"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)" }}
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-[115%] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              style={{ transform: `translateY(${parallax.offset}px)` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            {/* Shine sweep on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:translate-x-[300%] transition-transform duration-[1400ms] ease-out" />
            </div>

            <div className="absolute top-4 left-4 md:top-6 md:left-6">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-navy/90 backdrop-blur border border-gold rounded-sm">
                <Sparkles className="size-3.5 text-gold animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-navy-foreground">
                  {item.title}
                </span>
              </div>
            </div>

            {/* Quote pill */}
            <div
              className="absolute left-4 right-6 md:left-6 md:right-10 bottom-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 700ms ease 600ms, transform 700ms ease 600ms",
              }}
            >
              <div className="flex items-center gap-3 px-4 py-3 md:px-5 md:py-4 bg-navy border border-gold rounded-sm shadow-lift group-hover:border-gold group-hover:shadow-2xl transition-all">
                <div className="size-9 md:size-10 rounded-full border-2 border-gold grid place-items-center text-gold shrink-0 group-hover:bg-gold group-hover:text-navy transition-colors">
                  <QIcon className="size-4" />
                </div>
                <p className="font-display italic text-xs md:text-sm text-navy-foreground leading-snug">
                  {item.quote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function OurEdge() {
  return (
    <>
      <PageHero
        eyebrow="Our Edge"
        title="Why Us?"
        description="Precision, in-house expertise, global standards, on-time delivery, sustainability and lifetime care — every reason partners trust us, on one page."
        image={precisionDetail}
        imageAlt="Engineered façade detail"
      />

      {/* EDGE ROWS */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--navy) 1px, transparent 1px), linear-gradient(to bottom, var(--navy) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-narrow relative space-y-10 md:space-y-14">
          {edgeItems.map((item, i) => (
            <EdgeRow key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-16 md:py-20 bg-background border-t border-border">
        <div className="container-narrow">
          <Reveal className="text-center mb-12">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">
              What Drives Us
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">
              Innovate · Engineer · Inspire · Partner · Deliver
            </h2>
            <div className="mx-auto mt-4 w-16 h-0.5 bg-gold" />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            {pillars.map((p, i) => {
              const PI = p.icon;
              return (
                <Reveal key={p.label} delay={i * 80}>
                  <div className="group text-center p-5 md:p-6 border border-border hover:border-gold hover:shadow-lift transition-all bg-card h-full">
                    <div className="mx-auto mb-4 size-14 rounded-full border-2 border-gold grid place-items-center text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                      <PI className="size-6" />
                    </div>
                    <div className="font-display font-bold text-sm tracking-[0.2em] uppercase text-navy mb-2">
                      {p.label}
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-surface border-t border-border">
        <div className="container-narrow text-center max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">
            Innovating Today. Building Tomorrow.
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
            Partner with the <span className="italic text-gold">edge</span> that delivers.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Everything above. One committed team. Let's engineer your next landmark.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold h-12 px-8 rounded-sm">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
