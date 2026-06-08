import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

/* ── Visual mockups ── */

const HomeDashboard = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
    <div className="bg-[#0f0f0f] px-5 py-3.5 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <span className="text-white/45 text-xs font-mono">Home Dashboard</span>
      <span className="text-primary text-[11px] flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" /> Live
      </span>
    </div>
    <div className="p-5 space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {[
          { room: "Living Room", icon: "🛋️", on: true },
          { room: "Bedroom", icon: "🛏️", on: false },
          { room: "Kitchen", icon: "🍳", on: true },
          { room: "Office", icon: "💼", on: true },
        ].map(({ room, icon, on }) => (
          <div
            key={room}
            className={`p-3 rounded-xl border ${on ? "bg-primary/5 border-primary/20" : "bg-gray-50 border-gray-100"}`}
          >
            <div className="text-2xl mb-1">{icon}</div>
            <div className="text-xs font-semibold text-foreground">{room}</div>
            <div className={`text-[10px] font-medium ${on ? "text-primary" : "text-gray-400"}`}>
              {on ? "Active" : "Off"}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50 border border-sky-100">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🌡️</span>
          <div>
            <div className="text-xs font-semibold text-foreground">Climate</div>
            <div className="text-[10px] text-sky-500">22°C · Auto</div>
          </div>
        </div>
        <div className="text-2xl font-extrabold text-sky-500">22°</div>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-100">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">🔒</span>
          <div>
            <div className="text-xs font-semibold text-foreground">Security</div>
            <div className="text-[10px] text-emerald-500">All doors locked</div>
          </div>
        </div>
        <span className="text-[11px] font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full">Armed</span>
      </div>
    </div>
  </div>
);

const CafeDashboard = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
    <div className="bg-[#0f0f0f] px-5 py-3.5 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <span className="text-white/45 text-xs font-mono">Cafe Control Center</span>
      <span className="text-primary text-[11px] flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" /> 47 Guests
      </span>
    </div>
    <div className="p-5 space-y-3">
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Lighting Zones</div>
      {[
        { zone: "Main Floor", pct: 80 },
        { zone: "Outdoor Patio", pct: 60 },
        { zone: "Private Booth", pct: 40 },
        { zone: "Bar Area", pct: 90 },
      ].map(({ zone, pct }) => (
        <div key={zone} className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100">
          <span className="text-xs font-semibold text-gray-700">{zone}</span>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-20 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
            </div>
            <span className="text-[10px] text-primary font-bold w-6 text-right">{pct}%</span>
          </div>
        </div>
      ))}
      <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
        <span className="text-2xl">🎵</span>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-foreground">Ambient Jazz</div>
          <div className="text-[10px] text-primary">Volume: 45%</div>
        </div>
        <span className="text-primary text-sm font-bold">▶</span>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50 border border-sky-100">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">❄️</span>
          <div>
            <div className="text-xs font-semibold text-foreground">AC System</div>
            <div className="text-[10px] text-sky-500">24°C set</div>
          </div>
        </div>
        <span className="text-lg font-extrabold text-sky-500">24°C</span>
      </div>
    </div>
  </div>
);

