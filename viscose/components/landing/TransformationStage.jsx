"use client";

import { forwardRef } from "react";

const CAPABILITIES = [
  {
    id: "strategy",
    num: "01",
    tag: "SYS // CORE ARCHITECTURE",
    title: "STRATEGY",
    desc: "We define the direction and uncover the opportunity.",
    detail: "Market analysis • Product positioning • Architectural blueprints",
    accent: "rgba(239, 236, 230, 0.9)",
  },
  {
    id: "design",
    num: "02",
    tag: "SYS // SPATIAL & VISUAL",
    title: "DESIGN",
    desc: "We create distinctive visual identities and digital experiences.",
    detail: "Editorial design • Interactive choreography • Design systems",
    accent: "rgba(239, 236, 230, 0.9)",
  },
  {
    id: "development",
    num: "03",
    tag: "SYS // COMPUTATION",
    title: "DEVELOPMENT",
    desc: "We engineer performant, responsive digital experiences.",
    detail: "Modern WebGL • Shaders • High-frequency animation engines",
    accent: "rgba(239, 236, 230, 0.9)",
  },
  {
    id: "experience",
    num: "04",
    tag: "SYS // SYNTHESIS",
    title: "DIGITAL EXPERIENCE",
    desc: "We transform conventional interfaces into immersive experiences.",
    detail: "Scrollytelling • Creative technology • Sensory feedback",
    accent: "rgba(239, 236, 230, 0.9)",
  },
];

