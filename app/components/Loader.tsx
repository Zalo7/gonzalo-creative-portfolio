"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit">("enter");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 800);
    const t2 = setTimeout(() => setPhase("exit"), 1800);
    const t3 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            backgroundColor: "#111111",
            display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Expanding circle */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={phase === "hold" ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "absolute",
              width: "200vmax", height: "200vmax",
              borderRadius: "50%",
              backgroundColor: "#f72585",
              opacity: 0.06,
            }}
          />

          {/* GL text */}
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontFamily: "'GeneralSans-Bold', system-ui, sans-serif",
                fontSize: "clamp(4rem, 15vw, 12rem)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              GL
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                height: 2,
                backgroundColor: "#f72585",
                transformOrigin: "left",
                marginTop: 16,
              }}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              style={{
                fontFamily: "'GeneralSans-Medium', system-ui, sans-serif",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginTop: 12,
              }}
            >
              Video Editor · Content Creator · SMM
            </motion.div>
          </div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              position: "absolute",
              bottom: 40, right: 40,
              fontFamily: "'GeneralSans-Medium', system-ui, sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            <CounterText />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function CounterText() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setN(prev => {
        if (prev >= 100) { clearInterval(iv); return 100; }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 80);
    return () => clearInterval(iv);
  }, []);
  return <span>{Math.min(n, 100)}%</span>;
}