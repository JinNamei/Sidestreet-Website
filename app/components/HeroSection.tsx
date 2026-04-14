"use client";

import VinylRecord from "./VinylRecord";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white px-8"
    >
      <div className="flex flex-row items-center justify-center gap-8">
        <VinylRecord startIndex={0} />
        <div className="w-[2px] h-[500px] bg-black/20 shrink-0" />
        <VinylRecord startIndex={2} />
      </div>
    </section>
  );
}
