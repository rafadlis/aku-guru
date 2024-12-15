"use server";

import { createSupabaseClient } from "@/supabase/server";

export async function getJadwalKelas() {
  const supabase = await createSupabaseClient();
  const { data, error } = await supabase
    .from("Jadwal")
    .select(
      "id, Kelas(nama_kelas), waktu_mulai, waktu_selesai, MataPelajaran(mata_pelajaran)"
    );
  if (error) {
    throw error;
  }
  return data;
}

export type JadwalKelasType = Awaited<ReturnType<typeof getJadwalKelas>>;
