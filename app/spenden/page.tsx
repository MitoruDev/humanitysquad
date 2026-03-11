import type { Metadata } from "next";
import Link from "next/link";
import { PayPalIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Spenden",
  description:
    "Unterstütze Humanity Squad mit einer Spende – für Lebensmittel, Kleidung und Aktionen für Bedürftige in NRW.",
};

const PAYPAL_DONATE_URL =
  "http://paypal.humanitysquad.de"; // Durch euren echten PayPal-Spendenlink ersetzen

export default function SpendenPage() {
  return (
    <div className="relative min-h-[80vh]">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl px-4 pt-28 pb-16 sm:px-6">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Unterstütze uns
        </h1>
        <p className="mt-4 text-lg text-[var(--foreground-muted)]">
          Mit deiner Spende hilfst du uns, Lebensmittel, Mützen, Süßigkeiten und
          selbstgebackene Kekse an Bedürftige zu verteilen und weitere Aktionen
          in NRW umzusetzen. Jeder Beitrag zählt.
        </p>

        {/* Card with PayPal CTA */}
        <div
          className="mt-12 rounded-3xl border border-[var(--border-accent)] p-8 sm:p-10"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="flex flex-col items-center text-center">
            <div className="rounded-2xl bg-white p-4">
              <PayPalIcon className="h-12 w-12 text-[#0070ba] sm:h-14 sm:w-14" />
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white sm:text-2xl">
              Sicher spenden mit PayPal
            </h2>
            <p className="mt-2 text-sm text-[var(--foreground-muted)]">
              Du wirst zu PayPal weitergeleitet. Die Zahlung ist sicher und
              unkompliziert.
            </p>
            <a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              style={{
                background: "var(--gradient-cta)",
                boxShadow: "0 0 32px var(--glow-secondary)",
              }}
            >
              <PayPalIcon className="h-6 w-6 text-white" />
              Jetzt mit PayPal spenden
            </a>
          </div>
        </div>

        {/* Short trust line */}
        <p className="mt-8 text-center text-sm text-[var(--foreground-muted)]">
          100 % deiner Spende kommt unseren Aktionen zugute.
        </p>
        <p className="mt-4 text-center text-sm text-[var(--foreground-muted)]">
          Fragen?{" "}
          <a
            href="mailto:contact@humanitysquad.de"
            className="text-[var(--secondary)] transition hover:underline"
          >
            contact@humanitysquad.de
          </a>
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 text-sm text-[var(--secondary)] transition hover:underline"
        >
          <span aria-hidden>←</span> Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
}
