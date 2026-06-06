export type CaseStudyResult = {
  stat: string;
  label: string;
};

export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  company: string;
  description: string;
  responsibilities: string[];
  timeline: string;
  tags: string[];
  status: "CASE STUDY" | "RESEARCH" | "COMING SOON";
  results: CaseStudyResult[];
  videoSrc?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    slug: "risk-index",
    title: "Risk Index",
    subtitle: "Designing a Configurable Risk Metric for Supply Chain Transparency",
    category: "Supply Chain Intelligence",
    year: "2024",
    company: "Supplyframe",
    description:
      "A configurable risk metric that replaced a black-box algorithm — giving supply chain teams full control over how risk is calculated and weighted for their business.",
    responsibilities: [
      "Interviews & synthesis",
      "Product strategy",
      "User journey",
      "Mockups",
    ],
    timeline: "6 months",
    tags: ["Supply Chain", "B2B", "Configuration UX", "Data Viz"],
    status: "CASE STUDY",
    results: [
      { stat: "100%", label: "of customers built a custom index" },
      { stat: "14", label: "indexes built by one customer" },
      { stat: "0", label: "training sessions required for adoption" },
    ],
    videoSrc: "/Riskindexvid.mp4",
  },
];
