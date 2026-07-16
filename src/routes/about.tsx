import { createFileRoute } from "@tanstack/react-router";
import { Award, Building2, CheckCircle2, Clock, Compass, Eye, Gem, Grid3x3, HeartHandshake, Layers, Leaf, Lightbulb, Quote, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeader } from "@/components/site/SectionHeader";
import about from "@/assets/about.jpg";

import creativeTeam from "@/assets/creative-team.jpg";
import facadeBuilding from "@/assets/facade-building.png";
import serviceFacades from "@/assets/service-facades.jpg";
import serviceFenestration from "@/assets/service-fenestration.jpg";
import serviceLouvres from "@/assets/service-louvres.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Trois Glaze — Façade Engineering Company" },
      { name: "description", content: "Trois Glaze is a technology-driven façade engineering company delivering end-to-end solutions in Facades, Fenestration and Louvres." },
    ],
  }),
  component: About,
});

const commitments = [
  { icon: Gem, t: "Premium Quality Materials", d: "We source world-class materials that ensure durability, aesthetics and long-term performance." },
  { icon: Target, t: "Precision Engineering", d: "Every façade system is engineered with meticulous attention to detail, ensuring safety, accuracy and flawless execution." },
  { icon: Lightbulb, t: "Innovative Design Solutions", d: "We transform architectural concepts into elegant, functional and sustainable building envelope solutions." },
  { icon: Clock, t: "On-Time Project Delivery", d: "Through efficient planning and project management, we deliver every project with speed, quality and reliability." },
  { icon: ShieldCheck, t: "Lifetime Maintenance Support", d: "Our commitment continues beyond installation with comprehensive maintenance and long-term technical support." },
];

const values = [
  { icon: Compass, t: "Inspired by Vision", d: "We dream big and envision a better, smarter tomorrow." },
  { icon: Target, t: "Driven by Purpose", d: "We create with intent and deliver with dedication." },
  { icon: Award, t: "Defined by Excellence", d: "Quality is not a choice, it's our standard in every detail." },
  { icon: HeartHandshake, t: "Committed to You", d: "Your trust drives us to go beyond, every single time." },
];

