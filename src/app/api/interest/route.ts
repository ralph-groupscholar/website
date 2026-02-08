import { NextResponse } from "next/server";
import { z } from "zod";

import { getDb } from "@/server/db";
import { createIntakeIntent } from "@/server/db/queries";

export const runtime = "nodejs";

const payloadSchema = z.object({
  email: z.string().email(),
  track: z.string().max(64).optional(),
  focusNote: z.string().max(240).optional(),
  timeZone: z.string().max(128).optional(),
  locale: z.string().max(32).optional(),
  userAgent: z.string().max(256).optional(),
  source: z.string().max(64).optional(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid payload." },
      { status: 400 },
    );
  }

  const { email, track, focusNote, timeZone, locale, userAgent, source } =
    parsed.data;

  const db = getDb();
  if (!db) {
    return NextResponse.json({ ok: true, stored: false });
  }

  await createIntakeIntent(db, {
    email,
    track: track ?? "Any track",
    focusNote: focusNote ?? null,
    timeZone: timeZone ?? null,
    locale: locale ?? null,
    userAgent: userAgent ?? null,
    source: source ?? "website",
  });

  return NextResponse.json({ ok: true, stored: true });
}
