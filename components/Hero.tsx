"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const WireMesh = dynamic(() => import("./WireMesh"), {
  ssr: false,
  loading: () => null,
});

const NAV = [
  {
    label: "Work",
    href: "#work",
    style: { top: "44%", left: "6%" },
    delay: 140,
  },
  {
    label: "About",
    href: "#about",
    style: { top: "28%", right: "7%" },
    delay: 220,
  },
  {
    label: "Contact",
    href: "#contact",
    style: { bottom: "17%", left: "41%" },
    delay: 300,
  },
] as const;

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    // Clear stagger delays once the entrance has finished so hover
    // transitions respond instantly.
    const s = setTimeout(() => setSettled(true), 1200);
    return () => {
      clearTimeout(t);
      clearTimeout(s);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <style>{`
        .hero-in {
          opacity: 0;
          transform: translateY(18px);
          transition:
            opacity 600ms var(--ease-enter),
            transform 600ms var(--ease-enter),
            color 250ms ease;
        }
        .hero-in-down { transform: translateY(-12px); }
        .hero-mounted .hero-in { opacity: 1; transform: none; }

        .hero-nav { color: #F5F2EC; }
        .hero-nav:focus-visible { color: #00FF94; outline: none; }
        @media (hover: hover) and (pointer: fine) {
          .hero-mounted .hero-nav {
            transition:
              color 250ms ease,
              transform 450ms var(--ease-enter),
              opacity 450ms var(--ease-enter);
          }
          .hero-nav:hover { color: #00FF94; transform: translateX(10px); }
        }
      `}</style>

      {/* ── Galaxy background ── */}
      <div className="absolute inset-0 z-0">
        <WireMesh />
      </div>

      {/* ── Scanline overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,255,148,0.008) 0px, rgba(0,255,148,0.008) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* ── Content ── */}
      <div className={`absolute inset-0 z-20 ${mounted ? "hero-mounted" : ""}`}>
        {/* Name — top left */}
        <p
          className="hero-in hero-in-down absolute font-mono font-bold tracking-widest"
          style={{
            top: "1.5rem",
            left: "2rem",
            color: "#F5F2EC",
            fontSize: "1.25rem",
            letterSpacing: "0.14em",
          }}
        >
          TRINIDAD ARAUJO
        </p>

        {/* Scattered nav anchors */}
        {NAV.map(({ label, href, style, delay }) => (
          <a
            key={href}
            href={href}
            className="hero-in hero-nav absolute font-syne font-bold uppercase leading-none select-none"
            style={{
              ...style,
              fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)",
              letterSpacing: "-0.02em",
              transitionDelay: settled ? "0ms" : `${delay}ms`,
            }}
          >
            {label}
          </a>
        ))}

        {/* Bottom bio strip */}
        <div
          className="hero-in absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-x-5 gap-y-1 px-8 py-5 font-mono text-xs tracking-wide"
          style={{
            borderTop: "1px solid rgba(0,255,148,0.18)",
            backgroundColor: "rgba(10,10,15,0.5)",
            transitionDelay: settled ? "0ms" : "420ms",
          }}
        >
          <span className="pulse-soft" style={{ color: "#00FF94", fontSize: "0.55rem" }}>◆</span>
          <span style={{ color: "#00FF94", letterSpacing: "0.12em" }}>
            Senior Product Designer @ Siemens
          </span>
          <span style={{ color: "rgba(245,242,236,0.15)" }}>|</span>
          <span style={{ color: "rgba(245,242,236,0.3)", letterSpacing: "0.08em" }}>
            Previously @ Supplyframe &nbsp;·&nbsp; Thomson Reuters &nbsp;·&nbsp; Walmart Global Tech
          </span>
        </div>
      </div>
    </section>
  );
}