const expertise = [
  { icon: Building2, t: "Facades", d: "Engineering iconic building envelopes that combine performance, safety and stunning aesthetics.", image: serviceFacades },
  { icon: Grid3x3, t: "Fenestration", d: "Precision-crafted window and door systems that ensure comfort, efficiency and seamless views.", image: serviceFenestration },
  { icon: Layers, t: "Louvres", d: "Smart louvre solutions that enhance ventilation, reduce energy load and add architectural character.", image: serviceLouvres },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Trois Glaze"
        title={
          <>
            Engineering Skylines
            <br />
            Creating Landmark
          </>
        }
        description="A technology-driven façade engineering company delivering end-to-end solutions in Facades, Fenestration and Louvres."
        image={facadeBuilding}
        imageAlt="Modern glass façade building"
      />

      {/* ABOUT */}
      <section className="py-24 md:py-32">
        <div className="container-narrow grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">About</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy leading-tight">TROIS GLAZE</h2>
            <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed">
              We are a technology-driven façade engineering company delivering end-to-end solutions in <strong className="text-navy">Facades, Fenestration</strong> and <strong className="text-navy">Louvres</strong>.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From supply, installation and lifetime maintenance, we create high-performance building envelopes that enhance aesthetics, ensure safety, maximize energy efficiency and deliver long-term value.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Driven by innovation, precision and sustainability, we collaborate with architects, consultants, developers and contractors to transform visionary concepts into iconic architectural landmarks. Every solution is engineered to meet the highest standards of quality, durability and performance.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/15 to-black/10 rounded-sm blur-2xl" />
            <img src={about} alt="Trois Glaze corporate façade portfolio" className="relative rounded-sm shadow-lift w-full" loading="lazy" />
            <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gold" />
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-narrow">
          <SectionHeader title="Our Commitment" size="small" />
        
              <div className="mt-16 grid md:grid-cols-3 gap-6"></div>
            {commitments.map((c) => (
              <div key={c.t} className="flex gap-6 items-start p-6 bg-card border-l-4 border-gold hover:shadow-lift transition-shadow">
                <div className="shrink-0 size-14 border border-gold/50 rotate-45 grid place-items-center">
                  <c.icon className="size-5 -rotate-45 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-navy">{c.t}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{c.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOUNDATION — VISION / MISSION / VALUES */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container-narrow relative">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-3">Our Foundation.</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-gold leading-[1.05] uppercase">Our Future.</h2>
            <p className="mt-5 font-display italic text-lg md:text-xl text-navy">
              Driven by <span className="text-gold">innovation.</span> Defined by <span className="text-gold">quality.</span> Committed to <span className="text-gold">excellence.</span>
            </p>
            <div className="mt-6 h-px w-24 bg-gold" />
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT — VMV timeline */}
            <div className="relative">
              <div className="absolute left-7 top-6 bottom-6 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-gold/60 hidden sm:block" />
              <div className="space-y-10">
                {/* VISION */}
                <div className="flex gap-5 items-start">
                  <div className="relative shrink-0 size-14 rounded-full bg-navy grid place-items-center border-2 border-gold shadow-lift">
                    <Eye className="size-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display font-bold text-2xl text-gold tracking-wide">VISION</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      To be the most trusted and innovative façade solutions partner, shaping skylines and enriching lives.
                    </p>
                  </div>
                </div>

                {/* MISSION */}
                <div className="flex gap-5 items-start">
                  <div className="relative shrink-0 size-14 rounded-full bg-navy grid place-items-center border-2 border-gold shadow-lift">
                    <Target className="size-6 text-gold" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display font-bold text-2xl text-gold tracking-wide">MISSION</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      To deliver world-class façade, fenestration and louvre solutions with precision engineering, timely execution and unwavering commitment to quality and safety.
                    </p>
                  </div>
                </div>

                {/* VALUES */}
                <div className="flex gap-5 items-start">
                  <div className="relative shrink-0 size-14 rounded-full bg-navy grid place-items-center border-2 border-gold shadow-lift">
                    <Gem className="size-6 text-gold" />
                  </div>
                  <div className="pt-1 w-full">
                    <h3 className="font-display font-bold text-2xl text-gold tracking-wide">VALUES</h3>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {[
                        { icon: ShieldCheck, t: "Integrity" },
                        { icon: Award, t: "Excellence" },
                        { icon: Lightbulb, t: "Innovation" },
                        { icon: Leaf, t: "Sustainability" },
                        { icon: Users, t: "Teamwork" },
                      ].map((v) => (
                        <div key={v.t} className="flex items-center gap-3">
                          <div className="size-8 rounded-full border border-gold/50 grid place-items-center text-gold">
                            <v.icon className="size-4" />
                          </div>
                          <span className="font-medium text-navy">{v.t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — building image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-gold/15 to-black/10 rounded-sm blur-2xl" />
              <img
                src={facadeBuilding}
                alt="Modern façade with geometric perforated panels and vertical greenery"
                className="relative w-full h-[420px] md:h-[560px] object-cover rounded-sm shadow-lift"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-gold/30 rounded-sm pointer-events-none" />
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gold" />
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.3em] uppercase text-navy">
              <Sparkles className="size-4 text-gold" />
              Innovating Today. Building Tomorrow.
              <Sparkles className="size-4 text-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE TEAM */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--gold) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container-narrow relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* LEFT — copy */}
            <div>
              <div className="text-sm font-semibold tracking-[0.3em] uppercase text-muted-foreground mb-4">Behind Every</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-gold leading-[1.05] uppercase">Iconic Facade</h2>
              <p className="mt-4 font-display italic text-2xl md:text-3xl text-navy">Is a Creative Mind.</p>
              <div className="mt-6 h-px w-24 bg-gold" />
              <p className="mt-8 text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                Our creative team blends imagination, expertise and technology to design facades that <span className="text-gold font-medium">inspire, perform</span> and <span className="text-gold font-medium">stand the test of time.</span>
              </p>
            </div>

            {/* RIGHT — paired images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src={creativeTeam}
                  alt="Trois Glaze creative team collaborating on façade designs"
                  className="w-full h-[220px] md:h-[300px] object-cover rounded-sm shadow-lift"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
                <div className="absolute inset-0 border border-gold/30 rounded-sm pointer-events-none" />
              </div>
              <div className="relative mt-8">
                <img
                  src={facadeBuilding}
                  alt="Iconic glass and steel façade at golden hour"
                  className="w-full h-[220px] md:h-[300px] object-cover rounded-sm shadow-lift"
                  loading="lazy"
                />
                <div className="absolute inset-0 border border-gold/30 rounded-sm pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Team traits grid */}
          <div className="mt-20">
            <div className="text-center max-w-xl mx-auto bg-navy p-6 md:p-8 rounded-sm shadow-lift border border-gold/30">
              <div className="text-2xl md:text-3xl font-display font-bold text-white tracking-wide uppercase">Our <span className="text-gold">Creative</span> Team</div>
              <div className="mt-3 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, t: "Visionaries", d: "We imagine beyond boundaries and design without limits." },
                { icon: Lightbulb, t: "Innovators", d: "We embrace new ideas, materials and technologies to create smarter solutions." },
                { icon: HeartHandshake, t: "Collaborators", d: "We believe the best designs are born from teamwork and trust." },
                { icon: Target, t: "Detail Driven", d: "We sweat the small stuff, so every detail makes a big impact." },
              ].map((v) => (
                <div key={v.t} className="p-6 bg-card border border-border hover:border-gold transition-colors">
                  <div className="size-14 border border-gold rounded-full grid place-items-center text-gold mb-4">
                    <v.icon className="size-6" />
                  </div>
                  <div className="font-display font-bold text-navy uppercase tracking-wide text-sm">{v.t}</div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS MESSAGE */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background via-surface to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="container-narrow relative">
          <SectionHeader eyebrow="Message from" title="The Founders" description="The vision and mission that shapes every Trois Glaze project." />
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            {[
              {
                name: "ASJAD KHAN",
                initials: "AK",
                role: "Founder",
                vision: "To be a leading force in the facades, fenestration and louvres industry, delivering innovative, sustainable and iconic solutions that shape skylines and set new benchmarks in excellence.",
                mission: "To become a trusted leader in facades, fenestration and louvres by providing high-performance, safe and aesthetically superior solutions through precision engineering, innovation and unwavering commitment to quality and client success.",
              },
              {
                name: "UROOJ SAYED",
                initials: "US",
                role: "Founder",
                vision: "To be a recognized leader in facades, fenestration and louvres, redefining buildings with aesthetics, functionality and purpose — enhancing lives and inspiring generations.",
                mission: "To lead with creativity and integrity in designing and delivering facades, fenestration and louvres solutions that blend technology, sustainability and craftsmanship, creating meaningful experiences and standing the test of time.",
              },
            ].map((f) => (
              <div key={f.name} className="relative bg-card border-t-4 border-t-gold shadow-lift hover:shadow-xl transition-shadow">
                {/* Header band */}
                <div className="relative bg-navy text-navy-foreground px-8 pt-10 pb-8 overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />
                  <Quote className="absolute top-4 right-4 size-10 text-gold/40" />
                  <div className="relative flex items-center gap-5">
                    <div className="shrink-0 size-20 rounded-full bg-gradient-to-br from-gold to-gold/70 grid place-items-center font-display font-bold text-2xl text-navy shadow-lg border-2 border-white/20">
                      {f.initials}
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.35em] uppercase text-gold font-bold mb-1">{f.role}</div>
                      <h3 className="font-display font-bold text-2xl md:text-3xl text-white leading-tight">{f.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 md:p-10 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="size-8 rounded-sm bg-gold/10 grid place-items-center">
                        <Eye className="size-4 text-gold" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-navy">Our Vision</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-10">{f.vision}</p>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="size-8 rounded-sm bg-gold/10 grid place-items-center">
                        <Target className="size-4 text-gold" />
                      </div>
                      <h4 className="font-display font-bold text-lg text-navy">Our Mission</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-10">{f.mission}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* EXPERTISE */}
      <section className="py-24 md:py-32">
        <div className="container-narrow">
          <SectionHeader eyebrow="Our Expertise · Our Passion" title="Three integrated disciplines" />
          <div className="mt-16 grid md:grid-cols-3 gap-6">
          {expertise.map((e) => (
            <div key={e.t} className="overflow-hidden bg-card border border-border hover:border-gold transition-colors group">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border group-hover:border-gold/60 transition-colors">
                <img
                  src={e.image}
                  alt={e.t}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex gap-5">
                  <div className="shrink-0 size-14 border border-gold/40 grid place-items-center text-gold group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                    <e.icon className="size-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-2xl text-navy">{e.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32 bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-glow)" }} />
        <div className="container-narrow relative">
          <div className="text-center mx-auto max-w-2xl">
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">Our Values</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Innovate · Engineer · Inspire</h2>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v) => (
              <div key={v.t} className="p-6 border border-white/10 bg-white/5 backdrop-blur hover:border-gold transition-colors">
                <v.icon className="size-7 text-gold mb-4" />
                <div className="font-display font-bold text-lg text-white">{v.t}</div>
                <p className="mt-2 text-sm text-navy-foreground/70 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGN-OFF TAGLINE */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-navy via-navy to-black text-navy-foreground relative overflow-hidden border-t border-gold/30">
        <div className="absolute inset-0 opacity-40" style={{ background: "var(--gradient-glow)" }} />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--gold) 1px, transparent 1px), linear-gradient(to bottom, var(--gold) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-narrow relative text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold" />
            <Sparkles className="size-4 text-gold" />
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-gold">Trois Glaze</span>
            <span className="text-white/60 mx-3 md:mx-4">—</span>
            <span className="block md:inline mt-2 md:mt-0">
              Where <span className="italic text-gold">Vision</span> Becomes <span className="italic text-gold">Skyline</span>.
            </span>
          </h2>
          <div className="mx-auto mt-8 h-0.5 w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </section>
    </>
  );
}
