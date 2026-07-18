import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Gem,
  Handshake,
  HeartHandshake,
  Leaf,
  Lightbulb,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import hero from "@/assets/hero-facade.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trois Glaze | Facade Engineering, Aluminium Windows & Glass Facades" },
      { name: "description", content: "Trois Glaze is a technology-driven façade engineering company specializing in curtain walls, aluminium windows, louvers, ACP cladding, structural glazing, glass facades and complete fenestration solutions across India." },
      { name: "keywords", content: "Facade Engineering, Curtain Wall, Aluminium Windows, Structural Glazing, Glass Facade, ACP Cladding, Louvres, Fenestration, Mumbai" },
      { property: "og:title", content: "Trois Glaze | Premium Facade Engineering Solutions" },
      { property: "og:description", content: "Technology-driven façade engineering company delivering innovative curtain walls, glazing, aluminium windows and architectural façade solutions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://troisglaze.com/" },
     
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Trois Glaze | Premium Facade Engineering Solutions" },
      { name: "twitter:description", content: "Technology-driven façade engineering company delivering innovative curtain walls, glazing, aluminium windows and architectural façade solutions." },
    
      { name: "theme-color", content: "#0D1B2A" },
    ],
   
  }),
  component: Home,
});


const commitments = [
  { icon: Gem, t: "Premium Quality Materials", d: "World-class materials that ensure durability, aesthetics and long-term performance." },
  { icon: Target, t: "Precision Engineering", d: "Every façade system engineered with meticulous attention to detail." },
  { icon: Lightbulb, t: "Innovative Design", d: "Architectural concepts transformed into elegant, functional envelopes." },
  { icon: Clock, t: "On-Time Delivery", d: "Efficient planning and project management — speed, quality and reliability." },
  { icon: ShieldCheck, t: "Lifetime Maintenance", d: "Commitment continues beyond installation with comprehensive support." },
];

const creativeTeam = [
  { icon: Users, t: "Visionaries", d: "We imagine beyond boundaries and design without limits." },
  { icon: Lightbulb, t: "Innovators", d: "We embrace new ideas, materials and technologies to create smarter solutions." },
  { icon: HeartHandshake, t: "Collaborators", d: "We believe the best designs are born from teamwork and trust." },
  { icon: Target, t: "Detail Driven", d: "We sweat the small stuff, so every detail makes a big impact." },
];

const advantages = [
  { icon: HeartHandshake, t: "From Design to Lifetime Care", d: "We don't just install windows — we provide complete lifetime support through design consultation, precision installation and bi-annual maintenance." },
  { icon: Clock, t: "On-Time, Every Time", d: "Committed project timelines with guaranteed completion and timely compensation for any delays." },
  { icon: Target, t: "Precision Installation Promise", d: "Laser-level accuracy, certified installers and multi-point quality checklist for flawless execution." },
  { icon: CheckCircle2, t: "Transparent Pricing", d: "No hidden costs. Clear breakdown of every component and installation charge before we begin." },
  { icon: MonitorSmartphone, t: "Smart Digital Experience", d: "Track your project in real-time from manufacturing to installation via our digital platform." },
  { icon: Handshake, t: "One-Stop Façade & Fenestration Partner", d: "Everything under one roof — windows, doors, facades, glass, railings, partitions, pergolas & automation." },
  { icon: Gem, t: "Luxury Without Compromise", d: "Premium European-inspired designs with Indian pricing and dedicated local service support." },
];

