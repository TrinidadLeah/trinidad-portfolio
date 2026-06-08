"use client";

import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

export default function Work() {
  return (
    <>
      <style>{`
        .work-card {
          background-color: #0D0D18;
          border: 1px solid rgba(0,255,148,0.1);
          border-top: 2px solid rgba(0,255,148,0.12);
          transition:
            border-color     350ms ease,
            background-color 350ms ease;
        }
        .work-card:hover,
        .work-card:focus-within {
          background-color: #111120;
          border-color: rgba(0,255,148,0.45);
          border-top-color: #00FF94;
        }
        .work-card .card-id       { color: rgba(245,242,236,0.2); }
        .work-card .card-status   { color: #00FF94; border-color: rgba(0,255,148,0.3); letter-spacing: 0.14em; }
        .work-card .card-category { color: rgba(0,255,148,0.6); transition: color 350ms ease; }
        .work-card .card-title    { color: #F5F2EC; }
        .work-card .card-desc     { color: rgba(245,242,236,0.4); }
        .work-card .card-tag      { color: rgba(0,255,148,0.3); border: 1px solid rgba(0,255,148,0.15); transition: color 350ms ease, border-color 350ms ease; }

        .work-card:hover .card-category,
        .work-card:focus-within .card-category { color: #00FF94; }
        .work-card:hover .card-tag,
        .work-card:focus-within .card-tag      { color: rgba(0,255,148,0.65); border-color: rgba(0,255,148,0.35); }
      `}</style>

      <section
        id="work"
        style={{ backgroundColor: "#0A0A0F" }}
        className="py-24 px-8 md:px-16"
      >
        {/* Section header */}
        <div
          className="flex justify-between items-baseline mb-16 pb-4"
          style={{ borderBottom: "1px solid rgba(0,255,148,0.12)" }}
        >
          <h2
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "#00FF94", opacity: 0.55 }}
          >
            ◆&nbsp;&nbsp;Selected Work
          </h2>
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: "rgba(245,242,236,0.2)" }}
          >
            {String(caseStudies.length).padStart(2, "0")} PROJECTS
          </span>
        </div>

        {/* Cards — single column, full width */}
        <div className="flex flex-col gap-3">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-studies/${study.slug}`}
              className="block work-card"
              aria-label={`${study.title} — ${study.category}`}
            >
            <article>
              {/* Full-bleed video */}
              {study.videoSrc && (
                <div className="w-full overflow-hidden" style={{ height: "100vh" }}>
                  <video
                    src={study.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full block"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              {/* Text content */}
              <div className="p-8 md:p-12 flex flex-col">
                {/* Top row */}
                <div className="flex justify-between items-start mb-10">
                  <span className="card-id font-mono text-xs">{study.id}</span>
                  <span className="card-status font-mono text-xs border px-2 py-1">
                    {study.status}
                  </span>
                </div>

                {/* Category + company */}
                <div className="card-category font-mono text-xs tracking-widest mb-3 uppercase">
                  {study.category}&nbsp;—&nbsp;{study.year}
                  {study.company && (
                    <span style={{ opacity: 0.5 }}>&nbsp;/&nbsp;{study.company}</span>
                  )}
                </div>

                {/* Title + description */}
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
                    <span key={tag} className="card-tag font-mono text-xs px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
