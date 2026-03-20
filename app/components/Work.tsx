"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const S = {
  magenta: "#f72585",
  black: "#111111",
  gray: "#888888",
  display: "'GeneralSans-Bold', system-ui, sans-serif",
  body: "'GeneralSans-Medium', system-ui, sans-serif",
  semibold: "'GeneralSans-Semibold', system-ui, sans-serif",
} as const;

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  video: string;
  thumbnail: string;
  tags: string[];
  client?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Showreel 2024",
    category: "Video Editing",
    description: "Compilation of the best work from 2024.",
    video: "https://res.cloudinary.com/dzzb9h5xc/video/upload/v1774018264/6357effadf994affb4b562da3d42f95a_1_x7nor7.mov",
    thumbnail: "/thumbnails/Web.png",
    tags: ["Reels", "Color Grading"],
    client: "Personal",
  },
  {
    id: 2,
    title: "Brand Campaign",
    category: "Content Strategy",
    description: "Full content strategy for a fashion brand.",
    video: "https://res.cloudinary.com/dzzb9h5xc/video/upload/v1774041146/Video-flor_2_ennqtp.mov",
    thumbnail: "/thumbnails/Flor.JPG",
    tags: ["Branding", "SMM"],
    client: "Bastra Agency",
  },
  {
    id: 3,
    title: "Client Reel",
    category: "Social Media",
    description: "Monthly content production and community management.",
    video: "https://res.cloudinary.com/dzzb9h5xc/video/upload/v1773964311/66af08f4b8e544ef9953e015e590b27d_cfwznk.mov",
    thumbnail: "/thumbnails/Venice.png",
    tags: ["Reels", "SMM"],
    client: "Freelance",
  },
  {
    id: 4,
    title: "Lifestyle Content",
    category: "Video Editing",
    description: "Travel and lifestyle with cinematic color grading.",
    video: "https://res.cloudinary.com/dzzb9h5xc/video/upload/v1773799348/65FFFA87-EA80-4795-B37C-E247005C9729_ulbvnq.mp4",
    thumbnail: "/thumbnails/Barcelona.png",
    tags: ["Color Grading", "Travel"],
    client: "Personal",
  },
  {
    id: 5,
    title: "Product Launch",
    category: "Content Strategy",
    description: "Launch campaign with organic growth strategy.",
    video: "https://res.cloudinary.com/dzzb9h5xc/video/upload/v1774041404/export_1764629740498_b2wjni.mov",
    thumbnail: "/thumbnails/Itapema.png",
    tags: ["Strategy", "Branding"],
    client: "Bastra Agency",
  },
  {
    id: 6,
    title: "Personal Project",
    category: "Filmmaking",
    description: "Short film exploring visual storytelling.",
    video: "https://res.cloudinary.com/dzzb9h5xc/video/upload/v1774018305/20260123170901770_f9d6bk.mov",
    thumbnail: "/thumbnails/Itapema.png",
    tags: ["Filmmaking", "Storytelling"],
    client: "Personal",
  },
];

const CATEGORIES = ["All", "Video Editing", "Content Strategy", "Social Media", "Filmmaking"];

function VideoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 100,
        backgroundColor: "rgba(0,0,0,0.95)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: 24, gap: 40,
      }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        style={{
          width: "min(320px, 45vw)",
          aspectRatio: "9/16",
          borderRadius: 20,
          overflow: "hidden",
          backgroundColor: "#1a1a1a",
          flexShrink: 0,
        }}
      >
        <video
          src={project.video}
          controls autoPlay playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: 300 }}
      >
        <div style={{ fontFamily: S.semibold, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: S.magenta, marginBottom: 12 }}>
          {project.category}
        </div>
        <h3 style={{ fontFamily: S.display, fontSize: "2rem", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: S.body, fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(255,255,255,0.5)", marginBottom: 24 }}>
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{ fontFamily: S.body, fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", backgroundColor: "rgba(247,37,133,0.15)", color: S.magenta, padding: "5px 12px", borderRadius: 100 }}>
              {tag}
            </span>
          ))}
        </div>
        <button
          onClick={onClose}
          style={{ fontFamily: S.semibold, fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)", backgroundColor: "transparent", padding: "10px 20px", borderRadius: 100, cursor: "pointer" }}
        >
          ✕ Close
        </button>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: "16/9",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered ? "0 20px 50px rgba(247,37,133,0.2)" : "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      {/* Simple img — no position tricks */}
      <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#1a0a14" }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* Category badge */}
        <div style={{
          position: "absolute", top: 14, left: 14,
          fontFamily: S.semibold, fontSize: "0.55rem", fontWeight: 600,
          letterSpacing: "0.12em", textTransform: "uppercase",
          backgroundColor: "rgba(0,0,0,0.7)", color: "#fff",
          padding: "4px 10px", borderRadius: 100,
          backdropFilter: "blur(8px)",
        }}>
          {project.category}
        </div>

        {/* Hover overlay */}
        {hovered && (
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(17,17,17,0.9) 0%, rgba(247,37,133,0.2) 100%)",
            display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 20,
          }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <span style={{ fontSize: "1rem", marginLeft: 3 }}>▶</span>
            </div>
            <div style={{ fontFamily: S.display, fontSize: "1rem", fontWeight: 700, color: "#fff" }}>
              {project.title}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.category === active);

  return (
    <section id="work" style={{ backgroundColor: "#fff", padding: "clamp(80px, 10vw, 140px) clamp(24px, 6vw, 80px)", borderTop: "1px solid rgba(17,17,17,0.06)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: S.magenta, display: "inline-block" }} />
            <span style={{ fontFamily: S.semibold, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: S.magenta }}>Selected work</span>
          </div>
          <h2 style={{ fontFamily: S.display, fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.025em", color: S.black, margin: 0 }}>
            Work that <span style={{ color: S.magenta, fontStyle: "italic" }}>moves.</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ fontFamily: S.semibold, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 18px", borderRadius: 100, cursor: "pointer", border: active === cat ? "none" : "1px solid rgba(17,17,17,0.15)", backgroundColor: active === cat ? S.magenta : "transparent", color: active === cat ? "#fff" : "rgba(17,17,17,0.5)", transition: "all 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: 20 }}>
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <VideoModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}