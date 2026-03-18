"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const S = {
  magenta: "#f72585",
  black: "#111111",
  gray: "#888888",
  offWhite: "#fef6f9",
  magentaLight: "#fde8f1",
  display: "'GeneralSans-Bold', system-ui, sans-serif",
  body: "'GeneralSans-Regular', system-ui, sans-serif",
  semibold: "'GeneralSans-Semibold', system-ui, sans-serif",
} as const;

const STATS = [
  { value: "2067", suffix: "%", label: "Organic growth", sublabel: "Crecimiento orgánico" },
  { value: "500", suffix: "K+", label: "Monthly interactions", sublabel: "Interacciones mensuales" },
  { value: "3", suffix: "+", label: "Years of experience", sublabel: "Años de experiencia" },
  { value: "2", suffix: "", label: "Agencies worked with", sublabel: "Agencias" },
];

const SKILLS = [
  "CapCut", "DaVinci Resolve", "Higgsfield AI",
  "Figma", "Canva", "Illustrator",
  "Meta Business Suite", "Notion", "Google Suite",
];

function useCountUp(target: number, duration = 1.5, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index, inView }: { stat: typeof STATS[0]; index: number; inView: boolean }) {
  const count = useCountUp(parseInt(stat.value), 1.8, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        padding: "24px", borderRadius: 16,
        backgroundColor: index % 2 === 0 ? "#fff" : S.offWhite,
        border: "1px solid rgba(247,37,133,0.1)",
      }}
    >
      <div style={{ fontFamily: S.display, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: S.black, lineHeight: 1 }}>
        {inView ? count.toLocaleString() : 0}{stat.suffix}
      </div>
      <div style={{ fontFamily: S.semibold, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: S.magenta, marginTop: 6 }}>
        {stat.label}
      </div>
      <div style={{ fontFamily: S.body, fontSize: "0.65rem", color: S.gray, marginTop: 2 }}>
        {stat.sublabel}
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const [lang, setLang] = useState<"en" | "es">("en");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsInView(true); },
      { threshold: 0.3 }
    );
    const el = document.getElementById("about-stats");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const videoY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const bioEN = [
    "Based between Buenos Aires and the world. I'm a video editor and content creator obsessed with the intersection of aesthetics and strategy. Every frame is intentional. I don't just make content, I craft stories that build brands.",
    "I've worked with agencies and independent clients across fashion, lifestyle and digital culture, driving real, measurable growth through visual storytelling.",
  ];

  const bioES = [
    "Con base entre Buenos Aires y el mundo. Soy editor de video y creador de contenido obsesionado con la intersección entre estética y estrategia. Cada frame es intencional. No solo hago contenido, construyo historias que construyen marcas.",
    "Trabajé con agencias y clientes independientes en moda, lifestyle y cultura digital, generando crecimiento real y medible a través del storytelling visual.",
  ];

  const bio = lang === "en" ? bioEN : bioES;

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        backgroundColor: S.offWhite,
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)",
        borderTop: "1px solid rgba(17,17,17,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 64 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: S.magenta, display: "inline-block" }} />
          <span style={{ fontFamily: S.semibold, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: S.magenta }}>
            About
          </span>
        </motion.div>

        {/* Main grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "start",
        }}>

          {/* LEFT — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: S.display,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 700, lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: S.black, marginBottom: 32,
              }}
            >
              Frames with<br />
              <span style={{ color: S.magenta, fontStyle: "italic" }}>intention.</span>
            </motion.h2>

            {/* Language toggle */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {(["en", "es"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    fontFamily: S.semibold,
                    fontSize: "0.6rem", fontWeight: 600,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    padding: "6px 14px", borderRadius: 100,
                    cursor: "pointer", border: "none",
                    backgroundColor: lang === l ? S.magenta : "rgba(17,17,17,0.08)",
                    color: lang === l ? "#fff" : S.gray,
                    transition: "all 0.2s",
                  }}
                >
                  {l === "en" ? "English" : "Español"}
                </button>
              ))}
            </div>

            {/* Bio */}
            <AnimatePresence mode="wait">
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {bio.map((para, i) => (
                  <p key={i} style={{
                    fontFamily: S.body,
                    fontSize: "0.95rem", lineHeight: 1.75,
                    color: "rgba(17,17,17,0.65)",
                    marginBottom: 16, fontWeight: 400,
                  }}>
                    {para}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ marginTop: 32 }}
            >
              <div style={{
                fontFamily: S.semibold,
                fontSize: "0.6rem", fontWeight: 600,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: S.gray, marginBottom: 14,
              }}>
                Tools
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      fontFamily: S.body,
                      fontSize: "0.65rem", fontWeight: 500,
                      padding: "6px 14px", borderRadius: 100,
                      backgroundColor: "#fff", color: S.black,
                      border: "1px solid rgba(17,17,17,0.1)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — video */}
          <motion.div
            style={{ y: videoY, display: "flex", justifyContent: "center" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                borderRadius: 20, overflow: "hidden",
                boxShadow: "0 20px 60px rgba(247,37,133,0.15)",
                width: "100%", maxWidth: 300,
              }}
            >
              <div style={{ aspectRatio: "9/16", backgroundColor: "#1a1a1a", position: "relative" }}>
                <video
                  src="/videos/Portfolio-Video.mp4"
                  autoPlay loop muted playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }}
                />
                {/* Placeholder */}
                <div style={{
                  position: "absolute", inset: 0, zIndex: 1,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexDirection: "column", gap: 8,
                }}>
                  <div style={{ fontFamily: S.display, fontSize: "3rem", color: "rgba(247,37,133,0.15)" }}>GL</div>
                  <div style={{ fontFamily: S.body, fontSize: "0.6rem", color: "rgba(255,255,255,0.15)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Video coming soon
                  </div>
                </div>
                {/* Label */}
                <div style={{
                  position: "absolute", bottom: 16, left: 16, right: 16, zIndex: 2,
                  backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
                  borderRadius: 10, padding: "10px 14px",
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: S.magenta, flexShrink: 0 }} />
                  <span style={{ fontFamily: S.body, fontSize: "0.65rem", color: "#fff", letterSpacing: "0.06em" }}>
                    Gonzalo Lorenzon · Video Editor
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <div
          id="about-stats"
          style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={statsInView} />
          ))}
        </div>
      </div>
    </section>
  );
}