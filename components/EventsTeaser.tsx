"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { getNextEinsatz } from "@/content/einsaetze";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const easeOut = [0.16, 1, 0.3, 1] as const;

export function EventsTeaser() {
  const next = getNextEinsatz();
  return (
    <section className="px-4 py-16 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 56, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.75, ease: easeOut }}
        className="mx-auto max-w-2xl rounded-2xl border border-[var(--border-accent)] p-8 text-center backdrop-blur-sm"
        style={{ background: "var(--gradient-card)" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
          className="text-xl font-bold text-white sm:text-2xl"
        >
          Nächste Einsätze
        </motion.h2>
        {next ? (
          <>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
              className="mt-4 text-lg text-[var(--foreground-muted)]"
            >
              <span className="font-semibold text-[var(--secondary)]">
                {formatDate(next.date)}
              </span>{" "}
              – {next.title}
              {next.location && ` in ${next.location}`}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: easeOut }}
            >
              <Link
                href="/einsaetze"
                className="mt-6 inline-block rounded-full border border-[var(--border-accent)] bg-[var(--primary)]/30 px-6 py-3 font-medium text-white transition hover:border-[var(--secondary)]/50 hover:bg-[var(--primary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
              >
                Alle Einsätze anzeigen
              </Link>
            </motion.div>
          </>
        ) : (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
            className="mt-4 text-[var(--foreground-muted)]"
          >
            Neue Termine folgen. Schau bald wieder vorbei!
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
