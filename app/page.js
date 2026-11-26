import Carousel from "../components/Carousel";
import SiteHeader from "../components/SiteHeader";
import HeroStatement from "../components/HeroStatement";

export default function Page() {
  return (
    <main className="fixed inset-0 overflow-hidden bg-[#000000]">
      <Carousel />
      {/* Legibility only: keeps the nav and statement readable when a bright
          card passes behind them. Never intercepts input. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[5] h-36 bg-linear-to-b from-black/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[5] h-[38%] bg-linear-to-t from-black/85 via-black/40 to-transparent"
      />
      <SiteHeader />
      <HeroStatement />
    </main>
  );
}
