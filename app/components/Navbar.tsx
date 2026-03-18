"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Work", "About", "Contact"];

const S = {
  magenta: "#f72585",
  display: "'GeneralSans-Bold', system-ui, sans-serif",
  body: "'GeneralSans-Medium', system-ui, sans-serif",
  semibold: "'GeneralSans-Semibold', system-ui, sans-serif",
} as const;

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 20);
      setVisible(y < lastY.current || y < 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
            backgroundColor: atTop ? "transparent" : "rgba(255,255,255,0.92)",
            backdropFilter: atTop ? "none" : "blur(12px)",
            borderBottom: atTop ? "none" : "1px solid rgba(247,37,133,0.08)",
            transition: "all 0.3s ease",
          }}
        >
          <div style={{
            maxWidth: 1400, margin: "0 auto",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "18px clamp(24px, 6vw, 80px)",
          }}>
            <motion.a
              href="#"
              whileHover={{ color: S.magenta }}
              style={{
                fontFamily: S.display, fontWeight: 700,
                fontSize: "0.85rem", letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#111",
                textDecoration: "none", transition: "color 0.2s",
              }}
            >
              GL
            </motion.a>

            <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
              {links.map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ y: -1, color: S.magenta }}
                  style={{
                    fontFamily: S.semibold, fontSize: "0.7rem", fontWeight: 600,
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    color: "rgba(17,17,17,0.5)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, backgroundColor: "#d4006e" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: S.semibold, fontSize: "0.7rem", fontWeight: 600,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  backgroundColor: S.magenta, color: "white",
                  padding: "10px 22px", borderRadius: 100, textDecoration: "none",
                }}
              >
                Let's talk
              </motion.a>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}