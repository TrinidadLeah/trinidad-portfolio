---
name: portfolio_project
description: Trinidad Raújo's brutalist-dreamcore portfolio site — stack, design decisions, and structure
type: project
---

Next.js 14 portfolio for a Senior Product Designer specializing in AI orchestration. Running on port 3000.

**Why:** Personal portfolio to showcase AI/agent UX work with a deliberate brutalist-dreamcore aesthetic.

**How to apply:** Maintain the design system strictly when adding features — no soft shadows, no rounded corners unless intentional, no generic transitions.

## Stack
- Next.js 14, TypeScript, Tailwind CSS 3, Three.js
- Fonts: Syne (display, via next/font/google) + IBM Plex Mono (technical)

## Design System
- Off-white: `#F5F2EC` (base/background on light sections)
- Bruised purple: `#6B3FA0` (primary accent, hover states, surname)
- Static green: `#00FF94` (secondary accent, labels, nav hover)
- Near-black: `#0A0A0F` (dark sections, text, inverted cards)
- Transitions: 400ms `cubic-bezier(0.16, 1, 0.3, 1)` — "slightly too slow"
- Global grain overlay in `globals.css` via SVG feTurbulence (opacity 0.055)
- Scanlines in Hero via `repeating-linear-gradient`

## Component Structure
- `components/MistShader.tsx` — Three.js WebGL, FBM domain-warped fog shader, `mixBlendMode: screen`
- `components/Hero.tsx` — full-screen dark section, dynamically imports MistShader (SSR off)
- `components/Work.tsx` — brutalist 2-col grid, CSS hover cascade via embedded `<style>` tag
- `components/About.tsx` — sparse near-black section
- `components/Contact.tsx` — email only, hover turns bruised purple

## Placeholder content
All work titles (Chorus, Phantom OS, Recall, Signal/Noise) and bio details are placeholders to be replaced with real content.
