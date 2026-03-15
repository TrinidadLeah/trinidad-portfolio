"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// ─── Vertex shader ───────────────────────────────────────────────────────────
const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// ─── Fragment shader ─────────────────────────────────────────────────────────
// Layered FBM (fractal brownian motion) fog with palette from the design system
const fragmentShader = /* glsl */ `
  uniform float uTime;
  uniform vec2  uResolution;
  varying vec2  vUv;

  // ── Simplex noise helpers ──────────────────────────────────────────────────
  vec3 mod289v3(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289v2(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x)  { return mod289v3(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(
       0.211324865405187,
       0.366025403784439,
      -0.577350269189626,
       0.024390243902439
    );
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1  = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy  -= i1;
    i = mod289v2(i);
    vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0)
    );
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m * m * m;
    vec3 x  = 2.0 * fract(p * C.www) - 1.0;
    vec3 h  = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // ── FBM ───────────────────────────────────────────────────────────────────
  float fbm(vec2 st) {
    float v = 0.0;
    float a = 0.40;  // reduced from 0.5 — less energy per octave
    vec2  shift = vec2(100.0);
    mat2  rot   = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 7; i++) {
      v  += a * snoise(st);
      st  = rot * st * 2.1 + shift;
      a  *= 0.50;
    }
    return v;
  }

  void main() {
    vec2 st = vUv;
    float t = uTime * 0.06;

    // ── Domain-warped double FBM ───────────────────────────────────────────
    vec2 q = vec2(
      fbm(st + t * 0.28),
      fbm(st + vec2(5.2, 1.3) + t * 0.18)
    );
    vec2 r = vec2(
      fbm(st + 3.2 * q + vec2(1.7, 9.2) + t * 0.14),
      fbm(st + 3.2 * q + vec2(8.3, 2.8) + t * 0.09)
    );
    float f = fbm(st + 3.2 * r + t * 0.04);
    f = f * 0.5 + 0.5; // remap [0,1]

    // ── Palette ──────────────────────────────────────────────────────────
    vec3 nearBlack     = vec3(0.039, 0.039, 0.059);  // #0A0A0F
    vec3 purpleBruised = vec3(0.420, 0.247, 0.627);  // #6B3FA0
    vec3 purpleDark    = vec3(0.18,  0.08,  0.30);   // deeper shadow
    vec3 offWhite      = vec3(0.961, 0.949, 0.925);  // #F5F2EC
    vec3 greenStatic   = vec3(0.0,   1.0,   0.580);  // #00FF94

    // ── Fog color construction ────────────────────────────────────────────
    vec3 col = mix(nearBlack, purpleDark, clamp(f * 1.6, 0.0, 1.0));
    col = mix(col, purpleBruised, clamp((f - 0.35) * 2.0, 0.0, 1.0));
    // Slightly warmer peak — off-white light trying to come through
    col = mix(col, offWhite * 0.32, clamp((f - 0.72) * 2.6, 0.0, 1.0));

    // ── Green static accent veins — dialled back ──────────────────────────
    float greenNoise = fbm(st * 4.5 + vec2(2.1, 4.7) + t * 0.45);
    float greenMask  = smoothstep(0.64, 0.76, greenNoise);
    col += greenStatic * greenMask * 0.10;

    // ── Subtle horizontal banding (dreamcore register shift) ──────────────
    float bands = sin(st.y * 120.0 + t * 2.0) * 0.008;
    col += bands * purpleBruised;

    // ── Vignette ──────────────────────────────────────────────────────────
    vec2  vd = vUv - 0.5;
    float vign = 1.0 - dot(vd, vd) * 2.2;
    vign = clamp(vign, 0.0, 1.0);

    // ── Alpha: overall ~20% lighter, open center for text ─────────────────
    float alpha = f * 0.74 * vign;
    float textZone = 1.0 - smoothstep(0.1, 0.55, distance(vUv, vec2(0.5, 0.42)));
    alpha *= mix(1.0, 0.50, textZone);

    gl_FragColor = vec4(col, clamp(alpha, 0.0, 1.0));
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────
export default function MistShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

    // Scene / camera (orthographic — we're drawing a full-screen quad)
    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    // Geometry + material
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime:       { value: 0 },
        uResolution: { value: new THREE.Vector2(canvas.clientWidth, canvas.clientHeight) },
      },
      transparent: true,
      depthWrite:  false,
    });

    scene.add(new THREE.Mesh(geometry, material));

    // Animation loop
    let animId: number;
    const startTime = Date.now();

    function animate() {
      animId = requestAnimationFrame(animate);
      material.uniforms.uTime.value = (Date.now() - startTime) / 1000;
      renderer.render(scene, camera);
    }

    // Resize observer
    const observer = new ResizeObserver(() => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      renderer.setSize(w, h, false);
      material.uniforms.uResolution.value.set(w, h);
    });
    observer.observe(canvas);

    animate();

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
