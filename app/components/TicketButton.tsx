import Image from "next/image";
import { SIDESTREET_EMAIL } from "../constants";

export default function TicketButton() {
  return (
    <a
      href={`mailto:${SIDESTREET_EMAIL}`}
      className="relative group mt-8 inline-block cursor-pointer drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform hover:scale-105"
      aria-label={`Email us at ${SIDESTREET_EMAIL}`}
    >
      <Image
        src="/sidestreetticket.png"
        alt="Join the club"
        width={140}
        height={36}
        className="h-auto w-full max-w-[140px]"
        draggable={false}
        priority
      />
    </a>
  );
}
