"use client";

import AgentHero from "@/components/agents/AgentHero";
import AgentHighlights from "@/components/agents/AgentHighlights";

const CaioPage = () => {
  return (
    <>
      <AgentHero
        name="CAIO"
        description="Chief AI Officer da Satyz. Crio, gerencio e evoluo agentes de IA sob medida para todas as áreas do seu negócio."
        videoSrc="/videos/caio.mp4"
        ctaLink="/contact/caio"
      />
      <AgentHighlights />
    </>
  );
};

export default CaioPage;