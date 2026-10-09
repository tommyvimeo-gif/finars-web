import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Shell } from "@/components/shell";
import { PHOTOS, team } from "@/lib/site";

export const Route = createFileRoute("/o-nas")({ component: About });

function About() {
  return (
    <Shell>
      <PageHero
        kicker="O nas"
        title="Arhitektura z vizijo"
        lead="Od leta 2006 ustvarjamo prostore, ki združujejo funkcionalnost, estetiko in odgovornost do okolja."
      />
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2">
        <div className="space-y-4 text-muted">
          <h2 className="font-display text-3xl text-fg">Kdo smo</h2>
          <p>
            FIN ARS d.o.o. je nastal leta 2006 v Zagorju ob Savi. Vodita ga Kristijan Čuk, strokovni direktor, in Borut Dolar, poslovni direktor.
          </p>
          <p>
            Ekipa pokriva stanovanjske hiše, javne objekte, trgovske centre in natečaje — v Sloveniji ter v Libiji, Srbiji in Franciji.
          </p>
        </div>
        <img src={PHOTOS.hisa} alt="Hiša v gozdu" className="aspect-[4/5] w-full rounded-card object-cover" />
      </section>
      <section className="bg-bg-alt px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-4xl">Ekipa</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name} className="text-center">
                <div className="mx-auto grid size-24 place-items-center rounded-full border border-line bg-surface font-display text-2xl text-accent">
                  {m.initials}
                </div>
                <p className="mt-3 font-medium">{m.name}</p>
                <p className="text-sm text-muted">{m.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
