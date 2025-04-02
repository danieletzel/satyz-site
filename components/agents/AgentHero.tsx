"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ThemeToggler from "../ThemeToggler";

const AgentHero = () => {
  return (
    <section className="bg-white dark:bg-black py-12 lg:py-24">
      <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
        {/* Texto */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 flex justify-center lg:justify-start">
            <ThemeToggler />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black dark:text-white whitespace-nowrap">
            Olá, meu nome é{" "}
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

          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block rounded-full bg-primary px-8 py-3 text-white text-lg font-medium shadow-md hover:bg-primaryho transition-transform hover:scale-105"
            >
              Me entreviste
            </a>
          </div>
        </div>

        {/* Vídeo */}
        <div className="flex-1">
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
        </div>
      </div>
    </section>
  );
};

export default AgentHero;