"use client";

interface TicketButtonProps {
  onClick: () => void;
}

export default function TicketButton({ onClick }: TicketButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative group cursor-pointer mt-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
      aria-label="Join the club"
    >
      <svg
        width="280"
        height="72"
        viewBox="0 0 280 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:scale-105"
      >
        {/* Ticket body with serrations */}
        <path
          d={`
            M 16,0 L 264,0
            Q 280,0 280,16 L 280,22
            A 4,4 0 0,1 280,30
            L 280,34
            A 4,4 0 0,1 280,42
            L 280,46
            A 4,4 0 0,1 280,54
            L 280,56
            Q 280,72 264,72 L 16,72
            Q 0,72 0,56 L 0,54
            A 4,4 0 0,0 0,46
            L 0,42
            A 4,4 0 0,0 0,34
            L 0,30
            A 4,4 0 0,0 0,22
            L 0,16
            Q 0,0 16,0 Z
          `}
          fill="#F4522D"
        />

        {/* Left ticket number */}
        <text
          x="20"
          y="40"
          fill="rgba(255,255,255,0.5)"
          fontSize="8"
          fontFamily="'Space Mono', monospace"
          transform="rotate(-90 20 40)"
        >
          356003
        </text>

        {/* Right ticket number */}
        <text
          x="260"
          y="32"
          fill="rgba(255,255,255,0.5)"
          fontSize="8"
          fontFamily="'Space Mono', monospace"
          transform="rotate(90 260 32)"
        >
          356003
        </text>

        {/* Button text */}
        <text
          x="140"
          y="41"
          textAnchor="middle"
          fill="white"
          fontSize="16"
          fontFamily="'Space Mono', monospace"
          fontWeight="700"
        >
          join the club
        </text>
      </svg>
    </button>
  );
}
