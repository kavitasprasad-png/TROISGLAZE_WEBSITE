import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Cog, HardHat, Headphones, MessageSquare, PencilRuler } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import processConsultation from "@/assets/process-consultation.jpg";
import processEngineering from "@/assets/process-engineering.jpg";
import processFabrication from "@/assets/process-fabrication.jpg";
import processInstallation from "@/assets/process-installation.jpg";
import processSupport from "@/assets/process-support.jpg";

export const Route = createFileRoute("/our-process")({
  head: () => ({
    meta: [
      { title: "Our Process — Trois Glaze Installation Journey" },
      { name: "description", content: "From consultation and engineering to fabrication, installation and lifetime support — a seamless façade delivery process." },
      { property: "og:title", content: "Our Process — Trois Glaze" },
      { property: "og:description", content: "A seamless façade journey built on precision, passion and partnership." },
    ],
  }),
  component: OurProcess,
});

const installationSteps = [
  { t: "Consultation", d: "Understanding your vision and requirements.", image: processConsultation, icon: MessageSquare },
  { t: "Engineering", d: "Conceptualization, system selection and shop drawings.", image: processEngineering, icon: PencilRuler },
  { t: "Fabrication", d: "Precision manufacturing in controlled facilities.", image: processFabrication, icon: Cog },
  { t: "Installation", d: "Expert installation with safety and quality checks.", image: processInstallation, icon: HardHat },
  { t: "Lifetime Support", d: "Maintenance and support for the life of the building.", image: processSupport, icon: Headphones },
];

function useInView<T extends Element>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, ...options },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

function ProcessCard({ step, index, isNavy }: { step: typeof installationSteps[number]; index: number; isNavy: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 140}ms` }}
    >
      <div
        className={`relative z-20 grid size-16 place-items-center rounded-full shadow-lg ring-4 ring-surface transition-transform duration-500 hover:scale-110 hover:rotate-6 ${
          isNavy ? "bg-navy text-white" : "bg-gold text-navy"
        } ${inView ? "animate-scale-in" : ""}`}
        style={{ animationDelay: `${index * 140 + 200}ms`, animationFillMode: "both" }}
      >
        <step.icon className="size-7" strokeWidth={1.5} />
      </div>

      <div
        className={`group -mt-8 w-full rounded-full overflow-hidden border-2 ${
          isNavy ? "border-navy" : "border-gold"
        } bg-white shadow-md flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
        style={{ minHeight: "440px" }}
      >
        <div className="pt-12 pb-5 px-3 text-center">
          <div className={`font-display font-bold text-sm md:text-base uppercase tracking-wide transition-colors ${isNavy ? "text-navy" : "text-gold"}`}>
            {step.t}
          </div>
          <div className={`mx-auto mt-2 h-px w-8 transition-all duration-500 group-hover:w-16 ${isNavy ? "bg-navy/30" : "bg-gold/50"}`} />
          <p className="mt-3 text-[11px] md:text-xs text-muted-foreground leading-relaxed">{step.d}</p>
        </div>

        <div className="mt-auto relative flex-1 min-h-[180px] overflow-hidden">
          <img
            src={step.image}
            alt={step.t}
            loading="lazy"
            width={768}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {index < installationSteps.length - 1 && (
        <div className="hidden lg:block absolute top-8 -right-3 z-10 size-2 rounded-full bg-gold animate-pulse" />
      )}
    </div>
  );
}

function OurProcess() {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>();

  return (
    <>
      <PageHero
        eyebrow="Trois Glaze — Crafting the skin of Modern Architecture"
        title="Our Process"
        description="A seamless journey — concept to care. Built on precision, passion and partnership, every façade project follows the same disciplined five-stage process."
        image={processInstallation}
        imageAlt="Trois Glaze installation team on site"
      />

      <section className="py-24 md:py-32 bg-surface overflow-hidden">
        <div className="container-narrow">
          <div
            ref={headingRef}
            className={`text-center mx-auto max-w-2xl transition-all duration-700 ${
              headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-3">Our Process</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-navy">From concept to care</h2>
            <p className="mt-4 text-muted-foreground text-lg">A seamless journey built on precision, passion and partnership.</p>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-5">
            {installationSteps.map((step, i) => (
              <ProcessCard key={step.t} step={step} index={i} isNavy={i % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-navy text-navy-foreground">
        <div className="container-narrow text-center max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to start your project?</h2>
          <p className="mt-4 text-navy-foreground/80">Share your drawings — our team responds within 24 hours.</p>
          <Button asChild size="lg" className="mt-8 bg-gold text-gold-foreground hover:bg-gold/90 rounded-sm h-12 px-8 font-semibold hover-scale">
            <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 size-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
