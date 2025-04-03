import Header from "@/components/Header";
import AgentHero from "@/components/agents/AgentHero";
import AgentHighlights from "@/components/agents/AgentHighlights";
import AgentUseCases from "@/components/agents/AgentUseCases";
import AgentToolsSection from "@/components/agents/AgentToolsSection";
import IntegrationGrid from "@/components/agents/IntegrationGrid";
import FloatingInterviewButton from "@/components/agents/FloatingInterviewButton";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana – AI SDR da Satyz",
  description:
    "Ana é a SDR de IA da Satyz. Faz prospecção, qualificação de leads e follow-ups automatizados para escalar suas vendas.",
  openGraph: {
    title: "Ana – AI SDR da Satyz",
    description:
      "Ana prospecta, qualifica e agenda reuniões com precisão. Um agente SDR completo, automatizado e integrado à sua stack comercial.",
    url: "https://satyz.io/agents/ana",
    siteName: "Satyz",
    type: "profile",
    images: [
      {
        url: "/images/og/ana-og.png",
        width: 1200,
        height: 630,
        alt: "Ana - AI SDR da Satyz",
      },
    ],
  },
};

export default function AnaPage() {
  return (
    <>
      <Header />

      <AgentHero
        name="Ana"
        description="AI SDR da Satyz. Prospecto, qualifico e conecto leads com os humanos certos, no tempo certo."
        videoSrc="/videos/ana.mp4"
      />

      <AgentHighlights />

      <AgentUseCases
        agentName="Ana"
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
        title="Ana integra com sua stack comercial"
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

      <FloatingInterviewButton agentName="Ana" />
      <Footer />
    </>
  );
}