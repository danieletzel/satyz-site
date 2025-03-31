// app/[locale]/page.tsx
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";

import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FeaturesCarousel from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

type Props = {
  params: {
    locale: string;
  };
};

const locales = ["en", "pt-BR", "es"];

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "common" });

  return {
    title: t("home.title"),
    description: t("home.description"),
  };
}

export default async function Page({ params: { locale } }: Props) {
  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FeaturesCarousel />
      <Integration />
      <CTA />
      <FAQ />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}