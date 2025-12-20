import {
  index,
  pgSchema,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from "drizzle-orm/pg-core";

const website = pgSchema("groupscholar_website");

export const impactSignals = website.table(
  "impact_signals",
  {
    id: serial("id").primaryKey(),
    category: varchar("category", { length: 64 }).notNull(),
    title: varchar("title", { length: 160 }).notNull(),
    detail: text("detail").notNull(),
    metric: varchar("metric", { length: 64 }).notNull(),
    reportedAt: timestamp("reported_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => ({
    categoryIdx: index("impact_signals_category_idx").on(table.category),
    titleUnique: uniqueIndex("impact_signals_title_uidx").on(table.title),
  }),
);

export const intakeIntents = website.table("intake_intents", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 160 }).notNull(),
  track: varchar("track", { length: 80 }).notNull(),
  focusNote: text("focus_note"),
  timeZone: varchar("time_zone", { length: 120 }),
  locale: varchar("locale", { length: 32 }),
  userAgent: varchar("user_agent", { length: 256 }),
  source: varchar("source", { length: 80 }).notNull().default("website"),
  submittedAt: timestamp("submitted_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
