import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YOGA SAGAR — Digital Intermediate Artist & Colorist" },
      { name: "description", content: "Yoga Sagar — Professional DI Artist crafting cinematic color for feature films, advertisements, music videos and OTT content. 10+ years, 100+ projects." },
      { property: "og:title", content: "YOGA SAGAR — Digital Intermediate Artist" },
      { property: "og:description", content: "Every Frame Has a Story. Every Color Has an Emotion. Every Grade Has a Purpose." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const NAV = [
  ["About", "about"], ["Reel", "reel"], ["Work", "work"], ["Before / After", "ba"],
  ["Process", "process"], ["Contact", "contact"],
];

const STATS = [
  { n: "10+", l: "Years" }, { n: "100+", l: "Projects" },
  { n: "24", l: "Feature Films" }, { n: "60+", l: "Commercials" },
];

const PROJECTS = [
  { videoId: "5gFVYoGgBGM" },
  { videoId: "aSmu0eJMJoc" },
  { videoId: "cS0UBYfMJFM" },
  { videoId: "SCgNUJwbFys" },
  { videoId: "ZA9w2JbXe_4" },
];


const TOOLS = ["DaVinci Resolve", "Baselight", "Premiere Pro", "After Effects"];

const CLIENTS = [
  "PRISM PICTURES", "LUMIÈRE", "VANTA FILMS", "APERTURE OTT", "NIGHTLINE",
  "FABLE&CO", "MERIDIAN STUDIOS", "HALO MEDIA", "AXIS CREATIVES", "NORTH STAR",
];

const TIMELINE = [
  { y: "2024", t: "Echoes of Dust — Feature DI" },
  { y: "2023", t: "Aurea Campaign — Global Ad" },
  { y: "2022", t: "Cold Room — OTT Series, 8 eps" },
  { y: "2021", t: "Voltage — Music Video Series" },
  { y: "2019", t: "Tides Between Us — Festival Selection" },
  { y: "2016", t: "Began independent grading practice" },
];

const TESTIMONIALS = [
  { q: "Yoga Sagar's color grading transformed our film and elevated every frame to cinematic perfection.", a: "Director, Echoes of Dust" },
  { q: "He doesn't just grade — he writes mood with light. Our campaign sold out in two weeks.", a: "Creative Director, Fable&Co" },
  { q: "A rare colorist who reads story before he touches a wheel. Indispensable.", a: "DOP, Lumière Studios" },
];

function Home() {
  return (
    <div className="min-h-screen bg-black text-white grain">
      <Nav />
      <Hero />
      <About />
      <Reel />
      <Portfolio />
      <BeforeAfter />
      <Process />
      <Software />
      <Timeline />
      <Clients />
      <Testimonials />
      <FinalTagline />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/70 backdrop-blur-xl border-b border-white/5" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl tracking-[0.2em]">
          YOGA SAGAR<span className="text-orange">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.25em] uppercase text-white/70">
          {NAV.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="hover:text-white transition-colors">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center px-5 py-2.5 text-[11px] tracking-[0.25em] uppercase border border-orange/60 text-orange hover:bg-orange hover:text-black transition-all">
          Book a Call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Cinematic color graded still" width={1920} height={1080}
          className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_85%)]" />
      </div>

      {/* film bars */}
      <div className="absolute top-0 inset-x-0 h-4 filmstrip opacity-60" />
      <div className="absolute bottom-0 inset-x-0 h-4 filmstrip opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full pt-28 pb-16">
        <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] text-orange uppercase mb-6">
          <span className="w-8 h-px bg-orange" /> Reel 24 / DI Colorist
        </div>
        <h1 className="font-display text-[20vw] md:text-[14vw] leading-[0.85] tracking-[0.02em] text-cinematic">
          YOGA SAGAR
        </h1>
        <div className="mt-6 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-white/70">
              Professional Digital Intermediate Artist
            </p>
            <p className="mt-4 text-lg md:text-xl text-white/85 max-w-xl">
              Transforming visual stories through color for over <span className="text-orange">10 years</span>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#reel" className="group inline-flex items-center gap-3 px-7 py-4 bg-orange text-black text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-white transition-all">
              ▸ View Showreel
            </a>
            <a href="#work" className="inline-flex items-center gap-3 px-7 py-4 border border-white/30 text-[11px] tracking-[0.3em] uppercase hover:border-teal hover:text-teal transition-all">
              Explore Portfolio
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/40 animate-pulse">
        Scroll
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-28 lg:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src="/sagar.jpeg" alt="Portrait of Sagar" width={1024} height={1280}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-white/70">
              <span>Color Suite</span><span className="text-orange">●REC</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <SectionLabel n="01" label="About" />
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95] mt-4">
            Color is <span className="text-orange">memory.</span><br />
            Light is <span className="text-teal">language.</span>
          </h2>
          <div className="mt-8 space-y-5 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
            <p>With over a decade in Digital Intermediate and color grading, Yoga Sagar has collaborated on feature films, advertisements, music videos, OTT productions, and commercial campaigns.</p>
            <p>His expertise lies in crafting cinematic visual identities that elevate storytelling through color, contrast, mood, and visual consistency.</p>
            <p>Whether it's a blockbuster feature, a high-end advertisement, or an independent creative project — precision, creativity, and technical excellence reach every frame.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {STATS.map((s) => (
              <div key={s.l} className="bg-black p-6">
                <div className="font-display text-4xl md:text-5xl text-orange">{s.n}</div>
                <div className="mt-1 text-[10px] tracking-[0.3em] uppercase text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reel() {
  return (
    <section id="reel" className="py-28 lg:py-40 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionLabel n="02" label="Featured Showreel" />
            <h2 className="font-display text-6xl md:text-8xl mt-3">The Art of Color</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-[10px] tracking-[0.3em] uppercase">
            {["Feature Films", "Advertisements", "Music Videos", "OTT Content"].map((t) => (
              <span key={t} className="px-3 py-2 border border-white/15 text-white/70">{t}</span>
            ))}
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden border border-white/10 group glass">
          <iframe
            src="https://www.youtube.com/embed/Y_4pl4PFu9I"
            title="Featured Showreel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="py-28 lg:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <div>
            <SectionLabel n="03" label="Selected Work" />
            <h2 className="font-display text-6xl md:text-8xl mt-3">Portfolio</h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <article key={p.videoId} className="group relative overflow-hidden border border-white/5 bg-surface aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${p.videoId}`}
                title={`YouTube video player ${i}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  useEffect(() => {
    const up = () => (dragging.current = false);
    const mm = (e: MouseEvent) => dragging.current && move(e.clientX);
    const tm = (e: TouchEvent) => dragging.current && move(e.touches[0].clientX);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    window.addEventListener("mousemove", mm);
    window.addEventListener("touchmove", tm);
    return () => {
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchmove", tm);
    };
  }, []);

  return (
    <section id="ba" className="py-28 lg:py-40 border-t border-white/5 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <SectionLabel n="04" label="Before / After" center />
          <h2 className="font-display text-6xl md:text-8xl mt-3">Raw → Final Grade</h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto">Drag the slider. Watch the story emerge from log footage.</p>
        </div>

        <div ref={ref}
          onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
          className="relative aspect-video w-full overflow-hidden border border-white/10 cursor-ew-resize select-none">
          <img src="/colurgraderaw1.png" alt="Before grade" width={1600} height={900} loading="lazy"
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
            <img src="/clourgradefinal.png" alt="After grade" width={1600} height={900} loading="lazy"
              className="w-full h-full object-cover" />
          </div>

          <span className="absolute top-5 left-5 px-3 py-1.5 bg-black/70 backdrop-blur text-[10px] tracking-[0.3em] uppercase text-white/80 border border-white/10">Raw Footage</span>
          <span className="absolute top-5 right-5 px-3 py-1.5 bg-orange text-black text-[10px] tracking-[0.3em] uppercase">Final DI</span>

          <div className="absolute top-0 bottom-0 w-px bg-white shadow-[0_0_20px_rgba(255,107,0,0.8)] pointer-events-none"
            style={{ left: `${pos}%` }}>
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-orange flex items-center justify-center text-black text-xs">
              ⇆
            </div>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {["Skin Tone Enhancement", "Day-to-Night Conversion", "Cinematic Look Creation", "Commercial Grade"].map((t, i) => (
            <div key={t} className="bg-black p-6">
              <div className="font-mono text-xs text-orange mb-2">0{i + 1}</div>
              <div className="font-display text-2xl">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Process() {
  const steps = [
    { t: "Color Workflow", d: "Camera-original RAW conform, ACES pipeline, scene-referred grading from log to display." },
    { t: "Look Development", d: "Mood boards, reference grading, custom DRT and creative LUTs built per project." },
    { t: "HDR Mastering", d: "Dolby Vision, HDR10, and SDR trims delivered with critical reference monitoring." },
    { t: "Final Delivery", d: "DCP, IMF, ProRes 4444 XQ, broadcast-safe masters and platform-specific encodes." },
  ];
  return (
    <section id="process" className="py-28 lg:py-40 border-t border-white/5 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionLabel n="06" label="Behind the Grade" />
          <h2 className="font-display text-6xl md:text-8xl mt-3">The Process</h2>
          <p className="mt-5 text-white/60 text-lg">From dailies to deliverable — a workflow built on collaboration, taste, and technical rigor.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {steps.map((s, i) => (
            <div key={s.t} className="bg-black p-8 group hover:bg-surface-2 transition-colors">
              <div className="font-mono text-xs text-teal mb-6">PHASE / 0{i + 1}</div>
              <h3 className="font-display text-3xl">{s.t}</h3>
              <p className="mt-3 text-sm text-white/55 leading-relaxed">{s.d}</p>
              <div className="mt-8 h-px w-12 bg-orange group-hover:w-24 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Software() {
  return (
    <section className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel n="07" label="Software Expertise" />
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS.map((t) => (
            <div key={t} className="glass p-7 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-orange/50 flex items-center justify-center text-orange font-display text-xl">
                {t[0]}
              </div>
              <div>
                <div className="font-display text-xl tracking-wide">{t}</div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">Certified</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section className="py-28 border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <SectionLabel n="08" label="Filmography" />
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-12">2016 → Present</h2>
        <ol className="relative border-l border-white/10 ml-3">
          {TIMELINE.map((e) => (
            <li key={e.y} className="pl-8 pb-10 last:pb-0 relative group">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-orange shadow-[0_0_0_4px_#000,0_0_0_5px_rgba(255,107,0,0.3)] group-hover:scale-150 transition-transform" />
              <div className="font-mono text-xs tracking-[0.3em] text-teal">{e.y}</div>
              <div className="mt-1 font-display text-2xl md:text-3xl">{e.t}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Clients() {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8">
        <SectionLabel n="09" label="Clients & Collaborations" />
      </div>
      <div className="relative">
        <div className="flex gap-16 whitespace-nowrap" style={{ animation: "marquee 40s linear infinite", width: "max-content" }}>
          {row.map((c, i) => (
            <span key={i} className="font-display text-3xl md:text-4xl tracking-[0.25em] text-white/30 hover:text-orange transition-colors">
              {c} <span className="text-white/10 ml-16">✦</span>
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-28 lg:py-40 border-t border-white/5 bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionLabel n="10" label="Voices" />
        <h2 className="font-display text-5xl md:text-7xl mt-3 mb-14">In Their Words</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="glass p-8 relative">
              <div className="font-display text-7xl text-orange/40 leading-none mb-2">"</div>
              <p className="text-lg text-white/85 leading-relaxed">{t.q}</p>
              <footer className="mt-6 text-[10px] tracking-[0.3em] uppercase text-teal">— {t.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalTagline() {
  return (
    <section className="py-32 border-t border-white/5 text-center grain">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <p className="font-display text-4xl md:text-6xl leading-[1.1]">
          <span className="block">Every Frame Has a <span className="text-orange">Story.</span></span>
          <span className="block mt-2">Every Color Has an <span className="text-teal">Emotion.</span></span>
          <span className="block mt-2">Every Grade Has a <span className="text-white">Purpose.</span></span>
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-40 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel n="11" label="Contact" />
          <h2 className="font-display text-5xl md:text-7xl mt-3 leading-[0.95]">
            Let's create something <span className="text-orange">cinematic.</span>
          </h2>
          <p className="mt-6 text-white/60 max-w-md">For feature DI, advertisements, OTT delivery and creative grading sessions.</p>

          <div className="mt-12 space-y-5 text-sm">
            {[
              ["Email", "studio@sagar-di.com"],
              ["Phone", "+91 97042 22920"],
              ["WhatsApp", "+91 97042 22920"],
              ["Location", "Mumbai, India"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-6 border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 w-24">{k}</span>
                <span className="font-display text-2xl tracking-wide">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); }} className="glass p-8 lg:p-10 space-y-6">
          <Field label="Name" placeholder="Your name" />
          <Field label="Email" type="email" placeholder="you@studio.com" />
          <div>
            <label className="block text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">Project Type</label>
            <select className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm focus:border-orange outline-none transition-colors">
              {["Feature Film", "Advertisement", "Music Video", "OTT / Series", "Corporate / Other"].map(o => (
                <option key={o} className="bg-black">{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">Message</label>
            <textarea rows={5} placeholder="Tell me about your project, format, runtime, delivery date…"
              className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm focus:border-orange outline-none resize-none transition-colors" />
          </div>
          <button type="submit" className="w-full py-4 bg-orange text-black text-[11px] tracking-[0.3em] uppercase font-semibold hover:bg-white transition-colors">
            Send Message ▸
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.3em] uppercase text-white/50 mb-2">{label}</label>
      <input type={type} placeholder={placeholder}
        className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm focus:border-orange outline-none transition-colors" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row gap-4 items-center justify-between text-[10px] tracking-[0.3em] uppercase text-white/40">
        <span className="font-display text-xl text-white tracking-[0.2em]">YOGA SAGAR<span className="text-orange">.</span></span>
        <span>© {new Date().getFullYear()} — Digital Intermediate Studio</span>
        <span>Crafted in 4K · DCI-P3</span>
      </div>
    </footer>
  );
}

function SectionLabel({ n, label, center }: { n: string; label: string; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase text-orange ${center ? "justify-center" : ""}`}>
      <span className="font-mono text-white/40">/ {n}</span>
      <span className="w-8 h-px bg-orange" />
      <span>{label}</span>
    </div>
  );
}
