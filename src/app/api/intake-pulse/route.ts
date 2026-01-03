import { NextResponse } from "next/server";

import { getDb } from "@/server/db";
import { getIntakePulse } from "@/server/db/queries";

export const runtime = "nodejs";

const fallbackPulse = {
  total: 64,
  last24h: 7,
  last7d: 31,
  prev7d: 28,
  dailyAverage7d: 4.4,
  trendPercent7d: 11,
  topTrack: "Quiet Focus",
  lastSubmittedAt: "2026-02-08T16:30:00.000Z",
  trackMix: [
    { track: "Quiet Focus", count: 22 },
    { track: "Shared Draft", count: 18 },
    { track: "After Hours", count: 14 },
  ],
  topSource: "website",
  sourceMix: [
    { source: "website", count: 28 },
    { source: "apply-section", count: 21 },
    { source: "landing", count: 15 },
  ],
  topTimeZone: "America/New_York",
  topLocale: "en-US",
  focusNotes: 18,
  avgFocusLength: 64,
};

export async function GET() {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ pulse: fallbackPulse });
  }

  const pulse = await getIntakePulse(db);
  return NextResponse.json({
    pulse: {
      ...pulse,
      lastSubmittedAt: pulse.lastSubmittedAt
        ? pulse.lastSubmittedAt.toISOString()
        : null,
    },
  });
}
