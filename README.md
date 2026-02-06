# Group Scholar

The Institute of Collaborative Distraction. A single‑page, animated landing experience for the fictional Group Scholar institution.

## Highlights
- App Router Next.js 15 + React 19 setup
- GSAP + ScrollTrigger motion with reduced‑motion and automation fallbacks
- Tailwind CSS v4 styling with custom typography tokens
- tRPC client/provider wiring ready for expansion
- Snapshot/automation mode to disable heavy motion for visual tests

## Getting started
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Scripts
```bash
npm run dev        # start dev server (turbopack)
npm run build      # production build
npm run start      # run production server
npm run preview    # build + start
npm run lint       # lint
npm run lint:fix   # lint + fix
npm run typecheck  # TS typecheck
npm run check      # lint + typecheck
npm run format:check
npm run format:write
```

## Project structure
- `src/app/page.tsx` — entry point for the landing page
- `src/app/_components/GroupScholarLanding.tsx` — main page content and GSAP animation hooks
- `src/app/layout.tsx` — metadata, fonts, and automation detection script
- `src/styles/globals.css` — theme tokens and motion bypass rules
- `src/env.js` — env schema (no required app‑specific vars)

## Automation / snapshot mode
The page detects automation and disables motion to keep snapshots stable.
- Triggered automatically for headless/Playwright.
- You can also add `?snapshot` or `?automation` to the URL.

## Environment
No required environment variables. Optional:
- `SKIP_ENV_VALIDATION=1` to bypass env checks.

## Deployment
Standard Next.js build output. Use `npm run build` and `npm run start` on your host.
