"use server";

import { db } from "@/drizzle/server";
import { Tugas } from "@/drizzle/schema";

export async function getTugas() {
  const data = await db.select().from(Tugas).limit(10);
  return data;
}
