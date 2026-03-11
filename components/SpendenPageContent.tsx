"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PayPalIcon } from "@/components/Icons";

const easeOut = [0.16, 1, 0.3, 1] as const;

const PAYPAL_DONATE_URL = "http://paypal.humanitysquad.de";

/** Aktuell per PayPal eingegangen – manuell anpassen */
const GOAL_CURRENT = 14;
/** Spendenziel in Euro */
const GOAL_TARGET = 250;

export function SpendenPageContent() {
  const percent = Math.min(100, (GOAL_CURRENT / GOAL_TARGET) * 100);
  const remaining = Math.max(0, GOAL_TARGET - GOAL_CURRENT);

  return (
    <div className="relative min-h-[80vh]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl px-4 pt-28 pb-20 sm:px-6">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Unterstütze uns
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          className="mt-4 text-lg text-[var(--foreground-muted)]"
        >
          Mit deiner Spende hilfst du uns, Lebensmittel, Mützen, Süßigkeiten und
          selbstgebackene Kekse an Bedürftige zu verteilen und weitere Aktionen
          in NRW umzusetzen. Jeder Beitrag zählt.
        </motion.p>

        {/* PayPal Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          className="mt-12 rounded-3xl border border-[var(--border-accent)] p-8 sm:p-10"
          style={{
            background: "var(--gradient-card)",
            boxShadow: "0 0 40px rgba(91, 61, 122, 0.15)",
          }}
        >
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
              className="rounded-2xl bg-white/95 p-4 shadow-lg"
            >
              <PayPalIcon className="h-12 w-12 text-[#0070ba] sm:h-14 sm:w-14" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28, ease: easeOut }}
              className="mt-6 text-xl font-semibold text-white sm:text-2xl"
            >
              Sicher spenden mit PayPal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
              className="mt-2 text-sm text-[var(--foreground-muted)]"
            >
              Du wirst zu PayPal weitergeleitet. Die Zahlung ist sicher und
              unkompliziert.
            </motion.p>
            <motion.a
              href={PAYPAL_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.42, ease: easeOut }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 text-lg font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              style={{
                background: "var(--gradient-cta)",
                boxShadow: "0 0 32px var(--glow-secondary)",
              }}
            >
              <PayPalIcon className="h-6 w-6 text-white" />
              Jetzt mit PayPal spenden
            </motion.a>
          </div>
        </motion.div>

        {/* Spendenziel */}
        <motion.section
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
          className="mt-10 rounded-2xl border border-[var(--border-accent)] p-6 sm:p-8"
          style={{ background: "var(--gradient-card)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--secondary)]">
                Spendenziel
              </p>
              <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                {GOAL_CURRENT.toLocaleString("de-DE")} €{" "}
                <span className="text-[var(--foreground-muted)] font-normal">
                  von {GOAL_TARGET.toLocaleString("de-DE")} €
                </span>
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-[var(--primary)]/40 px-4 py-2 text-lg font-bold text-[var(--secondary)]">
              {percent.toFixed(0)} %
            </span>
          </div>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[var(--background-elevated)]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percent}%` }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3, ease: easeOut }}
              className="h-full rounded-full"
              style={{
                background: "var(--gradient-cta)",
                boxShadow: "0 0 20px var(--glow-secondary)",
              }}
            />
          </div>
          <p className="mt-3 text-sm text-[var(--foreground-muted)]">
            Noch{" "}
            <span className="font-semibold text-[var(--secondary)]">
              {remaining.toLocaleString("de-DE")} €
            </span>{" "}
            bis zum Ziel.
          </p>
        </motion.section>

        {/* Trust & Contact */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
          className="mt-10 text-center text-sm text-[var(--foreground-muted)]"
        >
          100 % deiner Spende kommt unseren Aktionen zugute.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.22, ease: easeOut }}
          className="mt-4 text-center text-sm text-[var(--foreground-muted)]"
        >
          Fragen?{" "}
          <a
            href="mailto:contact@humanitysquad.de"
            className="text-[var(--secondary)] transition hover:underline"
          >
            contact@humanitysquad.de
          </a>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] px-5 py-2.5 text-sm text-[var(--foreground-muted)] transition hover:border-[var(--secondary)]/40 hover:text-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          >
            <span aria-hidden>←</span> Zurück zur Startseite
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
