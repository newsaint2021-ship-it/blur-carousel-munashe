import Link from "next/link";
import { SITE } from "../lib/site";

const ctaClass =
  "group pointer-events-auto inline-flex items-center shrink-0 gap-2.5 whitespace-nowrap rounded-full border border-white/25 bg-black/30 py-2 pl-4 pr-2 text-[11px] sm:gap-3 sm:py-2.5 sm:pl-5 sm:pr-2.5 font-medium tracking-wide text-white backdrop-blur-sm transition-[background-color,color,border-color,transform] duration-300 ease-out hover:border-white hover:bg-white hover:text-black active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-sm";

function CtaInner() {
  return (
    <>
      <span>Get in touch</span>
      <span
        aria-hidden="true"
        className="flex size-6 items-center sm:size-7 justify-center rounded-full bg-white text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white"
      >
        <svg
          viewBox="0 0 12 12"
          className="size-3 transition-transform duration-300 ease-out group-hover:-translate-y-px group-hover:translate-x-px"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" />
        </svg>
      </span>
    </>
  );
}

export default function SiteHeader() {
  return (
    <header className="hero-fade pointer-events-none fixed inset-x-0 top-0 z-20 flex items-center justify-between px-[max(1.25rem,env(safe-area-inset-left))] pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-10 sm:pt-8 lg:px-14 lg:pt-10">
      <Link
        href="/"
        aria-label={SITE.name}
        className="pointer-events-auto flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static PNGs, the optimiser adds nothing */}
        <img
          src="/brand/aurexis-mark.png"
          alt=""
          width={206}
          height={192}
          className="h-6 w-auto sm:h-8"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/aurexis-wordmark.png"
          alt=""
          width={726}
          height={59}
          className="hidden h-[9px] w-auto min-[370px]:block sm:h-3"
        />
      </Link>

      {SITE.contactHref ? (
        <a href={SITE.contactHref} className={ctaClass}>
          <CtaInner />
        </a>
      ) : (
        <button type="button" className={ctaClass}>
          <CtaInner />
        </button>
      )}
    </header>
  );
}
