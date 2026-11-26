"use client";

import { forwardRef } from "react";

const HeroStage = forwardRef(function HeroStage(
  { isDark = false, onScrollClick },
  ref
) {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none z-20"
      style={{
        padding: "clamp(6.5rem, 12vh, 9rem) clamp(1.5rem, 4vw, 3.5rem) clamp(2rem, 4vh, 3.5rem)",
      }}
    >
      {/* Top Editorial Sub-bar & Tagline */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 max-w-7xl">
        <div className="flex flex-col gap-1">
          <span
            className="text-[11px] uppercase tracking-[0.28em] font-medium"
            style={{
              fontFamily: "'Geist', monospace",
              color: isDark ? "rgba(239, 236, 230, 0.6)" : "rgba(17, 17, 16, 0.6)",
            }}
          >
            Aurexis // Digital Studio
          </span>
          <span
            className="text-[11px] uppercase tracking-[0.16em]"
            style={{
              fontFamily: "'Geist', monospace",
              color: isDark ? "rgba(239, 236, 230, 0.35)" : "rgba(17, 17, 16, 0.35)",
            }}
          >
            Spatial Design & Computational Architecture
          </span>
        </div>

        <div
          className="hidden md:flex items-center gap-6 text-[10px] uppercase tracking-[0.2em]"
          style={{
            fontFamily: "'Geist', monospace",
            color: isDark ? "rgba(239, 236, 230, 0.35)" : "rgba(17, 17, 16, 0.35)",
          }}
        >
          <span>INDEX: 01-18</span>
          <span>•</span>
          <span>EDITION 2026</span>
          <span>•</span>
          <span>GRID: 12-COL ISO</span>
        </div>
      </div>

      {/* Primary Editorial Headline Group */}
      <div className="my-auto max-w-5xl py-8">
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-normal leading-[1.02] tracking-[-0.035em] text-balance transition-colors duration-700"
          style={{
            fontFamily: "'PP Neue Montreal', 'Satoshi', sans-serif",
            color: isDark ? "#efece6" : "#111110",
          }}
        >
          We make the digital feel extraordinary.
        </h1>

        <p
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl font-normal leading-[1.4] max-w-2xl text-balance transition-colors duration-700"
          style={{
            fontFamily: "'Satoshi', sans-serif",
            color: isDark ? "rgba(239, 236, 230, 0.65)" : "rgba(17, 17, 16, 0.65)",
          }}
        >
          We create distinctive digital experiences through strategy, design and
          technology.
        </p>
      </div>

      {/* Bottom Coordinates & Scroll Prompt */}
      <div className="flex items-end justify-between border-t pt-4 transition-colors duration-700"
        style={{
          borderColor: isDark ? "rgba(239, 236, 230, 0.12)" : "rgba(17, 17, 16, 0.1)",
        }}
      >
        <div
          className="text-[10px] tracking-[0.2em] uppercase space-y-1"
          style={{
            fontFamily: "'Geist', monospace",
            color: isDark ? "rgba(239, 236, 230, 0.45)" : "rgba(17, 17, 16, 0.45)",
          }}
        >
          <div>DISCIPLINE: INTERACTION & CREATIVE TECH</div>
          <div>EXPLODED ENGINE // FOUNDATION PROTOTYPE</div>
        </div>

        {/* Scroll Indicator */}
        <button
          type="button"
          onClick={onScrollClick}
          className="group pointer-events-auto flex items-center gap-3 cursor-pointer focus:outline-none"
          aria-label="Scroll down to begin transformation"
        >
          <span
            className="text-[10px] uppercase tracking-[0.22em] transition-colors duration-700"
            style={{
              fontFamily: "'Geist', monospace",
              color: isDark ? "rgba(239, 236, 230, 0.7)" : "rgba(17, 17, 16, 0.7)",
            }}
          >
            Scroll to deconstruct
          </span>
          <div
            className="w-4 h-7 rounded-full border flex items-start justify-center p-1 transition-colors duration-700"
            style={{
              borderColor: isDark ? "rgba(239, 236, 230, 0.3)" : "rgba(17, 17, 16, 0.3)",
            }}
          >
            <div
              className="w-1 h-2 rounded-full animate-bounce transition-colors duration-700"
              style={{
                backgroundColor: isDark ? "#efece6" : "#111110",
              }}
            />
          </div>
        </button>
      </div>
    </div>
  );
});

export default HeroStage;
