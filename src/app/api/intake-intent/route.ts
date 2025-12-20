import { NextResponse } from "next/server";
import { z } from "zod";

import { getDb } from "@/server/db";
import { createIntakeIntent } from "@/server/db/queries";

export const runtime = "nodejs";

const payloadSchema = z.object({
  email: z.string().email(),
  track: z.string().min(1),
  focusNote: z.string().max(160).optional(),
});

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const db = getDb();
  if (!db) {
    return NextResponse.json({ ok: true, stored: false });
  }

  await createIntakeIntent(db, {
    email: parsed.data.email,
    track: parsed.data.track,
    focusNote: parsed.data.focusNote?.trim() || null,
  });

  return NextResponse.json({ ok: true, stored: true });
}
