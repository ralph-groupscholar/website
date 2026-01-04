# Ralph Progress Log - website

## 2026-02-07
- Updated the Product Suite section to spotlight live Group Scholar tools, added direct links, and refreshed the copy to reflect operational guardrails.
- Deployed to https://groupscholar.com.
- Rotated the Product Suite lineup to highlight Mentor Map, Rubric Kit, and Group Scholar Docs with refreshed descriptions.
- Expanded the Product Suite lineup with Briefing Room, Community Pulse, and Opportunity Radar and refreshed the section copy.

- Added a Product Suite roadmap row that previews Eligibility Oracle, Review Queue Forecaster, and Pacing Console with status tags.
- Deployed updates to https://groupscholar.com.

## 2026-02-08
- Wired the “Apply” form to a new intent logging API backed by Postgres, added client metadata capture, and updated messaging around data retention.
- Added the production database schema/table for intent tracking and attempted to seed starter rows (database connection reset; will retry).
- Seeded the production database with impact signals and intake intent starter rows.

## 2026-02-08
- Ran production database seed script to create groupscholar_website tables and insert initial intake intent rows.

## 2026-02-08
- Expanded the intake pulse with top time zone, locale, and focus note stats sourced from production data.
- Deployed updates to https://groupscholar.com.

## 2026-02-08
- Added a new Signals Ledger section to surface live impact signals, status messaging, and latest refresh timing from the production data feed.
- Attempted Vercel production deploy; blocked by free tier deployment limit (api-deployments-free-per-day).

## 2026-02-08
- Added a recent intake intent feed panel to the Signal window, including timestamps, region/source labels, and fallback messaging.

## 2026-02-08
- Added intake pulse source visibility (top source plus source mix chips) so the Signal window surfaces where incoming intents originate.

## 2026-02-08
- Extended the intake pulse to include top source + source mix and surfaced the new source breakdown in the live pulse panel.

## 2026-02-08
- Added 7-day intake momentum metrics (daily average + trend) to the intake pulse feed and surfaced them in the Studio pulse panel.

## 2026-02-08
- Added a 7-day intake cadence timeline sourced from production data, plus a new API endpoint to deliver filled daily counts for the Signal window.
- Attempted Vercel production deploy; blocked by free tier deployment limit (api-deployments-free-per-day).
