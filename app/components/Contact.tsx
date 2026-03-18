"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const S = {
  magenta: "#f72585",
  black: "#111111",
  gray: "#888888",
  offWhite: "#fef6f9",
  magentaLight: "#fde8f1",
  display: "'GeneralSans-Bold', system-ui, sans-serif",
  body: "'GeneralSans-Medium', system-ui, sans-serif",
  semibold: "'GeneralSans-Semibold', system-ui, sans-serif",
} as const;

const SOCIALS = [
  { label: "Instagram", handle: "@bastrastudio", url: "https://instagram.com/bastrastudio" },
  { label: "LinkedIn", handle: "Gonzalo Lorenzon", url: "https://www.linkedin.com/in/gonzalolorenzonfullstack/" },
  { label: "TikTok", handle: "@zalo78", url: "https://tiktok.com/@zalo78" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("gonzalolorenzon@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative", backgroundColor: S.black,
        overflow: "hidden",
        padding: "clamp(80px, 12vw, 160px) clamp(24px, 6vw, 80px)",
      }}
    >
      {/* Glows */}
      <div style={{ position: "absolute", top: -200, right: -200, width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(247,37,133,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -100, left: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(247,37,133,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: S.magenta }} />
          <span style={{ fontFamily: S.semibold, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: S.magenta }}>
            Contact
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: S.display,
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            fontWeight: 700, lineHeight: 0.95,
            letterSpacing: "-0.03em", color: "#fff", marginBottom: 24,
          }}
        >
          Let's make<br />
          <span style={{ color: S.magenta, fontStyle: "italic" }}>something</span><br />
          unforgettable.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: S.body, fontSize: "1rem",
            color: "rgba(255,255,255,0.45)", fontWeight: 400,
            maxWidth: 420, lineHeight: 1.7, marginBottom: 48,
          }}
        >
          Open for freelance projects, brand collaborations and full-time opportunities.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 72 }}
        >
          <motion.a
            href="mailto:gonzalolorenzon@gmail.com"
            whileHover={{ scale: 1.04, backgroundColor: "#d4006e" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              backgroundColor: S.magenta, color: "#fff",
              fontFamily: S.semibold, fontWeight: 600, fontSize: "0.9rem",
              padding: "16px 32px", borderRadius: 100, textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            <span>✉</span> gonzalolorenzon@gmail.com
          </motion.a>

          <motion.button
            onClick={handleCopy}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.6)",
              fontFamily: S.semibold, fontWeight: 500, fontSize: "0.85rem",
              padding: "16px 28px", borderRadius: 100,
              cursor: "pointer", backgroundColor: "transparent",
              transition: "all 0.2s", letterSpacing: "0.02em",
            }}
          >
            {copied ? "✓ Copied!" : "Copy email"}
          </motion.button>
        </motion.div>

        {/* Divider */}
        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)", marginBottom: 48 }} />

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div style={{ fontFamily: S.semibold, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", marginBottom: 24 }}>
            Find me on
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ borderColor: S.magenta, color: "#fff" }}
                style={{
                  display: "inline-flex", flexDirection: "column", gap: 2,
                  padding: "14px 22px", borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.1)",
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >
                <span style={{ fontFamily: S.semibold, fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: S.magenta }}>
                  {s.label}
                </span>
                <span style={{ fontFamily: S.body, fontSize: "0.8rem", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>
                  {s.handle}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div style={{
          marginTop: 80, paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <span style={{ fontFamily: S.display, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.3)" }}>
            GL
          </span>
          <span style={{ fontFamily: S.body, fontSize: "0.7rem", color: "rgba(255,255,255,0.2)", fontWeight: 400 }}>
            © 2025 Gonzalo Lorenzon · Visual stories, real impact.
          </span>
        </div>
      </div>
    </section>
  );
}