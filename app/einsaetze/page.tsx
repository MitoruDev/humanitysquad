import type { Metadata } from "next";
import { getEinsaetzeTimelineOrder } from "@/content/einsaetze";
import { EventCard } from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Einsätze",
  description:
    "Alle Einsätze und Aktionen von Humanity Squad – Vergangene und geplante Termine.",
};

export default function EinsaetzePage() {
  const einsaetze = getEinsaetzeTimelineOrder();

  return (
    <div className="relative min-h-screen">
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
        <header className="mb-16 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Unsere Einsätze
          </h1>
          <p className="mt-3 text-[var(--foreground-muted)]">
            Vergangene Aktionen und geplante Termine – von unten nach oben
            (älteste zuerst).
          </p>
        </header>

        {/* Timeline: flex-col-reverse = unten alt, oben neu */}
        <ul className="flex flex-col-reverse gap-10 sm:gap-14">
          {einsaetze.map((einsatz, index) => (
            <li key={einsatz.id} className="relative">
              <EventCard
                event={einsatz}
                mediaPosition={index % 2 === 0 ? "left" : "right"}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
