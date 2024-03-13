import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";
import * as schema from "./schema";

const client = createClient({
  url: process.env.TURSO_SYNC_URL ?? import.meta.env.TURSO_SYNC_URL,
  authToken: process.env.TURSO_AUTH_TOKEN ?? import.meta.env.TURSO_AUTH_TOKEN,
});

const db = drizzle(client, { schema });

await migrate(db, { migrationsFolder: "./drizzle" });
