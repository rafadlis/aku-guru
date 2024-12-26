"use client";

import { ArrowLeft, Warning } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/common/ui/button";
import { useRouter } from "next/navigation";

interface NotFoundPageProps {
  title: string;
  description: string;
}

export function NotFoundPage({ title, description }: NotFoundPageProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-6 p-3">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <Warning size={28} className="text-muted-foreground" weight="duotone" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">
          {description} <br />
          Silakan periksa kembali URL atau kembali ke halaman sebelumnya.
        </p>
      </div>

      <Button
        size="sm"
        variant="outline"
        onClick={() => router.back()}
        className="gap-1.5"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali
      </Button>
    </div>
  );
}
