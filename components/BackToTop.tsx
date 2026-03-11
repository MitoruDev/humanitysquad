"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const SCROLL_THRESHOLD = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          exit={{ opacity: 0, y: 12 }}
          transition={{
            opacity: { duration: 0.25 },
            y: {
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.4,
            },
          }}
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-accent)] shadow-lg transition focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:ring-offset-2 focus:ring-offset-[var(--background)]"
          style={{
            background: "var(--gradient-card)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 0 20px var(--glow-secondary)",
          }}
          aria-label="Nach oben scrollen"
        >
          <svg
            className="h-6 w-6 text-[var(--secondary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
