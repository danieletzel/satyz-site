import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import type { LayoutProps } from "next";

const locales = ["en", "pt-BR", "es"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "Satyz - AI Agents",
  description: "Agentes de IA autônomos para transformar sua operação.",
};

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<{ locale: string }>) {
  const { locale } = params;

  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`@/locales/${locale}/common.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}