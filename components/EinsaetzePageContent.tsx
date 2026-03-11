"use client";

import { motion } from "motion/react";
import type { Einsatz } from "@/content/einsaetze";
import { EventCard } from "@/components/EventCard";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface EinsaetzePageContentProps {
  einsaetze: Einsatz[];
}

export function EinsaetzePageContent({ einsaetze }: EinsaetzePageContentProps) {
  return (
    <div className="relative min-h-screen">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
        <header className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="text-3xl font-bold text-white sm:text-4xl"
          >
            Unsere Einsätze
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12, ease: easeOut }}
            className="mt-3 text-[var(--foreground-muted)]"
          >
            Vergangene Aktionen und geplante Termine – von unten nach oben
            (älteste zuerst).
          </motion.p>
        </header>

        <ul className="flex flex-col-reverse gap-10 sm:gap-14">
          {einsaetze.map((einsatz, index) => (
            <motion.li
              key={einsatz.id}
              initial={{ opacity: 0, y: 56, x: index % 2 === 0 ? -32 : 32 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: easeOut,
              }}
              className="relative"
            >
              <EventCard
                event={einsatz}
                mediaPosition={index % 2 === 0 ? "left" : "right"}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
