"use client";

import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";

const AIWorkers = () => {
  const agents = [
    {
      id: 1,
      video: "/videos/caio.mp4",
      name: "CAIO",
      role: "Chief AI Officer",
      description:
        "Seu estrategista de IA. Cria, gerencia e otimiza agentes inteligentes para cada área do seu negócio.",
    },
    {
      id: 2,
      video: "/videos/linda.mp4",
      name: "Linda",
      role: "AI Copywriter",
      description:
        "Cria conteúdos afiados, persuasivos e prontos para escalar sua marca com o tom certo em qualquer canal.",
    },
    {
      id: 3,
      video: "/videos/ana.mp4",
      name: "Ana",
      role: "AI SDR",
      description:
        "Gera, qualifica e agenda leads com velocidade e personalização. Nunca perde uma oportunidade.",
    },
    {
      id: 4,
      video: "/videos/javi.mp4",
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

        <div className="mt-12.5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 xl:mt-20 xl:gap-12.5">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white p-5 shadow-lg transition-all hover:shadow-xl dark:bg-blacksection"
            >
              <div className="mb-4 w-full overflow-hidden rounded-xl">
                <video
                  src={agent.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[260px] object-cover rounded-xl"
                />
              </div>

              <motion.h3
                className="text-xl font-bold text-black dark:text-white"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {agent.name}
              </motion.h3>

              <motion.p
                className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-3"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {agent.role}
              </motion.p>

              <p className="text-sm text-black dark:text-white">
                {agent.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkers;