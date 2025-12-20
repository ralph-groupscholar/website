import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to seed intent requests.");
}

const sql = postgres(databaseUrl, {
  ssl: false,
  max: 1,
  idle_timeout: 5,
  connect_timeout: 10,
});

const seedRows = [
  {
    email: "maya.williams@example.org",
    track: "Cohort 7",
    focusNote: "Scaling peer circles for first-gen scholars.",
    timeZone: "America/New_York",
    locale: "en-US",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/537.36",
    source: "landing",
    submittedAt: new Date("2026-02-03T15:22:00Z"),
  },
  {
    email: "andre.thomas@example.org",
    track: "Cohort 8",
    focusNote: "Looking for a scholarship readiness sprint.",
    timeZone: "America/Chicago",
    locale: "en-US",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    source: "landing",
    submittedAt: new Date("2026-02-05T19:08:00Z"),
  },
  {
    email: "lia.chen@example.org",
    track: "Mentor Lab",
    focusNote: "Need mentor matching for STEM transfers.",
    timeZone: "America/Los_Angeles",
    locale: "en-US",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15",
    source: "landing",
    submittedAt: new Date("2026-02-06T02:41:00Z"),
  },
  {
    email: "sofia.ramirez@example.org",
    track: "Cohort 7",
    focusNote: "Want metrics on retention for commuter scholars.",
    timeZone: "America/Denver",
    locale: "en-US",
    userAgent: "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36",
    source: "landing",
    submittedAt: new Date("2026-02-06T17:55:00Z"),
  },
  {
    email: "samir.khan@example.org",
    track: "Cohort 9",
    focusNote: "Exploring wraparound support for adult learners.",
    timeZone: "America/New_York",
    locale: "en-US",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2) AppleWebKit/537.36",
    source: "landing",
    submittedAt: new Date("2026-02-07T11:05:00Z"),
  },
];

async function ensureSchema() {
  await sql`create schema if not exists groupscholar_website`;

  await sql`
    create table if not exists groupscholar_website.intent_requests (
      id serial primary key,
      email varchar(160) not null,
      track varchar(80) not null,
      focus_note text,
      time_zone varchar(80),
      locale varchar(40),
      user_agent varchar(240),
      source varchar(80) not null default 'landing',
      submitted_at timestamptz not null default now()
    )
  `;

  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists email varchar(160) not null
  `;
  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists track varchar(80) not null
  `;
  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists focus_note text
  `;
  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists time_zone varchar(80)
  `;
  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists locale varchar(40)
  `;
  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists user_agent varchar(240)
  `;
  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists source varchar(80) not null default 'landing'
  `;
  await sql`
    alter table groupscholar_website.intent_requests
      add column if not exists submitted_at timestamptz not null default now()
  `;

  await sql`
    create index if not exists intent_requests_submitted_at_idx
      on groupscholar_website.intent_requests (submitted_at desc)
  `;
}

async function seed() {
  const [{ count }] = await sql`
    select count(*)::int as count
    from groupscholar_website.intent_requests
  `;

  if (count > 0) {
    console.log(`Intent requests already seeded (${count}).`);
    return;
  }

  const values = seedRows.map((row) => [
    row.email,
    row.track,
    row.focusNote,
    row.timeZone,
    row.locale,
    row.userAgent,
    row.source,
    row.submittedAt,
  ]);

  await sql`
    insert into groupscholar_website.intent_requests
      (email, track, focus_note, time_zone, locale, user_agent, source, submitted_at)
    values ${sql(values)}
  `;

  console.log(`Seeded ${seedRows.length} intent requests.`);
}

try {
  await ensureSchema();
  await seed();
} finally {
  await sql.end({ timeout: 5 });
}
