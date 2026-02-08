import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import type { PostgresJsDatabase } from "drizzle-orm/postgres-js";

import * as schema from "./schema";

export type WebsiteDb = PostgresJsDatabase<typeof schema>;

type DbGlobal = {
  sql?: postgres.Sql;
  db?: WebsiteDb;
};

const globalForDb = globalThis as DbGlobal;

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl && process.env.NODE_ENV === "production") {
  throw new Error("DATABASE_URL is required in production.");
}

const sql =
  databaseUrl
    ? globalForDb.sql ??
      postgres(databaseUrl, {
        max: 1,
        ssl: false,
      })
    : null;

const db = sql ? globalForDb.db ?? drizzle(sql, { schema }) : null;

if (process.env.NODE_ENV !== "production") {
  globalForDb.sql = sql ?? undefined;
  globalForDb.db = db ?? undefined;
}

export function getDb() {
  return db;
}
