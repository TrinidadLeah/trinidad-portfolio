import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col min-h-[60vh] px-8 py-24 md:px-16"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      {/* Section header */}
      <Reveal>
        <div
          className="flex justify-between items-baseline mb-16 pb-4"
          style={{ borderBottom: "1px solid rgba(0,255,148,0.12)" }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "#00FF94", opacity: 0.55 }}
          >
            ◆&nbsp;&nbsp;Contact
          </h2>
        </div>
      </Reveal>

      {/* Email block — feels like leaving a note */}
      <div className="flex-1 flex flex-col justify-center py-12">
        <Reveal delay={80}>
          <p
            className="font-mono text-xs tracking-widest mb-8"
            style={{ color: "rgba(0,255,148,0.45)" }}
          >
            LEAVE A NOTE
          </p>

          <a
            href="mailto:hello@trinidad.design"
            className="contact-email font-syne font-bold leading-none"
            style={{ fontSize: "clamp(1.6rem, 5.5vw, 4.5rem)" }}
            aria-label="Send email to hello@trinidad.design"
          >
            hello@trinidad.design
          </a>
        </Reveal>
      </div>

      {/* Footer */}
      <Reveal delay={140}>
        <div
          className="flex justify-between items-end pt-12"
          style={{
            borderTop: "1px solid rgba(0,255,148,0.1)",
            color: "rgba(245,242,236,0.25)",
          }}
        >
          <span className="font-mono text-xs tracking-wider">
            TRINIDAD ARAUJO — 2026
          </span>
          <span className="font-mono text-xs tracking-wider hidden md:block">
            SENIOR PRODUCT DESIGNER
          </span>
          <span className="font-mono text-xs tracking-wider">
            AI &#x2022; AGENT &#x2022; UX
          </span>
        </div>
      </Reveal>
    </section>
  );
}
