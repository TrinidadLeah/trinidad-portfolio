export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-16 md:gap-24 items-start">

        {/* ── Left: all text content ── */}
        <div>
          {/* Section header */}
          <div
            className="flex justify-between items-baseline mb-16 pb-4"
            style={{ borderBottom: "1px solid rgba(0,255,148,0.12)" }}
          >
            <h2
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "#00FF94", opacity: 0.55 }}
            >
              ◆&nbsp;&nbsp;About
            </h2>
          </div>

          {/* Lead statement */}
          <p
            className="font-syne font-bold leading-tight mb-16"
            style={{
              fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
              color: "#F5F2EC",
            }}
          >
            I design interfaces for systems that are still
            learning what they are.
          </p>

          {/* Two-column detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            <div>
              <h3
                className="font-mono text-xs tracking-widest mb-5 uppercase"
                style={{ color: "#00FF94" }}
              >
                Approach
              </h3>
              <p
                className="font-mono text-sm leading-loose"
                style={{ color: "rgba(245,242,236,0.4)" }}
              >
                Good AI product design means making uncertainty a first-class
                citizen. Designing not just for states, but for the spaces between
                states — where the system hesitates and the user has to decide
                whether to trust it.
              </p>
            </div>

            <div>
              <h3
                className="font-mono text-xs tracking-widest mb-5 uppercase"
                style={{ color: "#00FF94" }}
              >
                Background
              </h3>
              <p
                className="font-mono text-sm leading-loose"
                style={{ color: "rgba(245,242,236,0.4)" }}
              >
                10 years in product. Led design at [Studio], [Company]. Currently
                consulting on agent experience for early-stage AI teams who need
                someone to ask the uncomfortable design questions.
              </p>
            </div>
          </div>

          {/* Skill strip */}
          <div
            className="mt-20 pt-8 flex flex-wrap gap-4"
            style={{ borderTop: "1px solid rgba(0,255,148,0.1)" }}
          >
            {[
              "Agent Experience",
              "AI Product Design",
              "Design Systems",
              "Interaction Design",
              "UX Research",
            ].map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs tracking-wider px-3 py-1"
                style={{
                  color: "rgba(0,255,148,0.45)",
                  border: "1px solid rgba(0,255,148,0.15)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: photo ── */}
        <div className="relative w-full hidden md:block" style={{ top: "3.5rem" }}>
          {/* Green top accent line */}
          <div
            className="w-full h-px mb-0"
            style={{ backgroundColor: "rgba(0,255,148,0.35)" }}
          />
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about_photo.JPG"
              alt="Trinidad Araujo"
              className="w-full h-full object-cover object-top"
              style={{ filter: "grayscale(30%) contrast(1.1)" }}
            />
            {/* Dark gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(10,10,15,0.8) 100%)",
              }}
            />
          </div>
          {/* Green bottom accent line */}
          <div
            className="w-full h-px"
            style={{ backgroundColor: "rgba(0,255,148,0.12)" }}
          />
          {/* Caption */}
          <p
            className="font-mono text-xs mt-3 tracking-widest"
            style={{ color: "rgba(0,255,148,0.3)" }}
          >
            TRINIDAD ARAUJO — SF / REMOTE
          </p>
        </div>

      </div>
    </section>
  );
}
