"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M${-380 - i * 5 * position} ${-189 + i * 33}C${-380 - i * 5 * position} ${
      -189 + i * 33
    } ${-312 - i * 5 * position} ${216 - i * 28} ${152 - i * 5 * position} ${
      343 - i * 22
    }C${616 - i * 5 * position} ${470 - i * 16} ${684 - i * 5 * position} ${
      875 - i * 10
    } ${684 - i * 5 * position} ${875 - i * 10}`,
    width: 0.8 + i * 0.07,
    opacity: 0.12 + i * 0.018,
  }));

  return (
    <g>
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke="#A78BFA"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          fill="none"
          initial={{ pathLength: 0.3, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: path.opacity,
            pathOffset: [0, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: path.id * 0.15,
            opacity: { duration: 2, delay: path.id * 0.05 },
          }}
        />
      ))}
    </g>
  );
}

export function BackgroundPaths() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Deep dark base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #0D0520 0%, #0A0A0F 65%)",
        }}
      />

      {/* Animated SVG paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 696 316"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </svg>

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 40%, rgba(10,10,15,0.7) 100%)",
        }}
      />
    </div>
  );
}
