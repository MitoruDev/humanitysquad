"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useMotionValueEvent, animate } from "motion/react";
import { getEinsatzStats } from "@/content/einsaetze";

const easeOut = [0.16, 1, 0.3, 1] as const;
const COUNT_DURATION = 1.2;

/** Extrahiert Zahl und Suffix aus z.B. "371 €" oder "500 €+" */
function parseTotalRaised(str: string): { value: number; suffix: string } {
  const match = str.match(/^(\d+)\s*(.*)$/);
  if (!match) return { value: 0, suffix: str };
  return { value: parseInt(match[1], 10), suffix: match[2].trim() ? ` ${match[2]}` : "" };
}

export function StatsBanner() {
  const { count, totalRaisedDisplay } = getEinsatzStats();
  const { value: totalRaisedValue, suffix: totalRaisedSuffix } = parseTotalRaised(totalRaisedDisplay);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const countValue = useMotionValue(0);
  const raisedValue = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);
  const [displayRaised, setDisplayRaised] = useState(0);

  useMotionValueEvent(countValue, "change", (v) => setDisplayCount(Math.round(v)));
  useMotionValueEvent(raisedValue, "change", (v) => setDisplayRaised(Math.round(v)));

  useEffect(() => {
    if (!isInView) return;
    const c1 = animate(countValue, count, {
      duration: COUNT_DURATION,
      ease: "easeOut",
    });
    const c2 = animate(raisedValue, totalRaisedValue, {
      duration: COUNT_DURATION,
      ease: "easeOut",
    });
    return () => {
      c1.stop();
      c2.stop();
    };
  }, [isInView, count, countValue, totalRaisedValue, raisedValue]);

  return (
    <motion.section
      ref={sectionRef}
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
          <span className="text-[var(--secondary)]">{displayCount}</span>{" "}
          Einsätze
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
          <span className="text-[var(--secondary)]">{displayRaised}{totalRaisedSuffix}</span> gesammelt
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
