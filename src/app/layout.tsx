"use client";

import { usePathname } from "next/navigation";

import "@/styles/globals.css";
import { geistSans, geistMono } from "@/constants/font";
import { Contact, Navbar, Footer, GrainOverlay } from "@/components";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const superadmin = ["/auth/superadmin", "/dashboard/superadmin"];

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth `}
    >
      <head />
      <body>
        {superadmin.includes(pathname) ? null : <GrainOverlay />}
        {superadmin.includes(pathname) ? null : <Navbar />}
        {superadmin.includes(pathname) ? null : <Contact />}
        <main className={`${superadmin.includes(pathname) ? "" : "container"}`}>
          {children}
        </main>
        {superadmin.includes(pathname) ? null : <Footer />}
      </body>
    </html>
  );
}
