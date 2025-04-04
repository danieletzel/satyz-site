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
  title: "Leon – AI Recruiter da Satyz",
  description:
    "Leon é o AI Recruiter da Satyz. Analisa currículos, conduz entrevistas automatizadas e seleciona talentos com precisão e velocidade.",
  openGraph: {
    title: "Leon – AI Recruiter da Satyz",
    description:
      "Leon analisa currículos, conduz entrevistas e gera shortlist de candidatos com base em critérios personalizados.",
    url: "https://satyz.io/agents/leon",
    siteName: "Satyz",
    type: "profile",
    images: [
      {
        url: "/images/og/leon-og.png",
        width: 1200,
        height: 630,
        alt: "Leon - AI Recruiter da Satyz",
      },
    ],
  },
};

export default function LeonPage() {
  return (
    <>
      <Header />

      <AgentHero
        name="Leon"
        description="AI Recruiter da Satyz. Analiso currículos, entrevisto candidatos e seleciono os melhores talentos para sua empresa, com rapidez e precisão."
        videoSrc="/videos/leon.mp4"
      />

      <AgentHighlights />

      <AgentUseCases
        agentName="Leon"
        useCases={[
          {
            title: "Triagem de Currículos",
            description:
              "Analisa centenas de CVs em segundos e identifica os mais aderentes à vaga.",
            icon: "/images/icons/cv-scan.svg",
          },
          {
            title: "Entrevistas Automatizadas",
            description:
              "Conduz entrevistas iniciais com perguntas adaptativas e análise de respostas.",
            icon: "/images/icons/interview.svg",
          },
          {
            title: "Shortlist Inteligente",
            description:
              "Gera um ranking dos melhores candidatos com base em critérios personalizados.",
            icon: "/images/icons/shortlist.svg",
          },
        ]}
      />

      <AgentToolsSection
        tools={[
          {
            title: "ATS & RH",
            logos: ["/logos/gupy.svg", "/logos/kenoby.svg", "/logos/greenhouse.svg"],
          },
          {
            title: "Análise de CVs",
            logos: ["/logos/hiretual.svg", "/logos/humantent.svg"],
          },
          {
            title: "Entrevistas & Video",
            logos: ["/logos/zoom.svg", "/logos/hireflix.svg"],
          },
        ]}
      />

      <IntegrationGrid
        title="Leon se conecta à sua stack de RH"
        description="Integra com plataformas de recrutamento, análise de perfis e ferramentas de entrevista para agilizar seu processo seletivo."
        integrations={[
          "/images/integrations/gupy.svg",
          "/images/integrations/kenoby.svg",
          "/images/integrations/greenhouse.svg",
          "/images/integrations/zoom.svg",
          "/images/integrations/hireflix.svg",
          "/images/integrations/notion.svg",
        ]}
      />

      <FloatingInterviewButton agentName="Leon" />
      <Footer />
    </>
  );
}