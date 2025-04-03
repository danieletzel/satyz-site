// ANA PAGE
"use client";

import Header from "@/components/Header";
import AgentHero from "@/components/agents/AgentHero";
import AgentHighlights from "@/components/agents/AgentHighlights";
import AgentUseCases from "@/components/agents/AgentUseCases";
import AgentToolsSection from "@/components/agents/AgentToolsSection";
import IntegrationGrid from "@/components/agents/IntegrationGrid";
import FloatingInterviewButton from "@/components/agents/FloatingInterviewButton";
import Footer from "@/components/Footer";

export default function AnaPage() {
  return (
    <>
      <Header />

      <AgentHero
        name="ANA"
        description="AI SDR da Satyz. Prospecto, qualifico e conecto leads com os humanos certos, no tempo certo."
        videoSrc="/videos/ana.mp4"
        ctaLink="/#contact"
        resumeUrl="/downloads/ana-curriculo.pdf"
      />

      <AgentHighlights />

      <AgentUseCases
        agentName="ANA"
        useCases={[
          {
            title: "Prospecção automatizada",
            description: "Envia mensagens personalizadas e se conecta com leads no timing ideal.",
            icon: "/images/icons/outreach.svg",
          },
          {
            title: "Qualificação de leads",
            description: "Faz perguntas inteligentes e entrega apenas leads prontos para vendas.",
            icon: "/images/icons/qualification.svg",
          },
          {
            title: "Follow-ups inteligentes",
            description: "Segue playbooks com persistência e timing baseado em intenção.",
            icon: "/images/icons/followup.svg",
          },
        ]}
      />

      <AgentToolsSection
        tools={[
          {
            title: "Prospecção & Dados",
            logos: ["/logos/apollo.svg", "/logos/lusha.svg", "/logos/zoominfo.svg"],
          },
          {
            title: "Email & Cadência",
            logos: ["/logos/instantly.svg", "/logos/mailshake.svg", "/logos/woodpecker.svg"],
          },
          {
            title: "Engajamento & CRM",
            logos: ["/logos/hubspot.svg", "/logos/outreach.svg", "/logos/pipedrive.svg"],
          },
        ]}
      />

      <IntegrationGrid
        title="ANA integra com sua stack comercial"
        description="Conecta com ferramentas de prospecção, CRM e automação para atingir leads no melhor canal e momento."
        integrations={[
          "/images/integrations/pipedrive.svg",
          "/images/integrations/salesforce.svg",
          "/images/integrations/hubspot.svg",
          "/images/integrations/outlook.svg",
          "/images/integrations/gmail.svg",
          "/images/integrations/linkedin.svg",
        ]}
      />

      <FloatingInterviewButton agentName="ANA" />
      <Footer />
    </>
  );
}
