import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Domov" },
  { to: "/o-nas", label: "O nas" },
  { to: "/projekti", label: "Projekti" },
  { to: "/storitve", label: "Storitve" },
  { to: "/novice", label: "Novice" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Shell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-display text-xl tracking-wide" onClick={() => setOpen(false)}>
            FIN <span className="text-accent">ARS</span>
          </Link>
          <nav className="hidden gap-7 md:flex">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`text-xs font-medium tracking-[0.14em] uppercase ${active ? "text-accent" : "text-muted hover:text-fg"}`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md border border-line md:hidden"
            aria-label={open ? "Zapri meni" : "Odpri meni"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-wide uppercase"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      {children}
      <footer className="border-t border-line bg-bg-alt">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
          <div>
            <p className="font-display text-xl">
              FIN <span className="text-accent">ARS</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Center za arhitekturo, gradbeno projektiranje in druge storitve d.o.o.
            </p>
          </div>
          <div className="text-sm text-muted">
            <p className="mb-2 text-xs tracking-[0.14em] text-accent uppercase">Kontakt</p>
            <p>Podvine 36</p>
            <p>1410 Zagorje ob Savi</p>
            <p className="mt-2">info@finars.si</p>
            <p>03 566 05 46</p>
          </div>
          <div className="text-sm text-muted">
            <p className="mb-2 text-xs tracking-[0.14em] text-accent uppercase">Podatki</p>
            <p>Davčna št. SI 70790817</p>
            <p>Matična št. 2144921000</p>
          </div>
        </div>
        <div className="border-t border-line px-5 py-4 text-center text-xs text-muted">
          © 2026 FIN ARS d.o.o.
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ kicker, title, lead }: { kicker: string; title: string; lead: string }) {
  return (
    <section className="border-b border-line bg-bg-alt px-5 py-20 text-center md:py-28">
      <p className="text-xs tracking-[0.18em] text-accent uppercase">{kicker}</p>
      <h1 className="mt-3 font-display text-5xl md:text-6xl">{title}</h1>
      <p className="mx-auto mt-4 max-w-xl text-muted">{lead}</p>
    </section>
  );
}
