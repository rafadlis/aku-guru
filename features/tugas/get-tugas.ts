"use server";

import { createSupabaseClient } from "@/supabase/server";

export async function getTugas() {
  const supabase = await createSupabaseClient();
  const { data, error } = await supabase.from("Tugas").select("*").limit(10);
  if (error) {
    throw error;
  }
  return data;
}
