"use client";

import { useState } from "react";
import Image from "next/image";
import type { Einsatz, EinsatzMedia } from "@/content/einsaetze";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

interface EventCardProps {
  event: Einsatz;
  mediaPosition: "left" | "right";
}

function SingleMedia({ item }: { item: EinsatzMedia }) {
  if (item.type === "video") {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-[var(--border-accent)] bg-black">
        <video
          src={item.url}
          controls
          className="h-full w-full object-contain"
          playsInline
        >
          Dein Browser unterstützt das Video-Format nicht.
        </video>
      </div>
    );
  }
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-[var(--border-accent)]">
      <Image
        src={item.url}
        alt=""
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

function EventMedia({ event }: { event: Einsatz }) {
  const media = event.media;
  if (!media) {
    return (
      <div
        className="aspect-video w-full min-h-[200px] rounded-xl border border-[var(--border-accent)] flex items-center justify-center text-[var(--foreground-muted)] text-sm"
        style={{ background: "var(--gradient-card)" }}
      >
        Kein Bild
      </div>
    );
  }
  const list = Array.isArray(media) ? media : [media];
  if (list.length === 0) {
    return (
      <div
        className="aspect-video w-full min-h-[200px] rounded-xl border border-[var(--border-accent)] flex items-center justify-center text-[var(--foreground-muted)] text-sm"
        style={{ background: "var(--gradient-card)" }}
      >
        Kein Bild
      </div>
    );
  }
  if (list.length === 1) {
    return <SingleMedia item={list[0]} />;
  }
  return (
    <EventMediaCarousel list={list} />
  );
}

function EventMediaCarousel({ list }: { list: EinsatzMedia[] }) {
  const [index, setIndex] = useState(0);
  const n = list.length;
  const goPrev = () => setIndex((i) => (i - 1 + n) % n);
  const goNext = () => setIndex((i) => (i + 1) % n);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl border border-[var(--border-accent)]">
        {list.map((item, i) => (
          <div
            key={i}
            className="relative aspect-video w-full shrink-0"
            style={{
              display: i === index ? "block" : "none",
            }}
          >
            {item.type === "video" ? (
              <video
                src={item.url}
                controls
                className="h-full w-full object-contain"
                playsInline
              >
                Dein Browser unterstützt das Video-Format nicht.
              </video>
            ) : (
              <Image
                src={item.url}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border-accent)] bg-[var(--background)]/90 p-2 text-white shadow-lg backdrop-blur transition hover:bg-[var(--primary)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
        aria-label="Vorheriges Bild"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-[var(--border-accent)] bg-[var(--background)]/90 p-2 text-white shadow-lg backdrop-blur transition hover:bg-[var(--primary)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--secondary)]"
        aria-label="Nächstes Bild"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="mt-2 flex justify-center gap-1.5">
        {list.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index
                ? "bg-[var(--secondary)] shadow-[0_0_6px_var(--glow-secondary)]"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Bild ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function EventCard({ event, mediaPosition }: EventCardProps) {
  const mediaBlock = <EventMedia event={event} />;
  const contentBlock = (
    <div className="flex flex-col justify-center p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <time
          dateTime={event.date}
          className="text-sm font-semibold text-[var(--secondary)]"
        >
          {formatDate(event.date)}
        </time>
        {event.isPlanned && (
          <span
            className="rounded-full px-3 py-0.5 text-xs font-medium text-[var(--secondary)]"
            style={{ background: "rgba(196, 168, 217, 0.2)" }}
          >
            Geplant
          </span>
        )}
      </div>
      <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
        {event.title}
      </h3>
      {event.location && (
        <p className="mt-1 text-[var(--foreground-muted)]">
          Ort: {event.location}
        </p>
      )}
      {event.description && (
        <p className="mt-4 text-[var(--foreground-muted)] leading-relaxed">
          {event.description}
        </p>
      )}
      {event.amountRaised != null && (
        <p className="mt-4 text-sm font-semibold text-[var(--secondary)]">
          {event.amountRaised} € eingenommen
        </p>
      )}
    </div>
  );

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border-accent)] transition hover:border-[var(--secondary)]/40 sm:flex-row"
      style={{ background: "var(--gradient-card)" }}
    >
      {mediaPosition === "left" ? (
        <>
          <div className="w-full shrink-0 sm:w-[45%] sm:max-w-md">
            {mediaBlock}
          </div>
          <div className="min-w-0 flex-1">{contentBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 min-w-0 flex-1 sm:order-1">{contentBlock}</div>
          <div className="order-1 w-full shrink-0 sm:order-2 sm:w-[45%] sm:max-w-md">
            {mediaBlock}
          </div>
        </>
      )}
    </article>
  );
}
