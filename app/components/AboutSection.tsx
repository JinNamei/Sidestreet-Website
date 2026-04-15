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
          we&apos;re a platform for artists to meet the listener, where both need to be met.
        </p>

        <p className="text-black text-sm md:text-base leading-relaxed mb-4">
          at sidestreet, we fight against the endless algorithm. we fight for art, for the artist.
        </p>

        <TicketButton />
      </div>
    </section>
  );
}
