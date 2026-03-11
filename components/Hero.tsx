"use client";

import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 sm:px-6">
      {/* Gradient mesh background */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="hero-orb hero-orb-1" aria-hidden />
      <div className="hero-orb hero-orb-2" aria-hidden />
      <div className="hero-orb hero-orb-3" aria-hidden />
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
        <h1 className="text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl">
          <span
            className="inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #fff 0%, #c4a8d9 50%, #fff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Humanity Squad
          </span>
        </h1>
        {/* Decorative line under title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mx-auto mt-4 h-1 w-48 origin-center rounded-full opacity-80"
          style={{
            background: "linear-gradient(90deg, transparent, var(--secondary), transparent)",
          }}
          aria-hidden
        />
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-5 text-xl text-white/95 sm:text-2xl"
        >
          Gemeinsam die Welt verbessern
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-2 text-base text-[var(--foreground-muted)] sm:text-lg"
        >
          Unsere Generation schaut nicht weg.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.4 }}
          className="mt-10"
        >
          <motion.a
            href="http://whatsapp.humanitysquad.de"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center rounded-full px-8 py-4 text-lg font-semibold text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
            style={{
              background: "var(--gradient-cta)",
              boxShadow: "0 0 32px var(--glow-secondary)",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Jetzt Mitmachen!
          </motion.a>
        </motion.div>
      </motion.div>
      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <motion.a
          href="#mission"
          className="flex flex-col items-center gap-1 text-[var(--foreground-muted)] transition hover:text-[var(--secondary)]"
          aria-label="Nach unten scrollen"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
