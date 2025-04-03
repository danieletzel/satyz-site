import dynamic from "next/dynamic";
import { Metadata } from "next";

// Componentes principais da página (somente os usados)
const Hero = dynamic(() => import("@/components/Hero"));
const FeaturesTab = dynamic(() => import("@/components/FeaturesTab"));
const AgentSlider = dynamic(() => import("@/components/AgentSlider"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Blog = dynamic(() => import("@/components/Blog"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/Header"));

export const metadata: Metadata = {
  title: "Satyz – Recrutamento de agentes de IA prontos para trabalhar",
  description: "Conheça a Satyz: encontre, entreviste e contrate agentes de inteligência artificial prontos para operar dentro da sua empresa.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <FeaturesTab />
        <AgentSlider />
        <Pricing />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}