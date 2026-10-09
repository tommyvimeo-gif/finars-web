import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero, Shell } from "@/components/shell";
import { categoryLabels, projects, type Category } from "@/lib/site";

export const Route = createFileRoute("/projekti")({ component: ProjectsPage });

const filters = ["vsi", "stanovanjsko", "javno", "poslovno", "sport", "interier"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("vsi");
  const list = useMemo(
    () => (filter === "vsi" ? projects : projects.filter((p) => p.category === (filter as Category))),
    [filter],
  );

  return (
    <Shell>
      <PageHero
        kicker="Portfolio"
        title="Naši projekti"
        lead="Izbor del od leta 2005 — stanovanjske hiše, javni objekti, trgovine in športni kompleksi."
      />
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`min-h-11 rounded-sm px-4 text-sm ${filter === f ? "bg-accent text-accent-ink" : "border border-line bg-surface text-fg"}`}
            >
              {categoryLabels[f]}
            </button>
          ))}
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <li key={p.title + p.year} className="group relative overflow-hidden rounded-card">
              <img src={p.image} alt="" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/30 to-transparent p-4">
                <p className="text-xs tracking-widest text-accent">{p.year} · {p.place}</p>
                <p className="font-display text-lg leading-snug">{p.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Shell>
  );
}
