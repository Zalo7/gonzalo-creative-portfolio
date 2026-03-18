"use client";

import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Tools from "./components/Tools";
import About from "./components/About";
import Contact from "./components/Contact";
import FloatingPill from "./components/FloatingPill";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}
      <main style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.5s ease" }}>
        <Navbar />
        <Hero />
        <Work />
        <Tools />
        <About />
        <Contact />
        <FloatingPill />
      </main>
    </>
  );
}