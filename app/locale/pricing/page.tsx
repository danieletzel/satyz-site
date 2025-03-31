import Pricing from "@/components/Pricing";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Pricing.meta");
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PricingPage() {
  return <Pricing />;
}