const OfficeDashboard = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
    <div className="bg-[#0f0f0f] px-5 py-3.5 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <span className="text-white/45 text-xs font-mono">Office Management</span>
      <span className="text-emerald-400 text-[11px]">● 156 Employees</span>
    </div>
    <div className="p-5 space-y-3">
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Meeting Rooms</div>
      {[
        { name: "Boardroom A", status: "In Use", time: "14:00–16:00", bg: "bg-red-50 border-red-100", txt: "text-red-500" },
        { name: "Conference B", status: "Available", time: "Open", bg: "bg-emerald-50 border-emerald-100", txt: "text-emerald-500" },
        { name: "Huddle Room C", status: "Booked", time: "15:30", bg: "bg-yellow-50 border-yellow-100", txt: "text-yellow-600" },
      ].map(({ name, status, time, bg, txt }) => (
        <div key={name} className={`flex items-center justify-between p-2.5 rounded-xl border ${bg}`}>
          <div>
            <div className="text-xs font-semibold text-gray-700">{name}</div>
            <div className="text-[10px] text-gray-400">{time}</div>
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/70 ${txt}`}>{status}</span>
        </div>
      ))}
      <div className="p-3 rounded-xl bg-gray-50 border border-gray-100">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-semibold text-foreground">Energy Today</span>
          <span className="text-[11px] text-primary font-bold">↓ 41% vs avg</span>
        </div>
        <div className="flex items-end gap-0.5 h-10">
          {[50, 70, 45, 90, 65, 40, 75, 55, 80, 50, 60, 45].map((h, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === 9 ? "bg-primary" : "bg-gray-200"}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
        <div className="flex items-center gap-2">
          <span className="text-xl">🪪</span>
          <div>
            <div className="text-xs font-semibold text-foreground">Access Control</div>
            <div className="text-[10px] text-primary">12 entry points active</div>
          </div>
        </div>
        <span className="text-xs font-bold text-primary">Active</span>
      </div>
    </div>
  </div>
);

const HotelDashboard = () => (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
    <div className="bg-[#0f0f0f] px-5 py-3.5 flex items-center justify-between">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <span className="text-white/45 text-xs font-mono">Hotel Control Hub</span>
      <span className="text-primary text-[11px]">● Floor 12</span>
    </div>
    <div className="p-5 space-y-3">
      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Room 1201</div>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
        <span className="text-2xl">👋</span>
        <div>
          <div className="text-xs font-semibold text-foreground">Welcome, Mr. Sharma</div>
          <div className="text-[10px] text-primary">Check-out: Dec 15 · 2 nights</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { icon: "💡", label: "Lights", value: "Warm", on: true },
          { icon: "🌡️", label: "Climate", value: "23°C", on: true },
          { icon: "🚿", label: "Shower", value: "Ready", on: false },
          { icon: "📺", label: "TV", value: "Netflix", on: true },
        ].map(({ icon, label, value, on }) => (
          <div key={label} className={`p-3 rounded-xl border ${on ? "bg-primary/5 border-primary/20" : "bg-gray-50 border-gray-100"}`}>
            <div className="text-xl mb-1">{icon}</div>
            <div className="text-[10px] font-semibold text-gray-600">{label}</div>
            <div className={`text-[10px] font-bold ${on ? "text-primary" : "text-gray-400"}`}>{value}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between p-3 rounded-xl bg-red-50 border border-red-100">
        <div className="flex items-center gap-2">
          <span className="text-xl">🛑</span>
          <div>
            <div className="text-xs font-semibold text-foreground">Do Not Disturb</div>
            <div className="text-[10px] text-red-400">Until 11:00 AM</div>
          </div>
        </div>
        <div className="w-11 h-6 bg-red-400 rounded-full relative">
          <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow" />
        </div>
      </div>
    </div>
  </div>
);

/* ── Solution data ── */
const solutions = [
  {
    id: "smart-homes",
    tag: "Residential",
    title: "Smart Homes",
    subtitle: "Your Home, Perfectly Automated",
    description:
      "Transform your residence into an intelligent living space. Control every aspect of your home with a single app — from lighting and climate to security and entertainment.",
    features: [
      "Automated lighting & scene control",
      "Smart climate & thermostat management",
      "Integrated security & camera system",
      "Entertainment hub automation",
      "Real-time energy consumption monitoring",
      "Alexa, Google & HomeKit compatible",
    ],
    stats: [
      { value: "20+", label: "Device types" },
      { value: "47%", label: "Energy saved" },
      { value: "1-tap", label: "Scene control" },
    ],
    Dashboard: HomeDashboard,
    reverse: false,
    accentColor: "text-orange-500",
    tagColor: "bg-orange-50 text-orange-600 border-orange-100",
  },
  {
    id: "smart-cafes",
    tag: "Hospitality",
    title: "Smart Cafes",
    subtitle: "Elevate Every Guest Experience",
    description:
      "Create the perfect ambiance for your customers with intelligent lighting zones, climate control, and integrated systems that work in harmony to deliver exceptional experiences.",
    features: [
      "Zone-based ambient lighting scenes",
      "Integrated music & PA system control",
      "Multi-zone temperature management",
      "POS & ordering system integration",
      "Digital signage & display automation",
      "Per-zone energy optimisation",
    ],
    stats: [
      { value: "8+", label: "Light zones" },
      { value: "35%", label: "Energy saved" },
      { value: "99.9%", label: "Uptime" },
    ],
    Dashboard: CafeDashboard,
    reverse: true,
    accentColor: "text-sky-500",
    tagColor: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    id: "smart-offices",
    tag: "Enterprise",
    title: "Smart Offices",
    subtitle: "Work Smarter, Not Harder",
    description:
      "Boost productivity and reduce operational costs with intelligent office automation. From meeting room management to access control, we've got your workspace fully covered.",
    features: [
      "Meeting room booking & management",
      "Desk hoteling & occupancy sensing",
      "Smart access & visitor management",
      "HVAC & climate automation",
      "Automated blinds & daylight control",
      "Real-time energy analytics dashboard",
    ],
    stats: [
      { value: "+32%", label: "Productivity" },
      { value: "41%", label: "Energy saved" },
      { value: "∞", label: "Scale" },
    ],
    Dashboard: OfficeDashboard,
    reverse: false,
    accentColor: "text-purple-500",
    tagColor: "bg-purple-50 text-purple-600 border-purple-100",
  },
  {
    id: "smart-hotels",
    tag: "Luxury",
    title: "Smart Hotels",
    subtitle: "Luxury Redefined with Technology",
    description:
      "Deliver exceptional guest experiences with automated room controls, personalised settings, and energy-efficient management that runs seamlessly in the background.",
    features: [
      "In-room guest control panels",
      "Automated check-in & welcome flow",
      "Personalised climate & lighting presets",
      "Do Not Disturb & Make My Room",
      "Mini-bar & service request tracking",
      "Per-room energy management",
    ],
    stats: [
      { value: "4.9★", label: "Guest rating" },
      { value: "52%", label: "Energy saved" },
      { value: "1000+", label: "Rooms managed" },
    ],
    Dashboard: HotelDashboard,
    reverse: true,
    accentColor: "text-emerald-500",
    tagColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
];

/* ── Page ── */
const Solutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 px-6 bg-white text-center relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,102,0,0.06) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.05] blur-[140px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            Our Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-foreground mb-5 leading-[0.95]">
            Smart Automation for{" "}
            <span className="text-gradient-cyan">Every Space</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            From single rooms to entire buildings — MOI Technologies engineers
            intelligent environments that save energy, enhance comfort, and
            elevate every experience.
          </p>
        </motion.div>
      </section>

      {/* Solution sections */}
      {solutions.map((sol, sIdx) => {
        const { Dashboard } = sol;
        return (
          <section
            key={sol.id}
            id={sol.id}
            className={`py-24 px-6 ${sIdx % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}`}
          >
            <div className="section-divider max-w-5xl mx-auto mb-20" />
            <div className="container mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  sol.reverse ? "lg:flex lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: sol.reverse ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7 }}
                >
                  <span
                    className={`inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-widest mb-5 ${sol.tagColor}`}
                  >
                    {sol.tag}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-3">
                    {sol.title}
                  </h2>
                  <p className={`text-lg font-semibold mb-4 ${sol.accentColor}`}>
                    {sol.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                    {sol.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle size={15} className="text-primary flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="flex gap-8 py-6 border-y border-border mb-8">
                    {sol.stats.map(({ value, label }) => (
                      <div key={label}>
                        <div className="text-2xl font-extrabold text-foreground tracking-tight">{value}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl btn-primary-cyan text-sm font-bold tracking-tight hover:scale-[1.03] hover:shadow-[0_8px_28px_rgba(255,102,0,0.38)] transition-all"
                  >
                    Get a Demo <ArrowRight size={16} />
                  </Link>
                </motion.div>

                {/* Visual mockup */}
                <motion.div
                  initial={{ opacity: 0, x: sol.reverse ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Dashboard />
                  </motion.div>
                  {/* Glow behind */}
                  <div className="absolute -inset-8 -z-10 bg-primary/8 blur-3xl rounded-full" />
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Bottom CTA */}
      <section className="py-24 px-6 bg-white text-center">
        <div className="section-divider max-w-4xl mx-auto mb-20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">
            Ready to Transform{" "}
            <span className="text-gradient-cyan">Your Space?</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Let our automation experts design the perfect solution for your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl btn-primary-cyan text-base font-bold tracking-tight hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,102,0,0.42)] transition-all"
          >
            Get Your Custom Demo <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Solutions;
