"use client";

import { useState, useCallback, useId, useRef, useEffect } from "react";

const IMAGES = [
  "/background1.jpeg",
  "/background2.jpg",
  "/background3.jpg",
  "/background4.jpg",
];

interface VinylRecordProps {
  startIndex?: number;
}

function circlePoint(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.sin(rad),
    y: cy - r * Math.cos(rad),
  };
}

export default function VinylRecord({ startIndex = 0 }: VinylRecordProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const uid = useId().replace(/:/g, "");

  const isTransitioningRef = useRef(false);
  const currentIndexRef = useRef(startIndex);
  const fadeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      if (fadeTimeoutRef.current != null) {
        clearTimeout(fadeTimeoutRef.current);
      }
    };
  }, []);

  /** Only animate opacity while crossfading; idle state must snap to opacity 1 or the bottom layer re-fades in after the top img unmounts (flash). */
  const crossfadeActive = transitioning || nextIndex !== null;

  const cyclePhoto = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const next = (currentIndexRef.current + 1) % IMAGES.length;

    if (fadeTimeoutRef.current != null) {
      clearTimeout(fadeTimeoutRef.current);
      fadeTimeoutRef.current = null;
    }

    setNextIndex(next);
    setTransitioning(true);

    fadeTimeoutRef.current = setTimeout(() => {
      fadeTimeoutRef.current = null;
      isTransitioningRef.current = false;
      setCurrentIndex(next);
      currentIndexRef.current = next;
      setNextIndex(null);
      setTransitioning(false);
    }, 500);
  }, []);

  const discSize = 360;
  const outerSize = 500;
  const cx = outerSize / 2;
  const cy = outerSize / 2;
  const textR = discSize / 2 + 36;
  const brR2 = textR + 16;
  const discOffset = (outerSize - discSize) / 2;

  // Top-left arc: 110° centered ~11 o'clock
  const tlStart = circlePoint(cx, cy, textR, 275);
  const tlEnd = circlePoint(cx, cy, textR, 25);

  // Bottom-right arc line 1: 110° centered ~5 o'clock
  const brStart = circlePoint(cx, cy, textR, 95);
  const brEnd = circlePoint(cx, cy, textR, 205);

  // Bottom-right arc line 2 (slightly further out for second line)
  const br2Start = circlePoint(cx, cy, brR2, 95);
  const br2End = circlePoint(cx, cy, brR2, 205);

  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ width: outerSize, height: outerSize }}
      onClick={cyclePhoto}
    >
      {/* Spinning vinyl disc */}
      <div
        className="vinyl-spin absolute"
        style={{
          width: discSize,
          height: discSize,
          top: discOffset,
          left: discOffset,
        }}
      >
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ width: discSize, height: discSize }}
        >
          <img
            src={IMAGES[currentIndex]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: transitioning ? 0 : 1,
              transition: crossfadeActive
                ? "opacity 0.5s ease"
                : "none",
            }}
            draggable={false}
          />
          {nextIndex !== null && (
            <img
              src={IMAGES[nextIndex]}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              style={{
                opacity: 1,
                transition: "opacity 0.5s ease",
              }}
              draggable={false}
            />
          )}
        </div>

        <div
          className="absolute rounded-full bg-orange"
          style={{
            width: discSize * 0.52,
            height: discSize * 0.52,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="absolute rounded-full bg-sky"
          style={{
            width: discSize * 0.28,
            height: discSize * 0.28,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="absolute rounded-full bg-black"
          style={{
            width: 16,
            height: 16,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Static curved text — does NOT spin */}
      <svg
        width={outerSize}
        height={outerSize}
        viewBox={`0 0 ${outerSize} ${outerSize}`}
        className="absolute inset-0 pointer-events-none"
      >
        <defs>
          <path
            id={`topLeftArc-${uid}`}
            d={`M ${tlStart.x.toFixed(1)},${tlStart.y.toFixed(1)} A ${textR},${textR} 0 0,1 ${tlEnd.x.toFixed(1)},${tlEnd.y.toFixed(1)}`}
          />
          <path
            id={`brArc1-${uid}`}
            d={`M ${brEnd.x.toFixed(1)},${brEnd.y.toFixed(1)} A ${textR},${textR} 0 0,0 ${brStart.x.toFixed(1)},${brStart.y.toFixed(1)}`}
          />
          <path
            id={`brArc2-${uid}`}
            d={`M ${br2End.x.toFixed(1)},${br2End.y.toFixed(1)} A ${brR2},${brR2} 0 0,0 ${br2Start.x.toFixed(1)},${br2Start.y.toFixed(1)}`}
          />
        </defs>

        <text
          fill="black"
          fontSize="32"
          letterSpacing="14"
          style={{
            fontFamily:
              "var(--font-geist-mono), ui-monospace, monospace",
          }}
        >
          <textPath
            href={`#topLeftArc-${uid}`}
            startOffset="50%"
            textAnchor="middle"
          >
            SIDESTREET
          </textPath>
        </text>

        <text
          fill="black"
          fontSize="11"
          fontStyle="italic"
          letterSpacing="0.5"
          style={{
            fontFamily:
              "var(--font-geist-mono), ui-monospace, monospace",
          }}
        >
          <textPath
            href={`#brArc1-${uid}`}
            startOffset="50%"
            textAnchor="middle"
          >
            for listeners. for those who love artists
          </textPath>
        </text>

        <text
          fill="black"
          fontSize="11"
          fontStyle="italic"
          letterSpacing="0.5"
          style={{
            fontFamily:
              "var(--font-geist-mono), ui-monospace, monospace",
          }}
        >
          <textPath
            href={`#brArc2-${uid}`}
            startOffset="50%"
            textAnchor="middle"
          >
            over the algorithm
          </textPath>
        </text>
      </svg>
    </div>
  );
}
