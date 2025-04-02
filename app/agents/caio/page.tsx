"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import VideoPlayer from "@/components/Common/VideoPlayer";
import Link from "next/link";

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
            className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6"
          >
            <span>Olá, meu nome é </span>
            <span className="text-primary">
              <Typewriter
                words={["CAIO!"]}
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
            className="text-xl text-gray-700 dark:text-manatee max-w-xl mb-8"
          >
            Sou o Chief AI Officer da Satyz. Crio, gerencio e otimizo agentes de inteligência artificial
            para todas as áreas do seu negócio. Minha missão é garantir que sua operação tenha a IA
            como aliada estratégica de verdade — e não só como um chatbot.
          </motion.p>

          <Link
            href="/contact/caio"
            className="inline-block mb-8 text-white bg-primary hover:bg-primaryho rounded-full px-6 py-3 text-base font-medium transition duration-300"
          >
            Me entreviste
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">Minhas especialidades</h2>
              <ul className="list-disc pl-5 text-gray-800 dark:text-manatee">
                <li>Criação e orquestração de agentes de IA</li>
                <li>Estratégia de automação para empresas</li>
                <li>Integrações com CRMs, ERPs e APIs</li>
                <li>Gestão e monitoramento de IA em produção</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white mb-2">Tecnologias e frameworks</h2>
              <ul className="list-disc pl-5 text-gray-800 dark:text-manatee">
                <li>OpenAI GPT-4 Turbo</li>
                <li>LangChain, Pinecone, Redis</li>
                <li>FastAPI, Next.js, Supabase</li>
                <li>AWS, Vercel, GitHub Actions</li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Vídeo */}
        <div className="w-full lg:w-1/2 max-w-md">
          <VideoPlayer src="/videos/caio.mp4" />
        </div>
      </div>
    </section>
  );
}