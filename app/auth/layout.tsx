// app/auth/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Satyz | Autenticação",
    template: "%s | Satyz",
  },
  description: "Acesse sua conta ou crie uma nova na Satyz.",
  openGraph: {
    title: "Satyz | Autenticação",
    description: "Acesse sua conta ou crie uma nova na Satyz.",
    url: "https://satyz.io/auth",
    siteName: "Satyz",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Satyz Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyz | Autenticação",
    description: "Acesse sua conta ou crie uma nova na Satyz.",
    site: "@satyz_ai",
    creator: "@satyz_ai",
    images: ["/android-chrome-512x512.png"],
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}