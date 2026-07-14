import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Cpu,
  Gem,
  Globe2,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import img54 from "@/assets/why-5-4.jpg";
import globalStandard from "@/assets/global-standard.jpg";
import img74 from "@/assets/why-7-4.jpg";
import img84 from "@/assets/why-8-4.jpg";
import img94 from "@/assets/why-9-4.jpg";
import project1 from "@/assets/project-1.jpg";
import heroFacade from "@/assets/hero-facade.jpg";
import factory from "@/assets/factory.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Why Choose Trois Glaze — 7 Reasons Partners Trust Us" },
      {
        name: "description",
        content:
          "Precision engineering, in-house expertise, global standards, on-time delivery, sustainability, lifetime maintenance and long-term value — the seven reasons partners choose Trois Glaze.",
      },
    ],
  }),
  component: Quality,
});

type Reason = {
  icon: typeof Target;
  title: string;
  intro: string;
  points: { label: string; text: string }[];
  image: string;
  quote: string;
  quoteIcon: typeof Clock;
};

const reasons: Reason[] = [
  {
    icon: Target,
    title: "Precision in Every Detail",
    intro:
      "Engineering-led approach ensures unmatched accuracy and quality in every project.",
    points: [
      { label: "In-House Modelling", text: "BIM and structural simulation for every façade system." },
      { label: "Millimetre Tolerances", text: "Laser-calibrated fabrication and precise site alignment." },
      { label: "Pre-Assembly Gates", text: "Mock-ups and quality checks before every installation." },
      { label: "Zero-Defect Delivery", text: "Multi-point inspection at every stage of handover." },
    ],
    image: project1,
    quote: "Precision is not a promise — it's our process.",
    quoteIcon: Target,
  },
  {
    icon: Users,
    title: "In-House Expertise",
    intro:
      "In-house design, engineering and BIM capabilities drive seamless project execution.",
    points: [
      { label: "Design Studio", text: "Concept, façade and detailing developed under one roof." },
      { label: "Engineering Team", text: "Structural, thermal and acoustic specialists in-house." },
      { label: "BIM & Coordination", text: "Clash-free models integrated with your consultants." },
      { label: "Single Accountability", text: "One partner, one line of ownership, end to end." },
    ],
    image: img54,
    quote: "One studio. One signature of quality.",
    quoteIcon: Users,
  },
  {
    icon: Globe2,
    title: "Global Standard Solutions",
    intro:
      "High-performance systems from global partners that meet international quality benchmarks.",
    points: [
      { label: "Tier-1 Partners", text: "Certified systems from leading European brands." },
      { label: "International Codes", text: "EN, ASTM and IS compliance across every project." },
      { label: "Performance Tested", text: "Wind, water, thermal and seismic validated systems." },
      { label: "Premium Hardware", text: "Long-life ironmongery and gaskets sourced globally." },
    ],
    image: globalStandard,
    quote: "Global systems. Local mastery.",
    quoteIcon: Globe2,
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    intro:
      "Timely delivery is at the core of our commitment. We follow a disciplined project management approach that ensures your deadlines are not just met, but respected.",
    points: [
      { label: "Detailed Planning", text: "Comprehensive scheduling, resource allocation and risk assessment." },
      { label: "Efficient Execution", text: "Streamlined processes and real-time progress tracking." },
      { label: "Proactive Communication", text: "Regular updates and transparent reporting at every stage." },
      { label: "Deadline Commitment", text: "We plan smart, act fast and deliver on time — every time." },
    ],
    image: img74,
    quote: "Your time is valuable. We value it even more.",
    quoteIcon: Clock,
  },
  {
    icon: Leaf,
    title: "Sustainable & Energy-Efficient",
    intro:
      "We design and deliver façade solutions that are not only aesthetically modern but also environmentally responsible and energy-efficient.",
    points: [
      { label: "Energy Efficiency", text: "Advanced glazing and shading systems reduce heat gain and optimize natural light." },
      { label: "Sustainable Materials", text: "Use of recyclable, durable and eco-friendly materials." },
      { label: "Green Building Compliance", text: "Solutions that support LEED, IGBC and other green certifications." },
      { label: "Future-Ready", text: "Contributing to a greener planet while lowering operational costs." },
    ],
    image: img84,
    quote: "Better for your building. Better for our tomorrow.",
    quoteIcon: Leaf,
  },
  {
    icon: Wrench,
    title: "Lifetime Maintenance & After-Sales Support",
    intro:
      "Our commitment doesn't end at installation. We provide comprehensive maintenance and dedicated after-sales support throughout the building's lifecycle for long-term reliability and peace of mind.",
    points: [
      { label: "Preventive Maintenance", text: "Regular inspections and scheduled maintenance to prevent issues before they arise." },
      { label: "Quick Response", text: "Dedicated support team for prompt resolution of any concerns." },
      { label: "Genuine Quality", text: "Use of high-quality materials and components for lasting performance." },
      { label: "Extended Lifespan", text: "Proactive care that maximizes the durability and efficiency of your façade." },
    ],
    image: img94,
    quote: "Your building, our responsibility — today, tomorrow, always.",
    quoteIcon: HeartHandshake,
  },
  {
    icon: ShieldCheck,
    title: "Built for Long-Term Value",
    intro:
      "We engineer façade solutions that stand the test of time — delivering exceptional performance, aesthetic appeal, and strong return on investment for years to come.",
    points: [
      { label: "Durability", text: "Robust systems designed to withstand harsh weather and everyday wear." },
      { label: "Aesthetic Excellence", text: "Timeless designs that enhance the visual value of your building." },
      { label: "Cost Efficiency", text: "Energy-efficient solutions that reduce operational costs over time." },
      { label: "Future Ready", text: "Innovative systems that adapt to evolving needs and technologies." },
    ],
    image: factory,
    quote: "Stronger today. Greater value tomorrow.",
    quoteIcon: Sparkles,
  },
];

