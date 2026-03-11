"use client";

import { motion } from "motion/react";

export function Mission() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Aktiv für einen guten Zweck
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-[var(--foreground-muted)]">
          Wir sind Humanity Squad – eine Initiative aus NRW. Wir verteilen
          Lebensmittel, Mützen, Süßigkeiten und selbstgebackene Kekse an
          Bedürftige und setzen uns mit coolen Events und Projekten dafür ein,
          dass unsere Generation nicht wegschaut. Gemeinsam die Welt verbessern
          – mit euch.
        </p>
      </div>
    </motion.section>
  );
}
