import { Wrench } from "@phosphor-icons/react/dist/ssr";
import { BackButton } from "./back-button";

export default function DevelopmentStatus() {
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
      <BackButton />
    </div>
  );
}
