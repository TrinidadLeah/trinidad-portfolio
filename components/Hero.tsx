"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const MistShader = dynamic(() => import("./MistShader"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay so text "eases in like it's being remembered"
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* ── Scanline overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(245,242,236,0.018) 0px, rgba(245,242,236,0.018) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* ── Mist shader ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <MistShader />
      </div>

      {/* ── Dawn light — off-white trying to bleed through ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 38% 42%, rgba(245,242,236,0.055) 0%, rgba(245,242,236,0.018) 45%, transparent 75%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 flex flex-col justify-between min-h-screen px-8 py-8 md:px-16 md:py-12">

        {/* Top bar */}
        <div className="flex justify-between items-start">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "#00FF94", opacity: 0.65 }}
          >
            PORTFOLIO — 2025
          </span>
          <nav aria-label="Section navigation">
            <ul className="flex gap-8 list-none">
              {["work", "about", "contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="font-mono text-xs tracking-widest transition-colors duration-400"
                    style={{ color: "#F5F2EC", opacity: 0.35 }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#00FF94")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#F5F2EC")
                    }
                  >
                    {link.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main title block — eases in */}
        <div
          className="max-w-5xl"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(1.2rem)",
            transition:
              "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Label */}
          <div className="mb-5 flex items-center gap-3">
            <span
              className="font-mono text-xs tracking-widest"
              style={{ color: "#00FF94", opacity: 0.7 }}
            >
              &#x25A0;&nbsp;DESIGNER.AI_SYSTEMS
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-syne font-extrabold leading-none tracking-tight mb-8"
            style={{
              fontSize: "clamp(3.8rem, 11vw, 9.5rem)",
              color: "#F5F2EC",
            }}
          >
            Trinidad
            <br />
            <span style={{ color: "#8B5CF6" }}>Araujo</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-mono text-sm md:text-base leading-relaxed max-w-lg"
            style={{ color: "#F5F2EC", opacity: 0.45 }}
          >
            Senior Product Designer.
            <br />
            AI orchestration + agent experience.
            <br />
            Making the uncanny feel intentional.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end">
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "#F5F2EC", opacity: 0.22 }}
          >
            SCROLL &#x2193;
          </span>
          <div
            className="font-mono text-xs tracking-wider text-right"
            style={{ color: "#F5F2EC", opacity: 0.25 }}
          >
            Currently at Siemens
            <br />
            <span style={{ color: "#00FF94", opacity: 0.9 }}>&#x25CF;</span>
            &nbsp;Q2 2026
          </div>
        </div>
      </div>

      {/* ── Bottom rule ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px z-20"
        style={{ backgroundColor: "rgba(107,63,160,0.4)" }}
      />
    </section>
  );
}
