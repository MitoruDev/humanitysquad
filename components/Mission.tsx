"use client";

import { motion } from "motion/react";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Mission() {
  return (
    <motion.section
      id="mission"
      viewport={{ once: true, amount: 0.25 }}
      className="px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-2xl font-bold text-white sm:text-3xl"
        >
          Aktiv für einen guten Zweck
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          className="mt-4 text-lg leading-relaxed text-[var(--foreground-muted)]"
        >
          Wir sind Humanity Squad – eine Initiative aus NRW. Wir verteilen
          Lebensmittel, Mützen, Süßigkeiten und selbstgebackene Kekse an
          Bedürftige und setzen uns mit coolen Events und Projekten dafür ein,
          dass unsere Generation nicht wegschaut. Gemeinsam die Welt verbessern
          – mit euch.
        </motion.p>
      </div>
    </motion.section>
  );
}
