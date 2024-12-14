"use server";

import { db } from "@/drizzle/server";
import { tugas } from "@/drizzle/schema";

export async function getTugas() {
  const data = await db.select().from(tugas).limit(10);
  return data;
}
