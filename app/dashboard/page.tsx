import { Suspense } from "react";
import { ClassCardsComponent } from "@/features/dashboard/class-cards-component";
import { ClassCardsSkeleton } from "@/features/dashboard/class-cards-skeleton";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Suspense fallback={<ClassCardsSkeleton />}>
        <ClassCardsComponent />
      </Suspense>
    </div>
  );
}
