"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../gl/config";

const pad = (n) => String(n).padStart(2, "0");

export default function Carousel() {
  const canvasRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let dispose;
    let cancelled = false;

    // three + lil-gui are browser-only, so keep them out of the server bundle.
    import("../gl/scene.js").then(({ createCarousel }) => {
      if (cancelled) return;
      // No WebGL2 (old devices, some locked-down browsers) means no carousel,
      // but the studio framing around it should still stand on its own.
      try {
        dispose = createCarousel(canvasRef.current, {
          onActiveChange: (index) => setActive(index % PROJECTS.length),
        });
      } catch (error) {
        console.warn("Carousel unavailable:", error);
      }
    });

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-label="Selected work. Scroll, drag or use the arrow keys to browse."
        role="img"
        className="fixed inset-0 h-full w-full"
      />

      <p
        aria-live="polite"
        className="hero-fade hero-fade-late pointer-events-none fixed right-0 bottom-0 z-10 flex items-baseline gap-2 px-[max(1.25rem,env(safe-area-inset-right))] pb-[max(1.5rem,env(safe-area-inset-bottom))] font-[family-name:var(--font-geist)] text-[11px] tracking-[0.2em] text-white/50 tabular-nums sm:px-10 sm:pb-10 lg:px-14 lg:pb-12"
      >
        <span className="sr-only">Work</span>
        <span className="text-white">{pad(active + 1)}</span>
        <span aria-hidden="true">/</span>
        <span className="sr-only">of</span>
        <span>{pad(PROJECTS.length)}</span>
      </p>
    </>
  );
}
