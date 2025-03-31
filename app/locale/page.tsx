// app/[locale]/page.tsx
import { getTranslations } from 'next-intl/server';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Home from '@/components/Home';
import { Metadata } from 'next';

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'common' });

  return {
    title: t('home.title'),
    description: t('home.description'),
  };
}

export default async function Page({ params: { locale } }: Props) {
  // For SSR translations to work properly
  unstable_setRequestLocale(locale);

  const locales = ['en', 'pt-BR', 'es'];
  if (!locales.includes(locale)) notFound();

  return <Home />;
}