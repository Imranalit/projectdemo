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
  - Hero section featuring the logo, tagline, and call-to-actions.
  - Horizontal scrolling facility gallery using CSS scroll snap.
  - Custom UI/UX scrollbar and swipe hints.
  - AI-generated reference images (exterior building, interior classroom).
- **In Progress**: 
  - Refining design adherence to strict constraints provided by the user.
- **Pending/Blocked**: 
  - Replacing AI-generated background removal scripts with manual/external processing as per new rules.

## Key Decisions & History
- **2026-10-07**: Transitioned from generic "Elite School" to "Ahlul Bait Public School" branding.
- **2026-10-07**: Pivoted from vertical scrolling to horizontal/landscape layout per user request.
- **2026-10-07**: Attempted automated background removal with `rembg`. Failed and wasted time. Established new strict rule: NO heavy plugins/downloads for simple manual tasks.
- **2026-10-07**: Created `rules.md`, `design.md`, and `context.md` to persist project memory and boundaries.
