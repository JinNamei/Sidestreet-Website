"use client";

import { useState, useEffect, useRef } from "react";
import SidestreetLogo from "./SidestreetLogo";
import TicketButton from "./TicketButton";
import JoinModal from "./JoinModal";

export default function AboutSection() {
  const [logoVisible, setLogoVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogoVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white px-8"
    >
      {/* Logo — top-left */}
      <div
        className="absolute top-8 left-8 transition-all duration-800 ease-out"
        style={{
          opacity: logoVisible ? 1 : 0,
          transform: logoVisible ? "translateY(0)" : "translateY(12px)",
        }}
      >
        <SidestreetLogo />
      </div>

      {/* Centered content */}
      <div className="flex flex-col items-center text-center max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-black uppercase tracking-wider mb-6">
          What is Sidestreet?
        </h2>

        <p className="text-sky italic text-base md:text-lg mb-6 leading-relaxed">
          we&apos;re a platform for artists to meet the listener, where both need to be met.
        </p>

        <p className="text-black text-sm md:text-base leading-relaxed mb-4">
          at sidestreet, we fight against the endless algorithm. we fight for art, for the artist.
        </p>

        <TicketButton onClick={() => setModalOpen(true)} />
      </div>

      <JoinModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
