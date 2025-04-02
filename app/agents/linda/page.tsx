"use client";

import Header from "@/components/Header";
import AgentHero from "@/components/agents/AgentHero";
import AgentStatus from "@/components/agents/AgentStatus";
import AgentHighlights from "@/components/agents/AgentHighlights";
import AgentUseCases from "@/components/agents/AgentUseCases";
import AgentToolsSection from "@/components/agents/AgentToolsSection";
import IntegrationGrid from "@/components/agents/IntegrationGrid";
import FloatingInterviewButton from "@/components/agents/FloatingInterviewButton";
import Footer from "@/components/Footer";

export default function LindaPage() {
  return (
    <>
      {/* Header */}
      <Header />


      {/* Hero */}
      <AgentHero
        name="LINDA"
        description="AI Copywriter da Satyz. Crio conteúdos irresistíveis e personalizados para sua marca escalar com impacto."
        videoSrc="/videos/linda.mp4"
        ctaLink="/contact/linda"
      />

      {/* Especialidades e Tecnologias */}
      <AgentHighlights />

      {/* Casos de uso - específicos para Copy */}
      <AgentUseCases
        useCases={[
          {
            title: "Criação de Conteúdo",
            description: "Textos para redes sociais, blogs, landing pages e e-mails. Tudo com seu tom de voz.",
            icon: "/images/icons/content.svg",
          },
          {
            title: "Campanhas de Marketing",
            description: "Cria campanhas multicanal persuasivas com textos que convertem.",
            icon: "/images/icons/campaign.svg",
          },
          {
            title: "Teste A/B Automatizado",
            description: "Gera variações de texto para testar e otimizar sua comunicação.",
            icon: "/images/icons/abtest.svg",
          },
        ]}
      />

      {/* Ferramentas utilizadas */}
      <AgentToolsSection
        tools={[
          {
            title: "Copywriting e AI",
            logos: ["/logos/jasper.svg", "/logos/copyai.svg", "/logos/anyword.svg"],
          },
          {
            title: "Análise de SEO",
            logos: ["/logos/semrush.svg", "/logos/ahrefs.svg"],
          },
          {
            title: "Gestão de Conteúdo",
            logos: ["/logos/notion.svg", "/logos/airtable.svg"],
          },
          {
            title: "Integração com CRMs",
            logos: ["/logos/hubspot.svg", "/logos/mailchimp.svg"],
          },
        ]}
      />

      {/* Integrações */}
      <IntegrationGrid
        title="LINDA se conecta às suas ferramentas de marketing"
        description="Amplifique sua comunicação com integrações que otimizam criação, distribuição e análise."
        integrations={[
          "/images/integrations/hubspot.svg",
          "/images/integrations/mailchimp.svg",
          "/images/integrations/semrush.svg",
          "/images/integrations/wordpress.svg",
          "/images/integrations/notion.svg",
          "/images/integrations/google-docs.svg",
        ]}
      />

      {/* Botão flutuante */}
      <FloatingInterviewButton link="/contact/linda" />

      {/* Footer */}
      <Footer />
    </>
  );
}
