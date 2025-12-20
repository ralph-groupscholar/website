import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required to seed the database.");
}

const sql = postgres(databaseUrl, { ssl: false });

try {
  await sql`create schema if not exists groupscholar_website`;

  await sql`
    create table if not exists groupscholar_website.impact_signals (
      id serial primary key,
      category varchar(64) not null,
      title varchar(160) not null unique,
      detail text not null,
      metric varchar(64) not null,
      reported_at timestamptz not null default now()
    )
  `;

  await sql`
    create table if not exists groupscholar_website.intake_intents (
      id serial primary key,
      email varchar(160) not null,
      track varchar(80) not null,
      focus_note text,
      time_zone varchar(120),
      locale varchar(32),
      user_agent varchar(256),
      source varchar(80) not null default 'website',
      submitted_at timestamptz not null default now()
    )
  `;

  await sql`
    create index if not exists impact_signals_category_idx
      on groupscholar_website.impact_signals (category)
  `;

  const [{ count: impactCount }] = await sql`
    select count(*)::int as count
    from groupscholar_website.impact_signals
  `;

  if (impactCount === 0) {
    await sql`
      insert into groupscholar_website.impact_signals
        (category, title, detail, metric, reported_at)
      values
        (
          'Review Ops',
          'Scholarship review turnaround tightened',
          'Median review decision time moved below the 48-hour guardrail across active cohorts.',
          '36h median',
          now() - interval '1 day'
        ),
        (
          'Community',
          'Mentor coverage expanded',
          'New mentor pools now cover late-night sessions in three time zones without overflow.',
          '3 zones',
          now() - interval '2 days'
        ),
        (
          'Retention',
          'Return-rate uplift on follow-up nudges',
          'Personalized touchpoint cadence lifted second-session attendance this month.',
          '+12%',
          now() - interval '3 days'
        ),
        (
          'Outcomes',
          'Evidence capture stays on schedule',
          'Weekly outcome notes landed on time for all live programs in January.',
          '100% on-time',
          now() - interval '4 days'
        )
    `;
  }

  const [{ count: intakeCount }] = await sql`
    select count(*)::int as count
    from groupscholar_website.intake_intents
  `;

  if (intakeCount === 0) {
    await sql`
      insert into groupscholar_website.intake_intents
        (email, track, focus_note, time_zone, locale, user_agent, source)
      values
        (
          'maya.chen@university.edu',
          'Global Scholars',
          'Focused on community-led research and mentorship cohorts.',
          'America/Los_Angeles',
          'en-US',
          'SeedScript/1.0',
          'seed'
        ),
        (
          'samir.diallo@college.edu',
          'Career Sprint',
          'Looking for a structured accountability room with peers.',
          'America/New_York',
          'en-US',
          'SeedScript/1.0',
          'seed'
        ),
        (
          'amara.okeke@school.edu',
          'Any track',
          'Interested in short sessions and mentor matchmaking.',
          'Europe/London',
          'en-GB',
          'SeedScript/1.0',
          'seed'
        )
    `;
  }

  console.log("Seed complete.");
} finally {
  await sql.end({ timeout: 5 });
}