const process = [
  { t: "Consultation", d: "Understanding your vision and requirements." },
  { t: "Engineering", d: "Conceptualization and system selection." },
  { t: "Fabrication", d: "Precision manufacturing in controlled facilities." },
  { t: "Installation", d: "Expert installation with safety and quality." },
  { t: "Lifetime Support", d: "Maintenance and support for the life of the building." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-dvh flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Modern glass façade at blue hour"
          className="absolute inset-0 size-full object-cover object-[70%_center] scale-105"
          width={1920}
          height={1200}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--navy) 92%, transparent) 0%, color-mix(in oklab, var(--navy) 55%, transparent) 35%, color-mix(in oklab, var(--navy-light) 30%, transparent) 70%, transparent 100%)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="container-narrow relative pt-24 pb-16">
          <div className="max-w-3xl text-navy-foreground">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight max-w-3xl animate-slide-in-left">
              "<span className="text-gold">Crafting the Skin of Modern Architecture</span>"
            </h1>

            <p className="mt-6 text-lg md:text-xl lg:text-2xl text-navy-foreground/90 max-w-2xl leading-relaxed font-light">
              Premium façade, fenestration and louvre solutions for iconic buildings.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold h-12 px-7 rounded-sm">
                <Link to="/contact">Get Free Quote <ArrowRight className="ml-1.5 size-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-7 border-white/40 bg-white/5 text-white hover:bg-white hover:text-navy backdrop-blur rounded-sm">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 px-7 text-white/90 hover:bg-white/10 hover:text-white rounded-sm">
                <Link to="/about">Company Profile</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-navy-foreground/60 text-[10px] tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <div className="container-narrow grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="relative zoom-img">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/15 to-navy/10 rounded-sm blur-2xl" />
            <img src={about} alt="Trois Glaze façade portfolio" className="relative rounded-sm shadow-lift w-full" width={1400} height={1000} loading="lazy" />
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gold" />
          </Reveal>
          <Reveal delay={120}>
            <div className="text-sm font-semibold tracking-[0.3em] uppercase text-gold mb-4">About Trois Glaze</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
              A technology-driven <span className="gold-text">façade engineering</span> company.
            </h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              We deliver end-to-end solutions in <strong className="text-navy">Facades, Fenestration and Louvres</strong> — from supply and installation to lifetime maintenance. We create high-performance building envelopes that enhance aesthetics, ensure safety, maximize energy efficiency and deliver long-term value.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Driven by innovation, precision and sustainability, we collaborate with architects, consultants, developers and contractors to transform visionary concepts into iconic architectural landmarks.
            </p>
            <Button asChild className="mt-8 bg-navy hover:bg-navy/90 text-navy-foreground rounded-sm press">
              <Link to="/about">Read Our Story <ArrowRight className="ml-1.5 size-4" /></Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-narrow">
          <SectionHeader eyebrow="Our Commitment" title="Excellence, engineered end-to-end" />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {commitments.map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="group p-6 bg-card border border-border hover:border-gold hover:bg-navy hover:text-navy-foreground transition-all duration-300 hover-lift h-full">
                  <div className="size-12 border border-gold/50 rotate-45 grid place-items-center mb-5 group-hover:bg-gold transition-colors">
                    <c.icon className="size-5 -rotate-45 text-gold group-hover:text-gold-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-base leading-tight">{c.t}</h3>
                  <p className="mt-2 text-sm opacity-70 leading-relaxed">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE TEAM */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeader eyebrow="Behind Every Iconic Façade" title="Is a Creative Mind" description="Our creative team blends imagination, expertise and technology to design facades that inspire, perform and stand the test of time." />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {creativeTeam.map((v, i) => (
              <Reveal key={v.t} delay={i * 100}>
                <div className="text-center p-6 border border-border rounded-sm hover:border-gold hover:shadow-lift transition-all hover-lift h-full">
                  <div className="mx-auto size-16 border-2 border-gold rounded-full grid place-items-center text-gold mb-4 transition-transform duration-500 hover:rotate-[360deg]">
                    <v.icon className="size-7" />
                  </div>
                  <div className="font-display font-bold text-navy uppercase tracking-wide text-sm">{v.t}</div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      {/* COMPETITIVE ADVANTAGES */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-narrow">
          <div className="max-w-2xl mb-14">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">Our Edge</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">Competitive Advantages</h2>
            <p className="mt-4 text-muted-foreground text-lg">Why partners choose <span className="text-gold font-semibold">Trois Glaze</span>, every time.</p>
          </div>
          <div className="space-y-4">
            {advantages.map((a, i) => (
              <Reveal key={a.t} delay={i * 70}>
                <div className="group grid md:grid-cols-[60px_1fr] gap-6 items-center p-6 bg-card border border-border hover:border-gold hover:shadow-lift transition-all press">
                  <div className="size-14 rounded-full border-2 border-navy grid place-items-center text-navy group-hover:bg-navy group-hover:text-gold transition-colors">
                    <a.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-navy">{a.t}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{a.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeader eyebrow="Our Process" title="A seamless journey — concept to care" description="Built on precision, passion and partnership." />
          <div className="mt-20 relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {process.map((step, i) => (
                <Reveal key={step.t} delay={i * 120}>
                  <div className="relative text-center group">
                    <div className={`mx-auto size-16 rounded-full border-2 relative z-10 transition-all duration-500 group-hover:scale-110 ${i % 2 === 0 ? "bg-navy border-navy" : "bg-gold border-gold"}`} />
                    <div className="mt-5 font-display font-bold text-base text-navy uppercase tracking-wide">{step.t}</div>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed px-2">{step.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
        <div className="container-narrow relative text-center max-w-3xl">
          <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">Start Your Project</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
            Creative Minds. <span className="gold-text">Precise Engineering.</span> Timeless Landmarks.
          </h2>
          <p className="mt-5 text-navy-foreground/80 text-lg italic">Innovating today. Building tomorrow.</p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground font-semibold h-12 px-8 rounded-sm">
              <Link to="/contact">Request a Quote <ArrowRight className="ml-1.5 size-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
