"use client";

import React, { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import { motion } from "framer-motion";
import Link from "next/link";

const AIWorkers = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const agents = [
    {
      id: 1,
      video: "/videos/leon.mp4",
      name: "Leon",
      role: "AI Recruiter",
      description:
        "Especialista em recrutamento, triagem de currículos e entrevistas inteligentes. Encontra o talento certo com precisão.",
      link: "/agents/leon",
    },
    {
      id: 2,
      video: "/videos/linda.mp4",
      name: "Linda",
      role: "AI Copywriter",
      description:
        "Cria conteúdos afiados, persuasivos e prontos para escalar sua marca com o tom certo em qualquer canal.",
      link: "/agents/linda",
    },
    {
      id: 3,
      video: "/videos/ana.mp4",
      name: "Ana",
      role: "AI SDR",
      description:
        "Gera, qualifica e agenda leads com velocidade e personalização. Nunca perde uma oportunidade.",
      link: "/agents/ana",
    },
    {
      id: 4,
      video: "/videos/javi.mp4",
      name: "Javi",
      role: "AI Phone Agent",
      description:
        "Atende chamadas, entende intenções e resolve solicitações em tempo real com naturalidade surpreendente.",
      link: "/agents/javi",
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
            <Link href={agent.link} key={agent.id} className="block">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`rounded-2xl p-5 shadow-lg transition-all duration-300 dark:bg-blacksection cursor-pointer bg-white hover:shadow-2xl transform hover:-translate-y-2 relative z-10 group ${
                  hoveredIndex !== null && hoveredIndex !== index ? "opacity-50 scale-95" : "opacity-100 scale-100"
                }`}
              >
                <div className="mb-4 w-full overflow-hidden rounded-xl">
                  <video
                    src={agent.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-[260px] object-cover rounded-xl group-hover:brightness-110"
                  />
                </div>

                <motion.h3
                  className="text-xl font-bold text-black dark:text-white group-hover:text-primary"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIWorkers;