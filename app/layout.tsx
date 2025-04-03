import "@/styles/globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Satyz",
  description: "Agentes de IA prontos para trabalhar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={GeistSans.className}>
      <body>{children}</body>
    </html>
  );
}