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
    <>
      {/* Seção 1: Hero */}
      <section className="pt-36 pb-20 px-4 md:px-10 xl:px-0 max-w-c-1235 mx-auto text-center">
        <div className="mx-auto max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4"
          >
            Olá, meu nome é{" "}
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
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-manatee mb-8"
          >
            Chief AI Officer da Satyz. Crio, gerencio e evoluo agentes de IA sob medida para todas as áreas do seu negócio.
          </motion.p>

          <Link
            href="/contact/caio"
            className="inline-block rounded-full bg-primary px-8 py-3 text-white text-sm font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primaryho"
          >
            Me entreviste
          </Link>
        </div>

        <div className="mt-16 max-w-xl mx-auto rounded-xl overflow-hidden shadow-solid-6">
          <VideoPlayer src="/videos/caio.mp4" />
        </div>
      </section>

      {/* Seção 2: Cards bonitos */}
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
    </>
  );
}