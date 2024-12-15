import { CardsComponent } from "@/features/dashboard/cards-component";
import { TugasTable } from "@/features/tugas/table";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <section>
      <Suspense fallback={<div>Loading...</div>}>
        <CardsComponent />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <TugasTable />
      </Suspense>
    </section>
  );
}
