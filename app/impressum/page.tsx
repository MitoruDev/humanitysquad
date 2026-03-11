import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und rechtliche Angaben von Humanity Squad.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Impressum</h1>
      <p className="mt-2 text-sm text-[var(--foreground-muted)]">
        Angaben gemäß § 5 TMG
      </p>

      <section className="mt-8 space-y-6 text-[var(--foreground-muted)]">
        <div>
          <h2 className="text-lg font-semibold text-white">Anbieter</h2>
          <p className="mt-1">
            Humanity Squad
            <br />
            <span className="text-sm">Private Initiative ohne Vereinssitz</span>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Kontakt</h2>
          <p className="mt-1">
            E-Mail:{" "}
            <a
              href="mailto:contact@humanitysquad.de"
              className="text-[var(--secondary)] transition hover:underline"
            >
              contact@humanitysquad.de
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">
            Verantwortlich für den Inhalt
          </h2>
          <p className="mt-1">
            Caner Elmas
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">
            Haftung für Inhalte
          </h2>
          <p className="mt-1 text-sm">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten verantwortlich. Für die Inhalte verlinkter Seiten
            übernehmen wir keine Gewähr.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">
            Haftung für Links
          </h2>
          <p className="mt-1 text-sm">
            Unser Angebot enthält Links zu externen Websites. Für die Inhalte
            der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Urheberrecht</h2>
          <p className="mt-1 text-sm">
            Die Inhalte dieser Seite unterliegen dem deutschen Urheberrecht.
          </p>
        </div>
      </section>
    </div>
  );
}
