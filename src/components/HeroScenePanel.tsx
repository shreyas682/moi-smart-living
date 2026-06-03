import { useState } from "react";
import { Sun, UtensilsCrossed, Moon } from "lucide-react";

type SceneKey = "morning" | "dinner" | "night";

const scenes: Record<
  SceneKey,
  {
    label: string;
    caption: string;
    icon: typeof Sun;
    photo: string;
  }
> = {
  morning: {
    label: "Morning",
    caption: "Cool white • 5500K",
    icon: Sun,
    photo:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
  },
  dinner: {
    label: "Dinner",
    caption: "Warm amber • 2700K",
    icon: UtensilsCrossed,
    photo:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  },
  night: {
    label: "Night",
    caption: "Dim glow • 1800K",
    icon: Moon,
    photo:
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=1200&q=80",
  },
};

const HeroScenePanel = () => {
  const [active, setActive] = useState<SceneKey>("dinner");
  const s = scenes[active];

  return (
    <div className="relative w-full rounded-2xl bg-[#1A1A1A] border border-white/5 shadow-[0_30px_80px_-20px_hsl(0_0%_0%/0.8)] p-6 md:p-8">
      {/* Room photos — fade between three distinct scenes */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#0d0d0d]">
        {(Object.keys(scenes) as SceneKey[]).map((key) => {
          const sc = scenes[key];
          const isActive = active === key;
          return (
            <img
              key={key}
              src={sc.photo}
              alt={`${sc.label} scene — ${sc.caption}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              style={{ opacity: isActive ? 1 : 0 }}
              loading="eager"
            />
          );
        })}
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