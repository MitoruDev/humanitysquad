"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
      {/* Modern gradient mesh background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[length:120px_120px] opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-white via-[var(--secondary)] to-white/90 bg-clip-text text-transparent">
            Humanity Squad
          </span>
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-xl text-white/95 sm:text-2xl"
        >
          Gemeinsam die Welt verbessern
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-2 text-base text-[var(--foreground-muted)] sm:text-lg"
        >
          Unsere Generation schaut nicht weg.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-10"
        >
          <a
            href="http://whatsapp.humanitysquad.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            style={{
              background: "var(--gradient-cta)",
              boxShadow: "0 0 32px var(--glow-secondary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gradient-cta-hover)";
              e.currentTarget.style.boxShadow = "0 0 40px var(--glow-secondary), 0 0 60px rgba(232, 121, 168, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gradient-cta)";
              e.currentTarget.style.boxShadow = "0 0 32px var(--glow-secondary)";
            }}
          >
            Jetzt Mitmachen!
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
