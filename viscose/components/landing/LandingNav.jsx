"use client";

import { useEffect, useRef } from "react";

export default function LandingNav({ isDark = false, onNavigatePortfolio }) {
  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-700 ease-out select-none ${
        isDark ? "text-[#efece6]" : "text-[#111110]"
      }`}
      style={{
        padding: "clamp(1.2rem, 2.5vw, 2.2rem) clamp(1.5rem, 4vw, 3.5rem)",
      }}
    >
      <div className="flex items-center justify-between border-b pb-4 transition-colors duration-700"
        style={{
          borderColor: isDark ? "rgba(239, 236, 230, 0.12)" : "rgba(17, 17, 16, 0.1)",
        }}
      >
        {/* Brand Lockup */}
        <div className="flex items-baseline gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-baseline gap-2 cursor-pointer focus:outline-none"
            aria-label="Aurexis Digital Studio Home"
          >
            <span
              className="font-medium tracking-[0.22em] text-sm md:text-base uppercase"
              style={{ fontFamily: "'Satoshi', sans-serif" }}
            >
              Aurexis
            </span>
            <span
              className={`text-[10px] tracking-[0.18em] uppercase transition-colors duration-700 ${
                isDark ? "text-[#efece6]/50" : "text-[#111110]/50"
              }`}
              style={{ fontFamily: "'Geist', monospace" }}
            >
              / Studio
            </span>
          </a>
        </div>

        {/* Center Technical Coordinate Marker */}
        <div
          className={`hidden md:flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase transition-colors duration-700 ${
            isDark ? "text-[#efece6]/40" : "text-[#111110]/40"
          }`}
          style={{ fontFamily: "'Geist', monospace" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>EST. 2026 // SCROLL SYSTEM 1.0</span>
        </div>

        {/* Right Navigation Controls */}
        <nav
          role="navigation"
          aria-label="Primary"
          className="flex items-center gap-6 md:gap-8 text-xs tracking-[0.12em] uppercase"
          style={{ fontFamily: "'Geist', monospace" }}
        >
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("portfolio");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`cursor-pointer transition-colors duration-300 hover:opacity-100 ${
              isDark ? "text-[#efece6]/70 hover:text-[#efece6]" : "text-[#111110]/70 hover:text-[#111110]"
            }`}
          >
            [ Work ]
          </button>
          
          <button
            type="button"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 2,
                behavior: "smooth",
              });
            }}
            className={`cursor-pointer hidden sm:inline-block transition-colors duration-300 hover:opacity-100 ${
              isDark ? "text-[#efece6]/70 hover:text-[#efece6]" : "text-[#111110]/70 hover:text-[#111110]"
            }`}
          >
            [ Capabilities ]
          </button>

          <a
            href="mailto:studio@aurexis.digital"
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border transition-all duration-300 ${
              isDark
                ? "border-[#efece6]/25 hover:border-[#efece6] text-[#efece6]"
                : "border-[#111110]/20 hover:border-[#111110] text-[#111110]"
            }`}
          >
            <span>Inquire</span>
            <span aria-hidden="true" className="text-[10px]">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
