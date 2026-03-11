"use client";

import { motion } from "motion/react";
import { getEinsatzStats } from "@/content/einsaetze";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function StatsBanner() {
  const { count, totalRaisedDisplay } = getEinsatzStats();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: easeOut }}
      className="border-y border-[var(--border)] bg-[var(--background-elevated)]/80 py-6 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4 text-center sm:gap-x-12 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.05, ease: easeOut }}
          className="text-lg font-semibold text-white sm:text-xl"
        >
          <span className="text-[var(--secondary)]">{count}</span> Einsätze
        </motion.span>
        <span className="hidden text-[var(--foreground-muted)] sm:inline" aria-hidden>
          ·
        </span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.12, ease: easeOut }}
          className="text-lg font-semibold text-white sm:text-xl"
        >
          <span className="text-[var(--secondary)]">{totalRaisedDisplay}</span> gesammelt
        </motion.span>
        <span className="hidden text-[var(--foreground-muted)] sm:inline" aria-hidden>
          ·
        </span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.19, ease: easeOut }}
          className="text-lg font-semibold text-[var(--foreground-muted)] sm:text-xl"
        >
          Gemeinsam für NRW
        </motion.span>
      </div>
    </motion.section>
  );
}
