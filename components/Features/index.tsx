"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";

const AIWorkers = () => {
  const agents = [
    {
      id: 1,
      icon: "/images/icon/caio.svg",
      name: "CAIO",
      role: "Chief AI Officer",
      description:
        "Seu estrategista de IA. Cria, gerencia e otimiza agentes inteligentes para cada área do seu negócio.",
    },
    {
      id: 2,
      icon: "/images/icon/linda.svg",
      name: "Linda",
      role: "AI Copywriter",
      description:
        "Cria conteúdos afiados, persuasivos e prontos para escalar sua marca com o tom certo em qualquer canal.",
    },
    {
      id: 3,
      icon: "/images/icon/ana.svg",
      name: "Ana",
      role: "AI SDR",
      description:
        "Gera, qualifica e agenda leads com velocidade e personalização. Nunca perde uma oportunidade.",
    },
    {
      id: 4,
      icon: "/images/icon/javi.svg",
      name: "Javi",
      role: "AI Phone Agent",
      description:
        "Atende chamadas, entende intenções e resolve solicitações em tempo real com naturalidade surpreendente.",
    },
  ];

  return (
    <section id="ai-workers" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "AI WORKERS",
            subtitle: "Conheça seu novo time",
            description:
              "Cada agente da Satyz é treinado para uma função específica, com inteligência adaptativa e performance constante.",
          }}
        />

        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-4 xl:mt-20 xl:gap-12.5">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
            >
              <div className="relative flex h-16 w-16 items-center justify-center rounded-[4px] bg-primary">
                <Image src={agent.icon} width={36} height={36} alt={agent.name} />
              </div>
              <h3 className="mb-1 mt-7.5 text-xl font-bold text-black dark:text-white">
                {agent.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                {agent.role}
              </p>
              <p className="text-sm text-black dark:text-white">{agent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkers;
