# Architecture

This project is built using the App Router in Next.js.

## Tech Stack
- **Framework:** Next.js (React)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion, @upendra.manike/next-motion-kit

## Structure
- `/src/app`: Contains the main page and layout.
- `/src/components`: Reusable React components.
  - `CampusShowcase.tsx`: The animated showcase for a campus.

## Animation Strategy
We leverage Framer Motion and `@upendra.manike/next-motion-kit` for complex animations. 
We use `whileInView` for scroll-triggered reveals, and `staggerChildren` in Framer Motion variants to ensure smooth sequential entry of campus details.
