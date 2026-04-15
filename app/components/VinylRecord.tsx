"use client";

import { useState, useCallback, useId } from "react";

const IMAGES = [
  "https://picsum.photos/seed/vinyl1/800/800",
  "https://picsum.photos/seed/vinyl2/800/800",
  "https://picsum.photos/seed/vinyl3/800/800",
  "https://picsum.photos/seed/vinyl4/800/800",
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

  const cyclePhoto = useCallback(() => {
    if (transitioning) return;
    const next = (currentIndex + 1) % IMAGES.length;
    setNextIndex(next);
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(next);
      setNextIndex(null);
      setTransitioning(false);
    }, 500);
  }, [currentIndex, transitioning]);

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
            className="vinyl-photo-transition absolute inset-0 w-full h-full object-cover"
            style={{ opacity: transitioning ? 0 : 1 }}
            draggable={false}
          />
          {nextIndex !== null && (
            <img
              src={IMAGES[nextIndex]}
              alt=""
              className="vinyl-photo-transition absolute inset-0 w-full h-full object-cover"
              style={{ opacity: 1 }}
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
          fontSize="16"
          fontFamily="'Space Mono', monospace"
          letterSpacing="14"
          fontWeight="700"
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
          fontFamily="'Space Mono', monospace"
          fontStyle="italic"
          fontWeight="700"
          letterSpacing="0.5"
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
          fontFamily="'Space Mono', monospace"
          fontStyle="italic"
          fontWeight="700"
          letterSpacing="0.5"
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