const TransformationStage = forwardRef(function TransformationStage(
  { isDark = false, stageRefs },
  ref
) {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
      style={{
        perspective: "1400px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      {/* Background Architectural Coordinate Grid */}
      <div
        ref={stageRefs?.gridRef}
        className="absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? "rgba(239, 236, 230, 0.04)" : "rgba(17, 17, 16, 0.04)"} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? "rgba(239, 236, 230, 0.04)" : "rgba(17, 17, 16, 0.04)"} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "center center",
        }}
      />

      {/* 3D Transform Object Container */}
      <div
        ref={stageRefs?.objectContainerRef}
        className="relative flex items-center justify-center w-full max-w-[88vw] sm:max-w-[75vw] md:max-w-[62vw] lg:max-w-[54vw] aspect-[16/10] sm:aspect-[16/9]"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
      >
        {/* Base Central Visual (Hero Placeholder Object) */}
        <div
          ref={stageRefs?.centralObjectRef}
          className="absolute inset-0 rounded-2xl md:rounded-3xl border transition-colors duration-700 flex flex-col justify-between p-6 sm:p-8 md:p-10 shadow-2xl overflow-hidden backdrop-blur-md"
          style={{
            backgroundColor: isDark ? "rgba(18, 18, 17, 0.85)" : "rgba(255, 255, 255, 0.9)",
            borderColor: isDark ? "rgba(239, 236, 230, 0.16)" : "rgba(17, 17, 16, 0.12)",
            boxShadow: isDark
              ? "0 30px 80px -15px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.1)"
              : "0 25px 60px -15px rgba(0, 0, 0, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)",
            willChange: "transform, opacity, border-radius",
          }}
        >
          {/* Corner Crosshairs */}
          <span className="absolute top-3 left-3 text-[11px] leading-none opacity-40 font-mono">+</span>
          <span className="absolute top-3 right-3 text-[11px] leading-none opacity-40 font-mono">+</span>
          <span className="absolute bottom-3 left-3 text-[11px] leading-none opacity-40 font-mono">+</span>
          <span className="absolute bottom-3 right-3 text-[11px] leading-none opacity-40 font-mono">+</span>

          {/* Top Metadata Header */}
          <div className="flex items-center justify-between text-[10px] md:text-xs tracking-[0.2em] uppercase font-mono border-b pb-3"
            style={{
              borderColor: isDark ? "rgba(239, 236, 230, 0.1)" : "rgba(17, 17, 16, 0.08)",
              color: isDark ? "rgba(239, 236, 230, 0.6)" : "rgba(17, 17, 16, 0.6)",
            }}
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span>AUREXIS SPECIMEN 01</span>
            </span>
            <span>SYSTEM ENGINE / 3D TILT</span>
          </div>

          {/* Central Architectural Wireframe Placeholder Composition */}
          <div className="my-auto flex flex-col items-center justify-center text-center py-4">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-xl border border-dashed flex items-center justify-center transition-colors duration-700"
              style={{
                borderColor: isDark ? "rgba(239, 236, 230, 0.3)" : "rgba(17, 17, 16, 0.3)",
              }}
            >
              <div
                className="w-8 h-8 rounded border transition-colors duration-700 flex items-center justify-center"
                style={{
                  borderColor: isDark ? "rgba(239, 236, 230, 0.5)" : "rgba(17, 17, 16, 0.5)",
                }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-sm transition-colors duration-700"
                  style={{
                    backgroundColor: isDark ? "#efece6" : "#111110",
                  }}
                />
              </div>
            </div>

            <span
              className="text-xs sm:text-sm uppercase tracking-[0.26em] font-medium transition-colors duration-700"
              style={{
                fontFamily: "'Geist', monospace",
                color: isDark ? "#efece6" : "#111110",
              }}
            >
              Architectural Engine
            </span>
            <span
              className="mt-1 text-[10px] tracking-[0.16em] uppercase transition-colors duration-700"
              style={{
                fontFamily: "'Geist', monospace",
                color: isDark ? "rgba(239, 236, 230, 0.45)" : "rgba(17, 17, 16, 0.45)",
              }}
            >
              Continuous Dimensional Canvas // Scroll Activated
            </span>
          </div>

          {/* Bottom Telemetry Bar */}
          <div className="flex items-center justify-between text-[9px] md:text-[10px] tracking-[0.18em] uppercase font-mono border-t pt-3"
            style={{
              borderColor: isDark ? "rgba(239, 236, 230, 0.1)" : "rgba(17, 17, 16, 0.08)",
              color: isDark ? "rgba(239, 236, 230, 0.4)" : "rgba(17, 17, 16, 0.4)",
            }}
          >
            <span>STATUS: CALIBRATED</span>
            <span>GSAP SCROLLTRIGGER SCRUB</span>
            <span>DEPTH: 4 LAYERS</span>
          </div>
        </div>

        {/* 4 Exploded Dimensional Capability Layers */}
        {CAPABILITIES.map((cap, idx) => (
          <div
            key={cap.id}
            ref={(el) => {
              if (stageRefs?.layerRefs?.current) {
                stageRefs.layerRefs.current[idx] = el;
              }
            }}
            className="absolute inset-0 rounded-2xl md:rounded-3xl border flex flex-col justify-between p-5 sm:p-7 md:p-8 backdrop-blur-md opacity-0 shadow-2xl transition-colors duration-700"
            style={{
              backgroundColor: "rgba(14, 14, 13, 0.88)",
              borderColor: "rgba(239, 236, 230, 0.18)",
              boxShadow: "0 20px 50px -10px rgba(0, 0, 0, 0.8), inset 0 1px 1px rgba(255, 255, 255, 0.12)",
              transformStyle: "preserve-3d",
              willChange: "transform, opacity",
            }}
          >
            {/* Corner Crosshairs */}
            <span className="absolute top-2.5 left-2.5 text-[10px] text-neutral-400 font-mono">+</span>
            <span className="absolute top-2.5 right-2.5 text-[10px] text-neutral-400 font-mono">+</span>
            <span className="absolute bottom-2.5 left-2.5 text-[10px] text-neutral-400 font-mono">+</span>
            <span className="absolute bottom-2.5 right-2.5 text-[10px] text-neutral-400 font-mono">+</span>

            {/* Layer Header */}
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] font-mono text-[#efece6]/60 border-b border-[#efece6]/10 pb-2">
              <span className="font-semibold text-[#efece6]">{cap.num}{" // "}{cap.title}</span>
              <span className="hidden sm:inline">{cap.tag}</span>
            </div>

            {/* Layer Body Content */}
            <div className="my-auto py-2">
              <h2
                className="text-lg sm:text-2xl md:text-3xl font-medium tracking-[-0.02em] text-[#efece6]"
                style={{ fontFamily: "'PP Neue Montreal', 'Satoshi', sans-serif" }}
              >
                {cap.title}
              </h2>
              <p
                className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#efece6]/75 font-normal leading-[1.4]"
                style={{ fontFamily: "'Satoshi', sans-serif" }}
              >
                {cap.desc}
              </p>
              <div
                className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-mono text-[#efece6]/45 tracking-[0.12em] uppercase"
              >
                {cap.detail}
              </div>
            </div>

            {/* Layer Footer Status */}
            <div className="flex items-center justify-between text-[9px] font-mono text-[#efece6]/40 border-t border-[#efece6]/10 pt-2">
              <span>LAYER 0{idx + 1} OF 04</span>
              <span>ISOMETRIC SEPARATION ACTIVE</span>
            </div>
          </div>
        ))}

        {/* Scene 05: Layer Resolution & Portfolio Transition Message */}
        <div
          ref={stageRefs?.resolutionRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 sm:p-10 opacity-0 pointer-events-none z-30"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="p-8 sm:p-12 rounded-3xl border border-[#efece6]/20 bg-[#0e0e0d]/90 backdrop-blur-xl shadow-2xl max-w-xl w-full">
            <span
              className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-mono text-[#efece6]/50 block mb-3"
            >
              [ 05 {"//"} TRANSITION CONVERGENCE ]
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.03em] text-[#efece6]"
              style={{ fontFamily: "'PP Neue Montreal', 'Satoshi', sans-serif" }}
            >
              Explore what we create.
            </h2>
            <p
              className="mt-3 text-sm sm:text-base text-[#efece6]/60 font-normal leading-[1.4]"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Selected studio works • Viscose 3D repertory engine
            </p>

            <div className="mt-8 flex flex-col items-center gap-2">
              <span
                className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#efece6]/40"
              >
                Scroll to enter carousel
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#efece6] animate-bounce"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TransformationStage;
