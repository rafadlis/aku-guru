import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/common/ui/card";
import { Button } from "@/common/ui/button";
import { JadwalKelasType } from "./get-jadwal-kelas";
import { cn } from "@/common/utils/utils";

export function ClassCard({ data }: { data: JadwalKelasType[0] }) {
  const isAbsenExist = data.AbsenMurid.some(
    (absen) => absen.status_absen !== null
  );
  const jumlahMuridBelumAbsen = data.AbsenMurid.filter(
    (absen) => absen.status_absen === null
  ).length;

  // Determine status colors
  const getStatusColors = () => {
    if (!isAbsenExist) {
      return {
        border: "border-destructive",
        dot: "bg-destructive animate-ping",
        dotWrapper: "bg-destructive",
      };
    }
    if (jumlahMuridBelumAbsen === 0) {
      return {
        border: "border-success",
        dot: "bg-success",
        dotWrapper: "bg-success",
      };
    }
    return {
      border: "border-warning",
      dot: "bg-warning animate-ping",
      dotWrapper: "bg-warning",
    };
  };

  const statusColors = getStatusColors();

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
        <Button
          variant="outline"
          size="sm"
          className={cn("gap-2", statusColors.border)}
        >
          <div className="relative flex items-center justify-center w-2 h-2">
            <span
              className={cn(
                "absolute inline-flex rounded-full w-full h-full opacity-75",
                statusColors.dot
              )}
            />
            <span
              className={cn(
                "relative inline-flex rounded-full w-full h-full",
                statusColors.dotWrapper
              )}
            />
          </div>
          Absen
        </Button>
      </CardContent>
    </Card>
  );
}
