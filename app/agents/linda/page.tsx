"use client";

import Header from "@/components/Header";
import AgentHero from "@/components/agents/AgentHero";
import AgentHighlights from "@/components/agents/AgentHighlights";
import AgentUseCases from "@/components/agents/AgentUseCases";
import AgentStatus from "@/components/agents/AgentStatus";
import AgentToolsSection from "@/components/agents/AgentToolsSection";
import FloatingInterviewButton from "@/components/agents/FloatingInterviewButton";
import IntegrationGrid from "@/components/agents/IntegrationGrid";
import Footer from "@/components/Footer";

export default function LindaPage() {
  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Status do agente */}
      <AgentStatus status="Autopilot ativado" updatedAt="há 2 minutos" />

      {/* Hero */}
      <AgentHero
        name="Linda"
        description="Copywriter de IA da Satyz. Escrevo textos que vendem, performam e encantam – em qualquer canal e com seu tom de voz."
        videoSrc="/videos/linda.mp4"
        ctaLink="/contact/linda"
      />

      {/* Especialidades e tecnologias */}
      <AgentHighlights />

      {/* Casos de uso */}
      <AgentUseCases
        useCases={[
          {
            title: "Criação de Landing Pages",
            description: "Escreve páginas completas com foco em conversão, SEO e branding.",
            icon: "/images/icons/landing.svg",
          },
          {
            title: "Campanhas de E-mail",
            description: "Cria réguas, ganchos e textos com linguagem adequada a cada público.",
            icon: "/images/icons/email.svg",
          },
          {
            title: "Posts e Conteúdo de Blog",
            description: "Planeja e executa conteúdo para SEO, autoridade e geração de demanda.",
            icon: "/images/icons/blog.svg",
          },
        ]}
      />

      {/* Ferramentas utilizadas */}
      <AgentToolsSection />

      {/* Integrações */}
      <IntegrationGrid
        title="Linda conecta com suas ferramentas de conteúdo e automação"
        description="Entrega textos integrados ao seu stack de CRM, e-mail, sites, blogs e analytics."
        integrations={[
          "/images/integrations/notion.svg",
          "/images/integrations/mailchimp.svg",
          "/images/integrations/hubspot.svg",
          "/images/integrations/wordpress.svg",
          "/images/integrations/google-docs.svg",
          "/images/integrations/figma.svg",
          "/images/integrations/activecampaign.svg",
          "/images/integrations/google-analytics.svg",
        ]}
      />

      {/* Botão flutuante */}
      <FloatingInterviewButton link="/contact/linda" />

      {/* Footer igual à home */}
      <Footer />
    </>
  );
}