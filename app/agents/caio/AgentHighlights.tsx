"use client";

import { motion } from "framer-motion";

const specialties = [
  "Criação e orquestração de agentes de IA",
  "Estratégia de automação para empresas",
  "Integrações com CRMs, ERPs e APIs",
  "Gestão e monitoramento de IA em produção",
];

const technologies = [
  "OpenAI GPT-4 Turbo",
  "LangChain, Pinecone, Redis",
  "FastAPI, Next.js, Supabase",
  "AWS, Vercel, GitHub Actions",
];

export default function AgentHighlights() {
  return (
    <section className="bg-zumthor dark:bg-dark-section py-20 px-4 md:px-10 xl:px-0">
      <div className="max-w-c-1235 mx-auto">
        {/* Especialidades */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-10 text-center">
            Minhas Especialidades
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-solid-4 transition-all duration-300 hover:brightness-110"
              >
                <p className="text-base text-black dark:text-manatee">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tecnologias */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-10 text-center">
            Tecnologias & Frameworks
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-6 shadow-solid-4 transition-all duration-300 hover:brightness-110"
              >
                <p className="text-base text-black dark:text-manatee">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}