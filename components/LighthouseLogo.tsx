import LighthouseIcon from "./LighthouseIcon";

type Props = {
  variant?: "light" | "dark";
  iconHeight?: number;
  className?: string;
};

export default function LighthouseLogo({
  variant = "light",
  iconHeight = 36,
  className = "",
}: Props) {
  const isDark = variant === "dark";
  const iconW = Math.round(iconHeight * (22 / 34));
  const fontSize = Math.round(iconHeight * 0.47);

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <LighthouseIcon
        className={isDark ? "text-white" : "text-slate-950"}
        accentColor={isDark ? "#93C5FD" : "#2563EB"}
        style={{ width: iconW, height: iconHeight }}
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-bold tracking-tight ${isDark ? "text-white" : "text-slate-950"}`}
          style={{ fontSize }}
        >
          Lighthouse
        </span>
        <span
          className={`font-bold tracking-tight ${isDark ? "text-blue-400" : "text-blue-600"}`}
          style={{ fontSize }}
        >
          Digi Lab
        </span>
      </div>
    </div>
  );
}
