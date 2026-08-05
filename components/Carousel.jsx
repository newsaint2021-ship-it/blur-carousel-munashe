"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "../gl/config";

export default function Carousel() {
  const canvasRef = useRef(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let dispose;
    let cancelled = false;

    // three + lil-gui are browser-only, so keep them out of the server bundle.
    import("../gl/scene.js").then(({ createCarousel }) => {
      if (cancelled) return;
      dispose = createCarousel(canvasRef.current, {
        onActiveChange: (index) => setActive(index % PROJECTS.length),
      });
    });

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} className="fixed inset-0 h-full w-full" />

      {/* Colours set outright rather than derived with a blend mode.
          mix-blend-mode composites an element against its backdrop, not its own
          text against its own background — so with the highlight on the same
          element as the label there's nothing for it to invert against. It only
          worked while the highlight was a separate layer underneath. */}
      <div className="fixed bottom-2 right-0 w-75 main-font font-medium">
        {PROJECTS.map((name, index) => (
          <p
            key={name}
            className={`px-2 py-0.5 text-sm/[1] ${
              index === active ? "bg-white text-black" : "text-white"
            }`}
          >
            {name}
          </p>
        ))}
      </div>
    </div>
  );
}
