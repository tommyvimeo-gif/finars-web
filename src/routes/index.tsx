import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell";
import { PHOTOS, projects } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = projects.filter((p) =>
    ["Hiša v gozdu", "Mladinski center Trbovlje", "Mercator Novo mesto"].includes(p.title),
  );

  return (
    <Shell>
      <section className="relative overflow-hidden px-5 pt-24 pb-28 md:pt-36 md:pb-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,rgba(201,162,39,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="rise text-xs tracking-[0.2em] text-accent uppercase">
            Arhitekturni biro · Zagorje ob Savi
          </p>
          <h1 className="rise mt-5 font-display text-5xl leading-tight md:text-7xl" style={{ animationDelay: "80ms" }}>
            Prostor, ki oblikuje življenje
          </h1>
          <p className="rise mt-6 max-w-lg text-lg text-muted" style={{ animationDelay: "160ms" }}>
            Od idejne zasnove do izvedbenega projekta — ustvarjamo arhitekturo, ki združuje funkcionalnost, estetiko in trajnost.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <Link to="/projekti" className="inline-flex min-h-12 items-center justify-center bg-accent px-6 font-medium text-accent-ink">
              Oglejte si projekte
            </Link>
            <Link to="/kontakt" className="inline-flex min-h-12 items-center justify-center border border-accent px-6 font-medium text-accent">
              Stopite v stik
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.18em] text-accent uppercase">O nas</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Več kot 20 let ustvarjanja prostorov</h2>
          <p className="mt-5 text-muted">
            FIN ARS d.o.o. je arhitekturni biro, ustanovljen leta 2006 v Zagorju ob Savi. Projektiramo od enodružinskih hiš do javnih in poslovnih objektov, tudi v tujini.
          </p>
          <p className="mt-3 text-muted">Delamo v BIM okolju in spremljamo projekt od prve skice do prevzema objekta.</p>
          <Link to="/o-nas" className="mt-6 inline-flex min-h-12 items-center bg-accent px-6 font-medium text-accent-ink">
            Spoznajte nas
          </Link>
        </div>
        <img src={PHOTOS.interier} alt="Sodoben interier" className="aspect-[4/5] w-full rounded-card object-cover" />
      </section>

      <section className="border-y border-line bg-bg-alt">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px md:grid-cols-3">
          {[
            ["20+", "Let izkušenj"],
            ["80+", "Projektov"],
            ["4", "Strokovnjaki v jedru ekipe"],
          ].map(([n, l]) => (
            <div key={l} className="px-6 py-10 text-center">
              <p className="font-display text-4xl text-accent">{n}</p>
              <p className="mt-1 text-sm text-muted">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <p className="text-center text-xs tracking-[0.18em] text-accent uppercase">Izbrani projekti</p>
        <h2 className="mt-3 text-center font-display text-4xl">Naše delo</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Link key={p.title} to="/projekti" className="group relative overflow-hidden rounded-card">
              <img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-bg via-bg/20 to-transparent p-5">
                <p className="text-xs tracking-widest text-accent">{p.year}</p>
                <p className="font-display text-xl">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Shell>
  );
}
