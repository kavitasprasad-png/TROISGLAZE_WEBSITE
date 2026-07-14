import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Elevate Facade" },
      { name: "description", content: "500+ delivered facade projects across commercial, hospitality, healthcare, industrial and institutional sectors." },
    ],
  }),
  component: Projects,
});

const cats = ["All", "Commercial", "Residential", "Industrial", "Institutional", "Corporate", "Hotels", "Hospitals", "Shopping Malls"];

const projects = [
  { img: p1, title: "Aurora Tower", cat: "Commercial", loc: "Mumbai", year: 2024, area: "42,000 sqm" },
  { img: p2, title: "Meridian Corporate Park", cat: "Corporate", loc: "Bengaluru", year: 2023, area: "68,000 sqm" },
  { img: p3, title: "The Adelure Hotel", cat: "Hotels", loc: "Dubai", year: 2025, area: "18,000 sqm" },
  { img: p4, title: "Nova Medical Center", cat: "Hospitals", loc: "Pune", year: 2024, area: "22,000 sqm" },
  { img: p5, title: "Skyline Galleria", cat: "Shopping Malls", loc: "Delhi", year: 2023, area: "95,000 sqm" },
  { img: p6, title: "Ironworks Facility", cat: "Industrial", loc: "Chennai", year: 2024, area: "30,000 sqm" },
  { img: p1, title: "Prism Residences", cat: "Residential", loc: "Hyderabad", year: 2025, area: "28,000 sqm" },
  { img: p2, title: "Axis Campus", cat: "Institutional", loc: "Gurugram", year: 2024, area: "51,000 sqm" },
];

function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      <PageHero eyebrow="Projects" title="A portfolio built across sectors and skylines." description="500+ facade and glazing projects delivered across India and the Middle East." image={p3} imageAlt="Featured Trois Glaze project" />

      <section className="py-16">
        <div className="container-narrow">
          <div className="flex flex-wrap gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={
                  "px-4 py-2 rounded-full text-xs font-semibold border transition-colors " +
                  (filter === c ? "bg-navy text-navy-foreground border-navy" : "border-border text-foreground hover:border-brand hover:text-brand")
                }
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {list.map((p, i) => (
              <Reveal key={p.title + p.loc} delay={(i % 3) * 90}>
                <div className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift zoom-img h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.title} className="size-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full glass-dark text-[10px] font-semibold text-cyan tracking-wider uppercase">
                      {p.cat}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg">{p.title}</h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" /> {p.loc} · {p.year}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border flex justify-between text-xs">
                      <div>
                        <div className="text-muted-foreground">Area</div>
                        <div className="font-semibold text-foreground">{p.area}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Category</div>
                        <div className="font-semibold text-foreground">{p.cat}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
