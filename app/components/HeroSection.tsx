"use client";

import VinylRecord from "./VinylRecord";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white px-8"
    >
      <VinylRecord startIndex={0} />
    </section>
  );
}