const advantages = [
  { icon: HeartHandshake, t: "From Design to Lifetime Care", d: "Complete lifetime support — design consultation, precision installation and bi-annual maintenance." },
  { icon: Clock, t: "On-Time, Every Time", d: "Committed timelines with guaranteed completion and compensation for any delays." },
  { icon: Target, t: "Precision Installation Promise", d: "Laser-level accuracy, certified installers and multi-point quality checklists." },
  { icon: CheckCircle2, t: "Transparent Pricing", d: "No hidden costs. Clear breakdown of every component and charge before we begin." },
  { icon: MonitorSmartphone, t: "Smart Digital Experience", d: "Track your project in real-time from manufacturing to installation." },
  { icon: Handshake, t: "One-Stop Façade Partner", d: "Windows, doors, façades, glass, railings, partitions, pergolas & automation." },
  { icon: Gem, t: "Luxury Without Compromise", d: "European-inspired designs with Indian pricing and dedicated local support." },
];

const values = [
  { icon: Building2, t: "Innovate", d: "We embrace innovation to create smarter, stronger solutions." },
  { icon: Cpu, t: "Engineer", d: "We engineer with precision — ideas that stand the test of time." },
  { icon: Lightbulb, t: "Inspire", d: "We inspire through design, quality and commitment to excellence." },
  { icon: Handshake, t: "Partner", d: "We build partnerships on trust, collaboration and shared success." },
  { icon: Rocket, t: "Deliver", d: "We deliver with integrity, ensuring value in every project." },
];

