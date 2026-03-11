import type { Metadata } from "next";
import { SpendenPageContent } from "@/components/SpendenPageContent";

export const metadata: Metadata = {
  title: "Spenden",
  description:
    "Unterstütze Humanity Squad mit einer Spende – für Lebensmittel, Kleidung und Aktionen für Bedürftige in NRW.",
};

export default function SpendenPage() {
  return <SpendenPageContent />;
}
