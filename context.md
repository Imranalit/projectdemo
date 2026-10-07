# Project Context

## Overview
A modern, elite school website for "Ahlul Bait Public School" (Tharushah), a project of the Ashghrai Organization. The site features an animated, landscape-oriented showcase of its various facilities, adhering to a Navy Blue and Gold color scheme inspired by provided reference materials.

## Tech Stack & Architecture
- **Framework**: Next.js (App Router), React
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion & @upendra.manike/next-motion-kit
- **Architecture**: Single-page horizontal scrolling layout, native CSS scroll snapping, clean functional components (`CampusShowcase.tsx`).

## Current State
- **Working**: 
  - Hero section with transparent student cutout (+30% scale), reduced typography (-20%), and animated futuristic navy circle.
  - Horizontal scrolling facility gallery with left/right slider controls.
  - Custom UI/UX scrollbar and swipe hints.
  - Global typography configured for 'Amanda Black'.
- **In Progress**: 
  - Iterative design tuning based on live Netlify feedback.
- **Pending/Blocked**: 
  - None.

## Key Decisions & History
- **2026-10-07**: Transitioned from generic "Elite School" to "Ahlul Bait Public School" branding.
- **2026-10-07**: Pivoted from vertical scrolling to horizontal/landscape layout per user request.
- **2026-10-07**: Attempted automated background removal with `rembg`. Failed and wasted time. Established new strict rule: NO heavy plugins/downloads for simple manual tasks.
- **2026-10-07**: Created `rules.md`, `design.md`, and `context.md` to persist project memory and boundaries.
- **2026-10-07**: Hero section visual upgrades: scaled student cutouts by +30%, downscaled hero text by 20%, transformed circle to animated futuristic navy HUD, reduced overlay transparency by 10% (opacity-30), and set primary font to Amanda Black.
