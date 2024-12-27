import { AbsenMuridTable } from "./absen-murid-table";

export default async function AbsenMuridPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="container py-6">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Daftar Absensi</h1>
          <p className="text-muted-foreground">
            Daftar absensi murid untuk jadwal ini.
          </p>
        </div>
        <AbsenMuridTable params={params} />
      </div>
    </div>
  );
}
