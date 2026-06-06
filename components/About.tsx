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
            className="flex justify-between items-baseline mb-16 pb-4 border-b"
            style={{ borderColor: "rgba(245,242,236,0.08)" }}
          >
            <h2
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "#F5F2EC", opacity: 0.25 }}
            >
              About
            </h2>
          </div>

          {/* Lead statement */}
          <p
            className="font-syne font-medium leading-relaxed mb-16"
            style={{
              fontSize: "clamp(1.35rem, 3vw, 2rem)",
              color: "#F5F2EC",
              opacity: 0.88,
            }}
          >
            I design interfaces for systems that are still
            learning what they are.
          </p>

          {/* Two-column detail */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
            <div>
              <h3
                className="font-mono text-xs tracking-widest mb-5"
                style={{ color: "#00FF94", opacity: 0.65 }}
              >
                APPROACH
              </h3>
              <p
                className="font-mono text-sm leading-loose"
                style={{ color: "#F5F2EC", opacity: 0.38 }}
              >
                Good AI product design means making uncertainty a first-class
                citizen. Designing not just for states, but for the spaces between
                states — where the system hesitates and the user has to decide
                whether to trust it.
              </p>
            </div>

            <div>
              <h3
                className="font-mono text-xs tracking-widest mb-5"
                style={{ color: "#00FF94", opacity: 0.65 }}
              >
                BACKGROUND
              </h3>
              <p
                className="font-mono text-sm leading-loose"
                style={{ color: "#F5F2EC", opacity: 0.38 }}
              >
                10 years in product. Led design at [Studio], [Company]. Currently
                consulting on agent experience for early-stage AI teams who need
                someone to ask the uncomfortable design questions.
              </p>
            </div>
          </div>

          {/* Skill strip */}
          <div
            className="mt-20 pt-8 border-t flex flex-wrap gap-6 md:gap-10"
            style={{ borderColor: "rgba(245,242,236,0.06)" }}
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
                className="font-mono text-xs tracking-wider"
                style={{ color: "#F5F2EC", opacity: 0.18 }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bottom rule */}
          <div
            className="mt-16 h-px w-full"
            style={{ backgroundColor: "rgba(107,63,160,0.25)" }}
          />
        </div>

        {/* ── Right: photo ── */}
        <div className="relative w-full hidden md:block" style={{ top: "3.5rem" }}>
          {/* Thin purple top accent line */}
          <div
            className="w-full h-px mb-0"
            style={{ backgroundColor: "rgba(139,92,246,0.5)" }}
          />
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about_photo.JPG"
              alt="Trinidad Araujo"
              className="w-full h-full object-cover object-top"
              style={{ filter: "grayscale(12%) contrast(1.04)" }}
            />
            {/* Subtle dark gradient at bottom to blend into section bg */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 0%, rgba(10,10,15,0.65) 100%)",
              }}
            />
          </div>
          {/* Thin purple bottom accent line */}
          <div
            className="w-full h-px"
            style={{ backgroundColor: "rgba(139,92,246,0.2)" }}
          />
          {/* Caption */}
          <p
            className="font-mono text-xs mt-3 tracking-widest"
            style={{ color: "#F5F2EC", opacity: 0.18 }}
          >
            TRINIDAD ARAUJO — SF / REMOTE
          </p>
        </div>

      </div>
    </section>
  );
}
