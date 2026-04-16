"use client";

import TicketButton from "./TicketButton";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-[75vh] items-center justify-center bg-white px-8"
    >
      {/* Centered content */}
      <div className="flex flex-col items-center text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl text-black uppercase tracking-wider mb-6">
          What is Sidestreet?
        </h2>

        <p className="text-sky italic text-base md:text-lg mb-6 leading-relaxed">
        Sidestreet is a community-powered listening ecosystem for listeners who care about artists, not algorithms.
        </p>

        <p className="text-black text-sm md:text-base leading-relaxed mb-4">
        Sidestreet connects listeners and artists to reimagine how music is discovered and experienced. Listen together, show up for events, and share new finds.
        </p>

        <TicketButton />
      </div>
    </section>
  );
}
