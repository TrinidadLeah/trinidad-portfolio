"use client";

const STUDIES = [
  {
    id: "01",
    title: "Chorus",
    category: "AI Orchestration",
    year: "2024",
    description:
      "Multi-agent workflow interface for enterprise LLM pipelines. Designing legibility into systems that think in parallel.",
    tags: ["Systems Design", "Agent UX", "B2B"],
    status: "CASE STUDY",
  },
  {
    id: "02",
    title: "Phantom OS",
    category: "Operating Environment",
    year: "2024",
    description:
      "A spatial interface for autonomous agent monitoring. Real-time state visualization at scale—when 40 agents are running, which one do you watch?",
    tags: ["Spatial UI", "Real-time", "Dark Pattern"],
    status: "CASE STUDY",
  },
  {
    id: "03",
    title: "Recall",
    category: "Memory Interface",
    year: "2023",
    description:
      "Personal memory augmentation. When the machine remembers differently than you do.",
    tags: ["Consumer", "AI", "Privacy-first"],
    status: "CASE STUDY",
  },
  {
    id: "04",
    title: "Signal / Noise",
    category: "Data Visualization",
    year: "2023",
    description:
      "Making model uncertainty legible. A design system for probabilistic outputs.",
    tags: ["Data Viz", "Design System", "ML"],
    status: "RESEARCH",
  },
];

export default function Work() {
  return (
    <>
      {/* CSS for hover state cascade — avoids per-child JS listeners */}
      <style>{`
        .work-card {
          background-color: #F5F2EC;
          transition: background-color 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .work-card:hover,
        .work-card:focus-within {
          background-color: #0A0A0F;
        }
        .work-card .card-id        { color: #0A0A0F; opacity: 0.22; transition: color 400ms, opacity 400ms; }
        .work-card .card-status    { color: #0A0A0F; opacity: 0.45; border-color: rgba(10,10,15,0.2); transition: color 400ms, opacity 400ms, border-color 400ms; }
        .work-card .card-category  { color: #6B3FA0; transition: color 400ms; }
        .work-card .card-title     { color: #0A0A0F; transition: color 400ms; }
        .work-card .card-desc      { color: #0A0A0F; opacity: 0.45; transition: color 400ms, opacity 400ms; }
        .work-card .card-tag       { color: #0A0A0F; opacity: 0.28; transition: color 400ms, opacity 400ms; }

        .work-card:hover .card-id,
        .work-card:focus-within .card-id        { color: #F5F2EC; opacity: 0.22; }
        .work-card:hover .card-status,
        .work-card:focus-within .card-status    { color: #F5F2EC; opacity: 0.4; border-color: rgba(245,242,236,0.15); }
        .work-card:hover .card-category,
        .work-card:focus-within .card-category  { color: #00FF94; }
        .work-card:hover .card-title,
        .work-card:focus-within .card-title     { color: #F5F2EC; }
        .work-card:hover .card-desc,
        .work-card:focus-within .card-desc      { color: #F5F2EC; opacity: 0.4; }
        .work-card:hover .card-tag,
        .work-card:focus-within .card-tag       { color: #F5F2EC; opacity: 0.25; }
      `}</style>

      <section
        id="work"
        style={{ backgroundColor: "#F5F2EC" }}
        className="py-24 px-8 md:px-16"
      >
        {/* Section header */}
        <div
          className="flex justify-between items-baseline mb-16 pb-4 border-b"
          style={{ borderColor: "rgba(10,10,15,0.15)" }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "#0A0A0F", opacity: 0.4 }}
          >
            Selected Work
          </h2>
          <span
            className="font-mono text-xs"
            style={{ color: "#0A0A0F", opacity: 0.25 }}
          >
            {String(STUDIES.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* Brutalist grid — near-black bg creates 1px structural gap lines */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px border border-near-black"
          style={{ backgroundColor: "#0A0A0F" }}
        >
          {STUDIES.map((study) => (
            <article
              key={study.id}
              className="work-card cursor-pointer"
              tabIndex={0}
              aria-label={`${study.title} — ${study.category}`}
            >
              <div className="p-8 md:p-12 flex flex-col min-h-72">
                {/* Top row */}
                <div className="flex justify-between items-start mb-10">
                  <span className="card-id font-mono text-xs">{study.id}</span>
                  <span className="card-status font-mono text-xs tracking-widest border px-2 py-1">
                    {study.status}
                  </span>
                </div>

                {/* Category */}
                <div className="card-category font-mono text-xs tracking-widest mb-3">
                  {study.category}&nbsp;—&nbsp;{study.year}
                </div>

                {/* Title */}
                <h3
                  className="card-title font-syne font-bold leading-none mb-6"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  {study.title}
                </h3>

                {/* Description */}
                <p className="card-desc font-mono text-sm leading-relaxed mb-8 flex-1">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {study.tags.map((tag) => (
                    <span key={tag} className="card-tag font-mono text-xs">
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
