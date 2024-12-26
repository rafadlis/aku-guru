"use client";

import { CircleNotch } from "@phosphor-icons/react/dist/ssr";

interface LoadingPageProps {
  title?: string;
}

export function LoadingPage({ title = "Memuat Data" }: LoadingPageProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-3">
      <CircleNotch
        size={28}
        className="animate-spin text-muted-foreground"
        weight="bold"
      />
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
    </div>
  );
}
