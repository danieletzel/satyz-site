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

export default function AnaPage() {
  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Status do agente */}
      <AgentStatus status="Autopilot ativado" updatedAt="há 2 minutos" />

      {/* Hero */}
      <AgentHero
        name="ANA"
        description="AI SDR da Satyz. Qualifico leads, faço follow-ups automáticos e preencho seu CRM como ninguém."
        videoSrc="/videos/ana.mp4"
        ctaLink="/contact/ana"
      />

      {/* Especialidades e tecnologias */}
      <AgentHighlights />

      {/* Casos de uso */}
      <AgentUseCases
        useCases={[
          {
            title: "Prospecção ativa",
            description:
              "Identifico e abordo leads ideais via e-mail, LinkedIn ou WhatsApp.",
            icon: "/images/icons/prospect.svg",
          },
          {
            title: "Follow-up automático",
            description:
              "Envio mensagens no timing certo para aumentar sua taxa de resposta.",
            icon: "/images/icons/followup.svg",
          },
          {
            title: "Preenchimento de CRM",
            description:
              "Atualizo dados no seu CRM em tempo real com base nas interações.",
            icon: "/images/icons/crm.svg",
          },
        ]}
      />

      {/* Ferramentas utilizadas */}
      <AgentToolsSection
        tools={[
          {
            title: "Outreach e automação",
            logos: [
              "/logos/outreach.svg",
              "/logos/apollo.svg",
              "/logos/salesloft.svg",
            ],
          },
          {
            title: "CRM e dados",
            logos: [
              "/logos/salesforce.svg",
              "/logos/pipedrive.svg",
              "/logos/clearbit.svg",
            ],
          },
          {
            title: "Engajamento",
            logos: [
              "/logos/whatsapp.svg",
              "/logos/gmail.svg",
              "/logos/linkedin.svg",
            ],
          },
        ]}
      />

      {/* Integrações */}
      <IntegrationGrid
        title="ANA se conecta com seus canais e CRM"
        description="Garante fluidez entre prospecção, cadência e atualização de dados."
        integrations={[
          "/images/integrations/salesforce.svg",
          "/images/integrations/pipedrive.svg",
          "/images/integrations/whatsapp.svg",
          "/images/integrations/gmail.svg",
          "/images/integrations/linkedin.svg",
        ]}
      />

      {/* Botão flutuante */}
      <FloatingInterviewButton link="/contact/ana" />

      {/* Footer igual à home */}
      <Footer />
    </>
  );
}
