"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LandingNav from "./LandingNav";
import HeroStage from "./HeroStage";
import TransformationStage from "./TransformationStage";
import ScrollProgress from "./ScrollProgress";

export default function LandingEngine({
  onProgressChange,
  onCarouselActivate,
  scrollDistance = "360vh",
}) {
  const pinContainerRef = useRef(null);
  const stickyStageRef = useRef(null);
  const heroRef = useRef(null);
  const objectContainerRef = useRef(null);
  const centralObjectRef = useRef(null);
  const layerRefs = useRef([]);
  const gridRef = useRef(null);
  const resolutionRef = useRef(null);

  const [isDark, setIsDark] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(0);
  const isDarkRef = useRef(false);

  useEffect(() => {
    // Register ScrollTrigger safely on client
    gsap.registerPlugin(ScrollTrigger);

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const isTablet =
      typeof window !== "undefined" &&
      window.innerWidth >= 768 &&
      window.innerWidth < 1025;

    // Responsive 3D transform values
    const rotX = isMobile ? 8 : isTablet ? 12 : 16;
    const rotY = isMobile ? -10 : isTablet ? -16 : -22;
    const rotZ = isMobile ? 2 : isTablet ? 3 : 5;
    const targetScale = isMobile ? 0.88 : isTablet ? 0.78 : 0.72;

    // Layer separation depths
    const layerDepths = isMobile
      ? [
          { z: 60, x: -15, y: -25 },
          { z: 20, x: -5, y: -8 },
          { z: -20, x: 5, y: 10 },
          { z: -60, x: 15, y: 28 },
        ]
      : isTablet
      ? [
          { z: 100, x: -35, y: -30 },
          { z: 35, x: -12, y: -10 },
          { z: -30, x: 12, y: 12 },
          { z: -95, x: 35, y: 32 },
        ]
      : [
          { z: 150, x: -65, y: -45 },
          { z: 50, x: -20, y: -15 },
          { z: -40, x: 20, y: 18 },
          { z: -130, x: 60, y: 48 },
        ];

    // GSAP context for isolated scoping and foolproof cleanup
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        // Accessible fallback mode: light to dark without high-frequency motion
        const simpleTl = gsap.timeline({
          scrollTrigger: {
            trigger: pinContainerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
              const p = self.progress;
              setCurrentProgress(p);
              const dark = p >= 0.45;
              if (dark !== isDarkRef.current) {
                isDarkRef.current = dark;
                setIsDark(dark);
              }
              if (onProgressChange) onProgressChange(p);
              if (p >= 0.95 && onCarouselActivate) onCarouselActivate(true);
            },
          },
        });

        simpleTl.to(stickyStageRef.current, {
          backgroundColor: "#0e0e0d",
          ease: "none",
        });
        return;
      }

      // Initial visual states
      gsap.set(stickyStageRef.current, { backgroundColor: "#f5f4ef" });
      gsap.set(heroRef.current, { opacity: 1, y: 0 });
      gsap.set(objectContainerRef.current, {
        scale: 1,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        transformOrigin: "center center",
      });
      gsap.set(gridRef.current, { opacity: 0 });
      gsap.set(resolutionRef.current, { opacity: 0, scale: 0.95 });

      layerRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, {
            opacity: 0,
            x: 0,
            y: 0,
            z: 0,
            scale: 1,
          });
        }
      });

      // Master ScrollTrigger timeline with Scrub
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: pinContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: stickyStageRef.current,
          pinSpacing: false,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            // Update local state throttled
            setCurrentProgress(p);

            // Light-to-dark theme toggle at 45% progress
            const shouldBeDark = p >= 0.42;
            if (shouldBeDark !== isDarkRef.current) {
              isDarkRef.current = shouldBeDark;
              setIsDark(shouldBeDark);
            }

            if (onProgressChange) onProgressChange(p);

            // Handoff threshold to Carousel
            if (p >= 0.94) {
              if (onCarouselActivate) onCarouselActivate(true);
            } else {
              if (onCarouselActivate) onCarouselActivate(false);
            }
          },
        },
      });

      // ==========================================
      // STAGE 01 -> 02: HERO TRANSFORMATION (0% - 40%)
      // ==========================================
      masterTl.addLabel("hero", 0);

      // Hero text recedes smoothly as camera/perspective engages
      masterTl.to(
        heroRef.current,
        {
          opacity: 0,
          y: -40,
          ease: "power2.inOut",
          duration: 0.28,
        },
        "hero+=0.06"
      );

      // Central object scales down and tilts into 3D isometric angle
      masterTl.to(
        objectContainerRef.current,
        {
          scale: targetScale,
          rotationX: rotX,
          rotationY: rotY,
          rotationZ: rotZ,
          ease: "power2.inOut",
          duration: 0.35,
        },
        "hero+=0.08"
      );

      // ==========================================
      // STAGE 03: LIGHT-TO-DARK TRANSITION (40% - 60%)
      // ==========================================
      masterTl.addLabel("transition", 0.38);

      masterTl.to(
        stickyStageRef.current,
        {
          backgroundColor: "#0e0e0d",
          ease: "power1.inOut",
          duration: 0.22,
        },
        "transition"
      );

      // Technical blueprint grid emerges in dark room
      masterTl.to(
        gridRef.current,
        {
          opacity: 0.65,
          ease: "power1.inOut",
          duration: 0.22,
        },
        "transition"
      );

      // ==========================================
      // STAGE 04: EXPLODED LAYER SYSTEM (60% - 85%)
      // ==========================================
      masterTl.addLabel("explode", 0.58);

      // Central placeholder fades slightly as capability layers separate
      masterTl.to(
        centralObjectRef.current,
        {
          opacity: 0.15,
          scale: 0.96,
          ease: "power2.inOut",
          duration: 0.25,
        },
        "explode"
      );

      // Reveal and push 4 layers along Z, X, Y axes with subtle stagger
      layerRefs.current.forEach((el, idx) => {
        if (!el) return;
        const depth = layerDepths[idx] || { z: 50 * idx, x: 0, y: 0 };
        masterTl.to(
          el,
          {
            opacity: 1,
            x: depth.x,
            y: depth.y,
            z: depth.z,
            scale: 1,
            ease: "power2.out",
            duration: 0.26,
          },
          `explode+=${idx * 0.035}`
        );
      });

      // ==========================================
      // STAGE 05: LAYER RESOLUTION & PORTFOLIO CUE (85% - 100%)
      // ==========================================
      masterTl.addLabel("resolution", 0.82);

      // Layers converge back toward center
      layerRefs.current.forEach((el, idx) => {
        if (!el) return;
        masterTl.to(
          el,
          {
            x: 0,
            y: 0,
            z: 0,
            opacity: 0,
            scale: 0.95,
            ease: "power2.inOut",
            duration: 0.16,
          },
          "resolution"
        );
      });

      // Object container resets rotation for clean alignment into carousel
      masterTl.to(
        objectContainerRef.current,
        {
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scale: 0.85,
          opacity: 0,
          ease: "power2.inOut",
          duration: 0.16,
        },
        "resolution"
      );

      // Resolution cue reveals
      masterTl.to(
        resolutionRef.current,
        {
          opacity: 1,
          scale: 1,
          ease: "power2.out",
          duration: 0.16,
        },
        "resolution+=0.04"
      );

      // As we reach the very end (0.96 - 1.0), fade the landing stage to reveal carousel underneath
      masterTl.to(
        stickyStageRef.current,
        {
          opacity: 0,
          ease: "power1.in",
          duration: 0.08,
        },
        "0.92"
      );
    }, pinContainerRef);

    return () => {
      ctx.revert();
    };
  }, [onProgressChange, onCarouselActivate]);

  const handleScrollClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight * 1.5,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      ref={pinContainerRef}
      className="relative w-full"
      style={{ height: scrollDistance }}
    >
      {/* Pinned Viewport Container */}
      <div
        ref={stickyStageRef}
        className="sticky top-0 left-0 w-full h-screen overflow-hidden select-none transition-colors duration-700"
        style={{
          backgroundColor: "#f5f4ef",
          willChange: "background-color, opacity",
        }}
      >
        {/* Navigation Bar */}
        <LandingNav isDark={isDark} />

        {/* Scene 01: Hero Stage */}
        <HeroStage
          ref={heroRef}
          isDark={isDark}
          onScrollClick={handleScrollClick}
        />

        {/* Scenes 02 - 05: 3D Transformation, Explosion & Resolution */}
        <TransformationStage
          isDark={isDark}
          stageRefs={{
            gridRef,
            objectContainerRef,
            centralObjectRef,
            layerRefs,
            resolutionRef,
          }}
        />

        {/* Minimal Telemetry / Scroll Progress */}
        <ScrollProgress progress={currentProgress} isDark={isDark} />
      </div>
    </div>
  );
}
