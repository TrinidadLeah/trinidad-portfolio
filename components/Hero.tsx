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
  },
  {
    label: "About",
    href: "#about",
    style: { top: "28%", right: "7%" },
  },
  {
    label: "Contact",
    href: "#contact",
    style: { bottom: "17%", left: "41%" },
  },
] as const;

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* ── Wire mesh ── */}
      <div className="absolute inset-0 z-0">
        <WireMesh />
      </div>

      {/* ── Scanline overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(245,242,236,0.015) 0px, rgba(245,242,236,0.015) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* ── Content ── */}
      <div
        className="absolute inset-0 z-20"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Name — top left */}
        <p
          className="absolute font-mono tracking-widest"
          style={{
            top: "1.75rem",
            left: "2rem",
            color: "#F5F2EC",
            fontSize: "0.7rem",
            opacity: 0.85,
            letterSpacing: "0.18em",
          }}
        >
          TRINIDAD ARAUJO
        </p>

        {/* Scattered nav anchors */}
        {NAV.map(({ label, href, style }) => (
          <a
            key={href}
            href={href}
            className="absolute font-syne font-bold uppercase leading-none select-none"
            style={{
              ...style,
              fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)",
              color: "#F5F2EC",
              letterSpacing: "-0.02em",
              transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
              opacity: 0.9,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.35")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.9")}
          >
            {label}
          </a>
        ))}

        {/* Bottom bio strip */}
        <div
          className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center gap-x-5 gap-y-1 px-8 py-4 font-mono text-xs tracking-wide"
          style={{
            borderTop: "1px solid rgba(245,242,236,0.07)",
            color: "#F5F2EC",
          }}
        >
          <span style={{ opacity: 0.75 }}>Senior Product Designer @ Siemens</span>
          <span style={{ opacity: 0.2 }}>|</span>
          <span style={{ opacity: 0.3 }}>
            Previously @ Supplyframe &nbsp;·&nbsp; Thomson Reuters &nbsp;·&nbsp; Walmart Global Tech
          </span>
        </div>
      </div>
    </section>
  );
}
