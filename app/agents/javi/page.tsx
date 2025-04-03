// JAVI PAGE
"use client";

import Header from "@/components/Header";
import AgentHero from "@/components/agents/AgentHero";
import AgentHighlights from "@/components/agents/AgentHighlights";
import AgentUseCases from "@/components/agents/AgentUseCases";
import AgentToolsSection from "@/components/agents/AgentToolsSection";
import IntegrationGrid from "@/components/agents/IntegrationGrid";
import FloatingInterviewButton from "@/components/agents/FloatingInterviewButton";
import Footer from "@/components/Footer";

export default function JaviPage() {
  return (
    <>
      <Header />

      <AgentHero
        name="JAVI"
        description="AI Phone Agent da Satyz. Faço chamadas com naturalidade e eficiência, representando sua marca com voz e atitude."
        videoSrc="/videos/javi.mp4"
        ctaLink="/#contact"
        resumeUrl="/downloads/javi-curriculo.pdf"
      />

      <AgentHighlights />

      <AgentUseCases
        agentName="JAVI"
        useCases={[
          {
            title: "Atendimento por voz",
            description: "Atende chamadas com empatia, assertividade e fluência.",
            icon: "/images/icons/voice.svg",
          },
          {
            title: "Qualificação ativa",
            description: "Conduz ligações estratégicas para captar informações e identificar oportunidades.",
            icon: "/images/icons/qualification.svg",
          },
          {
            title: "Cobrança e follow-up",
            description: "Executa scripts de cobrança, lembretes ou pesquisas com naturalidade.",
            icon: "/images/icons/followup.svg",
          },
        ]}
      />

      <AgentToolsSection
        tools={[
          {
            title: "Telefonia e Voz",
            logos: ["/logos/twilio.svg", "/logos/dialpad.svg", "/logos/aircall.svg"],
          },
          {
            title: "Roteiros e Fluxos",
            logos: ["/logos/notion.svg", "/logos/gong.svg"],
          },
          {
            title: "CRM e Histórico",
            logos: ["/logos/hubspot.svg", "/logos/zendesk.svg", "/logos/salesforce.svg"],
          },
        ]}
      />

      <IntegrationGrid
        title="JAVI integra com sua operação de atendimento"
        description="Conecta com telefonia, CRMs e fluxos automatizados para executar ligações com excelência."
        integrations={[
          "/images/integrations/twilio.svg",
          "/images/integrations/hubspot.svg",
          "/images/integrations/zendesk.svg",
          "/images/integrations/aircall.svg",
          "/images/integrations/notion.svg",
          "/images/integrations/salesforce.svg",
        ]}
      />

      <FloatingInterviewButton agentName="JAVI" />
      <Footer />
    </>
  );
}