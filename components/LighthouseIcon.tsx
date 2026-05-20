type Props = {
  className?: string;
  accentColor?: string;
  style?: React.CSSProperties;
};

export default function LighthouseIcon({ className = "", accentColor = "#2563EB", style }: Props) {
  return (
    <svg
      viewBox="0 0 22 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Cap */}
      <rect x="9" y="0" width="4" height="4.5" rx="0.8" fill="currentColor" />
      {/* Dome */}
      <path d="M5 7 Q11 2 17 7 L17 8 L5 8 Z" fill="currentColor" />
      {/* Lamp room outer */}
      <rect x="5" y="8" width="12" height="8" rx="0.5" fill="currentColor" />
      {/* Lamp room window */}
      <rect x="7" y="10" width="8" height="5" rx="0.3" fill="currentColor" opacity="0.18" />
      {/* Light centre */}
      <circle cx="11" cy="12.5" r="2.1" fill={accentColor} />
      {/* Gallery */}
      <rect x="2" y="16" width="18" height="2" rx="0.5" fill="currentColor" />
      {/* Tower (trapezoid) */}
      <path d="M5 18 L17 18 L19 28 L3 28 Z" fill="currentColor" />
      {/* Decorative stripe on tower */}
      <rect x="4" y="22.5" width="14" height="1" rx="0.5" fill="currentColor" opacity="0.2" />
      {/* Base */}
      <rect x="2" y="28" width="18" height="2.5" rx="0.5" fill="currentColor" />
      {/* Foundation */}
      <rect x="0" y="30.5" width="22" height="3.5" rx="0.5" fill="currentColor" />
    </svg>
  );
}
