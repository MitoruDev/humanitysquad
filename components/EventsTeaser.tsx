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

export function EventsTeaser() {
  const next = getNextEinsatz();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="px-4 py-16 sm:px-6"
    >
      <div
        className="mx-auto max-w-2xl rounded-2xl border border-[var(--border-accent)] p-8 text-center backdrop-blur-sm"
        style={{ background: "var(--gradient-card)" }}
      >
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Nächste Einsätze
        </h2>
        {next ? (
          <>
            <p className="mt-4 text-lg text-[var(--foreground-muted)]">
              <span className="font-semibold text-[var(--secondary)]">
                {formatDate(next.date)}
              </span>{" "}
              – {next.title}
              {next.location && ` in ${next.location}`}
            </p>
            <Link
              href="/einsaetze"
              className="mt-6 inline-block rounded-full border border-[var(--border-accent)] bg-[var(--primary)]/30 px-6 py-3 font-medium text-white transition hover:border-[var(--secondary)]/50 hover:bg-[var(--primary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            >
              Alle Einsätze anzeigen
            </Link>
          </>
        ) : (
          <p className="mt-4 text-[var(--foreground-muted)]">
            Neue Termine folgen. Schau bald wieder vorbei!
          </p>
        )}
      </div>
    </motion.section>
  );
}
