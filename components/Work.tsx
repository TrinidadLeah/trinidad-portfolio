"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";

function CardMedia({ study }: { study: CaseStudy }) {
  return (
    <div className="card-media relative w-full overflow-hidden" style={{ aspectRatio: "16/10" }}>
      {study.videoSrc ? (
        <video
          src={study.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="card-media-inner w-full h-full block"
          style={{ objectFit: "cover" }}
        />
      ) : study.imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={study.imageSrc}
          alt={study.title}
          className="card-media-inner w-full h-full block"
          style={{ objectFit: "cover" }}
        />
      ) : null}

      {/* Ghost index number, half-cropped */}
      <span
        className="card-index absolute font-syne font-bold leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        {study.id}
      </span>

      {/* Hover ticker */}
      {study.status !== "COMING SOON" && (
        <div className="card-ticker absolute bottom-0 left-0 right-0 overflow-hidden" aria-hidden="true">
          <div className="card-ticker-track font-mono text-xs tracking-widest whitespace-nowrap py-2">
            {Array.from({ length: 8 })
              .map(() => "OPEN CASE FILE ↗")
              .join("    ")}
          </div>
        </div>
      )}

      {/* Coming soon stamp */}
      {study.status === "COMING SOON" && (
        <span className="card-stamp absolute font-mono text-xs tracking-widest px-3 py-1.5 select-none">
          DECLASSIFIES SOON
        </span>
      )}
    </div>
  );
}

function CardBody({ study }: { study: CaseStudy }) {
  return (
    <div className="p-6 md:p-8 flex flex-col">
      {/* Category + year */}
      <div className="card-category font-mono text-xs tracking-widest mb-3 uppercase">
        {study.category}&nbsp;—&nbsp;{study.year}
        {study.company && <span style={{ opacity: 0.5 }}>&nbsp;/&nbsp;{study.company}</span>}
      </div>

      {/* Title */}
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h3
          className="card-title font-syne font-bold leading-none"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
        >
          {study.title}
        </h3>
        {study.status === "COMING SOON" ? (
          <span className="card-status font-mono text-xs border px-2 py-1 shrink-0">SOON™</span>
        ) : (
          <span className="card-arrow font-syne font-bold shrink-0" aria-hidden="true">
            ↗
          </span>
        )}
      </div>

      {/* Description */}
      <p className="card-desc font-mono text-sm leading-relaxed mb-6">{study.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {study.tags.map((tag) => (
          <span key={tag} className="card-tag font-mono text-xs px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <>
      <style>{`
        .work-card {
          background-color: #0D0D18;
          border: 1px solid rgba(0,255,148,0.1);
          border-top: 2px solid rgba(0,255,148,0.12);
          transition: border-color 350ms ease, background-color 350ms ease, transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        a.work-card:hover,
        a.work-card:focus-visible {
          background-color: #111120;
          border-color: rgba(0,255,148,0.45);
          border-top-color: #00FF94;
          transform: rotate(-0.4deg);
        }
        a.work-card:active {
          transform: rotate(-0.4deg) scale(0.99);
        }
        .work-card .card-category { color: rgba(0,255,148,0.6); transition: color 350ms ease; }
        .work-card .card-title    { color: #F5F2EC; }
        .work-card .card-desc     { color: rgba(245,242,236,0.4); }
        .work-card .card-status   { color: #00FF94; border-color: rgba(0,255,148,0.3); letter-spacing: 0.14em; }
        .work-card .card-tag      { color: rgba(0,255,148,0.3); border: 1px solid rgba(0,255,148,0.15); transition: color 350ms ease, border-color 350ms ease; }
        .work-card .card-arrow    { color: rgba(0,255,148,0.4); font-size: 1.75rem; line-height: 1; transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1), color 350ms ease; }

        a.work-card:hover .card-category { color: #00FF94; }
        a.work-card:hover .card-tag      { color: rgba(0,255,148,0.65); border-color: rgba(0,255,148,0.35); }
        a.work-card:hover .card-arrow    { color: #00FF94; transform: translate(4px, -4px); }

        .card-media { border-bottom: 1px solid rgba(0,255,148,0.1); }
        .card-media-inner { transition: transform 600ms cubic-bezier(0.16, 1, 0.3, 1), filter 350ms ease; }
        a.work-card:hover .card-media-inner { transform: scale(1.03); }

        .card-index {
          bottom: -0.18em;
          right: 0.05em;
          font-size: clamp(5rem, 10vw, 9rem);
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(0,255,148,0.35);
          mix-blend-mode: screen;
        }

        .card-ticker {
          background-color: #00FF94;
          color: #0A0A0F;
          transform: translateY(100%);
          transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        a.work-card:hover .card-ticker { transform: translateY(0); }
        /* Marquee only runs while hovered — no off-screen GPU burn */
        a.work-card:hover .card-ticker-track { animation: ticker-scroll 12s linear infinite; }
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .coming-soon .card-media-inner { filter: grayscale(85%) contrast(1.05) brightness(0.8); }
        .coming-soon:hover .card-media-inner { filter: grayscale(20%) contrast(1.05) brightness(0.95); }
        .coming-soon .card-title { opacity: 0.75; }
        .card-stamp {
          top: 1rem;
          left: 1rem;
          transform: rotate(-4deg);
          background-color: rgba(10,10,15,0.75);
          color: #00FF94;
          border: 1px dashed rgba(0,255,148,0.5);
        }
      `}</style>

      <section id="work" style={{ backgroundColor: "#0A0A0F" }} className="py-24 px-8 md:px-16">
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
              ◆&nbsp;&nbsp;Selected Work
            </h2>
            <span className="font-mono text-xs tracking-widest" style={{ color: "rgba(245,242,236,0.2)" }}>
              {String(caseStudies.length).padStart(2, "0")} PROJECTS &mdash; MORE INBOUND
            </span>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <Reveal key={study.id} delay={i * 80}>
              {study.status === "COMING SOON" ? (
                <article
                  className="work-card coming-soon flex flex-col h-full"
                  aria-label={`${study.title} — coming soon`}
                >
                  <CardMedia study={study} />
                  <CardBody study={study} />
                </article>
              ) : (
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="work-card flex flex-col h-full"
                  aria-label={`${study.title} — ${study.category}`}
                >
                  <CardMedia study={study} />
                  <CardBody study={study} />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
