import { z } from "zod";

import { getDb } from "@/server/db";
import { createIntakeIntent } from "@/server/db/queries";

export const runtime = "nodejs";

const intentSchema = z.object({
  email: z.string().trim().email().max(160),
  track: z.string().trim().min(1).max(60),
  focusNote: z.string().trim().max(220).nullable().optional(),
  timeZone: z.string().trim().max(80).nullable().optional(),
  locale: z.string().trim().max(40).nullable().optional(),
  userAgent: z.string().trim().max(240).nullable().optional(),
});

export async function POST(request: Request) {
  try {
    const payload = intentSchema.parse(await request.json());

    const db = getDb();
    if (!db) {
      return Response.json({ ok: true, stored: false });
    }

    await createIntakeIntent(db, {
      email: payload.email,
      track: payload.track,
      focusNote: payload.focusNote ?? null,
      timeZone: payload.timeZone ?? null,
      locale: payload.locale ?? null,
      userAgent: payload.userAgent ?? null,
      source: "landing",
    });

    return Response.json({ ok: true, stored: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { ok: false, error: "Invalid request." },
        { status: 400 },
      );
    }

    return Response.json(
      { ok: false, error: "Unable to log intent." },
      { status: 500 },
    );
  }
}
