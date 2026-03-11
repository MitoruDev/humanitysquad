"use client";

import { motion } from "motion/react";
import { getEinsatzStats } from "@/content/einsaetze";

export function StatsBanner() {
  const { count, totalRaisedDisplay } = getEinsatzStats();

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="border-y border-[var(--border)] bg-[var(--background-elevated)]/80 py-6 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-center sm:gap-x-12 sm:px-6">
        <span className="text-lg font-semibold text-white sm:text-xl">
          <span className="text-[var(--secondary)]">{count}</span> Einsätze
        </span>
        <span className="hidden text-[var(--foreground-muted)] sm:inline" aria-hidden>
          ·
        </span>
        <span className="text-lg font-semibold text-white sm:text-xl">
          <span className="text-[var(--secondary)]">{totalRaisedDisplay}</span> gesammelt
        </span>
        <span className="hidden text-[var(--foreground-muted)] sm:inline" aria-hidden>
          ·
        </span>
        <span className="text-lg font-semibold text-[var(--foreground-muted)] sm:text-xl">
          Gemeinsam für NRW
        </span>
      </div>
    </motion.section>
  );
}
