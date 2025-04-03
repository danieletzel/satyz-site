import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Satyz — Agentes de IA sob demanda",
    template: "%s | Satyz",
  },
  description:
    "Agentes de IA sob demanda para vendas, atendimento, recrutamento, marketing e muito mais. Conheça o futuro do trabalho com a Satyz.",
  metadataBase: new URL("https://satyz.io"),
  openGraph: {
    title: "Satyz — Agentes de IA sob demanda",
    description:
      "Agentes de IA sob demanda para vendas, atendimento, recrutamento, marketing e muito mais.",
    url: "https://satyz.io",
    siteName: "Satyz",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyz — Agentes de IA sob demanda",
    description:
      "Agentes de IA sob demanda para vendas, atendimento, recrutamento, marketing e muito mais.",
    site: "@satyzai",
    creator: "@satyzai",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={GeistSans.className}>
      <head />
      <body className="bg-white text-black dark:bg-black dark:text-white antialiased">
        {children}
      </body>
    </html>
  );
}