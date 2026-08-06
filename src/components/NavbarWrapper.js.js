"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const isSticky = ["/"].includes(pathname);

  if (isSticky) return <Navbar isSticky={true} />;

  return <Navbar />;
}
