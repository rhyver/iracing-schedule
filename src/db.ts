import { drizzle } from "drizzle-orm/libsql";
import * as schema from "../drizzle/schema";
import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL ?? import.meta.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN ?? import.meta.env.TURSO_AUTH_TOKEN,
});

export const db = drizzle(client, { schema });
