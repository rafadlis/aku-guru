"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/common/ui/breadcrumb";

const breadcrumbsMap: Record<string, { label: string; link?: string }[]> = {
  "/dashboard": [{ label: "Dashboard" }],
  "/dashboard/schedule": [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Jadwal Kelas" },
  ],
  "/dashboard/schedule/absent": [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Jadwal Kelas", link: "/dashboard/schedule" },
    { label: "Absensi" },
  ],
  "/dashboard/schedule/activity": [
    { label: "Dashboard", link: "/dashboard" },
    { label: "Jadwal Kelas", link: "/dashboard/schedule" },
    { label: "Keaktifan" },
  ],
};

export function BreadcrumbNav() {
  const pathname = usePathname();
  const breadcrumbs = breadcrumbsMap[pathname] || [{ label: "Dashboard" }];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <BreadcrumbItem key={breadcrumb.label} className="hidden md:block">
              {!isLast && breadcrumb.link ? (
                <>
                  <BreadcrumbLink href={breadcrumb.link}>
                    {breadcrumb.label}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
