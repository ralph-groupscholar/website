import { NextResponse } from "next/server";

import { getDb } from "@/server/db";
import { listRecentIntakeIntents } from "@/server/db/queries";

export const runtime = "nodejs";

const fallbackFeed = [
  {
    id: "fallback-1",
    track: "Quiet Focus",
    source: "website",
    region: "Brooklyn",
    submittedAt: "2026-02-08T16:12:00.000Z",
  },
  {
    id: "fallback-2",
    track: "Shared Draft",
    source: "apply-section",
    region: "Oakland",
    submittedAt: "2026-02-08T15:46:00.000Z",
  },
  {
    id: "fallback-3",
    track: "After Hours",
    source: "website",
    region: "Chicago",
    submittedAt: "2026-02-08T14:58:00.000Z",
  },
  {
    id: "fallback-4",
    track: "Quiet Focus",
    source: "landing",
    region: "Atlanta",
    submittedAt: "2026-02-08T14:22:00.000Z",
  },
];

const formatRegion = (timeZone: string | null, locale: string | null) => {
  if (timeZone) {
    const parts = timeZone.split("/");
    const region = parts[parts.length - 1] ?? "";
    const cleaned = region.replace(/_/g, " ").trim();
    if (cleaned) return cleaned;
  }
  if (locale) {
    const [, regionCode] = locale.split("-");
    if (regionCode) return regionCode.toUpperCase();
  }
  return null;
};

export async function GET() {
  const db = getDb();
  if (!db) {
    return NextResponse.json({ feed: fallbackFeed });
  }

  const feed = await listRecentIntakeIntents(db, 5);
  return NextResponse.json({
    feed: feed.map((entry) => ({
      id: entry.id,
      track: entry.track,
      source: entry.source,
      region: formatRegion(entry.timeZone, entry.locale),
      submittedAt: entry.submittedAt.toISOString(),
    })),
  });
}
