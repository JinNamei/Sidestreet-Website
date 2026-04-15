"use client";

import { useState, useEffect } from "react";
import SidestreetLogo from "./SidestreetLogo";

/**
 * Fixed top-left logo; "SIDESTREET" label fades out once the hero is scrolled out of view.
 */
export default function SiteHeader() {
  const [heroInView, setHeroInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="pointer-events-none fixed top-8 left-8 z-50"
      aria-label="Sidestreet"
    >
      <button
        type="button"
        onClick={goToTop}
        className="pointer-events-auto cursor-pointer border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        aria-label="Back to top"
      >
        <SidestreetLogo showLabel={heroInView} />
      </button>
    </header>
  );
}
