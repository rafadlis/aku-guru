import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/common/ui/table";
import { getTugas } from "./get-tugas";
import { format } from "date-fns";
import { id } from "date-fns/locale";

export const TugasTable = async () => {
  const data = await getTugas();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nama Tugas</TableHead>
            <TableHead>Tanggal Tugas</TableHead>
            <TableHead>Jatuh Tempo</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((tugas) => (
            <TableRow key={tugas.id}>
              <TableCell className="font-medium">{tugas.namaTugas}</TableCell>
              <TableCell>
                {tugas.tanggalTugas
                  ? format(new Date(tugas.tanggalTugas), "dd MMMM yyyy", {
                      locale: id,
                    })
                  : "-"}
              </TableCell>
              <TableCell>
                {tugas.jatuhTempo
                  ? format(new Date(tugas.jatuhTempo), "dd MMMM yyyy", {
                      locale: id,
                    })
                  : "-"}
              </TableCell>
              <TableCell className="text-right">
                {/* We can add action buttons here later */}-
              </TableCell>
            </TableRow>
          ))}
          {data.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                Tidak ada tugas
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
