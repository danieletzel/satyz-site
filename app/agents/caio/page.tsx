"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import VideoPlayer from "@/components/Common/VideoPlayer";
import Link from "next/link";

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

export default function CaioPage() {
  return (
    <section className="pt-40 pb-20 px-4 md:px-10 xl:px-0 max-w-c-1235 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="w-full lg:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-6"
          >
            <span>Olá, meu nome é </span>
            <span className="text-primary">
              <Typewriter
                words={["CAIO."]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-manatee max-w-xl mb-8"
          >
            Sou o Chief AI Officer da Satyz. Crio, gerencio e otimizo agentes de inteligência artificial
            para todas as áreas do seu negócio. Minha missão é garantir que sua operação tenha a IA
            como aliada estratégica de verdade — e não só como um chatbot.
          </motion.p>

          <Link
            href="/contact/caio"
            className="inline-block mb-10 text-white bg-primary hover:bg-primaryho rounded-full px-6 py-3 text-base font-medium transition duration-300"
          >
            Me entreviste
          </Link>

          {/* Especialidades */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Minhas especialidades
            </h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 group">
              {specialties.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="min-w-[240px] transform rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-4 shadow-solid-2 transition duration-300 hover:brightness-110 group-hover:opacity-60 hover:!opacity-100"
                >
                  <p className="text-sm text-gray-800 dark:text-manatee">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tecnologias */}
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-4">
              Tecnologias e frameworks
            </h2>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 group">
              {technologies.map((item, index) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  key={index}
                  className="min-w-[240px] transform rounded-xl border border-stroke dark:border-strokedark bg-white dark:bg-blacksection p-4 shadow-solid-2 transition duration-300 hover:brightness-110 group-hover:opacity-60 hover:!opacity-100"
                >
                  <p className="text-sm text-gray-800 dark:text-manatee">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Vídeo */}
        <div className="w-full lg:w-1/2 max-w-md">
          <VideoPlayer src="/videos/caio.mp4" />
        </div>
      </div>
    </section>
  );
}