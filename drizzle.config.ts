import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  introspect: {
    casing: "preserve",
  },
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
