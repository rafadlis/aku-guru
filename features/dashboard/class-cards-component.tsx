import { ClassCard } from "./class-card";
import { getJadwalKelas } from "./get-jadwal-kelas";

export async function ClassCardsComponent() {
  const jadwalKelas = await getJadwalKelas();

  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      {jadwalKelas.map((jadwal) => (
        <ClassCard key={jadwal.id} data={jadwal} />
      ))}
    </div>
  );
}
