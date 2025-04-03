"use client";

import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FunFact from "@/components/FunFact";
import FeaturesTab from "@/components/FeaturesTab";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import Pricing from "@/components/Pricing"; // ❌ Temporariamente oculto

export const metadata: Metadata = {
  title: "Satyz – Agentes de Inteligência Artificial sob demanda",
  description:
    "Contrate agentes de IA prontos para atuar na sua operação. Copys, SDRs, recrutadores e phone agents que entregam resultados desde o primeiro dia.",
  openGraph: {
    title: "Satyz – Agentes de Inteligência Artificial sob demanda",
    description:
      "Transforme seu time com agentes de IA treinados para marketing, vendas, atendimento e RH. Personalizados, autônomos e integrados.",
    url: "https://satyz.io",
    siteName: "Satyz",
    type: "website",
    images: [
      {
        url: "/images/og/home-og.png",
        width: 1200,
        height: 630,
        alt: "Satyz – Agentes de IA sob demanda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyz – Agentes de Inteligência Artificial sob demanda",
    description:
      "Contrate agentes de IA prontos para atuar na sua operação. Copys, SDRs, recrutadores e phone agents que entregam resultados desde o primeiro dia.",
    images: ["/images/og/home-og.png"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <FunFact />
      <FeaturesTab />
      <About />
      <FAQ />
      <Integration />
      <CTA />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}