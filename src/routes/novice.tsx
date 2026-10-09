import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/shell";

export const Route = createFileRoute("/novice")({ component: News });

const posts = [
  {
    date: "2022",
    title: "Digitalna transformacija podjetja",
    body: "Projekt digitalizacije poslovanja je prejel sofinanciranje Republike Slovenije in Evropske unije iz Evropskega sklada za regionalni razvoj, do 100.000 EUR.",
  },
  {
    date: "2020",
    title: "Razvojna platforma TROŽIVKA",
    body: "Modularne multifunkcijske platforme za trajnostni turizem na vodi, kopnem ali v krošnjah. Projektiranje poteka v BIM tehnologiji.",
  },
  {
    date: "2017",
    title: "Prva nagrada — Atletski center Ljubljana",
    body: "Natečajna rešitev FIN ARS v sodelovanju z avtorji z Arhitekturne fakultete v Beogradu je prejela prvo nagrado.",
  },
];

function News() {
  return (
    <Shell>
      <PageHero kicker="Aktualno" title="Novice" lead="Dogajanja in dosežki biroja." />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="rounded-card border border-line bg-surface p-6">
            <p className="text-xs tracking-widest text-accent">{p.date}</p>
            <h2 className="mt-3 font-display text-2xl">{p.title}</h2>
            <p className="mt-3 text-sm text-muted">{p.body}</p>
          </article>
        ))}
      </section>
    </Shell>
  );
}
