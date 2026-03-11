export interface EinsatzMedia {
  type: "image" | "video";
  url: string;
}

export interface Einsatz {
  id: string;
  date: string; // ISO
  title: string;
  location: string;
  description?: string;
  amountRaised?: number; // in Euro
  isPlanned?: boolean;
  /** Single media or multiple (e.g. gallery for one event) */
  media?: EinsatzMedia | EinsatzMedia[];
}

export const einsaetze: Einsatz[] = [
  {
    id: "1",
    date: "2025-12-19",
    title: "Erster Einsatz",
    location: "Dortmund",
    description: "Verteilung von Lebensmitteln, Mützen, Süßigkeiten und selbstgebackenen Keksen.",
    isPlanned: false,
    media: [
      { type: "image", url: "/211225-dortmund.png" },
      { type: "image", url: "/201226-dortmund2.png" },
    ],
  },
  {
    id: "2",
    date: "2026-03-07",
    title: "Waffeln verteilt",
    location: "NRW",
    description: "Waffelverkauf zugunsten Bedürftiger.",
    amountRaised: 380,
    isPlanned: false,
    media: [
      { type: "image", url: "/070326-waffel.jpeg" },
      { type: "video", url: "/070326-waffel.mp4" },
    ],
  },
  {
    id: "3",
    date: "2026-03-14",
    title: "Nächster Einsatz",
    location: "NRW",
    description: "Geplante Verteilung – Details folgen.",
    isPlanned: true,
  },
];

/** Nächster geplanter Einsatz (für Teaser auf Landing) */
export function getNextEinsatz(): Einsatz | undefined {
  const now = new Date();
  return einsaetze
    .filter((e) => e.isPlanned || new Date(e.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())[0];
}

/** Sortiert: neueste/kommende zuerst */
export function getEinsaetzeSorted(): Einsatz[] {
  return [...einsaetze].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Timeline: unten alt, oben neu – älteste zuerst */
export function getEinsaetzeTimelineOrder(): Einsatz[] {
  return [...einsaetze].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
