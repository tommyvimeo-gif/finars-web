import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, FileCheck, LayoutTemplate, Map, PencilRuler, ShieldCheck } from "lucide-react";
import { PageHero, Shell } from "@/components/shell";

export const Route = createFileRoute("/storitve")({ component: Services });

const items = [
  { icon: Building2, title: "Projektna dokumentacija", text: "IDP, PGD in PZI za zahtevne in manj zahtevne objekte." },
  { icon: Map, title: "Dokumentacija za OPPN", text: "Urbanistične zasnove in umestitev objektov v prostor." },
  { icon: PencilRuler, title: "Oblikovanje interierja", text: "Koncepti in podrobni načrti notranje opreme." },
  { icon: ShieldCheck, title: "Vodenje postopka za GD", text: "Priprava vlog in spremljanje pridobitve gradbenega dovoljenja." },
  { icon: LayoutTemplate, title: "Izvedbeni projekti", text: "Detajli, specifikacije in BIM model za gradnjo." },
  { icon: FileCheck, title: "Projektantski nadzor", text: "Skladnost izvedbe s projektom do prevzema objekta." },
];

function Services() {
  return (
    <Shell>
      <PageHero
        kicker="Kaj ponujamo"
        title="Naše storitve"
        lead="Od prve ideje do prevzema objekta — celovita podpora na vsakem koraku."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-14 md:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <article key={title} className="rounded-card border border-line bg-surface p-6">
            <Icon className="size-7 text-accent" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-2xl">{title}</h2>
            <p className="mt-2 text-sm text-muted">{text}</p>
          </article>
        ))}
      </section>
      <div className="pb-16 text-center">
        <Link to="/kontakt" className="inline-flex min-h-12 items-center bg-accent px-6 font-medium text-accent-ink">
          Povpraševanje
        </Link>
      </div>
    </Shell>
  );
}
