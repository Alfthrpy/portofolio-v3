"use client";

import { usePathname } from "next/navigation";
import { Contact, Navbar, Footer, GrainOverlay } from "@/components";

const CHROMELESS_ROUTES = ["/auth/superadmin", "/dashboard/superadmin"];

export default function Chrome({ children }) {
  const pathname = usePathname();
  const isChromeless = CHROMELESS_ROUTES.includes(pathname);

  if (isChromeless) {
    return <>{children}</>;
  }

  return (
    <>
      <GrainOverlay />
      <Navbar />
      <Contact />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
