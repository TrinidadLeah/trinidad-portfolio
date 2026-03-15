"use client";

import { useState } from "react";

export default function Contact() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="contact"
      className="flex flex-col min-h-[60vh] px-8 py-24 md:px-16"
      style={{ backgroundColor: "#F5F2EC" }}
    >
      {/* Section header */}
      <div
        className="flex justify-between items-baseline mb-16 pb-4 border-b"
        style={{ borderColor: "rgba(10,10,15,0.12)" }}
      >
        <h2
          className="font-mono text-xs tracking-widest uppercase"
          style={{ color: "#0A0A0F", opacity: 0.3 }}
        >
          Contact
        </h2>
      </div>

      {/* Email block — feels like leaving a note */}
      <div className="flex-1 flex flex-col justify-center py-12">
        <p
          className="font-mono text-xs tracking-widest mb-8"
          style={{ color: "#0A0A0F", opacity: 0.3 }}
        >
          LEAVE A NOTE
        </p>

        <a
          href="mailto:hello@trinidad.design"
          className="font-syne font-bold leading-none transition-colors duration-400 focus:outline-none focus-visible:underline"
          style={{
            fontSize: "clamp(1.6rem, 5.5vw, 4.5rem)",
            color: hovered ? "#6B3FA0" : "#0A0A0F",
            textDecoration: "none",
            display: "inline-block",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          aria-label="Send email to hello@trinidad.design"
        >
          hello@trinidad.design
        </a>
      </div>

      {/* Footer */}
      <div
        className="flex justify-between items-end pt-12 border-t"
        style={{
          borderColor: "rgba(10,10,15,0.1)",
          color: "#0A0A0F",
          opacity: 0.18,
        }}
      >
        <span className="font-mono text-xs tracking-wider">
          TRINIDAD RAÚJO — 2025
        </span>
        <span className="font-mono text-xs tracking-wider hidden md:block">
          SENIOR PRODUCT DESIGNER
        </span>
        <span className="font-mono text-xs tracking-wider">
          AI &#x2022; AGENT &#x2022; UX
        </span>
      </div>
    </section>
  );
}
