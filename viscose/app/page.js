"use client";

import { useState, useCallback, useRef } from "react";
import LandingEngine from "@/components/landing/LandingEngine";
import Carousel from "@/components/Carousel";

export default function Page() {
  const [isCarouselActive, setIsCarouselActive] = useState(false);
  const carouselSectionRef = useRef(null);

  const handleCarouselActivate = useCallback((active) => {
    setIsCarouselActive(active);
  }, []);

  const handleReturnToLanding = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <main className="relative w-full bg-[#0e0e0d] min-h-screen text-[#efece6]">
      {/* Pinned Scrollytelling Landing Experience (Aurexis Digital Studio) */}
      <LandingEngine
        onCarouselActivate={handleCarouselActivate}
        scrollDistance="360vh"
      />

      {/* Section Anchor for Viscose 3D Carousel Repertory */}
      <section
        id="portfolio"
        ref={carouselSectionRef}
        className="relative min-h-screen w-full"
      >
        <Carousel
          active={isCarouselActive}
          onReturnToLanding={handleReturnToLanding}
        />
      </section>
    </main>
  );
}
