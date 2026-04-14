interface SidestreetLogoProps {
  className?: string;
}

export default function SidestreetLogo({ className = "" }: SidestreetLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Concentric circle icon */}
      <svg width="36" height="36" viewBox="0 0 36 36">
        <circle cx="18" cy="18" r="18" fill="#F4522D" />
        <circle cx="18" cy="18" r="10" fill="#7DD8F0" />
        <circle cx="18" cy="18" r="3" fill="#000000" />
      </svg>
      <span className="text-black font-bold text-lg tracking-widest uppercase">
        SIDESTREET
      </span>
    </div>
  );
}
