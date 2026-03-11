import { Hero } from "@/components/Hero";
import { StatsBanner } from "@/components/StatsBanner";
import { Mission } from "@/components/Mission";
import { WhatWeDo } from "@/components/WhatWeDo";
import { EventsTeaser } from "@/components/EventsTeaser";
import { TeamSlider } from "@/components/TeamSlider";
import { CTA } from "@/components/CTA";

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
