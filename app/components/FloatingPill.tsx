"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const S = {
  magenta: "#f72585",
  black: "#111111",
  display: "'GeneralSans-Bold', system-ui, sans-serif",
  body: "'GeneralSans-Medium', system-ui, sans-serif",
  semibold: "'GeneralSans-Semibold', system-ui, sans-serif",
} as const;

const MENU_ITEMS = [
  {
    label: "Work",
    sublabel: "Videos & Projects",
    href: "#work",
    thumbnail: "/thumbnails/menu-work.jpg",
    tags: ["Reels", "Branding"],
  },
  {
    label: "About",
    sublabel: "Who I am",
    href: "#about",
    thumbnail: "/thumbnails/menu-about.jpg",
    tags: [],
  },
  {
    label: "Tools",
    sublabel: "What I use",
    href: "#tools",
    thumbnail: "/thumbnails/menu-tools.jpg",
    tags: [],
  },
  {
    label: "Contact",
    sublabel: "Let's talk",
    href: "#contact",
    thumbnail: "/thumbnails/menu-contact.jpg",
    tags: ["Freelance", "Collab"],
  },
];

const SOCIALS = [
  { label: "Instagram", url: "https://instagram.com/lorenzon_gonzalo" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/gonzalolorenzonfullstack/" },
  { label: "TikTok", url: "https://tiktok.com/@zalo78" },
];

export default function FloatingPill() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 38,
              backgroundColor: "rgba(0,0,0,0.3)",
              backdropFilter: "blur(4px)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: "fixed",
              bottom: 128,
              left: 0, right: 0,
              margin: "0 auto",
              width: "min(440px, calc(100vw - 48px))",
              zIndex: 45,
              backgroundColor: "#111111",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
            }}
          >
            {/* Header */}
            <div style={{
              padding: "20px 24px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
              <div>
                <div style={{ fontFamily: S.display, fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>
                  Gonzalo Lorenzon
                </div>
                <div style={{ fontFamily: S.body, fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: S.magenta, marginTop: 2 }}>
                  Video Editor · Content Creator
                </div>
              </div>
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: S.semibold,
                  fontSize: "0.65rem", fontWeight: 600,
                  letterSpacing: "0.08em",
                  backgroundColor: "#fff", color: "#111",
                  padding: "8px 16px", borderRadius: 100,
                  textDecoration: "none",
                }}
              >
                Let's talk
              </motion.a>
            </div>

            {/* Nav items */}
            <div style={{ padding: "8px 0" }}>
              {MENU_ITEMS.map((item, i) => (
                <MenuItem key={item.label} item={item} index={i} onClose={() => setOpen(false)} />
              ))}
            </div>

            {/* Socials footer */}
            <div style={{
              padding: "16px 24px 20px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: 20,
            }}>
              {SOCIALS.map(s => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: S.body,
                    fontSize: "0.7rem", fontWeight: 500,
                    color: "rgba(255,255,255,0.35)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        style={{
          position: "fixed",
          bottom: 32,
          left: 0, right: 0,
          margin: "0 auto",
          width: "fit-content",
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "#111111",
          borderRadius: 100,
          padding: "8px 20px 8px 8px",
          boxShadow: open
            ? "0 8px 60px rgba(247,37,133,0.35), 0 2px 12px rgba(0,0,0,0.4)"
            : "0 8px 40px rgba(247,37,133,0.2), 0 2px 12px rgba(0,0,0,0.3)",
          border: `1px solid ${open ? "rgba(247,37,133,0.3)" : "rgba(247,37,133,0.15)"}`,
          whiteSpace: "nowrap",
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        {/* Memoji */}
        <div style={{
          width: 80, height: 80, borderRadius: 18,
          backgroundColor: "#fde8f1",
          overflow: "hidden", position: "relative", flexShrink: 0,
        }}>
          <video
            src="https://res.cloudinary.com/dzzb9h5xc/video/upload/v1773799399/Disen%CC%83o_sin_ti%CC%81tulo_1_uvk060.mp4"
            autoPlay loop muted playsInline
            style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%) scale(1.4)",
              width: "90%", height: "90%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <div style={{ fontFamily: S.display, fontSize: "0.9rem", fontWeight: 700, color: "#fff", letterSpacing: "0.02em" }}>
            GONZALO LORENZON
          </div>
          <div style={{ fontFamily: S.body, fontSize: "0.6rem", fontWeight: 500, color: S.magenta, letterSpacing: "0.14em", textTransform: "uppercase" }}>
            Video Editor · Content Creator · SMM
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 40, backgroundColor: "rgba(247,37,133,0.2)", marginLeft: 4 }} />

        {/* Menu toggle button */}
        <motion.button
          onClick={() => setOpen(o => !o)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "6px", display: "flex", flexDirection: "column",
            gap: 5, alignItems: "center", justifyContent: "center",
          }}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: 20, height: 1.5, backgroundColor: open ? S.magenta : "rgba(255,255,255,0.6)", display: "block", borderRadius: 2 }}
          />
          <motion.span
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            style={{ width: 20, height: 1.5, backgroundColor: "rgba(255,255,255,0.6)", display: "block", borderRadius: 2 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: 20, height: 1.5, backgroundColor: open ? S.magenta : "rgba(255,255,255,0.6)", display: "block", borderRadius: 2 }}
          />
        </motion.button>
      </motion.div>
    </>
  );
}

function MenuItem({ item, index, onClose }: {
  item: typeof MENU_ITEMS[0];
  index: number;
  onClose: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={item.href}
      onClick={onClose}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "12px 24px",
        textDecoration: "none",
        backgroundColor: hovered ? "rgba(255,255,255,0.04)" : "transparent",
        transition: "background-color 0.2s",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Thumbnail */}
      <div style={{
        width: 56, height: 40,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "rgba(255,255,255,0.08)",
        flexShrink: 0,
        position: "relative",
      }}>
        <img
          src={item.thumbnail}
          alt={item.label}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={e => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Fallback gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, rgba(247,37,133,0.3), rgba(17,17,17,0.8))`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontFamily: S.display, fontSize: "0.7rem", color: "rgba(255,255,255,0.5)" }}>
            {item.label[0]}
          </span>
        </div>
      </div>

      {/* Label */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: S.semibold,
          fontSize: "0.95rem", fontWeight: 600,
          color: hovered ? "#fff" : "rgba(255,255,255,0.85)",
          transition: "color 0.2s",
        }}>
          {item.label}
        </div>
        <div style={{
          fontFamily: S.body,
          fontSize: "0.65rem", fontWeight: 500,
          color: "rgba(255,255,255,0.3)",
          marginTop: 2,
        }}>
          {item.sublabel}
        </div>
      </div>

      {/* Tags */}
      {item.tags.length > 0 && (
        <div style={{ display: "flex", gap: 6 }}>
          {item.tags.map(tag => (
            <span key={tag} style={{
              fontFamily: S.body,
              fontSize: "0.55rem", fontWeight: 500,
              letterSpacing: "0.08em", textTransform: "uppercase",
              backgroundColor: "rgba(247,37,133,0.15)",
              color: S.magenta,
              padding: "3px 8px", borderRadius: 100,
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Arrow */}
      <motion.span
        animate={{ x: hovered ? 3 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}
      >
        →
      </motion.span>
    </motion.a>
  );
}