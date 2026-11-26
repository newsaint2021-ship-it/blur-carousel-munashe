"use client";

export default function ScrollProgress({ progress = 0, isDark = false }) {
  const percentage = Math.round(progress * 100);

  const getStageName = (p) => {
    if (p < 0.18) return "01 // HERO";
    if (p < 0.42) return "02 // 3D TILT";
    if (p < 0.62) return "03 // DARK ROOM";
    if (p < 0.88) return "04 // 4-LAYERS";
    return "05 // REPERTORY";
  };

  return (
    <div
      aria-hidden="true"
      className="fixed right-6 sm:right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-end gap-3 pointer-events-none select-none transition-colors duration-700"
      style={{
        color: isDark ? "#efece6" : "#111110",
      }}
    >
      <div
        className="text-[9px] font-mono tracking-[0.2em] uppercase transition-colors duration-700"
        style={{
          color: isDark ? "rgba(239, 236, 230, 0.45)" : "rgba(17, 17, 16, 0.45)",
        }}
      >
        {getStageName(progress)}
      </div>

      {/* Vertical Rail */}
      <div
        className="relative w-[1.5px] h-28 rounded-full overflow-hidden transition-colors duration-700"
        style={{
          backgroundColor: isDark ? "rgba(239, 236, 230, 0.15)" : "rgba(17, 17, 16, 0.15)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 rounded-full transition-all duration-100 ease-out"
          style={{
            height: `${Math.max(4, percentage)}%`,
            backgroundColor: isDark ? "#efece6" : "#111110",
          }}
        />
      </div>

      <div
        className="text-[10px] font-mono tracking-[0.16em] tabular-nums transition-colors duration-700"
        style={{
          color: isDark ? "rgba(239, 236, 230, 0.7)" : "rgba(17, 17, 16, 0.7)",
        }}
      >
        {String(percentage).padStart(2, "0")}%
      </div>
    </div>
  );
}
