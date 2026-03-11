import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { WhatWeDo } from "@/components/WhatWeDo";
import { EventsTeaser } from "@/components/EventsTeaser";
import { TeamSlider } from "@/components/TeamSlider";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <WhatWeDo />
      <EventsTeaser />
      <TeamSlider />
      <CTA />
    </>
  );
}
