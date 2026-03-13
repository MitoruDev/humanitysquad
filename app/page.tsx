import dynamic from "next/dynamic";
import { Hero } from "@/components/Hero";
import { StatsBanner } from "@/components/StatsBanner";
import { Mission } from "@/components/Mission";
import { WhatWeDo } from "@/components/WhatWeDo";
import { EventsTeaser } from "@/components/EventsTeaser";
import { CTA } from "@/components/CTA";

const TeamSlider = dynamic(() =>
  import("@/components/TeamSlider").then((m) => ({ default: m.TeamSlider }))
);

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <Mission />
      <WhatWeDo />
      <EventsTeaser />
      <TeamSlider />
      <CTA />
    </>
  );
}
