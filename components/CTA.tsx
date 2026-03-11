"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { InstagramIcon } from "@/components/Icons";

export function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="border-t border-[var(--border)] px-4 py-16 sm:px-6"
      style={{ background: "var(--gradient-card)" }}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Mach mit!
        </h2>
        <p className="mt-4 text-lg text-[var(--foreground-muted)]">
          Folge uns auf Instagram, tritt der WhatsApp-Community bei oder
          unterstütze uns bei den nächsten Einsätzen.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/spenden"
            className="rounded-full px-6 py-3 font-medium text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            style={{
              background: "var(--gradient-cta)",
              boxShadow: "0 0 24px var(--glow-secondary)",
            }}
          >
            Unterstütze uns
          </Link>
          <a
            href="http://instagram.humanitysquad.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-transparent px-6 py-3 font-medium text-[var(--secondary)] transition hover:border-[var(--secondary)]/60 hover:bg-[var(--secondary)]/10 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </a>
          <Link
            href="/einsaetze"
            className="rounded-full border border-[var(--border)] bg-[var(--background-elevated)] px-6 py-3 font-medium text-white transition hover:border-[var(--border-accent)] hover:bg-[var(--primary)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
          >
            Einsätze ansehen
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
