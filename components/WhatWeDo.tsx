"use client";

import { motion } from "motion/react";

const items = [
  "Lebensmittel verteilen",
  "Mützen & Kleidung",
  "Süßigkeiten & Kekse",
  "Selbstgebackenes",
  "Coole Events & Projekte",
];

const easeOut = [0.16, 1, 0.3, 1] as const;

export function WhatWeDo() {
  return (
    <section
      className="border-y border-[var(--border)] px-4 py-16 sm:px-6"
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Was wir machen
        </motion.h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: 0.1 + i * 0.06,
                ease: easeOut,
              }}
              className="rounded-full border border-[var(--border-accent)] bg-[var(--background-elevated)]/80 px-5 py-2.5 text-[var(--foreground)] backdrop-blur-sm transition hover:border-[var(--secondary)]/40 hover:bg-[var(--primary)]/20"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
