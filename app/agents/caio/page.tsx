// ✅ Página do agente CAIO - com melhorias aplicadas

"use client";

import AgentHero from "@/components/agents/AgentHero";
import AgentHighlights from "@/components/agents/AgentHighlights";
import AgentUseCases from "@/components/agents/AgentUseCases";
import AgentStatus from "@/components/agents/AgentStatus";
import FloatingInterviewButton from "@/components/agents/FloatingInterviewButton";
import ThemeToggler from "@/components/Header/ThemeToggler";

export default function CaioPage() {
  return (
    <>
      {/* Botão de modo escuro */}
      <div className="fixed top-5 right-5 z-50">
        <ThemeToggler />
      </div>

      {/* Status Autopilot */}
      <AgentStatus status="Autopilot ativado" updatedAt="há 2 minutos" />

      {/* Hero com vídeo, nome, descrição, CTA */}
      <AgentHero
        name="CAIO"
        description="Chief AI Officer da Satyz. Crio, gerencio e evoluo agentes de IA sob medida para todas as áreas do seu negócio."
        videoSrc="/videos/caio.mp4"
        ctaLink="/contact/caio"
      />

      {/* Destaques técnicos (Especialidades e Tecnologias) */}
      <AgentHighlights />

      {/* Casos de Uso (cards como Alice) */}
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

      {/* Botão flutuante de entrevista */}
      <FloatingInterviewButton link="/contact/caio" />
    </>
  );
}
