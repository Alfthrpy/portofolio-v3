import "@/styles/globals.css";
import { archivoBlack, workSans, spaceMono } from "@/constants/font";
import { Chrome } from "@/components";

export const metadata = {
  title: "Muhammad Rizki Al-Fathir — Backend & ML Engineer",
  description:
    "Backend and ML Engineer building high-throughput data platforms, agentic AI pipelines, and full-stack apps.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${workSans.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <head />
      <body>
        <Chrome>{children}</Chrome>
      </body>
    </html>
  );
}
