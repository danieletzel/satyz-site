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

export const metadata = {
  title: "Satyz – Agentes de Inteligência Artificial sob demanda",
  description:
    "Contrate agentes de IA prontos para atuar na sua operação. Copys, SDRs, recrutadores e phone agents que entregam resultados desde o primeiro dia.",
  keywords:
    "inteligência artificial, agentes de IA, IA sob demanda, AI workers, SDR, copywriter, recrutamento com IA, agentes virtuais",
  openGraph: {
    title: "Satyz – Agentes de IA sob demanda",
    description:
      "Transforme sua operação com agentes de inteligência artificial treinados para entregar performance real desde o primeiro dia.",
    url: "https://satyz.io",
    siteName: "Satyz",
    images: [
      {
        url: "/images/satyz-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Satyz – Agentes de IA sob demanda",
      },
    ],
    type: "website",
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