function Quality() {
  const [active, setActive] = useState(0);
  return (
    <>
      <PageHero
        eyebrow="Why Choose Trois Glaze"
        title="7 Reasons Partners Trust Us."
        description="We combine innovation, expertise and commitment to deliver façade solutions that build value and lasting impressions."
        image={heroFacade}
        imageAlt="Trois Glaze engineered façade"
      >
        <div className="flex flex-wrap gap-2">
          {reasons.map((r, i) => (
            <a
              key={r.title}
              href={`#reason-${i}`}
              className="group inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 hover:border-gold hover:bg-gold/10 transition-colors text-xs font-semibold tracking-wider text-navy-foreground/80 hover:text-gold"
            >
              <r.icon className="size-3.5 text-gold" />
              <span className="hidden sm:inline">{r.title.split(" ").slice(0, 2).join(" ")}</span>
            </a>
          ))}
        </div>
      </PageHero>

      {/* INTERACTIVE TAB NAV */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-narrow overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {reasons.map((r, i) => (
              <button
                key={r.title}
                onClick={() => {
                  setActive(i);
                  document.getElementById(`reason-${i}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide uppercase transition-all border-b-2 ${
                  active === i
                    ? "text-gold border-gold"
                    : "text-muted-foreground border-transparent hover:text-navy hover:border-navy/30"
                }`}
              >
                <r.icon className="size-4" />
                <span className="hidden md:inline">{r.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7 REASONS */}
      <section className="py-16 md:py-24 bg-surface relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--navy) 1px, transparent 1px), linear-gradient(to bottom, var(--navy) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container-narrow relative space-y-16 md:space-y-24">
          {reasons.map((r, i) => {
            const flipped = i % 2 === 1;
            const Icon = r.icon;
            const QIcon = r.quoteIcon;
            return (
              <article
                id={`reason-${i}`}
                key={r.title}
                onMouseEnter={() => setActive(i)}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-32 group"
              >
                {/* CONTENT */}
                <div className={`lg:col-span-6 ${flipped ? "lg:order-2" : ""}`}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="pt-2">
                      <div className="size-12 border-2 border-gold rounded-full grid place-items-center text-gold mb-3">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="font-display font-bold text-2xl md:text-4xl text-navy leading-tight uppercase">
                        {r.title}
                      </h2>
                      <div className="mt-3 w-16 h-0.5 bg-gold" />
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {r.intro}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {r.points.map((pt) => (
                      <li key={pt.label} className="flex items-start gap-3 py-2 border-b border-border/60 group/pt hover:border-gold transition-colors">
                        <CheckCircle2 className="size-5 text-gold shrink-0 mt-0.5 group-hover/pt:scale-110 transition-transform" />
                        <div className="text-sm md:text-[0.95rem]">
                          <span className="font-bold text-navy">{pt.label}:</span>{" "}
                          <span className="text-muted-foreground">{pt.text}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* IMAGE + QUOTE */}
                <div className={`lg:col-span-6 ${flipped ? "lg:order-1" : ""}`}>
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-tr from-gold/20 to-black/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div
                      className="relative overflow-hidden bg-black/80 shadow-lift border-2 border-gold/30 group-hover:border-gold transition-colors"
                      style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 92% 100%, 0 100%)" }}
                    >
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        className="w-full h-72 md:h-[460px] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Quote badge */}
                    <div className="relative -mt-14 mx-4 md:mx-8 z-10">
                      <div className="flex items-center gap-4 p-4 md:p-5 bg-navy border border-gold/60 shadow-lift">
                        <div className="size-11 md:size-12 rounded-full border-2 border-gold grid place-items-center text-gold shrink-0">
                          <QIcon className="size-5" />
                        </div>
                        <p className="font-display italic text-sm md:text-base text-navy-foreground leading-snug">
                          {r.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* COMPETITIVE ADVANTAGES */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-narrow">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">Our Edge</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
              Competitive <span className="italic text-gold">Advantages</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Why partners choose <span className="text-gold font-semibold">Trois Glaze</span>, every time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((a) => (
              <div key={a.t} className="group grid grid-cols-[50px_1fr] gap-4 items-center p-5 bg-card border border-border hover:border-gold hover:shadow-lift transition-all">
                <div className="size-12 rounded-full border-2 border-navy grid place-items-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                  <a.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-navy leading-tight">{a.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <section className="py-16 md:py-20 bg-navy text-navy-foreground border-t border-gold/20">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">Our Values</div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Innovating Today. Building Tomorrow.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            {values.map((v) => (
              <div key={v.t} className="text-center relative">
                <div className="mx-auto size-16 rounded-full border-2 border-gold bg-navy grid place-items-center text-gold mb-4 relative z-10">
                  <v.icon className="size-6" />
                </div>
                <div className="font-display font-bold uppercase tracking-widest text-sm text-gold">{v.t}</div>
                <p className="mt-2 text-xs text-navy-foreground/70 leading-relaxed px-2">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="container-narrow text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">
            Ready to build a <span className="italic text-gold">landmark</span> together?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Let's engineer your next iconic façade — from concept to lifetime care.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold h-12 px-8 rounded-sm">
              <Link to="/contact">Request a Quote <ArrowRight className="ml-1.5 size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 border-navy text-navy hover:bg-navy hover:text-navy-foreground rounded-sm">
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
