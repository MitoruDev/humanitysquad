import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von Humanity Squad.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-28 pb-16 sm:px-6">
      <h1 className="text-3xl font-bold text-white">Datenschutzerklärung</h1>

      <section className="mt-8 space-y-6 text-[var(--foreground-muted)]">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Verantwortliche Stelle
          </h2>
          <p className="mt-1">
            Humanity Squad
            <br />
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
            Erhebung und Speicherung personenbezogener Daten
          </h2>
          <p className="mt-1 text-sm">
            Beim Kontakt per E-Mail werden Ihre E-Mail-Adresse und Ihre
            Nachricht verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
            DSGVO (berechtigtes Interesse an der Bearbeitung von Anfragen) bzw.
            Ihre Einwilligung. Die Daten werden gelöscht, sobald die
            Korrespondenz erledigt ist, sofern keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Hosting</h2>
          <p className="mt-1 text-sm">
            Diese Seite wird bei Vercel Inc. gehostet. Weitere Informationen zum
            Datenschutz des Anbieters finden Sie in der{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--secondary)] transition hover:underline"
            >
              Datenschutzerklärung von Vercel
            </a>
            .
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Cookies</h2>
          <p className="mt-1 text-sm">
            Es werden keine Cookies gesetzt.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">
            Externe Dienste / Social Media
          </h2>
          <p className="mt-1 text-sm">
            Auf dieser Seite werden Links zu Instagram und WhatsApp
            angeboten. Beim Klick auf diese Links gelangen Sie zu externen
            Diensten. Für deren Umgang mit Ihren Daten ist der jeweilige Anbieter
            verantwortlich.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">
            Rechte der Betroffenen
          </h2>
          <p className="mt-1 text-sm">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Widerspruch sowie auf Beschwerde bei
            einer Aufsichtsbehörde (Art. 15–22 DSGVO).
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-white">Änderungen</h2>
          <p className="mt-1 text-sm">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen.
          </p>
        </div>
      </section>
    </div>
  );
}
