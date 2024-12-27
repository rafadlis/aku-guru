import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/common/ui/sonner";

export const metadata: Metadata = {
  title: "Aku Guru",
  description: "Manajemen Absensi & Nilai Siswa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`antialiased`}>
        {children}
        <Toaster richColors position="top-center" closeButton />
      </body>
    </html>
  );
}
