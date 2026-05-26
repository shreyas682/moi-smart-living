import { useState } from "react";
import { Sun, UtensilsCrossed, Moon } from "lucide-react";

type SceneKey = "morning" | "dinner" | "night";

const scenes: Record<
  SceneKey,
  {
    label: string;
    caption: string;
    icon: typeof Sun;
    glow: string;
    ambient: string;
    bulb: string;
    wall: string;
    floor: string;
  }
> = {
  morning: {
    label: "Morning",
    caption: "Cool white • 5500K",
    icon: Sun,
    glow: "hsl(210 90% 75% / 0.55)",
    ambient: "hsl(210 60% 90%)",
    bulb: "hsl(200 100% 92%)",
    wall: "hsl(220 15% 22%)",
    floor: "hsl(220 12% 14%)",
  },
  dinner: {
    label: "Dinner",
    caption: "Warm amber • 2700K",
    icon: UtensilsCrossed,
    glow: "hsl(28 100% 55% / 0.6)",
    ambient: "hsl(32 90% 60%)",
    bulb: "hsl(35 100% 75%)",
    wall: "hsl(24 30% 22%)",
    floor: "hsl(22 28% 14%)",
  },
  night: {
    label: "Night",
    caption: "Dim glow • 1800K",
    icon: Moon,
    glow: "hsl(15 90% 40% / 0.5)",
    ambient: "hsl(15 70% 35%)",
    bulb: "hsl(20 90% 55%)",
    wall: "hsl(15 25% 14%)",
    floor: "hsl(15 25% 9%)",
  },
};

const HeroScenePanel = () => {
  const [active, setActive] = useState<SceneKey>("dinner");
  const s = scenes[active];

  return (
    <div className="relative w-full rounded-2xl bg-[#1A1A1A] border border-white/5 shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.8)] p-6 md:p-8">
      {/* Room illustration */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0d0d0d]">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 transition-all duration-[400ms] ease-out"
          style={{
            background: `radial-gradient(ellipse at 50% 18%, ${s.glow}, transparent 65%)`,
          }}
        />
        {/* Isometric room SVG */}
        <svg
          viewBox="0 0 400 300"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Back wall */}
          <polygon
            points="80,40 320,40 320,200 80,200"
            fill={s.wall}
            style={{ transition: "fill 400ms ease-out" }}
          />
          {/* Floor */}
          <polygon
            points="80,200 320,200 360,260 40,260"
            fill={s.floor}
            style={{ transition: "fill 400ms ease-out" }}
          />
          {/* Pendant cord */}
          <line x1="200" y1="40" x2="200" y2="95" stroke="hsl(0 0% 30%)" strokeWidth="1.5" />
          {/* Pendant lamp shade */}
          <path
            d="M 175 95 Q 200 90 225 95 L 215 120 Q 200 125 185 120 Z"
            fill="hsl(0 0% 12%)"
            stroke="hsl(0 0% 25%)"
            strokeWidth="1"
          />
          {/* Bulb light */}
          <ellipse
            cx="200"
            cy="125"
            rx="14"
            ry="6"
            fill={s.bulb}
            style={{ transition: "fill 400ms ease-out" }}
          />
          {/* Light cone */}
          <polygon
            points="186,118 214,118 280,260 120,260"
            fill={s.glow}
            opacity="0.55"
            style={{ transition: "fill 400ms ease-out" }}
          />
          {/* Sofa */}
          <rect x="110" y="180" width="80" height="30" rx="4" fill="hsl(0 0% 16%)" />
          <rect x="110" y="170" width="80" height="14" rx="3" fill="hsl(0 0% 20%)" />
          {/* Side table */}
          <rect x="210" y="195" width="30" height="20" fill="hsl(0 0% 14%)" />
          {/* Wall art */}
          <rect x="240" y="80" width="50" height="40" fill="hsl(0 0% 10%)" stroke="hsl(0 0% 22%)" />
          {/* Plant */}
          <rect x="290" y="180" width="18" height="22" fill="hsl(0 0% 14%)" />
          <circle cx="299" cy="172" r="14" fill={s.ambient} opacity="0.35" style={{ transition: "fill 400ms ease-out" }} />
        </svg>
        {/* Bulb halo */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl pointer-events-none transition-all duration-[400ms]"
          style={{ top: "22%", background: s.glow }}
        />
      </div>

      {/* Scene buttons */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        {(Object.keys(scenes) as SceneKey[]).map((key) => {
          const sc = scenes[key];
          const Icon = sc.icon;
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActive(key)}
              className={`group relative flex flex-col items-center gap-1.5 rounded-xl border px-3 py-3 transition-all duration-300 ${
                isActive
                  ? "border-primary bg-primary/10 shadow-[0_0_24px_-4px_hsl(26_100%_50%/0.6)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]"
              }`}
              aria-pressed={isActive}
            >
              <Icon
                size={18}
                className={isActive ? "text-primary" : "text-white/70 group-hover:text-white"}
              />
              <span
                className={`text-xs font-semibold tracking-tight ${
                  isActive ? "text-primary" : "text-white/80"
                }`}
              >
                {sc.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Caption */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-[11px] tracking-[0.18em] text-white/40 uppercase">
          {s.caption}
        </p>
        <p className="text-[11px] text-white/50">
          Control any scene from the <span className="text-primary font-semibold">Moi Space App</span>
        </p>
      </div>
    </div>
  );
};

export default HeroScenePanel;