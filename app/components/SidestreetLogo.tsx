interface SidestreetLogoProps {
  className?: string;
  /** When false, the wordmark fades out (logo mark stays visible). */
  showLabel?: boolean;
}

export default function SidestreetLogo({
  className = "",
  showLabel = true,
}: SidestreetLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        aria-hidden
        className="shrink-0"
      >
        <circle cx="18" cy="18" r="18" fill="#F4522D" />
        <circle cx="18" cy="18" r="10" fill="#7DD8F0" />
        <circle cx="18" cy="18" r="3" fill="#000000" />
      </svg>
      <span
        className="text-black text-lg tracking-widest uppercase transition-opacity duration-500 ease-out"
        style={{ opacity: showLabel ? 1 : 0 }}
        aria-hidden={!showLabel}
      >
        SIDESTREET
      </span>
    </div>
  );
}
