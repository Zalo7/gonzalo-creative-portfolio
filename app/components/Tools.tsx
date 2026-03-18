"use client";

import { motion } from "framer-motion";

const S = {
  magenta: "#f72585",
  black: "#111111",
  gray: "#888888",
  display: "'GeneralSans-Bold', system-ui, sans-serif",
  body: "'GeneralSans-Bold', system-ui, sans-serif",
  semibold: "'GeneralSans-Semibold', system-ui, sans-serif",
} as const;

const TOOLS = [
  { name: "CapCut", bg: "#000000", color: "#ffffff", accent: "#ffffff", emoji: "CC", size: "large" },
  { name: "DaVinci Resolve", bg: "#1a0a00", color: "#FF6B35", accent: "#FF6B35", emoji: "DV", size: "medium" },
  { name: "Higgsfield AI", bg: "#0a1a0a", color: "#A8E63D", accent: "#A8E63D", emoji: "HF", size: "medium" },
  { name: "Figma", bg: "#1e1e1e", color: "#1ABCFE", accent: "#1ABCFE", emoji: "Fi", size: "small" },
  { name: "Illustrator", bg: "#FF9A00", color: "#fff", accent: "#fff", emoji: "Ai", size: "small" },
  { name: "Canva", bg: "#00C4CC", color: "#fff", accent: "#fff", emoji: "Ca", size: "small" },
  { name: "Meta Business", bg: "#0866FF", color: "#fff", accent: "#fff", emoji: "Mb", size: "small" },
  { name: "Notion", bg: "#ffffff", color: "#000000", accent: "#000000", emoji: "No", size: "small" },
];

export default function Tools() {
  return (
    <section
      style={{
        backgroundColor: "#fff",
        padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)",
        borderTop: "1px solid rgba(17,17,17,0.06)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: S.magenta }} />
            <span style={{ fontFamily: S.semibold, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: S.magenta }}>
              Tools & Tech
            </span>
          </div>
          <h2 style={{ fontFamily: S.display, fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.025em", color: S.black, margin: 0 }}>
            My toolkit
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
          gap: 12,
        }}>
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, y: -4 }}
              style={{
                gridColumn: tool.size === "large" ? "span 2" : "span 1",
                gridRow: tool.size === "large" ? "span 2" : "span 1",
                backgroundColor: tool.bg,
                borderRadius: 20,
                padding: "clamp(24px, 4vw, 40px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: tool.size === "large" ? 280 : 140,
                cursor: "pointer",
                transition: "box-shadow 0.3s ease",
                boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Subtle glow */}
              <div style={{
                position: "absolute",
                bottom: -40, right: -40,
                width: 140, height: 140,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${tool.accent}18 0%, transparent 70%)`,
                pointerEvents: "none",
              }} />

              <div style={{
                fontFamily: S.display,
                fontSize: tool.size === "large" ? "3.5rem" : "2rem",
                fontWeight: 700,
                color: tool.accent,
                letterSpacing: "-0.02em",
                opacity: 0.9,
              }}>
                {tool.emoji}
              </div>

              <div style={{
                fontFamily: S.semibold,
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: tool.color,
                opacity: 0.6,
              }}>
                {tool.name}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            fontFamily: S.body,
            fontSize: "0.75rem",
            color: "rgba(17,17,17,0.3)",
            marginTop: 24,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          + Notion · Google Suite · Meta Business Suite · Trello
        </motion.p>
      </div>
    </section>
  );
}