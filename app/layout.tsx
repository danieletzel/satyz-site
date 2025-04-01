// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Satyz - AI Agents",
  description: "Agentes de IA autônomos para transformar sua operação.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}