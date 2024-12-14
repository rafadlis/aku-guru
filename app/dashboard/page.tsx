import { TugasTable } from "@/features/tugas/table";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TugasTable />
    </Suspense>
  );
}
