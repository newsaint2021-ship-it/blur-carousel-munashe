import { SITE } from "../lib/site";

export default function HeroStatement() {
  return (
    <div className="hero-fade hero-fade-late pointer-events-none fixed bottom-0 left-0 z-10 px-[max(1.25rem,env(safe-area-inset-left))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-10 sm:pb-10 lg:px-14 lg:pb-12">
      <p className="mb-4 flex items-center gap-3 font-[family-name:var(--font-geist)] text-[10px] font-medium uppercase tracking-[0.32em] text-white/55 sm:mb-5 sm:text-[11px]">
        <span aria-hidden="true" className="h-px w-6 bg-white/40" />
        Creative Digital Studio
      </p>
      <h1 className="main-font max-w-[13ch] text-balance text-[1.5rem] leading-[1.1] font-medium tracking-[-0.01em] text-white sm:text-[2rem] lg:text-[2.4rem]">
        {SITE.statement}
      </h1>
    </div>
  );
}
