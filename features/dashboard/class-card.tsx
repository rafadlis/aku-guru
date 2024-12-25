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
import { ListChecks, Pulse } from "@phosphor-icons/react/dist/ssr";

export function ClassCard({ data }: { data: JadwalKelasType[0] }) {
  const isAbsenExist = data.AbsenMurid.some(
    (absen) => absen.status_absen !== null
  );
  const jumlahMuridBelumAbsen = data.AbsenMurid.filter(
    (absen) => absen.status_absen === null
  ).length;

  // Determine status colors and animations
  const getStatusStyles = () => {
    if (!isAbsenExist) {
      return {
        button: "border-destructive",
        wrapper: "before:bg-destructive/20 before:animate-ping before:scale-75",
        icon: "text-destructive",
      };
    }
    if (jumlahMuridBelumAbsen === 0) {
      return {
        button: "border-success",
        wrapper: "",
        icon: "text-success",
      };
    }
    return {
      button: "border-warning",
      wrapper: "before:bg-warning/20",
      icon: "text-warning",
    };
  };

  const statusStyles = getStatusStyles();

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
      <CardContent className="flex gap-2">
        <div
          className={cn(
            "relative before:absolute before:-inset-[2px] before:rounded-md before:origin-center",
            statusStyles.wrapper
          )}
        >
          <Button
            variant="outline"
            size="sm"
            className={cn("gap-2 relative z-10", statusStyles.button)}
          >
            <ListChecks className={statusStyles.icon} />
            Absen
          </Button>
        </div>
        <Button size="sm" variant="outline">
          <Pulse />
          Kekatifan
        </Button>
      </CardContent>
    </Card>
  );
}
