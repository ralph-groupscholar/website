import { NextResponse } from "next/server";

import { getDb } from "@/server/db";
import { listImpactSignals } from "@/server/db/queries";

export const runtime = "nodejs";

const fallbackSignals = [
  {
    id: "fallback-1",
    category: "Review Ops",
    title: "Scholarship review turnaround tightened",
    detail: "Median review decision time moved below the 48-hour guardrail across active cohorts.",
    metric: "36h median",
    reportedAt: "2026-02-07T14:05:00.000Z",
  },
  {
    id: "fallback-2",
    category: "Community",
    title: "Mentor coverage expanded",
    detail: "New mentor pools now cover late-night sessions in three time zones without overflow.",
    metric: "3 zones",
    reportedAt: "2026-02-06T19:20:00.000Z",
  },
  {
    id: "fallback-3",
    category: "Retention",
    title: "Return-rate uplift on follow-up nudges",
    detail: "Personalized touchpoint cadence lifted second-session attendance this month.",
    metric: "+12%",
    reportedAt: "2026-02-05T16:10:00.000Z",
  },
  {
    id: "fallback-4",
    category: "Outcomes",
    title: "Evidence capture stays on schedule",
    detail: "Weekly outcome notes landed on time for all live programs in January.",
    metric: "100% on-time",
    reportedAt: "2026-02-04T11:45:00.000Z",
  },
];

export async function GET() {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ signals: fallbackSignals });
  }

  const signals = await listImpactSignals(db, 4);
  return NextResponse.json({
    signals: signals.map((signal) => ({
      ...signal,
      reportedAt: signal.reportedAt.toISOString(),
    })),
  });
}
