"use client";

import { ArrowLeft, Wrench } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function DevelopmentStatus() {
  const router = useRouter();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 p-3">
      <div className="flex flex-col items-center gap-1.5 text-center">
        <Wrench size={28} className="text-muted-foreground" weight="duotone" />
        <h2 className="text-xl font-semibold">Dalam Pengembangan</h2>
        <p className="text-sm text-muted-foreground">
          Halaman ini sedang dalam tahap pengembangan. <br /> Mohon tunggu
          pembaruan selanjutnya.
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
