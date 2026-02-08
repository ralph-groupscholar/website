import { desc, sql } from "drizzle-orm";

import type { WebsiteDb } from "./index";
import { impactSignals, intakeIntents } from "./schema";

export type ImpactSignalRecord = {
  id: number;
  category: string;
  title: string;
  detail: string;
  metric: string;
  reportedAt: Date;
};

export type IntakePulseRecord = {
  total: number;
  last24h: number;
  last7d: number;
  prev7d: number;
  dailyAverage7d: number;
  trendPercent7d: number;
  topTrack: string | null;
  lastSubmittedAt: Date | null;
  trackMix: Array<{ track: string; count: number }>;
  topSource: string | null;
  sourceMix: Array<{ source: string; count: number }>;
  topTimeZone: string | null;
  topLocale: string | null;
  focusNotes: number;
  avgFocusLength: number;
};

export type IntakeFeedRecord = {
  id: number;
  track: string;
  source: string;
  submittedAt: Date;
  timeZone: string | null;
  locale: string | null;
};

export type IntakeTimelineRecord = {
  day: Date;
  count: number;
};

export async function listImpactSignals(
  db: WebsiteDb,
  limit = 4,
): Promise<ImpactSignalRecord[]> {
  return db
    .select()
    .from(impactSignals)
    .orderBy(desc(impactSignals.reportedAt))
    .limit(limit);
}

export async function createIntakeIntent(
  db: WebsiteDb,
  data: {
    email: string;
    track: string;
    focusNote?: string | null;
    timeZone?: string | null;
    locale?: string | null;
    userAgent?: string | null;
    source?: string;
  },
) {
  await db.insert(intakeIntents).values({
    email: data.email,
    track: data.track,
    focusNote: data.focusNote ?? null,
    timeZone: data.timeZone ?? null,
    locale: data.locale ?? null,
    userAgent: data.userAgent ?? null,
    source: data.source ?? "website",
  });
}

export async function getIntakePulse(db: WebsiteDb): Promise<IntakePulseRecord> {
  const totalRow = await db
    .select({ count: sql<number>`count(*)` })
    .from(intakeIntents);
  const last24hRow = await db
    .select({ count: sql<number>`count(*)` })
    .from(intakeIntents)
    .where(sql`submitted_at >= now() - interval '24 hours'`);
  const last7dRow = await db
    .select({ count: sql<number>`count(*)` })
    .from(intakeIntents)
    .where(sql`submitted_at >= now() - interval '7 days'`);
  const prev7dRow = await db
    .select({ count: sql<number>`count(*)` })
    .from(intakeIntents)
    .where(
      sql`submitted_at >= now() - interval '14 days' and submitted_at < now() - interval '7 days'`,
    );
  const latestRow = await db
    .select({
      latest: sql<Date | null>`max(${intakeIntents.submittedAt})`,
    })
    .from(intakeIntents);

  const trackCount = sql<number>`count(*)`.as("count");
  const trackRows = await db
    .select({ track: intakeIntents.track, count: trackCount })
    .from(intakeIntents)
    .where(sql`submitted_at >= now() - interval '14 days'`)
    .groupBy(intakeIntents.track)
    .orderBy(desc(trackCount))
    .limit(3);

  const sourceCount = sql<number>`count(*)`.as("count");
  const sourceRows = await db
    .select({ source: intakeIntents.source, count: sourceCount })
    .from(intakeIntents)
    .where(sql`submitted_at >= now() - interval '14 days'`)
    .groupBy(intakeIntents.source)
    .orderBy(desc(sourceCount))
    .limit(3);

  const timeZoneCount = sql<number>`count(*)`.as("count");
  const timeZoneRows = await db
    .select({ zone: intakeIntents.timeZone, count: timeZoneCount })
    .from(intakeIntents)
    .where(
      sql`submitted_at >= now() - interval '14 days' and ${intakeIntents.timeZone} is not null`,
    )
    .groupBy(intakeIntents.timeZone)
    .orderBy(desc(timeZoneCount))
    .limit(1);

  const localeCount = sql<number>`count(*)`.as("count");
  const localeRows = await db
    .select({ locale: intakeIntents.locale, count: localeCount })
    .from(intakeIntents)
    .where(
      sql`submitted_at >= now() - interval '14 days' and ${intakeIntents.locale} is not null`,
    )
    .groupBy(intakeIntents.locale)
    .orderBy(desc(localeCount))
    .limit(1);

  const focusFilter = sql`submitted_at >= now() - interval '14 days'
    and ${intakeIntents.focusNote} is not null
    and length(trim(${intakeIntents.focusNote})) > 0`;
  const focusCountRow = await db
    .select({ count: sql<number>`count(*)` })
    .from(intakeIntents)
    .where(focusFilter);
  const focusAvgRow = await db
    .select({
      avg: sql<number>`avg(length(trim(${intakeIntents.focusNote})))`,
    })
    .from(intakeIntents)
    .where(focusFilter);

  const last7d = Number(last7dRow[0]?.count ?? 0);
  const prev7d = Number(prev7dRow[0]?.count ?? 0);
  const trendBase = prev7d === 0 ? Math.max(last7d, 1) : prev7d;
  const trendPercent = Math.round(((last7d - prev7d) / trendBase) * 100);

  return {
    total: Number(totalRow[0]?.count ?? 0),
    last24h: Number(last24hRow[0]?.count ?? 0),
    last7d,
    prev7d,
    dailyAverage7d: Math.round((last7d / 7) * 10) / 10,
    trendPercent7d: trendPercent,
    topTrack: trackRows[0]?.track ?? null,
    lastSubmittedAt: latestRow[0]?.latest ?? null,
    trackMix: trackRows.map((row) => ({
      track: row.track,
      count: Number(row.count ?? 0),
    })),
    topSource: sourceRows[0]?.source ?? null,
    sourceMix: sourceRows.map((row) => ({
      source: row.source,
      count: Number(row.count ?? 0),
    })),
    topTimeZone: timeZoneRows[0]?.zone ?? null,
    topLocale: localeRows[0]?.locale ?? null,
    focusNotes: Number(focusCountRow[0]?.count ?? 0),
    avgFocusLength: Math.round(Number(focusAvgRow[0]?.avg ?? 0)),
  };
}

export async function listRecentIntakeIntents(
  db: WebsiteDb,
  limit = 6,
): Promise<IntakeFeedRecord[]> {
  return db
    .select({
      id: intakeIntents.id,
      track: intakeIntents.track,
      source: intakeIntents.source,
      submittedAt: intakeIntents.submittedAt,
      timeZone: intakeIntents.timeZone,
      locale: intakeIntents.locale,
    })
    .from(intakeIntents)
    .orderBy(desc(intakeIntents.submittedAt))
    .limit(limit);
}

export async function listIntakeTimeline(
  db: WebsiteDb,
  days = 7,
): Promise<IntakeTimelineRecord[]> {
  const windowDays = Math.max(1, Math.floor(days));
  const rows = await db
    .select({
      day: sql<Date>`date_trunc('day', ${intakeIntents.submittedAt})`,
      count: sql<number>`count(*)`,
    })
    .from(intakeIntents)
    .where(
      sql`${intakeIntents.submittedAt} >= now() - (${windowDays - 1}) * interval '1 day'`,
    )
    .groupBy(sql`date_trunc('day', ${intakeIntents.submittedAt})`)
    .orderBy(sql`date_trunc('day', ${intakeIntents.submittedAt})`);

  return rows.map((row) => ({
    day: row.day,
    count: Number(row.count ?? 0),
  }));
}
