import { NextResponse } from "next/server";

import { getDb } from "@/server/db";
import { getIntakeTimeline } from "@/server/db/queries";

export const runtime = "nodejs";

const fallbackTimeline = [
  { day: "2026-02-02", count: 5 },
  { day: "2026-02-03", count: 8 },
  { day: "2026-02-04", count: 7 },
  { day: "2026-02-05", count: 9 },
  { day: "2026-02-06", count: 10 },
  { day: "2026-02-07", count: 6 },
  { day: "2026-02-08", count: 7 },
];

export async function GET() {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ timeline: fallbackTimeline });
  }

  const timeline = await getIntakeTimeline(db, 7);
  return NextResponse.json({ timeline });
}
