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

export default function CaioPage() {
  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Status do agente */}
      <AgentStatus status="Autopilot ativado" updatedAt="há 2 minutos" />

      {/* Hero */}
      <AgentHero
        name="CAIO"
        description="Chief AI Officer da Satyz. Crio, gerencio e evoluo agentes de IA sob medida para todas as áreas do seu negócio."
        videoSrc="/videos/caio.mp4"
        ctaLink="/contact/caio"
      />

      {/* Especialidades e tecnologias */}
      <AgentHighlights />

      {/* Casos de uso */}
      <AgentUseCases
        useCases={[
          {
            title: "Agente de Atendimento",
            description: "Responde dúvidas, escala para humanos e aprende com feedbacks.",
            icon: "/images/icons/support.svg",
          },
          {
            title: "Onboarding de Clientes",
            description: "Automatiza etapas iniciais e educa o cliente com personalização.",
            icon: "/images/icons/onboarding.svg",
          },
          {
            title: "Assistente Interno",
            description: "Centraliza informações da empresa e responde à equipe em tempo real.",
            icon: "/images/icons/internal.svg",
          },
        ]}
      />

      {/* Ferramentas utilizadas */}
      <AgentToolsSection
        tools={[
          {
            title: "Dados de contato",
            logos: ["/logos/cognism.svg", "/logos/apollo.svg"],
          },
          {
            title: "Sales Engagement",
            logos: ["/logos/salesloft.svg", "/logos/outreach.svg", "/logos/gong.svg"],
          },
          {
            title: "Dados de intenção",
            logos: ["/logos/clearbit.svg", "/logos/6sense.svg", "/logos/revb.svg"],
          },
          {
            title: "LinkedIn Automation",
            logos: ["/logos/expandi.svg", "/logos/octopus.svg", "/logos/dripify.svg"],
          },
          {
            title: "Pesquisa e personalização",
            logos: ["/logos/regie.svg"],
          },
          {
            title: "Email warmup",
            logos: ["/logos/instantly.svg"],
          },
        ]}
      />

      {/* Integrações */}
      <IntegrationGrid
        title="CAIO integra com toda sua stack de GTM"
        description="Automatiza processos de vendas, marketing, suporte e operações conectando com suas ferramentas favoritas."
        integrations={[
          "/images/integrations/salesforce.svg",
          "/images/integrations/hubspot.svg",
          "/images/integrations/zendesk.svg",
          "/images/integrations/slack.svg",
          "/images/integrations/whatsapp.svg",
          "/images/integrations/gmail.svg",
          "/images/integrations/outlook.svg",
          "/images/integrations/pipedrive.svg",
        ]}
      />

      {/* Botão flutuante */}
      <FloatingInterviewButton link="/contact/caio" />

      {/* Footer igual à home */}
      <Footer />
    </>
  );
}