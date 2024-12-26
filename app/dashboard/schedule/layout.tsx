import { LoadingPage } from "@/common/loading-page";
import { Suspense } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingPage title="Memuat..." />}>{children}</Suspense>
  );
}
