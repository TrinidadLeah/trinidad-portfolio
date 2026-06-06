"use client";

import { caseStudies } from "@/lib/case-studies";

export default function Work() {
  return (
    <>
      <style>{`
        .work-card {
          background-color: #F5F2EC;
          border-top: 2px solid transparent;
          transition:
            background-color 400ms cubic-bezier(0.16, 1, 0.3, 1),
            border-color     400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .work-card:hover,
        .work-card:focus-within {
          background-color: #ECEAE3;
          border-top-color: #8B5CF6;
        }
        .work-card .card-id       { color: #0A0A0F; opacity: 0.22; }
        .work-card .card-status   { color: #0A0A0F; opacity: 0.35; border-color: rgba(10,10,15,0.15); }
        .work-card .card-category { color: #6B3FA0; transition: color 400ms; }
        .work-card .card-title    { color: #0A0A0F; }
        .work-card .card-desc     { color: #0A0A0F; opacity: 0.45; }
        .work-card .card-tag      { color: #0A0A0F; opacity: 0.25; transition: opacity 400ms; }

        .work-card:hover .card-category,
        .work-card:focus-within .card-category { color: #007A42; }
        .work-card:hover .card-tag,
        .work-card:focus-within .card-tag      { opacity: 0.4; }
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
            {String(caseStudies.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* Cards — single column, full width */}
        <div
          className="flex flex-col gap-px border border-near-black"
          style={{ backgroundColor: "#0A0A0F" }}
        >
          {caseStudies.map((study) => (
            <article
              key={study.id}
              className="work-card cursor-pointer"
              tabIndex={0}
              aria-label={`${study.title} — ${study.category}`}
            >
              {/* Full-bleed video — no padding, flush to card edges */}
              {study.videoSrc && (
                <div className="w-full overflow-hidden" style={{ maxHeight: "520px" }}>
                  <video
                    src={study.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Text content */}
              <div className="p-8 md:p-12 flex flex-col">
                {/* Top row */}
                <div className="flex justify-between items-start mb-10">
                  <span className="card-id font-mono text-xs">{study.id}</span>
                  <span className="card-status font-mono text-xs tracking-widest border px-2 py-1">
                    {study.status}
                  </span>
                </div>

                {/* Category + company */}
                <div className="card-category font-mono text-xs tracking-widest mb-3">
                  {study.category}&nbsp;—&nbsp;{study.year}
                  {study.company && (
                    <span style={{ opacity: 0.55 }}>&nbsp;/&nbsp;{study.company}</span>
                  )}
                </div>

                {/* Title + description side by side at desktop */}
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-16">
                  <h3
                    className="card-title font-syne font-bold leading-none mb-4 md:mb-0 shrink-0"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                  >
                    {study.title}
                  </h3>
                  <p className="card-desc font-mono text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mt-8">
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
