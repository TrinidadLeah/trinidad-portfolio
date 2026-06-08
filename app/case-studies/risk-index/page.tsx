import Link from "next/link";

export const metadata = {
  title: "Risk Index — Trinidad Araujo",
  description:
    "Designing a Configurable Risk Metric for Supply Chain Transparency at Supplyframe.",
};

export default function RiskIndexPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0F", minHeight: "100vh" }}>
      <style>{`
        .cs-back:hover  { color: #00FF94 !important; }
        .cs-footer:hover { color: #00FF94 !important; }
        .cs-annotation { background-color: #0D0D18; }
        .cs-stat-card  { background-color: #0D0D18; }
        .cs-meta-cell  { background-color: #0D0D18; }
      `}</style>

      {/* NAV */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "rgba(10,10,15,0.92)",
        borderBottom: "1px solid rgba(0,255,148,0.1)",
        backdropFilter: "blur(12px)",
        fontFamily: "var(--font-mono, monospace)",
        fontSize: "0.7rem", letterSpacing: "0.14em",
      }}>
        <Link href="/#work" className="cs-back" style={{ color: "rgba(245,242,236,0.45)", textDecoration: "none", transition: "color 200ms" }}>
          &larr; WORK
        </Link>
        <span style={{ color: "rgba(245,242,236,0.2)" }}>TRINIDAD ARAUJO</span>
      </nav>

      {/* HERO */}
      <header style={{ padding: "5rem 4rem 4rem", maxWidth: "72rem", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", letterSpacing: "0.14em", color: "#00FF94", opacity: 0.6, marginBottom: "1.5rem" }}>
          Supply Chain Intelligence &mdash; 2024 / Supplyframe
        </p>
        <h1 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(3rem, 8vw, 7rem)", color: "#F5F2EC", lineHeight: 1, marginBottom: "1.5rem" }}>
          Risk Index
        </h1>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)", color: "rgba(245,242,236,0.4)", maxWidth: "36rem", marginBottom: "4rem", lineHeight: 1.8 }}>
          Designing a Configurable Risk Metric for Supply Chain Transparency
        </p>

        {/* Metadata grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", backgroundColor: "rgba(0,255,148,0.1)" }}>
          {[
            { label: "Responsibilities", value: "Interviews & synthesis, Product Strategy, User Journey, Mockups" },
            { label: "Timeline", value: "6 months — led design with one PM" },
            { label: "Tags", value: "B2B · Supply Chain · Config UX · Data Viz" },
            { label: "Outcome", value: "100% of customers built a custom index" },
          ].map(({ label, value }) => (
            <div key={label} className="cs-meta-cell" style={{ padding: "1.25rem 1.5rem" }}>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "rgba(0,255,148,0.5)", marginBottom: "0.5rem", textTransform: "uppercase" }}>{label}</p>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", color: "rgba(245,242,236,0.5)", lineHeight: 1.6 }}>{value}</p>
            </div>
          ))}
        </div>
      </header>

      {/* HERO IMAGE */}
      <div style={{ padding: "0 4rem 0", maxWidth: "72rem", margin: "0 auto" }}>
        <figure style={{ margin: "2.5rem 0", border: "1px solid rgba(0,255,148,0.1)", lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/case-studies/risk-index/risk-index-gauge.png" alt="Risk Index gauge showing score of 54, labeled MEDIUM" style={{ width: "100%", display: "block" }} />
        </figure>
      </div>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,255,148,0.1)", margin: "5rem 4rem" }} />

      {/* COMPANY OVERVIEW */}
      <section style={{ padding: "0 4rem", maxWidth: "72rem", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "#00FF94", opacity: 0.7, marginBottom: "1.5rem", textTransform: "uppercase" }}>
          &#9670;&nbsp;&nbsp;Company Overview
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", marginBottom: "1.25rem" }}>
              Supplyframe builds supply chain intelligence tools for the electronics industry.
            </p>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", marginBottom: "1.25rem" }}>
              When I joined, the platform&apos;s risk metric, RiskRank, was a proprietary algorithm. Users could see a score but not what drove it: no parameter weights, no transparency into the calculation.
            </p>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)" }}>
              In interviews, I kept hearing the same thing: engineers didn&apos;t trust a number they couldn&apos;t interrogate, so they built their own spreadsheets instead. I partnered with the PM to make a case for a new feature &mdash; a risk index that customers could configure themselves. That pitch became the project.
            </p>
          </div>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/case-studies/risk-index/riskrank-venn-diagram.png" alt="RiskRank Venn diagram" style={{ width: "100%", display: "block", border: "1px solid rgba(0,255,148,0.1)" }} />
            <figcaption style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", color: "rgba(245,242,236,0.3)", marginTop: "0.75rem", lineHeight: 1.6 }}>
              The original metric, Risk Rank. Users could see what went into it &mdash; but not the weight of each parameter or how it was calculated.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,255,148,0.1)", margin: "5rem 4rem" }} />

      {/* DISCOVERY */}
      <section style={{ padding: "0 4rem", maxWidth: "72rem", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "#00FF94", opacity: 0.7, marginBottom: "1.5rem", textTransform: "uppercase" }}>
          &#9670;&nbsp;&nbsp;Discovery
        </p>
        <h2 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#F5F2EC", marginBottom: "2rem", lineHeight: 1.2 }}>
          15 engineers, 2 channels, 1 clear signal
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "3rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", marginBottom: "1.25rem" }}>
              We recruited 15 electronics engineers through Hackaday&apos;s community (part of Supplyframe&apos;s network) and warm intros from the sales team. Most worked at small companies managing sourcing decisions with limited tooling. A few came from large OEMs with dedicated procurement teams.
            </p>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)" }}>
              That range was deliberate. I wanted to see how risk assessment practices differed by company size and resources.
            </p>
          </div>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/case-studies/risk-index/discovery-synthesis-wall.png" alt="Sticky note wall from research synthesis session" style={{ width: "100%", display: "block", border: "1px solid rgba(0,255,148,0.1)" }} />
          </figure>
        </div>

        <h3 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.1rem, 2vw, 1.5rem)", color: "#F5F2EC", marginBottom: "1rem" }}>
          The Universal &lsquo;No&rsquo;: Why Engineers Wouldn&apos;t Buy In
        </h3>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", maxWidth: "36rem", marginBottom: "0.5rem" }}>
          Every engineer we spoke to said the same thing: without understanding what goes into the score, they couldn&apos;t trust it for business decisions.
        </p>
        <blockquote style={{ borderLeft: "2px solid #00FF94", paddingLeft: "1.5rem", margin: "2.5rem 0" }}>
          <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 500, fontSize: "clamp(1rem, 2vw, 1.3rem)", color: "#F5F2EC", opacity: 0.9, marginBottom: "0.75rem", lineHeight: 1.5 }}>
            &ldquo;RiskRank is used as a &lsquo;sanity check&rsquo;. If red, then I investigate further. [Their company] has their own risk assessment driven very much by lead time.&rdquo;
          </p>
          <cite style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", color: "rgba(0,255,148,0.55)", fontStyle: "normal" }}>
            Design Engineer, Automotive Industry
          </cite>
        </blockquote>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,255,148,0.1)", margin: "5rem 4rem" }} />

      {/* DESIGN */}
      <section style={{ padding: "0 4rem", maxWidth: "72rem", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "#00FF94", opacity: 0.7, marginBottom: "1.5rem", textTransform: "uppercase" }}>
          &#9670;&nbsp;&nbsp;Design
        </p>

        {/* Architecture */}
        <h2 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#F5F2EC", marginBottom: "2rem", lineHeight: 1.2 }}>
          Where configuration lives matters as much as how it works
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "5rem" }}>
          <div>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", marginBottom: "1.25rem" }}>
              Before designing the UI, I needed to figure out the right architectural layer for this feature. Risk configuration isn&apos;t a per-user preference &mdash; it&apos;s an organizational decision. A procurement manager sets the parameters for their team, not individual engineers.
            </p>
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)" }}>
              I mapped this against the settings hierarchy I&apos;d documented in our design system. Risk Index sits in that middle layer &mdash; system settings &mdash; where managers define how risk is calculated for their entire organization.
            </p>
          </div>
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/case-studies/risk-index/fragments-settings-hierarchy.png" alt="Fragments design system three-tiered settings hierarchy" style={{ width: "100%", display: "block", border: "1px solid rgba(0,255,148,0.1)" }} />
            <figcaption style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", color: "rgba(245,242,236,0.3)", marginTop: "0.75rem", lineHeight: 1.6 }}>
              From the Supplyframe design system, Fragments &mdash; three-tiered settings: System Defaults, System Settings, Account Settings.
            </figcaption>
          </figure>
        </div>

        {/* Core challenge */}
        <h3 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#F5F2EC", marginBottom: "1rem", lineHeight: 1.2 }}>
          The core design challenge
        </h3>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", maxWidth: "36rem", marginBottom: "2rem" }}>
          The design problem was straightforward to state and hard to solve: give users full control over risk calculations without making the interface feel like a spreadsheet.
        </p>
        <figure style={{ margin: "0 0 1rem", border: "1px solid rgba(0,255,148,0.1)", lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/case-studies/risk-index/design-wireframes-three-up.png" alt="Three-panel wireframe progression" style={{ width: "100%", display: "block" }} />
        </figure>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(0,255,148,0.08)", marginBottom: "5rem" }}>
          {[
            { label: "Early wireframes", desc: "Visual weight shifts as parameters are added. The gauge reads differently with one factor vs. eight." },
            { label: "Condition builder", desc: "Users define rules per parameter — e.g. \"if Lifecycle = Obsolete, risk = 80.\"" },
            { label: "BOM side panel", desc: "A slide-out in the main workflow. Engineers check risk on any part without leaving the table." },
          ].map(({ label, desc }) => (
            <div key={label} className="cs-annotation" style={{ padding: "1.25rem" }}>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "rgba(0,255,148,0.5)", marginBottom: "0.5rem", textTransform: "uppercase" }}>{label}</p>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color: "rgba(245,242,236,0.4)", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Shipped */}
        <h3 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#F5F2EC", marginBottom: "1rem", lineHeight: 1.2 }}>
          Shipped: Three surfaces, one risk model
        </h3>
        <figure style={{ margin: "0 0 1rem", border: "1px solid rgba(0,255,148,0.1)", lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/case-studies/risk-index/shipped-three-surfaces.png" alt="Three shipped UI surfaces: BOM table, configuration form, detail panel" style={{ width: "100%", display: "block" }} />
        </figure>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(0,255,148,0.08)", marginBottom: "5rem" }}>
          {[
            { label: "BOM table", desc: "Risk Index appears inline at the line-item level, right next to cost and price. No extra clicks to see risk." },
            { label: "Configuration form", desc: "Managers add parameters, set conditions, and test the index against real parts from their BOM before saving." },
            { label: "Detail panel", desc: "Engineers click into any part to see the full breakdown — which factors drive the score and how each is rated." },
          ].map(({ label, desc }) => (
            <div key={label} className="cs-annotation" style={{ padding: "1.25rem" }}>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "rgba(0,255,148,0.5)", marginBottom: "0.5rem", textTransform: "uppercase" }}>{label}</p>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color: "rgba(245,242,236,0.4)", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Design system */}
        <h3 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#F5F2EC", marginBottom: "1rem", lineHeight: 1.2 }}>
          Launched with the redesign &mdash; not bolted on after
        </h3>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", maxWidth: "36rem", marginBottom: "2rem" }}>
          Risk Index shipped alongside Supplyframe&apos;s new design system. That timing wasn&apos;t a coincidence. I advocated for releasing both together so the feature would debut in the new visual language from day one, rather than launching in the old UI and getting ported later.
        </p>
        <figure style={{ margin: "0 0 5rem", lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/case-studies/risk-index/bom-table-before-after.png" alt="Before and after: old RiskRank vs new Risk Index column" style={{ width: "100%", display: "block", border: "1px solid rgba(0,255,148,0.1)" }} />
          <figcaption style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", color: "rgba(245,242,236,0.3)", marginTop: "0.75rem", lineHeight: 1.6, display: "block" }}>
            Before / after: the old RiskRank column alongside the new Risk Index gauge in the redesigned BOM table.
          </figcaption>
        </figure>

        {/* Analysis view */}
        <h3 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#F5F2EC", marginBottom: "1rem", lineHeight: 1.2 }}>
          Analysis view: Risk in context
        </h3>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.5)", maxWidth: "36rem", marginBottom: "2rem" }}>
          The BOM Analysis tab pulls Risk Index data into a dashboard alongside lifecycle status, supplier coverage, lead times, and compliance flags. Designed for procurement leads who need to assess risk across an entire bill of materials &mdash; not part by part, but at portfolio level.
        </p>
        <figure style={{ margin: "0 0 2rem", border: "1px solid rgba(0,255,148,0.1)", lineHeight: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/case-studies/risk-index/analysis-view-dashboard.png" alt="BOM Analysis dashboard" style={{ width: "100%", display: "block" }} />
        </figure>
      </section>

      {/* DIVIDER */}
      <div style={{ height: "1px", backgroundColor: "rgba(0,255,148,0.1)", margin: "5rem 4rem" }} />

      {/* RESULTS */}
      <section style={{ padding: "0 4rem", maxWidth: "72rem", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "#00FF94", opacity: 0.7, marginBottom: "1.5rem", textTransform: "uppercase" }}>
          &#9670;&nbsp;&nbsp;Results
        </p>
        <h2 style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#F5F2EC", marginBottom: "3rem", lineHeight: 1.2 }}>
          From black box to competitive advantage
        </h2>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(0,255,148,0.1)", marginBottom: "4rem" }}>
          {[
            { stat: "100%", label: "of customers built a custom index" },
            { stat: "14", label: "indexes built by a single customer" },
            { stat: "0", label: "training sessions required for adoption" },
          ].map(({ stat, label }) => (
            <div key={stat} className="cs-stat-card" style={{ padding: "2.5rem 2rem" }}>
              <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 700, fontSize: "clamp(3rem, 6vw, 5rem)", color: "#00FF94", lineHeight: 1, marginBottom: "0.75rem" }}>{stat}</p>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.72rem", color: "rgba(245,242,236,0.45)", lineHeight: 1.7 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Pull quotes */}
        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.65rem", letterSpacing: "0.14em", color: "rgba(245,242,236,0.2)", marginBottom: "2rem", textTransform: "uppercase" }}>Customer Feedback</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginBottom: "2.5rem" }}>
          {[
            { quote: "We’re excited to see the ‘why’ behind the risk.", attr: "Manager, Global Security Technology Leader" },
            { quote: "That’s great! Everyone has a risk calculation, but it’s always a black box.", attr: "Executive, Global Semiconductor Equipment Supplier" },
          ].map(({ quote, attr }) => (
            <blockquote key={attr} style={{ borderLeft: "2px solid #00FF94", paddingLeft: "1.5rem", margin: 0 }}>
              <p style={{ fontFamily: "var(--font-syne, sans-serif)", fontWeight: 500, fontSize: "clamp(1rem, 1.8vw, 1.25rem)", color: "#F5F2EC", opacity: 0.9, marginBottom: "0.75rem", lineHeight: 1.5 }}>
                &ldquo;{quote}&rdquo;
              </p>
              <cite style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", color: "rgba(0,255,148,0.55)", fontStyle: "normal" }}>{attr}</cite>
            </blockquote>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.85rem", lineHeight: 2, color: "rgba(245,242,236,0.4)", maxWidth: "36rem" }}>
          Stock availability and price were the two most common parameters, revealing risk priorities not captured by the old algorithm. Configuration was intuitive enough that teams started building indexes on their own &mdash; without training or a rollout campaign.
        </p>
      </section>

      {/* FOOTER NAV */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "5rem 4rem", marginTop: "5rem", borderTop: "1px solid rgba(0,255,148,0.1)" }}>
        <Link href="/#work" className="cs-footer" style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", letterSpacing: "0.14em", color: "rgba(245,242,236,0.35)", textDecoration: "none", transition: "color 200ms" }}>
          &larr; Back to Work
        </Link>
        <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "0.7rem", letterSpacing: "0.14em", color: "rgba(245,242,236,0.15)" }}>
          TRINIDAD ARAUJO &mdash; 2024
        </span>
      </div>
    </div>
  );
}
