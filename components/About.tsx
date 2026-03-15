export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-8 md:px-16"
      style={{ backgroundColor: "#0A0A0F" }}
    >
      <div className="max-w-3xl">

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
              states—where the system hesitates and the user has to decide
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

        {/* Horizontal rule at bottom */}
        <div
          className="mt-16 h-px w-full"
          style={{ backgroundColor: "rgba(107,63,160,0.25)" }}
        />
      </div>
    </section>
  );
}
