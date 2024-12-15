import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/ui/card";
import { JadwalKelasType } from "./get-jadwal-kelas";

export function ClassCard({ data }: { data: JadwalKelasType[0] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{data.Kelas?.nama_kelas}</CardTitle>
        <CardDescription>
          {new Date(data.waktu_mulai).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }) || "00:00"}
          -{" "}
          {new Date(data.waktu_selesai).toLocaleTimeString("id-ID", {
            hour: "2-digit",
            minute: "2-digit",
          }) || "00:00"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Class Card Content</p>
      </CardContent>
    </Card>
  );
}
