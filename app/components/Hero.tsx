"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "Gonzalo Lorenzon";
const TAGLINE = "Visual stories, real impact.";
const MARQUEE_ITEMS = [
  "Color Grading","Reels","Branding","Storytelling","Social Media","Content Strategy","Filmmaking","Direction",
  "Color Grading","Reels","Branding","Storytelling","Social Media","Content Strategy","Filmmaking","Direction",
];
const ROLES = ["Video Editor", "Content Creator", "SMM Specialist"];

const S = {
  magenta: "#f72585",
  black: "#111111",
  gray: "#888888",
  offWhite: "#fef6f9",
  magentaLight: "#fde8f1",
  display: "'GeneralSans-Bold', system-ui, sans-serif",
  body: "'GeneralSans-Medium', system-ui, sans-serif",
  semibold: "'GeneralSans-Semibold', system-ui, sans-serif",
  regular: "'GeneralSans-Regular', system-ui, sans-serif",
} as const;

function useTypewriter(text: string, speed = 55, startDelay = 400) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) { clearInterval(iv); setDone(true); }
      }, speed);
      return () => clearInterval(iv);
    }, startDelay);
    return () => clearTimeout(t);
  }, [text, speed, startDelay]);
  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypewriter(NAME);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setRoleIndex(i => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(iv);
  }, []);

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", backgroundColor: "#fff" }}>

      {/* Glow bg */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, #fde8f1 0%, transparent 70%)", pointerEvents: "none" }}
      />

      {/* Magenta dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
        style={{ position: "absolute", top: "18%", right: "12%", width: 56, height: 56, borderRadius: "50%", backgroundColor: S.magenta, pointerEvents: "none" }}
      />

      {/* Decorative line */}
      <motion.div
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        style={{ position: "absolute", left: 0, top: "52%", height: 1, width: 128, backgroundColor: S.magenta, opacity: 0.4, transformOrigin: "left" }}
      />

      {/* Main content */}
      <div className="container-width section-padding" style={{ paddingTop: 48, paddingBottom: 0 }}>

        {/* Role chip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: S.magenta, display: "inline-block" }} />
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: S.magenta, fontFamily: S.semibold }}
          >
            {ROLES[roleIndex]}
          </motion.span>
        </motion.div>

        {/* Name typewriter */}
        <h1 style={{ fontFamily: S.display, fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.03em", color: S.black, marginBottom: 16, minHeight: "1.1em" }}>
          {displayed}
          {!done && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              style={{ display: "inline-block", width: 3, height: "0.8em", backgroundColor: S.magenta, marginLeft: 4, verticalAlign: "middle" }}
            />
          )}
        </h1>

        {/* Tagline */}
        <motion.p
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: S.regular, fontStyle: "italic", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "rgba(17,17,17,0.35)", marginBottom: 40, maxWidth: 560 }}
        >
          {TAGLINE}
        </motion.p>

        {/* CTAs */}
        <motion.div
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.04, backgroundColor: "#d4006e" }}
            whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: S.magenta, color: "white", fontFamily: S.semibold, fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.04em", padding: "14px 28px", borderRadius: 100, textDecoration: "none" }}
          >
            See my work <span>→</span>
          </motion.a>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.04, borderColor: S.magenta, color: S.magenta }}
            whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(17,17,17,0.2)", color: S.black, fontFamily: S.semibold, fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.04em", padding: "14px 28px", borderRadius: 100, textDecoration: "none", transition: "all 0.2s" }}
          >
            About me
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          animate={{ opacity: done ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 40, marginTop: 64, paddingTop: 40, borderTop: "1px solid rgba(17,17,17,0.08)" }}
        >
          {[
            { value: "2067%", label: "Organic growth" },
            { value: "+500K", label: "Monthly interactions" },
            { value: "3+", label: "Years of experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div style={{ fontFamily: S.display, fontWeight: 700, fontSize: "1.9rem", color: S.black }}>{stat.value}</div>
              <div style={{ fontFamily: S.regular, fontSize: "0.65rem", color: S.gray, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        style={{ marginTop: 64, paddingTop: 16, paddingBottom: 16, borderTop: "1px solid #fde8f1", borderBottom: "1px solid #fde8f1", backgroundColor: S.offWhite }}
      >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {MARQUEE_ITEMS.map((item, i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 16, padding: "0 24px", fontFamily: S.regular, fontSize: "0.65rem", fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(17,17,17,0.45)" }}>
                {item}
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: S.magenta, opacity: 0.6, flexShrink: 0 }} />
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        style={{
          position: "fixed", bottom: 32, left: 0, right: 0,
          margin: "0 auto", width: "fit-content", zIndex: 40,
          display: "flex", alignItems: "center", gap: 16,
          backgroundColor: "#111111", borderRadius: 100,
          padding: "8px 20px 8px 8px",
          boxShadow: "0 8px 40px rgba(247,37,133,0.2), 0 2px 12px rgba(0,0,0,0.3)",
          border: "1px solid rgba(247,37,133,0.15)",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{ width: 80, height: 80, borderRadius: 18, backgroundColor: "#fde8f1", overflow: "hidden", position: "relative", flexShrink: 0 }}>
          <video
            src="/memoji/memoji.mp4"
            autoPlay loop muted playsInline
            style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) scale(1.4)", width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontFamily: S.display, fontSize: "0.9rem", fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>
            GONZALO LORENZON
          </div>
          <div style={{ fontFamily: S.regular, fontSize: "0.6rem", color: S.magenta, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Video Editor · Content Creator · SMM
          </div>
        </div>
        <div style={{ width: 1, height: 40, backgroundColor: "rgba(247,37,133,0.2)", marginLeft: 4 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 5, cursor: "pointer", padding: "0 4px" }}>
          <span style={{ width: 20, height: 1.5, backgroundColor: "rgba(255,255,255,0.5)", display: "block", borderRadius: 2 }} />
          <span style={{ width: 20, height: 1.5, backgroundColor: "rgba(255,255,255,0.5)", display: "block", borderRadius: 2 }} />
          <span style={{ width: 20, height: 1.5, backgroundColor: "rgba(255,255,255,0.5)", display: "block", borderRadius: 2 }} />
        </div>
      </motion.div>
    </section>
  );
}