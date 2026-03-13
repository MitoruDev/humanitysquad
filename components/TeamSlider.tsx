"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { teamMembers } from "@/content/team";

const AUTO_ADVANCE_MS = 4500;
const N = teamMembers.length;
const extendedMembers = [...teamMembers, ...teamMembers];

function TeamCard({
  member,
  className,
  style,
  priority = false,
}: {
  member: (typeof teamMembers)[0];
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article
      className={`flex shrink-0 flex-col items-center rounded-2xl border border-[var(--border-accent)] p-6 transition hover:border-[var(--secondary)]/40 md:w-1/3 ${className ?? ""}`}
      style={{ background: "var(--gradient-card)", ...style }}
    >
      <div
        className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-[var(--border-accent)] sm:h-44 sm:w-44"
        style={{ boxShadow: "0 0 32px var(--glow-secondary)" }}
      >
        {/* Placeholder until image has loaded */}
        {!loaded && (
          <div
            className="absolute inset-0 animate-pulse rounded-full bg-[var(--primary)]/30"
            aria-hidden
          />
        )}
        <Image
          src={member.image}
          alt={member.fullName ?? member.name}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 176px, 160px"
          priority={priority}
          onLoad={() => setLoaded(true)}
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-white">{member.name}</p>
      <p className="mt-1 text-center text-sm text-[var(--foreground-muted)]">
        {member.shortSentence}
      </p>
    </article>
  );
}

export function TeamSlider() {
  const [index, setIndex] = useState(0);
  const [noTransition, setNoTransition] = useState(false);
  const [intervalKey, setIntervalKey] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const resetAutoAdvance = () => setIntervalKey((k) => k + 1);

  const TRANSITION_MS = 500;

  // When index reaches N, after animation finishes reset to 0 without transition
  useEffect(() => {
    if (index < N) return;
    const t = setTimeout(() => {
      setNoTransition(true);
      setIndex(0);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    }, TRANSITION_MS);
    return () => clearTimeout(t);
  }, [index]);

  // Auto-advance: one step to the right every interval (resets when intervalKey changes)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % (N + 1));
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [intervalKey]);

  const goNext = () => {
    setIndex((i) => (i + 1) % (N + 1));
    resetAutoAdvance();
  };
  const goNextMobile = () => {
    setIndex((i) => (i + 1) % N);
    resetAutoAdvance();
  };
  const goPrevMobile = () => {
    setIndex((i) => (i - 1 + N) % N);
    resetAutoAdvance();
  };

  const goPrev = () => {
    setIndex((i) => (i - 1 + N) % N);
    resetAutoAdvance();
  };

  const goToIndex = (i: number) => {
    setIndex(i);
    resetAutoAdvance();
  };

  // Strip has 2*N cards; each card is 1/3 of container. So one card = 100/(2*N) % of strip width.
  const translateXPercent = (index * 100) / (2 * N);

  const easeOut = [0.16, 1, 0.3, 1] as const;

  return (
    <section
      id="team"
      className="border-t border-[var(--border)] px-4 py-16 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: easeOut }}
          className="text-center text-2xl font-bold text-white sm:text-3xl"
        >
          Unser Team
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.15, ease: easeOut }}
          className="mt-12"
        >
        {/* Mobile: single card carousel */}
        <div className="md:hidden">
          <div className="flex justify-center">
            <TeamCard
              member={teamMembers[index % N]}
              priority={index % N < 4}
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrevMobile}
              className="rounded-full border border-[var(--border-accent)] bg-[var(--primary)]/30 px-5 py-2 text-sm font-medium text-white transition hover:border-[var(--secondary)]/50 hover:bg-[var(--primary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              aria-label="Vorheriges Teammitglied"
            >
              Zurück
            </button>
            <button
              type="button"
              onClick={goNextMobile}
              className="rounded-full border border-[var(--border-accent)] bg-[var(--primary)]/30 px-5 py-2 text-sm font-medium text-white transition hover:border-[var(--secondary)]/50 hover:bg-[var(--primary)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
              aria-label="Nächstes Teammitglied"
            >
              Weiter
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index % N
                    ? "bg-[var(--secondary)] shadow-[0_0_8px_var(--glow-secondary)]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Teammitglied ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: 3 cards, sliding strip, auto + click */}
        <div className="relative hidden md:block" ref={containerRef}>
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{
                width: `${extendedMembers.length * (100 / 3)}%`,
                x: noTransition ? 0 : `-${translateXPercent}%`,
                transition: noTransition ? "none" : "transform 0.5s ease-in-out",
              }}
            >
              {extendedMembers.map((member, idx) => (
                <TeamCard
                  key={`team-${idx}`}
                  member={member}
                  className="shrink-0"
                  style={{ width: `${100 / (2 * N)}%` }}
                  priority={idx < 4}
                />
              ))}
            </motion.div>
          </div>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border-accent)] bg-[var(--background)]/90 p-2 text-white shadow-lg backdrop-blur transition hover:border-[var(--secondary)]/50 hover:bg-[var(--primary)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            aria-label="Ein Teammitglied zurück"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-[var(--border-accent)] bg-[var(--background)]/90 p-2 text-white shadow-lg backdrop-blur transition hover:border-[var(--secondary)]/50 hover:bg-[var(--primary)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
            aria-label="Ein Teammitglied weiter"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="mt-6 flex justify-center gap-2">
            {teamMembers.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToIndex(i)}
                className={`h-2 w-2 rounded-full transition ${
                  i === index % N
                    ? "bg-[var(--secondary)] shadow-[0_0_8px_var(--glow-secondary)]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Zu Teammitglied ${i + 1}`}
              />
            ))}
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
