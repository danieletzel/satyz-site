// components/agents/AgentHero.tsx
"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ThemeToggler from '@/components/ThemeToggler';
import Link from "next/link";
import { useEffect, useState } from "react";

const AgentHero = () => {
  const [autopilotActive, setAutopilotActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAutopilotActive((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white dark:bg-black py-12 lg:py-24">
      <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <ThemeToggler />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white whitespace-nowrap">
            Olá, meu nome é {" "}
            <span className="text-primary">
              <Typewriter
                words={["CAIO."]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-manatee max-w-xl mx-auto lg:mx-0">
            Sou o Chief AI Officer da Satyz. Crio, gerencio e otimizo agentes inteligentes sob medida para transformar sua operação.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 text-white text-lg font-medium shadow-md hover:bg-primaryho transition-transform hover:scale-105"
            >
              Me entreviste
            </a>

            <a
              href="/downloads/caio-curriculo.pdf"
              download
              className="inline-block rounded-full border border-primary px-8 py-3 text-primary text-lg font-medium hover:bg-primary hover:text-white transition-transform hover:scale-105"
            >
              Baixar CV
            </a>
          </div>
        </div>

        {/* Vídeo com tags animadas */}
        <div className="flex-1 relative">
          <div className="relative rounded-2xl overflow-hidden shadow-solid-5">
            <video
              src="/videos/caio.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-black/70 text-white text-sm px-4 py-1 rounded-full">CAIO, o C.A.I.O.</span>
            <motion.span
              animate={{ opacity: autopilotActive ? 1 : 0.3 }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "mirror" }}
              className="bg-primary text-white text-sm px-4 py-1 rounded-full shadow"
            >
              Autopilot ativado
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentHero;
