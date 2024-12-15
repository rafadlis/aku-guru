"use server";

import { db_drizzle } from "@/drizzle/server";
import { Tugas } from "@/drizzle/schema";

export async function getTugas() {
  const data = await db_drizzle.select().from(Tugas).limit(10);
  return data;
}
