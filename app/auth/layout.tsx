// app/(auth)/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Satyz",
    template: "%s | Satyz",
  },
  description: "A plataforma de AI Workers para times de alta performance.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}