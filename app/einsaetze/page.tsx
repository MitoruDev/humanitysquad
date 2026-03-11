import type { Metadata } from "next";
import { getEinsaetzeTimelineOrder } from "@/content/einsaetze";
import { EinsaetzePageContent } from "@/components/EinsaetzePageContent";

export const metadata: Metadata = {
  title: "Einsätze",
  description:
    "Alle Einsätze und Aktionen von Humanity Squad – Vergangene und geplante Termine.",
};

export default function EinsaetzePage() {
  const einsaetze = getEinsaetzeTimelineOrder();

  return <EinsaetzePageContent einsaetze={einsaetze} />;
}
