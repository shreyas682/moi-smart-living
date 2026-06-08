import twoNodeSmartSwitchHero from "@/assets/two-node-smart-switch-hero.png";
import ledControllerWhiteLightHero from "@/assets/led-controller-white-light-hero.png";
import ledControllerRgbHero from "@/assets/led-controller-rgb-hero.png";
import rgbSteps from "@/assets/rgb-steps.png";
import rgbAmbient from "@/assets/rgb-ambient.png";
import rgbParty from "@/assets/rgb-party.png";
import rgbColorwheel from "@/assets/rgb-colorwheel.png";
import switchSteps from "@/assets/switch-steps.png";
import switchLivingRoom from "@/assets/switch-living-room.png";
import switchFanLamp from "@/assets/switch-fan-lamp.png";
import switchMobileApp from "@/assets/switch-mobile-app.png";
import whiteSteps from "@/assets/white-steps.png";
import whiteKitchen from "@/assets/white-kitchen.png";
import whiteStudyRoom from "@/assets/white-study-room.png";
import whiteBrightness from "@/assets/white-brightness.png";
/** Full hero graphics (dark bg + marketing type); use contain + dark frame in UI. */
export const PRODUCT_HERO_IMAGE_HREFS = [
  "/products#smart-switch",
  "/products#led-white",
  "/products#led-rgb",
] as const;

export function isProductHeroImage(href: string): boolean {
  return (PRODUCT_HERO_IMAGE_HREFS as readonly string[]).includes(href);
}

export const productMedia: Record<
  string,
  { stepsImage: string; gallery: { src: string; caption: string }[] }
> = {
  "/products#smart-switch": {
    stepsImage: switchSteps,
    gallery: [
      { src: switchLivingRoom, caption: "Living Room Lights ON" },
      { src: switchFanLamp, caption: "Fan & Lamp ON" },
      { src: switchMobileApp, caption: "Control from Anywhere" },
    ],
  },
  "/products#led-rgb": {
    stepsImage: rgbSteps,
    gallery: [
      { src: rgbAmbient, caption: "Ambient Lighting" },
      { src: rgbParty, caption: "Party Mode" },
      { src: rgbColorwheel, caption: "16 Million Colors at Your Fingertips" },
    ],
  },
  "/products#led-white": {
    stepsImage: whiteSteps,
    gallery: [
      { src: whiteKitchen, caption: "Kitchen Lighting" },
      { src: whiteStudyRoom, caption: "Study Room" },
      { src: whiteBrightness, caption: "Adjust Brightness with Ease" },
    ],
  },
};

export const products = [
  {
    name: "Two-Node Smart Switch",
    description:
      "Wireless 2-node smart switch for retrofit lighting control — no rewiring required.",
    specs: [
      "Dual-load (2 nodes)",
      "Wireless retrofit",
      "Moi Space app",
    ],
    image: twoNodeSmartSwitchHero,
    href: "/products#smart-switch",
    shortDescription:
      "Upgrade your home with the MOI Two-Node Smart Switch. Control lights and appliances wirelessly with smart assistants or your mobile device — no rewiring required.",
    features: [
      "Wireless Smart Control",
      "Works with Alexa & Google Home",
      "Dual Switch Control (2 nodes)",
      "Easy Installation (No rewiring)",
      "Energy Efficient",
      "Durable Build Quality",
    ],
    whyBetter:
      "Unlike traditional switches, MOI Smart Switch brings automation to your fingertips. Control devices remotely, automate schedules, and enhance convenience without changing your existing wiring.",
    demoText:
      "Turn your regular home into a smart home with simple installation and powerful control features.",
    reviews: [
      { name: "Karan", rating: "★★★★★", quote: "Super easy to install and use." },
      { name: "Priya", rating: "★★★★", quote: "Very convenient with voice control." },
      { name: "Arjun", rating: "★★★★★", quote: "Makes my home feel smart instantly." },
    ],
  },
  {
    name: "LED Controller – White Light",
    description:
      "CCT controller for tunable white LED strips. Precise dimming, scenes and scheduling.",
    specs: [
      "Tunable white (CCT)",
      "Flicker-free dimming",
      "Scenes & schedules",
    ],
    image: ledControllerWhiteLightHero,
    href: "/products#led-white",
    shortDescription:
      "Experience clean, focused lighting with the MOI LED Controller – White Light. Designed for productivity and comfort, it offers precise brightness control and scheduling for modern living spaces.",
    features: [
      "Adjustable Brightness Levels",
      "Smart Scheduling (Day/Night modes)",
      "App & Voice Control",
      "Energy Efficient Performance",
      "Minimal & Clean Lighting Output",
      "Quick Installation",
    ],
    whyBetter:
      "Built for simplicity and efficiency, this controller provides stable, flicker-free white lighting ideal for workspaces, study areas, and daily use. It consumes less power while delivering consistent brightness.",
    demoText:
      "Perfect for study rooms, offices, and minimal setups where clean lighting matters most.",
    reviews: [
      { name: "Rohan", rating: "★★★★★", quote: "Perfect for my study setup." },
      { name: "Sneha", rating: "★★★★", quote: "Simple and very useful." },
      { name: "Amit", rating: "★★★★★", quote: "Clean lighting, no eye strain." },
    ],
  },
  {
    name: "LED Controller – RGB",
    description:
      "RGB strip controller for design-led ambience — millions of colors, smooth scenes.",
    specs: [
      "16M color RGB",
      "Scene & schedule engine",
      "Moi Space app",
    ],
    image: ledControllerRgbHero,
    href: "/products#led-rgb",
    shortDescription:
      "Transform your home with dynamic RGB lighting. The MOI LED Controller – RGB lets you control millions of colors, create custom scenes, and sync lighting with your mood, music, or daily routine — all from your smartphone or voice assistant.",
    features: [
      "16 Million Color Options",
      "Smart App Control (iOS & Android)",
      "Voice Assistant Support (Alexa, Google Home)",
      "Music Sync Lighting Effects",
      "Scene Customization & Scheduling",
      "Easy Plug & Play Installation",
    ],
    whyBetter:
      "Unlike ordinary LED controllers, MOI RGB Controller delivers smoother transitions, zero flicker lighting, and seamless smart home integration. Built with premium materials and optimized software, it ensures long-lasting performance and a superior lighting experience.",
    demoText:
      "Create the perfect ambiance for every moment — from relaxing evenings to party nights. Control your entire lighting setup with just a tap or voice command.",
    reviews: [
      { name: "Rahul", rating: "★★★★★", quote: "Amazing lighting effects, totally changed my room vibe." },
      { name: "Ananya", rating: "★★★★", quote: "Works perfectly with Alexa, very smooth control." },
      { name: "Vikram", rating: "★★★★★", quote: "Best RGB controller in this price range." },
    ],
  },
] as const;

export type Product = (typeof products)[number];

export const getProductByHref = (href: string) =>
  products.find((product) => product.href === href);