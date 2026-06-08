import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, Wifi, Thermometer } from "lucide-react";
import { Link } from "react-router-dom";

const floatingBadges = [
  {
    icon: <Zap size={13} className="text-primary" />,
    label: "Energy Saved",
    value: "47%",
    posClass: "-top-5 -left-8",
    delay: 0,
  },
  {
    icon: <Shield size={13} className="text-emerald-500" />,
    label: "Security",
    value: "Armed",
    posClass: "-top-3 -right-10",
    delay: 0.9,
  },
  {
    icon: <Wifi size={13} className="text-sky-500" />,
    label: "Connected",
    value: "12 Devices",
    posClass: "-bottom-7 -left-10",
    delay: 1.8,
  },
  {
    icon: <Thermometer size={13} className="text-orange-400" />,
    label: "Temperature",
    value: "22°C",
    posClass: "-bottom-4 -right-8",
    delay: 2.7,
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,102,0,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient orange glow blobs */}
      <div className="absolute top-1/4 right-1/3 w-[700px] h-[700px] rounded-full bg-primary/[0.06] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[130px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-28 lg:py-0">

          {/* ── Left: Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-semibold tracking-tight">
                Next-Gen Smart Automation
              </span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl lg:text-[80px] font-extrabold tracking-tighter text-foreground mb-8 leading-[0.9]">
              Intelligent
              <br />
              Automation.
              <br />
              <span className="text-gradient-cyan">Elevated Life.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-normal">
              MOI Technologies delivers enterprise-grade smart automation for
              homes, offices, hotels, and cafes — beautifully engineered for
              modern living.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl btn-primary-cyan text-base font-bold tracking-tight transition-all hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(255,102,0,0.42)]"
              >
                Get Demo <ArrowRight size={18} />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground text-base font-semibold hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Play size={9} className="text-primary ml-0.5" fill="currentColor" />
                </span>
                Explore Solutions
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              {[
                { value: "500+", label: "Installations" },
                { value: "98%", label: "Satisfaction" },
                { value: "50+", label: "Cities Served" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 + i * 0.12 }}
                >
                  <div className="text-2xl font-extrabold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Dashboard Mockup ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-[430px]">
              {/* Main card */}
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-[0_30px_80px_rgba(0,0,0,0.12)] bg-white">
                {/* Title bar */}
                <div className="bg-[#0f0f0f] px-5 py-3.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-white/45 text-xs font-mono">
                    MOI Control Center
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-white/40 text-[11px]">Live</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-4">
                  {/* Room tabs */}
                  <div className="flex gap-1.5">
                    {["Living Room", "Bedroom", "Kitchen"].map((room, i) => (
                      <button
                        key={room}
                        className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-colors ${
                          i === 0
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {room}
                      </button>
                    ))}
                  </div>

                  {/* Lighting row */}
                  <div className="p-3.5 rounded-2xl bg-primary/5 border border-primary/10">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-base">
                          💡
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-foreground">
                            Smart Lighting
                          </div>
                          <div className="text-[10px] text-primary font-medium">
                            80% brightness
                          </div>
                        </div>
                      </div>
                      <div className="w-11 h-6 bg-primary rounded-full relative cursor-pointer flex-shrink-0">
                        <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
                      </div>
                    </div>
                    <div className="h-1.5 bg-white rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-gradient-to-r from-primary/60 to-primary rounded-full" />
                    </div>
                  </div>

                  {/* 2-col controls */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-100">
                      <div className="text-xl mb-2">🌡️</div>
                      <div className="text-xs font-semibold text-foreground">Thermostat</div>
                      <div className="text-xl font-extrabold text-sky-500 tracking-tight">22°C</div>
                      <div className="text-[10px] text-sky-400 mt-0.5">Auto mode</div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100">
                      <div className="text-xl mb-2">🔒</div>
                      <div className="text-xs font-semibold text-foreground">Security</div>
                      <div className="text-sm font-bold text-emerald-500 tracking-tight">Armed</div>
                      <div className="text-[10px] text-emerald-400 mt-0.5">All locked</div>
                    </div>
                  </div>

                  {/* Energy mini-chart */}
                  <div className="p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-semibold text-foreground">
                        Energy Today
                      </span>
                      <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                        ↓ 47% saved
                      </span>
                    </div>
                    <div className="flex items-end gap-0.5 h-10">
                      {[40, 65, 45, 80, 55, 35, 60, 45, 70, 50, 40, 58].map(
                        (h, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-sm ${
                              i === 10 ? "bg-primary" : "bg-gray-200"
                            }`}
                            style={{ height: `${h}%` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              {floatingBadges.map((badge, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -9, 0] }}
                  transition={{
                    duration: 3.2 + i * 0.4,
                    delay: badge.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute ${badge.posClass} bg-white rounded-xl shadow-lg border border-gray-100 px-3 py-2 flex items-center gap-2 z-10`}
                >
                  {badge.icon}
                  <div>
                    <div className="text-[10px] text-muted-foreground leading-none">
                      {badge.label}
                    </div>
                    <div className="text-xs font-bold text-foreground leading-none mt-0.5">
                      {badge.value}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Glow behind card */}
              <div className="absolute -inset-8 -z-10 bg-primary/12 blur-3xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
