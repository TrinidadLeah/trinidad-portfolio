import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Portfolio palette (existing)
        "off-white": "#F5F2EC",
        "purple-bruised": "#6B3FA0",
        "green-static": "#00FF94",
        "near-black": "#0A0A0F",

        // Design system — Copilot
        accent: {
          DEFAULT: "#4F5FF6",
          hover: "#3D4EE8",
          subtle: "#EEF0FE",
          muted: "#C7CBFC",
        },
        canvas: {
          bg: "#FAFAFA",
          dot: "#D4D4D8",
        },
        node: {
          success: "#1D9E75",
          "success-subtle": "#F0FDF4",
          warning: "#D97706",
          "warning-subtle": "#FFFBEB",
          danger: "#DC2626",
          "danger-subtle": "#FEF2F2",
          neutral: "#71717A",
        },
      },
      fontFamily: {
        // Portfolio fonts (existing)
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        // Copilot fonts
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        "geist-mono": ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["28px", { lineHeight: "1.25", letterSpacing: "-0.03em", fontWeight: "600" }],
        heading: ["20px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "600" }],
        title: ["15px", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-sm": ["13px", { lineHeight: "1.5" }],
        label: ["12px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
        "mono-sm": ["12px", { lineHeight: "1.6" }],
        micro: ["11px", { lineHeight: "1.3", letterSpacing: "0.04em", fontWeight: "500" }],
      },
      boxShadow: {
        node: "0 4px 8px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
        "node-lg": "0 8px 24px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)",
        "node-active": "0 0 0 2px #4F5FF6, 0 8px 24px rgba(79,95,246,0.15)",
        modal: "0 20px 60px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        node: "10px",
      },
      transitionDuration: {
        "400": "400ms",
        micro: "100ms",
        fast: "150ms",
        base: "200ms",
        smooth: "300ms",
      },
    },
  },
  plugins: [],
};

export default config;
