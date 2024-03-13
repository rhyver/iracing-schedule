import { drizzle } from "drizzle-orm/libsql";
import * as schema from "../drizzle/schema";
import { createClient } from "@libsql/client";

export const client = createClient({
  url: process.env.TURSO_DATABASE_URL ?? import.meta.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN ?? import.meta.env.TURSO_AUTH_TOKEN,
  syncUrl: process.env.TURSO_SYNC_URL ?? import.meta.env.TURSO_SYNC_URL,
});

export const db = drizzle(client, { schema });
