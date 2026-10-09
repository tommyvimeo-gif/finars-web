import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { PageHero, Shell } from "@/components/shell";

export const Route = createFileRoute("/kontakt")({ component: Contact });

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Shell>
      <PageHero
        kicker="Povežimo se"
        title="Kontakt"
        lead="Pišite nam ali nas pokličite — z veseljem odgovorimo na vaša vprašanja."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2">
        <div className="space-y-6 text-sm">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-accent" />
            <p>
              FIN ARS d.o.o.
              <br />
              Podvine 36
              <br />
              1410 Zagorje ob Savi
            </p>
          </div>
          <div className="flex gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-accent" />
            <p>
              info@finars.si
              <br />
              kristijan.cuk@finars.si
              <br />
              borut.dolar@finars.si
            </p>
          </div>
          <div className="flex gap-3">
            <Phone className="mt-0.5 size-5 shrink-0 text-accent" />
            <p>
              03 566 05 46
              <br />
              041 686 959 — Kristijan Čuk
              <br />
              031 370 172 — Borut Dolar
            </p>
          </div>
          <p className="text-muted">Pon–pet: 8:00–16:00</p>
        </div>
        {sent ? (
          <p className="rounded-card border border-line bg-surface p-8 font-display text-2xl">
            Hvala. Sporočilo je pripravljeno — pokličite nas, če želite hitrejši odgovor.
          </p>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <label className="text-sm text-muted">
              Ime in priimek
              <input required name="name" className="mt-1 w-full rounded-sm border border-line bg-surface px-3 py-3 text-fg" />
            </label>
            <label className="text-sm text-muted">
              E-pošta
              <input required type="email" name="email" className="mt-1 w-full rounded-sm border border-line bg-surface px-3 py-3 text-fg" />
            </label>
            <label className="text-sm text-muted">
              Sporočilo
              <textarea required name="message" rows={5} className="mt-1 w-full rounded-sm border border-line bg-surface px-3 py-3 text-fg" />
            </label>
            <button type="submit" className="min-h-12 bg-accent font-medium text-accent-ink">
              Pošlji sporočilo
            </button>
          </form>
        )}
      </section>
    </Shell>
  );
}
