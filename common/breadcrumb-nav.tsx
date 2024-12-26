"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CaretRight, DotsThree } from "@phosphor-icons/react/dist/ssr";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/common/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/common/ui/dropdown-menu";

export function BreadcrumbNav() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  const capitalizeFirstLetter = (str: string) => {
    return str
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Custom separator component
  const CustomSeparator = () => (
    <BreadcrumbSeparator>
      <CaretRight className="h-4 w-4 text-muted-foreground" />
    </BreadcrumbSeparator>
  );

  // If we're at dashboard root, don't show breadcrumb
  if (pathname === "/dashboard" || paths.length <= 1) return null;

  // Calculate visible and hidden paths
  const MAX_VISIBLE_PATHS = 5;
  const showDropdown = paths.length > MAX_VISIBLE_PATHS;

  const visiblePaths = showDropdown
    ? [...paths.slice(0, 2), ...paths.slice(-2)] // Show first 2 and last 2
    : paths;

  const hiddenPaths = showDropdown ? paths.slice(2, -2) : [];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Dashboard */}
        <BreadcrumbItem key="dashboard">
          <BreadcrumbLink asChild>
            <Link href="/dashboard">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <CustomSeparator />

        {/* Visible paths */}
        {visiblePaths.slice(1).map((path, index, array) => {
          const pathIndex = paths.indexOf(path);
          const href = `/${paths.slice(0, pathIndex + 1).join("/")}`;
          const isLast = index === array.length - 1 && !showDropdown;

          // Add dropdown in the middle
          if (showDropdown && index === 1) {
            return (
              <React.Fragment key={`group-${path}`}>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href={href}>{capitalizeFirstLetter(path)}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <CustomSeparator />
                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-1">
                      <BreadcrumbEllipsis>
                        <DotsThree className="h-4 w-4" weight="bold" />
                      </BreadcrumbEllipsis>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {hiddenPaths.map((hiddenPath) => {
                        const hiddenHref = `/${paths
                          .slice(0, paths.indexOf(hiddenPath) + 1)
                          .join("/")}`;
                        return (
                          <DropdownMenuItem key={hiddenPath} asChild>
                            <Link href={hiddenHref}>
                              {capitalizeFirstLetter(hiddenPath)}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>
                <CustomSeparator />
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={`group-${path}`}>
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link href={href}>{capitalizeFirstLetter(path)}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{capitalizeFirstLetter(path)}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <CustomSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
