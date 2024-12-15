import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import * as relations from "./relations";
import { createClient } from "@/supabase/server";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

export const client = postgres(connectionString, { prepare: false });
export const db_drizzle = drizzle(client, {
  schema: { ...schema, ...relations },
});

export const db_supabase = await createClient();
