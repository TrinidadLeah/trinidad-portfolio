"use client";

import { Suspense, lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function WireMesh() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#0A0A0F",
      }}
    >
      <Suspense fallback={<div style={{ width: "100%", height: "100%", background: "#0A0A0F" }} />}>
        <Spline
          style={{
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>

      {/* Edge vignette to blend into content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to right, rgba(10,10,15,0.6), transparent 25%, transparent 75%, rgba(10,10,15,0.6)),
            linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, transparent 20%, transparent 70%, rgba(10,10,15,0.95) 100%)
          `,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
