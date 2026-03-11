"use client";

import { motion } from "motion/react";

const items = [
  "Lebensmittel verteilen",
  "Mützen & Kleidung",
  "Süßigkeiten & Kekse",
  "Selbstgebackenes",
  "Coole Events & Projekte",
];

export function WhatWeDo() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="border-y border-[var(--border)] px-4 py-16 sm:px-6"
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Was wir machen
        </h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="rounded-full border border-[var(--border-accent)] bg-[var(--background-elevated)]/80 px-5 py-2.5 text-[var(--foreground)] backdrop-blur-sm transition hover:border-[var(--secondary)]/40 hover:bg-[var(--primary)]/20"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
